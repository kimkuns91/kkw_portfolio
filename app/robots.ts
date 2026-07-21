import { MetadataRoute } from 'next';

/**
 * robots.txt 생성
 *
 * @description
 * - 단일 규칙으로 모든 크롤러에 동일 정책 적용
 *   (크롤러 전용 그룹이 있으면 해당 크롤러는 * 그룹을 무시하므로,
 *   전용 그룹을 두면 disallow가 누락된다)
 * - /*.xml 차단은 sitemap.xml 자기 차단이므로 두지 않는다
 * - host/sitemap은 정규 도메인(www) 기준
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin', '/private/', '/dashboard'],
      },
    ],
    sitemap: 'https://www.whitemouse.dev/sitemap.xml',
    host: 'https://www.whitemouse.dev',
  };
}
