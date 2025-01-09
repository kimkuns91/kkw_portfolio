'use client';

import dynamic from 'next/dynamic';

const StarsCanvas = dynamic(() => import('@/components/Home/StarsCanvas'), {
  ssr: false,
});

const Background = () => {
  return <StarsCanvas />;
};

export default Background;
