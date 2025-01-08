import Image from 'next/image';
import Pin from './Pin';

export const ContactInfo = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
      <h2 className="mt-9 gradientMoveTitle text-xl font-bold md:text-3xl lg:text-5xl">
        Let{"'"}s work together
      </h2>
      <p className="mt-8 max-w-lg text-center text-base text-neutral-dark md:text-left">
        저와 함께 멋진 프로젝트를 시작하고 싶으시거나, 더 궁금한 점이 있으시다면
        언제든 편하게 연락주세요. 새로운 인연과 멋진 기회를 기다리고 있습니다!
      </p>
      <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
        <p className="text-sm text-neutral-light">kimkuns98@gmail.com</p>
        <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
        <p className="text-sm text-neutral-light">(+82) 010 8595 9869</p>
        <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
        <p className="text-sm text-neutral-light">Seoul, Korea</p>
      </div>
      <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
        <Pin className="right-[-52px] top-[-15px]" />
        <Image
          src="/images/world.svg"
          width={500}
          height={500}
          alt="world map"
          className="[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter"
        />
      </div>
    </div>
  );
};
