export const ORIGINALS_GENRES = [
  '현대소설',
  '현대시',
  '고전소설',
  '고전시가',
] as const;
export type OriginalsGenre = (typeof ORIGINALS_GENRES)[number];

export function getOriginalsGenre(work: {
  title: string;
  tags?: string[];
}): OriginalsGenre | undefined {
  const tagged = ORIGINALS_GENRES.find(genre => work.tags?.includes(genre));
  if (tagged) return tagged;
  if (work.tags?.some(tag => ['고전가사', '고전한시', '한시'].includes(tag)))
    return '고전시가';
  return ORIGINALS_GENRES.find(genre => work.title.includes(genre));
}
