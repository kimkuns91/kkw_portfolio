'use client';

import BaseProjectList from './BaseProjectList';
import { PROJECT_LIST } from '@/constants/projects';

const ProjectList = () => {
  return <BaseProjectList projects={PROJECT_LIST} />;
};

export default ProjectList;
