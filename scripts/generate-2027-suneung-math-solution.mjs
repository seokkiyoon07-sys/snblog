// 2027학년도 수능 수학 문제 및 해설 페이지 생성기
// 국어 페이지(scripts/generate-2027-suneung-korean-solution.mjs)와 같은 형식: 9월 국어 분석 글의 시험지 보기 + 문항 해설
//
// 입력
//   scripts/data/2027-suneung-math/answers.json   평가원 공식 정답·배점
//   scripts/data/2027-suneung-math/md/            해설 원고(0_총평, 1_공통, 2_확통, 3_미적분, 4_기하) — 없으면 '해설 준비 중'
//   public/images/problem-download/2027-suneung-math-solution/{exam-pages,questions}/*.webp
// 출력
//   content/problem-download/2027-suneung-math-solution.html
//
// 사용법: node scripts/generate-2027-suneung-math-solution.mjs [--sync]
//   --sync  SN_출제 폴더의 블로그 원고(27수능수학_풀이/블로그/*.md)를 data/md로 먼저 복사
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ID = '2027-suneung-math-solution';
const DATA = path.join(ROOT, 'scripts/data/2027-suneung-math');
const OUT = path.join(ROOT, 'content/problem-download', `${ID}.html`);
const IMG = `/images/problem-download/${ID}`;
const IMG_DIR = path.join(ROOT, 'public', IMG);
const SYNC_FROM =
  '/Users/seokkiyoon/Library/CloudStorage/SynologyDrive-seokkimac/07_ SN_work/SN_출제/01_기준자료/수학/평가원/27수능수학_풀이/블로그';
const EXAM = '2027학년도 대학수학능력시험';

if (process.argv.includes('--sync') && fs.existsSync(SYNC_FROM)) {
  for (const f of fs.readdirSync(SYNC_FROM).filter((x) => x.endsWith('.md'))) {
    fs.copyFileSync(path.join(SYNC_FROM, f), path.join(DATA, 'md', f));
  }
  const simFrom = path.join(SYNC_FROM, '../유사기출/블로그');
  if (fs.existsSync(simFrom)) {
    for (const f of fs.readdirSync(simFrom).filter((x) => x.endsWith('.md') || x === 'pred.json')) {
      fs.copyFileSync(path.join(simFrom, f), path.join(DATA, 'similar', f));
    }
  }
  console.log('원고 동기화 완료');
}

// ---------- 정답·배점 ----------
const A = JSON.parse(fs.readFileSync(path.join(DATA, 'answers.json'), 'utf8'));
const SUBJECTS = [
  { key: 'common', json: 'COMMON', name: '공통', short: '공통', from: 1, to: 22, file: '1_공통.md' },
  { key: 'prob', json: 'PROB', name: '확률과 통계', short: '확통', from: 23, to: 30, file: '2_확통.md' },
  { key: 'calc', json: 'CALC', name: '미적분', short: '미적', from: 23, to: 30, file: '3_미적분.md' },
  { key: 'geo', json: 'GEOM', name: '기하', short: '기하', from: 23, to: 30, file: '4_기하.md' },
];
const CIRCLED = ['', '①', '②', '③', '④', '⑤'];
// 1~15, 23~28번은 5지선다, 16~22, 29~30번은 단답형
const isChoice = (n) => (n >= 1 && n <= 15) || (n >= 23 && n <= 28);
const answerOf = (subj, n) => {
  const v = A[subj.json][String(n)];
  return isChoice(n) ? CIRCLED[v] : String(v);
};
const pts = (subj, n) => (subj.key === 'common' ? A.POINTS.COMMON[String(n)] : A.POINTS.SEL[String(n)]);

// ---------- 마크다운 ----------
marked.setOptions({ gfm: true, breaks: false });
// 수식($...$, $$...$$)은 KaTeX가 브라우저에서 렌더링하므로 마크다운이 건드리지 않게 보호한다
function md(src, shift = 1) {
  const keep = [];
  let s = src.replace(/^(#{1,5}) /gm, `$1${'#'.repeat(shift)} `);
  s = s.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, (m) => `@@MATH${keep.push(m) - 1}@@`);
  s = s.replace(/~/g, '\\~').replace(/\*\*([^*\n]+?)\*\*/g, '<strong>$1</strong>');
  let html = marked.parse(s);
  html = html.replace(/@@MATH(\d+)@@/g, (m, i) => keep[+i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
  return html;
}
const inline = (s) => marked.parseInline(s.replace(/~/g, '\\~'));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripRules = (s) => s.replace(/^\s*---\s*$/gm, '').replace(/\n{3,}/g, '\n\n').trim();
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

// ---------- 해설 원고 ----------
const SOL = new Map(); // `${subj}-${n}` -> {title, bodyMd}
for (const subj of SUBJECTS) {
  const f = path.join(DATA, 'md', subj.file);
  if (!fs.existsSync(f)) continue;
  const text = fs.readFileSync(f, 'utf8');
  for (const part of text.split(/^(?=### \d+번)/m).slice(1)) {
    const l = part.indexOf('\n');
    const head = part.slice(4, l).trim();
    const n = +head.match(/^(\d+)번/)[1];
    const ans = (head.match(/정답\s*([①②③④⑤]|\d+)/) || [])[1];
    if (ans !== answerOf(subj, n)) throw new Error(`정답 불일치: ${subj.key} ${n} 원고 ${ans} / 평가원 ${answerOf(subj, n)}`);
    const title = head.replace(/^\d+번\.?\s*/, '').replace(/\s*(—|\|)?\s*정답\s*([①②③④⑤]|\d+)\s*/, ' ').replace(/\*\*/g, '').trim();
    SOL.set(`${subj.key}-${n}`, { title, bodyMd: stripRules(part.slice(l + 1)) });
  }
}
const reviewPath = path.join(DATA, 'md', '0_총평.md');
const review = fs.existsSync(reviewPath) ? fs.readFileSync(reviewPath, 'utf8').replace(/^# .*\n/, '') : '';
const reviewParts = review.split(/^(?=## )/m);
const part = (re) => reviewParts.find((x) => re.test(x)) || '';
const dropRule = (s) => s.replace(/\n---\s*$/, '\n');

// ---------- 유사 기출·예상 오답률 (SNarGPT RAG, 있을 때만) ----------
const SIM_KEY = { 공통: 'common', 확통: 'prob', 확률과통계: 'prob', '확률과 통계': 'prob', 미적분: 'calc', 기하: 'geo' };
const SIMILAR = new Map();
const PRED = new Map();
const simDir = path.join(DATA, 'similar');
const NO_STAT = /통계\s*(미확인|없음)|확인\s*불가/;
if (fs.existsSync(simDir)) {
  for (const f of fs.readdirSync(simDir).filter((x) => x.endsWith('.md'))) {
    const text = fs.readFileSync(path.join(simDir, f), 'utf8');
    for (const partTxt of text.split(/^(?=### )/m).slice(1)) {
      const m = partTxt.match(/^### (공통|확통|확률과 통계|미적분|기하) (\d+)번/);
      if (!m) continue;
      const rows = partTxt
        .split('\n')
        .filter((l) => l.startsWith('|') && !/^\|\s*-/.test(l))
        .slice(1)
        .map((l) => l.split('|').slice(1, -1).map((c) => c.trim()));
      const why = (partTxt.match(/\*\*유사 이유\*\*\s*[:：]\s*([\s\S]*?)(?=\n\s*\n|$)/) || [])[1] || '';
      SIMILAR.set(`${SIM_KEY[m[1]]}-${m[2]}`, { rows, why: why.trim() });
    }
  }
  const pj = path.join(simDir, 'pred.json');
  if (fs.existsSync(pj)) {
    for (const x of JSON.parse(fs.readFileSync(pj, 'utf8'))) {
      const t = String(x.pred || '').replace(/\s/g, '');
      const r = t.match(/(\d+)~(\d+)%/);
      const one = t.match(/^약?(\d+)%$/);
      if (r) PRED.set(`${SIM_KEY[x.sec]}-${x.q}`, `약 ${Math.round((+r[1] + +r[2]) / 2)}% (${r[1]}~${r[2]}%)`);
      else if (one) PRED.set(`${SIM_KEY[x.sec]}-${x.q}`, `약 ${one[1]}%`);
    }
  }
}
const rateText = (r) => (NO_STAT.test(r || '') ? '' : (r || '').trim());
function renderSimilar(sim) {
  const items = sim.rows
    .map(([exam, no, stem, rate, like]) => `<li>
  <div class="sim-head"><b>${inline(esc(`${exam || ''} ${no || ''}`))}</b>${rateText(rate) ? `<span class="sim-rate">${inline(esc(rateText(rate)))}</span>` : ''}</div>
  ${stem ? `<p class="sim-stem">${inline(esc(stem))}</p>` : ''}
  ${like ? `<p class="sim-like"><b>닮은 점</b>${inline(esc(like))}</p>` : ''}
</li>`)
    .join('');
  return `${items ? `<ol class="sim-list">${items}</ol>` : '<p class="sim-none">확인된 유사 기출이 아직 없습니다.</p>'}${sim.why ? `<div class="sim-why"><b>유사 이유</b>${md(sim.why)}</div>` : ''}`;
}

// ---------- 시험지 원본 면 ----------
const pageSets = [
  { id: 'common', label: '공통과목', badge: '필수', pages: [1, 2, 3, 4, 5, 6, 7, 8] },
  { id: 'prob', label: '확률과 통계', badge: '선택', pages: [9, 10, 11, 12] },
  { id: 'calc', label: '미적분', badge: '선택', pages: [13, 14, 15, 16] },
  { id: 'geo', label: '기하', badge: '선택', pages: [17, 18, 19, 20] },
];
const pageFile = (ps, n) => `${IMG}/exam-pages/${ps.id}-${String(n).padStart(2, '0')}.webp`;
for (const ps of pageSets) for (const n of ps.pages) if (!fs.existsSync(path.join(ROOT, 'public', pageFile(ps, n)))) throw new Error(`시험지 면 없음 ${ps.id} ${n}`);
const navBtn = (dir, label) =>
  `<button class="kice-side-nav kice-side-${dir === -1 ? 'prev' : 'next'}" type="button" aria-label="${label} ${dir === -1 ? '이전' : '다음'} 쪽" onclick="const l=this.parentElement.querySelector('.kice-page-list');l.scrollBy({left:${dir}*l.clientWidth*.9,behavior:'smooth'})">${dir === -1 ? '‹' : '›'}</button>`;
const paperHtml = pageSets
  .map((ps) => `<section class="kice-page-set" data-exam-set="${ps.id}">
  <header class="kice-set-heading"><span>${ps.badge}</span><h3>${ps.label}</h3><b>${ps.pages.length}쪽</b></header>
  <div class="kice-page-stage">
  ${navBtn(-1, ps.label)}
  <div class="kice-page-list">
${ps.pages
  .map((n, i) => {
    const src = pageFile(ps, n);
    const alt = `${EXAM} 수학 ${ps.label} ${n}쪽`;
    return `    <figure class="kice-page" data-page-number="${n}">
      <button class="kice-page-open" type="button" data-src="${src}" data-alt="${alt}" data-label="${ps.label} ${n}쪽" aria-label="${ps.label} ${n}쪽 크게 보기" onclick="const d=document.getElementById('kice-page-modal');const i=d.querySelector('img');i.src=this.dataset.src;i.alt=this.dataset.alt;d.querySelector('[data-modal-label]').textContent=this.dataset.label;d.showModal()">
        <img src="${src}" alt="${alt}" ${ps.id === 'common' && i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
      </button>
      <figcaption>${ps.label} ${n}쪽 · 누르면 크게 볼 수 있습니다.</figcaption>
    </figure>`;
  })
  .join('\n')}
  </div>
  ${navBtn(1, ps.label)}
  </div>
</section>`)
  .join('\n');

// ---------- 문항 해설 ----------
function renderQuestion(subj, n, first) {
  const sol = SOL.get(`${subj.key}-${n}`);
  const img = `${IMG}/questions/${subj.key}-${n}.webp`;
  if (!fs.existsSync(path.join(ROOT, 'public', img))) throw new Error(`문항 이미지 없음 ${subj.key}-${n}`);
  return `<article class="study-question-panel" data-study-question="${n}"${first ? '' : ' hidden'}>
  <header class="study-question-heading">
    <div><b>${n}번</b><span>${subj.name}</span><span>${pts(subj, n)}점</span><span>${isChoice(n) ? '5지선다형' : '단답형'}</span></div>
    <button type="button" aria-expanded="false" onclick="const p=this.closest('.study-question-panel');const open=p.classList.toggle('is-revealed');this.setAttribute('aria-expanded',open);this.textContent=open?'해설 접기':'정답·해설 보기'">정답·해설 보기</button>
  </header>
  <section class="study-question-original math-question"><img src="${img}" alt="${EXAM} 수학 ${subj.name} ${n}번 문제" loading="lazy" decoding="async"></section>
  <section class="study-answer-reveal">
    <div class="study-answer-line"><span>정답</span><strong>${answerOf(subj, n)}</strong></div>
    <div class="study-explain-block study-core-solution">${sol ? `${sol.title ? `<h4>${inline(esc(sol.title))}</h4>` : ''}${md(sol.bodyMd, 2)}` : '<p>해설을 준비하고 있습니다.</p>'}</div>
    ${PRED.has(`${subj.key}-${n}`) || SIMILAR.has(`${subj.key}-${n}`) ? `<div class="study-explain-block study-similar"><h4>추정 오답률 · 유사 기출</h4>${PRED.has(`${subj.key}-${n}`) ? `<p class="sim-pred"><b>AI 예상 오답률</b> ${PRED.get(`${subj.key}-${n}`)}</p>` : ''}${SIMILAR.has(`${subj.key}-${n}`) ? renderSimilar(SIMILAR.get(`${subj.key}-${n}`)) : ''}<p class="study-similar-note">SNarGPT가 판단 구조가 닮은 기출을 찾아 붙인 참고 자료입니다. 예상 오답률은 AI 예측이고, 기출의 실제 오답률은 출처를 확인한 값만 표시합니다.</p></div>` : ''}
  </section>
</article>`;
}
function renderLab(subj, firstLab) {
  const nums = [];
  for (let n = subj.from; n <= subj.to; n++) nums.push(n);
  return `<section class="study-lab math-lab" data-study-unit="${subj.key}"${firstLab ? '' : ' hidden'}>
  <header class="study-lab-heading"><div><span>${subj.key === 'common' ? '공통과목' : '선택과목'}</span><h2>${subj.name} ${subj.from}～${subj.to}번</h2></div><small>문항 · 정답 · 해설</small></header>
  <nav class="study-question-tabs" aria-label="문항 선택" data-count="${nums.length}" style="--cols:${nums.length > 11 ? Math.ceil(nums.length / 2) : nums.length}">${nums.map((n) => `<button type="button" aria-pressed="${n === subj.from}" onclick="const l=this.closest('.study-lab');l.querySelectorAll('[data-study-question]').forEach(p=>p.hidden=p.dataset.studyQuestion!=='${n}');this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">${n}</button>`).join('')}</nav>
  ${nums.map((n) => renderQuestion(subj, n, n === subj.from)).join('\n')}
</section>`;
}
const analysisHtml = `<section class="study-analysis" aria-label="전 문항 해설">
  <header class="study-analysis-heading"><div><span>공통 22문항 · 선택 각 8문항</span><h2>과목을 고르고 문항 번호를 누르세요</h2></div><p>문항마다 ‘정답·해설 보기’를 누르면 정답과 풀이가 열립니다.</p></header>
  <nav class="study-unit-tabs" aria-label="과목 선택">${SUBJECTS.map((s, i) => `<button type="button" data-unit-target="${s.key}" aria-pressed="${i === 0}" onclick="const a=this.closest('.study-analysis');a.querySelectorAll('.study-lab').forEach(l=>l.hidden=l.dataset.studyUnit!==this.dataset.unitTarget);this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))"><span>${s.key === 'common' ? '공통' : '선택'}</span>${s.name}</button>`).join('')}</nav>
  ${SUBJECTS.map((s, i) => renderLab(s, i === 0)).join('\n')}
</section>`;
const solutionHtml = SUBJECTS.map((s) => {
  const items = [];
  for (let n = s.from; n <= s.to; n++) {
    const sol = SOL.get(`${s.key}-${n}`);
    items.push(`<article class="exam-solution" id="solution-${s.key}-${n}"><header><span>${n}번</span><strong>정답 ${answerOf(s, n)}</strong></header>${sol ? md(sol.bodyMd, 2) : '<p>해설을 준비하고 있습니다.</p>'}</article>`);
  }
  return `<section class="solution-group" data-solution-set="${s.key}"><header class="solution-group-heading"><span>${s.key === 'common' ? '공통' : '선택'}</span><h3>${s.name} ${s.from}～${s.to}번</h3></header><div class="exam-solution-grid">${items.join('\n')}</div></section>`;
}).join('\n');

// ---------- 정답 ----------
const answerGrid = (s) => {
  const cells = [];
  for (let n = s.from; n <= s.to; n++) cells.push(`<span><b>${n}:</b> ${answerOf(s, n)}<small class="ml-1 text-gray-500">${pts(s, n)}점</small></span>`);
  return `<section class="border-b border-gray-400 dark:border-gray-600 pb-4"><h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">${s.name}</h3><div class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-2 text-gray-800 dark:text-gray-200 tabular-nums">${cells.join('')}</div></section>`;
};
const printKey = `<table class="print-key">${SUBJECTS.map((s) => {
  const c = [];
  for (let n = s.from; n <= s.to; n++) c.push(`<span><b>${n}</b>${answerOf(s, n)}</span>`);
  return `<tr><th>${s.name}</th><td class="print-key-cells"><div>${c.join('')}</div></td></tr>`;
}).join('')}</table>`;

// ---------- 스타일 ----------
const sepScript = fs.readFileSync(path.join(ROOT, 'scripts/generate-september-korean-workbook.mjs'), 'utf8');
const sepCss = sepScript.slice(sepScript.indexOf('<style>\n  .exam-workbook'), sepScript.indexOf('</style>', sepScript.indexOf('<style>\n  .exam-workbook')) + 8);
if (!sepCss.includes('.study-lab')) throw new Error('9월 스타일을 찾지 못함');
const extraCss = `<style>
  .kice-paper[data-view-set="prob"] .kice-page-set:not([data-exam-set="prob"]),
  .kice-paper[data-view-set="calc"] .kice-page-set:not([data-exam-set="calc"]),
  .kice-paper[data-view-set="geo"] .kice-page-set:not([data-exam-set="geo"]),
  .kice-paper[data-view-set="common"] .kice-page-set:not([data-exam-set="common"]) { display: none; }
  .kice-page-stage { position: relative; }
  .kice-side-nav { position: absolute; top: 50%; z-index: 3; display: flex; align-items: center; justify-content: center; width: 2.9rem; height: 2.9rem; padding: 0 0 .2rem; border: 1px solid #333; border-radius: 50%; color: #111; background: rgb(255 255 255 / 92%); box-shadow: 0 2px 10px rgb(0 0 0 / 18%); font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: 2rem; line-height: 1; cursor: pointer; transform: translateY(-50%); }
  .kice-side-nav:hover, .kice-side-nav:focus-visible { color: #fff; background: #111; outline: none; }
  .kice-side-prev { left: -.6rem; } .kice-side-next { right: -.6rem; }
  .math-lab .study-question-tabs { display: grid; grid-template-columns: repeat(var(--cols, 8), minmax(0, 1fr)); overflow: visible; border-width: 1px 0 0 1px; }
  .math-lab .study-question-tabs button, .math-lab .study-question-tabs button:last-child { border-right: 1px solid #111; border-bottom: 1px solid #111; }
  @media (max-width: 820px) { .math-lab .study-question-tabs { --cols: 6 !important; } .math-lab .study-question-tabs[data-count="8"] { --cols: 4 !important; } }
  .math-question { padding: 1rem; background: #fff; }
  .math-question img { display: block; width: 100%; max-width: 40rem; height: auto; margin: 0 auto; }
  .study-core-solution h4 { margin: 0 0 .6rem; padding-bottom: .4rem; border-bottom: 1px solid #ccc; }
  .study-core-solution h5, .study-core-solution h6 { margin: .75rem 0 .3rem; color: #111; font-size: .78rem; }
  .study-core-solution p, .study-core-solution li { margin: 0 0 .45rem; font-size: .8rem; line-height: 1.75; }
  .study-core-solution ul, .study-core-solution ol { margin: 0 0 .5rem; padding-left: 1.15rem; }
  .study-core-solution .katex-display { margin: .6rem 0; overflow-x: auto; overflow-y: hidden; }
  .study-core-solution table, .exam-solution table { width: 100%; margin: .5rem 0; border-collapse: collapse; font-size: .74rem; }
  .study-core-solution th, .study-core-solution td, .exam-solution th, .exam-solution td { padding: .3rem .4rem; border: 1px solid #bbb; }
  .print-sol-head { display: none; }
  .sim-pred { margin: 0 0 .5rem !important; font-size: .78rem; } .sim-pred b { margin-right: .35rem; padding: 0 .3rem; border: 1px solid #111; font-size: .64rem; }
  .sim-list { display: grid; gap: .5rem; margin: .2rem 0 0; padding: 0; list-style: none; counter-reset: sim; }
  .sim-list > li { position: relative; padding: .55rem .6rem .55rem 2rem; border: 1px solid #ccc; background: #fafafa; counter-increment: sim; }
  .sim-list > li::before { content: counter(sim); position: absolute; top: .55rem; left: .6rem; width: 1rem; height: 1rem; border-radius: 50%; color: #fff; background: #333; font-size: .6rem; font-weight: 800; line-height: 1rem; text-align: center; }
  .sim-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: .2rem .6rem; } .sim-head b { font-size: .74rem; }
  .sim-rate { color: #8a1c1c; font-size: .68rem; font-weight: 700; }
  .study-similar .sim-stem { margin: .3rem 0 0; color: #333; font-size: .72rem; line-height: 1.6; }
  .study-similar .sim-like { margin: .35rem 0 0; color: #222; font-size: .72rem; line-height: 1.6; }
  .sim-like b, .sim-why > b { display: inline-block; margin-right: .35rem; padding: 0 .3rem; border: 1px solid #111; font-size: .64rem; }
  .sim-why { margin-top: .6rem; padding: .6rem .7rem; border-left: 3px solid #111; background: #f2f2f2; }
  .sim-why p { margin: 0 0 .3rem; font-size: .74rem; line-height: 1.65; }
  .study-similar-note { margin: .4rem 0 0 !important; color: #666 !important; font-size: .66rem !important; }
  @media (max-width: 820px) { .kice-side-nav { width: 2.4rem; height: 2.4rem; font-size: 1.7rem; } .kice-side-prev { left: .2rem; } .kice-side-next { right: .2rem; } }
  @media print {
    .kice-side-nav { display: none !important; } .kice-page-stage { display: contents; }
    html[data-exam-elective] .kice-paper [data-exam-set]:not([data-exam-set="common"]) { display: none !important; }
    html[data-exam-elective="prob"] .kice-paper [data-exam-set="prob"], html[data-exam-elective="calc"] .kice-paper [data-exam-set="calc"], html[data-exam-elective="geo"] .kice-paper [data-exam-set="geo"] { display: contents !important; }
    html[data-exam-print="solutions"] .exam-workbook { font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
    html[data-exam-print="solutions"] .exam-solutions { margin: 0 !important; padding: 0 !important; border: 0 !important; color: #000; font-size: 8.3pt; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    html[data-exam-print="solutions"] .exam-solutions > header { display: none; }
    html[data-exam-print="solutions"] .print-sol-head { display: block; margin: 0 0 4mm; padding: 0 0 3mm; border-bottom: 1.2pt solid #000; }
    .print-sol-head h2 { margin: 0 0 3mm !important; padding: 0 !important; border: 0 !important; color: #000 !important; font-size: 14pt !important; font-weight: 800; }
    .print-key { width: 100%; border-collapse: collapse; font-size: 7.6pt; }
    .print-key th { width: 20mm; padding: 1mm 1.5mm; border: .4pt solid #000; background: #eee; text-align: left; white-space: nowrap; }
    .print-key-cells { padding: 0 !important; border: .4pt solid #000; }
    .print-key-cells > div { display: flex; flex-wrap: wrap; }
    .print-key-cells span { box-sizing: border-box; width: calc(100% / 11); padding: .7mm .3mm; border-right: .3pt solid #bbb; border-bottom: .3pt solid #bbb; text-align: center; white-space: nowrap; }
    .print-key span b { margin-right: .6mm; color: #555; font-weight: 600; }
    html[data-exam-print="solutions"] .solution-flow { column-count: 2; column-gap: 7mm; column-rule: .3pt solid #aaa; }
    html[data-exam-print="solutions"] .solution-group { margin: 0 0 3mm !important; padding: 0 !important; border: 0 !important; background: none !important; break-before: auto !important; }
    html[data-exam-print="solutions"] .solution-group-heading { display: block; margin: 0 0 1.6mm; padding: 1.2mm 0 1mm; border-top: 1.4pt solid #000; border-bottom: .5pt solid #000; break-after: avoid; }
    html[data-exam-print="solutions"] .exam-solution-grid { display: block; }
    html[data-exam-print="solutions"] .exam-solution { margin: 0 0 2.4mm; padding: 0 0 2mm; border: 0; border-bottom: .3pt dashed #999; background: none; break-inside: auto !important; }
    html[data-exam-print="solutions"] .exam-solution header { margin: 0 0 1.2mm; padding: .7mm 1.6mm; border: 0; background: #e9e9e9; break-after: avoid; }
    html[data-exam-print="solutions"] .exam-solution p, html[data-exam-print="solutions"] .exam-solution li { margin: 0 0 .9mm; color: #000; font-size: 8.1pt; line-height: 1.52; }
  }
</style>`;

const printBtn = (label, elective, size) =>
  `<button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='${elective}';document.getElementById('exam-page-size').textContent='@page { size: ${size} portrait; margin: 0; }';window.print()">${label}</button>`;
const workbook = `${sepCss}
${extraCss}
<style id="exam-page-size">@page { size: A4 portrait; margin: 0; }</style>

<section id="detailed-solutions" class="exam-workbook not-prose" data-learning-mode="paper">
  <header class="exam-workbook-intro">
    <h2>4. 평가원 원본 시험지 · 전 문항 해설</h2>
    <p>한국교육과정평가원이 공개한 문제지(홀수형)를 실제 조판 그대로 제공합니다. 공통과목 8쪽과 선택과목 각 4쪽이며, 페이지를 누르면 크게 볼 수 있습니다. ‘문항 해설’에서는 46문항의 정답과 풀이를 문항별로 볼 수 있습니다.</p>
    <div class="exam-print-toolbar" aria-label="시험지 인쇄">
      ${printBtn('확통 인쇄', 'prob', 'A4')}${printBtn('미적분 인쇄', 'calc', 'A4')}${printBtn('기하 인쇄', 'geo', 'A4')}
      <button type="button" onclick="document.documentElement.dataset.examPrint='solutions';document.getElementById('exam-page-size').textContent='@page { size: A4 portrait; margin: 13mm 12mm 14mm; @bottom-center { content: counter(page) \\' / \\' counter(pages); font-size: 8pt; color: #555; } }';window.print()">해설 인쇄</button>
      <small>시험지는 공통 8쪽과 선택한 과목 4쪽만 출력됩니다.</small>
    </div>
  </header>
  <nav class="study-mode-tabs" aria-label="학습 화면 선택">
    <button type="button" aria-pressed="true" onclick="const w=this.closest('.exam-workbook');w.dataset.learningMode='paper';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">시험지 보기</button>
    <button type="button" aria-pressed="false" onclick="const w=this.closest('.exam-workbook');w.dataset.learningMode='analysis';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">문항 해설</button>
  </nav>
  <div class="kice-paper" data-view-set="common" aria-label="${EXAM} 수학 문제지">
    <nav class="kice-view-tabs" aria-label="시험지 과목 선택">${pageSets.map((ps, i) => `<button type="button" aria-pressed="${i === 0}" onclick="const p=this.closest('.kice-paper');p.dataset.viewSet='${ps.id}';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">${ps.id === 'common' ? '공통과목 1～8쪽' : ps.label}</button>`).join('')}</nav>
${paperHtml}
  </div>
  ${analysisHtml}
  <div class="legacy-solution-wrap" data-open="false">
    <button class="legacy-solution-toggle" type="button" aria-expanded="false" onclick="const w=this.closest('.legacy-solution-wrap');const open=w.dataset.open!=='true';w.dataset.open=String(open);this.setAttribute('aria-expanded',open);this.textContent=open?'전체 해설 접기':'46문항 해설 한 번에 펼치기'">46문항 해설 한 번에 펼치기</button>
    <section class="exam-solutions" aria-label="전 문항 해설">
      <header><h2>전 문항 해설</h2><p>평가원 공개 정답 기준 해설입니다.</p></header>
      <div class="print-sol-head"><h2>${EXAM} 수학 영역 전 문항 해설</h2>${printKey}</div>
      <div class="solution-flow">${solutionHtml}</div>
    </section>
  </div>
  <dialog id="kice-page-modal" class="kice-page-modal" onclick="if(event.target===this)this.close()">
    <div class="kice-modal-bar"><strong data-modal-label>시험지 크게 보기</strong><span>확대된 면은 안쪽에서 좌우·상하로 이동할 수 있습니다.</span><button type="button" aria-label="닫기" onclick="this.closest('dialog').close()">×</button></div>
    <div class="kice-modal-canvas"><img alt=""></div>
  </dialog>
</section>`;

// ---------- 5절: 문항별 예상 오답률·유사 기출 표 ----------
let simTableHtml = '';
if (SIMILAR.size || PRED.size) {
  const head = `<div class="grid grid-cols-[5.5rem_minmax(0,8rem)_minmax(0,1fr)_1.5rem] gap-3 border-y border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-2 text-xs font-bold text-gray-700 dark:text-gray-300 max-sm:hidden"><span>문항</span><span>AI 예상 오답률</span><span>유사 기출</span><span></span></div>`;
  const row = (s0, n) => {
    const key = `${s0.key}-${n}`;
    const sim = SIMILAR.get(key) || { rows: [], why: '' };
    const refs = sim.rows.length
      ? sim.rows.map((r) => `<span class="block">${inline(esc(`${r[0]} ${r[1]}`))}${rateText(r[3]) ? ` <span class="text-gray-500 dark:text-gray-400">· ${inline(esc(rateText(r[3]).split(' (')[0]))}</span>` : ''}</span>`).join('')
      : '<span class="text-gray-400">확인된 유사 기출 없음</span>';
    const likes = sim.rows.filter((r) => r[4]).map((r) => `<li><b>${inline(esc(`${r[0]} ${r[1]}`))}</b>: ${inline(esc(r[4]))}</li>`).join('');
    return `<details class="group border-b border-gray-200 dark:border-gray-800">
  <summary class="grid cursor-pointer list-none grid-cols-[5.5rem_minmax(0,8rem)_minmax(0,1fr)_1.5rem] items-start gap-3 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-900 max-sm:grid-cols-[4.6rem_minmax(0,1fr)_1.2rem] [&::-webkit-details-marker]:hidden">
    <span class="font-bold text-gray-900 dark:text-gray-100">${s0.short} ${n}번</span>
    <span class="text-gray-800 dark:text-gray-200 max-sm:col-start-2 max-sm:row-start-1">${esc(PRED.get(key) || '–')}</span>
    <span class="text-gray-800 dark:text-gray-200 max-sm:col-span-2 max-sm:col-start-1 max-sm:row-start-2">${refs}</span>
    <span class="text-gray-400 max-sm:col-start-3 max-sm:row-start-1"><span class="group-open:hidden">＋</span><span class="hidden group-open:inline">－</span></span>
  </summary>
  <div class="pb-4 pl-1 text-sm text-gray-800 dark:text-gray-200 leading-relaxed [&_p]:mb-2">
    ${likes ? `<p class="font-bold text-gray-900 dark:text-gray-100 !mb-1">닮은 점</p><ul class="list-disc pl-5 mb-3 space-y-1">${likes}</ul>` : ''}
    ${sim.why ? `<p class="font-bold text-gray-900 dark:text-gray-100 !mb-1">유사 이유</p>${md(sim.why)}` : '<p>유사 이유를 준비하고 있습니다.</p>'}
  </div>
</details>`;
  };
  simTableHtml = `<h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-2">문항별 예상 오답률과 유사 기출</h3>
<p class="${P}">46문항마다 SNarGPT가 판단 구조가 닮은 기출을 찾고, 이를 바탕으로 이번 문항의 오답률을 AI로 예측했습니다. 다음 수능을 준비할 때 함께 풀어 볼 기출 목록으로 쓰세요. 줄을 누르면 닮은 점과 유사 이유가 펼쳐집니다.</p>
<div class="not-prose mb-8" data-why-tabs>
  <div class="flex flex-wrap gap-2 mb-3" role="tablist" aria-label="과목 선택">${SUBJECTS.map((s0, k) => `<button type="button" role="tab" aria-selected="${k === 0}" data-why-target="why-${k}" class="rounded-full border px-4 py-2 text-sm font-bold border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 aria-selected:border-gray-900 aria-selected:bg-gray-900 aria-selected:text-white dark:aria-selected:border-gray-100 dark:aria-selected:bg-gray-100 dark:aria-selected:text-gray-900" onclick="const w=this.closest('[data-why-tabs]');w.querySelectorAll('[data-why-panel]').forEach(p=>p.hidden=p.dataset.whyPanel!==this.dataset.whyTarget);w.querySelectorAll('[role=tab]').forEach(t=>t.setAttribute('aria-selected',t===this))">${s0.name} <span class="font-normal opacity-70">${s0.to - s0.from + 1}</span></button>`).join('')}</div>
${SUBJECTS.map((s0, k) => {
  const rows = [];
  for (let n = s0.from; n <= s0.to; n++) rows.push(row(s0, n));
  return `<div role="tabpanel" aria-label="${s0.name}" data-why-panel="why-${k}"${k === 0 ? '' : ' hidden'}>${head}${rows.join('\n')}</div>`;
}).join('\n')}
</div>`;
}

// 총평 '오답률 높았을 문항': 공통 표는 항상 보이고, 선택과목은 탭(확통 → 미적분 → 기하)
function errRateHtml() {
  const raw = dropRule(part(/^## 오답률/));
  if (!raw) return '';
  const [lead, ...subs] = raw.split(/^(?=### )/m);
  const tailIdx = subs.length ? subs[subs.length - 1].search(/^\*\*한눈에 보는 패턴\*\*/m) : -1;
  let tail = '';
  if (tailIdx > 0) {
    tail = subs[subs.length - 1].slice(tailIdx);
    subs[subs.length - 1] = subs[subs.length - 1].slice(0, tailIdx);
  }
  const common = subs.find((x) => /^### 공통/.test(x)) || '';
  const tabs = ['확률과 통계', '미적분', '기하']
    .map((name) => [name, subs.find((x) => x.startsWith(`### ${name}`))])
    .filter(([, body]) => body);
  if (!common || tabs.length !== 3) return tw(md(raw)); // 형식이 다르면 그대로 싣는다
  const body = (x) => tw(md(x.replace(/^### .*\n/, ''), 1));
  return `${tw(md(lead))}
<h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-3">${esc(common.match(/^### (.*)/)[1])}</h3>
${body(common)}
<h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-3">선택과목</h3>
<div class="not-prose" data-err-tabs>
  <div class="flex flex-wrap gap-2 mb-1" role="tablist" aria-label="선택과목">${tabs
    .map(([name], k) => `<button type="button" role="tab" aria-selected="${k === 0}" data-err-target="err-${k}" class="rounded-full border px-4 py-2 text-sm font-bold border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 aria-selected:border-gray-900 aria-selected:bg-gray-900 aria-selected:text-white dark:aria-selected:border-gray-100 dark:aria-selected:bg-gray-100 dark:aria-selected:text-gray-900" onclick="const w=this.closest('[data-err-tabs]');w.querySelectorAll('[data-err-panel]').forEach(p=>p.hidden=p.dataset.errPanel!==this.dataset.errTarget);w.querySelectorAll('[role=tab]').forEach(t=>t.setAttribute('aria-selected',t===this))">${name}</button>`)
    .join('')}</div>
${tabs.map(([name, x], k) => `  <div role="tabpanel" aria-label="${name}" data-err-panel="err-${k}"${k === 0 ? '' : ' hidden'}>${body(x)}</div>`).join('\n')}
</div>
${tail ? tw(md(tail)) : ''}`;
}

// ---------- 글 조립 ----------
const pending = '<p class="' + P + '">총평은 해설 작업이 끝나는 대로 싣습니다.</p>';
const sec = (re) => (part(re) ? tw(md(dropRule(part(re)))) : '');
const toc = [
  ['overall', '1. 시험 총평'],
  ['predictions', '2. 오답률·등급컷 예측'],
  ['answer-table', '3. 정답 (홀수형)'],
  ['detailed-solutions', '4. 평가원 원본 시험지 · 전 문항 해설'],
  ['study-plan', '5. 2028학년도 수능 준비생을 위한 수학 공부 방향'],
  ['downloads', '6. 문제지·정답표 PDF'],
];
const article = `<p class="text-sm text-gray-500 dark:text-gray-400 mb-8">${EXAM} 수학 영역 문제 및 해설 (홀수형)</p>

<p class="${P}">
  안녕하세요, SN독학기숙학원입니다.<br />
  2026년 11월 19일 시행된 <strong>${EXAM} 수학 영역</strong>의 정답과 전 문항 해설, 시험 총평을 정리했습니다.
  평가원 원본 시험지를 그대로 보면서 공통·확률과 통계·미적분·기하 46문항의 풀이를 확인할 수 있습니다.
</p>

<div id="summary" class="not-prose border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg p-5 my-6">
  <p class="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">핵심 요약</p>
  <ul class="space-y-2 text-gray-800 dark:text-gray-200 leading-relaxed">
    <li>• 정답: 한국교육과정평가원 공개 정답표 기준(홀수형)</li>
    <li>• 수록 범위: 공통 22문항과 확률과 통계·미적분·기하 각 8문항(응시 기준 30문항)</li>
    <li>• 평가원 원본 시험지 20쪽 보기와 선택과목별 인쇄</li>
    <li>• 문항별 정답과 풀이, 해설 한 번에 인쇄</li>
  </ul>
</div>

<div class="not-prose border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 rounded-lg p-5 my-6">
  <p class="font-bold text-amber-950 dark:text-amber-100 mb-2">정답·예측치 안내</p>
  <p class="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
    정답은 한국교육과정평가원이 문제지와 함께 공개한 정답표 기준이며, 해설은 SN독학기숙학원이 작성했습니다.
    예상 오답률과 등급컷은 예측치이므로 실제 수치는 입시기관 가채점 결과와 평가원 채점 결과 발표로 확인하세요.
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
${sec(/^## 한 줄 총평/) + sec(/^## 과목별/) + sec(/^## 어려웠던/) || pending}

${h2('predictions', '2. 오답률·등급컷 예측')}
${errRateHtml() + sec(/^## 등급컷/) || pending}

${h2('answer-table', '3. 정답 (홀수형)')}
<p class="${P}">공통 1~22번과 본인이 응시한 선택과목 23~30번을 확인하세요. 1~15번과 23~28번은 5지선다형, 16~22번과 29~30번은 단답형입니다.</p>
<div class="not-prose grid gap-6 my-6 border-t border-gray-400 dark:border-gray-600 pt-4">
${SUBJECTS.map(answerGrid).join('\n')}
</div>

${workbook}

${h2('study-plan', '5. 2028학년도 수능을 준비하는 학생을 위한 수학 공부 방향')}
${part(/^## 공부 방향/) ? tw(md(dropRule(part(/^## 공부 방향/)).replace(/^## .*\n/, ''))) : pending}
${simTableHtml}

${h2('downloads', '6. 문제지·정답표 PDF')}
<ul class="text-gray-800 dark:text-gray-200 leading-relaxed space-y-2 mb-4">
  <li>• <a class="underline hover:no-underline" href="/pdfs/2027-suneung-math.pdf" download>${EXAM} 수학 영역 문제지 PDF</a></li>
  <li>• <a class="underline hover:no-underline" href="/pdfs/2027-suneung-math_answer.pdf" download>${EXAM} 수학 영역 정답표 PDF</a></li>
</ul>
<p class="text-sm text-gray-600 dark:text-gray-400 mb-8">이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다.</p>

<p class="text-xs text-gray-500 dark:text-gray-400">작성: SN독학기숙학원 · 2026.11.19 작성</p>
`;

fs.writeFileSync(OUT, article);
console.log(`해설: ${SOL.size}/46문항, 총평: ${review ? '있음' : '없음'}`);
console.log(`생성: ${path.relative(ROOT, OUT)} (${(Buffer.byteLength(article) / 1024).toFixed(0)}KB)`);
