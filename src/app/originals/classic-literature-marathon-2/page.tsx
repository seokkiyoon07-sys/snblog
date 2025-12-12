import React from 'react';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title:
    '기말고사 대비 고전문학 공부하는 고1·고2 친구들을 위해 만든 영상 (SN 고전문학 몰아보기 2탄) | SN Originals',
  description:
    '보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈. 고등학교 1~2학년 내신 시험 준비를 위한 8개 작품 몰아보기 영상입니다. 제망매가, 찬기파랑가, 가시리, 매화사, 강호사시가, 도산십이곡, 상춘곡, 면앙정가를 한 번에 정리하세요.',
  keywords:
    '고전문학, 내신대비, 기말고사, 고1, 고2, 제망매가, 찬기파랑가, 가시리, 매화사, 강호사시가, 도산십이곡, 상춘곡, 면앙정가',
  alternates: {
    canonical: '/originals/classic-literature-marathon-2',
  },
  openGraph: {
    title: '기말고사 대비 고전문학 공부하는 고1·고2 친구들을 위해 만든 영상 (SN 고전문학 몰아보기 2탄)',
    description:
      '보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈. 고등학교 1~2학년 내신 시험 준비를 위한 8개 작품 몰아보기 영상입니다.',
    type: 'article',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/originals/classic-literature-marathon-2',
    images: [
      {
        url: 'https://blog.snacademy.co.kr/images/thumbnail/thumbnail_a1.png',
        width: 800,
        height: 400,
        alt: 'SN 고전문학 몰아보기 2탄 - 고1·고2 내신 대비',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '기말고사 대비 고전문학 공부하는 고1·고2 친구들을 위해 만든 영상 (SN 고전문학 몰아보기 2탄)',
    description:
      '보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈. 고등학교 1~2학년 내신 시험 준비를 위한 8개 작품 몰아보기 영상입니다.',
    images: ['https://blog.snacademy.co.kr/images/thumbnail/thumbnail_a1.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Components
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
    <div className="[&>p]:mb-4 [&>p]:leading-[1.8] [&>p]:text-[0.98rem] sm:[&>p]:text-[1rem] [&>p]:text-gray-700 dark:[&>p]:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 dark:[&_strong]:text-white [&_em]:italic [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:text-gray-700 dark:[&_blockquote]:text-gray-300 [&_blockquote]:my-6">
      {children}
    </div>
  );
}

function TableOfContents() {
  const items = [
    { id: 'intro', label: '인사 및 영상 소개' },
    { id: 'timestamps', label: '작품 목록' },
    { id: 'works', label: '수록 작품 소개' },
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
export default function ClassicLiteratureMarathon2Page() {
  const content = (
    <>
      {/* Intro */}
      <section id="intro">
        <p>
          안녕하세요{' '}
          <span className="text-red-500 font-bold">SN독학기숙학원</span>입니다
        </p>
        <p>보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈.</p>
        <p>
          오늘은 <strong>고등학교 1~2학년 내신 시험 준비 차원</strong>에서,
          수능시험날(11/13) 이후 게시했던 8개 작품들을 몰아보기할 수 있는 영상을 만들었습니다.
        </p>
      </section>

      <Divider />

      {/* Timestamps */}
      <section id="timestamps">
        <H2 id="timestamps">작품 목록 (타임스탬프)</H2>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 my-6">
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                00:00
              </span>
              <span>Intro</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                00:48
              </span>
              <span>월명사 「제망매가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                02:10
              </span>
              <span>충담사 「찬기파랑가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                03:17
              </span>
              <span>작자미상 「가시리」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                05:08
              </span>
              <span>안민영 「매화사」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                08:12
              </span>
              <span>맹사성 「강호사시가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                09:45
              </span>
              <span>이황 「도산십이곡」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                13:42
              </span>
              <span>정극인 「상춘곡」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                17:30
              </span>
              <span>송순 「면앙정가」</span>
            </li>
            <li className="flex">
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[70px]">
                23:02
              </span>
              <span>Outro</span>
            </li>
          </ul>
        </div>

        <p>
          SN독학기숙학원이 고심하여 고른 고전문학 작품들을 AI 영상과 함께 쉽게
          이해하면서, 그간 공부하셨던 내용들을 즐겁게 정리할 수 있는 시간이
          되시기를 기원합니다.
        </p>
      </section>

      <Divider />

      {/* Works Introduction */}
      <section id="works">
        <H2 id="works">수록 작품 소개</H2>

        <div className="space-y-6 mt-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">1. 제망매가 (祭亡妹歌)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>월명사</strong>가 죽은 누이를 위해 재(齋)를 올리며 지은 향가. 삶과 죽음의 경계, 이별의 슬픔과 극락왕생에 대한 소망을 담고 있습니다.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2. 찬기파랑가 (讚耆婆郞歌)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>충담사</strong>가 화랑 기파랑을 추모하며 지은 10구체 향가. 화랑의 고결한 인품과 풍류를 자연물에 비유하여 찬양한 작품입니다.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3. 가시리</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              고려 시대의 대표적인 이별 노래로, 작자 미상의 고려가요. 떠나가는 임에 대한 애절한 마음과 다시 돌아오기를 바라는 소망을 담고 있습니다.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">4. 매화사 (梅花詞)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              조선 후기 <strong>안민영</strong>이 지은 연시조. 매화에 대한 깊은 애정과 함께 군자의 고결한 지조를 노래하고 있습니다.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">5. 강호사시가 (江湖四時歌)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>맹사성</strong>이 지은 연시조로, 봄·여름·가을·겨울 네 계절의 풍경을 노래합니다. 자연 속에서의 한가로운 삶과 임금에 대한 충성심을 함께 담고 있습니다.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">6. 도산십이곡 (陶山十二曲)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>이황(퇴계)</strong>이 지은 12수의 연시조. 자연 속에서의 학문 정진과 수양, 후학들에 대한 가르침을 담고 있습니다.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">7. 상춘곡 (賞春曲)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>정극인</strong>이 지은 조선 전기의 대표적인 가사 작품. 봄날의 아름다운 자연과 한가로운 전원생활의 즐거움을 노래합니다.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">8. 면앙정가 (俛仰亭歌)</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>송순</strong>이 면앙정에서 바라본 사계절의 풍경을 노래한 가사. 자연의 아름다움과 유유자적한 삶의 즐거움을 화려한 수사로 표현했습니다.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Closing */}
      <section id="closing">
        <H2 id="closing">마치며</H2>
        <p>보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈.</p>
        <p>
          SN독학기숙학원이 고심하여 고른 고전문학 작품들을 이해하기 쉽도록 AI의 도움을 받아 제작한 영상들이니,
          가벼운 마음으로 영상 시청하시면서 그간 공부하셨던 내용들을 머릿속에 쏙쏙 정리할 수 있는 시간 가지시기를 기원합니다.
        </p>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            <strong>SN독학기숙학원</strong> | 여러분의 내신 대비를 응원합니다
          </p>
        </div>
      </section>
    </>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 py-10">
        <header className="mb-10">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
              고1·고2 내신 대비
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            기말고사 대비 고전문학 공부하는 고1·고2 친구들을 위해 만든 영상 (SN 고전문학 몰아보기 2탄)
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈. 고등학교 1~2학년 내신 시험 준비를 위한 8개 작품 몰아보기 영상입니다.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              '고전문학',
              '내신대비',
              '기말고사',
              '고1',
              '고2',
              '제망매가',
              '찬기파랑가',
              '가시리',
              '매화사',
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
              src="https://www.youtube.com/embed/T9nyl98YPb4"
              title="기말고사 대비 고전문학 공부하는 고1·고2 친구들을 위해 만든 영상 (SN 고전문학 몰아보기 2탄)"
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
            '기말고사 대비 고전문학 공부하는 고1·고2 친구들을 위해 만든 영상 (SN 고전문학 몰아보기 2탄)',
          description:
            '보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈. 고등학교 1~2학년 내신 시험 준비를 위한 8개 작품 몰아보기 영상입니다.',
          author: 'SN Academy',
          datePublished: '2025-12-12',
          dateModified: '2025-12-12',
          image:
            'https://blog.snacademy.co.kr/images/thumbnail/thumbnail_a1.png',
          url: 'https://blog.snacademy.co.kr/originals/classic-literature-marathon-2',
          category: 'SN Originals',
          keywords:
            '고전문학, 내신대비, 기말고사, 고1, 고2, 제망매가, 찬기파랑가, 가시리, 매화사, 강호사시가, 도산십이곡, 상춘곡, 면앙정가',
        }}
      />

      {/* AI Learning Data */}
      <AIDataGenerator
        content={{
          title:
            '기말고사 대비 고전문학 공부하는 고1·고2 친구들을 위해 만든 영상 (SN 고전문학 몰아보기 2탄)',
          description:
            '보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈. 고등학교 1~2학년 내신 시험 준비를 위한 8개 작품 몰아보기 영상입니다.',
          author: 'SN Academy',
          category: 'SN Originals',
          tags: [
            '고전문학',
            '내신대비',
            '기말고사',
            '고1',
            '고2',
            '제망매가',
            '찬기파랑가',
            '가시리',
            '매화사',
            '강호사시가',
            '도산십이곡',
            '상춘곡',
            '면앙정가',
          ],
          content: `고전문학 몰아보기 2탄, 고1·고2 내신 대비, 제망매가, 찬기파랑가, 가시리, 매화사, 강호사시가, 도산십이곡, 상춘곡, 면앙정가`,
          difficulty: 'intermediate',
          subject: '고전문학',
          learningObjectives: [
            '고전문학 주요 작품 8편 복습',
            '향가, 고려가요, 시조, 가사의 특징 이해',
            '내신 시험 대비 핵심 작품 정리',
            '작품별 주제와 표현 기법 파악',
          ],
        }}
      />
    </main>
  );
}
