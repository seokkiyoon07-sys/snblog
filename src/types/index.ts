// 전역 타입 정의
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  badge?: string; // 배지 텍스트 (예: "3만뷰", "내신 필수")
  content: string;
  category: string;
  subcategory?: string;
  tags?: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  featuredOrder?: number; // 추천 포스트 순서 (낮을수록 먼저)
  published: boolean;
  thumbnail?: string;
  youtubeUrl?: string;
  url: string;
  type?: 'special' | 'standard';
  problemFileUrl?: string;
  problemDataId?: string;
}

export interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured';
  showThumbnail?: boolean;
  className?: string;
}

export interface FeaturedPostProps {
  post: Post;
  className?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export interface SearchParams {
  page?: string;
  q?: string;
  tag?: string;
}

// API 응답 타입
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// 메타데이터 타입
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
