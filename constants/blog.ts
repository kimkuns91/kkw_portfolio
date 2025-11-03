/**
 * Blog 페이지 관련 상수 정의
 */

// Velog 사용자명
export const VELOG_USERNAME = 'kimkuns';

// 블로그 API 설정
export const BLOG_API_CONFIG = {
  postsPerPage: 10,
  operationName: 'Posts',
} as const;

// 블로그 메시지
export const BLOG_MESSAGES = {
  title: '게시글',
  description:
    'Velog.io API를 활용하여 제작되었으며, 게시물을 클릭하면 Velog의 해당 게시물로 바로 이동할 수 있습니다.',
  loading: '로딩 중...',
  scrollForMore: '스크롤하여 더 보기',
  noMorePosts: '더 이상 게시글이 없습니다',
  errorTitle: '게시글을 불러올 수 없습니다',
  errorDescription: '잠시 후 다시 시도해주세요.',
  retryButton: '다시 시도',
} as const;

// IntersectionObserver 설정
export const OBSERVER_CONFIG = {
  threshold: 1.0, // 요소가 100% 보일 때 콜백 실행
  rootMargin: '100px', // 100px 전에 미리 로드 시작
} as const;

