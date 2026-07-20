'use client';

import { useEffect, useRef } from 'react';

const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'auto' | 'light' | 'dark';
        }
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

/**
 * Turnstile 스크립트를 한 번만 로드한다.
 *
 * @description
 * 여러 인스턴스가 마운트되어도 <script>는 하나만 삽입되도록
 * 진행 중인 Promise를 모듈 스코프에 캐싱한다.
 */
let scriptPromise: Promise<void> | null = null;

const loadTurnstileScript = (): Promise<void> => {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    if (window.turnstile) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error('Failed to load Turnstile'));
    };

    document.head.appendChild(script);
  });

  return scriptPromise;
};

interface TurnstileProps {
  /** 검증 통과 시 토큰을 전달. 만료·실패 시 빈 문자열을 전달한다. */
  onVerify: (token: string) => void;
  /**
   * 값이 바뀌면 위젯을 초기화한다.
   *
   * Turnstile 토큰은 1회용이므로 전송 성공 후 리셋해야
   * 다음 문의에서 새 토큰을 발급받을 수 있다.
   */
  resetSignal?: number;
}

/**
 * Turnstile 컴포넌트
 *
 * @description
 * Cloudflare Turnstile 캡챠 위젯을 렌더링하는 컴포넌트
 *
 * @features
 * - 스크립트 지연 로드 및 explicit 렌더링
 * - 토큰 만료/에러 시 토큰 초기화
 * - 언마운트 시 위젯 정리
 *
 * @remarks
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY가 없으면 아무것도 렌더링하지 않는다.
 * 키가 설정되기 전에도 문의 폼이 정상 동작하도록 하기 위함이며,
 * 서버(app/api/contact/route.ts)도 같은 방식으로 검증을 건너뛴다.
 *
 * @environment
 * - NEXT_PUBLIC_TURNSTILE_SITE_KEY: Cloudflare Turnstile 사이트 키
 */
export const Turnstile = ({ onVerify, resetSignal = 0 }: TurnstileProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onVerifyRef = useRef(onVerify);

  // 콜백 identity가 바뀌어도 위젯을 다시 그리지 않도록 ref로 고정한다.
  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;

    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        if (widgetIdRef.current) return;

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'dark',
          callback: (token) => onVerifyRef.current(token),
          'expired-callback': () => onVerifyRef.current(''),
          'error-callback': () => onVerifyRef.current(''),
        });
      })
      .catch((error) => {
        console.error('Turnstile load error:', error);
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]);

  // 최초 렌더 시점(resetSignal === 0)에는 리셋하지 않는다.
  useEffect(() => {
    if (!resetSignal) return;
    if (!widgetIdRef.current || !window.turnstile) return;

    window.turnstile.reset(widgetIdRef.current);
    onVerifyRef.current('');
  }, [resetSignal]);

  if (!siteKey) return null;

  return <div ref={containerRef} className="relative z-20" />;
};

export default Turnstile;
