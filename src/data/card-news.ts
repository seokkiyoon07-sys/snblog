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

export const CARD_NEWS: Record<string, CardNews> = {
  'possible-worlds': {
    title: '가능세계 카드뉴스 · 2019 수능 국어 39~42번',
    slides: possibleWorldsLabels.map((label, i) => ({
      src: `/images/problems/possible-worlds/cards/${String(i + 1).padStart(2, '0')}.png`,
      label,
    })),
  },
};
