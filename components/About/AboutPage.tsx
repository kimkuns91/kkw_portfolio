'use client';

import { ABOUT_INTRODUCTION } from '@/constants/about';
import AnimatedImages from './AnimatedImages';
import MotionScrollSection from '../MotionSection';
import Skills from '../Home/Skills';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Timeline from './Timeline';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motions';

/**
 * AboutPage 컴포넌트
 *
 * @description
 * 개발자 소개, 기술 스택, 경력 타임라인을 표시하는 메인 About 페이지
 *
 * @sections
 * - Introduction: 인사말 및 소개 텍스트 (애니메이션 효과)
 * - AnimatedImages: 프로필 이미지 슬라이더
 * - Skills: 기술 스택 섹션 (Home과 동일한 컴포넌트 재사용)
 * - Timeline: 경력 및 학습 이력 타임라인
 */
const AboutPage: React.FC = () => {
  return (
    <MotionScrollSection>
      {/* Introduction Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between"
      >
        <div className="flex-[1.5]">
          <motion.h1
            variants={slideInFromLeft(1.5)}
            className="text-2xl md:text-5xl font-bold text-accent mb-10"
          >
            Introduction
          </motion.h1>
          <motion.p
            variants={slideInFromLeft(1.6)}
            className="font-bold text-2xl md:text-4xl md:leading-tight text-zinc-50 max-w-4xl"
          >
            안녕하세요!
          </motion.p>
          <motion.p
            variants={slideInFromLeft(1.7)}
            className="font-bold text-2xl md:text-4xl md:leading-tight text-zinc-50 max-w-4xl"
          >
            끊임없이 도전하고 배우는 개발자
          </motion.p>
          <motion.p
            variants={slideInFromLeft(1.8)}
            className="font-bold text-2xl md:text-4xl md:leading-tight text-zinc-50 max-w-4xl"
          >
            <span className="gradientMoveTitle mr-2">김건우</span>입니다
          </motion.p>
          <motion.div
            variants={slideInFromLeft(2.0)}
            className="font-bold text-2xl md:text-4xl md:leading-tight text-zinc-50 max-w-4xl"
          >
            <TextGenerateEffect words={ABOUT_INTRODUCTION} />
          </motion.div>
        </div>
        <div className="flex-1 order-first md:order-last relative">
          <AnimatedImages />
        </div>
      </motion.div>

      {/* Skills Section */}
      <Skills />

      {/* Timeline Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="py-12 pb-24"
        aria-labelledby="timeline-heading"
      >
        <motion.h2
          id="timeline-heading"
          variants={slideInFromLeft(1.5)}
          className="text-2xl md:text-5xl font-bold text-accent mb-10"
        >
          TimeLine
        </motion.h2>
        <p className="font-bold text-xl mb-20 lg:mb-28 md:text-2xl md:leading-tight text-neutral-light">
          제가 그동안 어떻게 지냈는지 시간 여행을 떠나봅시다!
        </p>
        <Timeline />
      </motion.section>
    </MotionScrollSection>
  );
};

export default AboutPage;
