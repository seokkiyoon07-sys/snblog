// 2027학년도 수능 국어 문제 및 해설 페이지 생성기
// 9월 모의평가 국어 분석 페이지(2027-september-mock-korean-analysis)와 같은 형식으로 만든다.
//
// 입력
//   scripts/data/2027-suneung-korean/md/   해설 원고(SN 출제팀 블로그용 합본, 합니다체)
//   scripts/data/2027-suneung-korean/html/ 시험지 HTML 전사(지문 passage-*.html, 문항 {과목}-{번호}.html)
//   public/images/problem-download/2027-suneung-korean-solution/exam-pages/*.webp  시험지 원본 면(홀수형 20쪽)
// 출력
//   content/problem-download/2027-suneung-korean-solution.html
//
// 사용법: node scripts/generate-2027-suneung-korean-solution.mjs
//   --sync  SN_출제 폴더의 최신 블로그 원고(27수능_해설초안/블로그/*.md)를 data/md로 먼저 복사
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ID = '2027-suneung-korean-solution';
const DATA = path.join(ROOT, 'scripts/data/2027-suneung-korean');
const OUT = path.join(ROOT, 'content/problem-download', `${ID}.html`);
const IMG = `/images/problem-download/${ID}`;
const IMG_DIR = path.join(ROOT, 'public', IMG);
const SYNC_FROM =
  '/Users/seokkiyoon/Library/CloudStorage/SynologyDrive-seokkimac/07_ SN_work/SN_출제/01_기준자료/국어/평가원/27수능_해설초안/블로그';
const SYNC_SIMILAR =
  '/Users/seokkiyoon/Library/CloudStorage/SynologyDrive-seokkimac/07_ SN_work/SN_출제/01_기준자료/국어/평가원/27수능_스나지피티/유사기출/블로그';
const EXAM = '2027학년도 대학수학능력시험';

if (process.argv.includes('--sync')) {
  for (const f of fs.readdirSync(SYNC_FROM).filter((x) => x.endsWith('.md'))) {
    fs.copyFileSync(path.join(SYNC_FROM, f), path.join(DATA, 'md', f));
  }
  for (const f of fs.readdirSync(SYNC_SIMILAR).filter((x) => x.endsWith('.md'))) {
    fs.copyFileSync(path.join(SYNC_SIMILAR, f), path.join(DATA, 'similar', f));
  }
  fs.copyFileSync(path.join(SYNC_SIMILAR, '../../응답/rag_통합.json'), path.join(DATA, 'similar', 'pred.json'));
  console.log('원고 동기화 완료');
}

// ---------- 평가원 공개 정답·배점 ----------
const OFFICIAL = {
  common: '①④③②③⑤③②①④②⑤③①③⑤③②①⑤④①④⑤③⑤②⑤④②①②④④',
  hwajak: '①⑤⑤③③⑤①③④②④',
  eonmae: '⑤②⑤③④①②①⑤③④',
};
const START = { common: 1, hwajak: 35, eonmae: 35 };
const answerOf = (subject, n) => [...OFFICIAL[subject]][n - START[subject]];
const THREE = { common: [3, 8, 12, 17, 21, 23, 30, 34], hwajak: [40, 45], eonmae: [36, 45] };
const pts = (subject, n) => (THREE[subject].includes(n) ? 3 : 2);
const SUBJECT = { common: '공통', hwajak: '화법과 작문', eonmae: '언어와 매체' };

// ---------- 공개용 표현 ----------
// 원고의 회사 내부 용어를 독자가 읽을 표현으로 바꾼다
const pub = (t) =>
  t
    .replace(/사내 DB 난이도/g, 'SN 자체 난이도 평가')
    .replace(/사내 RAG DB/g, 'SN 문항 데이터베이스')
    .replace(/사내 DB/g, 'SN 문항 데이터베이스')
    .replace(/사내 관찰 통계/g, 'SN 자체 관찰 통계')
    .replace(/사내 가채점 집계/g, 'SN 자체 가채점 집계')
    .replace(/사내 /g, 'SN 자체 ');

// ---------- 마크다운 ----------
marked.setOptions({ gfm: true, breaks: false });
// '35~39' 같은 범위가 취소선이 되지 않게, '**…)**는'처럼 조사가 붙은 굵게가 풀리지 않게 보정
const fixKo = (s) => s.replace(/~/g, '\\~').replace(/\*\*([^*\n]+?)\*\*/g, '<strong>$1</strong>');
const md = (s, shift = 1) => marked.parse(fixKo(s.replace(/^(#{1,5}) /gm, `$1${'#'.repeat(shift)} `)));
const inline = (s) => marked.parseInline(fixKo(s));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripRules = (s) => s.replace(/^\s*---\s*$/gm, '').replace(/\n{3,}/g, '\n\n').trim();

// 본문(글) 영역: 9월 분석 글과 같은 Tailwind 클래스를 붙인다
const P = 'text-gray-800 dark:text-gray-200 leading-relaxed mb-4';
function tw(html) {
  return html
    .replace(/<p>/g, `<p class="${P}">`)
    .replace(/<h3>/g, '<h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-3">')
    .replace(/<h4>/g, '<h4 class="text-lg font-bold text-gray-900 dark:text-gray-100 mt-6 mb-2">')
    .replace(/<ul>/g, '<ul class="list-disc pl-5 text-gray-800 dark:text-gray-200 leading-relaxed space-y-2 mb-6">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-5 text-gray-800 dark:text-gray-200 leading-relaxed space-y-2 mb-6">')
    .replace(/<blockquote>/g, '<blockquote class="border-l-2 border-gray-900 dark:border-gray-100 pl-4 my-6 text-gray-800 dark:text-gray-200">')
    .replace(/<blockquote([^>]*)>\s*<p class="[^"]*">/g, '<blockquote$1><p class="leading-relaxed mb-2">')
    .replace(/<hr>/g, '<hr class="my-8 border-gray-300 dark:border-gray-700" />')
    .replace(/<table>/g, '<div class="not-prose overflow-x-auto my-6"><table class="w-full border-collapse text-sm text-left">')
    .replace(/<\/table>/g, '</table></div>')
    .replace(/<thead>\s*<tr>/g, '<thead><tr class="border-y border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">')
    .replace(/<th( align="\w+")?>/g, '<th class="p-3 font-bold align-bottom">')
    .replace(/<tbody>/g, '<tbody class="text-gray-800 dark:text-gray-200">')
    .replace(/<tbody([^>]*)>\s*<tr>/g, '<tbody$1><tr class="border-b border-gray-200 dark:border-gray-800">')
    .replace(/<\/tr>\s*<tr>/g, '</tr><tr class="border-b border-gray-200 dark:border-gray-800">')
    .replace(/<td( align="\w+")?>/g, '<td class="p-3 align-top">');
}
const h2 = (id, text) => `<h2 id="${id}" class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">\n  ${text}\n</h2>`;

// ---------- 해설 원고 파싱 ----------
const FILES = [
  { file: '1_독서A.md', subject: 'common', area: '독서 1~9' },
  { file: '2_독서B.md', subject: 'common', area: '독서 10~17' },
  { file: '3_문학A.md', subject: 'common', area: '문학 18~26' },
  { file: '4_문학B.md', subject: 'common', area: '문학 27~34' },
  { file: '5_화작.md', subject: 'hwajak', area: '화법과 작문' },
  { file: '6_언매.md', subject: 'eonmae', area: '언어와 매체' },
];
const sets = [];
const tails = [];
for (const f of FILES) {
  const text = pub(fs.readFileSync(path.join(DATA, 'md', f.file), 'utf8'));
  for (const chunk of text.split(/^## /m).slice(1)) {
    const nl = chunk.indexOf('\n');
    const head = chunk.slice(0, nl).trim();
    const body = chunk.slice(nl + 1);
    const m = head.match(/^\[(\d+)(?:~(\d+))?\]\s*(.*)$/);
    if (!m) {
      tails.push({ area: f.area, title: head, bodyMd: stripRules(body) });
      continue;
    }
    const from = +m[1];
    const to = +(m[2] || m[1]);
    const parts = body.split(/^(?=### \d+번)/m);
    const introMd = stripRules(parts[0]).replace(/^### [①②③④⑤]\s*/gm, '### ');
    const questions = parts.slice(1).map((p) => {
      const l = p.indexOf('\n');
      const h = p.slice(4, l).trim();
      const num = +h.match(/^(\d+)번/)[1];
      const answer = (h.match(/정답\s*([①②③④⑤])/) || [])[1];
      if (answer !== answerOf(f.subject, num)) throw new Error(`정답 불일치: ${f.subject} ${num} 원고 ${answer} / 평가원 ${answerOf(f.subject, num)}`);
      const title = h
        .replace(/^\d+번\.?\s*/, '')
        .replace(/\s*(—|\|)?\s*정답\s*[①②③④⑤]\s*/, ' ')
        .replace(/\*\*/g, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/^—\s*/, '')
        .trim();
      return { num, title, answer, bodyMd: stripRules(p.slice(l + 1)) };
    });
    for (let n = from; n <= to; n++) if (!questions.find((q) => q.num === n)) throw new Error(`문항 누락: ${f.subject} ${n}`);
    sets.push({ subject: f.subject, area: f.area, from, to, title: m[3].trim(), introMd, questions });
  }
}
if (sets.reduce((a, s) => a + s.questions.length, 0) !== 56) throw new Error('문항 수가 56이 아님');
// (유사 기출은 아래에서 읽은 뒤 개수를 출력)

// ---------- 문항별 유사 기출(SNarGPT RAG) ----------
const SIMILAR = new Map();
const SIM_KEY = { 공통: 'common', 화작: 'hwajak', 언매: 'eonmae' };
// 원문 수식 렌더링 문제로 ㉠㉡이 첫소리 자모(ᄀᄂ)로 들어온 곳을 바로잡는다
const fixCircled = (t) => t.replace(/[\u1100\u1102\u1103\u1105\u1106](?=[의과와은는을를이가에,·\s)])/g, (c) => ({ '\u1100': '㉠', '\u1102': '㉡', '\u1103': '㉢', '\u1105': '㉣', '\u1106': '㉤' })[c]);
const simDir = path.join(DATA, 'similar');
if (fs.existsSync(simDir)) {
  for (const f of fs.readdirSync(simDir).filter((x) => x.endsWith('.md'))) {
    const text = pub(fs.readFileSync(path.join(simDir, f), 'utf8'));
    for (const part of text.split(/^(?=### )/m).slice(1)) {
      const m = part.match(/^### (공통|화작|언매) (\d+)번/);
      if (!m) continue;
      const rows = part
        .split('\n')
        .filter((l) => l.startsWith('|') && !/^\|\s*-/.test(l))
        .slice(1) // 머리 행 제외
        .map((l) => fixCircled(l).split('|').slice(1, -1).map((c) => c.trim()));
      const why = (part.match(/\*\*유사 이유\*\*\s*[:：]\s*([\s\S]*?)(?=\n\s*\n|$)/) || [])[1];
      if (rows.length) SIMILAR.set(`${SIM_KEY[m[1]]}-${m[2]}`, { rows, why: why ? fixCircled(why.trim()) : '' });
    }
  }
}

function renderSimilar({ rows, why }) {
  const items = rows
    .map(([exam, no, stem, rate, like]) => `<li>
  <div class="sim-head"><b>${inline(esc(exam || ''))} ${inline(esc(no || ''))}</b><span class="${/통계 없음/.test(rate || '') ? 'sim-rate is-none' : 'sim-rate'}">${inline(esc(rate || ''))}</span></div>
  ${stem ? `<p class="sim-stem">${inline(esc(stem))}</p>` : ''}
  ${like ? `<p class="sim-like"><b>닮은 점</b>${inline(esc(like))}</p>` : ''}
</li>`)
    .join('');
  // [원문 사실] / [분석·추론] 같은 원고 표기는 작은 라벨로 바꾼다
  const whyHtml = why ? md(why).replace(/\[(원문 사실|원문 확인 사실|분석·추론|분석|추론)\]\s*:?\s*/g, (m0, t) => `<span class="sim-tag">${t.replace('원문 확인 사실', '원문 사실')}</span>`) : '';
  return `<ol class="sim-list">${items}</ol>${why ? `<div class="sim-why"><b>유사 이유</b>${whyHtml}</div>` : ''}`;
}

// ---------- 세트 정보 ----------
const SHORT = {
  'common-1-3': ['공통 · 독서', '디지털 문서 읽기 (독서론)'],
  'common-4-9': ['공통 · 독서', '정도전의 배불론과 조선 후기 불교 인식 (인문)'],
  'common-10-13': ['공통 · 독서', '가상 메모리와 TLB (기술)'],
  'common-14-17': ['공통 · 독서', '의견 표현과 명예훼손 책임 (법)'],
  'common-18-21': ['공통 · 문학', '작자 미상, 「창선감의록」 (고전소설)'],
  'common-22-26': ['공통 · 문학', '「참회록」·「횟집 어항 앞에서」·「유리와 거울」 (현대시·수필)'],
  'common-27-30': ['공통 · 문학', '김채원, 「봄의 환(幻)」 (현대소설)'],
  'common-31-34': ['공통 · 문학', '「부여노정기」·시조 (고전시가)'],
  'hwajak-35-37': ['화법과 작문', '발표: 향신료 소개'],
  'hwajak-38-42': ['화법과 작문', '대화와 보고서: 생태 탐방'],
  'hwajak-43-45': ['화법과 작문', '기고문: 작은 영화관'],
  'eonmae-35-36': ['언어와 매체', '직접 구성 요소'],
  'eonmae-37': ['언어와 매체', '안긴절과 생략된 성분'],
  'eonmae-38': ['언어와 매체', '문장의 중의성'],
  'eonmae-39': ['언어와 매체', '15세기 국어의 모음 변화'],
  'eonmae-40-43': ['언어와 매체', '인터넷 방송과 블로그'],
  'eonmae-44-45': ['언어와 매체', '누리 소통망 대화와 발표 자료'],
};
const ORIGINALS = {
  'common-18-21': { work: '「창선감의록」', post: '/originals/changseon-gamui-rok', video: 'https://www.youtube.com/watch?v=pOKh1gMpewY&t=177s', series: 'EBS 2027 수능완성' },
  'common-22-26': { work: '윤동주의 「참회록」', post: '/originals/chamhuirok', video: 'https://www.youtube.com/watch?v=_BvSoR297_Y', series: 'EBS 2027 수능특강' },
};
const readHtml = (name) => {
  const f = path.join(DATA, 'html', name);
  if (!fs.existsSync(f)) return null;
  return fs.readFileSync(f, 'utf8').trim().replace(/․/g, '·').replace(/｢/g, '「').replace(/｣/g, '」');
};
// 그림·도표를 설명문으로 대신한 곳은 원문 이미지를 함께 보여 준다
const imgIfExists = (file, alt) => (fs.existsSync(path.join(IMG_DIR, file)) ? `<img src="${IMG}/${file}" alt="${esc(alt)}" loading="lazy" decoding="async">` : '');
for (const s of sets) {
  s.key = `${s.subject}-${s.from}${s.to !== s.from ? `-${s.to}` : ''}`;
  s.label = s.from === s.to ? `${s.from}` : `${s.from}～${s.to}`;
  [s.tag, s.short] = SHORT[s.key];
}

// 세트 요약에서 '한 줄 요약'을 떼어 overview로, 나머지는 펼침 정리로
function splitIntro(introMd) {
  const parts = introMd.split(/^(?=### )/m).map((x) => x.trim()).filter(Boolean);
  const first = parts.find((x) => /^### 한 줄 요약/.test(x));
  const summary = first ? first.replace(/^### .*\n/, '').trim() : '';
  const rest = parts.filter((x) => x !== first).join('\n\n');
  return { summary, rest };
}

// ---------- 지문·문항 분석 (9월 study-lab 형식) ----------
function renderQuestion(s, q, first) {
  const rawQ = readHtml(`${s.subject}-${q.num}.html`);
  if (!rawQ) throw new Error(`문항 HTML 없음: ${s.subject}-${q.num}`);
  // 정답 선지에 표시를 붙여 둔다(‘정답·해설 보기’를 누르면 CSS로 드러남)
  let marked = 0;
  const qHtml = rawQ.replace(/<ol class="ex-choices">([\s\S]*?)<\/ol>/, (all, items) =>
    `<ol class="ex-choices">${items.replace(/<li>(\s*)([①②③④⑤])([\s\S]*?)<\/li>/g, (li, sp, sym, rest) => {
      if (sym !== q.answer) return li;
      marked++;
      return `<li class="is-answer">${sp}<span class="ex-choice-no">${sym}</span>${rest}<em class="ex-answer-tag">✓ 정답</em></li>`;
    })}</ol>`);
  // 선지가 표의 행으로 된 문항(예: 언매 37번 '········· ①')
  let qOut = qHtml;
  if (marked === 0) {
    qOut = qHtml.replace(/<tr>((?:(?!<\/tr>)[\s\S])*?)<td>([·\s]*)([①②③④⑤])<\/td><\/tr>/g, (tr, cells, dots, sym) => {
      if (sym !== q.answer) return tr;
      marked++;
      return `<tr class="is-answer">${cells}<td>${dots}<span class="ex-choice-no">${sym}</span><em class="ex-answer-tag">✓ 정답</em></td></tr>`;
    });
  }
  if (marked !== 1) throw new Error(`정답 선지 표시 실패: ${s.subject}-${q.num} (${marked}곳)`);
  const figure = qHtml.includes('ex-figure')
    ? `<div class="study-passage-assets"><b>원문 자료</b>${imgIfExists(`${s.subject}-${q.num}.webp`, `${EXAM} 국어 ${SUBJECT[s.subject]} ${q.num}번 원문`)}</div>`
    : '';
  return `<article class="study-question-panel" data-study-question="${q.num}"${first ? '' : ' hidden'}>
  <header class="study-question-heading">
    <div><b>${q.num}번</b><span>${SUBJECT[s.subject]}</span><span>${pts(s.subject, q.num)}점</span></div>
    <button type="button" aria-expanded="false" onclick="const p=this.closest('.study-question-panel');const open=p.classList.toggle('is-revealed');this.setAttribute('aria-expanded',open);this.textContent=open?'해설 접기':'정답·해설 보기'">정답·해설 보기</button>
  </header>
  <section class="study-question-original exam-text">${qOut}${figure}</section>
  <section class="study-answer-reveal">
    <div class="study-answer-line"><span>정답</span><strong>${q.answer}</strong></div>
    <div class="study-explain-block study-core-solution">${q.title ? `<h4>${inline(esc(q.title))}</h4>` : ''}${md(q.bodyMd, 2)}</div>
    ${SIMILAR.has(`${s.subject}-${q.num}`) ? `<div class="study-explain-block study-similar"><h4>유사 기출 · 실제 오답률</h4>${renderSimilar(SIMILAR.get(`${s.subject}-${q.num}`))}<p class="study-similar-note">SNarGPT가 판단 구조가 닮은 기출을 찾아 붙인 참고 자료입니다. 오답률은 입시 기관 집계이며, 기관과 집계 시점에 따라 다를 수 있습니다.</p></div>` : ''}
  </section>
</article>`;
}

function renderLab(s, firstLab) {
  const { summary, rest } = splitIntro(s.introMd);
  const pHtml = readHtml(`passage-${s.key}.html`);
  const passageImgs = fs.existsSync(IMG_DIR)
    ? fs.readdirSync(IMG_DIR).filter((f) => f.startsWith(`passage-${s.key}`) && f.endsWith('.webp')).sort()
    : [];
  const assets = pHtml && pHtml.includes('ex-figure') && passageImgs.length
    ? `<div class="study-passage-assets"><b>원문 자료</b>${passageImgs.map((f, k) => imgIfExists(f, `${EXAM} 국어 [${s.label}] 지문 원문 ${k + 1}`)).join('')}</div>`
    : '';
  const og = ORIGINALS[s.key];
  const ogNote = og
    ? `<p class="study-originals">${og.work}은 SN Originals에서 다룬 작품입니다. ${og.series} 수록 작품으로 미리 공부한 내용을 <a href="${og.post}">SN Originals 해설</a>과 <a href="${og.video}" target="_blank" rel="noopener noreferrer">영상</a>에서 다시 확인해 보세요.</p>`
    : '';
  const passageBlock = pHtml
    ? `<div class="study-passage-text exam-text">${pHtml}</div>${assets}`
    : `<p class="study-single-note">지문 없이 출제된 단독 문항입니다. 오른쪽 문항의 &lt;보기&gt;와 자료를 함께 보세요.</p>`;
  const firstQ = s.questions[0].num;
  return `<section class="study-lab" data-study-unit="${s.key}" data-active-question="${firstQ}" data-mobile-pane="passage" aria-label="${esc(s.short)} 지문과 문항 해설"${firstLab ? '' : ' hidden'}>
  <header class="study-lab-heading"><div><span>${s.tag}</span><h2>[${s.label}] ${esc(s.short)}</h2></div><small>지문 원문 · 문항 해설</small></header>
  <nav class="study-mobile-tabs" aria-label="모바일 분석 화면 선택"><button type="button" aria-pressed="true" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='passage';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">지문</button><button type="button" aria-pressed="false" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='questions';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">문항 해설</button></nav>
  <div class="study-workspace">
    <aside class="study-passage-pane">
      <section class="study-overview"><span>한 줄 요약</span><div class="study-overview-summary">${md(summary, 2)}</div>${rest ? `<details class="study-guide-more"><summary>지문 구조 · 출제 포인트 · 실전 팁</summary><div>${md(rest, 1)}</div></details>` : ''}</section>
      ${ogNote}
      ${passageBlock}
      <button class="study-go-questions" type="button" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='questions';const bs=l.querySelectorAll('.study-mobile-tabs button');bs.forEach((b,i)=>b.setAttribute('aria-pressed',i===1));l.querySelector('.study-question-pane').scrollIntoView({behavior:'smooth',block:'start'})">문항 해설 보기 →</button>
    </aside>
    <section class="study-question-pane"><button class="study-back-passage" type="button" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='passage';const bs=l.querySelectorAll('.study-mobile-tabs button');bs.forEach((b,i)=>b.setAttribute('aria-pressed',i===0))">← 지문으로</button>
      <nav class="study-question-tabs" aria-label="문항 선택">${s.questions.map((q) => `<button type="button" aria-pressed="${q.num === firstQ}" onclick="const l=this.closest('.study-lab');l.dataset.activeQuestion='${q.num}';l.querySelectorAll('[data-study-question]').forEach(p=>p.hidden=p.dataset.studyQuestion!=='${q.num}');this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">${q.num}번</button>`).join('')}</nav>
      ${s.questions.map((q) => renderQuestion(s, q, q.num === firstQ)).join('\n')}
    </section>
  </div>
</section>`;
}

const unitTabs = sets
  .map((s, i) => `<button type="button" data-unit-target="${s.key}" aria-pressed="${i === 0}" onclick="const a=this.closest('.study-analysis');a.querySelectorAll('.study-lab').forEach(l=>l.hidden=l.dataset.studyUnit!==this.dataset.unitTarget);this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))"><span>${s.tag}</span>[${s.label}] ${esc(s.short)}</button>`)
  .join('');
const analysisHtml = `<section class="study-analysis" aria-label="전 지문 문항 해설">
  <header class="study-analysis-heading"><div><span>전체 56문항</span><h2>지문 묶음을 선택해 해설을 보세요</h2></div><p>공통 34문항과 화법과 작문·언어와 매체 각 11문항을 모두 제공합니다. 문항마다 ‘정답·해설 보기’를 누르면 해설이 열립니다.</p></header>
  <nav class="study-unit-tabs" aria-label="지문 묶음 선택">${unitTabs}</nav>
  ${sets.map((s, i) => renderLab(s, i === 0)).join('\n')}
</section>`;

// 해설 인쇄용 전체 해설
const solutionHtml = sets
  .map((s) => `<section class="solution-group" data-solution-set="${s.subject}">
  <header class="solution-group-heading"><span>${s.tag}</span><h3>[${s.label}] ${esc(s.short)}</h3></header>
  <div class="exam-solution-grid">${s.questions.map((q) => `<article class="exam-solution" id="solution-${s.subject}-${q.num}">
  <header><span>${q.num}번</span><strong>정답 ${q.answer}</strong></header>
  ${md(q.bodyMd, 2)}
</article>`).join('\n')}</div>
</section>`)
  .join('\n');

// 인쇄용 정답표(한 줄에 과목 하나)
const printAnswerKey = `<table class="print-key">${[
  ['공통', 'common', 1, 34],
  ['화법과 작문', 'hwajak', 35, 45],
  ['언어와 매체', 'eonmae', 35, 45],
]
  .map(([name, subj, a, b]) => {
    const cells = [];
    for (let n = a; n <= b; n++) cells.push(`<span><b>${n}</b>${answerOf(subj, n)}${pts(subj, n) === 3 ? '<i>3</i>' : ''}</span>`);
    return `<tr><th>${name}</th><td class="print-key-cells"><div>${cells.join('')}</div></td></tr>`;
  })
  .join('')}</table><p class="print-key-note">숫자 옆 작은 3은 3점 문항입니다.</p>`;

// ---------- 시험지 원본 면 ----------
const pageSets = [
  { id: 'common', label: '공통과목', badge: '필수', pages: Array.from({ length: 12 }, (_, i) => i + 1), prefix: 'common' },
  { id: 'speech', label: '화법과 작문', badge: '선택', pages: [13, 14, 15, 16], prefix: 'speech' },
  { id: 'media', label: '언어와 매체', badge: '선택', pages: [17, 18, 19, 20], prefix: 'media' },
];
for (const ps of pageSets) for (const n of ps.pages) {
  const f = path.join(IMG_DIR, 'exam-pages', `${ps.prefix}-${String(n).padStart(2, '0')}.webp`);
  if (!fs.existsSync(f)) throw new Error(`시험지 면 없음: ${f}`);
}
const paperHtml = pageSets
  .map((ps) => `<section class="kice-page-set" data-exam-set="${ps.id}">
  <header class="kice-set-heading">
    <span>${ps.badge}</span>
    <h3>${ps.label}</h3>
    <b>${ps.pages.length}쪽</b>
    <div class="kice-carousel-controls" aria-label="${ps.label} 페이지 이동">
      <button type="button" aria-label="이전 페이지" onclick="this.closest('.kice-page-set').querySelector('.kice-page-list').scrollBy({left:-this.closest('.kice-page-set').querySelector('.kice-page-list').clientWidth*.9,behavior:'smooth'})">←</button>
      <button type="button" aria-label="다음 페이지" onclick="this.closest('.kice-page-set').querySelector('.kice-page-list').scrollBy({left:this.closest('.kice-page-set').querySelector('.kice-page-list').clientWidth*.9,behavior:'smooth'})">→</button>
    </div>
  </header>
  <div class="kice-page-stage">
  <button class="kice-side-nav kice-side-prev" type="button" aria-label="${ps.label} 이전 쪽" onclick="const l=this.parentElement.querySelector('.kice-page-list');l.scrollBy({left:-l.clientWidth*.9,behavior:'smooth'})">‹</button>
  <div class="kice-page-list">
${ps.pages
  .map((n, i) => {
    const src = `${IMG}/exam-pages/${ps.prefix}-${String(n).padStart(2, '0')}.webp`;
    const alt = `${EXAM} 국어 ${ps.label} ${n}쪽`;
    return `    <figure class="kice-page" data-page-number="${n}">
      <button class="kice-page-open" type="button" data-src="${src}" data-alt="${alt}" data-label="${ps.label} ${n}쪽" aria-label="${ps.label} ${n}쪽 크게 보기" onclick="const d=document.getElementById('kice-page-modal');const i=d.querySelector('img');i.src=this.dataset.src;i.alt=this.dataset.alt;d.querySelector('[data-modal-label]').textContent=this.dataset.label;d.showModal()">
        <img src="${src}" alt="${alt}" ${ps.id === 'common' && i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
      </button>
      <figcaption>${ps.label} ${n}쪽 · 누르면 크게 볼 수 있습니다.</figcaption>
    </figure>`;
  })
  .join('\n')}
  </div>
  <button class="kice-side-nav kice-side-next" type="button" aria-label="${ps.label} 다음 쪽" onclick="const l=this.parentElement.querySelector('.kice-page-list');l.scrollBy({left:l.clientWidth*.9,behavior:'smooth'})">›</button>
  </div>
</section>`)
  .join('\n');

// ---------- 총평 원고 ----------
const reviewAll = pub(fs.readFileSync(path.join(DATA, 'md', '0_총평.md'), 'utf8')).replace(/^# .*\n/, '');
const reviewParts = reviewAll.split(/^(?=## )/m);
const lead = reviewParts[0].trim(); // 머리 안내 인용문
const part = (re) => reviewParts.find((x) => re.test(x)) || '';
const oneLine = part(/^## 한 줄 총평/);
const areaFeel = part(/^## 영역별 체감 난도/);
const hardSets = part(/^## 어려웠던 지문/);
const errRate = part(/^## 오답률 높았을/)
  .replace(/^(## 오답률 높았을[^\n(]*?)\s*(\((예상치|예측)\))?\s*$/m, '$1 (AI 예측)')
  .replace(/^(\|[^\n]*\|\s*)예상 오답률(\s*\|)/m, '$1AI 예상 오답률$2')
  .replace(/^> 문항 구조와 매력적 오답의 강도로 추정한/m, '> AI가 문항 구조와 매력적 오답의 강도를 분석해 추정한');
const gradeCut = part(/^## 등급컷/)
  .replace(/^## 등급컷 예측/m, '## 등급컷 AI 예측')
  .replace(/^> \*\*이것은 예측입니다/m, '> **이것은 AI 예측입니다');
const studyDir = part(/^## 공부 방향/);
for (const [name, v] of Object.entries({ oneLine, areaFeel, hardSets, errRate, gradeCut, studyDir })) {
  if (!v) throw new Error(`총평 절 없음: ${name}`);
}
for (const must of ['(AI 예측)', 'AI 예상 오답률', '등급컷 AI 예측']) {
  if (!(errRate + gradeCut).includes(must)) throw new Error(`AI 예측 표기 실패: ${must}`);
}
const dropRule = (s) => s.replace(/\n---\s*$/, '\n');
const quote = (oneLine.match(/\*\*"?([^*]+?)"?\*\*/) || [])[1] || '';
const leadNote = lead.replace(/^>\s*/gm, '').replace('**예상 오답률·등급컷은 모두 예측치입니다.** 문항 구조와 함정 강도를 보고 추정한 것입니다.', '**예상 오답률·등급컷은 모두 AI 예측치입니다.** AI가 문항 구조와 함정 강도를 분석해 추정한 것입니다.');

// 56문항 전체 유사 이유: 5절(공부 방향)에 영역별로 접어서 싣는다
// 오답률 표에 있는 문항은 순위와 AI 예상 오답률을 함께 보여 준다
const topInfo = new Map();
for (const l of errRate.split('\n').filter((x) => /^\|\s*(공동\s*)?\d+\s*\|/.test(x))) {
  const [rank, no, , rate] = l.split('|').slice(1, -1).map((c) => c.trim());
  const m = (no || '').match(/(공통|화작|언매)\s*(\d+)/);
  if (m) topInfo.set(`${SIM_KEY[m[1]]}-${m[2]}`, { rank, rate });
}
// 문항별 AI 예측 오답률(SNarGPT RAG): '약 중간값% (범위)'
const PRED = new Map();
for (const x of JSON.parse(fs.readFileSync(path.join(DATA, 'similar', 'pred.json'), 'utf8'))) {
  const r = String(x.pred || '').replace(/\s/g, '').match(/(\d+)~(\d+)%/);
  if (r) PRED.set(`${SIM_KEY[x.sec]}-${x.q}`, `약 ${Math.round((+r[1] + +r[2]) / 2)}% (${r[1]}~${r[2]}%)`);
}
const shortRate = (t) => (t || '').split(' (')[0].replace(/^통계 없음.*/, '통계 없음');
const whyItem = (s0, q) => {
  const key = `${s0.subject}-${q.num}`;
  const sim = SIMILAR.get(key);
  if (!sim || !sim.why) throw new Error(`유사 이유 없음: ${key}`);
  const pred = PRED.get(key);
  if (!pred) throw new Error(`AI 예측 오답률 없음: ${key}`);
  const why = md(sim.why).replace(/\[(원문 사실|원문 확인 사실|분석·추론|분석|추론)\]\s*:?\s*/g, '');
  const top = topInfo.get(key);
  const refs = sim.rows
    .map((r) => `<span class="block">${inline(esc(`${r[0]} ${r[1]}`))} <span class="${/통계 없음/.test(r[3] || '') ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}">· ${inline(esc(shortRate(r[3])))}</span></span>`)
    .join('');
  const likes = sim.rows
    .filter((r) => r[4])
    .map((r) => `<li><b>${inline(esc(`${r[0]} ${r[1]}`))}</b>: ${inline(esc(r[4]))}</li>`)
    .join('');
  return `<details class="group border-b border-gray-200 dark:border-gray-800">
  <summary class="grid cursor-pointer list-none grid-cols-[5.5rem_minmax(0,8rem)_minmax(0,1fr)_1.5rem] items-start gap-3 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-900 max-sm:grid-cols-[4.6rem_minmax(0,1fr)_1.2rem] [&::-webkit-details-marker]:hidden">
    <span class="font-bold text-gray-900 dark:text-gray-100">${SUBJECT[s0.subject] === '공통' ? '공통' : SUBJECT[s0.subject] === '화법과 작문' ? '화작' : '언매'} ${q.num}번</span>
    <span class="text-gray-800 dark:text-gray-200 max-sm:col-start-2 max-sm:row-start-1">${esc(pred)}${top ? `<span class="block text-xs font-bold text-red-700 dark:text-red-400">오답률 ${esc(top.rank)}위</span>` : ''}</span>
    <span class="text-gray-800 dark:text-gray-200 max-sm:col-span-2 max-sm:col-start-1 max-sm:row-start-2">${refs}</span>
    <span class="text-gray-400 max-sm:col-start-3 max-sm:row-start-1"><span class="group-open:hidden">＋</span><span class="hidden group-open:inline">－</span></span>
  </summary>
  <div class="pb-4 pl-1 text-sm text-gray-800 dark:text-gray-200 leading-relaxed [&_p]:mb-2">
    ${likes ? `<p class="font-bold text-gray-900 dark:text-gray-100 !mb-1">닮은 점</p><ul class="list-disc pl-5 mb-3 space-y-1">${likes}</ul>` : ''}
    <p class="font-bold text-gray-900 dark:text-gray-100 !mb-1">유사 이유</p>${why}
  </div>
</details>`;
};
const whyGroups = [
  ['독서', sets.filter((x) => x.subject === 'common' && x.from <= 17)],
  ['문학', sets.filter((x) => x.subject === 'common' && x.from >= 18)],
  ['화법과 작문', sets.filter((x) => x.subject === 'hwajak')],
  ['언어와 매체', sets.filter((x) => x.subject === 'eonmae')],
];
const whyHead = `<div class="grid grid-cols-[5.5rem_minmax(0,8rem)_minmax(0,1fr)_1.5rem] gap-3 border-y border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-2 text-xs font-bold text-gray-700 dark:text-gray-300 max-sm:hidden"><span>문항</span><span>AI 예측 오답률</span><span>유사 기출 · 실제 오답률</span><span></span></div>`;
let whyCount = 0;
const allWhyHtml = `<h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-2">문항별 예측 오답률과 유사 기출</h3>
<p class="${P}">56문항마다 SNarGPT가 판단 구조가 닮은 기출을 찾아, 그 기출의 실제 오답률을 참고해 이번 문항의 오답률을 예측했습니다. 다음 수능을 준비할 때 함께 풀어 볼 기출 목록으로 쓰세요. 줄을 누르면 닮은 점과 유사 이유가 펼쳐집니다.</p>
<div class="not-prose mb-8" data-why-tabs>
  <div class="flex flex-wrap gap-2 mb-3" role="tablist" aria-label="영역 선택">${whyGroups
    .map(([name, ss], k) => `<button type="button" role="tab" aria-selected="${k === 0}" data-why-target="why-${k}" class="rounded-full border px-4 py-2 text-sm font-bold border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 aria-selected:border-gray-900 aria-selected:bg-gray-900 aria-selected:text-white dark:aria-selected:border-gray-100 dark:aria-selected:bg-gray-100 dark:aria-selected:text-gray-900" onclick="const w=this.closest('[data-why-tabs]');w.querySelectorAll('[data-why-panel]').forEach(p=>p.hidden=p.dataset.whyPanel!==this.dataset.whyTarget);w.querySelectorAll('[role=tab]').forEach(t=>t.setAttribute('aria-selected',t===this))">${name} <span class="font-normal opacity-70">${ss.reduce((n, x) => n + x.questions.length, 0)}</span></button>`)
    .join('')}</div>
${whyGroups
  .map(([name, ss], k) => {
    const items = ss.flatMap((s0) => s0.questions.map((q) => { whyCount++; return whyItem(s0, q); }));
    return `<div role="tabpanel" aria-label="${name}" data-why-panel="why-${k}"${k === 0 ? '' : ' hidden'}>${whyHead}${items.join('\n')}</div>`;
  })
  .join('\n')}
</div>`;
if (whyCount !== 56) throw new Error(`유사 이유 문항 수: ${whyCount}`);

// ---------- 정답 ----------
const answerGrid = (subject, from, to) => {
  const cells = [];
  for (let n = from; n <= to; n++) cells.push(`<span><b>${n}:</b> ${answerOf(subject, n)}${pts(subject, n) === 3 ? '<small class="ml-1 text-gray-500">3점</small>' : ''}</span>`);
  return `<div class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-2 text-gray-800 dark:text-gray-200 tabular-nums">${cells.join('')}</div>`;
};

// ---------- 시험지 해설 영역 CSS ----------
// 9월 모의평가 분석 글의 생성기(scripts/generate-september-korean-workbook.mjs)에서 쓰는 스타일을 그대로 가져오고,
// 전사 HTML(exam-text)과 요약 펼침 등 이 글에만 있는 요소를 덧붙인다.
const sepScript = fs.readFileSync(path.join(ROOT, 'scripts/generate-september-korean-workbook.mjs'), 'utf8');
const sepCss = sepScript.slice(sepScript.indexOf('<style>\n  .exam-workbook'), sepScript.indexOf('</style>', sepScript.indexOf('<style>\n  .exam-workbook')) + 8);
if (!sepCss.includes('.study-lab')) throw new Error('9월 스타일을 찾지 못함');
const extraCss = `<style>
  .study-overview-summary p { margin: 0 0 .5rem; color: #111; font-size: .84rem; font-weight: 700; line-height: 1.65; }
  .study-guide-more { margin-top: .4rem; border-top: 1px dashed #aaa; padding-top: .45rem; }
  .study-guide-more > summary { cursor: pointer; color: #333; font-size: .74rem; font-weight: 800; }
  .study-guide-more > div { margin-top: .5rem; font-size: .76rem; line-height: 1.65; color: #222; }
  .study-guide-more h4, .study-guide-more h5 { margin: .8rem 0 .3rem; font-size: .78rem; }
  .study-guide-more p, .study-guide-more li { margin: 0 0 .35rem; }
  .study-guide-more ul, .study-guide-more ol { margin: 0 0 .4rem; padding-left: 1.1rem; }
  .study-guide-more table, .study-core-solution table, .exam-solution table { width: 100%; margin: .5rem 0; border-collapse: collapse; font-size: .72rem; }
  .study-guide-more th, .study-guide-more td, .study-core-solution th, .study-core-solution td, .exam-solution th, .exam-solution td { padding: .3rem .4rem; border: 1px solid #bbb; vertical-align: top; text-align: left; }
  .study-guide-more th, .study-core-solution th, .exam-solution th { background: #f2f2f2; }
  .study-core-solution h4 { margin: 0 0 .6rem; padding-bottom: .4rem; border-bottom: 1px solid #ccc; }
  .study-core-solution h5, .study-core-solution h6 { margin: .75rem 0 .3rem; color: #111; font-size: .76rem; }
  .study-core-solution p, .study-core-solution li { margin: 0 0 .4rem; }
  .study-core-solution ul, .study-core-solution ol { margin: 0 0 .5rem; padding-left: 1.15rem; }
  .study-core-solution blockquote { margin: .4rem 0; }
  .sim-list { display: grid; gap: .5rem; margin: .2rem 0 0; padding: 0; list-style: none; counter-reset: sim; }
  .sim-list > li { position: relative; padding: .55rem .6rem .55rem 2rem; border: 1px solid #ccc; background: #fafafa; counter-increment: sim; }
  .sim-list > li::before { content: counter(sim); position: absolute; top: .55rem; left: .6rem; width: 1rem; height: 1rem; border-radius: 50%; color: #fff; background: #333; font-size: .6rem; font-weight: 800; line-height: 1rem; text-align: center; }
  .sim-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: .2rem .6rem; }
  .sim-head b { font-size: .74rem; }
  .sim-rate { color: #8a1c1c; font-size: .68rem; font-weight: 700; }
  .sim-rate.is-none { color: #777; font-weight: 600; }
  .study-similar .sim-stem { margin: .3rem 0 0; color: #333; font-family: "KoPub Batang", "Noto Serif KR", "AppleMyungjo", "Batang", serif; font-size: .72rem; line-height: 1.6; }
  .study-similar .sim-like { margin: .35rem 0 0; color: #222; font-size: .72rem; line-height: 1.6; }
  .sim-like b, .sim-why > b { display: inline-block; margin-right: .35rem; padding: 0 .3rem; border: 1px solid #111; font-size: .64rem; }
  .sim-why { margin-top: .6rem; padding: .6rem .7rem; border-left: 3px solid #111; background: #f2f2f2; }
  .sim-why > b { margin-bottom: .3rem; }
  .sim-tag { display: inline-block; margin: 0 .25rem 0 .1rem; padding: 0 .28rem; border: 1px solid #888; color: #444; font-size: .6rem; font-weight: 700; line-height: 1.4; vertical-align: .05rem; }
  .sim-why p { margin: 0 0 .3rem; font-size: .74rem; line-height: 1.65; }
  .study-similar-note { margin: .4rem 0 0 !important; color: #666 !important; font-size: .66rem !important; }
  .study-originals { margin: 0 0 .9rem; padding: .7rem .8rem; border: 1px solid #777; background: #fff; color: #222; font-size: .74rem; line-height: 1.6; }
  .study-originals a { color: #111; text-decoration: underline; }
  .study-single-note { margin: 0; padding: .8rem; border: 1px dashed #999; background: #fff; color: #444; font-size: .76rem; line-height: 1.6; }
  .study-passage-assets img + img { margin-top: .5rem; }
  .exam-text { color: #111; font-family: "KoPub Batang", "Noto Serif KR", "AppleMyungjo", "Batang", serif; font-size: .8rem; line-height: 1.85; word-break: keep-all; }
  .study-passage-text.exam-text { padding: .9rem; border: 1px solid #999; background: #fff; }
  .exam-text p { margin: 0 0 .3rem; }
  .exam-text p.ind { text-indent: 1em; }
  .exam-text .ex-guide { margin-bottom: .7rem; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-weight: 700; }
  .exam-text .ex-frame { padding: .75rem .85rem; border: 1px solid #333; }
  .exam-text .verse { margin: 0 0 .8rem; }
  .exam-text .ex-part { margin: .8rem 0 .3rem; font-weight: 700; }
  .exam-text .ex-box { padding: 0 .12rem; border: 1px solid #111; }
  .exam-text u { text-underline-offset: .22em; }
  .exam-text .ex-bracket { position: relative; margin: .2rem 0; padding-right: 2.2rem; border-right: 1px solid #111; }
  .exam-text .ex-bracket::after { content: "[" attr(data-label) "]"; position: absolute; top: 50%; right: .25rem; transform: translateY(-50%); font-size: .8rem; }
  .exam-text .ex-note { margin-top: .5rem; font-size: .74rem; }
  .exam-text .ex-source { text-align: right; }
  .exam-text .ex-omit { margin: .5rem 0; text-align: center; }
  .exam-text .ex-stem { margin-bottom: .55rem; font-size: .86rem; }
  .exam-text .ex-bogi { margin: .7rem 0; padding: .75rem .85rem; border: 1px solid #111; }
  .exam-text .ex-bogi-title { text-align: center; letter-spacing: .3em; }
  .exam-text .ex-choices { margin: .5rem 0 0; padding-left: 0; list-style: none; }
  .exam-text .ex-choices li { margin: .12rem 0; padding-left: 1.4em; text-indent: -1.4em; }
  .exam-text .ex-table { width: 100%; margin: .6rem 0; border-collapse: collapse; font-size: .76rem; }
  .exam-text .ex-table th, .exam-text .ex-table td { padding: .3rem .4rem; border: 1px solid #333; background: #fff; color: #111; }
  .exam-text .ex-figure { margin: .6rem 0; padding: .55rem .7rem; border: 1px dashed #999; color: #555; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: .72rem; }
  .study-question-original.exam-text > p { padding-left: 0; text-indent: 0; }
  .study-question-panel .ex-choices li { transition: background-color .2s, opacity .2s; }
  .study-question-panel .ex-answer-tag { display: none; }
  .study-question-panel .ex-choice-no { display: inline-block; width: 1.3em; height: 1.3em; line-height: 1.3em; text-align: center; text-indent: 0; }
  .study-question-panel.is-revealed .ex-table tr.is-answer td:last-child { white-space: nowrap; }
  .study-question-panel.is-revealed .ex-choices li:not(.is-answer) { opacity: .45; }
  .study-question-panel.is-revealed .ex-choices li.is-answer { position: relative; margin: .25rem -.35rem; padding: .3rem 4.2rem .3rem calc(1.4em + .35rem); border-radius: 2px; background: #fff4bd; box-shadow: inset 0 0 0 1px #8a7300; font-weight: 700; }
  .study-question-panel.is-revealed .ex-choices li.is-answer .ex-choice-no { display: inline-block; border-radius: 50%; box-shadow: 0 0 0 2px #d62828; }
  .study-question-panel.is-revealed .ex-table tr:has(.ex-choice-no):not(.is-answer) { opacity: .45; }
  .study-question-panel.is-revealed .ex-table tr.is-answer td { background: #fff4bd; font-weight: 700; }
  .study-question-panel.is-revealed .ex-table tr.is-answer .ex-choice-no { display: inline-block; border-radius: 50%; box-shadow: 0 0 0 2px #d62828; }
  .study-question-panel.is-revealed .ex-table tr.is-answer .ex-answer-tag { position: static; margin-left: .35rem; transform: none; }
  .study-question-panel.is-revealed .ex-answer-tag { position: absolute; top: 50%; right: .45rem; display: inline-block; padding: .1rem .4rem; transform: translateY(-50%); color: #fff; background: #d62828; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: .66rem; font-style: normal; font-weight: 800; text-indent: 0; }
  .study-question-original.exam-text .ex-stem { padding-left: 1.25em; text-indent: -1.25em; }
  .print-sol-head { display: none; }
  .kice-page-stage { position: relative; }
  .kice-side-nav { position: absolute; top: 50%; z-index: 3; display: flex; align-items: center; justify-content: center; width: 2.9rem; height: 2.9rem; padding: 0 0 .2rem; border: 1px solid #333; border-radius: 50%; color: #111; background: rgb(255 255 255 / 92%); box-shadow: 0 2px 10px rgb(0 0 0 / 18%); font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: 2rem; line-height: 1; cursor: pointer; transform: translateY(-50%); }
  .kice-side-nav:hover, .kice-side-nav:focus-visible { color: #fff; background: #111; outline: none; }
  .kice-side-prev { left: -.6rem; }
  .kice-side-next { right: -.6rem; }
  @media (max-width: 820px) { .kice-side-nav { width: 2.4rem; height: 2.4rem; font-size: 1.7rem; } .kice-side-prev { left: .2rem; } .kice-side-next { right: .2rem; } }
  @media print { .kice-side-nav { display: none !important; } .kice-page-stage { display: contents; } }
  @media print {
    html[data-exam-print="solutions"] .exam-workbook { font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
    html[data-exam-print="solutions"] .exam-solutions { margin: 0 !important; padding: 0 !important; border: 0 !important; color: #000; font-size: 8.3pt; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    html[data-exam-print="solutions"] .exam-solutions > header { display: none; }
    html[data-exam-print="solutions"] .print-sol-head { display: block; margin: 0 0 4mm; padding: 0 0 3mm; border-bottom: 1.2pt solid #000; }
    .print-sol-kicker { margin: 0 0 1mm !important; color: #444 !important; font-size: 7.5pt !important; }
    .print-sol-head h2 { margin: 0 0 3mm !important; padding: 0 !important; border: 0 !important; color: #000 !important; font-size: 14pt !important; font-weight: 800; }
    .print-key { width: 100%; border-collapse: collapse; font-size: 7.6pt; }
    .print-key th { width: 17mm; padding: 1mm 1.5mm; border: .4pt solid #000; background: #eee; text-align: left; white-space: nowrap; }
    .print-key-cells { padding: 0 !important; border: .4pt solid #000; }
    .print-key-cells > div { display: flex; flex-wrap: wrap; }
    .print-key-cells span { box-sizing: border-box; width: calc(100% / 17); padding: .7mm .3mm; border-right: .3pt solid #bbb; border-bottom: .3pt solid #bbb; text-align: center; white-space: nowrap; }
    .print-key span b { margin-right: .6mm; color: #555; font-weight: 600; }
    .print-key span i { margin-left: .3mm; color: #c00; font-size: 6pt; font-style: normal; vertical-align: super; }
    .print-key-note { margin: 1mm 0 0 !important; color: #555 !important; font-size: 6.8pt !important; }
    html[data-exam-print="solutions"] .solution-flow { column-count: 2; column-gap: 7mm; column-rule: .3pt solid #aaa; }
    html[data-exam-print="solutions"] .solution-group { margin: 0 0 3mm !important; padding: 0 !important; border: 0 !important; background: none !important; break-before: auto !important; }
    html[data-exam-print="solutions"] .solution-group-heading { display: block; margin: 0 0 1.6mm; padding: 1.2mm 0 1mm; border-top: 1.4pt solid #000; border-bottom: .5pt solid #000; break-after: avoid; break-inside: avoid; }
    html[data-exam-print="solutions"] .solution-group-heading span { display: block; color: #555; font-size: 6.8pt; font-weight: 700; }
    html[data-exam-print="solutions"] .solution-group-heading h3 { margin: .3mm 0 0; font-size: 9pt; line-height: 1.35; }
    html[data-exam-print="solutions"] .exam-solution-grid { display: block; }
    html[data-exam-print="solutions"] .exam-solution { margin: 0 0 2.4mm; padding: 0 0 2mm; border: 0; border-bottom: .3pt dashed #999; background: none; break-inside: auto !important; }
    html[data-exam-print="solutions"] .exam-solution:last-child { border-bottom: 0; }
    html[data-exam-print="solutions"] .exam-solution header { margin: 0 0 1.2mm; padding: .7mm 1.6mm; border: 0; background: #e9e9e9; break-after: avoid; break-inside: avoid; }
    html[data-exam-print="solutions"] .exam-solution header span, html[data-exam-print="solutions"] .exam-solution header strong { font-size: 8.6pt; }
    html[data-exam-print="solutions"] .exam-solution p, html[data-exam-print="solutions"] .exam-solution li { margin: 0 0 .9mm; color: #000; font-size: 8.1pt; line-height: 1.52; orphans: 2; widows: 2; }
    html[data-exam-print="solutions"] .exam-solution ul, html[data-exam-print="solutions"] .exam-solution ol { margin: 0 0 1.2mm; padding-left: 4mm; }
    html[data-exam-print="solutions"] .exam-solution h4, html[data-exam-print="solutions"] .exam-solution h5, html[data-exam-print="solutions"] .exam-solution h6 { margin: 1.6mm 0 .6mm; font-size: 8.3pt; break-after: avoid; }
    html[data-exam-print="solutions"] .exam-solution blockquote { margin: .8mm 0 1.2mm; padding: .8mm 2mm; border-left: 1.2pt solid #555; background: #f2f2f2; break-inside: avoid; }
    html[data-exam-print="solutions"] .exam-solution blockquote p { margin: 0; font-size: 7.9pt; }
    html[data-exam-print="solutions"] .exam-solution table { width: 100%; margin: .8mm 0 1.4mm; table-layout: fixed; font-size: 7.1pt; break-inside: avoid; }
    html[data-exam-print="solutions"] .exam-solution th, html[data-exam-print="solutions"] .exam-solution td { padding: .5mm .8mm; word-break: break-all; line-height: 1.38; }
  }
</style>`;

// ---------- 글 조립 ----------
const workbook = `${sepCss.replace('<style>', '<style>\n  /* 9월 모의평가 국어 분석 글과 같은 시험지·해설 스타일 */')}
${extraCss}
<style id="exam-page-size">@page { size: B4 portrait; margin: 0; }</style>

<section id="detailed-solutions" class="exam-workbook not-prose" data-learning-mode="paper">
  <header class="exam-workbook-intro">
    <h2>4. 평가원 원본 시험지 · 전 문항 해설</h2>
    <p>한국교육과정평가원이 공개한 문제지(홀수형)를 실제 조판 그대로 제공합니다. 공통과목 12쪽과 선택과목 각 4쪽이며, 페이지를 누르면 크게 볼 수 있습니다. ‘지문·문항 해설’에서는 지문 원문과 56문항 해설을 함께 볼 수 있습니다.</p>
    <div class="exam-print-toolbar" aria-label="시험지 인쇄">
      <button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='speech';document.getElementById('exam-page-size').textContent='@page { size: B4 portrait; margin: 0; }';window.print()">화작 B4 인쇄</button>
      <button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='media';document.getElementById('exam-page-size').textContent='@page { size: B4 portrait; margin: 0; }';window.print()">언매 B4 인쇄</button>
      <button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='speech';document.getElementById('exam-page-size').textContent='@page { size: A4 portrait; margin: 0; }';window.print()">화작 A4 인쇄</button>
      <button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='media';document.getElementById('exam-page-size').textContent='@page { size: A4 portrait; margin: 0; }';window.print()">언매 A4 인쇄</button>
      <button type="button" onclick="document.documentElement.dataset.examPrint='solutions';document.getElementById('exam-page-size').textContent='@page { size: A4 portrait; margin: 13mm 12mm 14mm; @bottom-center { content: counter(page) \' / \' counter(pages); font-size: 8pt; color: #555; } }';window.print()">해설 인쇄</button>
      <small>시험지는 공통 12쪽과 선택한 과목 4쪽만 출력됩니다.</small>
    </div>
  </header>
  <nav class="study-mode-tabs" aria-label="학습 화면 선택">
    <button type="button" aria-pressed="true" onclick="const w=this.closest('.exam-workbook');w.dataset.learningMode='paper';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">시험지 보기</button>
    <button type="button" aria-pressed="false" onclick="const w=this.closest('.exam-workbook');w.dataset.learningMode='analysis';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">지문·문항 해설</button>
  </nav>
  <div class="kice-paper" data-view-set="common" aria-label="${EXAM} 국어 문제지">
    <nav class="kice-view-tabs" aria-label="시험지 과목 선택">
      <button type="button" aria-pressed="true" onclick="const p=this.closest('.kice-paper');p.dataset.viewSet='common';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">공통과목 1～12쪽</button>
      <button type="button" aria-pressed="false" onclick="const p=this.closest('.kice-paper');p.dataset.viewSet='speech';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">화법과 작문</button>
      <button type="button" aria-pressed="false" onclick="const p=this.closest('.kice-paper');p.dataset.viewSet='media';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">언어와 매체</button>
    </nav>
${paperHtml}
  </div>
  ${analysisHtml}
  <div class="legacy-solution-wrap" data-open="false">
    <button class="legacy-solution-toggle" type="button" aria-expanded="false" onclick="const w=this.closest('.legacy-solution-wrap');const open=w.dataset.open!=='true';w.dataset.open=String(open);this.setAttribute('aria-expanded',open);this.textContent=open?'전체 해설 접기':'56문항 해설 한 번에 펼치기'">56문항 해설 한 번에 펼치기</button>
    <section class="exam-solutions" aria-label="전 문항 해설">
      <header>
        <h2>전 문항 해설</h2>
        <p>평가원 공개 정답 기준 해설입니다. 문제는 위 원본 시험지를 기준으로 확인하세요.</p>
      </header>
      <div class="print-sol-head">
        <p class="print-sol-kicker">SN독학기숙학원 · 평가원 공개 정답 기준 · 홀수형</p>
        <h2>${EXAM} 국어 영역 전 문항 해설</h2>
        ${printAnswerKey}
      </div>
      <div class="solution-flow">${solutionHtml}</div>
    </section>
  </div>
  <dialog id="kice-page-modal" class="kice-page-modal" onclick="if(event.target===this)this.close()">
    <div class="kice-modal-bar">
      <strong data-modal-label>시험지 크게 보기</strong>
      <span>확대된 면은 안쪽에서 좌우·상하로 이동할 수 있습니다.</span>
      <button type="button" aria-label="닫기" onclick="this.closest('dialog').close()">×</button>
    </div>
    <div class="kice-modal-canvas"><img alt=""></div>
  </dialog>
</section>`;

const toc = [
  ['overall', '1. 시험 총평'],
  ['area-notes', '2. 영역별 정리(오답률, 등급컷 AI 예측)'],
  ['answer-table', '3. 정답 (홀수형)'],
  ['detailed-solutions', '4. 평가원 원본 시험지 · 전 문항 해설'],
  ['study-plan', '5. 2028학년도 수능 준비생을 위한 국어 공부 방향'],
  ['downloads', '6. 문제지·정답표 PDF'],
];

const article = `<p class="text-sm text-gray-500 dark:text-gray-400 mb-8">
  ${EXAM} 국어 영역 문제 및 해설 (홀수형)
</p>

<p class="${P}">
  안녕하세요, SN독학기숙학원입니다.<br />
  2026년 11월 19일 시행된 <strong>${EXAM} 국어 영역</strong>의 정답과 전 문항 해설,
  시험 총평을 정리했습니다. 평가원 원본 시험지를 그대로 보면서 지문과 문항 해설을 함께 확인할 수 있습니다.
</p>

${quote ? `<div class="border-l-2 border-gray-900 dark:border-gray-100 pl-4 my-8">
  <p class="text-lg text-gray-900 dark:text-gray-100 leading-relaxed">${esc(quote)}</p>
</div>` : ''}

<div id="summary" class="not-prose border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg p-5 my-6">
  <p class="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">핵심 요약</p>
  <ul class="space-y-2 text-gray-800 dark:text-gray-200 leading-relaxed">
    <li>• 정답: 한국교육과정평가원 공개 정답표 기준(홀수형)</li>
    <li>• 수록 범위: 공통 34문항과 화법과 작문·언어와 매체 각 11문항, 총 56문항(응시 기준 45문항)</li>
    <li>• 평가원 원본 시험지 20쪽 보기와 B4·A4 인쇄</li>
    <li>• 지문 원문과 문항별 해설, 지문 구조·출제 포인트 정리</li>
    <li>• 예상 오답률과 등급컷은 AI 예측치</li>
  </ul>
</div>

<div class="not-prose border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 rounded-lg p-5 my-6">
  <p class="font-bold text-amber-950 dark:text-amber-100 mb-2">정답·예측치 안내</p>
  <p class="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
    정답은 한국교육과정평가원이 문제지와 함께 공개한 정답표 기준이며, 해설은 SN독학기숙학원이 작성했습니다.
    ‘영역별 정리’의 예상 오답률과 등급컷은 AI가 문항 구조를 분석해 낸 예측치입니다. 실제 수치는 입시기관 가채점 결과와
    평가원 채점 결과 발표로 확인하세요. 이의 신청 심사 결과에 따라 확정 정답이 바뀌면 함께 고칩니다.
  </p>
</div>

<nav id="table-of-contents" class="not-prose border-y border-gray-300 dark:border-gray-700 py-5 my-8" aria-label="글 목차">
  <p class="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">목차</p>
  <ol class="grid gap-2 text-gray-800 dark:text-gray-200">
${toc.map(([id, t]) => `    <li><a class="hover:underline" href="#${id}">${t}</a></li>`).join('\n')}
  </ol>
</nav>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

${h2('overall', '1. 시험 총평')}

${tw(md(leadNote.startsWith('**') ? `> ${leadNote}` : leadNote, 0))}
${tw(md(dropRule(oneLine)))}
${tw(md(dropRule(areaFeel)))}
${tw(md(dropRule(hardSets)))}

${h2('area-notes', '2. 영역별 정리(오답률, 등급컷 AI 예측)')}

${tails.map((t) => tw(`<h3>${esc(t.area)}: ${inline(esc(t.title))}</h3>\n${md(t.bodyMd, 2)}`)).join('\n')}
${tw(md(dropRule(errRate)))}
${tw(md(dropRule(gradeCut)))}

${h2('answer-table', '3. 정답 (홀수형)')}

<p class="${P}">공통 1~34번과 본인이 응시한 선택과목 35~45번을 확인하세요. 공통 76점과 선택 24점을 더해 100점이며, 3점 문항은 번호 옆에 표시했습니다.</p>

<div class="not-prose grid gap-6 my-6">
  <section class="border-y border-gray-400 dark:border-gray-600 py-4">
    <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">공통과목</h3>
    ${answerGrid('common', 1, 34)}
  </section>
  <section class="border-b border-gray-400 dark:border-gray-600 pb-4">
    <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">화법과 작문</h3>
    ${answerGrid('hwajak', 35, 45)}
  </section>
  <section class="border-b border-gray-400 dark:border-gray-600 pb-4">
    <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">언어와 매체</h3>
    ${answerGrid('eonmae', 35, 45)}
  </section>
</div>

${workbook}

${h2('study-plan', '5. 2028학년도 수능을 준비하는 학생을 위한 국어 공부 방향')}

<p class="${P}">이번 수능에서 점수를 가른 함정을 바탕으로, 다음 수능을 준비하는 예비 고3과 N수생에게 권하는 공부 방향입니다.</p>

${tw(md(dropRule(studyDir).replace(/^## .*\n/, '')))}

${allWhyHtml}

${h2('downloads', '6. 문제지·정답표 PDF')}

<ul class="text-gray-800 dark:text-gray-200 leading-relaxed space-y-2 mb-4">
  <li>• <a class="underline hover:no-underline" href="/pdfs/2027-suneung-korean.pdf" download>${EXAM} 국어 영역 문제지 PDF</a></li>
  <li>• <a class="underline hover:no-underline" href="/pdfs/2027-suneung-korean_answer.pdf" download>${EXAM} 국어 영역 정답표 PDF</a></li>
</ul>
<p class="text-sm text-gray-600 dark:text-gray-400 mb-8">이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다.</p>

<h2 id="sources" class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
  참고 자료
</h2>

<ul class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 mb-8">
  <li>• 한국교육과정평가원 공개 시험지 및 정답</li>
  <li>• <a class="underline hover:no-underline" href="/originals/changseon-gamui-rok">SN Originals, 「창선감의록」</a></li>
  <li>• <a class="underline hover:no-underline" href="/originals/chamhuirok">SN Originals, 윤동주 「참회록」</a></li>
</ul>

<p class="text-xs text-gray-500 dark:text-gray-400">작성: SN독학기숙학원 · 2026.11.19 작성 · 예상 오답률·등급컷은 AI 예측치</p>
`;

fs.writeFileSync(OUT, article);
console.log(`유사 기출: ${SIMILAR.size}문항`);
console.log(`생성: ${path.relative(ROOT, OUT)} (${(Buffer.byteLength(article) / 1024).toFixed(0)}KB, 세트 ${sets.length}, 문항 ${sets.reduce((a, s) => a + s.questions.length, 0)})`);
