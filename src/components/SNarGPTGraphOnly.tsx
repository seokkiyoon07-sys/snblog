'use client';

import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

export default function SNarGPTGraphOnly() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <div className="my-12">
      {/* 맥북 프레임 */}
      <div className="relative mx-auto max-w-4xl">
        {/* 맥북 상단 베젤 */}
        <div className="bg-gray-800 dark:bg-gray-900 rounded-t-2xl pt-3 pb-2 px-4">
          {/* 브라우저 컨트롤 버튼 */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* 주소창 */}
          <div className="bg-gray-700 dark:bg-gray-950 rounded-lg px-4 py-2 flex items-center gap-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gray-300 text-sm flex-1">snargpt.ai</span>
          </div>
        </div>

        {/* 브라우저 컨텐츠 영역 */}
        <div className="bg-[#0a0e1a] border-x-4 border-b-4 border-gray-800 dark:border-gray-900 rounded-b-2xl p-6 md:p-8">
          {/* SNarGPT 인터페이스 */}
          <div className="flex flex-col h-full">
            {/* 헤더 */}
            <div className="border-b border-gray-700 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-white">SNarGPT</h2>
              <p className="text-sm text-gray-400 mt-1">수능 전문 AI 학습 파트너</p>
            </div>

            {/* 채팅 메시지 영역 - 그래프 시각화만 표시 */}
            <div className="flex-1 min-h-[300px]">
              <div className="space-y-4">
                {/* 사용자 메시지 */}
                <div className="flex justify-end">
                  <div className="bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                    <p className="text-sm">@snarvis 이거 그래프로 보여줘</p>
                  </div>
                </div>

                {/* AI 응답 - 그래프 */}
                <div className="flex justify-start">
                  <div className="bg-purple-600/20 border border-purple-500/50 text-purple-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                    <p className="font-semibold text-purple-200 text-sm mb-2">(From SNarVIS)</p>
                    <div className="text-xs space-y-3">
                      <p className="text-purple-100">
                        네, 방금 그렸어요! 왼쪽은 등비수열 <InlineMath math="a_n" />의 stem 그래프, 오른쪽은 부분합 <InlineMath math="S_n" />과 극한값 <InlineMath math="S_\infty" />를 표시했어요.
                      </p>
                      <p className="text-purple-100">
                        정수 항 <InlineMath math="a_2 = -9, a_3 = 6, a_4 = -4" />는 빨간색으로 강조했습니다.
                      </p>
                      <p className="text-purple-100">
                        부분합은 공비가 음수라 진동하며 <InlineMath math="S_\infty = \frac{a_1}{1-r} = \frac{27/2}{1-(-2/3)} = \frac{81}{10} = 8.1" />로 수렴하는 모습이 보입니다.
                      </p>

                      <div className="mt-3 bg-gray-800/50 border border-gray-700 rounded-lg p-3 overflow-hidden">
                        <img
                          src="/images/startup/snargpt-guide-1/6958-1_solution.png"
                          alt="등비수열 그래프"
                          className="w-full rounded cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setIsImageModalOpen(true)}
                          onKeyDown={(e) => e.key === 'Enter' && setIsImageModalOpen(true)}
                          role="button"
                          tabIndex={0}
                        />
                      </div>

                      <p className="text-purple-100 text-xs">
                        원하시면 n 범위를 늘리거나, 막대 대신 꺾은선/점 표기, 주석 위치 등 스타일을 바꿀 수 있어요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 입력창 */}
            <div className="mt-6 flex gap-2">
              <input
                type="text"
                placeholder="SNarGPT에게 질문하세요..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                disabled
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold transition-colors text-sm">
                전송
              </button>
            </div>

            {/* 안내 문구 */}
            <p className="text-xs text-gray-500 mt-3 text-center">
              * 실제 SNarGPT 인터페이스의 시연 화면입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 이미지 확대 모달 */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setIsImageModalOpen(false)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
              aria-label="닫기"
            >
              ✕
            </button>
            <img
              src="/images/startup/snargpt-guide-1/6958-1_solution.png"
              alt="이미지 확대"
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.key === 'Enter' && e.stopPropagation()}
              role="img"
              tabIndex={0}
            />
          </div>
        </div>
      )}
    </div>
  );
}
