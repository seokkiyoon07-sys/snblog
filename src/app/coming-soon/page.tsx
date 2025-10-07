import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '준비중입니다 | SN Academy',
  description: 'SN독학재수학원 대치점이 곧 오픈됩니다.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <Link
            href="/startup/ai-startup"
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors font-medium text-sm"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            AI 스타트업으로 돌아가기
          </Link>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-sn-primary to-sn-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            준비중입니다
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            <strong className="text-sn-primary">SN독학재수학원 대치점</strong>이
            <br />곧 오픈될 예정입니다.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              🚀 오픈 예정
            </h2>
            <p className="text-slate-600 mb-6">
              SN독학재수학원 대치점은 현재 준비 중이며,
              <br />
              더 나은 교육 환경과 AI 기술을 제공하기 위해
              <br />
              최선을 다하고 있습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-sn-primary rounded-full mr-3"></div>
                <span>최신 AI 학습 시스템</span>
              </div>
              <div className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-sn-primary rounded-full mr-3"></div>
                <span>개인별 맞춤형 학습</span>
              </div>
              <div className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-sn-primary rounded-full mr-3"></div>
                <span>전문 강사진</span>
              </div>
              <div className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-sn-primary rounded-full mr-3"></div>
                <span>최적의 학습 환경</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="https://www.snacademy.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-sn-primary text-white font-semibold rounded-xl hover:bg-sn-primary-dark transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              양평점 방문하기
            </Link>

            <div className="text-sm text-slate-500">
              문의사항이 있으시면 언제든 연락주세요
            </div>
          </div>
        </div>

        {/* 배경 장식 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sn-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </main>
  );
}
