export async function fetchBlogPosts(pageParam: string = '') {
  const response = await fetch('/api/blog', {
    method: 'POST',
    body: JSON.stringify({
      operationName: 'Posts',
      variables: {
        username: 'kimkuns',
        cursor: pageParam,
        limit: 10,
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

  const { data } = await response.json();
  return data.posts;
} 