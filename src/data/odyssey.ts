import type { Post } from './posts';
import episodeRecords from './odyssey-episodes.json';

// Video IDs, titles, upload timestamps and durations verified against SN History
// public YouTube watch pages on 2026-09-21. Prose is an editorial summary,
// not a transcript. Episode numbers are NOT Homer's book numbers.
export const ODYSSEY_PATH = '/history/odyssey';
export const ODYSSEY_UPDATED = '2026-09-21';
export const ODYSSEY_DESCRIPTION =
  '호메로스의 오디세이아 줄거리와 등장인물, 귀향의 의미를 SN History 쇼츠 24편으로 읽습니다. 트로이아에서 이타카까지, 편별 영상·해설·원전 참고 권을 순서대로 만나보세요.';
export const ODYSSEY_TEXT_URL =
  'https://www.gutenberg.org/cache/epub/1727/pg1727-images.html';
export const ODYSSEY_TRANSMISSION_URL =
  'https://www-current.chs.harvard.edu/homer-multitext-landing/';

export const odysseyEpisodes = episodeRecords.map(episode => ({
  ...episode,
  id: `odyssey-${episode.episode}`,
  url: `/history/odyssey-${episode.episode}`,
  title: `오디세이아 ${episode.episode}부 | ${episode.topic}`,
  thumbnail: `/images/thumbnail/history/odyssey-${episode.episode}.jpg`,
  youtubeUrl: `https://www.youtube.com/shorts/${episode.videoId}`,
}));

export type OdysseyEpisode = (typeof odysseyEpisodes)[number];

export function getOdysseyEpisode(id: string) {
  return odysseyEpisodes.find(episode => episode.id === id);
}

export function formatVideoDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

export const odysseyPosts: Post[] = odysseyEpisodes.map(episode => ({
  id: episode.id,
  title: episode.title,
  excerpt: episode.summary,
  category: 'SN History',
  tags: [
    ...new Set(['오디세이아', '호메로스', '그리스 신화', ...episode.people]),
  ],
  author: 'SN History',
  // These are blog publication dates; the original video upload dates are
  // recorded separately above and used exclusively for VideoObject.
  date: ODYSSEY_UPDATED,
  readTime: '숏츠',
  featured: false,
  published: true,
  seriesOrder: episode.episode,
  badge: `오디세이아 ${episode.episode}부${episode.episode === 24 ? ' · 완결' : ''}`,
  thumbnail: episode.thumbnail,
  youtubeUrl: episode.youtubeUrl,
  url: episode.url,
}));

export const odysseyChapters = [
  {
    label: '출발과 상실',
    range: '1–8부',
    start: 1,
    end: 8,
    description:
      '작품의 배경에서 트로이아 출항, 로토스와 키클롭스, 함대의 붕괴까지.',
  },
  {
    label: '유혹과 선택',
    range: '9–16부',
    start: 9,
    end: 16,
    description:
      '키르케와 망자들의 세계, 세이렌과 두 괴물, 마지막 동료들을 잃기까지.',
  },
  {
    label: '귀환과 그 이후',
    range: '17–24부',
    start: 17,
    end: 24,
    description:
      '칼립소의 섬을 떠나 이타카로. 가족과의 재회, 평화, 그리고 작품의 전승.',
  },
];

export const odysseyQuestions = [
  {
    question: '오디세이아는 어떤 이야기인가요?',
    answer:
      '호메로스에게 전해지는 고대 그리스 서사시로, 트로이아 전쟁 뒤 이타카로 돌아가려는 오디세우스의 방랑과 귀환을 그립니다. 괴물과 신들의 시련뿐 아니라 집에 남은 페넬로페와 텔레마코스, 가족과 공동체의 회복이 중요한 줄기를 이룹니다.',
  },
  {
    question: '오디세이아 24부는 원작 24권과 같은 순서인가요?',
    answer:
      '아닙니다. 원작은 24권으로 나뉘지만, SN History의 24부는 사건의 시간 흐름에 맞춰 다시 구성한 영상 시리즈입니다. 원작 제9~12권에 회상으로 등장하는 모험을 앞쪽에 배치하고, 마지막 편에서는 작품의 전승을 다룹니다. 각 편에 관련 원전의 권을 따로 안내합니다.',
  },
  {
    question: '오디세우스는 왜 20년 만에 돌아왔나요?',
    answer:
      '서사 속에서 트로이아 전쟁에 10년을 보내고, 전쟁이 끝난 뒤 귀향에 다시 10년이 걸렸기 때문입니다. 이 가운데 칼립소의 섬에서 보낸 긴 체류도 포함됩니다. 20년 내내 바다 위를 항해했다는 뜻은 아닙니다.',
  },
  {
    question: '일리아스와 오디세이아는 무엇이 다른가요?',
    answer:
      '《일리아스》는 트로이아 전쟁 중 아킬레우스의 분노와 그 결과를 중심으로 전개되고, 《오디세이아》는 전쟁 이후 오디세우스의 귀향을 중심으로 전개됩니다. 트로이아 목마와 함락 전체가 《일리아스》에 담겨 있는 것은 아닙니다.',
  },
  {
    question: '오디세이아의 결말은 무엇인가요?',
    answer:
      '오디세우스는 구혼자들을 물리친 뒤 침대에 얽힌 비밀로 페넬로페에게 자신을 증명하고 아버지와도 재회합니다. 이어 구혼자 가족들과의 충돌을 아테나가 중재하며 평화가 세워집니다. 귀향은 땅에 도착하는 일뿐 아니라 관계와 질서를 회복하는 과정으로 완성됩니다.',
  },
  {
    question: '이 이야기는 실제 역사인가요?',
    answer:
      '《오디세이아》는 신과 괴물, 영웅의 모험이 등장하는 서사시입니다. 고대 사회의 가치관과 생활상을 읽는 자료가 될 수 있지만, 등장하는 사건이나 항로를 그대로 확정된 역사적 사실로 보아서는 안 됩니다.',
  },
];
