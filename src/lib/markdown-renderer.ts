/**
 * 마크다운을 HTML로 변환하는 통합 렌더러
 *
 * @description
 * - 모든 카테고리 페이지에서 사용하는 단일 렌더링 로직
 * - 정규식 기반 마크다운 파싱
 * - 이미지, 링크, 제목, 리스트 등 지원
 *
 * @example
 * ```typescript
 * import { renderMarkdown } from '@/lib/markdown-renderer';
 *
 * const html = renderMarkdown(post.content);
 * <div dangerouslySetInnerHTML={{ __html: html }} />
 * ```
 */

/**
 * 이미지 마크다운을 HTML로 변환
 * ![alt](src) → <figure><img /></figure>
 */
function transformImage(match: string, alt: string, src: string): string {
  // 로컬 이미지 (/images/로 시작)
  if (src.startsWith('/images/')) {
    return `<figure class="my-8"><div class="relative w-full h-auto"><img src="${src}" alt="${alt}" class="rounded-xl shadow-md mx-auto w-full h-auto object-contain" loading="lazy" /></div><figcaption class="text-center text-gray-500 mt-2 text-sm">${alt}</figcaption></figure>`;
  }

  // 외부 이미지
  return `<figure class="my-8"><div class="relative w-full h-auto"><img src="${src}" alt="${alt}" class="rounded-xl shadow-md mx-auto w-full h-auto object-contain" loading="lazy" /></div><figcaption class="text-center text-gray-500 mt-2 text-sm">${alt}</figcaption></figure>`;
}

/**
 * 링크 마크다운을 HTML로 변환
 * [text](url) → <a href="url">text</a>
 */
function transformLink(match: string, text: string, url: string): string {
  return `<a href="${url}" class="text-sn-primary hover:text-sn-primary-dark underline font-semibold" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

/**
 * 제목 마크다운을 HTML로 변환 (다크모드 지원)
 */
function transformH1(match: string, text: string): string {
  return `<h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">${text}</h1>`;
}

function transformH2(match: string, text: string): string {
  return `<h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">${text}</h2>`;
}

function transformH3(match: string, text: string): string {
  return `<h3 class="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">${text}</h3>`;
}

function transformH4(match: string, text: string): string {
  return `<h4 class="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">${text}</h4>`;
}

/**
 * 강조 텍스트 변환 (다크모드 지원)
 */
function transformBold(match: string, text: string): string {
  return `<strong class="font-semibold text-gray-900 dark:text-gray-100">${text}</strong>`;
}

function transformItalic(match: string, text: string): string {
  return `<em class="italic text-gray-800 dark:text-gray-200">${text}</em>`;
}

/**
 * 리스트 항목을 HTML로 변환 (다크모드 지원)
 */
function transformListItem(item: string): string {
  if (item.trim().startsWith('- ')) {
    return `<li class="text-gray-700 dark:text-gray-300">${item.replace(/^- /, '')}</li>`;
  }
  return '';
}

/**
 * 문단을 HTML로 변환
 */
function transformParagraph(paragraph: string): string {
  const trimmed = paragraph.trim();

  // 빈 문단
  if (trimmed === '') {
    return '';
  }

  // 제목 (이미 변환됨)
  if (trimmed.startsWith('<h')) {
    return paragraph;
  }

  // 이미지 (이미 변환됨)
  if (trimmed.startsWith('<figure')) {
    return paragraph;
  }

  // Quote (이미 변환됨)
  if (trimmed.startsWith('<blockquote')) {
    return paragraph;
  }

  // Callout/Div (이미 변환됨 - Notion에서 변환된 HTML)
  if (trimmed.startsWith('<div')) {
    return paragraph;
  }

  // Quote 블록 (여러 줄) - 라이트/다크 모드 지원
  if (trimmed.startsWith('> ')) {
    const lines = paragraph
      .split('\n')
      .map(line => line.replace(/^>\s*/, ''))
      .join('<br />');
    return `<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 bg-gray-100/50 dark:bg-gray-800/50 p-4 my-4 italic text-gray-800 dark:text-gray-200">${lines}</blockquote>`;
  }

  // 리스트
  if (trimmed.startsWith('- ')) {
    const items = paragraph.split('\n').map(transformListItem).join('');
    return `<ul class="list-disc list-inside mb-4 space-y-2">${items}</ul>`;
  }

  // 일반 문단 (다크모드 지원)
  return `<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">${paragraph}</p>`;
}

/**
 * 마크다운 콘텐츠를 HTML로 변환
 *
 * @param content - 마크다운 형식의 콘텐츠
 * @returns HTML 문자열
 *
 * @example
 * ```typescript
 * const markdown = `
 * # 제목
 *
 * **강조** 텍스트입니다.
 *
 * ![이미지](/images/test.png)
 * `;
 *
 * const html = renderMarkdown(markdown);
 * ```
 */
export function renderMarkdown(content: string): string {
  return (
    content
      // 1. 이미지 변환 (링크보다 먼저 처리해야 함)
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, transformImage)

      // 2. 링크 변환
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, transformLink)

      // 3. 제목 변환
      .replace(/^# (.*$)/gim, transformH1)
      .replace(/^## (.*$)/gim, transformH2)
      .replace(/^### (.*$)/gim, transformH3)
      .replace(/^#### (.*$)/gim, transformH4)

      // 4. 강조 텍스트 변환
      .replace(/\*\*(.*?)\*\*/g, transformBold)
      .replace(/\*(.*?)\*/g, transformItalic)

      // 5. 문단 처리
      .split('\n\n')
      .map(transformParagraph)
      .join('')
  );
}

/**
 * 기본 내보내기
 */
export default renderMarkdown;
