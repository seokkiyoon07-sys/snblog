'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Clock3, ExternalLink, Filter, MapPin, Search, X } from 'lucide-react';
import {
  getFiveWeekEquivalentWinterPrice,
  getRepresentativeWinterProgram,
  getWeeklyWinterPrice,
  WINTER_SCHOOL_GENDER_LABELS,
  WINTER_SCHOOL_REGION_LABELS,
  WINTER_SCHOOL_STATUS_LABELS,
  WINTER_SCHOOL_TYPE_LABELS,
  winterSchools2027,
  type WinterProgram,
  type WinterSchool,
  type WinterSchoolRegion,
  type WinterSchoolStatus,
  type WinterSchoolType,
} from '@/data/datalab/winter-schools-2027';
import SchoolDetailModal from './SchoolDetailModal';

type PriceFilter = 'all' | 'under-300' | '300' | '400' | '500' | 'pending';
type DurationFilter = 'all' | 'short' | 'five-weeks' | 'long' | 'pending';

const SN_ACADEMY_ID = 'sn-academy';

interface NaverMapInstance {
  panTo(position: unknown): void;
}

interface NaverMarkerInstance {
  setMap(map: NaverMapInstance | null): void;
}

interface NaverMapsApi {
  Map: new (
    element: HTMLElement,
    options: { center: unknown; zoom: number; minZoom?: number }
  ) => NaverMapInstance;
  Marker: new (options: {
    position: unknown;
    map: NaverMapInstance;
    title?: string;
    icon?: { content: string; anchor?: unknown };
  }) => NaverMarkerInstance;
  LatLng: new (lat: number, lng: number) => unknown;
  Point: new (x: number, y: number) => unknown;
  Event: {
    addListener(
      target: NaverMarkerInstance,
      eventName: string,
      handler: () => void
    ): void;
  };
}

const PRICE_FILTER_LABELS: Record<PriceFilter, string> = {
  all: '전체 가격',
  'under-300': '300만원 미만',
  '300': '300만원대',
  '400': '400만원대',
  '500': '500만원 이상',
  pending: '가격 미공개',
};

const DURATION_FILTER_LABELS: Record<DurationFilter, string> = {
  all: '전체 기간',
  short: '4주 이하',
  'five-weeks': '약 5주',
  long: '6주 이상',
  pending: '기간 미공개',
};

const STATUS_STYLES: Record<WinterSchoolStatus, string> = {
  confirmed:
    'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300',
  pending:
    'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300',
  recheck:
    'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300',
  unavailable:
    'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300',
};

const STATUS_SORT_ORDER: Record<WinterSchoolStatus, number> = {
  confirmed: 0,
  pending: 1,
  recheck: 2,
  unavailable: 3,
};

const CONFIRMED_SCHOOL_COUNT = winterSchools2027.filter(
  school => school.status === 'confirmed'
).length;
const PUBLISHED_PROGRAM_COUNT = winterSchools2027.reduce(
  (count, school) =>
    count +
    school.programs.filter(program => typeof program.totalPrice === 'number')
      .length,
  0
);
const UPDATE_PENDING_SCHOOL_COUNT =
  winterSchools2027.length - CONFIRMED_SCHOOL_COUNT;

function getNaverMaps(): NaverMapsApi | null {
  if (typeof window === 'undefined') return null;

  return (
    (
      window as unknown as {
        naver?: { maps?: NaverMapsApi };
      }
    ).naver?.maps ?? null
  );
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, character => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return entities[character];
  });
}

function formatPrice(program: WinterProgram): string {
  if (!program.totalPrice) return '가격 공개 대기';
  return `${program.totalPrice.toLocaleString('ko-KR')}만원${program.priceSuffix ? ` ${program.priceSuffix}` : ''}`;
}

function getMarkerPrice(school: WinterSchool): string {
  const program = getRepresentativeWinterProgram(school);
  const fiveWeekPrice = getFiveWeekEquivalentWinterPrice(school);

  if (!program || fiveWeekPrice === null) return '가격 미공개';

  const isExactFiveWeeks = program.durationDays === 35;
  return `${isExactFiveWeeks ? '5주' : '5주 환산 약'} ${Math.round(fiveWeekPrice).toLocaleString('ko-KR')}만원${program.priceSuffix ? ' 이상' : ''}`;
}

function getMarkerColor(school: WinterSchool): string {
  const fiveWeekPrice = getFiveWeekEquivalentWinterPrice(school);

  if (fiveWeekPrice === null) return '#64748b';
  if (fiveWeekPrice < 300) return '#22c55e';
  if (fiveWeekPrice < 400) return '#eab308';
  if (fiveWeekPrice < 500) return '#f97316';
  return '#ef4444';
}

function matchesPriceFilter(
  school: WinterSchool,
  filter: PriceFilter
): boolean {
  if (filter === 'all') return true;

  const fiveWeekPrice = getFiveWeekEquivalentWinterPrice(school);

  if (filter === 'pending') return fiveWeekPrice === null;
  if (fiveWeekPrice === null) return false;
  if (filter === 'under-300') return fiveWeekPrice < 300;
  if (filter === '300') return fiveWeekPrice >= 300 && fiveWeekPrice < 400;
  if (filter === '400') return fiveWeekPrice >= 400 && fiveWeekPrice < 500;
  return fiveWeekPrice >= 500;
}

function matchesDurationFilter(
  school: WinterSchool,
  filter: DurationFilter
): boolean {
  if (filter === 'all') return true;

  const durations = school.programs
    .map(program => program.durationDays)
    .filter((days): days is number => typeof days === 'number');

  if (filter === 'pending') return durations.length === 0;
  if (filter === 'short') return durations.some(days => days <= 28);
  if (filter === 'five-weeks') {
    return durations.some(days => days >= 29 && days <= 36);
  }
  return durations.some(days => days >= 37);
}

function FilterChip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'border-emerald-600 bg-emerald-600 text-white'
          : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
      }`}
    >
      {children}
    </button>
  );
}

function StatusBadge({ status }: { status: WinterSchoolStatus }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}
    >
      {WINTER_SCHOOL_STATUS_LABELS[status]}
    </span>
  );
}

function ProgramCard({ program }: { program: WinterProgram }) {
  const weeklyPrice = getWeeklyWinterPrice(program);

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            {program.name}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <Clock3 className="h-4 w-4" aria-hidden="true" />
            {program.durationLabel}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold text-emerald-700 dark:text-emerald-300">
            {formatPrice(program)}
          </p>
          {weeklyPrice !== null && (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              주당 약 {weeklyPrice.toFixed(1)}만원
            </p>
          )}
        </div>
      </div>

      {program.included && program.included.length > 0 && (
        <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-300">
          <strong className="text-slate-800 dark:text-slate-100">포함:</strong>{' '}
          {program.included.join(' · ')}
        </p>
      )}
      {program.excluded && program.excluded.length > 0 && (
        <p className="mt-1 text-xs leading-5 text-amber-700 dark:text-amber-300">
          <strong>별도:</strong> {program.excluded.join(' · ')}
        </p>
      )}
      {program.note && (
        <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
          {program.note}
        </p>
      )}
    </div>
  );
}

export default function WinterSchoolMap() {
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<NaverMapInstance | null>(null);
  const markerInstancesRef = useRef<NaverMarkerInstance[]>([]);
  const [isMapReady, setIsMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<WinterSchool | null>(
    null
  );
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | WinterSchoolType>('all');
  const [regionFilter, setRegionFilter] = useState<'all' | WinterSchoolRegion>(
    'all'
  );
  const [statusFilter, setStatusFilter] = useState<'all' | WinterSchoolStatus>(
    'all'
  );
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all');
  const [durationFilter, setDurationFilter] = useState<DurationFilter>('all');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const filteredSchools = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('ko-KR');

    return winterSchools2027
      .filter(school => {
        if (
          normalizedQuery &&
          !`${school.name} ${school.location}`
            .toLocaleLowerCase('ko-KR')
            .includes(normalizedQuery)
        ) {
          return false;
        }
        if (typeFilter !== 'all' && school.type !== typeFilter) return false;
        if (regionFilter !== 'all' && school.region !== regionFilter)
          return false;
        if (statusFilter !== 'all' && school.status !== statusFilter)
          return false;
        if (!matchesPriceFilter(school, priceFilter)) return false;
        if (!matchesDurationFilter(school, durationFilter)) return false;
        return true;
      })
      .sort((a, b) => {
        if (a.id === SN_ACADEMY_ID) return -1;
        if (b.id === SN_ACADEMY_ID) return 1;

        const statusDifference =
          STATUS_SORT_ORDER[a.status] - STATUS_SORT_ORDER[b.status];
        if (statusDifference !== 0) return statusDifference;

        const aPrice =
          getFiveWeekEquivalentWinterPrice(a) ?? Number.MAX_SAFE_INTEGER;
        const bPrice =
          getFiveWeekEquivalentWinterPrice(b) ?? Number.MAX_SAFE_INTEGER;
        if (aPrice !== bPrice) return aPrice - bPrice;
        return a.name.localeCompare(b.name, 'ko');
      });
  }, [
    durationFilter,
    priceFilter,
    query,
    regionFilter,
    statusFilter,
    typeFilter,
  ]);

  const resetFilters = useCallback(() => {
    setQuery('');
    setTypeFilter('all');
    setRegionFilter('all');
    setStatusFilter('all');
    setPriceFilter('all');
    setDurationFilter('all');
  }, []);

  const activeFilterCount = [
    query.trim().length > 0,
    typeFilter !== 'all',
    regionFilter !== 'all',
    statusFilter !== 'all',
    priceFilter !== 'all',
    durationFilter !== 'all',
  ].filter(Boolean).length;

  useEffect(() => {
    if (getNaverMaps()) setIsMapReady(true);
  }, []);

  useEffect(() => {
    if (!isMapReady || !mapElementRef.current || mapInstanceRef.current) return;

    const maps = getNaverMaps();
    if (!maps) return;

    mapInstanceRef.current = new maps.Map(mapElementRef.current, {
      center: new maps.LatLng(37.32, 127.37),
      zoom: 9,
      minZoom: 7,
    });
  }, [isMapReady]);

  useEffect(() => {
    const maps = getNaverMaps();
    const map = mapInstanceRef.current;
    if (!maps || !map) return;

    markerInstancesRef.current.forEach(marker => marker.setMap(null));
    markerInstancesRef.current = [];

    // 재수 정규반과 동일하게 SN을 마지막에 렌더링해 다른 마커보다 앞에 보이게 한다.
    const markerSchools = [...filteredSchools].sort((a, b) => {
      if (a.id === SN_ACADEMY_ID) return 1;
      if (b.id === SN_ACADEMY_ID) return -1;
      return 0;
    });

    markerSchools.forEach(school => {
      if (typeof school.lat !== 'number' || typeof school.lng !== 'number') {
        return;
      }

      const isSnAcademy = school.id === SN_ACADEMY_ID;
      const color = getMarkerColor(school);
      const markerContent = isSnAcademy
        ? `<div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;font-family:system-ui,sans-serif"><div style="background:rgba(0,0,0,.6);color:white;padding:2px 6px;border-radius:8px;font-size:8px;font-weight:bold;margin-bottom:3px;white-space:nowrap">AI 특화관</div><div style="color:white;font-size:10px;font-weight:bold;margin-bottom:2px;white-space:nowrap;text-shadow:0 1px 3px rgba(0,0,0,.8),0 0 5px rgba(0,0,0,.5);line-height:1.3;text-align:center">${escapeHtml(getMarkerPrice(school))}</div><div style="width:50px;height:50px;border-radius:50%;border:3px solid #10b981;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.3)"><img src="/images/Data_LAB/SN_landscape1.png" alt="" style="width:100%;height:100%;object-fit:cover" /></div><div style="background:linear-gradient(135deg,#10b981,#059669);color:white;padding:4px 8px;border-radius:12px;font-size:10px;font-weight:bold;margin-top:4px;box-shadow:0 2px 6px rgba(0,0,0,.2);white-space:nowrap">⭐ ${escapeHtml(school.name)}</div></div>`
        : `<div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;font-family:system-ui,sans-serif"><div style="color:white;font-size:10px;font-weight:bold;margin-bottom:2px;white-space:nowrap;text-shadow:0 1px 3px rgba(0,0,0,.8),0 0 5px rgba(0,0,0,.5)">${escapeHtml(getMarkerPrice(school))}</div><div style="background-color:${color};color:white;padding:6px 10px;border-radius:16px;font-size:11px;font-weight:bold;box-shadow:0 2px 6px rgba(0,0,0,.3);white-space:nowrap;max-width:120px;overflow:hidden;text-overflow:ellipsis">${escapeHtml(school.name)}</div></div>`;
      const marker = new maps.Marker({
        position: new maps.LatLng(school.lat, school.lng),
        map,
        title: school.name,
        icon: {
          content: markerContent,
          anchor: isSnAcademy ? new maps.Point(30, 40) : new maps.Point(50, 15),
        },
      });

      maps.Event.addListener(marker, 'click', () => {
        setSelectedSchool(school);
        map.panTo(new maps.LatLng(school.lat!, school.lng!));
      });
      markerInstancesRef.current.push(marker);
    });

    return () => {
      markerInstancesRef.current.forEach(marker => marker.setMap(null));
      markerInstancesRef.current = [];
    };
  }, [filteredSchools, isMapReady]);

  useEffect(() => {
    if (
      selectedSchool &&
      !filteredSchools.some(school => school.id === selectedSchool.id)
    ) {
      setSelectedSchool(null);
    }
  }, [filteredSchools, selectedSchool]);

  const focusSchool = useCallback((school: WinterSchool) => {
    setSelectedSchool(school);

    const maps = getNaverMaps();
    if (
      maps &&
      mapInstanceRef.current &&
      typeof school.lat === 'number' &&
      typeof school.lng === 'number'
    ) {
      mapInstanceRef.current.panTo(new maps.LatLng(school.lat, school.lng));
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Script
        src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=39m5xtkj2f"
        strategy="afterInteractive"
        onReady={() => setIsMapReady(true)}
        onError={() => setMapError(true)}
      />

      <section className="order-1 space-y-3 text-center">
        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
          2026.08.31 1차 조사
        </span>
        <div>
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
            2027 윈터스쿨, 기간과 총액을 함께 비교하세요
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            재수 정규반의 월 비용이 아니라 재학생 대상 단기 과정의 실제 기간, 총
            납부액과 별도 비용을 기준으로 정리했습니다.
          </p>
        </div>
      </section>

      <section className="order-7 mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          ['조사 학원', `${winterSchools2027.length}곳`],
          ['가격 확인 학원', `${CONFIRMED_SCHOOL_COUNT}곳`],
          ['금액 공개 과정', `${PUBLISHED_PROGRAM_COUNT}개`],
          ['업데이트 대기', `${UPDATE_PENDING_SCHOOL_COUNT}곳`],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-slate-200 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {label}
            </p>
            <p className="mt-1 text-xl font-bold text-slate-950 dark:text-white">
              {value}
            </p>
          </div>
        ))}
      </section>

      <section className="order-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="학원명 또는 지역 검색"
              aria-label="학원명 또는 지역 검색"
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-emerald-900"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowAdvancedFilters(value => !value)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            <Filter className="h-4 w-4" aria-hidden="true" />
            상세 필터
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)]">
          <fieldset className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950">
            <legend className="px-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
              학원 유형
            </legend>
            <div className="flex flex-wrap gap-2 lg:flex-nowrap">
              <FilterChip
                active={typeFilter === 'all'}
                onClick={() => setTypeFilter('all')}
              >
                전체 유형
              </FilterChip>
              {(
                Object.entries(WINTER_SCHOOL_TYPE_LABELS) as [
                  WinterSchoolType,
                  string,
                ][]
              ).map(([key, label]) => (
                <FilterChip
                  key={key}
                  active={typeFilter === key}
                  onClick={() => setTypeFilter(key)}
                >
                  {label}
                </FilterChip>
              ))}
            </div>
          </fieldset>

          <fieldset className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950">
            <legend className="px-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
              가격 공개 여부
            </legend>
            <div className="flex flex-wrap gap-2 lg:flex-nowrap">
              <FilterChip
                active={statusFilter === 'all'}
                onClick={() => setStatusFilter('all')}
              >
                전체 상태
              </FilterChip>
              <FilterChip
                active={statusFilter === 'confirmed'}
                onClick={() => setStatusFilter('confirmed')}
              >
                가격 확인
              </FilterChip>
              <FilterChip
                active={statusFilter === 'pending'}
                onClick={() => setStatusFilter('pending')}
              >
                가격 공개 대기
              </FilterChip>
            </div>
          </fieldset>
        </div>

        {showAdvancedFilters && (
          <div className="mt-5 space-y-4 border-t border-slate-200 pt-5 dark:border-slate-700">
            <div>
              <p className="mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                5주(35일) 환산가
              </p>
              <div className="flex flex-wrap gap-2">
                {(
                  Object.entries(PRICE_FILTER_LABELS) as [PriceFilter, string][]
                ).map(([key, label]) => (
                  <FilterChip
                    key={key}
                    active={priceFilter === key}
                    onClick={() => setPriceFilter(key)}
                  >
                    {label}
                  </FilterChip>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                과정 기간
              </p>
              <div className="flex flex-wrap gap-2">
                {(
                  Object.entries(DURATION_FILTER_LABELS) as [
                    DurationFilter,
                    string,
                  ][]
                ).map(([key, label]) => (
                  <FilterChip
                    key={key}
                    active={durationFilter === key}
                    onClick={() => setDurationFilter(key)}
                  >
                    {label}
                  </FilterChip>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                지역
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  active={regionFilter === 'all'}
                  onClick={() => setRegionFilter('all')}
                >
                  전체 지역
                </FilterChip>
                {(
                  Object.entries(WINTER_SCHOOL_REGION_LABELS) as [
                    WinterSchoolRegion,
                    string,
                  ][]
                ).map(([key, label]) => (
                  <FilterChip
                    key={key}
                    active={regionFilter === key}
                    onClick={() => setRegionFilter(key)}
                  >
                    {label}
                  </FilterChip>
                ))}
              </div>
            </div>
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                필터 초기화
              </button>
            )}
          </div>
        )}
      </section>

      <section className="order-5 flex flex-wrap items-center gap-x-4 gap-y-2 px-1 text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">
          5주 환산 가격대:
        </span>
        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <span className="h-3 w-3 rounded-full bg-green-500" />
          300만원 미만
        </span>
        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          300만원대
        </span>
        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <span className="h-3 w-3 rounded-full bg-orange-500" />
          400만원대
        </span>
        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          500만원 이상
        </span>
        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <span className="h-3 w-3 rounded-full bg-slate-500" />
          가격 미공개
        </span>
        <span className="flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-300">
          ★ SN AI 특화관
        </span>
      </section>

      <section className="order-2">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              전국 윈터스쿨 지도
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              모든 학원의 가격을 5주 기준으로 환산해 표시합니다.
            </p>
          </div>
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {filteredSchools.length}개 학원
          </span>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900">
          <div ref={mapElementRef} className="h-[600px] w-full" />
          {!isMapReady && !mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              지도를 불러오는 중입니다.
            </div>
          )}
          {mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 px-6 text-center text-sm text-red-600 dark:bg-slate-900 dark:text-red-300">
              지도를 불러오지 못했습니다. 아래 학원 목록은 정상적으로 이용할 수
              있습니다.
            </div>
          )}
        </div>
      </section>

      {selectedSchool && (
        <SchoolDetailModal
          open
          onClose={() => setSelectedSchool(null)}
          title={selectedSchool.name}
          highlighted={selectedSchool.id === SN_ACADEMY_ID}
          heroImage={
            selectedSchool.id === SN_ACADEMY_ID
              ? {
                  src: '/images/Data_LAB/SN_landscape1.png',
                  alt: '산을 배경으로 자리한 SN독학기숙학원 건물 전경',
                }
              : undefined
          }
          badges={
            <>
              <StatusBadge status={selectedSchool.status} />
              <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {WINTER_SCHOOL_TYPE_LABELS[selectedSchool.type]}
              </span>
              <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {WINTER_SCHOOL_GENDER_LABELS[selectedSchool.gender]}
              </span>
              {selectedSchool.id === SN_ACADEMY_ID && (
                <span className="rounded-full bg-emerald-700 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                  ★ AI 특화관
                </span>
              )}
            </>
          }
          subtitle={
            <p className="flex items-start gap-1.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {selectedSchool.location} ·{' '}
              {selectedSchool.targetGrades.join(' · ')}
            </p>
          }
        >
          <div className="space-y-5">
            {selectedSchool.programs.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {selectedSchool.programs.map(program => (
                  <ProgramCard
                    key={`${selectedSchool.id}-${program.name}`}
                    program={program}
                  />
                ))}
              </div>
            ) : (
              <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                공개된 2027 과정 정보를 확인하고 있습니다.
              </p>
            )}

            <ul className="grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
              {selectedSchool.features.map(feature => (
                <li key={feature} className="flex gap-2">
                  <span className="text-emerald-600" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {selectedSchool.note && (
              <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                {selectedSchool.note}
              </p>
            )}

            {selectedSchool.sourceUrl && (
              <a
                href={selectedSchool.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                공식 정보 확인
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </SchoolDetailModal>
      )}

      <section id="winter-school-list" className="order-6 mt-2 scroll-mt-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              2027 윈터스쿨 목록
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              5주에 가장 가까운 기본 과정의 가격을 35일 기준으로 환산했습니다.
              실제 납부액과 추가 과정은 학원을 선택해 확인할 수 있습니다.
            </p>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            최종 확인일 2026.08.31
          </span>
        </div>

        {filteredSchools.length > 0 ? (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
            <div className="hidden grid-cols-[minmax(0,1.5fr)_minmax(90px,.7fr)_minmax(100px,.7fr)] gap-3 bg-slate-100 px-4 py-3 text-xs font-semibold text-slate-700 sm:grid dark:bg-slate-800 dark:text-slate-200">
              <span>학원·유형·지역</span>
              <span>대표 과정</span>
              <span className="text-right">5주 기준가</span>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredSchools.map(school => {
                const representativeProgram =
                  getRepresentativeWinterProgram(school);
                const fiveWeekPrice = getFiveWeekEquivalentWinterPrice(school);
                const isSnAcademy = school.id === SN_ACADEMY_ID;

                return (
                  <button
                    key={school.id}
                    type="button"
                    onClick={() => focusSchool(school)}
                    className={`grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 text-left sm:grid-cols-[minmax(0,1.5fr)_minmax(90px,.7fr)_minmax(100px,.7fr)] ${
                      isSnAcademy
                        ? 'bg-emerald-50 ring-1 ring-inset ring-emerald-300 dark:bg-emerald-950/30 dark:ring-emerald-800'
                        : 'transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="min-w-0">
                      {isSnAcademy && (
                        <span className="mb-1 block text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300">
                          ★ AI 특화관 · 추천 1순위
                        </span>
                      )}
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-slate-950 dark:text-white">
                          {school.name}
                        </span>
                        <StatusBadge status={school.status} />
                      </span>
                      <span className="mt-1 block truncate text-xs text-slate-500 dark:text-slate-400">
                        {WINTER_SCHOOL_TYPE_LABELS[school.type]} ·{' '}
                        {WINTER_SCHOOL_REGION_LABELS[school.region]} ·{' '}
                        {WINTER_SCHOOL_GENDER_LABELS[school.gender]}
                        <span className="sm:hidden">
                          {' · '}
                          {representativeProgram?.durationLabel ??
                            '기간 확인 중'}
                        </span>
                      </span>
                    </span>
                    <span className="hidden text-sm font-medium text-slate-600 sm:block dark:text-slate-300">
                      {representativeProgram?.durationLabel ?? '확인 중'}
                    </span>
                    <span
                      className={`text-right text-sm font-bold ${
                        isSnAcademy
                          ? 'text-emerald-800 dark:text-emerald-200'
                          : 'text-emerald-700 dark:text-emerald-300'
                      }`}
                    >
                      {fiveWeekPrice === null
                        ? '미공개'
                        : `${representativeProgram?.durationDays === 35 ? '' : '약 '}${Math.round(fiveWeekPrice).toLocaleString('ko-KR')}만원${representativeProgram?.priceSuffix ? ' 이상' : ''}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              조건에 맞는 학원이 없습니다.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-3 text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300"
            >
              필터 초기화
            </button>
          </div>
        )}
      </section>

      <section className="order-8 mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30 sm:p-6">
        <h3 className="font-bold text-blue-950 dark:text-blue-100">
          가격을 읽을 때 꼭 확인하세요
        </h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-blue-900/80 dark:text-blue-200/90">
          <li>
            • 목록과 지도 가격은 비교를 위해 모든 과정을 35일 기준으로
            환산했습니다.
          </li>
          <li>• `이상` 표시는 교재·단체복·콘텐츠비 등이 별도라는 뜻입니다.</li>
          <li>
            • 5주 환산가는 실제 청구액이 아닙니다. 상세의 과정별 총액을 함께
            확인하세요.
          </li>
          <li>
            • 재확인 상태의 금액은 등록 전 공식 모집요강에서 확인해야 합니다.
          </li>
        </ul>
      </section>

      <div className="order-9 mt-4 flex justify-center">
        <Link
          href="/datalab/boarding-school-price-map-2026"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200"
        >
          재수생 정규 기숙학원 가격 지도 보기
        </Link>
      </div>
    </div>
  );
}
