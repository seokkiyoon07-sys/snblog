import Link from 'next/link';
import type { AnalyticsDashboardData } from '@/lib/analytics/vercel-analytics';
import { changeLabel } from '@/lib/analytics/date-range';

type Previous = {
  since: string;
  until: string;
  visitors: number;
  pageviews: number;
  postClicks: number;
} | null;
const actions: Record<string, string> = {
  download: '자료 다운로드 클릭',
  snargen: 'SNargen 이동 클릭',
  'science:0': '통합과학 문제·해설 열람',
  'science:1': '통합과학 변형문제 탭',
  'science:2': '통합과학 역분해 열람',
  'science:3': '통합과학 유사문제 열람',
  'social:0': '통합사회 문제·해설 열람',
  'social:1': '통합사회 변형문제 탭',
  'social:2': '통합사회 역분해 열람',
  'social:3': '통합사회 유사문제 열람',
};
const placements: Record<string, string> = {
  home_featured: '홈 추천 게시물',
  featured_post: '추천 게시물',
  sidebar_popular: '사이드바 인기글',
};
const box =
  'rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800';

export default function AnalyticsDetails({
  data,
  previous,
  ongoing,
}: {
  data: AnalyticsDashboardData;
  previous: Previous;
  ongoing: boolean;
}) {
  return (
    <>
      <section className={box}>
        <h2 className="font-semibold">직전 동일 기간 비교</h2>
        {previous && data.status === 'ready' ? (
          <>
            <p className="mt-2 text-sm text-gray-500">
              비교 대상: {previous.since} ~ {previous.until}
              {ongoing
                ? ' · 현재 기간은 오늘 집계 중, 이전 기간은 하루 전체를 포함합니다.'
                : ''}
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {(
                [
                  ['visitors', '일별 방문자 합계'],
                  ['pageviews', '페이지 조회'],
                  ['postClicks', '게시물 클릭'],
                ] as const
              ).map(([key, label]) => (
                <div key={key}>
                  <p>{label}</p>
                  <strong>
                    {previous[key].toLocaleString()} →{' '}
                    {data.summary[key].toLocaleString()}
                  </strong>
                  <p className="text-sm text-blue-600">
                    {changeLabel(data.summary[key], previous[key])}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">
              조회 가능한 데이터 범위 내 비교입니다. 이전 기간이 보관 범위를
              벗어나면 증가율을 성과로 해석하지 마세요.
            </p>
          </>
        ) : (
          <p className="mt-3 text-sm">비교 데이터를 불러오지 못했습니다.</p>
        )}
      </section>
      <section className={box}>
        <h2 className="font-semibold">일자별 현황</h2>
        <p className="mt-2 text-sm text-gray-500">
          날짜를 누르면 해당 날짜의 인기 게시물과 유입 경로를 조회합니다. 여러
          날짜의 방문자는 중복될 수 있습니다.
        </p>
        <div className="mt-3 max-h-96 overflow-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr>
                <th className="py-2 text-left">날짜 (한국 시간)</th>
                <th>방문자</th>
                <th>조회</th>
                <th>클릭</th>
              </tr>
            </thead>
            <tbody>
              {data.trend.map(row => (
                <tr
                  key={row.date}
                  className="border-t border-gray-200 dark:border-gray-700"
                >
                  <td className="py-2 text-left">
                    <Link
                      prefetch={false}
                      className="text-blue-600 underline"
                      href={`/admin/analytics?range=custom&start=${row.date}&end=${row.date}`}
                    >
                      {row.date}
                    </Link>
                  </td>
                  <td>{row.visitors.toLocaleString()}</td>
                  <td>{row.pageviews.toLocaleString()}</td>
                  <td>{row.clicks.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {data.hourly.length > 0 && (
        <section className={box}>
          <h2 className="font-semibold">시간대별 조회 (한국 시간)</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {data.hourly.map(row => (
              <div key={row.hour} className="text-sm">
                <span>{row.hour}</span>
                <strong className="ml-2">
                  {row.pageviews.toLocaleString()}회
                </strong>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className={box}>
        <h2 className="font-semibold">학습·다운로드 행동</h2>
        <p className="mt-2 text-xs text-gray-500">
          수집 배포 이후의 활동만 표시합니다. 다운로드는 저장 완료가 아닌 링크
          클릭이며, 탭 열람은 학습 완료를 의미하지 않습니다.
        </p>
        {data.actions.length ? (
          <ul className="mt-4 space-y-2">
            {data.actions.map(row => (
              <li key={row.name} className="flex justify-between gap-4">
                <span>{actions[row.name] || row.name}</span>
                <strong>{row.count.toLocaleString()}회</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm">선택 기간에 수집된 행동이 없습니다.</p>
        )}
      </section>
      <section className={box}>
        <h2 className="font-semibold">추천 게시물 클릭률</h2>
        <p className="mt-2 text-xs text-gray-500">
          링크가 화면에 50% 이상 보일 때 노출로 기록합니다. 같은 페이지에서 같은
          게시물·위치는 노출과 클릭을 각각 한 번만 기록합니다. 기존 게시물 클릭
          통계와 별도로 수집합니다.
        </p>
        {data.recommendations.length ? (
          <div className="mt-4 overflow-auto">
            <table className="w-full text-right text-sm">
              <thead>
                <tr>
                  <th className="text-left">위치</th>
                  <th>노출</th>
                  <th>클릭</th>
                  <th>클릭률</th>
                </tr>
              </thead>
              <tbody>
                {data.recommendations.map(row => (
                  <tr key={row.name}>
                    <td className="py-2 text-left">
                      {placements[row.name] || row.name}
                    </td>
                    <td>{row.impressions.toLocaleString()}</td>
                    <td>{row.clicks.toLocaleString()}</td>
                    <td>
                      {row.impressions
                        ? `${((row.clicks / row.impressions) * 100).toFixed(1)}%`
                        : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-sm">
            선택 기간에 수집된 추천 노출이 없습니다.
          </p>
        )}
      </section>
    </>
  );
}
