import { Metadata } from 'next';

const CONTACT_DESCRIPTION =
  '프로젝트 협업 및 채용 문의는 언제든 환영합니다. ' +
  '이메일, 링크드인을 통해 연락 주시면 빠르게 답변 드리겠습니다.';

export const contactMetadata: Metadata = {
  title: 'Contact',
  description: CONTACT_DESCRIPTION,
  openGraph: {
    title: 'Contact | 김건우 포트폴리오',
    description: CONTACT_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '김건우 포트폴리오 - Contact',
      },
    ],
  },
  twitter: {
    title: 'Contact | 김건우 포트폴리오',
    description: CONTACT_DESCRIPTION,
    images: ['/og-image.png'],
  },
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
};

