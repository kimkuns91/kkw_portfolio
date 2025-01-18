'use client';

import { slideInFromLeft, slideInFromRight } from '@/utils/motions';

import Photo from '../Photo';
import Social from '../Social';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="w-full mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <motion.p
            variants={slideInFromLeft(1)}
            className="text-xl text-neutral-dark mb-4"
          >
            Fullstack Developer
          </motion.p>
          <motion.h2
            variants={slideInFromLeft(1.1)}
            className="h3 font-bold mb-4"
          >
            끊임없이 도전하고 배우는 개발자
          </motion.h2>
          <motion.h1
            variants={slideInFromLeft(1.2)}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradientMoveTitle">김건우</span>
            입니다
          </motion.h1>
          <motion.p
            variants={slideInFromLeft(1.3)}
            className="max-w-[500px] mb-9 text-white/80"
          >
            안녕하세요! Next.js, Node.js, Express, Flutter 등을 다루며, 매
            프로젝트마다 새로운 기술을 학습하고 적용하는 것을 중요하게
            생각합니다. 지속적인 개선을 목표로 하며, 더 나은 코드를 작성하고
            사용자 중심의 개발을 위해 끊임없이 성장하고 있습니다.
          </motion.p>
          {/* btn and socials */}
          <motion.div
            variants={slideInFromLeft(1.4)}
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
        {/* photo */}
        <motion.div
          variants={slideInFromRight(1)}
          className="order-1 xl:order-none mb-8 xl:mb-0 relative z-10"
        >
          <Photo />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
