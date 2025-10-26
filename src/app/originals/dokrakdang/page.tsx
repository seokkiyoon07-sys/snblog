import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title:
    '산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」) | SN Originals',
  description:
    '박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문 공간을 만나보세요. 1619년 박인로가 59세의 나이에 지은 가사로, 홀로 누리는 즐거움과 학문의 진수를 담은 작품입니다.',
  keywords:
    '고전문학, 독락당, 박인로, 회재 이언적, 가사문학, 수능국어, 조선문학, 성리학',
  alternates: {
    canonical: '/originals/dokrakdang',
  },
  openGraph: {
    title: '산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)',
    description:
      '박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문 공간을 만나보세요. 홀로 누리는 즐거움과 학문의 진수를 담은 작품입니다.',
    type: 'article',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/originals/dokrakdang',
    images: [
      {
        url: 'https://blog.snacademy.co.kr/images/thumbnail/DokRakDang_thumbnail_F_v3.png',
        width: 800,
        height: 400,
        alt: '독락당 고전문학 시리즈 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)',
    description:
      '박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문 공간을 만나보세요.',
    images: [
      'https://blog.snacademy.co.kr/images/thumbnail/DokRakDang_thumbnail_F_v3.png',
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
    { id: 'background', label: '독락당의 역사적 배경' },
    { id: 'author', label: '박인로와 독락당 방문' },
    { id: 'meaning', label: '독락당의 의미와 철학' },
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
export default function DokrakdangPage() {
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
          보기만 해도 국어 감각이 살아나는 고전문학 시리즈 제11탄, 오늘 소개할
          작품은 조선 중기에서 후기로 넘어가던 1619년에 박인로가 지은 가사{' '}
          <strong>「독락당(獨樂堂)」</strong>입니다.
        </p>
      </section>

      <Divider />

      {/* Background */}
      <section id="background">
        <H2 id="background">독락당의 역사적 배경</H2>
        <p>
          <strong>'독락당'</strong>은 조선 성리학의 정통을 세운 회재 이언적
          선생이 학문을 닦고 거처했던 공간으로, 그 품격과 고요함 속에서 선비가
          추구하던 <strong>'홀로 누리는 즐거움, 학문 그 자체'</strong>가
          고스란히 담겨 있습니다.
        </p>
        <p>
          후대에는 그 학덕을 기리기 위해 건너편에 옥산서원이 세워졌고, 지금도
          수많은 방문객이 찾는 학문의 성소로 남아 있습니다.
        </p>

        <Callout type="info" title="독락당의 의미">
          <p>
            <strong>독락(獨樂)</strong> = 홀로 누리는 즐거움
            <br />
            <strong>당(堂)</strong> = 집, 공간
            <br />→ 학문과 명상의 공간에서 찾는 진정한 기쁨
          </p>
        </Callout>
      </section>

      <Divider />

      {/* Author */}
      <section id="author">
        <H2 id="author">박인로와 독락당 방문</H2>
        <p>
          박인로는 59세의 나이에 독락당 주변을 거닐며 회재의 발자취를 체험하고,
          선배 지성인에 대한 깊은 존경과 사모의 마음을 가사 문학의 정갈한 언어로
          풀어내었습니다.
        </p>
        <p>
          이 작품은 단순한 감상문이 아니라, 학문과 인격이 어떻게 삶으로
          이어지는지 보여주는 기록이기도 합니다.
        </p>

        <Callout type="success" title="작품의 특징">
          <ul className="list-disc pl-5">
            <li>조선 중기에서 후기로 넘어가는 시점의 작품</li>
            <li>박인로 59세 때의 성숙한 문학적 경지</li>
            <li>선배 학자에 대한 깊은 존경과 사모</li>
            <li>학문과 인격의 통합적 시각</li>
          </ul>
        </Callout>
      </section>

      <Divider />

      {/* Meaning */}
      <section id="meaning">
        <H2 id="meaning">독락당의 의미와 철학</H2>
        <p>
          독락당은 단순한 건물이 아니라, 조선 성리학의 정신이 깃든 공간입니다.
          회재 이언적이 추구했던 학문의 진수와 선비정신이 이 작품을 통해
          전해집니다.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 my-6">
          "산 좋고 물 좋은 자연에서 공부할 맛 났겠어"
        </blockquote>

        <p>
          이 한 줄에서 느껴지는 것은 자연과 학문의 조화, 그리고 그 속에서 찾는
          진정한 기쁨입니다.
        </p>
      </section>

      <Divider />

      {/* English */}
      <section id="english">
        <H2 id="english">Dok Rak Dang (獨樂堂) – "House of Solitary Joy"</H2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
          <p className="mb-4">
            <strong>"Dok Rak Dang"</strong> is a Korean traditional residence
            built by Heo Jae Yi Eonjeok (1491–1553), a leading Neo-Confucian
            scholar of the early Joseon Dynasty. It was a private study and
            retreat where he practiced scholarly solitude and cultivated virtue
            through contemplation.
          </p>
          <p className="mb-4">
            In 1619, the poet Park In-ro (朴仁老) visited this place at the age
            of 59, walking along the pavilion and its serene landscape. Deeply
            moved by the spirit of Yi Eonjeok, he composed the poetic work 〈Dok
            Rak Dang〉, expressing reverence for the scholar's legacy and the
            ideal of "finding joy in quiet learning."
          </p>
          <p className="mb-4">
            Across the stream, the Oksan Seowon, a Confucian academy, was later
            established to honor Yi Eonjeok's philosophy, and the area is still
            regarded as one of Korea's most elegant cultural heritage sites.
          </p>
          <p>
            This piece is a valuable window into the intellectual life of Joseon
            Neo-Confucian literati, blending poetry, reflection, and
            philosophical aesthetics.
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
            산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문
            공간을 만나보세요.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              '고전문학',
              '독락당',
              '박인로',
              '회재 이언적',
              '가사문학',
              '수능국어',
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
              src="https://www.youtube.com/embed/NlLizA-5u1M?si=tAxNWkLVypGheYIj"
              title="산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)"
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
            '산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)',
          description:
            '박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문 공간을 만나보세요.',
          author: 'SN독학기숙학원',
          datePublished: '2025-10-26',
          dateModified: '2025-10-26',
          image:
            'https://blog.snacademy.co.kr/images/thumbnail/DokRakDang_thumbnail_F_v3.png',
          url: 'https://blog.snacademy.co.kr/originals/dokrakdang',
          category: 'SN Originals',
          keywords:
            '고전문학, 독락당, 박인로, 회재 이언적, 가사문학, 수능국어, 조선문학, 성리학',
        }}
      />

      {/* AI Learning Data */}
      <AIDataGenerator
        content={{
          title:
            '산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)',
          description:
            '박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문 공간을 만나보세요.',
          author: 'SN독학기숙학원',
          category: 'SN Originals',
          tags: [
            '고전문학',
            '독락당',
            '박인로',
            '회재 이언적',
            '가사문학',
            '수능국어',
          ],
          content: `박인로의 독락당, 조선 성리학, 회재 이언적, 학문과 자연의 조화, 선비정신, 가사문학`,
          difficulty: 'intermediate',
          subject: '고전문학',
          learningObjectives: [
            '독락당의 역사적 배경 이해',
            '박인로의 문학적 특징 파악',
            '조선 성리학의 정신 체험',
            '학문과 자연의 조화 이해',
          ],
        }}
      />
    </main>
  );
}
