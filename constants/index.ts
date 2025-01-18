import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { IconType } from 'react-icons';
import { RiKakaoTalkFill } from 'react-icons/ri';

export const LINKS = [
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

export const SOCIALS: { icon: IconType; path: string }[] = [
  { icon: FaGithub, path: 'https://github.com/kimkuns91' },
  {
    icon: FaLinkedinIn,
    path: 'https://www.linkedin.com/in/kun-woo-kim-b39727225/',
  },
  { icon: RiKakaoTalkFill, path: 'https://open.kakao.com/o/gq51dAMg' },
  { icon: FaInstagram, path: 'https://www.instagram.com/kimkuns98/' },
];

export const STATS = [
  {
    num: 4,
    text: 'Years of experience',
  },
  {
    num: 24,
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
