export const SKILL_CATEGORY_LIST = [
  { index: 0, title: 'Language' },
  { index: 1, title: 'FrontEnd' },
  { index: 2, title: 'BackEnd' },
  { index: 3, title: 'DevOps' },
];

export const SKILL_LIST = [
  // Language
  [
    {
      title: 'TypeScript',
      icon: '/icons/typescript.svg',
      description:
        '정적 타입 시스템을 활용해 코드의 안정성을 높이고, 제네릭, 유틸리티 타입 등을 사용하여 확장성과 유지보수성을 강화한 경험이 있습니다.',
    },
    {
      title: 'JavaScript',
      icon: '/icons/javascript.svg',
      description:
        'ES6+의 최신 문법을 활용하여 가독성 높은 코드를 작성하고, 비동기 프로그래밍과 모듈화를 구현한 경험이 있습니다.',
    },
    {
      title: 'Python',
      icon: '/icons/python.svg',
      description:
        'Python의 기초 문법을 이해하고 있으며, 데이터 분석 및 자동화 스크립트 작성에 활용한 경험이 있습니다.',
    },
  ],
  // FrontEnd 스킬 배열
  [
    {
      title: 'Next.js (React)',
      icon: '/icons/nextjs.svg',
      description:
        'Next.js를 사용하여 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 구현하고, 라우팅, 데이터 페칭, 이미지 최적화를 효과적으로 적용한 경험이 있습니다.',
    },
    {
      title: 'Zustand',
      icon: '/icons/zustand.png',
      description:
        '전역 상태 관리를 위해 사용하였으며, 간결하고 직관적인 API를 활용하여 다양한 상태를 효율적으로 관리한 경험이 있습니다.',
    },
    {
      title: 'Recoil',
      icon: '/icons/recoil.svg',
      description:
        'Recoil을 활용해 localStorage와 연동하여 데이터를 영구적으로 저장하고, reducer 패턴을 적용해 상태 관리를 개선한 경험이 있습니다.',
    },
    {
      title: 'React-Query',
      icon: '/icons/react-query.svg',
      description:
        'API 로직의 분리와 데이터 캐싱을 위해 React-Query를 사용하였으며, 데이터 페칭과 비동기 상태 관리를 최적화한 경험이 있습니다.',
    },
    {
      title: 'TailwindCSS',
      icon: '/icons/tailwindcss.svg',
      description:
        '유틸리티 퍼스트 접근 방식을 사용하여 반응형 디자인과 일관된 스타일링을 빠르게 구현한 경험이 있습니다.',
    },
  ],
  // BackEnd 스킬 배열
  [
    {
      title: 'Node.js (Express)',
      icon: '/icons/express.svg',
      description:
        'Node.js와 Express를 사용하여 RESTful API를 구축하고, 미들웨어를 활용한 요청 및 응답 처리를 효율적으로 구현한 경험이 있습니다.',
    },
    {
      title: 'Firebase',
      icon: '/icons/firebase.svg',
      description:
        'Firebase Authentication, Firestore, Cloud Functions 등을 활용하여 서버리스 애플리케이션을 구축하고, 실시간 데이터베이스를 연동한 경험이 있습니다.',
    },
    {
      title: 'Supabase',
      icon: '/icons/supabase.png',
      description:
        'Supabase를 활용하여 PostgreSQL 기반 데이터베이스를 관리하고, 인증 및 스토리지 기능을 프로젝트에 적용한 경험이 있습니다.',
    },
  ],
  // DevOps 스킬 배열
  [
    {
      title: 'AWS',
      icon: '/icons/aws-ec2.svg',
      description:
        'EC2를 이용한 서버 호스팅 및 배포 경험이 있으며, S3, Lambda 등의 AWS 서비스를 활용하여 안정적이고 확장 가능한 인프라를 구축한 경험이 있습니다.',
    },
    {
      title: 'Vercel',
      icon: '/icons/vercel.svg',
      description:
        'Next.js 기반 프로젝트를 Vercel을 통해 배포해왔으며, CI/CD 파이프라인을 구성하여 신속하고 안정적인 배포를 경험했습니다.',
    },
    {
      title: 'Docker',
      icon: '/icons/docker.svg',
      description:
        '도커를 활용하여 개발 환경을 컨테이너화하고, 프로젝트의 일관성을 유지하며 배포 및 테스트 자동화를 경험했습니다.',
    },
  ],
];
