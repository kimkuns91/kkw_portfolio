import { IProject } from '@/interface';

// 프로젝트 객체로 정의
export const Projects = {
  ZENIAN: {
    id: 1,
    title: 'ZENI AN',
    url_slug: 'ZENI_AN',
    description:
      'Cafe24 쇼핑몰 기반으로 사용자 편의성을 고려한 UI/UX 개선과 중국 결제 시스템을 도입한 프로젝트입니다.',
    link: 'https://zenian.kr/',
    thumbnail: [
      '/projects/zenian/zenian_01.png',
      '/projects/zenian/zenian_02.png',
      '/projects/zenian/zenian_03.png',
    ],
    created_at: '2021.10 - 2022.01',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
    content: `
## 🎯 프로젝트 요약
구찌오구찌 에스페리언쟈의 수석 디자이너 '제니안'의 요청에 따라,  
Cafe24 기반의 쇼핑몰 UI/UX를 개선하고 사용자 중심의 프론트엔드 환경을 최적화한 프로젝트입니다.  
Node.js와 Express.js를 사용하여 사용자 행동 패턴을 분석하는 커스터마이징 API를 개발했으며,  
중국 구매자를 타겟으로 중국 내 결제 시스템을 도입했습니다.

---

## 🧐 프로젝트 배경
클라이언트는 기존 Cafe24 쇼핑몰의 UI/UX가 노후화되어 사용자 편의성을 개선하고자 했습니다.  
특히, 중국 구매자를 타겟으로 하여 결제 시스템을 현지화하고,  
사용자 행동 패턴을 분석할 수 있는 맞춤형 기능을 요구했습니다.

---

## 🛠️ 접근 방식
- **🎨 UI/UX 개선**: Cafe24의 기본 템플릿을 개선하여 직관적인 사용자 경험 제공.
- **💡 프론트엔드 최적화**: HTML, CSS, JavaScript를 사용하여 사용성 및 로딩 속도 최적화.
- **📊 사용자 행동 분석**: Node.js와 Express.js를 사용하여 사용자 행동 패턴을 분석하는 커스텀 API 구현.
- **💳 결제 시스템 도입**: 중국 구매자를 타겟으로 한 중국 결제 시스템 연동.
- **📦 플랫폼 사용**: Cafe24의 기존 인프라를 유지하며 맞춤형 기능 추가.

---

## 🏆 결과
- ✅ 사용자 친화적인 UI/UX로 전환하여 쇼핑몰의 사용자 경험 개선.
- ✅ Node.js 기반 사용자 행동 분석 기능으로 데이터 기반 마케팅 가능.
- ✅ 중국 결제 시스템 도입으로 해외 구매자 유입 확대.
- ✅ Cafe24 플랫폼에 맞춰 기능을 맞춤 개발하여 유지보수 용이성 확보.
    `,
    github_url: '',
  },
  ABRAXAS: {
    id: 2,
    title: 'ABRAXAS',
    url_slug: 'Abraxas',
    description:
      'Cafe24 플랫폼을 활용하여 맞춤형 쇼핑몰을 개발하고, UI/UX 개선 및 안정적인 서비스 운영을 지원한 프로젝트입니다.',
    link: 'https://abraxaskorea.com/',
    thumbnail: [
      '/projects/abraxas/abraxas_02.webp',
      '/projects/abraxas/abraxas_01.png',
    ],
    created_at: '2022.01 - 2022.03',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
    content: `
## 🎯 프로젝트 요약
Cafe24 플랫폼을 활용하여 ABRAXAS의 맞춤형 쇼핑몰을 구축하고,  
HTML, CSS, JavaScript를 사용하여 프론트엔드를 커스터마이징한 프로젝트입니다.  
고객의 요구사항에 맞춰 UI/UX를 개선하고, 결제 프로세스 안정화를 위해 테스트 및 유지보수를 수행하였습니다.

---

## 🧐 프로젝트 배경
ABRAXAS는 기존 Cafe24 플랫폼을 기반으로 하되,  
사용자 친화적인 디자인과 맞춤형 기능을 추가하고자 했습니다.  
특히, 상품 등록과 결제 프로세스의 안정성을 확보하고,  
사용자 경험을 개선하기 위한 UI/UX 커스터마이징을 필요로 했습니다.

---

## 🛠️ 접근 방식
- **🎨 UI/UX 디자인 개선**: Cafe24의 기존 템플릿을 커스터마이징하여 사용자 경험 향상.
- **💡 프론트엔드 개발**: HTML, CSS, JavaScript를 사용하여 디자인 수정 및 스크립트 추가.
- **📡 백엔드 개발**: Node.js, Express.js를 활용하여 커스터마이징 기능 구현 및 데이터 처리.
- **🧪 기능 테스트 및 안정화**: 상품 등록, 결제 프로세스 등 핵심 기능 테스트 및 디버깅 수행.
- **🔧 유지보수 및 최적화**: 실시간 문제 해결 및 성능 최적화를 통한 안정적인 서비스 제공.

---

## 🏆 결과
- ✅ 사용자 친화적인 쇼핑몰로 UI/UX 개선.
- ✅ 결제 프로세스 안정화 및 상품 등록 기능 강화.
- ✅ Cafe24 플랫폼 기반으로 맞춤형 기능 추가 및 안정적인 서비스 운영.
- ✅ 실시간 유지보수와 성능 최적화를 통해 고객 만족도 향상.
    `,
    github_url: '',
  },
  IC_ENTERTAINMENT: {
    id: 3,
    title: 'IC 엔터테인먼트 홈페이지 개발',
    url_slug: 'IC_엔터테인먼트',
    description:
      'React, Three.js, Framer를 사용하여 역동적인 3D 홈페이지를 구현한 프로젝트입니다.',
    link: 'https://ic-korea.com/',
    thumbnail: ['/projects/ic/ic_01.webp'],
    created_at: '2024.01 -',
    stack: ['React', 'Three.js', 'Framer', 'Gabia Container Hosting'],
    content: `
## 🎯 프로젝트 요약
IC 엔터테인먼트의 소개 홈페이지를 React로 개발하고,  
Three.js와 Framer를 활용하여 역동적인 3D 요소와 원페이지 디자인을 구현했습니다.  
가비아 컨테이너 호스팅 서비스를 이용해 안정적으로 배포하였습니다.

---

## 🧐 프로젝트 배경
IC 엔터테인먼트는 자신들의 브랜드를 강조할 수 있는 창의적이고 역동적인 홈페이지를 원했습니다.  
기존 호스팅 서비스는 가비아에 이미 결제된 상태였기에,  
가비아 컨테이너 호스팅 서비스를 활용해 최적화된 환경에서 배포가 필요했습니다.

---

## 🛠️ 접근 방식
- **🎨 프론트엔드 개발**: React를 사용하여 인터랙티브한 사용자 경험을 제공.
- **💡 3D 디자인**: Three.js를 활용하여 3D 정육면체와 역동적인 시각 요소 구현.
- **🎬 애니메이션**: Framer를 이용해 부드럽고 매력적인 애니메이션 효과 추가.
- **🌐 배포**: 가비아 컨테이너 호스팅 서비스를 활용하여 안정적으로 배포.
- **📱 반응형 디자인**: 다양한 디바이스에서 최적화된 사용자 경험 제공.

---

## 🏆 결과
- ✅ Three.js와 Framer를 활용한 창의적인 3D 디자인과 애니메이션 구현.
- ✅ React 기반의 인터랙티브한 원페이지 소개 홈페이지 완성.
- ✅ 가비아 컨테이너 호스팅을 통해 안정적이고 효율적인 배포 완료.
- ✅ 클라이언트의 요구에 부합하는 브랜드 아이덴티티 강조.
    `,
    github_url: '',
  },
  LAW_FIRM_JK: {
    id: 4,
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
  LYNCARE: {
    id: 5,
    title: '린케어 홈페이지 개발',
    url_slug: '라인케어',
    description: '',
    link: 'https://www.lyncare.co.kr/',
    thumbnail: [
      '/projects/lyncare/lyncare_01.png',
      '/projects/lyncare/lyncare_02.png',
      '/projects/lyncare/lyncare_03.png',
      '/projects/lyncare/lyncare_04.png',
    ],
    created_at: '2024.01 -',
    stack: ['Next.js', 'AWS', 'Youtube API'],
    content: `

    `,
    github_url: '',
  },
  TK_TRADE: {
    id: 6,
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
- ✅ 검색 및 자동 완성 기능을 통해 사용자의 제품 탐색 경험 개선.
`,
    github_url: '',
  },
  LAW_AND_PEOPLE: {
    id: 7,
    title: '법무법인 법과 사람들',
    url_slug: '법무법인_법과_사람들',
    description:
      'React.js, TypeScript, AWS, YouTube API를 활용하여 친근한 느낌의 법무법인 홈페이지를 구축하고, 동영상 관리 기능을 추가한 프로젝트입니다.',
    link: 'https://www.lawandpeople.co.kr/',
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
  DOGGIENUTS: {
    id: 8,
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
- ✅ 다양한 디바이스에서 최적화된 사용자 경험 제공.
`,
    github_url: '',
  },
  LYNPLUS: {
    id: 9,
    title: 'LynPlus 홈페이지',
    url_slug: 'lynplus',
    description:
      'React를 사용하여 실버케어 장비 소개 홈페이지를 개발한 프로젝트입니다.',
    link: 'http://lynplus.kr',
    thumbnail: ['/projects/lynplus/lynplus_01.webp'],
    created_at: '2023.08 - 2023.10',
    stack: ['React', 'Cafe24 Hosting'],
    content: `
## 🎯 프로젝트 요약
LynPlus는 실버케어 장비를 소개하는 홈페이지로, React를 사용하여 개발되었습니다.  
깔끔한 디자인과 함께 제품 소개 및 규격을 자세히 보여주는 페이지를 구현했으며,  
여러 정부 지원 정책 사이트와 연결 기능을 포함하고,  
관리자 페이지를 통해 배너 이미지를 쉽게 업데이트할 수 있도록 했습니다.

---

## 🧐 프로젝트 배경
LynPlus는 고주파 심부열 자극기 및 스마트 터치 실버 테이블과 같은 실버케어 장비를 판매하며,  
정부와의 계약 체결을 주요 목적으로 하는 회사입니다.  
이를 위해 제품의 상세한 정보를 전달하고, 관련 정책 사이트와 연결되는 기능이 필요했습니다.  
또한, 클라이언트는 Cafe24에 이미 결제된 호스팅 환경을 활용하고자 했습니다.

---

## 🛠️ 접근 방식
- **🎨 UI/UX 디자인**: React를 사용하여 제품 중심의 직관적이고 깔끔한 디자인 구현.
- **📡 배포**: Cafe24 호스팅 서비스를 이용해 안정적으로 배포.
- **💡 제품 소개**: 제품 소개 및 규격을 한눈에 볼 수 있도록 상세 페이지 구성.
- **🔗 사이트 연결**: 정부 지원 정책 사이트와 연결하여 사용자 편의성 향상.
- **🖼️ 배너 관리**: 관리자 페이지에서 배너 이미지를 업로드하고 실시간으로 업데이트 가능하도록 구현.

---

## 🏆 결과
- ✅ 실버케어 장비의 특징과 규격을 명확히 전달하는 사용자 친화적 홈페이지 구축.
- ✅ 관리자 페이지를 통해 배너 이미지 변경과 유지보수 용이성 확보.
- ✅ Cafe24 기반으로 안정적인 배포 및 운영 환경 제공.
- ✅ 관련 사이트와의 연결로 사용자 경험 및 접근성 향상.
    `,
    github_url: '',
  },
  WESTLOKE: {
    id: 10,
    title: 'Wesloke Amplifier',
    url_slug: 'westloke_amplifier',
    description:
      'Next.js 14와 AWS를 사용하여 수제 앰프 제작 회사의 홈페이지를 개발한 프로젝트입니다.',
    link: '',
    thumbnail: [
      '/projects/westloke/westloke_01.png',
      '/projects/westloke/westloke_02.png',
    ],
    created_at: '2023.11 - 2024.01',
    stack: [
      'Next.js 14',
      'AWS EC2',
      'AWS Load Balancer',
      'PayPal API',
      'Nodemailer',
    ],
    content: `
## 🎯 프로젝트 요약
미국 워싱턴 레드먼드에 위치한 수제 앰프 제작 회사 Wesloke Amplifier의 홈페이지를 개발했습니다.  
Next.js 14를 사용하여 프론트엔드를 구축하고, AWS EC2와 Load Balancer를 활용하여 안정적인 배포를 완료했습니다.  
PayPal API를 이용해 인터넷 결제 기능을 구현했으나, 현재는 이메일 주문 방식(Nodemailer 사용)으로 운영되고 있습니다.

---

## 🧐 프로젝트 배경
Wesloke Amplifier는 회사 소개와 앰프 스펙 정보를 제공하는 웹사이트를 통해 고객과의 접점을 강화하고자 했습니다.  
추후 인터넷 결제를 지원하기 위한 PayPal API 통합을 요청했으며,  
현재는 회사 사정으로 이메일 주문 시스템을 통해 운영되고 있습니다.

---

## 🛠️ 접근 방식
- **🎨 프론트엔드 개발**: Next.js 14를 사용하여 반응형 웹사이트와 직관적인 사용자 인터페이스 구현.
- **💡 결제 시스템**: PayPal API를 통합하여 온라인 결제 기능 구현 (현재 비활성화).
- **📧 이메일 주문**: Nodemailer를 사용하여 이메일 문의 및 주문 기능 개발.
- **🌐 배포 환경**: AWS EC2와 Load Balancer를 활용하여 안정적이고 확장 가능한 배포 환경 구축.
- **📱 반응형 디자인**: 모바일 및 데스크톱 환경에서 최적화된 사용자 경험 제공.

---

## 🏆 결과
- ✅ Next.js와 AWS 기반의 안정적이고 성능 높은 홈페이지 구축.
- ✅ PayPal API를 활용한 결제 기능 구현 (추후 활성화 가능).
- ✅ 이메일 문의 및 주문 시스템으로 고객과의 접근성 강화.
- ✅ 클라이언트 요구에 맞춘 제품 정보 제공 및 브랜딩 강화.
    `,
    github_url: '',
  },
  SHORT_FORM: {
    id: 11,
    title: '숏폼 동영상 OTT 플랫폼 기획 및 개발',
    url_slug: 'shortform_ott',
    description:
      'HG 엔터테인먼트를 위한 숏폼 동영상 OTT 플랫폼 프로토타입을 개발한 프로젝트입니다.',
    link: '',
    thumbnail: [
      '/projects/shortform/shortform_01.png',
      '/projects/shortform/shortform_02.png',
    ],
    created_at: '2024.01 -',
    stack: [
      'Next.js 14',
      'Recoil',
      'MongoDB',
      'Google Cloud Storage',
      'video.js',
    ],
    content: `
## 🎯 프로젝트 요약
HG 엔터테인먼트를 위한 숏폼 동영상 OTT 플랫폼의 테스트 버전을 개발했습니다.  
이 프로젝트는 TopToon의 실사화 드라마 콘텐츠를 기반으로 서비스 기획 및 동영상 플랫폼의 동작을 검증하기 위해 제작되었습니다.  
Next.js 14를 사용하여 웹사이트를 구축하고, Google Cloud Storage를 활용해 동영상을 저장 및 스트리밍하며, video.js를 이용한 커스텀 동영상 플레이어를 구현했습니다.

---

## 🧐 프로젝트 배경
HG 엔터테인먼트는 웹툰 기반 드라마 콘텐츠를 제공하기 위한 숏폼 동영상 OTT 플랫폼을 준비하고 있었습니다.  
이 서비스는 추후 정식 출시를 위한 기능 검증 및 사용자 피드백 수집을 목적으로 기획되었습니다.  
특히 동영상 플레이어 커스터마이징과 클라우드 기반의 안정적인 동영상 스트리밍이 주요 요구사항이었습니다.

---

## 🛠️ 접근 방식
- **🎨 프론트엔드 개발**: Next.js 14를 사용하여 반응형 웹사이트 구현.
- **💡 상태관리**: Recoil을 사용하여 동영상 플레이어 상태 및 사용자 인터랙션 관리.
- **📡 동영상 저장 및 스트리밍**: Google Cloud Storage를 활용하여 동영상을 저장하고 스트리밍.
- **🎥 동영상 플레이어**: video.js를 사용하여 커스텀 동영상 플레이어 구현 및 기능 테스트.
- **📊 데이터베이스**: 테스트 목적의 MongoDB를 사용하여 데이터 저장 및 관리.

---

## 🏆 결과
- ✅ 안정적인 동영상 스트리밍과 커스텀 플레이어 동작을 검증.
- ✅ Google Cloud Storage와의 연동을 통해 확장성을 고려한 인프라 구현.
- ✅ 사용자 인터페이스와 플레이어 상태 관리 테스트 완료.
- ✅ OTT 플랫폼 기획 및 동작 검증을 위한 성공적인 테스트 단계 완료.
    `,
    github_url: 'https://github.com/kimkuns91/HamCatStream/tree/main',
  },
  EBTI: {
    id: 12,
    title: 'EBTI 프로젝트',
    url_slug: 'ebti',
    description:
      '기업가 행동유형 분석 서비스를 웹사이트로 구현한 프로젝트입니다.',
    link: '',
    thumbnail: [
      '/projects/ebti/ebti_01.png',
      '/projects/ebti/ebti_02.png',
      '/projects/ebti/ebti_03.png',
      '/projects/ebti/ebti_04.png',
    ],
    created_at: '2024.02 - 2024.05',
    stack: [
      'Next.js 14',
      'Redux',
      'MongoDB',
      'next-auth',
      'Python',
      'Flask/FastAPI',
      'Nodemailer',
      'react-to-pdf',
    ],
    content: `
## 🎯 프로젝트 요약
EBTI 프로젝트는 한양대학교 박혜영 교수님의 의뢰로 개발된 기업가 행동유형 분석 서비스입니다.  
Next.js 14를 사용하여 웹사이트를 구축하였으며, Python을 활용한 데이터 분석과 MongoDB 기반의 유저 데이터 관리가 포함되었습니다.  
결과는 이메일로 전송되며, PDF로 저장할 수 있는 기능을 제공합니다.

---

## 🧐 프로젝트 배경
박혜영 교수님은 기업가 행동유형 분석을 통해 개인화된 결과를 제공하는 서비스를 원했습니다.  
서비스는 사용자 인증, 데이터 분석, 결과 전송 및 저장 기능을 요구했으며,  
특히 사용자가 직관적으로 서비스를 이용할 수 있는 UI/UX가 필요했습니다.

---

## 🛠️ 접근 방식
- **🎨 프론트엔드 개발**: Next.js 14를 사용하여 반응형 웹사이트를 구축.
- **💡 회원 인증**: next-auth를 사용하여 카카오톡 및 구글 로그인을 지원.
- **📊 데이터 관리**: MongoDB를 이용하여 확장성을 고려한 데이터베이스 구성.
- **📡 API 구현**: Next.js API Routes를 통해 회원 인증 및 데이터 처리를 구현.
- **🔍 데이터 분석**: Python (Flask 또는 FastAPI)을 활용하여 데이터 분석 및 처리 로직 구현.
- **📧 결과 전송 및 PDF 저장**:
  - Nodemailer를 사용하여 이메일로 분석 결과 전송.
  - react-to-pdf를 통해 A4 크기로 최적화된 PDF 파일로 결과 저장.
- **🖥️ 관리자 페이지**:
  - 사용자 관리, 쿠폰 관리, 데이터 열람 기능을 포함하여 효율적인 관리 시스템 구현.

---

## 🏆 결과
- ✅ 직관적인 사용자 인터페이스와 효율적인 데이터 처리로 사용자 경험 강화.
- ✅ Python과 MongoDB를 결합하여 정확하고 신뢰성 높은 데이터 분석 제공.
- ✅ 이메일 전송 및 PDF 저장 기능을 통해 사용자 접근성 확대.
- ✅ 관리자 페이지를 통해 효율적인 서비스 운영 지원.
    `,
    github_url: '',
  },
  PSYCHOLOGY: {
    id: 13,
    title: '가톨릭대학교 심리학 연구 프로그램 기획 및 개발',
    url_slug: '가톨릭대학교_심리학',
    description:
      'Next.js, Python, MongoDB를 활용하여 심리학 연구를 위한 데이터 수집 및 분석 프로그램을 개발한 프로젝트입니다.',
    link: '',
    thumbnail: [
      '/projects/psychology/psychology_01.png',
      '/projects/psychology/psychology_02.png',
      '/projects/psychology/psychology_03.png',
      '/projects/psychology/psychology_04.png',
    ],
    created_at: '2024.08 - 2024.10',
    stack: [
      'Next.js',
      'Python',
      'MongoDB',
      'Pandas',
      'Selenium',
      'Matplotlib',
      'Vercel',
    ],
    content: `
## 🎯 프로젝트 요약
가톨릭대학교 심리학 대학원생들의 연구를 위해 Next.js와 Python을 사용하여 데이터 수집, 분석 및 시각화를 지원하는 웹 애플리케이션을 개발했습니다.  
MongoDB를 데이터베이스로 사용하여 데이터를 효율적으로 저장하고, A/B 테스트를 구현하였습니다.  
테스트 결과는 관리자 페이지에서 실시간으로 확인할 수 있으며, 엑셀 파일로 다운로드할 수 있습니다.

---

## 🧐 프로젝트 배경
심리학 연구를 위해 사용자 행동 데이터를 수집하고 분석하는 도구가 필요했습니다.  
특히, SNS 데이터를 활용한 연구를 위해 인스타그램 크롤링, 데이터 정제 및 클릭 패턴 분석이 포함되었습니다.  
연구자들이 손쉽게 데이터를 확인하고, A/B 테스트를 수행할 수 있도록 직관적인 UI와 관리자 기능을 구현하였습니다.

---

## 🛠️ 접근 방식
- **🎨 UI/UX 디자인**: Next.js를 사용하여 직관적이고 반응형 웹 애플리케이션 구성.
- **💡 데이터 수집 및 분석**: 
   - Python과 \`selenium\`을 사용하여 인스타그램 크롤링 및 데이터 수집 자동화.
   - \`pandas\`를 사용하여 수집된 데이터의 정제 및 전처리.
   - \`matplotlib\`를 사용하여 시각화 및 클릭 패턴 분석.
- **📊 데이터베이스**: MongoDB를 사용하여 대량의 연구 데이터를 효율적으로 저장 및 관리.
- **🧪 A/B 테스트**: A/B 테스트를 구현하여 연구자가 다양한 변수를 비교할 수 있도록 지원.
- **📡 관리자 페이지**: 관리자 전용 웹페이지에서 실시간으로 테스트 결과를 조회하고, 데이터를 엑셀 파일로 다운로드하는 기능 구현.

---

## 🏆 결과
- ✅ Python 데이터 수집 및 분석 라이브러리 활용으로 신뢰성 높은 연구 데이터 확보.
- ✅ 실시간 데이터 수집 및 시각화를 통해 연구 데이터 활용도 증대.
- ✅ MongoDB를 통한 대량 데이터 저장 및 관리 최적화.
- ✅ 직관적인 UI로 연구자들이 쉽게 A/B 테스트를 수행할 수 있도록 지원.
- ✅ 관리자 웹페이지에서 데이터를 실시간 확인하고, 엑셀 다운로드 가능.
    `,
    github_url: '',
  },
  PORTFOLIO: {
    id: 14,
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
- ✅ 반응형 디자인과 애니메이션으로 사용 경험 강화.
`,
    github_url: 'https://github.com/kimkuns91/kkw_portfolio',
  },
} as const;

// 정렬 함수
export const sortProjects = (projects: IProject[]) => {
  return [...projects].sort((a, b) => b.id - a.id);
};

// 배열로 변환
export const PROJECT_LIST = sortProjects(
  Object.values(Projects) as unknown as IProject[]
);

// 특정 프로젝트 찾기 예시:
// const tkTradeProject = Projects.TK_TRADE;
