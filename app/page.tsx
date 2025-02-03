import Hero from '@/components/Home/Hero';
import Loading from '@/app/loading';
import { Metadata } from 'next';
import MotionScrollSection from '@/components/MotionSection';
import ProjectList from '@/components/ProjectList';
import Skills from '@/components/Home/Skills';
import Stats from '@/components/Home/Stats';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '김건우 포트폴리오 | Fullstack Developer',
  description:
    '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다. React, Next.js, TypeScript를 활용한 웹 개발 프로젝트들을 소개합니다.',
  keywords: [
    'Fullstack Developer',
    'React',
    'Next.js',
    'TypeScript',
    '웹개발',
    '포트폴리오',
    '김건우',
    '백엔드',
    '프론트엔드',
  ],
  authors: [{ name: '김건우' }],
  openGraph: {
    title: '김건우 포트폴리오 | Fullstack Developer',
    description: '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다.',
    url: 'https://portfolio.whitemouse.dev',
    siteName: '김건우 포트폴리오',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '김건우 포트폴리오 미리보기',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '김건우 포트폴리오 | Fullstack Developer',
    description: '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'OVeZLitU9-LDnG-qusDsAXMFc51-Cht05K5i1pccDwQ',
  },
  other: {
    'naver-site-verification': '705551e6676d4d1979b3f0fd13de775040e4604b',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <MotionScrollSection>
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProjectList />
      </Suspense>
    </MotionScrollSection>
  );
}
