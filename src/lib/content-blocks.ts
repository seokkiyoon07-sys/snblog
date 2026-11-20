/**
 * 글 본문에서 쓰는 짧은 블록 문법. renderMarkdown 이 마크다운을 처리하기 전에 HTML로 바꾼다.
 * 글마다 긴 Tailwind 클래스를 복사하지 않아도 같은 모양이 나오도록 한 것이다.
 * 디자인 원칙: 얇은 선과 표, 색은 강조 하나만. 상자·카드·영어 라벨은 쓰지 않는다.
 *
 * ## 제목 {#q1}            → 위에 얇은 선이 있는 칼럼형 제목 + 앵커(id)
 *
 * ::: stats                → 숫자 요약 줄 (2~4칸). "이름 | 값 | 보조 설명", ! 로 시작하면 강조색
 * 이번 주말 논술 대학 | 14곳 | 11/21~22
 * ! 모바일 신분증 불가 | 3곳
 * :::
 *
 * ::: toc                  → 이 글의 '## 제목 {#id}' 들로 목차를 만든다 (안은 비워 둔다)
 * :::
 *
 * ::: checklist 가방에 넣을 것   → 체크 칸 목록 (2열). 안은 "- 항목"
 * - **대학 수험표** 출력본
 * :::
 *
 * ::: note                 → 회색 바탕 참고 문단 (글 하나에 한두 번만)
 * :::
 *
 * ::: source               → 글 끝 출처·안내 (작은 글씨, 문단마다 줄 바꿈)
 * :::
 */

const BLOCK_PATTERN = /^::: *(\w+)(?: +([^\n]*))?\n([\s\S]*?)^:::[ \t]*$/gm;
const HEADING_WITH_ID = /^## (.+?) \{#([\w-]+)\}[ \t]*$/gm;

const escapeAttr = (value: string) => value.replace(/"/g, '&quot;');

function lines(body: string): string[] {
  return body
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
}

function stats(body: string): string {
  const rows = lines(body).map(line => {
    const accent = line.startsWith('!');
    const [label, value = '', note] = line
      .replace(/^!\s*/, '')
      .split('|')
      .map(cell => cell.trim());
    return { accent, label, value, note };
  });
  // Tailwind 가 클래스 이름을 찾을 수 있도록 문자열을 그대로 적는다
  const columns =
    ['md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4'][
      Math.min(rows.length, 4) - 1
    ] ?? 'md:grid-cols-4';
  const cells = rows
    .map((row, index) => {
      // 모바일 2열, 넓은 화면 한 줄일 때 칸 사이 선
      const border = [
        index % 2 === 0 ? 'border-r' : '',
        index < rows.length - 2 ? 'border-b md:border-b-0' : '',
        index < rows.length - 1 ? 'md:border-r' : 'md:border-r-0',
      ].join(' ');
      const valueColor = row.accent
        ? 'text-sn-primary dark:text-emerald-400'
        : 'text-slate-900 dark:text-white';
      const note = row.note
        ? ` <span class="text-base font-semibold text-slate-500">${row.note}</span>`
        : '';
      return `<div class="${border} border-slate-200 px-4 py-5 dark:border-slate-700"><p class="m-0 text-sm text-slate-500 dark:text-slate-400">${row.label}</p><p class="m-0 mt-1 text-2xl font-bold ${valueColor}">${row.value}${note}</p></div>`;
    })
    .join('');
  return `<div class="not-prose my-8 grid grid-cols-2 ${columns} border-y border-slate-300 dark:border-slate-600">${cells}</div>`;
}

function toc(headings: { title: string; id: string }[]): string {
  const links = headings
    .map(
      heading =>
        `<a href="#${heading.id}" class="text-slate-700 no-underline hover:underline dark:text-slate-200">${heading.title}</a>`
    )
    .join('<br>');
  return `<nav aria-label="목차" class="not-prose my-8 border-l-2 border-slate-300 pl-4 text-[15px] leading-8 text-slate-600 dark:border-slate-600 dark:text-slate-300">${links}</nav>`;
}

function checklist(title: string | undefined, body: string): string {
  const items = lines(body)
    .map(line => line.replace(/^[-*]\s*/, ''))
    .map(
      item =>
        `<li class="flex gap-3 py-2 text-[15px] text-slate-700 dark:text-slate-300"><span aria-hidden="true" class="mt-1 inline-block h-4 w-4 shrink-0 rounded-sm border border-slate-400 dark:border-slate-500"></span><span>${item}</span></li>`
    )
    .join('');
  const heading = title
    ? `<p class="m-0 border-b border-slate-200 py-3 text-sm font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-400">${title}</p>`
    : '';
  return `<div class="not-prose my-8 border-y border-slate-300 dark:border-slate-600">${heading}<ul class="m-0 grid list-none gap-x-8 p-0 py-2 sm:grid-cols-2">${items}</ul></div>`;
}

function note(body: string): string {
  return `<div class="not-prose my-8 bg-slate-50 px-5 py-4 text-[15px] leading-relaxed text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">${lines(body).join('<br>')}</div>`;
}

function source(body: string): string {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map(part => part.trim().replace(/\n/g, ' '))
    .filter(Boolean)
    .map(
      (part, index) => `<p class="m-0${index > 0 ? ' mt-1.5' : ''}">${part}</p>`
    )
    .join('');
  return `<div class="not-prose mt-12 border-t border-slate-200 pt-5 text-xs leading-relaxed text-slate-500 dark:border-slate-700 dark:text-slate-400">${paragraphs}</div>`;
}

export function renderContentBlocks(content: string): string {
  if (!content.includes(':::') && !/\{#[\w-]+\}/.test(content)) return content;

  const headings = Array.from(content.matchAll(HEADING_WITH_ID), match => ({
    title: match[1].replace(/\*\*/g, ''),
    id: match[2],
  }));

  // 블록 HTML은 한 줄로 만들어 문단(\n\n) 나누기에 걸리지 않게 한다
  return content
    .replace(
      BLOCK_PATTERN,
      (match, name: string, arg: string, body: string) => {
        switch (name) {
          case 'stats':
            return stats(body);
          case 'toc':
            return toc(headings);
          case 'checklist':
            return checklist(arg?.trim(), body);
          case 'note':
            return note(body);
          case 'source':
            return source(body);
          default:
            return match;
        }
      }
    )
    .replace(
      HEADING_WITH_ID,
      (_, title: string, id: string) =>
        `<h2 id="${escapeAttr(id)}" class="scroll-mt-28 mt-16 mb-5 border-t border-slate-300 pt-8 text-2xl font-bold text-slate-900 dark:border-slate-600 dark:text-white">${title}</h2>`
    );
}
