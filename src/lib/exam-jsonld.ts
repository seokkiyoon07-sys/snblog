// 기출 읽을거리(/problems/{id}, exam 정보가 있는 글)의 구조화 데이터.
// 본문 HTML에 손으로 넣지 않고 메타데이터와 본문의 <dl class="faq">에서 만든다.

import type { Post } from '@/data/posts';
import { BASE_URL, EXAM_TYPE_CONFIG, ORGANIZATION_INFO } from '@/lib/config';

const EXAM_FULL_NAME: Record<string, string> = {
  suneung: '대학수학능력시험',
  june: '6월 대학수학능력시험 모의평가',
  september: '9월 대학수학능력시험 모의평가',
  'education-office': '전국연합학력평가',
};

// 태그 중 개념이 아닌 것(브랜드·분류)은 teaches 에서 뺀다
const NON_CONCEPT_TAGS = ['SNarGPT', '비문학'];

const ENTITIES: Record<string, string> = {
  '&lt;': '<',
  '&gt;': '>',
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' ',
};

// HTML 조각 → 구조화 데이터용 평문. KaTeX 표기(\( {}_{n}\mathrm{C}_{2} \))는 nC2 로 푼다
export function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;|&#\d+;/g, m => ENTITIES[m] ?? m)
    .replace(/\{\}_\{([^}]*)\}\\mathrm\{C\}_\{([^}]*)\}/g, '$1C$2')
    .replace(/\\dfrac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2')
    .replace(/\{,\}/g, ',')
    .replace(/\\\(|\\\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractFaq(content: string): { q: string; a: string }[] {
  const block = content.match(/<dl class="faq">([\s\S]*?)<\/dl>/);
  if (!block) return [];
  return Array.from(
    block[1].matchAll(/<dt>([\s\S]*?)<\/dt>\s*<dd>([\s\S]*?)<\/dd>/g)
  ).map(([, q, a]) => ({ q: toPlainText(q), a: toPlainText(a) }));
}

export function buildExamJsonLd(post: Post, content: string): object[] {
  const exam = post.exam;
  if (!exam) return [];

  const url = `${BASE_URL}${post.url}`;
  const tags = post.tags ?? [];
  const examName = `${exam.year}학년도 ${EXAM_FULL_NAME[exam.type] ?? EXAM_TYPE_CONFIG[exam.type].label} 국어 ${exam.area} ${exam.questions}번${exam.passage ? ` 「${exam.passage}」` : ''}`;
  const org = {
    '@type': 'Organization',
    name: ORGANIZATION_INFO.name,
    url: ORGANIZATION_INFO.url,
    logo: ORGANIZATION_INFO.logo,
  };

  const learningResource = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: post.title,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    inLanguage: 'ko',
    learningResourceType:
      post.problemContentType === 'solution' ? '기출 해설' : '기출 읽을거리',
    educationalLevel: '고등학교',
    audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
    isAccessibleForFree: true,
    teaches: tags.filter(tag => !NON_CONCEPT_TAGS.includes(tag)),
    ...(exam.passage && { about: { '@type': 'Thing', name: exam.passage } }),
    isBasedOn: {
      '@type': 'CreativeWork',
      name: examName,
      publisher: {
        '@type': 'Organization',
        name:
          exam.type === 'education-office'
            ? '시도교육청'
            : '한국교육과정평가원',
      },
    },
    keywords: tags.join(', '),
    author: org,
    publisher: org,
    datePublished: post.date,
    dateModified: post.date,
    ...(post.thumbnail && { image: `${BASE_URL}${post.thumbnail}` }),
  };

  const faq = extractFaq(content);
  const faqPage = faq.length > 0 && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return faqPage ? [learningResource, faqPage] : [learningResource];
}
