import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionTabs from '@/components/SectionTabs';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';
import { BASE_URL } from '@/lib/config';
import type { NonsulFormat, NonsulKind, Post } from '@/data/posts';
import {
  NONSUL_FORMATS,
  NONSUL_KIND_LABEL,
  NONSUL_UNIVERSITIES,
  getNonsulPosts,
} from '@/lib/nonsul';

// 제목 뒤 '| SN독학기숙학원 블로그' 는 루트 레이아웃 title.template 이 붙인다
const TITLE = '대학별 논술 기출·모의고사 정답·해설';
const DESCRIPTION =
  '가천대·국민대 약술형 논술부터 대학별 논술 기출과 모의논술의 시험지 PDF, 공식 정답, 문항별 SN 해설을 무료로 공개합니다. SN이 직접 만든 실전 모의고사도 함께 풀어 보세요.';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    '논술 기출, 대학별 논술, 논술 모의고사, 논술 해설, 약술형 논술, 가천대 논술 기출, 국민대 논술 기출, 논술 기출 PDF, SN독학기숙학원',
  alternates: { canonical: '/nonsul' },
  openGraph: {
    title: TITLE,
    description:
      '대학별 논술을 기출로 준비합니다. 시험지 PDF, 공식 정답, SN 해설.',
    type: 'website',
    locale: 'ko_KR',
    url: `${BASE_URL}/nonsul`,
  },
  robots: { index: true, follow: true },
};

// 2027학년도 논술 일정 (2027 논술 일정 총정리 글, 2026.10.20 기준)
const SCHEDULE: { university: string; date: string; track: string }[] = [
  { university: 'gachon', date: '11/29(일)', track: '의예·한의예·약학' },
  { university: 'gachon', date: '11/30(월)', track: '인문·간호 등' },
  { university: 'gachon', date: '12/1(화)', track: '자연' },
  { university: 'kookmin', date: '12/5(토)', track: '인문' },
  { university: 'kookmin', date: '12/6(일)', track: '자연' },
];

// 대학 안에서 카드 순서: 총정리 → 기출 → 대학 모의 → SN 실전 모의
const KIND_ORDER: NonsulKind[] = ['hub', 'gichul', 'mock', 'sn'];

// 카드 모양은 수능 문제 연구(ProblemsFeed)와 같다
function NonsulCard({ post }: { post: Post }) {
  const kind = post.nonsul?.kind;
  return (
    <div className="group bg-white dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600 hover:border-sn-primary hover:shadow-2xl transition-all duration-300">
      <TrackedPostLink href={post.url} postId={post.id} placement="nonsul_card">
        {post.thumbnail && (
          <div className="relative w-full aspect-[1200/630] overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-4">
          <div className="mb-2 flex flex-wrap gap-1.5 text-xs font-medium">
            {!post.published && (
              <span className="rounded bg-amber-100 px-2 py-0.5 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                초안
              </span>
            )}
            {kind && (
              <span className="rounded bg-sn-primary/10 px-2 py-0.5 text-sn-primary">
                {NONSUL_KIND_LABEL[kind]}
              </span>
            )}
            {post.nonsul?.year && (
              <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                {post.nonsul.year}학년도
              </span>
            )}
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-sn-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{post.date}</span>
            <span>{post.readTime}분 읽기</span>
          </div>
        </div>
      </TrackedPostLink>
    </div>
  );
}

export default function NonsulPage() {
  const posts = getNonsulPosts();
  // 유형 탭 → 그 안에서 대학별 묶음 (글이 있는 유형·대학만)
  const formats = (Object.keys(NONSUL_FORMATS) as NonsulFormat[])
    .map(format => {
      const own = posts.filter(post => post.nonsul?.format === format);
      const universities = Object.entries(NONSUL_UNIVERSITIES)
        .map(([key, university]) => ({
          key,
          ...university,
          posts: own
            .filter(post => post.nonsul?.university === key)
            .sort(
              (a, b) =>
                KIND_ORDER.indexOf(a.nonsul!.kind) -
                  KIND_ORDER.indexOf(b.nonsul!.kind) ||
                (b.nonsul?.year ?? 0) - (a.nonsul?.year ?? 0)
            ),
        }))
        .filter(university => university.posts.length > 0);
      return {
        format,
        ...NONSUL_FORMATS[format],
        count: own.length,
        universities,
      };
    })
    .filter(format => format.count > 0);

  return (
    <div className="space-y-14">
      {/* 페이지 헤더 */}
      <div className="pt-8 text-center">
        <p className="mb-2 text-sm font-semibold text-sn-primary dark:text-emerald-400">
          논술
        </p>
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          {TITLE}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          대학 기출과 모의논술을 시험지 양식으로 다시 조판하고 문항별 SN 해설을
          붙였습니다. 약술형 논술부터 시작합니다
        </p>
      </div>

      <section aria-labelledby="nonsul-schedule" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-gray-200 pb-2 dark:border-gray-700">
          <h2
            id="nonsul-schedule"
            className="text-sm font-bold text-gray-700 dark:text-gray-300"
          >
            📌 2027학년도 논술 일정
          </h2>
          <Link
            href="/columns/2027-nonsul-schedule"
            className="text-xs text-gray-500 hover:text-sn-primary dark:text-gray-400"
          >
            36개 대학 전체 일정 →
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {SCHEDULE.map(item => (
            <li
              key={`${item.university}-${item.date}`}
              className="rounded-lg border-2 border-gray-200 bg-white px-3 py-2.5 dark:border-gray-600 dark:bg-gray-700"
            >
              <b className="block text-sm text-gray-900 dark:text-white">
                {item.date}
              </b>
              <span className="text-xs text-gray-600 dark:text-gray-300">
                {NONSUL_UNIVERSITIES[item.university].name} {item.track}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          2026.10.20 기준입니다. 고사장과 입실 시각은 각 대학 입학처 공지를 꼭
          확인하세요.
        </p>
      </section>

      <SectionTabs
        ariaLabel="논술 유형"
        tabs={formats.map(format => ({
          key: format.format,
          label: format.label,
          emoji: format.emoji,
          count: format.count,
          content: (
            <section id={format.format} className="scroll-mt-28 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {format.label}
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {format.description}
                </p>
              </div>
              {format.universities.map(university => (
                <div key={university.key} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {university.name} 논술
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {university.summary}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {university.posts.map(post => (
                      <NonsulCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ),
        }))}
      />
    </div>
  );
}
