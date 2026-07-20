/**
 * 개인정보 수집 및 이용 안내 관련 상수 정의
 *
 * @description
 * whitemouse.dev(포트폴리오)와 blog.whitemouse.dev(티스토리 블로그)에
 * 공통으로 적용되는 개인정보 처리 안내 문서의 본문 데이터.
 */

export interface IPrivacySection {
  title: string;
  /** 문단 텍스트 */
  body?: string[];
  /** 정의 목록 형태로 표시할 항목 */
  items?: { term: string; description: string }[];
}

// 운영자 정보
export const PRIVACY_OWNER = {
  name: 'WhiteMouseDev (김건우)',
  email: 'whitemousedev@gmail.com',
} as const;

// 시행일
export const PRIVACY_EFFECTIVE_DATE = '2026년 7월 20일';

// 페이지 상단 텍스트
export const PRIVACY_PAGE_TEXT = {
  title: '개인정보 수집 및 이용 안내',
  description:
    'whitemouse.dev와 blog.whitemouse.dev는 이용자의 개인정보를 소중히 다루며, ' +
    '수집하는 항목과 이용 목적을 아래와 같이 안내드립니다.',
} as const;

export const PRIVACY_SECTIONS: IPrivacySection[] = [
  {
    title: '1. 수집하는 개인정보 항목',
    body: [
      '본 사이트는 회원가입 절차가 없으며, 문의하기 페이지의 문의 폼을 통해서만 개인정보를 수집합니다.',
    ],
    items: [
      { term: '필수 항목', description: '이름, 이메일 주소, 문의 내용' },
      { term: '선택 항목', description: '전화번호, 희망 서비스 유형' },
    ],
  },
  {
    title: '2. 개인정보의 수집 및 이용 목적',
    body: [
      '수집한 개인정보는 문의에 대한 답변과 연락 목적으로만 이용하며, 그 외의 목적으로는 이용하지 않습니다.',
      '마케팅 발송이나 광고 목적으로 이용하지 않으며, 별도의 데이터베이스에 저장하지 않습니다.',
    ],
  },
  {
    title: '3. 개인정보의 보유 및 이용 기간',
    body: [
      '문의 내용은 운영자의 이메일함으로 전송되어 보관되며, 문의 응대가 완료된 후 지체 없이 파기합니다.',
      '응대 종료 여부와 관계없이 수집일로부터 최대 1년이 지난 문의 내역은 파기합니다.',
      '이용자가 파기를 요청하는 경우 즉시 삭제합니다.',
    ],
  },
  {
    title: '4. 동의를 거부할 권리',
    body: [
      '이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.',
      '다만 필수 항목에 대한 동의를 거부하실 경우 문의 폼을 이용하실 수 없으며, ' +
        `이 경우 ${PRIVACY_OWNER.email}으로 직접 이메일을 보내주시면 동일하게 답변드립니다.`,
    ],
  },
  {
    title: '5. 개인정보 처리의 위탁 및 제3자 제공',
    body: [
      '개인정보를 제3자에게 판매하거나 제공하지 않습니다. 다만 서비스 운영을 위해 아래 사업자의 인프라를 이용합니다.',
    ],
    items: [
      {
        term: 'Google LLC',
        description:
          '문의 메일 발송을 위한 Gmail SMTP 이용, 블로그 광고 게재를 위한 Google AdSense 이용',
      },
      {
        term: 'Vercel Inc.',
        description: '웹사이트 호스팅 및 서버 운영',
      },
      {
        term: 'Cloudflare, Inc.',
        description:
          '도메인·네트워크 운영 및 자동 스팸 차단(Turnstile). Turnstile은 봇 여부만 판별하며 이용자를 식별하지 않습니다.',
      },
    ],
  },
  {
    title: '6. 쿠키 및 광고에 관한 사항',
    body: [
      '블로그(blog.whitemouse.dev)는 Google AdSense를 통해 광고를 게재합니다.',
      'Google을 포함한 제3자 광고 사업자는 쿠키를 사용하여 이용자의 이전 방문 기록을 바탕으로 광고를 게재할 수 있습니다.',
      'Google의 광고 쿠키 사용은 광고 설정(https://adssettings.google.com)에서 언제든 해제할 수 있으며, ' +
        'www.aboutads.info 에서도 제3자 광고 쿠키 수신을 거부할 수 있습니다.',
      '포트폴리오 사이트(whitemouse.dev)에는 광고를 게재하지 않습니다.',
    ],
  },
  {
    title: '7. 정보주체의 권리와 행사 방법',
    body: [
      '이용자는 언제든지 본인의 개인정보에 대한 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다.',
      `요청은 ${PRIVACY_OWNER.email} 으로 보내주시면 지체 없이 조치하겠습니다.`,
    ],
  },
  {
    title: '8. 개인정보 보호 책임자',
    items: [
      { term: '책임자', description: PRIVACY_OWNER.name },
      { term: '연락처', description: PRIVACY_OWNER.email },
    ],
    body: [
      '개인정보 처리와 관련한 문의, 불만, 피해 구제에 관한 사항은 위 연락처로 문의해 주시기 바랍니다.',
    ],
  },
  {
    title: '9. 고지의 의무',
    body: [
      '본 안내의 내용이 변경되는 경우, 변경 사항을 시행일과 함께 본 페이지에 게시합니다.',
    ],
  },
];

// 문의 폼 동의 안내 요약 (체크박스 하단에 노출)
export const PRIVACY_CONSENT_SUMMARY = {
  items: '이름, 이메일, 전화번호(선택)',
  purpose: '문의 응대',
  retention: '응대 완료 후 파기 (최대 1년)',
} as const;
