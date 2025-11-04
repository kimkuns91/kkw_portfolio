import { IBlogPost } from '@/types/blog';
import { fetchBlogPosts } from '@/utils/blog';
import { useInfiniteQuery } from '@tanstack/react-query';

/**
 * 블로그 게시글을 무한 스크롤로 가져오는 커스텀 훅
 *
 * @param initialData - 서버에서 전달받은 초기 데이터 (ISR)
 * @returns React Query의 useInfiniteQuery 결과
 *
 * @description
 * Velog API에서 블로그 게시글을 페이지네이션으로 가져옵니다.
 * IntersectionObserver와 함께 사용하여 무한 스크롤을 구현합니다.
 *
 * @features
 * - ISR 데이터 활용으로 중복 fetch 방지
 * - 자동 캐싱 (React Query)
 * - 백그라운드 refetch
 * - 에러 처리
 * - 페이지네이션 상태 관리
 *
 * @performance
 * - initialData가 있으면 클라이언트에서 중복 fetch 없음
 * - 서버 데이터를 즉시 사용하여 LCP 개선
 */
export function useBlogPosts(initialData?: IBlogPost[]) {
  return useInfiniteQuery<IBlogPost[], Error>({
    queryKey: ['blog-posts'],
    initialPageParam: '',
    queryFn: ({ pageParam = '' }) =>
      fetchBlogPosts(pageParam as string),
    getNextPageParam: (lastPage) => {
      // 마지막 페이지의 마지막 게시글 ID를 다음 페이지 커서로 사용
      if (lastPage && lastPage.length > 0) {
        return lastPage[lastPage.length - 1]?.id;
      }
      return undefined;
    },
    // 서버에서 전달받은 데이터를 초기값으로 사용
    ...(initialData && {
      initialData: {
        pages: [initialData],
        pageParams: [''],
      },
    }),
    staleTime: 5 * 60 * 1000, // 5분간 fresh 상태 유지
    gcTime: 10 * 60 * 1000, // 10분간 캐시 유지 (이전 cacheTime)
  });
}
