import { getPosts } from '@/data/posts';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';

// 글 끝 '함께 읽을 글'. 글 정보의 related(사람이 고른 글 id 목록)를 그 순서대로 보여 준다.
// 본문 안 링크라 검색엔진도 글 사이의 관계를 따라갈 수 있다.
export default function ArticleRelated({ postId }: { postId: string }) {
  const posts = getPosts();
  const post = posts.find(item => item.id === postId);
  const related = (post?.related ?? [])
    .map(id => posts.find(item => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  if (related.length === 0) return null;

  return (
    <nav
      aria-labelledby="article-related-heading"
      className="not-prose mt-16 border-t border-slate-300 pt-8 dark:border-slate-600"
    >
      <h2
        id="article-related-heading"
        className="m-0 text-lg font-bold text-slate-900 dark:text-white"
      >
        함께 읽을 글
      </h2>
      <ul className="m-0 mt-4 list-none divide-y divide-slate-200 p-0 dark:divide-slate-700">
        {related.map(item => (
          <li key={item.id} className="py-4">
            <TrackedPostLink
              href={item.url}
              postId={item.id}
              placement="article_related"
              className="block break-keep font-semibold text-slate-900 no-underline hover:underline dark:text-white"
            >
              {item.title}
            </TrackedPostLink>
            <p className="m-0 mt-1 line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {item.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
