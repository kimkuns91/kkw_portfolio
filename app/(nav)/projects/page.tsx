import { PROJECT_LIST } from '@/constants/projects';
import SearchableProjectList from '@/components/ProjectList/SearchableProjectList';
import { projectsMetadata } from './metadata';

export const metadata = projectsMetadata;

/**
 * Projects 페이지
 *
 * @description
 * 프로젝트 목록을 검색과 필터링이 가능한 형태로 표시하는 페이지
 *
 * @features
 * - 실시간 검색 기능 (제목, 설명, 기술 스택)
 * - 프로젝트 클릭 시 상세 모달 표시
 * - SEO 최적화 (동적 메타데이터)
 */
export default function ProjectsPage() {
  return <SearchableProjectList initialProjects={PROJECT_LIST} />;
}
