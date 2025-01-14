import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/services',
          '/resume',
          '/work',
          '/contact'
        ],
        disallow: [
          '/admin*',
          '/api/*',
          '/private/*',
          '/*.json',
          '/*.xml',
          '/dashboard'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 2
      }
    ],
    sitemap: 'https://portfolio.whitemouse.dev/sitemap.xml',
    host: 'https://portfolio.whitemouse.dev'
  };
}
