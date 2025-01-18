'use client';

import { SKILL_CATEGORY_LIST, SKILL_LIST } from '@/constants/skills';
import { slideInFromBottom, slideInFromLeft } from '@/utils/motions';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn('container py-10 md:py-20')}
    >
      <motion.h2
        variants={slideInFromLeft(1.5)}
        className="text-2xl md:text-5xl font-bold text-accent mb-10"
      >
        Skills
      </motion.h2>

      <motion.div
        variants={slideInFromBottom(1.5)}
        className="flex flex-col md:flex-row gap-10"
      >
        {/* 왼쪽 카테고리 메뉴 */}
        <div className="w-full md:w-48">
          <div className="grid grid-cols-2 md:grid-cols-1 md:border-b-0 md:border-l-2 border-accent/30">
            {SKILL_CATEGORY_LIST.map((item) => (
              <button
                onClick={() => setCurrentIndex(item.index)}
                key={item.index}
                className={cn(
                  'px-4 py-2 md:py-3 text-left text-lg transition-colors hover:text-accent relative',
                  currentIndex === item.index
                    ? 'text-accent after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-accent md:after:hidden md:border-l-2 md:border-accent md:-ml-[2px]'
                    : 'text-neutral'
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        {/* 오른쪽 스킬 목록 */}
        <div className="flex-1">
          <h3 className="text-xl mb-10">
            Skill Stack{' '}
            <span className="text-accent">
              @{SKILL_CATEGORY_LIST[currentIndex].title}
            </span>
          </h3>
          <div className="space-y-10">
            {SKILL_LIST[currentIndex].map((skill) => (
              <div key={skill.title} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-accent bg-secondary/50 p-3 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">{skill.title}</h4>
                  <p className="text-neutral text-sm">• {skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
