import BlogPageClient from '@/components/Blog/BlogPageClient';
import { blogMetadata } from './metadata';
import { fetchBlogPosts } from '@/utils/blog';

export const metadata = blogMetadata;

/**
 * ISR (Incremental Static Regeneration) 설정
 * 5분마다 페이지 재생성
 */
export const revalidate = 300;

/**
 * Blog 페이지 (Server Component with ISR)
 *
 * @description
 * Velog API를 통해 블로그 게시글을 가져와 표시하는 페이지
 *
 * @features
 * - ISR: 5분마다 자동 재생성
 * - 초기 데이터 SSR로 제공
 * - 무한 스크롤 (Infinite Scroll)
 * - IntersectionObserver를 통한 자동 로딩
 * - React Query를 통한 데이터 캐싱
 *
 * @performance
 * - LCP 개선: 클라이언트 fetch → 서버 fetch
 * - SEO 개선: HTML에 콘텐츠 포함
 * - 서버 부하 최소화: 5분마다 1번만 API 호출
 */
export default async function BlogPage() {
  // 서버에서 초기 데이터 fetch (첫 페이지)
  const initialPosts = await fetchBlogPosts('');

  return <BlogPageClient initialData={initialPosts} />;
}
