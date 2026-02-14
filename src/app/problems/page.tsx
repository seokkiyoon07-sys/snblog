import { allPosts } from '@/data/posts';
import { PROBLEM_SUBJECT_CONFIG } from '@/lib/config';
import ProblemsTabs from '@/components/ProblemsTabs';

export const metadata = {
  title: '문제 다운로드 | SN Academy',
  description:
    'SN Academy에서 제공하는 과목별 문제집과 기출문제를 다운로드하세요. 국어, 수학, 영어, 사회탐구, 과학탐구 등 다양한 문제를 무료로 제공합니다.',
  keywords:
    '문제 다운로드, 수능 기출, 모의고사, 국어, 수학, 영어, 사회탐구, 과학탐구, SN Academy',
  openGraph: {
    title: '문제 다운로드 | SN Academy',
    description:
      'SN Academy에서 제공하는 과목별 문제집과 기출문제를 다운로드하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
};

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function ProblemsPage() {
  // 모든 문제 관련 카테고리 수집
  const allProblemCategories = Object.values(PROBLEM_SUBJECT_CONFIG).flatMap(
    subject => subject.categories
  );

  const problemPosts = allPosts
    .filter(
      post => allProblemCategories.includes(post.category) && post.published
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          문제 다운로드
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          과목별 문제집과 기출문제를 무료로 다운로드하세요
        </p>
      </div>

      {/* 과목 탭 + 서브필터 */}
      <ProblemsTabs posts={problemPosts} />
    </div>
  );
}
