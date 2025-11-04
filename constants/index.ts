import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { IconType } from 'react-icons';
import { RiKakaoTalkFill } from 'react-icons/ri';

/**
 * 타입 정의
 */
export interface INavigationLink {
  name: string;
  path: string;
}

export interface ISocialLink {
  icon: IconType;
  path: string;
  label: string;
}

export interface IStat {
  num: number;
  text: string;
}

/**
 * 네비게이션 링크
 */
export const LINKS: INavigationLink[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Me',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

/**
 * 소셜 미디어 링크
 */
export const SOCIALS: ISocialLink[] = [
  { 
    icon: FaGithub, 
    path: 'https://github.com/kimkuns91',
    label: 'GitHub',
  },
  {
    icon: FaLinkedinIn,
    path: 'https://www.linkedin.com/in/kun-woo-kim-b39727225/',
    label: 'LinkedIn',
  },
  { 
    icon: RiKakaoTalkFill, 
    path: 'https://open.kakao.com/o/gq51dAMg',
    label: 'KakaoTalk',
  },
  { 
    icon: FaInstagram, 
    path: 'https://www.instagram.com/kimkuns98/',
    label: 'Instagram',
  },
];

/**
 * 통계 정보
 */
export const STATS: IStat[] = [
  {
    num: 5,
    text: 'Years of experience',
  },
  {
    num: 27,
    text: 'Projects completed',
  },
  {
    num: 12,
    text: 'Technologies mastered',
  },
  {
    num: 140,
    text: 'Code commits',
  },
];

/**
 * Hero 섹션 텍스트
 */
export const HERO_TEXT = {
  subtitle: 'Fullstack Developer',
  title1: '끊임없이 도전하고 배우는 개발자',
  name: '김건우',
  title2: '입니다',
  description:
    '안녕하세요! Next.js, Node.js, Express, Flutter 등을 다루며, 매 프로젝트마다 새로운 기술을 학습하고 적용하는 것을 중요하게 생각합니다. 지속적인 개선을 목표로 하며, 더 나은 코드를 작성하고 사용자 중심의 개발을 위해 끊임없이 성장하고 있습니다.',
} as const;

/**
 * 로고 텍스트
 */
export const LOGO_TEXT = {
  main: 'WhiteMouse',
  suffix: 'Dev',
} as const;

/**
 * 푸터 텍스트
 */
export const FOOTER_TEXT = {
  copyright: '© 2024 WhiteMouseDev. All rights reserved.',
} as const;
