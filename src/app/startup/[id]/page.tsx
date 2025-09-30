export default function StartupDetailPage({ params }: { params: { id: string } }) {
  const postId = params.id;
  
  // 실제로는 API에서 데이터를 가져오겠지만, 여기서는 하드코딩
  const post = {
    id: 1,
    title: 'SN에서 교육 AI 스타트업을 만들었습니다.',
    content: `
      <div className="prose prose-lg max-w-none">
        <h2>SN의 새로운 도전: 교육 AI 스타트업</h2>
        
        <p>독학기숙학원의 명가 SN에서 이번에 새롭게 에듀테크 AI를 만들었습니다. 우리의 비전, 앞으로의 미션 등을 소개합니다.</p>
        
        <h3>🎯 우리의 비전 (Vision)</h3>
        <p>SN Academy는 지난 10여 년간 수많은 학생들과 함께하며, 교육의 본질은 <strong>"개인의 잠재력을 끝까지 끌어내는 것"</strong>임을 배워왔습니다.</p>
        <p>이제 우리는 교육 경험과 AI 기술을 결합해, 단순한 학습을 넘어 초개인화 학습 혁신을 실현하고자 합니다.</p>
        <div className="bg-sn-primary/5 dark:bg-sn-primary/10 p-4 rounded-lg my-6">
          <p className="text-lg font-semibold text-sn-primary dark:text-sn-primary-light mb-0">
            👉 "AI로 학생의 미래를 더 깊고, 더 정확하게, 더 빠르게 열어주는 것"
          </p>
        </div>
        
        <h3>💡 우리의 미션 (Mission)</h3>
        <p>우리는 교육에서 반복되던 불균형, 비효율, 정보 격차를 해소합니다.</p>
        <ul>
          <li><strong>학생에게는</strong> 맞춤형 학습 경험을,</li>
          <li><strong>교사와 학부모에게는</strong> 투명한 학습 데이터 분석을,</li>
          <li><strong>교육 시장에는</strong> 혁신적인 AI 도구를 제공합니다.</li>
        </ul>
        
        <h3>👥 팀 구성원</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-sn-primary dark:text-sn-primary-light">대표 (CEO)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">교육 현장 20년 경험, 전략과 비전을 이끄는 리더</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-sn-primary dark:text-sn-primary-light">AI 개발자 2명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">대규모 언어모델과 AI 솔루션 연구</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-sn-primary dark:text-sn-primary-light">백엔드 개발자 1명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">안정적인 데이터 처리와 서버 아키텍처 담당</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-sn-primary dark:text-sn-primary-light">마케팅/데이터 분석 1명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">학습 데이터 기반 전략 수립</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-sn-primary dark:text-sn-primary-light">디자이너 1명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">직관적이고 감각적인 UX/UI 구현</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-sn-primary dark:text-sn-primary-light">프론트엔드 개발자 1명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">학생과 학부모가 직접 만나는 웹/앱 서비스 개발</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-sn-primary dark:text-sn-primary-light">라벨링 전문가 1명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI 학습 데이터셋 구축 및 정제</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-sn-primary dark:text-sn-primary-light">운영 인력 1명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">현장 운영 및 사용자 피드백 관리</p>
          </div>
        </div>
        
        <h3>🚀 우리가 만드는 제품들</h3>
        
        <div className="space-y-6 my-8">
          <div className="border-l-4 border-sn-primary pl-4">
            <h4 className="text-xl font-bold text-sn-primary dark:text-sn-primary-light mb-2">SNarlink</h4>
            <p>학생들의 온라인 학습 활동을 데이터화하는 초정밀 학습 분석 방화벽 시스템. 학습 집중도를 객관적으로 측정하고, 부모와 교사에게 투명하게 제공합니다.</p>
          </div>
          
          <div className="border-l-4 border-sn-primary pl-4">
            <h4 className="text-xl font-bold text-sn-primary dark:text-sn-primary-light mb-2">SNarGPT</h4>
            <p>수능 수학 문제를 99% 이상의 정확도로 풀어내는 맞춤형 AI 튜터. 단순한 대화형 AI가 아니라, 실제 수험생이 필요로 하는 정확한 개념 설명과 단계별 풀이를 제공합니다.</p>
          </div>
          
          <div className="border-l-4 border-sn-primary pl-4">
            <h4 className="text-xl font-bold text-sn-primary dark:text-sn-primary-light mb-2">SNarGO</h4>
            <p>수능문제 풀이 전문 AI. 평가원 기출부터 최신 모의고사까지 정확하게 분석하고, 수험생이 원하는 방식으로 문제를 해설합니다.</p>
          </div>
          
          <div className="border-l-4 border-sn-primary pl-4">
            <h4 className="text-xl font-bold text-sn-primary dark:text-sn-primary-light mb-2">SNarGEN</h4>
            <p>기존 교육 업체의 1% 비용으로 평가원 수준의 고퀄리티 문제를 생성하는 AI. 교육 콘텐츠 제작의 패러다임을 바꿉니다.</p>
          </div>
          
          <div className="border-l-4 border-sn-primary pl-4">
            <h4 className="text-xl font-bold text-sn-primary dark:text-sn-primary-light mb-2">SNarOCR</h4>
            <p>시험지를 카메라로 찍기만 하면 문제 영역을 자동 인식하고 분석하는 AI OCR 시스템. 문제은행과 연동되어 학습 관리에 즉시 활용됩니다.</p>
          </div>
        </div>
        
        <h3>🎯 마무리</h3>
        <p>SN Academy AI 스타트업은 아직 작은 팀이지만, 우리가 만드는 변화의 물결은 결코 작지 않습니다.</p>
        <p>우리의 최종 목표는 단 하나.</p>
        
        <div className="bg-sn-primary/5 dark:bg-sn-primary/10 p-6 rounded-lg my-8">
          <p className="text-xl font-bold text-sn-primary dark:text-sn-primary-light mb-4">
            👉 "모든 학생이 자신만의 맞춤형 학습 여정을 걸을 수 있도록 돕는 것"
          </p>
          <p className="text-lg font-semibold">
            SN Academy AI – 교육의 새로운 패러다임을 설계합니다.
          </p>
        </div>
        
        <div className="bg-sn-primary/5 dark:bg-sn-primary/10 p-6 rounded-lg mt-8">
          <h4 className="text-lg font-semibold mb-3">📞 문의하기</h4>
          <p>SN AI 스타트업에 대한 더 자세한 정보가 필요하시다면 언제든 연락주세요.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            이메일: ai@snacademy.co.kr | 전화: 02-1234-5678
          </p>
        </div>
      </div>
    `,
    date: 'Sep 25, 2025',
    readTime: '10 min read',
    tags: ['SN AI 스타트업', '에듀테크', 'AI교육', '비전'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    category: 'SN AI 스타트업'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 뒤로가기 버튼 */}
      <div className="mb-6">
        <a 
          href="/startup" 
          className="inline-flex items-center text-sn-primary dark:text-sn-primary-light hover:text-sn-primary-dark dark:hover:text-sn-primary transition-colors"
        >
          ← SN AI 스타트업으로 돌아가기
        </a>
      </div>

      {/* 포스트 헤더 */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-sm font-medium bg-sn-primary/10 dark:bg-sn-primary/20 text-sn-primary dark:text-sn-primary-light rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 mb-6">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category}</span>
        </div>
        
        {/* 썸네일 */}
        <div className="w-full h-64 lg:h-80 mb-8 overflow-hidden rounded-lg">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* 포스트 내용 */}
      <article 
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
