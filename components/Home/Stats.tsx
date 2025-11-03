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
 * - 반응형 레이아웃
 * - 통계 데이터 시각화
 *
 * @accessibility
 * - role="region"으로 통계 영역 명시
 * - aria-label로 영역 설명
 */
const Stats: React.FC = () => {
  return (
    <section
      className="pt-4 pb-20 xl:pt-0"
      role="region"
      aria-label="개발 경력 통계"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {STATS.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
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
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
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
