'use client';

import BaseProjectList from './BaseProjectList';
import { IProject } from '@/interface';
import { Input } from '../ui/input';
import MotionScrollSection from '../MotionSection';
import { useState } from 'react';

interface SearchableProjectListProps {
  initialProjects: IProject[];
}

const SearchableProjectList = ({
  initialProjects,
}: SearchableProjectListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = initialProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.stack.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <MotionScrollSection>
      <div className="container mb-8">
        <Input
          placeholder="프로젝트 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md border-accent rounded-xl"
        />
      </div>
      <BaseProjectList projects={filteredProjects} showTitle={false} />
    </MotionScrollSection>
  );
};

export default SearchableProjectList;
