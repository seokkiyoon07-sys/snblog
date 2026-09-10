import type { Metadata } from 'next';
import Image from 'next/image';
import { Bookmark, Youtube } from 'lucide-react';
import { getPostsByCategory } from '@/data/posts';
import { BASE_URL, EXTERNAL_URLS } from '@/lib/config';
import HistoryTabs from '@/components/HistoryTabs';

const description =
  '역사 속 사람과 사건을 만나는 짧은 이야기. SN History는 한국사부터 세계사까지, 궁금한 역사를 숏츠로 전합니다.';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'SN History | 역사 속으로, 짧고 깊게',
  description,
  alternates: { canonical: '/history' },
  openGraph: {
    title: 'SN History | 역사 속으로, 짧고 깊게',
    description,
    url: `${BASE_URL}/history`,
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function HistoryPage() {
  const posts = getPostsByCategory('SN History').sort(
    (a, b) =>
      (a.seriesOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.seriesOrder ?? Number.MAX_SAFE_INTEGER) ||
      b.date.localeCompare(a.date)
  );
  return (
    <div className="space-y-6 lg:space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'SN History',
            description,
            url: `${BASE_URL}/history`,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: posts.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: post.title,
                url: `${BASE_URL}/history/${post.id}`,
              })),
            },
          }).replace(/</g, '\\u003c'),
        }}
      />
      <section
        aria-labelledby="history-intro-heading"
        className="space-y-4 lg:space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-sn-primary"
              aria-hidden="true"
            />
            <h1
              id="history-intro-heading"
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              SN History 소개
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={EXTERNAL_URLS.HISTORY_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SN History 유튜브 채널 바로가기"
              className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">채널 바로가기</span>
            </a>
            <a
              href={EXTERNAL_URLS.HISTORY_YOUTUBE + '?sub_confirmation=1'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SN History 유튜브 구독하기"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              <Bookmark className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">구독하기</span>
            </a>
          </div>
        </div>
        <div className="rounded-lg border border-sn-primary/20 bg-sn-primary/5 p-4 dark:border-sn-primary/30 dark:bg-sn-primary/10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[auto_1fr] lg:gap-6">
            <div className="relative h-48 w-full overflow-hidden rounded-lg sm:h-28 sm:w-40 lg:h-32 lg:w-48">
              <Image
                src="/images/branding/SNhistory_logo-transparent.png"
                alt="SN History 로고"
                fill
                priority
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 112px, 128px"
                className="object-contain"
              />
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                {['한국사와 세계사', '인물 · 사건 · 문화', '역사 숏츠'].map(
                  tag => (
                    <span
                      key={tag}
                      className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl lg:text-2xl dark:text-white">
                역사 속으로, 짧고 깊게
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 lg:text-base dark:text-gray-300">
                한 사람의 선택, 세상을 바꾼 사건, 일상에 남은 과거의 흔적. SN
                History는 궁금한 장면에서 시작해 역사 속 사람과 사건을 짧은
                영상으로 만납니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="history-stories-heading"
        className="space-y-4 lg:space-y-6"
      >
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <h2
            id="history-stories-heading"
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            이야기 분류
          </h2>
        </div>
        <HistoryTabs posts={posts} />
      </section>
    </div>
  );
}
