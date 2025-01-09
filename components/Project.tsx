import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
      <div className="flex-1 py-4 md:py-0">
        <h2 className="text-neutral-light text-lg md:text-xl font-bold mb-2 line-clamp-2">
          {project.title}
        </h2>
        <p className="text-neutral-dark text-sm md:text-base mb-4 line-clamp-2">
          {project.created_at}
        </p>
        <p className="text-neutral-dark text-sm md:text-base mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-2 mb-2">
          {project.stack.map((stack, index) => (
            <span
              key={index}
              className="text-sm text-primary bg-neutral-light px-3 py-1 rounded-full"
            >
              {stack}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="text-sm text-primary bg-accent px-3 py-1 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
              setProject(project);
            }}
          >
            README
          </button>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-primary bg-accent px-3 py-1 rounded-full"
            >
              사이트 바로가기
            </Link>
          )}
        </div>
      </div>
      <div className="relative w-full md:w-[30%] h-[200px] md:h-[180px] rounded-xl overflow-hidden">
        <Image
          src={project.thumbnail[0] || '/images/default-blog-thumbnail.jpg'}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Project;
