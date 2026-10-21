import ProblemsFeed, {
  type FeedItem,
} from '@/components/problems/ProblemsFeed';
import {
  ProblemLogArchive,
  ProblemMetricsBar,
} from '@/components/problems/ProblemLogBoard';
import {
  HUB_SUBJECTS,
  computeProblemMetrics,
  getProblemContentType,
  getProblemHubPosts,
  getProblemSubject,
  groupLogsByDate,
} from '@/lib/problems';

export const metadata = {
  title: 'AI가 만드는 수능 문제 · 출제 노트 | SN Academy',
  description:
    'AI로 국어·수학·영어·통합사회·통합과학 문제를 매일 만들고, 그 과정과 이슈를 공유합니다. 모의고사·수능 해설과 문제 다운로드 자료도 함께 제공합니다.',
  keywords:
    'AI 출제, AI 문제 생성, 에듀테크, 모의고사 해설, 수능 해설, 문제 다운로드, 국어, 수학, 영어, 통합사회, 통합과학, SNarGEN, SN Academy',
  openGraph: {
    title: 'AI가 만드는 수능 문제 · 출제 노트 | SN Academy',
    description:
      'AI로 매일 문제를 만들고, 그 과정과 이슈를 공유하는 SN Academy의 출제 연구 블로그.',
    type: 'website',
    locale: 'ko_KR',
  },
};

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function ProblemsPage() {
  const items: FeedItem[] = getProblemHubPosts().map(post => ({
    post,
    contentType: getProblemContentType(post),
    subject: getProblemSubject(post),
  }));

  const logs = items
    .filter(item => item.contentType === 'log')
    .map(item => item.post);
  const feedItems = items.filter(item => item.contentType !== 'log');
  const logGroups = groupLogsByDate(logs);
  const metrics = computeProblemMetrics(logs);

  return (
    <div className="space-y-12">
      {/* 페이지 헤더 + 누적 지표 */}
      <div className="space-y-6 pt-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI가 만드는 수능 문제
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            AI로 매일 문제를 만들고, 무엇이 되고 무엇이 안 되는지 기록합니다
          </p>
        </div>
        {logs.length > 0 && <ProblemMetricsBar metrics={metrics} />}
      </div>

      {/* 읽을거리: 칼럼 · 해설 · 자료실 (+ 이슈 · 개발기) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          칼럼 · 해설 · 자료
        </h2>
        <ProblemsFeed items={feedItems} subjects={HUB_SUBJECTS} />
      </section>

      {/* 출제 로그 */}
      {logGroups.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            출제 로그
          </h2>
          <ProblemLogArchive groups={logGroups} subjects={HUB_SUBJECTS} />
        </section>
      )}
    </div>
  );
}
