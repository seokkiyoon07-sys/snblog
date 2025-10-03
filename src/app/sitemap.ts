import { MetadataRoute } from 'next';
import { allPosts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blog.snacademy.co.kr';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/originals`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/columns`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/problems`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/startup`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/startup/vision`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // 동적으로 모든 게시물 페이지 생성
  const dynamicPages = allPosts
    .filter(post => post.published)
    .map(post => ({
      url: `${baseUrl}${post.url}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: post.featured ? 0.9 : 0.8,
    }));

  return [...staticPages, ...dynamicPages];
}