import { IProject } from "@/interface";

export const sortProjects = (projects: IProject[]) => {
  return [...projects].sort((a, b) => b.id - a.id); // 내림차순 정렬
};

export const PROJECT_LIST = sortProjects([
  {
    id: 1,
    title: 'ZENI AN',
    url_slug: 'ZENI_AN',
    description: '',
    link: 'https://polantino.cafe24.com/',
    thumbnail: ['/projects/1.png'],
    created_at: '2021.10 - 2022.01',
    stack: ['HTML', 'CSS', 'JS', 'Node.js', 'Express.js'],
    content: `
    쇼핑몰 플랫폼의 초기 설계부터 개발 및 배포까지 전반적인 작업을 수행함
사용자 편의성을 고려한 프론트엔드 UI/UX 개선 및 최적화를 진행함
Node.js와 Express.js를 활용하여 커스터마이징 API 구현함
고객 요구사항을 반영하여 기능 개선 및 신규 기능 추가 작업 수행
운영 중 발생하는 기술적 문제를 해결하며 안정적인 서비스 제공을 지원함`,
    github_url: '',
  },
  {
    id: 2,
    title: 'ABRAXAS',
    url_slug: 'Abraxas',
    description: '',
    link: '',
    thumbnail: ['/projects/1.png'],
    created_at: '2022.01 - 2022.03',
    stack: ['HTML', 'CSS', 'JS', 'Node.js', 'Express.js'],
    content: `
    Cafe24 플랫폼을 활용하여 쇼핑몰 구축 및 맞춤형 기능 구현을 담당함
HTML, CSS, JavaScript를 사용하여 쇼핑몰의 디자인 및 기능을 커스터마이징하여
사용자 경험을 개선함
고객의 요구사항에 맞춘 레이아웃 변경, UI 수정, 및 스크립트 추가 작업을 진행함
상품 등록, 결제 프로세스 등 핵심 기능의 테스트와 디버깅을 통해 안정적인 서비스 운영
을 지원함
쇼핑몰 유지보수를 수행하며, 실시간 문제 해결과 기능 최적화를 통해 고객 만족도를 향
상시킴`,
    github_url: '',
  },
  {
    id: 3,
    title: '법무법인 정곡 홈페이지 / 상담 신청 및 관리 기능 개발',
    url_slug: '법무법인_정곡',
    description:
      '법무법인 정곡의 기존 PHP 기반 홈페이지를 유지하면서 UI/UX를 개선하고, React.js와 Node.js로 상담 신청 및 관리 기능을 추가한 프로젝트입니다.',
    link: 'http://lawfirmjk.co.kr/',
    thumbnail: [
      '/projects/lawfirmjk/junggok_01.png',
      '/projects/lawfirmjk/junggok_02.png',
      '/projects/lawfirmjk/junggok_03.png',
    ],
    created_at: '2022.04 - 2022.07',
    stack: [
      'PHP',
      'JavaScript',
      'React.js',
      'Redux',
      'React-Hook-Form',
      'Node.js',
      'Express.js',
      'React Native',
    ],
    content: `
## 🎯 프로젝트 요약
법무법인 정곡의 기존 PHP 기반 홈페이지를 유지하면서 UI/UX를 개선하고, React.js와 Node.js를 활용하여 사용자 친화적인 상담 신청 및 관리 기능을 추가했습니다.

또한, 변호사가 휴대폰으로 실시간 상담 내역을 확인하고 관리할 수 있도록 React Native를 활용한 간단한 모바일 애플리케이션을 개발하여 알람 기능을 구현했습니다.
---

## 🧐 프로젝트 배경
법무법인 정곡은 기존 PHP 기반으로 개발된 홈페이지를 유지한 채, 사용자 친화적인 상담 신청 기능을 추가하고자 했습니다.  
특히 변호사가 외부에서도 실시간으로 상담 내역을 확인하고 관리할 수 있는 모바일 기능이 필요했습니다.

---

## 🛠️ 접근 방식
- **🎨 UI/UX 개선**: 기존 PHP 기반 웹사이트의 디자인을 개선하고, 사용자 친화적으로 재구성.
- **💡 기능 개발**: React.js와 Node.js를 활용하여 상담 신청 및 관리 기능을 추가.
- **📊 데이터 처리 최적화**: 기존 PHP 서버와의 데이터 호환성을 유지하면서 Node.js 기반으로 상담 데이터 처리.
- **🌐 서버 환경 구성**: AWS EC2를 활용하여 안정적인 서버 환경을 구축.
- **📱 모바일 앱 개발**: 변호사가 휴대폰으로 실시간 상담 내역을 확인할 수 있도록 React Native 앱 개발 및 푸시 알림 기능 구현.

---

## 🏆 결과
- ✅ 기존 PHP 기반의 서버 환경을 유지하며, 최신 기술을 결합한 상담 신청 기능 추가.
- ✅ React Native 기반으로 변호사가 실시간 상담 내역을 확인하고 컨트롤할 수 있는 모바일 앱 개발.
- ✅ 사용자 경험 개선 및 모바일 접근성 강화.
- ✅ 법무법인의 상담 프로세스 디지털화로 업무 효율성 향상.
`,
    github_url: '',
  },
  {
    id: 4,
    title: 'TK-Trade',
    url_slug: 'tk_trade',
    description:
      'TUBE EXPANDER, BEVELING MACHINE과 같은 공학 장비를 소개하는 영문 수출 목적의 웹사이트를 개발한 프로젝트입니다.',
    link: 'https://www.tk-trade.co.kr/',
    thumbnail: [
      '/projects/tktrade/tk_trade_01.png',
      '/projects/tktrade/tk_trade_02.png',
      '/projects/tktrade/tk_trade_03.png',
    ],
    created_at: '2022.07 - 2022.12',
    stack: [
      'React.js',
      'Node.js',
      'Express',
      'Redux',
      'styled-components',
      'AWS EC2',
      'AWS Load Balancer',
      'GitHub Actions',
      'NodeMailer',
    ],
    content: `
   ## 🎯 프로젝트 요약
TK-Trade는 TUBE EXPANDER, BEVELING MACHINE 등의 공학 장비를 소개하는 영문 수출 목적의 웹사이트입니다.  
React.js와 Node.js 기반으로 제작되었으며, AWS 인프라와 CI/CD 자동화를 적용하여 안정적인 배포와 운영을 지원했습니다.  
제품 검색, 자동 완성 기능, 이메일 문의 기능을 포함하여 사용자가 편리하게 제품을 탐색할 수 있도록 개발했습니다.

---

## 🧐 프로젝트 배경
TK-Trade는 수출용 공학 장비를 소개하기 위해 영문으로 제작된 웹사이트입니다.  
클라이언트는 글로벌 시장을 타겟으로 하여,  
- 직관적인 제품 탐색
- 빠른 카테고리 전환 성능
- 이메일 문의 기능  
등을 요구했습니다.

---

## 🛠️ 접근 방식
- **🎨 UI/UX 디자인**: 반응형 웹 디자인을 적용하여 다양한 디바이스에서 최적화.
- **💡 프론트엔드 개발**: React.js, Redux, styled-components를 사용하여 사용자 친화적인 UI 구현.
- **📡 백엔드 개발**: Node.js, Express를 사용하여 API 개발 및 데이터 처리.
- **📧 이메일 문의 기능**: NodeMailer를 사용하여 이메일 문의 폼 구현.
- **🔍 검색 기능 개선**: 제품 검색과 자동 완성 기능을 추가하고, 카테고리 전환 성능 최적화.
- **🌐 서버 및 배포**: AWS EC2, Load Balancer를 사용하여 안정적인 서버 환경 구축.
- **🛠️ CI/CD 자동화**: GitHub Actions를 활용한 자동 배포 환경 구축.

---

## 🏆 결과
- ✅ 영어 기반의 글로벌 수출 목적 웹사이트 완성.
- ✅ NodeMailer를 활용한 효율적인 이메일 문의 기능 구현.
- ✅ AWS 인프라와 CI/CD 적용으로 안정적인 서비스 제공.
- ✅ 반응형 디자인 적용 및 성능 최적화로 빠른 카테고리 전환 성능 확보.
- ✅ 검색 및 자동 완성 기능을 통해 사용자의 제품 탐색 경험 개선.`,
    github_url: '',
  },
  {
    id: 5,
    title: '법무법인 법과 사람들',
    url_slug: '법무법인_법과_사람들',
    description:
      'React.js, TypeScript, AWS, YouTube API를 활용하여 친근한 느낌의 법무법인 홈페이지를 구축하고, 동영상 관리 기능을 추가한 프로젝트입니다.',
    link: '',
    thumbnail: [
      '/projects/lawandpeople/lawandpeople_01.png',
      '/projects/lawandpeople/lawandpeople_02.png',
      '/projects/lawandpeople/lawandpeople_03.png',
    ],
    created_at: '2023.01 - 2023.04',
    stack: [
      'React.js',
      'TypeScript',
      'Redux',
      'AWS EC2',
      'AWS S3',
      'Load Balancer',
      'YouTube API',
      'styled-components',
      'react-quill',
    ],
    content: `
    ## 🎯 프로젝트 요약
    React.js와 AWS 인프라를 활용하여 친근하고 직관적인 법무법인 홈페이지를 구축했습니다.  
    클라이언트의 요청에 따라 기존의 무거운 법률 웹사이트와 차별화된 밝은 색상과 일러스트 디자인을 적용했으며,  
    유튜브 API와 AWS S3를 이용해 동영상 업로드 및 관리를 구현했습니다.
    
    ---
    
    ## 🧐 프로젝트 배경
    법무법인 "법과 사람들"은 전통적인 법률 사이트의 중후하고 무거운 느낌을 탈피하고,  
    더 친근하고 접근하기 쉬운 웹사이트를 원했습니다.  
    비개발자도 쉽게 사용 가능한 콘텐츠 관리 기능과,  
    법률 관련 동영상을 홈페이지에서 직접 관리하고 공유할 수 있는 기능이 필요했습니다.
    
    ---
    
    ## 🛠️ 접근 방식
    - **🎨 UI/UX 디자인**: 밝은 색상과 일러스트를 활용한 친근하고 직관적인 디자인 적용.
    - **💡 프론트엔드 개발**: React.js, TypeScript, Redux, styled-components를 사용하여 개발.
    - **📊 콘텐츠 관리 기능**: \`react-quill\`을 사용하여 비개발자도 쉽게 사용할 수 있는 게시판 에디터 구현.
    - **📹 동영상 관리**: AWS S3에 동영상 업로드 및 YouTube API를 활용한 영상 재생 기능 구현.
    - **🌐 서버 및 배포**: AWS EC2, S3, Load Balancer를 이용하여 서버 환경을 구축하고 안정적인 배포 진행.
    - **📱 반응형 웹 디자인**: 다양한 디바이스에 대응할 수 있도록 반응형 웹 디자인 적용.
    
    ---
    
    ## 🏆 결과
    - ✅ 친근한 UI/UX를 통해 법무법인 웹사이트의 고정관념을 탈피.
    - ✅ React와 AWS를 결합하여 안정적이고 효율적인 동영상 관리 시스템 구축.
    - ✅ 비개발자가 쉽게 콘텐츠를 관리할 수 있는 게시판 에디터 제공.
    - ✅ AWS 인프라를 활용하여 안정적인 서버 환경과 원활한 서비스 운영을 지원.
    `,

    github_url: '',
  },
  {
    id: 6,
    title: 'Doggienuts',
    url_slug: 'doggienuts',
    description:
      '애완동물 사료를 소개하는 다국어 지원 반응형 웹사이트를 개발한 프로젝트입니다.',
    link: 'https://www.petsmealkorea.com/',
    thumbnail: [
      '/projects/doggienuts/doggienuts_01.png',
      '/projects/doggienuts/doggienuts_02.png',
      '/projects/doggienuts/doggienuts_03.png',
    ],
    created_at: '2023.05 - 2023.07',
    stack: [
      'React.js',
      'Node.js',
      'Express',
      'Redux',
      'styled-components',
      'AWS EC2',
      'AWS Load Balancer',
      'GitHub Actions',
    ],
    content: `## 🎯 프로젝트 요약
Doggienuts는 애완동물 사료를 소개하는 다국어 지원 반응형 웹사이트입니다.  
클라이언트의 수출 비즈니스 요구사항을 반영하여, 영어와 중국어를 지원하는 다국어 웹사이트를 구축했습니다.  
React.js와 Node.js 기반으로 개발되었으며, CI/CD 파이프라인은 GitHub Actions를 통해 자동화되었습니다.

---

## 🧐 프로젝트 배경
클라이언트는 애완동물 사료의 해외 수출을 진행하고 있었고,  
중국어와 영어로 된 웹사이트를 통해 제품을 효과적으로 소개하고자 했습니다.  
특히 다양한 디바이스에서 최적화된 반응형 웹 디자인과,  
다국어 전환이 직관적인 시스템이 필요했습니다.

---

## 🛠️ 접근 방식
- **🎨 UI/UX 디자인**: 반응형 웹 디자인을 적용하여 다양한 디바이스에서 최적화된 사용자 경험 제공.
- **💡 프론트엔드 개발**: React.js, Redux, styled-components를 사용하여 인터페이스 구성.
- **📊 다국어 지원**: 사용자가 클릭 한 번으로 영어와 중국어 간 전환이 가능하도록 구현.
- **📡 백엔드 개발**: Node.js, Express로 백엔드 구축 및 다국어 콘텐츠 제공.
- **🌐 서버 및 배포**: AWS EC2, Load Balancer를 활용한 안정적인 서버 환경 구축 및 CI/CD는 GitHub Actions로 자동화.
- **📱 반응형 웹 디자인**: 모바일, 태블릿, PC 등 다양한 디바이스에 대응하는 디자인 구현.

---

## 🏆 결과
- ✅ 영어와 중국어를 지원하는 직관적인 다국어 웹사이트 완성.
- ✅ AWS 기반으로 안정적인 서버 운영 및 자동화 배포 환경 구축.
- ✅ React.js와 Node.js의 효율적인 사용으로 빠른 로딩 속도와 안정성 확보.
- ✅ 다양한 디바이스에서 최적화된 사용자 경험 제공.`,
    github_url: '',
  },
  {
    id: 7,
    title: 'D.Block 재고관리 어플리케이션',
    url_slug: '법무법인 정곡 홈페이지 / 상담 신청 및 관리 기능 개발',
    description: '',
    link: '',
    thumbnail: ['/projects/1.png'],
    created_at: '2023.08 - 2023.12',
    stack: ['Flutter', 'Firebase'],
    content: `
  Flutter를 활용하여 크로스 플랫폼 재고관리 애플리케이션을 설계 및 개발함
Firebase를 이용해 실시간 데이터베이스와 인증 시스템을 구축하여 안정적인 데이터
관리와 사용자 인증을 구현함
사용자 친화적인 UI/UX를 설계하여 쉽고 직관적인 재고 관리가 가능하도록 지원함
모바일 환경에 최적화된 성능을 제공하며, 다양한 디바이스에서의 원활한 사용성을 보
장함`,
    github_url: '',
  },
  {
    id: 8,
    title: '숏폼 동영상 OTT 플랫폼 기획 및 개발',
    url_slug: '법무법인 정곡 홈페이지 / 상담 신청 및 관리 기능 개발',
    description: '',
    link: '',
    thumbnail: ['/projects/1.png'],
    created_at: '2024.01 -',
    stack: ['Next.js', 'AWS', 'Youtube API'],
    content: `
 Next.js를 활용하여 SEO 최적화와 고성능의 프론트엔드를 구축함
동영상 스트리밍 및 재생 환경을 최적화하여 다양한 디바이스에서 원활하게 콘텐츠를
제공할 수 있도록 설계
플랫폼 기획 초기 단계부터 참여하여 사용자 요구사항 분석, 기능 정의, 그리고 개발 로
드맵 수립에 기여함
UX/UI 디자인부터 기술 구현까지 전반적인 프로젝트 관리와 협업을 통해 플랫폼 완성
도를 높임
`,
    github_url: '',
  },
  {
    id: 9,
    title: '가톨릭대학교 심리학 연구 프로그램 기획 및 개발',
    url_slug: '법무법인 정곡 홈페이지 / 상담 신청 및 관리 기능 개발',
    description: '',
    link: '',
    thumbnail: ['/projects/1.png'],
    created_at: '2024.08 - 2024.10',
    stack: ['Flutter', 'Firebase'],
    content: `
 가톨릭대학교 심리학 연구 클라이언트의 요구사항을 수집 및 분석하여 맞춤형 프로그램
을 설계 및 개발
Next.js를 활용하여 사용자 친화적인 인터페이스와 고성능 웹 애플리케이션을 구축함
실시간 데이터베이스와 연동하여 실시간 데이터 수집 및 저장 기능을 구현하여 연구 효
율성을 극대화
AI 기반 데이터 분석 기능을 개발, 연구 데이터의 패턴과 통찰력을 도출하여 심리학 연
구에 기여
클라이언트와의 긴밀한 협업을 통해 연구 요구사항에 부합하는 최적의 솔루션을 제공`,
    github_url: '',
  },
  {
    id: 10,
    title: '포트폴리오 웹사이트 (Next.js 15)',
    url_slug: '포트폴리오',
    description:
      'Next.js 15, TypeScript, Tailwind CSS, ShadCN/UI를 사용하여 개발한 반응형 개인 포트폴리오 웹사이트입니다.',
    link: 'https://portfolio.whitemouse.dev/',
    thumbnail: [
      '/projects/portfolio/portfolio_01.png',
      '/projects/portfolio/portfolio_02.png',
      '/projects/portfolio/portfolio_03.png',
    ],
    created_at: '2024-12 - 2025-01',
    stack: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'ShadCN/UI',
      'Zustand',
      'React Hook Form',
      'NodeMailer',
      'React Three Fiber',
      'Framer Motion',
    ],
    content: `## 🎯 프로젝트 요약
Next.js 15와 최신 웹 기술을 활용하여 개인 포트폴리오 웹사이트를 개발했습니다.  
포트폴리오 업데이트 및 최신 기술 스택을 학습하기 위해 진행한 프로젝트입니다.  
특히 Next.js 15와 React 19의 새로운 기능을 적용하고, 상태 관리를 위해 Zustand를 사용했습니다.  
우주를 테마로 한 WebGL 배경과 인터랙티브 애니메이션을 구현했으며,  
모든 컴포넌트는 재사용성을 고려해 개발했습니다.

---

## 🧐 프로젝트 배경
기존 포트폴리오가 Recoil과 React 18을 기반으로 구성되어 있었고,  
Next.js 15와 React 19가 출시됨에 따라 최신 기술 학습 및 마이그레이션을 위해 프로젝트를 업데이트했습니다.  
특히 상태관리 라이브러리 Recoil과 React 19의 호환성 문제가 발생하여 Zustand로 교체했습니다.  
또한, 시각적 효과를 강조하기 위해 3D WebGL 배경과 Framer Motion을 활용한 애니메이션을 적용했습니다.

---

## 🛠️ 접근 방식
- **🎨 UI/UX 디자인**: Tailwind CSS와 ShadCN/UI를 활용하여 반응형 디자인 및 다크 모드 구현.
- **💡 프론트엔드 개발**: Next.js 15와 TypeScript를 기반으로 마이그레이션 및 성능 최적화.
- **📊 상태관리**: Recoil에서 Zustand로 전환하여 React 19와의 호환성 문제 해결.
- **📧 문의 기능**: React Hook Form과 NodeMailer를 활용하여 이메일 전송 기능 개발.
- **🪐 3D 애니메이션 배경**: \`@react-three/fiber\`, \`@react-three/drei\`, \`three\`를 사용하여 우주 테마의 3D WebGL 배경 구현 (alpha 버전 사용).
- **📡 CI/CD & 배포**: 무료 버전의 Vercel을 사용하여 CI/CD와 서버 배포 자동화.
- **🎬 애니메이션**: Framer Motion을 사용하여 페이지 전환과 컴포넌트 인터랙션 애니메이션 추가.
- **♻️ 재사용성**: 대부분의 컴포넌트를 재사용 가능하도록 설계.

---

## 🏆 결과
- ✅ Next.js 15와 React 19 기반으로 최신 기술 스택 적용.
- ✅ Zustand를 통한 간결하고 직관적인 상태 관리 도입.
- ✅ 3D WebGL 배경을 적용한 몰입도 높은 포트폴리오 사이트 완성.
- ✅ CI/CD와 Vercel 무료 플랜을 활용한 자동화 배포 완료.
- ✅ 반응형 디자인과 애니메이션으로 사용 경험 강화.`,
    github_url: 'https://github.com/kimkuns91/kkw_portfolio',
  },
]);
