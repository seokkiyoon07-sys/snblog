// 📝 포스트 메타데이터. 콘텐츠는 content/{category}/{id}.html 에 별도 저장.
// 콘텐츠 로딩: import { loadPostContent } from '@/lib/post-content';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // 런타임에 loadPostContent(id)로 로딩
  category: string;
  layoutVariant?: 'default' | 'original-only';
  subcategory?:
    | 'update'
    | 'tech-blog'
    | 'reading'
    | 'literature'
    | 'language-media'
    | 'speech-writing'
    | 'column-korean'
    | 'math1'
    | 'math2'
    | 'probability-stats'
    | 'calculus'
    | 'geometry'
    | 'column-math'
    | 'life-ethics'
    | 'ethics-thought'
    | 'korea-geo'
    | 'world-geo'
    | 'east-asia-history'
    | 'world-history'
    | 'economics'
    | 'politics-law'
    | 'society-culture'
    | 'physics1'
    | 'physics2'
    | 'chemistry1'
    | 'chemistry2'
    | 'life-science1'
    | 'life-science2'
    | 'earth-science1'
    | 'earth-science2';
  tags?: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  featuredOrder?: number;
  published: boolean;
  thumbnail?: string;
  youtubeUrl?: string;
  url: string;
  type?: 'standard' | 'special';
  badge?: string;
  problemFileUrl?: string;
  problemDataId?: string;
}

export const allPosts: Post[] = [
  {
    id: 'flower',
    title:
      '하늘이 끝난 곳에서도, 꽃은 빨갛게 피니까 | EBS 2027 수능특강 현대시 「꽃」',
    excerpt:
      '하늘이 끝난 동방의 절망 속에서도 광복의 신념을 굽히지 않았던 이육사의 저항시 「꽃」. 선명한 색채 대비와 비장한 생명력을 함께 읽어봅니다.',
    category: 'SN Originals',
    tags: [
      '이육사',
      '저항시인',
      '꽃',
      '꽃맹아리',
      '꽃성',
      '툰드라',
      '제비떼',
      'EBS수능특강',
      '현대시',
      '수능국어',
    ],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a2_flower.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=YECuJmiTID0',
    url: '/originals/flower',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'yousanga',
    title:
      '[EBS 2027 수능특강 국어 고전시가 「유산가」 해석] 머리 복잡할 때 틀어두는 고전 감성',
    excerpt:
      '조선 후기 잡가의 백미 「유산가」. 봄날 산천을 노니는 한 폭의 풍경화 같은 노래, 머리 복잡할 때 틀어두는 고전 감성으로 만나봅니다.',
    category: 'SN Originals',
    tags: ['유산가', '잡가', '고전시가', '고전문학', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_yousanga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=yDLYw8kDFHk',
    url: '/originals/yousanga',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'wolgokdapga',
    title:
      '[EBS 2027 수능특강 국어 고전시가 「월곡답가」 해석] 세상은 몰라도 그 사람은 나를 알아주었다',
    excerpt:
      '세상이 나를 몰라도 그 한 사람은 나를 알아주었다. 「월곡답가」가 전하는 깊고 단단한 사람살이의 위로를 함께 읽어봅니다.',
    category: 'SN Originals',
    tags: ['월곡답가', '고전시가', '고전문학', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_wallgok.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=Q-W5Jr4-vKE',
    url: '/originals/wolgokdapga',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'jeongneung',
    title: '건강의 소중함을 | EBS 2027 수능특강 문학 「정릉 살면서」',
    excerpt:
      '평범한 일상 속에서야 비로소 알게 되는 건강의 소중함. 「정릉 살면서」를 통해 일상의 무게와 감사를 함께 읽어봅니다.',
    category: 'SN Originals',
    tags: ['정릉살면서', '문학', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a2_lost.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=MbTlL0YYxFw',
    url: '/originals/jeongneung',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'geubang',
    title:
      '실망의 가벼움을 재산으로 삼는다는 것 | EBS 2027 수능특강 문학 「그 방을 생각하며」',
    excerpt:
      '김수영의 「그 방을 생각하며」. 실망의 가벼움을 자신의 재산으로 삼는다는, 일상의 깊은 자각을 따라가 봅니다.',
    category: 'SN Originals',
    tags: ['그방을생각하며', '김수영', '현대시', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_the_room.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=FvXCWqjpNCw',
    url: '/originals/geubang',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'leehwajeon',
    title:
      '역대급 미모의 귀비, 알고보니 털 날리는 요괴? 이화의 참교육 레벨 ㄷㄷ | 수능 고전문학 「이화전」',
    excerpt:
      '미모로 모두를 홀린 귀비의 정체는? 이화의 통쾌한 참교육 한 판이 펼쳐지는 고전소설 「이화전」, 수능 고전문학으로 살펴봅니다.',
    category: 'SN Originals',
    tags: ['이화전', '고전소설', '고전문학', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/leehwa_thumbnail_a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=JUGaq2hTyfA',
    url: '/originals/leehwajeon',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'dalbam',
    title: '달밤에 지독하게 센치한 실존적 고뇌 | EBS 2027 수능특강 현대시 「달밤」',
    excerpt:
      '달빛 아래 깊어지는 실존적 고뇌. 「달밤」 속 화자가 마주한 밤과 자아의 풍경을 함께 따라가 봅니다.',
    category: 'SN Originals',
    tags: ['달밤', '현대시', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/moon_night_thumbnail a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=T2Ys2l2rC-4',
    url: '/originals/dalbam',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'myeonuribappulkkot',
    title:
      '억눌린 설움을 딛고 일어서는 민중의 생명력 | EBS 2027 수능특강 문학 「며느리밥풀꽃」',
    excerpt:
      '억눌린 설움을 딛고 피어나는 민중의 생명력. 「며느리밥풀꽃」이 들려주는 이야기를 함께 풀어봅니다.',
    category: 'SN Originals',
    tags: ['며느리밥풀꽃', '시', '문학', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a1_stepdauther.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=25z67jjqhXo',
    url: '/originals/myeonuribappulkkot',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'imjinrok',
    title:
      '조선판 어벤져스 총출동 ㄷㄷ 역사책인 줄 알았는데 판타지물이었음 | EBS 2027 수능특강 고전소설 「임진록」',
    excerpt:
      '조선판 어벤져스의 총출동? 역사와 판타지가 뒤섞인 고전소설 「임진록」. 수능 고전문학으로 만나봅니다.',
    category: 'SN Originals',
    tags: ['임진록', '고전소설', '고전문학', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a1_imjin.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=frw-9SV-4KM',
    url: '/originals/imjinrok',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'sachinga',
    title:
      '이거 보고 오늘 부모님께 전화했습니다 | EBS 2027 수능특강 국어 고전 가사 「사친가」',
    excerpt:
      '부모를 그리워하는 절절한 마음을 담은 「사친가」. 한 번 읽고 나면 부모님 생각이 사무치는 고전 가사를 함께 만나봅니다.',
    category: 'SN Originals',
    tags: ['사친가', '가사', '고전시가', '고전문학', 'EBS수능특강', '수능국어'],
    author: 'SI KIM',
    date: '2026-04-30',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a1_sachin.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=HS9Jwhcy9i4',
    url: '/originals/sachinga',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'oweolsosik',
    title:
      '「오월 소식」 해설] 연락 한 번에 마음이 출항했다\nEBS 2027 수능특강 국어 현대시',
    excerpt:
      '정지용의 현대시 「오월 소식」. 강화도로 떠난 이에게서 온 편지 한 통이 화자의 마음을 바다로 이끌어가는, 모더니즘적 서정이 빛나는 작품입니다.',
    category: 'SN Originals',
    tags: [
      '오월소식',
      '정지용',
      '현대시',
      '모더니즘',
      'EBS수능특강',
      '수능국어',
    ],
    author: 'SI KIM',
    date: '2026-03-27',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/maynews.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=WMICWg1manE',
    url: '/originals/oweolsosik',
    layoutVariant: 'original-only',
    type: 'special',
  },
  {
    id: 'snargpt-why-ai-tutor',
    title: 'ChatGPT로 수능 공부? 왜 제대로 안 되는지 알려드립니다',
    excerpt:
      '독학을 한다는 것, 혼자 모든 걸 해결한다는 뜻이 아니니까. 질문 하나의 맥락부터 약점 분석, 복습 설계까지 — SNarGPT가 공부의 전체 흐름을 함께 설계하는 이유를 이야기합니다.',
    category: 'startup',
    subcategory: 'tech-blog',
    tags: [
      'SNarGPT',
      'AI튜터',
      '수능AI',
      '독학기숙학원',
      '자기주도학습',
      '에듀테크',
      'SN독학기숙학원',
    ],
    author: 'SN독학기숙학원',
    date: '2026-03-22',
    readTime: '8',
    featured: true,
    featuredOrder: 1,
    published: true,
    thumbnail: '/images/thumbnail/startup/snargpt-why-ai-tutor.png',
    url: '/startup/snargpt-why-ai-tutor',
  },
  {
    id: 'farfrom-suneung-ai',
    title: '수능 AI는 아직 멀었다고요? 그 말은 틀리지 않습니다',
    excerpt:
      '범용 챗봇의 한계를 수능 AI 전체의 한계로 보면 오해가 생깁니다. 이미 강한 영역, 조건이 갖춰질수록 강해지는 영역, 사람의 검증이 필요한 영역을 나눠 봅니다.',
    category: 'startup',
    subcategory: 'tech-blog',
    tags: [
      'SNarGPT',
      '수능AI',
      'AI튜터',
      '에듀테크',
      '오답분석',
      '학습전략',
      'SN독학기숙학원',
    ],
    author: 'SN독학기숙학원',
    date: '2026-04-10',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail: '/images/startup/farfromSuneungAI.png',
    url: '/startup/farfrom-suneung-ai',
  },
  {
    id: 'sntk-math1-level3-free',
    title: '2027 수능특강 Level.3 변형문제, 오늘부터 무료 공개합니다',
    excerpt:
      '수능특강 지문을 기반으로 출제 가능한 고난도 유형으로 재구성한 Level.3 변형문제를 무료로 공개합니다. 단순 복습이 아닌, 실전 사고력 훈련을 위한 자료입니다.',
    category: 'problem-download',
    subcategory: 'math1',
    tags: ['수능특강', '수학', '수학1', '변형문제', 'Level3', '2027', '무료'],
    author: 'SN독학기숙학원',
    date: '2026-02-14',
    readTime: '3',
    featured: true,
    featuredOrder: 2,
    published: true,
    thumbnail: '/images/thumbnail/problem-download/thumbnail_SNTK_log.png',
    url: '/problem-download/sntk-math1-level3-free',
    problemFileUrl: '/problems/sntk-math1-level3.html',
    problemDataId: 'sntk-math1-level3',
  },
  {
    id: 'snargpt-korean-rag-16000',
    title: '[업뎃] SNarGPT 국어 RAG 16,000 문항 업데이트 공지',
    excerpt:
      'SNarGPT 국어 영역 대규모 업데이트. 수능·평가원·교육청 모의고사 전 지문 및 전 문항 약 16,000건을 RAG 기반 데이터베이스로 구축 완료하였습니다.',
    category: 'startup',
    subcategory: 'update',
    tags: [
      'AI',
      'SNarGPT',
      'RAG',
      '국어',
      '기출',
      '업데이트',
      'SN독학기숙학원',
      'SN고요의숲',
    ],
    author: 'SN Academy',
    date: '2026-02-07',
    readTime: '3',
    featured: true,
    featuredOrder: 3,
    published: true,
    thumbnail: '/images/thumbnail/startup/Korean_RAG_16000.png',
    url: '/startup/snargpt-korean-rag-16000',
  },
  {
    id: 'snargpt-rag-english-16000',
    title: '[공지] SNarGPT 영어 RAG 16,000 문항 업데이트',
    excerpt:
      'SNarGPT의 RAG 시스템에 영어 약 16,000문항이 추가되었습니다. 평가원·교육청 모의고사 및 주요 기출을 전수 수록해, "해석은 되는데 왜 답인지"를 근거 문장과 논리 구조로 답해줍니다.',
    category: 'startup',
    subcategory: 'update',
    tags: [
      'AI',
      'SNarGPT',
      'RAG',
      '영어',
      '기출',
      '업데이트',
      'SN독학기숙학원',
      'SN고요의숲',
    ],
    author: 'SN Academy',
    date: '2026-04-15',
    readTime: '4',
    featured: true,
    featuredOrder: 1,
    published: true,
    thumbnail: '/images/thumbnail/startup/English_RAG_16000.png',
    url: '/startup/snargpt-rag-english-16000',
  },
  {
    id: 'snargpt-rag-society-5000',
    title: '[공지] SNarGPT 사회문화 RAG 5,000 문항 업데이트',
    excerpt:
      'SNarGPT의 RAG 시스템에 사회문화 약 5,000문항이 추가되었습니다. 도표·통계 문항을 기준값·층위 단위로 풀어주고, "층위 혼동" 함정을 기출 근거로 분리해 설명합니다.',
    category: 'startup',
    subcategory: 'update',
    tags: [
      'AI',
      'SNarGPT',
      'RAG',
      '사회문화',
      '탐구',
      '기출',
      '업데이트',
      'SN독학기숙학원',
      'SN고요의숲',
    ],
    author: 'SN Academy',
    date: '2026-04-15',
    readTime: '4',
    featured: true,
    featuredOrder: 2,
    published: true,
    thumbnail: '/images/thumbnail/startup/socialculture_RAG_5000.png',
    url: '/startup/snargpt-rag-society-5000',
  },
  {
    id: 'ai-korean-reading-ep1',
    title: 'AI가 수능 국어문제를 만든다면? - 1편',
    excerpt:
      'SN독학기숙학원(SN고요의숲)에서 자체 개발한 AI 출제 엔진 SNarGEN으로 평가원형 국어 독서 지문을 생성합니다. 5개년 수능 기출을 역분해하여 출제 원칙을 추출하고, 6개의 AI가 만들고 검증하는 파이프라인을 구축했습니다.',
    category: 'korean-problem',
    subcategory: 'column-korean',
    tags: [
      '국어',
      '독서',
      'AI출제',
      'SNarGEN',
      '평가원형',
      '수능',
      'SN독학기숙학원',
      'SN고요의숲',
      'SN고요의숲 독학재수',
      '독학재수학원',
    ],
    author: 'SN독학기숙학원',
    date: '2026-02-07',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail:
      '/images/thumbnail/problem-download/AI_korean_Generation_sample.png',
    url: '/problem-download/ai-korean-reading-ep1',
  },
  {
    id: 'ai-korean-reading-ep2',
    title: 'AI가 수능 국어문제를 만든다면? - 2편 법 지문',
    excerpt:
      'AI는 평가원형 법 지문을 어떻게 설계하는가. 실제 수능 기출을 역분해해 법 지문 출제 원칙 10가지를 추출하고, 기술 지문과의 설계 문법 차이를 분석합니다.',
    category: 'korean-problem',
    subcategory: 'column-korean',
    tags: [
      '국어',
      '독서',
      '법지문',
      'AI출제',
      'SNarGEN',
      '평가원형',
      '수능',
      'SN독학기숙학원',
      'SN고요의숲',
      'SN고요의숲 독학재수',
      '독학재수학원',
    ],
    author: 'SN독학기숙학원',
    date: '2026-04-07',
    readTime: '10',
    featured: false,
    published: true,
    thumbnail:
      '/images/thumbnail/problem-download/AI_korean_generation_law.png',
    url: '/problem-download/ai-korean-reading-ep2',
  },
  {
    id: 'ai-korean-reading-ep3',
    title: 'AI가 수능 국어문제를 만든다면? - 3편 경제 지문',
    excerpt:
      'AI는 평가원형 경제 지문을 어떻게 설계하는가. 정의를 변수로, 관계를 조건부·피드백으로, 오답을 "결정 조건 1개"로 만드는 평가원의 출제코드를 역분해하고 SNarGEN의 적용 원칙을 정리합니다.',
    category: 'korean-problem',
    subcategory: 'column-korean',
    tags: [
      '국어',
      '독서',
      '경제지문',
      'AI출제',
      'SNarGEN',
      '평가원형',
      '수능',
      'SN독학기숙학원',
      'SN고요의숲',
      'SN고요의숲 독학재수',
      '독학재수학원',
    ],
    author: 'SN독학기숙학원',
    date: '2026-04-15',
    readTime: '10',
    featured: false,
    published: true,
    thumbnail:
      '/images/thumbnail/problem-download/AI_korean_generation_economic.png',
    url: '/problem-download/ai-korean-reading-ep3',
  },
  {
    id: 'growing-vs-stagnant',
    title: '성적이 오르는 학생\nvs. 제자리인 학생\n결정적 차이 4가지',
    excerpt:
      '같은 기숙 환경에서도 누군가는 상승 곡선을 만들고 누군가는 제자리에 머뭅니다. 그 차이는 의지가 아니라 공부를 어떤 "관리 단위"로 운영했는지에서 갈립니다. 하루·블록·오답·주간, 4가지 단위로 정리했습니다.',
    category: 'columns',
    tags: [
      '재수',
      '기숙학원',
      '독학기숙학원',
      '학습관리',
      '루틴',
      '오답노트',
      '집중력',
      '수능',
    ],
    author: 'SN독학기숙학원',
    date: '2026-04-30',
    readTime: '9',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/columns/growing-vs-stagnant.png',
    url: '/columns/growing-vs-stagnant',
  },
  {
    id: 'dokhak-vs-jaejeong',
    title: '독학기숙학원 vs 재종기숙학원, 뭐가 다를까?',
    excerpt:
      '둘 다 기숙 형태로 수능을 준비하지만, 공부의 중심이 누구에게 있느냐부터 다릅니다. 내 성향에 맞는 선택을 위한 비교 가이드입니다.',
    category: 'columns',
    tags: ['기숙학원', '독학기숙학원', '재종기숙학원', '재수', '수능'],
    author: 'SN독학기숙학원',
    date: '2026-04-10',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail:
      '/images/columns/selfstudyvsregulardorm/selfstudyvsregulardorm.png',
    url: '/columns/dokhak-vs-jaejeong',
  },
  {
    id: 'goyoui-sup-ai-paradigm-shift',
    title:
      "대치동 독학재수학원의 패러다임 시프트: AI 특화관 'SN고요의숲' (feat. SNarGPT)",
    excerpt:
      '대치동에 없던, 오직 몰입을 위한 공간. 국내 최초 AI 특화 독학관 SN고요의숲이 학습의 과정을 어떻게 기록하고 관리하는지 소개합니다.',
    category: 'columns',
    tags: ['AI', '대치동', '고요의숲', 'SNarGPT', '독학재수', '에듀테크'],
    author: '대치 SN고요의숲',
    date: '2026-02-05',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: '/images/goyosoup/thumbnail_daechi.png',
    url: '/columns/goyoui-sup-ai-paradigm-shift',
  },
  {
    id: 'boarding-school-price-map-2026',
    title:
      '[SN Data Lab] 전국 기숙학원 가격 지도: 개발자가 답답해서 직접만들었어요.',
    excerpt:
      '전국 기숙학원의 가격을 한눈에 비교해보세요. 지도를 클릭하면 각 학원의 상세 정보와 가격을 확인할 수 있습니다.',
    category: 'datalab',
    tags: ['기숙학원', '가격비교', '데이터', '지도'],
    author: 'SN DataLAB',
    date: '2026-01-30',
    readTime: '3분',
    featured: true,
    featuredOrder: 5,
    published: true,
    thumbnail: '/images/Data_LAB/price_map.png',
    url: '/datalab/boarding-school-price-map-2026',
    type: 'special',
    badge: '26.01.30 업데이트',
  },
  {
    id: 'snargpt-2026-ai-tech-trend',
    title: `SNarGPT에는 어떤 AI기술이 들어가 있나요?
- 2026 AI 신기술 트렌드`,
    excerpt:
      '사람의 적응력보다 빠르게 발전하는 AI기술. SNarGPT의 6가지 핵심 엔진이 어떻게 수능 학습을 혁신하는지 살펴봅니다.',
    category: 'startup',
    subcategory: 'tech-blog',
    tags: [
      'AI',
      'SNarGPT',
      '에이전트AI',
      'RAG',
      'MCP',
      '에듀테크',
      '수능',
      '인공지능',
    ],
    author: 'SN Academy',
    date: '2026-01-27',
    readTime: '10',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/startup/SNARGPT_technology.png',
    url: '/startup/snargpt-2026-ai-tech-trend',
  },
  {
    id: 'goyoui-sup-launch-daechi',
    title: '26년 2월 1일 대치동에 독학관리학원을 런칭합니다',
    excerpt:
      '대치동에 AI 특화 독학관리학원 고요의 숲을 런칭합니다. 수능을 준비하는 학생을 가장 깊이 이해하는 집단이 만든 새로운 도전입니다.',
    category: 'columns',
    tags: ['AI', '대치동', '고요의숲', '독학관리', '에듀테크', '런칭'],
    author: 'SN독학기숙학원 대표 윤석기',
    date: '2026-01-25',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/columns/launch_daechi.png',
    url: '/columns/goyoui-sup-launch-daechi',
  },
  {
    id: 'why-sn-knows-ai-best',
    title:
      '우리는 교육 AI를 가장 잘 알고, 가장 잘 활용하는 에듀테크 기업입니다',
    excerpt:
      '수능이라는 이유로 AI를 전혀 쓰지 않는 선택이 오히려 더 위험해지는 시대. AI를 쓰느냐 마느냐가 아니라, 어떻게 쓰느냐의 문제입니다.',
    category: 'columns',
    tags: ['AI', 'SNarGPT', '에듀테크', '수능', '교육AI'],
    author: 'SN Academy',
    date: '2026-01-23',
    readTime: '5',
    featured: true,
    featuredOrder: 4,
    published: true,
    thumbnail: '/images/thumbnail/columns/AI_STUDY_Blog.png',
    url: '/columns/why-sn-knows-ai-best',
  },
  {
    id: 'snarlink-snargpt-integration',
    title: '[업뎃] 이제 여러분의 "온라인 순공 시간"을 데이터로 증명합니다!',
    excerpt:
      '학원 네트워크 제어 시스템 SNarLink와 학습 AI SNarGPT가 전격 연동되었습니다. 실시간 학업 시간 측정, 초개인화 피드백, 객관적 학습 지표까지 - 여러분의 보이지 않는 노력을 데이터로 증명합니다.',
    category: 'startup',
    subcategory: 'update',
    tags: [
      'AI',
      'SNarGPT',
      'SNarLink',
      '순공시간',
      '업데이트',
      '학원공지',
      '학습분석',
    ],
    author: 'SN Academy',
    date: '2026-01-21',
    readTime: '2',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/startup/study_timeline.png',
    url: '/startup/snarlink-snargpt-integration',
  },
  {
    id: 'snargpt-interactive-quiz-update',
    title: '[업뎃] SNarGPT 퀴즈 기능 업데이트',
    excerpt:
      '단순히 문제를 읽는 것을 넘어, 채팅창에서 직접 버튼을 클릭하고 실시간 피드백을 받는 인터랙티브 UI 방식의 퀴즈 기능이 업데이트되었습니다. 전 과목 마스터, 초개인화 맞춤형 퀴즈, RAG 기반 기출 추출까지!',
    category: 'startup',
    subcategory: 'update',
    tags: ['AI', 'SNarGPT', '퀴즈', '업데이트', '학원공지', '인터랙티브'],
    author: 'SN Academy',
    date: '2026-01-21',
    readTime: '3',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/startup/snargpt_quiz.png',
    url: '/startup/snargpt-interactive-quiz-update',
  },
  {
    id: 'snargpt-update-260114',
    title: 'SNarGPT 운영 & 업데이트 안내 (학생 필독)',
    excerpt:
      'SNarGPT는 감시 도구가 아니라 공부 도우미입니다. SNarKeeper 생존 가이드, 마나 절약 팁, AI 에이전트 성향, 그리고 앞으로의 업데이트 로드맵까지 학생들이 꼭 알아야 할 모든 것을 정리했습니다.',
    category: 'startup',
    subcategory: 'update',
    tags: ['AI', 'SNarGPT', 'SNarKeeper', '마나', '업데이트', '학원공지'],
    author: 'SN Academy',
    date: '2026-01-14',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/startup/update_notice.png',
    url: '/startup/snargpt-update-260114',
  },
  {
    id: 'seongsanbyeolgok',
    title:
      '[수능 주요 고전문학 「성산별곡」 해석] 당숙이자 친구님 난 당신의 이 신선 같은 삶이 너무 부럽소',
    excerpt:
      '조선 중기 송강 정철의 가사 「성산별곡」. 담양 성산에 은거하는 벗 김성원의 자연친화적 삶을 사계절의 풍광과 함께 찬양한 작품입니다.',
    category: 'SN Originals',
    tags: ['성산별곡', '정철', '가사', '고전문학', '자연', '수능국어'],
    author: 'SI KIM',
    date: '2026-03-18',
    readTime: '10',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_seongsan.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=9jH3JimFu30',
    url: '/originals/seongsanbyeolgok',
    type: 'special',
  },
  {
    id: 'jungseokga',
    title:
      "[수능 주요 고전문학 「정석가」 해석] 철로 만든 소가 풀을 뜯어야 헤어지겠다고? 고려판 '환승연애' 불가 선언",
    excerpt:
      '작자 미상의 고려가요 「정석가」. 구운 밤에 싹이 나고, 쇠로 만든 소가 풀을 뜯는 등 실현 불가능한 조건을 내걸어 영원한 사랑을 노래한 작품입니다.',
    category: 'SN Originals',
    tags: ['정석가', '고려가요', '고전문학', '사랑', '수능국어'],
    author: 'SI KIM',
    date: '2026-03-18',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_jungseokga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=aZVZQPIUj4Y',
    url: '/originals/jungseokga',
    type: 'special',
  },
  {
    id: 'songin',
    title: '[수능 주요 고전문학 「송인」 해석] 이별을 끝내지 않기로 했다',
    excerpt:
      '고려 중기 정지상의 한시 「송인(送人)」. 비 온 뒤 대동강의 푸른 풍경 속에서 임을 떠나보내는 이별의 슬픔을 노래한 작품입니다.',
    category: 'SN Originals',
    tags: ['송인', '정지상', '한시', '고전문학', '이별', '수능국어'],
    author: 'SI KIM',
    date: '2026-03-18',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/songin_thumbnail_a2.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=uWsbj5aAw8Y',
    url: '/originals/songin',
    type: 'special',
  },
  {
    id: 'seogyeongbyeolgok',
    title: '님아 그 강을 건너지 마오 (고등학교 고전문학 「서경별곡」)',
    excerpt:
      '작자 미상의 고려가요 「서경별곡」. 삶의 터전인 서경(평양)을 버리고서라도 임을 쫓겠다는 적극적인 태도를 보여주는 작품입니다.',
    category: 'SN Originals',
    tags: ['서경별곡', '고려가요', '고전문학', '이별의정한', '수능국어'],
    author: 'SN Academy',
    date: '2025-12-17',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/seogyeong_thumbnail_a1-1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=q4H220ZMaa8',
    url: '/originals/seogyeongbyeolgok',
    type: 'special',
  },
  {
    id: 'gyuwonga',
    title:
      '[고전문학「규원가」해설] 허난설헌 같은 육각형 여자를 등한시하다니 남편이 잘못했네',
    excerpt:
      '허난설헌이 지은 것으로 전해지는 가사 「규원가」. 봉건 제도의 굴레 속에서 남편에게 버림받은 여인의 절절한 슬픔과 원망을 기승전결 구조로 그려낸 작품입니다.',
    category: 'SN Originals',
    tags: ['규원가', '허난설헌', '고전문학', '가사문학', '수능국어'],
    author: 'SN Academy',
    date: '2026-01-20',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail:
      '/images/thumbnail/originals/gyuwonga_thumbnail_work_modified.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEaj9nIUYmQ',
    url: '/originals/gyuwonga',
    type: 'special',
  },
  {
    id: 'manheung',
    title: '[고전문학「만흥」해설] 내가 산이고 산이 나인 경지의 삶',
    excerpt:
      '윤선도가 지은 총 6수의 시조 「만흥」. 속세를 벗어난 자연에서의 흥취와 은거자의 자부심을 노래한 연시조입니다.',
    category: 'SN Originals',
    tags: ['만흥', '윤선도', '시조', '고전문학', '수능국어'],
    author: 'SN Academy',
    date: '2026-01-20',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_manheung.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=JrTYQIJdfAI',
    url: '/originals/manheung',
    type: 'special',
  },
  {
    id: 'sipnyeon-gyeongyeong',
    title:
      '[수능 고전문학 「십년을 경영하여」 해석] 조선시대 내 집 마련 소요시간 : 10년',
    excerpt:
      '송순의 시조 「십년을 경영하여」 - 10년간 준비한 작은 초가집에 달과 청풍을 벗삼아 사는 자연 친화적 삶의 자부심을 노래한 작품입니다.',
    category: 'SN Originals',
    tags: [
      '십년을경영하여',
      '송순',
      '시조',
      '고전문학',
      '수능국어',
      '자연친화',
    ],
    author: 'SN Academy',
    date: '2026-01-20',
    readTime: '3',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/tenyears_mgmt_thumbnail_a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=aTJXb90wAmc',
    url: '/originals/sipnyeon-gyeongyeong',
    type: 'special',
  },
  {
    id: 'eobusasisa',
    title:
      '[고전문학「어부사시사」해설] 어촌의 흥취를 제일 잘 이해하고 있는 사대부',
    excerpt:
      '윤선도의 「어부사시사」 - 사계절 어촌의 풍경과 강호한정을 노래한 연시조. 물아일체, 흥, 연군지정의 주제를 담은 조선 시조 문학의 정수.',
    category: 'SN Originals',
    tags: [
      '어부사시사',
      '윤선도',
      '연시조',
      '고전문학',
      '수능국어',
      '물아일체',
      '강호한정',
    ],
    author: 'SN Academy',
    date: '2026-01-20',
    readTime: '15',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_ubu.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=KJrSMkSqzvc',
    url: '/originals/eobusasisa',
    type: 'special',
  },
  {
    id: 'ai-learning-gap',
    title: 'AI는 학습 격차를 더 가속화시킨다',
    excerpt:
      '이세돌의 질문, 그리고 AI 학습이 마주한 불편한 현실. 정답을 따라가는 사람과 구조를 이해하는 사람의 차이가 만드는 격차의 역설.',
    category: 'startup',
    subcategory: 'tech-blog',
    tags: ['AI', 'SNarGPT', '학습격차', '이세돌', '교육혁신', '사고력'],
    author: 'SN Academy',
    date: '2025-12-21',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/startup/thumbnail_alphago.png',
    url: '/startup/ai-learning-gap',
  },
  {
    id: 'cheongsanbyeolgok',
    title: `이유도 모른 채 돌 맞고 돌 던져야 했던, 그 때 그 누군가의 노래
(고등학교 고전문학 「청산별곡」)`,
    excerpt:
      '작자 미상의 고려가요 「청산별곡」. 삶의 터전을 잃은 유랑민, 실연당한 여인, 고독한 처지의 지식인 등 다양한 화자의 상황으로 해석될 수 있는 작품입니다.',
    category: 'SN Originals',
    tags: ['청산별곡', '고려가요', '고전문학', '수능국어', '내신대비'],
    author: 'SN Academy',
    date: '2025-12-12',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a1_cheongsan.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=UyRmAK4AnYQ',
    url: '/originals/cheongsanbyeolgok',
    type: 'special',
  },
  {
    id: 'dosansipigok',
    title: `친구들 중에 이런 휴가 좋아하는 친구 꼭 하나씩은 있다
(고등 고전문학 「도산십이곡」)`,
    excerpt:
      '조선 중기 이황이 지은 연시조 「도산십이곡」. 전6곡은 자연 친화, 후6곡은 학문 수양의 내용을 담은 작품입니다.',
    category: 'SN Originals',
    tags: [
      'SN Originals',
      '도산십이곡',
      '고전문학',
      '이황',
      '연시조',
      '자연친화',
      '학문수양',
      '내신대비',
    ],
    author: 'SN Academy',
    date: '2025-12-11',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/dosan_thumbnail_a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=W7MesqkqjWQ',
    url: '/originals/dosansipigok',
    type: 'special',
  },
  {
    id: 'ganghosasiga',
    title:
      '임금님 은혜는 대체 어디까지 뻗치는 거야 (고등 고전문학 「강호사시가」)',
    excerpt:
      '조선 초기 맹사성이 지은 연시조 「강호사시가」. 봄·여름·가을·겨울 네 수의 시조로 자연의 아름다움을 노래하면서, 마지막은 반드시 임금님 은혜로 마무리되는 특징을 가진 작품입니다.',
    category: 'SN Originals',
    tags: [
      'SN Originals',
      '강호사시가',
      '고전문학',
      '맹사성',
      '연시조',
      '사계절',
    ],
    author: 'SN Academy',
    date: '2025-12-06',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/kang_thumbnail_a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=6pAktIo7JCs',
    url: '/originals/ganghosasiga',
    type: 'special',
  },
  {
    id: 'myeonangjungga',
    title: '담양에서의 자연힐링 스토리 (고등 고전문학 「면앙정가」)',
    excerpt:
      '조선 전기 송순이 지은 가사 「면앙정가」. 전남 담양 면앙정 주변 사계절의 아름다운 모습과 신선적인 풍류 생활을 묘사한 작품입니다.',
    category: 'SN Originals',
    tags: ['SN Originals', '면앙정가', '고전문학', '송순', '가사', '담양'],
    author: 'SN Academy',
    date: '2025-12-04',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a1_ASMR.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=6yD3R5eEnzo',
    url: '/originals/myeonangjungga',
    type: 'special',
  },
  {
    id: 'gasiri',
    title: '가지마 가지마 가지마~ (고등 고전문학 「가시리」)',
    excerpt:
      '작자·연대 미상의 고려가요 「가시리」. 떠나는 임을 붙잡고 싶지만 보내면서 반드시 돌아오길 바라는 여성 화자의 애절한 이별 노래입니다.',
    category: 'SN Originals',
    tags: ['고전문학', '가시리', '고려가요', '이별', '서정시', '수능국어'],
    author: 'SI KIM',
    date: '2025-12-04',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a1_gasiri.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=lk9cR81JBX0',
    url: '/originals/gasiri',
    type: 'special',
  },
  {
    id: 'sangchungok',
    title:
      '사실 내 이런 삶을 좀 부러워했으면 좋겠어 (고등 고전문학 「상춘곡」)',
    excerpt:
      '조선 전기 정극인이 지은 가사 「상춘곡」. 벼슬을 사임하고 향리에서 자연의 아름다움을 즐기며 안빈낙도의 정신을 노래한 작품입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '상춘곡',
      '정극인',
      '가사',
      '안빈낙도',
      '조선전기',
      '수능국어',
    ],
    author: 'SI KIM',
    date: '2025-12-04',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a3.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=7J0PTTcaD1U',
    url: '/originals/sangchungok',
    type: 'special',
  },
  {
    id: 'maehwasa',
    title: '지조와 절개의 상징 (고등 고전문학 「매화사」)',
    excerpt:
      '조선 후기 안민영이 지은 연시조 「매화사」. 추운 겨울 눈 속에서 피는 매화를 통해 고결하고 굳센 절개를 지닌 선비적 삶을 찬양한 작품입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '매화사',
      '안민영',
      '시조',
      '사군자',
      '조선후기',
      '수능국어',
    ],
    author: 'SI KIM',
    date: '2025-12-04',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/1thumbnail_F.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=VLuBdOKC0ZI',
    url: '/originals/maehwasa',
    type: 'special',
  },
  {
    id: 'suneung-korean-17',
    title:
      '2025 수능 국어 17번, 정말 오류일까? - 정답 ③을 옹호하는 논리적 근거',
    excerpt:
      '온라인에서 논란이 된 수능 국어 17번 문항. 평가원 정답 ③번이 왜 타당한지 과제 규정과 선지 매핑 방식을 기준으로 차분하게 정리합니다.',
    category: 'columns',
    tags: ['수능', '국어', '17번', '논쟁', '평가원'],
    author: 'SN Academy',
    date: '2025-11-22',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail: '/images/columns/suneung-korean-17/thumnail17.png',
    url: '/columns/suneung-korean-17',
  },
  {
    id: 'economi-son',
    title: '손에잡히는경제',
    excerpt: 'SN아카데미에서 손에잡히는 경제 커피타임에 출연했습니다.',
    category: 'columns',
    tags: ['경제', '뉴스', '손에잡히는경제'],
    author: 'SN Academy',
    date: '2025-11-19',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/economi_son/economyson.jpg',
    url: '/columns/economi-son',
  },
  {
    id: 'imgyetan',
    title:
      '사는 동네를 옮긴다 한들 살인적인 세금을 피할 수는 없었다 (고전문학 「임계탄」)',
    excerpt:
      '조선 후기 장흥 지역의 대기근과 탐관오리의 학정을 고발한 가사 「임계탄」. 1732~1733년 3년간의 재난 속에서 백성들의 고통과 절망을 사실적으로 담아낸 현실비판 가사입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '임계탄',
      '가사',
      '현실비판',
      '민중문학',
      '조선후기',
      '수능국어',
    ],
    author: 'SI KIM',
    date: '2025-11-11',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_imgyetan.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=sfoHYLjRLIo',
    url: '/originals/imgyetan',
    type: 'special',
  },
  {
    id: 'changiparangga',
    title: '기파랑을 닮고 싶었던 한 스님의 노래 (고전문학 「찬기파랑가」)',
    excerpt:
      '신라 경덕왕 때 충담사가 화랑 기파랑을 추모하며 지은 향가. 승려 충담사가 이상적 인간상이었던 기파랑을 찬양하고, 그와 같은 사람이 되고 싶다는 소망을 담은 10구체 향가입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '찬기파랑가',
      '충담사',
      '향가',
      '신라',
      '화랑',
      '수능국어',
    ],
    author: 'SI KIM',
    date: '2025-11-18',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_changiparangga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=17SWxuMhvFQ',
    url: '/originals/changiparangga',
    type: 'special',
  },
  {
    id: 'jemangmaega',
    title: '누이를 잃은 슬픔의 노래 (고전문학 「제망매가」)',
    excerpt:
      '신라 경덕왕 때 월명사가 죽은 누이를 추모하며 지은 향가. 불교 승려였던 월명사가 육친에 대한 그리움과 죽음의 슬픔을 담아낸 10구체 향가로, 인간적 애정과 불교적 세계관이 조화를 이룬 작품입니다.',
    category: 'SN Originals',
    tags: ['고전문학', '제망매가', '월명사', '향가', '신라', '수능국어'],
    author: 'SI KIM',
    date: '2025-11-18',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_jemangmaega.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=I215rskzY74',
    url: '/originals/jemangmaega',
    type: 'special',
  },
  {
    id: '2026-suneung-similar-problems',
    title: '2026학년도 수능 수학 문제와 비슷한 문제를 기출에서 찾기!',
    excerpt:
      'AI가 분석한 2026 수능 수학 각 문항별 유사 기출문제 3개씩 총 138개를 확인하세요. SNarGPT의 RAG 시스템이 평가원·교육청 10년치 기출에서 유사도·난이도·출제의도까지 종합 분석한 추천 문제로 효과적인 복습과 실력 향상이 가능합니다.',
    category: 'problem-download',
    subcategory: 'column-math',
    tags: ['수능', '기출', '유사문제', 'AI', '수학', '2026'],
    author: 'SN독학기숙학원',
    date: '2025-11-14',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/problem-download/AI_26_suneung.png',
    url: '/problem-download/2026-suneung-similar-problems',
  },
  {
    id: 'snargpt-guide-1',
    title: 'SNarGPT 활용가이드 1편 - 수능 특화 AI 학습 파트너',
    excerpt:
      'SNarGPT는 단순한 대화형 AI가 아닙니다. 문제 풀이, 개념 연결, 복습 루프, 오답 분석 등 실제 학습 행동에 최적화된 수능 중심 AI 학습 파트너입니다.',
    category: 'startup',
    subcategory: 'update',
    tags: ['AI', 'SNarGPT', '수능', '학습', 'LLM', '교육기술'],
    author: 'SN Academy',
    date: '2025-11-09',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/startup/SNarGPT_guide_thumbnail.png',
    url: '/startup/snargpt-guide-1',
  },
  {
    id: 'sochunhyangga',
    title: '절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」)',
    excerpt:
      '조선 시대 후기 십이 잡가의 하나로, 판소리 「춘향가」 중 관객들이 좋아했던 장면을 변형하여 만든 노래입니다. 이몽룡과 춘향의 첫 만남, 연정, 헤어짐 후의 그리움과 슬픔을 압축적으로 담아낸 작품입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '소춘향가',
      '춘향가',
      '잡가',
      '판소리',
      '수능국어',
      '조선문학',
    ],
    author: 'SN Academy',
    date: '2025-11-07',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a2_sochunhyangga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nwh6VpYaHvo',
    url: '/originals/sochunhyangga',
    type: 'special',
  },
  {
    id: 'classic-literature-marathon-2026',
    title: '여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기)',
    excerpt:
      '2026 수능을 앞둔 수험생을 위한 특별 영상! SN독학기숙학원이 엄선한 고전문학 작품 13편을 1시간 동안 몰아보며 마지막 정리를 해보세요. 보기만 해도 수능 점수가 오르는 SN 고전문학 시리즈의 결정판입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '수능국어',
      '2026수능',
      '몰아보기',
      '수능대비',
      '정철',
      '박인로',
      '윤선도',
      '가사문학',
    ],
    author: 'SN Academy',
    date: '2025-11-05',
    readTime: '10',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_VF.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=lsR6vGdm_Mo',
    url: '/originals/classic-literature-marathon-2026',
    type: 'special',
    badge: '2026학년도 수능 출제 (북새곡) · 유튜브 2.6만뷰',
  },
  {
    id: 'biga',
    title: '누가 우리 왕자님 좀 구해와주라 (고전문학 「비가」)',
    excerpt:
      '병자호란의 치욕과 분노를 담은 이정환의 10수 연시조 「비가」. 청나라에 끌려간 소현 세자와 봉림 대군을 구하지 못하는 조정 신하들을 비판하며, 작가가 느낀 수치심과 비통함을 사실적으로 표현한 현실비판 시조입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '비가',
      '이정환',
      '시조',
      '연시조',
      '병자호란',
      '수능국어',
      '조선문학',
      '현실비판',
      '소현세자',
      '봉림대군',
    ],
    author: 'SI KIM',
    date: '2025-11-04',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_biga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=aIy9pO6qaMQ',
    url: '/originals/biga',
    type: 'special',
  },
  {
    id: '2027-repeater-class',
    title: '2027학년도 반수반 모집',
    excerpt:
      '2027학년도 대입 수험생을 위한 SN독학기숙학원 반수반 모집요강입니다. 모집 대상, 성적 조건, 수강료와 등록 절차를 확인하세요.',
    category: 'notice',
    tags: ['반수반', '모집요강', '입학안내', '2027'],
    author: 'SN독학기숙학원',
    date: '2026-05-01',
    readTime: '3',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/notice/2027-repeater-class.png',
    url: '/notice/2027-repeater-class',
    type: 'special',
  },
  {
    id: '2026-academic-calendar',
    title: '2027학년도 SN독학기숙학원 학사일정',
    excerpt:
      '2026년도 주요 학사일정 및 모의고사 일정을 확인하세요. 교육청 모의고사, 평가원 모의고사, 수능 일정 등을 한눈에 볼 수 있습니다.',
    category: 'notice',
    tags: ['학사일정', '모의고사', '수능', '2026'],
    author: 'SN독학기숙학원',
    date: '2025-12-22',
    readTime: '2',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/notice/image.png',
    url: '/notice/2026-academic-calendar',
    type: 'special',
  },
  {
    id: '2026-suneung-day-vlog',
    title: '2026학년도 수능일 Vlog',
    excerpt:
      '2026학년도 대학수학능력시험 당일, SN독학기숙학원에서는 어떤 일들이 분주하게 진행되었을까요? 수능일 브이로그를 통해 함께 만나보세요.',
    category: 'notice',
    tags: ['수능', 'Vlog', '2026', '수능일'],
    author: 'SN독학기숙학원',
    date: '2025-12-04',
    readTime: '3',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/notice/vlog_thumbnail_a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=8gUWtBFzYuU',
    url: '/notice/2026-suneung-day-vlog',
  },
  {
    id: '2026-admission-guide',
    title: '2026년도 SN독학기숙학원 입소 안내',
    excerpt: '2026년도 SN독학기숙학원 입소에 관한 안내사항입니다.',
    category: 'notice',
    tags: ['입소', '안내', '2026'],
    author: 'SN독학기숙학원',
    date: '2025-11-22',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/notice/2026-admission-guide/2026-admission-guide.png',
    url: '/notice/2026-admission-guide',
    type: 'special',
  },
  {
    id: '251113suneungnotice',
    title: '2026학년도 수능 전·당일 안내문(25.11.13 시행)',
    excerpt:
      '2026학년도 대학수학능력시험 전·당일 주요 일정을 안내드립니다. 수험표 배부, 고사장 배정, 당일 일정 및 학원 지원 사항을 확인하세요.',
    category: 'notice',
    tags: ['수능', '안내', '일정'],
    author: 'SN독학기숙학원',
    date: '2025-10-31',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/notice/2026_k-sat_notice.png',
    url: '/notice/251113suneungnotice',
    type: 'special',
  },
  {
    id: 'suneung-math-solution-10min',
    title: '2026 수능 수학 전체 해설 PDF | 시험 후 20분 만에 전국 최초 공개',
    excerpt:
      'SN독학기숙학원이 SNarGPT·SNarGO AI 문제풀이 엔진으로 수능 시험지 공개 후 단 20분 만에 전국 최초로 전문 해설을 제공합니다. 공통 22문항 + 미적·확통·기하 각 8문항, 총 46문제 완벽 해설 PDF를 지금 바로 무료 다운로드하세요.',
    category: 'problem-download',
    subcategory: 'column-math',
    tags: ['수능', 'SNarGPT', 'AI', '해설', '수학'],
    author: 'SN독학기숙학원',
    date: '2025-11-13',
    readTime: '3',
    featured: false,
    published: true,
    thumbnail:
      '/images/thumbnail/problem-download/SNarGPT-2026-Math-Answer-Release.png',
    url: '/problem-download/suneung-math-solution-10min',
  },
  {
    id: 'why-we-invest-in-ai',
    title: '왜 우리는 AI에 투자하는가',
    excerpt:
      'SN독학기숙학원의 AI 투자 철학과 방향성. 20년 전과 달라진 교육 환경, 감이 아닌 데이터 기반 개입, 그리고 성장을 넘어 입시 결과로 완결하는 우리의 이야기.',
    category: 'startup',
    subcategory: 'tech-blog',
    tags: ['AI', '교육혁신', '데이터', '입시전략', '에듀테크'],
    author: 'SN독학기숙학원 대표 윤석기',
    date: '2025-10-18',
    readTime: '11',
    featured: false,
    published: true,
    thumbnail: '/images/startup/Why_we_invest_in_AI/Why_we_invest_in_AI.png',
    url: '/startup/why-we-invest-in-ai',
  },
  {
    id: 'SNargopost_1',
    title: 'SNarGO — 수능 특화 Vertical AI',
    excerpt:
      'SNarGO는 수능에 최적화된 Vertical AI입니다. 2,000문제 중 1문제 수준 오답, SNarVIS 해설, 그리고 차세대 문제 생성 AI SNarGEN 로드맵까지.',
    category: 'startup',
    subcategory: 'update',
    tags: ['AI', '수능', '수학', '교육기술'],
    author: 'SN Academy',
    date: '2025-10-07',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/startup/SNarGo/SNargo-thumbnail.PNG',
    url: '/startup/SNargopost_1',
    type: 'special',
  },
  {
    id: 'design-guide-demo',
    title: '디자인 시스템 가이드 - 미니멀 블로그 디자인',
    excerpt:
      'SN Academy 블로그의 새로운 디자인 시스템을 소개합니다. Stripe, Notion, Medium에서 영감을 받은 심플하고 깔끔한 디자인 철학을 확인해보세요.',
    category: 'columns',
    tags: ['디자인', '가이드', '블로그'],
    author: 'SN Academy',
    date: '2025-10-05',
    readTime: '4',
    featured: false,
    published: false,
    thumbnail:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop&crop=center',
    url: '/columns/design-guide-demo',
  },
  {
    id: 'dokhak',
    title: 'SN독학(獨學)기숙학원 – 왜 우리는 독학을 강조하는가',
    excerpt:
      '안녕하세요. SN독학기숙학원 대표 윤석기 입니다. SN독학기숙학원은 수업보다 독학을 항상 강조해 왔습니다. SN의 탄생철학이죠. 저희 SN독학기숙학원이 런칭이 2014년 11월 입니다. 1기는 2015년부터 시작했죠.',
    category: 'columns',
    tags: ['독학', '독학기숙학원', 'AI', '학습전략담임'],
    author: 'SN Academy',
    date: '2025-10-08',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail:
      '/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-0.png',
    url: '/columns/dokhak',
  },
  {
    id: 'snargpt-presentation',
    title: 'SN이 AI를 만든 이유 (Presentation)',
    excerpt:
      '공부가 "감"에서 "훈련"이 되는 순간. AI 시대, 상위권과 하위권의 격차가 왜 더 벌어졌는지, 그리고 SNarGPT가 어떻게 학생의 사고 로직을 개선하는지 소개합니다.',
    category: 'columns',
    tags: ['AI', 'SNarGPT', '학습전략', '데이터기반학습', '프레젠테이션'],
    author: 'SN Academy',
    date: '2025-12-27',
    readTime: '10',
    featured: false,
    published: true,
    thumbnail: '/presentation/thumbnail.png',
    url: '/columns/snargpt-presentation',
  },
  {
    id: 'SNarlink',
    title: 'SN독학기숙학원 방화벽의 모든 것! (Feat. SNarlink)',
    excerpt:
      'SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다. 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 SNarlink 시스템에 대해 다룹니다.',
    category: 'columns',
    tags: ['방화벽', '보안', 'AI', '교육기술'],
    author: 'SN Academy',
    date: '2025-10-03',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/SNarlink/thumbnail.png',
    url: '/columns/SNarlink',
  },
  {
    id: 'ai-startup',
    title: 'SN에서 교육 AI 스타트업을 창업했습니다',
    excerpt:
      '교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 초개인화 학습 혁신을 실현하는 SN Academy AI 스타트업을 소개합니다.',
    category: 'startup',
    subcategory: 'tech-blog',
    tags: ['AI교육', '스타트업', '에듀테크'],
    author: 'SN Academy',
    date: '2025-09-29',
    readTime: '11',
    featured: false,
    published: true,
    thumbnail:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    url: '/startup/ai-startup',
  },
  {
    id: 'sn-originals-intro',
    title: 'SN Originals 고전문학 시리즈를 소개합니다',
    excerpt:
      '최재천 선생님의 "알면 사랑한다"는 지혜로 시작하는 SN Originals 고전문학 시리즈. 만화영화처럼 익숙하게, AI 기술과 함께하는 새로운 고전문학 학습법을 소개합니다.',
    category: 'SN Originals',
    author: 'SI KIM',
    date: '2025-10-02',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center',
    url: '/originals/sn-originals-intro',
  },
  {
    id: 'sokmieungok',
    title: `조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~"
(고전문학 「속미인곡」)`,
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다.',
    category: 'SN Originals',
    tags: ['고전문학', '속미인곡', '정철', '가사문학'],
    author: 'SI KIM',
    date: '2025-10-01',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/sokmieungok_thumbnail.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/sokmieungok',
  },
  {
    id: 'samieungok',
    title: `선조를 향한 정철의 중독된 사랑
(고전문학 「사미인곡」)`,
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다.',
    category: 'SN Originals',
    tags: ['고전문학', '사미인곡', '정철', '가사문학'],
    author: 'SI KIM',
    date: '2025-09-30',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/22_thumbnail2.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=50nJegN2YSQ',
    url: '/originals/samieungok',
  },
  {
    id: 'gapminga',
    title: `내 속도 모르면서 가라 마라 막말하지 마라
(수능 고전문학 「갑민가」)`,
    excerpt:
      '조선 후기 백성의 아픔과 저항을 담은 「갑민가」로 진정한 민중 문학을 만나보세요.',
    category: 'SN Originals',
    tags: ['고전문학', '갑민가', '민중문학', '사회비판'],
    author: 'SI KIM',
    date: '2025-09-22',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/GABMINGA_2_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=3ZGE-RvBinQ',
    url: '/originals/gapminga',
    badge: '2025 수능출제',
  },
  {
    id: 'hwangokga',
    title: `너 그렇게 여자만 좋아하다 피똥싼다
(수능 고전문학 「화왕가」)`,
    excerpt:
      '조선 후기 풍자 문학의 백미 「화왕가」로 문학의 유머와 비판정신을 만나보세요.',
    category: 'SN Originals',
    tags: ['고전문학', '화왕가', '풍자문학', '사회비판'],
    author: 'SI KIM',
    date: '2025-09-26',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/hwawangga_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=6tsl5IIMy_o',
    url: '/originals/hwangokga',
  },
  {
    id: 'bukcheonga',
    title: `좋긴 한데 유배 생활 이래도 됨?
고전문학 「북천가」`,
    excerpt:
      '조선 후기 민중의 아픔과 저항을 담은 「북천가」로 진정한 문학의 힘을 만나보세요.',
    category: 'SN Originals',
    tags: ['고전문학', '북천가', '민중문학', '사회비판'],
    author: 'SI KIM',
    date: '2025-09-24',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/bukcheonga_thumbnail_02.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=xhyppBm3_o4',
    url: '/originals/bukcheonga',
  },
  {
    id: 'gwandong-byeolgok',
    title: `정철의 강원도 브이로그
(고전문학 「관동별곡」)`,
    excerpt:
      '정철의 대표작 「관동별곡」으로 조선 가사 문학의 아름다움을 만나보세요.',
    category: 'SN Originals',
    tags: ['고전문학', '관동별곡', '정철', '가사문학'],
    author: 'SI KIM',
    date: '2025-09-28',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/gwandongbealgok_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=9T06DoJaMHs',
    url: '/originals/gwandong-byeolgok',
  },
  {
    id: 'sunsangtan',
    title: `45세면 지금은 한창인데 자꾸 자기가 노장이라고 하네...
(고전문학 「선상탄」)`,
    excerpt:
      '박인로의 「선상탄」으로 배 위에서의 탄식과 나라 걱정, 무관의 절개를 만나보세요.',
    category: 'SN Originals',
    tags: ['고전문학', '선상탄', '박인로', '가사문학', '수능국어'],
    author: 'SI KIM',
    date: '2025-10-07',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/sunsangtan_thumbnail.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=9ogmj2rSwLY',
    url: '/originals/sunsangtan',
  },
  {
    id: 'yongbuga',
    title: '조선 부녀자 악행 모음집 (고전문학 「용부가」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈. 여덟 번째 작품으로 조선시대 후기 작자 미상의 가사인 「용부가」를 준비했습니다.',
    category: 'SN Originals',
    tags: ['고전문학', '용부가', '가사문학', '수능국어', '교훈문학'],
    author: 'SI KIM',
    date: '2025-10-08',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_work_v2_F.png',
    youtubeUrl: 'https://www.youtube.com/embed/kEWPbC_-ehc',
    url: '/originals/yongbuga',
  },
  {
    id: 'chulsaegok',
    title: `나 경성 발령났어. 어디, 서울 경성? 아니 함경북도 경성.
(고전문학 「출새곡」)`,
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 그 아홉 번째 시간. 오늘은 조선시대 후기 조우인이 지은 가사인 「출새곡」 준비했습니다.',
    category: 'SN Originals',
    tags: ['고전문학', '출새곡', '조우인', '기행가사', '수능국어'],
    author: 'SI KIM',
    date: '2025-10-14',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_F.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=ThaMhDbZuNc',
    url: '/originals/chulsaegok',
  },
  {
    id: 'mongcheonyo',
    title:
      '이럴거면 잘 쉬고 있던 사람 복직은 뭣하러 시키셨어요 (고전문학 「몽천요」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 어느새 그 열 번째 시간. 오늘은 조선시대 후기(1652년, 효종 3년)에 제작된 윤선도의 연시조 「몽천요」를 준비했습니다.',
    category: 'SN Originals',
    tags: ['고전문학', '몽천요', '윤선도', '연시조', '수능국어'],
    author: 'SI KIM',
    date: '2025-10-19',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_F_mongcheonyo.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=HmzoVsJUBFE',
    url: '/originals/mongcheonyo',
  },
  {
    id: 'dokrakdang',
    title: '산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)',
    excerpt:
      '박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문 공간을 만나보세요. 1619년 박인로가 59세의 나이에 지은 가사로, 홀로 누리는 즐거움과 학문의 진수를 담은 작품입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '독락당',
      '박인로',
      '회재 이언적',
      '가사문학',
      '수능국어',
    ],
    author: 'SI KIM',
    date: '2025-10-26',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/DokRakDang_thumbnail_F_v3.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=NlLizA-5u1M',
    url: '/originals/dokrakdang',
    type: 'special',
  },
  {
    id: 'oryun-ga',
    title: '내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)',
    excerpt:
      '박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지 인간관계를 만나보세요. 1612년 광해군 시대에 지어진 교훈 가사로, 사회 혼란 속에서도 지켜야 할 삶의 기준을 담은 작품입니다.',
    category: 'SN Originals',
    tags: ['고전문학', '오륜가', '박선장', '교훈가사', '수능국어', '유교윤리'],
    author: 'SI KIM',
    date: '2025-10-27',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/Oryun-ga_thumbnail_a2_v2.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=G3ojQuQXMxE',
    url: '/originals/oryun-ga',
    type: 'special',
  },
  {
    id: 'chohanga',
    title:
      '이제 그만 끝내자 항우야 너네 애들 다 넘어왔단다 (고전문학 「초한가」)',
    excerpt:
      '작자 미상의 판소리 「초한가」. 사면초가로 포위된 초한전쟁의 마지막 밤, 장량의 계략으로 울려 퍼진 초가(楚歌)가 천하의 패왕 항우를 속수무책으로 만드는 심리전을 다룬 작품입니다.',
    category: 'SN Originals',
    tags: ['고전문학', '초한가', '항우', '우희', '수능국어', '중국고전'],
    author: 'SI KIM',
    date: '2025-10-29',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a4_chohanga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=Wv6KFsP_V94',
    url: '/originals/chohanga',
    type: 'special',
  },
  {
    id: 'buksaegok',
    title:
      'MBTI F인 사람이 암행어사로 임명되면 이런 느낌일까? (고전문학 「북새곡」)',
    excerpt:
      '조선 후기 구강(具康)이 지은 가사 「북새곡」. 57세의 노인이 험준한 관북지방 산길을 추운 겨울에 다니면서 민정을 시찰하며 경험한 여러가지 견문을 사실적으로 익살스레 표출한 재미있는 작품입니다.',
    category: 'SN Originals',
    tags: ['고전문학', '북새곡', '구강', '기행가사', '암행어사', '수능국어'],
    author: 'SI KIM',
    date: '2025-11-01',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_b_buksaegok.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=nRZYC5lLLIY',
    url: '/originals/buksaegok',
    type: 'special',
    badge: '2026 수능출제',
  },
  {
    id: 'ai-study-method',
    title: 'AI에게 배우는 진짜 공부법',
    excerpt:
      'AI가 똑똑해진 비밀은 설계가 아니라 노출량이었습니다. 인간의 공부도 마찬가지입니다. SN독학기숙학원 대표 윤석기가 AI 학습 원리를 통해 발견한 진짜 공부법을 소개합니다.',
    category: 'columns',
    tags: ['공부법', 'AI', '학습법', '반복학습', '수능전략'],
    author: 'SN독학기숙학원 대표 윤석기',
    date: '2025-10-27',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/columns/howtostudythumbnail.gif',
    url: '/columns/ai-study-method',
  },
  {
    id: 'classic-literature-marathon-2',
    title:
      '기말고사 대비 고전문학 공부하는 고1·고2 친구들을 위해 만든 영상 (SN 고전문학 몰아보기 2탄)',
    excerpt:
      '보기만 해도 시험 점수가 오르는 SN 고전문학 시리즈. 고등학교 1~2학년 내신 시험 준비를 위한 8개 작품 몰아보기 영상입니다.',
    category: 'SN Originals',
    tags: [
      '고전문학',
      '내신대비',
      '기말고사',
      '고1',
      '고2',
      '제망매가',
      '찬기파랑가',
      '가시리',
      '매화사',
      '강호사시가',
      '도산십이곡',
      '상춘곡',
      '면앙정가',
    ],
    author: 'SN독학기숙학원',
    date: '2025-12-12',
    readTime: '24',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/originals/thumbnail_a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=T9nyl98YPb4',
    url: '/originals/classic-literature-marathon-2',
    type: 'special',
    badge: '내신 필수',
  },
];

// 🔗 콘텐츠 로딩이 필요한 경우: import { loadPostContent } from '@/lib/post-content';
function getMergedPosts(): Post[] {
  return allPosts as Post[];
}

export function getPosts(): Post[] {
  return getMergedPosts().filter(post => post.published);
}

export function getAllPosts(): Post[] {
  return getMergedPosts();
}

export function getLatestPosts(limit = 5): Post[] {
  return getPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getFeaturedPosts(): Post[] {
  return getPosts()
    .filter(post => post.featured)
    .sort((a, b) => {
      if (a.featuredOrder !== undefined && b.featuredOrder !== undefined) {
        return a.featuredOrder - b.featuredOrder;
      }
      if (a.featuredOrder !== undefined) return -1;
      if (b.featuredOrder !== undefined) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getPostById(id: string): Post | undefined {
  return getPosts().find(
    post =>
      post.url === `/${id}` || post.url.endsWith(`/${id}`) || post.id === id
  );
}

export function getPostsByCategory(category: string): Post[] {
  return getPosts()
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase();
  return getPosts().filter(
    post =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q)))
  );
}

export function getPaginatedPosts(page = 1, limit = 9) {
  const allPublished = getPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const totalPages = Math.ceil(allPublished.length / limit);
  const start = (page - 1) * limit;
  return {
    posts: allPublished.slice(start, start + limit),
    totalPages,
    currentPage: page,
  };
}
