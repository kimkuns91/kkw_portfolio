import { MetadataRoute } from 'next';

// 기본 URL 상수 정의
const BASE_URL = 'https://portfolio.whitemouse.dev';

// 사이트맵 항목 인터페이스 정의
interface ISitemapItem {
  path: string;
  priority: number;
  changeFrequency:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
}

// 사이트맵 항목 정의
const sitemapItems: ISitemapItem[] = [
  {
    path: '/',
    priority: 1.0,
    changeFrequency: 'daily',
  },
  {
    path: '/about',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    path: '/blog',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/projects',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    path: '/contact',
    priority: 0.5,
    changeFrequency: 'monthly',
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapItems.map((item) => ({
    url: `${BASE_URL}${item.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
