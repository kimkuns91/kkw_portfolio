'use client';

import { slideInFromLeft, slideInFromRight } from '@/utils/motions';

import { HERO_TEXT } from '@/constants';
import Photo from '../Photo';
import Social from '../Social';
import { motion } from 'framer-motion';

/**
 * Hero 컴포넌트
 *
 * @description
 * 메인 페이지의 Hero 섹션을 표시하는 컴포넌트
 *
 * @features
 * - 개발자 소개 텍스트 (애니메이션)
 * - 프로필 이미지
 * - 소셜 미디어 링크
 * - Framer Motion 애니메이션 효과
 */
const Hero: React.FC = () => {
  return (
    <section className="w-full mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
        {/* 텍스트 콘텐츠 */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <motion.p
            variants={slideInFromLeft(0.3)}
            className="text-xl text-neutral-dark mb-4"
          >
            {HERO_TEXT.subtitle}
          </motion.p>
          <motion.h2
            variants={slideInFromLeft(0.4)}
            className="h3 font-bold mb-4"
          >
            {HERO_TEXT.title1}
          </motion.h2>
          <motion.h1
            variants={slideInFromLeft(0.5)}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradientMoveTitle">{HERO_TEXT.name}</span>
            {HERO_TEXT.title2}
          </motion.h1>
          <motion.p
            variants={slideInFromLeft(0.6)}
            className="max-w-[500px] mb-9 text-white/80"
          >
            {HERO_TEXT.description}
          </motion.p>

          {/* 소셜 미디어 링크 */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            className="flex flex-col xl:flex-row items-center gap-8"
          >
            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* 프로필 이미지 */}
        <motion.div
          variants={slideInFromRight(0.3)}
          className="order-1 xl:order-none mb-8 xl:mb-0 relative z-10 w-[298px] h-[298px] xl:w-[490px] xl:h-[490px]"
        >
          <Photo />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
