import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SN Academy Blog",
  description: "SN 학원의 주요 사업내용, 컬럼, 입시정보, 후기를 공유하는 블로그입니다.",
  keywords: "SN, 학원, 입시, 교육, 블로그, 컬럼, 후기",
  verification: {
    google: "Y6sre3jJPoA9rk5rlvcAP-3Zv4c704_j7XVCmhOxgRI",
    other: {
      "naver-site-verification": "009b8ffadd30a56b1c984244f455759c1eb54200",
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
        <StructuredData 
          type="organization"
          data={{}}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6 lg:py-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                <main className="lg:col-span-3 order-1">
                  {children}
                </main>
                <aside className="order-2 lg:order-2">
                  <Sidebar />
                </aside>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
