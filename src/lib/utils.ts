import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Metadata } from 'next';
import { BASE_URL } from './config';

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

  const baseUrl = BASE_URL;

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

/**
 * Formats read time consistently across the application
 * @param readTime - Read time as string (e.g., '5', '5분', '11')
 * @returns Formatted string (e.g., '읽기 시간: 5분', '읽기 시간: 11분')
 */
export function formatReadTime(readTime: string): string {
  // readTime이 이미 '분'으로 끝나면 그대로 사용
  const timeValue = readTime.endsWith('분') ? readTime : `${readTime}분`;
  return `읽기 시간: ${timeValue}`;
}

export function getCategoryConfig(category: string) {
  const configs: Record<
    string,
    {
      backLink: string;
      backText: string;
      subject?: string;
      learningObjectives?: string[];
    }
  > = {
    posts: {
      backLink: '/posts',
      backText: '← 블로그 목록으로 돌아가기',
      subject: '프로그래밍',
      learningObjectives: ['기술적 이해', '실무 적용', '문제 해결 능력'],
    },
    originals: {
      backLink: '/originals',
      backText: '← 오리지널 목록으로 돌아가기',
      subject: '창작 콘텐츠',
      learningObjectives: ['창의적 사고', '콘텐츠 제작', '스토리텔링'],
    },
    startup: {
      backLink: '/startup',
      backText: '← 스타트업 목록으로 돌아가기',
      subject: '창업',
      learningObjectives: ['비즈니스 모델', '시장 분석', '투자 전략'],
    },
    problems: {
      backLink: '/problems',
      backText: '← 문제 목록으로 돌아가기',
      subject: '문제 해결',
      learningObjectives: ['논리적 사고', '알고리즘', '코딩 실력'],
    },
    reviews: {
      backLink: '/reviews',
      backText: '← 리뷰 목록으로 돌아가기',
      subject: '기술 리뷰',
      learningObjectives: ['기술 평가', '비판적 사고', '분석 능력'],
    },
    columns: {
      backLink: '/columns',
      backText: '← 칼럼 목록으로 돌아가기',
      subject: '칼럼',
      learningObjectives: ['인사이트', '전문성', '의견 형성'],
    },
    admissions: {
      backLink: '/admissions',
      backText: '← 입시 목록으로 돌아가기',
      subject: '입시',
      learningObjectives: ['전형 이해', '전략 수립', '준비 방법'],
    },
    'school-exam': {
      backLink: '/school-exam',
      backText: '← 내신대비 목록으로 돌아가기',
      subject: '내신대비',
      learningObjectives: ['고전문학 이해', '작품 분석', '시험 대비'],
    },
  };

  return (
    configs[category] || {
      backLink: '/',
      backText: '← 홈으로 돌아가기',
      subject: '일반',
      learningObjectives: ['기본 이해', '지식 습득'],
    }
  );
}
