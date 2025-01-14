'use client';

import { IProject } from '@/interface';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProjectProps extends IProject {
  setModalOpen?: (open: boolean) => void;
  setProject?: (project: IProject) => void;
}

const Project: React.FC<ProjectProps> = ({
  setModalOpen = () => {},
  setProject = () => {},
  ...project
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn(
        'flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:opacity-80 hover:ml-4 transition-all duration-300 cursor-pointer'
      )}
      onClick={(e) => {
        e.stopPropagation();
        setModalOpen(true);
        setProject(project);
      }}
    >
      <div className="flex-1 order-2 md:order-1 py-4 md:py-0 md:pr-20">
        <h2 className="text-neutral-light text-lg md:text-xl font-bold mb-2 line-clamp-2">
          {project.title}
        </h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-neutral">{project.created_at}</span>
        </div>

        <p className="text-neutral-dark text-sm md:text-base mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {project.stack.map((stack, index) => (
            <span
              key={index}
              className="text-sm text-primary bg-accent/80 px-3 py-1 rounded-full"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      <div className="relative order-1 md:order-2 w-full md:w-[30%] h-[200px] md:h-[180px] rounded-xl overflow-hidden border-2 border-accent/30">
        <Image
          src={project.thumbnail[0] || '/images/default-blog-thumbnail.jpg'}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </div>
    </motion.div>
  );
};

export default Project;
