import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleRelated from '@/components/ArticleRelated';
import BlogLayout from '@/components/BlogLayout';
import { BASE_URL, EXTERNAL_URLS } from '@/lib/config';
import { extractFaq } from '@/lib/exam-jsonld';
import { loadPostContent } from '@/lib/post-content';
import { renderMathInHtml } from '@/lib/render-math';
import 'katex/dist/katex.min.css';
import {
  NONSUL_KIND_LABEL,
  NONSUL_UNIVERSITIES,
  getNonsulCredit,
  getNonsulPost,
  getNonsulPosts,
} from '@/lib/nonsul';

interface NonsulPostPageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getNonsulPosts().map(post => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: NonsulPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getNonsulPost(id);
  if (!post) return { title: '글을 찾을 수 없습니다 | SN독학기숙학원' };

  const title = post.seoTitle ?? post.title;
  const image = post.thumbnail ? `${BASE_URL}${post.thumbnail}` : undefined;
  return {
    metadataBase: new URL(BASE_URL),
    // 제목이 길어 검색 결과에서 잘리지 않도록 블로그 이름 꼬리를 붙이지 않는다
    title: { absolute: title },
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: post.url },
    openGraph: {
      title,
      description: post.excerpt,
      type: 'article',
      locale: 'ko_KR',
      url: `${BASE_URL}${post.url}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
      images: image ? [image] : undefined,
    },
    robots: { index: post.published, follow: true },
  };
}

export default async function NonsulPostPage({ params }: NonsulPostPageProps) {
  const { id } = await params;
  const post = getNonsulPost(id);
  if (!post) notFound();

  // 수식은 서버에서 미리 렌더링한다 (render-math.ts 참고)
  const content = renderMathInHtml(loadPostContent(post.id, post.category));
  const university = post.nonsul
    ? NONSUL_UNIVERSITIES[post.nonsul.university]
    : undefined;
  const credit = getNonsulCredit(post);
  const isHub = post.nonsul?.kind === 'hub';
  const hub =
    university && !isHub ? getNonsulPost(university.hubId) : undefined;

  // 같은 대학의 다른 자료 (총정리 글에서는 본문이 이미 목록을 보여 주므로 생략)
  const siblings =
    post.nonsul && !isHub
      ? getNonsulPosts().filter(
          other =>
            other.id !== post.id &&
            other.nonsul?.university === post.nonsul!.university &&
            other.nonsul.kind !== 'hub'
        )
      : [];

  const pageUrl = `${BASE_URL}${post.url}`;
  // 본문의 <dl class="faq">가 있으면 FAQPage 구조화 데이터로도 내보낸다
  const faq = extractFaq(content.replace(/<\/(p|li|td|th)>/g, ' '));
  const breadcrumb = [
    { name: '논술', item: `${BASE_URL}/nonsul` },
    ...(hub ? [{ name: hub.title, item: `${BASE_URL}${hub.url}` }] : []),
    { name: post.title, item: pageUrl },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: { '@type': 'Organization', name: post.author, url: BASE_URL },
        publisher: {
          '@type': 'Organization',
          name: 'SN독학기숙학원',
          alternateName: ['SN고요의숲', 'SN Academy'],
          url: BASE_URL,
        },
        datePublished: post.date,
        dateModified: post.latestUpdate?.date ?? post.date,
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        keywords: post.tags?.join(', '),
        isAccessibleForFree: true,
        ...(post.thumbnail
          ? {
              image: {
                '@type': 'ImageObject',
                url: `${BASE_URL}${post.thumbnail}`,
              },
            }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          ...crumb,
        })),
      },
      ...(faq.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faq.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {!post.published && (
        <div className="mx-auto mt-6 max-w-3xl rounded border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
          초안 · 개발 서버에서만 보이는 미공개 글입니다.
        </div>
      )}
      <BlogLayout
        post={{ ...post, content: `<div class="ns-doc">${content}</div>` }}
        footer={
          <>
            <aside className="mb-8 rounded-xl border-2 border-violet-200 bg-violet-50 p-5 dark:border-violet-800 dark:bg-violet-950/30">
              <p className="font-bold text-gray-900 dark:text-white">
                막히는 문항은 SNarGPT에게 물어보세요
              </p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                문제를 올리고 질문하면 정답만이 아니라 어디서 막혔는지, 어떤
                근거로 답을 찾는지까지 함께 짚어 줍니다.
              </p>
              <a
                href={EXTERNAL_URLS.SNAR_GPT}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-flex rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
              >
                SNarGPT에서 질문하기 →
              </a>
            </aside>
            {credit && (
              <p className="mb-8 text-xs text-gray-500 dark:text-gray-400">
                {credit}
              </p>
            )}
            {siblings.length > 0 && university && (
              <nav
                aria-label={`${university.name} 논술 다른 자료`}
                className="mb-10 rounded-xl border border-gray-200 p-5 dark:border-gray-700"
              >
                <h2 className="mb-3 text-base font-bold text-gray-900 dark:text-white">
                  {university.name} 논술 다른 자료
                </h2>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {hub && (
                    <li>
                      <Link
                        href={hub.url}
                        className="flex items-baseline gap-3 py-2.5 text-sm font-semibold hover:text-sn-primary dark:hover:text-emerald-400"
                      >
                        <span className="w-24 flex-none text-xs text-gray-500 dark:text-gray-400">
                          총정리
                        </span>
                        {hub.title}
                      </Link>
                    </li>
                  )}
                  {siblings.map(other => (
                    <li key={other.id}>
                      <Link
                        href={other.url}
                        className="flex items-baseline gap-3 py-2.5 text-sm hover:text-sn-primary dark:hover:text-emerald-400"
                      >
                        <span className="w-24 flex-none text-xs text-gray-500 dark:text-gray-400">
                          {other.nonsul?.year ? `${other.nonsul.year} ` : ''}
                          {other.nonsul
                            ? NONSUL_KIND_LABEL[other.nonsul.kind]
                            : ''}
                        </span>
                        {other.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <ArticleRelated postId={post.id} />
          </>
        }
      />
    </>
  );
}
