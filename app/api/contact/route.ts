import { NextRequest, NextResponse } from 'next/server';

import { IContactRequest } from '@/types/contact';
import nodemailer from 'nodemailer';

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

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
    const { name, email, phone, service, message, consent, turnstileToken } =
      formData;

    // 필수 필드 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
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

    // HTML 이메일 템플릿 (사용자 입력은 모두 이스케이프)
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: phone ? escapeHtml(phone) : '',
      service: service ? escapeHtml(service) : '',
      message: escapeHtml(message),
    };

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; border-bottom: 2px solid #00D9FF; padding-bottom: 10px;">새로운 문의가 도착했습니다</h2>
        <div style="margin: 20px 0;">
          <p style="color: #555; margin: 10px 0;"><strong>이름:</strong> ${safe.name}</p>
          <p style="color: #555; margin: 10px 0;"><strong>이메일:</strong> <a href="mailto:${safe.email}" style="color: #00D9FF;">${safe.email}</a></p>
          ${safe.phone ? `<p style="color: #555; margin: 10px 0;"><strong>전화번호:</strong> ${safe.phone}</p>` : ''}
          ${safe.service ? `<p style="color: #555; margin: 10px 0;"><strong>서비스:</strong> ${safe.service}</p>` : ''}
        </div>
        <div style="margin: 20px 0;">
          <p style="color: #555; margin-bottom: 10px;"><strong>메시지:</strong></p>
          <div style="color: #555; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; white-space: pre-wrap;">${safe.message}</div>
        </div>
        <p style="font-size: 0.9em; color: #777; border-top: 1px solid #ddd; padding-top: 10px; margin-top: 20px;">
          이 메일은 portfolio.whitemouse.dev의 문의 폼을 통해 자동으로 전송되었습니다.
        </p>
      </div>
    `;

    // 이메일 옵션
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [email, process.env.EMAIL_USER],
      subject: `[포트폴리오] ${safe.name}님으로부터 새로운 문의`,
      html: htmlContent,
      replyTo: email,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

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
