export type AnalyticsRange =
  | '1d'
  | 'yesterday'
  | '7d'
  | '30d'
  | '90d'
  | 'custom';
const DAY = 86400000;
export function koreanDate(now = new Date()) {
  return new Date(now.getTime() + 9 * 3600000).toISOString().slice(0, 10);
}
export function shiftDate(date: string, days: number) {
  return new Date(Date.parse(`${date}T00:00:00Z`) + days * DAY)
    .toISOString()
    .slice(0, 10);
}
export function validDate(value?: string): value is string {
  return (
    !!value &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    Number.isFinite(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value
  );
}
export function resolvePeriod(
  params: { range?: string; start?: string; end?: string },
  now = new Date()
) {
  const today = koreanDate(now);
  const range: AnalyticsRange = [
    '1d',
    'yesterday',
    '7d',
    '30d',
    '90d',
    'custom',
  ].includes(params.range || '')
    ? (params.range as AnalyticsRange)
    : '30d';
  let since: string;
  let until: string;
  if (range === 'custom') {
    if (!validDate(params.start) || !validDate(params.end || params.start))
      throw new Error('올바른 시작일과 종료일을 선택해 주세요.');
    since = params.start;
    until = params.end || since;
    if (since > until) throw new Error('시작일은 종료일보다 늦을 수 없습니다.');
    if (until > today) throw new Error('미래 날짜는 조회할 수 없습니다.');
  } else {
    until = range === 'yesterday' ? shiftDate(today, -1) : today;
    const days = range === 'yesterday' ? 1 : parseInt(range);
    since = shiftDate(until, 1 - days);
  }
  const days = Math.round((Date.parse(until) - Date.parse(since)) / DAY) + 1;
  if (days > 90) throw new Error('한 번에 최대 90일까지 조회할 수 있습니다.');
  const dates = Array.from({ length: days }, (_, i) => shiftDate(since, i));
  return { range, since, until, days, dates, today };
}
export type AnalyticsPeriod = ReturnType<typeof resolvePeriod>;
export function apiBounds(since: string, until: string, now = new Date()) {
  return {
    since: new Date(`${since}T00:00:00+09:00`).toISOString(),
    until: new Date(
      Math.min(
        Date.parse(`${shiftDate(until, 1)}T00:00:00+09:00`) - 1,
        now.getTime()
      )
    ).toISOString(),
  };
}
export function changeLabel(current: number, previous: number) {
  if (previous === 0)
    return current === 0 ? '변동 없음' : '이전 0 · 증가율 계산 불가';
  const percent = ((current - previous) / previous) * 100;
  return `${percent > 0 ? '+' : ''}${percent.toFixed(1)}%`;
}
