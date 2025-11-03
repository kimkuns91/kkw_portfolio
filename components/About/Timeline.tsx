import { ITimelineItem, TIMELINE_DATA } from '@/constants/about';

import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import React from 'react';

/**
 * TimelineItem 컴포넌트
 *
 * @description
 * 개별 타임라인 항목을 렌더링하는 컴포넌트
 *
 * @param year - 연도
 * @param events - 해당 연도의 이벤트 목록
 */
const TimelineItem: React.FC<ITimelineItem> = ({ year, events }) => (
  <div className="border-b border-zinc-800">
    <h1 className="text-xl font-bold text-neutral-light my-8 relative">
      <div
        className="h-3 md:h-4 w-3 md:w-4 border-2 border-accent bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"
        aria-hidden="true"
      />
      {year}
    </h1>
    <div className="mb-8">
      {events.map((event, index) => (
        <div key={index} className="flex flex-row space-x-2 items-start my-2">
          <IoCheckmarkCircleOutline
            className="text-accent mt-[3px] flex-shrink-0"
            size={16}
            aria-hidden="true"
          />
          <span className="text-neutral text-sm md:text-base">{event}</span>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Timeline 컴포넌트
 *
 * @description
 * 경력 및 학습 이력을 시간순으로 표시하는 타임라인
 *
 * @features
 * - 연도별 이벤트 목록 표시
 * - 세로 그라데이션 라인으로 시각적 연결
 * - 각 연도마다 동그란 마커 표시
 */
const Timeline: React.FC = () => (
  <div className="max-w-4xl mx-auto divide-zinc-800 relative">
    {/* 세로 그라데이션 라인 */}
    <div
      className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-accent to-transparent -left-4 md:-left-10"
      aria-hidden="true"
    />
    {TIMELINE_DATA.map((item) => (
      <TimelineItem key={item.year} year={item.year} events={item.events} />
    ))}
  </div>
);

export default Timeline;
