import type { Post } from './posts';
import videos from './korean-history-videos.json';

export const KOREAN_HISTORY_PATH = '/history/korean-history';
export const KOREAN_HISTORY_TITLE = '숏츠로 준비하는 수능 한국사';
export const KOREAN_HISTORY_TAGLINE =
  '공부할 건 많으니까, 한국사는 짧고 확실하게.';
export const KOREAN_HISTORY_UPDATED = '2026-09-30';
export const KOREAN_HISTORY_DESCRIPTION =
  '수능 한국사 1등급을 목표로, 교과서의 핵심 흐름을 한 편씩 짚어갑니다. 짧은 영상으로 이해하고, 핵심 개념과 확인 질문으로 기억하세요. 등하교 길에도, 공부하다 잠깐 쉬는 시간에도.';

// Editorial study notes based on the channel's public descriptions, checked
// 2026-09-30. These are not transcripts or quotations from a specific textbook.
const notes = [
  {
    episode: 1,
    chapter: 'prehistory',
    topic: '구석기에서 신석기로, 사람들은 왜 정착했을까?',
    summary:
      '사냥과 채집을 하며 이동하던 사람들은 기후와 생활 환경의 변화 속에서 점차 한곳에 오래 머물기 시작했습니다. 신석기 시대에는 간석기와 토기, 움집 마을이 나타나고 농경과 목축도 시작됩니다. 다만 농경의 시작이 사냥과 채집의 즉각적인 끝을 뜻하지는 않았습니다.',
    concepts: [
      {
        term: '구석기',
        text: '뗀석기를 사용하고 사냥과 채집을 중심으로 생활했습니다.',
      },
      {
        term: '신석기',
        text: '간석기와 토기를 사용하고 농경·목축을 시작했지만, 사냥·어로·채집도 이어갔습니다.',
      },
      {
        term: '정착 생활',
        text: '움집 마을과 다양한 생계 활동을 함께 살펴보면 이동에서 정착으로의 변화를 이해할 수 있습니다.',
      },
    ],
    flow: [
      { label: '구석기', text: '뗀석기 · 사냥과 채집 · 이동 생활' },
      {
        label: '신석기',
        text: '간석기와 토기 · 농경과 목축의 시작 · 움집 마을',
      },
    ],
    question:
      '농경이 시작되었다고 해서 사람들이 곧바로 사냥과 채집을 그만두었을까요?',
    answer:
      '아닙니다. 신석기 사람들은 농경과 목축뿐 아니라 사냥·어로·채집을 함께 하며 생활했습니다.',
  },
  {
    episode: 2,
    chapter: 'prehistory',
    topic: '청동기 시대, 남는 곡식이 권력을 만들다',
    summary:
      '청동기 시대의 변화를 이끈 것은 청동 도구만이 아니었습니다. 농업 생산과 잉여 생산물이 늘면서 재산과 빈부 차이가 커지고, 사람과 자원을 통제하는 지배자가 등장했습니다. 마을의 방어 시설과 거대한 고인돌은 이러한 사회 변화를 보여줍니다.',
    concepts: [
      {
        term: '잉여 생산물',
        text: '먹고 남은 생산물의 축적은 재산과 빈부 차이, 지배 세력의 성장으로 이어졌습니다.',
      },
      {
        term: '청동기와 석기',
        text: '청동은 주로 지배층의 무기와 의례용 도구에 쓰였고, 농경에는 반달 돌칼 같은 석기도 중요했습니다.',
      },
      {
        term: '군장과 고인돌',
        text: '대규모 노동력을 동원한 고인돌을 통해 지배자의 권력과 계급 분화를 살펴볼 수 있습니다.',
      },
    ],
    flow: [
      { label: '생산의 변화', text: '농업 생산 증가와 잉여 생산물 축적' },
      {
        label: '사회의 변화',
        text: '재산과 빈부 차이 확대, 방어 시설과 지배 세력의 등장',
      },
    ],
    question: '청동기 시대에도 석기 농기구를 사용한 이유는 무엇일까요?',
    answer:
      '귀한 청동은 지배층의 무기나 의례용 도구에 주로 사용됐습니다. 시대 이름이 청동기라고 해서 모든 도구가 청동으로 바뀐 것은 아닙니다.',
  },
  {
    episode: 3,
    chapter: 'states',
    topic: '고조선의 성장과 멸망',
    summary:
      '고조선은 왕위 세습과 관직을 갖춘 정치 체제로 성장했습니다. 위만 조선은 철기 문화를 수용하고 중계 무역을 통해 세력을 넓혔지만, 한나라와의 전쟁과 지배층의 분열 속에서 멸망했습니다. 단군 신화와 8조법은 당시 사회를 이해하는 서로 다른 단서입니다.',
    concepts: [
      {
        term: '단군 신화',
        text: '신화를 사건 그대로의 역사로 보기보다는 농경 사회와 제정일치적 지배자의 모습을 읽는 자료로 살펴봅니다.',
      },
      {
        term: '위만 조선',
        text: '철기 문화의 수용과 한나라·한반도 남부 사이의 중계 무역을 통해 성장했습니다.',
      },
      {
        term: '8조법',
        text: '전해지는 세 조항에서 생명과 재산을 중시하고 계급이 존재했던 사회 모습을 읽을 수 있습니다.',
      },
    ],
    flow: [
      { label: '기원전 194년', text: '위만이 왕위를 차지함' },
      { label: '기원전 109년', text: '한나라의 고조선 침공' },
      { label: '기원전 108년', text: '왕검성 함락과 고조선 멸망' },
    ],
    question:
      '위만 조선이 성장하는 데 철기와 중계 무역은 어떤 역할을 했을까요?',
    answer:
      '철기 문화의 수용은 성장의 기반이 되었고, 한나라와 한반도 남부 사이의 교역을 중계하며 경제적 이익을 확보했습니다.',
  },
  {
    episode: 4,
    chapter: 'states',
    topic: '부여·고구려·옥저·동예·삼한',
    summary:
      '철기 문화가 퍼진 만주와 한반도에서는 여러 나라가 서로 다른 정치와 생활 문화를 발전시켰습니다. 왕과 유력자들이 함께 다스리기도 했고, 강력한 왕 없이 읍락을 중심으로 생활하기도 했습니다. 이들을 비교하면 삼국과 가야로 재편되는 과정의 출발점을 볼 수 있습니다.',
    concepts: [
      {
        term: '부여·고구려',
        text: '부여의 사출도는 왕과 유력자들의 지배 구조를, 고구려의 서옥제는 혼인 풍습을 보여줍니다.',
      },
      {
        term: '옥저·동예',
        text: '옥저의 민며느리제와 동예의 책화를 구분합니다. 두 사회에는 강력한 왕이 없었습니다.',
      },
      {
        term: '삼한',
        text: '군장과 천군, 소도를 통해 정치와 제사의 구분을 살펴봅니다. 변한에서는 철 생산과 교역이 활발했습니다.',
      },
    ],
    flow: [
      { label: '부여', text: '사출도 · 마가, 우가, 저가, 구가' },
      { label: '고구려', text: '서옥제' },
      { label: '옥저·동예', text: '옥저: 민며느리제 / 동예: 책화' },
      { label: '삼한', text: '천군과 소도 · 변한의 철 교역' },
    ],
    question: '삼한의 천군과 소도는 정치와 제사의 관계를 어떻게 보여줄까요?',
    answer:
      '정치를 담당하는 군장과 제사를 담당하는 천군이 구분되었습니다. 소도는 천군이 제사를 지내던 성역이었습니다.',
  },
  {
    episode: 5,
    chapter: 'kingdoms',
    topic: '율령·관등·불교, 삼국이 국가를 묶는 방법',
    summary:
      '삼국의 왕들은 처음부터 모든 지역을 강하게 지배하지는 못했습니다. 공통된 법과 관등 체계, 국가가 공유하는 종교를 통해 지역 세력을 왕 중심의 질서로 묶어 갔습니다. 중앙집권화는 각 나라에서 서로 다른 시기와 과정을 거쳐 진행되었습니다.',
    concepts: [
      {
        term: '율령',
        text: '공통된 법을 통해 여러 지역을 하나의 통치 질서에 편입했습니다.',
      },
      {
        term: '관등과 공복',
        text: '지역 유력자들을 국가의 관리로 재편하고, 관등과 복색으로 지위를 구분했습니다.',
      },
      {
        term: '불교',
        text: '부족과 지역을 넘어 공유할 수 있는 종교와 이념으로 국가의 통합을 뒷받침했습니다.',
      },
    ],
    flow: [
      { label: '백제', text: '고이왕: 관등·공복 정비 / 침류왕: 불교 수용' },
      { label: '고구려', text: '소수림왕: 불교 수용 · 태학 설립 · 율령 반포' },
      { label: '신라', text: '법흥왕: 율령·공복 정비 · 불교 공인' },
    ],
    question: '율령·관등·불교는 서로 다르지만 어떤 공통된 역할을 했을까요?',
    answer:
      '지역마다 나뉜 질서와 세력을 왕 중심의 국가로 통합하는 데 기여했습니다. 법, 관리 조직, 공통된 이념이 각각 그 기반이 되었습니다.',
  },
  {
    episode: 6,
    chapter: 'kingdoms',
    topic: '철로 성장한 가야는 왜 통합되지 못했을까?',
    summary:
      '가야는 낙동강 일대의 여러 정치체가 철 생산과 교역을 바탕으로 성장한 사회였습니다. 금관가야가 고구려군의 남정으로 타격을 받은 뒤에는 대가야가 두각을 나타냈습니다. 그러나 각국의 독립성이 유지된 가운데 신라의 팽창을 맞아 차례로 병합되었습니다.',
    concepts: [
      {
        term: '철 생산과 교역',
        text: '가야의 철은 무기와 갑옷의 재료이자 교역품이었고, 덩이쇠는 교환 수단으로도 사용됐습니다.',
      },
      {
        term: '여러 가야',
        text: '금관가야·아라가야·대가야 등은 문화를 공유하면서도 각자의 지배자와 정치 체제를 유지했습니다.',
      },
      {
        term: '중앙집권화와 병합',
        text: '철을 통한 경제적 성장과 하나의 국가로 통합하는 정치적 역량을 구분해 살펴봅니다.',
      },
    ],
    flow: [
      { label: '400년', text: '고구려군의 남정, 금관가야에 타격' },
      { label: '532년', text: '금관가야가 신라에 항복' },
      { label: '562년', text: '대가야 멸망' },
    ],
    question:
      '철이 풍부하고 교역이 활발한 것만으로 강한 통일 국가가 될 수 있었을까요?',
    answer:
      '경제적 부가 정치적 통합을 보장하지는 않았습니다. 가야의 여러 나라는 독립된 체제를 유지했고, 하나의 중앙집권 국가로 통합되지 못한 채 외부의 압박을 받았습니다.',
  },
  {
    episode: 7,
    chapter: 'wars',
    topic: '한강을 둘러싼 경쟁과 나제동맹의 붕괴',
    summary:
      '한강 유역은 농업과 교통, 중국과의 교류에 유리한 공간이었습니다. 고구려의 남진에 맞섰던 백제와 신라는 함께 한강 유역을 되찾았지만, 신라가 하류까지 차지하면서 오랜 동맹이 무너졌습니다. 한강의 주인이 바뀌는 과정은 삼국의 힘의 변화를 보여줍니다.',
    concepts: [
      {
        term: '한강 유역',
        text: '넓은 평야와 수로, 서해를 통한 중국과의 교류가 중요한 이점이었습니다.',
      },
      {
        term: '나제동맹',
        text: '백제와 신라는 고구려에 맞서 협력했지만, 한강 유역을 둘러싼 이해관계가 충돌했습니다.',
      },
      {
        term: '신라의 성장',
        text: '진흥왕 때 한강 유역을 확보하면서 서해 진출과 중국과의 직접 교류 기반을 마련했습니다.',
      },
    ],
    flow: [
      { label: '475년', text: '고구려의 한성 함락, 백제의 웅진 천도' },
      { label: '551년', text: '백제·신라가 한강 유역을 나누어 차지' },
      { label: '553년', text: '신라가 한강 하류까지 차지, 나제동맹 붕괴' },
      { label: '554년', text: '관산성 전투 과정에서 백제 성왕 전사' },
    ],
    question:
      '삼국이 한강 유역을 차지하려 한 이유를 두 가지 이상 설명해 보세요.',
    answer:
      '농업에 유리한 평야를 확보할 수 있었고, 강과 서해를 통한 교통·교역로 및 중국과의 교류 기반을 얻을 수 있었습니다.',
  },
  {
    episode: 8,
    chapter: 'wars',
    topic: '고구려와 수·당의 전쟁',
    summary:
      '고구려는 수나라의 대규모 침공에 맞서 성을 지키고 적의 보급 부담을 키웠으며, 을지문덕은 살수에서 퇴각하는 수나라군을 공격했습니다. 이후 당 태종의 침공에서도 안시성의 저항이 이어졌고 당군은 철수했습니다. 거듭된 방어의 성공과 함께 장기전이 고구려에 남긴 부담도 살펴봅니다.',
    concepts: [
      {
        term: '살수대첩',
        text: '을지문덕이 수나라 별동대를 깊숙이 유인한 뒤, 지쳐 퇴각하는 군대를 공격했습니다.',
      },
      {
        term: '수의 멸망',
        text: '고구려 원정의 실패뿐 아니라 무리한 동원과 각지의 반란이 겹친 결과로 이해합니다.',
      },
      {
        term: '안시성 전투',
        text: '고구려군의 저항과 토산을 둘러싼 공방, 추위와 군량 문제 속에서 당군이 철수했습니다.',
      },
    ],
    flow: [
      { label: '612년', text: '살수대첩' },
      { label: '618년', text: '수나라 멸망' },
      { label: '645년', text: '당 태종의 침공과 안시성 전투' },
    ],
    question:
      '고구려의 방어전에서 성곽과 적의 보급 문제는 어떤 역할을 했을까요?',
    answer:
      '성의 저항은 적의 진격을 지연시켰습니다. 원정군의 군량 부족과 피로, 추위 등은 전쟁을 오래 지속하기 어렵게 만들었습니다.',
  },
];

export const koreanHistoryEpisodes = videos
  .map(video => {
    const note = notes.find(item => item.episode === video.episode);
    if (!note)
      throw new Error(`Missing Korean history notes: ${video.episode}`);
    // Source descriptions remain in the source JSON; do not ship them as page props.
    const { sourceDescription: _source, ...metadata } = video;
    return {
      ...metadata,
      ...note,
      id: `korean-history-${video.episode}`,
      url: `/history/korean-history-${video.episode}`,
      title: `한국사 ${video.episode}화 | ${note.topic}`,
      thumbnail: `/images/thumbnail/history/korean-history-${video.episode}.jpg`,
      youtubeUrl: `https://www.youtube.com/shorts/${video.videoId}`,
    };
  })
  .sort((a, b) => a.episode - b.episode);

export type KoreanHistoryEpisode = (typeof koreanHistoryEpisodes)[number];
export const getKoreanHistoryEpisode = (id: string) =>
  koreanHistoryEpisodes.find(item => item.id === id);
export const koreanHistoryChapters = [
  {
    id: 'prehistory',
    title: '선사 시대',
    description: '정착과 생산의 변화가 사회를 바꾸다',
  },
  {
    id: 'states',
    title: '국가의 등장',
    description: '고조선과 여러 나라의 성장',
  },
  {
    id: 'kingdoms',
    title: '삼국과 가야',
    description: '나라를 하나로 묶는 힘',
  },
  {
    id: 'wars',
    title: '삼국의 경쟁과 전쟁',
    description: '한강을 둘러싼 경쟁에서 수·당과의 전쟁까지',
  },
];
export const koreanHistoryPosts: Post[] = koreanHistoryEpisodes.map(
  episode => ({
    id: episode.id,
    title: episode.title,
    excerpt: episode.summary,
    category: 'SN History',
    tags: [
      '한국사',
      '교과서로 읽는 한국사',
      ...episode.concepts.map(item => item.term),
    ],
    author: 'SN History',
    date: KOREAN_HISTORY_UPDATED,
    readTime: '숏츠',
    featured: false,
    published: true,
    seriesOrder: episode.episode,
    badge: `한국사 ${episode.episode}화`,
    thumbnail: episode.thumbnail,
    youtubeUrl: episode.youtubeUrl,
    url: episode.url,
  })
);
