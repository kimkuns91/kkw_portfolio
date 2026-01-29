'use client';

import { PROJECT_LIST } from '@/constants/projects';
import Project from './Project';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motions';
import { useStore } from '@/store';

const ProjectList = () => {
  const { setModalOpen, setProject } = useStore();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn('py-10 md:py-20')}
    >
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(1.5)}
        className="text-2xl md:text-5xl font-bold text-accent mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid gap-20">
        {PROJECT_LIST.map((project) => (
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

export default ProjectList;
