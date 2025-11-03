import { IBlogPost } from '@/types/blog';
import { fetchBlogPosts } from '@/utils/blog';
import { useInfiniteQuery } from '@tanstack/react-query';

/**
 * 블로그 게시글을 무한 스크롤로 가져오는 커스텀 훅
 *
 * @returns React Query의 useInfiniteQuery 결과
 *
 * @description
 * Velog API에서 블로그 게시글을 페이지네이션으로 가져옵니다.
 * IntersectionObserver와 함께 사용하여 무한 스크롤을 구현합니다.
 *
 * @features
 * - 자동 캐싱 (React Query)
 * - 백그라운드 refetch
 * - 에러 처리
 * - 페이지네이션 상태 관리
 */
export function useBlogPosts() {
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
    staleTime: 5 * 60 * 1000, // 5분간 fresh 상태 유지
    gcTime: 10 * 60 * 1000, // 10분간 캐시 유지 (이전 cacheTime)
  });
}
