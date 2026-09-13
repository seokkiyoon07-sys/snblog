// Run: npx tsx scripts/build-science-study-guide.mjs
// Builds the article from Markdown and then refreshes the subject chart from its data.
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const file =
  'content/integrated-science-problem/2028-integrated-science-study-guide.html';
const existing = fs.readFileSync(file, 'utf8');
const css = existing.match(/<style>([\s\S]*?)<\/style>/)[1];
let md = fs.readFileSync(
  'md/20260913_integrated_science_study_guide_draft.md',
  'utf8'
);
md = md
  .replace(/^# [^\n]+\r?\n/, '')
  .replace(/^>.*\r?\n/gm, '')
  .replace(/<!--[\s\S]*?-->/g, '');
let html = renderToStaticMarkup(
  React.createElement(Markdown, { remarkPlugins: [remarkGfm] }, md)
);
const sections = [
  ['overview', '25문항의 학습 과제'],
  ['science-subjects', '물·화·생·지 연계'],
  ['concepts', '개념과 사례 구분'],
  ['measurement', '측정과 물리량'],
  ['connections', '원소와 물질의 연결'],
  ['data', '자료의 값과 기준'],
  ['inquiry', '탐구 설계와 결론'],
  ['quantity', '양적 관계와 운동'],
  ['earth-systems', '지구시스템의 변화'],
  ['past-exams', '유사 기출 활용법'],
  ['study', '다섯 단계 학습법'],
  ['next', 'SNargen 제작 계획'],
];
let index = 0;
html = html.replace(/<h2>(.*?)<\/h2>/g, (_, title) => {
  if (!title.startsWith(`${index + 1}. `))
    throw Error('Nonsequential heading: ' + title);
  return `<h2 id="${sections[index++][0]}">${title}</h2>`;
});
if (index !== sections.length) throw Error('Section count mismatch');
// This section is generated from the same data that supplies the interactive modal.
html = html.replace(
  /<h2 id="science-subjects">[\s\S]*?(?=<h2 id="concepts">)/,
  '<section aria-labelledby="science-subjects"></section>\n'
);
const questionLink = (n, label = `${n}번`) =>
  `<a href="/problems/Integrated_science_Studies/28_examples/${n}.png" data-science-question="${n}" aria-haspopup="dialog" aria-label="통합과학 공식 예시문항 ${n}번 문제 보기">${label}</a>`;
html = html.replace(
  /<a href="\/problem-download\/2028-integrated-science-examples\?question=(\d+)">([^<]+)<\/a>/g,
  (_, n, label) => questionLink(n, label)
);
html = html.replace(/<table>([\s\S]*?)<\/table>/g, (_, table) => {
  const headers = [...table.matchAll(/<th>(.*?)<\/th>/g)].map(m => m[1]);
  let col = 0;
  table = table
    .replace(/<th>/g, '<th scope="col">')
    .replace(/<td>(.*?)<\/td>/g, (_, value) => {
      const label = headers[col++ % headers.length];
      if (/^\d+(?:·\d+)*번$/.test(value))
        value = value
          .replace(/번$/, '')
          .split('·')
          .map(n => questionLink(n))
          .join(' · ');
      return `<td data-label="${label}"><span class="sn-cell-value">${value}</span></td>`;
    });
  return `<div class="sn-guide-table"><table>${table}</table></div>`;
});
html = html.replace(
  /<p>(<a href="\/problem-download\/2028-integrated-science-examples">[\s\S]*?<\/a>)<\/p>/g,
  '<p class="sn-guide-action">$1</p>'
);
html = html.replace(
  /(<p><strong>첫째,[\s\S]*?<\/p>\s*<p><strong>둘째,[\s\S]*?<\/p>\s*<p><strong>셋째,[\s\S]*?<\/p>\s*<p><strong>넷째,[\s\S]*?<\/p>\s*<p><strong>다섯째,[\s\S]*?<\/p>)/,
  block =>
    '<ol class="sn-guide-steps" aria-label="통합과학 다섯 단계 학습법">' +
    block.replace(
      /<p><strong>(.*?)<\/strong>([\s\S]*?)<\/p>/g,
      (_, title, text) =>
        `<li><strong>${title.replace(/^(첫째|둘째|셋째|넷째|다섯째), /, '')}</strong><p>${text.trim()}</p></li>`
    ) +
    '</ol>'
);
html = html.replace(
  /<p><em>(이 글은[\s\S]*?)<\/em><\/p>/,
  '<p class="sn-guide-source"><small>$1</small></p>'
);
const intro = `<div class="sn-guide-overview">
<p class="sn-guide-eyebrow">2028 수능 · 통합과학 학습 가이드</p>
<p class="sn-guide-lead">개념을 연결하고, 조건을 구분하고,<br class="sn-guide-wide-break"> 자료를 근거로 판단하는 공부.</p>
<p>25문항의 풀이와 역분해에서 찾은 통합과학의 학습 방향입니다.</p>
<dl class="sn-guide-stats"><div><dt>분석 문항</dt><dd>25<span>문항</span></dd></div><div><dt>예시문항 총점</dt><dd>50<span>점</span></dd></div><div><dt>연관 자료</dt><dd>72<span>개</span></dd></div></dl>
</div>
<nav class="sn-guide-toc" aria-label="이 글의 목차"><p>이 글에서 살펴볼 내용</p><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></nav>
<p class="sn-question-hint">밑줄이 있는 문항 번호를 누르면 통합과학 문제 원문이 팝업으로 열립니다. 전체 풀이·역분해는 분석 페이지에서 확인할 수 있습니다.</p>`;
fs.writeFileSync(
  file,
  `<style>${css}</style>\n<div class="sn-science-guide">\n${intro}\n${html}\n</div>\n`
);
await import('./build-science-subject-section.ts');
console.log('Built study guide:', index, 'sections');
