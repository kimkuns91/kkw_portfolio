'use client';

import { motion, stagger, useAnimate } from 'framer-motion';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const characters = words.split('');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.02),
      }
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="text-neutral-dark text-sm md:text-base mt-8 max-w-2xl leading-snug tracking-wide">
          <motion.div ref={scope}>
            {characters.map((char, idx) => (
              <motion.span
                key={char + idx}
                className="text-neutral-dark opacity-0"
                style={{
                  filter: filter ? 'blur(10px)' : 'none',
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
