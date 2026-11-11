#!/usr/bin/env node
/**
 * SN DataLAB · 학원상권 분석기 데이터 수집
 *
 * 수집 대상
 *  - 학교알리미: 학교 기본정보(apiType=0, 좌표 포함) + 학년별 학생 수(apiType=09)
 *  - 나이스: 학원·교습소 정보(acaInsTiInfo) → 네이버 Geocoding으로 좌표 변환
 *  - (보류) 국토부 공동주택 단지·세대수: API가 HTTP_ERROR(04)로 응답 중
 *
 * 출력
 *  - data/academy-market/{schools,academies,meta}.json  : 전체 필드 원본(연구·검증용, 배포 안 됨)
 *  - public/data/academy-market/market.json             : 페이지가 불러오는 압축본
 * 캐시: scripts/cache/geocode-academy-market.json (주소 → 좌표, 재실행 시 재호출 방지)
 *
 * 필요한 .env.local 키: SCHOOLINFO_API_KEY, NEIS_API_KEY,
 *                     NCP_MAPS_CLIENT_ID, NCP_MAPS_CLIENT_SECRET
 *
 * 사용: node scripts/collect-academy-market.cjs [--only=gangnam,mokdong] [--skip-geocode]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'data', 'academy-market');
const PUBLIC_DIR = path.join(ROOT, 'public', 'data', 'academy-market');
const CACHE_FILE = path.join(ROOT, 'scripts', 'cache', 'geocode-academy-market.json');

// ── 지역 설정 ──────────────────────────────────────────────────────────
// 데이터 수집 단위는 시군구. 경기도 나이스 데이터는 '시' 단위로만 조회되므로
// 도로명 주소에 구 이름이 포함된 것만 남긴다(addrIncludes).
const DISTRICTS = [
  { id: 'gangnam', name: '서울 강남구', sido: '11', sgg: '11680', atpt: 'B10', neisZone: '강남구' },
  { id: 'yangcheon', name: '서울 양천구', sido: '11', sgg: '11470', atpt: 'B10', neisZone: '양천구' },
  { id: 'nowon', name: '서울 노원구', sido: '11', sgg: '11350', atpt: 'B10', neisZone: '노원구' },
  { id: 'bundang', name: '성남 분당구', sido: '41', sgg: '41135', atpt: 'J10', neisZone: '성남시', addrIncludes: '분당구' },
  { id: 'dongan', name: '안양 동안구', sido: '41', sgg: '41173', atpt: 'J10', neisZone: '안양시', addrIncludes: '동안구' },
  { id: 'yeongtong', name: '수원 영통구', sido: '41', sgg: '41117', atpt: 'J10', neisZone: '수원시', addrIncludes: '영통구' },
  { id: 'suji', name: '용인 수지구', sido: '41', sgg: '41465', atpt: 'J10', neisZone: '용인시', addrIncludes: '수지구' },
  { id: 'suseong', name: '대구 수성구', sido: '27', sgg: '27260', atpt: 'D10', neisZone: '수성구' },
];

const SCHOOL_KINDS = { '02': '초', '03': '중', '04': '고' };

// 사교육(학습) 관련 분야만 수집. 예능·기예·직업기술 등은 제외.
const ACADEMY_REALMS = new Set(['입시.검정 및 보습', '국제화', '독서실']);

// ── 과목 분류 ──
// 나이스에는 과목 필드가 없고 교습과정이 '보습·논술'처럼 뭉뚱그려져 있다.
// 학원명·교습과정 목록·수강료 항목명에 들어 있는 과목 키워드로 분류한다(복수 과목 가능).
// 비트 순서는 src/lib/academy-market-index.ts 의 SUBJECTS 와 같아야 한다.
const SUBJECT_RULES = [
  ['수학', /수학|math|매쓰|매스|수리|산수|연산/i],
  ['영어', /영어|english|잉글|리딩|토플|토익|텝스|스피킹|파닉스|reading|toefl|ielts|sat\b/i],
  ['국어', /국어|논술|독서|문학|글쓰기|작문|비문학|언어/],
  ['과학', /과학|물리|화학|생명|생물|지구과학|science/i],
  ['사회', /사회|역사|한국사|지리|경제|윤리|정치/],
  ['컨설팅', /컨설팅|진학상담|진학지도|입시상담|입시전략/],
  ['기타', /중국어|일본어|독일어|프랑스어|스페인어|한자|한문|코딩|소프트웨어|컴퓨터|스피치|웅변/],
];

function classifySubjects(texts, realm, courseNames) {
  // '보습·논술', '보습'은 교육청 공통 분류명이라 과목 판단에서 제외
  const text = texts.join(' ').replace(/보습·논술|보습/g, ' ');
  const hits = new Set(SUBJECT_RULES.filter(([, re]) => re.test(text)).map(([k]) => k));
  if ([...courseNames].some(c => /진학상담지도|진학지도/.test(c))) hits.add('컨설팅');
  // 국제화(실용외국어) 분야는 다른 외국어가 명시되지 않았으면 영어로 본다
  const foreign = /중국어|일본어|독일어|프랑스어|스페인어/.test(text);
  if ((realm === '국제화' || /어학/.test(text) || [...courseNames].some(c => /실용외국어|외국어/.test(c))) && !foreign) hits.add('영어');
  return SUBJECT_RULES.map(([k]) => k).filter(k => hits.has(k));
}

// ── env ────────────────────────────────────────────────────────────────
function loadEnv() {
  const file = path.join(ROOT, '.env.local');
  const env = {};
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  }
  const required = ['SCHOOLINFO_API_KEY', 'NEIS_API_KEY', 'NCP_MAPS_CLIENT_ID', 'NCP_MAPS_CLIENT_SECRET'];
  const missing = required.filter(k => !env[k]);
  if (missing.length) throw new Error(`.env.local에 키가 없습니다: ${missing.join(', ')}`);
  return env;
}

const args = process.argv.slice(2);
const onlyArg = args.find(a => a.startsWith('--only='));
const ONLY = onlyArg ? new Set(onlyArg.slice(7).split(',')) : null;
const SKIP_GEOCODE = args.includes('--skip-geocode');

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchJson(url, options = {}, retries = 3) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, options);
      const text = await res.text();
      return { status: res.status, json: JSON.parse(text) };
    } catch (e) {
      if (i === retries) throw e;
      await sleep(800 * (i + 1));
    }
  }
}

// ── 학교알리미 ─────────────────────────────────────────────────────────
async function schoolinfo(env, apiType, d, kind, year) {
  const url =
    `https://www.schoolinfo.go.kr/openApi.do?apiKey=${encodeURIComponent(env.SCHOOLINFO_API_KEY)}` +
    `&apiType=${apiType}&pbanYr=${year}&sidoCode=${d.sido}&sggCode=${d.sgg}&schulKndCode=${kind}`;
  const { json } = await fetchJson(url);
  return json.resultCode === 'success' ? json.list || [] : [];
}

async function collectSchools(env, d) {
  const out = [];
  for (const [kind, kindLabel] of Object.entries(SCHOOL_KINDS)) {
    // 공시연도: 최신(올해) 우선, 없으면 전년도
    const thisYear = new Date().getFullYear();
    let year = thisYear;
    let basics = await schoolinfo(env, '0', d, kind, year);
    if (!basics.length) basics = await schoolinfo(env, '0', d, kind, (year = thisYear - 1));
    let counts = await schoolinfo(env, '09', d, kind, year);
    let countsYear = year;
    if (!counts.length) counts = await schoolinfo(env, '09', d, kind, (countsYear = year - 1));

    const countMap = new Map(counts.map(c => [c.SCHUL_CODE, c]));
    const gradeCount = kind === '02' ? 6 : 3;

    for (const b of basics) {
      if (b.CLOSE_YN === 'Y') continue;
      const c = countMap.get(b.SCHUL_CODE);
      const grades = c ? Array.from({ length: gradeCount }, (_, i) => Number(c[`COL_S${i + 1}`]) || 0) : null;
      out.push({
        code: b.SCHUL_CODE,
        name: b.SCHUL_NM,
        kind: kindLabel,
        hsType: b.HS_KND_SC_NM || null, // 일반고·특목고·자율고 등 (고교만)
        found: b.FOND_SC_CODE, // 국립·공립·사립
        coed: b.COEDU_SC_CODE, // 남녀공학·남·여
        district: d.id,
        address: b.SCHUL_RDNMA || b.ADRES_BRKDN || '',
        lat: Number(b.LTTUD) || null,
        lng: Number(b.LGTUD) || null,
        grades, // 학년별 학생 수 [1학년, 2학년, ...]
        students: c ? Number(c.COL_S_SUM) || 0 : null,
        classes: c ? Number(c.COL_C_SUM) || 0 : null,
        year: c ? countsYear : null,
      });
    }
    await sleep(200);
  }
  return out;
}

// ── 나이스 학원·교습소 ─────────────────────────────────────────────────
async function collectAcademyRows(env, d) {
  const rows = [];
  for (let page = 1; ; page++) {
    const url =
      `https://open.neis.go.kr/hub/acaInsTiInfo?KEY=${env.NEIS_API_KEY}&Type=json&pIndex=${page}&pSize=1000` +
      `&ATPT_OFCDC_SC_CODE=${d.atpt}&ADMST_ZONE_NM=${encodeURIComponent(d.neisZone)}`;
    const { json } = await fetchJson(url);
    const sec = json.acaInsTiInfo;
    if (!sec) break;
    const total = sec[0].head[0].list_total_count;
    rows.push(...sec[1].row);
    if (rows.length >= total) break;
    await sleep(150);
  }
  return rows;
}

function parseFees(text) {
  if (!text) return [];
  return [...String(text).matchAll(/:\s*([\d,]+)/g)]
    .map(m => Number(m[1].replace(/,/g, '')))
    .filter(n => n >= 10000 && n <= 10000000);
}

function median(nums) {
  if (!nums.length) return null;
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : Math.round((s[mid - 1] + s[mid]) / 2);
}

function groupAcademies(rows, d) {
  const map = new Map();
  for (const r of rows) {
    if (r.REG_STTUS_NM !== '개원') continue;
    if (!ACADEMY_REALMS.has(r.REALM_SC_NM)) continue;
    const address = (r.FA_RDNMA || '').trim();
    if (!address) continue;
    if (d.addrIncludes && !address.includes(d.addrIncludes)) continue;

    let a = map.get(r.ACA_ASNUM);
    if (!a) {
      a = {
        id: r.ACA_ASNUM,
        name: (r.ACA_NM || '').trim(),
        type: r.ACA_INSTI_SC_NM, // 학원·교습소
        realm: r.REALM_SC_NM,
        remote: /원격/.test(r.ACA_NM || ''), // 원격(온라인) 학원: 지역 상권 공급에서 제외 대상
        district: d.id,
        address,
        capacity: 0,
        courses: new Set(),
        texts: [(r.ACA_NM || '').trim()],
        fees: [],
        established: r.ESTBL_YMD || null,
        lat: null,
        lng: null,
      };
      map.set(r.ACA_ASNUM, a);
    }
    // TOFOR_SMTOT(정원 합계)는 과목·시간대별 정원을 모두 더한 값이라 규모 비교에 부적합하고
    // 입력 오류(수십억)도 섞여 있다. 동시 수용 인원인 '일시수용능력인원'을 규모 지표로 쓴다.
    const concurrent = Number(r.DTM_RCPTN_ABLTY_NMPR_SMTOT) || 0;
    if (concurrent > 0 && concurrent <= 3000) a.capacity = Math.max(a.capacity, concurrent);
    if (r.LE_CRSE_NM) a.courses.add(r.LE_CRSE_NM.trim());
    if (r.LE_CRSE_LIST_NM) a.texts.push(r.LE_CRSE_LIST_NM);
    if (r.PSNBY_THCC_CNTNT) a.texts.push(String(r.PSNBY_THCC_CNTNT).replace(/:\s*[\d,]+/g, ' '));
    a.fees.push(...parseFees(r.PSNBY_THCC_CNTNT));
  }
  return [...map.values()].map(a => ({
    ...a,
    subjects: classifySubjects(a.texts, a.realm, a.courses),
    courses: [...a.courses],
    texts: undefined,
    fees: undefined,
    feeMedian: median(a.fees),
    feeCount: a.fees.length,
  }));
}

// ── 네이버 Geocoding ───────────────────────────────────────────────────
function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  } catch {
    return {};
  }
}
function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache));
}

async function geocodeAll(env, academies) {
  const cache = loadCache();
  const pending = [...new Set(academies.map(a => a.address))].filter(addr => !(addr in cache));
  console.log(`  · Geocoding: 고유 주소 ${new Set(academies.map(a => a.address)).size}개 중 신규 ${pending.length}개`);

  let done = 0;
  let failed = 0;
  const CONCURRENCY = 5;
  const queue = [...pending];
  async function worker() {
    while (queue.length) {
      const addr = queue.shift();
      try {
        const { status, json } = await fetchJson(
          `https://maps.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(addr)}`,
          {
            headers: {
              'x-ncp-apigw-api-key-id': env.NCP_MAPS_CLIENT_ID,
              'x-ncp-apigw-api-key': env.NCP_MAPS_CLIENT_SECRET,
              Accept: 'application/json',
            },
          }
        );
        if (status === 429) {
          queue.push(addr);
          await sleep(2000);
          continue;
        }
        if (status !== 200) throw new Error(`HTTP ${status}: ${JSON.stringify(json).slice(0, 120)}`);
        const hit = json.addresses?.[0];
        cache[addr] = hit ? [Number(hit.y), Number(hit.x)] : null;
        if (!hit) failed++;
      } catch (e) {
        if (String(e.message).includes('HTTP 401') || String(e.message).includes('HTTP 403')) {
          saveCache(cache);
          throw e;
        }
        failed++;
      }
      done++;
      if (done % 200 === 0) {
        saveCache(cache);
        console.log(`    ${done}/${pending.length}`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  saveCache(cache);

  for (const a of academies) {
    const c = cache[a.address];
    if (c) [a.lat, a.lng] = c;
  }
  console.log(`  · Geocoding 완료 (변환 실패 ${failed}건)`);
}

// ── main ───────────────────────────────────────────────────────────────
(async () => {
  const env = loadEnv();
  const districts = DISTRICTS.filter(d => !ONLY || ONLY.has(d.id));
  const schools = [];
  const academies = [];
  const neisCache = new Map(); // 경기도는 같은 시를 두 구가 공유하지 않지만 안전하게 캐시

  for (const d of districts) {
    console.log(`\n▶ ${d.name}`);
    const s = await collectSchools(env, d);
    schools.push(...s);
    console.log(`  · 학교 ${s.length}곳 (초 ${s.filter(x => x.kind === '초').length} / 중 ${s.filter(x => x.kind === '중').length} / 고 ${s.filter(x => x.kind === '고').length})`);

    const key = `${d.atpt}|${d.neisZone}`;
    if (!neisCache.has(key)) neisCache.set(key, await collectAcademyRows(env, d));
    const rows = neisCache.get(key);
    const a = groupAcademies(rows, d);
    academies.push(...a);
    console.log(`  · 나이스 원본 ${rows.length}행 → 학습 분야 개원 학원·교습소 ${a.length}곳`);
  }

  if (!SKIP_GEOCODE) {
    console.log('\n▶ 학원 주소 좌표 변환');
    await geocodeAll(env, academies);
  }

  const meta = {
    collectedAt: new Date().toISOString(),
    districts: districts.map(({ id, name, sgg }) => ({
      id,
      name,
      sgg,
      schools: schools.filter(s => s.district === id).length,
      academies: academies.filter(a => a.district === id).length,
    })),
    academyRealms: [...ACADEMY_REALMS],
    sources: [
      '학교알리미 공시정보 (학교 기본정보, 학년별 학생 수)',
      '나이스 교육정보 개방 포털 (학원·교습소 정보)',
      '네이버 클라우드 Maps Geocoding (학원 주소 좌표 변환)',
    ],
  };

  // 기존 출력과 병합(--only로 일부 지역만 다시 수집하는 경우)
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const merge = (file, fresh) => {
    if (!ONLY) return fresh;
    try {
      const prev = JSON.parse(fs.readFileSync(path.join(OUT_DIR, file), 'utf8'));
      return [...prev.filter(x => !ONLY.has(x.district)), ...fresh];
    } catch {
      return fresh;
    }
  };
  const allSchools = merge('schools.json', schools);
  const allAcademies = merge('academies.json', academies);
  fs.writeFileSync(path.join(OUT_DIR, 'schools.json'), JSON.stringify(allSchools));
  fs.writeFileSync(path.join(OUT_DIR, 'academies.json'), JSON.stringify(allAcademies));
  fs.writeFileSync(path.join(OUT_DIR, 'meta.json'), JSON.stringify(meta, null, 2));

  // ── 페이지용 압축본 ──
  // schools:   [이름, 학교급(0초·1중·2고), 위도, 경도, 지역, [학년별 학생 수], 고교유형]
  // academies: [이름, 위도, 경도, 동시수용인원, 유형(0학원·1교습소), 분야 인덱스, 지역, 과목 비트마스크]
  const subjectNames = SUBJECT_RULES.map(([k]) => k);
  const subjectMask = list => list.reduce((m, k) => m | (1 << subjectNames.indexOf(k)), 0);
  const r5 = n => Math.round(n * 1e5) / 1e5;
  const KIND_IDX = { 초: 0, 중: 1, 고: 2 };
  const realms = [...ACADEMY_REALMS];
  const districtIds = DISTRICTS.map(d => d.id);
  const compact = {
    v: 2,
    collectedAt: meta.collectedAt,
    districts: DISTRICTS.map(({ id, name }) => ({ id, name })),
    realms,
    subjects: subjectNames,
    schools: allSchools
      .filter(s => s.lat && s.lng && s.grades)
      .map(s => [
        s.name,
        KIND_IDX[s.kind],
        r5(s.lat),
        r5(s.lng),
        districtIds.indexOf(s.district),
        s.grades,
        s.hsType ? s.hsType.replace('고등학교', '고') : '',
      ]),
    academies: allAcademies
      .filter(a => a.lat && a.lng && !a.remote)
      .map(a => [
        a.name,
        r5(a.lat),
        r5(a.lng),
        a.capacity,
        a.type === '교습소' ? 1 : 0,
        realms.indexOf(a.realm),
        districtIds.indexOf(a.district),
        subjectMask(a.subjects || []),
      ]),
  };
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(path.join(PUBLIC_DIR, 'market.json'), JSON.stringify(compact));

  console.log(
    `\n✅ 저장: 학교 ${allSchools.length}곳, 학원·교습소 ${allAcademies.length}곳 → data/academy-market/` +
      `\n   페이지용 압축본: 학교 ${compact.schools.length} · 학원 ${compact.academies.length} → public/data/academy-market/market.json`
  );
})().catch(e => {
  console.error('\n❌', e.message);
  process.exit(1);
});
