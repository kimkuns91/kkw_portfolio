'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import PageTransition from '@/components/Layout/PageTransition';
import { RecoilRoot } from 'recoil';
import StairTransition from '@/components/Layout/StairTransition';
import { Toaster } from 'react-hot-toast';

interface Props {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

export const NextProvider = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <div className="z-[100]">
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </div>
    </>
  );
};
