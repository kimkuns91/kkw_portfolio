/**
 * JSON-LD 구조화 데이터 컴포넌트
 *
 * @description
 * SEO 최적화를 위한 구조화된 데이터 제공
 * Google 검색 결과에서 리치 스니펫 표시 가능
 *
 * @schemas
 * - Person: 개발자 정보
 * - WebSite: 웹사이트 정보
 * - BreadcrumbList: 네비게이션 구조
 */

const BASE_URL = 'https://portfolio.whitemouse.dev';

// Person 스키마 - 개발자 정보
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '김건우',
  alternateName: 'WhiteMouse',
  url: BASE_URL,
  image: `${BASE_URL}/images/photo_v2.png`,
  jobTitle: 'Fullstack Developer',
  description: '끊임없이 도전하고 배우는 Fullstack 개발자',
  sameAs: [
    'https://github.com/white-mouse-dev',
    'https://velog.io/@whitemouse',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'AWS',
  ],
};

// WebSite 스키마 - 웹사이트 정보
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '김건우 포트폴리오',
  alternateName: 'WhiteMouse Portfolio',
  url: BASE_URL,
  description: '끊임없이 도전하고 배우는 Fullstack 개발자 김건우의 포트폴리오',
  author: {
    '@type': 'Person',
    name: '김건우',
  },
  inLanguage: 'ko-KR',
};

// BreadcrumbList 스키마 - 네비게이션 구조
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: `${BASE_URL}/about`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Projects',
      item: `${BASE_URL}/projects`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Blog',
      item: `${BASE_URL}/blog`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contact',
      item: `${BASE_URL}/contact`,
    },
  ],
};

export const JsonLd = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
};
