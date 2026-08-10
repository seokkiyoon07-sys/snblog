import Link from 'next/link';
import { requireAdmin } from '@/lib/auth/admin-auth';
import {
  getAnalyticsDashboard,
  normalizeAnalyticsRange,
  type AnalyticsDashboardData,
  type AnalyticsRange,
} from '@/lib/analytics/vercel-analytics';
import SignOutButton from './SignOutButton';

export const dynamic = 'force-dynamic';

interface AnalyticsPageProps {
  searchParams: Promise<{ range?: string }>;
}

const RANGE_LABELS: Array<{ value: AnalyticsRange; label: string }> = [
  { value: '1d', label: '오늘' },
  { value: '7d', label: '7일' },
  { value: '30d', label: '30일' },
  { value: '90d', label: '90일' },
];

const PLACEMENT_LABELS: Record<string, string> = {
  home_featured: '홈 추천 게시물',
  home_latest: '홈 최신 게시물',
  post_list: '게시물 목록',
  featured_post: '추천 게시물',
  originals_card: 'SN Originals 카드',
  originals_list: 'SN Originals 목록',
  problems_card: '문제 다운로드 카드',
  sidebar_popular: '사이드바 인기글',
  sidebar_recent: '사이드바 최신글',
};

function formatNumber(value: number): string {
  return new Intl.NumberFormat('ko-KR').format(value);
}

function formatGeneratedAt(value: string): string {
  return new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

function MetricCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">
        {value}
      </p>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

function SimpleBreakdown({
  title,
  rows,
}: {
  title: string;
  rows: Array<{ name: string; pageviews: number; visitors: number }>;
}) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-base font-semibold text-gray-950 dark:text-white">
        {title}
      </h2>
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          아직 수집된 데이터가 없습니다.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {rows.slice(0, 8).map(row => (
            <div
              key={row.name}
              className="flex items-center justify-between gap-4"
            >
              <span className="min-w-0 truncate text-sm text-gray-700 dark:text-gray-200">
                {row.name}
              </span>
              <span className="shrink-0 text-sm font-semibold text-gray-950 dark:text-white">
                {formatNumber(row.visitors)}명
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function TrafficChart({ trend }: { trend: AnalyticsDashboardData['trend'] }) {
  const maxPageviews = Math.max(1, ...trend.map(row => row.pageviews));
  const labelEvery = trend.length > 31 ? 15 : trend.length > 10 ? 5 : 1;

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold text-gray-950 dark:text-white">
          방문 추이
        </h2>
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span>막대: 페이지뷰</span>
          <span>숫자: 방문자</span>
        </div>
      </div>
      <div className="mt-6 flex h-52 items-end gap-1 overflow-hidden border-b border-gray-200 dark:border-gray-700">
        {trend.map((row, index) => {
          const height = Math.max(2, (row.pageviews / maxPageviews) * 100);
          const showLabel =
            index % labelEvery === 0 || index === trend.length - 1;
          return (
            <div
              key={row.date}
              className="group relative flex h-full min-w-0 flex-1 items-end justify-center"
              title={`${row.date} · ${formatNumber(row.pageviews)}회 · ${formatNumber(row.visitors)}명`}
            >
              <div
                className="w-full rounded-t bg-blue-500/80 transition group-hover:bg-blue-600"
                style={{ height: `${height}%` }}
              />
              {showLabel && (
                <span className="absolute -bottom-5 whitespace-nowrap text-[10px] text-gray-400">
                  {Number(row.date.slice(5, 7))}/{Number(row.date.slice(8, 10))}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="h-5" />
    </section>
  );
}

export default async function AdminAnalyticsPage({
  searchParams,
}: AnalyticsPageProps) {
  const session = await requireAdmin();
  const params = await searchParams;
  const range = normalizeAnalyticsRange(params.range);
  const data = await getAnalyticsDashboard(range);

  return (
    <div className="space-y-6 pb-12">
      <header className="rounded-2xl bg-gray-950 px-5 py-6 text-white dark:bg-black sm:px-7">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-medium text-blue-300">관리자 전용</p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              블로그 방문 현황
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              {data.since} ~ {data.until} ·{' '}
              {formatGeneratedAt(data.generatedAt)} 갱신
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-gray-400 sm:inline">
              {session.user?.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>

      <nav className="flex flex-wrap gap-2" aria-label="조회 기간">
        {RANGE_LABELS.map(item => (
          <Link
            key={item.value}
            href={`/admin/analytics?range=${item.value}`}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              range === item.value
                ? 'bg-blue-600 text-white'
                : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {data.status !== 'ready' && (
        <div
          className={`rounded-xl border px-5 py-4 text-sm leading-6 ${
            data.status === 'unconfigured'
              ? 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200'
              : 'border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300'
          }`}
        >
          <p className="font-semibold">
            {data.status === 'unconfigured'
              ? '설정이 필요합니다.'
              : '데이터 조회 실패'}
          </p>
          <p>{data.message}</p>
        </div>
      )}

      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard
          label="순 방문자"
          value={`${formatNumber(data.summary.visitors)}명`}
          description="일별 익명 방문자 합계"
        />
        <MetricCard
          label="페이지 조회"
          value={`${formatNumber(data.summary.pageviews)}회`}
          description="전체 페이지 로드 수"
        />
        <MetricCard
          label="게시물 클릭"
          value={`${formatNumber(data.summary.postClicks)}회`}
          description="목록과 추천 영역 클릭"
        />
        <MetricCard
          label="방문자당 조회"
          value={data.summary.viewsPerVisitor.toFixed(2)}
          description="페이지뷰 ÷ 방문자"
        />
      </section>

      <TrafficChart trend={data.trend} />

      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-700">
          <h2 className="text-base font-semibold text-gray-950 dark:text-white">
            인기 게시물
          </h2>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            조회수 기준 상위 20개
          </span>
        </div>
        {data.topPosts.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
            배포 후 방문 데이터가 쌓이면 게시물 순위가 표시됩니다.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-900/60 dark:text-gray-400">
                <tr>
                  <th className="px-5 py-3 font-medium">게시물</th>
                  <th className="px-3 py-3 text-right font-medium">방문자</th>
                  <th className="px-3 py-3 text-right font-medium">조회</th>
                  <th className="px-5 py-3 text-right font-medium">클릭</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {data.topPosts.map((post, index) => (
                  <tr key={post.id}>
                    <td className="px-5 py-3">
                      <div className="flex items-start gap-3">
                        <span className="w-5 shrink-0 text-xs font-bold text-gray-400">
                          {index + 1}
                        </span>
                        <div className="min-w-0">
                          <Link
                            href={post.url}
                            className="line-clamp-2 font-medium text-gray-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                          >
                            {post.title}
                          </Link>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            {post.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-right text-gray-700 dark:text-gray-200">
                      {formatNumber(post.visitors)}
                    </td>
                    <td className="px-3 py-3 text-right font-semibold text-gray-950 dark:text-white">
                      {formatNumber(post.pageviews)}
                    </td>
                    <td className="px-5 py-3 text-right text-blue-600 dark:text-blue-400">
                      {formatNumber(post.clicks)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <SimpleBreakdown title="유입 사이트" rows={data.referrers} />
        <SimpleBreakdown title="기기" rows={data.devices} />
        <SimpleBreakdown title="브라우저" rows={data.browsers} />
        <SimpleBreakdown title="국가" rows={data.countries} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="text-base font-semibold text-gray-950 dark:text-white">
            카테고리별 성과
          </h2>
          <div className="mt-4 space-y-3">
            {data.categories.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                아직 수집된 데이터가 없습니다.
              </p>
            ) : (
              data.categories.map(category => (
                <div
                  key={category.name}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="truncate text-sm text-gray-700 dark:text-gray-200">
                    {category.name}
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-gray-950 dark:text-white">
                    {formatNumber(category.pageviews)}회
                  </span>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="text-base font-semibold text-gray-950 dark:text-white">
            클릭 위치
          </h2>
          <div className="mt-4 space-y-3">
            {data.placements.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                클릭 이벤트가 쌓이면 유입 위치가 표시됩니다.
              </p>
            ) : (
              data.placements.map(placement => (
                <div
                  key={placement.name}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="truncate text-sm text-gray-700 dark:text-gray-200">
                    {PLACEMENT_LABELS[placement.name] ?? placement.name}
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-gray-950 dark:text-white">
                    {formatNumber(placement.clicks)}회
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
        Vercel Web Analytics의 익명 집계 데이터만 표시합니다. 개인의 IP, 이름,
        이메일 또는 개별 방문 기록은 수집하거나 노출하지 않습니다.
      </p>
    </div>
  );
}
