import { FOOTER_TEXT, LINKS, SOCIALS } from '@/constants';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandKakoTalk,
  IconBrandLinkedin,
} from '@tabler/icons-react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

/**
 * GridLineHorizontal 컴포넌트
 *
 * @description
 * 수평 그리드 라인 장식 요소
 *
 * @param className - 추가 CSS 클래스
 * @param offset - 라인 오프셋 값
 */
const GridLineHorizontal: React.FC<{
  className?: string;
  offset?: string;
}> = ({ className, offset }) => {
  return (
    <div
      style={
        {
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.2)',
          '--height': '1px',
          '--width': '5px',
          '--fade-stop': '90%',
          '--offset': offset || '200px',
          '--color-dark': 'rgba(255, 255, 255, 0.2)',
          maskComposite: 'exclude',
        } as React.CSSProperties
      }
      className={cn(
        'w-[calc(100%+var(--offset))] h-[var(--height)]',
        'bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        'dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]',
        className
      )}
      aria-hidden="true"
    />
  );
};

// 아이콘 매핑
const ICON_MAP = {
  GitHub: IconBrandGithub,
  LinkedIn: IconBrandLinkedin,
  KakaoTalk: IconBrandKakoTalk,
  Instagram: IconBrandInstagram,
};

/**
 * Footer 컴포넌트
 *
 * @description
 * 전역 푸터 컴포넌트
 *
 * @features
 * - 로고 이미지
 * - 네비게이션 링크
 * - 소셜 미디어 링크
 * - 저작권 정보
 * - 장식용 그리드 라인
 *
 * @accessibility
 * - 소셜 미디어 링크에 aria-label 추가
 * - 시맨틱 HTML 사용 (<footer>, <nav>)
 * - 장식 요소에 aria-hidden="true"
 */
const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-100 border-white/[0.1] px-8 py-20 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-100  justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          {/* 로고 */}
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Link
              href="/"
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1  relative z-20"
              aria-label="홈으로 이동"
            >
              <Image
                src="/images/logo.png"
                alt="WhiteMouse.Dev 로고"
                width={250}
                height={30}
                priority
              />
            </Link>
          </div>

          {/* 네비게이션 링크 */}
          <nav aria-label="푸터 네비게이션">
            <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4">
              {LINKS.map((link) => (
                <li key={link.path} className="list-none">
                  <Link
                    className="transition-colors text-neutral-dark hover:text-neutral-light"
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>

        {/* 저작권 및 소셜 미디어 */}
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-400 mb-8 sm:mb-0">
            {FOOTER_TEXT.copyright}
          </p>

          {/* 소셜 미디어 링크 */}
          <div className="flex gap-4" role="list" aria-label="소셜 미디어 링크">
            {SOCIALS.map((social) => {
              const Icon = ICON_MAP[social.label as keyof typeof ICON_MAP];
              return (
                <Link
                  key={social.label}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} 프로필 방문`}
                  role="listitem"
                >
                  <Icon className="h-6 w-6 text-neutral-500 dark:text-neutral-300 hover:text-accent transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
