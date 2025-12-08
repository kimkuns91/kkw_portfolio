'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Stairs from './Stairs';
import { usePathname } from 'next/navigation';

// components

const StairTransition = () => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // pathname이 실제로 변경되었을 때만 애니메이션 활성화
    if (prevPathname !== pathname) {
      setShouldAnimate(true);
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  // 초기 마운트 시에는 애니메이션 없이 렌더링하지 않음
  if (!shouldAnimate) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
