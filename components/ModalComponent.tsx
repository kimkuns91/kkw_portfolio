'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { ComponentProps } from 'react';
import Image from 'next/image';
import { IoIosClose } from 'react-icons/io';
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
  const handleClose = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
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
              className="relative w-full bg-[#191919] rounded-2xl overflow-hidden shadow-lg z-10 pb-10 md:pb-20"
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
                  src={project?.thumbnail[0] || '/images/noPoster.webp'}
                  fill
                  objectFit="cover"
                  alt={project?.title || 'Title'}
                  className="rounded-t-lg"
                />
              </div>
              <div className="w-full flex flex-col mt-4 px-6 md:px-10 py-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                  <div className="flex-[2] flex flex-col gap-6">
                    {project?.stack && (
                      <ul className="flex items-center gap-4">
                        {project.stack.map((stack, index) => (
                          <li
                            key={index}
                            className="px-5 py-1 text-sm md:text-lg bg-slate-700 rounded-xl"
                          >
                            {stack}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="prose prose-invert max-w-none">
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
