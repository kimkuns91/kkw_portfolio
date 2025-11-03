import { Metadata } from 'next';

const BLOG_DESCRIPTION =
  '김건우의 기술 블로그입니다. 웹 개발, React, Next.js, TypeScript 등 다양한 기술에 대한 글을 공유합니다.';

export const blogMetadata: Metadata = {
  title: 'Blog',
  description: BLOG_DESCRIPTION,
  openGraph: {
    title: 'Blog | 김건우 포트폴리오',
    description: BLOG_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '김건우 포트폴리오 - Blog',
      },
    ],
  },
  twitter: {
    title: 'Blog | 김건우 포트폴리오',
    description: BLOG_DESCRIPTION,
    images: ['/og-image.png'],
  },
};

