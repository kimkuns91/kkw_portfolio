import { Metadata } from 'next';
import { PROJECT_LIST } from '@/constants/projects';

/**
 * Projects 페이지 메타데이터 생성 함수
 *
 * @description
 * - 동적으로 프로젝트 개수와 기술 스택을 추출하여 description 생성
 * - SEO 최적화를 위한 keywords 자동 생성
 */
const generateProjectsMetadata = (): Metadata => {
  // 프로젝트에서 사용된 모든 기술 스택 추출 (중복 제거)
  const projectTechnologies = Array.from(
    new Set(PROJECT_LIST.flatMap((project) => project.stack))
  ).join(', ');

  const projectCount = PROJECT_LIST.length;

  const description =
    `총 ${projectCount}개의 프로젝트를 수행했습니다. ` +
    `주요 기술 스택: ${projectTechnologies}. ` +
    '각 프로젝트의 상세 내용과 기술적 도전 과제, 문제 해결 과정을 확인하실 수 있습니다.';

  return {
    title: 'Projects',
    description,
    openGraph: {
      title: 'Projects | 김건우 포트폴리오',
      description,
      url: 'https://portfolio.whitemouse.dev/projects',
      siteName: '김건우 포트폴리오',
      images: [
        {
          // 대표 프로젝트의 이미지를 OG 이미지로 사용
          url: PROJECT_LIST[0].thumbnail[0] || '/og-image.png',
          width: 1200,
          height: 630,
          alt: '김건우 포트폴리오 - Projects',
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Projects | 김건우 포트폴리오',
      description,
      images: [PROJECT_LIST[0].thumbnail[0] || '/og-image.png'],
    },
    keywords: [
      ...new Set([
        'projects',
        'portfolio',
        '포트폴리오',
        '프로젝트',
        ...PROJECT_LIST.flatMap((project) => project.stack),
        ...PROJECT_LIST.map((project) => project.title),
      ]),
    ],
  };
};

export const projectsMetadata = generateProjectsMetadata();

