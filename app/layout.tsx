import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import { NextLayout, NextProvider } from './providers';

import { JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#18181B',
};

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn('scrollbar', jetbrainsMono.variable)}>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
