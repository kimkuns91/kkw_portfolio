import { Metadata } from 'next';

/**
 * 루트 레이아웃 메타데이터
 *
 * @description
 * 전체 사이트의 기본 메타데이터를 정의합니다.
 * 각 페이지는 이 메타데이터를 상속받아 필요한 부분만 오버라이드합니다.
 *
 * @features
 * - SEO 최적화 (keywords, description, robots)
 * - Open Graph 및 Twitter 카드 설정
 * - PWA 지원 (manifest, icons)
 * - 검색 엔진 검증 (Google, Naver)
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL('https://portfolio.whitemouse.dev'),
  title: {
    default: '김건우 포트폴리오 | Fullstack Developer',
    template: '%s | 김건우 포트폴리오',
  },
  description: '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다.',
  generator: 'Next.js',
  applicationName: '김건우 포트폴리오',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Fullstack',
    'Frontend',
    'Backend',
    'Developer',
    '개발자',
    '포트폴리오',
    '김건우',
    '백엔드',
    '프론트엔드',
    'React',
    'Next.js',
    'TypeScript',
    '웹개발',
    '린케어',
    '린케어 주식회사',
  ],
  authors: [{ name: '김건우' }],
  creator: '김건우',
  publisher: '김건우',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://portfolio.whitemouse.dev',
    title: '김건우 포트폴리오 | Fullstack Developer',
    description: '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다.',
    siteName: '김건우 포트폴리오',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '김건우 포트폴리오',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '김건우 포트폴리오 | Fullstack Developer',
    description: '끊임없이 도전하고 배우는 Fullstack 개발자 김건우입니다.',
    images: ['/og-image.png'],
    creator: '@your_twitter_handle',
  },
};

