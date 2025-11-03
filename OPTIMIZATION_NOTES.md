# 페이지 최적화 개선 사항

## 📅 날짜: 2025-11-03

## 🎯 목표
메인 페이지(`app/page.tsx`)의 성능 개선 및 이미지 로딩 속도 최적화

---

## 🔧 주요 개선 사항

### 1. **코드 구조 개선**

#### ✅ 메타데이터 분리
- **변경 전**: `app/page.tsx`에 65줄의 메타데이터 코드가 혼재
- **변경 후**: `app/metadata.ts`로 분리하여 관심사 분리 및 가독성 향상

```typescript
// Before: app/page.tsx (85줄)
export const metadata: Metadata = {
  // ... 65줄의 메타데이터
};

// After: app/page.tsx (33줄)
import { homeMetadata } from './metadata';
export const metadata = homeMetadata;
```

#### ✅ 불필요한 Suspense 제거
- **문제점**: 클라이언트 컴포넌트(`'use client'`)를 Suspense로 감싸는 것은 효과가 없음
- **해결**: Suspense 경계 제거하여 불필요한 래핑 제거

```typescript
// Before
<Suspense fallback={<Loading />}>
  <Hero />  {/* 'use client' 컴포넌트 */}
</Suspense>

// After
<Hero />
```

---

### 2. **이미지 최적화**

#### ✅ Image 컴포넌트에 loading 속성 추가

**`components/Project.tsx`**
```typescript
<Image
  src={project.thumbnail[0]}
  alt={project.title}
  fill
  loading="lazy"  // ✨ 추가
  sizes="(max-width: 768px) 100vw, 30vw"  // ✨ 추가
  className="object-cover object-top"
/>
```

**`components/Home/Skills.tsx`**
```typescript
<Image
  src={skill.icon}
  alt={skill.title}
  width={40}
  height={40}
  loading="lazy"  // ✨ 추가
  className="w-10 h-10"
/>
```

#### ✅ next.config.ts 이미지 최적화 설정 강화

```typescript
images: {
  formats: ['image/avif', 'image/webp'],  // AVIF 추가 (더 작은 파일 크기)
  minimumCacheTTL: 60,
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],  // 반응형 크기
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],  // 아이콘 크기
  // ...
}
```

#### ✅ 캐시 헤더 추가

```typescript
headers: async () => [
  {
    source: '/images/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',  // 1년 캐싱
      },
    ],
  },
  // /icons, /projects 경로도 동일하게 설정
]
```

#### ✅ 메인 이미지 Preload 추가

**`app/layout.tsx`**
```tsx
<head>
  {/* 메인 프로필 이미지 preload */}
  <link
    rel="preload"
    href="/images/photo_v2.png"
    as="image"
    type="image/png"
  />
</head>
```

---

## 📊 예상 성능 개선 효과

### Before → After

| 항목 | Before | After | 개선 |
|------|--------|-------|------|
| 메인 페이지 코드 라인 | 85줄 | 33줄 | **61% 감소** |
| 불필요한 Suspense | 4개 | 0개 | **완전 제거** |
| 이미지 최적화 속성 | 없음 | loading, sizes | **추가** |
| 이미지 포맷 | webp | avif, webp | **더 최적화** |
| 캐싱 전략 | projects만 | images, icons, projects | **3배 확장** |
| 이미지 preload | 없음 | 메인 이미지 | **초기 로딩 개선** |

---

## 🚀 성능 개선 원리

### 1. **Lazy Loading**
- 뷰포트에 들어올 때만 이미지 로드
- 초기 페이지 로딩 속도 향상
- 네트워크 대역폭 절약

### 2. **AVIF 포맷**
- WebP보다 약 20-30% 더 작은 파일 크기
- 최신 브라우저에서 자동 적용
- 구형 브라우저는 WebP로 폴백

### 3. **Responsive Images (sizes)**
- 디바이스 크기에 맞는 이미지 제공
- 모바일에서는 작은 이미지, 데스크톱에서는 큰 이미지
- 불필요한 대역폭 사용 방지

### 4. **Cache-Control**
- 정적 이미지를 1년간 브라우저 캐싱
- 재방문 시 서버 요청 없이 즉시 로드
- 서버 부하 감소

### 5. **Preload**
- 브라우저가 페이지 파싱 전에 이미지 다운로드 시작
- LCP (Largest Contentful Paint) 개선
- 체감 로딩 속도 향상

---

## 📝 추가 개선 제안

### 향후 고려 사항

1. **이미지 CDN 사용**
   - Cloudflare Images 또는 Vercel Image Optimization
   - 전 세계적으로 빠른 이미지 전송

2. **Placeholder 추가**
   - `placeholder="blur"`와 `blurDataURL` 사용
   - 이미지 로드 전 블러 효과로 UX 개선

3. **WebP/AVIF 변환**
   - 기존 PNG/JPG 이미지를 WebP/AVIF로 사전 변환
   - 빌드 타임에 최적화

4. **Critical CSS 인라인**
   - 초기 렌더링에 필요한 CSS만 인라인
   - FCP (First Contentful Paint) 개선

5. **코드 스플리팅**
   - 큰 라이브러리 동적 import
   - 번들 크기 최적화

---

## ✅ 체크리스트

- [x] 메타데이터 파일 분리
- [x] 불필요한 Suspense 제거
- [x] 프로젝트 이미지 lazy loading
- [x] 스킬 아이콘 lazy loading
- [x] Next.js 이미지 설정 최적화
- [x] 캐시 헤더 추가
- [x] 메인 이미지 preload
- [x] JSDoc 주석 추가
- [x] 린트 에러 확인

---

## 🎓 학습 포인트

### Next.js Image Optimization
- `priority`: 첫 화면의 중요 이미지에만 사용
- `loading="lazy"`: 대부분의 이미지는 lazy loading
- `sizes`: 반응형 이미지 크기 명시로 최적화
- AVIF > WebP > 원본 순서로 폴백

### React 18 Suspense
- 클라이언트 컴포넌트에는 Suspense가 동작하지 않음
- 서버 컴포넌트의 비동기 작업에만 유효
- streaming SSR을 위한 기능

### 캐싱 전략
- `immutable`: 절대 변하지 않는 파일
- `max-age=31536000`: 1년 (최대 권장값)
- 정적 에셋은 파일명에 해시 포함 권장

---

## 📚 참고 자료

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web.dev - Image Performance](https://web.dev/fast/#optimize-your-images)
- [AVIF vs WebP](https://jakearchibald.com/2020/avif-has-landed/)

