'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface INavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

/**
 * NavLink 컴포넌트
 *
 * @description
 * 네비게이션 링크를 렌더링하는 공통 컴포넌트
 * Nav.tsx와 MobileNav.tsx에서 공유하여 코드 중복 제거
 *
 * @param href - 링크 경로
 * @param label - 링크 텍스트
 * @param isActive - 현재 경로와 일치 여부
 * @param onClick - 클릭 이벤트 핸들러 (모바일에서 Sheet 닫기용)
 * @param variant - 데스크톱/모바일 스타일 변형
 */
export const NavLink = ({
  href,
  label,
  isActive,
  onClick,
  variant = 'desktop',
}: INavLinkProps) => {
  const baseStyles = 'capitalize hover:text-accent transition-all';

  const variantStyles = {
    desktop: 'font-medium',
    mobile: 'text-xl',
  };

  const activeStyles = isActive ? 'text-accent border-b-2 border-accent' : '';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], activeStyles)}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
};
