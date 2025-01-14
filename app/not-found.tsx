import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다',
  description: '요청하신 페이지를 찾을 수 없습니다.',
  robots: {
    index: false,
    follow: false
  }
}

export default function NotFoundPage() {
  return (
    <>
      <div className="container flex-1">
        <div className="flex h-96 flex-col items-center justify-center space-y-4">
          <h1 className="text-8xl font-semibold">
            <span className="text-accent">4</span>0
            <span className="text-accent">4</span>
          </h1>
          <p className="text-xl">Page not found</p>
          <Link href="/">
            <Button>메인으로 가기</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
