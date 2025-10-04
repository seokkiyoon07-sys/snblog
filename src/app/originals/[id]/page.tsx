import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StructuredData from '@/components/StructuredData'
import AIDataGenerator from '@/components/AIDataGenerator'
import { getPostById } from '@/data/posts'
import { BlogLayout, BlogImage, Quote, Highlight, InfoBox, WarningBox, SuccessBox, Section, FeatureList, TOC, Callout, CodeBlock, YouTubeEmbed } from '@/components/BlogComponents'

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: 'Post Not Found | SN Academy Blog',
    }
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
      images: post.thumbnail ? [
        {
          url: post.thumbnail,
          width: 800,
          height: 400,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  }
}

export async function generateStaticParams() {
  const { getPostsByCategory } = await import('@/data/posts');
  const originalsPosts = getPostsByCategory('originals');

  return originalsPosts.map((post) => ({
    id: post.id,
  }))
}

export default async function OriginalsPostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* 뒤로가기 버튼 */}
      <div className="px-6 md:px-10 lg:px-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/originals"
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors"
          >
            ← SN Originals로 돌아가기
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1
              className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <p className="text-sm text-slate-600 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {post.date}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {post.readTime} min read
              </span>
            </div>
          </div>

          {/* 썸네일 (YouTube 영상이 없을 때만) */}
          {post.thumbnail && !post.youtubeUrl && (
            <div className="mb-12">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          )}

          {/* YouTube 영상 */}
          {post.youtubeUrl && (
            <div className="mb-12">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={post.youtubeUrl.replace('watch?v=', 'embed/')}
                  title={post.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* 태그 */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-sn-primary/10 text-sn-primary rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 콘텐츠 */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            {/* 갑민가, 화왕가, 북천가, 관동별곡, 사미인곡, 속미인곡 특별 처리 */}
            {post.id === 'gapminga' || post.id === 'hwangokga' || post.id === 'bukcheonga' || post.id === 'gwandong-byeolgok' || post.id === 'samieungok' || post.id === 'sokmieungok' ? (
              <div className="space-y-6">
                <div className="text-center py-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">안녕하세요 SN독학기숙학원입니다😊</h2>
                  <p className="text-sm text-gray-600 mb-3">
                    보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 {post.id === 'gapminga' ? '첫 작품으로' : post.id === 'hwangokga' ? '2탄으로' : post.id === 'bukcheonga' ? '3탄으로' : post.id === 'gwandong-byeolgok' ? '4탄으로' : post.id === 'samieungok' ? '5탄으로' : '6탄으로'} 「{post.id === 'gapminga' ? '갑민가' : post.id === 'hwangokga' ? '화왕가' : post.id === 'bukcheonga' ? '북천가' : post.id === 'gwandong-byeolgok' ? '관동별곡' : post.id === 'samieungok' ? '사미인곡' : '속미인곡'}」를 준비했습니다.
                  </p>
                  {post.id === 'bukcheonga' && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>북천가</strong>는 이번 수능에 출제될 확률이 높은 작품인데요.<br />
                        이동하실 때, 머리를 잠시 식히실 때 보시면 도움이 되실 겁니다!
                      </p>
                    </div>
                  )}
                  {post.id === 'gwandong-byeolgok' && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-3 mb-3 rounded">
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold mb-2">📺 타임스탬프</p>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div>00:00 인트로, 작품 배경</div>
                          <div>00:52 서사 - 죽림</div>
                          <div>01:06 서사 - 연추문, 이동</div>
                          <div>01:24 서사 - 소양강</div>
                          <div>01:38 서사 - 철원, 태봉국 궁궐터</div>
                          <div>01:56 서사 - 회양</div>
                          <div>02:08 본사1(금강산) - 회양</div>
                          <div>02:23 본사1(금강산) - 만폭동</div>
                          <div>02:38 본사1(금강산) - 금강대</div>
                          <div>02:55 본사1(금강산) - 진헐대</div>
                          <div>03:44 본사1(금강산) - 개심대</div>
                          <div>04:04 본사1(금강산) - 비로봉</div>
                          <div>04:43 본사1(금강산) - 화룡소</div>
                          <div>05:08 본사1(금강산) - 불정대</div>
                          <div>05:40 본사2(동해) - 산영루</div>
                          <div>06:18 본사2(동해) - 총석정</div>
                          <div>06:35 본사2(동해) - 삼일포</div>
                          <div>06:59 본사2(동해) - 의상대</div>
                          <div>07:42 본사2(동해) - 경포대</div>
                          <div>08:20 본사2(동해) - 강릉</div>
                          <div>08:40 본사2(동해) - 죽서루</div>
                          <div>09:07 본사2(동해)/결사 - 망양정</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {post.id === 'samieungok' && (
                    <div className="bg-pink-50 border-l-4 border-pink-400 p-3 mb-3 rounded">
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold mb-2">📖 작품 배경</p>
                        <p className="mb-2">
                          「사미인곡」은 1588년(선조 21) 정철이 고향인 전남 창평에 우거하며 지은 가사입니다.
                        </p>
                        <p>
                          임금과 이별한 본인이 처지를 남편과 이별한 한 여인의 상황으로 그려내면서,<br />
                          계절의 변화에 따라 매화, 옷, 달, 별, 눈 등 다양한 비유와 대구 등을 사용하여 감각적으로 그려낸 작품입니다.
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      "AI 그림과 친절한 해설로 즐기는 고전문학!
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      보기만 해도 국어 감각이 살아납니다.
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <Section title={`「${post.id === 'gapminga' ? '갑민가' : post.id === 'hwangokga' ? '화왕가' : post.id === 'bukcheonga' ? '북천가' : post.id === 'gwandong-byeolgok' ? '관동별곡' : post.id === 'samieungok' ? '사미인곡' : '속미인곡'}」- ${post.id === 'gapminga' ? '민중의 절규와 저항' : post.id === 'hwangokga' ? '풍자 문학의 진수' : post.id === 'bukcheonga' ? '민중 문학의 진수' : post.id === 'gwandong-byeolgok' ? '조선 가사 문학의 백미' : post.id === 'samieungok' ? '정치적 사랑의 문학적 승화' : '사랑의 절정과 문학의 완성'}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                          <span className="text-2xl mr-2">{post.id === 'gapminga' ? '💔' : post.id === 'hwangokga' ? '😂' : post.id === 'bukcheonga' ? '💔' : post.id === 'gwandong-byeolgok' ? '🌄' : post.id === 'samieungok' ? '💕' : '💔'}</span>
                          {post.id === 'gapminga' ? '시대의 아픔을 담은 문학' : post.id === 'hwangokga' ? '유머로 승화된 사회 비판' : post.id === 'bukcheonga' ? '시대의 아픔을 담은 문학' : post.id === 'gwandong-byeolgok' ? '작품의 진정한 아름다움' : post.id === 'samieungok' ? '사랑과 충성의 문학적 표현' : '사랑의 절정을 담은 문학'}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {post.id === 'gapminga'
                            ? '「갑민가」는 조선 후기 백성들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.'
                            : post.id === 'hwangokga'
                              ? '「화왕가」는 조선 후기 사회의 모순과 인간의 욕망을 풍자적으로 표현한 문학적 걸작입니다. 이 작품은 단순한 비판을 넘어서, 유머와 해학을 통해 사회의 부조리를 날카롭게 지적하는 문학의 힘을 보여줍니다.'
                              : post.id === 'bukcheonga'
                                ? '「북천가」는 조선 후기 북한 지역 민중들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.'
                                : post.id === 'gwandong-byeolgok'
                                  ? '「관동별곡」은 단순한 풍경 묘사를 넘어서, 정철이 관동 지역(강원도)의 자연을 통해 인간의 내면세계를 표현한 문학적 걸작입니다. 이 작품은 조선 가사 문학의 최고봉으로 평가받으며, 자연과 인간의 조화를 통해 문학의 본질을 보여줍니다.'
                                  : post.id === 'samieungok'
                                    ? '「사미인곡」은 정철이 선조에 대한 충성과 사랑을 미인에 비유하여 표현한 문학적 걸작입니다. 이 작품은 단순한 정치적 충성을 넘어서, 복잡한 인간의 감정을 아름다운 문학적 비유로 승화시킨 조선 가사 문학의 대표작입니다.'
                                    : '「속미인곡」은 정철이 1588~1589년 경 고향인 전남 창평에서 「사미인곡」에 이어 지은 가사입니다. 이 작품은 단순한 정치적 충성을 넘어서, 진정한 사랑의 절정과 그리움의 깊이를 보여주는 조선 가사 문학의 최고봉입니다.'
                          }
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                          <span className="text-2xl mr-2">🎭</span>
                          문학적 가치와 의미
                        </h3>
                        <FeatureList features={post.id === 'gapminga' ? [
                          "민중의 진실한 목소리: 지배층이 아닌 백성의 시각에서 바라본 사회",
                          "날카로운 사회 비판: 당시 사회의 모순을 직설적으로 폭로",
                          "문학사적 의의: 조선 후기 민중 문학의 대표작",
                          "감정적 공감: 현대 독자들도 공감할 수 있는 보편적 메시지"
                        ] : post.id === 'hwangokga' ? [
                          "정교한 풍자 기법: 사회 모순을 유머러스하게 비판하는 문학적 기교",
                          "현실적 통찰력: 인간의 욕망과 사회적 모순을 정확히 포착",
                          "문학적 완성도: 조선 후기 풍자 문학의 최고 수준",
                          "시대를 초월한 메시지: 오늘날에도 유효한 보편적 가치"
                        ] : post.id === 'bukcheonga' ? [
                          "지역적 특수성: 북한 지역의 고유한 상황과 고통을 생생하게 표현",
                          "민중의 진실한 목소리: 지배층이 아닌 민중의 시각에서 바라본 사회",
                          "날카로운 사회 비판: 당시 사회의 모순을 직설적으로 폭로",
                          "문학사적 의의: 조선 후기 민중 문학의 대표작"
                        ] : post.id === 'gwandong-byeolgok' ? [
                          "시각적 묘사: 관동의 산천을 생생하게 그려내는 회화적 표현",
                          "음악적 리듬: 가사의 운율과 리듬이 자연의 흐름과 일치",
                          "감정의 깊이: 단순한 감탄을 넘어선 철학적 사유",
                          "상징적 의미: 자연을 통한 인간 존재의 의미 탐구"
                        ] : post.id === 'samieungok' ? [
                          "정교한 비유 기법: 미인에 비유한 독창적이고 정교한 표현",
                          "감정의 깊이: 정치적 좌절과 그리움의 복합적 감정 표현",
                          "시대적 의미: 임진왜란 이후의 복잡한 정치적 상황 반영",
                          "문학적 가치: 조선 가사 문학의 발전과 완성"
                        ] : [
                          "감정의 절정: '기다리는 나를 왜 모르시나요'라는 절절한 호소",
                          "정치적 배경: 정철의 정치적 좌절과 고향으로의 귀향",
                          "문학적 완성도: 조선 가사 문학의 백미로 평가받는 작품",
                          "감정의 깊이: 단순한 충성심을 넘어선 진정한 사랑의 표현"
                        ]} />
                      </div>
                    </div>
                  </Section>

                  <Callout variant="info" title="K-Classic Literature 관점">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">"{post.id === 'gapminga' ? 'Gapmin-ga' : post.id === 'hwangokga' ? 'Hwangok-ga' : post.id === 'bukcheonga' ? 'Bukcheon-ga' : post.id === 'gwandong-byeolgok' ? 'Gwandong-byeolgok' : post.id === 'samieungok' ? 'Samiin-gok' : 'Sokmiin-gok'}" - {post.id === 'gapminga' ? 'The Cry of the People' : post.id === 'hwangokga' ? 'The Art of Satirical Literature' : post.id === 'bukcheonga' ? 'The Voice of the Oppressed' : post.id === 'gwandong-byeolgok' ? 'A Masterpiece of Korean Classical Literature' : post.id === 'samieungok' ? 'The Literary Sublimation of Political Love' : 'The Culmination of Love and Literature'}: A Masterpiece of K-Classic Literature</h4>
                      <p>
                        <strong>{post.id === 'gapminga' ? 'Gapmin-ga' : post.id === 'hwangokga' ? 'Hwangok-ga' : post.id === 'bukcheonga' ? 'Bukcheon-ga' : post.id === 'gwandong-byeolgok' ? 'Gwandong-byeolgok' : post.id === 'samieungok' ? 'Samiin-gok' : 'Sokmiin-gok'}</strong> ({post.id === 'gapminga' ? '갑민가' : post.id === 'hwangokga' ? '화왕가' : post.id === 'bukcheonga' ? '북천가' : post.id === 'gwandong-byeolgok' ? '관동별곡' : post.id === 'samieungok' ? '사미인곡' : '속미인곡'}) stands as one of the most powerful works in Korean classical literature, {post.id === 'gapminga' ? 'representing the authentic voice of the oppressed during the late Joseon Dynasty (1392-1910). This masterpiece transcends mere literary expression to become a profound social document that exposes the contradictions and corruption of the ruling class while giving voice to the voiceless masses.' : post.id === 'hwangokga' ? 'using humor and satire to expose the contradictions of late Joseon society and human desires. This work transcends mere criticism to demonstrate the power of literature to address social injustice through wit and humor.' : post.id === 'bukcheonga' ? 'giving voice to the suffering and resistance of the common people in the northern regions during the late Joseon Dynasty. This work transcends mere literary expression to become a social document that exposes the contradictions and corruption of the ruling class while highlighting the unique suffering of the northern regions.' : post.id === 'gwandong-byeolgok' ? 'not merely a description of beautiful landscapes, but a profound literary work that explores the relationship between nature and human consciousness. Written by Jeong Cheol (정철), this piece represents the pinnacle of classical Korean poetry and showcases the unique beauty of Joseon Dynasty literature.' : post.id === 'samieungok' ? 'expressing Jeong Cheol\'s loyalty and love for King Seonjo through the metaphor of a beautiful woman. This work transcends mere political loyalty to become a profound literary expression of complex human emotions.' : 'written by Jeong Cheol (정철) around 1588-1589 during his exile in Changpyeong, Jeollanam-do. This work, which follows "Samiin-gok" (사미인곡), represents the pinnacle of classical Korean poetry and showcases the deepest expression of love and longing in Korean literature.'}
                      </p>
                      <p>
                        {post.id === 'gapminga'
                          ? 'This work represents the pinnacle of Korean classical literature\'s engagement with social issues. Unlike court literature that often idealized the ruling class, "Gapmin-ga" provides an unfiltered view of the common people\'s suffering and resistance.'
                          : post.id === 'hwangokga'
                            ? 'This work inherits the East Asian tradition of satirical literature while reflecting the unique social conditions of Joseon. The way it uses humor and wit for social criticism represents a valuable contribution to world literature, demonstrating how literature can address social issues through entertainment.'
                            : post.id === 'bukcheonga'
                              ? 'This work inherits the East Asian tradition of popular literature while reflecting the unique social conditions of Joseon. The way it transforms the suffering and resistance of the people into literary expression represents a valuable contribution to world literature, demonstrating the power of literature to give voice to the voiceless.'
                              : post.id === 'gwandong-byeolgok'
                                ? 'This work inherits the East Asian tradition of nature poetry while achieving a uniquely Korean literary accomplishment. The way it harmoniously expresses human emotions through nature represents a valuable contribution to world literature, demonstrating the sophisticated relationship between humanity and the natural world.'
                                : post.id === 'samieungok'
                                  ? 'This work inherits the East Asian tradition of political poetry while reflecting the unique political conditions of Joseon. The way it transforms political loyalty into literary expression represents a valuable contribution to world literature, demonstrating how literature can sublimate political emotions into art.'
                                  : 'This work inherits the East Asian tradition of political poetry while reflecting the unique political conditions of Joseon. The way it transforms political loyalty into genuine love represents a valuable contribution to world literature, demonstrating how literature can sublimate political emotions into the highest form of human expression.'
                        }
                      </p>
                    </div>
                  </Callout>
                </div>
              </div>
            ) : (
              <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    // 이미지 변환을 링크 변환보다 먼저 처리
                    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="my-8"><div class="relative w-full h-auto"><img src="$2" alt="$1" class="rounded-xl shadow-md mx-auto w-full h-auto object-contain" /></div><figcaption class="text-center text-gray-500 mt-2 text-sm">$1</figcaption></figure>')
                    // 링크 변환 (이미지가 아닌 링크만)
                    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-sn-primary hover:text-sn-primary-dark underline font-semibold" target="_blank" rel="noopener noreferrer">$1</a>')
                    // 제목 변환
                    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6 text-gray-900">$1</h1>')
                    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-4 text-gray-800">$1</h2>')
                    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-3 text-gray-700">$1</h3>')
                    .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mb-2 text-gray-700">$1</h4>')
                    // 강조 텍스트 변환
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                    // 문단 처리 - 더 간단하게
                    .split('\n\n')
                    .map(paragraph => {
                      if (paragraph.trim() === '') return '';
                      if (paragraph.startsWith('#')) return paragraph;
                      if (paragraph.startsWith('<figure')) return paragraph;
                      return `<p class="mb-4 text-gray-700 leading-relaxed">${paragraph}</p>`;
                    })
                    .join('')
                }}
              />
            )}
          </div>
        </div>
      </section>

      {/* 구조화된 데이터 */}
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

      {/* AI 학습 데이터 */}
      <AIDataGenerator
        content={{
          title: post.title,
          description: post.excerpt,
          author: post.author,
          category: post.category,
          tags: post.tags || [],
          content: post.content,
          difficulty: 'intermediate',
          subject: '국어',
          learningObjectives: ['고전문학 작품 이해', '수능 국어 감각 향상', '문학적 감상 능력 개발'],
        }}
      />
    </main>
  )
}
