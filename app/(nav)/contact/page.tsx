import ContactPage from '@/components/Contact/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    '프로젝트 협업 및 채용 문의는 언제든 환영합니다. ' +
    '이메일, 링크드인을 통해 연락 주시면 빠르게 답변 드리겠습니다.',
  openGraph: {
    title: 'Contact | 김건우 포트폴리오',
    description:
      '프로젝트 협업 및 채용 문의는 언제든 환영합니다. ' +
      '이메일, 링크드인을 통해 연락 주시면 빠르게 답변 드리겠습니다.',
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
    description:
      '프로젝트 협업 및 채용 문의는 언제든 환영합니다. ' +
      '이메일, 링크드인을 통해 연락 주시면 빠르게 답변 드리겠습니다.',
    images: ['/og-image.png'],
  },
  // 연락처 페이지는 자동 전화번호/이메일 감지 활성화
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
};

export default function Contact() {
  return <ContactPage />;
}
