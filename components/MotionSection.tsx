'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface MotionScrollSectionProps {
  children: React.ReactNode;
}

const MotionScrollSection: React.FC<MotionScrollSectionProps> = ({
  children,
  ...rest
}) => {
  // 초기값을 sessionStorage에서 직접 읽어서 설정 (깜빡임 방지)
  const [hasSeenIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!sessionStorage.getItem('introComplete');
    }
    return false;
  });

  // Intro를 본 경우 애니메이션 완전히 제거
  if (hasSeenIntro) {
    return (
      <section className="pt-6 md:pt-0 pb-6" {...rest}>
        <Section>{children}</Section>
      </section>
    );
  }

  // 첫 방문 시에만 fade-in 애니메이션
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' },
      }}
      className="pt-6 md:pt-0 pb-6"
      {...rest}
    >
      <Section>{children}</Section>
    </motion.section>
  );
};

export default MotionScrollSection;
