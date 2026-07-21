/**
 * 문의 폼 이메일 HTML 템플릿
 *
 * @description
 * 포트폴리오 브랜드(시안→퍼플 그라디언트, 다크 테마)에 맞춘
 * 운영자용 / 제출자용(접수 확인) 이메일 템플릿.
 *
 * @remarks
 * - 이메일 클라이언트 호환을 위해 table 레이아웃 + 인라인 스타일만 사용한다.
 * - 전달되는 값은 호출부(app/api/contact/route.ts)에서 이미 HTML 이스케이프된
 *   문자열이어야 한다. 이 모듈은 추가 이스케이프를 하지 않는다.
 */

const BRAND = {
  portfolioUrl: 'https://www.whitemouse.dev',
  blogUrl: 'https://blog.whitemouse.dev',
  githubUrl: 'https://github.com/kimkuns91',
  logoUrl: 'https://www.whitemouse.dev/images/logo.png',
  accent: '#00D9FF',
  purple: '#b46ef3',
  outerBg: '#f4f4f5',
  cardBg: '#18181B',
  subCardBg: '#1c1c22',
  border: 'rgba(255,255,255,0.08)',
  textLight: '#f4f4f5',
  textNeutral: '#a1a1aa',
  textMuted: '#71717a',
} as const;

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

/**
 * 이메일 공통 셸. 다크 배경 + 카드 + 로고 헤더 + 푸터로 감싼다.
 */
const emailShell = (inner: string): string => `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:${BRAND.outerBg}; -webkit-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.outerBg};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%; max-width:600px; background-color:${BRAND.cardBg}; border:1px solid ${BRAND.border}; border-radius:16px; overflow:hidden;">
          <!-- 그라디언트 상단 바 -->
          <tr>
            <td style="height:4px; line-height:4px; font-size:0; background-color:${BRAND.accent}; background-image:linear-gradient(90deg, ${BRAND.accent}, ${BRAND.purple});">&nbsp;</td>
          </tr>
          <!-- 로고 헤더 -->
          <tr>
            <td style="padding:28px 32px 8px 32px;">
              <img src="${BRAND.logoUrl}" alt="WhiteMouse.Dev" height="26" style="height:26px; display:block; border:0;" />
            </td>
          </tr>
          <!-- 본문 -->
          <tr>
            <td style="padding:12px 32px 32px 32px; font-family:${FONT_STACK};">
              ${inner}
            </td>
          </tr>
          <!-- 푸터 -->
          <tr>
            <td style="padding:20px 32px; border-top:1px solid ${BRAND.border}; font-family:${FONT_STACK};">
              <p style="margin:0 0 8px 0; font-size:12px; color:${BRAND.textMuted};">
                <a href="${BRAND.portfolioUrl}" style="color:${BRAND.textNeutral}; text-decoration:none;">Portfolio</a>
                &nbsp;·&nbsp;
                <a href="${BRAND.blogUrl}" style="color:${BRAND.textNeutral}; text-decoration:none;">Blog</a>
                &nbsp;·&nbsp;
                <a href="${BRAND.githubUrl}" style="color:${BRAND.textNeutral}; text-decoration:none;">GitHub</a>
              </p>
              <p style="margin:0; font-size:12px; color:${BRAND.textMuted};">
                © 2026 WhiteMouseDev. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

/** 라벨-값 한 줄. */
const field = (label: string, value: string): string => `
  <tr>
    <td style="padding:10px 0; border-bottom:1px solid ${BRAND.border};">
      <p style="margin:0 0 4px 0; font-size:12px; letter-spacing:0.04em; text-transform:uppercase; color:${BRAND.accent};">${label}</p>
      <p style="margin:0; font-size:15px; color:${BRAND.textLight}; word-break:break-word;">${value}</p>
    </td>
  </tr>`;

export interface OwnerEmailData {
  /** 이하 모두 HTML 이스케이프된 값 */
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** 링크용 원본 이메일 (mailto) */
  rawEmail: string;
}

/**
 * 운영자에게 보내는 문의 원본 메일.
 */
export const buildOwnerEmail = (data: OwnerEmailData): string => {
  const inner = `
    <h1 style="margin:0 0 6px 0; font-size:22px; font-weight:700; color:${BRAND.textLight};">
      새로운 문의가 도착했습니다
    </h1>
    <p style="margin:0 0 24px 0; font-size:14px; color:${BRAND.textNeutral};">
      포트폴리오 문의 폼을 통해 전달된 내용입니다.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${field('이름', data.name)}
      ${field('이메일', `<a href="mailto:${data.rawEmail}" style="color:${BRAND.accent}; text-decoration:none;">${data.email}</a>`)}
      ${data.phone ? field('전화번호', data.phone) : ''}
      ${data.service ? field('서비스', data.service) : ''}
    </table>

    <p style="margin:24px 0 8px 0; font-size:12px; letter-spacing:0.04em; text-transform:uppercase; color:${BRAND.accent};">메시지</p>
    <div style="padding:16px; background-color:${BRAND.subCardBg}; border:1px solid ${BRAND.border}; border-radius:10px; font-size:15px; line-height:1.7; color:${BRAND.textLight}; white-space:pre-wrap; word-break:break-word;">${data.message}</div>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
      <tr>
        <td style="border-radius:8px; background-color:${BRAND.accent};">
          <a href="mailto:${data.rawEmail}" style="display:inline-block; padding:12px 24px; font-size:14px; font-weight:600; color:#0d0d10; text-decoration:none;">답장하기</a>
        </td>
      </tr>
    </table>`;

  return emailShell(inner);
};

export interface SubmitterEmailData {
  /** HTML 이스케이프된 값 */
  name: string;
  message: string;
}

/**
 * 제출자에게 보내는 접수 확인(자동응답) 메일.
 *
 * @remarks
 * 운영자가 정한 고정 템플릿으로, 제출자가 보낸 내용을 인용해 확인시켜 준다.
 * 임의 본문을 임의 수신자에게 보내는 형태가 아니므로 발송 통로 남용을 방지한다.
 */
export const buildSubmitterEmail = (data: SubmitterEmailData): string => {
  const inner = `
    <h1 style="margin:0 0 6px 0; font-size:22px; font-weight:700; color:${BRAND.textLight};">
      문의가 정상적으로 접수되었습니다
    </h1>
    <p style="margin:0 0 20px 0; font-size:15px; line-height:1.7; color:${BRAND.textNeutral};">
      <strong style="color:${BRAND.textLight};">${data.name}</strong>님, 소중한 문의 감사합니다.<br />
      보내주신 내용을 잘 받았으며, 확인 후 빠른 시일 내에 회신드리겠습니다.
    </p>

    <p style="margin:0 0 8px 0; font-size:12px; letter-spacing:0.04em; text-transform:uppercase; color:${BRAND.accent};">보내주신 내용</p>
    <div style="padding:16px; background-color:${BRAND.subCardBg}; border:1px solid ${BRAND.border}; border-radius:10px; font-size:15px; line-height:1.7; color:${BRAND.textLight}; white-space:pre-wrap; word-break:break-word;">${data.message}</div>

    <p style="margin:24px 0 0 0; font-size:13px; line-height:1.7; color:${BRAND.textMuted};">
      본 메일은 발신 전용으로, 회신하셔도 답변받으실 수 없습니다.<br />
      추가 문의는 <a href="${BRAND.portfolioUrl}/contact" style="color:${BRAND.textNeutral};">포트폴리오 문의 페이지</a>를 이용해 주세요.
    </p>`;

  return emailShell(inner);
};
