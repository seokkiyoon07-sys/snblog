const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const path = require('node:path');

function load(file, mocks = {}, globals = {}) {
  const code = ts.transpileModule(
    fs.readFileSync(path.join(__dirname, '..', file), 'utf8'),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        target: ts.ScriptTarget.ES2022,
      },
    }
  ).outputText;
  const exports = {};
  vm.runInNewContext(code, {
    exports,
    require: name => (name in mocks ? mocks[name] : require(name)),
    Date,
    URL,
    Intl,
    AbortSignal,
    console,
    ...globals,
  });
  return exports;
}
const dates = load('src/lib/analytics/date-range.ts');
const now = new Date('2026-09-12T15:30:00Z');

test('Korean calendar ranges cross UTC midnight and month/year/leap boundaries', () => {
  assert.equal(dates.koreanDate(now), '2026-09-13');
  assert.equal(dates.resolvePeriod({ range: '1d' }, now).since, '2026-09-13');
  assert.equal(
    dates.resolvePeriod({ range: 'yesterday' }, now).until,
    '2026-09-12'
  );
  assert.equal(dates.resolvePeriod({ range: '7d' }, now).since, '2026-09-07');
  assert.equal(dates.shiftDate('2026-01-01', -1), '2025-12-31');
  assert.equal(dates.shiftDate('2024-03-01', -1), '2024-02-29');
  const bounds = dates.apiBounds('2026-09-12', '2026-09-12', now);
  assert.equal(bounds.since, '2026-09-11T15:00:00.000Z');
  assert.equal(bounds.until, '2026-09-12T14:59:59.999Z');
  assert.equal(
    dates.apiBounds('2026-09-13', '2026-09-13', now).until,
    now.toISOString()
  );
});

test('invalid, reversed, future and oversized selections are rejected', () => {
  for (const [start, end] of [
    ['2026-02-30', '2026-03-01'],
    ['bad', '2026-03-01'],
    ['2026-09-12', '2026-09-11'],
    ['2026-09-14', '2026-09-14'],
    ['2025-01-01', '2026-01-01'],
  ]) {
    assert.throws(() =>
      dates.resolvePeriod({ range: 'custom', start, end }, now)
    );
  }
  assert.equal(
    dates.resolvePeriod({ range: 'custom', start: '2026-09-01' }, now).days,
    1
  );
  assert.equal(dates.resolvePeriod({ range: '90d' }, now).dates.length, 90);
  assert.match(dates.changeLabel(1, 0), /0/);
  assert.equal(dates.changeLabel(15, 10), '+50.0%');
  assert.equal(dates.changeLabel(0, 10), '-100.0%');
});

function dashboard(fetch) {
  return load(
    'src/lib/analytics/vercel-analytics.ts',
    {
      'server-only': {},
      'next/cache': { unstable_cache: fn => fn },
      '@/data/posts': { getPosts: () => [] },
      './date-range': dates,
    },
    { fetch, process: { env: { VERCEL_ANALYTICS_TOKEN: 'test-only' } } }
  );
}
test('dashboard uses exact KST daily windows, day clicks, and preceding equal-length comparison', async () => {
  const requests = [];
  const api = dashboard(async url => {
    requests.push(url);
    const by = url.searchParams.get('by');
    const data =
      by === 'environment'
        ? [{ pageviews: 10, visitors: 4 }]
        : by === 'eventName'
          ? [{ count: 3 }]
          : [];
    return { ok: true, json: async () => ({ data }) };
  });
  const period = dates.resolvePeriod({
    range: 'custom',
    start: '2026-01-02',
    end: '2026-01-03',
  });
  const data = await api.getAnalyticsDashboard(period);
  assert.equal(data.status, 'ready');
  assert.equal(data.summary.pageviews, 20);
  assert.equal(data.summary.visitors, 8);
  assert.equal(data.trend[0].clicks, 3);
  assert.equal(data.summary.postClicks, 6);
  const dayQueries = requests.filter(
    u => u.searchParams.get('by') === 'environment'
  );
  assert.equal(
    dayQueries[0].searchParams.get('since'),
    '2026-01-01T15:00:00.000Z'
  );
  assert.equal(
    dayQueries[0].searchParams.get('until'),
    '2026-01-02T14:59:59.999Z'
  );
  const previous = await api.getPreviousSummary(period);
  assert.equal(previous.since, '2025-12-31');
  assert.equal(previous.until, '2026-01-01');
  assert.equal(previous.postClicks, 6);
});
test('API failure is an error state, not a successful zero report', async () => {
  const api = dashboard(async () => ({ ok: false, status: 403 }));
  const period = dates.resolvePeriod({ range: '1d' });
  assert.equal((await api.getAnalyticsDashboard(period)).status, 'error');
  assert.equal(await api.getPreviousSummary(period), null);
});
test('recommendation clicks imply one impression and deduplicate by post and placement', () => {
  const events = [];
  const client = load('src/lib/analytics/client-events.ts', {
    '@vercel/analytics': {
      track: (name, props) => events.push({ name, props }),
    },
  });
  client.recommendationEvent('/', 'post', 'home_featured', true);
  client.recommendationEvent('/', 'post', 'home_featured', true);
  client.recommendationEvent('/', 'post', 'home_featured');
  assert.equal(events.length, 2);
  assert.equal(events[0].name, 'Recommendation Impression');
  assert.equal(events[1].name, 'Recommendation Click');
  client.recommendationEvent('/', 'post', 'sidebar_popular');
  assert.equal(events.length, 3);
  client.recommendationEvent('/other', 'post', 'home_featured');
  assert.equal(events.length, 4);
  client.beginAnalyticsPage('/no-recommendations');
  client.recommendationEvent('/other', 'post', 'home_featured');
  assert.equal(events.length, 5);
});

test('admin renders selected date, day links, comparison and new metrics; rejects bad dates before querying', async () => {
  const React = require('react');
  const { renderToStaticMarkup } = require('react-dom/server');
  const link = ({ href, children, prefetch, ...props }) =>
    React.createElement('a', { href, ...props }, children);
  const details = load('src/app/admin/analytics/AnalyticsDetails.tsx', {
    'next/link': { default: link },
    '@/lib/analytics/date-range': dates,
  }).default;
  let queries = 0;
  const api = dashboard(async () => ({
    ok: true,
    json: async () => ({ data: [] }),
  }));
  const page = load('src/app/admin/analytics/page.tsx', {
    'next/link': { default: link },
    '@/lib/auth/admin-auth': { requireAdmin: async () => ({ user: {} }) },
    '@/lib/analytics/date-range': dates,
    '@/lib/analytics/vercel-analytics': {
      ...api,
      getAnalyticsDashboard: async period => {
        queries++;
        return api.getAnalyticsDashboard(period);
      },
    },
    './AnalyticsDetails': { default: details },
    './SignOutButton': { default: () => null },
    './actions': { refreshAnalytics: async () => {} },
  }).default;
  const html = renderToStaticMarkup(
    await page({
      searchParams: Promise.resolve({
        range: 'custom',
        start: '2026-01-02',
        end: '2026-01-02',
      }),
    })
  );
  assert.match(html, /name="start"[^>]*value="2026-01-02"/);
  assert.match(html, /start=2026-01-01/);
  assert.match(html, /start=2026-01-03/);
  assert.match(html, /2026-01-01 ~ 2026-01-01/);
  assert.match(html, /추천 게시물 클릭률/);
  assert.match(html, /일별 방문자 합계/);
  const invalid = renderToStaticMarkup(
    await page({
      searchParams: Promise.resolve({ range: 'custom', start: 'invalid' }),
    })
  );
  assert.match(invalid, /role="alert"/);
  assert.equal(queries, 1);
});
