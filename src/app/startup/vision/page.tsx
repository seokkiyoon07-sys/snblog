export const metadata = {
  title: 'SN AI 스타트업 비전 | 교육 AI 혁신과 팀 소개',
  description: 'SN Academy AI 스타트업의 비전과 미션, 팀 구성원, AI 제품들을 소개합니다. SNarlink, SNarGPT, SNarGO 등 교육 AI 솔루션과 독학기숙학원, 독학재수학원 정보를 확인하세요.',
  keywords: 'SN AI 스타트업, 교육 AI 비전, SN 팀, AI 제품, SNarlink, SNarGPT, SNarGO, 독학기숙학원, 독학재수학원',
  openGraph: {
    title: 'SN AI 스타트업 비전 | 교육 AI 혁신과 팀 소개',
    description: 'SN Academy AI 스타트업의 비전과 미션, 팀 구성원, AI 제품들을 소개합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function StartupVisionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 text-slate-800 dark:text-slate-200">
      {/* 뒤로가기 버튼 */}
      <div className="px-6 md:px-10 lg:px-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <a 
            href="/startup" 
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors"
          >
            ← SN AI 스타트업으로 돌아가기
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full border border-slate-200 px-4 py-1 text-sm">SN Academy AI Startup</span>
               <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight hover:text-sn-primary transition-colors cursor-pointer leading-relaxed">
                 SN에서<br/>
                 교육 AI 스타트업을 창업했습니다.
               </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-600">
            교육과 AI의 융합으로,<br/>
            학생 개개인의 잠재력을 극대화하는<br/>
            <b>초개인화 학습 혁신</b>을 실현합니다.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-6">
               <div className="rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white">우리의 비전 (Vision)</h2>
                 <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">AI와 자기주도학습의 결합으로, 더 낮은 비용에 학생의 성장을 로켓처럼 가속합니다.</p>
               </div>
          <div className="rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">우리의 미션 (Mission)</h2>
            <ul className="mt-3 space-y-2 leading-relaxed list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>우리는 자기주도학습과 AI를 결합하여 교육의 비용을 낮춥니다.</li>
              <li>학생들에게 초개인화된 학습 경험을 제공합니다.</li>
              <li>학생들의 학습량을 정밀하게 측정하고, 그에 맞는 정확한 솔루션을 제시합니다.</li>
              <li>한국 교육 시장에 혁신적인 AI 학습 도구를 보급합니다.</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              이를 통해 교육의 불균형, 비효율, 정보 격차, 비용 격차를 해소하여 학생들의 입시 성공을 이끌겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold">Our Team</h2>
          <p className="mt-2 text-slate-600">작지만 강력한 팀이 교육의 미래를 다시 씁니다.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { role: '대표(CEO)', desc: '교육 현장 12년 경험,\n전략과 비전을 이끄는 리더' },
              { role: 'AI 개발자 2명', desc: '서울대 박사, 카이스트 수석 졸업자\nLLM, AI 아키텍처' },
              { role: '백엔드 개발자', desc: '안정적인 데이터 처리와\n서버 아키텍처' },
              { role: '마케팅/데이터 분석 1명', desc: '학습 데이터 기반 전략 수립' },
              { role: '디자이너 1명', desc: '직관적이고 감각적인 UX/UI 구현' },
              { role: '프론트엔드 개발자 1명', desc: '웹/앱 인터페이스 개발' },
              { role: '라벨링 전문가 1명', desc: 'AI 학습 데이터셋 구축 및 정제' },
              { role: '운영 인력 1명', desc: '현장 운영 및 사용자 피드백' },
            ].map((m, i) => (
              <article key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <h3 className="font-semibold">{m.role}</h3>
                <p className="mt-2 text-sm text-slate-600 whitespace-pre-line">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold">Our Products</h2>
          <p className="mt-2 text-slate-600">SN 생태계를 구성하는 핵심 AI 제품들입니다.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
                 {/* SN 독학기숙학원 */}
                 <ProductCard
                   name="SN독학기숙학원(양평 남학생점)"
                   tagline="국내 탑티어 독학기숙학원"
                   bullets={[
                     '지난 12년간 압도적 합격률',
                     '순수독학기숙의 명가',
                     '여학생 캠퍼스는 추후 오픈 예정',
                   ]}
                   tag="학원"
                 />

                 {/* SN 독학재수학원 */}
                 <ProductCard
                   name="SN 독학재수학원 (대치점) 예정"
                   tagline="2026년도 신규 론칭"
                   bullets={[
                     '수학 및 AI 특화관',
                     '최신 교육 시설과 시스템',
                     '개인별 맞춤형 학습 프로그램',
                   ]}
                   tag="학원"
                 />

            {/* SNarlink */}
            <ProductCard 
              name="SNarlink" 
              tagline="초정밀 학습 분석 방화벽 시스템"
              bullets={[
                '온라인 학습 활동을 데이터화하여 집중도 측정',
                '학부모/교사에게 투명한 리포트 제공',
              ]}
            />

            {/* SNarGPT */}
            <ProductCard 
              name="SNarGPT" 
              tagline="ChatGPT 기반의 해설 AI"
              bullets={[
                'ChatGPT를 기반으로 한 대화형 해설 시스템',
                '학생과 자연스러운 대화로 개념 설명',
                '질문과 답변을 통한 학습 지원',
              ]}
            />

            {/* SNarGO */}
            <ProductCard 
              name="SNarGO" 
              tagline="수능 문제 풀이 전문 AI (정확도 99.9%)"
              bullets={[
                '수능 문제를 99.9% 정확도로 해결',
                '평가원 기출부터 최신 모의고사까지 정밀 분석',
                '단순 풀이가 아닌 개념 이해 중심 해설',
              ]}
            />

            {/* SNarGEN */}
            <ProductCard 
              name="SNarGEN" 
              tagline="기존 교육 업체의 1% 비용으로 고퀄 문제 생성"
              bullets={[
                '평가원 수준의 문항 자동 생성',
                '콘텐츠 제작의 패러다임 전환',
              ]}
            />

            {/* SNarOCR */}
            <ProductCard 
              name="SNarOCR" 
              tagline="촬영만 하면 자동 인식·분석하는 시험지 OCR"
              bullets={[
                '문제 영역 자동 인식 및 정규화',
                '문제은행 연동으로 즉시 학습 관리',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">교육의 새로운 패러다임을 설계합니다.</h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>우리는 작은 팀이지만, 변화의 파급력은 결코 작지 않을 것입니다.</p>
            <p>AI는 학생들의 학습량을 정밀하게 측정하고 맞춤형 솔루션을 제공합니다. 어떤 수능 문제든 풀어낼 수 있으며, 학생들은 이해되지 않는 부분을 반복해서 언제든 질문할 수 있습니다. 또한 평가원 급 수준의 문제를 AI가 직접 생성할 수도 있습니다.</p>
            <p>이를 통해 학생들은 기존 교육비의 <b>50%로도 AI를 활용해 성장 잠재력을 가속화하고, 지적으로 도약하며, 입시에서 성공</b>할 것입니다.</p>
            <p className="text-lg font-semibold text-slate-800">이것이 우리의 단 하나의 목표입니다.</p>
          </div>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <span className="text-sm">SN Academy AI</span>
            <span className="text-slate-300">•</span>
            <span className="text-sm">초개인화 학습 혁신</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 lg:px-16 pb-12">
        <div className="mx-auto max-w-5xl text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SN Academy AI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

     function ProductCard({ name, tagline, bullets, tag = "AI" }: { name: string; tagline: string; bullets: string[]; tag?: string }) {
       return (
         <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
           <div className="flex items-center justify-between">
             <h3 className="text-lg font-semibold">{name}</h3>
             <span className="rounded-full border border-slate-200 px-3 py-1 text-xs">{tag}</span>
           </div>
      <p className="mt-2 text-sm text-slate-600">{tagline}</p>
      <ul className="mt-4 space-y-1 list-disc pl-5 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
