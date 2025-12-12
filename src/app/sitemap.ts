import { MetadataRoute } from 'next';
import { allPosts } from '@/data/posts';
import { BASE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;

  // 메인 홈
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    // 메인 섹션(카테고리 성격 페이지)
    {
      url: `${baseUrl}/startup`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/columns`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/problems`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/originals`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/notice`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
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
  ];

  // PDF 파일들 (수능 수학 자료)
  const pdfPages = [
    {
      url: `${baseUrl}/pdfs/2026-suneung-math.pdf`,
      lastModified: new Date('2025-11-13'),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pdfs/2026-suneung-math-answer.pdf`,
      lastModified: new Date('2025-11-13'),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pdfs/2026-suneung-math-full-solution.pdf`,
      lastModified: new Date('2025-11-13'),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ];

  // 동적으로 모든 게시물 페이지 생성
  const dynamicPages = allPosts
    .filter(post => post.published)
    .map(post => {
      // originals 카테고리는 priority 0.85
      const isOriginals = post.category === 'originals';
      const priority = isOriginals ? 0.85 : (post.featured ? 0.9 : 0.8);

      return {
        url: `${baseUrl}${post.url}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority,
      };
    });

  return [...staticPages, ...pdfPages, ...dynamicPages];
}
