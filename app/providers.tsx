'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import Background from '@/components/Home/Background';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { Intro } from '@/components/Layout/Intro';
import ModalComponent from '@/components/ModalComponent';
import PageTransition from '@/components/Layout/PageTransition';
import { RecoilRoot } from 'recoil';
import { SpeedInsights } from '@vercel/speed-insights/next';
import StairTransition from '@/components/Layout/StairTransition';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((m) => m.Analytics),
  { ssr: false }
);
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
 * - SpeedInsights: Vercel 성능 모니터링 (Core Web Vitals)
 * - Analytics: Vercel 사용자 행동 추적 (페이지뷰, 이벤트)
 *
 * @performance
 * - Background는 dynamic import로 SSR 비활성화
 * - SpeedInsights는 레이아웃 레벨에서 한 번만 로드
 *
 * @monitoring
 * - SpeedInsights: LCP, FCP, CLS, TTFB 등 성능 메트릭
 * - Analytics: 페이지뷰, 체류시간, 이벤트 추적
 */
export const NextLayout = ({ children }: IProviderProps) => {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const [isInitialMount, setIsInitialMount] = useState(true);

  // 메인 페이지 첫 방문 시에만 Intro 표시
  useEffect(() => {
    // 세션 스토리지에서 intro 완료 여부 확인
    const hasSeenIntro = sessionStorage.getItem('introComplete');

    if (pathname === '/' && !hasSeenIntro && isInitialMount) {
      setShowIntro(true);

      // Intro 애니메이션 시간(3초) + 여유 시간
      const timer = setTimeout(() => {
        setShowIntro(false);
        setIntroComplete(true);
        setIsInitialMount(false);
        sessionStorage.setItem('introComplete', 'true');
      }, 3500);

      return () => clearTimeout(timer);
    } else {
      setIntroComplete(true);
      setIsInitialMount(false);
    }
  }, [pathname, isInitialMount]);

  // pathname 변경 추적
  useEffect(() => {
    if (!isInitialMount && prevPathname !== null && prevPathname !== pathname) {
      // 실제 페이지 전환이 일어났을 때만 처리
    }
    setPrevPathname(pathname);
  }, [pathname, prevPathname, isInitialMount]);

  return (
    <div className="scrollbar z-[100]">
      {/* 메인 페이지 첫 방문 시 Intro 표시 */}
      {showIntro && <Intro />}

      {/* Intro가 끝난 후에만 나머지 컨텐츠 표시 */}
      {introComplete && (
        <>
          <Header />
          {!isInitialMount && <StairTransition />}
          <PageTransition>{children}</PageTransition>
          <Background />
          <ModalComponent />
          <Footer />
          <SpeedInsights />
          <Analytics />
        </>
      )}
    </div>
  );
};
