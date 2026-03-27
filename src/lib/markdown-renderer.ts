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
 * 제목 마크다운을 HTML로 변환
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
 * 강조 텍스트 변환
 */
function transformBold(match: string, text: string): string {
  return `<strong class="font-semibold text-gray-900 dark:text-gray-100">${text}</strong>`;
}

function transformItalic(match: string, text: string): string {
  return `<em class="italic text-gray-800 dark:text-gray-200">${text}</em>`;
}

/**
 * 리스트 항목을 HTML로 변환
 */
function transformListItem(item: string): string {
  if (item.trim().startsWith('- ')) {
    return `<li class="text-gray-700 dark:text-gray-300">${item.replace(/^- /, '')}</li>`;
  }

  return '';
}

function transformOrderedListItem(item: string): string {
  const match = item.trim().match(/^\d+\.\s+(.*)$/);
  if (!match) {
    return '';
  }

  return `<li class="text-gray-700 dark:text-gray-300">${match[1]}</li>`;
}

function normalizeDetailsMarkdown(innerContent: string): string {
  return innerContent
    .replace(/(###\s[^\n]+?[一-龥A-Za-z0-9」』])\s+(?=[가-힣])/g, '$1\n\n')
    .replace(
      /(###\s(?:[^\n]*?(?:작품의 배경과 의미|문학적 특징|문학사적 의의|작품 감상 포인트|현대적 의미|수능 출제 포인트|영상 하이라이트|문학 감상의 진정한 즐거움)))\s+/g,
      '$1\n\n'
    )
    .replace(/(###\s[^\n#<]+?)\s+(?=###\s)/g, '$1\n\n')
    .replace(/(###\s[^\n#<]+?)\s+(?=\d+\.\s)/g, '$1\n\n')
    .replace(/(###\s[^\n#<]+?)\s+(?=-\s)/g, '$1\n\n')
    .replace(/([.!?]["'”’」』]*)\s+(?=###\s)/g, '$1\n\n')
    .replace(/([.!?]["'”’」』]*)\s+(?=\d+\.\s)/g, '$1\n\n')
    .replace(/([.!?]["'”’」』]*)\s+(?=-\s)/g, '$1\n\n')
    .replace(/(\d+\.\s[^0-9\n]+?)\s+(?=\d+\.\s)/g, '$1\n')
    .trim();
}

/**
 * 문단을 HTML로 변환
 */
function transformParagraph(paragraph: string): string {
  const trimmed = paragraph.trim();

  if (trimmed === '') {
    return '';
  }

  if (
    trimmed.startsWith('<h') ||
    trimmed.startsWith('<figure') ||
    trimmed.startsWith('<blockquote') ||
    trimmed.startsWith('<div') ||
    trimmed.startsWith('<details') ||
    trimmed.startsWith('<ul') ||
    trimmed.startsWith('<ol') ||
    trimmed.startsWith('<hr')
  ) {
    return paragraph;
  }

  if (trimmed.startsWith('> ')) {
    const lines = paragraph
      .split('\n')
      .map(line => line.replace(/^>\s*/, ''))
      .join('<br />');
    return `<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 bg-gray-100/50 dark:bg-gray-800/50 p-4 my-4 italic text-gray-800 dark:text-gray-200">${lines}</blockquote>`;
  }

  if (trimmed.startsWith('- ')) {
    const items = paragraph.split('\n').map(transformListItem).join('');
    return `<ul class="list-disc list-inside mb-4 space-y-2">${items}</ul>`;
  }

  if (/^\d+\.\s/.test(trimmed)) {
    const items = paragraph.split('\n').map(transformOrderedListItem).join('');
    return `<ol class="list-decimal list-inside mb-4 space-y-2">${items}</ol>`;
  }

  return `<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">${paragraph}</p>`;
}

/**
 * Details 블록 내부의 마크다운을 HTML로 변환하는 헬퍼 함수
 */
function processDetailsContent(innerContent: string): string {
  return normalizeDetailsMarkdown(innerContent)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, transformImage)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, transformLink)
    .replace(/^#### (.*$)/gim, transformH4)
    .replace(/^### (.*$)/gim, transformH3)
    .replace(/^## (.*$)/gim, transformH2)
    .replace(/^# (.*$)/gim, transformH1)
    .replace(/\*\*(.*?)\*\*/g, transformBold)
    .replace(/\*(.*?)\*/g, transformItalic)
    .split('\n\n')
    .map(transformParagraph)
    .join('');
}

/**
 * 마크다운 콘텐츠를 HTML로 변환
 */
export function renderMarkdown(content: string): string {
  const preprocessed = content.replace(/^(---)\s+(#{2,4}\s)/gm, '$1\n\n$2');

  return preprocessed
    .replace(
      /(<details[^>]*>[\s\S]*?<div[^>]*>)([\s\S]*?)(<\/div>\s*<\/details>)/g,
      (match, openTags, innerContent, closeTags) => {
        const processedContent = processDetailsContent(innerContent);
        return `${openTags}${processedContent}${closeTags}`;
      }
    )
    .replace(
      /<details>\s*<summary>([^<]+)<\/summary>\s*([\s\S]*?)\s*<\/details>/g,
      (match, summary, innerContent) => {
        const processedContent = processDetailsContent(innerContent);
        return `<details class="my-6 border border-gray-200 dark:border-gray-700 rounded-lg"><summary class="cursor-pointer p-4 font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">${summary}</summary><div class="p-4 pt-0">${processedContent}</div></details>`;
      }
    )
    .replace(
      /^---$/gim,
      '<hr class="my-12 border-t border-gray-200 dark:border-gray-700" />'
    )
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, transformImage)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, transformLink)
    .replace(/^# (.*$)/gim, transformH1)
    .replace(/^## (.*$)/gim, transformH2)
    .replace(/^### (.*$)/gim, transformH3)
    .replace(/^#### (.*$)/gim, transformH4)
    .replace(/\*\*(.*?)\*\*/g, transformBold)
    .replace(/\*(.*?)\*/g, transformItalic)
    .split('\n\n')
    .map(transformParagraph)
    .join('');
}

export default renderMarkdown;
