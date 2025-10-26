import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';
import { BlogLayout } from '@/components/BlogComponents';
import { renderMarkdown } from '@/lib/markdown-renderer';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title: '공부하는 법 | SN Academy 칼럼',
  description:
    '효과적인 학습법과 공부 전략을 알아보세요. SN Academy 교육 전문가들이 제안하는 검증된 학습 방법론을 통해 학습 효과를 극대화할 수 있습니다.',
  keywords: '공부법, 학습법, 학습전략, 자기주도학습, 교육, SN Academy',
  alternates: {
    canonical: '/columns/gongbu',
  },
  openGraph: {
    title: '공부하는 법 | SN Academy 칼럼',
    description:
      '효과적인 학습법과 공부 전략을 알아보세요. SN Academy 교육 전문가들이 제안하는 검증된 학습 방법론을 통해 학습 효과를 극대화할 수 있습니다.',
    type: 'article',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/columns/gongbu',
    images: [
      {
        url: '/images/thumbnail/study-method.jpg',
        width: 1200,
        height: 630,
        alt: '공부하는 법 - 효과적인 학습법과 공부 전략',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '공부하는 법 | SN Academy 칼럼',
    description:
      '효과적인 학습법과 공부 전략을 알아보세요. SN Academy 교육 전문가들이 제안하는 검증된 학습 방법론을 통해 학습 효과를 극대화할 수 있습니다.',
    images: ['/images/thumbnail/study-method.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 공부하는 법 칼럼 콘텐츠
const studyMethodContent = `
# 공부하는 법

효과적인 학습을 위한 과학적 접근법과 실용적인 전략을 소개합니다.

## 1. 학습의 기본 원리

### 집중력 관리
- **포모도로 기법**: 25분 집중 + 5분 휴식의 반복
- **환경 조성**: 조용하고 정리된 공간에서 학습
- **디지털 디톡스**: 학습 시간 동안 스마트폰 격리

### 기억의 과학
- **간격 반복**: 일정한 간격으로 복습하는 스케줄링
- **활성 회상**: 단순 읽기보다는 기억에서 끌어내기 연습
- **다중 감각 활용**: 시각, 청각, 촉각을 모두 활용한 학습

## 2. 과목별 학습 전략

### 언어 과목
- **어휘력 향상**: 문맥 속에서 단어 학습
- **읽기 속도**: 빠른 독해를 위한 스캐닝 기법
- **작문 실력**: 매일 짧은 글쓰기 연습

### 수학/과학 과목
- **개념 이해**: 공식 암기보다 원리 파악
- **문제 해결**: 단계별 접근법과 패턴 인식
- **실험과 관찰**: 이론과 실제의 연결

### 사회/역사 과목
- **연결 학습**: 사건과 사건의 인과관계 파악
- **시각화**: 지도, 연표, 다이어그램 활용
- **토론과 발표**: 지식을 설명하며 내재화

## 3. 학습 계획 수립

### 목표 설정
- **SMART 목표**: 구체적, 측정가능, 달성가능, 관련성, 시간제한
- **단기/장기 목표**: 일일 목표와 월간 목표의 균형
- **우선순위**: 중요도와 긴급도에 따른 과제 분류

### 시간 관리
- **학습 시간표**: 규칙적인 학습 습관 형성
- **에너지 관리**: 개인의 생체리듬에 맞는 학습 시간
- **유연성**: 예상치 못한 상황에 대비한 여유 시간

## 4. 동기부여와 습관

### 내재적 동기
- **호기심 키우기**: 왜 배우는지에 대한 명확한 이유
- **성취감**: 작은 성공을 축하하고 기록
- **성장 마인드셋**: 실패를 학습의 기회로 인식

### 습관 형성
- **21일 규칙**: 새로운 습관을 만들기 위한 지속적 실천
- **환경 설계**: 습관을 쉽게 할 수 있는 환경 조성
- **책임감**: 학습 파트너나 멘토와의 약속

## 5. 스트레스 관리

### 학습 스트레스
- **적절한 휴식**: 학습과 휴식의 균형
- **운동과 명상**: 신체적, 정신적 건강 관리
- **사회적 지지**: 가족, 친구, 선생님의 격려

### 시험 불안
- **준비의 자신감**: 충분한 학습을 통한 자신감 확보
- **긍정적 자기대화**: 부정적 생각을 긍정적으로 전환
- **호흡법**: 긴장 완화를 위한 깊은 호흡

## 6. 디지털 시대의 학습

### 온라인 학습
- **적극적 참여**: 수동적 시청보다는 적극적 노트 작성
- **온라인 도구**: 플래시카드, 퀴즈 앱 등 활용
- **디지털 리터러시**: 신뢰할 수 있는 정보원 구분

### 협업 학습
- **스터디 그룹**: 함께 학습하며 동기부여
- **온라인 커뮤니티**: 관심사가 같은 학습자들과 소통
- **피어 러닝**: 가르치며 배우는 상호 학습

## 결론

효과적인 공부법은 개인마다 다를 수 있습니다. 자신에게 맞는 방법을 찾아 지속적으로 실천하는 것이 가장 중요합니다. 

**핵심 포인트:**
- 규칙적인 학습 습관
- 적절한 휴식과 스트레스 관리
- 목표 설정과 동기부여
- 과학적 학습법의 적용

SN Academy와 함께 더 나은 학습자가 되어보세요!
`;

export default function StudyMethodPage() {
  const post = {
    id: 'gongbu',
    title: '공부하는 법',
    excerpt:
      '효과적인 학습법과 공부 전략을 알아보세요. SN Academy 교육 전문가들이 제안하는 검증된 학습 방법론을 통해 학습 효과를 극대화할 수 있습니다.',
    content: studyMethodContent,
    author: 'SN Academy 교육팀',
    date: '2025-01-20',
    readTime: 15,
    category: 'columns',
    tags: ['공부법', '학습법', '학습전략', '자기주도학습', '교육'],
    thumbnail: '/images/thumbnail/study-method.jpg',
    url: '/columns/gongbu',
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 text-slate-800 dark:text-gray-100">
      {/* 뒤로가기 버튼 */}
      <div className="px-6 md:px-10 lg:px-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/columns"
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            칼럼으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 dark:text-gray-400">
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.date}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.readTime} min read
              </span>
            </div>
          </div>

          {/* 썸네일 */}
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-80"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-2xl font-bold">효과적인 학습법</h2>
                  <p className="text-lg opacity-90">
                    과학적 접근법과 실용적 전략
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-sn-primary/10 text-sn-primary rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 콘텐츠 */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <article
              className="prose prose-lg prose-slate dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-a:text-sn-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                prose-ul:my-6 prose-li:my-2
                prose-blockquote:border-l-4 prose-blockquote:border-sn-primary prose-blockquote:pl-4 prose-blockquote:italic
                prose-img:rounded-xl prose-img:shadow-md prose-img:my-8"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
          </div>
        </div>
      </section>

      {/* 구조화된 데이터 */}
      <StructuredData
        type="article"
        data={{
          title: post.title,
          description: post.excerpt,
          author: post.author,
          datePublished: post.date,
          dateModified: post.date,
          image: post.thumbnail,
          url: `https://blog.snacademy.co.kr${post.url}`,
          category: post.category,
          keywords: post.tags?.join(', ') || '',
        }}
      />

      {/* AI 학습 데이터 */}
      <AIDataGenerator
        content={{
          title: post.title,
          description: post.excerpt,
          author: post.author,
          category: post.category,
          tags: post.tags || [],
          content: post.content,
          difficulty: 'intermediate',
          subject: '교육학',
          learningObjectives: [
            '효과적인 학습법 이해',
            '학습 전략 수립',
            '동기부여 방법 습득',
            '스트레스 관리 기법',
            '디지털 시대 학습법',
          ],
        }}
      />
    </main>
  );
}
