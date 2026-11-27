import Link from 'next/link';
import type { Metadata } from 'next';
import ReadingCatalog, {
  type UnifiedReadingItem,
} from '@/components/problems/ReadingCatalog';
import { readingShortSeries } from '@/data/reading-shorts';
import { BASE_URL, EXAM_TYPE_CONFIG } from '@/lib/config';
import { getReadingPosts } from '@/lib/problems';
import { withLatestUpdate } from '@/lib/post-updates';

const TITLE = 'SN Originals | 독서 · 기출 읽을거리 (숏츠·카드뉴스·지문 해설)';
const DESCRIPTION =
  '평가원 수능·모의평가 국어 독서 기출 지문을 숏츠와 카드뉴스로 빠르게 이해하고, 해설 글로 문항 근거까지 깊게 읽는 SN Originals 독서 시리즈.';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'SN Originals',
    '기출 읽을거리',
    '수능 국어 독서',
    '비문학 기출',
    '기출 숏츠',
    '카드뉴스',
    '수능 국어',
    'SN독학기숙학원',
  ],
  alternates: { canonical: '/originals/reading' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/originals/reading`,
    type: 'website',
    locale: 'ko_KR',
  },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function OriginalsReadingPage() {
  const readingPosts = getReadingPosts().map(withLatestUpdate);
  const readingPostById = new Map(readingPosts.map(post => [post.id, post]));
  const matchedPostIds = new Set<string>();
  const unifiedReadings: UnifiedReadingItem[] = [];

  for (const series of readingShortSeries) {
    const post = series.postId ? readingPostById.get(series.postId) : undefined;
    if (post) matchedPostIds.add(post.id);
    const latestShortDate = series.episodes[0]?.uploadDate
      ? new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(
          new Date(series.episodes[0].uploadDate)
        )
      : '2026-11-01';
    const effectiveDate =
      post && post.date > latestShortDate ? post.date : latestShortDate;
    unifiedReadings.push({
      id: post?.id ?? series.id,
      title: post?.title ?? series.title,
      summary: post?.excerpt ?? series.summary,
      examLabel: series.examLabel,
      domain: series.domain,
      date: effectiveDate,
      post,
      shorts: series,
    });
  }

  for (const post of readingPosts) {
    if (matchedPostIds.has(post.id)) continue;
    const exam = post.exam;
    unifiedReadings.push({
      id: post.id,
      title: post.title,
      summary: post.excerpt,
      examLabel: exam
        ? `${exam.year} ${EXAM_TYPE_CONFIG[exam.type].label}`
        : undefined,
      domain: '인문·철학',
      date: post.date,
      post,
    });
  }

  unifiedReadings.sort((a, b) => b.date.localeCompare(a.date));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/originals/reading`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: unifiedReadings
        .filter(item => Boolean(item.post))
        .map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.title,
          url: `${BASE_URL}${item.post!.url}`,
        })),
    },
  };

  return (
    <div className="space-y-8 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* SN Originals 시리즈 전환 바 */}
      <nav
        aria-label="SN Originals 시리즈 이동"
        className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4 dark:border-gray-700"
      >
        <Link
          href="/originals"
          className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          고전문학
        </Link>
        <span
          aria-current="page"
          className="rounded-full bg-sn-primary px-4 py-2 text-sm font-semibold text-white dark:bg-emerald-600"
        >
          독서 · 기출 읽을거리
        </span>
      </nav>

      {/* 헤더 */}
      <header className="space-y-2">
        <p className="text-xs font-bold tracking-widest text-sn-primary dark:text-emerald-400">
          SN ORIGINALS · READING
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          독서 · 기출 읽을거리
        </h1>
        <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          수능·모의평가 국어 독서 지문 하나를 골라 숏츠와 카드뉴스로 개념부터
          잡고, 해설 글로 문항 근거까지 깊게 읽습니다.
        </p>
      </header>

      <ReadingCatalog items={unifiedReadings} />
    </div>
  );
}
