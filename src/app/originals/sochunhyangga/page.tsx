import React from 'react';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title:
    '절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」) | SN Originals',
  description:
    '조선 시대 후기 십이 잡가의 하나로, 판소리 「춘향가」 중 관객들이 좋아했던 장면을 변형하여 만든 노래입니다. 이몽룡과 춘향의 첫 만남, 연정, 헤어짐 후의 그리움과 슬픔을 압축적으로 담아낸 작품입니다.',
  keywords:
    '고전문학, 소춘향가, 춘향가, 잡가, 판소리, 수능국어, 조선문학, 이몽룡, 춘향',
  alternates: {
    canonical: '/originals/sochunhyangga',
  },
  openGraph: {
    title: '절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」)',
    description:
      '조선 시대 후기 십이 잡가의 하나로, 판소리 「춘향가」의 명장면을 압축적으로 담아낸 작품입니다. 이몽룡과 춘향의 설레는 사랑과 애절한 그리움을 감상해보세요.',
    type: 'article',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/originals/sochunhyangga',
    images: [
      {
        url: 'https://blog.snacademy.co.kr/images/thumbnail/thumbnail_a2_sochunhyangga.png',
        width: 800,
        height: 400,
        alt: '소춘향가 고전문학 시리즈 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」)',
    description:
      '조선 시대 후기 십이 잡가의 하나로, 판소리 「춘향가」의 명장면을 압축적으로 담아낸 작품입니다.',
    images: [
      'https://blog.snacademy.co.kr/images/thumbnail/thumbnail_a2_sochunhyangga.png',
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
    { id: 'features', label: '작품의 특징' },
    { id: 'scenes', label: '주요 장면' },
    { id: 'meaning', label: '현대적 의미' },
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
export default function SochunhyanggaPage() {
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
          보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 열 여섯 번째 시간.
          오늘은 잡가인 <strong>「소춘향가」</strong>를 준비했습니다.
        </p>
        <p>
          「소춘향가」는 조선 시대 후기 십이 잡가의 하나로 판소리 「춘향가」 중
          관객들이 좋아했던 장면을 변형하여 만든 노래입니다. 「춘향가」에서
          이몽룡과 춘향의 첫 만남, 춘향을 향한 이몽룡의 연정, 이몽룡과 헤어진 후
          춘향의 그리움과 슬픔 등을 변형하여 압축적으로 보여 주고 있습니다(해설
          출처: EBS 수능완성 국어).
        </p>
        <p>춘향과 이몽룡의 설레는 사랑과 애절한 그리움을 함께 감상해보시죠.</p>
      </section>

      <Divider />

      {/* Features */}
      <section id="features">
        <H2 id="features">작품의 특징</H2>

        <Callout type="info" title="판소리에서 잡가로">
          <p>
            「소춘향가」는 판소리 「춘향가」의 명장면들을 선별하여 노래로
            재구성한 작품입니다. 긴 판소리를 짧은 잡가로 압축하면서도 춘향과
            이몽룡의 사랑 이야기의 핵심을 생생하게 전달합니다.
          </p>
        </Callout>

        <Callout type="info" title="십이 잡가의 하나">
          <p>
            십이 잡가는 조선 후기 서울 지역에서 유행했던 12가지 잡가를
            의미합니다. 「소춘향가」는 그 중 하나로, 당시 사람들에게 큰 사랑을
            받았던 작품입니다.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* Scenes */}
      <section id="scenes">
        <H2 id="scenes">주요 장면</H2>

        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 my-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
            💜 첫 만남의 설렘
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            이몽룡과 춘향이 처음 만나는 장면은 조선시대 연애 문학의 백미입니다.
            절제된 표현 속에서도 두 사람의 설레는 감정이 고스란히 느껴집니다.
          </p>
        </div>

        <div className="bg-pink-50 dark:bg-pink-900/30 border-l-4 border-pink-500 p-6 my-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-pink-900 dark:text-pink-100 mb-3">
            💕 사랑의 맹세
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            춘향을 향한 이몽룡의 연정이 깊어지고, 두 사람은 백년가약을 맺습니다.
            신분의 차이를 뛰어넘은 순수한 사랑의 약속이 감동적으로 그려집니다.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">
            💔 이별 후의 그리움
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            이몽룡이 떠난 후 춘향이 느끼는 그리움과 슬픔은 시대를 초월한 보편적
            감정입니다. 하루하루가 천년 같고, 밤마다 꿈에서라도 만나고 싶은
            춘향의 애절한 마음이 담겨 있습니다. 이별의 아픔을 섬세하게 표현한
            대목은 수능 국어에서도 자주 출제됩니다.
          </p>
        </div>
      </section>

      <Divider />

      {/* Meaning */}
      <section id="meaning">
        <H2 id="meaning">현대적 의미</H2>
        <p>
          「소춘향가」는 단순한 옛날 사랑 이야기가 아닙니다. 신분을 초월한 사랑,
          약속을 지키는 신의, 시련 속에서도 흔들리지 않는 믿음 등 현대를
          살아가는 우리에게도 여전히 유효한 가치들을 담고 있습니다.
        </p>

        <Callout type="success" title="수능 학습 포인트">
          <ul className="list-disc pl-5">
            <li>판소리와 잡가의 차이점 이해</li>
            <li>인물의 심리 변화와 감정 표현 방식</li>
            <li>비유와 상징을 통한 그리움의 표현</li>
            <li>조선시대 신분제와 사랑의 갈등</li>
          </ul>
        </Callout>

        <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-700 dark:text-gray-300 my-6">
          "AI 그림과 친절한 해설로 즐기는 고전문학! 보기만 해도 국어 감각이
          살아납니다. 수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금
          바로 시작하세요!"
        </blockquote>
      </section>

      <Divider />

      {/* English */}
      <section id="english">
        <H2 id="english">So Chunhyang-ga – "The Song of Little Chunhyang"</H2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
          <p className="mb-4">
            <strong>"So Chunhyang-ga"</strong> is one of the twelve traditional
            Korean folk songs (Sip-i Japga) that emerged during the late Joseon
            Dynasty. It is a lyrical adaptation of the famous pansori epic{' '}
            <em>Chunhyang-ga</em>, condensing the most beloved scenes into a
            shorter, more accessible format.
          </p>
          <p className="mb-4">
            The song beautifully captures key moments from the romance between
            Yi Mongryong, a nobleman's son, and Chunhyang, the daughter of a
            gisaeng. These include their first encounter, the blossoming of
            love, the pain of separation, and the longing that follows.
          </p>
          <p className="mb-4">
            Unlike the full-length pansori narrative, this folk version
            emphasizes emotional expression over plot development, allowing
            listeners to connect deeply with the characters' feelings. It's a
            timeless story of love transcending social boundaries, faithfulness,
            and hope.
          </p>
          <p>
            This work is a valuable resource for understanding Korean
            traditional music and literature, and remains a frequently studied
            text in Korean SAT (Suneung) preparation.
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
            절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」)
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            조선 시대 후기 십이 잡가의 하나로, 판소리 「춘향가」의 명장면을
            압축적으로 담아낸 작품입니다.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              '고전문학',
              '소춘향가',
              '춘향가',
              '잡가',
              '판소리',
              '수능국어',
              '조선문학',
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
              src="https://www.youtube.com/embed/Nwh6VpYaHvo"
              title="절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」)"
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
          title: '절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」)',
          description:
            '조선 시대 후기 십이 잡가의 하나로, 판소리 「춘향가」의 명장면을 압축적으로 담아낸 작품입니다.',
          author: 'SN독학기숙학원',
          datePublished: '2025-11-07',
          dateModified: '2025-11-07',
          image:
            'https://blog.snacademy.co.kr/images/thumbnail/thumbnail_a2_sochunhyangga.png',
          url: 'https://blog.snacademy.co.kr/originals/sochunhyangga',
          category: 'SN Originals',
          keywords:
            '고전문학, 소춘향가, 춘향가, 잡가, 판소리, 수능국어, 조선문학, 이몽룡, 춘향',
        }}
      />

      {/* AI Learning Data */}
      <AIDataGenerator
        content={{
          title: '절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」)',
          description:
            '조선 시대 후기 십이 잡가의 하나로, 판소리 「춘향가」의 명장면을 압축적으로 담아낸 작품입니다.',
          author: 'SN독학기숙학원',
          category: 'SN Originals',
          tags: [
            '고전문학',
            '소춘향가',
            '춘향가',
            '잡가',
            '판소리',
            '수능국어',
            '조선문학',
          ],
          content: `소춘향가, 춘향가, 십이 잡가, 판소리, 이몽룡과 춘향의 사랑, 첫 만남, 이별, 그리움`,
          difficulty: 'intermediate',
          subject: '고전문학',
          learningObjectives: [
            '십이 잡가의 특징 이해',
            '판소리와 잡가의 차이점 파악',
            '춘향가의 주요 장면 이해',
            '인물의 감정 변화 분석',
          ],
        }}
      />
    </main>
  );
}
