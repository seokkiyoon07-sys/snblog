import { Metadata } from 'next';
import SNarGOClient from './SNarGOClient';

export const metadata: Metadata = {
  title: 'SNarGO — 수능 특화 Vertical AI | SN Academy',
  description:
    'SNarGO는 수능에 최적화된 Vertical AI입니다. 2,000문제 중 1문제 수준 오답, SNarVIS 해설, 그리고 차세대 문제 생성 AI SNarGEN 로드맵까지.',
  keywords: [
    'SNarGO',
    '수능',
    'AI',
    'Vertical AI',
    '수학',
    '교육기술',
    'SN Academy',
  ],
  authors: [{ name: 'SN Academy' }],
  openGraph: {
    title: 'SNarGO — 수능 특화 Vertical AI | SN Academy',
    description:
      'SNarGO는 수능에 최적화된 Vertical AI입니다. 2,000문제 중 1문제 수준 오답, SNarVIS 해설, 그리고 차세대 문제 생성 AI SNarGEN 로드맵까지.',
    type: 'article',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/startup/SNargopost_1',
    siteName: 'SN Academy Blog',
    images: [
      {
        url: '/images/startup/SNarGo/SNargo thumbnail.PNG',
        width: 1200,
        height: 630,
        alt: 'SNarGO — 수능 특화 Vertical AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNarGO — 수능 특화 Vertical AI | SN Academy',
    description:
      'SNarGO는 수능에 최적화된 Vertical AI입니다. 2,000문제 중 1문제 수준 오답, SNarVIS 해설, 그리고 차세대 문제 생성 AI SNarGEN 로드맵까지.',
    images: ['/images/startup/SNarGo/SNargo thumbnail.PNG'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://blog.snacademy.co.kr/startup/SNargopost_1',
  },
};

export default function SNarGOPage() {
  return <SNarGOClient />;
}
