'use client';

import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

type ViewType = 'question' | 'search' | 'info' | 'school';

export default function SNarGPTInterface() {
  const [activeView, setActiveView] = useState<ViewType>('question');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const renderContent = () => {
    switch (activeView) {
      case 'question':
        return (
          <div className="space-y-4">
            {/* 사용자 메시지 */}
            <div className="flex justify-end">
              <div className="bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                <p className="text-sm">@snargo 이 문제 풀어주세요</p>
                <div className="mt-2 bg-gray-800/50 border border-gray-700 rounded-lg p-3 overflow-hidden">
                  <img
                    src="/images/startup/snargpt-guide-1/6958-1.png"
                    alt="수능 문제"
                    className="w-full rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => {
                      setModalImageSrc('/images/startup/snargpt-guide-1/6958-1.png');
                      setIsImageModalOpen(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setModalImageSrc('/images/startup/snargpt-guide-1/6958-1.png');
                        setIsImageModalOpen(true);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>

            {/* AI 응답 */}
            <div className="flex justify-start">
              <div className="bg-purple-600/20 border border-purple-500/50 text-purple-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="font-semibold text-purple-200 text-sm mb-2">(From SNarGo)</p>
                <div className="text-xs space-y-3">
                  <p className="text-purple-100">
                    요청 고맙습니다. 본 문항은 SN RAG에서 2025.09 평가원 모의평가 미적분 29번과 동일한 문제로 확인되었으며,
                    아래 해설은 SN RAG의 공식 해설을 바탕으로 정리한 것입니다.
                  </p>

                  <div className="bg-purple-900/30 rounded-lg p-3">
                    <p className="font-semibold text-purple-200 mb-2">📝 문제 전문</p>
                    <div className="text-purple-100 space-y-1 text-xs">
                      <p>첫째항이 양수이고 공비가 유리수인 등비수열 <InlineMath math="\{a_n\}" />에 대하여 급수 <InlineMath math="\sum_{n=1}^{\infty} a_n" />이 수렴하고, 수열 <InlineMath math="\{a_n\}" />이 다음 조건을 만족시킨다.</p>
                      <p className="ml-3">- (가) <InlineMath math="a_1 + a_2 < 10" /></p>
                      <p className="ml-3">- (나) 수열 <InlineMath math="\{a_n\}" />의 정수인 항의 개수는 3이고, 이 세 항의 곱은 216이다.</p>
                      <p><InlineMath math="\sum_{n=1}^{\infty} a_n = \frac{q}{p}" />일 때, <InlineMath math="p+q" />의 값을 구하시오.</p>
                      <p className="text-xs italic">(단, p와 q는 서로소인 자연수이다.) [4점]</p>
                    </div>
                  </div>

                  <div className="bg-purple-900/30 rounded-lg p-3">
                    <p className="font-semibold text-purple-200 mb-2">✅ 해설</p>
                    <div className="text-purple-100 space-y-2 text-xs">
                      <p><span className="text-yellow-200">▪︎</span> 무한등비급수 수렴이므로 공비 <InlineMath math="r" />은 유리수이면서 <InlineMath math="-1 < r < 1" />.</p>

                      <p><span className="text-yellow-200">▪︎</span> 정수 항이 정확히 3개라는 점을 이용. 연속한 세 항 <InlineMath math="a_m, a_{m+1}, a_{m+2}" />만 정수라고 두면:</p>
                      <p className="ml-3"><InlineMath math="a_m \cdot (a_m r) \cdot (a_m r^2) = a_m^3 r^3 = 216" /></p>
                      <p className="ml-3"><InlineMath math="\Rightarrow (a_m r)^3 = 216 \Rightarrow a_m r = 6" /></p>
                      <p className="ml-3">따라서 <InlineMath math="a_{m+1} = 6" />, 그리고 <InlineMath math="a_m a_{m+2} = 36" /></p>

                      <p><span className="text-yellow-200">▪︎</span> 정수 쌍이면서 <InlineMath math="|a_m| > |a_{m+2}|" />이므로 가능한 절댓값은 (36,1), (18,2), (12,3), (9,4).</p>
                      <p className="ml-3"><InlineMath math="a_m = 9" />이면 <InlineMath math="r = \pm 2/3" />이 가능하며, 이때만 정수 항이 정확히 3개.</p>

                      <p><span className="text-yellow-200">▪︎</span> (가)를 적용하면 <InlineMath math="r = 2/3" />은 불가 (조건 위배). <InlineMath math="r = -2/3" />만 가능.</p>
                      <p className="ml-3"><InlineMath math="6 = a_1 r^m \Rightarrow a_1 = 6(3/2)^m" /></p>
                      <p className="ml-3"><InlineMath math="a_1(1+r) = a_1/3 < 10 \Rightarrow a_1 < 30 \Rightarrow m=2" /></p>
                      <p className="ml-3">따라서 <InlineMath math="a_1 = 27/2" /></p>

                      <p><span className="text-yellow-200">▪︎</span> 급수의 합:</p>
                      <p className="ml-3"><InlineMath math="\sum_{n=1}^{\infty} a_n = \frac{a_1}{1-r} = \frac{27/2}{5/3} = \frac{81}{10}" /></p>
                      <p className="ml-3">따라서 <InlineMath math="(p,q) = (10,81)" />이고 <InlineMath math="p+q = 91" /></p>
                    </div>
                  </div>

                  <div className="bg-green-900/30 rounded-lg p-3 border border-green-500/30">
                    <p className="font-semibold text-green-200">🎯 정답: 91</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 사용자 메시지 2 */}
            <div className="flex justify-end">
              <div className="bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                <p className="text-sm">@snarvis 이거 그래프로 보여줘</p>
              </div>
            </div>

            {/* AI 응답 2 - 그래프 */}
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
                      onClick={() => {
                        setModalImageSrc('/images/startup/snargpt-guide-1/6958-1_solution.png');
                        setIsImageModalOpen(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setModalImageSrc('/images/startup/snargpt-guide-1/6958-1_solution.png');
                          setIsImageModalOpen(true);
                        }
                      }}
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
        );

      case 'search':
        return (
          <div className="space-y-4">
            {/* 사용자 메시지 1 */}
            <div className="flex justify-end">
              <div className="bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                <p className="text-sm">@snarvis 2023 수능 수학 미적 30번과 비슷한 문제 3개 찾아줘</p>
              </div>
            </div>

            {/* AI 응답 1 */}
            <div className="flex justify-start">
              <div className="bg-purple-600/20 border border-purple-500/50 text-purple-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="font-semibold text-purple-200 text-sm mb-2">(From SNarVIS)</p>
                <div className="text-xs space-y-3">
                  <p className="text-purple-100">
                    안녕하세요! 요청하신 "2023학년도 수능 수학 미적분 30번"과 유사한 최상난이도(4점) 미적분 문항 3개를 SN RAG에서 찾아 드렸어요.
                    아래 문항들은 SNarGo가 예전에 풀어둔 해설도 있습니다.
                  </p>

                  <div className="bg-purple-900/30 rounded-lg p-3 space-y-3">
                    {/* 문제 1 */}
                    <div className="border-b border-purple-500/30 pb-3">
                      <p className="font-semibold text-purple-200 mb-1">📄 [평가원] 2025.06.04 모의평가 미적분 30번</p>
                      <div className="text-purple-100 text-xs mb-2">
                        <p className="mb-1">최고차항의 계수가 1인 삼차함수 <InlineMath math="f(x)" />에 대하여</p>
                        <p className="mb-2"><InlineMath math="g(x) = |f(\frac{2}{1+e^{-x}})|" />라 하자.</p>
                        <p>함수 <InlineMath math="g(x)" />가 실수 전체에서 미분가능하고...</p>
                      </div>
                      <div className="text-purple-100 text-xs italic space-y-1">
                        <p>조건: <InlineMath math="g(x)" />는 <InlineMath math="x=0" />에서 극소,</p>
                        <p><InlineMath math="g'(\ln 3) < 0" />, <InlineMath math="|g'(-\ln 3)| = \frac{3}{8}g(-\ln 3)" /></p>
                      </div>
                      <p className="text-green-200 text-xs mt-1">✓ SNarGo 해설 있음 [4점]</p>
                    </div>

                    {/* 문제 2 */}
                    <div className="border-b border-purple-500/30 pb-3">
                      <p className="font-semibold text-purple-200 mb-1">📄 [평가원] 2022.06.09 모의평가 미적분 30번</p>
                      <div className="text-purple-100 text-xs mb-2">
                        <p className="mb-1">양수 <InlineMath math="a" />에 대하여 함수 <InlineMath math="f(x) = \frac{x^2 - ax}{e^x}" /> 이다.</p>
                        <p className="mb-1">실수 <InlineMath math="t" />에 대하여 <InlineMath math="x" />에 대한 방정식</p>
                        <p><InlineMath math="f(x) = f'(t)(x-t) + f(t)" />의 서로 다른 실근의 개수를 <InlineMath math="g(t)" />라 하자.</p>
                      </div>
                      <div className="text-purple-100 text-xs italic">
                        <p>조건: <InlineMath math="g(5) + \lim_{t \to 5} g(t) = 5" /></p>
                      </div>
                      <p className="text-green-200 text-xs mt-1">✓ SNarGo 해설 있음 [4점]</p>
                    </div>

                    {/* 문제 3 */}
                    <div>
                      <p className="font-semibold text-purple-200 mb-1">📄 [교육청] 2021.10.12 학력평가 미적분 30번</p>
                      <div className="text-purple-100 text-xs mb-2">
                        <p className="mb-1">서로 다른 두 양수 <InlineMath math="a, b" />에 대하여</p>
                        <p className="mb-1"><InlineMath math="f(x) = -\frac{ax^3 + bx}{x^2 + 1}" />라 하자.</p>
                        <p className="mb-1">모든 실수 <InlineMath math="x" />에 대하여 <InlineMath math="f'(x) \neq 0" />이고,</p>
                        <p>두 함수 <InlineMath math="g(x) = f(x) - f^{-1}(x)" />, <InlineMath math="h(x) = (g \circ f)(x)" />가...</p>
                      </div>
                      <div className="text-purple-100 text-xs italic space-y-1">
                        <p>조건: <InlineMath math="g(2) = h(0)" />,</p>
                        <p><InlineMath math="g'(2) = -5h'(2)" /></p>
                      </div>
                      <p className="text-green-200 text-xs mt-1">✓ SNarGo 해설 있음 [4점]</p>
                    </div>
                  </div>

                  <p className="text-blue-200 text-xs mt-3">
                    💡 위 문항들은 SN RAG에서 유사 유형으로 검색해 온 것이며, SNarGo가 예전에 풀어둔 해설이 있습니다.
                    원하시면 바로 해설/정답 풀이를 연결해 드릴게요!
                  </p>
                </div>
              </div>
            </div>

            {/* 사용자 메시지 2 */}
            <div className="flex justify-end">
              <div className="bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                <p className="text-sm">@snarvis 이 문제의 어떤 부분이 유사한지 알려줘</p>
              </div>
            </div>

            {/* AI 응답 2 */}
            <div className="flex justify-start">
              <div className="bg-purple-600/20 border border-purple-500/50 text-purple-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="font-semibold text-purple-200 text-sm mb-2">(From SNarVIS)</p>
                <div className="text-xs space-y-3">
                  <p className="text-purple-100 font-semibold">유사 포인트를 딱 정리해 드릴게요.</p>
                  <p className="text-purple-100">
                    기본적으로 세 문제 모두 <span className="text-yellow-200 font-semibold">"접선-원함수 비교"</span>를 해야 하는 문제예요.
                  </p>
                  <p className="text-purple-100">
                    2023 수능 30번은 <InlineMath math="f'(x) = |sinx|cosx" />인데, 이 함수를 다시 적분하면 <InlineMath math="f(x)" />를 구할 수 있죠.
                    그리고 문제에서 주어진 <InlineMath math="h'(x) = f(x) - g(x)" />라는 건, <InlineMath math="h(x)" />의 기울기가 바로 "원함수 <InlineMath math="f(x)" /> - 접선 <InlineMath math="g(x)" />의 차이"라는 뜻이죠.
                  </p>

                  <div className="bg-purple-900/30 rounded-lg p-3 space-y-2">
                    <div>
                      <p className="text-yellow-200 font-semibold mb-1">🔍 공통 설계 / 핵심 사고 흐름</p>
                      <div className="text-purple-100 space-y-2">
                        <div className="pl-3 border-l-2 border-yellow-400">
                          <p className="mb-1"><span className="font-semibold">1. 접선-원함수 비교 프레임</span></p>
                          <p className="text-xs text-purple-200">
                            <InlineMath math="h'(x) = f(x) - g(x)" />형태는 "접선보다 원함수가 얼마나 위/아래에 있는가?"를 물어보는 거예요.
                            <InlineMath math="h(x)" />가 극값을 가진다 → <InlineMath math="f(x) = g(x)" />되는 순간이 존재 (접선과 원함수가 만남).
                            이때 미분 불가 지점까지 고려해야 합니다.
                          </p>
                        </div>

                        <div className="pl-3 border-l-2 border-yellow-400">
                          <p className="mb-1"><span className="font-semibold">2. 미분 불가 지점 처리</span></p>
                          <p className="text-xs text-purple-200">
                            2023 수능처럼 <InlineMath math="|sinx|cosx" />는 <InlineMath math="x = k\pi" />에서 미분 불가예요.
                            여기서 "미분가능하도록 맞춰라"는 조건이 나오면, 미분 불가 지점에서 좌미분 = 우미분을 강제하거나,
                            애초에 접촉하지 않도록 조건을 설정해야 해요.
                          </p>
                        </div>

                        <div className="pl-3 border-l-2 border-yellow-400">
                          <p className="mb-1"><span className="font-semibold">3. 대칭성/주기성 활용</span></p>
                          <p className="text-xs text-purple-200">
                            찾아드린 3문제 모두 "대칭, 주기, 함수 합성"을 활용해요.<br/>
                            2025.06 모의: <InlineMath math="g(x) = |f(\frac{2}{1+e^{-x}})|" /> → 시그모이드 <InlineMath math="1/(1+e^{-x})" /> 대칭<br/>
                            2022.06 모의: 접선 방정식 <InlineMath math="f(x) = f'(t)(x-t) + f(t)" /> → <InlineMath math="t=5" />에서 근 개수 변화<br/>
                            2021.10 교육청: <InlineMath math="f(x) - f^{-1}(x)" /> → 대칭성 <InlineMath math="y = x" /> 고려
                          </p>
                        </div>

                        <div className="pl-3 border-l-2 border-yellow-400">
                          <p className="mb-1"><span className="font-semibold">4. 조건 → 미지수 결정</span></p>
                          <p className="text-xs text-purple-200">
                            극값 조건 / 미분값 조건 / 적분값 조건 조합으로 <InlineMath math="a, b" /> 등 상수를 먼저 확정하고,
                            나중에 "조건을 만족하는 함수 형태 역추적"하는 논리예요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-blue-200 text-xs mt-3">
                    💡 결국, 이 문제들은 "미분 불가 지점을 어떻게 회피/이용할 것인가"와 "접선-원함수 사이 극값 논리를 어떻게 설계할 것인가"를 묻는 동일 계열이에요.
                    평가원이 2020년 이후 자주 쓰는 고난도 패턴입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'info':
        return (
          <div className="space-y-4">
            {/* 사용자 메시지 */}
            <div className="flex justify-end">
              <div className="bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                <p className="text-sm">@snarvis 님, 내일 모의고사 시험 범위 알려줘</p>
              </div>
            </div>

            {/* AI 응답 */}
            <div className="flex justify-start">
              <div className="bg-purple-600/20 border border-purple-500/50 text-purple-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="font-semibold text-purple-200 text-sm mb-2">(From SNarVIS)</p>
                <div className="text-xs space-y-2">
                  <p className="text-purple-100">내일 모의고사 정보를 확인했습니다.</p>

                  <div className="bg-purple-900/30 rounded-lg p-3 mt-3">
                    <p className="font-semibold text-purple-200 mb-2">📅 11월 10일 (일) 모의고사</p>
                    <div className="space-y-1 text-purple-100">
                      <p>• 국어: 독서, 문학, 화법과 작문</p>
                      <p>• 수학: 수학I, 수학II, 미적분</p>
                      <p>• 영어: 듣기/독해 전 범위</p>
                    </div>
                  </div>

                  <div className="bg-blue-900/30 rounded-lg p-3 mt-2">
                    <p className="font-semibold text-blue-200 mb-2">💡 오늘 복습 추천</p>
                    <p className="text-blue-100">최근 오답률이 높았던 미적분 극한 문제 3개를 복습하시는 것을 추천합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'school':
        return (
          <div className="space-y-4">
            {/* 사용자 메시지 */}
            <div className="flex justify-end">
              <div className="bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                <p className="text-sm">@snarvis 님, 이번 주 일정 알려줘</p>
              </div>
            </div>

            {/* AI 응답 */}
            <div className="flex justify-start">
              <div className="bg-purple-600/20 border border-purple-500/50 text-purple-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="font-semibold text-purple-200 text-sm mb-2">(From SNarVIS)</p>
                <div className="text-xs space-y-2">
                  <p className="text-purple-100">이번 주 학습 일정을 정리해드렸습니다.</p>

                  <div className="bg-purple-900/30 rounded-lg p-3 mt-3 space-y-2">
                    <div className="border-b border-purple-500/30 pb-2">
                      <p className="font-semibold text-purple-200">📅 11월 10일 (일)</p>
                      <p className="text-purple-100">• 09:00 - 모의고사 (국/수/영)</p>
                      <p className="text-purple-100">• 14:00 - 오답정리</p>
                    </div>
                    <div className="border-b border-purple-500/30 pb-2">
                      <p className="font-semibold text-purple-200">📅 11월 11일 (월)</p>
                      <p className="text-purple-100">• 19:00 - 수학 특강 (박진모 원장)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-200">📅 11월 14일 (목)</p>
                      <p className="text-purple-100">• 15:00 - 1:1 학습상담</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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

            {/* 탭 버튼 그리드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              <button
                onClick={() => setActiveView('question')}
                className={`text-center p-3 rounded-lg border transition-all ${
                  activeView === 'question'
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-700 hover:border-blue-500 hover:bg-blue-500/10'
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl">📝</span>
                  <span className={`text-xs font-semibold ${
                    activeView === 'question' ? 'text-blue-400' : 'text-gray-300'
                  }`}>문제 풀이</span>
                </div>
              </button>

              <button
                onClick={() => setActiveView('search')}
                className={`text-center p-3 rounded-lg border transition-all ${
                  activeView === 'search'
                    ? 'border-purple-500 bg-purple-500/20'
                    : 'border-gray-700 hover:border-purple-500 hover:bg-purple-500/10'
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl">🔍</span>
                  <span className={`text-xs font-semibold ${
                    activeView === 'search' ? 'text-purple-400' : 'text-gray-300'
                  }`}>유사문제 검색</span>
                </div>
              </button>

              <button
                onClick={() => setActiveView('info')}
                className={`text-center p-3 rounded-lg border transition-all ${
                  activeView === 'info'
                    ? 'border-green-500 bg-green-500/20'
                    : 'border-gray-700 hover:border-green-500 hover:bg-green-500/10'
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl">💡</span>
                  <span className={`text-xs font-semibold ${
                    activeView === 'info' ? 'text-green-400' : 'text-gray-300'
                  }`}>시험 정보</span>
                </div>
              </button>

              <button
                onClick={() => setActiveView('school')}
                className={`text-center p-3 rounded-lg border transition-all ${
                  activeView === 'school'
                    ? 'border-orange-500 bg-orange-500/20'
                    : 'border-gray-700 hover:border-orange-500 hover:bg-orange-500/10'
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl">🏫</span>
                  <span className={`text-xs font-semibold ${
                    activeView === 'school' ? 'text-orange-400' : 'text-gray-300'
                  }`}>학습 일정</span>
                </div>
              </button>
            </div>

            {/* 채팅 메시지 영역 */}
            <div className="flex-1 min-h-[300px] max-h-[400px] overflow-y-auto">
              {renderContent()}
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
              * 실제 SNarGPT 인터페이스의 시연 화면입니다. 탭을 클릭하여 다양한 기능을 확인해보세요.
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
              src={modalImageSrc}
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
