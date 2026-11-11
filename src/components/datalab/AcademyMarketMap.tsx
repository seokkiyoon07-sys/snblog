'use client';

import Script from 'next/script';
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Info,
  LocateFixed,
  MapPin,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react';
import {
  HUBS,
  MARKET_WEIGHTS,
  MarketIndex,
  SUBJECT_FILTERS,
  TARGETS,
  distanceM,
  rankHubs,
  type SchoolRow,
  type AcademyFilter,
  type AcademyRow,
  type Hub,
  type MarketData,
  type PointStats,
  type Scores,
  type SubjectName,
  type TargetId,
} from '@/lib/academy-market-index';

// ── 네이버 지도 최소 타입 ───────────────────────────────────────────────
interface NaverLatLng {
  lat(): number;
  lng(): number;
}
interface NaverBounds {
  getSW(): NaverLatLng;
  getNE(): NaverLatLng;
}
interface NaverPoint {
  x: number;
  y: number;
}
interface NaverProjection {
  fromCoordToOffset(coord: NaverLatLng): NaverPoint;
}
interface NaverOverlayViewBase {
  setMap(map: NaverMap | null): void;
  getMap(): NaverMap | null;
  getPanes(): { overlayLayer: HTMLElement };
  getProjection(): NaverProjection;
}
interface NaverMap {
  panTo(position: unknown): void;
  setCenter(position: unknown): void;
  getSize(): { width: number; height: number };
  setZoom(zoom: number, effect?: boolean): void;
  getZoom(): number;
  getBounds(): NaverBounds;
  setOptions(options: Record<string, unknown>): void;
  autoResize(): void;
}
interface NaverOverlay {
  setMap(map: NaverMap | null): void;
}
interface NaverMarker extends NaverOverlay {
  setPosition(position: unknown): void;
  setIcon(icon: { content: string; anchor?: unknown }): void;
}
interface NaverCircle extends NaverOverlay {
  setCenter(position: unknown): void;
  setRadius(radius: number): void;
}
interface NaverMapsApi {
  Map: new (el: HTMLElement, options: Record<string, unknown>) => NaverMap;
  Marker: new (options: Record<string, unknown>) => NaverMarker;
  Circle: new (options: Record<string, unknown>) => NaverCircle;
  LatLng: new (lat: number, lng: number) => NaverLatLng;
  Point: new (x: number, y: number) => unknown;
  OverlayView: new () => NaverOverlayViewBase;
  Event: {
    addListener(
      target: unknown,
      eventName: string,
      handler: (e: { coord: NaverLatLng }) => void
    ): unknown;
    removeListener(listener: unknown): void;
  };
}

function getNaverMaps(): NaverMapsApi | null {
  if (typeof window === 'undefined') return null;
  return (
    (window as unknown as { naver?: { maps?: NaverMapsApi } }).naver?.maps ??
    null
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── 학원 캔버스 레이어 ──────────────────────────────────────────────────
// 학원 건물 수천 개를 지도 오버레이로 하나씩 만들면 느리다. 캔버스 한 장에 그린다.
interface CanvasPoint {
  lat: number;
  lng: number;
  radiusM: number;
}
interface AcademyLayer {
  setMap(map: NaverMap | null): void;
  setPoints(points: CanvasPoint[]): void;
  draw(): void;
}

function createAcademyLayer(maps: NaverMapsApi, color: string): AcademyLayer {
  const Base = maps.OverlayView as unknown as new () => NaverOverlayViewBase;

  class Layer extends Base {
    private canvas: HTMLCanvasElement | null = null;
    private points: CanvasPoint[] = [];

    onAdd() {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'absolute';
      canvas.style.pointerEvents = 'none';
      this.canvas = canvas;
      this.getPanes().overlayLayer.appendChild(canvas);
    }

    onRemove() {
      this.canvas?.remove();
      this.canvas = null;
    }

    setPoints(points: CanvasPoint[]) {
      this.points = points;
      this.draw();
    }

    draw() {
      const map = this.getMap();
      const canvas = this.canvas;
      if (!map || !canvas) return;
      const proj = this.getProjection();
      const size = map.getSize();
      const bounds = map.getBounds();
      const sw = bounds.getSW();
      const ne = bounds.getNE();

      // 화면보다 넓게(사방 50%) 그려서 끌어 옮길 때 가장자리가 비지 않게 한다.
      const padX = size.width * 0.5;
      const padY = size.height * 0.5;
      const topLeft = proj.fromCoordToOffset(
        new maps.LatLng(ne.lat(), sw.lng())
      );
      const originX = topLeft.x - padX;
      const originY = topLeft.y - padY;
      const w = size.width + padX * 2;
      const h = size.height + padY * 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.style.left = `${originX}px`;
      canvas.style.top = `${originY}px`;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // 100m가 몇 픽셀인지
      const c = map.getBounds().getSW();
      const p0 = proj.fromCoordToOffset(new maps.LatLng(c.lat(), c.lng()));
      const p1 = proj.fromCoordToOffset(
        new maps.LatLng(c.lat() + 100 / 110540, c.lng())
      );
      const pxPerM = Math.abs(p1.y - p0.y) / 100;

      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      for (const pt of this.points) {
        const p = proj.fromCoordToOffset(new maps.LatLng(pt.lat, pt.lng));
        const x = p.x - originX;
        const y = p.y - originY;
        if (x < -80 || y < -80 || x > w + 80 || y > h + 80) continue;
        const r = Math.max(2.5, pt.radiusM * pxPerM);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 0.6;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
  }

  return new Layer() as unknown as AcademyLayer;
}

// ── 표시 상수 ──────────────────────────────────────────────────────────
const RADII = [1000, 1500, 2000] as const;
type Radius = (typeof RADII)[number];
const TARGET_ORDER: TargetId[] = [
  'all',
  'elementary',
  'middle',
  'high',
  'exam',
];

const KIND_COLORS = ['#0ea5e9', '#8b5cf6', '#f43f5e'] as const; // 초·중·고
const KIND_LABELS = ['초', '중', '고'] as const;
const ACADEMY_COLOR = '#f59e0b';
const POINT_COLOR = '#122918'; // sn-primary

const GRADE_STYLES: Record<Scores['grade'], string> = {
  S: 'bg-sn-primary text-white',
  A: 'bg-[#5f7a61] text-white',
  B: 'bg-slate-600 text-white',
  C: 'bg-amber-500 text-white',
  D: 'bg-slate-400 text-white',
};

const fmt = (n: number) => Math.round(n).toLocaleString('ko-KR');

/** 필터와 관계없이 항상 지도에 표시하는 SN 지점 */
const SN_BRANCHES: {
  name: string;
  address: string;
  lat: number;
  lng: number;
}[] = [
  {
    name: 'SN고요의숲 대치점',
    address: '서울 강남구 삼성로 223 (대치동 447)',
    lat: 37.4968847,
    lng: 127.0616187,
  },
  // 반포점: 주소 확정 후 추가 (2026-11 기준 공지에 '추후 안내')
];

function snBranchContent(name: string) {
  return `<div style="transform:translate(-50%,calc(-100% - 6px));display:flex;flex-direction:column;align-items:center;font-family:system-ui,sans-serif;pointer-events:none"><div style="display:flex;align-items:center;gap:6px;background:#122918;color:#fff;padding:6px 10px 6px 6px;border-radius:999px;box-shadow:0 4px 12px rgba(0,0,0,.3);white-space:nowrap"><span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#fff;color:#122918;font-size:10px;font-weight:800">SN</span><span style="font-size:12px;font-weight:700">${escapeHtml(name)}</span></div><div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:7px solid #122918"></div></div>`;
}

function bigAcademyContent(rank: number, name: string, seats: number) {
  const short = name.replace(/학원$/, '');
  return `<div style="transform:translate(-50%,calc(-100% - 4px));display:flex;flex-direction:column;align-items:center;font-family:system-ui,sans-serif"><div style="display:flex;align-items:center;gap:5px;background:#fff;border:1px solid #f59e0b;padding:2px 7px 2px 2px;border-radius:999px;box-shadow:0 2px 6px rgba(0,0,0,.2);white-space:nowrap"><span style="display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;border-radius:999px;background:#f59e0b;color:#fff;font-size:10px;font-weight:800">${rank}</span><span style="font-size:11px;font-weight:700;color:#0f172a;max-width:120px;overflow:hidden;text-overflow:ellipsis">${escapeHtml(short)}</span><span style="font-size:10px;font-weight:600;color:#b45309">${fmt(seats)}석</span></div><div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid #f59e0b"></div></div>`;
}

interface Selection {
  lat: number;
  lng: number;
  label: string;
  hubId: string | null;
}

interface Building {
  lat: number;
  lng: number;
  items: AcademyRow[];
}

// ── 공용 UI ────────────────────────────────────────────────────────────
function Segmented<T extends string | number | null>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <div className="inline-flex flex-wrap gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-800">
        {options.map(o => (
          <button
            key={String(o.value)}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={`rounded-md px-3 py-1.5 text-sm font-medium tabular-nums transition-colors ${
              value === o.value
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:text-white dark:ring-slate-700'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── 컴포넌트 ───────────────────────────────────────────────────────────
export default function AcademyMarketMap() {
  const [data, setData] = useState<MarketData | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [target, setTarget] = useState<TargetId>('all');
  const [radius, setRadius] = useState<Radius>(1500);
  const [subject, setSubject] = useState<SubjectName | null>(null);
  const [includeGeneral, setIncludeGeneral] = useState(true);
  const [showKinds, setShowKinds] = useState<[boolean, boolean, boolean]>([
    true,
    true,
    true,
  ]);
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null);
  const [showAcademyDots, setShowAcademyDots] = useState(true);
  const [showBigLabels, setShowBigLabels] = useState(true);
  const [selection, setSelection] = useState<Selection>(() => ({
    lat: HUBS[0].lat,
    lng: HUBS[0].lng,
    label: `${HUBS[0].name} 학원가 중심`,
    hubId: HUBS[0].id,
  }));

  const filter = useMemo<AcademyFilter>(
    () => ({ subject, includeGeneral }),
    [subject, includeGeneral]
  );

  // 무거운 계산은 지연값으로 돌려 버튼 반응을 막지 않는다.
  const dTarget = useDeferredValue(target);
  const dRadius = useDeferredValue(radius);
  const dFilter = useDeferredValue(filter);
  const dSelection = useDeferredValue(selection);
  const isStale =
    dTarget !== target ||
    dRadius !== radius ||
    dFilter !== filter ||
    dSelection !== selection;

  const mapElRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<NaverMap | null>(null);
  const centerMarkerRef = useRef<NaverMarker | null>(null);
  const radiusCircleRef = useRef<NaverCircle | null>(null);
  const academyLayerRef = useRef<AcademyLayer | null>(null);
  const bigAcademyOverlays = useRef(
    new Map<number, { marker: NaverMarker; shown: boolean; rank: number }>()
  );
  const snMarkersRef = useRef<NaverMarker[]>([]);
  const schoolOverlays = useRef(
    new Map<number, { marker: NaverMarker; shown: boolean }>()
  );
  const refreshRef = useRef<() => void>(() => {});

  useEffect(() => {
    let cancelled = false;
    fetch('/data/academy-market/market.json')
      .then(r => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json() as Promise<MarketData>;
      })
      .then(d => !cancelled && setData(d))
      .catch(() => !cancelled && setLoadError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (getNaverMaps()) setIsMapReady(true);
  }, []);

  const index = useMemo(() => (data ? new MarketIndex(data) : null), [data]);

  // 같은 좌표(건물)의 학원은 원 하나로 묶는다.
  const buildings = useMemo<Building[]>(() => {
    if (!data) return [];
    const map = new Map<string, Building>();
    for (const a of data.academies) {
      const key = `${a[1]},${a[2]}`;
      const b = map.get(key);
      if (b) b.items.push(a);
      else map.set(key, { lat: a[1], lng: a[2], items: [a] });
    }
    return [...map.values()];
  }, [data]);

  const current = useMemo(() => {
    if (!index) return null;
    const ref = index.reference(dRadius, dTarget, dFilter);
    const stats = index.stats(
      dSelection.lat,
      dSelection.lng,
      dRadius,
      dTarget,
      dFilter
    );
    return { stats, scores: index.score(stats, ref), refSize: ref.size };
  }, [index, dSelection, dRadius, dTarget, dFilter]);

  const subjectCounts = useMemo(
    () =>
      index
        ? index.subjectCounts(dSelection.lat, dSelection.lng, dRadius)
        : null,
    [index, dSelection, dRadius]
  );

  const hubRanking = useMemo(
    () => (index ? rankHubs(index, dRadius, dTarget, dFilter) : []),
    [index, dRadius, dTarget, dFilter]
  );

  // 지도 생성
  useEffect(() => {
    if (!isMapReady || !mapElRef.current || mapRef.current) return;
    const maps = getNaverMaps();
    if (!maps) return;
    const map = new maps.Map(mapElRef.current, {
      center: new maps.LatLng(HUBS[0].lat, HUBS[0].lng),
      zoom: 14,
      minZoom: 11,
      zoomControl: true,
      zoomControlOptions: { position: 3 },
    });
    mapRef.current = map;

    const clickListener = maps.Event.addListener(map, 'click', e => {
      setSelection({
        lat: e.coord.lat(),
        lng: e.coord.lng(),
        label: '지도에서 고른 지점',
        hubId: null,
      });
    });
    const idleListener = maps.Event.addListener(map, 'idle', () =>
      refreshRef.current()
    );

    const observer = new ResizeObserver(() => map.autoResize());
    observer.observe(mapElRef.current);
    return () => {
      observer.disconnect();
      maps.Event.removeListener(clickListener);
      maps.Event.removeListener(idleListener);
    };
  }, [isMapReady]);

  // 화면에 보이는 학교·학원만 켜고 끈다(오버레이는 한 번 만들어 재사용).
  const refreshOverlays = useCallback(() => {
    const maps = getNaverMaps();
    const map = mapRef.current;
    if (!maps || !map || !index) return;

    const bounds = map.getBounds();
    const sw = bounds.getSW();
    const ne = bounds.getNE();
    const padLat = (ne.lat() - sw.lat()) * 0.15;
    const padLng = (ne.lng() - sw.lng()) * 0.15;
    const inView = (lat: number, lng: number) =>
      lat >= sw.lat() - padLat &&
      lat <= ne.lat() + padLat &&
      lng >= sw.lng() - padLng &&
      lng <= ne.lng() + padLng;
    const zoom = map.getZoom();

    // 학원: 캔버스 레이어 다시 그리기(점 목록은 아래 effect에서 과목 필터가 바뀔 때만 갱신)
    academyLayerRef.current?.draw();

    const showSchools = zoom >= 13;
    data?.schools.forEach((s, i) => {
      const entry = schoolOverlays.current.get(i);
      const visible = showSchools && showKinds[s[1]] && inView(s[2], s[3]);
      if (!visible) {
        if (entry?.shown) {
          entry.marker.setMap(null);
          entry.shown = false;
        }
        return;
      }
      if (!entry) {
        const total = s[5].reduce((x, y) => x + y, 0);
        const short = s[0].replace(/(초등학교|중학교|고등학교)$/, '');
        const marker = new maps.Marker({
          map,
          position: new maps.LatLng(s[2], s[3]),
          title: `${s[0]} · ${fmt(total)}명`,
          zIndex: 100 + s[1],
          icon: {
            content: `<div style="display:flex;align-items:center;gap:3px;transform:translate(-9px,-9px);white-space:nowrap;font-family:system-ui,sans-serif"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:${KIND_COLORS[s[1]]};color:#fff;font-size:10px;font-weight:700;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.3)">${KIND_LABELS[s[1]]}</span><span style="background:rgba(255,255,255,.92);color:#0f172a;font-size:10px;font-weight:600;padding:1px 5px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.2)">${escapeHtml(short)}</span></div>`,
            anchor: new maps.Point(0, 0),
          },
        });
        maps.Event.addListener(marker, 'click', () => setSelectedSchool(i));
        schoolOverlays.current.set(i, { marker, shown: true });
        return;
      }
      if (!entry.shown) {
        entry.marker.setMap(map);
        entry.shown = true;
      }
    });

    // 대형 학원: 화면 안 '학원'(교습소 제외)을 동시 수용 인원 순으로 상위만 라벨 표시
    const limit =
      zoom >= 16
        ? 20
        : zoom === 15
          ? 15
          : zoom === 14
            ? 10
            : zoom === 13
              ? 8
              : 5;
    const top: number[] = [];
    data?.academies.forEach((a, i) => {
      if (
        a[4] !== 0 ||
        a[3] <= 0 ||
        !index.matches(a, filter) ||
        !inView(a[1], a[2])
      )
        return;
      top.push(i);
    });
    top.sort((x, y) => data!.academies[y][3] - data!.academies[x][3]);
    const ranked = new Map(
      showBigLabels
        ? top.slice(0, limit).map((i, r) => [i, r + 1] as const)
        : []
    );
    bigAcademyOverlays.current.forEach((entry, i) => {
      if (!ranked.has(i) && entry.shown) {
        entry.marker.setMap(null);
        entry.shown = false;
      }
    });
    ranked.forEach((rank, i) => {
      const a = data!.academies[i];
      const entry = bigAcademyOverlays.current.get(i);
      const icon = {
        content: bigAcademyContent(rank, a[0], a[3]),
        anchor: new maps.Point(0, 0),
      };
      if (!entry) {
        const marker = new maps.Marker({
          map,
          position: new maps.LatLng(a[1], a[2]),
          title: `${a[0]} · 동시 수용 ${fmt(a[3])}석`,
          zIndex: 400 - rank,
          icon,
        });
        bigAcademyOverlays.current.set(i, { marker, shown: true, rank });
        return;
      }
      if (entry.rank !== rank) {
        entry.marker.setIcon(icon);
        entry.rank = rank;
      }
      if (!entry.shown) {
        entry.marker.setMap(map);
        entry.shown = true;
      }
    });
  }, [data, filter, index, showKinds, showBigLabels]);

  // SN 지점 마커(항상 표시)
  useEffect(() => {
    const maps = getNaverMaps();
    const map = mapRef.current;
    if (!maps || !map || snMarkersRef.current.length) return;
    snMarkersRef.current = SN_BRANCHES.map(
      b =>
        new maps.Marker({
          map,
          position: new maps.LatLng(b.lat, b.lng),
          title: `${b.name} · ${b.address}`,
          zIndex: 2000,
          clickable: false,
          icon: {
            content: snBranchContent(b.name),
            anchor: new maps.Point(0, 0),
          },
        })
    );
  }, [isMapReady]);

  useEffect(() => {
    refreshRef.current = refreshOverlays;
    refreshOverlays();
  }, [refreshOverlays, isMapReady]);

  // 학원 캔버스 레이어: 과목 필터에 맞는 건물별 좌석 합계로 점 크기를 정한다.
  useEffect(() => {
    const maps = getNaverMaps();
    const map = mapRef.current;
    if (!maps || !map || !index) return;
    if (!academyLayerRef.current)
      academyLayerRef.current = createAcademyLayer(maps, ACADEMY_COLOR);
    const points: CanvasPoint[] = [];
    for (const b of buildings) {
      let cap = 0;
      for (const a of b.items)
        if (index.matches(a, filter)) cap += index.capacityOf(a);
      if (cap > 0)
        points.push({
          lat: b.lat,
          lng: b.lng,
          radiusM: Math.min(70, 8 + Math.sqrt(cap) * 1.6),
        });
    }
    academyLayerRef.current.setPoints(points);
  }, [buildings, filter, index, isMapReady]);

  // 학원 분포 점 켜기/끄기 (레이어 생성 뒤에 실행되도록 아래에 둔다)
  const layerAttachedRef = useRef(false);
  useEffect(() => {
    const layer = academyLayerRef.current;
    const map = mapRef.current;
    if (!layer || !map) return;
    if (showAcademyDots && !layerAttachedRef.current) {
      layer.setMap(map);
      layerAttachedRef.current = true;
    } else if (!showAcademyDots && layerAttachedRef.current) {
      layer.setMap(null);
      layerAttachedRef.current = false;
    }
  }, [showAcademyDots, isMapReady, index]);

  // 선택 지점 · 반경 원
  useEffect(() => {
    const maps = getNaverMaps();
    const map = mapRef.current;
    if (!maps || !map) return;
    const pos = new maps.LatLng(selection.lat, selection.lng);

    if (!radiusCircleRef.current) {
      radiusCircleRef.current = new maps.Circle({
        map,
        center: pos,
        radius,
        fillColor: POINT_COLOR,
        fillOpacity: 0.05,
        strokeColor: POINT_COLOR,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeStyle: 'shortdash',
        clickable: false,
      });
    } else {
      radiusCircleRef.current.setCenter(pos);
      radiusCircleRef.current.setRadius(radius);
    }

    if (!centerMarkerRef.current) {
      centerMarkerRef.current = new maps.Marker({
        map,
        position: pos,
        zIndex: 1000,
        icon: {
          content: `<div style="width:20px;height:20px;border-radius:50%;background:${POINT_COLOR};border:4px solid #fff;box-shadow:0 0 0 2px ${POINT_COLOR},0 4px 10px rgba(0,0,0,.35)"></div>`,
          anchor: new maps.Point(10, 10),
        },
      });
    } else {
      centerMarkerRef.current.setPosition(pos);
    }
  }, [selection, radius, isMapReady]);

  useEffect(() => {
    mapRef.current?.setZoom(
      radius <= 1000 ? 15 : radius <= 1500 ? 14 : 13,
      true
    );
  }, [radius, isMapReady]);

  useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === 'Escape' && setIsFullscreen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isFullscreen]);

  const selectHub = (hub: Hub) => {
    setSelection({
      lat: hub.lat,
      lng: hub.lng,
      label: `${hub.name} 학원가 중심`,
      hubId: hub.id,
    });
    const maps = getNaverMaps();
    // 먼 학원가로는 애니메이션 없이 바로 이동(panTo는 긴 거리에서 느리다)
    if (maps && mapRef.current)
      mapRef.current.setCenter(new maps.LatLng(hub.lat, hub.lng));
  };

  const loading = (!data || !isMapReady) && !loadError && !mapError;
  const conditionLabel = `${TARGETS[dTarget].short} · ${dFilter.subject ?? '전체 과목'} · ${dRadius / 1000}km`;

  return (
    <div className="flex flex-col gap-6">
      <Script
        src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=39m5xtkj2f"
        strategy="afterInteractive"
        onReady={() => setIsMapReady(true)}
        onError={() => setMapError(true)}
      />

      {/* 컨트롤 */}
      <section className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            학원가
          </p>
          <div className="flex flex-wrap gap-2">
            {HUBS.map(hub => (
              <button
                key={hub.id}
                type="button"
                onClick={() => selectHub(hub)}
                aria-pressed={selection.hubId === hub.id}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                  selection.hubId === hub.id
                    ? 'border-sn-primary bg-sn-primary text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
                }`}
              >
                {hub.name}
                <span className="ml-1.5 hidden text-xs font-normal opacity-70 sm:inline">
                  {hub.area.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          <Segmented
            label="학원 대상 학년"
            value={target}
            onChange={setTarget}
            options={TARGET_ORDER.map(id => ({
              value: id,
              label: TARGETS[id].label,
            }))}
          />
          <Segmented
            label="분석 반경"
            value={radius}
            onChange={v => setRadius(v as Radius)}
            options={RADII.map(r => ({ value: r, label: `${r / 1000}km` }))}
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            학원 과목{' '}
            <span className="font-normal text-slate-400">
              · 숫자는 반경 {radius / 1000}km 안 학원·교습소 수
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {[null, ...SUBJECT_FILTERS].map(s => {
              const active = subject === s;
              const count = subjectCounts ? subjectCounts[s ?? '전체'] : null;
              return (
                <button
                  key={s ?? 'all'}
                  type="button"
                  onClick={() => setSubject(s)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'border-sn-primary bg-sn-primary text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
                  }`}
                >
                  {s ?? '전체'}
                  {count !== null && (
                    <span
                      className={`rounded px-1.5 py-0.5 text-xs font-semibold tabular-nums ${
                        active
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                    >
                      {fmt(count)}
                    </span>
                  )}
                </button>
              );
            })}
            {subjectCounts && (
              <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-200 px-3.5 py-2 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                종합·미분류
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {fmt(subjectCounts.종합)}
                </span>
              </span>
            )}
          </div>
          {subject && (
            <label className="mt-3 flex cursor-pointer items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <input
                type="checkbox"
                checked={includeGeneral}
                onChange={e => setIncludeGeneral(e.target.checked)}
                className="h-3.5 w-3.5 accent-[#122918]"
              />
              과목을 알 수 없는 종합학원도 경쟁 상대로 포함
            </label>
          )}
          <p className="mt-2 text-[11px] text-slate-400">
            여러 과목을 가르치는 학원은 각 과목에 모두 셉니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
          <span className="mr-1 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            지도 표시
          </span>
          {[
            ...KIND_LABELS.map((k, i) => ({
              key: k,
              label:
                k === '초' ? '초등학교' : k === '중' ? '중학교' : '고등학교',
              color: KIND_COLORS[i],
              on: showKinds[i],
              toggle: () =>
                setShowKinds(prev => {
                  const next = [...prev] as [boolean, boolean, boolean];
                  next[i] = !next[i];
                  return next;
                }),
            })),
            {
              key: 'dots',
              label: '학원 분포',
              color: ACADEMY_COLOR,
              on: showAcademyDots,
              toggle: () => setShowAcademyDots(v => !v),
            },
            {
              key: 'big',
              label: '대형 학원 순위',
              color: '#b45309',
              on: showBigLabels,
              toggle: () => setShowBigLabels(v => !v),
            },
          ].map((t, idx) => (
            <button
              key={t.key}
              type="button"
              aria-pressed={t.on}
              onClick={t.toggle}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                idx === 3 ? 'sm:ml-3' : ''
              } ${
                t.on
                  ? 'border-slate-300 bg-white text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100'
                  : 'border-slate-200 bg-slate-50 text-slate-400 line-through dark:border-slate-800 dark:bg-slate-800'
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: t.on ? t.color : '#cbd5e1' }}
              />
              {t.label}
            </button>
          ))}
          <span className="ml-auto hidden text-[11px] text-slate-400 sm:inline">
            학교 이름은 지도를 확대하면 보입니다
          </span>
        </div>
      </section>

      {/* 지도 */}
      <section className="flex flex-col gap-4">
        <div
          className={
            isFullscreen
              ? 'fixed inset-0 z-[100] bg-slate-100 dark:bg-slate-800'
              : 'relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800'
          }
        >
          <div
            ref={mapElRef}
            className={
              isFullscreen ? 'h-full w-full' : 'h-[520px] w-full sm:h-[680px]'
            }
          />

          {(mapError || loadError) && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/90 p-6 text-center text-sm text-slate-600 dark:bg-slate-900/90 dark:text-slate-300">
              {loadError
                ? '데이터를 불러오지 못했습니다. 새로고침해 주세요.'
                : '지도를 불러오지 못했습니다.'}
            </div>
          )}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
              지도와 데이터를 불러오는 중…
            </div>
          )}

          <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:bg-slate-900/95 dark:text-slate-200">
            <LocateFixed className="h-3.5 w-3.5 text-sn-primary dark:text-emerald-300" />
            지도를 클릭하면 그 지점을 분석합니다
          </div>
          <button
            type="button"
            onClick={() => setIsFullscreen(v => !v)}
            className="absolute right-14 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm hover:text-slate-950 dark:bg-slate-900/95 dark:text-slate-200"
          >
            {isFullscreen ? (
              <Minimize2 className="h-3.5 w-3.5" />
            ) : (
              <Maximize2 className="h-3.5 w-3.5" />
            )}
            {isFullscreen ? '닫기' : '전체 화면'}
          </button>
          {isFullscreen && current && (
            <div className="absolute left-3 top-14 rounded-lg bg-white/95 px-4 py-3 shadow-lg dark:bg-slate-900/95">
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {selection.label} · {conditionLabel}
              </p>
              <p className="text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
                {current.stats.demand === 0 ? '-' : current.scores.market}
                <span className="ml-1.5 text-sm font-semibold text-slate-500">
                  상권 지수
                </span>
              </p>
            </div>
          )}
          {selectedSchool !== null && data?.schools[selectedSchool] && (
            <SchoolCard
              school={data.schools[selectedSchool]}
              distanceM={distanceM(
                selection.lat,
                selection.lng,
                data.schools[selectedSchool][2],
                data.schools[selectedSchool][3]
              )}
              onClose={() => setSelectedSchool(null)}
            />
          )}
          <div className="pointer-events-none absolute bottom-3 left-3 flex flex-wrap gap-x-3 gap-y-1 rounded-md bg-white/95 px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm dark:bg-slate-900/95 dark:text-slate-200">
            {KIND_LABELS.map((k, i) => (
              <span key={k} className="inline-flex items-center gap-1">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: KIND_COLORS[i] }}
                />
                {k}
              </span>
            ))}
            <span className="inline-flex items-center gap-1">
              <span
                className="h-2.5 w-2.5 rounded-full opacity-60"
                style={{ background: ACADEMY_COLOR }}
              />
              학원·교습소 (건물별, 크기 = 좌석 수)
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-amber-500 px-0.5 text-[8px] font-bold text-white">
                1
              </span>
              화면 안 대형 학원 순위
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-sn-primary" />
              SN고요의숲
            </span>
          </div>
        </div>

        <ScoreCard
          selection={dSelection}
          conditionLabel={conditionLabel}
          result={current}
          stale={isStale}
          filter={dFilter}
        />
      </section>

      {current && <DetailLists stats={current.stats} />}

      {hubRanking.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              8대 학원가 비교
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {conditionLabel}
            </span>
          </div>
          <div
            className={`overflow-x-auto transition-opacity ${isStale ? 'opacity-60' : ''}`}
          >
            <table className="w-full min-w-[680px] border-collapse text-sm">
              <thead className="whitespace-nowrap">
                <tr className="border-b-2 border-slate-200 text-left text-xs font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  <th className="px-4 py-3">학원가</th>
                  <th className="px-3 py-3 text-right">상권 지수</th>
                  <th className="px-3 py-3 text-right">수요</th>
                  <th className="px-3 py-3 text-right">학원 밀집</th>
                  <th className="px-3 py-3 text-right">경쟁 강도</th>
                  <th className="px-3 py-3 text-right">대상 학생</th>
                  <th className="px-3 py-3 text-right">학원·교습소</th>
                  <th className="px-4 py-3 text-right">학생 1명당 좌석</th>
                </tr>
              </thead>
              <tbody>
                {hubRanking.map(({ hub, stats, scores }, i) => (
                  <tr
                    key={hub.id}
                    onClick={() => selectHub(hub)}
                    className={`cursor-pointer border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60 ${
                      selection.hubId === hub.id
                        ? 'bg-slate-50 dark:bg-slate-800/60'
                        : ''
                    }`}
                  >
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="mr-3 inline-block w-4 text-xs tabular-nums text-slate-400">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {hub.name}
                      </span>
                      <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
                        {hub.area}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="font-bold tabular-nums text-slate-900 dark:text-white">
                          {scores.market}
                        </span>
                        <span
                          className={`rounded px-1.5 text-[10px] font-bold ${GRADE_STYLES[scores.grade]}`}
                        >
                          {scores.grade}
                        </span>
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-slate-600 dark:text-slate-300">
                      {scores.demand}
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-slate-600 dark:text-slate-300">
                      {scores.supply}
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-slate-600 dark:text-slate-300">
                      {scores.competition}
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-slate-600 dark:text-slate-300">
                      {fmt(stats.students.target)}
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-slate-600 dark:text-slate-300">
                      {fmt(stats.academyCount.학원 + stats.academyCount.교습소)}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-600 dark:text-slate-300">
                      {stats.ratio === null ? '-' : stats.ratio.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <Methodology collectedAt={data?.collectedAt} refSize={current?.refSize} />
    </div>
  );
}

// ── 학교 정보 카드 ─────────────────────────────────────────────────────
function SchoolCard({
  school,
  distanceM,
  onClose,
}: {
  school: SchoolRow;
  distanceM: number;
  onClose: () => void;
}) {
  const total = school[5].reduce((a, b) => a + b, 0);
  const max = Math.max(...school[5], 1);
  const kindName = ['초등학교', '중학교', '고등학교'][school[1]];
  return (
    <div className="absolute right-14 top-14 z-10 w-[260px] rounded-lg border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
            {school[0]}
          </p>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            {school[6] || kindName} · 선택 지점에서{' '}
            {(distanceM / 1000).toFixed(1)}km
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="-mr-1 -mt-1 rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <ul className="space-y-1.5">
        {school[5].map((n, i) => (
          <li
            key={i}
            className="grid grid-cols-[40px_minmax(0,1fr)_48px] items-center gap-2 text-xs"
          >
            <span className="text-slate-500 dark:text-slate-400">
              {i + 1}학년
            </span>
            <span className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <span
                className="block h-full rounded-full"
                style={{
                  width: `${(n / max) * 100}%`,
                  background: KIND_COLORS[school[1]],
                }}
              />
            </span>
            <span className="text-right font-semibold tabular-nums text-slate-800 dark:text-slate-100">
              {fmt(n)}명
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-baseline justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
        <span className="text-xs text-slate-500 dark:text-slate-400">총원</span>
        <span className="text-lg font-bold tabular-nums text-slate-900 dark:text-white">
          {fmt(total)}명
        </span>
      </div>
    </div>
  );
}

// ── 지수 카드 ──────────────────────────────────────────────────────────
function ScoreCard({
  selection,
  conditionLabel,
  result,
  stale,
  filter,
}: {
  selection: Selection;
  conditionLabel: string;
  result: { stats: PointStats; scores: Scores } | null;
  stale: boolean;
  filter: AcademyFilter;
}) {
  if (!result) {
    return (
      <div className="flex min-h-[160px] items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
        지수를 계산하는 중…
      </div>
    );
  }
  const { stats, scores } = result;
  const outside = stats.demand === 0;

  return (
    <div
      className={`grid gap-6 rounded-xl border border-slate-200 bg-white p-6 transition-opacity dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)] ${
        stale ? 'opacity-60' : ''
      }`}
    >
      <div>
        <p className="inline-flex items-start gap-1 text-xs text-slate-500 dark:text-slate-400">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>
            {selection.label}
            <br />
            {conditionLabel}
          </span>
        </p>
        <div className="mt-3 flex items-end gap-2">
          <span className="text-5xl font-bold tabular-nums leading-none tracking-tight text-slate-900 dark:text-white">
            {outside ? '-' : scores.market}
          </span>
          {!outside && (
            <span
              className={`mb-1 rounded px-2 py-0.5 text-xs font-bold ${GRADE_STYLES[scores.grade]}`}
            >
              {scores.grade}등급
            </span>
          )}
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          학원 상권 지수
        </p>
        {outside && (
          <p className="mt-3 border-l-4 border-amber-400 bg-amber-50 px-3 py-2 text-xs text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
            반경 안에 대상 학생이 있는 학교가 없거나 수집 지역 밖입니다.
          </p>
        )}
      </div>

      <div className="space-y-4">
        <ScoreBar
          label="수요 지수"
          hint="대상 학생 수"
          value={scores.demand}
          color="#1e3a5f"
        />
        <ScoreBar
          label="학원 밀집 지수"
          hint="학원 좌석 수"
          value={scores.supply}
          color="#5f7a61"
        />
        <ScoreBar
          label="경쟁 강도"
          hint="학생 1명당 좌석, 높을수록 치열"
          value={scores.competition}
          color="#f59e0b"
        />
      </div>

      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-100 pt-5 text-sm dark:border-slate-800 md:col-span-2 md:grid-cols-3 lg:col-span-1 lg:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
        <Stat label="대상 학생" value={`${fmt(stats.students.target)}명`} />
        <Stat
          label="학생 1명당 좌석"
          value={stats.ratio === null ? '-' : `${stats.ratio.toFixed(1)}석`}
        />
        <Stat
          label="학교 (초·중·고)"
          value={`${stats.schoolCount.초} · ${stats.schoolCount.중} · ${stats.schoolCount.고}`}
        />
        <Stat
          label="학원 · 교습소"
          value={`${fmt(stats.academyCount.학원)} · ${fmt(stats.academyCount.교습소)}`}
        />
        <Stat label="학원 좌석 합계" value={`${fmt(stats.seats)}석`} />
        {filter.subject ? (
          <Stat
            label="그중 종합·미분류"
            value={
              filter.includeGeneral
                ? `${fmt(stats.academyCount.종합)}곳`
                : '제외'
            }
          />
        ) : (
          <Stat label="독서실" value={`${fmt(stats.academyCount.독서실)}곳`} />
        )}
      </dl>
    </div>
  );
}

function ScoreBar({
  label,
  hint,
  value,
  color,
}: {
  label: string;
  hint: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2 text-sm">
        <span className="font-semibold text-slate-800 dark:text-slate-100">
          {label}
          <span className="ml-1.5 text-xs font-normal text-slate-500 dark:text-slate-400">
            {hint}
          </span>
        </span>
        <span className="font-bold tabular-nums text-slate-900 dark:text-white">
          {value}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full transition-[width] duration-300"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="mt-0.5 font-semibold tabular-nums text-slate-900 dark:text-white">
        {value}
      </dd>
    </div>
  );
}

// ── 주요 학교 · 대형 학원 ───────────────────────────────────────────────
function DetailLists({ stats }: { stats: PointStats }) {
  const schools = stats.nearSchools.filter(s => s.target > 0).slice(0, 6);
  if (!schools.length && !stats.bigAcademies.length) return null;

  return (
    <section className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
          반경 안 주요 학교 · 대상 학생 순
        </h3>
        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
          {schools.map(({ school, distance }) => (
            <li
              key={`${school[0]}-${school[2]}`}
              className="flex items-start gap-2.5 py-2.5 text-sm first:pt-0 last:pb-0"
            >
              <span
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: KIND_COLORS[school[1]] }}
              >
                {KIND_LABELS[school[1]]}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="truncate font-medium text-slate-800 dark:text-slate-100">
                    {school[0]}
                    {school[6] && school[6] !== '일반고' && (
                      <span className="ml-1.5 text-[11px] font-normal text-slate-500 dark:text-slate-400">
                        {school[6]}
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-slate-400">
                    {(distance / 1000).toFixed(1)}km
                  </span>
                </span>
                <span className="block text-xs tabular-nums text-slate-500 dark:text-slate-400">
                  {school[5]
                    .map((n, i) => `${i + 1}학년 ${fmt(n)}`)
                    .join(' · ')}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
          반경 안 대형 학원 TOP 10 · 동시 수용 인원 순
        </h3>
        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
          {stats.bigAcademies.map(({ academy, distance }, i) => (
            <li
              key={`${academy[0]}-${academy[1]}`}
              className="flex items-center justify-between gap-3 py-2.5 text-sm first:pt-0 last:pb-0"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span className="inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="truncate font-medium text-slate-800 dark:text-slate-100">
                  {academy[0]}
                </span>
              </span>
              <span className="shrink-0 text-xs tabular-nums text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  {fmt(academy[3])}석
                </span>
                <span className="ml-2">{(distance / 1000).toFixed(1)}km</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-slate-500 dark:text-slate-400">
          교육청 등록 일시 수용 능력 인원 기준
        </p>
      </div>
    </section>
  );
}

// ── 산출 방식 ──────────────────────────────────────────────────────────
function Methodology({
  collectedAt,
  refSize,
}: {
  collectedAt?: string;
  refSize?: number;
}) {
  const w = MARKET_WEIGHTS;
  return (
    <details className="group rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
      <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-slate-900 transition-colors hover:text-sn-primary dark:text-white">
        <Info className="h-4 w-4" />
        지수 산출 방식
        <span className="ml-auto text-xs font-normal text-slate-400 group-open:hidden">
          펼치기
        </span>
      </summary>
      <div className="mt-4 space-y-3 leading-relaxed">
        <p>
          <strong className="text-slate-900 dark:text-white">수요 지수</strong>{' '}
          반경 안 학교의 대상 학년 학생 수를 더합니다. 가까울수록 크게, 반경
          끝으로 갈수록 0에 가깝게 반영합니다(선형 거리 감쇠). 초1~3은 제외하고,
          특성화·마이스터고 학생은 절반만 반영합니다.
        </p>
        <p>
          <strong className="text-slate-900 dark:text-white">
            학원 밀집 지수
          </strong>{' '}
          반경 안 학원·교습소의 동시 수용 인원을 같은 방식으로 더합니다. 수용
          인원이 공개되지 않은 곳은 같은 유형의 중앙값으로 채우고, 독서실과
          원격(온라인) 학원은 제외합니다. 과목을 고르면 그 과목 학원만 셉니다.
        </p>
        <p>
          <strong className="text-slate-900 dark:text-white">과목 분류</strong>{' '}
          교육청 데이터에는 과목 필드가 없어 학원명·교습과정·수강료 항목에 있는
          과목 키워드로 분류했습니다. 약 21%는 이름만으로 과목을 알 수 없는
          종합학원으로, 옵션에 따라 모든 과목의 경쟁 상대로 셉니다.
        </p>
        <p>
          세 지수는 8개 학원가에 400m 간격으로 깐 기준점
          {refSize ? ` ${refSize.toLocaleString('ko-KR')}곳` : ''} 안에서의
          백분위(0~100)입니다. 상권 지수 = 수요 × {w.demand * 100}% + 학원 밀집
          × {w.supply * 100}% + (100 − 경쟁 강도) × {w.room * 100}%. 등급은 S
          85+, A 70+, B 50+, C 30+.
        </p>
        <p className="text-xs text-slate-400">
          학교알리미 공시 · 나이스 교육정보 개방 포털 · 네이버 클라우드
          Geocoding
          {collectedAt ? ` · 수집 ${collectedAt.slice(0, 10)}` : ''}
        </p>
      </div>
    </details>
  );
}
