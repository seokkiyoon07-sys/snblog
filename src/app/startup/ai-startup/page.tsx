import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.snacademy.co.kr"),
  title: 'SN에서 교육 AI 스타트업을 창업했습니다 | SN Academy Blog',
  description: '교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 초개인화 학습 혁신을 실현하는 SN Academy AI 스타트업을 소개합니다.',
  alternates: { 
    canonical: "/startup/ai-startup" 
  },
  openGraph: {
    title: 'SN에서 교육 AI 스타트업을 창업했습니다',
    description: '교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 초개인화 학습 혁신을 실현하는 SN Academy AI 스타트업을 소개합니다.',
    type: 'article',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/startup/ai-startup',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&crop=center',
        width: 1200,
        height: 630,
        alt: 'SN Academy AI 스타트업 - 교육과 AI의 융합',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN에서 교육 AI 스타트업을 창업했습니다',
    description: '교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 초개인화 학습 혁신을 실현합니다.',
    images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&crop=center'],
  },
  robots: { 
    index: true, 
    follow: true 
  },
};

export default function AIStartupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* 뒤로가기 버튼 */}
      <div className="px-6 md:px-10 lg:px-16 pt-8">
        <div className="mx-auto max-w-6xl">
          <Link 
            href="/startup" 
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors font-medium text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            AI 스타트업으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16 relative overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sn-primary/10 text-sn-primary text-xs font-medium mb-4">
              🚀 AI 스타트업
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              SN에서 교육 AI 스타트업을
              <span className="block text-sn-primary">창업했습니다</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는<br />
              <span className="font-semibold text-sn-primary">초개인화 학습 혁신</span>을 실현합니다
            </p>
            
            {/* 통계 카드들 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                <div className="text-2xl font-bold text-sn-primary mb-1">8명</div>
                <div className="text-slate-600 text-sm">강력한 팀</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                <div className="text-2xl font-bold text-sn-primary mb-1">5개</div>
                <div className="text-slate-600 text-sm">AI 제품</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                <div className="text-2xl font-bold text-sn-primary mb-1">12년</div>
                <div className="text-slate-600 text-sm">교육 경험</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 배경 장식 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sn-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* 혁신적인 교육 AI 솔루션 */}
      <section className="px-6 md:px-10 lg:px-16 py-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              🚀 혁신적인 교육 AI 솔루션
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              SN Academy는 교육 분야의 혁신을 위해 AI 스타트업을 창업했습니다.<br />
              우리의 목표는 모든 학습자가 자신만의 맞춤형 학습 경험을 할 수 있도록 하는 것입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="px-6 md:px-10 lg:px-16 py-12 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              🎯 핵심 가치
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 초개인화 학습 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-sn-primary to-sn-primary-dark rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">초개인화 학습</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sn-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">각 학습자의 학습 패턴과 속도를 분석</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sn-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">개인별 최적화된 학습 경로 제공</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sn-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">실시간 학습 진도 추적 및 피드백</span>
                </li>
              </ul>
            </div>

            {/* AI 기반 교육 기술 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI 기반 교육 기술</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">자연어 처리 기술을 활용한 질문-답변 시스템</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">학습 내용 이해도 자동 평가</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">개인별 학습 약점 분석 및 보완 방안 제시</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 비전과 미션 */}
      <section className="px-6 md:px-10 lg:px-16 py-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 비전 */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🌟 우리의 비전</h3>
              <blockquote className="text-lg font-semibold text-slate-700 italic leading-relaxed">
                "AI로 학생의 미래를 더 깊고, 더 정확하게, 더 빠르게 열어주는 것."
              </blockquote>
            </div>

            {/* 미션 */}
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🎯 우리의 미션</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">교육의 <strong>불균형·비효율·정보 격차</strong>를 해소합니다</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">학생에게는 <strong>맞춤형 학습 경험</strong>을 제공합니다</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">교사·학부모에게는 <strong>투명한 학습 데이터 분석</strong>을 제공합니다</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 text-sm">교육 시장에는 <strong>혁신적인 AI 도구</strong>를 제공합니다</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 팀 섹션 */}
      <section className="px-6 md:px-10 lg:px-16 py-12 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              👥 Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              작지만 강력한 팀이 교육의 미래를 다시 씁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { role: "대표 (CEO)", desc: "교육 현장 12년 경험, 전략과 비전을 이끄는 리더", icon: "👨‍💼" },
              { role: "AI 개발자 2명", desc: "대규모 언어모델과 AI 솔루션 연구", icon: "🤖" },
              { role: "백엔드 개발자 1명", desc: "안정적인 데이터 처리와 서버 아키텍처", icon: "⚙️" },
              { role: "마케팅/데이터 분석 1명", desc: "학습 데이터 기반 전략 수립", icon: "📊" },
              { role: "디자이너 1명", desc: "직관적이고 감각적인 UX/UI 구현", icon: "🎨" },
              { role: "프론트엔드 개발자 1명", desc: "웹/앱 인터페이스 개발", icon: "💻" },
              { role: "라벨링 전문가 1명", desc: "AI 학습 데이터셋 구축 및 정제", icon: "🏷️" },
              { role: "운영 인력 1명", desc: "현장 운영 및 사용자 피드백", icon: "🔧" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-2xl mb-2">{member.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">{member.role}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 제품 섹션 */}
      <section className="px-6 md:px-10 lg:px-16 py-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              🛠️ Our Products
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              SN 생태계를 구성하는 핵심 AI 제품들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                name: "SNarlink",
                icon: "🔗",
                title: "초정밀 학습 분석 방화벽 시스템",
                features: [
                  "온라인 학습 활동을 데이터화하여 집중도 측정",
                  "학부모/교사에게 투명한 리포트 제공"
                ],
                color: "from-purple-500 to-purple-600"
              },
              {
                name: "SNarGPT",
                icon: "🤖",
                title: "수능 수학 문제를 99%+ 정확도로 풀이",
                features: [
                  "정확한 개념 설명과 단계별 풀이",
                  "실제 수험생에게 필요한 피드백 제공"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                name: "SNarGO",
                icon: "🎯",
                title: "수능문제 풀이 전문 AI",
                features: [
                  "평가원 기출부터 최신 모의고사까지 정밀 해설",
                  "원하는 방식으로 빠르고 정확한 풀이"
                ],
                color: "from-green-500 to-green-600"
              },
              {
                name: "SNarGEN",
                icon: "⚡",
                title: "기존 교육 업체의 1% 비용으로 고퀄 문제 생성",
                features: [
                  "평가원 수준의 문항 자동 생성",
                  "콘텐츠 제작의 패러다임 전환"
                ],
                color: "from-yellow-500 to-orange-500"
              },
              {
                name: "SNarOCR",
                icon: "📱",
                title: "촬영만 하면 자동 인식·분석하는 시험지 OCR",
                features: [
                  "문제 영역 자동 인식 및 정규화",
                  "문제은행 연동으로 즉시 학습 관리"
                ],
                color: "from-pink-500 to-pink-600"
              }
            ].map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mr-3 flex-shrink-0`}>
                    <span className="text-lg">{product.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                    <p className="text-sm font-semibold text-slate-700">{product.title}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${product.color} rounded-full mt-2 mr-2 flex-shrink-0`}></div>
                      <span className="text-slate-600 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 마무리 섹션 */}
      <section className="px-6 md:px-10 lg:px-16 py-12 bg-gradient-to-br from-sn-primary to-sn-primary-dark text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            🌟 교육의 새로운 패러다임을 설계합니다
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            우리는 작은 팀이지만 변화의 파급력은 결코 작지 않습니다.<br />
            우리의 목표는 단 하나, <strong>모든 학생이 자신만의 맞춤형 학습 여정</strong>을 걷도록 돕는 것입니다.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white text-sn-primary font-bold text-base rounded-xl hover:bg-slate-100 transition-colors">
            SN Academy AI · 초개인화 학습 혁신
          </div>
        </div>
      </section>
    </main>
  )
}