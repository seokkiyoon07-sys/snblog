// SN Originals 작품 중 평가원 시험에 실제로 출제된 작품 배지
// label은 학년도 기준. rank는 정렬용(학년도 × 100 + 시행 월, 수능 = 11)
export type ExamBadge = {
  label: string;
  tone: 'suneung' | 'mock';
  rank: number;
};

export const EXAM_BADGES: Record<string, ExamBadge> = {
  'changseon-gamui-rok': {
    label: '2027 수능 출제',
    tone: 'suneung',
    rank: 202711,
  },
  chamhuirok: { label: '2027 수능 출제', tone: 'suneung', rank: 202711 },
  soksamiingok: { label: '2027 9월 모평 출제', tone: 'mock', rank: 202709 },
  buksaegok: { label: '2026 수능 출제', tone: 'suneung', rank: 202611 },
  gapminga: { label: '2025 수능 출제', tone: 'suneung', rank: 202511 },
  // 몰아보기: 수록 작품이 출제된 경우
  '2027-suneung-literature-marathon': {
    label: '「참회록」 2027 수능 출제',
    tone: 'suneung',
    rank: 202711,
  },
  '2027-suneung-wanseong-literature-marathon': {
    label: '「창선감의록」 2027 수능 출제',
    tone: 'suneung',
    rank: 202711,
  },
};

export const EXAM_BADGE_STYLE: Record<
  ExamBadge['tone'],
  { badge: string; border: string; ring: string; title: string; bar: string }
> = {
  suneung: {
    badge: 'bg-gradient-to-r from-amber-500 to-orange-500',
    border: 'border-amber-400 dark:border-amber-500',
    ring: 'ring-1 ring-amber-200 dark:ring-amber-500/30',
    title:
      'text-amber-700 dark:text-amber-400 group-hover:text-amber-600 dark:group-hover:text-amber-300',
    bar: 'border-l-amber-400',
  },
  mock: {
    badge: 'bg-gradient-to-r from-sky-500 to-blue-500',
    border: 'border-sky-400 dark:border-sky-500',
    ring: 'ring-1 ring-sky-200 dark:ring-sky-500/30',
    title:
      'text-sky-700 dark:text-sky-400 group-hover:text-sky-600 dark:group-hover:text-sky-300',
    bar: 'border-l-sky-400',
  },
};
