'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';

const AnimatedImages: React.FC = () => {
  const [active, setActive] = useState(0);

  const testimonials = useMemo(
    () => [
      '/images/kunwoo-1.jpg',
      '/images/kunwoo-2.jpg',
      '/images/kunwoo-3.png',
      '/images/kunwoo-4.jpg',
      '/images/kunwoo-5.jpg',
    ],
    []
  );

  // 고정된 회전값 사용
  const rotations = useMemo(() => [5, -5, 3, -3, 4], []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonials[index]}
            initial={{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: rotations[index],
            }}
            animate={{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              z: isActive(index) ? 0 : -100,
              rotate: isActive(index) ? 0 : rotations[index],
              zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: rotations[index],
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 origin-bottom cursor-pointer md:px-6"
            onClick={handleNext}
          >
            <Image
              src={testimonial}
              alt={testimonial}
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedImages;
