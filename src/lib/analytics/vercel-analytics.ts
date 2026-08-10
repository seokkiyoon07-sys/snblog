import 'server-only';

import { unstable_cache } from 'next/cache';
import { getPosts } from '@/data/posts';

export type AnalyticsRange = '1d' | '7d' | '30d' | '90d';
export type AnalyticsStatus = 'ready' | 'unconfigured' | 'error';

interface VisitRow {
  timestamp?: string;
  requestPath?: string;
  referrerHostname?: string;
  deviceType?: string;
  browserName?: string;
  country?: string;
  pageviews?: number;
  visitors?: number;
}

interface EventRow {
  eventData?: string;
  count?: number;
  visitors?: number;
}

interface AggregateResponse<T> {
  version: number;
  data: T[];
}

export interface AnalyticsDashboardData {
  status: AnalyticsStatus;
  message?: string;
  range: AnalyticsRange;
  since: string;
  until: string;
  generatedAt: string;
  summary: {
    visitors: number;
    pageviews: number;
    postClicks: number;
    viewsPerVisitor: number;
  };
  trend: Array<{
    date: string;
    pageviews: number;
    visitors: number;
  }>;
  topPosts: Array<{
    id: string;
    title: string;
    url: string;
    category: string;
    pageviews: number;
    visitors: number;
    clicks: number;
  }>;
  categories: Array<{
    name: string;
    pageviews: number;
    visitors: number;
    clicks: number;
  }>;
  referrers: Array<{ name: string; pageviews: number; visitors: number }>;
  devices: Array<{ name: string; pageviews: number; visitors: number }>;
  browsers: Array<{ name: string; pageviews: number; visitors: number }>;
  countries: Array<{ name: string; pageviews: number; visitors: number }>;
  placements: Array<{ name: string; clicks: number; visitors: number }>;
}

const RANGE_DAYS: Record<AnalyticsRange, number> = {
  '1d': 1,
  '7d': 7,
  '30d': 30,
  '90d': 90,
};

const PROJECT_ID =
  process.env.VERCEL_ANALYTICS_PROJECT_ID ??
  process.env.VERCEL_PROJECT_ID ??
  'prj_RZ2Da2p5MIh1eSUoTfA5m5rGiAK4';
const TEAM_ID =
  process.env.VERCEL_ANALYTICS_TEAM_ID ??
  process.env.VERCEL_TEAM_ID ??
  'team_azWZQdpq0IXyFJSOr0se7Wpx';

function getAnalyticsToken(): string | undefined {
  return process.env.VERCEL_ANALYTICS_TOKEN ?? process.env.VERCEL_TOKEN;
}

function formatKoreanDate(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

function getDateRange(range: AnalyticsRange) {
  const until = formatKoreanDate(new Date());
  const sinceDate = new Date(`${until}T00:00:00+09:00`);
  sinceDate.setDate(sinceDate.getDate() - (RANGE_DAYS[range] - 1));

  return { since: formatKoreanDate(sinceDate), until };
}

function toNumber(value: unknown): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizePath(value: string): string {
  if (!value) return '/';
  const withoutQuery = value.split('?')[0].split('#')[0];
  if (withoutQuery === '/') return '/';
  return withoutQuery.replace(/\/$/, '');
}

async function queryAggregate<T>({
  dataset,
  since,
  until,
  by,
  filter,
  limit = 100,
}: {
  dataset: 'visits' | 'events';
  since: string;
  until: string;
  by: string;
  filter?: string;
  limit?: number;
}): Promise<T[]> {
  const token = getAnalyticsToken();
  if (!token) throw new Error('ANALYTICS_NOT_CONFIGURED');

  const url = new URL(
    `/v1/query/web-analytics/${dataset}/aggregate`,
    'https://api.vercel.com'
  );
  url.searchParams.set('teamId', TEAM_ID);
  url.searchParams.set('projectId', PROJECT_ID);
  url.searchParams.set('since', since);
  url.searchParams.set('until', until);
  url.searchParams.set('by', by);
  url.searchParams.set('limit', String(limit));
  if (filter) url.searchParams.set('filter', filter);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error('ANALYTICS_UNAUTHORIZED');
    }
    if (response.status === 404) {
      throw new Error('ANALYTICS_NOT_ENABLED');
    }
    throw new Error(`ANALYTICS_API_${response.status}`);
  }

  const payload = (await response.json()) as AggregateResponse<T>;
  return Array.isArray(payload.data) ? payload.data : [];
}

function fillTrend(
  rows: VisitRow[],
  since: string,
  days: number
): AnalyticsDashboardData['trend'] {
  const byDate = new Map(
    rows.map(row => [
      row.timestamp?.slice(0, 10) ?? '',
      {
        pageviews: toNumber(row.pageviews),
        visitors: toNumber(row.visitors),
      },
    ])
  );
  const start = new Date(`${since}T00:00:00+09:00`);

  return Array.from({ length: days }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = formatKoreanDate(date);
    const metrics = byDate.get(key);

    return {
      date: key,
      pageviews: metrics?.pageviews ?? 0,
      visitors: metrics?.visitors ?? 0,
    };
  });
}

function emptyDashboard(
  range: AnalyticsRange,
  status: AnalyticsStatus,
  message?: string
): AnalyticsDashboardData {
  const { since, until } = getDateRange(range);
  return {
    status,
    message,
    range,
    since,
    until,
    generatedAt: new Date().toISOString(),
    summary: {
      visitors: 0,
      pageviews: 0,
      postClicks: 0,
      viewsPerVisitor: 0,
    },
    trend: fillTrend([], since, RANGE_DAYS[range]),
    topPosts: [],
    categories: [],
    referrers: [],
    devices: [],
    browsers: [],
    countries: [],
    placements: [],
  };
}

async function loadDashboard(
  range: AnalyticsRange
): Promise<AnalyticsDashboardData> {
  if (!getAnalyticsToken()) {
    return emptyDashboard(
      range,
      'unconfigured',
      'VERCEL_ANALYTICS_TOKEN 환경변수가 아직 설정되지 않았습니다.'
    );
  }

  const { since, until } = getDateRange(range);
  const productionFilter = "environment eq 'production'";

  try {
    const [
      trendRows,
      pageRows,
      referrerRows,
      deviceRows,
      browserRows,
      countryRows,
      clickRows,
      placementRows,
    ] = await Promise.all([
      queryAggregate<VisitRow>({
        dataset: 'visits',
        since,
        until,
        by: 'day',
        filter: productionFilter,
        limit: RANGE_DAYS[range],
      }),
      queryAggregate<VisitRow>({
        dataset: 'visits',
        since,
        until,
        by: 'requestPath',
        filter: productionFilter,
        limit: 250,
      }),
      queryAggregate<VisitRow>({
        dataset: 'visits',
        since,
        until,
        by: 'referrerHostname',
        filter: productionFilter,
        limit: 10,
      }),
      queryAggregate<VisitRow>({
        dataset: 'visits',
        since,
        until,
        by: 'deviceType',
        filter: productionFilter,
        limit: 10,
      }),
      queryAggregate<VisitRow>({
        dataset: 'visits',
        since,
        until,
        by: 'browserName',
        filter: productionFilter,
        limit: 10,
      }),
      queryAggregate<VisitRow>({
        dataset: 'visits',
        since,
        until,
        by: 'country',
        filter: productionFilter,
        limit: 10,
      }),
      queryAggregate<EventRow>({
        dataset: 'events',
        since,
        until,
        by: 'eventData/postId',
        filter: "eventName eq 'Post Click' and environment eq 'production'",
        limit: 250,
      }),
      queryAggregate<EventRow>({
        dataset: 'events',
        since,
        until,
        by: 'eventData/placement',
        filter: "eventName eq 'Post Click' and environment eq 'production'",
        limit: 20,
      }),
    ]);

    const trend = fillTrend(trendRows, since, RANGE_DAYS[range]);
    const summaryPageviews = trend.reduce(
      (total, row) => total + row.pageviews,
      0
    );
    const summaryVisitors = trend.reduce(
      (total, row) => total + row.visitors,
      0
    );

    const viewsByPath = new Map(
      pageRows.map(row => [
        normalizePath(row.requestPath ?? ''),
        {
          pageviews: toNumber(row.pageviews),
          visitors: toNumber(row.visitors),
        },
      ])
    );
    const clicksByPostId = new Map(
      clickRows.map(row => [row.eventData ?? '', toNumber(row.count)])
    );

    const postMetrics = getPosts()
      .map(post => {
        const views = viewsByPath.get(normalizePath(post.url));
        return {
          id: post.id,
          title: post.title.replace(/\s+/g, ' ').trim(),
          url: post.url,
          category: post.category,
          pageviews: views?.pageviews ?? 0,
          visitors: views?.visitors ?? 0,
          clicks: clicksByPostId.get(post.id) ?? 0,
        };
      })
      .filter(post => post.pageviews > 0 || post.clicks > 0)
      .sort(
        (a, b) =>
          b.pageviews - a.pageviews ||
          b.clicks - a.clicks ||
          b.visitors - a.visitors
      );

    const topPosts = postMetrics.slice(0, 20);

    const categoryMap = new Map<
      string,
      { pageviews: number; visitors: number; clicks: number }
    >();
    for (const post of postMetrics) {
      const current = categoryMap.get(post.category) ?? {
        pageviews: 0,
        visitors: 0,
        clicks: 0,
      };
      current.pageviews += post.pageviews;
      current.visitors += post.visitors;
      current.clicks += post.clicks;
      categoryMap.set(post.category, current);
    }

    const mapVisitRows = (
      rows: VisitRow[],
      key: keyof Pick<
        VisitRow,
        'referrerHostname' | 'deviceType' | 'browserName' | 'country'
      >
    ) =>
      rows.map(row => ({
        name: String(row[key] || 'Direct / Unknown'),
        pageviews: toNumber(row.pageviews),
        visitors: toNumber(row.visitors),
      }));

    return {
      status: 'ready',
      range,
      since,
      until,
      generatedAt: new Date().toISOString(),
      summary: {
        visitors: summaryVisitors,
        pageviews: summaryPageviews,
        postClicks: clickRows.reduce(
          (total, row) => total + toNumber(row.count),
          0
        ),
        viewsPerVisitor:
          summaryVisitors > 0 ? summaryPageviews / summaryVisitors : 0,
      },
      trend,
      topPosts,
      categories: [...categoryMap.entries()]
        .map(([name, values]) => ({ name, ...values }))
        .sort((a, b) => b.pageviews - a.pageviews),
      referrers: mapVisitRows(referrerRows, 'referrerHostname'),
      devices: mapVisitRows(deviceRows, 'deviceType'),
      browsers: mapVisitRows(browserRows, 'browserName'),
      countries: mapVisitRows(countryRows, 'country'),
      placements: placementRows.map(row => ({
        name: row.eventData || 'unknown',
        clicks: toNumber(row.count),
        visitors: toNumber(row.visitors),
      })),
    };
  } catch (error) {
    const code = error instanceof Error ? error.message : 'UNKNOWN';
    const message =
      code === 'ANALYTICS_UNAUTHORIZED'
        ? 'Vercel Analytics 토큰 권한을 확인해 주세요.'
        : code === 'ANALYTICS_NOT_ENABLED'
          ? 'Vercel 프로젝트에서 Web Analytics를 활성화한 뒤 다시 배포해 주세요.'
          : 'Vercel Analytics 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.';

    console.error('Vercel Analytics dashboard query failed:', code);
    return emptyDashboard(range, 'error', message);
  }
}

const getCachedDashboard = unstable_cache(
  async (range: AnalyticsRange) => loadDashboard(range),
  ['admin-vercel-analytics-dashboard-v1'],
  { revalidate: 300 }
);

export function normalizeAnalyticsRange(value: string | undefined) {
  return value === '1d' || value === '7d' || value === '30d' || value === '90d'
    ? value
    : '30d';
}

export async function getAnalyticsDashboard(range: AnalyticsRange) {
  return getCachedDashboard(range);
}
