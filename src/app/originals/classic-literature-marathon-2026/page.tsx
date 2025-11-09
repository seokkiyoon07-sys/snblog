import React from 'react';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title:
    '여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기) | SN Originals',
  description:
    '2026 수능을 앞둔 수험생을 위한 특별 영상! SN독학기숙학원이 엄선한 고전문학 작품 13편을 1시간 동안 몰아보며 마지막 정리를 해보세요. 보기만 해도 수능 점수가 오르는 SN 고전문학 시리즈의 결정판입니다.',
  keywords:
    '고전문학, 수능국어, 2026수능, 몰아보기, 수능대비, 정철, 박인로, 윤선도, 가사문학, 관동별곡, 사미인곡, 독락당',
  alternates: {
    canonical: '/originals/classic-literature-marathon-2026',
  },
  openGraph: {
    title: '여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기)',
    description:
      '2026 수능을 앞둔 수험생을 위한 특별 영상! SN독학기숙학원이 엄선한 고전문학 작품 13편을 1시간 동안 몰아보는 결정판입니다.',
    type: 'article',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/originals/classic-literature-marathon-2026',
    images: [
      {
        url: 'https://blog.snacademy.co.kr/images/thumbnail/thumbnail_VF.png',
        width: 800,
        height: 400,
        alt: 'SN 고전문학 몰아보기 2026 수능 대비',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기)',
    description:
      '2026 수능을 앞둔 수험생을 위한 특별 영상! SN독학기숙학원이 엄선한 고전문학 작품 13편을 1시간 동안 몰아보세요.',
    images: ['https://blog.snacademy.co.kr/images/thumbnail/thumbnail_VF.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Components
function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
}) {
  const palette: Record<string, string> = {
    info: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    success:
      'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
    warning:
      'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
    error: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
  };
  const icon: Record<string, string> = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '⛔',
  };
  return (
    <div className={`my-6 rounded-2xl border p-4 sm:p-5 ${palette[type]}`}>
      <div className="flex gap-3">
        <div className="text-xl leading-none pt-0.5" aria-hidden>
          {icon[type]}
        </div>
        <div className="min-w-0">
          {title ? (
            <div className="mb-1 font-semibold text-gray-900 dark:text-white">
              {title}
            </div>
          ) : null}
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-4 text-gray-900 dark:text-white"
    >
      <a
        href={`#${id}`}
        className="no-underline hover:underline decoration-2 underline-offset-4"
      >
        {children}
      </a>
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
      {children}
    </h3>
  );
}

function Divider() {
  return <hr className="my-10 border-gray-200 dark:border-gray-700" />;
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&>p]:mb-4 [&>p]:leading-[1.8] [&>p]:text-[0.98rem] sm:[&>p]:text-[1rem] [&>p]:text-gray-700 dark:[&>p]:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 dark:[&_strong]:text-white [&_em]:italic [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:text-gray-700 dark:[&_blockquote]:text-gray-300 [&_blockquote]:my-6">
      {children}
    </div>
  );
}

function TableOfContents() {
  const items = [
    { id: 'intro', label: '인사 및 영상 소개' },
    { id: 'timestamps', label: '작품 목록' },
    { id: 'motivation', label: '제작 계기' },
    { id: 'challenges', label: '제작 과정과 어려움' },
    { id: 'reflection', label: '제작진의 소회' },
    { id: 'future', label: '앞으로의 계획' },
    { id: 'closing', label: '마치며' },
  ];
  return (
    <nav>
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
        <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          이 글의 목차
        </div>
        <ul className="space-y-1 text-sm">
          {items.map(it => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Main Page Component
export default function ClassicLiteratureMarathonPage() {
  const content = (
    <>
      {/* Intro */}
      <section id="intro">
        <p>
          안녕하세요{' '}
          <span className="text-red-500 font-bold">SN독학기숙학원</span>입니다
          😊
        </p>
        <p>보기만 해도 수능 점수가 오르는 SN 고전문학 시리즈.</p>
        <p>
          오늘은 이번 달(2025년 11월) 13일에 예정되어있는{' '}
          <strong>2026 수능시험을 대비하는 차원</strong>에서, 그동안 게시했던
          영상들을 1시간 동안 몰아보기할 수 있는 영상을 만들었습니다.
        </p>
      </section>

      <Divider />

      {/* Timestamps */}
      <section id="timestamps">
        <H2 id="timestamps">📚 작품 목록 (타임스탬프)</H2>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 my-6">
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:00:00
              </span>
              <span>인트로(소개영상)</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:00:45
              </span>
              <span>이익 「화왕가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:03:27
              </span>
              <span>김진형 「북천가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:08:42
              </span>
              <span>정철 「관동별곡」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:20:14
              </span>
              <span>정철 「사미인곡」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:25:37
              </span>
              <span>정철 「속미인곡」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:30:30
              </span>
              <span>박인로 「선상탄」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:35:38
              </span>
              <span>작자미상 「용부가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:40:20
              </span>
              <span>조우인 「출새곡」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:44:59
              </span>
              <span>윤선도 「몽천요」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:47:00
              </span>
              <span>박인로 「독락당」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:51:08
              </span>
              <span>박선장 「오륜가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:54:35
              </span>
              <span>작자미상 「초한가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[90px]">
                00:59:52
              </span>
              <span>구강 「북새곡」</span>
            </li>
          </ul>
        </div>

        <p>
          SN독학기숙학원이 엄선한 고전문학 작품들을 AI 영상과 함께 쉽게
          이해하면서, 그간 공부하셨던 내용들을 즐겁게 정리할 수 있는 시간이
          되시기를 기원합니다.
        </p>
      </section>

      <Divider />

      {/* Motivation */}
      <section id="motivation">
        <H2 id="motivation">🎯 왜 이 영상을 만들었을까요?</H2>

        <H3>시작은 작은 실험이었습니다</H3>
        <p>
          지난 몇 달간 SN독학기숙학원은 하나의 도전을 해왔습니다. "고전문학,
          어떻게 하면 더 쉽고 재미있게 전달할 수 있을까?" 이 질문에서 출발한 SN
          고전문학 시리즈는, 이제 여러분께 13편의 작품을 선보이게 되었습니다.
        </p>

        <H3>수능을 앞둔 지금, 마지막 정리가 필요한 시기</H3>
        <p>
          11월 13일 수능을 앞둔 지금, 새로운 내용을 공부하기보다는{' '}
          <strong>그동안 배웠던 것들을 정리하고 확인하는 것</strong>이
          중요합니다.
        </p>
        <p>그래서 준비했습니다. 1시간이면 충분한, SN 고전문학 몰아보기를요.</p>
      </section>

      <Divider />

      {/* Challenges */}
      <section id="challenges">
        <H2 id="challenges">🎬 제작 과정의 이야기</H2>

        <H3>AI와 함께 만든 새로운 시도</H3>
        <p>
          이 시리즈를 만들면서 가장 고민했던 부분은{' '}
          <strong>
            "어떻게 하면 시각적으로 고전문학의 아름다움을 전달할 수 있을까?"
          </strong>
          였습니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
          <div className="font-semibold text-gray-900 dark:text-white mb-3">
            AI 그림 생성의 도전
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
            고전문학의 정취를 현대적인 AI 그림으로 표현하는 것은 쉽지
            않았습니다.
          </p>
          <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200 space-y-2">
            <li>「관동별곡」의 웅장한 금강산 풍경을 어떻게 그릴 것인가?</li>
            <li>
              「사미인곡」의 애절한 임에 대한 그리움을 어떤 이미지로 표현할
              것인가?
            </li>
            <li>
              「오륜가」의 다섯 가지 인간관계를 시각적으로 어떻게 구분할 것인가?
            </li>
          </ul>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed mt-3">
            수십 번의 시도 끝에, 우리는 고전의 감성과 현대의 기술이 만나는
            지점을 찾았습니다.
          </p>
        </div>

        <H3>정확성과 재미 사이의 균형</H3>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
          <div className="font-semibold text-gray-900 dark:text-white mb-3">
            수능 출제 경향 분석
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
            각 작품을 선정할 때는 다음을 고려했습니다:
          </p>
          <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200 space-y-2">
            <li>최근 10년간 수능 및 평가원 출제 빈도</li>
            <li>교육과정상 중요도</li>
            <li>학생들이 어려워하는 작품</li>
            <li>문학사적 가치</li>
          </ul>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed mt-3">
            단순히 재미있는 영상을 넘어,{' '}
            <strong>실제로 수능에 도움이 되는 콘텐츠</strong>를 만들고자
            했습니다.
          </p>
        </div>
      </section>

      <Divider />

      {/* Reflection */}
      <section id="reflection">
        <H2 id="reflection">💭 제작진의 소회</H2>

        <p>이 시리즈를 만들면서, 저희는 하나의 사실을 다시 확인했습니다.</p>

        <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-700 dark:text-gray-300 my-6 py-2">
          "고전문학은 어렵지 않다. 단지 낯설 뿐이다."
        </blockquote>

        <p>
          여러분이 이 영상들을 보면서 "아, 이 작품이 이런 의미였구나", "이렇게
          보니까 재미있네"라고 느끼신다면, 저희의 목표는 달성된 것입니다.
        </p>

        <H3>수험생 여러분께</H3>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6 rounded-r-lg">
          <div className="font-semibold text-gray-900 dark:text-white mb-3">
            마지막 응원의 메시지
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
            수능까지 얼마 남지 않았습니다. 불안하고 초조한 마음이 드는 것은
            당연합니다.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
            하지만 기억하세요. 여러분은 지금까지 충분히 잘 해왔습니다. 이
            1시간의 영상이 여러분의 마지막 정리에 작은 도움이 되길 바랍니다.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-bold text-lg">
            화이팅! 🔥
          </p>
        </div>
      </section>

      <Divider />

      {/* Future */}
      <section id="future">
        <H2 id="future">🚀 앞으로의 계획</H2>

        <H3>계속되는 SN 고전문학 시리즈</H3>
        <p>
          이번 몰아보기가 끝이 아닙니다. 앞으로도 SN독학기숙학원은 더 많은
          고전문학 작품을 여러분께 소개할 예정입니다.
        </p>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 my-6 rounded-r-lg">
          <div className="font-semibold text-gray-900 dark:text-white mb-3">
            다음 시리즈 예고
          </div>
          <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200 space-y-2">
            <li>
              <strong>📖 현대시 시리즈</strong>: AI와 함께 떠나는 현대시 여행
            </li>
            <li>
              <strong>📚 수능 출제 예상작</strong>: 빅데이터 분석으로 예측하는
              수능 작품
            </li>
          </ul>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed mt-3">
            기대해 주세요!
          </p>
        </div>

        <H3>여러분의 피드백을 기다립니다</H3>
        <p>어떤 작품이 가장 도움이 되었나요?</p>
        <p>어떤 부분이 더 설명이 필요한가요?</p>
        <p>다음에는 어떤 작품을 다뤄주면 좋을까요?</p>
        <p className="mt-4">
          유튜브 채널에 댓글로 여러분의 의견을 들려주세요. SN독학기숙학원은 항상
          여러분의 목소리에 귀 기울이고 있습니다. 👂
        </p>

        <div className="mt-6 text-center">
          <a
            href="https://www.youtube.com/watch?v=lsR6vGdm_Mo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            유튜브 채널 댓글 달러 가기
          </a>
        </div>
      </section>

      <Divider />

      {/* Closing */}
      <section id="closing">
        <H2 id="closing">🎓 마치며</H2>
        <p>보기만 해도 수능 점수가 오르는 SN 고전문학 시리즈.</p>
        <p>여러분의 합격을 진심으로 응원합니다.</p>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            <strong>SN독학기숙학원</strong> | 여러분의 독학을 응원합니다 💪
          </p>
        </div>
      </section>
    </>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 py-10">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기)
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            2026 수능을 앞둔 수험생을 위한 특별 영상! SN독학기숙학원이 엄선한
            고전문학 작품 13편을 1시간 동안 몰아보며 마지막 정리를 해보세요.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              '고전문학',
              '수능국어',
              '2026수능',
              '몰아보기',
              '수능대비',
              '정철',
              '박인로',
              '윤선도',
              '가사문학',
            ].map(tag => (
              <span
                key={tag}
                className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* YouTube 비디오 */}
        <div className="mb-8">
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/lsR6vGdm_Mo"
              title="여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기)"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <TableOfContents />
        <article className="min-w-0 mt-8">
          <Prose>{content}</Prose>
        </article>
      </div>

      {/* SEO: StructuredData */}
      <StructuredData
        type="article"
        data={{
          title:
            '여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기)',
          description:
            '2026 수능을 앞둔 수험생을 위한 특별 영상! SN독학기숙학원이 엄선한 고전문학 작품 13편을 1시간 동안 몰아보며 마지막 정리를 해보세요.',
          author: 'SN Academy',
          datePublished: '2025-11-05',
          dateModified: '2025-11-05',
          image:
            'https://blog.snacademy.co.kr/images/thumbnail/thumbnail_VF.png',
          url: 'https://blog.snacademy.co.kr/originals/classic-literature-marathon-2026',
          category: 'SN Originals',
          keywords:
            '고전문학, 수능국어, 2026수능, 몰아보기, 수능대비, 정철, 박인로, 윤선도, 가사문학',
        }}
      />

      {/* AI Learning Data */}
      <AIDataGenerator
        content={{
          title:
            '여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기)',
          description:
            '2026 수능을 앞둔 수험생을 위한 특별 영상! 고전문학 작품 13편 몰아보기',
          author: 'SN Academy',
          category: 'SN Originals',
          tags: [
            '고전문학',
            '수능국어',
            '2026수능',
            '몰아보기',
            '수능대비',
            '정철',
            '박인로',
            '윤선도',
            '가사문학',
          ],
          content: `고전문학 몰아보기, 2026 수능 대비, 정철의 관동별곡·사미인곡·속미인곡, 박인로의 선상탄·독락당, 윤선도의 몽천요, 박선장의 오륜가, 이익의 화왕가, 김진형의 북천가, 작자미상의 용부가·초한가, 조우인의 출새곡, 구강의 북새곡`,
          difficulty: 'intermediate',
          subject: '고전문학',
          learningObjectives: [
            '고전문학 주요 작품 13편 복습',
            '수능 출제 경향 파악',
            '가사문학의 특징 이해',
            '시대별 작품의 흐름 파악',
          ],
        }}
      />
    </main>
  );
}
