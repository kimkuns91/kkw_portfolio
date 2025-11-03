import { NextRequest, NextResponse } from 'next/server';

import { IContactForm } from '@/types/contact';
import nodemailer from 'nodemailer';

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
 * - 에러 처리 및 로깅
 *
 * @environment
 * - EMAIL_USER: Gmail 계정
 * - EMAIL_PASS: Gmail 앱 비밀번호
 */
export async function POST(request: NextRequest) {
  try {
    const formData: IContactForm = await request.json();
    const { name, email, phone, service, message } = formData;

    // 필수 필드 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
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

    // HTML 이메일 템플릿
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; border-bottom: 2px solid #00D9FF; padding-bottom: 10px;">새로운 문의가 도착했습니다</h2>
        <div style="margin: 20px 0;">
          <p style="color: #555; margin: 10px 0;"><strong>이름:</strong> ${name}</p>
          <p style="color: #555; margin: 10px 0;"><strong>이메일:</strong> <a href="mailto:${email}" style="color: #00D9FF;">${email}</a></p>
          ${phone ? `<p style="color: #555; margin: 10px 0;"><strong>전화번호:</strong> ${phone}</p>` : ''}
          ${service ? `<p style="color: #555; margin: 10px 0;"><strong>서비스:</strong> ${service}</p>` : ''}
        </div>
        <div style="margin: 20px 0;">
          <p style="color: #555; margin-bottom: 10px;"><strong>메시지:</strong></p>
          <div style="color: #555; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; white-space: pre-wrap;">${message}</div>
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
      subject: `[포트폴리오] ${name}님으로부터 새로운 문의`,
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
