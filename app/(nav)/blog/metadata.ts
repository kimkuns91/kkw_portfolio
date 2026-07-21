import { Metadata } from 'next';

const BLOG_DESCRIPTION =
  '김건우의 기술 블로그입니다. 웹 개발, React, Next.js, TypeScript 등 다양한 기술에 대한 글을 공유합니다.';

/**
 * Blog 페이지 메타데이터
 *
 * @description
 * SEO 최적화된 블로그 페이지 메타데이터
 *
 * @features
 * - Canonical URL 설정
 * - 검색 키워드 최적화
 * - Open Graph 완전 설정
 * - Twitter 카드 최적화
 * - Robots 크롤링 설정
 */
export const blogMetadata: Metadata = {
  title: 'Blog',
  description: BLOG_DESCRIPTION,

  // 검색 키워드 최적화
  keywords: [
    '블로그',
    '기술 블로그',
    'Velog',
    '개발 블로그',
    '김건우 블로그',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    '웹 개발',
    '프론트엔드',
    '백엔드',
    'Fullstack',
    '개발자 블로그',
    '기술 아티클',
  ],

  // Canonical URL (중복 콘텐츠 방지)
  alternates: {
    canonical: '/blog',
  },

  // 검색 엔진 크롤링 설정
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (SNS 공유 최적화)
  openGraph: {
    type: 'website',
    url: 'https://portfolio.whitemouse.dev/blog',
    title: 'Blog | 김건우 포트폴리오',
    description: BLOG_DESCRIPTION,
    siteName: '김건우 포트폴리오',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '김건우 포트폴리오 - Blog',
      },
    ],
  },

  // Twitter 카드 (트위터 공유 최적화)
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | 김건우 포트폴리오',
    description: BLOG_DESCRIPTION,
    images: ['/og-image.png'],
  },
};

