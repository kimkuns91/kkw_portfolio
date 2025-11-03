import { CONTACT_INFO, CONTACT_PAGE_TEXT } from '@/constants/contact';

import Image from 'next/image';
import Pin from './Pin';

/**
 * ContactInfo 컴포넌트
 *
 * @description
 * 연락처 정보와 세계 지도를 표시하는 컴포넌트
 *
 * @features
 * - 이메일, 전화번호, 위치 정보
 * - 3D 효과의 세계 지도
 * - 핀 애니메이션
 */
export const ContactInfo = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
      <h2 className="mt-9 gradientMoveTitle text-xl font-bold md:text-3xl lg:text-5xl">
        {CONTACT_PAGE_TEXT.title}
      </h2>
      <p className="mt-8 max-w-lg text-center text-base text-neutral-dark md:text-left">
        {CONTACT_PAGE_TEXT.description}
      </p>
      
      {/* 연락처 정보 */}
      <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-sm text-neutral-light hover:text-accent transition-colors"
          aria-label={`이메일: ${CONTACT_INFO.email}`}
        >
          {CONTACT_INFO.email}
        </a>
        <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" aria-hidden="true" />
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
          className="text-sm text-neutral-light hover:text-accent transition-colors"
          aria-label={`전화번호: ${CONTACT_INFO.phone}`}
        >
          {CONTACT_INFO.phone}
        </a>
        <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" aria-hidden="true" />
        <p className="text-sm text-neutral-light">{CONTACT_INFO.location}</p>
      </div>

      {/* 세계 지도 */}
      <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
        <Pin className="right-[-52px] top-[-15px]" />
        <Image
          src="/images/world.svg"
          width={500}
          height={500}
          alt="세계 지도"
          loading="lazy"
          className="[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter"
        />
      </div>
    </div>
  );
};
