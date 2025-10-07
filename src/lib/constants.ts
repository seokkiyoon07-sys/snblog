// 앱 상수 정의
export const APP_CONFIG = {
  name: 'SN Academy Blog',
  description:
    'SN 학원의 주요 사업내용, 컬럼, 입시정보, 후기를 공유하는 블로그입니다.',
  url: 'https://blog.snacademy.co.kr',
  author: 'SN Academy',
  keywords: ['SN', '학원', '입시', '교육', '블로그', '컬럼', '후기'],
} as const;

export const ROUTES = {
  HOME: '/',
  STARTUP: '/startup',
  COLUMNS: '/columns',
  ORIGINALS: '/originals',
  PROBLEMS: '/problems',
  ADMISSIONS: '/admissions',
  REVIEWS: '/reviews',
  SEARCH: '/search',
  TAGS: '/tags',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 6,
  MAX_PAGE_SIZE: 20,
} as const;

export const SEO = {
  DEFAULT_OG_IMAGE: '/og/default.jpg',
  DEFAULT_TWITTER_CARD: 'summary_large_image',
} as const;
