import { BLOG_API_CONFIG, VELOG_USERNAME } from '@/constants/blog';

import { IBlogPost } from '@/types/blog';

/**
 * Velog GraphQL 쿼리
 */
const VELOG_QUERY = `
  query Posts($cursor: ID, $username: String, $temp_only: Boolean, $tag: String, $limit: Int) {
    posts(cursor: $cursor, username: $username, temp_only: $temp_only, tag: $tag, limit: $limit) {
      id
      title
      short_description
      thumbnail
      user {
        id
        username
        profile {
          id
          thumbnail
        }
      }
      url_slug
      released_at
      updated_at
      comments_count
      tags
      is_private
      likes
    }
  }
`;

/**
 * Velog API를 통해 블로그 게시글을 가져오는 함수
 *
 * @param pageParam - 페이지네이션을 위한 커서 (게시글 ID)
 * @returns 블로그 게시글 배열
 *
 * @description
 * Velog GraphQL API를 호출하여 사용자의 게시글 목록을 가져옵니다.
 * 서버/클라이언트 양쪽에서 사용 가능합니다.
 *
 * @performance
 * - 서버에서 호출 시: Velog API 직접 호출
 * - 클라이언트에서 호출 시: /api/blog 프록시 사용
 */
export async function fetchBlogPosts(
  pageParam: string = ''
): Promise<IBlogPost[]> {
  // 서버/클라이언트 환경 감지
  const isServer = typeof window === 'undefined';
  
  // API 엔드포인트 결정
  const apiUrl = isServer 
    ? 'https://v2.velog.io/graphql' 
    : '/api/blog';

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: BLOG_API_CONFIG.operationName,
      variables: {
        username: VELOG_USERNAME,
        cursor: pageParam,
        limit: BLOG_API_CONFIG.postsPerPage,
      },
      query: VELOG_QUERY,
    }),
    // 서버에서 호출 시 캐시 설정
    ...(isServer && {
      next: {
        revalidate: 300, // 5분 캐시
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }

  const { data } = await response.json();
  
  if (!data || !data.posts) {
    throw new Error('Invalid response from blog API');
  }

  return data.posts;
} 