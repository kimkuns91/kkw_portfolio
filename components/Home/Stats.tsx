'use client';

import CountUp from 'react-countup';
import { STATS } from '@/constants';

/**
 * Stats 컴포넌트
 *
 * @description
 * 개발 경력 통계를 카운터 애니메이션과 함께 표시하는 컴포넌트
 *
 * @features
 * - CountUp 애니메이션 효과
 * - 반응형 하이브리드 레이아웃 (Grid + Flex)
 * - 통계 데이터 시각화
 *
 * @responsive
 * - 모바일: 2열 Grid, 세로 배치 (숫자 위, 텍스트 아래)
 * - 태블릿/데스크톱: Flex 가로 배치 (숫자 + 텍스트 옆에)
 *
 * @accessibility
 * - role="region"으로 통계 영역 명시
 * - aria-label로 영역 설명
 * - 각 통계 항목에 aria-label 제공
 */
const Stats: React.FC = () => {
  return (
    <section
      className="pt-4 pb-20 xl:pt-0"
      role="region"
      aria-label="개발 경력 통계"
    >
      <div className="container mx-auto">
        {/* 
          반응형 Grid 레이아웃:
          - 모바일: 2열 Grid, 세로 배치 (2x2)
          - 태블릿/데스크톱: 4열 가로 배치 (1x4)
        */}
        <div className="grid grid-cols-2 xl:flex xl:flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {STATS.map((item, index) => {
            return (
              <div
                className="flex flex-col xl:flex-row gap-2 xl:gap-4 items-center xl:flex-1 xl:justify-start text-center xl:text-left"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                  aria-label={`${item.text}: ${item.num}`}
                />
                <p
                  className={`leading-snug text-white/80 text-sm xl:text-base ${
                    item.text.length < 15 ? 'xl:max-w-[100px]' : 'xl:max-w-[150px]'
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
