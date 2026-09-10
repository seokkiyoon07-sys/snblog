import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import { getPostsByCategory } from '@/data/posts';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';

const EPISODE_IDS = [
  'muo-sahwa-1',
  'muo-sahwa-2',
  'muo-sahwa-3',
  'muo-sahwa-4',
];

export default function RelatedHistorySeries() {
  const historyPosts = getPostsByCategory('SN History');
  const episodes = EPISODE_IDS.flatMap(id => {
    const post = historyPosts.find(post => post.id === id);
    return post ? [post] : [];
  });
  if (episodes.length === 0) return null;

  return (
    <section
      aria-labelledby="related-history-heading"
      className="my-10 rounded-2xl border border-amber-200 bg-amber-50/50 p-4 sm:p-6 dark:border-amber-900 dark:bg-slate-900"
    >
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-xs font-bold tracking-widest text-amber-800 dark:text-amber-300">
            SN HISTORY · 함께 보는 역사
          </p>
          <h2
            id="related-history-heading"
            className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white"
          >
            만분가의 배경, 무오사화
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            조위와 무오사화에 얽힌 이야기를 SN History 4부작으로 만나보세요.
          </p>
        </div>
        <Link
          href="/history"
          className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-amber-800 hover:underline dark:text-amber-300"
        >
          SN History 전체 보기{' '}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4">
        {episodes.map(post => (
          <TrackedPostLink
            key={post.id}
            href={post.url}
            postId={post.id}
            placement="originals_related_history"
            className="group min-w-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#182c2a]">
              {post.thumbnail && (
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1023px) 40vw, 200px"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              )}
              <span className="absolute left-2 top-2 rounded-full bg-[#182c2a]/95 px-2 py-1 text-[11px] font-bold text-amber-100">
                {post.badge}
              </span>
              <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/75 px-2 py-1.5 text-[11px] font-semibold text-white">
                <Play className="h-3 w-3" aria-hidden="true" /> 영상 보기
              </span>
            </div>
            <h3 className="mt-3 text-sm font-bold leading-6 text-slate-900 group-hover:text-amber-800 dark:text-white dark:group-hover:text-amber-300">
              {post.title}
            </h3>
          </TrackedPostLink>
        ))}
      </div>
    </section>
  );
}
