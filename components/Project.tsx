'use client';

import { DEFAULT_PROJECT_THUMBNAIL } from '@/constants/projects';
import { IProject } from '@/interface';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface IProjectProps extends IProject {
  setModalOpen?: (open: boolean) => void;
  setProject?: (project: IProject) => void;
}

/**
 * Project 컴포넌트
 *
 * @description
 * 개별 프로젝트를 카드 형태로 표시하는 컴포넌트
 *
 * @param props - 프로젝트 데이터 및 모달 제어 함수
 *
 * @features
 * - 클릭 시 상세 모달 표시
 * - 키보드 접근성 지원 (Enter, Space)
 * - 썸네일, 제목, 설명, 기술 스택 표시
 * - 호버 효과 애니메이션
 *
 * @accessibility
 * - role="button": 버튼 역할 명시
 * - tabIndex={0}: 키보드 포커스 가능
 * - onKeyDown: 키보드로 모달 열기 지원
 * - aria-label: 스크린 리더를 위한 설명
 */
const Project: React.FC<IProjectProps> = ({
  setModalOpen = () => {},
  setProject = () => {},
  ...project
}) => {
  const handleOpenModal = () => {
    setModalOpen(true);
    setProject(project);
  };

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      className={cn(
        'flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:opacity-80 hover:ml-4 transition-all duration-300 cursor-pointer'
      )}
      onClick={handleOpenModal}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpenModal();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${project.title} 프로젝트 상세보기`}
    >
      {/* 프로젝트 정보 */}
      <div className="flex-1 order-2 md:order-1 py-4 md:py-0 md:pr-20">
        <h2 className="text-neutral-light text-lg md:text-xl font-bold mb-2 line-clamp-2">
          {project.title}
        </h2>
        <div className="flex items-center gap-2 mb-2">
          <time className="text-sm text-neutral" dateTime={project.created_at}>
            {project.created_at}
          </time>
        </div>

        <p className="text-neutral-dark text-sm md:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className="flex flex-wrap items-center gap-2 mb-2" role="list">
          {project.stack.map((stack, index) => (
            <span
              key={index}
              className="text-sm text-primary bg-accent/80 px-3 py-1 rounded-full"
              role="listitem"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      {/* 썸네일 이미지 */}
      <div className="relative order-1 md:order-2 w-full md:w-[30%] h-[200px] md:h-[180px] rounded-xl overflow-hidden border-2 border-accent/30">
        <Image
          src={project.thumbnail[0] || DEFAULT_PROJECT_THUMBNAIL}
          alt={`${project.title} 썸네일`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-cover object-top"
        />
      </div>
    </motion.article>
  );
};

export default Project;
