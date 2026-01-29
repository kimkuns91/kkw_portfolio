import '@/styles/globals.css';

import { NextLayout, NextProvider } from './providers';

import { JetBrains_Mono } from 'next/font/google';
import { JsonLd } from '@/components/JsonLd';
import type { Viewport } from 'next';
import { cn } from '@/lib/utils';
import { rootMetadata } from './layout.metadata';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // 실제 사용되는 웨이트만 로드 (성능 최적화)
  variable: '--font-jetbrainsMono',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Accessibility: 최소 5배 확대 허용
  userScalable: true, // Accessibility: 사용자 확대/축소 허용
  themeColor: '#18181B',
};

export const metadata = rootMetadata;

/**
 * RootLayout 컴포넌트
 *
 * @description
 * 애플리케이션의 최상위 레이아웃 컴포넌트
 *
 * @features
 * - JetBrains Mono 폰트 적용
 * - 전역 스타일 적용
 * - 메타데이터 설정
 * - 중요 이미지 preload (성능 최적화)
 * - Provider 래핑 (React Query, Zustand, Toast)
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Google AdSense 소유권 확인 */}
        <meta name="google-adsense-account" content="ca-pub-6018531866853167" />
        {/* 메인 프로필 이미지 preload */}
        <link
          rel="preload"
          href="/images/photo_v2.png"
          as="image"
          type="image/png"
        />
        {/* OG 이미지 preload */}
        <link rel="preload" href="/og-image.png" as="image" type="image/png" />
        {/* JSON-LD 구조화 데이터 (SEO) */}
        <JsonLd />
      </head>
      <body className={cn('scrollbar', jetbrainsMono.variable)}>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
