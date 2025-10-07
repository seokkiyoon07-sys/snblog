import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Metadata } from 'next';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type GenerateMetadataOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
};

// Reusable helper to build Metadata objects consistently across pages
export function generateMetadata(
  options: GenerateMetadataOptions = {}
): Metadata {
  const { title, description, keywords, canonical, ogImage } = options;

  const baseUrl = 'https://blog.snacademy.co.kr';

  const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: title || undefined,
      description: description || undefined,
      type: 'website',
      locale: 'ko_KR',
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title || 'Open Graph Image',
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: title || undefined,
      description: description || undefined,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };

  return metadata;
}

export function getCategoryConfig(category: string) {
  const configs: Record<string, { backLink: string; backText: string }> = {
    posts: {
      backLink: '/posts',
      backText: '← 블로그 목록으로 돌아가기',
    },
    originals: {
      backLink: '/originals',
      backText: '← 오리지널 목록으로 돌아가기',
    },
    startup: {
      backLink: '/startup',
      backText: '← 스타트업 목록으로 돌아가기',
    },
    problems: {
      backLink: '/problems',
      backText: '← 문제 목록으로 돌아가기',
    },
    reviews: {
      backLink: '/reviews',
      backText: '← 리뷰 목록으로 돌아가기',
    },
    columns: {
      backLink: '/columns',
      backText: '← 칼럼 목록으로 돌아가기',
    },
    admissions: {
      backLink: '/admissions',
      backText: '← 입시 목록으로 돌아가기',
    },
  };

  return (
    configs[category] || {
      backLink: '/',
      backText: '← 홈으로 돌아가기',
    }
  );
}
