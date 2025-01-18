'use client';

import React, { Suspense, useEffect, useRef } from 'react';

import BlogPost from '@/components/Blog/BlogPost';
import Loading from '@/app/loading';
import MotionScrollSection from '@/components/MotionSection';
import { useBlogPosts } from '@/hooks/useBlogPosts';

export default function BlogPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useBlogPosts();

  // 관찰할 요소에 대한 ref 생성
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 관찰 대상이 화면에 보이고, 다음 페이지가 있으며, 현재 페이지를 가져오는 중이 아닐 때
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 } // 요소가 100% 보일 때 콜백 실행
    );

    // 현재 ref 요소 관찰 시작
    if (observerRef.current) {
      observer.observe(observerRef.current);
    } 

    // 컴포넌트 언마운트 시 관찰 중단
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === 'error') return <div>Error loading posts</div>;

  return (
    <MotionScrollSection>
      <div className="container min-h-screen mx-auto">
        <h2 className="h2 text-center gradientMoveTitle mb-6">게시글</h2>
        <p className="text-neutral text-center mb-16">
          <span className="text-red-500">*</span> Velog.io API를 활용하여
          제작되었으며, 게시물을 클릭하면 Velog의 해당 게시물로 바로 이동할 수
          있습니다.
        </p>
        
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col space-y-8">
            {data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.map((post) => (
                  <BlogPost key={post.id} post={post} />
                ))}
              </React.Fragment>
            ))}
          </div>

          <div
            ref={observerRef}
            className="h-10 flex items-center justify-center"
          >
            {isFetchingNextPage
              ? '로딩 중...'
              : hasNextPage
              ? '스크롤하여 더 보기'
              : '더 이상 게시글이 없습니다'}
          </div>
        </Suspense>
      </div>
    </MotionScrollSection>
  );
}
