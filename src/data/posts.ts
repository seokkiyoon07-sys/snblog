// 이 파일은 자동으로 생성됩니다. 직접 수정하지 마세요.
// 노션에서 동기화된 포스트 데이터

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  thumbnail?: string;
  youtubeUrl?: string;
  url: string;
}

export const allPosts: Post[] = [
  {
    id: 'ai-startup',
    title: 'SN에서 교육 AI 스타트업을 창업했습니다.',
    excerpt: 'SN Academy는 교육 AI 스타트업을 창업하여 초개인화 학습 솔루션을 제공합니다.',
    content: `SN Academy는 교육 AI 스타트업을 창업하여 초개인화 학습 솔루션을 제공합니다.`,
    category: 'startup',
    tags: ['AI교육', '스타트업', '에듀테크'],
    author: 'SN Academy',
    date: '2025-09-29',
    readTime: '10',
    featured: true,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/startup/ai-startup'
  },
  {
    id: 'sn-originals-intro',
    title: 'SN Originals 고전문학 시리즈를 소개합니다',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈를 소개합니다.',
    content: `SN Originals 고전문학 시리즈를 소개합니다.`,
    category: 'originals',
    tags: ['SN Originals', '고전문학', '수능국어'],
    author: 'SN Academy',
    date: '2025-10-02',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/sn-originals-intro'
  },
  {
    id: 'sokmieungok',
    title: '조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~" (고전문학 「속미인곡」)',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다.',
    content: `## 「속미인곡」- 정철의 마지막 사랑 노래

### 📖 작품 개요
1588~1589년 경 정철이 고향인 전남 창평에 우거하며 「사미인곡」에 이어 지은 가사입니다. 「사미인곡」이 선조에 대한 충성의 마음을 표현한 작품이라면, 「속미인곡」은 그 마음이 더욱 깊어지고 절절해진 모습을 보여줍니다.

### 🎭 작품의 매력
- **깊은 그리움**: "기다리는 나를 왜 모르시나요"라는 절절한 호소
- **정치적 배경**: 정철의 정치적 좌절과 고향으로의 귀향
- **문학적 완성도**: 조선 가사 문학의 백미로 평가받는 작품
- **감정의 깊이**: 단순한 충성심을 넘어선 진정한 사랑의 표현

### 📚 학습 포인트
1. **시대적 배경**: 임진왜란 이후의 정치적 상황
2. **작가의 심경**: 정치적 좌절과 고향에 대한 그리움
3. **문학적 기법**: 비유와 상징의 활용
4. **수능 출제 경향**: 고전문학 감상 문제의 단골 출제작

### 🎯 수능 대비 전략
- 작품의 배경과 작가의 상황을 정확히 파악
- 비유와 상징의 의미를 정확히 해석
- 작품에 담긴 감정의 변화 과정 이해
- 현대적 관점에서의 재해석 능력

---

## English Description

### "Sokmiin-gok" - Jeong Cheol's Final Love Song

**Sokmiin-gok** (속미인곡) is a classical Korean poetry work written by Jeong Cheol (정철) around 1588-1589 during his exile in Changpyeong, Jeollanam-do. This work, which follows "Samiin-gok" (사미인곡), represents the pinnacle of classical Korean poetry and is considered one of the most emotionally profound pieces in Korean literature.

**Key Themes:**
- **Deep Longing**: The work expresses profound yearning and loyalty
- **Political Context**: Reflects Jeong Cheol's political struggles and exile
- **Literary Excellence**: Showcases the highest level of classical Korean poetry
- **Emotional Depth**: Goes beyond simple loyalty to express genuine love

**Educational Value:**
This work is essential for Korean language students as it frequently appears in college entrance exams and represents the sophisticated emotional expression found in classical Korean literature.`,
    category: 'originals',
    tags: ['고전문학', '속미인곡', '정철', '가사'],
    author: 'SN Academy',
    date: '2025-10-01',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/sokmieungok'
  },
  {
    id: 'samieungok',
    title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다.',
    content: `## 「사미인곡」- 정철의 충성과 사랑의 노래

### 📖 작품 개요
정철이 선조에 대한 충성과 사랑을 미인에 비유하여 표현한 가사입니다. 정치적 상황에서의 복잡한 감정을 아름다운 비유로 승화시킨 작품으로, 조선 가사 문학의 대표작 중 하나입니다.

### 🎭 작품의 매력
- **정치적 충성**: 선조에 대한 절대적인 충성심 표현
- **문학적 비유**: 미인에 비유한 독창적인 표현 기법
- **감정의 깊이**: 정치적 좌절과 그리움의 복합적 감정
- **시대적 의미**: 임진왜란 이후의 정치적 상황 반영

### 📚 학습 포인트
1. **비유와 상징**: 미인 비유의 의미와 효과
2. **시대적 배경**: 임진왜란과 정유재란의 영향
3. **작가의 심경**: 정치적 좌절과 충성심의 갈등
4. **문학적 가치**: 가사 문학의 발전과 완성

### 🎯 수능 대비 전략
- 비유의 의미를 정확히 파악
- 작품의 시대적 배경 이해
- 작가의 정치적 입장과 문학적 표현의 관계 파악
- 고전문학의 현대적 해석 능력

---

## English Description

### "Samiin-gok" - Jeong Cheol's Song of Loyalty and Love

**Samiin-gok** (사미인곡) is a classical Korean poetry work by Jeong Cheol (정철) that expresses loyalty and love for King Seonjo through the metaphor of a beautiful woman. This work is considered one of the masterpieces of classical Korean poetry and represents the pinnacle of political poetry in the Joseon Dynasty.

**Key Themes:**
- **Political Loyalty**: Expresses absolute loyalty to King Seonjo
- **Literary Metaphor**: Uses the metaphor of a beautiful woman innovatively
- **Complex Emotions**: Reflects the complex feelings of political frustration and longing
- **Historical Context**: Mirrors the political situation after the Imjin War

**Educational Value:**
This work is crucial for understanding classical Korean literature and frequently appears in Korean language exams, showcasing the sophisticated emotional expression and political commentary found in Joseon Dynasty poetry.`,
    category: 'originals',
    tags: ['고전문학', '사미인곡', '정철', '가사'],
    author: 'SN Academy',
    date: '2025-09-30',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/samieungok'
  },
  {
    id: 'gapminga',
    title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 4탄으로 「갑민가」를 준비했습니다.',
    content: `## 「갑민가」- 백성의 아픔을 노래한 작품

### 📖 작품 개요
「갑민가」는 조선 후기 백성들의 고통과 아픔을 생생하게 표현한 작품입니다. 작자는 알려지지 않았지만, 당시 사회의 모순과 백성들의 삶의 현실을 날카롭게 비판한 작품으로 평가받습니다.

### 🎭 작품의 매력
- **현실적 비판**: 당시 사회의 모순을 직설적으로 비판
- **백성의 목소리**: 지배층이 아닌 백성의 시각에서 바라본 사회
- **문학적 가치**: 조선 후기 사회사 연구의 중요한 자료
- **감정적 공감**: 현대 독자들도 공감할 수 있는 보편적 메시지

### 📚 학습 포인트
1. **사회적 배경**: 조선 후기의 사회적 모순과 갈등
2. **문학적 특징**: 민중 문학의 특징과 의의
3. **비판적 시각**: 작품에 담긴 사회 비판 의식
4. **현대적 의미**: 과거와 현재의 연결점

### 🎯 수능 대비 전략
- 작품의 사회적 배경 정확히 파악
- 비판적 시각과 문학적 표현 이해
- 고전문학의 현대적 의미 해석
- 사회사적 관점에서의 작품 분석

---

## English Description

### "Gapmin-ga" - A Song of the People's Pain

**Gapmin-ga** (갑민가) is a classical Korean work that vividly expresses the suffering and pain of the common people during the late Joseon Dynasty. Although the author is unknown, this work is highly valued for its sharp criticism of social contradictions and realistic portrayal of people's lives.

**Key Themes:**
- **Social Criticism**: Direct criticism of social contradictions of the time
- **People's Voice**: A perspective from the common people, not the ruling class
- **Literary Value**: Important material for studying late Joseon social history
- **Emotional Resonance**: Universal messages that modern readers can relate to

**Educational Value:**
This work is essential for understanding the social conditions of late Joseon Dynasty and frequently appears in Korean literature exams, showcasing the critical consciousness and literary expression of the common people.`,
    category: 'originals',
    tags: ['고전문학', '갑민가', '수능국어'],
    author: 'SN Academy',
    date: '2025-09-28',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/gapminga'
  },
  {
    id: 'hwangokga',
    title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 3탄으로 「화왕가」를 준비했습니다.',
    content: `## 「화왕가」- 조선 후기 풍자 문학의 백미

### 📖 작품 개요
「화왕가」는 조선 후기 사회의 모순과 인간의 욕망을 풍자적으로 표현한 작품입니다. 특히 당시 지배층의 부패와 백성들의 고통을 날카롭게 비판한 작품으로, 조선 후기 풍자 문학의 대표작 중 하나입니다.

### 🎭 작품의 매력
- **날카로운 풍자**: 사회 모순을 유머러스하게 비판
- **현실적 통찰**: 인간의 욕망과 사회적 모순을 정확히 포착
- **문학적 완성도**: 풍자 문학의 높은 수준을 보여주는 작품
- **현대적 공감**: 오늘날에도 유효한 메시지

### 📚 학습 포인트
1. **풍자 문학**: 조선 후기 풍자 문학의 특징과 의의
2. **사회적 비판**: 작품에 담긴 사회 비판 의식
3. **문학적 기법**: 풍자와 비유의 효과적 활용
4. **시대적 의미**: 조선 후기 사회의 특징과 문학의 역할

### 🎯 수능 대비 전략
- 풍자의 대상과 방법 정확히 파악
- 작품의 사회적 배경과 비판 의식 이해
- 문학적 기법과 표현 효과 분석
- 고전문학의 현대적 의미 해석

---

## English Description

### "Hwangok-ga" - A Masterpiece of Satirical Literature

**Hwangok-ga** (화왕가) is a classical Korean work that satirically expresses the contradictions of late Joseon society and human desires. This work sharply criticizes the corruption of the ruling class and the suffering of the common people, making it one of the representative works of satirical literature in the late Joseon Dynasty.

**Key Themes:**
- **Sharp Satire**: Criticizes social contradictions with humor
- **Realistic Insight**: Accurately captures human desires and social contradictions
- **Literary Excellence**: Shows the high level of satirical literature
- **Modern Relevance**: Messages that remain valid today

**Educational Value:**
This work is crucial for understanding satirical literature and frequently appears in Korean literature exams, showcasing the sophisticated social criticism and literary techniques found in late Joseon literature.`,
    category: 'originals',
    tags: ['고전문학', '화왕가', '수능국어'],
    author: 'SN Academy',
    date: '2025-09-26',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/hwangokga'
  },
  {
    id: 'bukcheonga',
    title: '북천가',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 2탄으로 「북천가」를 준비했습니다.',
    content: `## 「북천가」- 조선 후기 민중의 목소리

### 📖 작품 개요
「북천가」는 조선 후기 북한 지역의 민중들이 겪는 고통과 아픔을 생생하게 표현한 작품입니다. 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하며, 민중의 삶의 현실을 솔직하게 드러낸 작품입니다.

### 🎭 작품의 매력
- **민중의 목소리**: 지배층이 아닌 민중의 시각에서 바라본 사회
- **현실적 비판**: 당시 사회의 모순을 직설적으로 비판
- **지역적 특성**: 북한 지역의 특수한 상황과 고통 표현
- **문학적 가치**: 조선 후기 사회사 연구의 중요한 자료

### 📚 학습 포인트
1. **사회적 배경**: 조선 후기 북한 지역의 사회적 상황
2. **민중 문학**: 민중 문학의 특징과 의의
3. **비판적 시각**: 작품에 담긴 사회 비판 의식
4. **지역적 특성**: 지역별 문학의 특징과 차이점

### 🎯 수능 대비 전략
- 작품의 사회적 배경과 지역적 특성 파악
- 민중 문학의 특징과 의의 이해
- 비판적 시각과 문학적 표현 분석
- 고전문학의 현대적 의미 해석

---

## English Description

### "Bukcheon-ga" - The Voice of the People

**Bukcheon-ga** (북천가) is a classical Korean work that vividly expresses the suffering and pain experienced by the people of the northern regions during the late Joseon Dynasty. This work sharply criticizes the social contradictions and corruption of the ruling class while honestly revealing the reality of the people's lives.

**Key Themes:**
- **People's Voice**: A perspective from the common people, not the ruling class
- **Realistic Criticism**: Direct criticism of social contradictions of the time
- **Regional Characteristics**: Expression of the unique situation and suffering of the northern regions
- **Literary Value**: Important material for studying late Joseon social history

**Educational Value:**
This work is essential for understanding the social conditions of late Joseon Dynasty and frequently appears in Korean literature exams, showcasing the critical consciousness and literary expression of the common people.`,
    category: 'originals',
    tags: ['고전문학', '북천가', '수능국어'],
    author: 'SN Academy',
    date: '2025-09-24',
    readTime: '9',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/bukcheonga'
  },
  {
    id: 'gwandong-byeolgok',
    title: '관동별곡',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 1탄으로 「관동별곡」을 준비했습니다.',
    content: `## 「관동별곡」- 정철의 대표작

### 📖 작품 개요
「관동별곡」은 정철이 관동 지역(강원도)의 아름다운 경치를 노래한 가사입니다. 조선 가사 문학의 대표작으로, 자연의 아름다움과 인간의 감정을 조화롭게 표현한 작품입니다.

### 🎭 작품의 매력
- **자연의 아름다움**: 관동 지역의 아름다운 경치를 생생하게 묘사
- **문학적 완성도**: 조선 가사 문학의 최고 수준을 보여주는 작품
- **감정의 깊이**: 자연에 대한 사랑과 그리움의 감정 표현
- **시대적 의미**: 조선 중기 문학의 특징을 잘 보여주는 작품

### 📚 학습 포인트
1. **가사 문학**: 조선 가사 문학의 특징과 발전
2. **자연 묘사**: 자연을 통한 감정 표현 기법
3. **작가의 심경**: 정철의 관동 지역에 대한 애정
4. **문학적 가치**: 조선 문학사에서의 의의

### 🎯 수능 대비 전략
- 가사 문학의 특징과 구조 이해
- 자연 묘사와 감정 표현의 관계 파악
- 작품의 시대적 배경과 문학사적 의의 이해
- 고전문학의 현대적 해석 능력

---

## English Description

### "Gwandong-byeolgok" - Jeong Cheol's Masterpiece

**Gwandong-byeolgok** (관동별곡) is a classical Korean poetry work by Jeong Cheol (정철) that celebrates the beautiful scenery of the Gwandong region (Gangwon Province). This work is considered a masterpiece of classical Korean poetry and represents the pinnacle of Joseon Dynasty poetry literature.

**Key Themes:**
- **Natural Beauty**: Vividly describes the beautiful scenery of the Gwandong region
- **Literary Excellence**: Shows the highest level of classical Korean poetry
- **Emotional Depth**: Expresses love and longing for nature
- **Historical Significance**: Represents the characteristics of mid-Joseon literature

**Educational Value:**
This work is essential for understanding classical Korean literature and frequently appears in Korean language exams, showcasing the sophisticated natural description and emotional expression found in Joseon Dynasty poetry.`,
    category: 'originals',
    tags: ['고전문학', '관동별곡', '수능국어'],
    author: 'SN Academy',
    date: '2025-09-22',
    readTime: '12',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/gwandong-byeolgok'
  },
  {
    id: 'ai-startup-vision',
    title: 'SN AI 스타트업의 비전',
    excerpt: 'SN Academy AI 스타트업의 비전과 목표를 소개합니다.',
    content: `SN Academy AI 스타트업의 비전과 목표를 소개합니다.`,
    category: 'startup',
    tags: ['AI교육', '스타트업', '비전'],
    author: 'SN Academy',
    date: '2025-09-20',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/startup/ai-startup-vision'
  },
  {
    id: 'ai-startup-intro',
    title: 'SN AI 스타트업 소개',
    excerpt: 'SN Academy AI 스타트업에 대한 전반적인 소개입니다.',
    content: `SN Academy AI 스타트업에 대한 전반적인 소개입니다.`,
    category: 'startup',
    tags: ['AI교육', '스타트업', '소개'],
    author: 'SN Academy',
    date: '2025-09-18',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/startup/ai-startup-intro'
  },
  {
    id: 'ai-startup-problem',
    title: 'SN AI 스타트업이 해결하는 문제',
    excerpt: 'SN Academy AI 스타트업이 교육 시장의 어떤 문제를 해결하는지 알아봅니다.',
    content: `SN Academy AI 스타트업이 교육 시장의 어떤 문제를 해결하는지 알아봅니다.`,
    category: 'problems',
    tags: ['AI교육', '스타트업', '문제해결'],
    author: 'SN Academy',
    date: '2025-09-16',
    readTime: '9',
    featured: false,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/problems/ai-startup-problem'
  },
  {
    id: 'ai-startup-review',
    title: 'SN AI 스타트업 사용 후기',
    excerpt: 'SN Academy AI 스타트업 솔루션을 사용한 학생들의 생생한 후기입니다.',
    content: `SN Academy AI 스타트업 솔루션을 사용한 학생들의 생생한 후기입니다.`,
    category: 'reviews',
    tags: ['AI교육', '스타트업', '후기'],
    author: 'SN Academy',
    date: '2025-09-14',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/reviews/ai-startup-review'
  },
  {
    id: 'ai-startup-admissions',
    title: 'SN AI 스타트업 입시 정보',
    excerpt: 'SN Academy AI 스타트업과 관련된 최신 입시 정보를 제공합니다.',
    content: `SN Academy AI 스타트업과 관련된 최신 입시 정보를 제공합니다.`,
    category: 'admissions',
    tags: ['AI교육', '스타트업', '입시정보'],
    author: 'SN Academy',
    date: '2025-09-12',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/admissions/ai-startup-admissions'
  },
  {
    id: '2818205a96df801bae59cd1dafaf26b9',
    title: 'SN독학기숙학원 방화벽의 모든 것!',
    excerpt: 'SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다.',
    content: `> SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다.
저희 SN 독학기숙학원이 국내 최초로 기숙학원 내에서 인터넷 방화벽을 도입한 지 어느덧 11년이 되었습니다. SN은 2014년 부터 방화벽 장비를 도입했습니다. 2018년에는 미국 Cisco사의 최신 방화벽을 도입하여 학생들에게 큰 호평도 받고, 타 기숙학원에서는 어떻게 방화벽을 설계했는지 컨설팅 문의도 몇 차례 온 바 있습니다.
많은 학원들이 방화벽을 갖추고 있다고 홍보하지만, 타 기숙학원에서 퇴소해 온 학생들의 이야기를 들어보면 제대로 막지 못하는 경우가 대부분입니다. 방화벽은 높은 수준의 기술력, 물적&인적 투자, 노하우를 요구하기 때문입니다.
SN도 처음 도입 후 불완전한 방화벽으로 시행착오들을 겪었기에 타 기숙학원들의 상황이 짐작이 됩니다.
SN의 방화벽 역사
- 14년도 - SN 방화벽 장비 최초 도입
- 16년도 - 장비 교체, 전문적인 컨설팅 및 정비를 통해 방화벽 운용 노하우 정립
- 18년도 - 미국 CISCO 장비 도입. 당시 최상위 사양의 방화벽
2018년 도입된 Cisco 장비
2018년 Cisco 장비 도입 이후 방화벽이 혁신 수준으로 한층 더 업그레이드 되었고, 도입이후부터 25년 올해 업그레이드 전까지도 방화벽은 기숙학원 내에서는 가장 선두주자였습니다.
이미 선두주자의 자리에 있었지만, 2025년 SN은 다시 한 번 혁신을 선택했습니다.
중소기업 수준에서는 사실상 불가능하다고 여겨지던, 입시 수험생에 특화된 차세대 방화벽을 순수 자체 기술로 개발한 것입니다. 현재는 단순한 기숙학원 방화벽 수준을 넘어, 국내 대기업 수준의 보안 체계에도 뒤처지지 않는 수준까지 발전하였습니다.
> 단순한 '차단'만으로는 부족하다는 판단
기존 Cisco 장비도 훌륭했습니다. 수 천만원을 들여 장비를 도입하고, 7년간 라이선스를 갱신하며 안정적으로 학원을 운영해 왔죠.
하지만 이 시스템은 교육용으로 특화되어 있지 않았고, 모든 기능이 '차단'에만 집중돼 있었습니다. 프록시, VPN, 우회 DNS는 물론 차단되지만, 그 이상의 섬세한 정책이나 유연한 제어는 기대하기 어려웠습니다.
예를 들어, 수험생 커뮤니티 사이트인 오르비가 있습니다. 오르비는 커뮤니티뿐 아니라 '오르비 클래스'라는 인터넷 강의 플랫폼도 함께 운영 중인데요. 문제는 이 두 사이트가 같은 기반 시스템을 공유하고 있다는 점입니다.
학생들에게는 커뮤니티는 불필요하지만, 클래스는 꼭 필요합니다. 하지만 구조상 커뮤니티만 차단하고 클래스만 허용하는 것이 기술적으로 불가능했죠.
결국 커뮤니티와 클래스 모두를 차단할 수밖에 없었고, 강의를 들어야 하는 학생들은 별도로 핫스팟을 켜서 이용해야만 했습니다. 여기에서 관리의 공백이 생기죠.
오르비를 비롯한 비슷한 케이스들을 Cisco사의 기술지원 서비스를 통해 문제를 해결해보려 했습니다. 그러나 이 간단한 문제도 Cisco 사와 파트너사를 통해 개발하면 비용상 합리적이지 않았고, 그 돈이면 우리가 개발하는게 낫지 라는 생각을 하게 되었습니다.
결국, 우리는 교육 현장에 꼭 필요한 방향성을 기준으로, 새로운 방화벽 시스템을 오픈소스 기반으로 직접 설계하기로 했습니다.
> AI 시대, 보안의 기준이 달라졌다.
AI 시대가 오며 패러다임이 바뀌었고, 보안의 판도를 근본적으로 바꿔놓았습니다. 예전처럼 단순히 '차단'만으로는 충분하지 않다는 위기의식이 생겼습니다.
SN독학기숙학원에 다니는 대부분의 학생들, 특히 약 90%는 학습 외 활동에 큰 관심이 없습니다. 그러나 서울대 공대, 의대 등을 준비하는 일부 최상위권 학생들 중에는 AI 기술과 자신의 지식을 활용해 방화벽을 우회하려는 시도를 하기도 합니다. (방화벽에 대한 도전 욕구가 생긴답니다...)
일반적인 고등학생 수준에서는 사실상 불가능한 일이지만, 전국 상위 0.1% 학생이라면 가능성을 완전히 배제할 수 없습니다. 그리고 저희는 그런 학생들도 필요하다고 생각합니다. 왜냐고요? 그 이유는 아래에서 자세히 설명드리겠습니다 :)
- 향상된 방화벽 능력
- 속도 향상과 보안 능력
- 실시간 DNS 분석으로 우회 시도 감지 → 운영팀 알림
- 시도된 경로는 즉시 학습 및 기록 → 자동 차단 정책 생성
- 반복 시도 시 방화벽이 스스로 진화
방화벽이 업그레이드 이후 실제로 250명의 학생 중 시도한 인원은 단 2명, 모두 실패했습니다.
VPN, 프록시, 우회 DNS 시도 등 모두 막아내는 경이로운 능력을 보여주었습니다. 그 전 Cisco 장비도 막아내긴 했지만, 이 정도 능력까지는 아니였습니다. 허용된 사이트 내에서 홈페이지 변화가 있으면, 대응이 즉각적이지 않았습니다. 또한 홈페이지 구조 변화가 생기면 우회루트가 생기기도 했죠.
또한, 우리가 어떤 사이트에 접속할 때 화면에 보이는 정보 외에도 백그라운드에서는 다양한 데이터 수집 활동 등이 이루어집니다. 이러한 숨겨진 요소들은 속도를 저하시킬 뿐만 아니라, 악성 코드나 추적 프로그램의 경로가 되기도 합니다. SNarLink는 이 과정에서 학습에 불필요한 요소들을 자동으로 걸러내고, 정말 필요한 정보만 선별적으로 허용함으로써 인터넷 속도를 향상시키는 동시에 악성 프로그램까지 효과적으로 차단합니다.
하지만 앞서 말씀드린 것처럼, 세상에 완벽한 방화벽은 없습니다. 그래서 SNarlink는 단순 차단에 그치지 않고 시도와 의도를 읽는 탐지 능력을 갖추었습니다. 학생이 방화벽을 우회하는 시도나 만에 하나 뚫리더라도 즉시 탐지하여 운영자에게 알람을 띄우고, 즉각 대응이 가능하도록 설계한 것이죠. 그리고 어떤 학생이 시도했는지까지 특정이 가능합니다. (이전 방화벽은 학생의 제보 혹은 사람의 눈으로 점검하면서 우회를 알수 있었고, 누군지 특정도 어려웠습니다. 그러나 지금은 우회 시도 알림과 동시에 특정까지 가능합니다 !!)
방화벽은 우회 기술들을 AI 로그 분석을 통해 학습하며, 앞으로 유사한 시도는 모두 차단해버립니다. 단순한 설정된 차단 시스템이 아닌 학습하는 방화벽이죠. 그래서 학원에서 방화벽 뚫는 시도를 하는 학생들도 필요한 겁니다 ㅎ SNarlink의 학습 양분이 되니까요. (이번 5월에 방화벽을 교체하면서 불완전한 시기가 있었습니다 ... 당시 방화벽 안정화 및 AI가 학습 과정이어서 그랬습니다.. 학생들에게는 정말 미안했네요 ㅠㅠ )
가장 까다로웠던건 Apple이였습니다. Apple 기기의 경우, 우회 트래픽 구조가 매우 정교합니다. 우리는 애플 트래픽만 별도로 분석했고, 관련 코드만 2,000줄 이상 구현했습니다. 애플 기기 기능 중 학습에 필요한 부분 인증, 로그인, 캘린더, 저장된 음악 듣기 기능은 허용하고, 이외 우회 및 Private Relay, 음악검색, 뉴스, 음악 다운로드 및 스트리밍, game 같은 기능은 모두 차단식이지요. 그 결과, iMessage까지 거의 완벽하게 차단할 수 있었습니다.
이전에는 iMessage 차단이 일시적으로 가능하더라도, Apple 측의 업데이트나 통신 구조 변경이 있을 경우 다시 뚫리는 현상이 반복되곤 했습니다. 뚫렸는지 인지하는 데에도 시간이 걸렸고, 대응까지도 수동적일 수밖에 없었습니다. 그러나 현재는 시스템이 실시간으로 트래픽 이상 징후를 감지하고, 혹여나 iMessage가 뚫리더라도 즉시 알림이 발생하며, 대응도 자동화되어 빠르게 이루어집니다.
URL 단위 예외 처리도 가능합니다. 현재는 베타 버전이지만, URL 단위로 세밀하게 접근을 허용하는 기능도 갖추고 있습니다. 위에 말씀드린 오르비가 가장 대표적인 사례입니다. 위에 예시를 드린것처럼 오르비는 같은 기반에 시스템을 공유하고 있어, 기존에는 오르비 커뮤니티만 차단이 불가능 했습니다. 커뮤니티와 클래스를 같이 차단해야 했죠. 하지만 URL 단위 예외 처리를 통해 지금의 방화벽에서는 커뮤니티만 차단이 가능합니다!!`,
    category: 'columns',
    tags: [],
    author: 'SN Academy',
    date: '2025-10-03',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/columns/2818205a96df801bae59cd1dafaf26b9'
  }
];

// 헬퍼 함수들
export function getLatestPosts(limit: number = 5): Post[] {
  return allPosts
    .filter(post => post.published) // published 된 글만 가져오기
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getFeaturedPosts(): Post[] {
  return allPosts.filter(post => post.featured && post.published); // featured 이고 published 된 글만 가져오기
}

export function getPostById(id: string): Post | undefined {
  return allPosts.find(post => post.id === id && post.published); // published 된 글만 찾기
}

export function getPostsByCategory(category: string): Post[] {
  return allPosts.filter(post => post.category === category && post.published); // published 된 글만 가져오기
}

export function searchPosts(query: string): Post[] {
  const lowercaseQuery = query.toLowerCase();
  return allPosts.filter(post => 
    post.published && // published 된 글만 검색
    (post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );
}