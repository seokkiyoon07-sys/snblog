// 📝 포스트 메타데이터. 콘텐츠는 content/{category}/{id}.html 에 별도 저장.
// 콘텐츠 로딩: import { loadPostContent } from '@/lib/post-content';

import { allPosts as postRecords } from './post-records';

export { allPosts } from './post-records';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // 런타임에 loadPostContent(id)로 로딩
  category: string;
  layoutVariant?: 'default' | 'original-only';
  subcategory?:
    | 'update'
    | 'tech-blog'
    | 'reading'
    | 'literature'
    | 'language-media'
    | 'speech-writing'
    | 'column-korean'
    | 'math1'
    | 'math2'
    | 'probability-stats'
    | 'calculus'
    | 'geometry'
    | 'column-math'
    | 'life-ethics'
    | 'ethics-thought'
    | 'korea-geo'
    | 'world-geo'
    | 'east-asia-history'
    | 'world-history'
    | 'economics'
    | 'politics-law'
    | 'society-culture'
    | 'physics1'
    | 'physics2'
    | 'chemistry1'
    | 'chemistry2'
    | 'life-science1'
    | 'life-science2'
    | 'earth-science1'
    | 'earth-science2';
  tags?: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  featuredOrder?: number;
  published: boolean;
  thumbnail?: string;
  youtubeUrl?: string;
  url: string;
  type?: 'standard' | 'special';
  badge?: string;
  problemFileUrl?: string;
  problemDataId?: string;
}

// 🔗 콘텐츠 로딩이 필요한 경우: import { loadPostContent } from '@/lib/post-content';
function getMergedPosts(): Post[] {
  return postRecords as Post[];
}

export function getPosts(): Post[] {
  return getMergedPosts().filter(post => post.published);
}

export function getAllPosts(): Post[] {
  return getMergedPosts();
}

export function getLatestPosts(limit = 5): Post[] {
  return getPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

function getRecommendationSeed(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function seededScore(value: string): number {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash / 0xffffffff;
}

export function getFeaturedPosts(limit = 4): Post[] {
  const posts = getPosts();
  const today = new Date();
  const seed = getRecommendationSeed(today);
  const pinnedRecommendationIds = ['2027-repeater-class'];
  const excludedRecommendationIds = ['sntk-math1-level3-free'];
  const latestPool = posts
    .filter(post => post.thumbnail)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 40);
  const manualFeatured = posts.filter(post => post.featured);
  const candidates = [
    ...new Map(
      [...manualFeatured, ...latestPool].map(post => [post.id, post])
    ).values(),
  ].filter(
    post =>
      !pinnedRecommendationIds.includes(post.id) &&
      !excludedRecommendationIds.includes(post.id)
  );
  const scoredPosts = candidates
    .map(post => {
      const daysOld = Math.max(
        0,
        (today.getTime() - new Date(post.date).getTime()) / 86400000
      );
      const recencyScore = Math.max(0, 1 - daysOld / 365);
      const manualScore = post.featured ? 0.35 : 0;
      const orderScore =
        post.featuredOrder !== undefined
          ? Math.max(0, 0.2 - post.featuredOrder * 0.02)
          : 0;
      const rotationScore = seededScore(`${seed}:${post.id}`);

      return {
        post,
        score:
          rotationScore * 0.55 + recencyScore * 0.3 + manualScore + orderScore,
      };
    })
    .sort((a, b) => b.score - a.score);
  const selected: Post[] = pinnedRecommendationIds
    .map(id => posts.find(post => post.id === id))
    .filter((post): post is Post => Boolean(post))
    .slice(0, limit);
  const usedCategories = new Set(selected.map(post => post.category));

  for (const item of scoredPosts) {
    if (selected.length >= limit) break;
    if (usedCategories.has(item.post.category)) continue;

    selected.push(item.post);
    usedCategories.add(item.post.category);
  }

  for (const item of scoredPosts) {
    if (selected.length >= limit) break;
    if (selected.some(post => post.id === item.post.id)) continue;

    selected.push(item.post);
  }

  return selected;
}

export function getPostById(id: string): Post | undefined {
  return getPosts().find(
    post =>
      post.url === `/${id}` || post.url.endsWith(`/${id}`) || post.id === id
  );
}

export function getPostsByCategory(category: string): Post[] {
  return getPosts()
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase();
  return getPosts().filter(
    post =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q)))
  );
}

export function getPaginatedPosts(page = 1, limit = 9) {
  const allPublished = getPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const totalPages = Math.ceil(allPublished.length / limit);
  const start = (page - 1) * limit;
  return {
    posts: allPublished.slice(start, start + limit),
    totalPages,
    currentPage: page,
  };
}
