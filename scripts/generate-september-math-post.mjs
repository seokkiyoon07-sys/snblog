import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const [combinedPath, analysisPath, outputPath] = process.argv.slice(2);

if (!combinedPath || !analysisPath || !outputPath) {
  throw new Error(
    'Usage: node scripts/generate-september-math-post.mjs <problem-and-solution.md> <analysis.md> <output.html>',
  );
}

const combined = fs.readFileSync(combinedPath, 'utf8');
const analysis = fs.readFileSync(analysisPath, 'utf8');
const imageBase =
  '/images/problem-download/2027-september-mock-math-solution';
const figureImageBySource = new Map([
  ['1-12.png', 'figures/common-12.png'],
  ['1-20.png', 'figures/common-20.png'],
  ['2-26.png', 'figures/calc-26.png'],
  ['2-28.png', 'figures/calc-28.png'],
  ['3-26.png', 'figures/geo-26.png'],
  ['3-28.png', 'figures/geo-28.png'],
  ['3-29.png', 'figures/geo-29.png'],
]);

const subjects = [
  { key: 'common', label: '공통', heading: '공통 과목', numbers: range(1, 22) },
  {
    key: 'prob',
    label: '확률과 통계',
    heading: '확률과 통계',
    numbers: range(23, 30),
  },
  { key: 'calc', label: '미적분', heading: '미적분', numbers: range(23, 30) },
  { key: 'geo', label: '기하', heading: '기하', numbers: range(23, 30) },
];

const commonMathOne = new Set([1, 3, 6, 8, 10, 12, 14, 16, 18, 20, 22]);
const unitBySubject = {
  common: (number) => (commonMathOne.has(number) ? '수학Ⅰ' : '수학Ⅱ'),
  prob: (number) =>
    [23, 25, 29].includes(number)
      ? '경우의 수'
      : [24, 26, 28].includes(number)
        ? '확률'
        : '통계',
  calc: (number) =>
    [25, 29].includes(number)
      ? '수열의 극한'
      : [23, 27, 28].includes(number)
        ? '미분법'
        : '적분법',
  geo: (number) =>
    [25, 27, 29].includes(number)
      ? '이차곡선'
      : [23, 24, 30].includes(number)
        ? '평면벡터·공간좌표'
        : '공간도형',
};

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function isMathCodeSpan(value) {
  const code = value.trim();
  if (!code || /[가-힣]/.test(code)) return false;
  if (/\.(?:md|png|jpe?g|pdf|html?)$/i.test(code) || code === 'MATH') {
    return false;
  }

  return true;
}

function shorthandMathToLatex(value) {
  const subscriptDigits = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
  const superscriptDigits = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', 'ⁿ': 'n', 'ˣ': 'x' };

  return value
    .trim()
    .replace(/([A-Za-z])⃗/gu, String.raw`\vec{$1}`)
    .replace(/([₀-₉]+)/gu, (digits) =>
      `_{${[...digits].map((digit) => subscriptDigits[digit]).join('')}}`,
    )
    .replace(/([⁰-⁹²³⁴ⁿˣ]+)/gu, (digits) =>
      `^{${[...digits].map((digit) => superscriptDigits[digit]).join('')}}`,
    )
    .replace(/\^\(([^()]*)\)/g, '^{$1}')
    .replace(/∛\s*([0-9]+|[A-Za-z])/gu, String.raw`\sqrt[3]{$1}`)
    .replace(/√\(([^()]*)\)/gu, String.raw`\sqrt{$1}`)
    .replace(/√\s*([0-9]+|[A-Za-z])/gu, String.raw`\sqrt{$1}`)
    .replaceAll('∫', String.raw`\int`)
    .replaceAll('∑', String.raw`\sum`)
    .replaceAll('Σ', String.raw`\sum`)
    .replaceAll('π', String.raw`\pi `)
    .replaceAll('α', String.raw`\alpha `)
    .replaceAll('θ', String.raw`\theta `)
    .replaceAll('λ', String.raw`\lambda `)
    .replaceAll('σ', String.raw`\sigma `)
    .replaceAll('∞', String.raw`\infty `)
    .replaceAll('±', String.raw`\pm `)
    .replaceAll('≤', String.raw`\le `)
    .replaceAll('≥', String.raw`\ge `)
    .replaceAll('→', String.raw`\to `)
    .replaceAll('⋯', String.raw`\cdots `)
    .replaceAll('△', String.raw`\triangle `)
    .replaceAll('∠', String.raw`\angle `)
    .replaceAll('·', String.raw`\cdot `)
    .replaceAll('×', String.raw`\times `)
    .replaceAll('⌊', String.raw`\lfloor `)
    .replaceAll('⌋', String.raw`\rfloor `)
    .replace(/(?<![A-Za-z\\])(log|ln|sin|cos|tan)(?=[_ (A-Za-z0-9\\])/g, '\\$1');
}

function normalizeMathMarkdown(markdown) {
  return markdown
    .replace(
      String.raw`\frac{3\{(\ln t)^2-1\}}t`,
      String.raw`\frac{3[(\ln t)^2-1]}{t}`,
    )
    .replaceAll('`E(S²)`', '$E(S^2)$')
    .replaceAll('`{E(S)}²`', String.raw`$\{E(S)\}^2$`)
    .replace(/`([^`\n]+)`/g, (source, code) => {
      if (/[가-힣]/.test(code)) return code;
      return isMathCodeSpan(code) ? `$${shorthandMathToLatex(code)}$` : source;
    })
    // CommonMark consumes backslashes before punctuation. Double TeX's
    // printable braces and thin-space comma so one slash survives in HTML.
    .replace(/(?<!\\)\\([{},])/g, '\\\\$1');
}

function markdownToHtml(markdown) {
  return renderToStaticMarkup(
    React.createElement(
      ReactMarkdown,
      {
        remarkPlugins: [[remarkGfm, { singleTilde: false }]],
        components: {
          a: ({ href, children }) =>
            React.createElement(
              'a',
              { href, target: '_blank', rel: 'noopener noreferrer' },
              children,
            ),
          img: ({ src, alt }) => {
            const localSource = src ? figureImageBySource.get(src) || src : src;

            return React.createElement('img', {
              src: localSource?.startsWith('http')
                ? localSource
                : `${imageBase}/${localSource}`,
              alt: alt || '수학 문항 도형',
              className: figureImageBySource.has(src) ? 'exam-figure-image' : undefined,
              loading: 'lazy',
            });
          },
        },
      },
      normalizeMathMarkdown(markdown).trim(),
    ),
  );
}

function renderProblemHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const choiceLineIndex = lines.findIndex(
    (line) =>
      line.includes('①') &&
      line.includes('②') &&
      line.includes('③') &&
      line.includes('④') &&
      line.includes('⑤'),
  );

  if (choiceLineIndex < 0) return markdownToHtml(markdown);

  const choiceLine = lines.splice(choiceLineIndex, 1)[0];
  const choices = choiceLine
    .split(/(?=[①②③④⑤])/u)
    .map((choice) => choice.trim())
    .filter(Boolean);

  if (choices.length !== 5) return markdownToHtml(markdown);

  return `${markdownToHtml(lines.join('\n'))}<div class="exam-choices">${choices
    .map((choice) => `<span>${markdownToHtml(choice)}</span>`)
    .join('')}</div>`;
}

function withSupplementaryFigure(subjectKey, number, markdown) {
  if (subjectKey !== 'common' || number !== 20) return markdown;

  const marker = '점 A의 $x$좌표를 $a$라 하면';
  if (!markdown.includes(marker)) {
    throw new Error('Could not find the insertion point for common question 20.');
  }

  return markdown.replace(
    marker,
    `![공통 20번 함수 그래프](1-20.png)\n\n${marker}`,
  );
}

function subjectKeyFromHeading(heading) {
  if (heading.includes('확률과 통계')) return 'prob';
  if (heading.includes('미적분')) return 'calc';
  if (heading.includes('기하')) return 'geo';
  if (heading.includes('공통')) return 'common';
  return null;
}

function parseEntries(source, headingPattern) {
  const entries = new Map();
  const lines = source.split(/\r?\n/);
  let subjectKey = null;
  let current = null;

  const saveCurrent = () => {
    if (!current || !subjectKey) return;
    entries.set(`${subjectKey}-${current.number}`, {
      ...current,
      markdown: current.lines.join('\n').trim(),
    });
  };

  for (const line of lines) {
    const subjectMatch = line.match(/^###\s+(.+)$/);
    if (subjectMatch) {
      saveCurrent();
      current = null;
      subjectKey = subjectKeyFromHeading(subjectMatch[1]);
      continue;
    }

    const entryMatch = line.match(headingPattern);
    if (entryMatch && subjectKey) {
      saveCurrent();
      current = {
        number: Number(entryMatch[1]),
        meta: entryMatch[2] || '',
        lines: [],
      };
      continue;
    }

    if (current) current.lines.push(line);
  }

  saveCurrent();
  return entries;
}

function getSection(source, startHeading, endHeading) {
  const start = source.indexOf(startHeading);
  const end = endHeading ? source.indexOf(endHeading, start + startHeading.length) : -1;
  if (start < 0) return '';
  return source.slice(start, end < 0 ? undefined : end);
}

const problemPart = getSection(combined, '## PART I. 문제편', '## PART II.');
const solutionPart = getSection(combined, '## PART II.', '### 공식 정답 교차검증 결과');
const problems = parseEntries(problemPart, /^####\s+문제\s+(\d+)번\s+\[([^\]]+)\]$/);
const solutions = parseEntries(solutionPart, /^####\s+해설\s+(\d+)번\s+—\s+(.+)$/);
const analysisEntries = parseEntries(
  getSection(analysis, '## 3. 문항별 상세 해설', '## 4. 예상 난이도'),
  /^####\s+(\d+)번\s+(.+)$/,
);

for (const subject of subjects) {
  for (const number of subject.numbers) {
    const key = `${subject.key}-${number}`;
    if (!problems.has(key) || !solutions.has(key)) {
      throw new Error(`Missing problem or solution: ${key}`);
    }
  }
}

const activeLabelSelectors = [];
const cardSelectors = [];
for (const subject of subjects) {
  for (const number of subject.numbers) {
    activeLabelSelectors.push(
      `#${subject.key}-q${number}:checked ~ .question-labels label[for="${subject.key}-q${number}"]`,
    );
    cardSelectors.push(
      `#${subject.key}-q${number}:checked ~ .question-cards .${subject.key}-q${number}-card`,
    );
  }
}

function renderSubject(subject) {
  const radios = subject.numbers
    .map(
      (number, index) =>
        `<input class="question-radio" type="radio" name="${subject.key}-question" id="${subject.key}-q${number}"${index === 0 ? ' checked' : ''}>`,
    )
    .join('\n');
  const labels = subject.numbers
    .map(
      (number) => `<label for="${subject.key}-q${number}">${number}</label>`,
    )
    .join('\n');
  const cards = subject.numbers
    .map((number) => {
      const problem = problems.get(`${subject.key}-${number}`);
      const solution = solutions.get(`${subject.key}-${number}`);
      const analysisEntry = analysisEntries.get(`${subject.key}-${number}`);
      const pointMarkdown = analysisEntry?.markdown.split(/\n\s*\n/)[0] || '';
      return `<article class="question-card ${subject.key}-q${number}-card">
  <header><h3>${subject.label} ${number}번</h3><span>${escapeHtml(problem.meta)}</span></header>
  <div class="question-block">
    <div class="question-html exam-paper">
      <div class="exam-question-heading"><strong>${number}.</strong><span>[${escapeHtml(problem.meta)}]</span></div>
      <div class="exam-question-body">${renderProblemHtml(withSupplementaryFigure(subject.key, number, problem.markdown))}</div>
    </div>
    <figure class="question-png">
      <img src="${imageBase}/questions/${subject.key}-${number}.png" alt="2027학년도 9월 모의평가 ${subject.label} ${number}번 시험지 원본" loading="lazy">
      <figcaption>${subject.label} ${number}번 원본 시험지 이미지</figcaption>
    </figure>
  </div>
  <div class="intent-block"><h4>출제 단원과 핵심 포인트</h4><p><strong>단원:</strong> ${unitBySubject[subject.key](number)}</p>${markdownToHtml(pointMarkdown)}</div>
  <div class="solution-block"><div class="solution-heading"><h4>해설</h4><span class="answer-badge">정답 ${escapeHtml(solution.meta)}</span></div><div class="solution-body">${markdownToHtml(solution.markdown)}</div></div>
</article>`;
    })
    .join('\n');

  return `<section class="subject-panel panel-${subject.key}">
${radios}
<div class="question-labels" aria-label="${subject.label} 문항 선택">${labels}</div>
<div class="question-cards">${cards}</div>
</section>`;
}

const answerOverview = getSection(
  combined,
  '### 최종 정답 한눈에 보기',
  '### 공통 과목 풀이',
).replace(/^### 최종 정답 한눈에 보기\s*/, '');
const structureAnalysis = getSection(
  analysis,
  '## 2. 시험 구조와 단원 분포',
  '## 3. 문항별 상세 해설',
);
const difficultyAnalysis = getSection(
  analysis,
  '## 4. 예상 난이도',
  '## 7. 평가원장 관점의 공식 논평 형식',
);
const deepAnalysis = getSection(
  analysis,
  '## 8. 출제 설계 심층 분석',
  '## 10. 시행 당일 예상 등급컷',
);

const html = `<div class="math-post">
<p class="post-kicker">2027학년도 9월 모의평가 수학 영역</p>
<p>2027학년도 9월 모의평가 수학 문제지와 정답지를 내려받고, 공통·확률과 통계·미적분·기하 총 46문항의 문제와 풀이를 문항별로 확인할 수 있도록 정리했습니다.</p>
<aside class="summary-box"><strong>핵심 요약</strong><ul><li>공통 1~22번과 선택 과목별 23~30번 전체 수록</li><li>원본 시험지 PNG와 검색·복사가 가능한 HTML 텍스트 보기 지원</li><li>문제만·해설만 보기 지원</li><li>문항별 정답, 풀이, 단원과 핵심 포인트 제공</li><li>9월 모의평가 출제 구조와 난이도·학습 방향 분석</li></ul></aside>
<nav class="toc" aria-label="글 목차"><strong>목차</strong><a href="#solutions">1. 46문항 문제·해설</a><a href="#downloads">2. 문제지·정답 PDF</a><a href="#answers">3. 최종 정답표</a><a href="#analysis">4. 출제 구조와 상세 분석</a><a href="#study">5. 수능까지의 학습 방향</a></nav>

<h2 id="solutions">46문항 문제·해설</h2>
<p>과목과 문항 번호를 선택하세요. 문제 표시는 실제 시험지 그대로 보는 ‘시험지 PNG’와 검색·복사가 가능한 ‘HTML 텍스트’ 중에서 고를 수 있습니다. 문제를 먼저 풀고 싶다면 ‘문제만’, 채점 후 풀이만 보려면 ‘해설만’을 선택하면 됩니다.</p>
<div class="solution-tabs">
<input class="subject-radio" type="radio" name="subject" id="subject-common" checked>
<input class="subject-radio" type="radio" name="subject" id="subject-prob">
<input class="subject-radio" type="radio" name="subject" id="subject-calc">
<input class="subject-radio" type="radio" name="subject" id="subject-geo">
<input class="view-radio" type="radio" name="view" id="view-all" checked>
<input class="view-radio" type="radio" name="view" id="view-question">
<input class="view-radio" type="radio" name="view" id="view-solution">
<input class="format-radio" type="radio" name="question-format" id="format-png" checked>
<input class="format-radio" type="radio" name="question-format" id="format-html">
<div class="subject-labels">${subjects.map((subject) => `<label for="subject-${subject.key}">${subject.label}</label>`).join('')}</div>
<div class="view-labels"><span>보기:</span><label for="view-all">전체</label><label for="view-question">문제만</label><label for="view-solution">해설만</label></div>
<div class="format-labels"><span>문제 표시:</span><label for="format-png">시험지 PNG</label><label for="format-html">HTML 텍스트</label></div>
<div class="subject-panels">${subjects.map(renderSubject).join('\n')}</div>
</div>

<h2 id="downloads">문제지와 정답 PDF</h2>
<div class="download-grid"><a href="/pdfs/2026-sep_math.pdf" download><strong>수학 문제지 PDF</strong><span>2027학년도 9월 모의평가</span></a><a href="/pdfs/2026-sep_math_answer.pdf" download><strong>수학 정답·해설 PDF</strong><span>공식 정답과 해설</span></a></div>

<h2 id="answers">최종 정답표</h2>
<div class="markdown-section">${markdownToHtml(answerOverview)}</div>

<h2 id="analysis">출제 구조와 상세 분석</h2>
<div class="markdown-section">${markdownToHtml(structureAnalysis.replace(/^##[^\n]+/, ''))}${markdownToHtml(difficultyAnalysis.replace(/^##[^\n]+/, ''))}</div>

<h2 id="study">수능까지의 학습 방향</h2>
<div class="markdown-section">${markdownToHtml(deepAnalysis.replace(/^##[^\n]+/, ''))}</div>

<h2 id="faq">자주 묻는 질문</h2>
<div class="faq"><details><summary>문제지와 정답지는 어디에서 내려받나요?</summary><p>본문의 ‘문제지와 정답 PDF’에서 각각 내려받을 수 있습니다.</p></details><details><summary>시험지 PNG와 HTML 텍스트의 차이는 무엇인가요?</summary><p>시험지 PNG는 평가원 원본 지면을 그대로 보여주고, HTML 텍스트는 화면 크기에 맞춰 읽거나 문제 내용을 검색·복사할 때 편리합니다.</p></details><details><summary>선택 과목 해설도 모두 있나요?</summary><p>확률과 통계, 미적분, 기하 23~30번을 모두 수록했습니다.</p></details><details><summary>문제만 따로 볼 수 있나요?</summary><p>문항별 해설 위의 보기 방식에서 ‘문제만’을 선택하면 해설이 가려집니다.</p></details></div>
</div>

<style>
.math-post{--ink:#172033;--muted:#687386;--line:#d9e0e9;--soft:#f5f7fa;--navy:#153b68;color:var(--ink);line-height:1.78;word-break:keep-all}.dark .math-post{--ink:#edf2f7;--muted:#a8b3c3;--line:#394453;--soft:#17202d;--navy:#8bbcf2}.math-post>p,.math-post .markdown-section p{margin:0 0 1rem}.post-kicker{color:var(--muted);font-size:.9rem}.math-post h2{margin:3.25rem 0 1rem;padding-bottom:.65rem;border-bottom:1px solid var(--line);font-size:1.65rem;font-weight:800}.math-post h3{font-weight:800}.math-post h4{margin:.2rem 0 .8rem;font-weight:800}.summary-box{margin:1.5rem 0;padding:1.25rem;border:1px solid var(--line);border-radius:.75rem;background:var(--soft)}.summary-box ul{margin:.75rem 0 0;padding-left:1.25rem}.toc{display:grid;gap:.45rem;margin:2rem 0;padding:1.25rem 0;border-block:1px solid var(--line)}.toc a{color:inherit;text-decoration:none}.toc a:hover{text-decoration:underline}.subject-radio,.view-radio,.question-radio{position:absolute;opacity:0;pointer-events:none}.subject-labels,.question-labels,.view-labels{display:flex;flex-wrap:wrap;gap:.5rem}.subject-labels{margin:1.25rem 0 .8rem}.subject-labels label,.question-labels label,.view-labels label{cursor:pointer;border:1px solid var(--line);border-radius:.55rem;background:var(--soft);padding:.5rem .8rem;font-weight:700}.subject-labels label{padding:.65rem 1rem}.view-labels{align-items:center;margin-bottom:1rem;font-size:.9rem}.view-labels span{color:var(--muted)}.subject-panel,.question-card{display:none}#subject-common:checked~.subject-labels label[for="subject-common"],#subject-prob:checked~.subject-labels label[for="subject-prob"],#subject-calc:checked~.subject-labels label[for="subject-calc"],#subject-geo:checked~.subject-labels label[for="subject-geo"],#view-all:checked~.view-labels label[for="view-all"],#view-question:checked~.view-labels label[for="view-question"],#view-solution:checked~.view-labels label[for="view-solution"],${activeLabelSelectors.join(',')}{border-color:#173d68;background:#173d68;color:#fff}.dark #subject-common:checked~.subject-labels label[for="subject-common"],.dark #subject-prob:checked~.subject-labels label[for="subject-prob"],.dark #subject-calc:checked~.subject-labels label[for="subject-calc"],.dark #subject-geo:checked~.subject-labels label[for="subject-geo"],.dark #view-all:checked~.view-labels label[for="view-all"],.dark #view-question:checked~.view-labels label[for="view-question"],.dark #view-solution:checked~.view-labels label[for="view-solution"]{border-color:#dbeafe;background:#dbeafe;color:#172033}#subject-common:checked~.subject-panels .panel-common,#subject-prob:checked~.subject-panels .panel-prob,#subject-calc:checked~.subject-panels .panel-calc,#subject-geo:checked~.subject-panels .panel-geo,${cardSelectors.join(',')}{display:block}#view-question:checked~.subject-panels .intent-block,#view-question:checked~.subject-panels .solution-block,#view-solution:checked~.subject-panels .question-block,#view-solution:checked~.subject-panels .intent-block{display:none}.question-labels{margin:1rem 0}.question-labels label{min-width:2.5rem;text-align:center}.question-card{overflow:hidden;border:1px solid var(--line);border-radius:.8rem}.question-card>header{display:flex;justify-content:space-between;align-items:center;padding:.8rem 1rem;border-bottom:1px solid var(--line);background:var(--soft)}.question-card>header span{color:var(--muted);font-size:.9rem}.question-block,.intent-block,.solution-block{padding:1.2rem}.intent-block{margin:0 1.2rem;border:1px solid #f0cf85;border-radius:.7rem;background:#fff9e9}.dark .intent-block{border-color:#785f2b;background:#2a2519}.solution-block{margin-top:1.2rem;border-top:1px solid var(--line)}.answer-badge{display:inline-block;margin-left:.4rem;border-radius:999px;background:#e9f6ef;padding:.15rem .55rem;color:#17653a;font-size:.8rem}.dark .answer-badge{background:#153526;color:#9be4b8}.math-post img{display:block;max-width:100%;height:auto;margin:1rem auto;border-radius:.5rem}.math-post table{display:block;overflow-x:auto;width:100%;margin:1rem 0;border-collapse:collapse}.math-post th,.math-post td{border:1px solid var(--line);padding:.55rem .7rem;text-align:center;white-space:nowrap}.math-post th{background:var(--soft);font-weight:800}.math-post blockquote{margin:1rem 0;padding:.8rem 1rem;border-left:3px solid #7696b8;background:var(--soft)}.math-post ul,.math-post ol{margin:.7rem 0 1rem;padding-left:1.4rem}.math-post a{color:#1769aa;text-decoration:underline}.dark .math-post a{color:#8cc8ff}.download-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.download-grid a{display:flex;flex-direction:column;gap:.25rem;border:1px solid var(--line);border-radius:.8rem;padding:1.2rem;text-decoration:none;background:var(--soft)}.download-grid span{color:var(--muted);font-size:.9rem}.markdown-section h3{margin:2rem 0 .75rem;font-size:1.25rem}.markdown-section h4{margin:1.5rem 0 .6rem}.faq details{border-bottom:1px solid var(--line);padding:1rem 0}.faq summary{cursor:pointer;font-weight:800}.faq details p{margin:.7rem 0 0}@media(max-width:680px){.download-grid{grid-template-columns:1fr}.math-post{word-break:normal}.question-block,.solution-block{padding:1rem}.intent-block{margin:0 1rem;padding:1rem}.subject-labels label{flex:1 1 40%;text-align:center}}
/* 평가원 시험지형 문항·해설과 PNG/HTML 표시 전환 */
.format-radio{position:absolute;opacity:0;pointer-events:none}.format-labels{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem;margin:-.35rem 0 1rem;font-size:.9rem}.format-labels span{color:var(--muted)}.format-labels label{cursor:pointer;border:1px solid var(--line);border-radius:.25rem;background:#fff;padding:.48rem .8rem;color:#222;font-weight:700}.dark .format-labels label{border-color:#566171;background:#202a37;color:#e8edf5}#format-png:checked~.format-labels label[for="format-png"],#format-html:checked~.format-labels label[for="format-html"]{border-color:#111;background:#111;color:#fff}#format-png:checked~.subject-panels .question-html{display:none}#format-html:checked~.subject-panels .question-png{display:none}.question-block{background:#e9e9e7}.dark .question-block{background:#25282d}.question-png{margin:0;background:#fff;border:1px solid #c9c9c6;box-shadow:0 2px 8px rgba(0,0,0,.08)}.question-png img{width:100%;margin:0;border-radius:0}.question-png figcaption{padding:.45rem .8rem;border-top:1px solid #ddd;color:#666;background:#fafafa;font-size:.75rem;text-align:right}.exam-paper{min-height:17rem;padding:2rem 2.2rem 2.4rem;border:1px solid #c8c8c4;border-radius:0;background:#fff;color:#111;box-shadow:0 2px 8px rgba(0,0,0,.08);font-family:"KoPub Batang","Noto Serif KR","Batang",serif;font-size:1.02rem;line-height:1.95}.exam-question-heading{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.35rem;font-family:"Noto Sans KR","Apple SD Gothic Neo",sans-serif}.exam-question-heading strong{font-size:1.15rem}.exam-question-heading span{font-size:.82rem}.exam-question-body>p:first-child{margin-top:0}.exam-question-body .exam-figure-image{width:auto;max-width:min(100%,34rem);max-height:34rem;margin:1.4rem auto;border-radius:0;object-fit:contain}.exam-question-body blockquote{margin:1.25rem auto;padding:1rem 1.25rem;border:1px solid #555;background:#fff;color:#111}.exam-question-body blockquote p:last-child{margin-bottom:0}.exam-choices{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.6rem 1rem;margin-top:1.4rem}.exam-choices>span{min-width:0;text-align:center}.exam-choices p{margin:0}.intent-block{border:1px solid #b9b9b5;border-radius:0;background:#f4f4f1;color:#222}.dark .intent-block{border-color:#656565;background:#deded8;color:#111}.solution-block{margin-top:1.2rem;border-top:3px double #333;background:#fff;color:#111;font-family:"KoPub Batang","Noto Serif KR","Batang",serif}.solution-heading{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:.55rem;border-bottom:1px solid #aaa;font-family:"Noto Sans KR","Apple SD Gothic Neo",sans-serif}.solution-heading h4{margin:0}.answer-badge,.dark .answer-badge{margin:0;border:1px solid #333;border-radius:0;background:#fff;padding:.22rem .58rem;color:#111}.solution-body blockquote{border:1px solid #777;border-left:4px solid #222;background:#f7f7f5;color:#111}.solution-body p:last-child{margin-bottom:0}@media(max-width:680px){.format-labels label{flex:1;text-align:center}.exam-paper{min-height:14rem;padding:1.3rem 1.1rem;font-size:.96rem;line-height:1.8}.exam-question-body .exam-figure-image{max-height:25rem}.exam-choices{grid-template-columns:repeat(2,minmax(0,1fr));gap:.6rem}.question-block{padding:.75rem}.question-png figcaption{display:none}}
/* 평가원 시험지 지면 세부 보정 */
.question-card{border-color:#b9bec4;border-radius:0;background:#f2f2ef}.question-card>header{border-top:3px solid #171717;border-bottom:1px solid #9b9b98;background:#fff;padding:.62rem 1rem}.question-card>header h3{margin:0;font-size:.95rem;letter-spacing:-.025em}.question-card>header span{color:#333}.question-block{padding:1.6rem;background:#dededb}.exam-paper{max-width:49rem;margin:0 auto;padding:2.35rem 2.7rem 2.8rem;border-color:#aaa;box-shadow:0 2px 10px rgba(0,0,0,.1);font-size:1.055rem;line-height:2;letter-spacing:-.012em;word-break:keep-all}.exam-paper::before{content:"2027학년도 9월 모의평가 · 수학 영역";display:block;margin-bottom:1.65rem;padding-bottom:.55rem;border-bottom:3px double #222;text-align:center;font-family:"Noto Sans KR","Apple SD Gothic Neo",sans-serif;font-size:.76rem;font-weight:700;letter-spacing:.08em}.exam-question-heading{margin-bottom:.85rem;font-family:"KoPub Batang","Noto Serif KR","Batang",serif}.exam-question-heading strong{font-size:1.25rem;font-weight:800}.exam-question-heading span{color:#222;font-size:.8rem}.exam-question-body p{margin:.7rem 0}.exam-question-body .katex-display{margin:1.15rem 0}.exam-question-body code{border:1px solid #333;border-radius:0;background:#fff;padding:.08rem .38rem;color:#111;font-family:inherit;font-weight:700}.exam-question-body .exam-figure-image{max-width:min(100%,38rem);max-height:35rem;margin:1.65rem auto;filter:grayscale(1)}.exam-question-body blockquote{padding:1.05rem 1.2rem;border:1px solid #333;border-left:1px solid #333;background:#fafaf8}.exam-choices{padding-top:.55rem;border-top:1px solid #aaa}.intent-block,.solution-block{max-width:49rem;margin-right:auto;margin-left:auto}.intent-block{margin-top:0;padding:1rem 1.35rem}.solution-block{padding:1.8rem 2.2rem 2.15rem;border-right:1px solid #bbb;border-bottom:1px solid #bbb;border-left:1px solid #bbb;box-shadow:0 2px 8px rgba(0,0,0,.07)}.solution-heading{border-bottom:3px double #333}.solution-body{line-height:1.9}.solution-body .katex-display{margin:1rem 0}@media(max-width:680px){.question-card>header{border-top-width:2px}.question-block{padding:.55rem}.exam-paper{padding:1.35rem 1.05rem 1.7rem;font-size:.96rem;line-height:1.85}.exam-paper::before{margin-bottom:1.1rem;font-size:.67rem;letter-spacing:.025em}.exam-question-body .exam-figure-image{max-height:24rem}.intent-block,.solution-block{max-width:none}.solution-block{padding:1.25rem 1.05rem}}
</style>`;

if (html.includes('<del>') || html.includes('</del>')) {
  throw new Error(
    'Unexpected strikethrough markup found. Check numeric ranges that use a single tilde.',
  );
}

if (/((?<!\\),d[a-zA-Z]\b)|\\left\{/.test(html)) {
  throw new Error(
    'Math rendering regression found: a differential or escaped set brace lost its backslash.',
  );
}

if (!html.includes(String.raw`\frac{3[(\ln t)^2-1]}{t}`)) {
  throw new Error('The corrected derivative formula for calculus question 27 is missing.');
}

const trappedLatexCode = html.match(/<code>[^<]*\\[A-Za-z]+[^<]*<\/code>/);
if (trappedLatexCode) {
  throw new Error(
    `A LaTeX command is still trapped inside an inline-code span: ${trappedLatexCode[0]}`,
  );
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);
console.log(`Generated ${outputPath} (${problems.size} problems, ${solutions.size} solutions)`);
