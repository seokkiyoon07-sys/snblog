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
              📚 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄
            </p>
            <p className="text-blue-800">
              「속미인곡」을 준비했습니다. 1588~1589년 경 정철이 고향인 전남 창평에 우거하며 「사미인곡」에 이어 지은 가사입니다.
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">작품 개요</h2>
              <p className="text-gray-700 leading-relaxed">
                「속미인곡」은 정철이 「사미인곡」에 이어 지은 가사로, 연군의 정을 임을 이별한 여인의 애달픈 심정에 비하여 표현한 작품입니다. 
                갑녀와 을녀의 대화 형식으로 이야기를 풀어내어 자신(을녀)의 사연과 사모의 정을 구슬프게 표현한 특별한 작품입니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">작품의 특징</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">대화 형식</h3>
                  <p className="text-gray-700">
                    갑녀와 을녀의 대화를 통해 작품의 내용을 전개하는 독특한 구조를 가지고 있습니다.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">연군의 정</h3>
                  <p className="text-gray-700">
                    임을 그리워하는 여인의 마음을 통해 작가의 정치적 고뇌를 표현했습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">수능 출제 포인트</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">핵심 키워드</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• <strong>대화체 가사:</strong> 갑녀와 을녀의 대화 형식</li>
                  <li>• <strong>연군의 정:</strong> 임에 대한 그리움과 사모의 정</li>
                  <li>• <strong>정치적 은유:</strong> 정치적 상황을 연군의 정으로 표현</li>
                  <li>• <strong>사미인곡과의 연관성:</strong> 연작 가사의 특징</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">학습 팁</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <ol className="space-y-3 text-green-700">
                  <li><strong>1단계:</strong> 갑녀와 을녀의 대화 내용을 정확히 파악하세요.</li>
                  <li><strong>2단계:</strong> 연군의 정이 정치적 상황을 은유한 것임을 이해하세요.</li>
                  <li><strong>3단계:</strong> 「사미인곡」과의 차이점을 비교해보세요.</li>
                  <li><strong>4단계:</strong> 작품의 감정적 흐름을 따라가며 감상하세요.</li>
                </ol>
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
