import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostById } from '@/data/posts';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const post = getPostById('dokhak');

  if (!post) {
    return {
      title: 'Post Not Found | SN Academy Blog',
    };
  }

  return {
    title: `${post.title} | SN Academy Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || '',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'ko_KR',
      url: `https://blog.snacademy.co.kr${post.url}`,
      images: post.thumbnail
        ? [
            {
              url: post.thumbnail,
              width: 800,
              height: 400,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

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
    { id: 'intro', label: '인사 및 서문' },
    { id: 'why-self-study', label: "왜 우리가 '독학'을 중요시하는가" },
    { id: 'habits-over-classes', label: "'학(學)'보다 더 중요한 '습(習)'" },
    { id: 'why-coach', label: "왜 '학습전략담임'을 고수하는가" },
    { id: 'risks', label: '독학의 두 가지 위험' },
    { id: 'formula', label: '결론: 단 하나의 방법' },
    { id: 'epilogue', label: '에필로그 및 추천 글' },
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
export default async function Page() {
  const post = getPostById('dokhak');

  if (!post || post.category !== 'columns') {
    notFound();
  }

  const content = (
    <>
      {/* Intro */}
      <section id="intro">
        <p>
          <span className="text-red-500 font-bold">SN독학(獨學)기숙학원</span>은
          '수업'보다 '독학'을 항상 강조해 왔습니다. 이는 SN의 탄생철학이기도
          합니다. 저희 학원은 2014년 11월에 런칭했고, 1기는 2015년부터
          시작했습니다.
        </p>
        <img
          src="/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-0.png"
          alt="SN 아카데미 사진"
          className="rounded-2xl border border-gray-200 dark:border-gray-700 my-6 w-full"
        />
        <Callout type="info">
          <blockquote>
            <p>
              "독학기숙학원보다는 수업이 있는 재종기숙학원이 더 낫지 않나요?"
            </p>
            <p>"독학이 자습만으로 구성되면 학생들이 불안해하지 않나요?"</p>
          </blockquote>
        </Callout>
        <p>
          저희가 <strong>SN독학기숙학원</strong>을 설립한 지 11년이 지났지만,
          여전히 자주 듣는 질문입니다. 하지만 그 사이에
          <strong> '독학기숙학원'이라는 시장 자체</strong>는 크게 성장했습니다.
          2015년만 해도 존재감이 미미했지만, 지금은 기숙학원 시장 전체의 약{' '}
          <strong>20%</strong>를 차지하며, 대기업 계열에서도 독학기숙학원이 속속
          등장하고 있습니다.
        </p>
        <Callout type="success" title="사람들이 독학을 선택하는 짧은 이유">
          <ul className="list-disc pl-5">
            <li>
              <strong>요즘 인강이 잘 되어 있습니다.</strong>
            </li>
            <li>
              <strong>독학을 원하는 학생들의 수요도 분명히 있습니다.</strong>
            </li>
          </ul>
        </Callout>
        <p>
          그렇게 짧게 대답할 수 있지만, 사실 그 이면엔 더 긴 이야기가 있습니다.
        </p>
      </section>
      <Divider />
      {/* Why self study */}
      <section id="why-self-study">
        <H2 id="why-self-study">왜 우리가 '독학'을 중요시하는가</H2>
        <p>
          독학(獨學)을 등한시하면 절대 성적이 잘 나올 수 없습니다. 공부는{' '}
          <strong>'학(學)'과 '습(習)'</strong>으로 이루어져 있습니다. 배우는
          것이 '학', 익히는 것이 '습'이죠. 입시를 준비할 때, '학'은 수업을 듣고
          배우는 과정입니다.
        </p>
        <img
          src="/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-1.png"
          alt="수업과 학습의 균형"
          className="rounded-2xl border border-gray-200 dark:border-gray-700 my-6 w-full"
        />
      </section>
      {/* 학보다 습 */}
      <section id="habits-over-classes">
        <H2 id="habits-over-classes">'학(學)'보다 더 중요한 '습(習)'</H2>
        <p>
          시대인재나 강남대성과 같은 재종학원, 메가스터디·대성마이맥·이투스 같은
          온라인 강의 플랫폼은 '학'의 영역을 대표합니다. 국내 최고의 강사진,
          체계적인 커리큘럼, 2조 원 규모의 인강 시장—
          <strong>'배우는 것'은 거의 완벽</strong>에 가깝습니다.
        </p>
        <p>
          하지만 완벽한 강의를 듣는다고 해서 <strong>모두가 1등급</strong>을
          받지는 않습니다. 그 이유는 바로 <strong>'학'과 '습'의 불균형</strong>
          에 있습니다. 배우는 것(學)은 넘치지만, 익히는 것(習)은 종종 방치되곤
          합니다.
        </p>
        <Callout type="info" title="핵심 질문">
          <ul className="list-disc pl-5">
            <li>
              이렇게 훌륭한 수업을 듣는다고 해서, 모두가 1등급을 받을까요?
            </li>
            <li>모두가 백분위 99~100%를 찍을 수 있을까요?</li>
          </ul>
        </Callout>
        <p>
          저희는 <strong>'습'은 관리할 수 있고, 측정할 수 있다</strong>고
          봅니다. 학생이 얼마나 공부했고 무엇을 익혔는지{' '}
          <strong>데이터로 분석</strong>할 수 있습니다.
        </p>
        <p>
          그래서 저희는 <strong>'학습전략담임' 제도</strong>를 도입했습니다.
          매주 학습량을 점검하고 다음 주 전략을 설계하는, 단순 상담을 넘어선{' '}
          <strong>전문 코칭</strong>입니다. 최근에는{' '}
          <strong>AI 학습분석</strong>과의 결합을 시도하여 학습 로그를 기반으로
          패턴/집중도를 시각화하고 전략을 지속적으로 수정하고 있습니다.
        </p>
        <img
          src="/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-2.jpg"
          alt="하루 12시간 습을 할 수 있는 공간"
          className="rounded-2xl border border-gray-200 dark:border-gray-700 my-6 w-full"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          하루 12시간 '습'을 할 수 있는 공간
        </p>
        <ul className="list-disc pl-5 mt-4">
          <li>입시 시장은 '학'의 영역에서 눈부신 발전 → 그러나 '습'은 방치</li>
          <li>SN이 AI에 투자하는 이유 = '습'의 체계적 발전을 위해서</li>
        </ul>
      </section>
      {/* 왜 코치 */}
      <section id="why-coach">
        <H2 id="why-coach">왜 '학습전략담임'을 고수하는가</H2>
        <p>
          대부분의 독학기숙학원에는 이러한 시스템이 없습니다. 한 달에 한 번
          상담하거나, 아예 하지 않는 곳도 많습니다.{' '}
          <strong>전문 코치 인건비</strong>가 많이 들기 때문입니다.
        </p>
        <p>
          SN은 <strong>주 1회 이상 학습점검 & 전략 설계</strong>를 원칙으로
          운영합니다. 이는 규정이 아니라,{' '}
          <strong>학생 성과로 입증된 결과</strong>입니다.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 my-6">
          <img
            src="/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-3.jpg"
            alt="담임 사진1"
            className="rounded-xl border border-gray-200 dark:border-gray-700"
          />
          <img
            src="/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-4.jpg"
            alt="담임 사진2"
            className="rounded-xl border border-gray-200 dark:border-gray-700"
          />
          <img
            src="/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-5.jpg"
            alt="담임 사진3"
            className="rounded-xl border border-gray-200 dark:border-gray-700"
          />
        </div>
        <Callout type="success" title="SN의 원칙">
          <p>
            우리는 '학(學)'만큼 '습(習)'에 투자합니다. 그 균형이 바로 '독학'의
            본질이라고 믿습니다.
          </p>
        </Callout>
      </section>
      {/* 위험 */}
      <section id="risks">
        <H2 id="risks">독학의 두 가지 위험</H2>
        <ol className="list-decimal pl-5">
          <li>
            <strong>전략 없는 반복</strong> — 잘못된 자세로 수천 번 연습하는
            선수와 같습니다.
          </li>
          <li>
            <strong>혼자 공부하는 외로움</strong> — 정서적 고립은 생각보다
            큽니다.
          </li>
        </ol>
        <p>
          이때 <strong>학습전략담임</strong>은 방향성을 잡아주는 코치이자,
          심리적 지지와 공감을 제공하는 멘토입니다.
        </p>
      </section>
      {/* 결론 */}
      <section id="formula">
        <H2 id="formula">결론: 독학으로 성공하는 단 하나의 방법</H2>
        <Callout type="info">
          <p>
            <strong>
              '습(習) 시스템' + '학습전략담임' = 독학 성공의 유일한 공식
            </strong>
          </p>
        </Callout>
        <p>
          이 철학은 학생에게는 <strong>비용을 낮추는 방식</strong>이 되고,
          저희에게는 <strong>더 많은 학생의 성공을 함께 만드는 길</strong>이
          됩니다. 결국 <strong>윈윈(Win-Win)</strong> 구조이기에, SN은 11년째 이
          원칙을 고수합니다.
        </p>
        <p>
          <em>
            "독학으로 성공할 수 있는 단 하나의 방법이 있다면, 그것은
            SN독학기숙학원의 '습(習) 시스템'과 '학습전략담임'의 결합입니다."
          </em>
        </p>
        <a
          href="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWut3i%2FbtsHQpcoDfY%2FqhNFqeOFBB2juUyyr6rPkK%2Fimg.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWut3i%2FbtsHQpcoDfY%2FqhNFqeOFBB2juUyyr6rPkK%2Fimg.jpg"
            alt="앤드게임 닥터 스트레인지 – 단 하나의 경우의 수"
            className="rounded-2xl border border-gray-200 dark:border-gray-700 my-6 w-full"
          />
        </a>
      </section>
      {/* 에필로그 */}
      <section id="epilogue">
        <H2 id="epilogue">에필로그</H2>
        <p>
          얼마 전 한 학부모님이 "대표님 블로그 글을 전부 읽었습니다."라고 말씀해
          주셨습니다. 혼자 기록하듯 쓴 글을 누군가 그렇게 읽어주고 있었다니, 큰
          힘이 되었습니다. 앞으로도 제 자신을 위해, 그리고 어딘가에서 고민 중일
          누군가를 위해 계속 쓰겠습니다.
        </p>
        <p>
          <strong>독학은 혼자 하는 공부가 아닙니다.</strong> 그것은{' '}
          <strong>스스로를 단단히 세우는 공부</strong>입니다. 우리는 그 길에
          함께 설계자이자 동반자로 남겠습니다.
        </p>
        <img
          src="https://postfiles.pstatic.net/MjAyNTA0MDhfMTg3/MDAxNzQ0MDkzNTY2MzYx.72tHNPvi9NK_1BwGF-542TSrKNM02PsygSGwnhs97Rkg.SG-7dmIW5-J6HsdJJPSKdDLsiNdL8-qsBS04uv0Tgycg.PNG/SN%EB%8F%85%ED%95%99%EA%B8%B0%EC%88%99%ED%95%99%EC%9B%90_%EC%A7%80%EB%B8%8C%EB%A6%AC_%EC%9D%B4%EB%AF%B8%EC%A7%80.png?type=w773"
          alt="SN독학기숙학원 브랜딩 이미지"
          className="rounded-2xl border border-gray-200 dark:border-gray-700 my-6 w-full"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
          <div className="font-semibold mb-2 text-gray-900 dark:text-white">
            함께 읽어보면 좋은 글
          </div>
          <ul className="list-disc pl-5">
            <li>
              <a
                href="https://blog.naver.com/snacademy/222559747104"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline underline-offset-4"
              >
                우리는 왜 독학을 강조하는가?
              </a>
            </li>
            <li>
              <a
                href="https://blog.naver.com/snacademy/223826296218"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline underline-offset-4"
              >
                독학으로 성공하는 단 한가지의 방법
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 py-10">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            {post.excerpt}
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {post.tags?.map(tag => (
              <span
                key={tag}
                className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>
        <TableOfContents />
        <article className="min-w-0 mt-8">
          <Prose>{content}</Prose>
        </article>
      </div>

      {/* SEO: StructuredData */}
      <StructuredData
        type="article"
        data={{
          title: post.title,
          description: post.excerpt,
          author: post.author,
          datePublished: post.date,
          dateModified: post.date,
          image: post.thumbnail,
          url: `https://blog.snacademy.co.kr${post.url}`,
          category: post.category,
          keywords: post.tags?.join(', ') || '',
        }}
      />

      {/* AI Learning Data */}
      <AIDataGenerator
        content={{
          title: post.title,
          description: post.excerpt,
          author: post.author,
          category: post.category,
          tags: post.tags || [],
          content: `독학기숙학원, 학습전략담임, AI 학습분석, 습(習) 시스템, 입시 교육, 자기주도학습`,
          difficulty: 'intermediate',
          subject: '교육 철학',
          learningObjectives: [
            '독학의 중요성 이해',
            '학(學)과 습(習)의 균형',
            '학습전략담임 시스템의 가치',
            'AI 기반 학습분석 활용',
          ],
        }}
      />
    </main>
  );
}
