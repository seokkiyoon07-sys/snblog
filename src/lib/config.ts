// Site configuration
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.snacademy.co.kr';

// External URLs
export const EXTERNAL_URLS = {
  ACADEMY: 'https://www.snacademy.co.kr',
  ACADEMY_DAECHI: 'https://daechi.snacademy.kr',
  SNAR_GPT: 'https://snarGPT.ai',
  YOUTUBE_EMBED: (id: string) => `https://www.youtube.com/embed/${id}`,
  YOUTUBE_THUMBNAIL: (id: string) =>
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  KAKAO_CHANNEL: 'http://pf.kakao.com/_exjtgj/chat',
} as const;

// CDN URLs
export const CDN_URLS = {
  KATEX_VERSION: '0.16.9',
  KATEX_CSS: `https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css`,
  KATEX_JS: `https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js`,
  KATEX_AUTO_RENDER: `https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js`,
} as const;

// Navigation menu items
export const NAVIGATION_MENU = [
  { name: '홈', href: '/' },
  { name: 'AI 스타트업', href: '/startup' },
  { name: '컬럼', href: '/columns' },
  { name: '문제 다운로드', href: '/problems' },
  { name: 'SN Originals', href: '/originals' },
  { name: '공지사항', href: '/notice' },
] as const;

// Academy info options for header
export const ACADEMY_INFO_OPTIONS = [
  {
    id: 'dokhak',
    name: '독학기숙',
    url: EXTERNAL_URLS.ACADEMY,
    color: '#29472b',
  },
  {
    id: 'daechi',
    name: '대치점',
    url: EXTERNAL_URLS.ACADEMY_DAECHI,
    color: '#1a365d',
  },
  {
    id: 'snargpt',
    name: 'SNarGPT',
    url: EXTERNAL_URLS.SNAR_GPT,
    color: '#7c3aed',
  },
] as const;

// Category configuration
export const CATEGORY_CONFIG = {
  columns: {
    route: '/columns',
    emoji: '📚',
    label: '컬럼',
  },
  'SN Originals': {
    route: '/originals',
    emoji: '🎥',
    label: 'SN Originals',
  },
  startup: {
    route: '/startup',
    emoji: '🤖',
    label: 'AI 스타트업',
  },
  notice: {
    route: '/notice',
    emoji: '📢',
    label: '공지사항',
  },
  problems: {
    route: '/problems',
    emoji: '📝',
    label: '문제 다운로드',
  },
} as const;

// Helper functions
export function getCategoryRoute(category: string): string {
  return (
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]?.route || '/'
  );
}

export function getCategoryEmoji(category: string): string {
  return (
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]?.emoji || '📚'
  );
}

export function getCategoryLabel(category: string): string {
  return (
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]?.label || category
  );
}

// Organization info for schema markup
export const ORGANIZATION_INFO = {
  name: 'SN독학기숙학원',
  url: BASE_URL,
  logo: `${BASE_URL}/images/sn-logo.png`,
} as const;

// Contact info
export const CONTACT_INFO = {
  phone: '031-771-0300',
  email: 'snacademy@naver.com',
  address: '경기도 양평군 용문면 용문로 147 SN독학기숙학원',
} as const;
