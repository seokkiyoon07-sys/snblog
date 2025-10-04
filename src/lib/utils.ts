import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { APP_CONFIG } from './constants';

// Tailwind CSS 클래스 병합 유틸리티
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// 날짜 포맷팅
export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// URL 생성
export function createUrl(path: string, searchParams?: Record<string, string>): string {
    const url = new URL(path, 'https://blog.snacademy.co.kr');

    if (searchParams) {
        Object.entries(searchParams).forEach(([key, value]) => {
            url.searchParams.set(key, value);
        });
    }

    return url.toString();
}

// 텍스트 자르기
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

// SEO 메타데이터 생성
export function generateMetadata({
    title,
    description,
    keywords = [],
    ogImage,
    canonical,
}: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    canonical?: string;
}) {
    return {
        title: `${title} | ${APP_CONFIG.name}`,
        description,
        keywords: [...APP_CONFIG.keywords, ...keywords].join(', '),
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'ko_KR',
            url: canonical ? `https://blog.snacademy.co.kr${canonical}` : undefined,
            images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ogImage ? [ogImage] : undefined,
        },
        alternates: canonical ? { canonical } : undefined,
    };
}

// 페이지네이션 계산
export function calculatePagination(
    currentPage: number,
    totalItems: number,
    pageSize: number
) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);

    return {
        totalPages,
        startIndex,
        endIndex,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
    };
}
