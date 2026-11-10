// 글 상단에 붙는 카드뉴스(인스타 카드 1080x1350). 키는 post.id
export interface CardNewsSlide {
  src: string;
  label: string;
}

export interface CardNews {
  title: string;
  slides: CardNewsSlide[];
}

const possibleWorldsLabels = [
  '표지',
  '1단계 표지',
  '1단계 말싸움',
  '1단계 논리학도 못 가린다',
  '2단계 표지',
  '2단계 예선장',
  '2단계 완결성',
  '2단계 독립성',
  '2단계 규칙 정리',
  '2단계 판정',
  '3단계 표지',
  '3단계 왜 어려운가',
  '3단계 실제 선지로',
  '3단계 부정',
  '마무리',
  'SNarGPT',
  '끝',
];

const personalIdentityLabels = [
  '표지',
  '1단계 표지',
  '1단계 사진',
  '1단계 약속',
  '1단계 옛 답',
  '2단계 표지',
  '2단계 칸트 ①',
  '2단계 칸트 ②',
  '2단계 칸트 ③',
  '2단계 스트로슨',
  '2단계 롱게네스',
  '2단계 한 장 정리',
  '3단계 표지',
  '3단계 비슷하지만 다른 말 ①',
  '3단계 비슷하지만 다른 말 ②',
  '3단계 수능이 낸 사고실험',
  '마무리',
  'SNarGPT',
  '끝',
];

const brettonWoodsLabels = [
  '표지',
  '1단계 표지',
  '1단계 원화와 달러',
  '1단계 같은 기준',
  '2단계 표지',
  '2단계 기준 ① 금',
  '2단계 왜 금인가',
  '2단계 브레턴우즈 이전',
  '2단계 기준 ② 금에 묶인 달러',
  '2단계 고정 환율의 속사정',
  '2단계 기준이 되는 돈의 딜레마',
  '2단계 1971년',
  '2단계 기준 ③ 금 교환을 멈춘 달러',
  '2단계 그래서 지금도',
  '3단계 표지',
  '3단계 12번 발문',
  '3단계 체제별로 그려 보기',
  '마무리',
  'SNarGPT',
  '끝',
];

const symbiogenesisLabels = [
  '표지',
  '1단계 몸에서 세포로',
  '1단계 세포 속으로',
  '1단계 미토콘드리아 수',
  '1단계 생물 하나',
  '1단계 핵으로 가르기',
  '1단계 그런데',
  '1단계 정리',
  '2단계 하나란',
  '2단계 닮음',
  '2단계 주고받음',
  '2단계 이어짐',
  '2단계 공생발생설',
  '2단계 안 믿음',
  '2단계 흔적',
  '2단계 정리',
  '3단계 공생',
  '3단계 지문의 답',
  '3단계 증식',
  '3단계 유전자',
  '3단계 아메바',
  '3단계 판정',
  '마무리',
  'SNarGPT',
  '끝',
];

const comma01Labels = [
  '표지',
  '다 끝낸 사람은 없다',
  '13년 만의 역주행',
  '그때는 닿지 못했다',
  '하지만 그게 끝이 아니었다',
  '넷의 삶은 멈추지 않았다',
  '베스티를 다시 일으킨 것',
  '인생은 수능으로 끝나지 않는다',
  '나만큼은 나 자신에게 관대하게',
  '지속할 수 있는 만큼만 성실하게',
  '마침표는 아직 찍지 말자',
  '끝',
];

const comma02Labels = [
  '표지',
  '자신 있게 답한 아이',
  '모르겠다고 인정한 아이',
  '모른다는 걸 알기까지',
  '틀렸다는 데서 그치지 않는다',
  '먼저, 아이의 생각이 있었다',
  '막혔다는 건 빈손이 아니라는 뜻',
  '우리는 어디까지 도움받을까',
  '한 걸음을 견고하게',
  '끝',
];

const comma03Labels = [
  '표지',
  '오래 기억하려면?',
  '설명문 한 편, 대학생 180명',
  '5분 뒤엔 읽기만 한 쪽이 1등',
  '1주 뒤엔 순서가 뒤집혔다',
  '다른 실험들도 비슷했다',
  '꺼내는 일은 공부 전후로 두 번',
  '어떻게 꺼내 볼까',
  '용기 있게 꺼내면',
  '끝',
];

export const CARD_NEWS: Record<string, CardNews> = {
  'possible-worlds': {
    title: '가능세계 카드뉴스 · 2019 수능 국어 39~42번',
    slides: possibleWorldsLabels.map((label, i) => ({
      src: `/images/problems/possible-worlds/cards/${String(i + 1).padStart(2, '0')}.png`,
      label,
    })),
  },
  '2026-suneung-personal-identity': {
    title: '인격의 동일성 카드뉴스 · 2026 수능 국어 14~17번',
    slides: personalIdentityLabels.map((label, i) => ({
      src: `/images/problems/2026-suneung-personal-identity/cards/${String(i + 1).padStart(2, '0')}.png`,
      label,
    })),
  },
  'comma-01-besti': {
    title: '쉼표 No. 01 카드뉴스 · 베스티 역주행을 보며',
    slides: comma01Labels.map((label, i) => ({
      src: `/images/columns/comma-01-besti/cards/${String(i + 1).padStart(2, '0')}.png`,
      label,
    })),
  },
  'comma-02-socrates-hint': {
    title: '쉼표 No. 02 카드뉴스 · 막혔을 때, 어디까지 도움받을까',
    slides: comma02Labels.map((label, i) => ({
      src: `/images/columns/comma-02-socrates-hint/cards/${String(i + 1).padStart(2, '0')}.png`,
      label,
    })),
  },
  'comma-03-retrieval': {
    title: '쉼표 No. 03 카드뉴스 · 다시 읽을까, 덮고 떠올릴까',
    slides: comma03Labels.map((label, i) => ({
      src: `/images/columns/comma-03-retrieval/cards/${String(i + 1).padStart(2, '0')}.png`,
      label,
    })),
  },
  '2020-june-symbiogenesis': {
    title: '개체성과 공생발생설 카드뉴스 · 2020 6월 모의평가 국어 37~42번',
    slides: symbiogenesisLabels.map((label, i) => ({
      src: `/images/problems/2020-june-symbiogenesis/cards/${String(i + 1).padStart(2, '0')}.png`,
      label,
    })),
  },
  '2022-suneung-bretton-woods': {
    title: '브레턴우즈 체제 카드뉴스 · 2022 수능 국어 10~13번',
    slides: brettonWoodsLabels.map((label, i) => ({
      src: `/images/problems/2022-suneung-bretton-woods/cards/${String(i + 1).padStart(2, '0')}.png`,
      label,
    })),
  },
};
