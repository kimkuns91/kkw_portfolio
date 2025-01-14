import { Metadata } from 'next';
import { PROJECT_LIST } from '@/constants/projects';
import SearchableProjectList from '@/components/ProjectList/SearchableProjectList';

const projectTechnologies = Array.from(
  new Set(PROJECT_LIST.flatMap((project) => project.stack))
).join(', ');

const projectCount = PROJECT_LIST.length;

export const metadata: Metadata = {
  title: 'Projects',
  description:
    `총 ${projectCount}개의 프로젝트를 수행했습니다. ` +
    `주요 기술 스택: ${projectTechnologies}. ` +
    '각 프로젝트의 상세 내용과 기술적 도전 과제, 문제 해결 과정을 확인하실 수 있습니다.',
  openGraph: {
    title: 'Projects | 김건우 포트폴리오',
    description:
      `총 ${projectCount}개의 프로젝트를 수행했습니다. ` +
      `주요 기술 스택: ${projectTechnologies}. ` +
      '각 프로젝트의 상세 내용과 기술적 도전 과제, 문제 해결 과정을 확인하실 수 있습니다.',
    images: [
      {
        // 대표 프로젝트의 이미지를 OG 이미지로 사용
        url: PROJECT_LIST[0].thumbnail[0] || '/og-image.png',
        width: 1200,
        height: 630,
        alt: '김건우 포트폴리오 - Projects',
      },
    ],
  },
  twitter: {
    title: 'Projects | 김건우 포트폴리오',
    description:
      `총 ${projectCount}개의 프로젝트를 수행했습니다. ` +
      `주요 기술 스택: ${projectTechnologies}. ` +
      '각 프로젝트의 상세 내용과 기술적 도전 과제, 문제 해결 과정을 확인하실 수 있습니다.',
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

export default function ProjectsPage() {
  return <SearchableProjectList initialProjects={PROJECT_LIST} />;
}
