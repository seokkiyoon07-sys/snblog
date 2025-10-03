import PostCard from '@/components/PostCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.snacademy.co.kr"),
  title: 'SN AI 스타트업 | 교육 AI 혁신과 에듀테크 솔루션',
  description: 'SN Academy의 AI 스타트업을 소개합니다. SNarlink, SNarGPT, SNarGO 등 교육 AI 제품과 팀 구성, 비전을 확인하세요. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
  alternates: { 
    canonical: "/startup" 
  },
  openGraph: {
    title: 'SN AI 스타트업 | 교육 AI 혁신과 에듀테크 솔루션',
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
    title: 'SN AI 스타트업 | 교육 AI 혁신과 에듀테크 솔루션',
    description: 'SN Academy의 AI 스타트업을 소개합니다. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
    images: ['/og/startup.jpg'],
  },
  robots: { 
    index: true, 
    follow: true 
  },
};

export default function StartupPage() {
  const startups = [
    {
      id: 'ai-startup',
      title: 'SN에서 교육 AI 스타트업을 만들었습니다.',
      excerpt: '독학기숙학원의 명가 SN에서 이번에 새롭게 에듀테크 AI를 만들었습니다. 우리의 비전, 앞으로의 미션 등을 소개합니다.',
      date: 'Sep 25, 2025',
      readTime: '10 min read',
      tags: ['SN AI 스타트업', '에듀테크', 'AI교육', '비전'],
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
      category: 'SN AI 스타트업',
      url: '/startup/ai-startup'
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-6 lg:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
          SN AI 스타트업
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