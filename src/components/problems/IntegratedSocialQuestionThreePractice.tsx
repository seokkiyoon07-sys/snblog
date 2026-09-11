import Image from 'next/image';

const image =
  '/problems/Integrated_Social_Studies/28examples/Practice_Questions/3/classroom-latest-source.png';
const statements = [
  [
    'ㄱ',
    '㉠은 피지배 집단의 고유한 문화적 특성을 약화시키고 지배 집단의 문화를 따르도록 하는 정책이다.',
  ],
  [
    'ㄴ',
    '㉡은 서로 다른 문화 요소가 결합하여 기존 문화와 성격이 다른 제3의 문화가 형성된 문화 융합의 사례이다.',
  ],
  [
    'ㄷ',
    '㉢은 소수 집단이 주류 문화에 동화될 것을 전제로 사회 통합을 도모하는 정책이다.',
  ],
  [
    'ㄹ',
    '선택한 문화권에서 발달한 혼혈 문화의 형성에는 B로부터 유입된 인구의 영향이 있었다.',
  ],
];
const options = ['ㄱ, ㄷ', 'ㄱ, ㄹ', 'ㄴ, ㄷ', 'ㄴ, ㄹ', 'ㄱ, ㄴ, ㄹ'];
const markers = ['①', '②', '③', '④', '⑤'];
const explanations = [
  [
    'ㄱ · 옳음',
    '피지배 집단의 고유 언어와 신앙을 억압하고 지배 집단의 문화를 따르도록 강요하는 것은 강제 동화 정책에 해당합니다.',
  ],
  [
    'ㄴ · 옳음',
    '㉡은 외래 종교와 토착 신앙이 결합하여 기존 신앙과 구별되는 새로운 신앙이 형성된 문화 융합의 사례입니다. 뒤에 제시된 전통 제의와 가톨릭 축일의 별도 거행은 문화 병존이므로 구별해야 합니다.',
  ],
  [
    'ㄷ · 틀림',
    '㉢은 다양한 문화 집단의 고유성과 대등한 공존을 보장하는 다문화주의 정책입니다. 소수 집단이 주류 문화에 동화되는 것을 전제로 하지 않습니다.',
  ],
  [
    'ㄹ · 옳음',
    '선택한 문화권은 라틴아메리카, B는 사하라 이남 아프리카입니다. 대서양 노예무역으로 강제 이주된 아프리카인들과 그 후손은 원주민·유럽계 주민과 함께 이 지역의 다양한 혼혈 문화 형성에 영향을 주었습니다.',
  ],
];

export function QuestionThreePractice() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        예시문항 3번 연계 · 문화 변동과 세계 문화권 비교
      </p>
      <article
        aria-labelledby="q3-practice-heading"
        className="sn-exam-paper border border-gray-300 bg-white px-4 py-6 text-gray-950 shadow-sm sm:px-8 sm:py-8"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b-2 border-gray-900 pb-3 text-sm">
          <span className="font-bold">SNargen 생성 변형문제</span>
          <span>통합사회 · 2.5점</span>
        </div>
        <h3
          id="q3-practice-heading"
          className="mb-5 break-keep text-base leading-8 sm:text-lg"
        >
          <span className="mr-2">[문항]</span>다음은 웹 기반 가상 수업 화면의
          일부이다. 이에 대한 설명으로 옳은 것만을 &lt;보기&gt;에서 있는 대로
          고른 것은?
        </h3>
        <section
          aria-label="웹 기반 가상 수업 자료"
          className="rounded-lg border-2 border-gray-600"
        >
          <h4 className="border-b border-gray-400 bg-gray-100 px-4 py-3 text-center font-bold">
            세계 문화와 사회 · 가상 수업
          </h4>
          <figure className="p-3">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '1202 / 614' }}
            >
              <Image
                src={image}
                width={2023}
                height={2684}
                unoptimized
                sizes="(max-width: 768px) 100vw, 750px"
                alt="세계 문화권 모식도. 멕시코에서 남아메리카에 걸친 문화권이 선택되어 있다. A는 북부 아프리카·서남아시아, B는 사하라 이남 아프리카, C는 유럽, D는 앵글로아메리카에 표시되어 있다."
                style={{
                  position: 'absolute',
                  width: '114.39%',
                  maxWidth: 'none',
                  height: 'auto',
                  left: '-7.24%',
                  top: '-47.56%',
                }}
              />
            </div>
            <figcaption className="mt-2 text-xs">
              ※ A~D와 선택한 문화권의 범위는 단순화하여 나타낸 것임.
            </figcaption>
          </figure>
          <section className="space-y-4 border-t border-gray-400 px-4 py-5 text-[15px] leading-8 sm:px-5">
            <h4 className="font-bold">[선택한 문화권의 탐구 노트]</h4>
            <p>
              외세의 진출 이후 지배 집단에 의해 외래 언어와 종교가 도입되면서
              지역 문화에 큰 변동이 일어났다.
            </p>
            <p>
              일부 지역과 시기의 식민 지배 세력은{' '}
              <strong className="underline underline-offset-4">
                ㉠ 피지배 집단의 고유 언어와 토착 신앙을 억압하고 지배 집단의
                문화를 따르도록 강요하는 정책을 실시하였다.
              </strong>
            </p>
            <p>
              외래 종교가 전파되는 과정에서{' '}
              <strong className="underline underline-offset-4">
                ㉡ 토착 신앙과 결합하여 기존 신앙과 구별되는 새로운 형태의
                신앙이 나타나기도 하였다.
              </strong>{' '}
              또한 다른 지역에서는 원주민의 전통 제의와 가톨릭 축일 행사가
              각각의 고유성을 유지하며 별도로 거행되었다.
            </p>
            <p>
              현대에 이르러 여러 국가에서는 과거의 억압적 정책을 반성하고, 헌법
              등을 통해 원주민의 고유 언어와 자치권을 보장하는 등{' '}
              <strong className="underline underline-offset-4">
                ㉢ 다양한 문화 집단의 대등한 공존을 보장하는 정책을 추진하고
                있다.
              </strong>
            </p>
          </section>
        </section>
        <section
          aria-labelledby="q3-practice-statements"
          className="relative mt-7 border border-gray-800 px-4 pb-4 pt-5 sm:px-5"
        >
          <h4
            id="q3-practice-statements"
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
            정답 ⑤ · ㄱ, ㄴ, ㄹ
          </p>
          <p>
            강제 동화·문화 융합·문화 병존·다문화주의를 구별하고, 지도에 나타난
            문화권과 역사적 인구 이동을 연결하는 문항입니다.
          </p>
          <dl className="space-y-4">
            {explanations.map(([label, text]) => (
              <div key={label}>
                <dt className="font-bold">{label}</dt>
                <dd className="mt-1">{text}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            제공된 변형문항에 대한 SN 해설입니다.
          </p>
        </div>
      </details>
    </div>
  );
}
