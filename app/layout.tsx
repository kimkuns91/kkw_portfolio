import '@/styles/globals.css';

import { NextLayout, NextProvider } from './providers';

import { JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: 'White Mouse Dev - Portfolio',
  description: '안녕하세요. 풀스택 개발자 김건우입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('scrollbar', jetbrainsMono.variable)}>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
