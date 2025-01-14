'use client';

import 'github-markdown-css';

import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';

import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { useStore } from '@/store';

type CodeProps = ComponentProps<'code'> & {
  inline?: boolean;
  children?: React.ReactNode;
};

const ModalComponent: React.FC = () => {
  const { isModalOpen, setModalOpen, project } = useStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClose = () => {
    setModalOpen(false);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <IoIosArrowBack className="text-white text-2xl" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <IoIosArrowForward className="text-white text-2xl" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.thumbnail.map((_: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
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

                    <div className="prose prose-invert max-w-none markdown-body py-6 md:py-10">
                      <ReactMarkdown
                        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                        components={{
                          code({
                            inline,
                            className,
                            children,
                            ...props
                          }: CodeProps) {
                            const match = /language-(\w+)/.exec(
                              className || ''
                            );
                            return !inline && match ? (
                              <SyntaxHighlighter
                                style={materialDark}
                                language={match[1]}
                                PreTag="div"
                              >
                                {String(children).replace(/\n$/, '')}
                              </SyntaxHighlighter>
                            ) : (
                              <code className={className} {...props}>
                                {children}
                              </code>
                            );
                          },
                        }}
                      >
                        {project?.content || ''}
                      </ReactMarkdown>
                    </div>
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
