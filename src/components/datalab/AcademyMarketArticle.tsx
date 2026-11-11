import fs from 'fs';
import path from 'path';
import {
  Building2,
  Compass,
  Database,
  GraduationCap,
  MapPinned,
  MousePointerClick,
  SlidersHorizontal,
  TriangleAlert,
} from 'lucide-react';
import {
  MARKET_WEIGHTS,
  MarketIndex,
  rankHubs,
  type MarketData,
} from '@/lib/academy-market-index';

/**
 * 학원 상권 분석기 본문(서버 컴포넌트).
 * 본문의 수치는 public/data/academy-market/market.json 에서 직접 계산하므로
 * 데이터를 다시 수집하면 자동으로 갱신된다.
 */

function loadData(): MarketData | null {
  try {
    const file = path.join(
      process.cwd(),
      'public',
      'data',
      'academy-market',
      'market.json'
    );
    return JSON.parse(fs.readFileSync(file, 'utf8')) as MarketData;
  } catch {
    return null;
  }
}

const fmt = (n: number) => Math.round(n).toLocaleString('ko-KR');

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5f7a61]">
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-10 max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-3xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {lead}
        </p>
      )}
    </header>
  );
}

export default function AcademyMarketArticle() {
  const data = loadData();
  if (!data) return null;

  const index = new MarketIndex(data);
  const radius = 1500;
  const all = rankHubs(index, radius, 'all');
  const exam = rankHubs(index, radius, 'exam');
  const byId = (list: typeof all, id: string) =>
    list.find(r => r.hub.id === id)!;

  const daechi = byId(all, 'daechi');
  const lowestRatio = [...all]
    .filter(r => r.stats.ratio !== null)
    .sort((a, b) => a.stats.ratio! - b.stats.ratio!)[0];
  const examTop = exam[0];
  const examBottom = exam[exam.length - 1];
  const allTop = all[0];
  const maxRatio = Math.max(...all.map(r => r.stats.ratio ?? 0));
  const ratioSorted = [...all].sort(
    (a, b) => (b.stats.ratio ?? 0) - (a.stats.ratio ?? 0)
  );

  const academyCount = data.academies.filter(a => !index.isStudyRoom(a)).length;
  const collected = data.collectedAt.slice(0, 10).replace(/-/g, '.');

  return (
    <article className="text-slate-700 dark:text-slate-300">
      {/* 01 배경 */}
      <section className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="01 · Background"
              title="학원 자리, 감이 아니라 숫자로 봅니다"
            />
            <div className="max-w-2xl space-y-5 text-base leading-[1.8]">
              <p>
                학원 자리를 볼 때 흔히 &ldquo;학원가니까 좋다&rdquo;,
                &ldquo;아파트가 많으니까 좋다&rdquo;고 말합니다. 그런데 그
                동네에 실제로 중·고등학생이 몇 명인지, 이미 학원 좌석이 몇 석
                깔려 있는지는 숫자로 보기 어렵습니다.
              </p>
              <p>
                학교알리미에는 학교마다 학년별 학생 수가 공시되고, 나이스에는
                교육청에 등록된 모든 학원·교습소와 수용 인원이 올라와 있습니다.
                둘 다 누구나 볼 수 있는 공공데이터입니다. SN DataLAB은 이 두
                데이터를 지도 위에 겹쳐, 한 지점의 학원 상권을 하나의 지수로
                보여 주는 도구를 만들었습니다.
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-3 divide-x divide-slate-200 self-start rounded-xl border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900 lg:grid-cols-1 lg:divide-x-0 lg:divide-y">
            {[
              {
                icon: GraduationCap,
                value: fmt(data.schools.length),
                unit: '곳',
                label: '분석한 초·중·고',
              },
              {
                icon: Building2,
                value: fmt(academyCount),
                unit: '곳',
                label: '학원·교습소',
              },
              { icon: MapPinned, value: '8', unit: '곳', label: '주요 학원가' },
            ].map(({ icon: Icon, value, unit, label }) => (
              <div key={label} className="p-5 lg:p-6">
                <Icon className="mb-3 h-5 w-5 text-[#5f7a61]" />
                <dd className="text-2xl font-bold tabular-nums tracking-tight text-slate-900 dark:text-white md:text-3xl">
                  {value}
                  <span className="ml-0.5 text-base font-semibold text-slate-500">
                    {unit}
                  </span>
                </dd>
                <dt className="mt-1 text-xs text-slate-500 dark:text-slate-400 md:text-sm">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 02 사용법 */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800 md:py-20">
        <SectionTitle
          eyebrow="02 · How to use"
          title="세 가지만 고르면 됩니다"
        />
        <ol className="grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700 md:grid-cols-3">
          {[
            {
              icon: MousePointerClick,
              title: '지점 고르기',
              body: '학원가 버튼을 누르면 그 학원가의 밀집 중심으로 이동합니다. 지도 아무 곳이나 클릭해도 그 지점을 분석합니다.',
            },
            {
              icon: SlidersHorizontal,
              title: '대상과 과목 고르기',
              body: '내 학원이 가르치는 학년과 과목을 고르세요. 고등부 수학학원이라면 "고등학생"과 "수학"입니다. 같은 자리라도 조건에 따라 지수가 달라집니다.',
            },
            {
              icon: Compass,
              title: '반경 정하기',
              body: '학생이 걸어서 또는 셔틀로 다닐 만한 거리입니다. 기본값 1.5km를 권하고, 동네 보습학원이라면 1km로 좁혀 보세요.',
            },
          ].map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="bg-white p-6 dark:bg-slate-900 md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold tabular-nums text-slate-400">
                  0{i + 1}
                </span>
                <Icon className="h-5 w-5 text-[#5f7a61]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 03 지수 구성 */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800 md:py-20">
        <SectionTitle
          eyebrow="03 · Methodology"
          title="상권 지수는 세 개의 지수로 만듭니다"
          lead="세 지수 모두 8개 학원가 전역에 400m 간격으로 깐 기준점 약 3,200곳 가운데 몇 %보다 높은지를 나타내는 백분위(0~100)입니다."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: '수요 지수',
              color: '#1e3a5f',
              what: '반경 안 대상 학년 학생 수',
              high: '가르칠 학생이 많다',
            },
            {
              name: '학원 밀집 지수',
              color: '#5f7a61',
              what: '반경 안 학원·교습소 좌석 수',
              high: '학부모가 학원을 보러 오는 검증된 학원가다',
            },
            {
              name: '경쟁 강도',
              color: '#f59e0b',
              what: '학생 1명당 학원 좌석 수',
              high: '좌석이 학생보다 많아 경쟁이 치열하다',
            },
          ].map(c => (
            <div
              key={c.name}
              className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <span
                className="mb-4 block h-1 w-8 rounded-full"
                style={{ background: c.color }}
              />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {c.name}
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">
                    측정
                  </dt>
                  <dd className="mt-0.5 text-slate-800 dark:text-slate-100">
                    {c.what}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">
                    높으면
                  </dt>
                  <dd className="mt-0.5 text-slate-800 dark:text-slate-100">
                    {c.high}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                학원 상권 지수
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                수요를 가장 크게 보고, 학원가 집적 효과와 경쟁 여유를 함께
                반영합니다. 학원이 몰린 곳은 가점을 받지만 좌석이 학생 수를 크게
                넘으면 감점됩니다.
              </p>
            </div>
            <div className="w-full md:max-w-sm">
              <div className="flex h-9 overflow-hidden rounded-md text-xs font-semibold text-white">
                <div
                  className="flex items-center justify-center bg-[#1e3a5f]"
                  style={{ width: `${MARKET_WEIGHTS.demand * 100}%` }}
                >
                  수요 {MARKET_WEIGHTS.demand * 100}%
                </div>
                <div
                  className="flex items-center justify-center bg-[#5f7a61]"
                  style={{ width: `${MARKET_WEIGHTS.supply * 100}%` }}
                >
                  밀집 {MARKET_WEIGHTS.supply * 100}%
                </div>
                <div
                  className="flex items-center justify-center bg-amber-500"
                  style={{ width: `${MARKET_WEIGHTS.room * 100}%` }}
                >
                  여유 {MARKET_WEIGHTS.room * 100}%
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                여유 = 100 − 경쟁 강도 · 등급 S 85+ · A 70+ · B 50+ · C 30+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 발견 */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800 md:py-20">
        <SectionTitle
          eyebrow="04 · Findings"
          title="처음 돌려 보고 눈에 띈 것"
          lead={`반경 1.5km, 전체 과목 기준입니다. 초4~고3 전체로 보면 ${allTop.hub.name}(${allTop.scores.market}점)이 1위입니다.`}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              metric: `${daechi.stats.ratio?.toFixed(1)}석`,
              label: '대치 · 학생 1명당 학원 좌석',
              body: `반경 안 학생은 ${fmt(daechi.stats.students.target)}명인데 학원 좌석은 ${fmt(daechi.stats.seats)}석입니다. 서울 전역과 경기 남부의 학생이 모인다는 뜻입니다. 학원 밀집은 ${daechi.scores.supply}점으로 최상위지만 경쟁 강도도 ${daechi.scores.competition}점이라 상권 지수는 ${daechi.scores.market}점에 그칩니다.`,
            },
            {
              metric: `${lowestRatio.stats.ratio?.toFixed(1)}석`,
              label: `${lowestRatio.hub.name} · 학생 1명당 학원 좌석`,
              body: `8대 학원가 중 가장 낮습니다. 반경 안 학생은 ${fmt(lowestRatio.stats.students.target)}명인데 학원·교습소는 ${fmt(lowestRatio.stats.academyCount.학원 + lowestRatio.stats.academyCount.교습소)}곳뿐입니다. 아직 학원가가 덜 형성된, 기회가 있는 상권으로 읽힙니다.`,
            },
            {
              metric: `${examTop.scores.market}점`,
              label: `${examTop.hub.name} · 입시(고2·고3) 기준 1위`,
              body: `대상을 고2·고3으로 바꾸면 순위가 달라집니다. 반경 안 고2·고3 학생이 ${fmt(examTop.stats.students.target)}명으로, 고등학교가 많은 곳이 위로 올라옵니다.`,
            },
            {
              metric: `${examBottom.scores.market}점`,
              label: `${examBottom.hub.name} · 입시(고2·고3) 기준 최하위`,
              body: `반경 안 고2·고3 학생이 ${fmt(examBottom.stats.students.target)}명에 그칩니다. 같은 학원가라도 가르치는 학년에 따라 평가가 크게 달라질 수 있습니다.`,
            },
          ].map(f => (
            <div
              key={f.label}
              className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:p-8"
            >
              <p className="text-4xl font-bold tabular-nums tracking-tight text-slate-900 dark:text-white">
                {f.metric}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#5f7a61]">
                {f.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:p-8">
          <h3 className="mb-6 text-sm font-semibold text-slate-900 dark:text-white">
            학원가별 학생 1명당 학원 좌석
          </h3>
          <ul className="space-y-3">
            {ratioSorted.map(r => {
              const v = r.stats.ratio ?? 0;
              return (
                <li
                  key={r.hub.id}
                  className="grid grid-cols-[56px_minmax(0,1fr)_52px] items-center gap-3 text-sm"
                >
                  <span className="font-medium text-slate-800 dark:text-slate-100">
                    {r.hub.name}
                  </span>
                  <span className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <span
                      className="block h-full rounded-full bg-[#5f7a61]"
                      style={{ width: `${Math.max(2, (v / maxRatio) * 100)}%` }}
                    />
                  </span>
                  <span className="text-right tabular-nums text-slate-600 dark:text-slate-300">
                    {v.toFixed(1)}석
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 05 한계 */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800 md:py-20">
        <SectionTitle eyebrow="05 · Limitations" title="이렇게 읽어 주세요" />
        <ul className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {[
            {
              title: '학생 수는 학교 위치 기준',
              body: '학생이 실제로 사는 곳과는 다를 수 있습니다. 다음 업데이트에서 아파트 단지별 세대수를 더해 거주 기준 수요를 보완합니다.',
            },
            {
              title: '구 경계 부근은 낮게 나올 수 있음',
              body: '수집 범위는 강남·양천·노원·분당·동안·영통·수지·수성구입니다. 대치동 옆 서초·송파처럼 이웃 구의 학교와 학원은 빠져 있습니다.',
            },
            {
              title: '좌석은 등록 수용 인원',
              body: '교육청에 등록된 일시 수용 능력 인원입니다. 실제 수강생 수와 다르며, 등록 정보가 갱신되지 않은 학원도 있습니다.',
            },
            {
              title: '과목은 키워드로 분류',
              body: '학원명·교습과정·수강료 항목의 과목 키워드로 분류했습니다. 약 21%는 이름만으로 과목을 알 수 없는 종합학원입니다.',
            },
          ].map(item => (
            <li key={item.title} className="flex gap-4">
              <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 출처 */}
      <footer className="flex flex-col gap-3 border-t border-slate-200 py-8 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <span className="inline-flex items-center gap-2">
          <Database className="h-4 w-4" />
          학교알리미 공시정보 · 나이스 교육정보 개방 포털 학원·교습소 정보 ·
          네이버 클라우드 Maps Geocoding
        </span>
        <span className="tabular-nums">데이터 수집 {collected}</span>
      </footer>
    </article>
  );
}
