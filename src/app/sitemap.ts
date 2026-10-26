import { MetadataRoute } from 'next';
import { allPosts } from '@/data/posts';
import { CARD_NEWS } from '@/data/card-news';
import { BASE_URL } from '@/lib/config';
import { ODYSSEY_PATH, ODYSSEY_UPDATED } from '@/data/odyssey';
import {
  KOREAN_HISTORY_PATH,
  KOREAN_HISTORY_UPDATED,
} from '@/data/korean-history';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;

  // 메인 홈
  const staticPages = [
    {
      url: `${baseUrl}${KOREAN_HISTORY_PATH}`,
      lastModified: new Date(KOREAN_HISTORY_UPDATED),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}${ODYSSEY_PATH}`,
      lastModified: new Date(ODYSSEY_UPDATED),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
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
      url: `${baseUrl}/history`,
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
      const priority = isOriginals ? 0.85 : post.featured ? 0.9 : 0.8;

      // 이미지 사이트맵: 대표 이미지와 글 상단 카드뉴스. 우리 사이트 이미지만 넣고,
      // Next.js 가 image:loc 를 이스케이프하지 않아 & 는 직접 바꾼다
      const images = [
        post.thumbnail,
        ...(CARD_NEWS[post.id]?.slides.map(slide => slide.src) ?? []),
      ]
        .filter((src): src is string => Boolean(src?.startsWith('/')))
        .map(src => encodeURI(`${baseUrl}${src}`).replace(/&/g, '&amp;'));

      return {
        url: `${baseUrl}${post.url}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority,
        ...(images.length > 0 && { images }),
      };
    });

  return [...staticPages, ...pdfPages, ...dynamicPages];
}
