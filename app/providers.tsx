'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Background from '@/components/Home/Background';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import ModalComponent from '@/components/ModalComponent';
import PageTransition from '@/components/Layout/PageTransition';
import { RecoilRoot } from 'recoil';
import { SpeedInsights } from '@vercel/speed-insights/next';
import StairTransition from '@/components/Layout/StairTransition';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

interface IProviderProps {
  children: React.ReactNode;
}

/**
 * NextProvider 컴포넌트
 *
 * @description
 * 전역 상태 관리 및 데이터 fetching을 위한 Provider 래퍼
 *
 * @providers
 * - RecoilRoot: Recoil 전역 상태 관리
 * - QueryClientProvider: React Query 데이터 fetching 및 캐싱
 * - Toaster: react-hot-toast 알림 시스템
 *
 * @performance
 * - QueryClient를 useState로 생성하여 서버/클라이언트 상태 격리
 * - 각 렌더링마다 새로운 인스턴스가 아닌 동일한 인스턴스 유지
 */
export const NextProvider = ({ children }: IProviderProps) => {
  // QueryClient를 useState로 생성하여 컴포넌트 생명주기 내에서 안전하게 관리
  // 이렇게 하면 서버와 클라이언트 간 상태 공유 문제를 방지
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 브라우저 포커스 시 자동 refetch 비활성화 (선택적)
            refetchOnWindowFocus: false,
            // 실패 시 재시도 횟수
            retry: 3,
            // 캐시 유지 시간 (5분)
            staleTime: 5 * 60 * 1000,
          },
        },
      })
  );

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#18181B',
              color: '#fff',
              border: '1px solid #00D9FF',
            },
            success: {
              iconTheme: {
                primary: '#00D9FF',
                secondary: '#fff',
              },
            },
          }}
        />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

/**
 * NextLayout 컴포넌트
 *
 * @description
 * 전체 레이아웃 구조를 정의하는 컴포넌트
 *
 * @structure
 * - Header: 상단 네비게이션
 * - StairTransition: 페이지 전환 애니메이션 효과
 * - PageTransition: 페이지 내용 전환 애니메이션
 * - Background: 3D 별 배경 (StarsCanvas)
 * - ModalComponent: 프로젝트 상세 모달
 * - Footer: 하단 푸터
 * - SpeedInsights: Vercel 성능 모니터링
 *
 * @performance
 * - Background는 dynamic import로 SSR 비활성화
 * - SpeedInsights는 레이아웃 레벨에서 한 번만 로드
 */
export const NextLayout = ({ children }: IProviderProps) => {
  return (
    <div className="scrollbar z-[100]">
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
      <Background />
      <ModalComponent />
      <Footer />
      <SpeedInsights />
    </div>
  );
};
