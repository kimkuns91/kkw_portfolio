import React from 'react';

// 타입 정의
interface TimelineItemProps {
  year: string;
  events: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, events }) => (
  <div className="border-b border-zinc-800">
    <h1 className="text-xl font-bold text-neutral-light my-8 relative">
      <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-accent bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
      {year}
    </h1>
    <div className="mb-8">
      {events.map((event, index) => (
        <div key={index} className="flex flex-row space-x-2 items-start my-2">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="text-accent mt-[3px] flex-shrink-0"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-neutral text-sm md:text-base">{event}</span>
        </div>
      ))}
    </div>
  </div>
);

const Timeline: React.FC = () => (
  <div className="max-w-4xl mx-auto divide-zinc-800 relative">
    <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-accent to-transparent -left-4 md:-left-10"></div>
    <TimelineItem
      year="2024"
      events={[
        '대학교와의 협업을 통해 학습 모델 시스템의 MVP를 설계 및 구현, 데이터 기반 학습 솔루션 제공.',
        '영상 플랫폼의 MVP를 전략적으로 기획 및 개발',
      ]}
    />
    <TimelineItem
      year="2023"
      events={[
        '경기도경제과학진흥원 ChatGPT 및 딥러닝 모델 구현 과정 수료',
        'Java 백엔드 개발자 부트캠프(KFO 주최)에서 심사 및 멘토링 수행',
      ]}
    />
    <TimelineItem
      year="2022"
      events={[
        '린케어 주식회사 프로젝트 매니저 재직',
        'ADsP - 데이터분석 준전문가 자격증 취득 (한국데이터산업진흥원)',
      ]}
    />
    <TimelineItem year="2021" events={['위바이브(주) 웹개발자 재직']} />
    <TimelineItem
      year="2019"
      events={[
        '정보처리기사 자격증 취득 (한국산업인력공단)',
        '가톨릭대학교 정보통신전자공학부 졸업',
      ]}
    />
  </div>
);

export default Timeline;
