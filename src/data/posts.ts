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
    id: 'ganghosasiga',
    title:
      '임금님 은혜는 대체 어디까지 뻗치는 거야 (고등 고전문학 「강호사시가」)',
    excerpt:
      '조선 초기 맹사성이 지은 연시조 「강호사시가」. 봄·여름·가을·겨울 네 수의 시조로 자연의 아름다움을 노래하면서, 마지막은 반드시 임금님 은혜로 마무리되는 특징을 가진 작품입니다.',
    content: `보기만 해도 시험 점수가 오르는 국어 고전문학 시리즈 25번째 작품. 오늘은 조선 초기 맹사성이 지은 연시조 「강호사시가」를 준비했습니다.

맹사성은 성품이 맑고 청렴했으며, 벼슬이 높아도 강호(강과 호수의 자연)를 사랑한 인물이었습니다. 「강호사시가」는 봄·여름·가을·겨울(사계절)을 네 수의 시조로 노래한 형태로, 자연의 아름다움에 흠뻑 젖지만 마지막 구절은 반드시 "이 모든 한가함이 다 임금님 은혜 덕분이다"로 마무리되는 특징을 갖고 있습니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 📜 원문 + 현대어 해설

### 🌸 춘사(春詞) - 봄

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
江湖(강호)에 봄이 드니 미친 興(흥)이 절로 난다
濁醪溪邊(탁료계변)에 錦鱗魚(금린어)ㅣ 안주로다
이 몸이 閑暇(한가)해옴도 亦君恩(역군은)이샷다
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
강과 호수에 봄이 오니 이유 없이 신나고 들뜬다.
시냇가에서 탁한 술을 마시니, 비늘이 반짝이는 물고기까지 안주가 되어 준다.
이렇게 한가롭게 지내는 것도 모두 임금님 덕분이다.
</div>
</details>

### 🌿 하사(夏詞) - 여름

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
江湖(강호)에 녀름이 드니 草堂(초당)에 일이 업다
有信(유신)한 江波(강파)난 보내나니 바람이다
이 몸이 서늘해옴도 亦君恩(역군은)이샷다
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
여름이 되니 초가집에서 특별히 할 일이 없다.
잔잔하고 믿음직한 강물 위로 불어오는 바람만이 오고 간다.
이렇게 홀가분하게 지내는 것도 임금님 은혜다.
</div>
</details>

### 🍂 추사(秋詞) - 가을

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
江湖(강호)에 가알이 드니 고기마다 살져 잇다
小艇(소정)에 그믈 시러 흘리 띄여 더뎌 두고
이 몸이 消日(소일)해옴도 亦君恩(역군은)이샷다
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
가을이 되니 물고기들이 모두 살이 포동포동 올랐다.
작은 배에서 그물을 슬슬 흘려 띄워 놓고 느긋하게 기다린다.
이렇게 시간을 흘려보내듯 여유롭게 지내는 것도 임금님 덕분이다.
</div>
</details>

### ❄ 동사(冬詞) - 겨울

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
江湖(강호)에 겨월이 드니 눈 기픠 자히 남다
삿갓 빗기 쁘고 누역으로 오슬 삼아
이 몸이 칩지 아니해옴도 亦君恩(역군은)이샷다
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
겨울이 오니 눈이 깊게 쌓여 온 세상이 하얗다.
삿갓을 비스듬히 쓰고, 도롱이를 입어 몸을 가린다.
이렇게도 춥지 않게 지낼 수 있는 것 역시 임금님의 은혜다.
</div>
</details>

---

## 📜 원문 전체 보기 / 현대어 해석 전체 보기

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="ganghosasiga-original" data-title="강호사시가 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="ganghosasiga-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

🌸 춘사(春詞)

江湖(강호)에 봄이 드니 미친 興(흥)이 절로 난다
濁醪溪邊(탁료계변)에 錦鱗魚(금린어)ㅣ 안주로다
이 몸이 閑暇(한가)해옴도 亦君恩(역군은)이샷다

🌿 하사(夏詞)

江湖(강호)에 녀름이 드니 草堂(초당)에 일이 업다
有信(유신)한 江波(강파)난 보내나니 바람이다
이 몸이 서늘해옴도 亦君恩(역군은)이샷다

🍂 추사(秋詞)

江湖(강호)에 가알이 드니 고기마다 살져 잇다
小艇(소정)에 그믈 시러 흘리 띄여 더뎌 두고
이 몸이 消日(소일)해옴도 亦君恩(역군은)이샷다

❄ 동사(冬詞)

江湖(강호)에 겨월이 드니 눈 기픠 자히 남다
삿갓 빗기 쁘고 누역으로 오슬 삼아
이 몸이 칩지 아니해옴도 亦君恩(역군은)이샷다

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
📖 현대어 해석 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div data-print-button data-content-id="ganghosasiga-modern" data-title="강호사시가 현대어 해석" data-button-text="현대어 해석 PDF 인쇄"></div>
</div>
<div id="ganghosasiga-modern" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

🌸 춘사(春詞) - 봄

강과 호수에 봄이 오니 이유 없이 신나고 들뜬다.
시냇가에서 탁한 술을 마시니, 비늘이 반짝이는 물고기까지 안주가 되어 준다.
이렇게 한가롭게 지내는 것도 모두 임금님 덕분이다.

🌿 하사(夏詞) - 여름

여름이 되니 초가집에서 특별히 할 일이 없다.
잔잔하고 믿음직한 강물 위로 불어오는 바람만이 오고 간다.
이렇게 홀가분하게 지내는 것도 임금님 은혜다.

🍂 추사(秋詞) - 가을

가을이 되니 물고기들이 모두 살이 포동포동 올랐다.
작은 배에서 그물을 슬슬 흘려 띄워 놓고 느긋하게 기다린다.
이렇게 시간을 흘려보내듯 여유롭게 지내는 것도 임금님 덕분이다.

❄ 동사(冬詞) - 겨울

겨울이 오니 눈이 깊게 쌓여 온 세상이 하얗다.
삿갓을 비스듬히 쓰고, 도롱이를 입어 몸을 가린다.
이렇게도 춥지 않게 지낼 수 있는 것 역시 임금님의 은혜다.

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏯 작품의 배경과 의미

「강호사시가」는 조선 초기 문신 맹사성(孟思誠, 1360~1438)이 지은 연시조입니다. 맹사성은 고려 말 과거에 급제하여 조선 건국 후에도 세종 때까지 정승을 지낸 인물로, 청백리의 대명사로 알려져 있습니다.

그는 벼슬이 높았음에도 검소한 생활을 하며 자연을 사랑했고, 이 작품은 그런 그의 성품을 잘 보여줍니다. '강호(江湖)'란 강과 호수, 즉 자연을 뜻하며, '사시(四時)'는 사계절을 의미합니다.

### 🎭 문학적 특징

- **연시조**: 4수로 이루어진 연작 시조 (춘사·하사·추사·동사)
- **사계절 구성**: 봄, 여름, 가을, 겨울을 각각 한 수씩 노래
- **동일한 종장**: 네 수 모두 "역군은(亦君恩)이샷다"로 끝남
- **강호한정(江湖閑情)**: 자연 속에서의 한가로운 정취
- **연군지정(戀君之情)**: 임금에 대한 충성과 감사

### 🌍 문학사적 의의

「강호사시가」는 조선 시대 '강호시조'의 효시로 평가받는 작품입니다. 자연 속에서의 삶을 노래하면서도 임금에 대한 충성심을 잊지 않는 '강호가도(江湖歌道)'의 전통을 확립했습니다.

이후 윤선도의 「어부사시사」, 정철의 작품들에 영향을 미쳤으며, 조선 시대 사대부들의 자연관과 충의 정신을 대표하는 작품으로 자리 잡았습니다.

### 📚 작품 감상 포인트

1. **사계절의 묘사**: 각 계절별 자연의 특징적 모습
2. **반복 구조**: 종장의 "역군은이샷다" 반복을 통한 주제 강조
3. **은일과 충의**: 자연 속 한가함과 임금 은혜의 조화
4. **청백리 정신**: 맹사성의 검소하고 청렴한 삶의 반영
5. **강호가도**: 자연과 충성을 함께 노래하는 조선 시조의 전통

### 🔍 수능 출제 포인트

- **갈래**: 연시조, 강호시조, 사대부 시조
- **성격**: 전원적, 풍류적, 연군적
- **주제**: 사계절 자연의 아름다움, 임금의 은혜에 대한 감사
- **표현**: 반복법(종장), 대구법, 계절별 시어
- **비교 작품**: 윤선도 「어부사시사」, 이현보 「어부가」

</div>
</details>

---

## 💡 영상 하이라이트

조선 초기 청백리 맹사성이 노래한 사계절의 자연. 봄꽃, 여름 녹음, 가을 달, 겨울 눈—계절마다 다른 아름다움을 즐기면서도, 마지막엔 언제나 "이 모든 게 임금님 은혜"라 외치는 그 마음.

자연을 사랑하되 충성을 잊지 않았던 조선 선비의 정신을 만나보세요.

---

<details class="my-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-400">
English Description
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400">

**"Ganghosasiga"** (Songs of the Rivers and Lakes in Four Seasons) is a series of four sijo poems written by Maeng Sa-seong during the early Joseon dynasty. Each poem celebrates the beauty of a different season, yet all end with gratitude toward the king's grace.

**Timestamps:**
- 00:00 Intro (작품 소개)
- 00:17 강호사시가
- 01:19 Outro (부연 설명)

</div>
</details>
`,
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
    thumbnail: '/images/thumbnail/kang_thumbnail_a1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=6pAktIo7JCs',
    url: '/originals/ganghosasiga',
    type: 'special',
  },
  {
    id: 'myeonangjungga',
    title: '담양에서의 자연힐링 스토리 (고등 고전문학 「면앙정가」)',
    excerpt:
      '조선 전기 송순이 지은 가사 「면앙정가」. 전남 담양 면앙정 주변 사계절의 아름다운 모습과 신선적인 풍류 생활을 묘사한 작품입니다.',
    content: `보기만 해도 시험 점수가 오르는 국어 고전문학 시리즈 24번째 작품. 오늘은 조선 전기(중기) 송순이 지은 가사 「면앙정가」를 준비했습니다.

'면앙정'은 송순이 자신의 고향 전남 담양 제월봉 아래에 지은 정자로, 면앙정가는 면앙정 주변 사계절의 아름다운 모습과 송순 자신의 신선적인 풍류 생활을 묘사한 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 📜 원문 + 현대어 해설

### 🏔️ 서사 - 면앙정의 위치와 모습

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
无等山 ᄒᆞᆫ 활기 뫼히 동다히로 버더 이셔
멀리 ᄯᅦ쳐 와 霽月峯이 되어거ᄂᆞᆯ
無邊大野의 므ᄉᆞᆷ 짐쟉 ᄒᆞ노라
닐곱 구ᄇᆡ ᄒᆞᆯ머 움쳐 므득므득 버렷ᄂᆞᆫ ᄃᆞᆺ.
가온ᄃᆡ 구ᄇᆡᄂᆞᆫ 굼긔 든 늘근 뇽이
선ᄌᆞᆷ을 ᄀᆞᆺ ᄭᆡ야 머리ᄅᆞᆯ 안쳐시니
너ᄅᆞ바희 우ᄒᆡ 松竹을 헤혀고
亭子ᄅᆞᆯ 안쳐시니 구름 ᄐᆞᆫ 쳥학이
千里를 가리라 두 ᄂᆞ래 버렷ᄂᆞᆫ ᄃᆞᆺ.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
무등산 한 줄기 산맥이 동쪽으로 뻗어 있어
멀리 떨치고 와서 제월봉이 되었거늘
끝없이 넓은 들판에 무슨 생각을 하느라고
일곱 굽이를 한 데 움쳐 무더기무더기 벌려 놓은 듯한가.
그 가운데 굽이는 구멍에 든 늙은 용이
선잠에서 막 깨어 머리를 얹혀 놓은 것 같구나
너럭바위 위에 소나무와 대나무를 헤치고
정자를 앉혔으니, 마치 구름 탄 청학이
천 리를 가려고 두 날개를 벌리고 있는 듯하구나.
</div>
</details>

### 🌊 본사1 - 흐르는 물과 들판

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
玉泉山 龍泉山 ᄂᆞ린 믈히
亭子 압 너븐 들ᄒᆡ 올올히 펴진 드시
넙거든 기노라 프르거든 희디마나
雙龍이 뒤트ᄂᆞᆫ ᄃᆞᆺ 긴 깁을 ᄎᆡ폇ᄂᆞᆫ ᄃᆞᆺ.
어드러로 가노라 므ᄉᆞᆷ 일 ᄇᆡ얏바
ᄃᆞᆺᄂᆞᆫ ᄃᆞᆺ ᄯᅡ르ᄂᆞᆫ ᄃᆞᆺ 밤ᄂᆞᆺ즈로 흐르ᄂᆞᆫ ᄃᆞᆺ.
므조친 沙汀은 눈ᄀᆞᆺ치 펴졋거든
어즈러온 기러기ᄂᆞᆫ 므스거슬 어르노라
안즈락 ᄂᆞ리락 모드락 흐트락
蘆花를 ᄉᆞ이 두고 우러곰 좃니ᄂᆞᆫ고.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
옥천산 용천산에서 흘러내린 물이
정자 앞 넓은 들판에 끊임없이 퍼진 듯이
넓거든 길지나 말지, 푸르거든 희지나 말지
쌍룡이 몸을 뒤트는 듯, 긴 비단을 쫙 펼쳐 놓은 듯.
어디를 가느라 무슨 급한 일이 있어서
달리는 듯, 따르는 듯, 밤낮으로 흐르는 듯한가.
물 따라 펼쳐진 모래밭은 눈같이 하얗게 퍼져 있는데
어지러운 기러기는 무엇을 즐기느라고
앉았다가 내렸다가 모였다가 흩어졌다가
갈대꽃을 사이에 두고 울면서 쫓아다니는고.
</div>
</details>

### ⛰️ 본사2 - 둘러싼 산들

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
너븐 길 밧기오 긴 하ᄂᆞᆯ 아ᄅᆡ
두르고 ᄭᅩᄌᆞᆫ 거슨 뫼힌가 屛風인가 그림가 아닌가.
노픈 ᄃᆞᆺ ᄂᆞ즌 ᄃᆞᆺ 긋ᄂᆞᆫ ᄃᆞᆺ 닛ᄂᆞᆫ ᄃᆞᆺ
숨거니 뵈거니 가거니 머믈거니
어즈러온 가온ᄃᆡ 일홈 ᄂᆞᆫ 양ᄒᆞ야
하ᄂᆞᆯ도 젓치 아녀 웃독이 셧ᄂᆞᆫ 거시
秋月山 머리 짓고
龍龜山 夢仙山 佛臺山
魚登山 湧珍山 錦城山이
虛空에 버러거든
遠近蒼崖의 머믄 것도 하도 할샤.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
넓은 길 밖이요, 긴 하늘 아래
두르고 꽂은 것은 산인가, 병풍인가, 그림인가, 아닌가.
높은 듯 낮은 듯, 끊어지는 듯 이어지는 듯
숨기도 하고 보이기도 하고, 가기도 하고 머물기도 하고
어지러운 가운데 유명한 체하며
하늘도 두려워하지 않고 우뚝 서 있는 것이
추월산을 머리로 삼고
용구산, 몽선산, 불대산,
어등산, 용진산, 금성산이
허공에 늘어서 있으니
멀고 가까운 푸른 절벽에 머문 것도 많기도 많구나.
</div>
</details>

### 🌸 본사3 - 봄 (구름과 안개, 꾀꼬리)

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
흰구름 브흰 煙霞 프로니ᄂᆞᆫ 山嵐이라.
千巖萬壑을 제 집으로 사마 두고
나명셩 들명셩 일ᄒᆡ도 구ᄂᆞᆫ지고.
오르거니 ᄂᆞ리거니 長空의 ᄯᅥ나거니
廣野로 거너거니
프르락 블그락 여트락 지트락
斜陽과 섯거 디어 細雨조차 ᄲᅮ리ᄂᆞᆫ다.
籃輿ᄅᆞᆯ ᄇᆡ야 ᄐᆞ고 솔 아ᄅᆡ 구븐 길노
오며 가며 ᄒᆞᄂᆞᆫ 적의 綠楊의 우ᄂᆞᆫ 黃鶯
嬌態 겨워 ᄒᆞᄂᆞᆫ고야.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
흰 구름과 뿌연 안개와 푸른 것은 산 아지랑이로다.
수많은 바위와 골짜기를 제 집으로 삼아 두고
나면서 들면서 아양도 떠는구나.
오르기도 하고 내리기도 하고, 넓은 하늘에 떠나기도 하고
넓은 들판으로 건너가기도 하고
푸르기도 하고 붉기도 하고, 옅기도 하고 짙기도 하고
석양과 섞이어 내리며 가랑비까지 뿌리는구나.
뚜껑 없는 가마인 남여를 타고 소나무 아래 굽은 길로
오며 가며 할 때에, 푸른 버드나무에서 우는 꾀꼬리는
흥에 겨워 교태를 부리는구나.
</div>
</details>

### 🌿 본사4 - 여름 (나무 그늘과 서늘한 바람)

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
나모 새 ᄌᆞ자지어 樹陰이 얼읜 적의
百尺欄干의 긴 조으름 내여 펴니
水面凉風이야 그칠 줄 모르ᄂᆞᆫ가.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
나무와 억새가 우거져 나무 그늘이 드리워진 때에
높은 난간에서 한숨 푹 자고 나니
물 위에서 불어오는 서늘한 바람이야 그칠 줄을 모르는구나.
</div>
</details>

### 🍂 본사5 - 가을 (서리와 달빛)

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
즌 서리 ᄲᅡ딘 후의 산 빗치 금슈로다.
黃雲은 ᄯᅩ 엇디 萬頃의 편 거긔요.
漁笛도 흥을 계워 ᄃᆞᆯᄅᆞᆯ ᄯᆞ롸 브니ᄂᆞᆫ다.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
된서리가 내린 후에 산 빛이 수놓은 비단 같구나.
누렇게 익은 곡식은 또 어찌하여 넓은 들판에 펼쳐져 있는고.
어부의 피리 소리도 흥을 이기지 못하여 달을 따라 부는구나.
</div>
</details>

### ❄️ 본사6 - 겨울 (빙설의 세계)

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
草木 다 진 후의 江山이 ᄆᆡ몰커ᄂᆞᆯ
造物리 헌ᄉᆞᄒᆞ야 氷雪로 ᄭᅮ며 내니
瓊宮瑤臺와 玉海銀山이
眼低의 버러셰라.
乾坤도 가ᄋᆞᆷ열사 간 ᄃᆡ마다 경이로다.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
초목이 다 시든 후에 강산이 눈 속에 묻혔거늘
조물주가 야단스러워 얼음과 눈으로 꾸며 내니
아름다운 구슬로 꾸민 궁궐과 옥으로 된 바다, 은으로 된 산이
눈 아래 펼쳐져 있구나.
하늘과 땅도 풍성하구나, 가는 곳마다 경치로다.
</div>
</details>

### 🎋 결사 - 풍류 생활과 임금 은혜

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
人間ᄋᆞᆯ ᄯᅥ나와도 내 몸이 겨를 업다.
이것도 보려 ᄒᆞ고 져것도 드르려코
ᄇᆞᄅᆞᆷ도 혀려 ᄒᆞ고 ᄃᆞᆯ도 마즈려코
밤으란 언제 줍고
고기란 언제 낙고
柴扉란 뉘 다드며 딘 곳츠란 뉘 쓸려뇨.
아ᄎᆞᆷ이 낫브거니 나조ᄒᆡ라 슬흘소냐.
오ᄂᆞᆯ리 不足커니 來日리라 有餘ᄒᆞ랴.
이 뫼ᄒᆡ 안자 보고 뎌 뫼ᄒᆡ 거러 보니
煩勞ᄒᆞᆫ ᄆᆞᄋᆞᆷ의 ᄇᆞ릴 일이 아조 업다.
쉴 사이 업거든 길히나 젼ᄒᆞ리야.
다만 ᄒᆞᆫ 靑藜杖이 다 므듸어 가노ᄆᆡ라.
술리 닉엇거니 벗지라 업슬소냐.
블리며 ᄐᆞ이며 혀이며 이아며
온가짓 소ᄅᆡ로 醉興을 ᄇᆡ야거니
근심이라 이시며 시ᄅᆞᆷ이라 브터시랴.
누으락 안즈락 구부락 져츠락
을프락 ᄑᆞ람ᄒᆞ락 노혜로 소긔니
天地도 넙고넙고 日月도 ᄒᆞᆫ가ᄒᆞ다.
羲皇을 모ᄅᆞᆯ러니 이젹이야 긔로고야
神仙이 엇더턴지 이 몸이야 긔로고야.
江山風月 거ᄂᆞᆯ리고 내 百年을 다 누리면
岳陽樓上의 李太白이 사라 오다
浩蕩情懷야 이에서 더ᄒᆞᆯ소냐.
이 몸이 이렁 굼도 亦君恩이샷다.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
속세를 떠나왔어도 내 몸이 겨를이 없다.
이것도 보려 하고 저것도 들으려 하고
바람도 쐬려 하고 달도 맞으려 하고
밤은 언제 줍고
고기는 언제 낚고
사립문은 누가 닫으며 떨어진 꽃은 누가 쓸 것인가.
아침나절이 시간 가는 줄 모르니 저녁이라고 싫을쏘냐.
오늘도 부족한데 내일이라고 여유가 있으랴.
이 산에 앉아 보고 저 산에 걸어 보니
번거로운 마음이지만 버릴 것이 아예 없다
쉴 새가 없는데 길이야 온전하겠느냐.
다만 하나의 명아주 지팡이가 다 닳아 가는구나.
술이 익었으니 벗이라 없을쏘냐.
노래를 부르게 하며, 악기를 타게 하며, 악기를 켜게 하며, 몸을 흔들며
온갖 소리로 취흥을 재촉하니
근심이라 있으며 시름이라 붙어 있으랴.
누웠다가 앉았다가 구부렸다가 젖혔다가
시를 읊었다가 휘파람을 불었다가 마음 놓고 노니
천지도 넓디넓고 세월도 한가하다.
복희의 태평성대를 모르고 지냈더니, 이 때가 바로 그것이로구나
신선이 어떻던지 이 몸이 바로 그것이로구나.
강산풍월을 거느리고 내 평생을 다 누리면
악양루 위의 이태백이 살아온다 한들
넓고 끝없는 이 회포야 이보다 더할쏘냐.
이 몸이 이렇게 지내는 것도 역시 임금의 은혜이시도다.
</div>
</details>

---

## 📜 원문 전체 보기 / 현대어 해석 전체 보기

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="myeonangjungga-original" data-title="면앙정가 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="myeonangjungga-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line font-yethangul">

🏔️ 서사 - 면앙정의 위치와 모습

无等山 ᄒᆞᆫ 활기 뫼히 동다히로 버더 이셔
멀리 ᄯᅦ쳐 와 霽月峯이 되어거ᄂᆞᆯ
無邊大野의 므ᄉᆞᆷ 짐쟉 ᄒᆞ노라
닐곱 구ᄇᆡ ᄒᆞᆯ머 움쳐 므득므득 버렷ᄂᆞᆫ ᄃᆞᆺ.
가온ᄃᆡ 구ᄇᆡᄂᆞᆫ 굼긔 든 늘근 뇽이
선ᄌᆞᆷ을 ᄀᆞᆺ ᄭᆡ야 머리ᄅᆞᆯ 안쳐시니
너ᄅᆞ바희 우ᄒᆡ 松竹을 헤혀고
亭子ᄅᆞᆯ 안쳐시니 구름 ᄐᆞᆫ 쳥학이
千里를 가리라 두 ᄂᆞ래 버렷ᄂᆞᆫ ᄃᆞᆺ.

🌊 본사1 - 흐르는 물과 들판

玉泉山 龍泉山 ᄂᆞ린 믈히
亭子 압 너븐 들ᄒᆡ 올올히 펴진 드시
넙거든 기노라 프르거든 희디마나
雙龍이 뒤트ᄂᆞᆫ ᄃᆞᆺ 긴 깁을 ᄎᆡ폇ᄂᆞᆫ ᄃᆞᆺ.
어드러로 가노라 므ᄉᆞᆷ 일 ᄇᆡ얏바
ᄃᆞᆺᄂᆞᆫ ᄃᆞᆺ ᄯᅡ르ᄂᆞᆫ ᄃᆞᆺ 밤ᄂᆞᆺ즈로 흐르ᄂᆞᆫ ᄃᆞᆺ.
므조친 沙汀은 눈ᄀᆞᆺ치 펴졋거든
어즈러온 기러기ᄂᆞᆫ 므스거슬 어르노라
안즈락 ᄂᆞ리락 모드락 흐트락
蘆花를 ᄉᆞ이 두고 우러곰 좃니ᄂᆞᆫ고.

⛰️ 본사2 - 둘러싼 산들

너븐 길 밧기오 긴 하ᄂᆞᆯ 아ᄅᆡ
두르고 ᄭᅩᄌᆞᆫ 거슨 뫼힌가 屛風인가 그림가 아닌가.
노픈 ᄃᆞᆺ ᄂᆞ즌 ᄃᆞᆺ 긋ᄂᆞᆫ ᄃᆞᆺ 닛ᄂᆞᆫ ᄃᆞᆺ
숨거니 뵈거니 가거니 머믈거니
어즈러온 가온ᄃᆡ 일홈 ᄂᆞᆫ 양ᄒᆞ야
하ᄂᆞᆯ도 젓치 아녀 웃독이 셧ᄂᆞᆫ 거시
秋月山 머리 짓고
龍龜山 夢仙山 佛臺山
魚登山 湧珍山 錦城山이
虛空에 버러거든
遠近蒼崖의 머믄 것도 하도 할샤.

🌸 본사3 - 봄 (구름과 안개, 꾀꼬리)

흰구름 브흰 煙霞 프로니ᄂᆞᆫ 山嵐이라.
千巖萬壑을 제 집으로 사마 두고
나명셩 들명셩 일ᄒᆡ도 구ᄂᆞᆫ지고.
오르거니 ᄂᆞ리거니 長空의 ᄯᅥ나거니
廣野로 거너거니
프르락 블그락 여트락 지트락
斜陽과 섯거 디어 細雨조차 ᄲᅮ리ᄂᆞᆫ다.
籃輿ᄅᆞᆯ ᄇᆡ야 ᄐᆞ고 솔 아ᄅᆡ 구븐 길노
오며 가며 ᄒᆞᄂᆞᆫ 적의 綠楊의 우ᄂᆞᆫ 黃鶯
嬌態 겨워 ᄒᆞᄂᆞᆫ고야.

🌿 본사4 - 여름 (나무 그늘과 서늘한 바람)

나모 새 ᄌᆞ자지어 樹陰이 얼읜 적의
百尺欄干의 긴 조으름 내여 펴니
水面凉風이야 그칠 줄 모르ᄂᆞᆫ가.

🍂 본사5 - 가을 (서리와 달빛)

즌 서리 ᄲᅡ딘 후의 산 빗치 금슈로다.
黃雲은 ᄯᅩ 엇디 萬頃의 편 거긔요.
漁笛도 흥을 계워 ᄃᆞᆯᄅᆞᆯ ᄯᆞ롸 브니ᄂᆞᆫ다.

❄️ 본사6 - 겨울 (빙설의 세계)

草木 다 진 후의 江山이 ᄆᆡ몰커ᄂᆞᆯ
造物리 헌ᄉᆞᄒᆞ야 氷雪로 ᄭᅮ며 내니
瓊宮瑤臺와 玉海銀山이
眼低의 버러셰라.
乾坤도 가ᄋᆞᆷ열사 간 ᄃᆡ마다 경이로다.

🎋 결사 - 풍류 생활과 임금 은혜

人間ᄋᆞᆯ ᄯᅥ나와도 내 몸이 겨를 업다.
이것도 보려 ᄒᆞ고 져것도 드르려코
ᄇᆞᄅᆞᆷ도 혀려 ᄒᆞ고 ᄃᆞᆯ도 마즈려코
밤으란 언제 줍고
고기란 언제 낙고
柴扉란 뉘 다드며 딘 곳츠란 뉘 쓸려뇨.
아ᄎᆞᆷ이 낫브거니 나조ᄒᆡ라 슬흘소냐.
오ᄂᆞᆯ리 不足커니 來日리라 有餘ᄒᆞ랴.
이 뫼ᄒᆡ 안자 보고 뎌 뫼ᄒᆡ 거러 보니
煩勞ᄒᆞᆫ ᄆᆞᄋᆞᆷ의 ᄇᆞ릴 일이 아조 업다.
쉴 사이 업거든 길히나 젼ᄒᆞ리야.
다만 ᄒᆞᆫ 靑藜杖이 다 므듸어 가노ᄆᆡ라.
술리 닉엇거니 벗지라 업슬소냐.
블리며 ᄐᆞ이며 혀이며 이아며
온가짓 소ᄅᆡ로 醉興을 ᄇᆡ야거니
근심이라 이시며 시ᄅᆞᆷ이라 브터시랴.
누으락 안즈락 구부락 져츠락
을프락 ᄑᆞ람ᄒᆞ락 노혜로 소긔니
天地도 넙고넙고 日月도 ᄒᆞᆫ가ᄒᆞ다.
羲皇을 모ᄅᆞᆯ러니 이젹이야 긔로고야
神仙이 엇더턴지 이 몸이야 긔로고야.
江山風月 거ᄂᆞᆯ리고 내 百年을 다 누리면
岳陽樓上의 李太白이 사라 오다
浩蕩情懷야 이에서 더ᄒᆞᆯ소냐.
이 몸이 이렁 굼도 亦君恩이샷다.

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
📖 현대어 해석 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div data-print-button data-content-id="myeonangjungga-modern" data-title="면앙정가 현대어 해석" data-button-text="현대어 해석 PDF 인쇄"></div>
</div>
<div id="myeonangjungga-modern" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

🏔️ 서사 - 면앙정의 위치와 모습

무등산 한 줄기 산맥이 동쪽으로 뻗어 있어
멀리 떨치고 와서 제월봉이 되었거늘
끝없이 넓은 들판에 무슨 생각을 하느라고
일곱 굽이를 한 데 움쳐 무더기무더기 벌려 놓은 듯한가.
그 가운데 굽이는 구멍에 든 늙은 용이
선잠에서 막 깨어 머리를 얹혀 놓은 것 같구나
너럭바위 위에 소나무와 대나무를 헤치고
정자를 앉혔으니, 마치 구름 탄 청학이
천 리를 가려고 두 날개를 벌리고 있는 듯하구나.

🌊 본사1 - 흐르는 물과 들판

옥천산 용천산에서 흘러내린 물이
정자 앞 넓은 들판에 끊임없이 퍼진 듯이
넓거든 길지나 말지, 푸르거든 희지나 말지
쌍룡이 몸을 뒤트는 듯, 긴 비단을 쫙 펼쳐 놓은 듯.
어디를 가느라 무슨 급한 일이 있어서
달리는 듯, 따르는 듯, 밤낮으로 흐르는 듯한가.
물 따라 펼쳐진 모래밭은 눈같이 하얗게 퍼져 있는데
어지러운 기러기는 무엇을 즐기느라고
앉았다가 내렸다가 모였다가 흩어졌다가
갈대꽃을 사이에 두고 울면서 쫓아다니는고.

⛰️ 본사2 - 둘러싼 산들

넓은 길 밖이요, 긴 하늘 아래
두르고 꽂은 것은 산인가, 병풍인가, 그림인가, 아닌가.
높은 듯 낮은 듯, 끊어지는 듯 이어지는 듯
숨기도 하고 보이기도 하고, 가기도 하고 머물기도 하고
어지러운 가운데 유명한 체하며
하늘도 두려워하지 않고 우뚝 서 있는 것이
추월산을 머리로 삼고
용구산, 몽선산, 불대산,
어등산, 용진산, 금성산이
허공에 늘어서 있으니
멀고 가까운 푸른 절벽에 머문 것도 많기도 많구나.

🌸 본사3 - 봄 (구름과 안개, 꾀꼬리)

흰 구름과 뿌연 안개와 푸른 것은 산 아지랑이로다.
수많은 바위와 골짜기를 제 집으로 삼아 두고
나면서 들면서 아양도 떠는구나.
오르기도 하고 내리기도 하고, 넓은 하늘에 떠나기도 하고
넓은 들판으로 건너가기도 하고
푸르기도 하고 붉기도 하고, 옅기도 하고 짙기도 하고
석양과 섞이어 내리며 가랑비까지 뿌리는구나.
뚜껑 없는 가마인 남여를 타고 소나무 아래 굽은 길로
오며 가며 할 때에, 푸른 버드나무에서 우는 꾀꼬리는
흥에 겨워 교태를 부리는구나.

🌿 본사4 - 여름 (나무 그늘과 서늘한 바람)

나무와 억새가 우거져 나무 그늘이 드리워진 때에
높은 난간에서 한숨 푹 자고 나니
물 위에서 불어오는 서늘한 바람이야 그칠 줄을 모르는구나.

🍂 본사5 - 가을 (서리와 달빛)

된서리가 내린 후에 산 빛이 수놓은 비단 같구나.
누렇게 익은 곡식은 또 어찌하여 넓은 들판에 펼쳐져 있는고.
어부의 피리 소리도 흥을 이기지 못하여 달을 따라 부는구나.

❄️ 본사6 - 겨울 (빙설의 세계)

초목이 다 시든 후에 강산이 눈 속에 묻혔거늘
조물주가 야단스러워 얼음과 눈으로 꾸며 내니
아름다운 구슬로 꾸민 궁궐과 옥으로 된 바다, 은으로 된 산이
눈 아래 펼쳐져 있구나.
하늘과 땅도 풍성하구나, 가는 곳마다 경치로다.

🎋 결사 - 풍류 생활과 임금 은혜

속세를 떠나왔어도 내 몸이 겨를이 없다.
이것도 보려 하고 저것도 들으려 하고
바람도 쐬려 하고 달도 맞으려 하고
밤은 언제 줍고
고기는 언제 낚고
사립문은 누가 닫으며 떨어진 꽃은 누가 쓸 것인가.
아침나절이 시간 가는 줄 모르니 저녁이라고 싫을쏘냐.
오늘도 부족한데 내일이라고 여유가 있으랴.
이 산에 앉아 보고 저 산에 걸어 보니
번거로운 마음이지만 버릴 것이 아예 없다
쉴 새가 없는데 길이야 온전하겠느냐.
다만 하나의 명아주 지팡이가 다 닳아 가는구나.
술이 익었으니 벗이라 없을쏘냐.
노래를 부르게 하며, 악기를 타게 하며, 악기를 켜게 하며, 몸을 흔들며
온갖 소리로 취흥을 재촉하니
근심이라 있으며 시름이라 붙어 있으랴.
누웠다가 앉았다가 구부렸다가 젖혔다가
시를 읊었다가 휘파람을 불었다가 마음 놓고 노니
천지도 넓디넓고 세월도 한가하다.
복희의 태평성대를 모르고 지냈더니, 이 때가 바로 그것이로구나
신선이 어떻던지 이 몸이 바로 그것이로구나.
강산풍월을 거느리고 내 평생을 다 누리면
악양루 위의 이태백이 살아온다 한들
넓고 끝없는 이 회포야 이보다 더할쏘냐.
이 몸이 이렇게 지내는 것도 역시 임금의 은혜이시도다.

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏯 작품의 배경과 의미

「면앙정가」는 조선 전기 문인 송순(宋純, 1493~1583)이 지은 가사 작품입니다. '면앙정'은 송순이 벼슬에서 물러난 후 고향 전남 담양군 제월봉 아래에 지은 정자의 이름으로, '하늘을 우러러본다'는 뜻을 담고 있습니다.

이 작품은 면앙정 주변의 아름다운 자연 경치를 사계절에 걸쳐 묘사하면서, 자연 속에서 풍류를 즐기며 살아가는 작자의 삶을 노래하고 있습니다.

### 🎭 문학적 특징

- **가사(歌辭)**: 4음보 연속체의 조선 시대 대표 시가 형식
- **사계절 구성**: 봄, 여름, 가을, 겨울의 순환적 구조
- **묘사와 서정**: 객관적 경치 묘사와 주관적 감정의 조화
- **풍류 정신**: 자연과 함께하는 유유자적한 삶의 모습
- **열거법**: 아름다운 경물들을 나열하며 전경을 펼쳐냄

### 🌍 문학사적 의의

「면앙정가」는 조선 전기 가사 문학의 대표작으로, 특히 자연 경관을 노래한 '강호가사'의 전통을 확립한 작품입니다. 이후 정철의 「성산별곡」, 「관동별곡」 등에 영향을 미쳤습니다.

송순은 '면앙정 가단(歌壇)'이라 불리는 문학 그룹을 이끌며 호남 가사 문학의 발전에 크게 기여했습니다.

### 📚 작품 감상 포인트

1. **공간 묘사**: 제월봉과 면앙정 주변의 입체적 경관
2. **시간의 흐름**: 사계절의 변화에 따른 자연의 모습
3. **풍류 의식**: 신선처럼 살고자 하는 작자의 이상
4. **자연 친화**: 속세를 떠나 자연과 하나 되는 삶
5. **음악성**: 4음보의 리듬감 있는 율격

### 🔍 수능 출제 포인트

- **갈래**: 가사, 강호가사, 자연가사
- **성격**: 전원적, 풍류적, 묘사적
- **주제**: 면앙정 주변 사계절의 아름다움, 자연 속 풍류 생활의 즐거움
- **표현**: 열거법, 대구법, 의인법, 4음보 율격
- **비교 작품**: 정철의 「성산별곡」, 윤선도의 「어부사시사」

</div>
</details>

---

## 💡 영상 하이라이트

전남 담양, 제월봉 아래 세워진 면앙정. 송순은 이곳에서 사계절 자연의 아름다움을 바라보며 신선처럼 살았습니다.

봄날 피어오르는 꽃, 여름 녹음, 가을 달빛, 겨울 설경—사시사철 변하는 자연의 모습을 담은 이 작품을 통해 조선 선비의 풍류 정신을 만나보세요.

---

<details class="my-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-400">
English Description
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400">

**"Myeonangjungga"** is a classical Korean poem (gasa) written by Song Sun during the early Joseon dynasty. The poem describes the beautiful four seasons around Myeonangjeong pavilion in Damyang, and the poet's leisurely life in harmony with nature.

**Timestamps:**
- 00:00 Intro
- 00:33 Myeonangjungga
- 05:49 Outro

</div>
</details>
`,
    category: 'SN Originals',
    tags: ['SN Originals', '면앙정가', '고전문학', '송순', '가사', '담양'],
    author: 'SN Academy',
    date: '2025-12-04',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_a1_ASMR.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=6yD3R5eEnzo',
    url: '/originals/myeonangjungga',
    type: 'special',
  },
  {
    id: 'gasiri',
    title: '가지마 가지마 가지마~ (고등 고전문학 「가시리」)',
    excerpt:
      '작자·연대 미상의 고려가요 「가시리」. 떠나는 임을 붙잡고 싶지만 보내면서 반드시 돌아오길 바라는 여성 화자의 애절한 이별 노래입니다.',
    content: `보기만 해도 시험 점수가 오르는 국어 고전문학 시리즈 23번째 작품. 오늘은 작자·연대 미상의 고려가요 「가시리」를 준비했습니다.

「가시리」는 떠나는 임을 붙잡고 싶지만, 잡으면 더 멀어질까 두려워 끝내 보내면서 반드시 돌아오길 바라는 여성 화자의 애절한 이별 노래죠. 반복과 후렴(여음)이 활용되며, 감정을 점층적으로 드러내는 고려가요의 대표작입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 📜 원문 + 현대어 해설

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제1연】</strong>
가시리 가시리잇고 나ᄂᆞᆫ
ᄇᆞ리고 가시리잇고 나ᄂᆞᆫ
위 증즐가 대평성ᄃᆡ(大平盛代)
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
가시렵니까, 가시렵니까.
나를 버리고, 가시렵니까.
(후렴) 위 증즐가 태평성대
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제2연】</strong>
날러는 엇디 살라ᄒᆞ고
ᄇᆞ리고 가시리잇고 나ᄂᆞᆫ
위 증즐가 대평성ᄃᆡ(大平盛代)
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
나는 어떻게 살라고
버리고 가시렵니까.
(후렴) 위 증즐가 태평성대
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제3연】</strong>
잡ᄉᆞ와 두어리마ᄂᆞᄂᆞᆫ
선ᄒᆞ면 아니올셰라
위 증즐가 대평성ᄃᆡ(大平盛代)
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
잡아두고 싶지만
서운하면 다신 내게 돌아오지 않을까봐.
(후렴) 위 증즐가 태평성대
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제4연】</strong>
셜온님 보내ᄋᆞᆸ노니 나ᄂᆞᆫ
가시ᄂᆞᆫ ᄃᆞᆺ 도셔 오쇼셔 나ᄂᆞᆫ
위 증즐가 대평성ᄃᆡ(大平盛代)
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
서러운 마음으로 님을 보내 드리니
가시자마자 돌아오십시오.
(후렴) 위 증즐가 태평성대
</div>
</details>

---

## 📜 원문 전체 보기 / 현대어 해석 전체 보기

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="gasiri-original" data-title="가시리 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="gasiri-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line font-yethangul">

【제1연】
가시리 가시리잇고 나ᄂᆞᆫ
ᄇᆞ리고 가시리잇고 나ᄂᆞᆫ
위 증즐가 대평성ᄃᆡ(大平盛代)

【제2연】
날러는 엇디 살라ᄒᆞ고
ᄇᆞ리고 가시리잇고 나ᄂᆞᆫ
위 증즐가 대평성ᄃᆡ(大平盛代)

【제3연】
잡ᄉᆞ와 두어리마ᄂᆞᄂᆞᆫ
선ᄒᆞ면 아니올셰라
위 증즐가 대평성ᄃᆡ(大平盛代)

【제4연】
셜온님 보내ᄋᆞᆸ노니 나ᄂᆞᆫ
가시ᄂᆞᆫ ᄃᆞᆺ 도셔 오쇼셔 나ᄂᆞᆫ
위 증즐가 대평성ᄃᆡ(大平盛代)

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
📖 현대어 해석 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div data-print-button data-content-id="gasiri-modern" data-title="가시리 현대어 해석" data-button-text="현대어 해석 PDF 인쇄"></div>
</div>
<div id="gasiri-modern" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

【제1연】
가시렵니까, 가시렵니까.
나를 버리고, 가시렵니까.
(후렴) 위 증즐가 태평성대

【제2연】
나는 어떻게 살라고
버리고 가시렵니까.
(후렴) 위 증즐가 태평성대

【제3연】
잡아두고 싶지만
서운하면 다신 내게 돌아오지 않을까봐.
(후렴) 위 증즐가 태평성대

【제4연】
서러운 마음으로 님을 보내 드리니
가시자마자 돌아오십시오.
(후렴) 위 증즐가 태평성대

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏰 작품의 배경과 의미

「가시리」는 작자와 연대가 미상인 고려가요로, 『악장가사(樂章歌詞)』와 『악학편고(樂學便攷)』에 전합니다. '가시리'는 '가시렵니까', '가시려고 합니까'라는 뜻으로, 떠나는 임에 대한 애절한 이별의 정서를 노래한 작품입니다.

이 작품에서 화자는 떠나는 임을 붙잡고 싶은 마음과 붙잡으면 오히려 더 멀어질 것 같은 두려움 사이에서 갈등합니다. 결국 임을 보내면서도 반드시 돌아와 달라는 간절한 소망을 담아내고 있습니다.

### 🎭 문학적 특징

- **고려가요**: 고려 시대 평민들 사이에서 불린 민요적 성격의 노래
- **여음(후렴)**: 각 연 사이에 반복되는 '위 증즐가 대평성대' 등의 후렴구
- **반복과 점층**: 동일한 어구의 반복을 통한 감정의 심화
- **여성 화자**: 떠나는 임을 보내는 여인의 목소리
- **이별의 정한**: 헤어짐에 대한 슬픔과 재회에 대한 소망

### 🌍 문학사적 의의

「가시리」는 고려가요 중에서도 가장 순수한 서정성을 보여주는 작품으로 평가받습니다. 복잡한 비유나 수사 없이 직접적이고 솔직하게 이별의 감정을 표현하면서도, 깊은 울림을 전달합니다.

특히 같은 시대의 「서경별곡」이 적극적으로 임을 붙잡으려는 모습을 보여주는 것과 달리, 「가시리」는 체념과 기다림의 정서를 보여준다는 점에서 대조적입니다.

### 📚 작품 감상 포인트

1. **이별의 양가감정**: 붙잡고 싶지만 보내야 하는 갈등
2. **반복의 효과**: 같은 표현의 반복이 주는 감정적 심화
3. **여음의 기능**: 후렴구가 만들어내는 노래적 리듬감
4. **체념과 소망**: 떠나보내면서도 돌아오길 바라는 마음
5. **보편적 정서**: 시대를 초월한 이별의 슬픔

### 🎨 현대적 의미

「가시리」가 담고 있는 이별의 정서는 시대를 초월하여 모든 이에게 공감을 줍니다. 사랑하는 사람과의 헤어짐, 그리고 다시 만나고 싶은 간절한 마음—이것은 어느 시대, 어느 곳에서나 인간이 느끼는 보편적인 감정입니다.

'가지마 가지마 가지마~'라는 간절한 외침은 오늘날에도 여전히 유효합니다. 누군가를 떠나보낸 경험이 있는 사람이라면, 이 작품 속 화자의 마음에 깊이 공감할 수 있을 것입니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 고려가요, 이별가, 서정시
- **주요 주제**: 이별의 정한, 재회에 대한 소망
- **표현 기법**: 반복법, 점층법, 여음(후렴), 설의법
- **시대적 배경**: 고려 시대, 민요적 성격
- **비교 작품**: 「서경별곡」과의 태도 비교 (적극적 vs 체념적)

</div>
</details>

---

## 💡 영상 하이라이트

'가지마, 가지마, 가지마~' 떠나는 임의 옷자락을 붙잡고 싶은 마음. 하지만 붙잡으면 더 멀어질 것 같아 끝내 놓아버리는 여인의 마음을 담았습니다.

이번 영상에서는 고려 시대 민초들의 사랑과 이별을 노래한 「가시리」의 애절한 정서를 만나봅니다. 짧지만 강렬한 이 노래가 수백 년의 세월을 넘어 오늘날까지 사랑받는 이유를 느껴보세요.

'보내고 나면 돌아오실 거죠?'—마지막까지 놓지 못하는 그 한 줄기 희망이, 이별을 견디게 하는 힘이 됩니다.

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
English Description
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

## "Gasiri" - A Song of Tender Farewell

**Gasiri (가시리)** is an anonymous Goryeo-era folk song preserved in the Akjang Gasa (樂章歌詞). The title is an archaic form meaning "Are you leaving?" or "Will you go?" and the poem expresses a woman's sorrowful farewell to her departing lover.

**Historical Background:**
As a Goryeo gayo (Goryeo song), "Gasiri" represents the folk musical tradition of medieval Korea. Unlike the refined poetry of the aristocratic class, these songs captured the raw emotions and experiences of common people, passed down through oral tradition before being recorded in later anthologies.

**Literary Significance:**
- **Goryeo Gayo Form**: Features the characteristic refrain (yeom) structure of Goryeo folk songs
- **Repetition and Intensification**: Uses repeated phrases to deepen emotional impact
- **Female Voice**: Speaks from the perspective of a woman sending off her beloved
- **Emotional Restraint**: Shows resignation rather than active protest against separation
- **Universal Theme**: Addresses the timeless experience of parting from loved ones

**Poetic Tension:**
The central conflict of "Gasiri" lies in the speaker's dilemma: she desperately wants to hold her lover back, yet fears that doing so would only push him further away. This psychological complexity, expressed in simple language, gives the poem its enduring power.

**Comparative Analysis:**
"Gasiri" is often contrasted with "Seoyeong Byeolgok," another Goryeo farewell song. While the latter shows a woman actively trying to prevent her lover's departure, "Gasiri" presents a more resigned, accepting attitude—making it a valuable text for exploring different responses to loss.

**Contemporary Relevance:**
The emotions captured in "Gasiri"—the pain of separation, the hope for reunion, the delicate balance between holding on and letting go—remain universally relatable across centuries and cultures.

</div>
</details>`,
    category: 'SN Originals',
    tags: ['고전문학', '가시리', '고려가요', '이별', '서정시', '수능국어'],
    author: 'SI KIM',
    date: '2025-12-04',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_a1_gasiri.png',
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
    content: `보기만 해도 시험 점수가 오르는 국어 고전문학 시리즈 22번째 작품. 오늘은 조선 전기 정극인이 지은 가사 「상춘곡」을 준비했습니다.

'상춘(賞春)'은 '봄을 맞이하여 봄 경치를 즐긴다'는 뜻으로, 작가가 벼슬을 사임하고 향리로 내려가 만년을 지내면서, 자연의 아름다움을 즐기는 풍류와 안빈낙도의 정신을 노래하고 있는 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 📜 원문 + 현대어 해설

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【서사 - 자연에 묻혀 사는 삶의 자랑】</strong>
홍진(紅塵)에 뭇친 분네 이내 생애(生涯) 엇더ᄒᆞᆫ고
녯사ᄅᆞᆷ 풍류(風流)ᄅᆞᆯ 미ᄎᆞᆯ가 못 미ᄎᆞᆯ가
천지간(天地間) 남자(男子) 몸이 날만ᄒᆞᆫ 이 하건마ᄂᆞᆫ
산림(山林)에 뭇쳐 이셔 지락(至樂)을 ᄆᆞᄅᆞᆯ 것가
수간 모옥(數間茅屋)을 벽계수(碧溪水) 앏픠 두고
송죽(松竹) 울울리(鬱鬱裏)예 풍월 주인(風月主人) 되어셔라
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
속세에 묻혀 사는 사람들아, 이 나의 삶이 어떠한가?
옛 사람의 풍류에 미칠까 못 미칠까
세상의 남자로 태어난 몸으로 나만한 사람이 많지마는
산림에 묻혀 있는 지극한 즐거움을 모른단 말인가
초가삼간을 맑은 시냇가 앞에 지어 놓고
소나무와 대나무가 울창한 숲 속에서 자연을 즐기는 주인이 되어 있도다
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【본사1 - 봄의 아름다운 풍경】</strong>
엇그제 겨을 지나 새봄이 도라오니
도화 행화(桃花杏花)ᄂᆞᆫ 석양리(夕陽裏)예 퓌여 잇고
녹양 방초(綠楊芳草)ᄂᆞᆫ 세우 중(細雨中)에 프르도다
칼로 ᄆᆞᆯ아 낸가 붓으로 그려 낸가
조화 신공(造化神功)이 물물(物物)마다 헌ᄉᆞᄅᆞᆸ다
수풀에 우ᄂᆞᆫ 새ᄂᆞᆫ 춘기(春氣)ᄅᆞᆯ ᄆᆞᆺ내 계워 소ᄅᆡ마다 교태(嬌態)로다
물아 일체(物我一體)어니 흥(興)이ᄋᆡ 다ᄅᆞᆯ소냐
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
엊그제 겨울 지나 새봄이 돌아오니
복숭아꽃과 살구꽃은 석양 속에 피어 있고
푸른 버드나무와 향기로운 풀은 가랑비가 내리는 가운데 푸르도다
칼로 잘라냈는가? 붓으로 그려내었는가?
조물주의 신통한 재주가 사물마다 야단스럽구나
수풀에 우는 새는 봄기운에 못내 겨워 소리마다 교태로다
물아일체이거늘, 흥이야 다르겠는가
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【본사2 - 한가로운 일상의 즐거움】</strong>
시비(柴扉)예 거러 보고 정자(亭子)에 안자보니
소요 음영(逍遙吟詠)ᄒᆞ야 산일(山日)이 적적(寂寂)ᄒᆞᆫᄃᆡ
한중 진미(閑中眞味)ᄅᆞᆯ 알 니 업시 호재로다
이바 니웃드라 산수(山水) 구경 가쟈스라
답청(踏靑)으란 오ᄂᆞᆯ ᄒᆞ고 욕기(浴沂)란 내일(來日)ᄒᆞ새
아ᄎᆞᆷ에 채산(採山)ᄒᆞ고 나조ᄒᆡ 조수(釣水)ᄒᆞ새
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
사립문 주변을 걸어보기도 하고, 정자에 앉아 보기도 하니
이리저리 거닐며 나직이 시를 읊조려 보며, 산 속의 하루하루가 적적한데
한가로움 속의 참된 즐거움을 아는 이 없이 나 혼자로구나
여보게 이웃 사람들아, 산수 구경이나 가자꾸나
풀을 밟는 것은 오늘하고, 목욕하는 일은 내일 하세
아침에는 산에서 나물을 캐고, 저녁 때에는 낚시하세
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【본사3 - 술과 자연을 벗 삼아】</strong>
ᄀᆞᆺ 괴여 닉은 술을 갈건(葛巾)으로 밧타 노코
곳나모 가지 것거 수 노코 먹으리라
화풍(和風)이 건ᄃᆞᆺ 부러 녹수(綠水)ᄅᆞᆯ 건너오니
청향(淸香)은 잔에 지고 낙홍(落紅)은 옷새 진다
준중(樽中)이 뷔엿거ᄃᆞᆫ 날ᄃᆞ려 알외여라
소동(小童) 아ᄒᆡ다려 주가(酒家)에 술을 믈어
얼운은 막대 집고 아ᄒᆡᄂᆞᆫ 술을 메고
미음완보(微吟緩步)ᄒᆞ야 시냇ᄀᆞ의 호자 안자
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
갓 다 쪄서 익은 술을 칡뿌리 두건으로 걸러 놓고
꽃나무 가지 꺾어서 잔 수를 세며 먹으리라
화창한 봄바람이 문득 불어 푸른 물결을 건너오니
맑은 향기는 술잔에 가득히 담기고, 붉은 꽃잎은 옷에 떨어진다
술동이가 비었거든 나에게 알리어라
아이를 시켜 술집에 술이 있는지를 물어서
어른은 지팡이를 짚고 아이는 술동이를 메고
나직이 읊조리며 천천히 걸어서 시냇가에 혼자 앉아
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【본사4 - 무릉도원 같은 경치】</strong>
명사(明沙) 조ᄒᆞᆫ 믈에 잔 시어 부어 들고
청류(淸流)ᄅᆞᆯ 굽어보니 ᄯᅥ오ᄂᆞ니 도화(桃花)ㅣ로다
무릉(武陵)이 갓갑도다 져 ᄆᆡ이 긘 거인고
송간(松間) 세로(細路)에 두견화(杜鵑花)ᄅᆞᆯ 부치 들고
봉두(峰頭)에 급피 올나 구름 소긔 안자보니
천촌 만락(千村萬落)이 곳곳이 버러 잇ᄂᆡ
연하일휘(煙霞日輝)ᄂᆞᆫ 금수(錦繡)ᄅᆞᆯ 재폇ᄂᆞᆫ ᄃᆞᆺ
엇그제 검은 들이 봄빗도 유여(有餘)ᄒᆞᆯ샤
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
맑은 모래 위로 흐르는 깨끗한 물에 잔을 씻어 부어 들고
맑은 시냇물을 굽어보니 떠내려 오는 것이 복숭아꽃이로구나
무릉도원이 가깝구나, 저 들이 무릉도원인가?
소나무 숲 사이로 난 오솔길에서 진달래꽃을 붙들고
산봉우리 위에 급히 올라 구름 속에 앉아보니
수많은 촌락이 여기저기 널려 있네
안개와 노을과 빛나는 햇살은 수 놓은 비단을 펼쳐 놓은 듯하구나
엊그제까지 거뭇거뭇하던 들판에 봄빛이 넘쳐 흐르는구나
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【결사 - 안빈낙도의 삶】</strong>
공명(功名)도 날 ᄭᅴ우고 부귀(富貴)도 날 ᄭᅴ우니
청풍 명월(淸風明月) 외(外)예 엇던 벗이 잇ᄉᆞ올고
단표 누항(簞瓢陋巷)에 흣튼 혜음 아니 ᄒᆞᄂᆡ
아모타 백년 행락(百年行樂)이 이만ᄒᆞᆫᄃᆞᆯ 엇지ᄒᆞ리
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
명예와 부귀도 나를 꺼리니
맑은 바람과 밝은 달 외에 그 어떤 벗이 있겠는가
누추한 곳에서 가난한 생활을 하면서도 헛된 생각을 아니 하네
아무튼 백년 즐겁게 지내는 게 이만한들 어찌하리
</div>
</details>

---

## 📜 원문 전체 보기 / 현대어 해석 전체 보기

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="sangchungok-original" data-title="상춘곡 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="sangchungok-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line font-yethangul">

【서사】
홍진(紅塵)에 뭇친 분네 이내 생애(生涯) 엇더ᄒᆞᆫ고
녯사ᄅᆞᆷ 풍류(風流)ᄅᆞᆯ 미ᄎᆞᆯ가 못 미ᄎᆞᆯ가
천지간(天地間) 남자(男子) 몸이 날만ᄒᆞᆫ 이 하건마ᄂᆞᆫ
산림(山林)에 뭇쳐 이셔 지락(至樂)을 ᄆᆞᄅᆞᆯ 것가
수간 모옥(數間茅屋)을 벽계수(碧溪水) 앏픠 두고
송죽(松竹) 울울리(鬱鬱裏)예 풍월 주인(風月主人) 되어셔라

【본사1】
엇그제 겨을 지나 새봄이 도라오니
도화 행화(桃花杏花)ᄂᆞᆫ 석양리(夕陽裏)예 퓌여 잇고
녹양 방초(綠楊芳草)ᄂᆞᆫ 세우 중(細雨中)에 프르도다
칼로 ᄆᆞᆯ아 낸가 붓으로 그려 낸가
조화 신공(造化神功)이 물물(物物)마다 헌ᄉᆞᄅᆞᆸ다
수풀에 우ᄂᆞᆫ 새ᄂᆞᆫ 춘기(春氣)ᄅᆞᆯ ᄆᆞᆺ내 계워 소ᄅᆡ마다 교태(嬌態)로다
물아 일체(物我一體)어니 흥(興)이ᄋᆡ 다ᄅᆞᆯ소냐

【본사2】
시비(柴扉)예 거러 보고 정자(亭子)에 안자보니
소요 음영(逍遙吟詠)ᄒᆞ야 산일(山日)이 적적(寂寂)ᄒᆞᆫᄃᆡ
한중 진미(閑中眞味)ᄅᆞᆯ 알 니 업시 호재로다
이바 니웃드라 산수(山水) 구경 가쟈스라
답청(踏靑)으란 오ᄂᆞᆯ ᄒᆞ고 욕기(浴沂)란 내일(來日)ᄒᆞ새
아ᄎᆞᆷ에 채산(採山)ᄒᆞ고 나조ᄒᆡ 조수(釣水)ᄒᆞ새

【본사3】
ᄀᆞᆺ 괴여 닉은 술을 갈건(葛巾)으로 밧타 노코
곳나모 가지 것거 수 노코 먹으리라
화풍(和風)이 건ᄃᆞᆺ 부러 녹수(綠水)ᄅᆞᆯ 건너오니
청향(淸香)은 잔에 지고 낙홍(落紅)은 옷새 진다
준중(樽中)이 뷔엿거ᄃᆞᆫ 날ᄃᆞ려 알외여라
소동(小童) 아ᄒᆡ다려 주가(酒家)에 술을 믈어
얼운은 막대 집고 아ᄒᆡᄂᆞᆫ 술을 메고
미음완보(微吟緩步)ᄒᆞ야 시냇ᄀᆞ의 호자 안자

【본사4】
명사(明沙) 조ᄒᆞᆫ 믈에 잔 시어 부어 들고
청류(淸流)ᄅᆞᆯ 굽어보니 ᄯᅥ오ᄂᆞ니 도화(桃花)ㅣ로다
무릉(武陵)이 갓갑도다 져 ᄆᆡ이 긘 거인고
송간(松間) 세로(細路)에 두견화(杜鵑花)ᄅᆞᆯ 부치 들고
봉두(峰頭)에 급피 올나 구름 소긔 안자보니
천촌 만락(千村萬落)이 곳곳이 버러 잇ᄂᆡ
연하일휘(煙霞日輝)ᄂᆞᆫ 금수(錦繡)ᄅᆞᆯ 재폇ᄂᆞᆫ ᄃᆞᆺ
엇그제 검은 들이 봄빗도 유여(有餘)ᄒᆞᆯ샤

【결사】
공명(功名)도 날 ᄭᅴ우고 부귀(富貴)도 날 ᄭᅴ우니
청풍 명월(淸風明月) 외(外)예 엇던 벗이 잇ᄉᆞ올고
단표 누항(簞瓢陋巷)에 흣튼 혜음 아니 ᄒᆞᄂᆡ
아모타 백년 행락(百年行樂)이 이만ᄒᆞᆫᄃᆞᆯ 엇지ᄒᆞ리

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
📖 현대어 해석 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div data-print-button data-content-id="sangchungok-modern" data-title="상춘곡 현대어 해석" data-button-text="현대어 해석 PDF 인쇄"></div>
</div>
<div id="sangchungok-modern" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

【서사】
속세에 묻혀 사는 사람들아, 이 나의 삶이 어떠한가?
옛 사람의 풍류에 미칠까 못 미칠까
세상의 남자로 태어난 몸으로 나만한 사람이 많지마는
산림에 묻혀 있는 지극한 즐거움을 모른단 말인가
초가삼간을 맑은 시냇가 앞에 지어 놓고
소나무와 대나무가 울창한 숲 속에서 자연을 즐기는 주인이 되어 있도다

【본사1】
엊그제 겨울 지나 새봄이 돌아오니
복숭아꽃과 살구꽃은 석양 속에 피어 있고
푸른 버드나무와 향기로운 풀은 가랑비가 내리는 가운데 푸르도다
칼로 잘라냈는가? 붓으로 그려내었는가?
조물주의 신통한 재주가 사물마다 야단스럽구나
수풀에 우는 새는 봄기운에 못내 겨워 소리마다 교태로다
물아일체이거늘, 흥이야 다르겠는가

【본사2】
사립문 주변을 걸어보기도 하고, 정자에 앉아 보기도 하니
이리저리 거닐며 나직이 시를 읊조려 보며, 산 속의 하루하루가 적적한데
한가로움 속의 참된 즐거움을 아는 이 없이 나 혼자로구나
여보게 이웃 사람들아, 산수 구경이나 가자꾸나
풀을 밟는 것은 오늘하고, 목욕하는 일은 내일 하세
아침에는 산에서 나물을 캐고, 저녁 때에는 낚시하세

【본사3】
갓 다 쪄서 익은 술을 칡뿌리 두건으로 걸러 놓고
꽃나무 가지 꺾어서 잔 수를 세며 먹으리라
화창한 봄바람이 문득 불어 푸른 물결을 건너오니
맑은 향기는 술잔에 가득히 담기고, 붉은 꽃잎은 옷에 떨어진다
술동이가 비었거든 나에게 알리어라
아이를 시켜 술집에 술이 있는지를 물어서
어른은 지팡이를 짚고 아이는 술동이를 메고
나직이 읊조리며 천천히 걸어서 시냇가에 혼자 앉아

【본사4】
맑은 모래 위로 흐르는 깨끗한 물에 잔을 씻어 부어 들고
맑은 시냇물을 굽어보니 떠내려 오는 것이 복숭아꽃이로구나
무릉도원이 가깝구나, 저 들이 무릉도원인가?
소나무 숲 사이로 난 오솔길에서 진달래꽃을 붙들고
산봉우리 위에 급히 올라 구름 속에 앉아보니
수많은 촌락이 여기저기 널려 있네
안개와 노을과 빛나는 햇살은 수 놓은 비단을 펼쳐 놓은 듯하구나
엊그제까지 거뭇거뭇하던 들판에 봄빛이 넘쳐 흐르는구나

【결사】
명예와 부귀도 나를 꺼리니
맑은 바람과 밝은 달 외에 그 어떤 벗이 있겠는가
누추한 곳에서 가난한 생활을 하면서도 헛된 생각을 아니 하네
아무튼 백년 즐겁게 지내는 게 이만한들 어찌하리

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏰 작품의 배경과 의미

「상춘곡(賞春曲)」은 조선 전기 문신 정극인(丁克仁, 1401~1481)이 지은 가사 작품입니다. '상춘'이란 '봄을 감상한다'는 뜻으로, 작가가 관직에서 물러난 후 고향에서 봄의 아름다운 자연 경치를 즐기며 살아가는 삶을 노래했습니다.

정극인은 세종·문종·단종·세조 시대를 거친 문신으로, 만년에 벼슬을 내려놓고 전라도 태인(현재 정읍시)으로 낙향하여 자연 속에서 유유자적한 삶을 보냈습니다. 이 작품은 그러한 은거 생활 속에서 느낀 자연의 아름다움과 삶의 만족감을 담아냈습니다.

### 🎭 문학적 특징

- **가사(歌辭)**: 4음보 연속체의 율문 형식
- **강호가사의 효시**: 자연 속 은거 생활을 노래한 최초의 가사
- **안빈낙도(安貧樂道)**: 가난해도 도를 즐기는 유학적 이상 표현
- **계절의 순환**: 봄의 풍경을 중심으로 한 계절감 묘사
- **풍류 정신**: 자연 속에서 누리는 정신적 여유와 즐거움

### 🌍 문학사적 의의

「상춘곡」은 조선 시대 **강호가사(江湖歌辭)**의 효시로 평가받는 중요한 작품입니다. 이후 송순의 「면앙정가」, 정철의 「성산별곡」등 수많은 강호가사에 영향을 주었습니다.

특히 관직에서 물러난 사대부가 자연 속에서 은거하며 안빈낙도의 삶을 노래하는 전형적인 패턴을 확립했다는 점에서 문학사적 가치가 높습니다.

### 📚 작품 감상 포인트

1. **안빈낙도**: 벼슬을 버리고 자연에서 찾은 진정한 행복
2. **봄의 풍경**: 생동감 넘치는 봄 자연의 묘사
3. **풍류와 여유**: 속세를 떠난 자의 정신적 만족감
4. **유학적 이상**: 도(道)를 즐기는 선비의 삶
5. **자연 친화**: 자연과 하나 되어 살아가는 모습

### 🎨 현대적 의미

「상춘곡」이 노래하는 안빈낙도의 정신은 오늘날에도 깊은 울림을 줍니다. 끊임없이 더 많은 것을 추구하는 현대 사회에서, 작은 것에서 행복을 찾고 자연과 함께하는 소박한 삶의 가치를 일깨워줍니다.

'남들이 부러워할 만한 삶'이 아니라 '내가 진정으로 만족하는 삶'을 선택한 정극인의 모습은, 진정한 행복이 무엇인지 다시 생각하게 합니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 가사, 강호가사, 서정 문학
- **주요 주제**: 안빈낙도, 자연 예찬, 은거 생활의 만족
- **표현 기법**: 열거법, 대구법, 설의법, 영탄법
- **시대적 배경**: 조선 전기, 사대부 문학
- **작가**: 정극인 - 강호가사의 효시

</div>
</details>

---

## 💡 영상 하이라이트

벼슬을 내려놓고 고향으로 돌아온 한 선비. 봄날 아침, 창문을 열면 펼쳐지는 꽃과 새, 그리고 산과 물의 아름다운 풍경—이것이 바로 「상춘곡」이 그리는 세계입니다.

이번 영상에서는 정극인이 태인에서 보낸 만년의 봄날을 따라가봅니다. 세상의 출세와 명예를 뒤로하고, 오직 자연과 함께하는 삶을 선택한 그의 당당한 행복을 만나보세요.

'사실 내 이런 삶을 좀 부러워했으면 좋겠어'—이 한 마디에 담긴 정극인의 여유로운 자신감이, 오늘을 사는 우리에게도 묵직한 질문을 던집니다.

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
English Description
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

## "Sangchungok" - A Song of Simple Contentment

**Sangchungok (賞春曲)** is a classical Korean gasa poem written by Jeong Geuk-in (丁克仁, 1401~1481), a scholar-official of the early Joseon Dynasty. The title means "Song of Enjoying Spring," and the work celebrates the beauty of spring nature and the contentment of a simple life in retirement.

**Historical Background:**
After serving through the reigns of Kings Sejong, Munjong, Danjong, and Sejo, Jeong Geuk-in resigned from his official position and retired to his hometown in Taein (present-day Jeongeup), Jeolla Province. There, he spent his final years enjoying the natural beauty around him, and this poem captures that experience of peaceful retirement.

**Literary Significance:**
- **Gasa Form**: Written in the 4-beat continuous verse form characteristic of gasa poetry
- **Pioneer of Gangho Gasa**: Considered the first example of "rivers and lakes" poetry about hermit life in nature
- **Anbin Nakdo Philosophy**: Expresses the Confucian ideal of finding joy in simple virtue rather than wealth
- **Seasonal Beauty**: Vivid descriptions of spring landscapes
- **Pungyu Spirit**: Embodies the refined enjoyment of nature and art

**Cultural Value:**
"Sangchungok" established the template for numerous later works in the gangho gasa tradition, influencing poets like Song Sun ("Myeonangjeonnga") and Jeong Cheol ("Seongsanbyeolgok"). It represents an important literary response to the political turbulence of early Joseon, offering a vision of fulfillment through withdrawal from worldly affairs.

**Contemporary Relevance:**
In our modern world obsessed with achievement and accumulation, "Sangchungok" offers a refreshing alternative perspective. The poem's celebration of finding happiness in simple pleasures, in harmony with nature, resonates powerfully with contemporary movements toward mindfulness, minimalism, and work-life balance.

</div>
</details>`,
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
    thumbnail: '/images/thumbnail/thumbnail_a3.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=7J0PTTcaD1U',
    url: '/originals/sangchungok',
    type: 'special',
  },
  {
    id: 'maehwasa',
    title: '지조와 절개의 상징 (고등 고전문학 「매화사」)',
    excerpt:
      '조선 후기 안민영이 지은 연시조 「매화사」. 추운 겨울 눈 속에서 피는 매화를 통해 고결하고 굳센 절개를 지닌 선비적 삶을 찬양한 작품입니다.',
    content: `보기만 해도 시험 점수가 오르는 국어 고전문학 시리즈 21번째 작품. 오늘은 조선 후기 안민영이 지은 연시조 「매화사」를 준비했습니다.

「매화사」는 작자가 1870년(고종 7) 겨울에 스승인 박효관(朴孝寬)의 집에서 벗과 기생과 더불어 놀 때, 안상(案上; 책상 위)에 매화가 피어 있는 것을 보고 이를 영탄한 노래입니다(출처: 한국민족문화대백과사전).

추운 겨울 눈 속에서 피는 매화를 통해 고결하고 굳센 절개를 지닌 선비적 삶을 찬양하는 「매화사」를 지금 만나보시죠.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 📜 원문 + 현대어 해설

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제1수】</strong>
매영(梅影)이 부드친 창(窓)에 옥인금차(玉人金𨥁) 비겨신져.
이삼 백발옹(白髮翁)은 거문고와 노래로다.
이윽고 잔 드러 권하랄 제 달이 또한 오르더라.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
매화 그림자가 비친 창가에 옥 같은 미인이 금비녀를 꽂은 채 기대어 서 있구나.
두세 명의 백발 노인들은 거문고를 타며 노래를 부르고 있도다.
얼마 지나 술잔을 들어 서로 권할 때, 마침 달도 함께 떠오르더라.
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제2수】</strong>
어리고 성근 가지 너를 밋지 아녀 더니
눈 기약 능히 직혀 두세 송이 퓌였고나.
촉(燭) 잡고 갓가이 사랑할 제 암향(暗香)좃차 부동(不動)터라.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
연약하고 듬성듬성한 가지라서 너를 믿지 못했는데
눈 오면 피겠다는 약속을 능히 지켜 두세 송이가 벌써 피었구나.
촛불을 들고 가까이 다가가 사랑스럽게 바라보니, 그윽한 향기조차 고요하게 감돌더라.
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제3수】</strong>
빙자옥질(氷姿玉質)이여 눈 속에 네로구나.
가만히 향기 노아 황혼월(黃昏月)을 기약하니
아마도 아치고절(雅致高節)은 너뿐인가 하노라.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
얼음 같은 자태와 옥 같은 바탕을 가진 네가 눈 속에 있구나.
가만히 향기를 흘려 보내며 황혼에 뜨는 달과 마음을 주고 받으니
아마도 고상한 멋과 높은 절개는 너뿐인가 한다.
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제4수】</strong>
눈으로 기약터니 네 과연 퓌엿고나
황혼에 달이 오니 그림자도 성기거다.
청향(淸香)이 잔에 떳스니 취코 놀려 허노라.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
눈이 오면 피겠다고 약속했는데 네가 과연 그 약속대로 피었구나.
황혼에 달이 뜨니 매화의 그림자도 드문드문 비친다.
맑은 향기가 술잔 위에 떠 있으니 그 향기에 취해 즐겁게 놀고자 한다.
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제5수】</strong>
황혼에 돗는 달이 너와 긔약 두엇더냐.
합리(閤裏)에 자든 꼿치 향긔 노아 맛는고야.
내 엇디 매월(每月)이 벗되는 줄 몰낫던고 하노라.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
황혼에 떠오르는 달이 너와 약속이라도 한 것이냐.
방 안에 조용히 잠들어 있던 꽃이 향기를 흘리며 달을 맞이하는구나.
내가 어찌 매화와 달이 서로 벗처럼 지내는 줄 미처 모르고 있었던가.
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제6수】</strong>
바람이 눈을 몰아 산창(山窓)에 부듸치니
찬 기운 새여드러 쟘든 매화를 침노(侵擄)한다.
아무리 어루려한들 봄 뜻이야 아슬소냐.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
바람이 눈을 몰아와 산속 창문에 부딪치니
찬 기운이 스며들어 자고 있던 매화를 침범하는구나.
아무리 얼게 하려 한들 봄을 향한 뜻이야 빼앗을 수 있겠느냐.
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제7수】</strong>
저 건너 나부산(羅浮山) 눈속에 검어 웃뚝
울통불통 광매등걸아
네 무삼 힘으로 가지 돗쳐 곳조차 져리 퓌엿는다.
아모리 석은 배 반(半)만 남앗실만졍 봄 뜻즐 어이 하리오.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
저 건너 중국에서 신선이 산다고 전해지는 나부산 눈 속에서도 검게 우뚝 서 있는
울퉁불퉁한 늙은 매화나무 한 그루야.
네가 무슨 힘으로 새 가지를 돋아내고 꽃까지 저렇게 피워 냈단 말이냐.
아무리 썩은 몸통 반만 남았을망정, 봄을 향한 뜻을 어찌 막을 수 있으리오.
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
<strong>【제8수】</strong>
동각(東閣)에 숨은 꼿치 척촉인가 두견화인가.
건곤(乾坤)이 눈이여늘 제 엇디 감히 퓌리.
알괘라 백설양춘(白雪陽春)은 매화 밧게 뉘 이시리.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
동쪽 누각에 숨어 있는 꽃이 철쭉인가, 진달래인가.
온 세상이 아직 눈 투성이인데, 그것이 어찌 감히 피겠는가.
이제 알겠다. 눈 내린 이른 계절에 피어나는 꽃은 매화밖에 또 누가 있겠는가.
</div>
</details>

---

## 📜 원문 전체 보기 / 현대어 해석 전체 보기

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="maehwasa-original" data-title="매화사 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="maehwasa-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line font-yethangul">

【제1수】
매영(梅影)이 부드친 창(窓)에 옥인금차(玉人金𨥁) 비겨신져.
이삼 백발옹(白髮翁)은 거문고와 노래로다.
이윽고 잔 드러 권하랄 제 달이 또한 오르더라.

【제2수】
어리고 성근 가지 너를 밋지 아녀 더니
눈 기약 능히 직혀 두세 송이 퓌였고나.
촉(燭) 잡고 갓가이 사랑할 제 암향(暗香)좃차 부동(不動)터라.

【제3수】
빙자옥질(氷姿玉質)이여 눈 속에 네로구나.
가만히 향기 노아 황혼월(黃昏月)을 기약하니
아마도 아치고절(雅致高節)은 너뿐인가 하노라.

【제4수】
눈으로 기약터니 네 과연 퓌엿고나
황혼에 달이 오니 그림자도 성기거다.
청향(淸香)이 잔에 떳스니 취코 놀려 허노라.

【제5수】
황혼에 돗는 달이 너와 긔약 두엇더냐.
합리(閤裏)에 자든 꼿치 향긔 노아 맛는고야.
내 엇디 매월(每月)이 벗되는 줄 몰낫던고 하노라.

【제6수】
바람이 눈을 몰아 산창(山窓)에 부듸치니
찬 기운 새여드러 쟘든 매화를 침노(侵擄)한다.
아무리 어루려한들 봄 뜻이야 아슬소냐.

【제7수】
저 건너 나부산(羅浮山) 눈속에 검어 웃뚝
울통불통 광매등걸아
네 무삼 힘으로 가지 돗쳐 곳조차 져리 퓌엿는다.
아모리 석은 배 반(半)만 남앗실만졍 봄 뜻즐 어이 하리오.

【제8수】
동각(東閣)에 숨은 꼿치 척촉인가 두견화인가.
건곤(乾坤)이 눈이여늘 제 엇디 감히 퓌리.
알괘라 백설양춘(白雪陽春)은 매화 밧게 뉘 이시리.

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
📖 현대어 해석 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div data-print-button data-content-id="maehwasa-modern" data-title="매화사 현대어 해석" data-button-text="현대어 해석 PDF 인쇄"></div>
</div>
<div id="maehwasa-modern" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

【제1수】
매화 그림자가 비친 창가에 옥 같은 미인이 금비녀를 꽂은 채 기대어 서 있구나.
두세 명의 백발 노인들은 거문고를 타며 노래를 부르고 있도다.
얼마 지나 술잔을 들어 서로 권할 때, 마침 달도 함께 떠오르더라.

【제2수】
연약하고 듬성듬성한 가지라서 너를 믿지 못했는데
눈 오면 피겠다는 약속을 능히 지켜 두세 송이가 벌써 피었구나.
촛불을 들고 가까이 다가가 사랑스럽게 바라보니, 그윽한 향기조차 고요하게 감돌더라.

【제3수】
얼음 같은 자태와 옥 같은 바탕을 가진 네가 눈 속에 있구나.
가만히 향기를 흘려 보내며 황혼에 뜨는 달과 마음을 주고 받으니
아마도 고상한 멋과 높은 절개는 너뿐인가 한다.

【제4수】
눈이 오면 피겠다고 약속했는데 네가 과연 그 약속대로 피었구나.
황혼에 달이 뜨니 매화의 그림자도 드문드문 비친다.
맑은 향기가 술잔 위에 떠 있으니 그 향기에 취해 즐겁게 놀고자 한다.

【제5수】
황혼에 떠오르는 달이 너와 약속이라도 한 것이냐.
방 안에 조용히 잠들어 있던 꽃이 향기를 흘리며 달을 맞이하는구나.
내가 어찌 매화와 달이 서로 벗처럼 지내는 줄 미처 모르고 있었던가.

【제6수】
바람이 눈을 몰아와 산속 창문에 부딪치니
찬 기운이 스며들어 자고 있던 매화를 침범하는구나.
아무리 얼게 하려 한들 봄을 향한 뜻이야 빼앗을 수 있겠느냐.

【제7수】
저 건너 중국에서 신선이 산다고 전해지는 나부산 눈 속에서도 검게 우뚝 서 있는
울퉁불퉁한 늙은 매화나무 한 그루야.
네가 무슨 힘으로 새 가지를 돋아내고 꽃까지 저렇게 피워 냈단 말이냐.
아무리 썩은 몸통 반만 남았을망정, 봄을 향한 뜻을 어찌 막을 수 있으리오.

【제8수】
동쪽 누각에 숨어 있는 꽃이 철쭉인가, 진달래인가.
온 세상이 아직 눈 투성이인데, 그것이 어찌 감히 피겠는가.
이제 알겠다. 눈 내린 이른 계절에 피어나는 꽃은 매화밖에 또 누가 있겠는가.

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
당신이 수험생이라면 이것도 한번 읽어보세요.
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

### 🏰 작품의 배경과 의미

「매화사(梅花詞)」는 조선 후기 가객(歌客) 안민영(安玟英, 1816~?)이 지은 연시조입니다. 1870년(고종 7) 겨울, 작자가 스승인 박효관의 집에서 벗들과 어울려 즐기던 중, 책상 위에 피어 있는 매화를 보고 그 아름다움과 고결함에 감탄하여 지은 작품입니다.

매화는 예로부터 사군자(四君子) 중 하나로, 추운 겨울 눈 속에서도 꿋꿋이 꽃을 피우는 그 성질 때문에 선비의 지조와 절개를 상징하는 꽃으로 여겨져 왔습니다. 안민영은 이러한 매화의 특성을 통해 고결한 선비정신을 노래했습니다.

### 🎭 문학적 특징

- **연시조**: 여러 수의 시조가 하나의 주제로 연결된 형식
- **영물시(詠物詩)**: 사물(매화)을 통해 인간의 덕성을 노래
- **사군자 상징**: 매화를 통한 지조와 절개의 표현
- **감각적 표현**: 시각, 후각을 통한 생생한 묘사
- **선비정신**: 고결하고 청빈한 삶에 대한 지향

### 🌍 문학사적 의의

「매화사」는 조선 후기 시조 문학의 대표작 중 하나로, 안민영이 엮은 가집 『금옥총부(金玉叢部)』에 수록되어 있습니다. 이 작품은 전통적인 사군자 모티프를 활용하면서도, 섬세한 감각적 묘사와 풍류적 정서를 잘 보여주는 수작입니다.

특히 매화의 아름다움을 단순히 외적으로만 찬미하지 않고, 그 내면에 담긴 지조와 절개의 의미를 함께 읊었다는 점에서 깊은 문학적 가치를 지닙니다.

### 📚 작품 감상 포인트

1. **매화의 상징성**: 추위 속에서도 피어나는 꽃의 의미
2. **선비의 덕목**: 지조, 절개, 고결함의 표현
3. **감각적 이미지**: 눈과 매화, 향기의 대비
4. **풍류 정신**: 시적 정취와 여유로운 삶의 태도
5. **자연과 인간**: 자연물을 통한 인간 덕성의 비유

### 🎨 현대적 의미

「매화사」가 노래하는 지조와 절개의 정신은 오늘날에도 여전히 의미가 있습니다. 어려운 환경 속에서도 자신의 신념과 가치를 지키며 살아가는 것, 외적인 화려함보다 내면의 아름다움을 추구하는 것—이러한 가치는 시대를 초월하여 우리에게 교훈을 줍니다.

특히 빠르게 변화하고 유혹이 많은 현대 사회에서, 매화처럼 흔들리지 않는 중심을 갖고 자신만의 향기를 피워내는 삶의 자세는 더욱 귀하게 느껴집니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 연시조, 영물시, 서정시
- **주요 주제**: 매화 예찬, 지조와 절개, 선비정신
- **표현 기법**: 의인법, 비유법, 대비법, 영탄법
- **시대적 배경**: 조선 후기 가객 문화, 사군자 모티프
- **작가**: 안민영 - 『금옥총부』 편찬자

</div>
</details>

---

## 💡 영상 하이라이트

추운 겨울, 눈 속에서도 청초하게 피어나는 매화—그 고결한 자태와 은은한 향기를 통해 선비의 지조와 절개를 노래한 「매화사」의 정취를 영상으로 만나보세요.

이번 영상에서는 1870년 겨울, 스승의 집에서 매화를 바라보며 감탄했던 안민영의 시선을 따라가봅니다. 차가운 눈 속에서도 의연하게 꽃을 피우는 매화처럼, 세상의 유혹에 흔들리지 않는 선비정신을 담았습니다.

영상 속 한 장면 한 장면에 담긴 설경과 매화의 조화, 그리고 은은히 퍼지는 매화 향기의 상상까지—작품이 전하는 고결한 정서를 오롯이 느껴보시기 바랍니다.

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
English Description
</summary>
<div class="p-6 bg-white dark:bg-gray-900">

## "Maehwasa" - Symbol of Integrity and Fidelity

**Maehwasa (梅花詞)** is a classical Korean sijo sequence written by An Min-yeong (安玟英, 1816~?), a renowned poet-singer (gagaek) of the late Joseon Dynasty. The title literally means "Song of the Plum Blossom," and the work praises the beauty and noble spirit of the plum flower.

**Historical Background:**
The poem was composed in the winter of 1870 (7th year of King Gojong's reign) when the poet was visiting his teacher Bak Hyo-gwan's house. Upon seeing plum blossoms blooming on a desk, he was moved to compose this work in admiration of the flower's grace and resilience.

**Literary Significance:**
- **Yeon-sijo Form**: A sequence of sijos connected by a single theme
- **Yeongmulsi (Object Poetry)**: Uses the plum blossom to express human virtues
- **Sagunja Symbolism**: The plum is one of the Four Gentlemen in East Asian art
- **Sensory Imagery**: Vivid visual and olfactory descriptions
- **Scholar Spirit**: Expresses ideals of integrity and principled living

**Symbolic Meaning:**
The plum blossom (maehwa) holds special significance in Korean culture as a symbol of the scholar's integrity (jijo) and fidelity (jeolgae). Unlike other flowers that bloom in warmer seasons, the plum blooms in the harsh cold of winter, often even amid snow. This resilience made it a perfect metaphor for the unwavering principles of the Confucian gentleman.

**Cultural Value:**
"Maehwasa" exemplifies the elegant literary tradition of late Joseon poetry, where nature was not merely described but used as a vehicle for expressing moral and philosophical ideals. The work demonstrates the sophisticated aesthetic sensibility of the gagaek tradition and its integration of literary expression with moral cultivation.

**Contemporary Relevance:**
The message of "Maehwasa"—maintaining one's principles and inner beauty regardless of external circumstances—resonates powerfully in our modern age. In a world of rapid change and constant temptation, the plum blossom's lesson of staying true to one's values while blooming beautifully offers timeless wisdom.

</div>
</details>`,
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
    thumbnail: '/images/thumbnail/1thumbnail_F.png',
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

### 📌 기숙학원 남녀가 눈 마주치면 벌어지는 일은 무엇인가?

기숙학원에서는 남녀 학생 간의 연애를 막기 위해 눈 마주침조차 허용되지 않으며, 식당, 독서실, 기숙사, 통로 등 모든 동선이 철저히 분리됩니다.

### 💡 독학 기숙학원 SN은 어떤 곳인가?

SN 독학 기숙학원은 학생들이 오로지 자기 주도 학습에만 집중할 수 있도록 생활 관리, 학습 관리, 질문 답변 등 모든 것을 지원하는 곳입니다.

### 🎯 영상 개요

독학 기숙학원 운영자가 직접 밝히는 재수생 관리의 현실과 AI 교육 혁신의 접점을 다룹니다. 단순히 자습 공간을 제공하는 것을 넘어, 남녀 학생 간의 엄격한 통제(남녀 7세 부동석)부터 시작해, 학생 개개인의 학습 패턴을 분석하고 맞춤형 해설을 제공하는 '스나 GPT' 개발 과정까지 생생하게 공개합니다.

이 콘텐츠를 통해 교육 시장의 새로운 경쟁력인 초개인화 학습 시스템의 구체적인 작동 원리와, 왜 기존의 대형 AI 모델(ChatGPT, Gemini)만으로는 해결할 수 없는 교육 현장의 니즈가 있는지에 대한 실용적인 통찰을 얻을 수 있습니다.

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
🏫 Part 1. SN 독학 기숙학원 운영 이야기
</summary>
<div class="p-6 bg-white dark:bg-gray-900 prose dark:prose-invert max-w-none">

### 1. SN 독학 기숙학원 소개 및 운영 현황

#### 1.1. 독학 기숙학원의 정의와 운영 방식

**독학 기숙학원의 개념 설명**
- 독학 기숙학원은 일반 기숙학원에서 수업(강의)만 제외한 형태이다.
- 일반 기숙학원은 재수생(대입 준비 학생)들이 공부에만 집중하기 위해 먹고 자고 공부하는 곳이며, 선생님들이 출강하여 강의를 듣고 자습하는 형태이다.
- 독학 기숙학원은 오로지 자기 주도 학습으로만 채우는 곳이다.
- 집단적으로 수용하지만, 생활 담당 선생님과 먹는 것을 관리하는 선생님이 상주하며 자습과 식사 관리를 한다.

**선생님 구성 및 역할**
- 질문 담당 선생님: 국어, 수학, 영어, 탐구 과목별로 상주하며 모르는 문제를 알려준다.
- 학습 관리 선생님: 학습량 체크, 공부 전략 수립, 주간 점검 등을 담당하며, 총 7명이 학생 30명당 1명꼴로 배정되어 꼼꼼하게 지도한다.
- 교과 선생님: 모르는 문제 풀이를 전문적으로 담당하는 선생님이 10명이다.
- 생활 관리 선생님: 새벽 6시 30분 기상부터 밤 11시까지의 공부 시간 관리, 학생들의 짜잘한 처리 업무 등을 담당하며, 교대 및 당직 근무를 위해 16명이 24시간 상주한다.

**학원 규모 및 위치**
- 학생 정원: 260명이며, 거의 정원이 찬다.
- 위치 및 시설: 경기도 양평군 용면에 위치하며, 부지 자체는 6천 평 규모로 운동장, 기숙사, 공부 공간, 강의실이 따로 있다.
- 건물 형태: 폐교나 청소년 수련원/유스호스텔이었던 건물을 임차하여 사용하고 있다.
- 성별 운영: 현재는 남학생만 받고 있다.

#### 1.2. 남녀 학생 통제와 연애 방지 노력

**남녀 분리 운영의 필요성**
- 기숙학원에서는 연애 이슈가 발생하면 안 되기 때문에 남녀 학생 간의 통제가 매우 엄격하다.
- 과거 남녀를 같이 운영했을 때도 남녀 7세 부동석 원칙이 정확히 이루어져야 했으며, 눈 마주치거나 말하는 것도 금지하는 것이 룰이었다.
- 기숙학원의 수요 자체가 남학생이 더 많아 남녀 비율은 대략 7대 3이었다.

**과거 캠퍼스의 통제 방식**
- 과거에는 식당, 독서실, 기숙사, 층, 통로 등 모든 공간이 분리되어 있었다.
- 동선이 겹치는 것을 막기 위해 동선을 완전히 차단했다.

**캠퍼스 이전 후 남학생만 운영하게 된 이유**
- 기존 캠퍼스에서 새로운 건물로 옮겼는데, 새로운 건물의 구조상 동선을 막으려고 해도 남녀가 겹칠 수밖에 없는 구조였다.
- 선생님들이 이 구조로는 남녀를 같이 운영할 수 없다고 판단하여 남학생만 받게 되었다.

**연애 시도의 구체적 사례**
- 눈 마주치는 것은 어쩔 수 없지만, 남학생이 좋아하는 여학생의 이름도 모르는 상태에서 휴가 기간에 인스타그램 DM을 보내는 사례까지 있었다.
- 학원 측에서는 DM을 보내는 과정 자체가 공부 시간을 낭비하게 만들므로, 차라리 눈 마주치고 말을 하게 만드는 것이 시간을 아껴줄 정도라고 판단했다.
- 연애 사례가 하나라도 생기면 어린 학생들 사이에 소문이 나고, 학원 측에서 통제할 수 있는 방법이 없기 때문에 사전에 막는 것이 중요하다.
- 선례를 남기지 않는 것이 중요하며, 이는 예방 계산의 차원이다.

#### 1.3. 독학 기숙학원의 경쟁력과 비용

**사업 시작 배경 및 경쟁력**
- 윤석기 대표는 포스코 인터내셔널 재무팀에서 일하다가 교육 사업을 시작했다.
- 대형 기숙학원(메가스터디, 대성, 이투스 등)이 시장의 50% 이상을 장악하고 있어 개인이 진입하기 어렵다.
- 독학 기숙학원의 경쟁력은 관리력의 차이이다.
- 학습 담임 선생님들이 능력이 뛰어나며, 학생들을 꼼꼼하게 지도해 주는 것이 핵심이다.

**시장 현황 및 경쟁 관계**
- 독학 기숙학원은 전국에 대여섯 군데 정도밖에 없다.
- 원장님들끼리는 경쟁사이지만 동병상련의 마음으로 친하게 지내며 정보를 공유한다.
- 최근 대기업들도 독학 시장에 진입하고 있어 경쟁이 심화되고 있다.

**비용 및 할인 정책**
- 월 수강료: 2023년 235만 원에서 2024년 245만 원으로 인상되었다.
- 포함 내역: 모든 비용이 포함되며 추가 비용은 없다.
- 할인 정책: 성적에 따른 할인만 존재하며, 최대 할인은 50%이다.
- 페이백: 의대 등 좋은 대학에 합격하면 수강료를 전액 돌려주는 페이백 제도도 있다.

**생활 편의 제공**
- 숙소: 3~4인실로 운영된다.
- 청소 및 빨래: 학원에서 모두 해주며, 빨래는 개켜서 제공된다.
- 식사: 영양사 두 분이 상주하며, 메인 요리는 배식하고 메인 요리 외의 반찬은 리필이 가능하다.
- 간식: 주 1회 치킨, 피자 등 학생들이 원하는 것을 시켜 먹는 시간이 있으며, 학원 내에 편의점이 있어 개별적으로 사 먹을 수 있다.

#### 1.4. 학생 관리 및 입시 결과

**생활 관리 및 통제**
- 룸메이트 관리: 학생들 간의 사이가 안 좋거나 싸우면 방을 바로 바꿔준다.
- 친목 통제: 오히려 너무 친해져서 몰려다니며 공부에 방해가 되면 방을 찢어 놓는다 (분리시킨다).
- 취침 시간: 밤 11시 30분경에 점호 후 취침한다.
- 야간 자율 학습 (야자): 야자 시간은 정해져 있으며, 피곤하다고 먼저 들어가 자는 것은 허용되지 않는다.
- 규율: 군대와 같이 엄격하며, 규칙을 어기면 벌점을 받는다.

**학생 구성 및 특성**
- 성적 분포: 정규분포를 따르지만, 상위권 학생이 더 많다.
- 학생 소신: 독학 기숙학원에 오는 학생들은 혼자 할 수 있다는 소신이 뚜렷하며, 자기 주도 학습에 대한 의지가 강하다.
- 독학 선택 이유: 공부는 혼자 할 수 있지만, 집에서 유튜브나 게임을 하는 등 생활 통제가 안 되기 때문에 강제적인 관리를 받으러 온다.
- 나이대: 나이 제한은 없으며, 최대 30세까지 사회생활을 하다가 다시 공부하러 오는 경우도 있다.
- 예비역 학생: 군대 전역 후 군수(군대에서 수능 준비) 경험을 바탕으로 오는 예비역이 3~4%를 차지한다.

**입시 결과 및 재등록률**
- 입시 결과: 의대, 서울대 등 메디컬 및 SKY 합격자가 많으며, 중복 합격을 포함하여 연간 30~40명 정도를 배출한다.
- 재등록률: 2년, 3년 연속 이용하는 단골 학생이 가끔 있으며, 만족도가 높아 재구매율이 높은 편이다.
- 재등록 할인: 다시 오는 학생들에게는 할인율이 적용된다.

**일과 시간표 및 학원 역사**
- 기상 시간: 평일은 무조건 6시 30분, 일요일은 7시에 기상한다.
- 수능 시간표 적용: 수능 시험 시간표대로 1교시(국어 90분), 2교시(수학 100분) 등을 정하여 학습한다.
- 운영 기간: 2014년부터 시작하여 약 12년 동안 운영되었다.
- 성장 배경: 초기 3년간은 적자를 보거나 인건비 수준이었으나, 인터넷 강의 활성화 이후 오프라인 강의의 필요성이 줄어들면서 독학 기숙학원의 수요가 증가했다.

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
🤖 Part 2. 스나 GPT - AI 학습 보조 시스템
</summary>
<div class="p-6 bg-white dark:bg-gray-900 prose dark:prose-invert max-w-none">

### 2. AI 학습 보조 시스템 '스나 GPT' 개발 및 원리

#### 2.1. SN 아카데미의 AI 시스템 개발 배경

- **CTO 영입 및 역할**: SN 독학 기숙학원은 AI 학습 보조 시스템 개발을 위해 이규원 CTO(카이스트 수석, 서울대 뇌인지 과학 석사 과정)를 영입했다.
- **AI 시스템의 목적**: AI로 학습 보조 비서 역할을 하는 웹 서비스 '스나 GPT'를 개발하여 내년에 출시할 예정이다.

**개발 동기 (해자 확보)**
- 현재는 잘 돌아가지만, 대기업이 시장에 들어오고 기숙학원들이 상향 평준화되면 가격 및 시설 경쟁으로 하향 사이클에 접어들 수 있다.
- 2~3년 뒤의 경쟁력을 확보하기 위해 AI 기술을 도입하여 차별화된 초개인화 학습 시스템을 구축하고자 했다.

**선생님 업무 보조 및 효율화**
- 선생님을 붙여줘도 학생들이 적극적으로 질문하러 오지 못하는 문제가 있다.
- 한 명의 선생님이 30명의 학생을 정확히 파악하기 어렵기 때문에, AI가 학생들의 데이터를 분석하고 요약하여 선생님에게 전달한다.
- 선생님은 AI가 취합한 정보를 바탕으로 더 정확한 처방과 진단을 내리는 역할에 집중할 수 있도록 시스템을 바꾸고자 했다.

#### 2.2. 스나 GPT의 작동 원리 및 기능

**학생의 AI 활용 방식**
- 학생들은 온라인으로 접근하는 것을 선호하며, 사소한 질문도 AI에게 쉽게 처리할 수 있다.
- 어려운 문제가 있을 때 독서실에서 문제를 사진 찍어 올리면 AI가 풀어준다.
- 해설이 명확하지 않을 경우, 학생은 AI에게 "개념을 다시 설명해 줘", "더 쉽게 설명해 줘", "다른 풀이는 없어?", "그래프로 풀어 줘" 등 반복적인 질문을 할 수 있다.
- AI는 선생님보다 만만하기 때문에 학생들은 모르는 것을 알 때까지 100번이고 질문할 수 있다.

**초개인화 학습 분석 (데이터 축적)**
- 학생이 100번 질문하는 과정을 통해 AI는 이 학생이 어디까지 알고 뭘 모르는지 분석이 가능하다.
- AI는 "너는 지수 함수의 개념을 잘 모르는구나"처럼 정확히 진단할 수 있다.
- 학생의 오답 패턴(예: 답이 4번인데 2번을 찍는 패턴)을 분석하여 "너는 이런 패턴에 약하다", "실수가 많다"는 요약 리포트를 제공한다.
- AI는 학생 개개인의 계정을 기억하고 있어, 이전에 물었던 것을 또 모르면 다시 알려주기도 한다.

**기존 대형 AI 모델과의 차별점 (멀티 에이전트 시스템)**
- ChatGPT의 한계: ChatGPT는 학생의 맥락을 기억하지 않고 추론만 하며, 일반적인 채팅 기능만 지원한다.
- SN GPT의 구조: 구글의 Gemini나 OpenAI의 GPT 같은 대형 모델을 가져와서 교육에 최적화된 방식으로 작동하도록 설계했다.
- 다중 AI 도구 부착: SN GPT는 단순히 문제 풀이만 하는 것이 아니라, 여러 개의 AI 도구(에이전트)를 붙여서 작동시킨다.
  - 검산 AI: 문제 풀이 후 답이 맞는지 점검한다.
  - 해설 AI: 학생 수준에 맞춰 쉽게 설명해 줄 수 있도록 해설을 담당한다.
- AI 교육 (정체성 부여): CTO는 오픈 AI나 Gemini 엔진에 "너는 이제부터 해설 AI가 될 거야"와 같이 정체성을 부여하는 텍스트 명령을 넣어 교육시킨다.
- 내부 검증: 답이 나오면 오류가 없는지, 제대로 정리했는지 내부 검증을 통과할 때까지 계속 돌린다.
- 박스 시스템: 여러 AI(문제 풀이, 해설, 검산 등)를 하나의 박스 안에 넣어두고, 학생들이 질문하면 이 다섯 명의 AI가 각자 잘하는 것을 나눠서 협력하여 답을 제공하는 원리이다.

#### 2.3. 시스템 통제 및 기술적 노하우

**질문 통제 (안전 장치)**
- SN GPT는 공부 질문만 받도록 통제되어 있으며, 다른 질문은 "공부와 관련이 없습니다"라고 무시하도록 되어 있다.
- AI가 질문이 공부 관련인지 아닌지를 판단한다.
- 이 통제는 개발자나 설계자(아키텍트)가 시스템 단에 박아 놓은 명령이며, 사용자가 임의로 바꿀 수 없는 안전 장치이다.

**AI 모델의 지속성**
- SN독학기숙학원은 구글이나 오픈 AI의 인공지능을 API 형태로 돈을 내고 쓰는 것이며, 이 AI 모델들은 변하지 않는다.
- 만약 구글에서 Gemini 2.5를 쓰다가 Gemini 3가 공개되면, 기존에 SN이 설정해 둔 명령(툴)을 통해 즉각적으로 배우게 할 수 있다.
- SN이 설정한 명령과 툴이 SN의 재산이므로, 다른 AI가 들어와도 그 툴 안에서는 금방 배울 수 있다.

**기술적 해자 (안경 씌우기)**
- 뇌는 천재, 눈은 안 좋은 AI: 대형 AI 모델들은 뇌는 좋지만, 그림이나 시각적 정보를 잘 인식하지 못하는 '눈이 안 좋은 천재'와 같다.
- 시각 인식 문제: AI는 사람이 쉽게 파악하는 선의 교차나 복잡한 도형(예: V자, X자)의 연결성을 파악하는 데 어려움을 겪는다.
- 해결책 (안경 모듈): SN은 AI에게 좋은 안경을 씌워주는 모듈을 개발하여, AI가 시험 문제 유형에 대해 잘 인식할 수 있도록 훈련시켰다.
- 노하우 축적: 이러한 훈련 과정과 노하우가 쌓여 다른 경쟁사가 따라 하기 어렵게 만든 해자가 된다.
- 뇌과학 기반: 이규원 CTO와 소장(윤 대표의 형님)이 뇌과학을 전공했기 때문에, 사람의 뇌가 작동하는 원리에 착안하여 AI의 인식 문제를 개선하고 있다.

---

### 3. 스나 GPT의 초개인화 학습 시연 및 미래 비전

#### 3.1. 개발팀 구성 및 비전 공유

- **CTO의 배경**: 이규원 CTO는 카이스트 전기전자공학을 전공하고 서울대학교 뇌인지 과학과에서 석사 과정을 연구했다.
- **영입 계기**: 윤석기 대표의 형님(소장님)과 같은 연구실이었으며, 형님의 제안으로 합류했다.
- **CTO의 동기**: 회사 생활의 자율성 부족을 느끼던 중, SN의 비전(AI를 실생활에 침투시켜 정보의 장벽을 깨고 싶다)에 공감하여 합류했다.
- **SN의 비전 확장**: SN 독학 기숙학원은 교육에서 성공하여 SN 그룹으로 확장, 금융 등 다른 분야에도 AI 시스템을 적용하여 인공지능 전문 그룹이 되는 것을 목표로 한다.
- **개발팀 구성**: 윤 대표의 형님(소장님), 이규원 CTO, 개발자 1명, 필리핀 현지 개발자 2명, 데이터 라벨링 담당 1명 등 총 6명으로 구성되어 있다.
- **보상**: CTO에게는 높은 연봉과 함께 스톡 옵션을 제공하여 향후 상장 시 부자가 될 수 있도록 계약했다.

#### 3.2. 초개인화 학습의 구체적 작동 방식

- **데이터의 역할**: AI 교육은 데이터를 먹여야 하지만, SN GPT는 어떤 방식으로 AI들이 소통하고 작동하느냐에 초점을 맞춘다.
- **초개인화 데이터**: 학원 운영 과정에서 발생하는 학생의 시험 성적, 오답 기록, 선생님들의 상담 기록 등 모든 정보를 AI가 가지고 있다.
- **맞춤형 답변**: 똑같은 문제를 A 학생과 B 학생이 물었을 때, AI는 그 학생이 가진 정보(어떤 부분이 강하고 약한지)를 바탕으로 답변과 설명 방식을 전혀 다르게 제공한다.
- **실시간 데이터 연동**: AI는 기존 소통 방식 외에도 학원 시스템에 들어와서 자습 데이터, 성적, 상담 이력 등 날마다 생기는 데이터를 계속 가져와 학생을 파악한다.

#### 3.3. 수능 문제 풀이 시연 및 AI의 약점

**쉬운 문제 (수능 1번) 시연**
- 수능 1번 문제를 SN GPT에 넣자, 답은 1이 나왔다.
- 일반 ChatGPT는 풀이 과정을 친절하게 설명해 주는 반면, SN GPT는 개발자 아이디로 시연했기 때문에 해설이 불성실하게 한 줄로 나왔다.
- SN GPT는 학생의 수준에 따라 지수 법칙이 무엇인지 등 기초적인 개념부터 설명해 줄 수 있다.

**어려운 문제 (수능 30번) 시연**
- 수능 최고 난이도인 30번(4점짜리) 문제를 시연했다.
- ChatGPT는 해설만 한두 페이지로 길게 풀지만, SN GPT는 학생 수준에 맞춰 더 친절하게 설명할 수 있다.
- SN GPT는 문제를 푸는 것 외에도 그래프 모듈을 별도로 만들어 해설에 필요한 그래프를 함께 제공한다.
- AI가 문제를 푸는 것은 당연하므로, SN은 뒷단(해설)을 얼마나 잘 설명해 주는지에 포커스를 둔다.

**AI가 틀리는 문제 유형 (약점)**
- 수학 (시각 인식 오류): AI는 초등학교 수준의 선 긋기 문제나 함수 그래프의 연결성을 파악하는 문제에서 틀린다.
- AI는 1이 5로 가는 것을 1이 3으로 간다고 인식하는 등, 사람의 뇌와 작동 원리가 달라 직관적인 연결성을 파악하지 못한다.
- 국어 (고어 학습 부족): 옛날 고어(예: 비읍시옷)가 포함된 문제처럼 인터넷에 자료가 부족한 경우 틀린다.
- 복잡한 그림/특수문자 인식 오류: 복잡한 도형이나 빗금, 동그라미 A, 괄호 A 등 특수문자가 섞인 문제를 잘못 인식하여 문제 자체를 잘못 이해하는 경우가 발생한다.
- 지구과학 (등고선): 등고선처럼 복잡한 그래프를 파악하는 데 어려움을 겪는다.

#### 3.4. 스나 GPT의 활용 및 사업 모델

**낙서 인식 기술 (초지각)**
- 학생이 문제를 풀다가 낙서하거나 옆으로 찍은 사진을 올려도, SN GPT는 학생이 끄적거린 것과 실제 문제를 정확하게 인식하는 차별화된 기술(초지각 모듈)을 적용했다.
- 기존 ChatGPT보다 더 잘 인식하는 것이 SN GPT의 강점이다.

**학습 외 활용 (정보 검색)**
- 학생들이 세계사 연표 정리나 해구 정보 검색 등 학습 관련 정보 검색을 요청하면 AI가 정리해 준다.
- 학원 내에서는 인터넷 검색이 안 되지만, AI를 통해 정보를 얻을 수 있다.

**모니터링 및 윤리**
- 개발자들은 학생들이 AI에게 뭘 찾아보는지 연구용으로 모니터링할 수 있으나, 연구 윤리 때문에 사장(윤 대표)에게도 학생들의 개인 정보가 포함된 특이 사항 외에는 보여주지 않는다.

**AI 산업 전망 및 경쟁사**
- 거품론: 이규원 CTO는 AI 산업이 단기적인 조정은 있을 수 있으나, 앞으로 무궁무진하며 잠재 가치가 분명 그 이상일 것이라고 생각한다.
- 미래 경쟁사: 현재는 ChatGPT가 안정성이 부족하며, 미래에는 이미지, 음성, 프로그래밍 등을 처리하는 멀티모달 AI가 중요해질 것이므로, 구글이 더 두각을 나타낼 것으로 개인적으로 예상한다.

**스나 GPT 이용료**
- 구독 방식: 월 3만 원으로 헤비 유저를 대상으로 한다.
- 충전식 방식: 라이트 유저를 위해 건당 충전식으로 운영할 예정이다.

#### 3.5. AI 이용료 산정 방식 (토큰)

- **API 이용료**: SN독학기숙학원은 구글이나 오픈 AI에 사용량만큼 API 이용료를 지불한다.
- **과금 기준 (토큰)**
  - 쉬운 문제(수능 1번)는 AI가 고민을 짧게 하므로 1원도 안 들지만, 어려운 문제(수능 30번)는 15~20분 추론해야 하므로 1,000원까지 들 수 있다.
  - 과금은 AI가 연산하는 데 필요한 토큰 사용량을 기준으로 한다. 토큰은 AI의 생각 리소스나 에너지 단위로 볼 수 있다.
  - 토큰 사용량은 오픈 AI나 구글 측에서 공개한다.

---

### 4. 마무리

- **콘텐츠 요약**: SN 독학 기숙학원 운영 이야기와 인공지능 개발 이야기가 절반씩 다뤄졌다.
- **최종 목표**: 윤 대표는 기숙학원에서 번 돈으로 인공지능을 개발하고 있으며, 궁극적으로는 SN(기숙학원과 스나 GPT 모두)이 잘되기를 바란다.
- **응원**: SN 독학 기숙학원에서 열심히 공부한 수험생들이 모두 합격하기를 기원하며 마무리되었다.

</div>
</details>

---

### 📚 SNarGPT AI 사용 참고 자료

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
    featured: false,
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
    featuredOrder: 3,
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
    featured: true,
    featuredOrder: 1,
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
    featuredOrder: 2,
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

---

## 📜 원문 + 현대어 해석 (클릭하여 해설 보기)

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>이 몸 삼기실 제 님을 조차 삼기시니,<br>
ᄒᆞᆫᄉᆡᆼ 緣分(연분)이며 하ᄂᆞᆯ 모ᄅᆞᆯ 일이런가.<br>
나 ᄒᆞ나 졈어 닛고 님 ᄒᆞ나 날 괴시니,<br>
이 ᄆᆞ음 이 ᄉᆞ랑 견졸 ᄃᆡ 노여 업다.<br>
平生(평ᄉᆡᆼ)애 願(원)ᄒᆞ요ᄃᆡ ᄒᆞᆫᄃᆡ 녜자 ᄒᆞ얏더니,<br>
늙거야 므ᄉᆞ 일로 외오 두고 글이ᄂᆞᆫ고.<br>
엇그제 님을 뫼셔 廣寒殿(광한뎐)의 올낫더니,<br>
그더ᄃᆡ 엇디ᄒᆞ야 下界(하계)예 ᄂᆞ려오니,<br>
올 적의 비슨 머리 얼킈연디 三年(삼년)이라.<br>
臙脂粉(연지분) 잇ᄂᆡ마ᄂᆞᆫ 눌 위ᄒᆞ야 고이 ᄒᆞᆯ고.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>이 몸 생겼을 때 임을 좇아 생겼으니,<br>
한평생의 연분임을 하늘이 모를 일이던가.<br>
나 하나 젊어 있고 임 하나 날 사랑하시니,<br>
이 마음 이 사랑 견줄 데가 전혀 없다.<br>
평생에 원하오되 함께 지내자 하였더니<br>
늙어서야 무슨 일로 외로이 두고 그리는고.<br>
엊그제 임을 모시고 광한전에 올랐더니<br>
그 동안에 어찌하여 하계에 내려왔느냐.<br>
올 적에 빗은 머리 헝클어진지 삼년이라.<br>
연지분이 있지마는 누구를 위하여 곱게 할꼬.</p>
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>ᄆᆞ음의 ᄆᆡ친 설음 疊疊(텹텹)이 ᄡᅡ여 이셔,<br>
짓ᄂᆞ니 한숨이오 디ᄂᆞ니 눈믈이라.<br>
人生(인ᄉᆡᆼ)은 有限(유ᄒᆞᆫ)ᄒᆞᆫᄃᆡ 시ᄅᆞᆷ도 그지 업다.<br>
無心(무심)ᄒᆞᆫ 歲月(셰월)은 믈 흐ᄅᆞ듯 ᄒᆞᄂᆞᆫ고야.<br>
炎凉(염냥)이 ᄯᅢᄅᆞᆯ 아라 가ᄂᆞᆫ ᄃᆞᆺ 고텨 오니,<br>
듯거니 보거니 늣길 일도 하도 할샤.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>마음에 맺힌 설움이 첩첩이 쌓여 있어<br>
짓는 것이 한숨이고 지는 것이 눈물이라.<br>
인생은 유한한데 시름은 끝이 없다.<br>
무심한 세월은 물 흐르는 듯 하는구나.<br>
더위와 추위가 때를 알아 가는 듯 다시 오니<br>
듣고 보고 느낄 일도 많기도 많구나.</p>
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>東風(동풍)이 건듯 부러 積雪(젹셜)을 헤텨내니,<br>
窓(창) 밧긔 심근 梅花(ᄆᆡ화) 두세 가지 픠여셰라.<br>
ᄀᆞᆺ득 冷淡(ᄂᆡᆼ담)ᄒᆞᆫᄃᆡ 暗香(암향)은 므ᄉᆞ 일고.<br>
黃昏(황혼)의 ᄃᆞᆯ이 조차 벼마ᄐᆡ 빗최니,<br>
늣기ᄂᆞᆫ ᄃᆞᆺ 반기ᄂᆞᆫ ᄃᆞᆺ 님이신가 아니신가.<br>
뎌 梅花(ᄆᆡ화) 것거 내여 님 겨신 ᄃᆡ 보내오져.<br>
님이 너ᄅᆞᆯ 보고 엇더타 너기실고.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>동풍이 건듯 불어 쌓은 눈을 헤쳐 내니,<br>
창밖에 심은 매화 두세 가지 피었구나.<br>
가뜩이나 냉담한데 그윽한 향은 무슨 일인고.<br>
황혼의 달이 쫓아와 베갯머리에 비치니,<br>
흐느끼는 듯 반기는 듯 임이신가 아니신가.<br>
저 매화 꺾어 내어 임 계신 데 보내고 싶구나.<br>
임이 너를 보고 어떻다 여기실꼬.</p>
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>ᄭᅩᆺ 디고 새 닙 나니 綠陰(녹음)이 ᄭᆞᆯ렷ᄂᆞᆫᄃᆡ,<br>
羅幃(나위) 寂寞(젹막)하고, 繡幕(슈막)이 뷔여 잇다.<br>
芙蓉(부용)을 거더 노코 孔雀(공쟉)을 둘러 두니,<br>
ᄀᆞᆺ득 시ᄅᆞᆷ 한ᄃᆡ 날은 엇디 기돗던고.<br>
鴛鴦錦(원앙금) 버혀 노코 五色線(오ᄉᆡᆨ션) 플텨 내여,<br>
금자ᄒᆡ 견화 이셔 님의 옷 지어 내니,<br>
手品(슈품)은ᄏᆞ니와 制度(졔도)도 ᄀᆞᄌᆞᆯ시고,<br>
珊瑚樹(산호슈) 지게 우ᄒᆡ 白玉函(ᄇᆡᆨ옥함)의 다마 두고,<br>
님의게 보내오려 님 겨신 ᄃᆡ ᄇᆞ라보니,<br>
山(산)인가 구롬인가 머흐도 머흘시고.<br>
千里 萬里(쳔리 만리) 길흘 뉘라셔 ᄎᆞ자갈고.<br>
니거든 여러 두고 날인가 반기실가.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>꽃 지고 새 잎 나니 녹음이 깔렸는데,<br>
비단 장장이 적막하고 수놓은 장막이 비어 있다.<br>
연꽃 휘장을 걷어 놓고 공작 병풍을 둘러두니,<br>
가뜩이나 시름 많은데 날은 어찌 길었던고.<br>
원앙 비단을 베어 놓고 오색실 풀어내어<br>
금으로 만든 자로 재어 임의 옷 지어내니,<br>
솜씨는 물론이거니와 격식도 갖추었구나.<br>
보석 지게 위의 백옥함에 담아두고<br>
임에게 보내오려 임 계신 데 바라보니,<br>
산인가 구름인가 험하기도 험하구나.<br>
천리만리 길을 누가 찾아갈꼬.<br>
가거든 열어 두고 나를 본 듯 반기실까.</p>
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>ᄒᆞᄅᆞ밤 서리김의 기려기 우러 녤 제,<br>
危樓(위루)에 혼자 올나 水晶簾(수졍념) 거든 말이,<br>
東山(동산)의 ᄃᆞᆯ이 나고 北極(북극)의 별이 뵈니,<br>
님이신가 반기니 눈믈이 절로 난다.<br>
淸光(쳥광)을 쥐여 내여 鳳凰樓(봉황누)의 븟티고져.<br>
樓(누) 우ᄒᆡ 거러 두고 八荒(팔황)의 다 비최여,<br>
深山窮谷(심산궁곡) 졈낫ᄀᆞ티 ᄆᆡᆼ그쇼서.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>하룻밤 서리 김에 기러기 울며 갈 적에<br>
높은 누각에 혼자 올라 수정발을 걷으니,<br>
동산의 달이 뜨고 북극의 별이 보이니<br>
임이신가 하여 반기니 눈물이 절로 난다.<br>
맑은 빛을 쥐어 내어 궁궐에 부치고 싶다.<br>
누각 위에 걸어두고 온 세상 다 비추어,<br>
깊은 산골에도 대낮같이 만드소서.</p>
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>乾坤(건곤)이 閉塞(폐ᄉᆡᆨ)ᄒᆞ야 白雪(ᄇᆡᆨ셜)이 ᄒᆞᆫ 빗친 제,<br>
사ᄅᆞᆷ은 ᄏᆞ니와 ᄂᆞᆯ새도 긋쳐 잇다.<br>
蕭湘南畔(쇼상남반)도 치오미 이러커든<br>
玉樓高處(옥루고쳐)야 더욱 닐러 므ᄉᆞᆷᄒᆞ리.<br>
陽春(양츈)을 부쳐 내여 님 겨신 ᄃᆡ 쏘이고져.<br>
茅簷(모쳠) 비쵠 ᄒᆡ를 玉樓(옥루)의 올리고져.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>천지가 얼어붙어 막히고 흰 눈이 한 빛깔인 때,<br>
사람은 물론이거니와 날짐승도 그쳐 있다.<br>
소상강 남쪽도 추위가 이렇거든<br>
임 계신 곳이야 더욱 일러 무엇하리.<br>
봄기운을 부쳐 내어 임 계신데 쏘이고자 한다.<br>
띳집 처마에 비친 해를 대궐에 올리고자 한다.</p>
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>紅裳(홍샹)을 니믜 ᄎᆞ고 翠袖(ᄎᆔ슈)를 半(반)만 거더,<br>
日暮脩竹(일모슈듁)의 헴가림도 하도 할샤.<br>
댜ᄅᆞᆫ ᄒᆡ 수이 디여 긴 밤을 고초 안자,<br>
靑燈(쳥등) 거른 겻ᄐᆡ 鈿箜篌(뎐공후) 노하 두고,<br>
ᄭᅮᆷ의나 님을 보려 ᄐᆡᆨ 밧고 비겨시니,<br>
鴦錦(앙금)도 ᄎᆞ도 챨사 이 밤은 언제 샐고.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>붉은 치마를 여며 입고 푸른 소매를 반만 걷어<br>
해 질 무렵 긴 대나무에 헤아림도 많기도 하구나.<br>
짧은 해가 쉬이 지어 긴 밤을 꼿꼿이 앉아,<br>
푸른 등 걸어둔 곁에 전공후 놓아 두고,<br>
꿈에나 임을 보려 턱 받치고 비껴 있으니,<br>
이불이 차기도 차구나, 이 밤은 언제 샐꼬.</p>
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>ᄒᆞᄅᆞ도 열 두 ᄯᅢ ᄒᆞᆫ ᄃᆞᆯ도 셜흔 날,<br>
져근덧 ᄉᆡᆼ각 마라 이 시ᄅᆞᆷ 닛쟈 ᄒᆞ니,<br>
ᄆᆞ음의 ᄆᆡ쳐 이셔 骨髓(골슈)의 ᄭᅦ텨시니,<br>
扁鵲(편쟉)이 열히 오나 이 병을 엇디 ᄒᆞ리.<br>
어와 내 병이야 이 님의 타시로다.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>하루도 열두 때 한 달도 서른 날,<br>
잠깐 동안 생각 말아 이 시름 잊자 하니,<br>
마음에 맺혀 있어 뼛속까지 꿰쳤으니,<br>
편작이 열이 와도 이 병을 어찌하리.<br>
아아, 내 병이야 이 임의 탓이로다.</p>
</div>
</details>

<details class="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-4">
<summary class="cursor-pointer font-semibold text-lg text-gray-900 dark:text-white">
<p>ᄎᆞᆯ하리 싀어디여 범나븨 되오리라.<br>
곳나모 가지마다 간 ᄃᆡ 죡죡 안니다가,<br>
향 므든 날애로 님의 오ᄉᆡ 올므리라.<br>
님이야 날인 줄 모ᄅᆞ샤도 내 님 조ᄎᆞ려 ᄒᆞ노라.</p>
</summary>
<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
<p>차라리 사라져서 범나비 되오리라.<br>
꽃나무 가지마다 간 데 족족 앉았다가,<br>
향기 묻은 날개로 임의 옷에 옮으리라.<br>
임이야 나인 줄 모르셔도 나는 임을 좇으려 하노라.</p>
</div>
</details>

---

## 📜 원문 전체 보기 / 현대어 해석 전체 보기

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="samieungok-original" data-title="사미인곡 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="samieungok-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line font-yethangul">

이 몸 삼기실 제 님을 조차 삼기시니,
ᄒᆞᆫᄉᆡᆼ 緣分(연분)이며 하ᄂᆞᆯ 모ᄅᆞᆯ 일이런가.
나 ᄒᆞ나 졈어 닛고 님 ᄒᆞ나 날 괴시니,
이 ᄆᆞ음 이 ᄉᆞ랑 견졸 ᄃᆡ 노여 업다.
平生(평ᄉᆡᆼ)애 願(원)ᄒᆞ요ᄃᆡ ᄒᆞᆫᄃᆡ 녜자 ᄒᆞ얏더니,
늙거야 므ᄉᆞ 일로 외오 두고 글이ᄂᆞᆫ고.

엇그제 님을 뫼셔 廣寒殿(광한뎐)의 올낫더니,
그더ᄃᆡ 엇디ᄒᆞ야 下界(하계)예 ᄂᆞ려오니,
올 적의 비슨 머리 얼킈연디 三年(삼년)이라.
臙脂粉(연지분) 잇ᄂᆡ마ᄂᆞᆫ 눌 위ᄒᆞ야 고이 ᄒᆞᆯ고.
ᄆᆞ음의 ᄆᆡ친 설음 疊疊(텹텹)이 ᄡᅡ여 이셔,
짓ᄂᆞ니 한숨이오 디ᄂᆞ니 눈믈이라.
人生(인ᄉᆡᆼ)은 有限(유ᄒᆞᆫ)ᄒᆞᆫᄃᆡ 시ᄅᆞᆷ도 그지 업다.
無心(무심)ᄒᆞᆫ 歲月(셰월)은 믈 흐ᄅᆞ듯 ᄒᆞᄂᆞᆫ고야.

炎凉(염냥)이 ᄯᅢᄅᆞᆯ 아라 가ᄂᆞᆫ ᄃᆞᆺ 고텨 오니,
듯거니 보거니 늣길 일도 하도 할샤.
東風(동풍)이 건듯 부러 積雪(젹셜)을 헤텨내니,
窓(창) 밧긔 심근 梅花(ᄆᆡ화) 두세 가지 픠여셰라.
ᄀᆞᆺ득 冷淡(ᄂᆡᆼ담)ᄒᆞᆫᄃᆡ 暗香(암향)은 므ᄉᆞ 일고.
黃昏(황혼)의 ᄃᆞᆯ이 조차 벼마ᄐᆡ 빗최니,
늣기ᄂᆞᆫ ᄃᆞᆺ 반기ᄂᆞᆫ ᄃᆞᆺ 님이신가 아니신가.
뎌 梅花(ᄆᆡ화) 것거 내여 님 겨신 ᄃᆡ 보내오져.
님이 너ᄅᆞᆯ 보고 엇더타 너기실고.

ᄭᅩᆺ 디고 새 닙 나니 綠陰(녹음)이 ᄭᆞᆯ렷ᄂᆞᆫᄃᆡ,
羅幃(나위) 寂寞(젹막)하고, 繡幕(슈막)이 뷔여 잇다.
芙蓉(부용)을 거더 노코 孔雀(공쟉)을 둘러 두니,
ᄀᆞᆺ득 시ᄅᆞᆷ 한ᄃᆡ 날은 엇디 기돗던고.
鴛鴦錦(원앙금) 버혀 노코 五色線(오ᄉᆡᆨ션) 플텨 내여,
금자ᄒᆡ 견화 이셔 님의 옷 지어 내니,
手品(슈품)은ᄏᆞ니와 制度(졔도)도 ᄀᆞᄌᆞᆯ시고,
珊瑚樹(산호슈) 지게 우ᄒᆡ 白玉函(ᄇᆡᆨ옥함)의 다마 두고,
님의게 보내오려 님 겨신 ᄃᆡ ᄇᆞ라보니,
山(산)인가 구롬인가 머흐도 머흘시고.
千里 萬里(쳔리 만리) 길흘 뉘라셔 ᄎᆞ자갈고.
니거든 여러 두고 날인가 반기실가.

ᄒᆞᄅᆞ밤 서리김의 기려기 우러 녤 제,
危樓(위루)에 혼자 올나 水晶簾(수졍념) 거든 말이,
東山(동산)의 ᄃᆞᆯ이 나고 北極(북극)의 별이 뵈니,
님이신가 반기니 눈믈이 절로 난다.
淸光(쳥광)을 쥐여 내여 鳳凰樓(봉황누)의 븟티고져.
樓(누) 우ᄒᆡ 거러 두고 八荒(팔황)의 다 비최여,
深山窮谷(심산궁곡) 졈낫ᄀᆞ티 ᄆᆡᆼ그쇼서.

乾坤(건곤)이 閉塞(폐ᄉᆡᆨ)ᄒᆞ야 白雪(ᄇᆡᆨ셜)이 ᄒᆞᆫ 빗친 제,
사ᄅᆞᆷ은 ᄏᆞ니와 ᄂᆞᆯ새도 긋쳐 잇다.
蕭湘南畔(쇼상남반)도 치오미 이러커든
玉樓高處(옥루고쳐)야 더욱 닐러 므ᄉᆞᆷᄒᆞ리.
陽春(양츈)을 부쳐 내여 님 겨신 ᄃᆡ 쏘이고져.
茅簷(모쳠) 비쵠 ᄒᆡ를 玉樓(옥루)의 올리고져.

紅裳(홍샹)을 니믜 ᄎᆞ고 翠袖(ᄎᆔ슈)를 半(반)만 거더,
日暮脩竹(일모슈듁)의 헴가림도 하도 할샤.
댜ᄅᆞᆫ ᄒᆡ 수이 디여 긴 밤을 고초 안자,
靑燈(쳥등) 거른 겻ᄐᆡ 鈿箜篌(뎐공후) 노하 두고,
ᄭᅮᆷ의나 님을 보려 ᄐᆡᆨ 밧고 비겨시니,
鴦錦(앙금)도 ᄎᆞ도 챨사 이 밤은 언제 샐고.
ᄒᆞᄅᆞ도 열 두 ᄯᅢ ᄒᆞᆫ ᄃᆞᆯ도 셜흔 날,
져근덧 ᄉᆡᆼ각 마라 이 시ᄅᆞᆷ 닛쟈 ᄒᆞ니,
ᄆᆞ음의 ᄆᆡ쳐 이셔 骨髓(골슈)의 ᄭᅦ텨시니,
扁鵲(편쟉)이 열히 오나 이 병을 엇디 ᄒᆞ리.

어와 내 병이야 이 님의 타시로다.
ᄎᆞᆯ하리 싀어디여 범나븨 되오리라.
곳나모 가지마다 간 ᄃᆡ 죡죡 안니다가,
향 므든 날애로 님의 오ᄉᆡ 올므리라.
님이야 날인 줄 모ᄅᆞ샤도 내 님 조ᄎᆞ려 ᄒᆞ노라.

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
📖 현대어 해석 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div data-print-button data-content-id="samieungok-modern" data-title="사미인곡 현대어 해석" data-button-text="현대어 해석 PDF 인쇄"></div>
</div>
<div id="samieungok-modern" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

이 몸 생겼을 때 임을 좇아 생겼으니,
한평생의 연분임을 하늘이 모를 일이던가.
나 하나 젊어 있고 임 하나 날 사랑하시니,
이 마음 이 사랑 견줄 데가 전혀 없다.
평생에 원하오되 함께 지내자 하였더니
늙어서야 무슨 일로 외로이 두고 그리는고.

엇그제 임을 모시고 광한전에 올랐더니
그 동안에 어찌하여 하계에 내려왔느냐.
올 적에 빗은 머리 헝클어진지 삼년이라.
연지분이 있지마는 누구를 위하여 곱게 할꼬.
마음에 맺힌 설움이 첩첩이 쌓여 있어
짓는 것이 한숨이고 지는 것이 눈물이라.
인생은 유한한데 시름은 끝이 없다.
무심한 세월은 물 흐르는 듯 하는구나.

더위와 추위가 때를 알아 가는 듯 다시 오니
듣고 보고 느낄 일도 많기도 많구나.
동풍이 건듯 불어 쌓은 눈을 헤쳐 내니,
창밖에 심은 매화 두세 가지 피었구나.
가뜩이나 냉담한데 그윽한 향은 무슨 일인고.
황혼의 달이 쫓아와 베갯머리에 비치니,
흐느끼는 듯 반기는 듯 임이신가 아니신가.
저 매화 꺾어 내어 임 계신 데 보내고 싶구나.
임이 너를 보고 어떻다 여기실꼬.

꽃 지고 새 잎 나니 녹음이 깔렸는데,
비단 장장이 적막하고 수놓은 장막이 비어 있다.
연꽃 휘장을 걷어 놓고 공작 병풍을 둘러두니,
가뜩이나 시름 많은데 날은 어찌 길었던고.
원앙 비단을 베어 놓고 오색실 풀어내어
금으로 만든 자로 재어 임의 옷 지어내니,
솜씨는 물론이거니와 격식도 갖추었구나.
보석 지게 위의 백옥함에 담아두고
임에게 보내오려 임 계신 데 바라보니,
산인가 구름인가 험하기도 험하구나.
천리만리 길을 누가 찾아갈꼬.
가거든 열어 두고 나를 본 듯 반기실까.

하룻밤 서리 김에 기러기 울며 갈 적에
높은 누각에 혼자 올라 수정발을 걷으니,
동산의 달이 뜨고 북극의 별이 보이니
임이신가 하여 반기니 눈물이 절로 난다.
맑은 빛을 쥐어 내어 궁궐에 부치고 싶다.
누각 위에 걸어두고 온 세상 다 비추어,
깊은 산골에도 대낮같이 만드소서.

천지가 얼어붙어 막히고 흰 눈이 한 빛깔인 때,
사람은 물론이거니와 날짐승도 그쳐 있다.
소상강 남쪽도 추위가 이렇거든
임 계신 곳이야 더욱 일러 무엇하리.
봄기운을 부쳐 내어 임 계신데 쏘이고자 한다.
띳집 처마에 비친 해를 대궐에 올리고자 한다.

붉은 치마를 여며 입고 푸른 소매를 반만 걷어
해 질 무렵 긴 대나무에 헤아림도 많기도 하구나.
짧은 해가 쉬이 지어 긴 밤을 꼿꼿이 앉아,
푸른 등 걸어둔 곁에 전공후 놓아 두고,
꿈에나 임을 보려 턱 받치고 비껴 있으니,
이불이 차기도 차구나, 이 밤은 언제 샐꼬.
하루도 열두 때 한 달도 서른 날,
잠깐 동안 생각 말아 이 시름 잊자 하니,
마음에 맺혀 있어 뼛속까지 꿰쳤으니,
편작이 열이 와도 이 병을 어찌하리.

아아, 내 병이야 이 임의 탓이로다.
차라리 사라져서 범나비 되오리라.
꽃나무 가지마다 간 데 족족 앉았다가,
향기 묻은 날개로 임의 옷에 옮으리라.
임이야 나인 줄 모르셔도 나는 임을 좇으려 하노라.

</div>
</details>

---

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

---

## 📍 타임스탬프

### 🎬 인트로

- 00:00 인트로, 작품 배경

### 📜 서사 (출발~금강산 도착 전)

- 00:52 죽림
- 01:06 연추문, 이동(평구~치악산)
- 01:24 소양강
- 01:38 철원, 태봉국 궁궐터
- 01:56 회양

### 🏔️ 본사1 - 금강산

- 02:08 회양
- 02:23 만폭동
- 02:38 금강대
- 02:55 진헐대
- 03:44 개심대
- 04:04 비로봉
- 04:43 화룡소
- 05:08 불정대

### 🌊 본사2 - 동해 팔경

- 05:40 산영루
- 06:18 총석정
- 06:35 삼일포
- 06:59 의상대
- 07:42 경포대
- 08:20 강릉
- 08:40 죽서루
- 09:07 망양정 (결사)

---

## 📚 원문 + 현대어 동시 보기

<p class="text-sm text-gray-600 dark:text-gray-400 mb-4">원문은 항상 표시되며, 아래 흐릿한 현대어 해석 부분을 클릭하면 내용이 나타납니다.</p>

<div class="space-y-4">

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">江강湖호애 病병이 깁퍼 竹듁林림의 누엇더니,<br/>關관東동八팔百ᄇᆡᆨ 里니에 方방面면을 맛디시니,<br/>어와 聖셩恩은이야 가디록 罔망極극ᄒᆞ다</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
자연을 사랑하는 병이 깊어 대나무숲에 누웠더니<br/>팔백 리나 되는 강원도 관찰사를 맡기시니<br/>아아, 임금의 은혜야말로 갈수록 망극하다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">延연秋츄門문 드리ᄃᆞ라 慶경會회南남門문 ᄇᆞ라보며,<br/>下하直직고 믈너나니 玉옥節졀이 알ᄑᆡ 셧다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
영추문으로 달려들어 경회루의 남문을 바라보며,<br/>하직하고 물러나니 옥대나무가 앞에 섰다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">平평丘구驛역 ᄆᆞᆯ을 ᄀᆞ라 黑흑水슈로 도라드니,<br/>蟾셤江강은 어듸메오, 雉티岳악이 여긔로다.<br/>昭쇼陽양江강 ᄂᆞ린 믈이 어드러로 든단 말고.<br/>孤고臣신 去거國국에 白ᄇᆡᆨ髮발도 하도 할샤.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
평구역에서 말을 갈아 타고 흑수로 돌아 드니,<br/>섬강이 어디인가 치악산이 여기로다.<br/>소양강에 내리는 물이 어디로 든다는 말인가?<br/>한양을 떠난 외로운 신하는 흰 머리만 늘어가는구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">東동州ᄌᆔ 밤 계오 새와 北븍寬관亭뎡의 올나ᄒᆞ니,<br/>三삼角각山산 第뎨一일峯봉이 ᄒᆞ마면 뵈리로다.<br/>弓궁王왕 大대闕궐 터희 烏오鵲쟉이 지지괴니,<br/>千쳔古고 興흥亡망을 아ᄂᆞᆫ다, 몰ᄋᆞᄂᆞᆫ다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
철원에서 밤을 겨우 새워 북관정에 올라가니,<br/>삼각산 제일 높은 봉우리가 보일 것만 같구나.<br/>궁예왕의 대궐터에서 까막까치가 지저귀니,<br/>나라의 흥망을 아는가, 모르는가?
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">淮회陽양 녜 일홈이 마초아 ᄀᆞᄐᆞᆯ시고.<br/>汲급長댱孺유 風풍彩ᄎᆡ를 고텨 아니 볼 게이고.<br/>營영中듕이 無무事ᄉᆞᄒᆞ고 時시節졀이 三삼月월인 제,<br/>花화川쳔 시내길히 風풍岳악으로 버더 잇다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
옛날 회양 땅과 이곳의 이름이 마침 같으니,<br/>급장유의 풍채를 이 곳에서 다시 볼 것인가.<br/>관내가 무사하고 호시절이 삼월인 때,<br/>화천 시내길은 풍악으로 뻗어 있다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">行ᄒᆡᆼ裝장을 다 ᄯᅥᆯ티고 石셕逕경의 막대 디퍼,<br/>百ᄇᆡᆨ川쳔洞동 겨ᄐᆡ 두고 萬만瀑폭洞동 드러가니,<br/>銀은 ᄀᆞᄐᆞᆫ 무지개, 玉옥 ᄀᆞᄐᆞᆫ 龍룡의 초리,<br/>섯돌며 ᄲᅮᆷᄂᆞᆫ 소ᄅᆡ 十십里리의 ᄌᆞ자시니,<br/>들을 제ᄂᆞᆫ 우레러니 보니ᄂᆞᆫ 눈이로다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
행장을 다 꾸리고 좁은 산길에 막대를 짚어,<br/>백천동을 곁에 두고 만폭동 계곡에 들어가니,<br/>은 같은 무지개, 옥 같은 용의 꼬리가<br/>섞여 돌며 뿜는 소리가 십 리 밖까지 퍼졌으니,<br/>들을 때에는 우레 같더니, 가까이서 보니 눈이로다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">金금剛강臺ᄃᆡ ᄆᆡᆫ 우層층의 仙션鶴학이 삿기 치니,<br/>春츈風풍 玉옥笛뎍聲셩의 첫ᄌᆞᆷ을 ᄭᆡ돗던디,<br/>縞호衣의玄현裳샹이 半반空공의 소소 ᄯᅳ니,<br/>西셔湖호 녯 主쥬人인을 반겨셔 넘노ᄂᆞᆫ ᄃᆞᆺ.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
금강대 맨 위층에 학이 새끼를 치니,<br/>옥피리 소리 같은 봄바람에 선잠을 깨었던지,<br/>흰 저고리, 검은 치마를 입은 듯한 학이 공중에 솟아 뜨니,<br/>서호의 옛 주인을 반겨서 노는 듯하구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">小쇼香향爐노 大대香향爐노 눈 아래 구버보고,<br/>正졍陽양寺ᄉᆞ 眞진歇헐臺ᄃᆡ 고텨 올나 안ᄌᆞᆫ마리,<br/>廬녀山산 眞진面면目목이 여긔야 다 뵈ᄂᆞ다.<br/>어와, 造조化화翁옹이 헌ᄉᆞ토 헌ᄉᆞ할샤.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
소향로봉, 대향로봉을 눈 아래 굽어보고,<br/>정양사 진헐대에 다시 올라 앉으니,<br/>여산과 같은 참모습이 여기에서 다 보이는 듯하다.<br/>아아, 조물주의 재주가 대단하구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">ᄂᆞᆯ거든 ᄯᅱ디 마나, 셧거든 솟디 마나.<br/>芙부蓉용을 고잣ᄂᆞᆫ ᄃᆞᆺ, 白ᄇᆡᆨ玉옥을 믓것ᄂᆞᆫ ᄃᆞᆺ,<br/>東동溟명을 박ᄎᆞᄂᆞᆫ ᄃᆞᆺ, 北북極극을 괴왓ᄂᆞᆫ ᄃᆞᆺ.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
날려거든 뛰지 말거나 서려거든 솟지 말거나 할 것이지,<br/>연꽃을 꽂아놓은 듯, 백옥을 묶어 놓은 듯,<br/>동해를 박차고 나오는 듯, 북극을 괴고 있는 듯하다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">놉흘시고 望망高고臺ᄃᆡ, 외로올샤 穴혈望망峰봉이<br/>하ᄂᆞᆯ의 추미러 무ᄉᆞ 일을 ᄉᆞ로리라<br/>千쳔萬만劫겁 디나ᄃᆞ록 구필 줄 모ᄅᆞᄂᆞᆫ다.<br/>어와 너여이고, 너 ᄀᆞᄐᆞ니 ᄯᅩ 잇ᄂᆞᆫ가.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
높이 솟은 망고대, 외로워 보이는 혈망봉은<br/>하늘에 치밀어 무슨 일을 사뢰려고<br/>수많은 세월이 지나도록 굽힐 줄을 모르는가?<br/>아아, 너로구나. 너 같은 이 또 있겠는가?
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">開ᄀᆡ心심臺ᄃᆡ 고텨 올나 衆듕香향城셩 ᄇᆞ라보며,<br/>萬만二이千쳔峯봉을 歷녁歷녁히 혀여ᄒᆞ니<br/>峰봉마다 ᄆᆡᆺ쳐 잇고 긋마다 서린 긔운,<br/>ᄆᆞᆰ거든 조티 마나, 조커든 ᄆᆞᆰ디 마나.<br/>뎌 긔운 흐터 내야 人인傑걸을 ᄆᆞᆫᄃᆞᆯ고쟈.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
개심대에 다시 올라 중향성 봉우리를 바라보며,<br/>만 이천 봉을 똑똑히 헤아리니,<br/>봉마다 맺혀 있고 끝마다 서린 기운,<br/>맑거든 깨끗하지나, 깨끗하거든 맑지나 말 것이지,<br/>저 기운을 흩어 내어 인재를 만들고 싶구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">形형容용도 그지업고 體톄勢세도 하도 할샤.<br/>天텬地디 삼기실 제 自ᄌᆞ然연이 되연마ᄂᆞᆫ,<br/>이제 와 보게 되니 有유情졍도 有유情졍ᄒᆞᆯ샤.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
(산봉우리의) 형상도 끝이 없고 자세도 많기도 하구나.<br/>천지가 생겼을 때에 자연히 되었건마는,<br/>이제 와서 보게 되니 조물주의 뜻이 깃들어 있구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">毗비盧노峰봉 上샹上샹頭두의 올나 보니 긔 뉘신고.<br/>東동山산 泰태山산이 어ᄂᆞ야 놉돗던고.<br/>魯노國국 조븐 줄도 우리ᄂᆞᆫ 모ᄅᆞ거든,<br/>넙거나 넙은 天텬下하 엇ᄯᅵᄒᆞ야 적닷 말고.<br/>어와, 뎌 디위ᄅᆞᆯ 어이ᄒᆞ면 알 거이고.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
비로봉 정상에 올라 본 이가 그 누구인가?<br/>동산과 태산 어느 것이 더 높단 말인가?<br/>노나라가 좁은 줄도 우리는 모르거든,<br/>넓고 넓은 천하를 어찌하여 작다고 했단 말인가?<br/>아아, 저 정신적 경지를 어찌하면 알 것인가?
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">오ᄅᆞ디 못ᄒᆞ거니 ᄂᆞ려가미 고이ᄒᆞᆯ가.<br/>圓원通통골 ᄀᆞᄂᆞᆫ 길로 獅ᄉᆞ子ᄌᆞ峰봉을 ᄎᆞ자가니,<br/>그 알ᄑᆡ 너러바회 化화龍룡쇠 되어셰라.<br/>千쳔年년 老노龍룡이 구ᄇᆡ구ᄇᆡ 서려 이셔,<br/>晝듀夜야의 흘녀 내여 滄창海ᄒᆡ예 니어시니,<br/>風풍雲운을 언제 어더 三삼日일雨우ᄅᆞᆯ 디련ᄂᆞᆫ다.<br/>陰음崖애예 이온 플을 다 살와 내여ᄉᆞ라.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
오르지 못하거니, 내려가는 것이 괴이할까?<br/>원통골의 가느다란 길로 사자봉을 찾아가니,<br/>그 앞의 넓은 바위가 화룡소가 되었어라.<br/>천 년 묵은 늙은 용이 굽이굽이 서려 있어,<br/>밤낮으로 흘러내려 넓은 바다에 이었으니,<br/>비구름을 언제 얻어 흡족한 비를 내리려는가?<br/>그늘진 벼랑에 시든 풀을 다 살려 내려무나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">磨마訶하衍연 妙묘吉길祥샹 雁안門문재 너머 디여,<br/>외나모 ᄡᅥ근 ᄃᆞ리 佛불頂뎡臺ᄃᆡ,, 올라ᄒᆞ니,<br/>千쳔尋심絶졀壁벽을 半반空공애 셰여 두고,<br/>銀은河하水슈 한 구ᄇᆡᄅᆞᆯ 촌촌이 버혀 내여,<br/>실ᄀᆞ티 플텨이셔 뵈ᄀᆞ티 거러시니,<br/>圖도經경 열두 구ᄇᆡ, 내 보매ᄂᆞᆫ 여러히라.<br/>李니謫뎍仙션 이제 이셔 고텨 의논ᄒᆞ게 되면,<br/>廬녀山산이 여긔도곤 낫단 말 못 ᄒᆞ려니.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
마하연, 묘길상, 안문재를 넘어 내려가<br/>썩은 외나무다리를 건너 불정대에 올라가니,<br/>천 길 절벽을 하늘 가운데 세워 두고,<br/>은하수 큰 굽이를 마디마디 베어내어<br/>실처럼 풀어내서 베처럼 걸었으니,<br/>도경에서는 열두 굽이지만, 내가 보기에는 더 여럿이라.<br/>이태백이 이제 있어 다시 의논하게 되면,<br/>여산 폭포가 여기보다 낫다는 말은 못 할 것이다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">山산中듕을 ᄆᆡ양 보랴, 東동海ᄒᆡ로 가쟈ᄉᆞ라.<br/>藍남輿여 緩완步보ᄒᆞ야 山산映영樓누의 올나ᄒᆞ니,<br/>玲녕瓏농 碧벽溪계와 數수聲셩啼뎌鳥됴ᄂᆞᆫ 離니別별을 怨원ᄒᆞᄂᆞᆫ ᄃᆞᆺ,<br/>旌졍旗기를 ᄯᅥᆯ티니 五오色색이 넘노ᄂᆞᆫ ᄃᆞᆺ,<br/>鼓고角각을 섯부니 海ᄒᆡ雲운이 다 것ᄂᆞᆫ ᄃᆞᆺ.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
산중 경치만 보겠는가? 동해로 가자꾸나.<br/>가마를 타고 천천히 걸어 산영루에 올라가니,<br/>영롱한 푸른 시냇물과 여러 소리로 우는 산새는 이별을 원망하는 듯하고,<br/>깃발을 휘날리니 오색 빛깔 넘노는 듯하고,<br/>북과 피리를 섞어 부니 바닷구름이 다 걷히는 듯하다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">鳴명沙사길 니근 ᄆᆞᆯ이 醉취仙션을 빗기 시러,<br/>바다ᄒᆞᆯ 겻ᄐᆡ 두고 海ᄒᆡ棠당花화로 드러가니,<br/>白ᄇᆡᆨ鷗구야 ᄂᆞ디 마라, 네 버딘 줄 엇디 아ᄂᆞᆫ.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
백사장 길에 익숙한 말이 취한 신선을 비스듬히 실어,<br/>바다를 곁에 두고 해당화 꽃밭으로 들어가니,<br/>갈매기야 날지 말라, 내 너의 벗인 줄을 어찌 아느냐?
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">金금蘭난窟굴 도라드러 叢총石셕亭뎡 올나ᄒᆞ니,<br/>白ᄇᆡᆨ玉옥樓루 남은 기동 다만 네히 셔 잇고야.<br/>工공垂슈의 셩녕인가, 鬼귀斧부로 다ᄃᆞᄆᆞᆫ가.<br/>구ᄐᆞ야 六뉵面면은 므어슬 象샹톳던고.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
금난굴을 돌아들어서 통천 총석정에 올라가니,<br/>백옥루의 남은 기둥, 다만 넷이 서 있구나.<br/>공수의 작품인가? 귀신의 도끼로 다듬었는가?<br/>구태여 육면 돌기둥은 무엇을 본떴는가?
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">高고城셩을란 뎌만 두고 三삼日일浦포랄 ᄎᆞ자가니,<br/>丹단書셔ᄂᆞᆫ 宛완然연ᄒᆞ되 四ᄉᆞ仙션은 어ᄃᆡ 가니,<br/>예 사흘 머믄 後후의 어ᄃᆡ 가 ᄯᅩ 머믈고.<br/>仙션遊유潭담 永영郞낭湖호 거긔나 가 잇ᄂᆞᆫ가.<br/>淸쳥澗간亭뎡 萬만景경臺ᄃᆡ 몃 고ᄃᆡ 안돗던고.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
고성을 저만큼 두고 삼일포를 찾아가니,<br/>붉은 글씨는 뚜렷한데, 사선은 어디로 갔는가?<br/>여기서 사흘을 머무른 후에 어디 가서 또 머물렀는가?<br/>선유담, 영랑호는 거기에 가 있는가?<br/>청간정, 만경대 등 몇 군데에 앉았던가?
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">梨니花화ᄂᆞᆫ ᄇᆞᆯ셔 디고 졉동새 슬피 울 제,<br/>洛낙山산 東동畔반으로 義의相샹臺ᄃᆡ예 올라 안자,<br/>日일出출을 보리라 밤듕만 니러ᄒᆞ니,<br/>祥샹雲운이 집픠ᄂᆞᆫ 동, 六뉵龍뇽이 바퇴ᄂᆞᆫ 동,<br/>바다ᄒᆡ ᄯᅥ날 제ᄂᆞᆫ 萬만國국이 일위더니,<br/>天텬中듕의 티ᄯᅳ니 毫호髮발을 혜리로다.<br/>아마도 녈구름 근쳐의 머믈셰라.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
배꽃은 벌써 지고 소쩍새가 슬피 울 때,<br/>낙산사 동쪽 길 따라 의상대에 올라 앉아,<br/>일출을 보려고 한밤중쯤 일어나니,<br/>상서로운 구름이 지피는 듯, 여섯 용이 떠받치는 듯,<br/>(해가) 바다를 떠날 때에는 온 세상이 일 듯하더니,<br/>하늘에 치솟아 뜨니 터럭도 셀 수 있도다.<br/>행여나 지나가는 구름 근처에 머물까 두렵도다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">詩시仙션은 어ᄃᆡ 가고 咳ᄒᆞ唾타만 나맛ᄂᆞ니,<br/>天텬地디間간 壯장ᄒᆞᆫ 긔별 ᄌᆞ셔히도 ᄒᆞᆯ셔이고.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
시의 신선은 어디가고 침 튀긴 것만 남았느냐?<br/>천지간 굉장한 소식이 자세히도 되었구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">斜샤陽양 峴현山산의 躑텩躅튝을 므니ᄇᆞᆯ와<br/>羽우蓋개芝지輪륜이 鏡경浦포로 ᄂᆞ려가니,<br/>十십里리 氷빙紈완을 다리고 고텨 다려,<br/>長댱松숑 울흔 소개 슬ᄏᆞ장 펴뎌시니,<br/>믈결도 자도 잘샤 모래ᄅᆞᆯ 혜리로다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
저녁놀 비껴드는 현산의 철쭉꽃을 이어 밟아<br/>신선이 타는 수레를 타고 경포로 내려가니,<br/>10리의 흰 비단을 다리고 다시 다려,<br/>큰 소나무 숲 속에 실컷 펼쳐졌으니,<br/>물결이 잔잔하여 모래알까지도 헤아리로다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">孤고舟쥬 解ᄒᆡ纜람ᄒᆞ야 亭뎡子ᄌᆞ 우ᄒᆡ 올나가니,<br/>江강門문橋교 너믄 겨ᄐᆡ 大대洋양이 거긔로다.<br/>從둉容용ᄒᆞᆫ댜 이 氣긔象샹, 闊활遠원ᄒᆞᆫ댜 뎌 境경界계,<br/>이도곤 ᄀᆞᄌᆞᆫ ᄃᆡ ᄯᅩ 어듸 잇단 말고.<br/>紅홍粧장 古고事ᄉᆞᄅᆞᆯ 헌ᄉᆞ타 ᄒᆞ리로다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
한 척의 배를 띄워 정자 위에 올라가니,<br/>강문교 넘은 곁에 대양이 거기로다.<br/>조용하구나, 이 기상. 광활하구나, 저 경계.<br/>이 경치 갖춘 데가 또 어디에 있단 말인가?<br/>박신과 홍장의 사랑이 야단스럽다 하리로다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">江강陵능 大대都도護호 風풍俗쇽이 됴흘시고,<br/>節졀孝효旌졍門문이 골골이 버러시니,<br/>比비屋옥可가封봉이 이제도 잇다 ᄒᆞᆯ다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
강릉 대도호부의 풍속이 좋구나.<br/>절효정문이 고을마다 널렸으니,<br/>집집마다 벼슬 받을 만한 일이 이제도 있다 하리라.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">眞진珠쥬館관 竹듁西셔樓루 五오十십川쳔 ᄂᆞ린 믈이<br/>太태白ᄇᆡᆨ山산 그림재ᄅᆞᆯ 東동海ᄒᆡ로 다마 가니,<br/>ᄎᆞᆯ하리 漢한江강의 木목覓멱의 다히고져.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
진주관 죽서루 아래 오십천에 내리는 물이<br/>태백산 그림자를 동해로 담아 가니,<br/>차라리 한강으로 돌려 남산에 대고 싶도다.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">王왕程뎡이 有유限ᄒᆞᆫᄒᆞ고 風풍景경이 못 슬믜니,<br/>幽유懷회도 하도 할샤, 客ᄀᆡᆨ愁수도 둘 듸 업다.<br/>仙션사ᄉᆞᄅᆞᆯ ᄯᅴ워 내여 斗두牛우로 向향ᄒᆞ살가,<br/>仙션人인을 ᄎᆞᄌᆞ려 丹단穴혈의 머므살가.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
관리의 여정은 유한하고, 풍경은 싫지 않으니,<br/>회포가 많기도 많구나. 나그네의 시름도 달랠 길이 없구나.<br/>신선의 뗏목을 띄워내여 북두성, 견우성으로 갈까,<br/>신선을 찾으러 단혈에 머물러 살까?
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">天텬根근을 못내 보와 望망洋양亭뎡의 올은 말이,<br/>바다 밧근 하ᄂᆞᆯ이니 하ᄂᆞᆯ 밧근 무서신고.<br/>ᄀᆞᆺ득 노ᄒᆞᆫ 고래, 뉘라셔 놀내관ᄃᆡ,<br/>블거니 ᄲᅳᆷ거니 어즈러이 구ᄂᆞᆫ디고.<br/>銀은山산을 것거 내여 六뉵合합의 ᄂᆞ리ᄂᆞᆫ ᄃᆞᆺ,<br/>五오月월 長댱天텬의 白ᄇᆡᆨ雪셜은 므ᄉᆞ 일고.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
하늘의 끝을 내내 못 보아 망양정에 오르니,<br/>바다 밖은 하늘이니, 하늘 밖은 무엇인가?<br/>가뜩 성난 고래를 누가 놀라게 하기에,<br/>(물을) 불거니 뿜거니 어지럽게 구는 것인가?<br/>은산을 꺾어내어 온 세상에 내리는 듯,<br/>오월의 드높은 하늘에 백설은 무슨 일인가?
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">져근덧 밤이 드러 風풍浪낭이 定뎡ᄒᆞ거ᄂᆞᆯ,<br/>扶부桑상 咫지尺쳑의 明명月월을 기ᄃᆞ리니,<br/>瑞셔光광 千쳔丈댱이 뵈ᄂᆞᆫ ᄃᆞᆺ 숨ᄂᆞᆫ고야.<br/>珠쥬簾렴을 고텨 것고, 玉옥階계ᄅᆞᆯ 다시 쓸며,<br/>啓계明명星셩 돗도록 곳초 안자 ᄇᆞ라보니,<br/>白ᄇᆡᆨ蓮련花화 ᄒᆞᆫ 가지ᄅᆞᆯ 뉘라셔 보내신고.<br/>일이 됴흔 世세界계 ᄂᆞᆷ대되 다 뵈고져.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
잠깐 사이에 밤이 되어 풍랑이 가라앉거늘,<br/>해 뜨는 곳 가까이서 밝은 달을 기다리니,<br/>상서로운 달빛이 보이는 듯 숨는구나.<br/>구슬 발을 다시 걷고, 섬돌 층계를 다시 쓸며,<br/>샛별이 돋아 오를 때까지 곧바로 앉아서 바라 보니,<br/>흰 연꽃 한 가지를 누가 보내셨는가?<br/>이리 좋은 세계를 남들에게 다 보이고 싶구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">流뉴霞하酒쥬 ᄀᆞ득 부어 ᄃᆞᆯᄃᆞ려 무론 말이,<br/>英영雄웅은 어ᄃᆡ 가며, 四ᄉᆞ仙션은 긔 뉘러니,<br/>아ᄆᆡ나 맛나 보아 녯 긔별 뭇쟈 ᄒᆞ니,<br/>仙션山산 東동海ᄒᆡ예 갈 길히 머도 멀샤.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
신선주를 가득 부어 달더러 묻는 말이,<br/>'영웅은 어디 갔으며, 사선은 그 누구인가.'<br/>아무나 만나 보아 옛 소식을 묻고자 하니,<br/>선산이 있는 동해로 가는 길이 멀기도 멀구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">松숑根근을 볘여 누어 픗ᄌᆞᆷ을 얼픗 드니,<br/>ᄭᅮᆷ애 ᄒᆞᆫ 사ᄅᆞᆷ이 날ᄃᆞ려 닐온 말이,<br/>그ᄃᆡᄅᆞᆯ 내 모ᄅᆞ랴, 上샹界계예 眞진仙션이라.<br/>黃황庭뎡經경 一일字ᄌᆞᄅᆞᆯ 엇디 그ᄅᆞᆺ 닐거 두고,<br/>人인間간의 내려와셔 우리ᄅᆞᆯ ᄯᆞᆯ오ᄂᆞᆫ다.<br/>져근덧 가디 마오 이 술 ᄒᆞᆫ 잔 머거 보오.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
소나무 뿌리를 베어 누워 선잠이 얼핏 드니,<br/>꿈에서 한 사람이 날더러 이르는 말이,<br/>"그대를 내가 모르랴? 그대는 하늘나라의 신선이라.<br/>황정경 한 글자를 어찌 잘못 읽어 두고,<br/>인간 세상에 내려와서 우리를 따르는가?<br/>잠깐만 가지 마오. 이 술 한 잔 마셔 보오."
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">北븍斗두星셩 기우려 滄챵海ᄒᆡ水슈 부어 내여<br/>저 먹고 날 머겨ᄂᆞᆯ 서너 잔 거후로니,<br/>和화風풍이 習습習습ᄒᆞ야 兩냥腋ᄋᆡᆨ을 추혀 드니,<br/>九구萬만里리 長댱空공애 져기면 ᄂᆞᆯ리로다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
북두칠성 기울여 동해 바닷물을 부어 내여,<br/>저 한 잔 먹고 날 먹이거늘, 서너 잔 기울이니,<br/>봄바람이 산들산들하여 두 겨드랑이를 추켜드니,<br/>구만 리 하늘을 날 수 있을 것만 같구나.
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">이 술 가져다가 四ᄉᆞ海ᄒᆡ예 고로 ᄂᆞᆫ화,<br/>億억萬만 蒼창生ᄉᆡᆼ을 다 醉ᄎᆔ케 ᄆᆡᆼ근 후의,<br/>그제야 고텨 맛나 ᄯᅩ ᄒᆞᆫ 잔 ᄒᆞ쟛고야.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
"이 술 가져다가 온 세상에 고루 나누어,<br/>억만 백성을 다 취케 만든 후에<br/>그제야 다시 만나 또 한 잔 하자꾸나."
</div>
</details>

<details class="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
<summary class="list-none cursor-default p-4 [&::-webkit-details-marker]:hidden">
<p class="text-lg font-medium text-gray-900 dark:text-white leading-relaxed">말 디쟈 鶴학을 ᄐᆞ고 九구空공의 올나가니,<br/>空공中듕 玉옥簫쇼 소ᄅᆡ 어제런가 그제런가.<br/>나도 ᄌᆞᆷ을 ᄭᆡ여 바다ᄒᆞᆯ 구버보니,<br/>기픠ᄅᆞᆯ 모ᄅᆞ거니 ᄀᆞ인들 엇디 알리.<br/>明명月월이 千쳔山산萬만落낙의 아니 비쵠 ᄃᆡ 업다.</p>
</summary>
<div class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
말이 끝나자 (신선은) 학을 타고 아득한 하늘로 올라가니,<br/>공중에서 들려오는 옥피리 소리가 어제던가 그제던가.<br/>나도 잠을 깨어 바다를 굽어보니,<br/>깊이를 모르거니, 끝인들 어찌 알리?<br/>밝은 달이 온 세상에 아니 비추이는 데 없다.
</div>
</details>

</div>

---

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="gwandong-original" data-title="관동별곡 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="gwandong-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

江강湖호애 病병이 깁퍼 竹듁林림의 누엇더니,
關관東동八팔百ᄇᆡᆨ 里니에 方방面면을 맛디시니,
어와 聖셩恩은이야 가디록 罔망極극ᄒᆞ다

延연秋츄門문 드리ᄃᆞ라 慶경會회南남門문 ᄇᆞ라보며,
下하直직고 믈너나니 玉옥節졀이 알ᄑᆡ 셧다.

平평丘구驛역 ᄆᆞᆯ을 ᄀᆞ라 黑흑水슈로 도라드니,
蟾셤江강은 어듸메오, 雉티岳악이 여긔로다.
昭쇼陽양江강 ᄂᆞ린 믈이 어드러로 든단 말고.
孤고臣신 去거國국에 白ᄇᆡᆨ髮발도 하도 할샤.

東동州ᄌᆔ 밤 계오 새와 北븍寬관亭뎡의 올나ᄒᆞ니,
三삼角각山산 第뎨一일峯봉이 ᄒᆞ마면 뵈리로다.
弓궁王왕 大대闕궐 터희 烏오鵲쟉이 지지괴니,
千쳔古고 興흥亡망을 아ᄂᆞᆫ다, 몰ᄋᆞᄂᆞᆫ다.

淮회陽양 녜 일홈이 마초아 ᄀᆞᄐᆞᆯ시고.
汲급長댱孺유 風풍彩ᄎᆡ를 고텨 아니 볼 게이고.
營영中듕이 無무事ᄉᆞᄒᆞ고 時시節졀이 三삼月월인 제,
花화川쳔 시내길히 風풍岳악으로 버더 잇다.

行ᄒᆡᆼ裝장을 다 ᄯᅥᆯ티고 石셕逕경의 막대 디퍼,
百ᄇᆡᆨ川쳔洞동 겨ᄐᆡ 두고 萬만瀑폭洞동 드러가니,
銀은 ᄀᆞᄐᆞᆫ 무지개, 玉옥 ᄀᆞᄐᆞᆫ 龍룡의 초리,
섯돌며 ᄲᅮᆷᄂᆞᆫ 소ᄅᆡ 十십里리의 ᄌᆞ자시니,
들을 제ᄂᆞᆫ 우레러니 보니ᄂᆞᆫ 눈이로다.

金금剛강臺ᄃᆡ ᄆᆡᆫ 우層층의 仙션鶴학이 삿기 치니,
春츈風풍 玉옥笛뎍聲셩의 첫ᄌᆞᆷ을 ᄭᆡ돗던디,
縞호衣의玄현裳샹이 半반空공의 소소 ᄯᅳ니,
西셔湖호 녯 主쥬人인을 반겨셔 넘노ᄂᆞᆫ ᄃᆞᆺ.

小쇼香향爐노 大대香향爐노 눈 아래 구버보고,
正졍陽양寺ᄉᆞ 眞진歇헐臺ᄃᆡ 고텨 올나 안ᄌᆞᆫ마리,
廬녀山산 眞진面면目목이 여긔야 다 뵈ᄂᆞ다.
어와, 造조化화翁옹이 헌ᄉᆞ토 헌ᄉᆞ할샤.

ᄂᆞᆯ거든 ᄯᅱ디 마나, 셧거든 솟디 마나.
芙부蓉용을 고잣ᄂᆞᆫ ᄃᆞᆺ, 白ᄇᆡᆨ玉옥을 믓것ᄂᆞᆫ ᄃᆞᆺ,
東동溟명을 박ᄎᆞᄂᆞᆫ ᄃᆞᆺ, 北북極극을 괴왓ᄂᆞᆫ ᄃᆞᆺ.

놉흘시고 望망高고臺ᄃᆡ, 외로올샤 穴혈望망峰봉이
하ᄂᆞᆯ의 추미러 무ᄉᆞ 일을 ᄉᆞ로리라
千쳔萬만劫겁 디나ᄃᆞ록 구필 줄 모ᄅᆞᄂᆞᆫ다.
어와 너여이고, 너 ᄀᆞᄐᆞ니 ᄯᅩ 잇ᄂᆞᆫ가.

開ᄀᆡ心심臺ᄃᆡ 고텨 올나 衆듕香향城셩 ᄇᆞ라보며,
萬만二이千쳔峯봉을 歷녁歷녁히 혀여ᄒᆞ니
峰봉마다 ᄆᆡᆺ쳐 잇고 긋마다 서린 긔운,
ᄆᆞᆰ거든 조티 마나, 조커든 ᄆᆞᆰ디 마나.
뎌 긔운 흐터 내야 人인傑걸을 ᄆᆞᆫᄃᆞᆯ고쟈.

形형容용도 그지업고 體톄勢세도 하도 할샤.
天텬地디 삼기실 제 自ᄌᆞ然연이 되연마ᄂᆞᆫ,
이제 와 보게 되니 有유情졍도 有유情졍ᄒᆞᆯ샤.

毗비盧로峰봉 上샹上샹頭두의 올나 보니 긔 뉘신고.
東동山산 泰태山산이 어ᄂᆞ야 놉돗던고.
魯노國국 조븐 줄도 우리ᄂᆞᆫ 모ᄅᆞ거든,
넙거나 넙은 天텬下하 엇ᄯᅵᄒᆞ야 적닷 말고.
어와, 뎌 디위ᄅᆞᆯ 어이ᄒᆞ면 알 거이고.

오ᄅᆞ디 못ᄒᆞ거니 ᄂᆞ려가미 고이ᄒᆞᆯ가.
圓원通통골 ᄀᆞᄂᆞᆫ 길로 獅ᄉᆞ子ᄌᆞ峰봉을 ᄎᆞ자가니,
그 알ᄑᆡ 너러바회 化화龍룡쇠 되어셰라.
千쳔年년 老노龍룡이 구ᄇᆡ구ᄇᆡ 서려 이셔,
晝듀夜야의 흘녀 내여 滄창海ᄒᆡ예 니어시니,
風풍雲운을 언제 어더 三삼日일雨우ᄅᆞᆯ 디련ᄂᆞᆫ다.
陰음崖애예 이온 플을 다 살와 내여ᄉᆞ라.

磨마訶하衍연 妙묘吉길祥샹 雁안門문재 너머 디여,
외나모 ᄡᅥ근 ᄃᆞ리 佛불頂뎡臺ᄃᆡ,, 올라ᄒᆞ니,
千쳔尋심絶졀壁벽을 半반空공애 셰여 두고,
銀은河하水슈 한 구ᄇᆡᄅᆞᆯ 촌촌이 버혀 내여,
실ᄀᆞ티 플텨이셔 뵈ᄀᆞ티 거러시니,
圖도經경 열두 구ᄇᆡ, 내 보매ᄂᆞᆫ 여러히라.
李니謫뎍仙션 이제 이셔 고텨 의논ᄒᆞ게 되면,
廬녀山산이 여긔도곤 낫단 말 못 ᄒᆞ려니.

山산中듕을 ᄆᆡ양 보랴, 東동海ᄒᆡ로 가쟈ᄉᆞ라.
藍남輿여 緩완步보ᄒᆞ야 山산映영樓누의 올나ᄒᆞ니,
玲녕瓏농 碧벽溪계와 數수聲셩啼뎌鳥됴ᄂᆞᆫ 離니別별을 怨원ᄒᆞᄂᆞᆫ ᄃᆞᆺ,
旌졍旗기를 ᄯᅥᆯ티니 五오色색이 넘노ᄂᆞᆫ ᄃᆞᆺ,
鼓고角각을 섯부니 海ᄒᆡ雲운이 다 것ᄂᆞᆫ ᄃᆞᆺ.

鳴명沙사길 니근 ᄆᆞᆯ이 醉취仙션을 빗기 시러,
바다ᄒᆞᆯ 겻ᄐᆡ 두고 海ᄒᆡ棠당花화로 드러가니,
白ᄇᆡᆨ鷗구야 ᄂᆞ디 마라, 네 버딘 줄 엇디 아ᄂᆞᆫ.

金금蘭난窟굴 도라드러 叢총石셕亭뎡 올나ᄒᆞ니,
白ᄇᆡᆨ玉옥樓루 남은 기동 다만 네히 셔 잇고야.
工공垂슈의 셩녕인가, 鬼귀斧부로 다ᄃᆞᄆᆞᆫ가.
구ᄐᆞ야 六뉵面면은 므어슬 象샹톳던고.

高고城셩을란 뎌만 두고 三삼日일浦포랄 ᄎᆞ자가니,
丹단書셔ᄂᆞᆫ 宛완然연ᄒᆞ되 四ᄉᆞ仙션은 어ᄃᆡ 가니,
예 사흘 머믄 後후의 어ᄃᆡ 가 ᄯᅩ 머믈고.
仙션遊유潭담 永영郞낭湖호 거긔나 가 잇ᄂᆞᆫ가.
淸쳥澗간亭뎡 萬만景경臺ᄃᆡ 몃 고ᄃᆡ 안돗던고.

梨니花화ᄂᆞᆫ ᄇᆞᆯ셔 디고 졉동새 슬피 울 제,
洛낙山산 東동畔반으로 義의相샹臺ᄃᆡ예 올라 안자,
日일出출을 보리라 밤듕만 니러ᄒᆞ니,
祥샹雲운이 집픠ᄂᆞᆫ 동, 六뉵龍뇽이 바퇴ᄂᆞᆫ 동,
바다ᄒᆡ ᄯᅥ날 제ᄂᆞᆫ 萬만國국이 일위더니,
天텬中듕의 티ᄯᅳ니 毫호髮발을 혜리로다.
아마도 녈구름 근쳐의 머믈셰라.

詩시仙션은 어ᄃᆡ 가고 咳ᄒᆞ唾타만 나맛ᄂᆞ니,
天텬地디間간 壯장ᄒᆞᆫ 긔별 ᄌᆞ셔히도 ᄒᆞᆯ셔이고.

斜샤陽양 峴현山산의 躑텩躅튝을 므니ᄇᆞᆯ와
羽우蓋개芝지輪륜이 鏡경浦포로 ᄂᆞ려가니,
十십里리 氷빙紈환을 다리고 고텨 다려,
長댱松숑 울흔 소개 슬ᄏᆞ장 펴뎌시니,
믈결도 자도 잘샤 모래ᄅᆞᆯ 혜리로다.

孤고舟쥬 解ᄒᆡ纜람ᄒᆞ야 亭뎡子ᄌᆞ 우ᄒᆡ 올나가니,
江강門문橋교 너믄 겨ᄐᆡ 大대洋양이 거긔로다.
從둉容용ᄒᆞᆫ댜 이 氣긔像샹, 闊활遠원ᄒᆞᆫ댜 뎌 境경界계,
이도곤 ᄀᆞᄌᆞᆫ ᄃᆡ ᄯᅩ 어듸 잇단 말고.
紅홍粧장 古고事ᄉᆞᄅᆞᆯ 헌ᄉᆞ타 ᄒᆞ리로다.

江강陵능 大대都도護호 風풍俗쇽이 됴흘시고,
節졀孝효旌졍門문이 골골이 버러시니,
比비屋옥可가封봉이 이제도 잇다 ᄒᆞᆯ다.

眞진珠쥬館관 竹듁西셔樓루 五오十십川쳔 ᄂᆞ린 믈이
太태白ᄇᆡᆨ山산 그림재ᄅᆞᆯ 東동海ᄒᆡ로 다마 가니,
ᄎᆞᆯ하리 漢한江강의 木목覓멱의 다히고져.

王왕程뎡이 有유限ᄒᆞᆫᄒᆞ고 風풍景경이 못 슬믜니,
幽유懷회도 하도 할샤, 客ᄀᆡᆨ愁수도 둘 듸 업다.
仙션사ᄉᆞᄅᆞᆯ ᄯᅴ워 내여 斗두牛우로 向향ᄒᆞ살가,
仙션人인을 ᄎᆞᄌᆞ려 丹단穴혈의 머므살가.

天텬根근을 못내 보와 望망洋양亭뎡의 올은 말이,
바다 밧근 하ᄂᆞᆯ이니 하ᄂᆞᆯ 밧근 무서신고.
ᄀᆞᆺ득 노ᄒᆞᆫ 고래, 뉘라셔 놀내관ᄃᆡ,
블거니 ᄲᅳᆷ거니 어즈러이 구ᄂᆞᆫ디고.
銀은山산을 것거 내여 六뉵合합의 ᄂᆞ리ᄂᆞᆫ ᄃᆞᆺ,
五오月월 長댱天텬의 白ᄇᆡᆨ雪셜은 므ᄉᆞ 일고.

져근덧 밤이 드러 風풍浪낭이 定뎡ᄒᆞ거ᄂᆞᆯ,
扶부桑상 咫지尺쳑의 明명月월을 기ᄃᆞ리니,
瑞셔光광 千쳔丈댱이 뵈ᄂᆞᆫ ᄃᆞᆺ 숨ᄂᆞᆫ고야.
珠쥬簾렴을 고텨 것고, 玉옥階계ᄅᆞᆯ 다시 쓸며,
啓계明명星셩 돗도록 곳초 안자 ᄇᆞ라보니,
白ᄇᆡᆨ蓮련花화 ᄒᆞᆫ 가지ᄅᆞᆯ 뉘라셔 보내신고.
일이 됴흔 世세界계 ᄂᆞᆷ대되 다 뵈고져.

流뉴霞하酒쥬 ᄀᆞ득 부어 ᄃᆞᆯᄃᆞ려 무론 말이,
英영雄웅은 어ᄃᆡ 가며, 四ᄉᆞ仙션은 긔 뉘러니,
아ᄆᆡ나 맛나 보아 녯 긔별 뭇쟈 ᄒᆞ니,
仙션山산 東동海ᄒᆡ예 갈 길히 머도 멀샤.

松숑根근을 볘여 누어 픗ᄌᆞᆷ을 얼픗 드니,
ᄭᅮᆷ애 ᄒᆞᆫ 사ᄅᆞᆷ이 날ᄃᆞ려 닐온 말이,
그ᄃᆡᄅᆞᆯ 내 모ᄅᆞ랴, 上샹界계예 眞진仙션이라.
黃황庭뎡經경 一일字ᄌᆞᄅᆞᆯ 엇디 그ᄅᆞᆺ 닐거 두고,
人인間간의 내려와셔 우리ᄅᆞᆯ ᄯᆞᆯ오ᄂᆞᆫ다.
져근덧 가디 마오 이 술 ᄒᆞᆫ 잔 머거 보오.

北븍斗두星셩 기우려 滄챵海ᄒᆡ水슈 부어 내여
저 먹고 날 머겨ᄂᆞᆯ 서너 잔 거후로니,
和화風풍이 習습習습ᄒᆞ야 兩냥腋ᄋᆡᆨ을 추혀 드니,
九구萬만里리 長댱空공애 져기면 ᄂᆞᆯ리로다.

이 술 가져다가 四ᄉᆞ海ᄒᆡ예 고로 ᄂᆞᆫ화,
億억萬만 蒼창生ᄉᆡᆼ을 다 醉ᄎᆔ케 ᄆᆡᆼ근 후의,
그제야 고텨 맛나 ᄯᅩ ᄒᆞᆫ 잔 ᄒᆞ쟛고야.

말 디쟈 鶴학을 ᄐᆞ고 九구空공의 올나가니,
空공中듕 玉옥簫쇼 소ᄅᆡ 어제런가 그제런가.
나도 ᄌᆞᆷ을 ᄭᆡ여 바다ᄒᆞᆯ 구버보니,
기픠ᄅᆞᆯ 모ᄅᆞ거니 ᄀᆞ인들 엇디 알리.
明명月월이 千쳔山산萬만落낙의 아니 비쵠 ᄃᆡ 업다.

</div>
</details>

<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
📖 현대어 해석 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div data-print-button data-content-id="gwandong-modern" data-title="관동별곡 현대어 해석" data-button-text="현대어 해석 PDF 인쇄"></div>
</div>
<div id="gwandong-modern" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

자연을 사랑하는 병이 깊어 대나무숲에 누웠더니
팔백 리나 되는 강원도 관찰사를 맡기시니
아아, 임금의 은혜야말로 갈수록 망극하다.

영추문으로 달려들어 경회루의 남문을 바라보며,
하직하고 물러나니 옥대나무가 앞에 섰다.

평구역에서 말을 갈아 타고 흑수로 돌아 드니,
섬강이 어디인가 치악산이 여기로다.
소양강에 내리는 물이 어디로 든다는 말인가?
한양을 떠난 외로운 신하는 흰 머리만 늘어가는구나.

철원에서 밤을 겨우 새워 북관정에 올라가니,
삼각산 제일 높은 봉우리가 보일 것만 같구나.
궁예왕의 대궐터에서 까막까치가 지저귀니,
나라의 흥망을 아는가, 모르는가?

옛날 회양 땅과 이곳의 이름이 마침 같으니,
급장유의 풍채를 이 곳에서 다시 볼 것인가.
관내가 무사하고 호시절이 삼월인 때,
화천 시내길은 풍악으로 뻗어 있다.

행장을 다 꾸리고 좁은 산길에 막대를 짚어,
백천동을 곁에 두고 만폭동 계곡에 들어가니,
은 같은 무지개, 옥 같은 용의 꼬리가
섞여 돌며 뿜는 소리가 십 리 밖까지 퍼졌으니,
들을 때에는 우레 같더니, 가까이서 보니 눈이로다.

금강대 맨 위층에 학이 새끼를 치니,
옥피리 소리 같은 봄바람에 선잠을 깨었던지,
흰 저고리, 검은 치마를 입은 듯한 학이 공중에 솟아 뜨니,
서호의 옛 주인을 반겨서 노는 듯하구나.

소향로봉, 대향로봉을 눈 아래 굽어보고,
정양사 진헐대에 다시 올라 앉으니,
여산과 같은 참모습이 여기에서 다 보이는 듯하다.
아아, 조물주의 재주가 대단하구나.

날려거든 뛰지 말거나 서려거든 솟지 말거나 할 것이지,
연꽃을 꽂아놓은 듯, 백옥을 묶어 놓은 듯,
동해를 박차고 나오는 듯, 북극을 괴고 있는 듯하다.

높이 솟은 망고대, 외로워 보이는 혈망봉은
하늘에 치밀어 무슨 일을 사뢰려고
수많은 세월이 지나도록 굽힐 줄을 모르는가?
아아, 너로구나. 너 같은 이 또 있겠는가?

개심대에 다시 올라 중향성 봉우리를 바라보며,
만 이천 봉을 똑똑히 헤아리니,
봉마다 맺혀 있고 끝마다 서린 기운,
맑거든 깨끗하지나, 깨끗하거든 맑지나 말 것이지,
저 기운을 흩어 내어 인재를 만들고 싶구나.

(산봉우리의) 형상도 끝이 없고 자세도 많기도 하구나.
천지가 생겼을 때에 자연히 되었건마는,
이제 와서 보게 되니 조물주의 뜻이 깃들어 있구나.

비로봉 정상에 올라 본 이가 그 누구인가?
동산과 태산 어느 것이 더 높단 말인가?
노나라가 좁은 줄도 우리는 모르거든,
넓고 넓은 천하를 어찌하여 작다고 했단 말인가?
아아, 저 정신적 경지를 어찌하면 알 것인가?

오르지 못하거니, 내려가는 것이 괴이할까?
원통골의 가느다란 길로 사자봉을 찾아가니,
그 앞의 넓은 바위가 화룡소가 되었어라.
천 년 묵은 늙은 용이 굽이굽이 서려 있어,
밤낮으로 흘러내려 넓은 바다에 이었으니,
비구름을 언제 얻어 흡족한 비를 내리려는가?
그늘진 벼랑에 시든 풀을 다 살려 내려무나.

마하연, 묘길상, 안문재를 넘어 내려가
썩은 외나무다리를 건너 불정대에 올라가니,
천 길 절벽을 하늘 가운데 세워 두고,
은하수 큰 굽이를 마디마디 베어내어
실처럼 풀어내서 베처럼 걸었으니,
도경에서는 열두 굽이지만, 내가 보기에는 더 여럿이라.
이태백이 이제 있어 다시 의논하게 되면,
여산 폭포가 여기보다 낫다는 말은 못 할 것이다.

산중 경치만 보겠는가? 동해로 가자꾸나.
가마를 타고 천천히 걸어 산영루에 올라가니,
영롱한 푸른 시냇물과 여러 소리로 우는 산새는 이별을 원망하는 듯하고,
깃발을 휘날리니 오색 빛깔 넘노는 듯하고,
북과 피리를 섞어 부니 바닷구름이 다 걷히는 듯하다.

백사장 길에 익숙한 말이 취한 신선을 비스듬히 실어,
바다를 곁에 두고 해당화 꽃밭으로 들어가니,
갈매기야 날지 말라, 내 너의 벗인 줄을 어찌 아느냐?

금난굴을 돌아들어서 통천 총석정에 올라가니,
백옥루의 남은 기둥, 다만 넷이 서 있구나.
공수의 작품인가? 귀신의 도끼로 다듬었는가?
구태여 육면 돌기둥은 무엇을 본떴는가?

고성을 저만큼 두고 삼일포를 찾아가니,
붉은 글씨는 뚜렷한데, 사선은 어디로 갔는가?
여기서 사흘을 머무른 후에 어디 가서 또 머물렀는가?
선유담, 영랑호는 거기에 가 있는가?
청간정, 만경대 등 몇 군데에 앉았던가?

배꽃은 벌써 지고 소쩍새가 슬피 울 때,
낙산사 동쪽 길 따라 의상대에 올라 앉아,
일출을 보려고 한밤중쯤 일어나니,
상서로운 구름이 지피는 듯, 여섯 용이 떠받치는 듯,
(해가) 바다를 떠날 때에는 온 세상이 일 듯하더니,
하늘에 치솟아 뜨니 터럭도 셀 수 있도다.
행여나 지나가는 구름 근처에 머물까 두렵도다.

시의 신선은 어디가고 침 튀긴 것만 남았느냐?
천지간 굉장한 소식이 자세히도 되었구나.

저녁놀 비껴드는 현산의 철쭉꽃을 이어 밟아
신선이 타는 수레를 타고 경포로 내려가니,
10리의 흰 비단을 다리고 다시 다려,
큰 소나무 숲 속에 실컷 펼쳐졌으니,
물결이 잔잔하여 모래알까지도 헤아리로다.

한 척의 배를 띄워 정자 위에 올라가니,
강문교 넘은 곁에 대양이 거기로다.
조용하구나, 이 기상. 광활하구나, 저 경계.
이 경치 갖춘 데가 또 어디에 있단 말인가?
박신과 홍장의 사랑이 야단스럽다 하리로다.

강릉 대도호부의 풍속이 좋구나.
절효정문이 고을마다 널렸으니,
집집마다 벼슬 받을 만한 일이 이제도 있다 하리라.

진주관 죽서루 아래 오십천에 내리는 물이
태백산 그림자를 동해로 담아 가니,
차라리 한강으로 돌려 남산에 대고 싶도다.

관리의 여정은 유한하고, 풍경은 싫지 않으니,
회포가 많기도 많구나. 나그네의 시름도 달랠 길이 없구나.
신선의 뗏목을 띄워내여 북두성, 견우성으로 갈까,
신선을 찾으러 단혈에 머물러 살까?

하늘의 끝을 내내 못 보아 망양정에 오르니,
바다 밖은 하늘이니, 하늘 밖은 무엇인가?
가뜩 성난 고래를 누가 놀라게 하기에,
(물을) 불거니 뿜거니 어지럽게 구는 것인가?
은산을 꺾어내어 온 세상에 내리는 듯,
오월의 드높은 하늘에 백설은 무슨 일인가?

잠깐 사이에 밤이 되어 풍랑이 가라앉거늘,
해 뜨는 곳 가까이서 밝은 달을 기다리니,
상서로운 달빛이 보이는 듯 숨는구나.
구슬 발을 다시 걷고, 섬돌 층계를 다시 쓸며,
샛별이 돋아 오를 때까지 곧바로 앉아서 바라 보니,
흰 연꽃 한 가지를 누가 보내셨는가?
이리 좋은 세계를 남들에게 다 보이고 싶구나.

신선주를 가득 부어 달더러 묻는 말이,
'영웅은 어디 갔으며, 사선은 그 누구인가.'
아무나 만나 보아 옛 소식을 묻고자 하니,
선산이 있는 동해로 가는 길이 멀기도 멀구나.

소나무 뿌리를 베어 누워 선잠이 얼핏 드니,
꿈에서 한 사람이 날더러 이르는 말이,
"그대를 내가 모르랴? 그대는 하늘나라의 신선이라.
황정경 한 글자를 어찌 잘못 읽어 두고,
인간 세상에 내려와서 우리를 따르는가?
잠깐만 가지 마오. 이 술 한 잔 마셔 보오."

북두칠성 기울여 동해 바닷물을 부어 내여,
저 한 잔 먹고 날 먹이거늘, 서너 잔 기울이니,
봄바람이 산들산들하여 두 겨드랑이를 추켜드니,
구만 리 하늘을 날 수 있을 것만 같구나.

"이 술 가져다가 온 세상에 고루 나누어,
억만 백성을 다 취케 만든 후에
그제야 다시 만나 또 한 잔 하자꾸나."

말이 끝나자 (신선은) 학을 타고 아득한 하늘로 올라가니,
공중에서 들려오는 옥피리 소리가 어제던가 그제던가.
나도 잠을 깨어 바다를 굽어보니,
깊이를 모르거니, 끝인들 어찌 알리?
밝은 달이 온 세상에 아니 비추이는 데 없다.

</div>
</details>

---

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
    featuredOrder: 4,
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
