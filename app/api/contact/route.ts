import { NextRequest, NextResponse } from 'next/server';
import { buildOwnerEmail, buildSubmitterEmail } from '@/lib/emailTemplates';

import { EMAIL_REGEX, FIELD_LIMITS, PHONE_REGEX, SERVICE_OPTIONS } from '@/constants/contact';
import { IContactRequest } from '@/types/contact';
import nodemailer from 'nodemailer';

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const ALLOWED_SERVICES = new Set<string>(SERVICE_OPTIONS.map((o) => o.value));

/**
 * 이메일 HTML 템플릿에 삽입할 사용자 입력을 이스케이프한다.
 *
 * @description
 * 문의 내용이 그대로 HTML에 보간되면 메일 본문의 마크업이 깨지거나
 * 임의의 링크가 삽입될 수 있으므로 방지한다.
 */
const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/**
 * Cloudflare Turnstile 토큰을 검증한다.
 *
 * @remarks
 * TURNSTILE_SECRET_KEY가 설정되지 않은 환경에서는 검증을 건너뛴다.
 * 클라이언트(components/Contact/Turnstile.tsx)도 사이트 키가 없으면
 * 위젯을 렌더링하지 않으므로 동작이 일치한다.
 */
const verifyTurnstile = async (
  token: string | undefined,
  remoteIp: string | null
): Promise<boolean> => {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) return true;
  if (!token) return false;

  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) body.append('remoteip', remoteIp);

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    body,
  });

  const result: { success?: boolean } = await response.json();

  return result.success === true;
};

/**
 * Contact API Route Handler
 *
 * @description
 * 문의 폼 데이터를 받아 이메일로 전송하는 Route Handler
 *
 * @features
 * - Nodemailer를 통한 Gmail SMTP 전송
 * - 요청자와 관리자에게 동시 전송
 * - HTML 이메일 템플릿
 * - 개인정보 수집 동의 및 Turnstile 캡챠 검증
 * - 에러 처리 및 로깅
 *
 * @environment
 * - EMAIL_USER: Gmail 계정
 * - EMAIL_PASS: Gmail 앱 비밀번호
 * - TURNSTILE_SECRET_KEY: Cloudflare Turnstile 시크릿 키 (없으면 캡챠 검증 생략)
 */
export async function POST(request: NextRequest) {
  try {
    const formData: IContactRequest = await request.json();
    const { consent, turnstileToken } = formData;

    // 클라이언트 우회 요청에 대비해 서버에서도 문자열 정규화 후 재검증한다.
    const name = typeof formData.name === 'string' ? formData.name.trim() : '';
    const email =
      typeof formData.email === 'string' ? formData.email.trim() : '';
    const phone =
      typeof formData.phone === 'string' ? formData.phone.trim() : '';
    const service =
      typeof formData.service === 'string' ? formData.service.trim() : '';
    const message =
      typeof formData.message === 'string' ? formData.message.trim() : '';

    // 필수 필드 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // 형식 및 길이 검증 (클라이언트와 동일 기준)
    if (
      name.length > FIELD_LIMITS.name ||
      email.length > FIELD_LIMITS.email ||
      phone.length > FIELD_LIMITS.phone ||
      message.length < FIELD_LIMITS.messageMin ||
      message.length > FIELD_LIMITS.messageMax ||
      !EMAIL_REGEX.test(email) ||
      (phone && !PHONE_REGEX.test(phone)) ||
      (service && !ALLOWED_SERVICES.has(service))
    ) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    // 개인정보 수집 및 이용 동의 검증
    if (consent !== true) {
      return NextResponse.json(
        { error: 'Privacy consent is required' },
        { status: 400 }
      );
    }

    // 캡챠 검증
    const remoteIp =
      request.headers.get('cf-connecting-ip') ??
      request.headers.get('x-forwarded-for');

    if (!(await verifyTurnstile(turnstileToken, remoteIp))) {
      return NextResponse.json(
        { error: 'Captcha verification failed' },
        { status: 400 }
      );
    }

    // 환경 변수 검증
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials are not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Nodemailer transporter 생성
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 템플릿에 들어갈 사용자 입력은 모두 이스케이프한다.
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: phone ? escapeHtml(phone) : '',
      service: service ? escapeHtml(service) : '',
      message: escapeHtml(message),
    };

    // 메일 제목에는 HTML이 아닌 원본 이름을 쓰되, 헤더 인젝션 방지를 위해
    // 개행 문자를 제거한다.
    const subjectName = name.replace(/[\r\n]+/g, ' ');

    // 1) 운영자에게: 문의 원본
    const ownerMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `[포트폴리오] ${subjectName}님으로부터 새로운 문의`,
      html: buildOwnerEmail({
        name: safe.name,
        email: safe.email,
        phone: safe.phone,
        service: safe.service,
        message: safe.message,
        rawEmail: email,
      }),
      replyTo: email,
    };

    // 2) 제출자에게: 접수 확인(자동응답)
    const submitterMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '[WhiteMouseDev] 문의가 정상적으로 접수되었습니다',
      html: buildSubmitterEmail({
        name: safe.name,
        message: safe.message,
      }),
    };

    // 운영자 메일 전송은 반드시 성공해야 하며, 제출자 확인 메일 실패는
    // 전체 요청을 실패로 처리하지 않는다(운영자는 이미 문의를 수신).
    await transporter.sendMail(ownerMail);
    try {
      await transporter.sendMail(submitterMail);
    } catch (confirmError) {
      console.error('Confirmation email failed:', confirmError);
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        success: false,
      },
      { status: 500 }
    );
  }
}
