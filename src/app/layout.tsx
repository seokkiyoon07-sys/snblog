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
    default: 'SN Academy Blog',
    template: '%s | SN Academy Blog',
  },
  description:
    'SN Academy의 교육 혁신과 AI 기술을 소개합니다. SNarGO, SNarGPT, SNarlink 등 교육 AI 제품과 입시 정보, 학습 컬럼을 확인하세요.',
  keywords: [
    'SN Academy',
    'SNarGO',
    'SNarGPT',
    'SNarlink',
    '수능 AI',
    '교육 AI',
    '입시 정보',
    '학습 컬럼',
    '교육 혁신',
    'AI 스타트업',
    '수학',
    '교육기술',
  ],
  authors: [{ name: 'SN Academy' }],
  creator: 'SN Academy',
  publisher: 'SN Academy',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr',
    siteName: 'SN Academy Blog',
    title: 'SN Academy Blog',
    description:
      'SN Academy의 교육 혁신과 AI 기술을 소개합니다. SNarGO, SNarGPT, SNarlink 등 교육 AI 제품과 입시 정보, 학습 컬럼을 확인하세요.',
    images: [
      {
        url: '/images/sn-logo.png',
        width: 1200,
        height: 630,
        alt: 'SN Academy Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN Academy Blog',
    description: 'SN Academy의 교육 혁신과 AI 기술을 소개합니다.',
    images: ['/images/sn-logo.png'],
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/sn-logo.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
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
