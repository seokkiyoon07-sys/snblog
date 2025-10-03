import Image from 'next/image'
import Link from 'next/link'

export default function SokmieungokPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ← 홈으로
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/originals" className="text-blue-600 hover:text-blue-800">
              SN Originals
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Video Section */}
        <div className="mb-8">
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TQEkvJsu5UY"
              title="조선시대 정철의 속미인곡 - 고전문학 시리즈 6탄"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~" (고전문학 「속미인곡」)
            </h1>
            <div className="flex items-center space-x-4 text-gray-600 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                SN Originals
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                고전문학 시리즈 6탄
              </span>
              <span className="text-sm">2025년 10월 3일</span>
            </div>
          </header>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <p className="text-lg text-blue-900 font-medium mb-2">
              📚 고전문학 시리즈 6탄 - 「속미인곡」
            </p>
            <p className="text-blue-800">
              「속미인곡」을 준비했습니다. 1588~1589년 경 정철이 고향인 전남 창평에 우거하며 「사미인곡」에 이어 지은 가사입니다.
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">작품 개요</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  「속미인곡」은 조선 중기 문인 정철의 마스터피스 중 하나로, 「사미인곡」의 후속작이에요. 
                  정치적 좌절과 고향에 대한 그리움을 연군의 정으로 은유한 이 작품은, 
                  <span className="font-semibold text-blue-600">갑녀와 을녀의 대화</span>라는 독특한 형식으로 우리에게 다가옵니다.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <p className="text-gray-700 leading-relaxed">
                    💫 <strong>왜 특별한가?</strong><br/>
                    을녀(정철 자신)가 갑녀에게 자신의 사연을 털어놓는 방식으로, 
                    임금에 대한 그리움과 정치적 아픔을 여인의 애달픈 마음으로 표현한 
                    <span className="font-semibold text-purple-600">감성적인 자서전</span> 같은 작품이에요.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  단순한 사랑 노래가 아니라, 조선 시대 지식인의 내면을 들여다볼 수 있는 
                  <span className="font-semibold text-indigo-600">문학적 보석</span>이라고 할 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">작품의 매력</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🎭 드라마틱한 대화체</h3>
                  <p className="text-gray-700 leading-relaxed">
                    갑녀와 을녀의 대화를 통해 이야기가 전개되는 독특한 구조! 
                    마치 연극을 보는 것처럼 생생하게 정철의 내면을 엿볼 수 있어요.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-400">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">💔 감성의 깊이</h3>
                  <p className="text-gray-700 leading-relaxed">
                    단순한 사랑 노래가 아닌, 정치적 좌절과 고향에 대한 그리움을 
                    연군의 정으로 은유한 <span className="font-semibold text-pink-600">감성적 자서전</span>이에요.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">✨ 문학적 완성도</h3>
                  <p className="text-gray-700 leading-relaxed">
                    「사미인곡」과의 연관성, 정교한 비유법, 그리고 감정의 절제된 표현까지. 
                    조선 문학의 <span className="font-semibold text-green-600">진수</span>를 만날 수 있는 작품입니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">감상 포인트</h2>
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">대화의 미묘함</h4>
                      <p className="text-gray-700 text-sm">갑녀의 질문과 을녀의 답변 사이의 감정적 교감을 느껴보세요.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💫</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">은유의 아름다움</h4>
                      <p className="text-gray-700 text-sm">정치적 상황을 연군의 정으로 표현한 정철의 문학적 기법을 감상해보세요.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">감정의 절제</h4>
                      <p className="text-gray-700 text-sm">과도한 감정 표현 없이도 전해지는 깊은 아픔과 그리움을 느껴보세요.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">관련 고전문학 시리즈</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/originals/samieungok" className="group">
                <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">사미인곡</h3>
                  <p className="text-sm text-gray-600 mt-1">정철의 대표 가사</p>
                </div>
              </Link>
              <Link href="/originals/gwandong-byeolgok" className="group">
                <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">관동별곡</h3>
                  <p className="text-sm text-gray-600 mt-1">정철의 기행 가사</p>
                </div>
              </Link>
              <Link href="/originals/hwangokga" className="group">
                <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">황옥가</h3>
                  <p className="text-sm text-gray-600 mt-1">고전 가사 작품</p>
                </div>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
