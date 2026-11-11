/**
 * SN DataLAB · 학원상권 지수 계산
 *
 * 데이터: public/data/academy-market/market.json (scripts/collect-academy-market.cjs가 생성)
 *
 * 한 지점(위도·경도)과 반경 R을 받으면
 *  1) 수요:   반경 안 학교의 대상 학년 학생 수 × 거리 가중치
 *  2) 공급:   반경 안 학원·교습소(선택한 과목)의 동시 수용 인원 × 거리 가중치
 *  3) 경쟁도: 공급 ÷ 수요 (학생 1명당 학원 좌석 수)
 * 를 계산하고, 8개 지역 전체에 촘촘히 깐 기준점들의 분포 안에서 백분위(0~100)로 바꾼다.
 *
 * 거리 가중치는 선형 감쇠: 중심 1.0 → 반경 끝 0.
 */

export type SchoolRow = [
  name: string,
  kind: 0 | 1 | 2, // 0 초 · 1 중 · 2 고
  lat: number,
  lng: number,
  district: number,
  grades: number[],
  hsType: string, // 고교 유형(일반고·특성화고 등), 초·중은 ''
];

export type AcademyRow = [
  name: string,
  lat: number,
  lng: number,
  capacity: number, // 동시 수용 인원(0이면 미공개)
  type: 0 | 1, // 0 학원 · 1 교습소
  realm: number, // realms 인덱스
  district: number,
  subjects: number, // 과목 비트마스크(MarketData.subjects 순서), 0 = 종합·미분류
];

export interface MarketData {
  v: number;
  collectedAt: string;
  districts: { id: string; name: string }[];
  realms: string[];
  subjects: string[];
  schools: SchoolRow[];
  academies: AcademyRow[];
}

// ── 대상 학년 ───────────────────────────────────────────────────────────
export type TargetId = 'all' | 'elementary' | 'middle' | 'high' | 'exam';

/** 학교급별 학년 가중치. 초1~3은 학원 수요가 적어 '전체'에서도 제외한다. */
export const TARGETS: Record<
  TargetId,
  { label: string; short: string; weights: [number[], number[], number[]] }
> = {
  all: {
    label: '초4~고3 전체',
    short: '전체',
    weights: [
      [0, 0, 0, 1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  elementary: {
    label: '초등 4~6학년',
    short: '초등',
    weights: [
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
  middle: {
    label: '중학생',
    short: '중등',
    weights: [
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  },
  high: {
    label: '고등학생',
    short: '고등',
    weights: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
  },
  exam: {
    label: '입시(고2·고3)',
    short: '입시',
    weights: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0],
      [0, 1, 1],
    ],
  },
};

/** 특성화·마이스터고는 사교육 참여율이 낮아 수요를 절반만 반영한다. */
function hsTypeFactor(hsType: string): number {
  return /특성화|마이스터/.test(hsType) ? 0.5 : 1;
}

export function targetStudents(school: SchoolRow, target: TargetId): number {
  const w = TARGETS[target].weights[school[1]];
  let sum = 0;
  school[5].forEach((n, i) => (sum += n * (w[i] ?? 0)));
  return sum * hsTypeFactor(school[6]);
}

// ── 과목 필터 ───────────────────────────────────────────────────────────
/** 화면에 노출하는 과목(데이터의 subjects 이름과 같아야 함). '기타'는 필터로 노출하지 않는다. */
export const SUBJECT_FILTERS = [
  '수학',
  '영어',
  '국어',
  '과학',
  '사회',
  '컨설팅',
] as const;
export type SubjectName = (typeof SUBJECT_FILTERS)[number];

export interface AcademyFilter {
  subject: SubjectName | null; // null = 전체 과목
  includeGeneral: boolean; // 과목을 고른 경우 종합·미분류 학원도 경쟁 상대로 셀지
}

export const ALL_SUBJECTS: AcademyFilter = {
  subject: null,
  includeGeneral: true,
};

// ── 대표 상권(지역 탭) ──────────────────────────────────────────────────
export interface Hub {
  id: string;
  name: string;
  area: string;
  lat: number;
  lng: number;
}

/** 중심점은 각 지역 학원 분포의 밀집 중심(수용 인원 가중)을 데이터로 찾은 값. 판교만 판교역 기준. */
export const HUBS: Hub[] = [
  {
    id: 'daechi',
    name: '대치',
    area: '서울 강남구',
    lat: 37.4994,
    lng: 127.0585,
  },
  {
    id: 'mokdong',
    name: '목동',
    area: '서울 양천구',
    lat: 37.5242,
    lng: 126.8712,
  },
  {
    id: 'junggye',
    name: '중계',
    area: '서울 노원구',
    lat: 37.6502,
    lng: 127.0769,
  },
  {
    id: 'bundang',
    name: '분당',
    area: '성남 분당구',
    lat: 37.3761,
    lng: 127.1153,
  },
  {
    id: 'pangyo',
    name: '판교',
    area: '성남 분당구',
    lat: 37.3948,
    lng: 127.1112,
  },
  {
    id: 'pyeongchon',
    name: '평촌',
    area: '안양 동안구',
    lat: 37.392,
    lng: 126.9538,
  },
  {
    id: 'gwanggyo',
    name: '광교',
    area: '수원 영통구',
    lat: 37.2878,
    lng: 127.0501,
  },
  {
    id: 'beomeo',
    name: '범어',
    area: '대구 수성구',
    lat: 35.8581,
    lng: 128.6372,
  },
];

// ── 거리·공간 인덱스 ───────────────────────────────────────────────────
const M_PER_DEG_LAT = 110540;

export function distanceM(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) {
  const dx =
    (lng2 - lng1) * Math.cos(((lat1 + lat2) / 2) * (Math.PI / 180)) * 111320;
  const dy = (lat2 - lat1) * M_PER_DEG_LAT;
  return Math.hypot(dx, dy);
}

/** 약 1km 격자 버킷. 반경 검색 시 주변 칸만 훑는다. */
const CELL_DEG = 0.01;
type Grid<T> = Map<string, T[]>;
const cellKey = (lat: number, lng: number) =>
  `${Math.floor(lat / CELL_DEG)}:${Math.floor(lng / CELL_DEG)}`;

function buildGrid<T>(
  items: T[],
  getLat: (t: T) => number,
  getLng: (t: T) => number
): Grid<T> {
  const grid: Grid<T> = new Map();
  for (const item of items) {
    const k = cellKey(getLat(item), getLng(item));
    const bucket = grid.get(k);
    if (bucket) bucket.push(item);
    else grid.set(k, [item]);
  }
  return grid;
}

function* nearby<T>(grid: Grid<T>, lat: number, lng: number, radiusM: number) {
  const span = Math.ceil(radiusM / 800) + 1; // 0.01° ≈ 0.9~1.1km
  const ci = Math.floor(lat / CELL_DEG);
  const cj = Math.floor(lng / CELL_DEG);
  for (let i = ci - span; i <= ci + span; i++) {
    for (let j = cj - span; j <= cj + span; j++) {
      const bucket = grid.get(`${i}:${j}`);
      if (bucket) yield* bucket;
    }
  }
}

// ── 계산 엔진 ──────────────────────────────────────────────────────────
export interface PointStats {
  demand: number; // 가중 학생 수
  supply: number; // 가중 학원 좌석 수
  ratio: number | null; // supply / demand
  students: { 초: number; 중: number; 고: number; target: number }; // 반경 안 실제 학생 수(가중치 없음)
  schoolCount: { 초: number; 중: number; 고: number };
  academyCount: { 학원: number; 교습소: number; 독서실: number; 종합: number };
  seats: number; // 반경 안 실제 좌석 수(가중치 없음)
  nearSchools: { school: SchoolRow; distance: number; target: number }[];
  bigAcademies: { academy: AcademyRow; distance: number }[];
}

export interface Scores {
  market: number; // 종합 상권 지수
  demand: number; // 수요 지수
  supply: number; // 사교육 밀집 지수
  competition: number; // 경쟁 강도 지수 (높을수록 학생 1명당 학원 좌석이 많음)
  grade: 'S' | 'A' | 'B' | 'C' | 'D';
}

export interface Reference {
  demand: number[];
  supply: number[];
  ratio: number[];
  size: number;
}

/** 종합 상권 지수 가중치: 수요 50 · 학원가 집적 25 · 여유도(100−경쟁) 25 */
export const MARKET_WEIGHTS = { demand: 0.5, supply: 0.25, room: 0.25 };

export class MarketIndex {
  readonly data: MarketData;
  private readonly schoolGrid: Grid<SchoolRow>;
  private readonly academyGrid: Grid<AcademyRow>;
  private readonly studyRoomRealm: number;
  private readonly defaultCapacity: [number, number];
  private readonly referenceCache = new Map<string, Reference>();

  constructor(data: MarketData) {
    this.data = data;
    this.schoolGrid = buildGrid(
      data.schools,
      s => s[2],
      s => s[3]
    );
    this.academyGrid = buildGrid(
      data.academies,
      a => a[1],
      a => a[2]
    );
    this.studyRoomRealm = data.realms.indexOf('독서실');
    // 수용 인원 미공개(0)인 곳은 같은 유형의 중앙값으로 채운다.
    const med = (type: 0 | 1) => {
      const caps = data.academies
        .filter(a => a[4] === type && a[3] > 0 && a[5] !== this.studyRoomRealm)
        .map(a => a[3])
        .sort((x, y) => x - y);
      return caps.length ? caps[caps.length >> 1] : type === 0 ? 50 : 9;
    };
    this.defaultCapacity = [med(0), med(1)];
  }

  capacityOf(a: AcademyRow) {
    return a[3] > 0 ? a[3] : this.defaultCapacity[a[4]];
  }

  isStudyRoom(a: AcademyRow) {
    return a[5] === this.studyRoomRealm;
  }

  subjectBit(name: string) {
    const i = this.data.subjects.indexOf(name);
    return i < 0 ? 0 : 1 << i;
  }

  /** 학원이 과목 필터에 들어가는지(독서실은 항상 제외) */
  matches(a: AcademyRow, filter: AcademyFilter) {
    if (this.isStudyRoom(a)) return false;
    if (!filter.subject) return true;
    const mask = a[7] ?? 0;
    if (mask & this.subjectBit(filter.subject)) return true;
    return mask === 0 && filter.includeGeneral;
  }

  /** 반경 안 과목별 학원·교습소 수(독서실 제외). 복수 과목 학원은 각 과목에 모두 센다. */
  subjectCounts(lat: number, lng: number, radiusM: number) {
    const counts: Record<string, number> = { 전체: 0, 종합: 0 };
    for (const name of this.data.subjects) counts[name] = 0;
    for (const a of nearby(this.academyGrid, lat, lng, radiusM)) {
      if (this.isStudyRoom(a)) continue;
      if (distanceM(lat, lng, a[1], a[2]) >= radiusM) continue;
      counts.전체 += 1;
      const mask = a[7] ?? 0;
      if (!mask) counts.종합 += 1;
      this.data.subjects.forEach((name, i) => {
        if (mask & (1 << i)) counts[name] += 1;
      });
    }
    return counts;
  }

  /** 수요·공급만 빠르게 계산(기준 분포용) */
  quick(
    lat: number,
    lng: number,
    radiusM: number,
    target: TargetId,
    filter: AcademyFilter
  ) {
    let demand = 0;
    let supply = 0;
    for (const s of nearby(this.schoolGrid, lat, lng, radiusM)) {
      const d = distanceM(lat, lng, s[2], s[3]);
      if (d < radiusM) demand += targetStudents(s, target) * (1 - d / radiusM);
    }
    for (const a of nearby(this.academyGrid, lat, lng, radiusM)) {
      if (!this.matches(a, filter)) continue;
      const d = distanceM(lat, lng, a[1], a[2]);
      if (d < radiusM) supply += this.capacityOf(a) * (1 - d / radiusM);
    }
    return { demand, supply };
  }

  stats(
    lat: number,
    lng: number,
    radiusM: number,
    target: TargetId,
    filter: AcademyFilter = ALL_SUBJECTS
  ): PointStats {
    const out: PointStats = {
      demand: 0,
      supply: 0,
      ratio: null,
      students: { 초: 0, 중: 0, 고: 0, target: 0 },
      schoolCount: { 초: 0, 중: 0, 고: 0 },
      academyCount: { 학원: 0, 교습소: 0, 독서실: 0, 종합: 0 },
      seats: 0,
      nearSchools: [],
      bigAcademies: [],
    };
    const kindLabel = ['초', '중', '고'] as const;

    for (const s of nearby(this.schoolGrid, lat, lng, radiusM)) {
      const d = distanceM(lat, lng, s[2], s[3]);
      if (d >= radiusM) continue;
      const t = targetStudents(s, target);
      const total = s[5].reduce((a, b) => a + b, 0);
      const k = kindLabel[s[1]];
      out.demand += t * (1 - d / radiusM);
      out.students[k] += total;
      out.students.target += t;
      out.schoolCount[k] += 1;
      out.nearSchools.push({ school: s, distance: d, target: t });
    }

    for (const a of nearby(this.academyGrid, lat, lng, radiusM)) {
      const d = distanceM(lat, lng, a[1], a[2]);
      if (d >= radiusM) continue;
      if (this.isStudyRoom(a)) {
        out.academyCount.독서실 += 1;
        continue;
      }
      if (!this.matches(a, filter)) continue;
      const cap = this.capacityOf(a);
      out.supply += cap * (1 - d / radiusM);
      out.seats += cap;
      out.academyCount[a[4] === 0 ? '학원' : '교습소'] += 1;
      if (filter.subject && !(a[7] ?? 0)) out.academyCount.종합 += 1;
      if (a[4] === 0) out.bigAcademies.push({ academy: a, distance: d });
    }

    out.ratio = out.demand > 0 ? out.supply / out.demand : null;
    out.nearSchools.sort(
      (x, y) => y.target - x.target || x.distance - y.distance
    );
    out.bigAcademies.sort((x, y) => y.academy[3] - x.academy[3]);
    out.bigAcademies = out.bigAcademies.slice(0, 10);
    return out;
  }

  /**
   * 기준 분포: 8개 지역 학교 주변에 약 400m 간격 격자를 깔고,
   * 반경 안에 대상 학생이 있는 지점만 모은다. 조건별로 캐시한다.
   */
  reference(
    radiusM: number,
    target: TargetId,
    filter: AcademyFilter = ALL_SUBJECTS
  ): Reference {
    const cacheKey = `${radiusM}|${target}|${filter.subject ?? '*'}|${filter.includeGeneral}`;
    const cached = this.referenceCache.get(cacheKey);
    if (cached) return cached;

    const STEP_LAT = 400 / M_PER_DEG_LAT;
    const points: { demand: number; supply: number }[] = [];
    const seen = new Set<string>();

    for (const s of this.data.schools) {
      const stepLng = STEP_LAT / Math.cos((s[2] * Math.PI) / 180);
      const ci = Math.round(s[2] / STEP_LAT);
      const cj = Math.round(s[3] / stepLng);
      for (let i = ci - 3; i <= ci + 3; i++) {
        for (let j = cj - 3; j <= cj + 3; j++) {
          const key = `${i}:${j}`;
          if (seen.has(key)) continue;
          seen.add(key);
          const q = this.quick(
            i * STEP_LAT,
            j * stepLng,
            radiusM,
            target,
            filter
          );
          if (q.demand > 0) points.push(q);
        }
      }
    }

    const sortNum = (arr: number[]) => arr.sort((a, b) => a - b);
    const ref: Reference = {
      demand: sortNum(points.map(p => p.demand)),
      supply: sortNum(points.map(p => p.supply)),
      ratio: sortNum(points.map(p => p.supply / p.demand)),
      size: points.length,
    };
    this.referenceCache.set(cacheKey, ref);
    return ref;
  }

  score(stats: PointStats, ref: Reference): Scores {
    const demand = percentile(ref.demand, stats.demand);
    const supply = percentile(ref.supply, stats.supply);
    const competition =
      stats.ratio === null ? 0 : percentile(ref.ratio, stats.ratio);
    const market =
      stats.demand > 0
        ? Math.round(
            MARKET_WEIGHTS.demand * demand +
              MARKET_WEIGHTS.supply * supply +
              MARKET_WEIGHTS.room * (100 - competition)
          )
        : 0;
    return { market, demand, supply, competition, grade: gradeOf(market) };
  }
}

/** 정렬된 배열에서 value 이하 비율(0~100) */
export function percentile(sorted: number[], value: number): number {
  if (!sorted.length) return 0;
  let lo = 0;
  let hi = sorted.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (sorted[mid] <= value) lo = mid + 1;
    else hi = mid;
  }
  return Math.round((lo / sorted.length) * 100);
}

export function gradeOf(score: number): Scores['grade'] {
  if (score >= 85) return 'S';
  if (score >= 70) return 'A';
  if (score >= 50) return 'B';
  if (score >= 30) return 'C';
  return 'D';
}

/** 서버·클라이언트 공용: 학원가별 지수를 한 번에 계산 */
export function rankHubs(
  index: MarketIndex,
  radiusM: number,
  target: TargetId,
  filter: AcademyFilter = ALL_SUBJECTS
) {
  const ref = index.reference(radiusM, target, filter);
  return HUBS.map(hub => {
    const stats = index.stats(hub.lat, hub.lng, radiusM, target, filter);
    return { hub, stats, scores: index.score(stats, ref) };
  }).sort((a, b) => b.scores.market - a.scores.market);
}
