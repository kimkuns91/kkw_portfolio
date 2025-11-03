'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  IMAGE_AUTO_CHANGE_INTERVAL,
  IMAGE_ROTATIONS,
  PROFILE_IMAGES,
} from '@/constants/about';
import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

/**
 * AnimatedImages 컴포넌트
 *
 * @description
 * 프로필 이미지를 카드 스택 형태로 애니메이션과 함께 표시
 *
 * @features
 * - 자동 이미지 전환 (5초마다)
 * - 클릭으로 수동 전환 가능
 * - 3D 회전 및 깊이감 애니메이션
 * - 카드 스택 형태의 레이아웃
 *
 * @performance
 * - 이미지 lazy loading 적용
 * - sizes 속성으로 반응형 최적화
 */
const AnimatedImages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PROFILE_IMAGES.length);
  }, []);

  const isActive = useCallback(
    (index: number) => index === activeIndex,
    [activeIndex]
  );

  // 자동 전환 타이머
  useEffect(() => {
    const interval = setInterval(handleNext, IMAGE_AUTO_CHANGE_INTERVAL);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative h-full w-full" role="img" aria-label="프로필 이미지 갤러리">
      <AnimatePresence>
        {PROFILE_IMAGES.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: IMAGE_ROTATIONS[index],
            }}
            animate={{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              z: isActive(index) ? 0 : -100,
              rotate: isActive(index) ? 0 : IMAGE_ROTATIONS[index],
              zIndex: isActive(index) ? 999 : PROFILE_IMAGES.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: IMAGE_ROTATIONS[index],
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 origin-bottom cursor-pointer md:px-6"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNext();
              }
            }}
            aria-label={`${image.alt} (클릭하여 다음 이미지 보기)`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center select-none"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedImages;
