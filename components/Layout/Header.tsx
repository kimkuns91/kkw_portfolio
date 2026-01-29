import { LOGO_TEXT } from '@/constants';
import Link from 'next/link';
import MobileNav from './MobileNav';
import Nav from '../Nav';

/**
 * Header 컴포넌트
 *
 * @description
 * 전역 헤더 컴포넌트
 *
 * @features
 * - 로고 (홈 링크)
 * - 데스크톱 네비게이션
 * - 모바일 네비게이션 (햄버거 메뉴)
 * - 반응형 디자인
 *
 * @accessibility
 * - Skip to content 링크 (키보드 사용자용)
 * - 로고에 명확한 aria-label 추가
 * - 시맨틱 HTML 사용 (<header>, <nav>)
 */
const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      {/* Skip to content - 키보드 사용자가 네비게이션을 건너뛸 수 있도록 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-primary focus:rounded-lg focus:outline-none"
      >
        본문으로 건너뛰기
      </a>
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <Link href="/" aria-label="홈으로 이동">
          <h1 className="text-4xl font-semibold">
            {LOGO_TEXT.main}
            <span className="text-accent">.</span>
            {LOGO_TEXT.suffix}
          </h1>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* 모바일 네비게이션 */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
