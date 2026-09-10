import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const snargptSourcePath = fileURLToPath(
  new URL('../md/20260910_kice_9_math.md', import.meta.url)
);
const defaultPostPath = fileURLToPath(
  new URL(
    '../content/problem-download/2027-september-mock-math-solution.html',
    import.meta.url
  )
);

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ]
  );
}

// Protect TeX from CommonMark's handling of backslashes, underscores and stars.
// BlogLayout's existing KaTeX renderer consumes the restored math delimiters.
export function renderSourceMarkdown(markdown) {
  const math = [];
  const protectedMarkdown = markdown.replace(
    /\$\$[\s\S]*?\$\$|(?<!\\)\$(?!\$)(?:\\.|[^$])*?\$/g,
    value => {
      const token = `SNMATHPLACEHOLDER${math.length}END`;
      math.push(value);
      return token;
    }
  );
  const html = renderToStaticMarkup(
    React.createElement(
      ReactMarkdown,
      {
        remarkPlugins: [[remarkGfm, { singleTilde: false }]],
      },
      protectedMarkdown
    )
  );
  return html.replace(/SNMATHPLACEHOLDER(\d+)END/g, (_, index) =>
    escapeHtml(math[Number(index)])
  );
}

export function parseSnargptSolutions(markdown) {
  const result = new Map();
  const subjects = ['common', 'prob', 'calc', 'geo'];
  const sections = markdown.replace(/\r\n/g, '\n').split(/^## /m).slice(1);
  if (sections.length !== 4)
    throw new Error('Expected four SNarGPT subject sections');
  sections.forEach((section, subjectIndex) => {
    const questions = [
      ...section.matchAll(
        /^### \[(\d+)번\][^\n]*\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm
      ),
    ];
    const expected = subjectIndex === 0 ? 22 : 8;
    if (questions.length !== expected)
      throw new Error(`Incomplete ${subjects[subjectIndex]} solutions`);
    for (const [, number, body] of questions) {
      const answer = body.match(/^\* \*\*정답:\*\*\s*([^\n]+)/m);
      if (!answer || !body.includes('**해설:**'))
        throw new Error(`Missing answer or solution: ${number}`);
      const explanation = body
        .slice(answer.index + answer[0].length)
        .trim()
        .replace(/\n---\s*$/, '')
        .trim();
      const key = `${subjects[subjectIndex]}-${number}`;
      if (result.has(key)) throw new Error(`Duplicate solution: ${key}`);
      result.set(key, { answer: answer[1].trim(), explanation });
    }
  });
  return result;
}

export function addSnargptSolutions(originalHtml, markdown) {
  const solutions = parseSnargptSolutions(markdown);
  let html = originalHtml
    .replace(/\r\n/g, '\n')
    .replace(
      /\n?<!-- snargpt-(controls|solution|styles|intro):start -->[\s\S]*?<!-- snargpt-\1:end -->\n?/g,
      ''
    );
  const seen = new Set();
  html = html.replace(
    /(<article class="question-card (common|prob|calc|geo)-q(\d+)-card">)([\s\S]*?)(<\/article>)/g,
    (_, opening, subject, number, body, closing) => {
      const key = `${subject}-${number}`;
      const source = solutions.get(key);
      if (!source || seen.has(key))
        throw new Error(`Invalid question mapping: ${key}`);
      seen.add(key);
      const controls = `<!-- snargpt-controls:start -->
<input class="provider-radio provider-snargpt-radio" type="radio" name="solution-provider-${key}" id="provider-snargpt-${key}" aria-label="SNarGPT 해설" checked>
<input class="provider-radio provider-chatgpt-radio" type="radio" name="solution-provider-${key}" id="provider-chatgpt-${key}" aria-label="ChatGPT 해설">
<div class="provider-labels" role="group" aria-label="해설 선택"><label data-provider="snargpt" for="provider-snargpt-${key}">SNarGPT 해설 <span>기본</span></label><label data-provider="chatgpt" for="provider-chatgpt-${key}">ChatGPT 해설</label></div>
<!-- snargpt-controls:end -->`;
      const chatgptBody = body
        .replace(
          'class="intent-block"',
          'class="intent-block provider-chatgpt"'
        )
        .replace(
          'class="solution-block"',
          'class="solution-block provider-chatgpt"'
        )
        .replace('<h4>해설</h4>', '<h4>ChatGPT 해설</h4>')
        .replace(
          /\s*<div class="intent-block provider-chatgpt">/,
          `\n${controls}\n  <div class="intent-block provider-chatgpt">`
        );
      return `${opening}${chatgptBody.trimEnd()}\n<!-- snargpt-solution:start -->
  <div class="solution-block provider-snargpt" data-solution-key="${key}"><div class="solution-heading"><h4>SNarGPT 해설</h4><span class="answer-badge">정답 ${renderSourceMarkdown(source.answer).replace(/^<p>|<\/p>$/g, '')}</span></div><div class="solution-body">${renderSourceMarkdown(source.explanation)}</div></div>
<!-- snargpt-solution:end -->
${closing}`;
    }
  );
  if (seen.size !== 46 || seen.size !== solutions.size)
    throw new Error('Expected exactly 46 matched solutions');
  html = html.replace(
    /<h2 id="solutions">46문항 문제·해설<\/h2>\s*/,
    `<h2 id="solutions">46문항 문제·해설</h2>
<!-- snargpt-intro:start --><p>SNarGPT 해설이 기본으로 표시됩니다. 각 문항의 해설 바로 위에서 ChatGPT 해설로 전환해 비교할 수 있습니다.</p><!-- snargpt-intro:end -->\n`
  );
  html =
    html.trimEnd() +
    `\n<!-- snargpt-styles:start -->
<style>
.math-post .provider-radio{position:absolute;width:1px;height:1px;opacity:0;clip-path:inset(50%)}
.math-post .provider-labels{display:flex;gap:.5rem;max-width:49rem;margin:1.25rem auto 0;padding:.35rem;border:1px solid var(--line);border-radius:.8rem;background:var(--soft)}
.math-post .provider-labels label{display:flex;flex:1;align-items:center;justify-content:center;gap:.4rem;min-height:44px;padding:.6rem .8rem;border-radius:.55rem;cursor:pointer;font-weight:800;font-size:.95rem;text-align:center}
.math-post .provider-labels span{font-size:.7rem;font-weight:600;opacity:.85}
.provider-snargpt-radio:checked~.provider-labels label[data-provider="snargpt"],.provider-chatgpt-radio:checked~.provider-labels label[data-provider="chatgpt"]{background:#047857;color:white;box-shadow:0 1px 4px #0002}
.provider-snargpt-radio:focus-visible~.provider-labels label[data-provider="snargpt"],.provider-chatgpt-radio:focus-visible~.provider-labels label[data-provider="chatgpt"]{outline:3px solid #059669;outline-offset:3px}
.provider-snargpt-radio:checked~.provider-chatgpt,.provider-chatgpt-radio:checked~.provider-snargpt{display:none}
#view-question:checked~.subject-panels .provider-labels{display:none}
.provider-snargpt .answer-badge p{display:inline;margin:0}
.provider-snargpt .katex-display{max-width:100%;overflow-x:auto;overflow-y:hidden;padding:.25rem 0}
.provider-snargpt .solution-heading{flex-wrap:wrap;gap:.5rem}
@media(max-width:680px){.math-post .provider-labels label{gap:.3rem;padding:.55rem .3rem;font-size:.82rem;white-space:nowrap}.math-post .provider-labels span{flex-shrink:0;font-size:.65rem}}
</style>
<!-- snargpt-styles:end -->\n`;
  return html;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const [sourcePath = snargptSourcePath, postPath = defaultPostPath] =
    process.argv.slice(2);
  const result = addSnargptSolutions(
    fs.readFileSync(postPath, 'utf8'),
    fs.readFileSync(sourcePath, 'utf8')
  );
  fs.writeFileSync(postPath, result);
  console.log(
    'Updated all 46 questions: SNarGPT default + existing ChatGPT solutions.'
  );
}
