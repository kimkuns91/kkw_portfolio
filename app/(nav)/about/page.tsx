import AboutPage from '@/components/About/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다. ' +
    '새로운 기술을 익히고 프로젝트에 적용하는 과정을 즐기며, ' +
    '웹과 모바일 환경에서 사용자 경험을 혁신하는 데 집중하고 있습니다.',
  openGraph: {
    title: 'About | 김건우 포트폴리오',
    description:
      '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다. ' +
      '새로운 기술을 익히고 프로젝트에 적용하는 과정을 즐기며, ' +
      '웹과 모바일 환경에서 사용자 경험을 혁신하는 데 집중하고 있습니다.',
    images: [
      {
        url: '/og-image.png', // About 페이지용 별도 OG 이미지
        width: 1200,
        height: 630,
        alt: '김건우 포트폴리오 - About',
      },
    ],
  },
  twitter: {
    title: 'About | 김건우 포트폴리오',
    description:
      '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다. ' +
      '새로운 기술을 익히고 프로젝트에 적용하는 과정을 즐기며, ' +
      '웹과 모바일 환경에서 사용자 경험을 혁신하는 데 집중하고 있습니다.',
    images: ['/og-image.png'],
  },
};

export default function Page() {
  return <AboutPage />;
}
