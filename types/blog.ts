export interface IBlogPost {
  id: string;
  title: string;
  short_description: string;
  thumbnail: string;
  user: {
    id: string;
    username: string;
    profile: {
      id: string;
      thumbnail: string;
    };
  };
  url_slug: string;
  released_at: string;
  updated_at: string;
  comments_count: number;
  tags: string[];
  is_private: boolean;
  likes: number;
} 