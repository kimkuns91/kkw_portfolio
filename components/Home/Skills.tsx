'use client';

import { SKILL_CATEGORY_LIST, SKILL_LIST } from '@/constants/skills';
import { slideInFromBottom, slideInFromLeft } from '@/utils/motions';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Skills 컴포넌트
 *
 * @description
 * 기술 스택을 카테고리별로 표시하는 컴포넌트
 *
 * @features
 * - 카테고리별 탭 네비게이션
 * - 기술 스택 아이콘 및 설명 표시
 * - Framer Motion 애니메이션
 * - 반응형 디자인 (모바일/데스크톱)
 *
 * @performance
 * - 첫 번째 카테고리의 상위 6개 이미지: eager loading
 * - 나머지 이미지: lazy loading
 * - 이미지 크기 명시 (40x40)
 *
 * @accessibility
 * - 키보드 네비게이션 지원
 * - aria-selected로 활성 탭 표시
 * - role="tablist", "tab", "tabpanel" 사용
 */
const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className={cn('py-10 md:py-20')}
      aria-label="기술 스택"
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
        <div className="w-full md:w-48" role="tablist" aria-label="기술 카테고리">
          <div className="grid grid-cols-2 md:grid-cols-1 md:border-b-0 md:border-l-2 border-accent/30">
            {SKILL_CATEGORY_LIST.map((item) => (
              <button
                onClick={() => setCurrentIndex(item.index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setCurrentIndex(item.index);
                  }
                }}
                key={item.index}
                role="tab"
                aria-selected={currentIndex === item.index}
                aria-controls={`skill-panel-${item.index}`}
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
        <div
          className="flex-1"
          role="tabpanel"
          id={`skill-panel-${currentIndex}`}
          aria-labelledby={`skill-tab-${currentIndex}`}
        >
          <h3 className="text-xl mb-10">
            Skill Stack{' '}
            <span className="text-accent">
              @{SKILL_CATEGORY_LIST[currentIndex].title}
            </span>
          </h3>
          <div className="space-y-10" role="list">
            {SKILL_LIST[currentIndex].map((skill, index) => (
              <div
                key={skill.title}
                className="flex items-center gap-4"
                role="listitem"
              >
                <div
                  className="w-16 h-16 rounded-full border-2 border-accent bg-secondary/50 p-3 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Image
                    src={skill.icon}
                    alt=""
                    width={40}
                    height={40}
                    loading={currentIndex === 0 && index < 6 ? 'eager' : 'lazy'}
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
    </motion.section>
  );
};

export default Skills;
