import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다',
  description: '요청하신 페이지를 찾을 수 없습니다.',
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * NotFoundPage 컴포넌트
 *
 * @description
 * Next.js의 not-found.tsx 파일로 사용되는 404 에러 페이지
 *
 * @features
 * - 404 에러 메시지 표시
 * - 메인 페이지로 돌아가는 버튼
 * - SEO 최적화 (noindex, nofollow)
 *
 * @accessibility
 * - 명확한 에러 메시지
 * - 키보드로 네비게이션 가능
 */
export default function NotFoundPage() {
  return (
    <main className="container flex-1" role="main" aria-labelledby="not-found-title">
      <div className="flex h-96 flex-col items-center justify-center space-y-4">
        <h1
          id="not-found-title"
          className="text-8xl font-semibold"
          aria-label="404 에러"
        >
          <span className="text-accent">4</span>0
          <span className="text-accent">4</span>
        </h1>
        <p className="text-xl">Page not found</p>
        <p className="text-neutral-dark">
          요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Link href="/">
          <Button>메인으로 가기</Button>
        </Link>
      </div>
    </main>
  );
}
