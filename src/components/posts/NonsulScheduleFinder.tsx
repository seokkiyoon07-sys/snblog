'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  CalendarDays,
  Check,
  Download,
  Plus,
  Search,
  X,
} from 'lucide-react';
import {
  NONSUL_BASE_DATE,
  NONSUL_DATES,
  NONSUL_UNIVERSITIES,
  type NonsulUniversity,
} from '@/data/nonsul-2027';

const STORAGE_KEY = 'nonsul-2027-picks';
const INITIAL_VISIBLE = 6;

type Filter = 'all' | 'none' | 'weekday';

const DATE_INFO = new Map(NONSUL_DATES.map(d => [d.date, d]));

function formatDate(date: string) {
  const info = DATE_INFO.get(date);
  return info ? `${info.label}(${info.weekday})` : date;
}

function isWeekday(date: string) {
  const weekday = DATE_INFO.get(date)?.weekday;
  return weekday !== '토' && weekday !== '일';
}

function normalize(text: string) {
  return text.replace(/[\s()·]/g, '').toLowerCase();
}

function matchesQuery(univ: NonsulUniversity, query: string) {
  if (!query) return true;
  return [univ.name, ...(univ.aliases ?? [])].some(name =>
    normalize(name).includes(query)
  );
}

function groupByDate(univ: NonsulUniversity) {
  const groups = new Map<string, NonsulUniversity['sessions']>();
  univ.sessions.forEach(session => {
    groups.set(session.date, [...(groups.get(session.date) ?? []), session]);
  });
  return [...groups.entries()];
}

function MinimumBadge({ univ }: { univ: NonsulUniversity }) {
  if (univ.minimum === 'none') {
    return (
      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-400/30">
        수능 최저 없음
      </span>
    );
  }
  if (univ.minimum === 'partial') {
    return (
      <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700 ring-1 ring-inset ring-sky-600/20 dark:bg-sky-900/30 dark:text-sky-300 dark:ring-sky-400/30">
        최저 {univ.minimumNote}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-400/20">
      수능 최저 있음
    </span>
  );
}

// globals.css의 `.dark button:not([aria-label])` 덮어쓰기를 피하려고 모든 버튼에 aria-label을 단다
function Chip({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

export default function NonsulScheduleFinder() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [picks, setPicks] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      if (Array.isArray(saved)) {
        const names = new Set(NONSUL_UNIVERSITIES.map(u => u.name));
        setPicks(saved.filter(name => names.has(name)));
      }
    } catch {
      // 저장소를 쓸 수 없는 환경이면 담기 목록 없이 시작한다
    }
  }, []);

  const savePicks = (next: string[]) => {
    setPicks(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // 저장 실패는 무시
    }
  };

  const togglePick = (name: string) =>
    savePicks(
      picks.includes(name) ? picks.filter(p => p !== name) : [...picks, name]
    );

  const dateCounts = useMemo(() => {
    const counts = new Map<string, number>();
    NONSUL_UNIVERSITIES.forEach(univ => {
      new Set(univ.sessions.map(s => s.date)).forEach(date =>
        counts.set(date, (counts.get(date) ?? 0) + 1)
      );
    });
    return counts;
  }, []);

  const normalizedQuery = normalize(query);
  const results = NONSUL_UNIVERSITIES.filter(univ => {
    if (!matchesQuery(univ, normalizedQuery)) return false;
    if (filter === 'none' && univ.minimum === 'required') return false;
    if (filter === 'weekday' && !univ.sessions.some(s => isWeekday(s.date)))
      return false;
    if (activeDate && !univ.sessions.some(s => s.date === activeDate))
      return false;
    return true;
  });

  const isFiltered = Boolean(normalizedQuery) || filter !== 'all' || activeDate;
  const visible =
    isFiltered || showAll ? results : results.slice(0, INITIAL_VISIBLE);

  // 담은 대학을 날짜별로 모아 같은 날 2곳 이상이면 경고한다
  const myTimeline = useMemo(() => {
    const byDate = new Map<
      string,
      { univ: string; sessions: NonsulUniversity['sessions'] }[]
    >();
    NONSUL_UNIVERSITIES.filter(u => picks.includes(u.name)).forEach(univ => {
      groupByDate(univ).forEach(([date, sessions]) => {
        byDate.set(date, [
          ...(byDate.get(date) ?? []),
          { univ: univ.name, sessions },
        ]);
      });
    });
    return [...byDate.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [picks]);

  const conflictDays = myTimeline.filter(([, items]) => items.length > 1);

  return (
    <section
      aria-label="2027 수능 후 논술 일정 검색"
      className="not-prose my-10 overflow-hidden rounded-lg border border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900"
    >
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-5 sm:px-6 dark:border-slate-700 dark:bg-slate-800/60">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            대학별 논술 일정 검색
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {NONSUL_BASE_DATE} 기준
          </p>
        </div>

        <div className="relative mt-4">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="대학명 검색 (예: 고려대, 외대, 한기대)"
            aria-label="대학명 검색"
            className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:border-white"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="검색어 지우기"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Chip
            active={filter === 'all'}
            onClick={() => setFilter('all')}
            label="전체 대학 보기"
          >
            전체 36곳
          </Chip>
          <Chip
            active={filter === 'none'}
            onClick={() => setFilter('none')}
            label="수능 최저 없는 대학만 보기"
          >
            최저 없음
          </Chip>
          <Chip
            active={filter === 'weekday'}
            onClick={() => setFilter('weekday')}
            label="평일 시험 대학만 보기"
          >
            평일 시험
          </Chip>
        </div>

        <div className="-mx-4 mt-3 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6">
          <div className="flex w-max gap-1.5">
            {NONSUL_DATES.map(d => {
              const active = activeDate === d.date;
              const weekend = d.weekday === '토' || d.weekday === '일';
              return (
                <button
                  key={d.date}
                  type="button"
                  onClick={() => setActiveDate(active ? null : d.date)}
                  aria-pressed={active}
                  aria-label={`${d.label}(${d.weekday}) 시험 대학 ${dateCounts.get(d.date) ?? 0}곳 보기`}
                  className={`flex w-14 shrink-0 flex-col items-center rounded-lg border py-1.5 transition-colors ${
                    active
                      ? 'border-sn-primary bg-sn-primary text-white dark:border-emerald-500 dark:bg-emerald-600'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  <span className="text-[11px] font-medium opacity-80">
                    {d.label}
                    <span
                      className={
                        active ? '' : weekend ? 'text-rose-500' : undefined
                      }
                    >
                      ({d.weekday})
                    </span>
                  </span>
                  <span className="text-sm font-bold">
                    {dateCounts.get(d.date) ?? 0}곳
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {picks.length > 0 && (
        <div className="border-b border-slate-200 px-4 py-5 sm:px-6 dark:border-slate-700">
          <div className="flex items-center justify-between gap-3">
            <h4 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
              <CalendarDays className="h-4 w-4 text-sn-primary dark:text-emerald-400" />
              내 논술 일정 ({picks.length}곳)
            </h4>
            <button
              type="button"
              onClick={() => savePicks([])}
              aria-label="내 논술 일정 모두 비우기"
              className="shrink-0 whitespace-nowrap text-sm text-slate-500 underline-offset-4 hover:text-slate-900 hover:underline dark:text-slate-400 dark:hover:text-white"
            >
              모두 비우기
            </button>
          </div>

          {conflictDays.length > 0 && (
            <div className="mt-3 flex gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-900 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-900/20 dark:text-amber-200">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                {conflictDays.map(([date]) => formatDate(date)).join(', ')}에
                시험이 겹칩니다. 모집단위별 시간과 고사장 사이 이동 시간을
                확인해 한 곳을 고르세요.
              </p>
            </div>
          )}

          <ol className="mt-4 space-y-2">
            {myTimeline.map(([date, items]) => {
              const conflict = items.length > 1;
              return (
                <li
                  key={date}
                  className={`flex gap-3 rounded-lg border p-3 ${
                    conflict
                      ? 'border-amber-300 bg-amber-50/50 dark:border-amber-700 dark:bg-amber-900/10'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="w-16 shrink-0 text-sm font-bold text-slate-900 dark:text-white">
                    {formatDate(date)}
                  </div>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    {items.map(item => (
                      <div key={item.univ} className="text-sm">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {item.univ}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {' '}
                          ·{' '}
                          {item.sessions
                            .map(s => `${s.track} ${s.time}`)
                            .join(' / ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      <div className="px-4 py-5 sm:px-6">
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          {isFiltered
            ? `검색 결과 ${results.length}곳`
            : `전체 ${results.length}곳 · 가나다순`}
        </p>

        {results.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 px-4 py-10 text-center text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
            조건에 맞는 대학이 없습니다. 수능 후 논술 36개 대학만
            검색됩니다.
          </div>
        ) : (
          <ul className="grid gap-3 md:grid-cols-2">
            {visible.map(univ => {
              const picked = picks.includes(univ.name);
              return (
                <li
                  key={univ.name}
                  className={`flex flex-col rounded-lg border p-4 transition-colors ${
                    picked
                      ? 'border-sn-primary/50 bg-emerald-50/40 dark:border-emerald-600/60 dark:bg-emerald-900/10'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        {univ.name}
                      </p>
                      <div className="mt-1">
                        <MinimumBadge univ={univ} />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => togglePick(univ.name)}
                      aria-pressed={picked}
                      aria-label={`${univ.name} ${picked ? '내 일정에서 빼기' : '내 일정에 담기'}`}
                      className={`inline-flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                        picked
                          ? 'bg-sn-primary text-white dark:bg-emerald-600'
                          : 'border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:border-white dark:hover:text-white'
                      }`}
                    >
                      {picked ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                      {picked ? '담음' : '담기'}
                    </button>
                  </div>

                  <dl className="mt-3 flex-1 space-y-2">
                    {groupByDate(univ).map(([date, sessions]) => (
                      <div key={date} className="flex gap-3 text-sm">
                        <dt
                          className={`w-[4.5rem] shrink-0 font-semibold ${
                            activeDate === date
                              ? 'text-sn-primary dark:text-emerald-400'
                              : 'text-slate-900 dark:text-white'
                          }`}
                        >
                          {formatDate(date)}
                        </dt>
                        <dd className="min-w-0 space-y-0.5 text-slate-600 dark:text-slate-300">
                          {sessions.map(s => (
                            <p key={s.track + s.time}>
                              <span className="text-slate-900 dark:text-slate-100">
                                {s.track}
                              </span>{' '}
                              {s.time}
                            </p>
                          ))}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-3 border-t border-slate-100 pt-2.5 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    고사장 공지{' '}
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      {univ.notice}
                    </span>
                    {univ.note && <span> · {univ.note}</span>}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {!isFiltered && results.length > INITIAL_VISIBLE && (
          <button
            type="button"
            onClick={() => setShowAll(prev => !prev)}
            aria-label={showAll ? '목록 접기' : '36개 대학 모두 보기'}
            className="mt-4 w-full rounded-lg border border-slate-300 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
          >
            {showAll ? '접기' : '36개 대학 모두 보기'}
          </button>
        )}

        <div className="mt-5 flex flex-col gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700 dark:text-slate-400">
          <p>
            시험 시간은 고사장 공지 때 바뀔 수 있습니다. 최종 일정은 각 대학
            입학처 공지를 확인하세요.
          </p>
          <a
            href="/files/2027-nonsul-schedule.xlsx"
            download="2027 수능 후 논술 대학별 일정_2026.10.20 기준.xlsx"
            className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-sn-primary hover:underline dark:text-emerald-400"
          >
            <Download className="h-3.5 w-3.5" />
            엑셀 파일 받기
          </a>
        </div>
      </div>
    </section>
  );
}
