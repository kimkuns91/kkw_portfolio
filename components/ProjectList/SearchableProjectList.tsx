'use client';

import { useMemo, useState } from 'react';

import BaseProjectList from './BaseProjectList';
import { IProject } from '@/interface';
import { Input } from '../ui/input';
import MotionScrollSection from '../MotionSection';
import { PROJECTS_PAGE_TEXT } from '@/constants/projects';

interface ISearchableProjectListProps {
  initialProjects: IProject[];
}

/**
 * SearchableProjectList 컴포넌트
 *
 * @description
 * 검색 기능이 포함된 프로젝트 목록 컴포넌트
 *
 * @param initialProjects - 초기 프로젝트 목록
 *
 * @features
 * - 실시간 검색 (제목, 설명, 기술 스택)
 * - useMemo를 사용한 검색 성능 최적화
 * - 접근성 지원 (aria-label)
 *
 * @performance
 * - useMemo로 불필요한 필터링 연산 방지
 * - 검색어가 변경될 때만 재계산
 */
const SearchableProjectList: React.FC<ISearchableProjectListProps> = ({
  initialProjects,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // 검색어를 소문자로 변환 (성능 최적화)
  const lowerSearchTerm = useMemo(
    () => searchTerm.toLowerCase(),
    [searchTerm]
  );

  // 필터링된 프로젝트 목록 (useMemo로 최적화)
  const filteredProjects = useMemo(() => {
    if (!lowerSearchTerm) return initialProjects;

    return initialProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowerSearchTerm) ||
        project.description.toLowerCase().includes(lowerSearchTerm) ||
        project.stack.some((tech) =>
          tech.toLowerCase().includes(lowerSearchTerm)
        )
    );
  }, [initialProjects, lowerSearchTerm]);

  return (
    <MotionScrollSection>
      <div className="mb-8">
        <Input
          type="search"
          placeholder={PROJECTS_PAGE_TEXT.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md border-accent rounded-xl"
          aria-label="프로젝트 검색"
        />
        {filteredProjects.length === 0 && searchTerm && (
          <p className="text-neutral-dark text-center mt-8">
            {PROJECTS_PAGE_TEXT.noResults}
          </p>
        )}
      </div>
      <BaseProjectList projects={filteredProjects} showTitle={false} />
    </MotionScrollSection>
  );
};

export default SearchableProjectList;
