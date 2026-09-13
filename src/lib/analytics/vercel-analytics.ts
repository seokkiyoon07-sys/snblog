import 'server-only';

import { unstable_cache } from 'next/cache';
import { getPosts } from '@/data/posts';

import {
  apiBounds,
  resolvePeriod,
  shiftDate,
  type AnalyticsPeriod,
  type AnalyticsRange,
} from './date-range';
export type { AnalyticsRange } from './date-range';
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
  eventName?: string;
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
  actions: Array<{ name: string; count: number }>;
  recommendations: Array<{ name: string; impressions: number; clicks: number }>;
  hourly: Array<{ hour: string; pageviews: number }>;
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
    clicks: number;
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
  const bounds = since.includes('T')
    ? { since, until }
    : apiBounds(since, until);
  url.searchParams.set('since', bounds.since);
  url.searchParams.set('until', bounds.until);
  url.searchParams.set('by', by);
  url.searchParams.set('limit', String(limit));
  if (filter) url.searchParams.set('filter', filter);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
    cache: 'no-store',
    signal: AbortSignal.timeout(15000),
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
  if (!Array.isArray(payload.data))
    throw new Error('ANALYTICS_INVALID_RESPONSE');
  return payload.data;
}

// Query each Korean calendar day without UTC day buckets. Cache days separately.
const getDay = unstable_cache(
  async (date: string) => {
    const [visits, clicks] = await Promise.all([
      queryAggregate<VisitRow>({
        dataset: 'visits',
        since: date,
        until: date,
        by: 'environment',
        filter: "environment eq 'production'",
      }),
      queryAggregate<EventRow>({
        dataset: 'events',
        since: date,
        until: date,
        by: 'eventName',
        filter: "eventName eq 'Post Click' and environment eq 'production'",
      }),
    ]);
    return {
      date,
      pageviews: visits.reduce((n, r) => n + toNumber(r.pageviews), 0),
      visitors: visits.reduce((n, r) => n + toNumber(r.visitors), 0),
      clicks: clicks.reduce((n, r) => n + toNumber(r.count), 0),
    };
  },
  ['analytics-kst-day-v2'],
  { revalidate: 60, tags: ['admin-analytics'] }
);

async function loadDays(dates: string[]) {
  const rows: AnalyticsDashboardData['trend'] = [];
  for (let i = 0; i < dates.length; i += 4) {
    rows.push(...(await Promise.all(dates.slice(i, i + 4).map(getDay))));
  }
  return rows;
}

function emptyDashboard(
  period: AnalyticsPeriod,
  status: AnalyticsStatus,
  message?: string
): AnalyticsDashboardData {
  const { since, until, range } = period;
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
    trend: period.dates.map(date => ({
      date,
      pageviews: 0,
      visitors: 0,
      clicks: 0,
    })),
    actions: [],
    recommendations: [],
    hourly: [],
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
  period: AnalyticsPeriod
): Promise<AnalyticsDashboardData> {
  if (!getAnalyticsToken()) {
    return emptyDashboard(
      period,
      'unconfigured',
      'VERCEL_ANALYTICS_TOKEN 환경변수가 아직 설정되지 않았습니다.'
    );
  }

  const { since, until, range } = period;
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
      actionRows,
      impressionRows,
      recommendationClicks,
      hourlyRows,
    ] = await Promise.all([
      loadDays(period.dates),
      queryAggregate<VisitRow>({
        dataset: 'visits',
        since,
        until,
        by: 'requestPath',
        filter: productionFilter,
        limit: 100,
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
        limit: 100,
      }),
      queryAggregate<EventRow>({
        dataset: 'events',
        since,
        until,
        by: 'eventData/placement',
        filter: "eventName eq 'Post Click' and environment eq 'production'",
        limit: 20,
      }),
      queryAggregate<EventRow>({
        dataset: 'events',
        since,
        until,
        by: 'eventData/action',
        filter: "eventName eq 'Content Action' and environment eq 'production'",
      }),
      queryAggregate<EventRow>({
        dataset: 'events',
        since,
        until,
        by: 'eventData/placement',
        filter:
          "eventName eq 'Recommendation Impression' and environment eq 'production'",
      }),
      queryAggregate<EventRow>({
        dataset: 'events',
        since,
        until,
        by: 'eventData/placement',
        filter:
          "eventName eq 'Recommendation Click' and environment eq 'production'",
      }),
      period.days === 1
        ? queryAggregate<VisitRow>({
            dataset: 'visits',
            since,
            until,
            by: 'hour',
            filter: productionFilter,
            limit: 24,
          })
        : Promise.resolve([]),
    ]);

    const trend = trendRows;
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
      actions: actionRows.map(r => ({
        name: r.eventData || 'unknown',
        count: toNumber(r.count),
      })),
      recommendations: impressionRows.map(r => ({
        name: r.eventData || 'unknown',
        impressions: toNumber(r.count),
        clicks: toNumber(
          recommendationClicks.find(c => c.eventData === r.eventData)?.count
        ),
      })),
      hourly: hourlyRows
        .filter(r => r.timestamp)
        .map(r => ({
          hour: new Intl.DateTimeFormat('ko-KR', {
            timeZone: 'Asia/Seoul',
            hour: '2-digit',
            hourCycle: 'h23',
          }).format(new Date(r.timestamp!)),
          pageviews: toNumber(r.pageviews),
        }))
        .sort((a, b) => a.hour.localeCompare(b.hour)),
      range,
      since,
      until,
      generatedAt: new Date().toISOString(),
      summary: {
        visitors: summaryVisitors,
        pageviews: summaryPageviews,
        postClicks: trend.reduce((total, row) => total + row.clicks, 0),
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
    return emptyDashboard(period, 'error', message);
  }
}

const getCachedDashboard = unstable_cache(
  async (period: AnalyticsPeriod) => loadDashboard(period),
  ['admin-vercel-analytics-dashboard-v2'],
  { revalidate: 60, tags: ['admin-analytics'] }
);

export async function getAnalyticsDashboard(period: AnalyticsPeriod) {
  return getCachedDashboard(period);
}

export async function getPreviousSummary(period: AnalyticsPeriod) {
  const until = shiftDate(period.since, -1);
  const since = shiftDate(until, 1 - period.days);
  try {
    if (!getAnalyticsToken()) return null;
    const previous = resolvePeriod({
      range: 'custom',
      start: since,
      end: until,
    });
    const rows = await loadDays(previous.dates);
    return {
      since,
      until,
      visitors: rows.reduce((n, r) => n + r.visitors, 0),
      pageviews: rows.reduce((n, r) => n + r.pageviews, 0),
      postClicks: rows.reduce((n, r) => n + r.clicks, 0),
    };
  } catch {
    return null;
  }
}
