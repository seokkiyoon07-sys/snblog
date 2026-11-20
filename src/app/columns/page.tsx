import PostCard from '@/components/PostCard';
import SectionTabs from '@/components/SectionTabs';
import { getAllPosts, getPostsByCategory } from '@/data/posts';
import { Metadata } from 'next';
import { BASE_URL } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'SN 칼럼 | 교육 전문가의 학습법과 입시 조언',
  description:
    'SN Academy의 교육 전문가들이 제공하는 학습법, 입시 전략, 자기주도학습 방법 등을 확인하세요. 검증된 교육 노하우로 학습 효과를 극대화할 수 있습니다.',
  alternates: {
    canonical: '/columns',
  },
  openGraph: {
    title: 'SN 칼럼 | 교육 전문가의 학습법과 입시 조언',
    description:
      'SN Academy의 교육 전문가들이 제공하는 학습법과 입시 조언을 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/columns',
    images: [
      {
        url: '/og/columns.jpg',
        width: 1200,
        height: 630,
        alt: 'SN 칼럼 - 교육 전문가의 학습법과 입시 조언',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN 칼럼 | 교육 전문가의 학습법과 입시 조언',
    description:
      'SN Academy의 교육 전문가들이 제공하는 학습법과 입시 조언을 확인하세요.',
    images: ['/og/columns.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 개발 서버에서는 미공개 칼럼도 목록에 '초안'으로 보인다.
// 디자인 가이드 같은 내부용 미공개 글은 개발 서버에서도 목록에 띄우지 않는다
const SHOW_DRAFTS = process.env.NODE_ENV === 'development';
const INTERNAL_DRAFTS = ['design-guide-demo'];

// 칼럼 안 연재. 연재 탭에서 따로 모아 보고, '전체' 탭에서는 칼럼과 섞여 날짜순으로 보인다.
// key 는 /columns#key 주소에 쓴다
const SERIES = [
  {
    key: 'comma',
    name: '쉼표',
    description:
      '지친 수험생에게 건네는 가벼운 읽을거리. 쉼표는 찍어도, 마침표는 아직 찍지 말자.',
  },
];

export default function ColumnsPage() {
  const drafts = SHOW_DRAFTS
    ? getAllPosts()
        .filter(
          post =>
            post.category === 'columns' &&
            !post.published &&
            !INTERNAL_DRAFTS.includes(post.id)
        )
        .map(post => ({ ...post, badge: `초안 · ${post.badge ?? '칼럼'}` }))
    : [];
  const columns = [...drafts, ...getPostsByCategory('columns')];
  const seriesGroups = SERIES.map(series => ({
    ...series,
    posts: columns
      .filter(post => post.series === series.name)
      .sort((a, b) => (b.seriesOrder ?? 0) - (a.seriesOrder ?? 0)),
  })).filter(group => group.posts.length > 0);
  // 칼럼 탭에는 연재가 아닌 글만, 전체 탭에는 연재 글까지 날짜순으로 섞어 보여 준다
  const standalone = columns.filter(post => !post.series);
  const everything = [...columns].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime() ||
      (b.seriesOrder ?? 0) - (a.seriesOrder ?? 0)
  );

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          칼럼
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          교육 전문가의 학습법과 입시 조언
        </p>
      </header>

      <SectionTabs
        ariaLabel="칼럼 구역"
        allContent={
          <section aria-labelledby="all-columns-heading">
            <h2 id="all-columns-heading" className="sr-only">
              전체 칼럼
            </h2>
            <div className="space-y-6" role="list" aria-label="전체 칼럼 목록">
              {everything.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        }
        tabs={[
          {
            key: 'columns',
            label: '칼럼',
            count: standalone.length,
            content: (
              <section aria-labelledby="columns-heading">
                <h2 id="columns-heading" className="sr-only">
                  교육 칼럼
                </h2>
                {standalone.length > 0 ? (
                  <div
                    className="space-y-6"
                    role="list"
                    aria-label="교육 칼럼 목록"
                  >
                    {standalone.map(post => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div
                    className="text-center py-12"
                    role="status"
                    aria-live="polite"
                  >
                    <div
                      className="w-16 h-16 mx-auto mb-4 text-gray-400"
                      aria-hidden="true"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      아직 칼럼이 없습니다
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      곧 교육 전문가들의 유익한 칼럼을 공유할 예정입니다.
                    </p>
                  </div>
                )}
              </section>
            ),
          },
          ...seriesGroups.map(group => ({
            key: group.key,
            label: group.name,
            count: group.posts.length,
            content: (
              <section
                aria-labelledby={`series-${group.name}`}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50"
              >
                <h2
                  id={`series-${group.name}`}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  연재 · {group.name}
                </h2>
                <p className="mt-1 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {group.description}
                </p>
                <div className="space-y-6" role="list">
                  {group.posts.map(post => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            ),
          })),
        ]}
      />
    </div>
  );
}
