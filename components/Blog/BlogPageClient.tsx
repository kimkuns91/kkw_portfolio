'use client';

import React, { useEffect, useRef } from 'react';

import { BLOG_MESSAGES } from '@/constants/blog';
import BlogPost from './BlogPost';
import { IBlogPost } from '@/types/blog';
import MotionScrollSection from '../MotionSection';
import Spinner from '../Spinner';
import { useBlogPosts } from '@/hooks/useBlogPosts';

interface IBlogPageClientProps {
  initialData?: IBlogPost[];
}

/**
 * BlogPageClient 컴포넌트
 *
 * @description
 * 블로그 게시글 목록을 표시하고 무한 스크롤을 구현하는 클라이언트 컴포넌트
 *
 * @param initialData - 서버에서 전달받은 초기 데이터 (ISR)
 *
 * @features
 * - ISR: 서버에서 전달받은 초기 데이터 활용
 * - React Query의 useInfiniteQuery로 페이지네이션
 * - IntersectionObserver로 자동 스크롤 감지
 * - 에러 상태 처리
 * - 로딩 상태 표시
 *
 * @performance
 * - 첫 페이지 상위 6개 게시물: eager loading
 * - 나머지 게시물: lazy loading
 * - 이미지 로딩 최적화로 LCP 개선
 * - SSR 데이터로 클라이언트 중복 fetch 방지
 */
export default function BlogPageClient({ initialData }: IBlogPageClientProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status, refetch } =
    useBlogPosts(initialData);

  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = observerRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { 
        threshold: 1.0,
        rootMargin: '100px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // 에러 상태
  if (status === 'error') {
    return (
      <MotionScrollSection>
        <div className="min-h-screen mx-auto flex flex-col items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-red-400">
              {BLOG_MESSAGES.errorTitle}
            </h2>
            <p className="text-neutral-dark">{BLOG_MESSAGES.errorDescription}</p>
            <button
              onClick={() => refetch()}
              className="px-6 py-3 bg-accent text-primary rounded-lg hover:bg-accent/80 transition-colors"
            >
              {BLOG_MESSAGES.retryButton}
            </button>
          </div>
        </div>
      </MotionScrollSection>
    );
  }

  // 초기 로딩 상태
  if (status === 'pending') {
    return (
      <MotionScrollSection>
        <div className="min-h-screen mx-auto flex items-center justify-center">
          <Spinner />
        </div>
      </MotionScrollSection>
    );
  }

  return (
    <MotionScrollSection>
      <div className="min-h-screen mx-auto">
        <h2 className="h2 text-center gradientMoveTitle mb-6">
          {BLOG_MESSAGES.title}
        </h2>
        <p className="text-neutral text-center mb-16">
          <span className="text-red-500">* </span>
          {BLOG_MESSAGES.description}
        </p>

        <div className="flex flex-col space-y-8">
          {data?.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.map((post, postIndex) => (
                <BlogPost 
                  key={post.id} 
                  post={post} 
                  isFirstPage={pageIndex === 0}
                  postIndex={postIndex}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* 무한 스크롤 트리거 */}
        <div
          ref={observerRef}
          className="h-20 flex items-center justify-center my-8"
        >
          {isFetchingNextPage ? (
            <div className="flex items-center gap-2">
              <Spinner />
              <span className="text-neutral">{BLOG_MESSAGES.loading}</span>
            </div>
          ) : hasNextPage ? (
            <span className="text-neutral-dark">
              {BLOG_MESSAGES.scrollForMore}
            </span>
          ) : (
            <span className="text-neutral-dark">
              {BLOG_MESSAGES.noMorePosts}
            </span>
          )}
        </div>
      </div>
    </MotionScrollSection>
  );
}

