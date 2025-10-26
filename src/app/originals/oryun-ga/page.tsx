import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title: '내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」) | SN Originals',
  description:
    '박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지 인간관계를 만나보세요. 1612년 광해군 시대에 지어진 교훈 가사로, 사회 혼란 속에서도 지켜야 할 삶의 기준을 담은 작품입니다.',
  keywords:
    '고전문학, 오륜가, 박선장, 교훈가사, 수능국어, 조선문학, 유교윤리, 오륜',
  alternates: {
    canonical: '/originals/oryun-ga',
  },
  openGraph: {
    title: '내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)',
    description:
      '박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지 인간관계를 만나보세요. 사회 혼란 속에서도 지켜야 할 삶의 기준을 담은 작품입니다.',
    type: 'article',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/originals/oryun-ga',
    images: [
      {
        url: 'https://blog.snacademy.co.kr/images/thumbnail/Oryun-ga_thumbnail_a2_v2.png',
        width: 800,
        height: 400,
        alt: '오륜가 고전문학 시리즈 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)',
    description:
      '박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지 인간관계를 만나보세요.',
    images: [
      'https://blog.snacademy.co.kr/images/thumbnail/Oryun-ga_thumbnail_a2_v2.png',
    ],
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

function Divider() {
  return <hr className="my-10 border-gray-200 dark:border-gray-700" />;
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&>p]:mb-4 [&>p]:leading-[1.8] [&>p]:text-[0.98rem] sm:[&>p]:text-[1rem] [&>p]:text-gray-700 dark:[&>p]:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 dark:[&_strong]:text-white [&_em]:italic [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:text-gray-700 dark:[&_blockquote]:text-gray-300">
      {children}
    </div>
  );
}

function TableOfContents() {
  const items = [
    { id: 'intro', label: '인사 및 작품 소개' },
    { id: 'oryun', label: '오륜(五倫)의 의미' },
    { id: 'background', label: '작품의 역사적 배경' },
    { id: 'meaning', label: '오륜가의 현대적 의미' },
    { id: 'english', label: '영어 소개' },
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
export default function OryunGaPage() {
  const content = (
    <>
      {/* Intro */}
      <section id="intro">
        <p>
          안녕하세요,{' '}
          <span className="text-red-500 font-bold">SN독학기숙학원</span>입니다
          😊
        </p>
        <p>
          보기만 해도 수능 점수가 오르는 고전문학 시리즈 제12탄. 오늘은 조선
          중기 문인 박선장이 지은 교훈 가사, <strong>「오륜가(五倫歌)」</strong>
          를 소개합니다.
        </p>
      </section>

      <Divider />

      {/* Oryun */}
      <section id="oryun">
        <H2 id="oryun">오륜(五倫)의 의미</H2>
        <p>
          <strong>'오륜(五倫)'</strong>이란 유교 윤리의 핵심인 다섯 가지
          인간관계를 말합니다.
        </p>

        <div className="grid gap-4 my-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              부자유친(父子有親)
            </h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              부모와 자식 사이에는 인(仁)과 친애가 있어야 하며
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
              군신유의(君臣有義)
            </h4>
            <p className="text-sm text-green-800 dark:text-green-200">
              임금과 신하의 관계에는 의(義)가 있어야 하고
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
              부부유별(夫婦有別)
            </h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              부부는 서로의 역할과 예를 지키며
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
              장유유서(長幼有序)
            </h4>
            <p className="text-sm text-orange-800 dark:text-orange-200">
              어른과 아이 사이에는 질서가 있으며
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
              붕우유신(朋友有信)
            </h4>
            <p className="text-sm text-red-800 dark:text-red-200">
              친구 간에는 믿음이 있어야 한다
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Background */}
      <section id="background">
        <H2 id="background">작품의 역사적 배경</H2>
        <p>
          박선장은 1612년(광해군 4년), 혼탁해지는 세태 속에서 올바른 질서와
          인간관계의 회복이 필요하다고 느껴, 마을의 젊은 선비들에게 삶의 기준을
          세워주기 위해 이 작품을 지었다고 전해집니다.
        </p>

        <Callout type="info" title="작품의 특징">
          <ul className="list-disc pl-5">
            <li>조선 중기 광해군 시대(1612년) 작품</li>
            <li>교훈 가사의 대표작</li>
            <li>사회 혼란기에 지어진 윤리 교재</li>
            <li>젊은 선비들을 위한 삶의 지침서</li>
          </ul>
        </Callout>
      </section>

      <Divider />

      {/* Meaning */}
      <section id="meaning">
        <H2 id="meaning">오륜가의 현대적 의미</H2>
        <p>
          즉 <strong>「오륜가」</strong>는 단순한 '윤리 암송문'이 아니라, 사회가
          혼란할수록 개인이 지켜야 할 삶의 기준을 되돌아보게 하는 작품입니다.
        </p>
        <p>
          지금 시대에도 여전히 유효한, <strong>'품격 있는 관계의 조건'</strong>
          이 담겨 있습니다.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 my-6">
          "AI 그림과 친절한 해설로 즐기는 고전문학." 작품을 감상하는 것만으로도
          사고력·문장력을 끌어올릴 수 있습니다. 수능 대비뿐 아니라 인문 교양까지
          함께 얻어가는, SN독학기숙학원의 고전문학 시리즈와 함께하세요!
        </blockquote>

        <Callout type="success" title="현대적 가치">
          <p>
            사회가 복잡해질수록 기본적인 인간관계의 원칙이 더욱 중요해집니다.
            오륜가는 단순한 옛날 이야기가 아니라, 지금도 우리가 지켜야 할 관계의
            기준을 제시합니다.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* English */}
      <section id="english">
        <H2 id="english">
          Oryun-ga (五倫歌) – "The Song of the Five Confucian Relationships"
        </H2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
          <p className="mb-4">
            <strong>"Oryun-ga"</strong> is a moral poem composed in 1612 by the
            scholar Park Seon-jang during the mid-Joseon Dynasty. The work
            explains the Five Confucian Relationships (Oryun) that form the
            foundation of traditional Korean ethics:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Filial affection between parent and child (Buja Yuchin)</li>
            <li>Righteousness between ruler and subject (Gunshin Uui)</li>
            <li>Proper distinction between husband and wife (Bubu Ubyeol)</li>
            <li>Order between elder and younger (Jangyu Yuseo)</li>
            <li>Trust between friends (Bungu Uisin)</li>
          </ul>
          <p className="mb-4">
            The poem was written to educate young scholars and restore proper
            morals amid a time of social disorder. Rather than a mere ethical
            summary, it reflects the Confucian ideal that a harmonious society
            begins with upright personal conduct and respectful relationships.
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
            내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지
            인간관계를 만나보세요.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              '고전문학',
              '오륜가',
              '박선장',
              '교훈가사',
              '수능국어',
              '유교윤리',
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
              src="https://www.youtube.com/embed/G3ojQuQXMxE"
              title="내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)"
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
          title: '내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)',
          description:
            '박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지 인간관계를 만나보세요.',
          author: 'SN독학기숙학원',
          datePublished: '2025-10-27',
          dateModified: '2025-10-27',
          image:
            'https://blog.snacademy.co.kr/images/thumbnail/Oryun-ga_thumbnail_a2_v2.png',
          url: 'https://blog.snacademy.co.kr/originals/oryun-ga',
          category: 'SN Originals',
          keywords:
            '고전문학, 오륜가, 박선장, 교훈가사, 수능국어, 조선문학, 유교윤리, 오륜',
        }}
      />

      {/* AI Learning Data */}
      <AIDataGenerator
        content={{
          title: '내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)',
          description:
            '박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지 인간관계를 만나보세요.',
          author: 'SN독학기숙학원',
          category: 'SN Originals',
          tags: [
            '고전문학',
            '오륜가',
            '박선장',
            '교훈가사',
            '수능국어',
            '유교윤리',
          ],
          content: `박선장의 오륜가, 조선 중기 교훈가사, 유교 윤리, 오륜, 인간관계의 기준, 사회 질서`,
          difficulty: 'intermediate',
          subject: '고전문학',
          learningObjectives: [
            '오륜의 의미와 구성 이해',
            '박선장의 교훈가사 특징 파악',
            '조선 중기 사회상과 문학의 관계',
            '현대적 윤리관과의 연결점',
          ],
        }}
      />
    </main>
  );
}
