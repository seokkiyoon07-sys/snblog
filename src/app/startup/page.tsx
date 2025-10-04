import PostCard from '@/components/PostCard';
import { Metadata } from 'next';
import { getPostsByCategory } from '@/data/posts';

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.snacademy.co.kr"),
  title: 'AI 스타트업 | 교육 AI 혁신과 에듀테크 솔루션',
  description: 'SN Academy의 AI 스타트업을 소개합니다. SNarlink, SNarGPT, SNarGO 등 교육 AI 제품과 팀 구성, 비전을 확인하세요. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
  alternates: { 
    canonical: "/startup" 
  },
  openGraph: {
    title: 'AI 스타트업 | 교육 AI 혁신과 에듀테크 솔루션',
    description: 'SN Academy의 AI 스타트업을 소개합니다. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/startup',
    images: [
      {
        url: '/og/startup.jpg',
        width: 1200,
        height: 630,
        alt: 'SN AI 스타트업 - 교육 AI 혁신과 에듀테크 솔루션',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 스타트업 | 교육 AI 혁신과 에듀테크 솔루션',
    description: 'SN Academy의 AI 스타트업을 소개합니다. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
    images: ['/og/startup.jpg'],
  },
  robots: { 
    index: true, 
    follow: true 
  },
};

export default function StartupPage() {
  const startups = getPostsByCategory('startup');

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-6 lg:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
          AI 스타트업
        </h1>
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 px-4">
          SN의 AI 기반 혁신적인 교육 프로그램과 새로운 시도들
        </p>
      </header>

      {/* 포스트 목록 */}
      <section aria-labelledby="startup-posts-heading">
        <h2 id="startup-posts-heading" className="sr-only">AI 스타트업 관련 포스트</h2>
        <div className="space-y-4 lg:space-y-6" role="list" aria-label="AI 스타트업 포스트 목록">
          {startups.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}