import { BLOG_API_CONFIG, VELOG_USERNAME } from '@/constants/blog';

import { IBlogPost } from '@/types/blog';

/**
 * Velog API를 통해 블로그 게시글을 가져오는 함수
 *
 * @param pageParam - 페이지네이션을 위한 커서 (게시글 ID)
 * @returns 블로그 게시글 배열
 *
 * @description
 * Velog GraphQL API를 호출하여 사용자의 게시글 목록을 가져옵니다.
 * React Query의 useInfiniteQuery와 함께 사용됩니다.
 */
export async function fetchBlogPosts(
  pageParam: string = ''
): Promise<IBlogPost[]> {
  const response = await fetch('/api/blog', {
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
      query: `
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
      `,
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