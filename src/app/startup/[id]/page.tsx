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
        
        <h3>🎯 우리의 비전</h3>
        <p>SN은 30년간 축적된 교육 노하우를 바탕으로, AI 기술과 결합하여 혁신적인 교육 솔루션을 제공하고자 합니다. 개별 맞춤형 학습이 가능한 AI 튜터부터 지능형 학습 분석 시스템까지, 교육의 모든 영역에서 혁신을 추구합니다.</p>
        
        <h3>🚀 핵심 기술</h3>
        <ul>
          <li><strong>AI 개별 맞춤 학습:</strong> 각 학생의 학습 패턴을 분석하여 최적화된 학습 경로 제공</li>
          <li><strong>지능형 문제 생성:</strong> 학생의 수준에 맞는 문제를 실시간으로 생성</li>
          <li><strong>학습 분석 대시보드:</strong> 학생과 학부모를 위한 상세한 학습 리포트</li>
          <li><strong>VR/AR 교육 콘텐츠:</strong> 몰입형 학습 경험 제공</li>
        </ul>
        
        <h3>💡 미션과 가치</h3>
        <p>우리는 모든 학생이 자신만의 속도로 학습할 수 있는 환경을 만들고자 합니다. AI가 단순히 기술이 아닌, 교육의 질을 높이는 도구가 되도록 최선을 다하겠습니다.</p>
        
        <h3>🔮 앞으로의 계획</h3>
        <p>2024년 하반기부터 베타 서비스를 시작하여, 2025년 정식 런칭을 목표로 하고 있습니다. SN 학생들을 시작으로 전국의 학생들에게 혁신적인 교육 경험을 제공할 예정입니다.</p>
        
        <div className="bg-sn-primary/5 dark:bg-sn-primary/10 p-6 rounded-lg mt-8">
          <h4 className="text-lg font-semibold mb-3">📞 문의하기</h4>
          <p>SN AI 스타트업에 대한 더 자세한 정보가 필요하시다면 언제든 연락주세요.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            이메일: ai@snacademy.co.kr | 전화: 02-1234-5678
          </p>
        </div>
      </div>
    `,
    date: 'Dec 25, 2024',
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
