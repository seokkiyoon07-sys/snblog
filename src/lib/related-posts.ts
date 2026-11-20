import type { Post } from '@/data/posts';

// 사이드바 '함께 읽을 글'에 쓰는 가벼운 목록과, 글 주소별 관련 글 번호.
// 사이드바는 모든 페이지에 붙는 레이아웃 안에 있어 지금 어떤 글을 보는지 서버에서 알 수 없다.
// 그래서 관련 글은 빌드 때 미리 계산해 두고, 브라우저에서 현재 주소로 골라 보여 준다.
export interface RelatedItem {
  id: string;
  title: string;
  url: string;
  date: string;
}

export interface RelatedIndex {
  items: RelatedItem[];
  byUrl: Record<string, number[]>;
}

const LIMIT = 4;
// 학원 이름 태그는 주제와 무관하게 여러 글에 붙어 관련성 계산에서 뺀다
const BRAND_TAG = /독학기숙학원$|^SN ?Academy$|^SN아카데미$/i;

export function buildRelatedIndex(posts: Post[]): RelatedIndex {
  // 거의 모든 글에 붙는 태그(예: 'SN독학기숙학원')는 관련성을 거의 말해 주지 않으므로
  // 드물게 쓰인 태그일수록 무게를 크게 준다
  const tagCount = new Map<string, number>();
  for (const post of posts)
    for (const tag of new Set(post.tags ?? []))
      tagCount.set(tag, (tagCount.get(tag) ?? 0) + 1);
  const tagWeight = (tag: string) =>
    Math.log(posts.length / (tagCount.get(tag) ?? posts.length));

  const time = (post: Post) => new Date(post.date).getTime();
  const byUrl: Record<string, number[]> = {};

  const indexById = new Map(posts.map((post, index) => [post.id, index]));

  posts.forEach((post, index) => {
    // 사람이 고른 글(related)을 먼저, 모자라면 자동 계산으로 채운다
    const curated = (post.related ?? [])
      .map(id => indexById.get(id))
      .filter(
        (other): other is number => other !== undefined && other !== index
      );
    const tags = new Set(post.tags ?? []);
    const scored = posts
      .map((other, otherIndex) => {
        if (otherIndex === index || other.url === post.url) return null;
        let score = 0;
        if (post.series && other.series === post.series) score += 6;
        for (const tag of other.tags ?? [])
          if (tags.has(tag) && !BRAND_TAG.test(tag)) score += tagWeight(tag);
        if (other.category === post.category) score += 1.5;
        if (post.subcategory && other.subcategory === post.subcategory)
          score += 1.5;
        return score > 1.5 ? { otherIndex, score } : null;
      })
      .filter((entry): entry is { otherIndex: number; score: number } =>
        Boolean(entry)
      )
      .sort(
        (a, b) =>
          b.score - a.score ||
          time(posts[b.otherIndex]) - time(posts[a.otherIndex])
      )
      .map(entry => entry.otherIndex)
      .filter(other => !curated.includes(other));
    const chosen = [...curated, ...scored].slice(0, LIMIT);
    if (chosen.length > 0) byUrl[post.url] = chosen;
  });

  return {
    items: posts.map(({ id, title, url, date }) => ({ id, title, url, date })),
    byUrl,
  };
}
