import Image from 'next/image';

const statements = [
  [
    'ㄱ',
    'B가 지속되어 산호초의 구조가 훼손되면 해양 생물의 서식지와 연안의 파랑 완충 기능이 약화될 수 있다.',
  ],
  ['ㄴ', 'A의 발생 지역은 C의 발생 지역보다 대체로 연평균 기온이 높다.'],
  [
    'ㄷ',
    '(가)에는 ‘지반 침하에 따른 시설물 손상 및 토양 유기물의 분해에 따른 온실가스 방출’이 들어갈 수 있다.',
  ],
  [
    'ㄹ',
    'C의 호수 면적 감소는 농경지 확대를 위한 관개용수 이용 증가와 무관하다.',
  ],
];
const options = ['ㄱ, ㄷ', 'ㄱ, ㄹ', 'ㄴ, ㄷ', 'ㄱ, ㄴ, ㄷ', 'ㄱ, ㄷ, ㄹ'];
const markers = ['①', '②', '③', '④', '⑤'];
const explanations = [
  [
    'ㄱ · 옳음',
    '산호초는 해양 생물의 서식지를 제공하고 파랑 에너지를 줄이는 역할을 합니다. 백화 자체가 곧 폐사를 뜻하는 것은 아니지만, 보기처럼 훼손이 지속되어 산호초의 구조가 손상되면 서식지와 파랑 완충 기능이 약화될 수 있습니다.',
  ],
  [
    'ㄴ · 틀림',
    '지도에 표시된 A는 북아메리카와 유라시아의 고위도 지역이고, C는 중앙아시아의 아랄해 일대입니다. 표시된 A 지역은 C 지역보다 대체로 연평균 기온이 낮습니다. 정확한 기온 수치보다 두 지역의 상대적인 차이를 판단하면 됩니다.',
  ],
  [
    'ㄷ · 옳음',
    '영구동토층이 녹으면 지반이 침하하여 건물·도로 등의 시설물이 손상될 수 있습니다. 또한 토양 속 유기물이 미생물에 의해 분해되면서 이산화탄소나 메탄 등의 온실가스가 방출될 수 있습니다. 방출 양상은 토양의 수분·산소 조건 등에 따라 달라집니다.',
  ],
  [
    'ㄹ · 틀림',
    '아랄해의 축소는 관개 농업을 위한 하천수 이용 증가와 관련됩니다. 관개용 취수 증가 → 호수 유입량 감소 → 호수 면적 감소의 관계이므로 “무관하다”는 설명은 틀립니다. 농경지의 염류화만으로 호수 축소의 원인이 증명되는 것은 아니며, 유입 하천수 이용과 연결하여 이해해야 합니다.',
  ],
];

export function QuestionTwoPractice() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        예시문항 2번 연계 · 환경 문제의 원인·영향·분포
      </p>
      <article
        aria-labelledby="q2-practice-heading"
        className="sn-exam-paper border border-gray-300 bg-white px-4 py-6 text-gray-950 shadow-sm sm:px-8 sm:py-8"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b-2 border-gray-900 pb-3 text-sm">
          <span className="font-bold">SNargen 생성 변형문제</span>
          <span>통합사회 · 연습 문항</span>
        </div>
        <h3
          id="q2-practice-heading"
          className="mb-5 break-keep text-base font-bold leading-8 sm:text-lg"
        >
          <span className="mr-2">[문항]</span>다음은 지구적 환경 문제를 조사하여
          작성한 탐구 보고서의 일부이다. 이에 대한 설명으로 옳은 것만을
          &lt;보기&gt;에서 있는 대로 고른 것은?
        </h3>
        <section
          aria-labelledby="q2-report-heading"
          className="border border-gray-800 p-3 sm:p-5"
        >
          <h4
            id="q2-report-heading"
            className="mb-5 text-center text-base font-bold sm:text-lg"
          >
            [지구적 환경 문제 탐구 보고서]
          </h4>
          <table className="w-full table-fixed border-collapse text-[13px] leading-6 sm:text-[15px] sm:leading-7">
            <caption className="pb-3 text-left text-base font-bold">
              1. 주요 원인과 현상
            </caption>
            <colgroup>
              <col className="w-[12%]" />
              <col className="w-[40%]" />
              <col className="w-[48%]" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="border border-gray-800 p-2">
                  구분
                </th>
                <th scope="col" className="border border-gray-800 p-2">
                  주요 원인
                </th>
                <th scope="col" className="border border-gray-800 p-2">
                  주요 현상 및 영향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-800 p-2">
                  A
                </th>
                <td className="border border-gray-800 p-2 sm:p-3">
                  지구 온난화에 따른 고위도 지역의 급격한 기온 상승
                </td>
                <td className="border border-gray-800 p-2 text-center font-bold sm:p-3">
                  (가)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-800 p-2">
                  B
                </th>
                <td className="border border-gray-800 p-2 sm:p-3">
                  해양 온난화에 따른 수온 상승 및 대기 중 이산화 탄소 흡수에
                  따른 해양 산성화
                </td>
                <td className="border border-gray-800 p-2 sm:p-3">
                  산호 백화 및 성장 저하, 장기적 훼손에 따른 해양 생물 서식지
                  감소
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-800 p-2">
                  C
                </th>
                <td className="border border-gray-800 p-2 text-center font-bold sm:p-3">
                  (나)
                </td>
                <td className="border border-gray-800 p-2 sm:p-3">
                  관개 농업 지역의 토양 염류화, 호수 면적 감소에 따른 어업
                  쇠퇴와 주민 이주
                </td>
              </tr>
            </tbody>
          </table>
          <h5 className="mb-3 mt-6 text-base font-bold">
            2. 주요 발생 지역의 사례
          </h5>
          <figure>
            {/* Display only the map area of the supplied report; the revised table above is accessible HTML. */}
            <div className="relative aspect-[1390/750] overflow-hidden bg-white">
              <Image
                src="/problems/Integrated_Social_Studies/28examples/Practice_Questions/2/report-source.png"
                width={1390}
                height={1777}
                unoptimized
                sizes="(max-width: 768px) 100vw, 650px"
                alt="세계 지도. 원 A는 알래스카·캐나다 북부와 유라시아 북부의 고위도 지역, 사각형 B는 카리브해·동남아시아·오스트레일리아 북동부 연안, 삼각형 C는 중앙아시아 아랄해 일대를 표시한다. 적도와 북위 30도·60도, 남위 30도가 표시되어 있다."
                className="absolute left-0 h-auto w-full max-w-none"
                style={{ top: '-126.666667%' }}
              />
            </div>
            <figcaption className="mt-3 text-xs leading-5 sm:text-sm">
              ※ A, B, C는 각각 주요 발생 지역의 사례를 나타냄. 범례: ● A, ■ B, ▲
              C.
            </figcaption>
          </figure>
        </section>
        <section
          aria-labelledby="q2-practice-statements"
          className="relative mt-7 border border-gray-800 px-4 pb-4 pt-5 sm:px-5"
        >
          <h4
            id="q2-practice-statements"
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-4 font-bold"
          >
            &lt;보기&gt;
          </h4>
          <ul className="space-y-3 text-[15px] leading-8 sm:text-base">
            {statements.map(([label, text]) => (
              <li
                key={label}
                className="grid grid-cols-[1.5em_minmax(0,1fr)] gap-1"
              >
                <span>{label}.</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>
        <ol
          aria-label="선택지"
          className="mt-6 grid list-none grid-cols-2 gap-x-4 gap-y-3 text-[15px] leading-7 sm:grid-cols-3 sm:text-base"
        >
          {options.map((option, index) => (
            <li key={option}>
              <span className="mr-2">{markers[index]}</span>
              {option}
            </li>
          ))}
        </ol>
      </article>
      <details className="rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-gray-900">
        <summary className="cursor-pointer rounded-xl px-5 py-4 font-semibold text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 dark:text-emerald-200">
          정답·해설 보기
        </summary>
        <div className="space-y-5 border-t border-emerald-200 px-5 py-5 text-sm leading-7 text-gray-700 dark:border-emerald-900 dark:text-gray-300">
          <p className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
            정답 ① · ㄱ, ㄷ
          </p>
          <p>
            A는 영구동토층 해빙, B는 산호초 생태계 훼손, C는 아랄해 일대의 호수
            축소와 토양 염류화입니다. 표와 지도를 연결한 뒤 원인과 영향을
            판단합니다. (나)에는 관개 농업을 위한 유입 하천수의 과도한 취수 등이
            들어갈 수 있습니다.
          </p>
          <dl className="space-y-4">
            {explanations.map(([label, text]) => (
              <div key={label}>
                <dt className="font-bold">{label}</dt>
                <dd className="mt-1">{text}</dd>
              </div>
            ))}
          </dl>
          <p>
            학습 포인트: 고위도 지역과 중앙아시아의 기후를 비교하고, 환경 변화가
            시설물·어업·주민 생활에 미치는 영향을 원인과 연결하여 설명해 보세요.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            제공된 변형문항에 대한 SN 해설입니다.
          </p>
        </div>
      </details>
    </div>
  );
}
