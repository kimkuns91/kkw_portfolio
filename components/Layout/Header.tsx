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
 * - 로고에 명확한 aria-label 추가
 * - 시맨틱 HTML 사용 (<header>, <nav>)
 */
const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
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
