'use client';

import { BLOG_DEFAULT_THUMBNAIL, VELOG_USERNAME } from '@/constants/blog';

import { IBlogPost } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface IBlogPostProps {
  post: IBlogPost;
}

/**
 * BlogPost 컴포넌트
 *
 * @description
 * 개별 블로그 게시글을 카드 형태로 표시하는 컴포넌트
 *
 * @param post - 블로그 게시글 데이터
 *
 * @features
 * - 썸네일 이미지 표시
 * - 제목 및 요약 표시
 * - 첫 번째 태그 표시
 * - Velog 게시글로 직접 링크
 * - 이미지 로딩 실패 시 og-image.png 대체
 *
 * @performance
 * - lazy loading으로 스크롤 시 이미지 로드
 * - onError 핸들러로 실패한 이미지 대체
 * - 그라데이션 배경으로 로딩 중 시각적 개선
 */
export default function BlogPost({ post }: IBlogPostProps) {
  const velogUrl = `https://velog.io/@${VELOG_USERNAME}/${post.url_slug}`;
  const [imageError, setImageError] = useState(false);

  // 썸네일 이미지 결정 (우선순위: post.thumbnail → BLOG_DEFAULT_THUMBNAIL)
  const thumbnailSrc = imageError || !post.thumbnail 
    ? BLOG_DEFAULT_THUMBNAIL 
    : post.thumbnail;

  return (
    <Link
      href={velogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:opacity-80 hover:ml-4 transition-all duration-300">
        {/* 썸네일 이미지 */}
        <div className="relative w-full md:w-[30%] h-[200px] md:h-[180px] rounded-xl overflow-hidden bg-gradient-to-br from-primary to-secondary">
          <Image
            src={thumbnailSrc}
            alt={`${post.title} 썸네일`}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        </div>

        {/* 게시글 정보 */}
        <div className="flex-1 py-4 md:py-0 md:pl-6">
          {/* 태그 */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-neutral px-2 py-1 bg-accent/20 rounded">
                {post.tags[0]}
              </span>
            </div>
          )}

          {/* 제목 */}
          <h2 className="text-neutral-light text-lg md:text-xl font-bold mb-2 line-clamp-2">
            {post.title}
          </h2>

          {/* 요약 */}
          {post.short_description && (
            <p className="text-neutral-dark text-sm md:text-base mb-4 line-clamp-2">
              {post.short_description}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
