import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import StructuredData from '@/components/StructuredData';
import QueryProvider from '@/components/providers/query-provider';
// import ThemeDebugger from "@/components/ThemeDebugger";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.snacademy.co.kr'
  ),
  title: {
    default: 'SN독학기숙학원 공식 블로그 | 독학기숙학원·독학재수기숙학원·윈터스쿨 정보',
    template: '%s | SN독학기숙학원 블로그',
  },
  description:
    '독학기숙학원·재수기숙학원·반수기숙학원·윈터스쿨 선택 시 가장 중요한 기준은 \'관리 시스템\'을 갖춘 SN독학기숙학원은 하루 14시간 학습 루틴, AI 전략관리, 학습 데이터 분석을 통해 재수·반수·N수생에게 가장 빠른 성적상승을 제공하는 국내 대표 독학기숙학원 프로그램',
  keywords: [
    '독학기숙학원', '독학재수기숙학원', '윈터스쿨', '윈터스쿨 기숙학원', 'SN독학기숙학원', 'SN독학기숙학원블로그',
    '독학기숙', '독학기숙학원 추천', '독학기숙학원 비교', '독학기숙학원 장단점', '독학기숙학원 후기',
    '반수 기숙학원', '반수독학기숙학원', '삼수 독학기숙학원', '재수 독학기숙학원', '재수독학학원',
    '독학반수', '학고반수', '대입학원', '대입종합학원', '대입종합반', '재수종합학원', '재수종합반',
    '재수준비', '재수학원', '재수생', '재수생 생활', '재수반수반', 'SN기숙', 'SN기숙학원', 'SN독학', 'SN독학기숙',
    '재수기숙학원', '기숙학원', '독학기숙학원추천', '독학기숙학원 순위', '독학기숙학원 비용', '독학기숙학원 가격',
    '독학기숙학원 선택 기준', '독학기숙학원 성공 사례', '독학기숙학원 시간표', '독학기숙학원 식단',
    '독학기숙학원 인원', '독학기숙학원 규칙', '독학기숙학원 방화벽', '독학기숙학원 멘탈관리',
    '독학기숙학원 루틴', '독학기숙학원 슬럼프', '독학기숙학원 비교 분석', '독학기숙학원 장점', '독학기숙학원 단점',
    '독학기숙학원 특식', '독학기숙학원 1인실', '독학기숙학원 2인실', '2인실 독학기숙학원', '남학생독학기숙학원',
    '겨울방학 독학기숙학원', '대학입시 기숙학원', '대학수능', '반수하는법', '반수학원',
    '독학재수', '독학재수학원', '독학학원', '독재학원', 'SN독학기숙 스토리',
    '이투스247독학기숙학원', '이투스247이천기숙학원', '이투스247안성기숙학원',
    'AI 학습비서', 'AI 자동 채점', 'AI 문제 생성', 'AI 문항 생성', 'AI 오답 분석', 'AI 학습 루틴',
    '한국어 LLM', '도메인 LLM', '수능 AI', '교육 AI 플랫폼', 'AI 학습 코치', 'AI 학습 관리',
    '학습 분석 엔진', '교육 데이터 분석 AI', '학습 패턴 분석 AI', 'AI 개인 맞춤 학습',
    '수능 국어 AI', '수능 문학 AI', '비문학 지문 분석 AI', '고전문학 AI', '고전문학 해설 AI',
    '평가원 지문 분석', '수능 독서 AI', '문학 자동 문제 생성', '국어 선택지 분석 AI',
    '문학 정답 패턴 분석', '수능 국어 학습 AI', '수학 풀이 AI', '수학 문제 자동 풀이', '수학 검산 AI',
    '수능 수학 AI', '준킬러 문제 AI', '킬러 문제 AI', '수학 오답 분석 AI', '수학 풀이 과정 AI',
    '수학 풀이 논리 AI', 'SNarGO', '수학 공부 패턴 분석 AI', '수능 영어 AI', '영어 지문 요약 AI',
    '과탐 문제 생성 AI', '영어 선택지 분석 AI', '영어 독해 패턴 AI', '재수 전략 AI', '반수 전략 AI',
    '수능 공부법 AI', '독학재수 AI', '학습 루틴 관리 AI', '성적 향상 AI', '수능 시간표 AI',
    '학습 컨디션 분석 AI', '학습 패턴 예측 AI', '수능 파이널 전략 AI', 'AI 학습 코칭',
    'SNarVIS', '문제지 OCR', '오답노트 OCR', '답안지 OCR', '시험 채점 OCR', 'SNarOCR',
    '학원 방화벽', '학원 AI 방화벽', '학생 딴짓 차단 AI', '학원 집중도 모니터링',
    '독학학원 AI 관리', '학원 자동화 시스템', '학원 분석 리포트 AI', '학습 환경 보호 AI',
    '비학습 사이트 차단 AI', '교육 기관 AI 솔루션', 'SNarLink', '평가원 문항 구조 AI',
    '문제 생성 LLM', '문항 난이도 예측 모델', '수능 고전문학 요약', '수능 비문학 요약',
    '평가원 기출 분석', '고전문학 작품 정리', '수능 핵심 개념 정리', '국어 독서 전략',
    '오답노트 자동화', '문학 핵심 포인트', '수능 기출 분류',
    '도산십이곡', '강호사시가', '면앙정가', '가시리', '상춘곡', '매화사',
    '찬기파랑가', '제망매가', '관동별곡', '속미인곡', '사미인곡', '북새곡', '갑민가',
  ],
  authors: [{ name: 'SN독학기숙학원' }],
  creator: 'SN독학기숙학원',
  publisher: 'SN독학기숙학원',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/',
    siteName: 'SN독학기숙학원 공식 블로그',
    title: 'SN독학기숙학원 공식 블로그 | 독학기숙학원·독학재수기숙학원·윈터스쿨 정보',
    description:
      '독학기숙학원·재수기숙학원·반수기숙학원·윈터스쿨 선택 시 가장 중요한 기준은 \'관리 시스템\'을 갖춘 SN독학기숙학원은 하루 14시간 학습 루틴, AI 전략관리, 학습 데이터 분석을 통해 재수·반수·N수생에게 가장 빠른 성적상승을 제공하는 국내 대표 독학기숙학원 프로그램',
    images: [
      {
        url: 'https://blog.snacademy.co.kr/assets/img/snacademy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SN독학기숙학원 공식 블로그',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN독학기숙학원 공식 블로그 | 독학기숙학원·독학재수기숙학원·윈터스쿨 정보',
    description: '독학기숙학원·재수기숙학원·반수기숙학원·윈터스쿨 선택 시 가장 중요한 기준은 \'관리 시스템\'을 갖춘 SN독학기숙학원',
    images: ['https://blog.snacademy.co.kr/assets/img/snacademy-og.jpg'],
  },
  alternates: {
    canonical: 'https://blog.snacademy.co.kr/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'naverbot': 'index,follow',
    'yeti': 'index,follow',
    'bingbot': 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
    'daumoa': 'index,follow',
    'classification': 'AI스타트업, 독학기숙학원, 독학재수기숙학원, 컬럼, 문제 다운로드, SN Originals, 재수기숙학원, 대입학원, 대입종합학원, 윈터스쿨, 반수기숙학원, 입시정보 블로그',
    'article:tag': [
      '독학기숙학원', 'SN독학기숙학원', '독학기숙학원 추천', '독학기숙학원 후기', '독학기숙',
      '독학재수기숙학원', '독학재수기숙학원 추천', '독학재수기숙학원 후기',
      '재수 독학기숙학원', '삼수 독학기숙학원', '반수 기숙학원', '반수독학기숙학원',
      'SN기숙학원', 'SN독학', 'SN독학기숙', '재수학원', '재수독학학원',
      '독학반수', '학고반수', '대입학원', '대입종합학원', '대입종합반',
      '재수종합학원', '재수종합반', '재수준비', '재수생 생활',
      '겨울방학 독학기숙학원', '대학입시 기숙학원', '윈터스쿨 기숙학원', '기숙학원 윈터스쿨',
      '독학기숙학원 시간표', '독학기숙학원 비용', '독학기숙학원 가격', '독학기숙학원 순위',
      '독학기숙학원 1인실', '독학기숙학원 2인실', '의대 독학기숙학원', '약대 독학기숙학원',
      '수능 AI', '도메인 LLM', 'AI 문제 생성',
    ].join(','),
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/mstile-144x144.png',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/sn_logo.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'Y6sre3jJPoA9rk5rlvcAP-3Zv4c704_j7XVCmhOxgRI',
    other: {
      'naver-site-verification': 'naver8256749101af010811d290714b1069e2.html',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <StructuredData type="organization" data={{}} />
        {/* Privacy-friendly analytics by Plausible */}
        <script
          async
          src="https://plausible.io/js/pa-0afPP1VTnRwf7otAMX-fJ.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init()
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="sn-blog-theme-v2"
        >
          <QueryProvider>
            {/* <ThemeDebugger /> */}
            <div className="min-h-screen">
              <Header />
              <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6 lg:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                  <main className="lg:col-span-3 order-1">{children}</main>
                  <aside className="order-2 lg:order-2">
                    <Sidebar />
                  </aside>
                </div>
              </div>
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
