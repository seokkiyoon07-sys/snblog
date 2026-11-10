// AI 검색·답변 엔진용 사이트 안내 (llmstxt.org 형식). 기출 읽을거리를 먼저 소개한다
import { allPosts } from '@/data/posts';
import { BASE_URL, EXAM_TYPE_CONFIG } from '@/lib/config';

export const dynamic = 'force-static';

export function GET() {
  const examReadings = allPosts
    .filter(post => post.published && post.exam)
    .sort((a, b) => b.exam!.year - a.exam!.year);

  const lines = [
    '# SN독학기숙학원 블로그',
    '',
    '> SN독학기숙학원(경기도 양평)이 운영하는 수험 블로그. 수능 국어 기출 지문을 쉽게 풀어 쓴 기출 읽을거리, AI 출제 노트, 입시 칼럼과 학원 소식을 싣는다.',
    '',
    '기출 읽을거리는 평가원 수능·모의평가 국어 독서 지문 하나를 골라 배경 개념을 쉽게 설명하고, 해당 문항을 지문 근거로 풀이한 글이다. 각 글에는 핵심 정리, 지문 인용, 문항별 선지 풀이, 지문·문항 전문, 자주 묻는 질문이 들어 있다. 지문과 문항의 저작권은 한국교육과정평가원에 있다.',
    '',
    '## 기출 읽을거리',
    '',
    ...examReadings.map(post => {
      const exam = post.exam!;
      const source = `${exam.year}학년도 ${EXAM_TYPE_CONFIG[exam.type].label} 국어 ${exam.area} ${exam.questions}번`;
      return `- [${post.title}](${BASE_URL}${post.url}): ${source}. ${post.excerpt}`;
    }),
    '',
    '## 주요 페이지',
    '',
    `- [수능 문제 연구](${BASE_URL}/problems): 기출 읽을거리와 AI 출제 노트(AI가 만든 수능형 문항, 출제 로그, 모의고사·수능 해설, 자료실)`,
    `- [칼럼](${BASE_URL}/columns): 입시·학습 칼럼`,
    `- [공지사항](${BASE_URL}/notice): SN독학기숙학원 모집·일정 안내`,
    '',
    '## Optional',
    '',
    `- [RSS](${BASE_URL}/rss.xml): 전체 글 목록`,
    `- [사이트맵](${BASE_URL}/sitemap.xml)`,
  ];

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
