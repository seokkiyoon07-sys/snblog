import rawVideos from './reading-shorts-videos.json';

export const READING_SHORTS_YOUTUBE_URL =
  'https://www.youtube.com/@SN_Academy_Original/shorts';

export type ReadingDomain = '인문·철학' | '사회·경제' | '과학·기술' | '논리';

export const READING_DOMAINS: ReadingDomain[] = [
  '인문·철학',
  '사회·경제',
  '과학·기술',
  '논리',
];

interface SeriesMeta {
  id: string;
  title: string;
  examLabel: string;
  domain: ReadingDomain;
  summary: string;
  postId?: string;
}

const SERIES_META: SeriesMeta[] = [
  {
    id: 'symbiogenesis',
    title: '개체성과 공생발생설',
    examLabel: '2020 6월 모평 · 과학',
    domain: '과학·기술',
    summary:
      '내 몸속 미토콘드리아가 원래 박테리아였다면, 어디까지가 ‘나’일까? 세포 공생발생설과 생물학적 개체성 논쟁을 3편으로 풀어 봅니다.',
    postId: '2020-june-symbiogenesis',
  },
  {
    id: 'ayer-hanks',
    title: "에이어와 행크스, '나빴어'도 참일까?",
    examLabel: '2025 6월 모평 · 인문',
    domain: '인문·철학',
    summary:
      '도덕 판단은 참과 거짓을 가릴 수 있는 명제일까, 감정의 표현일까? 에이어의 정서주의와 행크스의 관점을 3편으로 짚습니다.',
  },
  {
    id: 'bretton-woods',
    title: '브레턴우즈 체제',
    examLabel: '2022 수능 · 경제',
    domain: '사회·경제',
    summary:
      '금에 묶인 달러, 고정 환율제의 딜레마, 그리고 1971년 금 태환 정지까지. 국제 통화 질서의 흐름을 4편으로 정리합니다.',
    postId: '2022-suneung-bretton-woods',
  },
  {
    id: 'personal-identity',
    title: '인격의 동일성',
    examLabel: '2026 수능 · 철학',
    domain: '인문·철학',
    summary:
      '몸도 기억도 바뀌는데 왜 어제의 나와 오늘의 나는 같은 사람일까? 칸트·스트로슨·롱게네스의 논의를 4편으로 따라갑니다.',
    postId: '2026-suneung-personal-identity',
  },
  {
    id: 'possible-worlds',
    title: '가능세계',
    examLabel: '2019 수능 · 논리',
    domain: '논리',
    summary:
      '“그 기차를 탔더라면?” 완결성과 독립성으로 따지는 가능세계의 규칙과 실제 수능 선지 판단법을 4편으로 설명합니다.',
    postId: 'possible-worlds',
  },
  {
    id: 'free-rider',
    title: '어디까지가 무임승차일까?',
    examLabel: '수능 경제 개념',
    domain: '사회·경제',
    summary:
      '열람실 자리 전쟁과 조별 과제, 등대 이야기에서 출발해 공공재의 경합성과 배제성, 무임승차 문제를 3편으로 풀어 봅니다.',
  },
];

function extractSubtitleAndSummary(sourceDescription: string) {
  const lines = sourceDescription
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);

  let subtitle = '';
  const bodyLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (i === 0) continue;
    if (!subtitle && line.startsWith('-')) {
      subtitle = line.replace(/^-\s*/, '').trim();
      continue;
    }
    if (
      line.startsWith('이 영상의 기출은') ||
      line.startsWith('#') ||
      line.startsWith('http') ||
      line.startsWith('- http')
    ) {
      break;
    }
    bodyLines.push(line);
  }

  return {
    subtitle,
    summary: bodyLines[0] ?? lines[0] ?? '',
  };
}

export interface ReadingShortEpisode {
  id: string;
  seriesId: string;
  part: number;
  totalParts: number;
  videoId: string;
  videoTitle: string;
  subtitle: string;
  summary: string;
  durationSeconds: number;
  uploadDate: string;
  thumbnail: string;
  youtubeUrl: string;
  pageUrl: string;
}

export interface ReadingShortSeries {
  id: string;
  title: string;
  examLabel: string;
  domain: ReadingDomain;
  summary: string;
  postId?: string;
  postUrl?: string;
  totalDurationSeconds: number;
  episodes: ReadingShortEpisode[];
}

export const readingShortSeries: ReadingShortSeries[] = SERIES_META.map(
  meta => {
    const postUrl = meta.postId
      ? `/originals/reading/${meta.postId}`
      : undefined;
    const episodes: ReadingShortEpisode[] = rawVideos
      .filter(video => video.seriesId === meta.id)
      .sort((a, b) => a.part - b.part)
      .map(video => {
        const { subtitle, summary } = extractSubtitleAndSummary(
          video.sourceDescription
        );
        return {
          id: `${video.seriesId}-${video.part}`,
          seriesId: video.seriesId,
          part: video.part,
          totalParts: video.totalParts,
          videoId: video.videoId,
          videoTitle: video.videoTitle,
          subtitle: subtitle || `${video.part}부`,
          summary: summary || meta.summary,
          durationSeconds: video.durationSeconds,
          uploadDate: video.uploadDate,
          thumbnail: `/images/thumbnail/reading-shorts/${video.seriesId}-${video.part}.jpg`,
          youtubeUrl: `https://www.youtube.com/shorts/${video.videoId}`,
          pageUrl: postUrl ?? '/originals/reading',
        };
      });

    return {
      ...meta,
      postUrl,
      totalDurationSeconds: episodes.reduce(
        (sum, ep) => sum + ep.durationSeconds,
        0
      ),
      episodes,
    };
  }
);

export const readingShortEpisodes: ReadingShortEpisode[] =
  readingShortSeries.flatMap(series => series.episodes);

export function getReadingShortsByPostId(
  postId: string
): ReadingShortSeries | undefined {
  return readingShortSeries.find(series => series.postId === postId);
}

export function formatShortDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
}
