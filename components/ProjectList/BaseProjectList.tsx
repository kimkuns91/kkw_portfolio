'use client';

import { IProject } from '@/interface';
import { PROJECTS_PAGE_TEXT } from '@/constants/projects';
import Project from '../Project';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motions';
import { useStore } from '@/store';

interface IBaseProjectListProps {
  projects: IProject[];
  showTitle?: boolean;
}

/**
 * BaseProjectList 컴포넌트
 *
 * @description
 * 프로젝트 목록을 그리드 형태로 표시하는 기본 컴포넌트
 *
 * @param projects - 표시할 프로젝트 목록
 * @param showTitle - 제목 표시 여부 (기본값: true)
 *
 * @features
 * - Zustand를 통한 모달 상태 관리
 * - Framer Motion 애니메이션
 * - 반응형 그리드 레이아웃
 */
const BaseProjectList: React.FC<IBaseProjectListProps> = ({
  projects,
  showTitle = true,
}) => {
  const { setModalOpen, setProject } = useStore();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn('py-10 md:py-20')}
    >
      {showTitle && (
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1.5)}
          className="text-2xl md:text-5xl font-bold text-accent mb-10"
        >
          {PROJECTS_PAGE_TEXT.title}
        </motion.h2>
      )}

      <div className="grid gap-20">
        {projects.map((project) => (
          <Project
            key={project.id}
            {...project}
            setModalOpen={setModalOpen}
            setProject={setProject}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default BaseProjectList; 