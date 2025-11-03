/**
 * Loading 컴포넌트
 *
 * @description
 * Next.js의 loading.tsx 파일로 사용되는 글로벌 로딩 컴포넌트
 *
 * @features
 * - 페이지 전환 시 자동으로 표시
 * - 중앙 정렬된 스피너 애니메이션
 * - 접근성 지원 (aria-label, role)
 *
 * @accessibility
 * - role="status"로 동적 업데이트 영역 표시
 * - aria-label로 로딩 상태 명시
 * - aria-hidden으로 시각적 요소 숨김
 */
export default function Loading() {
  return (
    <div
      className="w-full h-[50vh] flex items-center justify-center"
      role="status"
      aria-label="페이지 로딩 중"
    >
      <div
        className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"
        aria-hidden="true"
      />
    </div>
  );
} 