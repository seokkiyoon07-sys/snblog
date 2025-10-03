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
    excerpt: '정철의 마지막 사랑과 그리움을 담은 「속미인곡」으로 조선 문학의 절정을 만나보세요.',
    content: `## 「속미인곡」- 사랑의 절정과 문학의 완성

### 💔 사랑의 절정을 담은 문학
「속미인곡」은 정철이 1588~1589년 경 고향인 전남 창평에서 「사미인곡」에 이어 지은 가사입니다. 이 작품은 단순한 정치적 충성을 넘어서, 진정한 사랑의 절정과 그리움의 깊이를 보여주는 조선 가사 문학의 최고봉입니다.

### 🎭 문학적 완성도
- **감정의 절정**: "기다리는 나를 왜 모르시나요"라는 절절한 호소
- **정치적 배경**: 정철의 정치적 좌절과 고향으로의 귀향
- **문학적 완성도**: 조선 가사 문학의 백미로 평가받는 작품
- **감정의 깊이**: 단순한 충성심을 넘어선 진정한 사랑의 표현

### 🌍 세계 문학사적 의의
이 작품은 동아시아 정치시의 전통을 계승하면서도, 조선만의 독특한 정치적 상황을 반영합니다. 정치적 충성을 진정한 사랑으로 승화시키는 방식은 세계 정치 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해
1. **사랑의 문학적 표현**: 정치적 충성을 사랑으로 승화시키는 방법
2. **시대적 배경**: 임진왜란 이후의 복잡한 정치적 상황
3. **작가의 심경**: 정치적 좌절과 고향에 대한 그리움
4. **문학적 가치**: 조선 가사 문학의 완성도

### 🎭 문학 감상의 진정한 즐거움
「속미인곡」을 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 감정 표현의 힘과 진정한 사랑의 의미를 일깨워줍니다. 진정한 문학은 개인의 감정을 넘어서 시대의 아픔과 기쁨을 담아낼 수 있다는 것을 보여줍니다.

---

## English Description

### "Sokmiin-gok" - The Culmination of Love and Literature

**Sokmiin-gok** (속미인곡) is a masterpiece of classical Korean literature written by Jeong Cheol (정철) around 1588-1589 during his exile in Changpyeong, Jeollanam-do. This work, which follows "Samiin-gok" (사미인곡), represents the pinnacle of classical Korean poetry and showcases the deepest expression of love and longing in Korean literature.

**Literary Excellence:**
- **Emotional Climax**: Expresses the deepest yearning with "Why don't you know the one who waits for you?"
- **Political Context**: Reflects Jeong Cheol's political struggles and exile
- **Literary Achievement**: Considered the masterpiece of classical Korean poetry
- **Emotional Depth**: Transcends mere political loyalty to express genuine love

**Global Literary Significance:**
This work inherits the East Asian tradition of political poetry while reflecting the unique political conditions of Joseon. The way it transforms political loyalty into genuine love represents a valuable contribution to world literature, demonstrating how literature can sublimate political emotions into the highest form of human expression.

**Contemporary Relevance:**
"Sokmiin-gok" shows us that true literature has the power to express not only personal emotions but also the deepest human longings. It demonstrates how literature can serve as a medium for understanding the complex relationship between love, loyalty, and political commitment.`,
    category: 'originals',
    tags: ['고전문학', '속미인곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-10-01',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/pqr678stu901/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=pqr678stu901',
    url: '/originals/sokmieungok'
  },
  {
    id: 'samieungok',
    title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
    excerpt: '정철의 정치적 사랑과 충성을 담은 「사미인곡」으로 조선 문학의 깊이를 만나보세요.',
    content: `## 「사미인곡」- 정치적 사랑의 문학적 승화

### 💕 사랑과 충성의 문학적 표현
「사미인곡」은 정철이 선조에 대한 충성과 사랑을 미인에 비유하여 표현한 문학적 걸작입니다. 이 작품은 단순한 정치적 충성을 넘어서, 복잡한 인간의 감정을 아름다운 문학적 비유로 승화시킨 조선 가사 문학의 대표작입니다.

### 🎭 문학적 완성도
- **정교한 비유 기법**: 미인에 비유한 독창적이고 정교한 표현
- **감정의 깊이**: 정치적 좌절과 그리움의 복합적 감정 표현
- **시대적 의미**: 임진왜란 이후의 복잡한 정치적 상황 반영
- **문학적 가치**: 조선 가사 문학의 발전과 완성

### 🌍 세계 문학사적 의의
이 작품은 동아시아 정치시의 전통을 계승하면서도, 조선만의 독특한 정치적 상황을 반영합니다. 정치적 충성을 문학적으로 승화시키는 방식은 세계 정치 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해
1. **비유와 상징**: 미인 비유의 의미와 문학적 효과
2. **시대적 배경**: 임진왜란과 정유재란의 정치적 영향
3. **작가의 심경**: 정치적 좌절과 충성심의 복잡한 갈등
4. **문학적 가치**: 가사 문학의 발전과 완성도

### 🎭 문학 감상의 진정한 즐거움
「사미인곡」을 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 감정 표현의 힘과 정치적 상황을 문학적으로 승화시키는 방법을 보여줍니다. 진정한 문학은 개인의 감정을 넘어서 시대의 아픔과 기쁨을 담아낼 수 있다는 것을 보여줍니다.

---

## English Description

### "Samiin-gok" - The Literary Sublimation of Political Love

**Samiin-gok** (사미인곡) is a masterpiece of classical Korean literature that expresses Jeong Cheol's loyalty and love for King Seonjo through the metaphor of a beautiful woman. This work transcends mere political loyalty to become a profound literary expression of complex human emotions.

**Literary Excellence:**
- **Sophisticated Metaphor**: Uses the metaphor of a beautiful woman with literary finesse
- **Emotional Depth**: Expresses the complex feelings of political frustration and longing
- **Historical Context**: Reflects the complex political situation after the Imjin War
- **Literary Achievement**: Represents the pinnacle of classical Korean poetry

**Global Literary Significance:**
This work inherits the East Asian tradition of political poetry while reflecting the unique political conditions of Joseon. The way it transforms political loyalty into literary expression represents a valuable contribution to world literature, demonstrating how literature can sublimate political emotions into art.

**Contemporary Relevance:**
"Samiin-gok" shows us that true literature has the power to express not only personal emotions but also the pain and joy of an entire era. It demonstrates how literature can serve as a medium for understanding complex political and emotional relationships.`,
    category: 'originals',
    tags: ['고전문학', '사미인곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-09-30',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/mno345pqr678/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=mno345pqr678',
    url: '/originals/samieungok'
  },
  {
    id: 'gapminga',
    title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
    excerpt: '조선 후기 백성의 아픔과 저항을 담은 「갑민가」로 진정한 민중 문학을 만나보세요.',
    content: `## 「갑민가」- 민중의 절규와 저항

### 💔 시대의 아픔을 담은 문학
「갑민가」는 조선 후기 백성들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.

### 🎭 문학적 가치와 의미
- **민중의 진실한 목소리**: 지배층이 아닌 백성의 시각에서 바라본 사회
- **날카로운 사회 비판**: 당시 사회의 모순을 직설적으로 폭로
- **문학사적 의의**: 조선 후기 민중 문학의 대표작
- **감정적 공감**: 현대 독자들도 공감할 수 있는 보편적 메시지

### 🌍 세계 문학사적 관점
이 작품은 동아시아 민중 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 민중의 고통과 저항을 문학적으로 승화시킨 방식은 세계 민중 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 문학적 이해
1. **민중 문학의 전통**: 동아시아 민중 문학의 흐름과 특징
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등
3. **문학과 사회**: 문학이 사회 변화에 미치는 영향
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움
「갑민가」를 읽는 것은 과거의 아픔을 되새기는 것만이 아닙니다. 이 작품은 우리에게 문학이 가진 사회적 힘과 민중의 목소리가 얼마나 소중한지를 일깨워줍니다. 진정한 문학은 아름다움만이 아니라, 진실과 정의를 추구하는 힘을 가지고 있다는 것을 보여줍니다.

---

## English Description

### "Gapmin-ga" - The Cry of the People

**Gapmin-ga** (갑민가) is a powerful work of classical Korean literature that gives voice to the suffering and resistance of the common people during the late Joseon Dynasty. This work transcends mere literary expression to become a social document that exposes the contradictions and corruption of the ruling class.

**Literary and Social Significance:**
- **Authentic Voice**: Represents the perspective of the common people, not the ruling elite
- **Sharp Social Criticism**: Directly exposes the social contradictions of the time
- **Literary Historical Value**: A masterpiece of late Joseon popular literature
- **Emotional Resonance**: Contains universal messages that modern readers can relate to

**Global Literary Context:**
This work inherits the East Asian tradition of popular literature while reflecting the unique social conditions of Joseon. The way it transforms the suffering and resistance of the people into literary expression represents a valuable contribution to world literature, demonstrating the power of literature to give voice to the voiceless.

**Contemporary Relevance:**
"Gapmin-ga" reminds us that true literature has the power not only to create beauty but also to pursue truth and justice. It shows how literature can serve as a medium for social change and the expression of human dignity.`,
    category: 'originals',
    tags: ['고전문학', '갑민가', '민중문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-28',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/jkl012mno345/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=jkl012mno345',
    url: '/originals/gapminga'
  },
  {
    id: 'hwangokga',
    title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
    excerpt: '조선 후기 풍자 문학의 백미 「화왕가」로 문학의 유머와 비판정신을 만나보세요.',
    content: `## 「화왕가」- 풍자 문학의 진수

### 😂 유머로 승화된 사회 비판
「화왕가」는 조선 후기 사회의 모순과 인간의 욕망을 풍자적으로 표현한 문학적 걸작입니다. 이 작품은 단순한 비판을 넘어서, 유머와 해학을 통해 사회의 부조리를 날카롭게 지적하는 문학의 힘을 보여줍니다.

### 🎭 문학적 완성도
- **정교한 풍자 기법**: 사회 모순을 유머러스하게 비판하는 문학적 기교
- **현실적 통찰력**: 인간의 욕망과 사회적 모순을 정확히 포착
- **문학적 완성도**: 조선 후기 풍자 문학의 최고 수준
- **시대를 초월한 메시지**: 오늘날에도 유효한 보편적 가치

### 🌍 세계 문학사적 의의
이 작품은 동아시아 풍자 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 유머와 해학을 통한 사회 비판의 방식은 세계 풍자 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해
1. **풍자 문학의 전통**: 동아시아 풍자 문학의 흐름과 특징
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등
3. **문학적 기법**: 풍자와 해학의 효과적 활용
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움
「화왕가」를 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 유머의 힘과 사회 비판의 정신을 일깨워줍니다. 진정한 문학은 아름다움뿐만 아니라, 사회의 부조리를 지적하고 개선하려는 의지를 담고 있다는 것을 보여줍니다.

---

## English Description

### "Hwangok-ga" - The Art of Satirical Literature

**Hwangok-ga** (화왕가) is a masterpiece of classical Korean literature that uses humor and satire to expose the contradictions of late Joseon society and human desires. This work transcends mere criticism to demonstrate the power of literature to address social injustice through wit and humor.

**Literary Excellence:**
- **Sophisticated Satire**: Uses humor to criticize social contradictions with literary finesse
- **Realistic Insight**: Accurately captures human desires and social contradictions
- **Literary Achievement**: Represents the highest level of satirical literature in late Joseon
- **Timeless Message**: Contains universal values that remain relevant today

**Global Literary Significance:**
This work inherits the East Asian tradition of satirical literature while reflecting the unique social conditions of Joseon. The way it uses humor and wit for social criticism represents a valuable contribution to world literature, demonstrating how literature can address social issues through entertainment.

**Contemporary Relevance:**
"Hwangok-ga" reminds us that true literature has the power not only to create beauty but also to critique society and inspire change. It shows how humor can be a powerful tool for social commentary and how literature can serve as a mirror to society.`,
    category: 'originals',
    tags: ['고전문학', '화왕가', '풍자문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-26',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/ghi789jkl012/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=ghi789jkl012',
    url: '/originals/hwangokga'
  },
  {
    id: 'bukcheonga',
    title: '북천가',
    excerpt: '조선 후기 민중의 아픔과 저항을 담은 「북천가」로 진정한 문학의 힘을 만나보세요.',
    content: `## 「북천가」- 민중 문학의 진수

### 💔 시대의 아픔을 담은 문학
「북천가」는 조선 후기 북한 지역 민중들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.

### 🎭 문학적 가치와 의미
- **민중의 진실한 목소리**: 지배층이 아닌 민중의 시각에서 바라본 사회
- **날카로운 사회 비판**: 당시 사회의 모순을 직설적으로 폭로
- **지역적 특수성**: 북한 지역의 고유한 상황과 고통을 생생하게 표현
- **문학사적 의의**: 조선 후기 민중 문학의 대표작

### 🌍 세계 문학사적 관점
이 작품은 동아시아 민중 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 민중의 고통과 저항을 문학적으로 승화시킨 방식은 세계 민중 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 문학적 이해
1. **민중 문학의 전통**: 동아시아 민중 문학의 흐름과 특징
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등
3. **문학과 사회**: 문학이 사회 변화에 미치는 영향
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움
「북천가」를 읽는 것은 과거의 아픔을 되새기는 것만이 아닙니다. 이 작품은 우리에게 문학이 가진 사회적 힘과 민중의 목소리가 얼마나 소중한지를 일깨워줍니다. 진정한 문학은 아름다움만이 아니라, 진실과 정의를 추구하는 힘을 가지고 있다는 것을 보여줍니다.

---

## English Description

### "Bukcheon-ga" - The Voice of the Oppressed

**Bukcheon-ga** (북천가) is a powerful work of classical Korean literature that gives voice to the suffering and resistance of the common people in the northern regions during the late Joseon Dynasty. This work transcends mere literary expression to become a social document that exposes the contradictions and corruption of the ruling class.

**Literary and Social Significance:**
- **Authentic Voice**: Represents the perspective of the common people, not the ruling elite
- **Sharp Social Criticism**: Directly exposes the social contradictions of the time
- **Regional Specificity**: Vividly expresses the unique suffering of the northern regions
- **Literary Historical Value**: A masterpiece of late Joseon popular literature

**Global Literary Context:**
This work inherits the East Asian tradition of popular literature while reflecting the unique social conditions of Joseon. The way it transforms the suffering and resistance of the people into literary expression represents a valuable contribution to world literature, demonstrating the power of literature to give voice to the voiceless.

**Contemporary Relevance:**
"Bukcheon-ga" reminds us that true literature has the power not only to create beauty but also to pursue truth and justice. It shows how literature can serve as a medium for social change and the expression of human dignity.`,
    category: 'originals',
    tags: ['고전문학', '북천가', '민중문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-24',
    readTime: '9',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/def456ghi789/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=def456ghi789',
    url: '/originals/bukcheonga'
  },
  {
    id: 'gwandong-byeolgok',
    title: '관동별곡',
    excerpt: '정철의 대표작 「관동별곡」으로 조선 가사 문학의 아름다움을 만나보세요.',
    content: `## 「관동별곡」- 조선 가사 문학의 백미

### 🌄 작품의 진정한 아름다움
「관동별곡」은 단순한 풍경 묘사를 넘어서, 정철이 관동 지역(강원도)의 자연을 통해 인간의 내면세계를 표현한 문학적 걸작입니다. 이 작품은 조선 가사 문학의 최고봉으로 평가받으며, 자연과 인간의 조화를 통해 문학의 본질을 보여줍니다.

### 🎨 문학적 완성도
- **시각적 묘사**: 관동의 산천을 생생하게 그려내는 회화적 표현
- **음악적 리듬**: 가사의 운율과 리듬이 자연의 흐름과 일치
- **감정의 깊이**: 단순한 감탄을 넘어선 철학적 사유
- **상징적 의미**: 자연을 통한 인간 존재의 의미 탐구

### 🌍 세계 문학사적 의의
이 작품은 동아시아 자연시의 전통을 계승하면서도, 조선만의 독특한 문학적 성취를 보여줍니다. 자연에 대한 사랑과 경외심, 그리고 인간의 감정을 자연과 조화롭게 표현하는 방식은 세계 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 이해
1. **자연과 문학**: 자연을 통한 문학적 표현의 전통
2. **조선 문학의 특성**: 중국 문학과 구별되는 조선 문학의 독창성
3. **가사 문학의 발전**: 조선 가사 문학의 완성도
4. **현대적 의미**: 자연과 인간의 관계에 대한 현대적 해석

### 🎭 작품 감상의 즐거움
「관동별곡」을 읽는 것은 단순한 학습이 아닙니다. 정철이 바라본 관동의 아름다운 풍경을 마음속으로 그려보며, 자연과 인간의 조화로운 관계를 느껴보는 문학적 여행입니다. 이 작품은 우리에게 자연의 소중함과 문학의 아름다움을 동시에 일깨워줍니다.

---

## English Description

### "Gwandong-byeolgok" - A Masterpiece of Korean Classical Literature

**Gwandong-byeolgok** (관동별곡) is not merely a description of beautiful landscapes, but a profound literary work that explores the relationship between nature and human consciousness. Written by Jeong Cheol (정철), this piece represents the pinnacle of classical Korean poetry and showcases the unique beauty of Joseon Dynasty literature.

**Literary Excellence:**
- **Visual Poetry**: Paints the landscapes of Gwandong with vivid, pictorial language
- **Musical Rhythm**: The rhythm and meter of the verse mirror the flow of nature
- **Emotional Depth**: Transcends simple admiration to explore philosophical contemplation
- **Symbolic Meaning**: Uses nature as a medium to explore the meaning of human existence

**Global Literary Significance:**
This work inherits the East Asian tradition of nature poetry while achieving a uniquely Korean literary accomplishment. The way it harmoniously expresses human emotions through nature represents a valuable contribution to world literature, demonstrating the sophisticated relationship between humanity and the natural world.

**Contemporary Relevance:**
"Gwandong-byeolgok" offers timeless insights into the human-nature relationship, making it relevant for modern readers who seek to understand our connection with the environment and the role of literature in expressing this relationship.`,
    category: 'originals',
    tags: ['고전문학', '관동별곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-09-22',
    readTime: '12',
    featured: false,
    published: true,
    thumbnail: 'https://img.youtube.com/vi/abc123def456/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=abc123def456',
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