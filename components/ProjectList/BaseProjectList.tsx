'use client';

import { IProject } from '@/interface';
import Project from '../Project';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motions';
import { useStore } from '@/store';

interface BaseProjectListProps {
  projects: IProject[];
  showTitle?: boolean;
}

const BaseProjectList = ({ projects, showTitle = true }: BaseProjectListProps) => {
  const { setModalOpen, setProject } = useStore();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn('container py-10 md:py-20')}
    >
      {showTitle && (
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1.5)}
          className="text-2xl md:text-5xl font-bold text-accent mb-10"
        >
          Projects
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