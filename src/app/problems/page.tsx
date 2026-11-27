import Link from 'next/link';
import ProblemsFeed, {
  type FeedItem,
} from '@/components/problems/ProblemsFeed';
import {
  ProblemLogArchive,
  ProblemMetricsBar,
} from '@/components/problems/ProblemLogBoard';
import PostCard from '@/components/PostCard';
import {
  HUB_SUBJECTS,
  PROBLEM_HUB_PINNED_IDS,
  computeProblemMetrics,
  getProblemContentType,
  getProblemHubPosts,
  getProblemSubject,
  groupLogsByDate,
} from '@/lib/problems';
import { withLatestUpdate } from '@/lib/post-updates';

// 제목 뒤 '| SN독학기숙학원 블로그' 는 루트 레이아웃 title.template 이 붙인다
const TITLE = '수능 문제 연구: AI 출제 노트 · 수능·모의고사 해설';
const DESCRIPTION =
  'AI로 국어·수학·영어·통합사회·통합과학 문제를 만들고 고친 기록인 AI 출제 노트와 모의고사·수능 해설, 문제 자료실을 제공합니다.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'AI 출제, AI 문제 생성, 수능 문제 연구, 모의고사 해설, 수능 해설, 문제 자료실, SNarGPT, SN독학기숙학원',
  alternates: { canonical: '/problems' },
  openGraph: {
    title: TITLE,
    description:
      'AI로 문제를 만들고 고친 기록인 AI 출제 노트와 모의고사·수능 해설.',
    type: 'website',
    locale: 'ko_KR',
  },
};

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function ProblemsPage() {
  const items: FeedItem[] = getProblemHubPosts()
    .map(withLatestUpdate)
    .map(post => ({
      post,
      contentType: getProblemContentType(post),
      subject: getProblemSubject(post),
    }));

  const logs = items
    .filter(item => item.contentType === 'log')
    .map(item => item.post);
  const noteItems = items.filter(item => item.contentType !== 'log');
  const pinnedPosts = PROBLEM_HUB_PINNED_IDS.map(id =>
    items.find(item => item.post.id === id)
  )
    .filter((item): item is FeedItem => Boolean(item))
    .map(item => item.post);
  const logGroups = groupLogsByDate(logs);
  const metrics = computeProblemMetrics(logs);

  return (
    <div className="space-y-14">
      {/* 페이지 헤더 */}
      <div className="pt-8 text-center">
        <p className="mb-2 text-sm font-semibold text-sn-primary dark:text-emerald-400">
          수능 문제 연구
        </p>
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          수능 문제를 읽고, 만듭니다
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          AI로 문제를 만들며 무엇이 되고 무엇이 안 되는지 기록하고,
          수능·모의고사 해설을 정리합니다
        </p>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          국어 독서 지문 숏츠·카드뉴스·해설은{' '}
          <Link
            href="/originals/reading"
            className="font-semibold text-sn-primary underline-offset-4 hover:underline dark:text-emerald-400"
          >
            SN Originals · 독서 기출 읽을거리 →
          </Link>{' '}
          에서 보실 수 있습니다.
        </p>
      </div>

      {pinnedPosts.length > 0 && (
        <section aria-labelledby="problems-pinned" className="space-y-4">
          <h2
            id="problems-pinned"
            className="border-b border-gray-200 pb-2 text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300"
          >
            📌 2027학년도 수능 문제 및 해설
          </h2>
          <div className="space-y-4 lg:space-y-6">
            {pinnedPosts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                analyticsPlacement="problems_pinned"
              />
            ))}
          </div>
        </section>
      )}

      <section id="ai-notes" className="scroll-mt-28 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            AI 출제 노트
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            AI로 매일 문제를 만들고 사람이 고친 기록, 칼럼과 개발기,
            모의고사·수능 해설과 자료실을 모았습니다.
          </p>
        </div>
        {logs.length > 0 && <ProblemMetricsBar metrics={metrics} />}
        <ProblemsFeed items={noteItems} subjects={HUB_SUBJECTS} />

        {logGroups.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              출제 로그
            </h3>
            <ProblemLogArchive groups={logGroups} subjects={HUB_SUBJECTS} />
          </div>
        )}
      </section>
    </div>
  );
}
