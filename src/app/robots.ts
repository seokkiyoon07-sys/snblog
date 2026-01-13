import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/private/', '/admin/', '/aidocs/'] },
      { userAgent: 'Yeti', allow: '/' },        // 네이버
      { userAgent: 'Naverbot', allow: '/' },    // 네이버
      { userAgent: 'Googlebot', allow: '/' },   // 구글
      { userAgent: 'Bingbot', allow: '/' },     // 빙
      { userAgent: 'Zumbot', allow: '/' },      // 줌
      { userAgent: 'Daumoa', allow: '/' },      // 다음/카카오
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
