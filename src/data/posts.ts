// ⚠️ 중요: 이 파일은 수동으로 관리됩니다. Notion 동기화로 덮어쓰지 마세요!
// 📝 포스트 추가/수정 시 이 파일을 직접 편집하세요.
// 🔒 Notion 포스트는 notion-posts.ts에서 자동으로 가져옵니다.

import { notionPosts } from './notion-posts';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  featuredOrder?: number; // 추천 포스트 순서 (낮을수록 먼저)
  published: boolean;
  thumbnail?: string;
  youtubeUrl?: string;
  url: string;
  type?: 'standard' | 'special'; // 'standard'는 기본값, 'special'은 전용 컴포넌트 사용
  badge?: string; // 뱃지 텍스트 (예: "2026 수능출제 작품")
}

export const allPosts: Post[] = [
  {
    id: 'suneung-korean-17',
    title:
      '2025 수능 국어 17번, 정말 오류일까? - 정답 ③을 옹호하는 논리적 근거',
    excerpt:
      '온라인에서 논란이 된 수능 국어 17번 문항. 평가원 정답 ③번이 왜 타당한지 과제 규정과 선지 매핑 방식을 기준으로 차분하게 정리합니다.',
    content: `올해 수능 국어 17번 문항을 두고 온라인에서는 "오류 아니냐"는 논쟁이 계속되고 있습니다. 특히 어느 교수님의 해설이 퍼지면서 논란은 더욱 커졌죠.

하지만 평가원 문항의 과제 규정과 선지 매핑 방식을 기준으로 보면, 정답으로 제시된 ③번 선택지는 충분히 타당합니다. 왜 이렇게 말할 수 있는지, 차분하게 정리해보겠습니다.

<details>
<summary>수능 17번 문제 원 지문</summary>

![2025 수능 국어 17번 원문](/images/columns/suneung-korean-17/26korean-page-05.png)

</details>

![2025 수능 국어 17번 문제](/images/columns/suneung-korean-17/26korean-page-06-0001.png)

<details>
<summary>포스텍 이충형 교수님 설명글 - 출처: 오르비</summary>

![해설 1](/images/columns/suneung-korean-17/suneunt17original-page-1.png)

![해설 2](/images/columns/suneung-korean-17/suneunt17original-page-2.png)

![해설 3](/images/columns/suneung-korean-17/suneunt17original-page-3.png)

![해설 4](/images/columns/suneung-korean-17/suneunt17original-page-4.png)

![해설 5](/images/columns/suneung-korean-17/suneunt17original-page-5.png)

![해설 6](/images/columns/suneung-korean-17/suneunt17original-page-6.png)

![해설 7](/images/columns/suneung-korean-17/suneunt17original-page-7.png)

![해설 8](/images/columns/suneung-korean-17/suneunt17original-page-8.png)

</details>

---

## 1. 이 문항의 핵심 과제는 무엇인가?

이 문제는 **독해·견해대응형**입니다.

즉,
- "윗글을 바탕으로"
- "그 견해에 의하면"

이라는 조건 안에서 각 철학자의 입장을 정확히 매핑하여 판단해야 하는 유형입니다.

**철학적으로 어떤 입장이 더 옳은가를 묻는 문제가 아니라, 지문 안에서 요약된 입장과 선지의 일치 여부를 확인하는 문제입니다.**

---

## 2. 왜 ③번이 맞는가?

③번은 다음 논리를 따릅니다.

### 지문이 요약한 "칸트 이전까지 유력했던 견해"

- 인격 동일성의 근거 = 시간 속에서 지속하는 '생각하는 나(영혼)'이라는 단일 주관
- 즉, **생각의 지속 = 동일 인격**

### 갑의 주장

- "생각하는 나의 지속만으로는 인격 동일성이 보장되지 않는다"

### 따라서

- 그 견해에 의하면 갑의 주장은 옳지 않다

즉, 지문에 요약된 원리를 선지 문장과 대조하면 ③은 자연스럽게 참입니다.

---

## 3. 교수님 반론은 왜 다른 결론에 도달했는가?

교수님의 논지는 다음과 같은 **관점 이동**을 포함합니다.

### 교수님이 추가한 전제

- 스캔 프로그램 속 존재는 "단일한 주관"이 유지되지 않는다
- 그러므로 갑의 주장에 여지가 있다

하지만 이것은 **지문 밖 가정**입니다. 문항은 "스캔 사실 여부"나 "동일성 논증의 엄밀성"을 묻지 않습니다.

**시험에서 요구하는 것은:**
- 지문 내부 전제
- "그 견해에 의하면"이라는 한정
- 매핑 정확도

따라서 교수님의 분석은 철학적으로 의미 있지만, **시험 채점 기준과는 다른 층위의 접근**입니다.

---

## 4. 다른 선지들은 왜 오답인가?

### ❌ ① 롱게네스

- **기준**: 동시적으로 자기 것으로 인식되는 신체
- **선지**: 프로그램 의식만으로 인격 인정
- **문제점**: 기준과 정반대 + 갑 입장도 오해

### ❌ ② 스트로슨

- **기준**: 의식 + 신체 결합
- **선지**: 을에게 "신체 없는 존재에 인격 귀속 불가 입장"을 덧씌움
- **문제점**: 을 입장 왜곡 + 평가도 역방향

### ✅ ③ (정답)

### ❌ ④ 칸트

- **입장**: 동시적 동일 인격의 존재는 가정되어야 함
- **선지**: 사고 기능 동일성만으로 판단
- **문제점**: 칸트 입장 축소/오류

### ❌ ⑤ 롱게네스

- **적용 범위**: 시공간적 인간으로 한정
- **선지**: 인간 외 존재에도 동일 기준 적용
- **문제점**: 범위 확장 오류 + 을의 기능주의와 충돌

---

## 5. 왜 사람들이 "오류 같다"고 느끼는가?

### 이유 1: 치환논증 문제

a=b, a가 C이면 b도 C? → 철학적으로는 문제 제기 가능

### 이유 2: 스캔 시나리오의 현실성

지문 외 해석이 개입되기 쉬움

### 이유 3: 철학 난도 vs 수능 단순화

학문적 감각이 강할수록 오히려 더 어렵게 느껴짐

**즉, 논란은 문항 오류 때문이 아니라 층위 혼동 때문입니다.**

---

## 6. 실전에서 이 유형을 푸는 비법

### 4단계 체크리스트

1. **표지어 고정**
   - "에 의하면/따르면" = 지문 밖 판단 금지

2. **기준어 추출**
   - 판단 기준 / 적용 범위

3. **선지 매핑**
   - 주체·술어 1:1 대응 여부

4. **오류 패턴 스캔**
   - 적용 범위 확장/축소
   - 주체 바꾸기
   - 기능 동일성=동일 인격 오인

이렇게 보면 ③은 가장 안정적입니다.

---

## 7. 결론

**우리 SN독학기숙학원은 평가원 정답인 ③에 동의합니다.**

그 이유는 다음과 같습니다.

- 시험은 철학적 정합성이 아니라 **지문 내 입장 대응 정확성**을 채점하기 때문
- ③은 지문에 요약된 견해와 선지의 문장 대응이 **가장 정확**하기 때문
- 다른 선지는 기술 오류·범위 왜곡·입장 오해가 **명확**하기 때문

**그러나 교수님의 문제 제기는 의미가 있습니다.** 실제 철학 논의에서는 동일성, 주관, 치환, 인격 귀속 등 더 깊은 층위가 존재합니다. 수능 문항은 이를 단순화한 요약판이므로 괴리가 생길 수 있습니다.

---

## 마지막 한 줄 요약

> 이 문제는 철학적 진위를 묻는 게 아니라, **"지문 안에서의 입장 매핑 정확도"**를 묻는 문항이다. 따라서 ③은 채점 기준상 가장 안정적이다.

---

## ✅ 현재 평가원 공식 입장은?

아직 평가원이 최종 결론을 내린 것은 아닙니다. 다만 공식적으로 공개된 입장은 다음과 같습니다.

### 📌 평가원 발표 요약

- 2026학년도 수능 국어 17번 문항에 대해 다수의 이의신청이 접수된 상태이며, 학계의 지적과 수험생·강사의 의견을 포함해 심사 절차를 진행 중
- 평가원은 "기본 계획에 따라 17번 문항을 포함한 전체 이의신청을 심의하여 11월 25일 오후 5시 최종 정답을 확정 발표한다"고 안내
- 현 시점에서 정답은 ③번으로 유지하고 있으며 "지문과 보기의 논리를 바탕으로 정답을 도출할 수 있다"는 입장을 유지
- 오류 인정 여부 및 정답 처리 방식은 최종 심사 결과에 따라 결정되며, 발표는 25일 공식 공개 예정

---

## 🔍 그렇다면 결론은 어떻게 날까?

지금까지의 흐름을 보면,

- 채점 기준 관점에서는 ③번이 가장 안정적이고
- 학문적 관점에서는 문제 제기가 가능한 구조이며
- 수험생·강사·학계 해석이 갈리기 쉬운 유형이기 때문에

최종 발표가 어떻게 나오든 논란은 한동안 계속될 가능성이 높습니다.

저도 정말 궁금하네요.
25일 오후 5시, 결과가 나오면 추가 분석과 업데이트도 정리해보겠습니다.
`,
    category: 'columns',
    tags: ['수능', '국어', '17번', '논쟁', '평가원'],
    author: 'SN Academy',
    date: '2025-11-22',
    readTime: '7',
    featured: false,
    published: true,
    url: '/columns/suneung-korean-17',
    type: 'standard',
    thumbnail: '/images/columns/suneung-korean-17/thumnail17.png',
  },
  {
    id: 'economi-son',
    title: '손에잡히는경제',
    excerpt: 'SN아카데미에서 손에잡히는 경제 커피타임에 출연했습니다.',
    content: `
## 손에잡히는경제

<div class="my-8 aspect-video">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WWXL3zoOlnk" title="손에잡히는경제" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="aspect-ratio: 16/9;"></iframe>
</div>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
26학년도 수능 30번 및 풀이
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 문제

<img src="/economi_son/SN30.png" alt="26학년도 수능 30번 문제" class="w-full rounded-lg my-4" />

### 풀이 과정

<img src="/economi_son/30-1.png" alt="풀이 1단계" class="w-full rounded-lg my-4" />

<img src="/economi_son/30-2.png" alt="풀이 2단계" class="w-full rounded-lg my-4" />

<img src="/economi_son/30-3.png" alt="풀이 3단계" class="w-full rounded-lg my-4" />

### 그래프 분석

<img src="/economi_son/graph.png" alt="그래프 분석" class="w-full rounded-lg my-4" />

### 수학 30번 유사 문제

<img src="/economi_son/similar1.png" alt="유사 문제 1" class="w-full rounded-lg my-4" />

<img src="/economi_son/similar2.png" alt="유사 문제 2" class="w-full rounded-lg my-4" />

<img src="/economi_son/similar3.png" alt="유사 문제 3" class="w-full rounded-lg my-4" />

<img src="/economi_son/similar4.png" alt="유사 문제 4" class="w-full rounded-lg my-4" />

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
AI가 틀리는 문제들 모음
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 국어

<img src="/economi_son/korean.png" alt="AI가 틀린 국어 문제" class="w-full rounded-lg my-4" />

### 수학 I

<img src="/economi_son/math1.png" alt="AI가 틀린 수학 I 문제" class="w-full rounded-lg my-4" />

### 생명과학 I

<img src="/economi_son/biology.png" alt="AI가 틀린 생명과학 I 문제" class="w-full rounded-lg my-4" />

### 생명과학 I-1

<img src="/economi_son/biology2.png" alt="AI가 틀린 생명과학 I-1 문제" class="w-full rounded-lg my-4" />

### 지구과학

<img src="/economi_son/earthscience.png" alt="AI가 틀린 지구과학 문제" class="w-full rounded-lg my-4" />

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
수학관련 어려운 점
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

<img src="/economi_son/mathcase1.png" alt="수학 케이스 1" class="w-full rounded-lg my-4" />

<img src="/economi_son/mathcase2.png" alt="수학 케이스 2" class="w-full rounded-lg my-4" />

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
학생들이 이렇게도 쓴다
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

<img src="/economi_son/dokdo.png" alt="독도 관련 활용" class="w-full rounded-lg my-4" />

<img src="/economi_son/history1.png" alt="역사 활용 사례 1" class="w-full rounded-lg my-4" />

<img src="/economi_son/history2.png" alt="역사 활용 사례 2" class="w-full rounded-lg my-4" />

<img src="/economi_son/social.png" alt="사회 활용 사례" class="w-full rounded-lg my-4" />

</div>
</details>
    `,
    category: 'columns',
    tags: ['경제', '뉴스', '손에잡히는경제'],
    author: 'SN Academy',
    date: '2025-11-19',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/economi_son/economyson.jpg',
    url: '/columns/economi-son',
    type: 'standard',
  },
  {
    id: 'imgyetan',
    title:
      '사는 동네를 옮긴다 한들 살인적인 세금을 피할 수는 없었다 (고전문학 「임계탄」)',
    excerpt:
      '조선 후기 장흥 지역의 대기근과 탐관오리의 학정을 고발한 가사 「임계탄」. 1732~1733년 3년간의 재난 속에서 백성들의 고통과 절망을 사실적으로 담아낸 현실비판 가사입니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 제17탄. 오늘은 조선 후기 작자 미상의 가사 「임계탄」을 준비했습니다.

「임계탄(壬癸歎)」은 제목에서 짐작할 수 있듯이 임자년(1732)∼계축년(1733)년에 발생한 재난에 대해 탄식하는 내용을 담은 가사작품으로, 이후 1733년까지 연속 3년간 전라도 장흥지역을 휩쓸었던 대기근으로 인한 고통과 백성들에 대한 탐관오리의 학정을 풍자적으로 그려 낸 현실비판가사입니다.

현실 고발적인 성격만이 아니라, 유가의 정치이념에 입각한 인정(仁政)의 회복을 촉구하고 있다는 점에서 민본과 민생의식이 투철하게 투영된 작품이라고 할 수 있습니다(해설 출처 : 한국민족문화대백과사전).

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「임계탄」- 사는 동네를 옮긴다 한들 살인적인 세금을 피할 수는 없었다

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏰 작품의 배경과 의미

「임계탄」은 조선 후기인 1732년(임자년)부터 1733년(계축년)까지 전라도 장흥 지역에서 발생한 대기근과 탐관오리의 학정을 고발한 현실비판 가사입니다. 작자는 미상이지만, 직접 그 참상을 목격하고 경험한 것으로 추정됩니다.

연속 3년간의 재난으로 백성들은 굶주림에 시달렸고, 설상가상으로 탐관오리들의 가혹한 수탈이 이어졌습니다. 이 작품은 그러한 백성들의 고통을 생생하게 전하면서도, 단순한 고발을 넘어 유교적 이상인 인정(仁政)의 회복을 촉구합니다.

제목의 '임계(壬癸)'는 임자년과 계축년을 의미하며, '탄(歎)'은 탄식을 뜻합니다. 즉, 이 비극적인 시기에 대한 깊은 슬픔과 분노를 담은 노래입니다.

### 🎭 문학적 특징

- **현실비판 가사**: 당대 사회의 모순과 부조리를 직접적으로 고발
- **사실적 묘사**: 기근과 학정의 참상을 구체적이고 생생하게 표현
- **풍자와 비판**: 탐관오리에 대한 날카로운 풍자와 비판
- **민본사상**: 백성을 위한 정치, 인정(仁政)의 회복 촉구
- **서사적 구성**: 시간 순서에 따라 사건을 전개하는 서사시적 특징

### 🌍 문학사적 의의

「임계탄」은 조선 후기 민중문학의 대표작 중 하나로, 지배층의 시각이 아닌 백성의 입장에서 사회 현실을 고발한 작품입니다. 특히 구체적인 시기(1732-1733)와 장소(장흥)를 특정하여 역사적 사실성을 확보했다는 점에서 문학사적 가치가 높습니다.

이 작품은 「갑민가」, 「농가월령가」 등과 함께 조선 후기 현실비판 가사의 전통을 보여주며, 문학이 사회적 발언과 개혁의 도구가 될 수 있음을 증명합니다. 민중의 고통에 대한 공감과 정의로운 사회에 대한 열망이 문학적으로 승화된 작품입니다.

### 📚 작품 감상 포인트

1. **기근의 참상**: 3년간의 흉년으로 인한 백성들의 고통
2. **탐관오리의 학정**: 재난 상황에서도 계속되는 가혹한 수탈
3. **백성의 절망**: "사는 동네를 옮긴다 한들 세금을 피할 수 없다"는 절규
4. **인정의 촉구**: 유교적 이상인 인자한 정치의 회복 요구
5. **사실적 고발**: 구체적 사례를 통한 생생한 현실 폭로

### 🎨 현대적 의미

「임계탄」은 천 년 가까운 시간이 흘렀지만, 여전히 현대 사회에 중요한 메시지를 전합니다. 재난 상황에서 더욱 취약해지는 서민들의 삶, 권력의 부패와 무책임, 공정하지 못한 부담의 분배—이러한 문제들은 시대를 초월한 보편적 과제입니다.

특히 "사는 동네를 옮긴다 한들 살인적인 세금을 피할 수는 없었다"는 구절은, 개인의 노력만으로는 해결할 수 없는 구조적 불평등에 대한 절규입니다. 이는 오늘날에도 많은 이들이 공감하는 문제입니다.

이 작품은 우리에게 묻습니다. 진정한 좋은 사회란 무엇인가? 재난 앞에서 정부와 권력은 어떤 역할을 해야 하는가? 문학은 단순한 미적 향유를 넘어, 사회의 부조리를 고발하고 정의를 추구하는 힘이 될 수 있음을 보여줍니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 현실비판 가사, 민중가사, 사회고발 문학
- **주요 주제**: 기근과 학정에 대한 고발, 탐관오리 비판, 인정(仁政) 회복 촉구
- **표현 기법**: 사실적 묘사, 풍자, 대조법, 과장법
- **시대적 배경**: 조선 후기 사회의 모순, 민본사상
- **문학사적 의의**: 민중문학, 현실참여문학의 전통
- **유사 작품 비교**: 「갑민가」와의 공통점(탐관오리 비판, 백성의 고통)

</div>
</details>

---

## 💡 영상 하이라이트

SN독학기숙학원이 제작한 이번 영상에서는 조선 후기 백성들의 처절한 삶을 담아낸 「임계탄」의 고발 정신을 생생하게 전달합니다.

3년간의 대기근 속에서도 멈추지 않는 탐관오리의 수탈—굶주림과 절망 속에서 "사는 동네를 옮긴다 한들 세금을 피할 수 없다"고 절규하는 백성들의 목소리가 시대를 넘어 우리에게 울림을 줍니다.

작품의 핵심 주제는 **'구조적 불의에 대한 고발과 인정(仁政)의 회복'**입니다. 개인의 힘으로는 벗어날 수 없는 부조리한 현실을 고발하면서도, 더 나은 사회에 대한 희망을 잃지 않는 민중의 저항 정신을 보여줍니다.

**시각적 연출에 특별히 공을 많이 들였습니다.** 황폐한 들판과 굶주린 백성들, 탐관오리의 횡포, 이사를 가도 피할 수 없는 세금의 무게 등이 상징적으로 표현되어 작품의 비극적 정서를 더욱 깊이 있게 전달합니다.

앞으로도 더욱 의미 있는 영상으로 찾아뵙겠습니다.

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
English Description
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

## "Imgyetan" - A Cry Against Injustice: Even Moving Cannot Escape Crushing Taxes

**Imgyetan (壬癸歎)** is a classical Korean gasa (가사) poem from the late Joseon Dynasty that exposes the devastating famine and corrupt officials' tyranny in the Jangheung region of Jeolla Province from 1732-1733. The title combines the cyclical year names Im (壬, 1732) and Gye (癸, 1733) with "tan" (歎), meaning lamentation.

**Literary Significance:**
- **Social Criticism Gasa**: Directly condemns social contradictions and injustice
- **Realistic Description**: Vividly portrays the horrors of famine and official oppression
- **Satire and Critique**: Sharp criticism of corrupt officials (탐관오리)
- **Minbon Philosophy**: Advocates for benevolent governance (仁政) centered on the people
- **Narrative Structure**: Chronicles events in chronological order like an epic poem

**Historical Context:**
This work documents three consecutive years of famine (1732-1733) in Jangheung, during which the people suffered not only from natural disaster but also from ruthless exploitation by corrupt officials. The poem captures the desperate cry: "Even if we move to another town, we cannot escape the murderous taxes."

**Cultural Value:**
"Imgyetan" represents a masterpiece of late Joseon minjung (people's) literature, telling the story from the common people's perspective rather than the ruling class. Its historical specificity—naming exact years (1732-1733) and location (Jangheung)—gives it documentary value alongside its literary merit.

The work stands in the tradition of social criticism gasa like "Gapmin-ga," demonstrating how literature can serve as a tool for social commentary and reform. It shows profound empathy for the people's suffering and yearning for a just society, transformed into literary art.

**Contemporary Relevance:**
Despite nearly three centuries passing, "Imgyetan" remains relevant today. The vulnerability of ordinary people during disasters, corruption and irresponsibility of power, and unjust distribution of burdens—these remain universal challenges transcending time.

The phrase "even moving to another town cannot escape murderous taxes" expresses despair over structural inequality that individual effort alone cannot overcome—a sentiment that resonates with many today.

The work asks us: What constitutes a truly good society? What role should government and power play in the face of disaster? It demonstrates that literature can transcend mere aesthetic enjoyment to become a force that exposes social injustice and pursues justice.

</div>
</details>`,
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
    thumbnail: '/images/thumbnail/thumbnail_imgyetan.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=sfoHYLjRLIo',
    url: '/originals/imgyetan',
    type: 'special',
  },
  {
    id: 'changiparangga',
    title: '기파랑을 닮고 싶었던 한 스님의 노래 (고전문학 「찬기파랑가」)',
    excerpt:
      '신라 경덕왕 때 충담사가 화랑 기파랑을 추모하며 지은 향가. 승려 충담사가 이상적 인간상이었던 기파랑을 찬양하고, 그와 같은 사람이 되고 싶다는 소망을 담은 10구체 향가입니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 시험 점수가 오르는 국어 고전문학 시리즈 20번째 작품. 오늘은 「제망매가」와 더불어 고등학교 국어 필수작품인 신라시대 향가 「찬기파랑가」를 준비했습니다.

「찬기파랑가(讚耆婆郞歌)」는 충담사(忠談師)라는 승려가 '기파랑(耆婆郞)'이라는 화랑의 사후에 그를 추종하고 추모하는 의미로 만든 노래입니다. 제목을 풀이하면 한자 그대로 기파랑을 찬양하는 노래라는 뜻입니다.

승려였던 충담사가 세속의 화랑을 이토록 그리워하고 찬양했다는 것은 기파랑이 단순한 무사가 아니라, 당대 최고의 이상적 인간상이었음을 보여줍니다. 충담사는 이 노래를 통해 기파랑과 같은 사람이 되고 싶다는 간절한 소망을 표현했습니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「찬기파랑가」- 기파랑을 닮고 싶었던 한 스님의 노래

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏰 작품의 배경과 의미

「찬기파랑가」는 신라 경덕왕(景德王, 재위 742-765) 때 승려 충담사(忠談師)가 지은 10구체 향가입니다. 이 작품은 화랑(花郞) 기파랑(耆婆郞)이라는 인물을 찬양하고 추모하는 내용을 담고 있습니다.

화랑은 신라의 청년 수양 조직으로, 문무를 겸비하고 도덕적으로 완성된 인물을 길러내는 것이 목적이었습니다. 기파랑은 이러한 화랑 중에서도 특히 뛰어난 인물로, 충담사에게는 존경과 흠모의 대상이었습니다.

승려인 충담사가 세속의 화랑을 이토록 찬양했다는 것은, 기파랑이 단순한 무인이 아니라 인격적·정신적으로 완성된 이상적 인간상이었음을 보여줍니다. 충담사는 기파랑을 본받아 그와 같은 사람이 되고 싶다는 간절한 소망을 이 노래에 담았습니다.

### 🎭 문학적 특징

- **10구체 향가**: 신라 향가의 정형적 형식으로, 4구-4구-2구의 구조
- **찬양가**: 특정 인물을 칭송하고 그의 덕을 기리는 형식
- **추모가**: 사후에 고인을 그리워하고 추모하는 내용
- **이상적 인간상**: 문무를 겸비한 완벽한 인격체에 대한 동경
- **롤모델 정신**: 닮고 싶은 인물에 대한 존경과 추종

### 🌍 문학사적 의의

「찬기파랑가」는 신라 화랑도의 정신과 당대의 이상적 인간상을 잘 보여주는 작품입니다. 특히 승려가 세속의 화랑을 찬양했다는 점에서, 신라 사회에서 화랑이 차지하던 위상과 그들이 구현했던 가치를 엿볼 수 있습니다.

이 작품은 「제망매가」와 함께 신라 경덕왕 시대를 대표하는 10구체 향가로, 둘 다 승려가 지었으면서도 인간적 감정을 솔직하게 드러낸다는 공통점이 있습니다. 다만 「제망매가」가 가족에 대한 애정을 노래했다면, 「찬기파랑가」는 이상적 인간상에 대한 존경과 추모를 담았다는 차이가 있습니다.

### 📚 작품 감상 포인트

1. **화랑 기파랑**: 이상적 화랑의 표상, 문무겸전의 인물
2. **충담사의 마음**: 승려가 화랑을 존경하고 닮고 싶어 하는 간절함
3. **화랑도 정신**: 신라 청년 조직의 가치와 이상
4. **찬양과 추모**: 죽은 후에도 그의 덕을 기리는 마음
5. **롤모델의 의미**: 존경하는 인물을 본받고자 하는 인간의 보편적 심리

### 🎨 현대적 의미

「찬기파랑가」는 천년이 넘는 시간을 초월하여 오늘날에도 중요한 메시지를 전합니다. 누구에게나 닮고 싶은 사람, 존경하는 롤모델이 있습니다. 그 대상을 향한 순수한 동경과 그처럼 되고자 하는 노력은 인간을 성장시키는 원동력이 됩니다.

현대 사회에서 우리는 종종 외적 성취나 물질적 성공만을 추구하는 경향이 있습니다. 하지만 「찬기파랑가」는 진정한 롤모델이란 인격적·정신적으로 완성된 사람임을 보여줍니다. 기파랑이 충담사에게 그러했듯, 우리도 단순한 성공이 아닌 인간적 완성을 이룬 사람을 존경하고 본받아야 한다는 교훈을 줍니다.

특히 승려인 충담사가 신분과 지위를 초월하여 기파랑을 존경했다는 점은, 진정한 존경은 겉모습이 아닌 내면의 가치에서 비롯됨을 알려줍니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 10구체 향가, 찬양가, 추모가
- **주요 주제**: 기파랑에 대한 찬양, 롤모델에 대한 동경, 이상적 인간상 추구
- **표현 기법**: 찬양법, 영탄법, 직접 호명
- **시대적 배경**: 신라 화랑도, 경덕왕 시대, 향가 문학
- **작가의 태도**: 존경과 흠모, 본받고자 하는 소망
- **제망매가와의 비교**: 같은 시대, 같은 형식, 승려 작가, 추모의 정서 / 다른 대상(가족 vs 롤모델)

</div>
</details>

---

## 💡 영상 하이라이트

SN독학기숙학원이 제작한 이번 영상에서는 충담사가 기파랑을 향한 존경과 동경을 담아낸 「찬기파랑가」의 깊은 의미를 생생하게 전달합니다.

승려로서 세속을 떠났지만, 이상적 인간상이었던 기파랑을 잊지 못하고 그를 찬양하는 충담사의 마음—단순한 추모를 넘어 그와 같은 사람이 되고 싶다는 간절한 소망이 천년을 넘어 깊은 울림을 전합니다.

작품의 핵심 주제는 **'이상적 인간상에 대한 존경과 추종'**입니다. 진정한 롤모델을 향한 순수한 동경과 그를 본받고자 하는 마음이 인간을 성장시키는 원동력임을 보여줍니다.

**시각적 연출에 특별히 공을 많이 들였습니다.** 화랑으로서의 기파랑의 모습, 충담사가 그를 그리워하는 장면, 이상적 인간상을 향한 염원 등이 아름답게 표현되어 작품의 정서를 더욱 풍부하게 전달합니다.

앞으로도 더욱 감동적인 영상으로 찾아뵙겠습니다.

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
English Description
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

## "Changiparangga" - A Monk's Song of Admiration for Giparang

**Changiparangga (讚耆婆郞歌)** is a classical Korean hyangga (향가) poem written by the Buddhist monk Chungdamsa (忠談師) during the reign of King Gyeongdeok of Silla (742-765 CE). The title literally means "Song in Praise of Giparang," composed to honor and memorialize the Hwarang (花郞) warrior Giparang (耆婆郞).

**Literary Significance:**
- **10-line Hyangga**: Written in the standard 10-line hyangga format (4-4-2 structure)
- **Eulogy Format**: A song of praise and admiration for an exemplary individual
- **Memorial Poem**: Composed after Giparang's death to honor his memory
- **Ideal Human Model**: Expresses longing to emulate a person of complete virtue
- **Role Model Spirit**: Demonstrates respect and aspiration toward an admired figure

**Cultural Value:**
This work beautifully illustrates the spirit of the Silla Hwarang (aristocratic youth warrior corps) and the ideal human character valued in that era. The fact that a Buddhist monk praised a secular Hwarang warrior reveals the high status and values that the Hwarang embodied in Silla society.

Like "Jemangmaega," this is a representative 10-line hyangga from King Gyeongdeok's reign, both composed by monks who honestly expressed human emotions. However, while "Jemangmaega" sang of familial love, "Changiparangga" expresses respect and admiration for an ideal human character.

**Contemporary Relevance:**
"Changiparangga" delivers an important message that transcends more than a millennium. Everyone has someone they admire and wish to emulate—a role model. The pure admiration for such a person and the effort to become like them serve as the driving force for human growth.

The work teaches us that a true role model is someone who has achieved personal and spiritual completeness, not merely external success. It reminds us that genuine respect comes from inner values rather than outward appearances, as demonstrated by Chungdamsa's admiration for Giparang across differences in status and position.

</div>
</details>`,
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
    thumbnail: '/images/thumbnail/thumbnail_changiparangga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=17SWxuMhvFQ',
    url: '/originals/changiparangga',
    type: 'special',
  },
  {
    id: 'jemangmaega',
    title: '누이를 잃은 슬픔의 노래 (고전문학 「제망매가」)',
    excerpt:
      '신라 경덕왕 때 월명사가 죽은 누이를 추모하며 지은 향가. 불교 승려였던 월명사가 육친에 대한 그리움과 죽음의 슬픔을 담아낸 10구체 향가로, 인간적 애정과 불교적 세계관이 조화를 이룬 작품입니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

드디어 26학년도 수능이 끝났네요. 이제는 잠시 쉬어가는 의미에서 수능 특강 말고, 수험생이라면 알아야 하는 작품 위주로 선별해서 제작하고자 합니다. 오늘은 그 첫 작품으로 신라 경덕왕 때 월명사가 지은 향가 「제망매가」를 준비했습니다.

「제망매가(祭亡妹歌)」는 '죽은 누이를 제사지내는 노래'라는 뜻으로, 월명사(月明師)가 세상을 떠난 누이동생의 명복을 빌며 지은 10구체 향가입니다.

불교 승려였던 월명사가 육친에 대한 인간적 그리움과 슬픔을 솔직하게 드러내면서도, 극락왕생을 기원하는 불교적 세계관을 함께 담아낸 아름다운 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「제망매가」- 누이를 잃은 슬픔의 노래

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏰 작품의 배경과 의미

「제망매가」는 신라 경덕왕(景德王, 재위 742-765) 때 승려 월명사(月明師)가 지은 10구체 향가입니다. 작품의 제목인 '제망매가(祭亡妹歌)'는 문자 그대로 '죽은 누이를 제사지내며 부르는 노래'를 의미합니다.

월명사는 불교 승려로서 출가하여 세속의 인연을 끊었지만, 누이동생의 죽음 앞에서는 한 사람의 형제로서 깊은 슬픔과 그리움을 느꼈습니다. 이 작품은 그러한 인간적 감정을 솔직하게 드러내면서도, 죽은 누이가 극락왕생하기를 기원하는 불교적 신념을 함께 담아냈습니다.

### 🎭 문학적 특징

- **10구체 향가**: 신라 향가의 정형적 형식으로, 4구-4구-2구의 구조
- **제문(祭文) 형식**: 죽은 이를 추모하고 명복을 비는 제사 형식
- **인간적 애정**: 승려로서의 초월적 자세를 넘어선 육친에 대한 그리움
- **불교적 세계관**: 극락왕생에 대한 믿음과 기원
- **감정의 절제**: 슬픔을 직접적으로 드러내기보다 은유적으로 표현

### 🌍 문학사적 의의

「제망매가」는 신라 향가 중에서도 개인적 감정을 가장 진솔하게 표현한 작품으로 평가받습니다. 특히 승려라는 신분에도 불구하고 가족에 대한 애틋한 감정을 드러낸 점이 인상적입니다.

이 작품은 불교적 세계관과 인간적 감정이 조화롭게 어우러진다는 점에서 문학사적 가치가 높습니다. 죽음이라는 절대적 이별 앞에서 느끼는 슬픔을 표현하면서도, 극락왕생이라는 불교적 위안을 함께 제시하여 삶과 죽음에 대한 깊은 성찰을 담아냈습니다.

### 📚 작품 감상 포인트

1. **생사의 경계**: 이승과 저승을 가르는 절대적 단절
2. **남매의 정**: 승려가 된 후에도 남아있는 육친에 대한 애정
3. **극락왕생의 기원**: 죽은 누이가 좋은 곳으로 가기를 바라는 마음
4. **감정의 표현**: 슬픔을 직접 토로하지 않고 절제되게 표현
5. **현세와 내세**: 불교적 세계관이 투영된 삶과 죽음의 이해

### 🎨 현대적 의미

「제망매가」는 천년이 넘는 시간을 초월하여 오늘날에도 큰 울림을 줍니다. 사랑하는 사람을 잃은 슬픔, 다시는 만날 수 없다는 상실감은 시대를 막론하고 인간이라면 누구나 경험하는 보편적 감정이기 때문입니다.

특히 현대 사회에서 우리는 죽음을 점점 더 멀리하고 회피하는 경향이 있습니다. 하지만 이 작품은 죽음을 직시하면서도, 그것을 또 다른 시작으로 받아들이는 성숙한 태도를 보여줍니다. 슬픔을 부정하지 않되, 그 슬픔 너머의 희망을 함께 노래하는 것—이것이 바로 「제망매가」가 우리에게 전하는 메시지입니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 10구체 향가, 제문 형식, 추모가
- **주요 주제**: 누이에 대한 그리움, 죽음의 슬픔, 극락왕생 기원
- **표현 기법**: 은유법, 영탄법, 대비법
- **시대적 배경**: 신라 향가 문학, 불교적 세계관
- **작가의 태도**: 인간적 슬픔과 불교적 초월의 조화

</div>
</details>

---

## 💡 영상 하이라이트

SN독학기숙학원이 제작한 이번 영상에서는 월명사가 누이를 잃은 슬픔을 담담하게 노래한 「제망매가」의 깊은 정서를 생생하게 담아냅니다.

승려로서 세속을 떠났지만, 누이의 죽음 앞에서는 한 사람의 형제로 돌아온 월명사의 마음—슬픔을 억누르지 않되, 극락왕생을 기원하는 불교적 신념으로 위로를 찾는 과정을 만나보실 수 있습니다.

작품의 핵심 주제는 **'인간적 애정과 불교적 믿음의 조화'**입니다. 슬픔을 있는 그대로 받아들이되, 그 너머의 희망을 놓지 않는 성숙한 태도가 천년을 넘어 깊은 감동을 전합니다.

**시각적 연출에 특별히 공을 많이 들였습니다.** 달빛 아래 누이를 그리워하는 장면, 극락으로 떠나는 누이의 모습, 연꽃 위에서 미소 짓는 장면 등이 아름답게 표현되어 작품의 정서를 더욱 풍부하게 전달합니다.

앞으로도 더욱 감동적인 영상으로 찾아뵙겠습니다.

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
English Description
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

## "Jemangmaega" - A Song of Mourning for a Lost Sister

**Jemangmaega (祭亡妹歌)** is a classical Korean hyangga (향가) poem written by the Buddhist monk Wolmyeongsa (月明師) during the reign of King Gyeongdeok of Silla (742-765 CE). The title literally means "Song for the Deceased Sister," and the work is a heartfelt elegy mourning the death of the poet's younger sister.

**Literary Significance:**
- **10-line Hyangga**: Written in the standard 10-line hyangga format (4-4-2 structure)
- **Memorial Format**: Functions as a ritual prayer (제문) for the deceased
- **Human Emotion**: Expresses genuine grief and longing despite the author's status as a Buddhist monk
- **Buddhist Worldview**: Contains prayers for the sister's rebirth in paradise (극락왕생)
- **Emotional Restraint**: Conveys deep sorrow through metaphor rather than direct expression

**Cultural Value:**
This work is considered one of the most personally emotional among Silla hyangga poems. It is particularly notable for how a Buddhist monk openly expresses familial affection, showing that even those who have renounced worldly ties cannot entirely transcend human emotions.

The poem beautifully harmonizes Buddhist philosophy with human sentiment. While confronting the absolute separation of death, it provides both expression of grief and Buddhist consolation through the hope of rebirth in paradise, offering profound reflection on life and death.

**Contemporary Relevance:**
"Jemangmaega" continues to resonate across more than a millennium because it addresses the universal human experience of losing a loved one. The poem demonstrates a mature attitude toward death—not denying grief, but finding hope beyond it. This balance between acknowledging sorrow and maintaining faith offers a timeless message that remains deeply relevant today.

The work teaches us that it is natural to grieve, yet important to find meaning and consolation even in our deepest losses—a lesson that transcends time and culture.

</div>
</details>`,
    category: 'SN Originals',
    tags: ['고전문학', '제망매가', '월명사', '향가', '신라', '수능국어'],
    author: 'SI KIM',
    date: '2025-11-18',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_jemangmaega.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=I215rskzY74',
    url: '/originals/jemangmaega',
    type: 'special',
  },
  {
    id: '2026-suneung-similar-problems',
    title: '2026학년도 수능 수학 문제와 비슷한 문제를 기출에서 찾기!',
    excerpt:
      'AI가 분석한 2026 수능 수학 각 문항별 유사 기출문제 3개씩 총 138개를 확인하세요. SNarGPT의 RAG 시스템이 평가원·교육청 10년치 기출에서 유사도·난이도·출제의도까지 종합 분석한 추천 문제로 효과적인 복습과 실력 향상이 가능합니다.',
    content: `
<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
안녕하세요, SN독학기숙학원입니다.<br/>
2026학년도 수능 수학 시험이 끝났습니다. 이제 중요한 것은 <strong>복습과 분석</strong>입니다.
</p>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
  <p class="text-gray-800 dark:text-gray-200 text-lg font-semibold leading-relaxed">
    "수능 문제와 비슷한 유형을 기출에서 찾아 다시 풀어보는 것이<br/>
    가장 효과적인 복습 방법입니다."
  </p>
</div>

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">🎯 이 글의 목적</h2>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
SN독학기숙학원의 AI 분석 시스템이 2026 수능 수학 각 문항을 분석하여,<br/>
<strong>평가원 및 교육청 기출 문제 중 가장 유사한 문제 3개씩</strong>을 추천합니다.
</p>

<ul class="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2 mb-6">
  <li>각 문항의 <strong>핵심 개념</strong>과 <strong>풀이 패턴</strong>을 정확히 분석</li>
  <li>SN RAG 시스템을 통해 <strong>실제 유사도가 높은</strong> 기출 문제 검색</li>
  <li>난이도, 정답률, 출제 의도까지 종합적으로 고려한 추천</li>
</ul>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">📊 2026학년도 수능 수학 문항별 유사 기출 문제 검색</h2>

<p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
각 과목별 탭을 클릭하여 문항별 유사 문제를 확인하세요.
</p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" crossorigin="anonymous" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}]});"></script>

<style>
  .subject-tab {
    padding: 0.75rem 1.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
    background-color: #e5e7eb;
    color: #6b7280;
    border-radius: 0.5rem;
  }
  .subject-tab:hover {
    background-color: #d1d5db;
  }
  .subject-tab.active {
    background-color: #3b82f6;
    color: white;
  }
  @media (prefers-color-scheme: dark) {
    .subject-tab {
      background-color: #374151;
      color: #9ca3af;
    }
    .subject-tab:hover {
      background-color: #4b5563;
    }
    .subject-tab.active {
      background-color: #2563eb;
      color: white;
    }
  }
  .subject-content {
    display: none;
  }
  .subject-content.active {
    display: block;
  }
  .col-item { width: 8%; }
  .col-topic { width: 27%; }
  .col-problems { width: 30%; }
  .col-reason { width: 35%; }
</style>

<div class="mb-6">
  <div class="flex flex-wrap gap-2 mb-4">
    <button class="subject-tab active" onclick="showSubject('subject-common', event)">공통 (1~22번)</button>
    <button class="subject-tab" onclick="showSubject('subject-prob', event)">확률과통계 (23~30번)</button>
    <button class="subject-tab" onclick="showSubject('subject-calc', event)">미적분 (23~30번)</button>
    <button class="subject-tab" onclick="showSubject('subject-geo', event)">기하 (23~30번)</button>
  </div>
</div>

<div id="subject-common" class="subject-content active overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-gray-100 dark:bg-gray-800">
        <th class="col-item border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">문항</th>
        <th class="col-topic border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">주제</th>
        <th class="col-problems border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">유사 문제</th>
        <th class="col-reason border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">유사 이유</th>
      </tr>
    </thead>
    <tbody class="text-gray-700 dark:text-gray-300">
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">1번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">지수법칙 계산·정의역·방정식/부등식</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 교육청 고3 2015.10.13 학력평가 22번<br/>• 교육청 고2 2014.11.18 학력평가 1번<br/>• 평가원 고3 2021.09.01 모의평가 16번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">지수법칙으로 식을 정리하고 방정식/부등식을 푸는 동일 뼈대. 밑 조건과 단조성, 정의역 점검 구조가 같다.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">2번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">미분계수 정의와 좌우미분·미분가능 판정</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2024.09.04 모의평가 2번<br/>• 평가원 2025.06.04 모의평가 2번<br/>• 교육청 2025.07.10 학력평가 2번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">미분계수의 정의로 좌‧우미분계수를 대조해 미분가능을 판정하는 표준형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">3번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">미분계수 정의로 도함수·접선기울기 산출</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2023.06 모의평가 2번<br/>• 교육청 2025.05.08 학력평가 2번<br/>• 평가원 2025.09.03 모의평가 2번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">f′(a)=lim[h→0] (f(a+h)−f(a))/h 정의로 직접 기울기를 구하는형. 인수분해/약분/유리화로 미정형 극한 해소가 공통.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">4번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">시그마 계산(등차·등비 합, 망원합)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2023.06 모의평가 3번<br/>• 평가원 2025.06 모의평가 3번<br/>• 교육청 2025.05 학력평가 18번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">등차/등비 합 공식과 망원합(텔레스코핑)으로 닫힌꼴을 만드는 시그마 계산 표준형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">5번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">다항함수 미분과 극값 판정</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 교육청 고3 2022.03.24 학력평가 2번<br/>• 교육청 고3 2022.04.13 학력평가 2번<br/>• 평가원 2022.11.17 수능 4번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">다항함수 미분 → 임계점 → 증감표/극값 판정의 동일 루틴.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">6번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">로그 법칙과 방정식/부등식(정의역·밑의 단조)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 교육청 고2 2014.11.18 학력평가 1번<br/>• 교육청 고2 2014.06.12 학력평가 2번<br/>• 평가원 고3 2021.09.01 모의평가 16번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">로그 법칙과 정의역, 밑의 단조성을 활용해 식을 정리하고 방정식/부등식을 해결하는 동일 구조.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">7번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">포물선–직선 사이 넓이(정적분·대칭)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2015 수능 A형 13번<br/>• 평가원 2020 수능(나) 27번<br/>• 교육청 2014.10.07 학력평가 16번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">포물선과 직선 사이 넓이를 교점 분할과 대칭성으로 적분하는 도형-정적분 결합 표준형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">8번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">삼각함수 식·그래프와 방정식/부등식</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2025.06.04 모의평가 8번<br/>• 평가원 2022.11.17 수능 5번<br/>• 교육청 2022.10.12 학력평가 5번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">기본 삼각식 변형과 그래프의 주기/위상 이동을 이용한 방정식·부등식 풀이형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">9번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">매개 직선의 접선 조건(판별식/동시조건)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2023.09.06 모의평가 10번<br/>• 교육청 2023.03.23 학력평가 17번<br/>• 평가원 2022.08.31 모의평가 8번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">직선이 곡선에 한 점에서만 만나는 접선 판별. 대입 → 이차식 판별식 D=0 또는 접점 동시조건이 공통.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">10번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">지수함수 그래프와 도형의 넓이·좌표</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2025.09.03 모의평가 12번<br/>• 교육청 2014.07.10 학력평가 8번<br/>• 교육청 2013.11.14 학력평가 13번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">y=aˣ 그래프의 평행이동/스케일과 직선·축과의 교점으로 둘러싼 도형의 좌표·넓이를 해석하는 동일 틀.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">11번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">속도–시간 해석과 이동거리·변위</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 교육청 2023.07.11 학력평가 8번<br/>• 교육청 2021.07.07 학력평가 14번<br/>• 교육청 2024.03.28 학력평가 10번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">v–t 그래프 면적 해석으로 변위/이동거리·평균속도를 구하는 구간분할형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">12번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">등비수열 일반항·부분합·수렴</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 교육청 2014.11.18 학력평가 25번<br/>• 평가원 2020.06.18 모의평가(수학 나) 25번<br/>• 교육청 2013.04.11 학력평가 14번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">등비수열의 일반항/부분합/수렴 조건을 연립해 초기항·공비를 결정하는 동일 구조.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">13번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">이차/곱함수의 접선 조건과 판별</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2015 수능 9번<br/>• 교육청 2015.07.09 학력평가 14번<br/>• 평가원 2021.06.03 모의평가 27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">이차함수 또는 곱함수에서 접선 존재 조건을 판별식 D=0 또는 (fg)′=f′g+fg′ 와 접점 동시조건으로 처리하는 공통형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">14번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">원의 현·접선·외접원 성질과 길이/각</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 교육청 2024.07.11 학력평가 13번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">원의 현·접선·외접원 성질을 결합해 각/길이/반지름을 구하는 전형적 원기하 한 세트.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">15번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">정적분의 미분과 매개변수 극값 탐색</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 교육청 2025.07.10 학력평가 28번<br/>• 교육청 2024.03.28 학력평가 12번<br/>• 교육청 2023.05.10 학력평가 14번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">정적분의 미분(라이프니츠)과 가변 상·하한 미분으로 F′(t)를 구하고 임계점에서 극값을 판단하는 동일 메커니즘.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">16번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">선형 점화식의 일반항·부분합·수렴</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2025.09.03 모의평가 16번<br/>• 교육청 2013.10.08 학력평가 5번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">1·2차 선형 점화와 초기값, 부분합 연계(망원합)로 일반항·부분합·수렴을 해석하는 표준형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">17번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">기초 함수 그래프 해석(지수·로그·삼각)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 평가원 2022.08.31 모의평가 17번<br/>• 평가원 2023.09.06 모의평가 8번<br/>• 교육청 2025.03.26 학력평가 7번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">다항식 항별 적분 + 초기조건으로 적분상수 결정 + 특정값 대입의 기본형. 부정적분 표준 계산 문제</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">18번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">미분계수 정의·접선기울기 계산</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2013.06.05 모의평가(평가원) 11번<br/>• 2024.06.04 모의평가(평가원) 10번<br/>• 2023.03.23 학력평가(교육청) 11번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">두 변과 끼인각의 코사인 값으로부터 sin을 구해 넓이 S=(1/2)absinC로 즉시 계산하는 삼각형 넓이 기본형</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">19번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">도함수→증감·극값·그래프 판정</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 교육청 2021.04.14 학력평가 미적분 12번<br/>• 교육청 2021.10.12 학력평가 미적분 15번<br/>• 평가원 2022.08.31 모의평가 미적분 6번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">닫힌구간 최댓값 판정 및 기본 극값 판정 문제. 임계점과 끝점에서 함수값을 계산하고 절댓값으로 비교하는 표준 절차</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">20번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">정적분 성질·대칭·넓이 해석</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2014.06.12 모의평가(평가원) 수학B형 13번<br/>• 2021.11.18 대학수학능력시험(평가원) 18번<br/>• 2021.03.25 학력평가(교육청) 27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">수열의 부분합 S(n) 차분으로 항 도출, 보정항 f(n) 도출, 선형관계 이용, 인덱스 치환으로 홀수항 포함 합 재구성 등 복합 단계를 요구하는 문제</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">21번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">수열(등차·등비/점화)과 부분합·극한</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2021.09.01 모의평가(평가원) 수학 22번<br/>• 2021.07.07 학력평가(교육청) 수학 22번<br/>• 2023.10.12 학력평가(교육청) 수학 22번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">삼차함수와 조각함수의 연속성, 분모 영점에서의 우극한 존재 조건, 케이스 분류와 집합 조건 일치를 요구하는 최상 난이도 문제</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">22번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">지수법칙 기반 식 정리·방정식/부등식</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 고2 2014.11.18 학력평가(교육청) 1번<br/>• 고2 2014.06.12 학력평가(교육청) 2번<br/>• 고3 2015.10.13 학력평가(교육청) 22번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">지수·로그 대칭 문제. 좌표기하 조건(대칭·직선·중점)과 지수·로그의 구조 매칭을 결합한 단계적 사고가 필요한 중상 난이도 문제</td></tr>
    </tbody>
  </table>
</div>

<div id="subject-prob" class="subject-content overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-gray-100 dark:bg-gray-800">
        <th class="col-item border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">문항</th>
        <th class="col-topic border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">주제</th>
        <th class="col-problems border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">유사 문제</th>
        <th class="col-reason border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">유사 이유</th>
      </tr>
    </thead>
    <tbody class="text-gray-700 dark:text-gray-300">
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">23번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">제약 있는 순열(인접 금지/블록화·포함배제)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2025.09.03 평가원 모의 23번<br/>• 2025.03.26 교육청 학평 25번<br/>• 2022.07.06 교육청 학평 26번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">인접 금지 등 제약을 블록화·간격배치(갭 메서드)로 모델링하고, 겹치는 제약은 포함배제 원리로 처리하는 동일 구조.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">24번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">이항분포의 정규근사와 연속성 보정</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2022.08.31 평가원 모의 24번<br/>• 2023.10.12 교육청 학평 24번<br/>• 2021.07.07 교육청 학평 23번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">이항분포의 정규근사 조건 np, n(1−p) 충분히 큼 → 연속성 보정 ±0.5 적용 → 표준화 Z=(X−np)/√(np(1−p)) 로 확률 계산하는 공통 틀.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">25번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">베이즈·전체확률·조건부확률 결합</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2022.07.06 교육청 학평 25번<br/>• 2023.06.01 평가원 모의 25번<br/>• 2023.07.11 교육청 학평 26번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">표본공간 분할 후 전체확률로 사전확률 갱신, 베이즈 정리 P(A∣B)=P(B∣A)P(A)/P(B) 로 사후확률 계산하는 동일 흐름.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">26번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">이산확률변수의 기댓값·분산과 합의 분산</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2025.09.03 평가원 모의 26번<br/>• 2023.10.12 교육청 학평 26번<br/>• 2021.11.18 수능 27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">이산확률변수의 선형성 E[aX+b]=aE[X]+b, 합의 분산(독립 시 합산)과 공분산 반영 Var(X+Y)=VarX+VarY+2Cov(X,Y) 사용이 공통.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">모평균/모비율 신뢰구간·표본크기 설계</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2022.10.12 교육청 학평 25번<br/>• 2022.08.31 평가원 모의 27번<br/>• 2024 수능 27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">모평균/모비율의 신뢰구간을 표본분포(z/t)로 구성, 오차한계·신뢰수준 연계 및 필요 표본크기 설계가 동일 패턴.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">28번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">조합 기반 확률(하이퍼지오메트릭 포함)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2024.07.11 교육청 학평 28번<br/>• 2025.06.04 평가원 모의 28번<br/>• 2023.09.06 평가원 모의 28번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">비복원 추출 상황을 조합으로 모델링하여 전체 경우의 수 대비 유리한 경우의 수의 비로 확률을 구한다.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">29번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">확률의 기본 공식(합사건·여사건·독립)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2024 수능 27번<br/>• 2022.10.12 교육청 25번<br/>• 2022.08.31 평가원 27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">확률 기본 법칙 P(A∪B)=P(A)+P(B)−P(AB), 여사건 P(Aᶜ)=1−P(A), 독립 P(AB)=P(A)P(B) 적용이 핵심인 동일형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">30번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">중복허용 나열(중복조합·반복순열·제약 처리)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2021.06.03 평가원 모의 29번<br/>• 2023.07.11 교육청 학평 27번<br/>• 2023.05.10 교육청 학평 28번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">중복을 허용하는 나열을 동일한 물건의 배분(정수해 개수) 문제로 환원하여 (n+r−1)Cr 등 조합으로 계산하고, '적어도/최대' 제약은 변수치환이나 포함배제로 조정한다.</td></tr>
    </tbody>
  </table>
</div>

<div id="subject-calc" class="subject-content overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-gray-100 dark:bg-gray-800">
        <th class="col-item border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">문항</th>
        <th class="col-topic border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">주제</th>
        <th class="col-problems border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">유사 문제</th>
        <th class="col-reason border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">유사 이유</th>
      </tr>
    </thead>
    <tbody class="text-gray-700 dark:text-gray-300">
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">23번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">역함수와의 교점 개수 ↔ f(x)=x 근 개수</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2014.03 교육청 학평 B형 3번<br/>• 2015.09 평가원 모의 2번<br/>• 2024 수능 23번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">역함수와의 교점 ↔ f(x)=x 의 근 개수로 환원, 단조성·극값·y=x 와의 위치관계로 교점 개수를 판정하는 동일 논리.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">24번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">등차·등비수열 결합 조건 연립</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2024.10.15 교육청 학평 24번<br/>• 2021.07.07 교육청 학평 24번<br/>• 2014.04.10 교육청 학평 15번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">등차·등비 조건을 일반항으로 표현해 주어진 관계를 연립, 공차/공비·초기항을 결정하는 매개 해법이 공통.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">25번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">역함수 도함수와 역함수–정적분 항등</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2024.03.28 교육청 학평 25번<br/>• 2013.06.05 평가원 모의 24번<br/>• 2023.03.23 교육청 학평 23번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">역함수 도함수 (f⁻¹)′(a)=1/f′(f⁻¹(a)) 과 함수–역함수 정적분 항등을 이용해 기울기·넓이를 연계하는 유형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">26번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">매개변수 곡선의 접선 기울기와 접선식</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2024 수능 26번<br/>• 2023 수능 26번<br/>• 2024.10 교육청 학평 26번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">매개곡선에서 dy/dx = (dy/dt)/(dx/dt) 로 기울기 산출, 해당 매개값에서 접선 방정식 세우는 동일 루틴.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">단면 넓이 적분으로 넓이/부피 구하기</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2023.06.01 평가원 모의 24번<br/>• 2021.09.01 평가원 모의 25번<br/>• 2025.05.08 교육청 학평 24번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">단면적 함수 A(⋅) 설정 후 슬라이싱(와셔/셸)으로 넓이·부피를 적분, 경계 분할·대칭 활용이 공통.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">28번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">끼워넣기 정리와 삼각함수 근사</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2022.08.31 평가원 모의 29번<br/>• 2014.09.03 평가원 모의 27번<br/>• 2024.05.08 교육청 학평 27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">끼워넣기 정리와 소각근사 sinx∼x, tanx∼x 등을 사용해 극한을 상·하한으로 조이는 동일 전략.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">29번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">정적분 계산(성질·대칭·치환)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2023.10.12 교육청 학평 3번<br/>• 2022.03.24 교육청 학평 13번<br/>• 2025.05.08 교육청 학평 3번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">정적분의 성질(구간 분할·대칭·우함수/기함수)과 치환적분으로 계산을 단순화하는 표준형.</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">30번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">미정형 극한의 표준기법 해소</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2025.07.10 교육청 학평 13번<br/>• 2021.03.25 교육청 학평 20번<br/>• 2013.04.11 교육청 학평 9번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">0/0, ∞/∞ 형을 인수분해·유리화·공통극한(삼각 기본극한 등)으로 해소해 극한을 구하는 동일 패턴.</td></tr>
    </tbody>
  </table>
</div>

<div id="subject-geo" class="subject-content overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-gray-100 dark:bg-gray-800">
        <th class="col-item border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">문항</th>
        <th class="col-topic border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">주제</th>
        <th class="col-problems border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">유사 문제</th>
        <th class="col-reason border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">유사 이유</th>
      </tr>
    </thead>
    <tbody class="text-gray-700 dark:text-gray-300">
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">23번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">로그 성질·정의역·단조 방정식/부등식</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 고2 2014.11.18 학력평가(교육청) 1번<br/>• 고2 2014.06.12 학력평가(교육청) 2번<br/>• 고3 2021.09.01 모의평가(평가원) 16번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">벡터 성분별 덧셈 후 성분 합을 구하는 기초 계산형. 정답률 0.92~0.96의 하 난이도 문제</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">24번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">정적분 계산 표준형(성질+치환+대칭)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2024.11.14 수능(평가원) 24번<br/>• 2022.11.17 수능(평가원) 24번<br/>• 2021.03.25 학력평가(교육청) 25번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">포물선 표준형 비교로 p를 구하고, 초점–준선 거리 2p를 묻는 정형 기본 문항. 정답률 0.90~0.95의 하 난이도</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">25번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">조합 기반 확률 또는 기본 공식형</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2025.09.03 모의평가(평가원) 25번<br/>• 2021.11.18 수능(평가원) 23번<br/>• 2025.09.03 모의평가(평가원) 25번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">3차원 좌표에서 평면/원점 대칭 후 두 점 사이 거리 계산. 기본 계산형으로 정답률 0.90~0.95의 하 난이도</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">26번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">정적분의 미분·가변 상하한 극값 탐색</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2022.08.31 모의평가(평가원) 24번<br/>• 2014.06.12 모의평가(평가원) 12번<br/>• 2025.05.08 학력평가(교육청) 26번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">쌍곡선 접선 문제. 쌍곡선의 표준형과 접선 조건을 활용하는 문제</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">27번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">이항분포의 정규근사와 연속성 보정</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2022.08.31 모의평가(평가원) 27번<br/>• 2014.03.12 학력평가(교육청) 9번<br/>• 2023.10.12 학력평가(교육청) 25번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">원기둥 넓이 문제. 입체도형의 겉넓이 또는 부피를 계산하는 문제</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">28번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">단면적 적분(넓이/부피) 고난도 응용</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2023.10.12 학력평가(교육청) 30번<br/>• 2023.11.16 수능(평가원) 26번<br/>• 2021.10.12 학력평가(교육청) 30번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">사면체와 구 문제. 3차원 공간에서 사면체와 구의 기하학적 관계를 분석하는 고난도 문제</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">29번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">포물선–타원 결합 기하 고난도</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-yellow-700 dark:text-yellow-400"><strong>유사 문항 없음</strong></td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">포물선 정의와 타원 조건을 결합. 넓이와 결합해 대수식 도출, 조건 분기 판단과 기하적 해석이 결합된 상 난이도 문제</td></tr>
      <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">30번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">정적분 응용 최상난도(슬라이싱·매개)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2">• 2022.11.17 수능(평가원) 26번<br/>• 2024.07.11 학력평가(교육청) 29번<br/>• 2023.07.11 학력평가(교육청) 29번</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">원과 벡터 내적 문제. 원 위의 점과 벡터의 내적을 활용하는 문제</td></tr>
    </tbody>
  </table>
</div>

<script>
  function showSubject(subjectId, event) {
    // Hide all subject contents
    const allContents = document.querySelectorAll('.subject-content');
    allContents.forEach(content => {
      content.classList.remove('active');
    });

    // Remove active class from all buttons
    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(button => {
      button.classList.remove('active');
      button.classList.add('inactive');
    });

    // Show selected subject content
    const selectedContent = document.getElementById(subjectId);
    if (selectedContent) {
      selectedContent.classList.add('active');
    }

    // Add active class to clicked button
    if (event && event.target) {
      event.target.classList.remove('inactive');
      event.target.classList.add('active');
    }
  }
</script>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">🔍 AI 분석 방법</h2>

<h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">1️⃣ 문제 풀이 및 개념 추출</h3>
<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
SNarGPT가 각 수능 문제를 실제로 풀면서 사용된 <strong>핵심 개념, 풀이 전략, 사고 패턴</strong>을 추출합니다.
</p>

<h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">2️⃣ RAG 기반 유사 문제 검색</h3>
<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
평가원·교육청 10년치 이상의 기출 문제 데이터베이스에서<br/>
<strong>풀이 논리의 유사도</strong>를 기준으로 가장 비슷한 문제를 검색합니다.
</p>

<h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">3️⃣ 난이도·정답률 고려</h3>
<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
단순히 유사한 문제가 아니라, <strong>난이도와 정답률</strong>까지 고려하여<br/>
실제 학습에 도움이 되는 문제를 우선적으로 추천합니다.
</p>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">💡 활용 방법</h2>

<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-4">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">1. 틀린 문제 집중 복습</h4>
  <p class="text-gray-700 dark:text-gray-300 text-sm">
    수능에서 틀렸거나 헷갈렸던 문항의 유사 문제를 찾아 다시 풀어보세요.
  </p>
</div>

<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-4">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">2. 개념 완전 정복</h4>
  <p class="text-gray-700 dark:text-gray-300 text-sm">
    같은 개념이 적용된 다양한 문제를 풀면서 개념을 완전히 내 것으로 만드세요.
  </p>
</div>

<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-4">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">3. 패턴 파악 훈련</h4>
  <p class="text-gray-700 dark:text-gray-300 text-sm">
    유사한 사고 패턴의 문제들을 연속으로 풀면서 출제 패턴을 체득하세요.
  </p>
</div>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 p-6 rounded-lg">
  <p class="text-gray-800 dark:text-gray-200 text-center">
    <strong>더 자세한 분석이 필요하신가요?</strong><br/>
    <a href="/problem-download/suneung-math-solution-10min" class="text-blue-600 dark:text-blue-400 hover:underline">
      2026 수능 수학 전체 해설 및 AI 분석 보기 →
    </a>
  </p>
</div>
`,
    category: 'problem-download',
    tags: ['수능', '기출', '유사문제', 'AI', '수학', '2026'],
    author: 'SN독학기숙학원',
    date: '2025-11-14',
    readTime: '5',
    featured: true,
    featuredOrder: 2,
    published: true,
    thumbnail: '/images/thumbnail/AI_26_suneung.png',
    url: '/problem-download/2026-suneung-similar-problems',
  },
  {
    id: 'snargpt-guide-1',
    title: 'SNarGPT 활용가이드 1편 - 수능 특화 AI 학습 파트너',
    excerpt:
      'SNarGPT는 단순한 대화형 AI가 아닙니다. 문제 풀이, 개념 연결, 복습 루프, 오답 분석 등 실제 학습 행동에 최적화된 수능 중심 AI 학습 파트너입니다.',
    content: `
<div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
  <p class="text-gray-800 dark:text-gray-200 text-xl font-semibold leading-relaxed">
    "SNarGPT는 수험생을 위한 수능 특화 AI입니다."
  </p>
</div>

## 🎯 SNarGPT란 무엇인가?

SNarGPT는 ChatGPT처럼 말을 잘하는 AI가 아닙니다.

**'공부'라는 특정 목적에 최적화된, 수능 중심 AI 학습 파트너**입니다.

대형 LLM(언어모델)이지만, SNarGPT는 일반 대화가 아니라 **문제 풀이, 개념 연결, 복습 루프, 오답 분석** 같은 실제 학습 행동에 집중합니다.

<div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 p-6 my-6 rounded-lg">
  <p class="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
    ChatGPT가 <strong>'대학생 수준의 조언자'</strong>라면,<br/>
    SNarGPT는 <strong>'박사급 연구원'</strong>이 옆에서<br/>
    함께 문제를 분석하고, 사고과정을 설계하며,<br/>
    학습의 전 과정을 동행하는 AI입니다.
  </p>
</div>

---

## 🖥️ SNarGPT 인터페이스 체험

실제 SNarGPT가 어떻게 작동하는지 먼저 체험해보세요. 탭을 클릭하여 다양한 기능을 확인할 수 있습니다.

---

## 🧠 SNarGPT로 할 수 있는 일들

### 1️⃣ 유사문제·해설·개념까지 연결되는 'AI 검색' (RAG 기반)

단순히 '비슷한 문제 찾아줘' 수준이 아닙니다.

**SNarGPT는 문제를 실제로 풀고 난 뒤**, 풀이 과정에서 **핵심 개념·패턴·출제의도를 분석**합니다.

그 분석을 토대로, 같은 개념이 쓰인 평가원/교육청 문제나 비슷한 사고 패턴의 문제를 제시합니다.

<div class="bg-[#0a0e1a] rounded-lg p-6 my-6 border border-gray-700">
  <p class="text-gray-400 text-xs mb-4">🔍 예시:</p>

  {/* 사용자 메시지 */}
  <div class="flex justify-end mb-4">
    <div class="bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
      <p class="text-sm">2023 수능 수학 30번과 비슷한 구조의 기하 문제 찾아줘</p>
    </div>
  </div>

  {/* AI 응답 */}
  <div class="flex justify-start">
    <div class="bg-purple-600/20 border border-purple-500/50 text-purple-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
      <p class="font-semibold text-purple-200 text-xs mb-2">(From SNarVIS)</p>
      <p class="text-purple-100 text-xs">
        AI가 직접 풀이한 결과를 기준으로, 동일한 사고트리의 문제를 추천해드립니다.
      </p>
    </div>
  </div>
</div>

<div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 my-6 rounded-lg">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">📍 기존 LLM과의 차이</h4>
  <p class="text-gray-700 dark:text-gray-300">
    일반 LLM이나 시중의 문제은행 등은 "텍스트 유사도"로 비슷한 문제를 찾지만,<br/>
    SNarGPT는 <strong>"풀이 논리의 유사도"</strong>로 찾습니다.<br/>
    즉, 문제의 표면이 아니라, <strong>본질</strong>을 이해합니다.
  </p>
</div>

---

### 2️⃣ 99.9% 정확도의 문제 풀이 (그래프까지)

SNarGPT는 수능/사설/교재 문제를 거의 완벽히 풉니다.

**그래프를 직접 그리고, 계산과정을 단계별로 보여주며, 여러 문제를 한 번에 병렬로 해결**합니다.

<div class="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 my-6 rounded-r-lg">
  <p class="text-gray-700 dark:text-gray-300 mb-3">
    <strong>🧩 예시:</strong>
  </p>
  <p class="text-gray-800 dark:text-gray-200 italic">
    "이 3문제 다 풀어줘"
  </p>
  <p class="text-gray-700 dark:text-gray-300 mt-3">
    → 문제별 풀이 + 정답 + 그래프 시각화 + 사고과정 비교표까지 제공.
  </p>
</div>

<div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 my-6 rounded-lg">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">📍 기존 LLM과의 차이</h4>
  <p class="text-gray-700 dark:text-gray-300">
    다른 LLM은 종종 엉뚱한 숫자나 근사치를 냅니다.<br/>
    SNarGPT는 <strong>수능 정확도는 현재 99.78% 이며, 초고난도, 고난도 문항은 오히려 100%에 가깝습니다.</strong><br/>
    문항번호·단원·출처를 함께 표기합니다.
  </p>
</div>

<!-- SNARGPT_INTERFACE_2 -->

---

### 3️⃣ 인터넷에서 '저작권 없는 문제' 자동 수집

교재 저작권에 걸리지 않는 오픈 소스 문제를 수집해
학생의 취약 단원 중심으로 자동 큐레이션합니다.

<div class="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 my-6 rounded-r-lg">
  <p class="text-gray-700 dark:text-gray-300 mb-3">
    <strong>📚 예시:</strong>
  </p>
  <p class="text-gray-800 dark:text-gray-200 italic">
    "지수로그 단원 중 고난도 문제 5개만 줘"
  </p>
  <p class="text-gray-700 dark:text-gray-300 mt-3">
    → AI가 오픈문항 DB를 뒤져 직접 선별해줍니다.
  </p>
</div>

<div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 my-6 rounded-lg">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">📍 기존 LLM과의 차이</h4>
  <p class="text-gray-700 dark:text-gray-300">
    ChatGPT는 자체 지식만 답하지만,<br/>
    SNarGPT는 <strong>'합법적 외부 소스'를 연결해 실제 문제 데이터</strong>를 제공합니다.
  </p>
</div>

---

### 4️⃣ 강의 요약·복습 루프 (영상 URL 입력)

유튜브나 오픈 강의 URL을 주면
AI가 내용을 요약하고 **핵심 개념 퀴즈**를 만들어줍니다.

<div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
  <p class="text-gray-700 dark:text-gray-300 mb-3">
    <strong>🎥 예시:</strong>
  </p>
  <p class="text-gray-800 dark:text-gray-200 italic">
    "이 강의 복습용 퀴즈 만들어줘."
  </p>
  <p class="text-gray-700 dark:text-gray-300 mt-3">
    → 10문제 요약형 퀴즈 + 복습노트 자동 생성.
  </p>
</div>

<div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 my-6 rounded-lg">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">📍 기존 LLM과의 차이</h4>
  <p class="text-gray-700 dark:text-gray-300">
    일반 LLM은 영상 내용을 몰라도 요약을 "만드는 척" 하지만,<br/>
    SNarGPT는 <strong>실제 영상 자막을 분석한 후 학습용 포맷으로 가공</strong>합니다.
  </p>
</div>

---

### 5️⃣ 학원/독학 관리 연동 (SN 시스템 통합)

SN독학기숙학원과 연동되어 학생의 실제 모의고사 오답, 주간 계획, 개념 복습 내역까지 연동됩니다.

<div class="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
  <p class="text-gray-700 dark:text-gray-300 mb-3">
    <strong>📊 예시:</strong>
  </p>
  <p class="text-gray-800 dark:text-gray-200 italic">
    "지난주에 내가 오답 많이 낸 단원 복습 문제 만들어줘."
  </p>
  <p class="text-gray-700 dark:text-gray-300 mt-3">
    → SNarGPT가 자동으로 오답패턴을 기반으로 문제를 생성합니다.
  </p>
</div>

<div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 my-6 rounded-lg">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">📍 기존 LLM과의 차이</h4>
  <p class="text-gray-700 dark:text-gray-300">
    일반 LLM은 '사용자 맥락'을 기억하지 않습니다.<br/>
    SNarGPT는 <strong>학원 학습 로그와 연결된 '개인화 메모리'</strong>를 기반으로 작동합니다.
  </p>
</div>

---

### 6️⃣ 문제 생성 (평가원 수준의 AI 문제 제작)

AI가 평가원 문제의 출제 패턴을 학습해
학생이 약한 영역을 기준으로 **새로운 문제를 생성**합니다.

<div class="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 my-6 rounded-r-lg">
  <p class="text-gray-700 dark:text-gray-300 mb-3">
    <strong>✏️ 예시:</strong>
  </p>
  <p class="text-gray-800 dark:text-gray-200 italic">
    "삼각함수 그래프 문제 중 중상난이도 1개 만들어줘."
  </p>
  <p class="text-gray-700 dark:text-gray-300 mt-3">
    → 출제의도, 난이도 지표, 해설까지 자동 생성.
  </p>
</div>

<div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 my-6 rounded-lg">
  <h4 class="font-bold text-gray-900 dark:text-white mb-2">📍 기존 LLM과의 차이</h4>
  <p class="text-gray-700 dark:text-gray-300">
    ChatGPT의 문제 생성은 감(heuristic)에 의존하지만,<br/>
    SNarGPT는 <strong>실제 평가원 문항 통계와 논리 트리를 기반</strong>으로 합니다.
  </p>
</div>

---

## 🔸 곧 추가될 기능 예시

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔄 복습 루프 자동화</h3>
    <p class="text-gray-700 dark:text-gray-300">
      하루 학습 기록 기반으로 자동 오답/개념 복습 스케줄 생성
    </p>
  </div>

  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">👁️ SNarVIS 연동</h3>
    <p class="text-gray-700 dark:text-gray-300">
      시각형 공부를 좋아하는 학생을 위해, SNarVIS에서 시각자료·그래프·패턴 분석을 자동 표시
    </p>
  </div>

  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📈 모의고사 맞춤 리포트</h3>
    <p class="text-gray-700 dark:text-gray-300">
      문항별 오답률 + 사고패턴 + 추천 복습문항 자동 리포트
    </p>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
      본 기능은 SN독학기숙학원, SN독학관리 학원 재원생에 한해 제공됩니다.
    </p>
  </div>

  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🎯 학습 효율 분석</h3>
    <p class="text-gray-700 dark:text-gray-300">
      개인별 학습 패턴 분석을 통한 최적 학습 시간대 및 방법 추천
    </p>
  </div>

  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📅 2026년 내 과탐풀이도 update</h3>
    <p class="text-gray-700 dark:text-gray-300">
      현재는 수학 풀이만 완성되었고 26년내 과탐, 국어 풀이도 업데이트 될 예정입니다.
    </p>
  </div>
</div>

---

## ✨ 마무리

<div class="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-l-4 border-purple-500 p-8 my-8 rounded-r-lg">
  <p class="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-4">
    SNarGPT는 <strong>"AI니까 대단하다"</strong>는 게 아니라,<br/>
    <strong>"AI가 공부에 실제로 도움이 된다"</strong>는 걸 보여주는 시스템입니다.
  </p>

  <p class="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-4">
    <strong>LLM은 언어모델</strong>이고, <strong>SNarGPT는 학습모델</strong>입니다.
  </p>

  <p class="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-4">
    학생의 하루 공부가 쌓일수록, AI도 함께 성장합니다.
  </p>

  <p class="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-4">
    당신이 문제를 풀수록, SNarGPT는 당신을 더 잘 이해하게 됩니다.
  </p>

  <p class="text-gray-800 dark:text-gray-200 text-xl font-bold">
    이제 2026년에 SN에서 만날 수 있습니다.
  </p>
</div>

---

## 📞 문의하기

SNarGPT에 대해 더 궁금하신가요?

**입학 문의**
- 📞 전화 상담: 031-771-0300 (내선번호 1번)
- 💬 카카오톡 채널: [SN독학기숙학원] 검색 후 문의
- 📧 이메일: snacademy@naver.com

**SNarGPT 체험**
- 🌐 웹사이트: [https://snargpt.ai](https://snargpt.ai)
`,
    category: 'startup',
    tags: ['AI', 'SNarGPT', '수능', '학습', 'LLM', '교육기술'],
    author: 'SN Academy',
    date: '2025-11-09',
    readTime: '7',
    featured: true,
    published: true,
    thumbnail: '/images/thumbnail/SNarGPT_guide_thumbnail.png',
    url: '/startup/snargpt-guide-1',
  },
  {
    id: 'sochunhyangga',
    title: '절제된 설렘, K-연애의 원조 (수능 고전문학 「소춘향가」)',
    excerpt:
      '조선 시대 후기 십이 잡가의 하나로, 판소리 「춘향가」 중 관객들이 좋아했던 장면을 변형하여 만든 노래입니다. 이몽룡과 춘향의 첫 만남, 연정, 헤어짐 후의 그리움과 슬픔을 압축적으로 담아낸 작품입니다.',
    content: `안녕하세요, SN독학기숙학원입니다 😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 열 여섯 번째 시간.
오늘은 잡가인 「소춘향가」를 준비했습니다.

「소춘향가」는 조선 시대 후기 십이 잡가의 하나로 판소리 「춘향가」 중 관객들이 좋아했던 장면을 변형하여 만든 노래입니다. 「춘향가」에서 이몽룡과 춘향의 첫 만남, 춘향을 향한 이몽룡의 연정, 이몽룡과 헤어진 후 춘향의 그리움과 슬픔 등을 변형하여 압축적으로 보여 주고 있습니다(해설 출처: EBS 수능완성 국어).

춘향과 이몽룡의 설레는 사랑과 애절한 그리움을 함께 감상해보시죠.

## 🎭 작품의 특징

<div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
  <h3 class="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">판소리에서 잡가로</h3>
  <p class="text-gray-800 dark:text-gray-200">
    「소춘향가」는 판소리 「춘향가」의 명장면들을 선별하여 노래로 재구성한 작품입니다.
    긴 판소리를 짧은 잡가로 압축하면서도 춘향과 이몽룡의 사랑 이야기의 핵심을 생생하게 전달합니다.
  </p>
</div>

<div class="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 my-6 rounded-r-lg">
  <h3 class="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">첫 만남의 설렘</h3>
  <p class="text-gray-800 dark:text-gray-200">
    이몽룡과 춘향이 처음 만나는 장면은 조선시대 연애 문학의 백미입니다.
    절제된 표현 속에서도 두 사람의 설레는 감정이 고스란히 느껴집니다.
  </p>
</div>

<div class="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
  <h3 class="text-xl font-bold text-red-900 dark:text-red-100 mb-3">이별의 애절함</h3>
  <p class="text-gray-800 dark:text-gray-200">
    이몽룡이 떠난 후 춘향이 느끼는 그리움과 슬픔은 시대를 초월한 보편적 감정입니다.
    이별의 아픔을 섬세하게 표현한 대목은 수능 국어에서도 자주 출제됩니다.
  </p>
</div>

## 📚 현대적 의미

「소춘향가」는 단순한 옛날 사랑 이야기가 아닙니다.
신분을 초월한 사랑, 약속을 지키는 신의, 시련 속에서도 흔들리지 않는 믿음 등
현대를 살아가는 우리에게도 여전히 유효한 가치들을 담고 있습니다.

AI 그림과 친절한 해설로 즐기는 고전문학! 보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
    당신이 수험생이라면 이것도 한번 읽어보세요.
  </summary>
  <div class="p-6 bg-white dark:bg-gray-900">

### 🎭 문학적 특징

「소춘향가」는 판소리 「춘향가」를 잡가 형식으로 재구성한 작품으로, 다음과 같은 특징이 있습니다:

- **압축적 서사**: 긴 판소리의 핵심 장면만을 선별하여 짧은 노래로 구성
- **서정성 강화**: 사건 전개보다는 인물의 감정에 초점
- **대중성**: 판소리보다 더 쉽게 접근 가능한 잡가 형식

### 🔍 수능 출제 포인트

1. **첫 만남 장면**: 두 사람의 심리 변화와 감정 표현 방식
2. **이별 장면**: 춘향의 그리움을 표현하는 비유와 상징
3. **판소리와의 비교**: 원작과의 차이점, 각색의 의도

### 📖 감상 포인트

- 절제된 표현 속에 담긴 깊은 감정
- 신분 차이를 뛰어넘는 사랑의 순수함
- 이별의 아픔과 그리움의 보편성

  </div>
</details>`,
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
    thumbnail: '/images/thumbnail/thumbnail_a2_sochunhyangga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nwh6VpYaHvo',
    url: '/originals/sochunhyangga',
    type: 'special',
  },
  {
    id: 'classic-literature-marathon-2026',
    title: '여기서 26학년도 수능 국어 몇 문제 나올까? (SN 고전문학 몰아보기)',
    excerpt:
      '2026 수능을 앞둔 수험생을 위한 특별 영상! SN독학기숙학원이 엄선한 고전문학 작품 13편을 1시간 동안 몰아보며 마지막 정리를 해보세요. 보기만 해도 수능 점수가 오르는 SN 고전문학 시리즈의 결정판입니다.',
    badge: '2026학년도 수능 출제 (북새곡) · 유튜브 2.6만뷰',
    content: 'special-component',
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
    thumbnail: '/images/thumbnail/thumbnail_VF.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=lsR6vGdm_Mo',
    url: '/originals/classic-literature-marathon-2026',
    type: 'special',
  },
  {
    id: 'biga',
    title: '누가 우리 왕자님 좀 구해와주라 (고전문학 「비가」)',
    excerpt:
      '병자호란의 치욕과 분노를 담은 이정환의 10수 연시조 「비가」. 청나라에 끌려간 소현 세자와 봉림 대군을 구하지 못하는 조정 신하들을 비판하며, 작가가 느낀 수치심과 비통함을 사실적으로 표현한 현실비판 시조입니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 제15탄. 오늘은 조선 후기(1600년대) 이정환의 시조 「비가」(悲歌)를 준비했습니다.

'슬픔의 노래'라는 의미의 제목을 가진 이 작품은 작가가 병자호란의 체험과 그 울분을 담아 지은 10수짜리 연시조입니다. 인조가 청나라에 굴욕적인 항복을 하고 소현 세자와 봉림 대군을 포함해 많은 백성이 잡혀간 현실 속에서 제대로 대응을 못 하는 조정의 신하들을 비판하고, 작가가 느꼈던 수치심과 비통함을 표현하고 있습니다(해설 출처: EBS 수능완성 국어).

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「비가」- 누가 우리 왕자님 좀 구해와주라

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏰 작품의 배경과 의미

「비가」는 조선 후기 이정환이 병자호란(1636-1637) 직후의 참담한 현실을 담아 지은 10수의 연시조입니다. '비가(悲歌)'는 '슬픔의 노래'라는 뜻으로, 작품 전체에 걸쳐 작가의 깊은 비통함과 분노가 담겨 있습니다.

1636년 청나라의 침입으로 시작된 병자호란은 조선에게 큰 치욕이었습니다. 인조는 남한산성에서 항전했으나 결국 삼전도에서 청 태종에게 무릎을 꿇고 항복했습니다. 이 과정에서 소현 세자와 봉림 대군(후일의 효종)을 비롯한 수많은 백성이 청나라에 인질로 끌려가게 됩니다.

이정환은 이러한 비극적 상황 속에서 제대로 대응하지 못하고, 심지어 세자와 대군을 구해오지도 못하는 조정 신하들을 신랄하게 비판합니다. 작품은 단순한 개인의 슬픔을 넘어 나라의 위기 앞에서 무능한 지배층에 대한 분노와 좌절을 담고 있습니다.

### 🎭 문학적 특징

- **연시조 형식**: 10수의 시조를 연결하여 하나의 주제를 전개
- **현실비판 의식**: 병자호란의 비극을 직접적으로 고발하고 무능한 조정을 비판
- **강렬한 정서**: 분노, 수치심, 비통함 등 강한 감정을 직설적으로 표현
- **시대적 증언**: 병자호란이라는 역사적 사건을 문학적으로 기록
- **충정과 비판의 공존**: 왕실에 대한 충성과 무능한 신하들에 대한 비판이 동시에 나타남

### 🌍 문학사적 의의

「비가」는 조선 후기 시조 문학에서 현실비판 의식이 강하게 드러난 대표적인 작품입니다. 단순히 개인의 정서를 노래하는 데 그치지 않고, 시대의 비극을 문학적으로 승화시켰다는 점에서 의미가 있습니다.

특히 병자호란이라는 국가적 치욕을 직접 체험한 사람의 생생한 증언으로서 문학사적 가치를 지닙니다. 이 작품은 단순한 비탄에 그치지 않고, 무능한 지배층에 대한 날카로운 비판을 담고 있어 당대 지식인의 책임 의식을 보여줍니다.

「비가」는 「임계탄」, 「갑민가」 등과 함께 조선 후기 현실비판 문학의 전통을 잇는 중요한 작품으로 평가받고 있습니다.

### 📚 작품 감상 포인트

1. **병자호란의 치욕**: 청나라에 항복하고 왕자들이 끌려간 굴욕
2. **소현 세자와 봉림 대군**: 인질로 잡혀간 왕자들에 대한 안타까움
3. **조정 신하들에 대한 비판**: 제대로 대응하지 못하고 구하지도 못하는 무능함
4. **작가의 정서**: 수치심, 분노, 비통함이 강렬하게 표현됨
5. **역사적 증언**: 병자호란을 직접 체험한 문인의 생생한 기록

### 🎨 현대적 의미

「비가」가 담고 있는 '위기 상황에서의 책임'이라는 주제는 현대에도 여전히 유효합니다. 국가나 조직이 위기에 처했을 때, 지도자와 책임자들이 어떤 역할을 해야 하는지에 대한 근본적인 질문을 던집니다.

또한 이 작품은 불의한 현실 앞에서 침묵하지 않고 비판의 목소리를 내는 지식인의 용기를 보여줍니다. 아무리 힘든 상황에서도 옳지 못한 것에 대해 말할 수 있어야 한다는 메시지는 오늘날에도 중요한 의미를 지닙니다.

현대를 살아가는 우리에게 「비가」는 역사의 교훈을 되새기고, 책임 있는 자세로 현실을 직시할 것을 요구합니다.

### 🔍 수능 출제 포인트

- **연시조의 형식적 특징**: 여러 수의 시조가 하나의 주제로 연결됨
- **시대적 배경**: 병자호란(1636-1637)의 역사적 맥락
- **화자의 정서**: 분노, 수치심, 비통함 등 복합적 감정
- **현실비판 의식**: 조정 신하들에 대한 비판과 풍자
- **표현 기법**: 직설적 표현, 대비, 반어 등
- **주제 의식**: 국가적 치욕에 대한 비판과 책임 의식

</div>
</details>

## 💡 영상 하이라이트

**이 영상에서는 다음 내용을 다룹니다:**

- 병자호란의 역사적 배경과 의미
- 「비가」의 창작 동기와 작가 이정환
- 10수 연시조의 구조와 내용 분석
- 소현 세자·봉림 대군과 관련된 역사적 사실
- 작품 속 비판 의식과 현대적 의미
- 수능 출제 포인트와 감상 방법

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
English Description
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

## "Biga" (悲歌, Song of Sorrow) - Why Can't Anyone Rescue Our Princes?

"Biga" (Song of Sorrow) is a sequence of 10 sijo poems written by Yi Jeong-hwan in the 17th century, during the late Joseon Dynasty. The work captures the deep shame, anger, and grief following the Byeongja Horan (Manchu Invasion of 1636-1637).

### Historical Context

The Byeongja Horan was one of the most humiliating events in Joseon history. When the Manchu Qing dynasty invaded in 1636, King Injo retreated to Namhansanseong Fortress but was eventually forced to surrender at Samjeondo. As part of the surrender terms, Crown Prince Sohyeon and Prince Bongrim (later King Hyojong) were taken as hostages to Qing China, along with thousands of Joseon subjects.

### Content and Themes

Yi Jeong-hwan's "Biga" sharply criticizes the court officials who failed to respond effectively to the crisis and were unable to rescue the royal princes. The work goes beyond personal grief to express profound national shame and righteous anger at the incompetent leadership.

The 10-poem sequence progressively builds its critique:
- The humiliation of the king's surrender
- The tragedy of the princes taken as hostages
- The failure of court officials to act
- The author's overwhelming shame and sorrow
- A call for accountability and justice

### Literary Significance

"Biga" represents an important tradition in late Joseon literature where poetry became a vehicle for social and political criticism. Unlike earlier sijo that focused on personal emotions or natural beauty, this work directly addresses historical events and holds those in power accountable.

The work demonstrates how literature can serve as historical testimony and moral witness. Yi Jeong-hwan's unflinching critique of the establishment, even in the face of national tragedy, exemplifies the Confucian scholar's duty to speak truth to power.

### Modern Relevance

"Biga" raises timeless questions about leadership, responsibility, and moral courage:
- What are the duties of leaders during national crises?
- How should we respond when those in power fail their responsibilities?
- What role should intellectuals and writers play in times of injustice?

The work reminds us that remaining silent in the face of wrongdoing is itself a form of complicity. Yi Jeong-hwan's courage in expressing his criticism, despite the risks, serves as an enduring model of intellectual integrity.

### Korean SAT Connection

"Biga" is a key work for understanding:
- The sijo form, particularly the yeonsi structure (linked sequence)
- Historical literature and its connection to real events
- The development of social criticism in Korean classical poetry
- Complex emotional expression in classical Korean literature

For modern students, "Biga" offers not just literary study but a window into a pivotal moment in Korean history and the power of literature to bear witness and demand justice.

</div>
</details>`,
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
    thumbnail: '/images/thumbnail/thumbnail_biga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=aIy9pO6qaMQ',
    url: '/originals/biga',
    type: 'special',
  },
  {
    id: '2026-suneung-day-vlog',
    title: '2026학년도 수능일 Vlog',
    excerpt:
      '2026학년도 대학수학능력시험 당일, SN독학기숙학원에서는 어떤 일들이 분주하게 진행되었을까요? 수능일 브이로그를 통해 함께 만나보세요.',
    content: `<div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg p-4 mb-6">
<p class="text-sm sm:text-base mb-0">
<strong>2026학년도 대학수학능력시험</strong>이 지난 11월 13일에 진행되었습니다.<br />
SN독학기숙학원에서 수능 당일 어떤 일들이 있었는지 브이로그로 만나보세요!
</p>
</div>

<h2 class="text-lg sm:text-xl font-semibold mt-8 mb-4 pl-3 border-l-4 border-green-700 text-gray-900 dark:text-white">영상으로 보기</h2>

<div class="aspect-video w-full mb-6">
<iframe
  class="w-full h-full rounded-lg shadow-lg"
  src="https://www.youtube.com/embed/8gUWtBFzYuU"
  title="2026학년도 수능일 Vlog"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>
</div>

<h2 class="text-lg sm:text-xl font-semibold mt-8 mb-4 pl-3 border-l-4 border-green-700 text-gray-900 dark:text-white">수능일, 그날의 기록</h2>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
독학기숙학원에서 가장 중요한 날을 딱 하루만 꼽으라면 언제일까요?<br />
맞습니다. 바로 <strong>수능 시험을 치르는 날</strong>입니다.
</p>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
지난 달(11월) 13일. <strong>2026학년도 대학수학능력시험</strong>이 진행되었습니다.<br />
SN독학기숙학원 친구들도 한 명도 빠짐없이 각자의 시험장에서 시험을 치렀는데요,
</p>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
새벽부터 일어나서 준비하고 버스 타고 시험장 가서 시험 치르는 동안<br />
<strong>SN독학기숙학원에서는 어떤 일들이 분주하게 진행되었을까요?</strong>
</p>

<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 rounded-lg p-3 my-4 text-sm">
함께 만나보시죠.
</div>

<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg p-4 mt-6">
<p class="text-sm sm:text-base mb-0">
수험생 여러분, 정말 수고 많으셨습니다.<br />
SN독학기숙학원은 여러분의 꿈을 응원합니다.
</p>
</div>`,
    category: 'notice',
    tags: ['수능', 'Vlog', '2026', '수능일'],
    author: 'SN독학기숙학원',
    date: '2025-12-04',
    readTime: '3',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/vlog_thumbnail_a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=8gUWtBFzYuU',
    url: '/notice/2026-suneung-day-vlog',
  },
  {
    id: '2026-admission-guide',
    title: '2026년도 SN독학기숙학원 입소 안내',
    excerpt: '2026년도 SN독학기숙학원 입소에 관한 안내사항입니다.',
    content: 'special-component',
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
    content: 'special-component',
    category: 'notice',
    tags: ['수능', '안내', '일정'],
    author: 'SN독학기숙학원',
    date: '2025-10-31',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/2026_k-sat_notice.png',
    url: '/notice/251113suneungnotice',
    type: 'special',
  },
  {
    id: 'suneung-math-solution-10min',
    title: '2026 수능 수학 전체 해설 PDF | 시험 후 20분 만에 전국 최초 공개',
    excerpt:
      'SN독학기숙학원이 SNarGPT·SNarGO AI 문제풀이 엔진으로 수능 시험지 공개 후 단 20분 만에 전국 최초로 전문 해설을 제공합니다. 공통 22문항 + 미적·확통·기하 각 8문항, 총 46문제 완벽 해설 PDF를 지금 바로 무료 다운로드하세요.',
    content: `<p class="text-sm text-gray-500 dark:text-gray-400 mb-8">
2026학년도 수능 수학(2025.11.13 시행)
</p>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
안녕하세요, SN독학기숙학원입니다.<br/>
<strong>2026학년도 대학수학능력시험, 드디어 오늘입니다.</strong>
</p>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
올해 SN은 전국에서 누구보다 빠르게, 누구보다 정확하게
<strong>수능 수학 영역 해설</strong>을 제공하기 위해 특별한 프로젝트를 준비했습니다.
</p>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">🚀 시험지 공개 후 20분 안에 '전국 1등 속도'로 해설 업로드</h2>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
수학 시험지가 공개되는 즉시,
저희는 자체 개발한 <strong>SNarGPT·SNarGO 문제풀이 엔진</strong>을 통해
<strong>20분 컷 최종 해설 PDF</strong>를 업로드합니다.
</p>

<div class="border-l-2 border-gray-300 dark:border-gray-600 pl-6 py-2 my-6">
  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
    <li>• 수능 전문 AI 'SNarGO'로 실시간 문제 풀이</li>
    <li>• 사람보다 빠른 정확도, 99%+ 검증된 로직</li>
    <li>• 전 문항 풀이 + 그래프 + 해석 + 개념 연결까지 반영</li>
    <li>• PDF 즉시 다운로드 링크 제공</li>
    <li>• 전국 커뮤니티·블로그·카페 등에 동시 업로드</li>
  </ul>
</div>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
"어떤 해설이 맞는지" 확인해야 하는 귀한 시간을 줄여드리고,
<strong>학생·학부모·선생님 누구나 가장 빠르고 정확한 정보에 접근</strong>할 수 있도록 준비했습니다.
</p>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">🔍 왜 SNarGPT가 가장 빠를 수밖에 없는가?</h2>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
<strong>SNarGPT는 단순한 챗봇이 아닙니다.</strong>
</p>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
우리가 개발한 <strong>SNarGO</strong>는 <strong>수능 수학 전용 모델</strong>로,
</p>

<div class="border-l-2 border-gray-300 dark:border-gray-600 pl-6 py-2 my-6">
  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
    <li>• 교육청·평가원 기출 데이터 기반</li>
    <li>• 수능 난이도에 최적화된 문제풀이 엔진</li>
    <li>• 실수하지 않는 미적분·확통·기하 계산 처리</li>
    <li>• 난이도 상 문항일수록 정확도가 더 올라가는 구조</li>
  </ul>
</div>

<p class="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
즉, <strong>사람이 1번 풀 때 AI는 수십 번의 시뮬레이션을 돌려</strong>
단 <strong>0.1초 만에 최적 풀이를 찾는 시스템</strong>입니다.
</p>

<div class="border-l-2 border-gray-900 dark:border-gray-100 pl-4 my-8">
  <p class="text-lg text-gray-900 dark:text-gray-100">
    올해도 저희는 그 기술력을 수능 당일에 그대로 증명해보이려 많은 준비를 했습니다.
  </p>
</div>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">📥 해설지 다운로드</h2>

<div class="space-y-3 my-6">
  <details class="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
    <summary class="px-6 py-4 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      <div class="flex items-center justify-between">
        <span class="font-medium text-gray-900 dark:text-gray-100">1. 2026학년도 수능 수학</span>
        <span class="text-sm text-green-600 dark:text-green-400 font-medium">14:28 업로드</span>
      </div>
    </summary>
    <div class="px-6 py-4 bg-white dark:bg-gray-900">
      <a href="/pdfs/2026-suneung-math.pdf" download class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        PDF 다운로드
      </a>
    </div>
  </details>

  <details class="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
    <summary class="px-6 py-4 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      <div class="flex items-center justify-between">
        <span class="font-medium text-gray-900 dark:text-gray-100">2. 2026학년도 수능 수학 답안지</span>
        <span class="text-sm text-green-600 dark:text-green-400 font-medium">14:28 업로드</span>
      </div>
    </summary>
    <div class="px-6 py-4 bg-white dark:bg-gray-900">
      <a href="/pdfs/2026-suneung-math-answer.pdf" download class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        PDF 다운로드
      </a>
    </div>
  </details>

  <details class="border-2 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
    <summary class="px-6 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 cursor-pointer hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-700 dark:hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.01]">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-2xl">📚</span>
          <span class="font-bold text-lg text-white">3. 2026학년도 수능 수학 46문제(기하, 미적, 확통) 전체 해설지</span>
        </div>
        <span class="text-sm bg-green-400 dark:bg-green-500 text-green-900 dark:text-green-100 font-bold px-3 py-1 rounded-full shadow-md">수정본</span>
      </div>
    </summary>
    <div class="px-6 py-5 bg-white dark:bg-gray-900">
      <a href="/pdfs/2026-suneung-math-full-solution.pdf" download class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span class="text-base">PDF 다운로드</span>
      </a>
      <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3 font-medium">
        공통문항 22개, 기하 8문제, 미적 8문제, 확통 8문제 순으로 구성되어 있습니다.
      </p>
      <div class="text-xs text-gray-500 dark:text-gray-500 leading-relaxed border-t border-gray-200 dark:border-gray-700 pt-3">
        <p class="mb-1">최초 업로드: 15:33</p>
        <p>22번, 30번 풀이는 맞으나 교육과정을 벗어났다는 풀이가 있어 20:40에 교육과정 내의 해설로 진행한 수정본을 업로드 합니다.</p>
      </div>
    </div>
  </details>
</div>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">📊 AI가 정리한 26년 수능 문항별 과목, 오답률(추정)</h2>

<style>
  .tab-button {
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #d1d5db;
    background: #f9fafb;
    color: #374151;
    transition: all 0.2s;
  }
  .dark .tab-button {
    border-color: #4b5563;
    background: #1f2937;
    color: #d1d5db;
  }
  .tab-button:hover {
    background: #e5e7eb;
  }
  .dark .tab-button:hover {
    background: #374151;
  }
  .active-tab {
    background: #3b82f6 !important;
    color: white !important;
    border-color: #3b82f6 !important;
  }
  .tab-content {
    display: none;
  }
  #tab-common {
    display: block;
  }
</style>

<div class="my-6">
  <div class="flex gap-2 mb-4">
    <button class="tab-button active-tab" onclick="showTab('tab-common', event)">공통</button>
    <button class="tab-button" onclick="showTab('tab-prob', event)">확통</button>
    <button class="tab-button" onclick="showTab('tab-calc', event)">미적</button>
    <button class="tab-button" onclick="showTab('tab-geo', event)">기하</button>
  </div>

  <div id="tab-common" class="tab-content overflow-x-auto">
    <table class="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
      <thead class="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">문항번호</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">주제</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">난이도</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">AI 추정 오답률</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">실제 채점 오답률</th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-gray-900">
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">1</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">지수법칙 기초 계산</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4% ~ 6%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">2</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">도함수 정의형 극한</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">2% ~ 5%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">3</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">차분몫 = 미분계수 정의</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">2% ~ 5%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">시그마 선형성 적용</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">10% ~ 14%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">5</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">다항함수 도함수 값 계산</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4% ~ 8%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">6</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">로그 기본 성질과 지수 변환</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4% ~ 8%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">7</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">두 포물선 넓이 (정적분)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">10% ~ 15%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">8</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">삼각함수 선형결합과 부호 판정</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">8% ~ 14%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">9</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">수평선 접선 조건 (극값)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">12% ~ 16%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">10</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">지수함수 그래프와 넓이 조건</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">15% ~ 20%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">11</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">속도함수로 이동거리 계산</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">15% ~ 25%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">12</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">등비수열 항 간격과 합 조건</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">12% ~ 18%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">13</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">접선과 삼각형 넓이</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">12% ~ 20%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">14</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">삼각형 외접원, 사인법칙 복합</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">42% ~ 52%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">15</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">정적분의 미분과 극값</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">35% ~ 45%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">16</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">점화식 직접 대입</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4% ~ 8%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">17</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">부정적분 기초 계산</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4% ~ 6%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">18</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">삼각형 넓이 문제</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4% ~ 8%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">19</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">닫힌구간 절댓값 최댓값</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중하~중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">7% ~ 12%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">20</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">수열의 부분합 문제</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">35% ~ 45%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">21</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">삼차함수와 조각함수</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">55% ~ 65%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">22</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">지수·로그 대칭 문제</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">45% ~ 55%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
      </tbody>
    </table>
  </div>

  <div id="tab-prob" class="tab-content overflow-x-auto">
    <table class="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
      <thead class="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">문항번호</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">주제</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">난이도</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">AI 추정 오답률</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">실제 채점 오답률</th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-gray-900">
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">23</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">중복허용 나열</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4% ~ 10%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">24</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">확률의 기본 공식</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">5% ~ 10%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">25</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">조합 확률</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">7% ~ 12%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">26</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">신뢰구간</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하~중하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">10% ~ 18%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">27</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">이산확률변수의 분산</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">15% ~ 25%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">28</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">조건부확률 복합</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">40% ~ 50%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">29</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">정규근사</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">8% ~ 15%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">30</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">인접 제약이 있는 배치</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">45% ~ 60%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
      </tbody>
    </table>
  </div>

  <div id="tab-calc" class="tab-content overflow-x-auto">
    <table class="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
      <thead class="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">문항번호</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">주제</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">난이도</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">AI 추정 오답률</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">실제 채점 오답률</th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-gray-900">
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">23</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">극한 문제 (표준극한)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">3% ~ 6%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">24</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">정적분 문제 (치환적분)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">9% ~ 14%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">25</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">샌드위치정리 극한</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">10% ~ 15%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">26</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">정적분 부피 (정삼각형)</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">12% ~ 18%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">27</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">매개변수 곡선 접선</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하~중하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">5% ~ 12%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">28</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">역함수 미분과 적분</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">35% ~ 50%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">29</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">등비급수</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">25% ~ 40%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">30</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">역함수와 교점 개수</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">40% ~ 55%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
      </tbody>
    </table>
  </div>

  <div id="tab-geo" class="tab-content overflow-x-auto">
    <table class="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
      <thead class="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">문항번호</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100">주제</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">난이도</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">AI 추정 오답률</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 text-center">실제 채점 오답률</th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-gray-900">
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">23</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">벡터 성분합 계산</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">4% ~ 8%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">24</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">포물선 초점-준선 거리</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">5% ~ 10%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">25</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">3차원 좌표 대칭과 거리</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">5% ~ 10%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">26</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">쌍곡선 접선 문제</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중하</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">12% ~ 17%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">27</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">원기둥 넓이 문제</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">35% ~ 45%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">28</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">사면체와 구 문제</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">55% ~ 70%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">29</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">포물선-타원 결합</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">53% ~ 67%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
        <tr><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">30</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">원과 벡터 내적</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">중상</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">45% ~ 55%</td><td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-center">업데이트 예정</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
  AI 추정 오답률은 과거 데이터를 기반으로 AI가 추론한 추정치입니다. AI는 오답률을 낮게 설정하는 경향이 있어, 이는 추후 데이터를 쌓아 개선할 예정입니다. 개선을 위한 참고 자료로만 봐주시면 감사하겠습니다.
</p>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">🎓 SN의 약속</h2>

<div class="border-l-2 border-gray-300 dark:border-gray-600 pl-6 py-2 my-6">
  <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
    SN독학기숙학원은 단순히 "빠른 해설"을 넘어,<br/>
    <strong>정확하고, 신뢰할 수 있으며, 학습에 도움이 되는 콘텐츠</strong>를 제공하기 위해 노력합니다.
  </p>
  <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
    수능을 준비하는 모든 학생들에게<br/>
    <strong>가장 빠르고 정확한 정보가 가장 먼저 전달되기를</strong> 바랍니다.
  </p>
</div>

<p class="text-gray-900 dark:text-gray-100 text-lg font-bold my-6">
모든 수험생 여러분의 건투를 빕니다. 🍀<br/>
특히! 우리 SN독학기숙학원 수험생 여러분들! 수능 대박!
</p>

<hr class="my-8 border-gray-300 dark:border-gray-700" />

<div class="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
  <p>SN독학기숙학원 · SNarGPT 개발팀 일동</p>
  <p class="mt-2">문의: <a href="mailto:contact@snacademy.com" class="text-blue-600 dark:text-blue-400 hover:underline">contact@snacademy.com</a></p>
</div>
`,
    category: 'problem-download',
    tags: ['수능', 'SNarGPT', 'AI', '해설', '수학'],
    author: 'SN독학기숙학원',
    date: '2025-11-13',
    readTime: '3',
    featured: true,
    featuredOrder: 1,
    published: true,
    thumbnail: '/images/thumbnail/SNarGPT-2026-Math-Answer-Release.png',
    url: '/problem-download/suneung-math-solution-10min',
  },
  {
    id: 'why-we-invest-in-ai',
    title: '왜 우리는 AI에 투자하는가',
    excerpt:
      'SN독학기숙학원의 AI 투자 철학과 방향성. 20년 전과 달라진 교육 환경, 감이 아닌 데이터 기반 개입, 그리고 성장을 넘어 입시 결과로 완결하는 우리의 이야기.',
    thumbnail: '/images/startup/Why_we_invest_in_AI/Why_we_invest_in_AI.png',
    content: `안녕하세요. SN독학기숙학원 대표 윤석기입니다. 한국의 입시는 빠르게 변하고 있고, AI는 교육 산업의 기준을 다시 쓰고 있습니다. 우리는 학생 한 명 한 명의 데이터를 바탕으로 성장에서 멈추지 않고, <strong>결과(입시 실적)</strong>까지 완결하려 합니다.

## 20년 전과 달라진 것은 무엇인가?

스포츠는 훈련과 장비의 과학화, 데이터의 축적으로 비약적으로 발전했습니다. 반면 교육은 여전히 개별 학생의 맥락보다 '평균적인 방식'에 의존하는 경우가 많습니다. 데이터가 쌓이지 않으면 '관리'는 존재해도 '개입의 정밀도'는 나오지 않습니다. SN의 문제의식은 여기서 출발했습니다.

---

## 1. 사람의 감(感)만으로는 부족한 시대

한 학생이 하루 동안 무엇을 듣고 어디서 멈췄는지, 어떤 유형에서 반복 오류가 나는지 — 이를 실시간으로 파악하는 것은 사람의 기억만으로는 불가능합니다. 그래서 상담은 종종 '겉으로 드러난 현상'에 머물죠.

- "왜 집중이 안 되지?"
- "국어가 어려운 거야?"
- "왜 점수가 떨어졌을까?"

그러나 진짜 원인은 더 깊은 곳에 있습니다. 시간대별 집중 리듬, 디바이스 사용 습관, 반복 오류 지점… <strong>감(感)</strong>으로 추정은 가능하지만 <strong>근거</strong> 없이 확정할 수 없습니다. AI는 이 공백을 메워 경험이 보는 바깥과 데이터가 보여주는 안쪽을 연결합니다.

---

## 2. AI는 교사를 대체하지 않는다 — 역량을 확장한다

SN의 AI는 '보조 프로그램'이 아니라 <strong>교사의 시야를 확장</strong>하는 도구입니다.

### 기존 vs AI 결합 후

<div class="my-6 grid gap-4 sm:grid-cols-2">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
    <div class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">기존</div>
    <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
      <li>• 관찰: 제한적</li>
      <li>• 판단: 경험 중심</li>
      <li>• 지도: 사후 대처</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
    <div class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">AI 결합 후</div>
    <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
      <li>• 관찰: 전면 기록·분석</li>
      <li>• 판단: 데이터 기반 정밀 판단</li>
      <li>• 지도: 최적 개입 타이밍 제공</li>
    </ul>
  </div>
</div>

---

## 3. 교육은 사람, 입시는 정확한 방향

입시는 감성으로 해결되지 않습니다. <strong>정확한 시점에 정확한 개입</strong>을 해야 성과가 납니다. 왜 정체되는지, 왜 특정 과목에서 반복 오류가 이어지는지 등 핵심 질문의 답은 데이터에서 출발합니다. 그래서 우리는 감이 아니라 <strong>근거</strong>로 코칭합니다.

<div class="my-8 rounded-2xl bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 border border-amber-100 dark:border-amber-900">
  <div class="mb-2 font-semibold text-amber-800 dark:text-amber-300">핵심 원칙</div>
  <div class="text-gray-700 dark:text-gray-300">성장에서 멈추지 않고, <strong>성과(입시 실적)</strong>로 완결한다 — 이것이 학원의 책임입니다.</div>
</div>

---

## 4. SN의 AI는 '외부'가 아니다 — 학원 안에 내재화한다

일반형 AI는 우리 학생을 모릅니다. 데이터는 외부 DB로 사라지고, 입시의 승패를 가르는 <em>정확한 개입 시점</em>은 맥락 없이 포착되지 않습니다. 그래서 SN은 핵심 AI 시스템을 <strong>직접 개발</strong>해 학원 안에 내재화합니다.

### SN AI 시스템

<div class="my-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
  <table class="w-full text-left text-sm">
    <thead class="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <tr>
        <th class="px-4 py-3 font-semibold">시스템</th>
        <th class="px-4 py-3 font-semibold">역할</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SNarLINK</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">학습 시간·디지털 행동·집중 패턴 수집</td>
      </tr>
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SNarVIS</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">데이터를 해석해 <strong>"어디에 개입해야 승산이 있는가"</strong>를 판단하는 교육 의사결정형 에이전트 (리포트 도구가 아니라 <strong>개입 시점을 찾아주는 AI</strong>)</td>
      </tr>
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SNarGPT</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">풀이·개념 즉시 질의응답, 학습 병목의 즉각 보완</td>
      </tr>
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SNarGEN</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">평가원급 문항 생성/변형으로 정밀한 훈련 세트 제공</td>
      </tr>
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SN Portal</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">모든 AI와 운영 시스템의 통합 인프라</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 5. 우리는 성장에서 멈추지 않는다 — 학원은 결과를 만든다

학교는 성장을 목표로 할 수 있지만, 학원은 거기서 멈출 수 없습니다. 성장은 과정이고, <strong>결과는 입시 실적</strong>입니다. SN이 AI에 투자하는 목적은 학생의 가능성을 찾아내는 데서 끝내지 않고 그것을 <strong>'합격'이라는 결과</strong>로 증명하기 위해서입니다.

---

## 결론 — AI 시대 입시 실적을 구조화하는 학원

곧 모든 학원에 AI가 들어올 것입니다. 진짜 차이는 <em>유무</em>가 아니라, <strong>얼마나 깊이 내재화했는가</strong>에서 갈립니다. SN독학기숙학원은 감 중심 관리에서 <strong>근거 기반 개입</strong>으로, 경험 중심 관찰에서 <strong>데이터 기반 판단</strong>으로, 성장 중심 관리에서 <strong>합격 중심 구조</strong>로 전환하고 있습니다.

우리는 '감으로 지도하는 학원'이 아니라, <strong>데이터 위에 경험을 더해 성과를 완성하는 학원</strong>입니다. 이 방향이 AI 시대 새로운 입시 표준이 될 것이라 확신합니다.

---

<div class="mt-8 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 text-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
  <p class="mb-2 font-medium text-gray-900 dark:text-gray-100">작성자</p>
  <p>SN독학기숙학원 대표 윤석기</p>
</div>`,
    category: 'startup',
    tags: ['AI', '교육혁신', '데이터', '입시전략', '에듀테크'],
    author: 'SN독학기숙학원 대표 윤석기',
    date: '2025-10-18',
    readTime: '11',
    featured: false,
    published: true,
    url: '/startup/why-we-invest-in-ai',
  },
  {
    id: 'SNargopost_1',
    title: 'SNarGO — 수능 특화 Vertical AI',
    excerpt:
      'SNarGO는 수능에 최적화된 Vertical AI입니다. 2,000문제 중 1문제 수준 오답, SNarVIS 해설, 그리고 차세대 문제 생성 AI SNarGEN 로드맵까지.',
    thumbnail: '/images/startup/SNarGo/SNargo-thumbnail.PNG',
    content: `SNarGO는 수능에 최적화된 Vertical AI입니다. 2,000문제 중 1문제 수준 오답, SNarVIS 해설, 그리고 차세대 문제 생성 AI SNarGEN 로드맵을 소개합니다.

## SNarGO란?

SNarGO는 **수능 수학 문제 전용** Vertical AI로, 학생들의 수학 실력 향상을 위해 특별히 설계된 AI 시스템입니다.

### 핵심 기능

1. **2,000문제 중 1문제 수준의 정확도**
2. **SNarVIS 시각적 해설 시스템**
3. **차세대 문제 생성 AI SNarGEN**

## 주요 특징

- 수능 출제 패턴 완벽 분석
- 개인별 맞춤 문제 추천
- 실시간 오답 분석 및 피드백
- 체계적인 학습 진도 관리

자세한 내용은 SNarGO 페이지에서 확인하실 수 있습니다.`,
    category: 'startup',
    tags: ['AI', '수능', '수학', '교육기술'],
    author: 'SN Academy',
    date: '2025-10-07',
    readTime: '4',
    featured: false,
    published: true,
    youtubeUrl: undefined,
    url: '/startup/SNargopost_1',
    type: 'special', // 전용 컴포넌트 사용
  },
  {
    id: 'design-guide-demo',
    title: '디자인 시스템 가이드 - 미니멀 블로그 디자인',
    excerpt:
      'SN Academy 블로그의 새로운 디자인 시스템을 소개합니다. Stripe, Notion, Medium에서 영감을 받은 심플하고 깔끔한 디자인 철학을 확인해보세요.',
    thumbnail:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop&crop=center',
    content: `SN Academy 블로그의 새로운 디자인 시스템을 소개합니다. 이 포스트는 디자인 가이드에 정의된 모든 컴포넌트와 스타일을 시연하는 더미 포스트입니다.

## 디자인 철학

<callout type="info">
**미니멀리즘, 일관성, 가독성, 전문성**

우리의 디자인은 Stripe, Notion, Medium에서 영감을 받았습니다.
</callout>

블로그 디자인의 핵심은 **콘텐츠**입니다. 화려한 장식이 아닌, 독자가 글을 편안하게 읽을 수 있도록 하는 것이 최우선 목표입니다.

## 색상 시스템

우리는 3-4가지 색상만 사용하여 시각적 일관성을 유지합니다.

<toggle title="주요 색상 팔레트">
- **Navy (#0f2942)**: 전문성과 신뢰감을 전달하는 메인 색상
- **Slate (#475569)**: 가독성이 뛰어난 본문 텍스트 색상
- **Sage Green (#5f7a61)**: SN 브랜드와 연결되는 부드러운 악센트

이 색상들은 충분한 대비를 제공하여 접근성 기준(WCAG AA)을 충족합니다.
</toggle>

### 배경 색상의 중요성

배경색은 아주 미묘하게 사용됩니다:
- 순백 (#ffffff): 기본 배경
- 연한 그레이 (#f8fafc): 섹션 구분
- 중간 그레이 (#f1f5f9): 카드와 패널

## 타이포그래피

<callout type="success">
**타이포그래피는 디자인의 95%입니다.**

명확한 폰트 크기 위계와 적절한 줄 간격(line-height 1.75)으로 최적의 가독성을 제공합니다.
</callout>

### 폰트 크기 스케일

우리는 1.25 비율의 모듈러 스케일을 사용합니다:

<table>
| 크기 | 용도 | 픽셀 |
|------|------|------|
| text-6xl | 히어로 제목 | 60px |
| text-5xl | 메인 제목 | 48px |
| text-4xl | 서브 제목 | 36px |
| text-3xl | H2 제목 | 30px |
| text-2xl | H3 제목 | 24px |
| text-xl | H4 제목 | 20px |
| text-base | 본문 | 16px |
</table>

## 컴포넌트 가이드

### Callout 박스

다양한 타입의 Callout 박스를 제공합니다:

<callout type="info">
**정보 전달**

이것은 정보성 callout입니다. 중요한 정보를 강조할 때 사용합니다.
</callout>

<callout type="success">
**성공 메시지**

긍정적인 내용이나 성공 사례를 전달할 때 사용합니다.
</callout>

<callout type="warning">
**주의사항**

독자의 주의를 환기시켜야 할 때 사용합니다.
</callout>

### Toggle (Accordion)

긴 내용을 접었다 펼 수 있습니다:

<toggle title="토글 내용 보기">
이것은 토글 안의 내용입니다. 부가적인 정보나 선택적으로 읽을 수 있는 내용을 넣을 때 유용합니다.

- 리스트 항목 1
- 리스트 항목 2
- 리스트 항목 3
</toggle>

<toggle title="고급 기능">
토글은 중첩도 가능합니다. FAQ, 상세 설명, 보충 자료 등에 활용하세요.
</toggle>

### 코드 블록

코드는 중성적인 회색 배경에 모노스페이스 폰트로 표시됩니다:

<code>
const greeting = "Hello, World!";
console.log(greeting);
</code>

### 하이라이트 (강조)

텍스트 중 <mark className="bg-yellow-100 px-1 rounded">중요한 부분을 강조</mark>할 때 사용합니다.

예를 들어, "디자인의 핵심은 <mark className="bg-yellow-100 px-1 rounded">콘텐츠</mark>입니다"처럼 핵심 단어를 부각시킬 수 있습니다.

### 줄바꿈

주소나 연락처를 표시할 때 유용합니다:

**SN Academy**<br />
경기도 양평군 양평읍<br />
전화: 031-771-0300<br />
이메일: ai@snacademy.co.kr

## 레이아웃 원칙

### 여백의 힘

<callout type="info">
**충분한 여백은 디자인의 숨결입니다.**

섹션 간 최소 4rem(64px), 요소 간 1.5rem(24px)의 여백을 유지합니다.
</callout>

여백은 단순히 빈 공간이 아닙니다. 콘텐츠에 숨을 불어넣고, 독자의 시선을 자연스럽게 안내하는 중요한 디자인 요소입니다.

### 최대 텍스트 너비

본문 텍스트는 최대 **65자(65ch)** 너비로 제한됩니다. 이는 가독성 연구에서 권장하는 최적의 줄 길이입니다.

<columns>
<column>

### 왼쪽 컬럼

컬럼 레이아웃을 사용하면 내용을 나란히 배치할 수 있습니다.

이는 비교, 대조, 또는 관련 정보를 함께 보여줄 때 유용합니다.

</column>
<column>

### 오른쪽 컬럼

같은 높이로 정렬되는 두 컬럼은 시각적 균형을 제공합니다.

모바일에서는 자동으로 세로로 쌓입니다.

</column>
</columns>

## 실전 적용 예시

### 블로그 포스트 구조

<toggle title="권장 구조 보기">
1. **제목**: 명확하고 간결하게 (H1)
2. **요약**: 핵심 내용을 2-3문장으로
3. **본문**: 섹션별로 H2, H3 제목 사용
4. **시각 자료**: 이미지, 표, 코드 블록 적절히 활용
5. **Callout**: 중요 정보 강조
6. **결론**: 핵심 메시지 재확인
</toggle>

### 색상 사용 가이드

<table>
| 용도 | 색상 | 언제 사용하나요? |
|------|------|------------------|
| 제목 | Navy | 모든 제목과 중요 텍스트 |
| 본문 | Slate | 일반 문단과 설명 |
| 악센트 | Sage Green | 링크, 버튼, 강조 |
| 배경 | White/Gray | 섹션 구분과 카드 |
</table>

## 하지 말아야 할 것

<callout type="warning">
**피해야 할 디자인 실수**

1. ❌ 너무 많은 색상 (최대 3-4가지로 제한)
2. ❌ 형광색이나 원색 사용
3. ❌ 불필요한 애니메이션
4. ❌ 작은 폰트 크기 (14px 미만)
5. ❌ 불충분한 여백
6. ❌ 일관성 없는 스타일
</callout>

## 해야 할 것

<callout type="success">
**좋은 디자인의 핵심**

1. ✅ 충분한 여백 사용
2. ✅ 명확한 타이포그래피 위계
3. ✅ 일관된 색상 팔레트
4. ✅ 모바일 우선 디자인
5. ✅ 접근성 고려
6. ✅ 빠른 로딩 속도
</callout>

## 디자인 체크리스트

<toggle title="포스트 작성 전 체크리스트">
- [ ] 제목이 명확하고 간결한가?
- [ ] 색상 사용이 3-4가지로 제한되어 있는가?
- [ ] 여백이 충분한가?
- [ ] 본문 텍스트가 65ch를 넘지 않는가?
- [ ] 이미지에 적절한 alt 텍스트가 있는가?
- [ ] 모바일에서도 읽기 편한가?
- [ ] Callout과 Toggle을 적절히 활용했는가?
</toggle>

## 마치며

<callout type="success">
**미니멀 디자인의 힘**

좋은 디자인은 눈에 띄지 않습니다. 독자가 콘텐츠에만 집중할 수 있도록 조용히 뒷받침하는 것이 진정한 디자인입니다.
</callout>

이 디자인 가이드는 지속적으로 발전합니다. 피드백과 제안은 언제나 환영합니다.

**참고 자료:**
- [Stripe Design System](https://stripe.com/blog)
- [Notion Design](https://notion.so)
- [Medium Typography](https://medium.design)

---

**디자인 가이드 버전**: 1.0.0
**마지막 업데이트**: 2025-10-05`,
    category: 'columns',
    tags: ['디자인', '가이드', '블로그'],
    author: 'SN Academy',
    date: '2025-10-05',
    readTime: '4',
    featured: false,
    published: false,
    url: '/columns/design-guide-demo',
  },
  {
    id: 'dokhak',
    title: 'SN독학(獨學)기숙학원 – 왜 우리는 독학을 강조하는가',
    excerpt:
      '안녕하세요. SN독학기숙학원 대표 윤석기 입니다. SN독학기숙학원은 수업보다 독학을 항상 강조해 왔습니다. SN의 탄생철학이죠. 저희 SN독학기숙학원이 런칭이 2014년 11월 입니다. 1기는 2015년부터 시작했죠.',
    thumbnail:
      '/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-0.png',
    content: `이 포스트는 전용 페이지에서 렌더링됩니다. /columns/dokhak을 방문하세요.`,
    category: 'columns',
    tags: ['독학', '독학기숙학원', 'AI', '학습전략담임'],
    author: 'SN Academy',
    date: '2025-10-08',
    readTime: '4',
    featured: false,
    published: true,
    url: '/columns/dokhak',
  },
  {
    id: 'SNarlink',
    title: 'SN독학기숙학원 방화벽의 모든 것! (Feat. SNarlink)',
    excerpt:
      'SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다. 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 SNarlink 시스템에 대해 다룹니다.',
    thumbnail: '/images/SNarlink/thumbnail.png',
    content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-blue-800">
    <strong>SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다.</strong>
  </p>
</div>

이 글은 SN독학기숙학원이 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 **SNarlink** 시스템에 대해 다룹니다. 단순한 차단을 넘어서 AI 기반의 지능형 방어 시스템으로 진화한 우리의 이야기를 들어보세요.

## 🔥 방화벽이란 무엇일까요?

방화벽(Firewall)은 네트워크의 보안을 담당하는 시스템입니다. 마치 건물의 화재를 막는 방화벽처럼, 인터넷에서 유입되는 위험한 트래픽을 차단하는 역할을 합니다.

저희 SN 독학기숙학원이 국내 최초로 기숙학원 내에서 인터넷 방화벽을 도입한 지 어느덧 11년이 되었습니다. 

2014년부터 방화벽 장비를 도입했고, 2018년에는 미국 Cisco사의 최신 방화벽을 도입하여 학생들에게 큰 호평을 받았습니다. 타 기숙학원에서는 어떻게 방화벽을 설계했는지 컨설팅 문의도 몇 차례 온 바 있습니다.

## ❓ 왜 다른 학원들은 제대로 못할까요?

많은 학원들이 방화벽을 갖추고 있다고 홍보하지만, 실제로는 제대로 작동하지 않는 경우가 대부분입니다. 

방화벽은 단순히 장비만 설치하면 되는 것이 아닙니다. **높은 수준의 기술력, 물적&인적 투자, 그리고 오랜 노하우**가 필요하기 때문입니다.

SN도 처음 도입 후 불완전한 방화벽으로 시행착오를 겪었기에 타 기숙학원들의 상황이 잘 이해됩니다.

## 📈 SN의 방화벽 발전사

### 2014년: 첫 도전
- SN 방화벽 장비 최초 도입
- 기숙학원 방화벽의 시초

### 2016년: 노하우 정립
- 장비 교체
- 전문적인 컨설팅 및 정비를 통해 방화벽 운용 노하우 정립

### 2018년: 혁신의 도약
- 미국 CISCO 장비 도입
- 당시 최상위 사양의 방화벽

![2018년 도입된 Cisco 방화벽 장비](/images/SNarlink/cisco firewall.png)

2018년 Cisco 장비 도입 이후 방화벽이 혁신 수준으로 한층 더 업그레이드되었습니다. 도입 이후부터 2025년 올해 업그레이드 전까지도 기숙학원 내에서는 가장 선두주자였습니다.

## 🚀 2025년, 다시 한 번 혁신을 선택하다

이미 선두주자의 자리에 있었지만, **2025년 SN은 다시 한 번 혁신을 선택했습니다.**

중소기업 수준에서는 사실상 불가능하다고 여겨지던, **입시 수험생에 특화된 차세대 방화벽을 순수 자체 기술로 개발**한 것입니다. 

현재는 단순한 기숙학원 방화벽 수준을 넘어, **국내 대기업 수준의 보안 체계에도 뒤처지지 않는 수준**까지 발전하였습니다.

## ⚠️ 기존 시스템의 한계점

### 단순한 '차단'만으로는 부족했다

기존 Cisco 장비도 훌륭했습니다. 수천만원을 들여 장비를 도입하고, 7년간 라이선스를 갱신하며 안정적으로 학원을 운영해 왔죠.

하지만 이 시스템은 교육용으로 특화되어 있지 않았습니다. 모든 기능이 **'차단'에만 집중**되어 있었습니다. 

프록시, VPN, 우회 DNS는 물론 차단되지만, 그 이상의 **섬세한 정책이나 유연한 제어는 기대하기 어려웠습니다.**

### 오르비 문제: 커뮤니티 vs 클래스

구체적인 예시를 들어보겠습니다. 수험생 커뮤니티 사이트인 **오르비**가 있습니다. 

오르비는 커뮤니티뿐 아니라 **'오르비 클래스'라는 인터넷 강의 플랫폼**도 함께 운영 중입니다. 문제는 이 두 사이트가 **같은 기반 시스템을 공유하고 있다**는 점입니다.

학생들에게는 커뮤니티는 불필요하지만, 클래스는 꼭 필요합니다. 하지만 **구조상 커뮤니티만 차단하고 클래스만 허용하는 것이 기술적으로 불가능**했죠.

결국 **커뮤니티와 클래스 모두를 차단**할 수밖에 없었고, **강의를 들어야 하는 학생들은 별도로 핫스팟을 켜서 이용**해야만 했습니다. 여기에서 관리의 공백이 생기죠.

<div style="display: flex; gap: 20px; margin: 20px 0;">
  <div style="flex: 1;">
    <img src="/images/SNarlink/orbi1.png" alt="오르비 커뮤니티와 클래스의 차이점" style="width: 100%; height: auto; border-radius: 8px;" />
    <p style="text-align: center; font-size: 14px; color: #666; margin-top: 8px;">오르비 커뮤니티와 클래스의 차이점</p>
  </div>
  <div style="flex: 1;">
    <img src="/images/SNarlink/orbi2.png" alt="오르비 클래스 접근 화면" style="width: 100%; height: auto; border-radius: 8px;" />
    <p style="text-align: center; font-size: 14px; color: #666; margin-top: 8px;">오르비 클래스 접근 화면</p>
  </div>
</div>

### 외부 의존의 한계

오르비를 비롯한 비슷한 케이스들을 Cisco사의 기술지원 서비스를 통해 문제를 해결해보려 했습니다. 

그러나 이 간단한 문제도 Cisco 사와 파트너사를 통해 개발하면 비용상 합리적이지 않았고, 그 돈이면 우리가 개발하는게 낫다는 생각을 하게 되었습니다.

**결국, 우리는 교육 현장에 꼭 필요한 방향성을 기준으로, 새로운 방화벽 시스템을 오픈소스 기반으로 직접 설계하기로 했습니다.**

## 🤖 AI 시대, 보안의 기준이 달라졌다

AI 시대가 오며 패러다임이 바뀌었고, 보안의 판도를 근본적으로 바꿔놓았습니다. 

예전처럼 **단순히 '차단'만으로는 충분하지 않다는 위기의식**이 생겼습니다.

### 최상위권 학생들의 도전

SN독학기숙학원에 다니는 대부분의 학생들, 특히 약 90%는 학습 외 활동에 큰 관심이 없습니다. 

그러나 서울대 공대, 의대 등을 준비하는 일부 최상위권 학생들 중에는 AI 기술과 자신의 지식을 활용해 방화벽을 우회하려는 시도를 하기도 합니다. (방화벽에 대한 도전 욕구가 생긴답니다...)

일반적인 고등학생 수준에서는 사실상 불가능한 일이지만, 전국 상위 0.1% 학생이라면 가능성을 완전히 배제할 수 없습니다. 

그리고 저희는 그런 학생들도 필요하다고 생각합니다. 왜냐고요? 그 이유는 아래에서 자세히 설명드리겠습니다 :)

### 완벽한 방화벽은 존재하지 않는다

참고로, 100% 뚫리지 않는 방화벽은 존재하지 않습니다. 연간 수백억씩 보안에 투자하는 국내 통신사들도 악성코드에 뚫리는 경우가 있잖아요. 

혹여 그런 업체가 있다면 과장광고입니다. 그래서 저희는 항상 **'완벽에 가까운 방화벽'**이라는 표현을 사용합니다.

## 🌟 SNarlink_Study: 오직 공부만을 위한 네트워크

이러한 고민 끝에, 우리는 보안의 방향을 바꿨습니다. 

단순한 **'차단'이 아니라, 학생의 '시도'와 '의도'를 읽는 지능형 방어 시스템**으로 말입니다.

![SNarlink 로고](/images/SNarlink/SNarlink_Logo.png)

우리는 이 방화벽 시스템을 **SNarlink_study**라고 명명했습니다. SN + Starlink. 공부에만 집중할 수 있도록 설계된 전용 네트워크입니다.

## 🚀 SNarlink의 핵심 기능

SNarlink는 단순한 차단 시스템을 넘어서 **AI가 학습하고 진화하는 지능형 방어 시스템**입니다.

### 🛡️ 강화된 보안 능력
- **차세대 방화벽 엔진**: 기존 Cisco 장비 대비 3배 향상된 차단 성능
- **실시간 위협 탐지**: 0.1초 이내 우회 시도 감지 및 차단
- **다층 보안 구조**: DNS, IP, URL, 패킷 레벨 다중 검증

### ⚡ 속도 최적화
- **스마트 필터링**: 학습에 불필요한 트래픽 자동 제거
- **대역폭 최적화**: 교육 콘텐츠 우선 처리로 속도 2배 향상
- **지연 시간 최소화**: 평균 응답 시간 50% 단축

### 🧠 AI 기반 학습 시스템
- **실시간 DNS 분석**: 우회 시도 패턴 즉시 감지 → 운영팀 알림
- **자동 학습 메커니즘**: 시도된 경로 즉시 학습 및 기록 → 자동 차단 정책 생성
- **진화하는 방어**: 반복 시도 시 방화벽이 스스로 진화하여 더 강력해짐

### 📊 실시간 모니터링
- **24/7 자동 감시**: 인력 개입 없이 24시간 자동 모니터링
- **즉시 알림 시스템**: 우회 시도 발생 시 3초 이내 관리자 알림
- **학생별 추적**: 어떤 학생이 언제 어떤 시도를 했는지 정확한 특정 가능

### 실제 성과: 250명 중 2명만 시도, 모두 실패

방화벽이 업그레이드 이후 실제로 250명의 학생 중 시도한 인원은 단 2명, **모두 실패했습니다.**

**VPN, 프록시, 우회 DNS 시도 등 모두 막아내는 경이로운 능력**을 보여주었습니다. 

그 전 Cisco 장비도 막아내긴 했지만, 이 정도 능력까지는 아니였습니다. 허용된 사이트 내에서 홈페이지 변화가 있으면, 대응이 즉각적이지 않았습니다. 또한 홈페이지 구조 변화가 생기면 우회루트가 생기기도 했죠.

### 학습에 불필요한 요소 자동 필터링

우리가 어떤 사이트에 접속할 때 화면에 보이는 정보 외에도 백그라운드에서는 다양한 데이터 수집 활동 등이 이루어집니다. 

이러한 숨겨진 요소들은 속도를 저하시킬 뿐만 아니라, 악성 코드나 추적 프로그램의 경로가 되기도 합니다. 

**SNarLink는 이 과정에서 학습에 불필요한 요소들을 자동으로 걸러내고, 정말 필요한 정보만 선별적으로 허용함으로써 인터넷 속도를 향상시키는 동시에 악성 프로그램까지 효과적으로 차단**합니다.

## 🔍 시도와 의도를 읽는 탐지 능력

하지만 앞서 말씀드린 것처럼, 세상에 완벽한 방화벽은 없습니다. 

그래서 SNarlink는 단순 차단에 그치지 않고 **시도와 의도를 읽는 탐지 능력**을 갖추었습니다. 

학생이 **방화벽을 우회하는 시도**나 만에 하나 뚫리더라도 **즉시 탐지**하여 **운영자에게 알람**을 띄우고, **즉각 대응**이 가능하도록 설계한 것이죠. 

그리고 **어떤 학생이 시도했는지까지 특정**이 가능합니다. 

이전 방화벽은 학생의 제보 혹은 사람의 눈으로 점검하면서 우회를 알 수 있었고, 누군지 특정도 어려웠습니다. 그러나 지금은 우회 시도 알림과 동시에 특정까지 가능합니다!!

### AI가 학습하는 방화벽

방화벽은 **우회 기술들을 AI 로그 분석**을 통해 학습하며, 앞으로 유사한 시도는 모두 차단해버립니다. 

**단순한 설정된 차단 시스템이 아닌 학습하는 방화벽**이죠. 그래서 학원에서 방화벽 뚫는 시도를 하는 학생들도 필요한 겁니다. SNarlink의 학습 양분이 되니까요.

(이번 5월에 방화벽을 교체하면서 불완전한 시기가 있었습니다... 당시 방화벽 안정화 및 AI가 학습 과정이어서 그랬습니다. 학생들에게는 정말 미안했네요 ㅠㅠ)

![학생들이 공부하는 모습](/images/SNarlink/study room.png)

## 🍎 애플 기기는 왜 까다로웠나?

가장 까다로웠던 건 Apple이었습니다. Apple 기기의 경우, 우회 트래픽 구조가 매우 정교합니다. 

우리는 애플 트래픽만 별도로 분석했고, 관련 코드만 2,000줄 이상 구현했습니다. 

애플 기기 기능 중 학습에 필요한 부분(인증, 로그인, 캘린더, 저장된 음악 듣기 기능)은 허용하고, 이외 우회 및 Private Relay, 음악검색, 뉴스, 음악 다운로드 및 스트리밍, game 같은 기능은 모두 차단합니다. 

그 결과, **iMessage까지 거의 완벽하게 차단**할 수 있었습니다.

### 실시간 모니터링과 자동 대응

이전에는 iMessage 차단이 일시적으로 가능하더라도, Apple 측의 업데이트나 통신 구조 변경이 있을 경우 다시 뚫리는 현상이 반복되곤 했습니다. 

뚫렸는지 인지하는 데에도 시간이 걸렸고, 대응까지도 수동적일 수밖에 없었습니다. 

그러나 현재는 시스템이 실시간으로 트래픽 이상 징후를 감지하고, 혹여나 iMessage가 뚫리더라도 즉시 알림이 발생하며, 대응도 자동화되어 빠르게 이루어집니다.

## 🔗 URL 단위 예외 처리: 오르비 문제 해결

**URL 단위 예외 처리도 가능합니다.** 현재는 베타 버전이지만, URL 단위로 세밀하게 접근을 허용하는 기능도 갖추고 있습니다. 

위에 말씀드린 **오르비가 가장 대표적인 사례**입니다. 

오르비는 같은 기반 시스템을 공유하고 있어, 기존에는 오르비 커뮤니티만 차단이 불가능했습니다. 커뮤니티와 클래스를 같이 차단해야 했죠. 

**하지만 URL 단위 예외 처리를 통해 지금의 방화벽에서는 커뮤니티만 차단이 가능합니다!!**

### 더 나아간 기술: 개별 콘텐츠 접근 제어

거기서 더 나아간 기술은 학생이 유튜브에서 특정 교육 영상만 보거나, 학습 카페의 특정 게시글만 보려는 경우, 해당 주소만 열어주는 기능입니다. 

기술적으로는 구현되어 있으나, 실효성과 실무 효율성을 고려해 현재는 배포하지 않았습니다.

## ⚖️ SNarlink_Frespon: 자유와 책임의 균형

방화벽의 본질은 '차단'이 아닙니다. 학생이 학습에 몰입할 수 있는 환경을 만들어주는 도구입니다.

학습자료 결제, 강의 수강, 정보 탐색 등 필요에 따라 인터넷이 꼭 필요한 경우도 있죠. 

이때 학생은 학생실 선생님께 요청하면, **15분 / 30분 / 60분 단위로 일회용 인터넷 비밀번호를 부여**받게 됩니다. 부여받은 시간이 끝나면 모두 종료됩니다.

*기본은 15분이며, 30분 이후는 필요시에만 부여됩니다.

![모니터링 시스템 화면](/images/SNarlink/monitor.png)

### 핫스팟 방식의 한계를 극복하다

과거에는 핫스팟으로 개별 허용하는 방식이었습니다만, 핫스팟을 허락된 학생 외 사용하는 등 관리 부담이 크고 딴짓의 가능성도 많았기에 전면 개편했습니다. 

이번 업데이트에서 유용한 기능 중 하나입니다! 허락된 학생에게만 제공되는 것뿐만 아니라 시간이 정해져있어 학생도 필요한 업무에만 사용합니다.

이 시스템의 이름은 **SNarlink_Frespon**입니다. Free + Responsibility. 자유를 줄 테니, 그 자유는 공부에만 써야 한다는 책임을 함께 묻는 구조입니다.

대부분의 학생들도 이 원칙을 잘 지켜주고 있습니다.

## 📊 학습 데이터 분석: 학생 개개인의 성장을 돕는 기술

우리가 개발한 방화벽의 가장 강력한 무기는, 차단 데이터뿐만 아니라

**학생들의 학습 데이터를 측정하고 분석할 수 있는 구조**

라는 점입니다. 

등록된 기기만 접속이 가능하며, 기기별로 접속 로그, 집중 시간대, 강의 시청 기록 등이 자동으로 기록됩니다. 

학습 사이트 이용과 스트리밍 시간을 분단위로 정밀 측정하여 분석하는 것이지요. 

또한 기기만 방화벽 시스템에 등록할 뿐, 학생들 기기에 인증서나 기타 프로그램 등을 별도로 깔지 않습니다.

![학습 데이터 리포트 화면](/images/SNarlink/report.png)

### 초개인화된 피드백 제공

이를 통해 학생 개개인의 학습 행동을 정량화하고, **초개인화된 피드백을 제공**할 수 있습니다. 

현재 데이터의 정합성 확보는 완료되었으며, 이를 통한 시각화, 리포팅 기술은 **금년 내 개발 완료 예정**입니다. 기대하셔도 좋습니다.

물론 모든 데이터는 익명화 처리되어 저장되며, 디지털 윤리 기준을 철저히 준수하고 있습니다. 개인정보에 대한 우려는 하지 않으셔도 됩니다.

## 🎯 기술로 교육을 바꾸고, 교육이 기술을 발전시킨다

우리는 기술로 교육을 바꾸고 있습니다. 그리고 교육이 기술을 발전시킬 것입니다.

우리의 방화벽은 단순히 '막는 장비'가 아닙니다. **차세대 교육 보조 시스템이자, 학생의 몰입과 성장을 돕기 위한 AI 기반 플랫폼**입니다. 

이 모든 것을 외부 솔루션 없이, 핵심 고급 인력이신 연구소장 Ryun, Ph.D.을 모셔와 자체 연구소와 인력만으로 만들어냈습니다. 

**우리는 마케팅보다 기술에 투자하는 기업**입니다. 화려한 포장이 아닌, 실질적인 성과로 이야기하려 합니다.

![SN Academy 건물 외관](/images/SNarlink/SN academy.png)

그래서 자신 있게 말씀드립니다. **SN독학기숙학원은 기술적, 윤리적으로 대한민국 최상위 수준의 보안 교육 환경을 갖춘 교육 기관입니다.** 

우리는 교육 플랫폼으로 진화 중입니다. **그리고 학생들의 성공의 경험을 만들겠습니다.**

## 💬 마무리

이 글을 당사 학생, 학부모뿐 아니라 동종업계 분들께도 바칩니다.

SN독학기숙학원의 방화벽은 개발이 모두 완료되었으며, 본원에서 안정적으로 운용하고 있습니다. 

혹시 당사의 차세대 교육 방화벽 도입을 원하시거나 흥미가 있으신 대형학원들은 본원으로 연락 주시면, 라이선스 혹은 시공 협의 가능합니다.

**기술 문의**: snacademy@naver.com

**입학 문의**
- 📞 전화 상담: 031-771-0300 (내선번호 1번)
- 💬 카카오톡 채널: [SN독학기숙학원] 검색 후 문의`,
    category: 'columns',
    tags: ['방화벽', '보안', 'AI', '교육기술'],
    author: 'SN Academy',
    date: '2025-10-03',
    readTime: '4',
    featured: false,
    published: true,
    youtubeUrl: undefined,
    url: '/columns/SNarlink',
  },
  {
    id: 'ai-startup',
    title: 'SN에서 교육 AI 스타트업을 창업했습니다',
    excerpt:
      '교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 초개인화 학습 혁신을 실현하는 SN Academy AI 스타트업을 소개합니다.',
    content: `<div class="bg-gray-50 border-l-4 border-gray-400 p-6 my-8 rounded-r-lg">
  <p class="text-gray-800 text-lg leading-relaxed">
    교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 <strong>초개인화 학습 혁신</strong>을 실현합니다.
  </p>
</div>

## 우리의 미션

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
  <div class="mb-6">
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-800 text-lg font-medium">더 낮은 가격에 교육서비스를 제공하면서도 입시에 성공시키겠습니다.</span>
    </div>
  </div>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-700">교육의 <strong>불균형·비효율·정보 격차</strong>를 해소합니다</span>
    </div>
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-700">학생에게는 <strong>맞춤형 학습 경험</strong>을 제공합니다</span>
    </div>
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-700">교사·학부모에게는 <strong>투명한 학습 데이터 분석</strong>을 제공합니다</span>
    </div>
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-700">교육 시장에는 <strong>혁신적인 AI 도구</strong>를 제공합니다</span>
    </div>
  </div>
</div>

## 핵심 가치

<div class="grid grid-cols-1 gap-8 mb-12">
  <div class="bg-white border border-gray-200 rounded-lg p-8">
    <h3 class="text-xl font-semibold text-gray-800 mb-4">초개인화 학습</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        각 학습자의 학습 패턴과 속도를 분석
      </li>
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        개인별 최적화된 학습 경로 제공
      </li>
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        실시간 학습 진도 추적 및 피드백
      </li>
    </ul>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8">
    <h3 class="text-xl font-semibold text-gray-800 mb-4">AI 기반 교육 기술</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        자연어 처리 기술을 활용한 질문-답변 시스템
      </li>
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        학습 내용 이해도 자동 평가
      </li>
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        개인별 학습 약점 분석 및 보완 방안 제시
      </li>
    </ul>
  </div>
</div>

## 우리의 비전

<div class="bg-gray-50 border-l-4 border-gray-400 p-8 my-12 rounded-r-lg">
  <p class="text-gray-800 text-xl font-medium leading-relaxed">
    AI의 기술과 인간의 자기주도학습 능력을 결합하여 학생의 지적 성장을 로켓처럼 가속합니다.
  </p>
</div>

## Our Team

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">작지만 강력한 팀이 교육의 미래를 다시 씁니다</h3>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">👑</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">대표 (CEO)</h4>
      <p class="text-sm text-gray-600">교육 현장 12년 경험, 전략과 비전을 이끄는 리더</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">🤖</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">AI 개발자 2명</h4>
      <p class="text-sm text-gray-600">대규모 언어모델과 AI 솔루션 연구</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">⚙️</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">백엔드 개발자 1명</h4>
      <p class="text-sm text-gray-600">안정적인 데이터 처리와 서버 아키텍처</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">📊</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">마케팅/데이터 분석 1명</h4>
      <p class="text-sm text-gray-600">학습 데이터 기반 전략 수립</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">🎨</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">디자이너 1명</h4>
      <p class="text-sm text-gray-600">직관적이고 감각적인 UX/UI 구현</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">💻</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">프론트엔드 개발자 1명</h4>
      <p class="text-sm text-gray-600">웹/앱 인터페이스 개발</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">🏷️</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">라벨링 전문가 1명</h4>
      <p class="text-sm text-gray-600">AI 학습 데이터셋 구축 및 정제</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">⚡</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">운영 인력 1명</h4>
      <p class="text-sm text-gray-600">현장 운영 및 사용자 피드백</p>
    </div>
  </div>
</div>

## Our Products

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">SN 생태계를 구성하는 핵심 AI 제품들입니다</h3>
  
  <div class="grid md:grid-cols-2 gap-6">
    <div class="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group">
      <a href="/columns/SNarlink" class="block">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <span class="text-gray-600 text-xl">🔗</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 text-lg">SNarlink</h4>
            <p class="text-sm text-gray-600">초정밀 학습 분석 방화벽 시스템</p>
          </div>
        </div>
        <ul class="text-sm text-gray-600 space-y-2">
          <li>• 온라인 학습 활동을 데이터화하여 집중도 측정</li>
          <li>• 학부모/교사에게 투명한 리포트 제공</li>
          <li>• AI 기반 인터넷 우회 시도와 의도 탐지 가능</li>
        </ul>
      </a>
    </div>

    <div class="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group">
      <a href="/startup/SNargopost_1" class="block">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <span class="text-gray-600 text-xl">🎯</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 text-lg">SNarGO</h4>
            <p class="text-sm text-gray-600">수학문제풀이 AI</p>
          </div>
        </div>
        <ul class="text-sm text-gray-600 space-y-2">
          <li>• 수능 수학문제를 99%+ 확률로 풀이</li>
          <li>• 정확한 개념 설명과 단계별 풀이</li>
          <li>• 오답 분석 및 학습 방향 제시</li>
        </ul>
      </a>
    </div>

    <div class="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group">
      <a href="https://snargpt.ai" target="_blank" rel="noopener noreferrer" class="block">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <span class="text-gray-600 text-xl">🤖</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 text-lg">SNarGPT</h4>
            <p class="text-sm text-gray-600">질문 받아주는 AI</p>
          </div>
        </div>
        <ul class="text-sm text-gray-600 space-y-2">
          <li>• 다양한 학습 관련 질문에 답변</li>
          <li>• 학습자 개인별 맞춤형 조언 제공</li>
          <li>• 24/7 학습 코칭</li>
        </ul>
      </a>
    </div>

    <div class="border border-gray-200 rounded-lg p-6">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          <span class="text-gray-600 text-xl">⚡</span>
        </div>
        <div>
          <h4 class="font-semibold text-gray-800 text-lg">SNarGEN</h4>
          <p class="text-sm text-gray-600">문제 생성 AI</p>
        </div>
      </div>
      <ul class="text-sm text-gray-600 space-y-2">
        <li>• 기존 교육 업체의 1% 비용으로 고퀄 문제 생성</li>
        <li>• 평가원 수준의 문항 자동 생성</li>
        <li>• 난이도별 맞춤 문제 제작</li>
      </ul>
    </div>

    <div class="border border-gray-200 rounded-lg p-6">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          <span class="text-gray-600 text-xl">📱</span>
        </div>
        <div>
          <h4 class="font-semibold text-gray-800 text-lg">SNarOCR</h4>
          <p class="text-sm text-gray-600">시험지 인식 AI</p>
        </div>
      </div>
      <ul class="text-sm text-gray-600 space-y-2">
        <li>• 촬영만 하면 자동 인식·분석하는 시험지 OCR</li>
        <li>• 문제 영역 자동 인식 및 정규화</li>
        <li>• 채점 및 분석 자동화</li>
      </ul>
    </div>
  </div>
</div>

## 주요 성과

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">주요 성과</h3>
  <div class="grid md:grid-cols-3 gap-6">
    <div class="text-center">
      <div class="text-3xl font-bold text-gray-800 mb-2">8명</div>
      <div class="text-gray-600">전문 AI 개발팀</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-gray-800 mb-2">5개</div>
      <div class="text-gray-600">핵심 AI 제품</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-gray-800 mb-2">12년</div>
      <div class="text-gray-600">현장 노하우</div>
    </div>
  </div>
</div>

## 사업 영역

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <div class="grid md:grid-cols-2 gap-8">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">SN독학기숙학원 (양평점)</h3>
        <p class="text-gray-600">기존 교육 서비스 운영, AI 기술 적용 및 검증, 실시간 피드백 수집</p>
      </div>
    </div>
    
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">SN독학재수학원 (대치점 예정)</h3>
        <p class="text-gray-600 mb-2">2026년 1월 오픈 예정, AI 기반 교육 혁신 실현, 프리미엄 교육 서비스 제공</p>
        <p class="text-gray-800 font-medium">🚀 SNarGPT 런칭 (26.1.1)</p>
      </div>
    </div>
  </div>
</div>

## AI 기술 스택

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <div class="grid md:grid-cols-3 gap-8">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-3">자연어 처리 (NLP)</h4>
        <p class="text-gray-600">학습자 질문 이해 및 답변 생성, 학습 내용 자동 요약 및 정리, 대화형 AI 인터페이스</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-3">머신러닝 (ML)</h4>
        <p class="text-gray-600">학습 패턴 분석 및 예측, 개인별 학습 최적화 알고리즘, 성적 향상 예측 모델</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-3">데이터 분석</h4>
        <p class="text-gray-600">학습 진도 및 성과 추적, 학습 효과성 측정 및 개선, 실시간 대시보드 제공</p>
      </div>
    </div>
  </div>
</div>

## 향후 계획

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">향후 계획</h3>
  <div class="space-y-6">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">단기 (2025년)</h4>
        <p class="text-gray-600">AI 기반 학습 관리 시스템 완성, 개인별 학습 계획 자동 생성 기능</p>
      </div>
    </div>
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">중기 (2026년)</h4>
        <p class="text-gray-600">대치점 오픈 및 AI 교육 혁신 실현, 교육 AI 플랫폼 상용화</p>
      </div>
    </div>
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">장기 (2027년+)</h4>
        <p class="text-gray-600">전국 교육 기관 대상 AI 솔루션 제공, 교육 분야 AI 기술 선도 기업으로 성장</p>
      </div>
    </div>
  </div>
</div>

## 혁신 포인트

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <div class="space-y-6">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">교육 현장 중심의 AI 개발</h4>
        <p class="text-gray-600">실제 교육 현장에서 검증된 기술과 교육 전문가와 AI 개발자의 협업</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">개인별 맞춤형 학습</h4>
        <p class="text-gray-600">기존 일괄 교육 방식의 한계를 극복하고 각 학습자의 특성에 맞는 최적화</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">지속적인 학습 효과 측정</h4>
        <p class="text-gray-600">AI를 통한 실시간 학습 진도 추적과 데이터 기반 교육 방법론 개선</p>
      </div>
    </div>
  </div>
</div>

## 파트너십

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <div class="grid grid-cols-1 gap-8">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">기술 파트너</h3>
        <p class="text-gray-600">AI 기술 연구 기관과의 협력, 최신 AI 기술 도입 및 적용, 공동 연구 개발</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">교육 파트너</h3>
        <p class="text-gray-600">교육 전문가 네트워크 구축, 교육 현장 피드백 수집 및 반영, 커리큘럼 공동 개발</p>
      </div>
    </div>
  </div>
</div>

## 문의 및 연락

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">문의 및 연락</h3>
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h4 class="text-lg font-semibold text-gray-800 mb-3">AI 스타트업 문의</h4>
      <ul class="text-gray-600 space-y-2">
        <li>• 이메일: SNACADEMY@naver.com</li>
        <li>• 전화: 031-771-0300</li>
      </ul>
    </div>
    <div>
      <h4 class="text-lg font-semibold text-gray-800 mb-3">입학 문의</h4>
      <ul class="text-gray-600 space-y-2">
        <li>• SN독학기숙학원: https://www.snacademy.co.kr</li>
        <li>• 대치점 오픈 정보: 2026년 1월 예정</li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-gray-50 border-l-4 border-gray-400 p-8 rounded-r-lg text-center">
  <h3 class="text-2xl font-bold text-gray-800 mb-2">SN Academy AI</h3>
  <p class="text-gray-700 text-lg">초개인화 학습 혁신</p>
</div>`,
    category: 'startup',
    tags: ['AI교육', '스타트업', '에듀테크'],
    author: 'SN Academy',
    date: '2025-09-29',
    readTime: '11',
    featured: false,
    published: true,
    thumbnail:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/startup/ai-startup',
  },
  {
    id: 'sn-originals-intro',
    title: 'SN Originals 고전문학 시리즈를 소개합니다',
    excerpt:
      '최재천 선생님의 "알면 사랑한다"는 지혜로 시작하는 SN Originals 고전문학 시리즈. 만화영화처럼 익숙하게, AI 기술과 함께하는 새로운 고전문학 학습법을 소개합니다.',
    content: `알면 사랑한다는 최재천 선생님의 지혜로 시작하는 SN Originals 고전문학 시리즈. AI 기술과 함께하는 새로운 고전문학 학습법을 만나보세요.

![SN Originals 고전문학 시리즈의 시작](/images/originalintro1.png)

## 💭 "알면 사랑한다" - 최재천 선생님의 지혜

이 시대의 석학 최재천 선생님께서 자주 하시는 말씀 중에서, '알면 사랑한다'는 말이 있습니다. 
꽤 직관적으로 이해할 수 있는 말인 저 말은, 무언가에 대해 더 많이 알게 될수록 그것을 더 아끼고 
좋아하게 될 수밖에 없다는 뜻입니다. 그만큼 무엇이든 충분히 알아가는 과정이 필요하다는 뜻이 되기도 하구요.

## 🤔 수능에서 가장 어려운 것, 고전문학

여러분들께서는 수능시험을 준비함에 있어서 '알기 어려운 것'을 꼽아보라면 어떤 것들을 꼽으실 건가요? 
미적분? 유전자 발현과 조절? 맞습니다. 이런 개념들은 단어부터 생소하고, 저 단어에 숨은 뜻을 충분히 
배우고 익히느라 한 달 이상의 시간을 쏟기도 하죠.

고전문학은 어떤가요? 분명 우리 말 같은 글이 써있기는 하는데, 일상 생활에서는 잘 쓰이지도 않는 
한자어에 아래아 등 고어도 섞여있고, 각종 비유가 잔뜩 섞여있지만 그럼에도 열심히 한 번 겨우 읽어서 
'아, 사랑 얘기구나'라고 이해했는데 해설을 읽어보니 임금이니 독립에 대한 염원이니 상징적인 의미를 
담고 있다고 하여, 안 그래도 수면 부족에 시달리는 우리에게는 더할 나위 없는 마취제로 다가오는 것이 고전문학입니다.

## 🎬 만화영화처럼 익숙하게

그렇지만, 그 외계어 같은 고전문학을 마치 우리 어렸을 때 TV에서 보았던 만화영화처럼 전체적인 
이야기의 줄기를 얼추 알고 있다면 어떨까요? 예를 들어 「화왕가」에서는 할미꽃이 충신이라 왕이 중용해야 
할 인재라는 걸 알고 있다거나, 「관동별곡」은 임금의 명을 받은 정철이 한양에서 강원도로, 다시 강원도 
내에서 금강산과 동해를 관찰(이라고 쓰고 유람이라고 읽겠습니다)하는 여정을 담고 있다는 큰 맥락이라도 
파악하고 있고, 혹시라도 그 안에서 정철이 놀라워했던 금강산에 담긴 조물주의 손길, 망양정에서 나눴던 
신선과의 대화 등까지 기억하고 있다면, 여기에 이어서 각종 비유나 대구를 파고들어 공부해야 하는 상황이 
오더라도 거부감이 훨씬 줄어들지 않을까요?

![SN오리지날 고전문학 시리즈 - 북천가 예시](/images/originalintro2.png)

## 🏰 머릿속 성을 쌓는 과정

아쉽게도 공부는 대신 해드릴 수가 없죠. 공부는 여러분들께서 여러분들 머리에 누구도 빼앗을 수 없게 
성을 직접 축조하는 과정과도 같으니까요. 그럼 저희 SN아카데미가 여러분들이 머릿속 성을 쌓는데 있어서 
어떤 도움을 드릴 수 있을까? 하는 것이 고민의 시작점이었습니다.

**핵심 철학**: "우리가 좋아해서 흥미롭게 보았던 콘텐츠는 기억하려 하지 않아도 기억이 날 수밖에 없다"

SN오리지날 고전문학 시리즈는 딱 그 생각에서 시작했습니다. 
여러분들께서 쉽게 고전문학의 내용을 익숙하게 자주 접하고 많이 알고 있을수록, 억지로 공부해야 하더라도 
좋아할 수 있다. 또 그렇게 하기에 세상은 어느새 많이 발전해서, 고전문학을 읽고 이해하는 단계에서부터 
필요하면 이를 그림으로 즐기고 목소리를 듣는 것에 이르기까지 AI가 수많은 도움을 줄 수 있는 시대가 되었습니다.

## 🚀 AI 기술과 함께하는 고전문학

이렇게, 전통적인 방식의 전문 콘텐츠 제작 과정을 거치지 않더라도, 상대적으로 적은 비용과 노력, 
또 매우 중요하게는 짧은 콘텐츠 제작 시간으로 우리의 공부를 다채롭게 만들어줄 수 있는 기술들을 
저희 SN아카데미는 다수 보유하고 있고 계속 개발해 나가고 있습니다.

## 📅 업로드 계획

현재의 계획은 **주2회(화/금) 베이스**로 고전문학 시리즈를 업로드하여 비단 금번 2026 수능만을 
위해서가 아니더라도, 「관동별곡」, 「사미인곡」, 「속미인곡」 등 수능을 준비하는 수험생이라면 필수적으로 
알아야 하는 고전 명문부터 차곡차곡 콘텐츠를 쌓아 나가고자 하고, 향후 SN아카데미에서 출시 준비 중인 
SNarGPT, SNarPortal 등 타 서비스 출시에 따라 SNarGPT를 활용한 공부 방법, SN 단편선 등도 선보이고자 
하는 원대한 계획을 가슴 속에 품고 있습니다.

- 주2회(화/금) 정기 업로드
- 수능 필수 고전 명문 완주
- SNarGPT, SNarPortal 연동 예정
- SN 단편선 등 확장 콘텐츠

## 🎥 YouTube 채널 계획

유튜브에 한정한 계획을 조금 더 구체적으로 밝히자면 유튜브 채널을 막 시작한 지금(2025년 9월말)
기준으로는 롱폼 형태의 동영상만 올라가고 있지만, 조만간 **숏폼**과 모든 영상에 **한/영 자막**이 추가될 예정입니다.

그렇지만 한편으로는 고전문학을 공부하는 것은 시대를 적게 탄다고도 생각하기 때문에, 특별히 당장의 관심만을
얻기 위한 자극적 콘텐츠 제작보다는 시간이 오래 지난 시점에 보더라도 재미있게 볼 수 있는, **잔잔하지만
미소 짓게 되는 콘텐츠**를 만들고자 하는 마음이 있습니다.

**채널 특징**:
- 롱폼 고전문학 해설 (현재 운영 중)
- 숏폼 콘텐츠 추가 예정
- 한글/영어 자막 지원 예정
- 시간이 지나도 가치 있는 콘텐츠 지향

<callout type="info">
**SN 유튜브 채널 바로가기**

[SN독학기숙학원 Originals](https://www.youtube.com/@SN_gisuk_original)
</callout>

## 🏫 SN아카데미의 약속

SN아카데미는 2014년부터 경기도 양평에서 꾸준히 독학기숙학원을 운영하며 여러분들의 수능 준비가 
수월할 수 있도록 일 24시간, 주 7일 내내 고민하고 있습니다. 시대의 트렌드를 따라가는 것도 중요하지만, 
시대가 빠르게 변하더라도 수험생 여러분들이 원칙에 기반하여 급하지 않은 마음으로 차분하게 공부에만 
전념할 수 있는 환경을 제공하는데 최선의 가치를 두고 정진하도록 하겠습니다.

수험생 여러분들뿐만 아니라 학부모님, 일반 시청자분들 등 다양한 관련자분들께서 많은 관심 보여주시고 
문의와 피드백 등으로 참여해 주신다면 저희 SN아카데미가 성실함으로 보답하도록 하겠습니다.

## 🙏 마무리

모든 수험생 여러분의 건승을 바라며, 또 다른 재미있는 읽을거리를 들고 찾아뵙겠습니다. 감사합니다.`,
    category: 'SN Originals',
    tags: [],
    author: 'SI KIM',
    date: '2025-10-02',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/originals/sn-originals-intro',
  },
  {
    id: 'sokmieungok',
    title:
      '조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~"\n(고전문학 「속미인곡」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다.
「속미인곡」은 1588~1589년 경 정철이 고향인 전남 창평에 우거하며 「사미인곡」에 이어 지은 가사입니다.

「사미인곡」과 마찬가지로 연군의 정을 임을 이별한 여인의 애달픈 심정에 비하여 표현한 작품으로,
갑녀와 을녀의 대화 형식으로 이야기를 풀어내어 자신(을녀)의 사연과 사모의 정을 구슬프게 표현한 특별한 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「속미인곡」- 사랑의 절정과 문학의 완성

### 💔 사랑의 절정을 담은 문학

「속미인곡」은 정철이 1588~1589년 경 고향인 전남 창평에서 「사미인곡」에 이어 지은 가사입니다. 이 작품은 단순한 정치적 충성을 넘어서, 진정한 사랑의 절정과 그리움의 깊이를 보여주는 조선 가사 문학의 최고봉입니다.

### 🎭 문학적 완성도

- **감정의 절정**: "기다리는 나를 왜 모르시나요"라는 절절한 호소<br>
- **정치적 배경**: 정철의 정치적 좌절과 고향으로의 귀향<br>
- **문학적 완성도**: 조선 가사 문학의 백미로 평가받는 작품<br>
- **감정의 깊이**: 단순한 충성심을 넘어선 진정한 사랑의 표현

### 🌍 세계 문학사적 의의

이 작품은 동아시아 정치시의 전통을 계승하면서도, 조선만의 독특한 정치적 상황을 반영합니다. 정치적 충성을 진정한 사랑으로 승화시키는 방식은 세계 정치 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해

1. **사랑의 문학적 표현**: 정치적 충성을 사랑으로 승화시키는 방법<br>
2. **시대적 배경**: 임진왜란 이후의 복잡한 정치적 상황<br>
3. **작가의 심경**: 정치적 좌절과 고향에 대한 그리움<br>
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
    category: 'SN Originals',
    tags: ['고전문학', '속미인곡', '정철', '가사문학'],
    author: 'SI KIM',
    date: '2025-10-01',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/sokmieungok_thumbnail.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/sokmieungok',
  },
  {
    id: 'samieungok',
    title: '선조를 향한 정철의 중독된 사랑\n(고전문학 「사미인곡」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다.
「사미인곡」은 1588년(선조 21) 정철이 고향인 전남 창평에 우거하며 지은 가사입니다.

임금과 이별한 본인이 처지를 남편과 이별한 한 여인의 상황으로 그려내면서,
계절의 변화에 따라 매화, 옷, 달, 별, 눈 등 다양한 비유와 대구 등을 사용하여 감각적으로 그려낸 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「사미인곡」- 정치적 사랑의 문학적 승화

### 💕 사랑과 충성의 문학적 표현

「사미인곡」은 정철이 선조에 대한 충성과 사랑을 미인에 비유하여 표현한 문학적 걸작입니다. 이 작품은 단순한 정치적 충성을 넘어서, 복잡한 인간의 감정을 아름다운 문학적 비유로 승화시킨 조선 가사 문학의 대표작입니다.

### 🎭 문학적 완성도

- **정교한 비유 기법**: 미인에 비유한 독창적이고 정교한 표현<br>
- **감정의 깊이**: 정치적 좌절과 그리움의 복합적 감정 표현<br>
- **시대적 의미**: 임진왜란 이후의 복잡한 정치적 상황 반영<br>
- **문학적 가치**: 조선 가사 문학의 발전과 완성

### 🌍 세계 문학사적 의의

이 작품은 동아시아 정치시의 전통을 계승하면서도, 조선만의 독특한 정치적 상황을 반영합니다. 정치적 충성을 문학적으로 승화시키는 방식은 세계 정치 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해

1. **비유와 상징**: 미인 비유의 의미와 문학적 효과<br>
2. **시대적 배경**: 임진왜란과 정유재란의 정치적 영향<br>
3. **작가의 심경**: 정치적 좌절과 충성심의 복잡한 갈등<br>
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
    category: 'SN Originals',
    tags: ['고전문학', '사미인곡', '정철', '가사문학'],
    author: 'SI KIM',
    date: '2025-09-30',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/22_thumbnail2.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=50nJegN2YSQ',
    url: '/originals/samieungok',
  },
  {
    id: 'gapminga',
    title:
      '내 속도 모르면서 가라 마라 막말하지 마라\n(수능 고전문학 「갑민가」)',
    excerpt:
      '조선 후기 백성의 아픔과 저항을 담은 「갑민가」로 진정한 민중 문학을 만나보세요.',
    badge: '2025 수능출제',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 4탄으로 「갑민가」를 준비했습니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「갑민가」- 민중의 절규와 저항

### 💔 시대의 아픔을 담은 문학

「갑민가」는 조선 후기 백성들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.

### 🎭 문학적 가치와 의미

- **민중의 진실한 목소리**: 지배층이 아닌 백성의 시각에서 바라본 사회<br>
- **날카로운 사회 비판**: 당시 사회의 모순을 직설적으로 폭로<br>
- **문학사적 의의**: 조선 후기 민중 문학의 대표작<br>
- **감정적 공감**: 현대 독자들도 공감할 수 있는 보편적 메시지

### 🌍 세계 문학사적 관점

이 작품은 동아시아 민중 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 민중의 고통과 저항을 문학적으로 승화시킨 방식은 세계 민중 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 문학적 이해

1. **민중 문학의 전통**: 동아시아 민중 문학의 흐름과 특징<br>
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등<br>
3. **문학과 사회**: 문학이 사회 변화에 미치는 영향<br>
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움

「갑민가」를 읽는 것은 과거의 아픔을 되새기는 것만이 아닙니다. 이 작품은 우리에게 문학이 가진 사회적 힘과 민중의 목소리가 얼마나 소중한지를 일깨워줍니다. 진정한 문학은 아름다움만이 아니라, 진실과 정의를 추구하는 힘을 가지고 있다는 것을 보여줍니다.

---

## English Description

### "Gapmin-ga" - The Cry of the People: A Masterpiece of K-Classic Literature

**Gapmin-ga** (갑민가) stands as one of the most powerful works in Korean classical literature, representing the authentic voice of the oppressed during the late Joseon Dynasty (1392-1910). This masterpiece transcends mere literary expression to become a profound social document that exposes the contradictions and corruption of the ruling class while giving voice to the voiceless masses.

**Literary and Social Significance:**
- **Authentic Voice**: Represents the perspective of the common people, not the ruling elite
- **Sharp Social Criticism**: Directly exposes the social contradictions of the time
- **Literary Historical Value**: A masterpiece of late Joseon popular literature
- **Emotional Resonance**: Contains universal messages that modern readers can relate to

**K-Classic Literature Context:**
This work represents the pinnacle of Korean classical literature's engagement with social issues. Unlike court literature that often idealized the ruling class, "Gapmin-ga" provides an unfiltered view of the common people's suffering and resistance. It demonstrates how Korean literature has historically served as a vehicle for social critique and human dignity.

**Global Literary Context:**
This work inherits the East Asian tradition of popular literature while reflecting the unique social conditions of Joseon Korea. The way it transforms the suffering and resistance of the people into literary expression represents a valuable contribution to world literature, demonstrating the power of literature to give voice to the voiceless and challenge social injustice.

**Contemporary Relevance:**
"Gapmin-ga" reminds us that true literature has the power not only to create beauty but also to pursue truth and justice. It shows how literature can serve as a medium for social change and the expression of human dignity, making it relevant for contemporary readers interested in social justice and human rights.

**For International Readers:**
This work is particularly valuable for those studying Korean culture and literature, as it provides insight into the historical struggles of the Korean people and the role of literature in Korean society. It demonstrates how Korean classical literature addresses universal themes of oppression, resistance, and human dignity that resonate across cultures and time periods.`,
    category: 'SN Originals',
    tags: ['고전문학', '갑민가', '민중문학', '사회비판'],
    author: 'SI KIM',
    date: '2025-09-22',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/GABMINGA_2_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=3ZGE-RvBinQ',
    url: '/originals/gapminga',
  },
  {
    id: 'hwangokga',
    title: '너 그렇게 여자만 좋아하다 피똥싼다\n(수능 고전문학 「화왕가」)',
    excerpt:
      '조선 후기 풍자 문학의 백미 「화왕가」로 문학의 유머와 비판정신을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 2탄으로 「화왕가」를 준비했습니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「화왕가」- 풍자 문학의 진수

### 😂 유머로 승화된 사회 비판

「화왕가」는 조선 후기 사회의 모순과 인간의 욕망을 풍자적으로 표현한 문학적 걸작입니다. 이 작품은 단순한 비판을 넘어서, 유머와 해학을 통해 사회의 부조리를 날카롭게 지적하는 문학의 힘을 보여줍니다.

### 🎭 문학적 완성도

- **정교한 풍자 기법**: 사회 모순을 유머러스하게 비판하는 문학적 기교<br>
- **현실적 통찰력**: 인간의 욕망과 사회적 모순을 정확히 포착<br>
- **문학적 완성도**: 조선 후기 풍자 문학의 최고 수준<br>
- **시대를 초월한 메시지**: 오늘날에도 유효한 보편적 가치

### 🌍 세계 문학사적 의의

이 작품은 동아시아 풍자 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 유머와 해학을 통한 사회 비판의 방식은 세계 풍자 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해

1. **풍자 문학의 전통**: 동아시아 풍자 문학의 흐름과 특징<br>
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등<br>
3. **문학적 기법**: 풍자와 해학의 효과적 활용<br>
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
    category: 'SN Originals',
    tags: ['고전문학', '화왕가', '풍자문학', '사회비판'],
    author: 'SI KIM',
    date: '2025-09-26',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/hwawangga_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=6tsl5IIMy_o',
    url: '/originals/hwangokga',
  },
  {
    id: 'bukcheonga',
    title: '좋긴 한데 유배 생활 이래도 됨?\n고전문학 「북천가」',
    excerpt:
      '조선 후기 민중의 아픔과 저항을 담은 「북천가」로 진정한 문학의 힘을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 3탄으로 「북천가」를 준비했습니다.

북천가는 이번 수능에 출제될 확률이 높은 작품인데요.
이동하실 때, 머리를 잠시 식히실 때 보시면 도움이 되실 겁니다!

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「북천가」- 민중 문학의 진수

### 💔 시대의 아픔을 담은 문학

「북천가」는 조선 후기 북한 지역 민중들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.

### 🎭 문학적 가치와 의미

- **민중의 진실한 목소리**: 지배층이 아닌 민중의 시각에서 바라본 사회<br>
- **날카로운 사회 비판**: 당시 사회의 모순을 직설적으로 폭로<br>
- **지역적 특수성**: 북한 지역의 고유한 상황과 고통을 생생하게 표현<br>
- **문학사적 의의**: 조선 후기 민중 문학의 대표작

### 🌍 세계 문학사적 관점

이 작품은 동아시아 민중 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 민중의 고통과 저항을 문학적으로 승화시킨 방식은 세계 민중 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 문학적 이해

1. **민중 문학의 전통**: 동아시아 민중 문학의 흐름과 특징<br>
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등<br>
3. **문학과 사회**: 문학이 사회 변화에 미치는 영향<br>
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
    category: 'SN Originals',
    tags: ['고전문학', '북천가', '민중문학', '사회비판'],
    author: 'SI KIM',
    date: '2025-09-24',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/bukcheonga_thumbnail_02.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=xhyppBm3_o4',
    url: '/originals/bukcheonga',
  },
  {
    id: 'gwandong-byeolgok',
    title: '정철의 강원도 브이로그\n(고전문학 「관동별곡」)',
    excerpt:
      '정철의 대표작 「관동별곡」으로 조선 가사 문학의 아름다움을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 4탄으로 「관동별곡」을 준비했습니다.

[타임스탬프]
00:00 인트로, 작품 배경
00:52 서사 - 죽림
01:06 서사 - 연추문, 이동(평구~치악산)
01:24 서사 - 소양강
01:38 서사 - 철원, 태봉국 궁궐터
01:56 서사 - 회양
02:08 본사1(금강산) - 회양
02:23 본사1(금강산) - 만폭동
02:38 본사1(금강산) - 금강대
02:55 본사1(금강산) - 진헐대
03:44 본사1(금강산) - 개심대
04:04 본사1(금강산) - 비로봉
04:43 본사1(금강산) - 화룡소
05:08 본사1(금강산) - 불정대
05:40 본사2(동해) - 산영루
06:18 본사2(동해) - 총석정
06:35 본사2(동해) - 삼일포
06:59 본사2(동해) - 의상대
07:42 본사2(동해) - 경포대
08:20 본사2(동해) - 강릉
08:40 본사2(동해) - 죽서루
09:07 본사2(동해)/결사 - 망양정

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「관동별곡」- 조선 가사 문학의 백미

### 🌄 작품의 진정한 아름다움

「관동별곡」은 단순한 풍경 묘사를 넘어서, 정철이 관동 지역(강원도)의 자연을 통해 인간의 내면세계를 표현한 문학적 걸작입니다. 이 작품은 조선 가사 문학의 최고봉으로 평가받으며, 자연과 인간의 조화를 통해 문학의 본질을 보여줍니다.

### 🎨 문학적 완성도

- **시각적 묘사**: 관동의 산천을 생생하게 그려내는 회화적 표현<br>
- **음악적 리듬**: 가사의 운율과 리듬이 자연의 흐름과 일치<br>
- **감정의 깊이**: 단순한 감탄을 넘어선 철학적 사유<br>
- **상징적 의미**: 자연을 통한 인간 존재의 의미 탐구

### 🌍 세계 문학사적 의의

이 작품은 동아시아 자연시의 전통을 계승하면서도, 조선만의 독특한 문학적 성취를 보여줍니다. 자연에 대한 사랑과 경외심, 그리고 인간의 감정을 자연과 조화롭게 표현하는 방식은 세계 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 이해

1. **자연과 문학**: 자연을 통한 문학적 표현의 전통<br>
2. **조선 문학의 특성**: 중국 문학과 구별되는 조선 문학의 독창성<br>
3. **가사 문학의 발전**: 조선 가사 문학의 완성도<br>
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
    category: 'SN Originals',
    tags: ['고전문학', '관동별곡', '정철', '가사문학'],
    author: 'SI KIM',
    date: '2025-09-28',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/gwandongbealgok_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=9T06DoJaMHs',
    url: '/originals/gwandong-byeolgok',
  },
  {
    id: 'sunsangtan',
    title:
      '45세면 지금은 한창인데 자꾸 자기가 노장이라고 하네...\n(고전문학 「선상탄」)',
    excerpt:
      '박인로의 「선상탄」으로 배 위에서의 탄식과 나라 걱정, 무관의 절개를 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈. 제7탄으로 박인로의 「선상탄」을 준비했습니다.

'배 위에서 하는 탄식'이라는 의미의 「선상탄」은 1605년(선조 38) 무관 박인로가 부산 진동영에 통주사로서 머무를 때 배 위에서 지은 가사입니다.

대마도를 바라보며 왜적과 마주한 상황에서, 배의 유래와 왜적의 유래, 배의 쓸모 등에 대한 다양한 설화가 등장하고 나라에 대한 걱정과 무관으로서의 절개 또한 드러내는 재미있는 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「선상탄」- 배 위에서 부르는 나라 걱정

### 🌊 작품의 배경과 의미

「선상탄」은 단순한 탄식이 아닙니다. 45세의 무관 박인로가 배 위에서 대마도를 바라보며 느낀 나라에 대한 걱정과 충정을 담은 애국적 가사 문학입니다. 임진왜란의 상처가 채 아물지 않은 시기, 해안 방어의 최전선에서 지은 이 작품은 무관의 시선으로 본 시대상을 생생하게 전달합니다.

### 🎨 문학적 특징

- **다양한 설화**: 배의 유래, 왜적의 유래, 배의 쓸모에 대한 흥미로운 이야기<br>
- **역사적 배경**: 임진왜란 이후 긴장감 넘치는 시대상 반영<br>
- **충정의 표현**: 나라를 걱정하는 무관의 진솔한 마음<br>
- **서사적 구성**: 설화와 감정이 어우러진 독특한 전개

### 🌍 문학사적 의의

이 작품은 무관 출신 작가가 남긴 귀한 가사 문학으로, 당대 사대부 문학과는 다른 실용적이고 직설적인 표현이 특징입니다. 문학이 단순히 풍류를 즐기는 것이 아니라, 나라의 안위를 걱정하고 백성을 생각하는 도구가 될 수 있음을 보여줍니다.

### 📚 작품 감상 포인트

1. **45세 노장?**: 작가가 자신을 노장이라 칭하는 겸손함과 시대적 배경<br>
2. **배의 의미**: 단순한 교통수단을 넘어선 방어와 생존의 상징<br>
3. **왜적에 대한 경계**: 임진왜란의 트라우마와 경각심<br>
4. **무관의 절개**: 나이 들어도 나라를 지키겠다는 충성심

### 🎭 현대적 의미

「선상탄」을 읽는 것은 과거 무관의 마음을 이해하는 것을 넘어, 자신의 위치에서 나라와 사회를 걱정하는 태도가 무엇인지 생각해보는 기회입니다. 45세를 노장이라 부르던 시대, 그럼에도 끝까지 나라를 지키려는 한 무관의 진심 어린 탄식이 오늘날 우리에게 전하는 메시지를 느껴보세요.

---

## English Description

### "Seonsan-tan" - A Warrior's Lament on the Sea

**Seonsan-tan** (선상탄) is a classical Korean gasa (가사) poem written in 1605 by military officer Park In-ro (박인로) while stationed at Jindong Naval Command in Busan. The title means "Lament on a Ship," and the work reflects the author's deep concerns for the nation while stationed at the coastal defense line, facing Tsushima Island and the Japanese threat.

**Literary Significance:**
- **Unique Perspective**: Written by a military officer, offering a practical and direct voice unlike typical scholarly literature
- **Historical Context**: Reflects the tense atmosphere following the Imjin War (Japanese invasions of 1592-1598)
- **Narrative Elements**: Incorporates various tales about ships, Japanese invaders, and maritime history
- **Patriotic Spirit**: Expresses unwavering loyalty and concern for the nation

**Cultural Value:**
This work demonstrates that literature can serve not merely as entertainment but as a medium for expressing patriotic duty and social responsibility. Park In-ro's perspective as a 45-year-old warrior (whom he calls an "old soldier") provides valuable insights into the mindset of those who defended the nation during turbulent times.

**Contemporary Relevance:**
"Seonsan-tan" reminds us of the importance of dedication to one's duty and concern for society, regardless of age or position. The warrior's heartfelt lament continues to resonate with modern readers who seek to understand the value of loyalty and service.`,
    category: 'SN Originals',
    tags: ['고전문학', '선상탄', '박인로', '가사문학', '수능국어'],
    author: 'SI KIM',
    date: '2025-10-07',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/sunsangtan_thumbnail.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=9ogmj2rSwLY',
    url: '/originals/sunsangtan',
  },
  {
    id: 'yongbuga',
    title: '조선 부녀자 악행 모음집 (고전문학 「용부가」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈. 여덟 번째 작품으로 조선시대 후기 작자 미상의 가사인 「용부가」를 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈. 여덟 번째 작품으로 조선시대 후기 작자 미상의 가사인 「용부가」를 준비했습니다.

'마음이 변변치 못하고 졸렬하다'는 의미의 '용렬(庸劣)하다'라는 말이 있는데요, 용부가는 용렬스러운 아녀자, 즉 '용부(庸婦)'의 행실을 다룬 가사입니다. 당시 유교적 가치관에 입각하여 부녀자의 악행을 나열하고 비판함으로써 유교적 질서와 규범이 준수되고 회복될 수 있도록 교훈하고 있는 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「용부가」- 조선시대 부녀자 악행 모음집

### 🏛️ 작품의 배경과 의미

「용부가」는 조선시대 후기 작자 미상의 가사로, '용렬한 부녀자'의 행실을 다룬 교훈적 작품입니다. 당시 유교적 가치관에 입각하여 부녀자의 악행을 나열하고 비판함으로써 유교적 질서와 규범이 준수되고 회복될 수 있도록 교훈하고 있습니다.

### 🎭 문학적 특징

- **교훈적 성격**: 유교적 가치관에 따른 부녀자 교육서 역할<br>
- **비판적 시각**: 당시 사회의 부녀자 문제점을 직설적으로 지적<br>
- **열거적 구성**: 다양한 악행 사례를 체계적으로 나열<br>
- **사회적 목적**: 유교적 질서 회복을 위한 교화 의도

### 🌍 문학사적 의의

이 작품은 조선시대 후기 가사 문학의 한 특징을 보여주는 작품으로, 단순한 개인적 감정 표현을 넘어서 사회적 교화 목적을 가진 실용적 문학의 성격을 띱니다. 당시 유교 사회에서 부녀자의 역할과 행실에 대한 기대와 우려를 생생하게 반영하고 있습니다.

### 📚 작품 감상 포인트

1. **용부의 정의**: '용렬한 부녀자'가 의미하는 바와 당시 사회적 맥락<br>
2. **악행의 유형**: 나열된 부녀자들의 구체적인 악행 사례들<br>
3. **교훈적 메시지**: 유교적 가치관에 입각한 올바른 부녀자상 제시<br>
4. **사회적 비판**: 당시 사회의 부녀자 문제에 대한 인식과 대응

### 🎨 현대적 의미

「용부가」를 읽는 것은 과거 유교 사회의 가치관을 이해하는 것을 넘어, 당시 사회가 부녀자에게 기대했던 역할과 행실이 무엇이었는지, 그리고 그런 기대가 어떤 사회적 맥락에서 나온 것인지 생각해보는 기회입니다. 물론 현대적 관점에서는 성차별적 요소가 있지만, 역사적 문헌으로서 당시 사회상을 이해하는 데 중요한 자료가 됩니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 교훈적 가사, 사회적 목적의 문학<br>
- **구성 방식**: 열거적 구성, 비판적 서술<br>
- **주제 의식**: 유교적 질서 회복, 사회 교화<br>
- **시대적 배경**: 조선 후기 유교 사회의 가치관

---

## English Description

### "Yongbuga" - A Collection of Women's Misdeeds in Joseon Dynasty

**Yongbuga** (용부가) is a classical Korean gasa (가사) poem from the late Joseon Dynasty, written by an unknown author. The title means "Song of the Vulgar Woman," and the work serves as a didactic piece that lists and criticizes various misdeeds of women from a Confucian perspective.

**Literary Significance:**
- **Didactic Nature**: Functions as an educational text for women's conduct according to Confucian values
- **Critical Perspective**: Directly points out social problems related to women's behavior
- **Enumerative Structure**: Systematically lists various examples of misconduct
- **Social Purpose**: Aims to restore Confucian order through moral instruction

**Cultural Context:**
This work reflects the Confucian society's expectations and concerns about women's roles and conduct during the late Joseon period. It represents a shift from purely personal emotional expression to practical literature with social educational purposes.

**Contemporary Relevance:**
While "Yongbuga" contains elements that would be considered sexist by modern standards, it serves as an important historical document for understanding the social values and gender expectations of the Joseon Dynasty. It provides insight into how the society of that time viewed women's roles and the mechanisms used to maintain social order.

**Educational Value:**
For students preparing for the Korean SAT, this work is significant for understanding:
- The didactic nature of late Joseon literature
- Confucian social values and their literary expression
- The relationship between literature and social education
- Historical perspectives on gender roles in Korean society`,
    category: 'SN Originals',
    tags: ['고전문학', '용부가', '가사문학', '수능국어', '교훈문학'],
    author: 'SI KIM',
    date: '2025-10-08',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_work_v2_F.png',
    youtubeUrl: 'https://www.youtube.com/embed/kEWPbC_-ehc',
    url: '/originals/yongbuga',
  },
  {
    id: 'chulsaegok',
    title:
      '나 경성 발령났어. 어디, 서울 경성? 아니 함경북도 경성.\n(고전문학 「출새곡」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 그 아홉 번째 시간. 오늘은 조선시대 후기 조우인이 지은 가사인 「출새곡」 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 그 아홉 번째 시간. 오늘은 조선시대 후기 조우인이 지은 가사인 「출새곡」 준비했습니다.

'출새곡(出塞曲)'은 '변방으로 나아가는 노래'라는 뜻으로, 왕명을 받아 평화로운 조정이 아닌 변방으로 부임하게 된 상황에서 느끼는 화자(조우인)의 심정을 담은 노래입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「출새곡」- 나 경성 발령났어. 어디, 서울 경성? 아니 함경북도 경성.

### 🏰 작품의 배경과 의미

「출새곡」은 조선시대 후기 조우인(曺友仁)이 지은 기행가사로, '변방으로 나아가는 노래'라는 뜻입니다. 1616년(광해군 8) 가을, 56세의 나이에 함경도 경성판관으로 부임하면서 서울에서 경성까지의 여정과 변방 생활에서 느낀 복잡한 심정을 솔직하게 담아낸 작품입니다.

### 🎭 문학적 특징

- **기행가사**: 서울에서 함경도 경성까지 2,000여 리의 여정을 생생하게 묘사<br>
- **개인적 감정 표현**: 문신 개인의 진솔한 내면을 드러냄<br>
- **현실적 묘사**: 변방 생활의 어려움과 고충을 구체적으로 서술<br>
- **충정과 갈등**: 충성심과 개인적 어려움 사이의 내적 갈등<br>
- **서사적 구성**: 시간의 흐름에 따른 감정 변화를 보여줌

### 🌍 문학사적 의의

이 작품은 조선시대 문신이 지방관으로 부임하며 겪은 경험을 담은 귀한 자료로, 당시 변방 근무의 실상과 문신들의 생활상을 생생하게 전해줍니다. 단순한 충정 표현을 넘어서 인간적인 고뇌와 현실적 어려움을 솔직하게 드러낸 점에서 문학사적 가치가 높습니다. 조우인은 시·서예·음악에 뛰어나 삼절(三絶)이라는 평을 받은 문인으로, 그의 문학적 역량이 잘 드러난 작품입니다.

### 📚 작품 감상 포인트

1. **출새의 의미**: '변방으로 나감'이 담고 있는 시대적 무게감<br>
2. **문신의 현실**: 서울과 험난한 변방 사이의 대비<br>
3. **내적 갈등**: 충성심과 개인적 고충 사이의 복잡한 감정<br>
4. **시대적 배경**: 조선 후기 국방 체제와 지방관의 역할

### 🎨 현대적 의미

「출새곡」을 읽는 것은 과거 문신의 마음을 이해하는 것을 넘어, 자신의 위치에서 맡은 바 임무를 다하면서도 느끼는 인간적 고뇌가 무엇인지 생각해보는 기회입니다. 공적 의무와 사적 감정 사이에서 균형을 잡으려는 한 사람의 진솔한 마음이 오늘날 우리에게도 깊은 공감을 불러일으킵니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 기행가사, 개인적 감정 표현<br>
- **주요 갈등**: 충성심과 개인적 어려움의 대립<br>
- **표현 기법**: 대조법, 점층법, 영탄법<br>
- **시대적 의미**: 조선 후기 변방 근무의 현실

---

## English Description

### "Chulsaegok" - A Scholar-Official's Heart Heading to the Frontier

**Chulsaegok** (출새곡) is a classical Korean gasa (가사) travel narrative poem written by Jo U-in (曺友仁) during the late Joseon Dynasty. The title means "Song of Heading to the Frontier," and the work honestly captures the complex emotions of a civil official who must leave Seoul to serve as a magistrate at a remote frontier post in Gyeongsong, Hamgyong Province, by royal command in 1616.

**Literary Significance:**
- **Travel Narrative**: Vividly describes the journey of over 2,000 li from Seoul to Gyeongsong
- **Personal Expression**: Reveals the honest inner feelings of an individual scholar-official
- **Realistic Description**: Specifically describes the difficulties and hardships of frontier life
- **Loyalty and Conflict**: Shows the internal struggle between loyalty and personal difficulties
- **Narrative Structure**: Demonstrates emotional changes over time

**Cultural Value:**
This work serves as valuable material for understanding the experiences of Joseon Dynasty civil officials serving in remote posts, vividly conveying the realities of frontier service and the lives of scholar-officials of that time. It has high literary historical value for honestly revealing human anguish and realistic difficulties beyond simple expressions of loyalty. Jo U-in was renowned for his excellence in poetry, calligraphy, and music, earning him the title of "Three Perfections" (삼절), and this work showcases his literary prowess.

**Contemporary Relevance:**
Reading "Chulsaegok" offers an opportunity to understand not only the hearts of past scholar-officials but also to reflect on the human struggles we face when fulfilling our duties while dealing with personal hardships. The honest heart of one person trying to balance public duty and private emotions deeply resonates with us today.`,
    category: 'SN Originals',
    tags: ['고전문학', '출새곡', '조우인', '기행가사', '수능국어'],
    author: 'SI KIM',
    date: '2025-10-14',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_F.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=ThaMhDbZuNc',
    url: '/originals/chulsaegok',
  },
  {
    id: 'mongcheonyo',
    title:
      '이럴거면 잘 쉬고 있던 사람 복직은 뭣하러 시키셨어요 (고전문학 「몽천요」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 어느새 그 열 번째 시간. 오늘은 조선시대 후기(1652년, 효종 3년)에 제작된 윤선도의 연시조 「몽천요」를 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 어느새 그 열 번째 시간. 오늘은 조선시대 후기(1652년, 효종 3년)에 제작된 윤선도의 연시조 「몽천요」를 준비했습니다.

「몽천요」(夢天謠)는 '꿈속에서 본 하늘을 노래한다'는 뜻으로, 정계를 은퇴했던 윤선도가 17년만에 왕명을 받아 부름을 받았을 때 신하들로터 받은 시기와 헐뜯음에서 비롯된 허탈한 심정을 담은 노래입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「몽천요」- 이럴거면 잘 쉬고 있던 사람 복직은 뭣하러 시키셨어요

### 🏰 작품의 배경과 의미

「몽천요」는 조선시대 후기 윤선도(尹善道, 1587-1671)가 지은 연시조로, '꿈속에서 본 하늘을 노래한다'는 뜻입니다. 1652년(효종 3년) 66세의 나이에 17년간의 은퇴 생활을 끝내고 왕명을 받아 복직했을 때, 조정의 신하들로부터 받은 시기와 헐뜯음에 대한 허탈한 심정을 담은 작품입니다.

### 🎭 문학적 특징

- **연시조**: 3연으로 구성된 시조의 연작 형태<br>
- **개인적 감정 표현**: 문신 개인의 진솔한 내면을 드러냄<br>
- **현실적 묘사**: 조정의 시기와 헐뜯음에 대한 구체적 서술<br>
- **허탈과 좌절**: 복직에 대한 기대와 현실의 괴리감<br>
- **꿈의 상징**: 꿈속 하늘을 통한 이상과 현실의 대비

### 🌍 문학사적 의의

이 작품은 조선시대 문신이 정치적 복귀 과정에서 겪은 경험을 담은 귀한 자료로, 당시 조정의 권력 구조와 문신들의 현실적 어려움을 생생하게 전해줍니다. 단순한 충정 표현을 넘어서 인간적인 고뇌와 정치적 현실을 솔직하게 드러낸 점에서 문학사적 가치가 높습니다. 윤선도는 시조문학의 대가로, 그의 문학적 역량이 잘 드러난 작품입니다.

### 📚 작품 감상 포인트

1. **몽천의 의미**: '꿈속 하늘'이 담고 있는 이상과 현실의 대비<br>
2. **복직의 현실**: 은퇴와 복직 사이의 괴리감<br>
3. **내적 갈등**: 충성심과 개인적 좌절 사이의 복잡한 감정<br>
4. **시대적 배경**: 조선 후기 정치적 상황과 문신의 역할

### 🎨 현대적 의미

「몽천요」를 읽는 것은 과거 문신의 마음을 이해하는 것을 넘어, 자신의 위치에서 맡은 바 임무를 다하면서도 느끼는 인간적 고뇌가 무엇인지 생각해보는 기회입니다. 공적 의무와 사적 감정 사이에서 균형을 잡으려는 한 사람의 진솔한 마음이 오늘날 우리에게도 깊은 공감을 불러일으킵니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 연시조, 개인적 감정 표현<br>
- **주요 갈등**: 이상과 현실의 대립<br>
- **표현 기법**: 상징법, 대조법, 영탄법<br>
- **시대적 의미**: 조선 후기 정치적 상황과 문신의 역할

---

## English Description

### "Mongcheonyo" - A Retired Scholar-Official's Frustration with Reinstatement

**Mongcheonyo** (몽천요) is a classical Korean yeonsijo (연시조) poem written by Yun Seon-do (尹善道, 1587-1671) during the late Joseon Dynasty. The title means "Song of Dreaming of Heaven," and the work honestly captures the frustrated emotions of a civil official who, after 17 years of retirement, was called back to service by royal command in 1652 at the age of 66, only to face jealousy and criticism from other court officials.

**Literary Significance:**
- **Yeonsijo**: A series of three sijo poems forming a connected narrative<br>
- **Personal Expression**: Reveals the honest inner feelings of an individual scholar-official<br>
- **Realistic Description**: Specifically describes the difficulties and hardships of political life<br>
- **Frustration and Disappointment**: Shows the gap between expectations and reality of reinstatement<br>
- **Dream Symbolism**: Uses the symbolism of dreaming of heaven to contrast ideals with reality

**Cultural Value:**
This work serves as valuable material for understanding the experiences of Joseon Dynasty civil officials in the political arena, vividly conveying the realities of court politics and the lives of scholar-officials of that time. It has high literary historical value for honestly revealing human anguish and political realities beyond simple expressions of loyalty. Yun Seon-do was a master of sijo literature, and this work showcases his literary prowess.

**Contemporary Relevance:**
Reading "Mongcheonyo" offers an opportunity to understand not only the hearts of past scholar-officials but also to reflect on the human struggles we face when fulfilling our duties while dealing with personal hardships. The honest heart of one person trying to balance public duty and private emotions deeply resonates with us today.`,
    category: 'SN Originals',
    tags: ['고전문학', '몽천요', '윤선도', '연시조', '수능국어'],
    author: 'SI KIM',
    date: '2025-10-19',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_F_mongcheonyo.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=HmzoVsJUBFE',
    url: '/originals/mongcheonyo',
  },
  {
    id: 'dokrakdang',
    title: '산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)',
    excerpt:
      '박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문 공간을 만나보세요. 1619년 박인로가 59세의 나이에 지은 가사로, 홀로 누리는 즐거움과 학문의 진수를 담은 작품입니다.',
    content: `안녕하세요, SN독학기숙학원입니다 😊

보기만 해도 국어 감각이 살아나는 고전문학 시리즈 제11탄,
오늘 소개할 작품은 조선 중기에서 후기로 넘어가던 1619년에 박인로가 지은 가사 「독락당(獨樂堂)」입니다.

'독락당'은 조선 성리학의 정통을 세운 회재 이언적 선생이 학문을 닦고 거처했던 공간으로,
그 품격과 고요함 속에서 선비가 추구하던 **'홀로 누리는 즐거움, 학문 그 자체'**가 고스란히 담겨 있습니다.
후대에는 그 학덕을 기리기 위해 건너편에 옥산서원이 세워졌고, 지금도 수많은 방문객이 찾는 학문의 성소로 남아 있습니다.

박인로는 59세의 나이에 독락당 주변을 거닐며 회재의 발자취를 체험하고,
선배 지성인에 대한 깊은 존경과 사모의 마음을 가사 문학의 정갈한 언어로 풀어내었습니다.
이 작품은 단순한 감상문이 아니라, 학문과 인격이 어떻게 삶으로 이어지는지 보여주는 기록이기도 합니다.`,
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
    thumbnail: '/images/thumbnail/DokRakDang_thumbnail_F_v3.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=NlLizA-5u1M',
    url: '/originals/dokrakdang',
    type: 'special',
  },
  {
    id: 'oryun-ga',
    title: '내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)',
    excerpt:
      '박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지 인간관계를 만나보세요. 1612년 광해군 시대에 지어진 교훈 가사로, 사회 혼란 속에서도 지켜야 할 삶의 기준을 담은 작품입니다.',
    content: `안녕하세요, SN독학기숙학원입니다 😊

보기만 해도 수능 점수가 오르는 고전문학 시리즈 제12탄.
오늘은 조선 중기 문인 박선장이 지은 교훈 가사, 「오륜가(五倫歌)」를 소개합니다.

'오륜(五倫)'이란 유교 윤리의 핵심인 다섯 가지 인간관계를 말합니다.

부자유친(父子有親) – 부모와 자식 사이에는 인(仁)과 친애가 있어야 하며
군신유의(君臣有義) – 임금과 신하의 관계에는 의(義)가 있어야 하고
부부유별(夫婦有別) – 부부는 서로의 역할과 예를 지키며
장유유서(長幼有序) – 어른과 아이 사이에는 질서가 있으며
붕우유신(朋友有信) – 친구 간에는 믿음이 있어야 한다

박선장은 1612년(광해군 4년), 혼탁해지는 세태 속에서
올바른 질서와 인간관계의 회복이 필요하다고 느껴,
마을의 젊은 선비들에게 삶의 기준을 세워주기 위해 이 작품을 지었다고 전해집니다.

즉 「오륜가」는 단순한 '윤리 암송문'이 아니라,
사회가 혼란할수록 개인이 지켜야 할 삶의 기준을 되돌아보게 하는 작품입니다.
지금 시대에도 여전히 유효한, '품격 있는 관계의 조건'이 담겨 있습니다.`,
    category: 'SN Originals',
    tags: ['고전문학', '오륜가', '박선장', '교훈가사', '수능국어', '유교윤리'],
    author: 'SI KIM',
    date: '2025-10-27',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/Oryun-ga_thumbnail_a2_v2.png',
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
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 제13탄. 오늘은 작자 미상의 판소리 「초한가」를 준비했습니다.

「초한가」는 고대 중국 초(楚)나라와 한(漢)나라가 천하를 두고 벌인 역사적 대결을 그린 작품으로, 특히 항우와 유방의 마지막 결전인 해하(垓下) 전투를 중심으로 한 이야기입니다. '사면초가(四面楚歌)'라는 사자성어로도 잘 알려져 있습니다.

<div class="my-8 rounded-2xl bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 border-l-4 border-slate-600 dark:border-slate-400">
  <div class="space-y-3 text-base leading-relaxed text-gray-800 dark:text-gray-200">
    <p class="font-semibold">"힘은 산을 뽑을 만하고, 기개는 세상을 덮을 만한데(力拔山兮氣蓋世)"</p>
    <p class="font-semibold">"때가 불리하니 오추마도 나아가지 못하는구나(時不利兮騅不逝)"</p>
    <p class="font-semibold">"오추마가 나아가지 못하니 어찌할 것인가(騅不逝兮可奈何)"</p>
    <p class="font-semibold">"우희여 우희여, 그대를 어찌할 것인가(虞兮虞兮奈若何)"</p>
  </div>
</div>

<p class="text-sm text-gray-600 dark:text-gray-400 italic -mt-4 mb-6">
  * 오추마(烏騅馬): 항우가 평생 타고 다닌 명마. 검은색 몸에 흰 갈기를 가진 말로, 항우와 함께 수많은 전투를 승리로 이끈 동반자였습니다.
</p>

판소리 「초한가」는 항우의 비극보다는 한나라 장량의 교묘한 심리전 전략을 중심으로 전개됩니다. 사면에서 울려 퍼지는 초나라 노래(楚歌)는 포위된 초나라 병사들의 마음을 흔들기 위한 치밀한 계략이었습니다.

'너희 고향의 늙은 부모는 대문에 기대어 기다리고,
홀로 빈방 지키는 아내는 찬바람에 눈물짓고,
어린 자식은 배고파 울부짖는다'

이런 노랫말로 병사들의 가장 약한 고리인 가족에 대한 그리움을 파고들어, 천하의 패왕 항우조차 속수무책으로 만드는 장면이 이 작품의 백미입니다.

## 💡 영상 하이라이트

SN독학기숙학원이 제작한 이번 영상에서는 장량의 옥퉁소로 시작된 '초가(楚歌)'의 심리전 전략을 깊이 있게 다룹니다. 한나라가 초나라 병사들의 가장 약한 고리인 **가족과 고향**을 공략한 방법—백발의 부모님, 홀로 빈방 지키는 아내, 배고픈 어린 자식들의 모습을 생생하게 노래로 전하며 초나라 병사들의 마음을 무너뜨린 과정을 생생하게 보여줍니다.

작품의 핵심 주제는 **'개인의 용맹을 넘어선 천하 백성의 마음을 얻는 것'**이 진정한 리더십임을 강조합니다.

---

## About Chohanga (English)

**Chohanga (楚漢歌)** is a traditional Chinese epic poem about the historical conflict between the Chu (楚) and Han (漢) dynasties, particularly focusing on the final battle of Gaixia (垓下). This Chinese classic was later adapted into Korean pansori (traditional narrative musical performance), making it one of the few pansori works based on Chinese historical material.

This work centers on **Xiang Yu (項羽)**, the mighty warrior-king of Chu, who finds himself surrounded by enemy forces in a situation known as "**Simyeonchoga (四面楚歌)**" — literally "songs of Chu from all sides," meaning being surrounded by enemies with no escape.

### The Famous Verse

The most iconic part of this work is Xiang Yu's lament:

- **"My strength could uproot mountains, my spirit covered the world" (力拔山兮氣蓋世)**
- **"But fortune turned against me, even my beloved horse Zhui refuses to advance" (時不利兮騅不逝)**
- **"What can I do when my horse won't go forward?" (騅不逝兮可奈何)**
- **"Oh Yu Ji, Yu Ji, what shall I do with you?" (虞兮虞兮奈若何)**

### Themes

This pansori adaptation explores:

- **The weight of destiny (時運)** that even the mightiest hero cannot overcome

- **The tragedy of love** as Xiang Yu faces the reality that he cannot protect his beloved concubine Yu Ji (虞姬)

- **The humanization of a legendary hero** through his vulnerability and emotional depth

The Korean pansori version transforms this Chinese historical epic into a uniquely Korean musical narrative tradition, preserving the emotional core while adding the distinctive vocal techniques and dramatic expressions characteristic of pansori performance art.`,
    category: 'SN Originals',
    tags: ['고전문학', '초한가', '항우', '우희', '수능국어', '중국고전'],
    author: 'SI KIM',
    date: '2025-10-29',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_a4_chohanga.png',
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
    badge: '2026 수능출제',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 제14탄. 오늘은 조선 후기 구강(具康)이 지은 가사 「북새곡」을 준비했습니다.

'북새(北塞)'란 북쪽 변방이나 국경을 뜻합니다. 북새곡은 구강이 1812년(순조 12) 9월 조선의 북쪽 국경이라 할 수 있는 관북지방 암행어사로 임명되어 민정을 시찰한 후 이듬해 3월에 복명하고서 지은 기행가사입니다.

57세의 노인이 험준한 관북지방 산길을 추운 겨울에 다니면서 민정을 시찰하며 경험한 여러가지 견문을 사실적으로 익살스레 표출한 재미있는 작품입니다(해설 출처 : 한국민족문화대백과사전).

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「북새곡」- MBTI F인 사람이 암행어사로 임명되면 이런 느낌일까?

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏰 작품의 배경과 의미

「북새곡」은 조선 후기 구강(具康, 1756-1822)이 지은 기행가사로, '북쪽 변방의 노래'라는 뜻입니다. 1812년(순조 12년) 9월, 57세의 구강이 관북지방(함경도) 암행어사로 임명되어 추운 겨울 동안 험준한 산길을 오가며 민정을 시찰한 후, 이듬해 3월에 복명하고 나서 지은 작품입니다.

이 작품은 단순한 기행 기록이 아니라, 57세 노인의 눈으로 본 민중의 고통과 현실을 진솔하고 익살스럽게 표현한 점이 특징입니다. 암행어사로서의 공적 임무와 개인적 감정이 교차하며, 특히 감정 기반(MBTI F)의 인간적 공감과 따뜻한 시선이 두드러집니다.

### 🎭 문학적 특징

- **기행가사**: 관북지방 시찰 여정을 생생하게 묘사<br>
- **익살과 해학**: 어려운 상황을 유머러스하게 표현<br>
- **현실적 묘사**: 민중의 어려움과 사회 현실을 구체적으로 서술<br>
- **인간적 공감**: 관료로서의 냉정함보다 인간으로서의 따뜻한 시선<br>
- **개인적 감정**: 노인의 체력적 한계와 심리적 고민을 솔직하게 드러냄

### 🌍 문학사적 의의

「북새곡」은 조선 후기 암행어사의 실제 시찰 경험을 담은 귀한 자료로, 당시 관북지방의 실상과 민중의 생활상을 생생하게 전해줍니다. 특히 구강의 인간적이고 감성적인 시각이 작품 전반에 흐르며, 공무를 수행하는 관료의 내면을 솔직하게 보여준다는 점에서 문학사적 가치가 높습니다.

이 작품은 관료 문학의 전형인 '뜻있는 시'의 형식을 따르면서도, 개인적 감정과 현실 인식이 잘 조화를 이루고 있습니다. 57세 노인이 겨울철 험난한 여정을 감내하며 민정을 살펴본 경험이 생생하게 드러나며, 이는 조선 후기 지식인의 사회적 의식과 인간적 공감 능력을 보여주는 사례입니다.

### 📚 작품 감상 포인트

1. **북새의 의미**: '북쪽 변방'이 담고 있는 거리감과 현실<br>
2. **암행어사의 현실**: 임금의 명과 실제 현장 사이의 괴리<br>
3. **인간적 시각**: 관료적 시선을 넘어선 민중에 대한 공감<br>
4. **익살과 해학**: 어려운 상황을 유머로 승화시키는 지혜<br>
5. **시대적 배경**: 조선 후기 변방 지역의 실상과 사회 문제

### 🎨 현대적 의미

「북새곡」을 읽는 것은 과거 관료의 여정을 이해하는 것을 넘어, 자신의 역할과 위치에서 사회를 바라보는 시각이 무엇인지 생각해보는 기회입니다. 공적 임무를 수행하면서도 인간적인 따뜻함을 잃지 않는 것, 어려운 상황 속에서도 유머와 해학으로 극복해내는 것—이런 자세가 오늘날 우리에게도 깊은 교훈을 줍니다.

특히 MBTI F(감정형) 성향을 가진 사람이라면, 구강의 인간적 공감과 따뜻한 시선에서 공감을 느낄 수 있을 것입니다. 냉정한 판단보다는 사람과 상황에 대한 깊은 이해를 우선시하는 접근이 이 작품의 핵심이기 때문입니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 기행가사, 익살과 해학<br>
- **주요 특징**: 현실적 묘사, 인간적 공감, 개인적 감정 표현<br>
- **표현 기법**: 대조법, 영탄법, 직설적 표현<br>
- **시대적 의미**: 조선 후기 암행어사의 역할과 변방의 실상

</div>
</details>

---

## 💡 영상 하이라이트

SN독학기숙학원이 제작한 이번 영상에서는 57세 구강이 암행어사로서 겪은 험난한 여정을 생생하게 담아냅니다.

추운 겨울, 험준한 산길을 오가며 느낀 피로와 고민 속에서도 드러나는 따뜻한 인간적 시선—익살스러운 문체 안에 녹아든 민중의 삶과 애환을 만나보실 수 있습니다.

작품의 핵심 주제는 **'공적 임무와 인간적 감정의 조화'**입니다. 특히 감정에 기반한 접근이 오히려 더 깊은 이해와 공감을 이끌어낸다는 점을 효과적으로 보여줍니다.

**시각적 연출에 특별히 공을 많이 들였습니다.** 소주장수가 암행어사에게 술을 권하는 장면, 얼음에 빠진 순간의 긴박함, 임금님이 춤추는 유쾌한 장면 등이 개성 있게 표현되어 작품의 재미를 더합니다.

앞으로도 더욱 개성 있는 영상으로 찾아뵙겠습니다.

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
English Description
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

## "Buksaegok" - When an Emotional Type Becomes an Undercover Inspector

**Buksaegok (北塞曲)** is a classical Korean gasa (가사) travel narrative poem written by Gu Gang (具康, 1756-1822) during the late Joseon Dynasty. The title means "Song of the Northern Frontier," and the work vividly describes Gu Gang's experience as an undercover royal inspector (암행어사) in the northern border region (관북지방, Hamgyong Province) in 1812.

**Literary Significance:**
- **Travel Narrative**: Vividly describes the difficult journey through harsh winter mountains as a 57-year-old official
- **Humorous and Witty**: Expresses difficult situations with humor and wit
- **Realistic Description**: Specifically describes the hardships of the people and social realities
- **Human Empathy**: Shows warm human perspective rather than cold bureaucratic judgment
- **Personal Expression**: Honestly reveals the physical limitations and psychological struggles of an elderly official

**Cultural Value:**
This work serves as valuable material for understanding the actual inspection experiences of undercover royal inspectors during the late Joseon Dynasty, vividly conveying the realities of the northern frontier region and the lives of the people. Gu Gang's humanistic and emotional perspective flows throughout the work, giving it high literary historical value for honestly showing the inner world of a bureaucrat performing official duties.

**Contemporary Relevance:**
Reading "Buksaegok" offers an opportunity to reflect on how we view society from our own roles and positions, beyond simply understanding a past official's journey. It teaches us the importance of maintaining human warmth while performing public duties, and overcoming difficult situations with humor and wit—attitudes that still hold deep lessons for us today.

The work particularly resonates with those who prioritize emotional understanding (like MBTI Feeling types), as Gu Gang's human empathy and warm perspective form the core of this piece.

</div>
</details>`,
    category: 'SN Originals',
    tags: ['고전문학', '북새곡', '구강', '기행가사', '암행어사', '수능국어'],
    author: 'SI KIM',
    date: '2025-11-01',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_b_buksaegok.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=nRZYC5lLLIY',
    url: '/originals/buksaegok',
    type: 'special',
  },
  {
    id: 'ai-study-method',
    title: 'AI에게 배우는 진짜 공부법',
    excerpt:
      'AI가 똑똑해진 비밀은 설계가 아니라 노출량이었습니다. 인간의 공부도 마찬가지입니다. SN독학기숙학원 대표 윤석기가 AI 학습 원리를 통해 발견한 진짜 공부법을 소개합니다.',
    content: `안녕하세요. SN독학기숙학원 대표 윤석기입니다.

오늘은 조금 조심스럽지만, 꼭 한번 글로 남겨보고 싶었던 주제 — **"공부하는 법"**에 대해 이야기해 보려 합니다.

공부법은 사람마다 다릅니다. 똑같은 책을 보고 똑같은 문제를 풀어도, 어떤 학생은 성장이 빠르고, 어떤 학생은 느립니다. 저 역시 오랫동안 수많은 학생을 지도하며 '정답 같은 공부법'은 없다는 사실을 잘 알고 있습니다.

하지만, 아이러니하게도 AI(인공지능) 덕분에 저는 오히려 '공부란 무엇인가'라는 질문에 조금 더 확실한 답을 얻게 되었습니다.

## AI는 어떻게 학습하는가?

잠시 공부 이야기로 가기 전에, AI 이야기를 해 보겠습니다. AI는 어떻게 이렇게 똑똑해졌을까요?

우리는 흔히 AI가 '천재 알고리즘' 때문에 뛰어나다고 생각합니다. 하지만 실제 발전 역사를 보면, AI가 똑똑해진 핵심 비밀은 **구조(설계)보다 노출량(학습량)**이었습니다.

쉽게 말해,
**"두뇌가 뛰어나서"가 아니라 "많이 보고 많이 배웠기 때문에"** 잘하게 된 것입니다.

예를 들어

- 단어 500개만 아는 사람과
- 단어 5만 개를 아는 사람은

대화 능력이 완전히 다르죠?

AI도 비슷합니다. 제가 AI 전문가는 아니지만, 제가 이해한 바로는 모델 안의 "파라미터(parameter)"라는 것은 일종의 '더 큰 그릇'과 같습니다. 더 많은 패턴과 경험을 담을 수 있는 용량이라고 볼 수 있습니다.

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-blue-800">
    <strong>파라미터가 많다</strong> = 더 복잡하고 많은 패턴을 학습해 저장할 수 있다<br>
    <strong>파라미터가 적다</strong> = 담을 수 있는 패턴이 제한적이다
  </p>
</div>

그래서 요즘 AI는 정교한 알고리즘을 더 다듬는 것보다, 그저 **"훨씬 더 많은 데이터"**를 집어넣는 방식으로 발전했습니다. 그래서 ChatGPT도 몇 천억, 몇 조 개의 파라미터를 가진 '초거대' 모델이 된 것이죠.

즉, **AI의 지능을 키운 것은 '설계'가 아니라 '노출량(학습량)'**이었습니다.

<img src="/images/columns/howtostudy/Data_parameter.png" alt="AI 파라미터와 학습량의 관계" class="rounded-2xl border border-gray-200 dark:border-gray-700 my-6 w-full max-w-xl mx-auto" style="width: 70%;" />

<p class="text-sm text-center text-gray-600 dark:text-gray-400">이미지 출처: <a href="https://soccom.tistory.com/656" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://soccom.tistory.com/656</a></p>

## 인간의 공부도 다르지 않습니다

AI는 설계도보다 **반복 노출(학습량)**이 실력을 키웁니다. 사람의 공부도 똑같습니다.

많은 학생이 "저는 공부 머리가 안 좋아서요" "방법을 몰라서 성적이 안 나옵니다"라고 말하지만, 실제로는 **'방법의 문제'가 아니라 '노출량의 부족'**인 경우가 훨씬 많습니다.

특히 수능은 이 특징이 더 강하게 나타납니다.

수능은 '깊은 이해'와 '패턴 숙련'이 결합되어야 하는 시험입니다. 물론 기본 개념과 원리를 모르면 문제를 풀 수 없습니다. 하지만 많은 학생이 "개념은 어느 정도 이해했는데 문제는 못 풀겠어요"라고 말하는 이유는, 바로 패턴 노출이 부족하기 때문입니다.

같은 개념과 유형에 10번 노출된 학생과 30번 노출된 학생은 이해력과 정확도, 그리고 '자동화된 풀이 속도'가 전혀 다릅니다.

<div class="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-green-800">
    <strong>실제 사례:</strong> 한 학생이 수학 킬러 문제를 처음 봤을 때 20분이 걸렸지만, 같은 유형을 15번 반복한 후에는 3분 만에 풀었습니다. 머리가 좋아진 게 아니라, 패턴이 몸에 각인된 것이죠.
  </p>
</div>

![수능 공부와 패턴 학습](/images/columns/howtostudy/25.5.27-05989.jpg)

즉, 수능은 머리가 좋은 사람이 이기는 시험이 아니라, **같은 유형을 질릴 만큼 많이 본 사람이 체계적으로 이기는 시험**입니다.

이게 바로 상위권 학생들이 마지막 2~3개월에 '급상승'하는 이유이기도 합니다. 지능이 올라서가 아니라, 패턴이 임계점을 넘어서면서 뇌에 내재화되기 때문입니다.

<div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-amber-800">
    <strong>핵심 원리:</strong> 최소한 수능 공부는 똑똑해야 하는 게 아니라 충분히 많이 접하는 사람이 이기는 게임에 가깝습니다.
  </p>
</div>

## 그렇다면, 실전에서는 어떻게 적용할까?

결국 좋은 수능 공부법의 본질은 간단합니다.

**"생각보다 더 많이 반복하고, 잊을 때마다 다시 보고, 패턴이 체화될 때까지 풀어 보는 것."**

AI가 벡터를 통해 '패턴'을 내재화하듯, 우리 역시 지식을 몸에 각인시키는 과정이 필요합니다.

바꿔 말하면,

- 지금 당장 1차 이해는 완벽하지 않아도 괜찮습니다.
- 반복 노출이 쌓이면 어느 순간 '전이(transfer)'가 일어납니다.
- 그때 비로소 실력이 '튀어오르는 구간'이 나옵니다.

![학습 곡선과 실력 향상 구간](/images/columns/howtostudy/Learningcurve.jpg)

다만, 여기서 중요한 점이 있습니다. 무작정 반복하는 것이 아니라, **'능동적 회상(active recall)'과 '간격 반복'**이 동반되어야 진짜 내재화가 일어납니다. 그저 교재를 계속 읽기만 하는 것과, 스스로 문제를 풀며 기억을 꺼내 보는 것은 전혀 다른 학습입니다.

실제로 공부 잘하는 학생들의 공통점은 머리가 좋은 게 아니라, **반복 구간을 끝까지 버티는 사람들**입니다.

## 그렇다면 이 원리를 어떻게 실현할 것인가?

문제는 '알고 있다'와 '실행한다'는 완전히 다른 이야기라는 점입니다.

저는 SN에서 이 원리를 시스템으로 구현하려고 노력하고 있습니다. 반복이 '의지'가 아니라 '환경'으로 작동하도록 말이죠.

<div class="bg-gray-50 border-l-4 border-gray-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-gray-800">
    <strong>SN의 시스템적 접근:</strong><br>
    • 하루 14시간 이상의 순수 학습량<br>
    • 일정이 흐트러지지 않는 몰입형 구조<br>
    • 반복과 회독이 자동으로 누적되는 루틴 설계
  </p>
</div>

![SN 학습 시스템](/images/columns/howtostudy/SNstudy.jpg)

즉, "공부 시간이 많다"가 아니라 **"패턴 노출량이 압도적으로 빠르게 쌓인다"**는 점에서 수능 구조와 가장 잘 맞아떨어지는 환경을 만들려고 합니다.

## 마무리

AI가 보여준 학습의 원리처럼, 우리도 설계가 아니라 노출량, 지능이 아니라 반복과 내재화로 성장하고 성공할 수 있습니다.

다음 글에서는 이 원리를 실제 공부 루틴으로 어떻게 옮기는지, SN의 14시간 환경 속에서 반복이 '의지'가 아니라 '시스템'으로 작동하는 방법을 구체적으로 풀어보겠습니다.

그 외에도 "반복을 어떻게 설계할 것인가", "양을 늘리되 질도 떨어지지 않게 하는 법", "지겨움·슬럼프를 관리하는 법" 같은 현실적인 방법을 하나씩 풀어 보려고 합니다.

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-blue-800">
    <strong>다음 글 예고:</strong><br>
    • 반복이 시스템으로 작동하는 구체적 방법<br>
    • 양과 질의 균형을 맞추는 전략<br>
    • 학습 슬럼프 극복법
  </p>
</div>

읽어 주셔서 감사합니다.

---

<div class="mt-8 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 text-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
  <p class="mb-2 font-medium text-gray-900 dark:text-gray-100">작성자</p>
  <p>SN독학기숙학원 대표 윤석기</p>
</div>`,
    category: 'columns',
    tags: ['공부법', 'AI', '학습법', '반복학습', '수능전략'],
    author: 'SN독학기숙학원 대표 윤석기',
    date: '2025-10-27',
    readTime: '4',
    featured: true,
    featuredOrder: 1,
    published: true,
    thumbnail: '/images/thumbnail/howtostudythumbnail.gif',
    url: '/columns/ai-study-method',
  },
];

// 🔗 개발 환경에서 노션 포스트 자동 병합 (임시 비활성화)
function getMergedPosts(): Post[] {
  // 노션 포스트 비활성화 - 디버깅 중
  return allPosts;

  // if (process.env.NODE_ENV !== 'development') {
  //   return allPosts;
  // }

  // try {
  //   const manualPostIds = new Set(allPosts.map(p => p.id));
  //   const uniqueNotionPosts = notionPosts.filter(
  //     (p: Post) => !manualPostIds.has(p.id)
  //   );
  //   const merged = [...allPosts, ...uniqueNotionPosts]
  //     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  //   return merged;
  // } catch (error) {
  //   return allPosts;
  // }
}

// getAllPosts: 개발 환경에서는 노션 포스트 포함, 프로덕션에서는 수동 포스트만
export function getAllPosts(): Post[] {
  return getMergedPosts();
}

// 헬퍼 함수들
export function getLatestPosts(limit: number = 5): Post[] {
  const mergedPosts = getMergedPosts();
  return mergedPosts
    .filter(post => post.published) // published 된 글만 가져오기
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPosts(): Post[] {
  const mergedPosts = getMergedPosts();
  return mergedPosts.filter(post => post.published);
}

export function getFeaturedPosts(): Post[] {
  const mergedPosts = getMergedPosts();
  const featuredPosts = mergedPosts.filter(
    post => post.featured && post.published
  );

  // featuredOrder 기준으로 정렬 (낮을수록 먼저, 없으면 날짜 기준)
  return featuredPosts.sort((a, b) => {
    // featuredOrder가 있는 경우 우선 정렬
    if (a.featuredOrder !== undefined && b.featuredOrder !== undefined) {
      return a.featuredOrder - b.featuredOrder;
    }
    if (a.featuredOrder !== undefined) return -1;
    if (b.featuredOrder !== undefined) return 1;

    // featuredOrder가 없으면 날짜 기준 정렬 (최신순)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostById(id: string): Post | undefined {
  const mergedPosts = getMergedPosts();
  // URL slug 또는 ID로 검색 (URL 우선)
  return mergedPosts.find(post => {
    if (!post.published) return false;
    // URL의 마지막 부분과 매칭
    const urlSlug = post.url.split('/').pop();
    return urlSlug === id || post.id === id;
  });
}

export function getPostsByCategory(category: string): Post[] {
  const mergedPosts = getMergedPosts();
  return mergedPosts
    .filter(post => post.category === category && post.published) // published 된 글만 가져오기
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
}

export function searchPosts(query: string): Post[] {
  const mergedPosts = getMergedPosts();
  const lowercaseQuery = query.toLowerCase();
  return mergedPosts
    .filter(
      post =>
        post.published && // published 된 글만 검색
        (post.title.toLowerCase().includes(lowercaseQuery) ||
          post.excerpt.toLowerCase().includes(lowercaseQuery) ||
          post.content.toLowerCase().includes(lowercaseQuery) ||
          post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
}

export function getPaginatedPosts(
  page: number = 1,
  limit: number = 6
): { posts: Post[]; totalPages: number; currentPage: number } {
  const mergedPosts = getMergedPosts();
  const publishedPosts = mergedPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
  const totalPosts = publishedPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const posts = publishedPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPages,
    currentPage: page,
  };
}

// SN Originals 카테고리용 페이지네이션 함수
export function getPaginatedOriginalsPosts(
  page: number = 1,
  limit: number = 6
): { posts: Post[]; totalPages: number; currentPage: number } {
  const mergedPosts = getMergedPosts();
  const originalsPosts = mergedPosts
    .filter(
      post =>
        post.published &&
        post.category === 'SN Originals' &&
        post.id !== 'sn-originals-intro'
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const totalPosts = originalsPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const posts = originalsPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPages,
    currentPage: page,
  };
}

// 🔗 노션 포스트와 수동 포스트 통합
// 노션에서 가져온 포스트를 기존 포스트와 합칩니다
// 개발 환경에서만 노션 포스트를 보여줍니다
export function getAllPostsWithNotion(): Post[] {
  // 개발 환경이 아니면 기존 포스트만 반환
  if (process.env.NODE_ENV !== 'development') {
    return allPosts;
  }

  try {
    // 중복 제거 (ID 기준)
    const manualPostIds = new Set(allPosts.map(p => p.id));
    const uniqueNotionPosts = notionPosts.filter(
      (p: Post) => !manualPostIds.has(p.id)
    );

    console.log(`[DEV] 노션 포스트 ${uniqueNotionPosts.length}개 로드됨`);

    // 합치고 날짜순 정렬
    return [...allPosts, ...uniqueNotionPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    // notion-posts.ts가 없거나 에러가 발생하면 기존 포스트만 반환
    console.warn('[DEV] 노션 포스트를 불러올 수 없습니다:', error);
    return allPosts;
  }
}
