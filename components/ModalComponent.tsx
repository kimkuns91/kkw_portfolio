'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';
import { useEffect, useState } from 'react';

import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useStore } from '@/store';

// 마크다운 렌더링 컴포넌트를 동적 import (번들 사이즈 최적화)
// react-markdown (~50KB) + react-syntax-highlighter (~188KB) 분리
const MarkdownContent = dynamic(
  () => import('./Modal/MarkdownContent'),
  {
    loading: () => (
      <div className="py-6 md:py-10 animate-pulse">
        <div className="h-4 bg-neutral-dark/30 rounded w-3/4 mb-4" />
        <div className="h-4 bg-neutral-dark/30 rounded w-full mb-4" />
        <div className="h-4 bg-neutral-dark/30 rounded w-5/6 mb-4" />
        <div className="h-4 bg-neutral-dark/30 rounded w-2/3" />
      </div>
    ),
    ssr: false,
  }
);

const ModalComponent: React.FC = () => {
  const { isModalOpen, setModalOpen, project } = useStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleClose = () => {
    setModalOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (project?.thumbnail) {
      setCurrentImageIndex((prev) =>
        prev === project.thumbnail.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project?.thumbnail) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.thumbnail.length - 1 : prev - 1
      );
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          />
          <div className="overflow-y-auto scrollbar-hide w-[95%] md:w-[80%] max-w-[1240px] min-h-screen h-full py-20">
            <motion.div
              className="relative w-full bg-[#0D1117] rounded-2xl overflow-hidden shadow-lg z-10 pb-10 md:pb-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleClose}
                aria-label="모달 닫기"
                className="absolute flex items-center justify-center top-5 right-5 w-10 h-10 z-20 bg-black rounded-full"
              >
                <IoIosClose className="text-4xl text-white font-bold" />
              </button>
              <div className="relative pt-[56.25%]">
                <Image
                  src={
                    project?.thumbnail?.[currentImageIndex] ||
                    '/images/noPoster.webp'
                  }
                  fill
                  objectFit="cover"
                  objectPosition="top"
                  alt={project?.title || 'Title'}
                  className="rounded-t-lg"
                />
                {project?.thumbnail && project.thumbnail.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="이전 이미지"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <IoIosArrowBack className="text-white text-2xl" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="다음 이미지"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <IoIosArrowForward className="text-white text-2xl" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.thumbnail.map((_: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`이미지 ${index + 1}로 이동`}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? 'bg-white'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="w-full flex flex-col mt-4 px-6 md:px-10 lg:px-16 py-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                  <div className="flex-[2] flex flex-col gap-6">
                    <h1 className="text-2xl md:text-4xl font-bold">
                      {project?.title}
                    </h1>
                    <p className="text-sm md:text-lg text-slate-400">
                      {project?.created_at}
                    </p>
                    <hr className="border-neutral-dark" />
                    <div className="flex gap-4">
                      {project?.github_url && (
                        <Link
                          href={project?.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-accent px-4 py-2 rounded-xl md:text-lg text-primary flex items-center gap-2"
                        >
                          <FaGithub size={20} /> GitHub
                        </Link>
                      )}
                      {project?.link && (
                        <Link
                          href={project?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-accent px-4 py-2 rounded-xl md:text-lg text-primary flex items-center gap-2"
                        >
                          <GrDeploy size={20} /> Deployment URL
                        </Link>
                      )}
                    </div>

                    {project?.content && (
                      <MarkdownContent content={project.content} />
                    )}

                    <hr className="border-neutral-dark" />
                    <div className="flex flex-col gap-4">
                      <h2 className="text-2xl mb-6 md:text-4xl font-bold">
                        Technology Stacks
                      </h2>
                      <ul className="flex flex-wrap items-center gap-4">
                        {project?.stack.map((stack: string, index: number) => (
                          <li
                            key={index}
                            className="px-5 py-1 text-sm text-primary md:text-lg bg-accent rounded-xl"
                          >
                            {stack}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalComponent;
