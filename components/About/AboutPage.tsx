'use client';

import AnimatedImages from './AnimatedImages';
import MotionScrollSection from '../MotionSection';
import Skills from '../Home/Skills';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Timeline from './Timeline';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motions';

const AboutPage: React.FC = () => {
  return (
    <MotionScrollSection>
      <div className="container relative flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between">
        <div className="flex-[1.5]">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(1.5)}
            className="text-2xl md:text-5xl font-bold text-accent mb-10"
          >
            Introduction
          </motion.h2>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(1.6)}
            className="font-bold text-2xl md:text-4xl md:leading-tight text-zinc-50 max-w-4xl"
          >
            안녕하세요!
          </motion.h2>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(1.7)}
            className="font-bold text-2xl md:text-4xl md:leading-tight text-zinc-50 max-w-4xl"
          >
            끊임없이 도전하고 배우는 개발자
          </motion.h2>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(1.8)}
            className="font-bold text-2xl md:text-4xl md:leading-tight text-zinc-50 max-w-4xl"
          >
            <span className="gradientMoveTitle mr-2">김건우</span>입니다
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(2.0)}
            className="font-bold text-2xl md:text-4xl md:leading-tight text-zinc-50 max-w-4xl"
          >
            <TextGenerateEffect
              words={`저는 끊임없이 도전하고 배우는 개발자입니다. 새로운 기술을 익히고
            프로젝트에 적용하는 과정을 즐기며, 웹과 모바일 환경에서 사용자
            경험을 혁신하는 데 집중하고 있습니다. 단순한 코딩을 넘어, 사용자
            중심의 솔루션을 설계하고 개선하기 위해 프로젝트의 요구사항을 깊이
            분석하고 체계적으로 접근하는 것을 중요하게 생각합니다. 최신 기술에
            대한 학습과 실무 적용을 반복하며, 복잡한 기술적 문제를 창의적으로
            해결하는 데 열정을 가지고 있습니다. 변화하는 기술 트렌드에 민감하게
            대응하며, 기술을 통해 더 나은 사용자 경험과 가치를 제공하기 위해
            끊임없이 성장하고 있습니다.`}
            />
          </motion.div>
        </div>
        <div className="flex-1 order-first md:order-last relative">
          <AnimatedImages />
        </div>
      </div>
      <Skills />
      <div className="container py-12 pb-24">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1.5)}
          className="text-2xl md:text-5xl font-bold text-accent mb-10"
        >
          TimeLine
        </motion.h2>
        <h2 className="font-bold text-xl mb-20 lg:mb-28 md:text-2xl md:leading-tight text-neutral-light">
          제가 그동안 어떻게 지냈는지 시간 여행을 떠나봅시다!
        </h2>
        <Timeline />
      </div>
    </MotionScrollSection>
  );
};

export default AboutPage;
