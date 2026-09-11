import Image from 'next/image';
const options = [
  '(가)는 남반구에 위치하며, 겨울 강수량이 여름 강수량보다 많다.',
  '(나)가 위치한 지역에서는 여름철의 고온 다습한 기후를 활용한 벼농사가 활발하다.',
  '(다)가 위치한 지역의 전통 가옥은 지면과 생활 공간 사이에 거리를 두어 통풍에 유리하도록 지은 형태가 나타난다.',
  '(가)는 (나)보다 1월과 7월의 월평균 기온 차이가 작다.',
  '(가)와 (나)는 모두 1월이 7월보다 낮의 길이가 길다.',
];
const markers = ['①', '②', '③', '④', '⑤'];
const src =
  '/problems/Integrated_Social_Studies/28examples/practice-5-climate.png';
export function QuestionFivePractice() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        예시문항 5번 연계 · 기후 편차와 전통 생활 모습
      </p>
      <article
        aria-labelledby="q5-practice-heading"
        className="sn-exam-paper border border-gray-300 bg-white px-4 py-6 text-gray-950 shadow-sm sm:px-8 sm:py-8"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b-2 border-gray-900 pb-3 text-sm">
          <span className="font-bold">SNargen 생성 변형문제</span>
          <span>통합사회 · 연습 문항</span>
        </div>
        <h3
          id="q5-practice-heading"
          className="mb-5 break-keep text-base leading-8 sm:text-lg"
        >
          <span className="mr-2">5.</span>다음 자료의 (가)~(다) 지역에 대한
          설명으로 옳은 것은? (단, (가)~(다)는 각각 지도에 표시된 세 지역 중
          하나임.) <span className="whitespace-nowrap">[2점]</span>
        </h3>
        <div className="space-y-4 border border-gray-800 p-4 text-[15px] leading-8 sm:p-5 sm:text-base">
          <p>
            지도에 표시된 세 지역에서 나타나는 전통적인 생활 모습의 특징은
            다음과 같다. 한 지역에서는 여름철 건조한 기후에 적응한 올리브, 포도
            등을 재배하는 수목 농업을, 또 다른 지역에서는 지면에서 올라오는
            열기와 습기를 차단하고 통풍을 원활하게 하기 위한 고상 가옥을, 마지막
            한 지역에서는 기온의 연교차가 매우 큰 환경에 적응하여 두꺼운
            통나무로 벽을 쌓고 지붕 경사를 급하게 만든 통나무 가옥을 볼 수 있다.
          </p>
          <p>
            이러한 기후 특성을 보여 주는 지표 중 기온 편차와 강수 편차는 다음과
            같이 계산할 수 있다.
          </p>
          <ul className="space-y-1">
            <li>○ 월 기온 편차 = 월평균 기온 − 연평균 기온</li>
            <li>○ 월 강수 편차 = 월 강수량 − (연 강수량 / 12)</li>
          </ul>
        </div>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="my-5 block bg-white"
          aria-label="5번 변형문제 지도와 기후 편차 그래프 크게 보기"
        >
          <Image
            src={src}
            width={2869}
            height={1546}
            unoptimized
            sizes="(max-width: 768px) 100vw, 900px"
            className="h-auto w-full"
            alt="아메리카의 A·B·C 지점 지도와 (가)·(나)·(다)의 1월·7월 기온 편차 및 강수 편차 그래프"
          />
        </a>
        <ol
          aria-label="선택지"
          className="mt-6 list-none space-y-3 text-[15px] leading-8 sm:text-base"
        >
          {options.map((option, index) => (
            <li
              key={option}
              className="grid grid-cols-[1.5em_minmax(0,1fr)] gap-1"
            >
              <span>{markers[index]}</span>
              <span>{option}</span>
            </li>
          ))}
        </ol>
      </article>
      <details className="rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-gray-900">
        <summary className="cursor-pointer rounded-xl px-5 py-4 font-semibold text-emerald-900 dark:text-emerald-200">
          정답·해설 보기
        </summary>
        <div className="space-y-4 border-t border-emerald-200 px-5 py-5 text-sm leading-7 text-gray-700 dark:border-emerald-900 dark:text-gray-300">
          <p className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
            정답 ③ · 2점
          </p>
          <p>
            <strong>지역 대응:</strong> (가)=A, (나)=C, (다)=B입니다. 기온
            편차는 왼쪽 축의 점, 강수 편차는 오른쪽 축의 막대로 읽습니다.
          </p>
          <p>
            <strong>(가)=A:</strong> 1월 기온 편차가 음수이고 7월은 양수이며, 두
            달의 기온 차이가 큽니다. 북반구 내륙의 큰 기온 연교차와 통나무
            가옥을 연결합니다.
          </p>
          <p>
            <strong>(나)=C:</strong> 1월이 여름인 남반구입니다. 여름인 1월보다
            겨울인 7월의 강수량이 많아 지중해성 기후와 수목 농업에 대응합니다.
          </p>
          <p>
            <strong>(다)=B:</strong> 적도 부근으로 1월과 7월의 기온 편차가 모두
            0에 가깝습니다. 고온 다습한 환경에서 통풍에 유리한 고상 가옥에
            대응합니다.
          </p>
          <dl className="space-y-3">
            <div>
              <dt className="font-bold">① · 틀림</dt>
              <dd>
                (가)는 북반구이며 자료에서는 7월 강수량이 1월보다 많습니다.
              </dd>
            </div>
            <div>
              <dt className="font-bold">② · 틀림</dt>
              <dd>
                (나)는 여름에 건조한 지중해성 기후입니다. 여름철 고온 다습한
                기후를 활용한다는 설명과 맞지 않습니다.
              </dd>
            </div>
            <div>
              <dt className="font-bold">③ · 옳음</dt>
              <dd>
                (다)의 고상 가옥은 지면과 생활 공간을 띄워 통풍에 유리한
                형태입니다.
              </dd>
            </div>
            <div>
              <dt className="font-bold">④ · 틀림</dt>
              <dd>
                같은 지역에서 두 달의 기온 편차를 빼면 연평균 기온이 소거됩니다.
                그래프에서 (가)의 두 점 간 차이는 약 36℃, (나)는 약 13℃로,
                (가)가 더 큽니다. 이 값은 1월과 7월의 차이이며 두 달이
                최난월·최한월인지 확인하지 않고 정확한 연교차라고 단정하지
                않습니다.
              </dd>
            </div>
            <div>
              <dt className="font-bold">⑤ · 틀림</dt>
              <dd>
                (가)는 북반구이므로 1월보다 7월의 낮이 깁니다. (나)는
                남반구이므로 1월의 낮이 더 길지만, 두 지역 모두에 해당하지는
                않습니다.
              </dd>
            </div>
          </dl>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            사용자가 제공한 지도·그래프와 최종 수정 문항에 대한 SN 해설입니다.
          </p>
        </div>
      </details>
    </div>
  );
}
