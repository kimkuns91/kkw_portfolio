import { NextResponse } from 'next/server';

/**
 * Velog API Proxy Route Handler
 *
 * @description
 * Velog GraphQL API를 프록시하는 Route Handler
 * CORS 문제를 해결하고 클라이언트에서 직접 Velog API를 호출하지 않도록 합니다.
 *
 * @performance
 * - Next.js의 자동 캐싱 활용
 * - 에러 처리 및 응답 검증
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch('https://v2.velog.io/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      next: {
        revalidate: 300, // 5분마다 revalidate
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch from Velog API' },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data) {
      return NextResponse.json(
        { error: 'Invalid response from Velog API' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Blog API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 