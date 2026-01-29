'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.3, ease: 'easeInOut' },
          }}
          className="fixed inset-0 bg-primary z-[30] pointer-events-none"
        />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
