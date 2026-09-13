import fs from 'node:fs';
import {
  scienceSubjects,
  scienceQuestionSubjects,
  getScienceSubjectQuestions,
} from '../src/data/integrated-science-subjects';

const numbers = scienceQuestionSubjects
  .map(q => q.number)
  .sort((a, b) => a - b);
if (numbers.length !== 25 || numbers.some((n, i) => n !== i + 1))
  throw new Error('문항 누락 또는 중복');
for (const q of scienceQuestionSubjects) {
  if (
    !q.uses.length ||
    new Set(q.uses.map(u => u.subject)).size !== q.uses.length
  )
    throw new Error(`${q.number}번 과목 중복 또는 누락`);
}
const counts = scienceSubjects.map(subject => ({
  ...subject,
  count: getScienceSubjectQuestions(subject.id).length,
}));
const total = counts.reduce((sum, subject) => sum + subject.count, 0);
const multiple = scienceQuestionSubjects.filter(q => q.uses.length > 1).length;
const escape = (s: string) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const point = (axis: number, count: number) => {
  const r = (count * 140) / 15;
  return [
    [270, 220 - r],
    [270 + r, 220],
    [270, 220 + r],
    [270 - r, 220],
  ][axis]
    .map(n => Number(n.toFixed(2)))
    .join(',');
};
const conceptRows = scienceQuestionSubjects
  .map(
    q =>
      `<tr><th scope="row">${q.number}번</th><td>${q.uses.map(u => `<strong>${scienceSubjects.find(s => s.id === u.subject)!.name}</strong>: ${escape(u.concepts)}`).join('<br>')}</td></tr>`
  )
  .join('');
const labels = counts
  .map((s, i) => {
    const [x, y] = [
      [270, 31],
      [478, 212],
      [270, 393],
      [62, 212],
    ][i];
    return `<a href="#science-subject-details" data-science-subject="${s.id}" aria-haspopup="dialog" aria-label="${s.name} ${s.count}문항 사용 개념 보기"><text class="sn-radar-label" x="${x}" y="${y}">${s.name}</text><text class="sn-radar-number" x="${x}" y="${y + 27}" font-size="17">${s.count}문항 · ${s.count * 4}%</text></a>`;
  })
  .join('');
const explanation =
  '각 문항의 자료·선지·해설에서 실제로 연결되는 과목과 개념을 모두 기록했습니다. 주된 과목을 고르지 않으며, 한 문항에 여러 과목이 쓰이면 각 과목에 한 번씩 집계합니다. 같은 과목의 개념이 여러 개 나와도 그 과목에서는 1문항으로 셉니다.';
const limitations =
  '일반적인 그래프 읽기·비례 계산·변인 통제만으로 다른 과목을 추가하지는 않습니다. 자료의 원리로 연결되는 개념도 포함하되 단순한 소재 언급이나 풀이 비유는 제외합니다. 아래 수치는 개념의 개수·난도·배점 비중이 아니라 해당 과목 개념이 연결된 문항 수이며, SN의 해석에 따른 분류입니다.';
const section = `<section aria-labelledby="science-subjects">
<h2 id="science-subjects"><span class="sn-guide-eyebrow">물·화·생·지 연계 분석</span>2. 한 문항에 어떤 과목의 개념들이 함께 쓰였을까요?</h2>
<p>${explanation}</p>
<figure class="sn-subject-radar">
<figcaption><strong>25문항에 쓰인 과목별 연결 개념</strong><span>중복 집계 · 과목명 또는 아래 카드를 누르면 문항별 분석이 열립니다</span></figcaption>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 440" role="group" aria-labelledby="science-radar-title science-radar-desc">
<title id="science-radar-title">${counts.map(s => `${s.name} ${s.count}문항`).join(', ')}</title>
<desc id="science-radar-desc">25문항 중 각 과목 개념이 쓰인 문항 수를 중복 집계했습니다. 각 축은 0~15문항입니다. 네 과목명 링크를 선택하면 상세 창이 열립니다.</desc>
<g class="sn-radar-grid" fill="none" stroke="currentColor" stroke-width="1">${[3, 6, 9, 12, 15].map(n => `<polygon points="${[0, 1, 2, 3].map(i => point(i, n)).join(' ')}"/>`).join('')}<path d="M270 80V360M130 220H410"/></g>
<g class="sn-radar-scale" font-family="Arial, sans-serif" font-size="12">${[0, 3, 6, 9, 12, 15].map(n => `<text x="280" y="${224 - (n * 140) / 15}">${n}</text>`).join('')}</g>
<polygon class="sn-radar-area" points="${counts.map((s, i) => point(i, s.count)).join(' ')}" stroke-width="3"/>
<g class="sn-radar-dots" fill="currentColor">${counts
  .map((s, i) => {
    const [x, y] = point(i, s.count).split(',');
    return `<circle cx="${x}" cy="${y}" r="5"/>`;
  })
  .join('')}</g>
<g font-family="Arial, sans-serif" text-anchor="middle" font-size="20">${labels}</g>
</svg>
<div class="sn-subject-buttons">${counts.map(s => `<button type="button" data-science-subject="${s.id}" aria-haspopup="dialog"><strong>${s.name}</strong><span>${s.count}문항 · ${s.count * 4}%</span><small>문항·개념 보기 ↗</small></button>`).join('')}</div>
<p class="sn-radar-note">각 비율의 분모는 전체 25문항입니다. ${multiple}개 문항에서 두 과목 이상이 연결되어 총 ${total}건으로 집계되므로, 문항 수의 합은 25를 넘고 비율의 합도 100%를 넘습니다.</p>
</figure>
<p>${limitations}</p>
<p>4번은 규산염·규소의 결합·반도체를 연결하므로 지구과학·화학·물리학에 함께 포함됩니다. 7번은 용해·상태 변화·세포 호흡을 연결하므로 화학·물리학·생명과학에 포함됩니다. 19번의 DNA 조립량을 ‘한계 반응물’에 비유할 수는 있지만 화학 개념을 별도로 적용하는 문항은 아니므로 생명과학에만 집계했습니다.</p>
<details id="science-subject-details" class="sn-subject-all"><summary>전체 25문항의 과목·개념 대응표 보기</summary><div class="sn-subject-overview-table"><table><thead><tr><th scope="col">문항</th><th scope="col">연결된 과목과 개념</th></tr></thead><tbody>${conceptRows}</tbody></table></div></details>
</section>`;
const css = `
.sn-subject-buttons { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:10px; margin:12px 0 22px; }
.sn-subject-buttons button { display:flex; flex-direction:column; gap:6px; align-items:center; padding:14px 8px; border:1px solid #bacfbe; border-radius:12px; background:#fff; color:#183a25; cursor:pointer; font:inherit; font-size:14px; }
.sn-subject-buttons button:hover { background:#e6f0e8; }
.sn-subject-buttons button:focus-visible { outline:3px solid #28613b; outline-offset:3px; }
.sn-subject-buttons small { font-size:11px; }
.sn-subject-all { margin:24px 0; border:1px solid #dce5de; border-radius:12px; padding:18px; }
.sn-subject-all summary { cursor:pointer; font-weight:700; }
.sn-subject-overview-table table { width:100%; margin-top:18px; font-size:14px; line-height:1.8; border-collapse:collapse; }
.sn-subject-overview-table th,.sn-subject-overview-table td { text-align:left; vertical-align:top; padding:12px 8px; border-bottom:1px solid #dce5de; }
.sn-subject-overview-table th:first-child { width:60px; white-space:nowrap; }
.dark .sn-subject-buttons button { background:#1b3023; color:#e5efe7; border-color:#3b5142; }
.dark .sn-subject-buttons button:hover { background:#284432; }
.dark .sn-subject-all,.dark .sn-subject-overview-table th,.dark .sn-subject-overview-table td { border-color:#3b5142; }
@media(max-width:600px) { .sn-subject-buttons { grid-template-columns:repeat(2,minmax(0,1fr)); } .sn-subject-all { padding:12px; } }
`;
const file =
  'content/integrated-science-problem/2028-integrated-science-study-guide.html';
let html = fs.readFileSync(file, 'utf8');
if (!html.includes('<section aria-labelledby="science-subjects">'))
  throw new Error('Missing subject section');
html = html.replace(
  /<section aria-labelledby="science-subjects">[\s\S]*?<\/section>/,
  section
);
html = html.replace(
  /\/\* subject-interaction-start \*\/[\s\S]*?\/\* subject-interaction-end \*\//,
  ''
);
html = html.replace(
  '</style>',
  `/* subject-interaction-start */${css}/* subject-interaction-end */\n</style>`
);
html = html.replace('>물·화·생·지 분포</a>', '>물·화·생·지 연계</a>');
fs.writeFileSync(file, html);
const mdFile = 'md/20260913_integrated_science_study_guide_draft.md';
let md = fs.readFileSync(mdFile, 'utf8');
const mdSection = `## 물·화·생·지 개념 연계 — 중복 집계\n\n${explanation}\n\n| 과목 | 개념이 쓰인 문항 수 | 전체 25문항 중 비율 |\n| --- | --- | --- |\n${counts.map(s => `| ${s.name} | ${s.count} | ${s.count * 4}% |`).join('\n')}\n\n두 과목 이상이 연결된 문항은 ${multiple}개이며, 과목 연결은 총 ${total}건입니다. 합계를 25문항이나 100%로 맞추지 않습니다.\n\n${limitations}\n\n| 문항 | 연결된 과목·개념 |\n| --- | --- |\n${scienceQuestionSubjects.map(q => `| ${q.number} | ${q.uses.map(u => `${scienceSubjects.find(s => s.id === u.subject)!.name}: ${u.concepts}`).join(' / ')} |`).join('\n')}\n\n`;
md = md.replace(
  /## (?:2\. )?물·화·생·지 개념 [\s\S]*?(?=## \d+\. )/,
  mdSection.replace('## 물·화·생·지', '## 2. 물·화·생·지')
);
fs.writeFileSync(mdFile, md);
console.log({ counts, total, multiple });
