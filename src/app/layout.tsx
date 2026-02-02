import type { Metadata } from 'next';
import Script from 'next/script';
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

import { SITE_KEYWORDS } from '@/lib/constants';

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
  keywords: SITE_KEYWORDS,
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
      'naver-site-verification': '009b8ffadd30a56b1c984244f455759c1eb54200',
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
        {/* Privacy-friendly analytics by Plausible (self-hosted) */}
        <script
          defer
          data-domain="blog.snacademy.co.kr"
          src="https://analytics.snargpt.ai/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPLNZT6P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* Naver Analytics */}
        <Script src="//wcs.pstatic.net/wcslog.js" strategy="afterInteractive" />
        <Script id="naver-analytics" strategy="afterInteractive">
          {`
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "15c60eb5561b7e0";
            if(window.wcs) {
              wcs_do();
            }
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KPLNZT6P');
          `}
        </Script>
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
                  <aside className="order-2 lg:order-2 print:hidden">
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
