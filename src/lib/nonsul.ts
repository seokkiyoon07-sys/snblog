import {
  getAllPosts,
  type NonsulFormat,
  type NonsulKind,
  type Post,
} from '@/data/posts';

// 개발 서버에서는 미공개 논술 글도 목록·상세에 '초안'으로 보인다
const SHOW_DRAFTS = process.env.NODE_ENV === 'development';

// 논술 유형: 목록 페이지 탭 순서
export const NONSUL_FORMATS: Record<
  NonsulFormat,
  { label: string; emoji: string; description: string }
> = {
  yaksul: {
    label: '약술형 논술',
    emoji: '✏️',
    description:
      '국어·수학 문항에 짧게 답하는 논술입니다. 수능·EBS 연계가 높아 수능 공부가 그대로 무기가 됩니다.',
  },
  inmun: {
    label: '인문논술',
    emoji: '📚',
    description: '제시문을 읽고 논증하는 인문·사회계열 논술입니다.',
  },
  suri: {
    label: '수리논술',
    emoji: '📐',
    description: '풀이 과정을 서술하는 자연계열·의학계열 수리논술입니다.',
  },
};

// 대학 하나 추가 = 여기에 한 줄 + content/nonsul 에 허브 글
export const NONSUL_UNIVERSITIES: Record<
  string,
  { name: string; fullName: string; hubId: string; summary: string }
> = {
  gachon: {
    name: '가천대',
    fullName: '가천대학교',
    hubId: 'gachon-nonsul',
    summary:
      '국어·수학 약술형 논술. 2022~2026학년도 기출과 모의논술을 학년도별로 모았습니다.',
  },
  kookmin: {
    name: '국민대',
    fullName: '국민대학교',
    hubId: 'kookmin-nonsul',
    summary:
      '2026학년도에 처음 시행한 약술형 논술. 유일한 기출과 SN 실전 모의를 함께 봅니다.',
  },
};

// 대학이 만든 자료(기출·모의)와 SN이 만든 자료를 배지로 구분한다
export const NONSUL_KIND_LABEL: Record<NonsulKind, string> = {
  hub: '총정리',
  gichul: '대학 기출',
  mock: '대학 모의논술',
  sn: 'SN 제작 모의',
};

export function getNonsulPosts(): Post[] {
  return getAllPosts()
    .filter(
      post => post.category === 'nonsul' && (post.published || SHOW_DRAFTS)
    )
    .sort(
      (a, b) =>
        (b.nonsul?.year ?? 0) - (a.nonsul?.year ?? 0) ||
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getNonsulPost(id: string): Post | undefined {
  return getNonsulPosts().find(post => post.id === id);
}

// 글 아래 저작권 표기: 대학 자료는 '조판', SN 자료는 '제작'
export function getNonsulCredit(post: Post): string | undefined {
  const info = post.nonsul;
  if (!info || info.kind === 'hub') return undefined;
  if (info.kind === 'sn') return '문제·해설 제작: SN독학기숙학원';
  const university = NONSUL_UNIVERSITIES[info.university];
  return `문제·공식 정답 저작권: ${university?.fullName ?? info.university} · 조판·SN 해설: SN독학기숙학원`;
}
