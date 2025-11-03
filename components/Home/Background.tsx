'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const StarsCanvas = dynamic(() => import('@/components/Home/StarsCanvas'), {
  ssr: false,
  loading: () => null, // 로딩 중에는 아무것도 표시하지 않음
});

/**
 * Network Information API 타입 정의
 */
interface INetworkInformation {
  saveData?: boolean;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
}

/**
 * Battery Manager API 타입 정의
 */
interface IBatteryManager {
  level: number;
  charging: boolean;
}

/**
 * Navigator 확장 타입
 */
interface IExtendedNavigator extends Navigator {
  connection?: INetworkInformation;
  mozConnection?: INetworkInformation;
  webkitConnection?: INetworkInformation;
  getBattery?: () => Promise<IBatteryManager>;
}

/**
 * 기기가 3D 렌더링을 지원하는지 확인
 *
 * @returns 3D 렌더링 지원 여부
 */
const shouldRenderBackground = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;

  // 모바일 기기에서는 비활성화 (선택 사항)
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // prefers-reduced-motion이 활성화된 경우 비활성화
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 저사양 모드 감지 (Save-Data 헤더)
  const extendedNavigator = navigator as IExtendedNavigator;
  const connection = extendedNavigator.connection || extendedNavigator.mozConnection || extendedNavigator.webkitConnection;
  const saveData = connection?.saveData;

  // 느린 네트워크 연결 감지 (2G, slow-2g)
  const effectiveType = connection?.effectiveType;
  const slowConnection = effectiveType === 'slow-2g' || effectiveType === '2g';

  // 배터리 절약 모드 감지
  let lowBattery = false;
  if (extendedNavigator.getBattery) {
    try {
      const battery = await extendedNavigator.getBattery();
      // 배터리가 20% 이하이고 충전 중이 아닌 경우
      lowBattery = battery.level < 0.2 && !battery.charging;
    } catch {
      // getBattery API를 지원하지 않거나 오류 발생 시 무시
    }
  }

  // 모바일에서 배경을 비활성화하려면 주석 해제
  // if (isMobile) return false;

  // 성능에 부정적 영향을 줄 수 있는 조건들
  if (prefersReducedMotion || saveData || slowConnection || lowBattery) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Background] 3D 배경 비활성화:', {
        prefersReducedMotion,
        saveData,
        slowConnection,
        lowBattery,
        isMobile,
      });
    }
    return false;
  }

  return true;
};

/**
 * Background 컴포넌트
 *
 * @description
 * 3D 별 배경을 조건부로 렌더링하는 컴포넌트
 *
 * @performance
 * - requestIdleCallback으로 지연 로딩
 * - 모바일/저사양 기기에서 조건부 렌더링
 * - prefers-reduced-motion 지원
 * - Save-Data 모드 지원
 * - 느린 네트워크 연결 감지 (2G/slow-2g)
 * - 배터리 절약 모드 감지 (20% 이하)
 * - dynamic import로 SSR 비활성화
 *
 * @accessibility
 * - 접근성 설정(prefers-reduced-motion) 존중
 * - 사용자 환경 및 기기 상태 고려
 */
const Background = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let idleCallbackId: number | undefined;
    let timeoutId: NodeJS.Timeout | undefined;
    let isCancelled = false;

    // 비동기 체크 함수
    const checkAndRender = async () => {
      // 기기가 3D 렌더링을 지원하는지 확인
      const shouldRender = await shouldRenderBackground();
      
      if (!shouldRender || isCancelled) {
        return;
      }

      // requestIdleCallback을 사용하여 브라우저가 idle 상태일 때 로드
      // 메인 스레드 블로킹 방지
      if ('requestIdleCallback' in window) {
        idleCallbackId = requestIdleCallback(
          () => {
            if (!isCancelled) {
              setShouldRender(true);
            }
          },
          { timeout: 2000 } // 최대 2초 대기
        );
      } else {
        // requestIdleCallback을 지원하지 않는 브라우저는 setTimeout 사용
        timeoutId = setTimeout(() => {
          if (!isCancelled) {
            setShouldRender(true);
          }
        }, 1000);
      }
    };

    checkAndRender();

    // 클린업 함수
    return () => {
      isCancelled = true;
      if (idleCallbackId !== undefined) {
        cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // 렌더링 조건이 충족되지 않으면 null 반환
  if (!shouldRender) {
    return null;
  }

  return <StarsCanvas />;
};

export default Background;
