/**
 * About 페이지 관련 상수 정의
 */

// 소개 텍스트
export const ABOUT_INTRODUCTION = `저는 끊임없이 도전하고 배우는 개발자입니다. 새로운 기술을 익히고 프로젝트에 적용하는 과정을 즐기며, 웹과 모바일 환경에서 사용자 경험을 혁신하는 데 집중하고 있습니다. 단순한 코딩을 넘어, 사용자 중심의 솔루션을 설계하고 개선하기 위해 프로젝트의 요구사항을 깊이 분석하고 체계적으로 접근하는 것을 중요하게 생각합니다. 최신 기술에 대한 학습과 실무 적용을 반복하며, 복잡한 기술적 문제를 창의적으로 해결하는 데 열정을 가지고 있습니다. 변화하는 기술 트렌드에 민감하게 대응하며, 기술을 통해 더 나은 사용자 경험과 가치를 제공하기 위해 끊임없이 성장하고 있습니다.`;

// 타임라인 데이터
export interface ITimelineItem {
  year: string;
  events: string[];
}

export const TIMELINE_DATA: ITimelineItem[] = [
  {
    year: '2025',
    events: ['NIPA-Google ML 부트캠프 최우수 수료'],
  },
  {
    year: '2024',
    events: [
      '대학교와의 협업을 통해 학습 모델 시스템의 MVP를 설계 및 구현, 데이터 기반 학습 솔루션 제공.',
      '영상 플랫폼의 MVP를 전략적으로 기획 및 개발',
    ],
  },
  {
    year: '2023',
    events: [
      '경기도경제과학진흥원 ChatGPT 및 딥러닝 모델 구현 과정 수료',
      'Java 백엔드 개발자 부트캠프(KFO 주최)에서 심사 및 멘토링 수행',
    ],
  },
  {
    year: '2022',
    events: [
      '린케어 주식회사 개발팀 팀장 재직',
      'ADsP - 데이터분석 준전문가 자격증 취득 (한국데이터산업진흥원)',
    ],
  },
  {
    year: '2021',
    events: ['위바이브(주) 웹개발자 재직'],
  },
  {
    year: '2019',
    events: [
      '정보처리기사 자격증 취득 (한국산업인력공단)',
      '가톨릭대학교 정보통신전자공학부 졸업',
    ],
  },
];

// 프로필 이미지 데이터
export interface IProfileImage {
  src: string;
  alt: string;
}

export const PROFILE_IMAGES: IProfileImage[] = [
  {
    src: '/images/kunwoo-1.jpg',
    alt: '김건우 프로필 사진 1',
  },
  {
    src: '/images/kunwoo-2.jpg',
    alt: '김건우 프로필 사진 2',
  },
  {
    src: '/images/kunwoo-3.png',
    alt: '김건우 프로필 사진 3',
  },
  {
    src: '/images/kunwoo-4.jpg',
    alt: '김건우 프로필 사진 4',
  },
  {
    src: '/images/kunwoo-5.jpg',
    alt: '김건우 프로필 사진 5',
  },
];

// 이미지 회전 각도 (애니메이션용)
export const IMAGE_ROTATIONS = [5, -5, 3, -3, 4];

// 이미지 자동 전환 시간 (밀리초)
export const IMAGE_AUTO_CHANGE_INTERVAL = 5000;

