'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Photo 컴포넌트
 *
 * @description
 * 메인 프로필 이미지를 표시하는 컴포넌트
 *
 * @performance
 * - priority 속성으로 LCP 최적화
 * - 애니메이션 delay 최소화 (0.2초)
 * - 명시적 크기 설정으로 CLS 방지
 */
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.3, ease: 'easeIn' },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.3, ease: 'easeInOut' },
          }}
          className="w-[298px] h-[298px] xl:w-[490px] xl:h-[490px] mix-blend-lighten absolute"
        >
          <Image
            src="/images/photo_v2.png"
            priority
            quality={90}
            width={490}
            height={490}
            alt="김건우 프로필 사진"
            className="object-contain order-1"
            sizes="(max-width: 1280px) 298px, 490px"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00D9FF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
