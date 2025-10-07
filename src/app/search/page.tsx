import { Metadata } from 'next';
import SearchContent from './SearchContent';

export const metadata: Metadata = {
  title: '검색 | SN Academy Blog',
  description:
    'SN Academy Blog에서 원하는 정보를 검색하세요. 입시정보, 학습법, 고전문학, 합격후기 등 모든 콘텐츠를 쉽게 찾을 수 있습니다.',
  keywords:
    '검색, SN Academy, 입시정보, 학습법, 고전문학, 합격후기, 블로그 검색',
  openGraph: {
    title: '검색 | SN Academy Blog',
    description: 'SN Academy Blog에서 원하는 정보를 검색하세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/search',
  },
  twitter: {
    card: 'summary',
    title: '검색 | SN Academy Blog',
    description: 'SN Academy Blog에서 원하는 정보를 검색하세요.',
  },
};

export default function SearchPage() {
  return <SearchContent />;
}
