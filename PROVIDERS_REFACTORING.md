# Providers 리팩토링 개선 사항

## 📅 날짜: 2025-11-03

## 🎯 목표
`app/providers.tsx`의 React Query 안정성 개선 및 코드 품질 향상

---

## 🚨 발견된 주요 문제점

### 1. **QueryClient 생성 방식 - 심각한 버그** ⚠️

#### Before (위험한 패턴)
```typescript
// 모듈 레벨에서 생성
const queryClient = new QueryClient();

export const NextProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
```

#### 문제점
- **서버/클라이언트 상태 공유**: Next.js 13+에서 서버와 클라이언트가 동일한 인스턴스를 공유할 수 있음
- **메모리 누수**: 여러 요청 간 상태가 누적될 수 있음
- **상태 충돌**: 다른 사용자의 데이터가 섞일 위험
- **React 18 권장사항 위반**: React 공식 문서에서 권장하지 않는 패턴

#### After (안전한 패턴)
```typescript
export const NextProvider = ({ children }: IProviderProps) => {
  // useState로 컴포넌트 생명주기 내에서 안전하게 관리
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 1,
          staleTime: 5 * 60 * 1000,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
```

#### 개선 효과
✅ **서버/클라이언트 격리**: 각 컴포넌트 인스턴스마다 독립적인 QueryClient  
✅ **메모리 안전성**: 컴포넌트 언마운트 시 자동 정리  
✅ **상태 격리**: 요청 간 상태 공유 방지  
✅ **React 18 호환**: 공식 권장사항 준수

---

### 2. **React Query 기본 설정 추가**

#### Before
```typescript
const queryClient = new QueryClient();
```

#### After
```typescript
const [queryClient] = useState(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,  // 포커스 시 재요청 비활성화
          retry: 1,                       // 실패 시 1회만 재시도
          staleTime: 5 * 60 * 1000,      // 5분간 캐시 유지
        },
      },
    })
);
```

#### 개선 효과
- **불필요한 네트워크 요청 감소**: 포커스 시 자동 refetch 비활성화
- **빠른 실패 처리**: 재시도 횟수를 1회로 제한
- **캐싱 최적화**: 5분간 데이터를 fresh 상태로 유지

---

### 3. **Toaster 설정 개선**

#### Before
```typescript
<Toaster />
```

#### After
```typescript
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
```

#### 개선 효과
- **일관된 디자인**: 전역 테마 색상과 일치
- **더 나은 UX**: 중앙 상단 배치로 가시성 향상
- **커스터마이징**: 프로젝트 accent 색상 적용

---

### 4. **코드 구조 개선**

#### Before
```typescript
interface Props {
  children?: React.ReactNode;
}

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <div className="scrollbar z-[100]">
        {/* ... */}
        <PageTransition>
          {children}
          <SpeedInsights />
        </PageTransition>
        {/* ... */}
      </div>
    </>
  );
};
```

#### After
```typescript
interface IProviderProps {
  children: React.ReactNode;  // optional 제거
}

export const NextLayout = ({ children }: IProviderProps) => {
  return (
    <div className="scrollbar z-[100]">
      {/* ... */}
      <PageTransition>{children}</PageTransition>
      {/* ... */}
      <SpeedInsights />  {/* 레이아웃 레벨로 이동 */}
    </div>
  );
};
```

#### 개선 사항
- **불필요한 Fragment 제거**: `<></>`가 없어도 됨
- **타입 개선**: `Props` → `IProviderProps` (프로젝트 규칙 준수)
- **children optional 제거**: 항상 필요한 prop이므로 optional 불필요
- **SpeedInsights 위치 조정**: PageTransition 밖으로 이동하여 더 정확한 측정

---

### 5. **Import 정리 및 JSDoc 추가**

#### Before
```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Background from '@/components/Home/Background';
import Footer from '@/components/Layout/Footer';
// ... (알파벳 순서 아님)

// JSDoc 없음
export const NextProvider = ({ children }: Props) => {
  // ...
};
```

#### After
```typescript
// 외부 라이브러리 먼저
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useState } from 'react';

// 내부 컴포넌트는 알파벳 순
import Background from '@/components/Home/Background';
import Footer from '@/components/Layout/Footer';
// ...

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
 */
export const NextProvider = ({ children }: IProviderProps) => {
  // ...
};
```

---

## 📊 개선 전후 비교

| 항목 | Before | After | 개선 |
|------|--------|-------|------|
| QueryClient 생성 | 모듈 레벨 | useState | **안정성 ↑** |
| 서버/클라이언트 격리 | ❌ 위험 | ✅ 안전 | **버그 방지** |
| React Query 설정 | 기본값 | 최적화됨 | **성능 ↑** |
| Toaster 스타일 | 기본 | 커스텀 | **UX ↑** |
| 불필요한 Fragment | 1개 | 0개 | **코드 간결화** |
| JSDoc 주석 | 없음 | 상세함 | **가독성 ↑** |
| 타입 네이밍 | Props | IProviderProps | **규칙 준수** |
| SpeedInsights 위치 | PageTransition 내부 | 레이아웃 레벨 | **정확도 ↑** |

---

## 🔧 주요 개선 사항 상세

### 1. useState를 사용한 QueryClient 생성

```typescript
const [queryClient] = useState(
  () => new QueryClient({ /* ... */ })
);
```

**왜 이렇게 하나요?**
- `useState`의 lazy initialization 기능 사용
- 초기 렌더링 시 한 번만 생성되고 이후 재사용
- 컴포넌트가 언마운트되면 자동으로 정리
- 각 클라이언트 세션마다 독립적인 인스턴스 보장

**React Query 공식 문서 권장:**
> When using React Query with Next.js, always create the QueryClient inside your component using useState or useMemo to avoid sharing the QueryClient between different users and requests.

### 2. React Query 기본 설정

```typescript
defaultOptions: {
  queries: {
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  },
}
```

**각 옵션 설명:**
- **refetchOnWindowFocus**: 탭 전환 시 자동 재요청 비활성화
  - 포트폴리오 사이트는 실시간 데이터가 중요하지 않음
  - 불필요한 API 호출 방지
  
- **retry**: 실패 시 재시도 횟수를 1회로 제한
  - 기본값 3회는 과도할 수 있음
  - 빠른 실패로 사용자 경험 개선
  
- **staleTime**: 5분간 데이터를 fresh 상태로 유지
  - 5분 내 재요청 시 캐시된 데이터 사용
  - 네트워크 요청 감소

### 3. Toaster 커스터마이징

```typescript
<Toaster
  position="top-center"
  toastOptions={{
    style: {
      background: '#18181B',  // 프로젝트 primary 색상
      color: '#fff',
      border: '1px solid #00D9FF',  // accent 색상
    },
  }}
/>
```

**효과:**
- 전역 테마와 일관된 디자인
- 중앙 상단 배치로 눈에 잘 띔
- accent 색상으로 주목도 향상

---

## 🎓 학습 포인트

### React Query Best Practices

1. **QueryClient는 항상 컴포넌트 내부에서 생성**
   ```typescript
   // ❌ Bad
   const queryClient = new QueryClient();
   
   // ✅ Good
   const [queryClient] = useState(() => new QueryClient());
   ```

2. **defaultOptions 설정으로 일관된 동작**
   ```typescript
   new QueryClient({
     defaultOptions: {
       queries: { /* ... */ },
       mutations: { /* ... */ },
     },
   })
   ```

3. **staleTime과 cacheTime의 차이**
   - `staleTime`: 데이터가 fresh한 시간 (이 시간 내에는 재요청 안 함)
   - `cacheTime`: 데이터가 메모리에 남아있는 시간 (기본 5분)

### React 18 + Next.js 13+ 패턴

1. **useState의 lazy initialization**
   ```typescript
   const [state] = useState(() => expensiveComputation());
   // 초기 렌더링 시에만 실행됨
   ```

2. **Server/Client 상태 격리의 중요성**
   - Next.js 13+는 서버 컴포넌트와 클라이언트 컴포넌트가 공존
   - 모듈 레벨 변수는 서버와 클라이언트가 공유할 수 있음
   - 항상 컴포넌트 생명주기 내에서 상태 관리

3. **Provider 중첩 순서**
   ```typescript
   <RecoilRoot>
     <QueryClientProvider>
       <YourApp />
     </QueryClientProvider>
   </RecoilRoot>
   ```
   - 외부 → 내부 순서로 의존성 고려

---

## ✅ 체크리스트

- [x] QueryClient를 useState로 이동
- [x] React Query 기본 설정 추가
- [x] Toaster 스타일 커스터마이징
- [x] 불필요한 Fragment 제거
- [x] SpeedInsights 위치 조정
- [x] 타입 네이밍 개선 (IProviderProps)
- [x] children optional 제거
- [x] JSDoc 주석 추가
- [x] Import 정리
- [x] 린트 에러 확인

---

## 🚀 추가 개선 제안

### 향후 고려 사항

1. **React Query DevTools 추가** (개발 환경)
   ```typescript
   import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
   
   <QueryClientProvider client={queryClient}>
     {children}
     {process.env.NODE_ENV === 'development' && (
       <ReactQueryDevtools initialIsOpen={false} />
     )}
   </QueryClientProvider>
   ```

2. **Error Boundary 추가**
   ```typescript
   import { ErrorBoundary } from 'react-error-boundary';
   
   <ErrorBoundary fallback={<ErrorFallback />}>
     <YourApp />
   </ErrorBoundary>
   ```

3. **Zustand로 마이그레이션 고려**
   - Recoil보다 가볍고 Next.js와 호환성 좋음
   - 보일러플레이트 코드 감소
   - 더 나은 TypeScript 지원

4. **React Query 캐싱 전략 세분화**
   ```typescript
   // 블로그 포스트: 자주 변경되지 않음
   staleTime: 10 * 60 * 1000,  // 10분
   
   // 프로젝트 목록: 가끔 업데이트
   staleTime: 5 * 60 * 1000,   // 5분
   
   // 사용자 정보: 실시간
   staleTime: 0,               // 항상 refetch
   ```

---

## 📚 참고 자료

- [React Query - SSR & Next.js](https://tanstack.com/query/latest/docs/react/guides/ssr)
- [React 18 - useState](https://react.dev/reference/react/useState)
- [Next.js 13+ - Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [React Hot Toast - Documentation](https://react-hot-toast.com/docs)

---

## 🐛 버그 수정 요약

### 치명적 버그 수정
**QueryClient 모듈 레벨 생성 → useState로 이동**

이 변경은 단순한 리팩토링이 아니라 **실제 프로덕션 버그를 방지**하는 중요한 수정입니다.

**발생 가능했던 문제:**
1. 사용자 A의 데이터가 사용자 B에게 보일 수 있음
2. 메모리 누수로 서버 성능 저하
3. 예측 불가능한 캐시 동작

**이제 안전합니다! ✅**

