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
import { withLatestUpdate } from '@/lib/post-updates';
import SectionTabs from '@/components/SectionTabs';

// 제목 뒤 '| SN독학기숙학원 블로그' 는 루트 레이아웃 title.template 이 붙인다
const TITLE = '수능 문제 연구: 수능 국어 기출 읽을거리 · AI 출제 노트';
const DESCRIPTION =
  '수능·모의평가 국어 기출 지문을 쉽게 풀어 읽는 기출 읽을거리와, AI로 국어·수학·영어·통합사회·통합과학 문제를 만들고 고친 기록인 AI 출제 노트. 모의고사·수능 해설과 문제 자료실도 함께 제공합니다.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    '수능 국어 기출, 기출 지문, 기출 읽을거리, 수능 국어 독서, 비문학, 모의평가, AI 출제, AI 문제 생성, 모의고사 해설, 수능 해설, SNarGPT, SN독학기숙학원',
  alternates: { canonical: '/problems' },
  openGraph: {
    title: TITLE,
    description:
      '수능 문제를 읽고, 만듭니다. 기출 지문을 깊게 읽는 기출 읽을거리와 AI 출제 노트.',
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

  // 기출 읽을거리: 특정 시험 지문을 다룬 글(exam 정보가 있는 글)
  const readingItems = items.filter(item => item.post.exam);
  const logs = items
    .filter(item => item.contentType === 'log')
    .map(item => item.post);
  const noteItems = items.filter(
    item => !item.post.exam && item.contentType !== 'log'
  );
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
          기출 지문을 깊게 읽고, AI로 문제를 만들며 무엇이 되고 무엇이 안 되는지
          기록합니다
        </p>
      </div>

      <SectionTabs
        ariaLabel="수능 문제 연구 구역"
        allOrder={['readings', 'ai-notes']}
        tabs={[
          {
            key: 'ai-notes',
            label: 'AI 출제 노트',
            emoji: '🧪',
            count: noteItems.length + logs.length,
            content: (
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
                    <ProblemLogArchive
                      groups={logGroups}
                      subjects={HUB_SUBJECTS}
                    />
                  </div>
                )}
              </section>
            ),
          },
          {
            key: 'readings',
            label: '기출 읽을거리',
            emoji: '📖',
            count: readingItems.length,
            content: (
              <section id="readings" className="scroll-mt-28 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    기출 읽을거리
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    수능·모의평가 국어 기출 지문 하나를 골라 배경 개념부터 쉽게
                    풀고, 문항을 지문 근거로 함께 풉니다.
                  </p>
                </div>
                <ProblemsFeed
                  items={readingItems}
                  subjects={HUB_SUBJECTS}
                  showFilters={false}
                />
              </section>
            ),
          },
        ]}
      />
    </div>
  );
}
