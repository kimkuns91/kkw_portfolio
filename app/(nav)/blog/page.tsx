import BlogPageClient from '@/components/Blog/BlogPageClient';
import { blogMetadata } from './metadata';

export const metadata = blogMetadata;

/**
 * Blog 페이지 (Server Component)
 *
 * @description
 * Velog API를 통해 블로그 게시글을 가져와 표시하는 페이지
 *
 * @features
 * - 무한 스크롤 (Infinite Scroll)
 * - IntersectionObserver를 통한 자동 로딩
 * - React Query를 통한 데이터 캐싱
 */
export default function BlogPage() {
  return <BlogPageClient />;
}
