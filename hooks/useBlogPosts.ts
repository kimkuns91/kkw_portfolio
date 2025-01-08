import { IBlogPost } from '@/types/blog';
import { fetchBlogPosts } from '@/utils/blog';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useBlogPosts() {
  return useInfiniteQuery<IBlogPost[]>({
    queryKey: ['posts'],
    initialPageParam: '',
    queryFn: ({ pageParam = '' }) =>
      fetchBlogPosts(pageParam as string | undefined),
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
  });
}
