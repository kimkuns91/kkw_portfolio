import { Metadata } from 'next';

const PRIVACY_DESCRIPTION =
  'whitemouse.dev와 blog.whitemouse.dev의 개인정보 수집 및 이용 안내입니다. ' +
  '수집 항목, 이용 목적, 보유 기간, 쿠키 및 광고에 관한 사항을 확인하실 수 있습니다.';

export const privacyMetadata: Metadata = {
  title: '개인정보 수집 및 이용 안내',
  description: PRIVACY_DESCRIPTION,
  openGraph: {
    title: '개인정보 수집 및 이용 안내 | 김건우 포트폴리오',
    description: PRIVACY_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '김건우 포트폴리오 - 개인정보 수집 및 이용 안내',
      },
    ],
  },
  twitter: {
    title: '개인정보 수집 및 이용 안내 | 김건우 포트폴리오',
    description: PRIVACY_DESCRIPTION,
    images: ['/og-image.png'],
  },
};
