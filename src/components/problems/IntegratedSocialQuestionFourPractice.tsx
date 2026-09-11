const statements = [
  [
    'ㄱ',
    '자연을 보전하는 행위는 그것이 인간의 물질적 복지와 효용을 증진한다면 정당화될 수 있다.',
  ],
  [
    'ㄴ',
    '생태계 내의 개별 생명체는 전체의 균형과 무관하게 독립적이고 절대적인 생존권을 지닌다.',
  ],
  [
    'ㄷ',
    '인간은 생명 공동체를 지배하는 정복자가 아니라 그 공동체의 동료 구성원이다.',
  ],
  [
    'ㄹ',
    '자연에 대한 과학적 탐구가 확대될수록 생명 공동체의 안정성은 훼손된다.',
  ],
];
const options = ['ㄱ, ㄹ', 'ㄱ, ㄷ', 'ㄴ, ㄹ', 'ㄴ, ㄷ', 'ㄱ, ㄷ, ㄹ'];
const markers = ['①', '②', '③', '④', '⑤'];
const explanations = [
  [
    'ㄱ · 포함',
    '갑이 긍정할 수 있습니다. 자연 보전도 인간의 물질적 복지와 효용에 기여한다면 인간 중심적 관점에서 정당화될 수 있습니다. 자연을 인간의 이익을 위한 대상으로 본다는 것이 모든 보전 행위에 반대한다는 뜻은 아닙니다. 을에게는 인간의 효용만으로 충분하지 않으며 공동체에 미치는 영향이 판단 기준입니다.',
  ],
  [
    'ㄴ · 제외',
    '두 사람 모두 제시된 진술에 동의하지 않습니다. 갑은 개별 생명체의 절대적 생존권을 제시하지 않으며, 을은 공동체의 온전성과 안정성을 기준으로 판단합니다. 특히 ‘전체의 균형과 무관하게’, ‘독립적이고 절대적인’이라는 조건이 을의 전체론적 관점과 충돌합니다.',
  ],
  [
    'ㄷ · 포함',
    '을이 긍정합니다. 인간은 대지 공동체의 정복자가 아니라 그 안에 속한 구성원이라는 관점입니다. 인간의 이익을 위한 자연의 정복을 강조한 갑과 구별됩니다.',
  ],
  [
    'ㄹ · 제외',
    '과학적 탐구의 확대 자체가 생명 공동체의 안정성을 훼손한다는 일반적 인과 관계는 두 제시문에서 도출되지 않습니다. 갑은 탐구를 인간의 능력 확장과 연결하고, 을은 행위가 공동체 보전에 기여하는지를 기준으로 평가합니다. 탐구는 생태계를 이해하고 보전하는 데에도 활용될 수 있으므로 을의 입장을 과학 탐구 자체에 대한 반대로 해석하지 않습니다.',
  ],
];
export function QuestionFourPractice() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        예시문항 4번 연계 · 자연관과 조건형 발문
      </p>
      <article
        aria-labelledby="q4-practice-heading"
        className="sn-exam-paper border border-gray-300 bg-white px-4 py-6 text-gray-950 shadow-sm sm:px-8 sm:py-8"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b-2 border-gray-900 pb-3 text-sm">
          <span className="font-bold">SNargen 생성 변형문제</span>
          <span>통합사회 · 연습 문항</span>
        </div>
        <h3
          id="q4-practice-heading"
          className="mb-5 break-keep text-base leading-8 sm:text-lg"
        >
          <span className="mr-2">4.</span>갑, 을 사상가들 중 적어도 한 사람이
          긍정할 진술로 옳은 것만을 &lt;보기&gt;에서 있는 대로 고른 것은?{' '}
          <span className="whitespace-nowrap">[3점]</span>
        </h3>
        <div className="space-y-5 border border-gray-800 p-4 text-[15px] leading-8 sm:p-5 sm:text-base">
          <p>
            <strong>갑:</strong> 자연을 탐구하고 정복하여 인간의 이익에
            봉사하도록 해야 한다. 지식의 참된 목적은 사물의 숨겨진 원인을
            규명하여 인간의 능력을 확장하고 물질적 번영을 이루는 것이다.
          </p>
          <p>
            <strong>을:</strong> 대지는 인간의 소유물이 아니라 우리가 속한
            거대한 생명 공동체이다. 개별 생명체의 생존보다 공동체 전체의 조화와
            균형이 우선하며, 어떤 행위는 생명 공동체의 온전성과 안정성,
            아름다움을 보전하는 경향이 있다면 옳고, 그렇지 않다면 그르다.
          </p>
        </div>
        <section
          aria-labelledby="q4-practice-statements"
          className="relative mt-7 border border-gray-800 px-4 pb-4 pt-5 sm:px-5"
        >
          <h4
            id="q4-practice-statements"
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
        <summary className="cursor-pointer rounded-xl px-5 py-4 font-semibold text-emerald-900 dark:text-emerald-200">
          정답·해설 보기
        </summary>
        <div className="space-y-5 border-t border-emerald-200 px-5 py-5 text-sm leading-7 text-gray-700 dark:border-emerald-900 dark:text-gray-300">
          <p className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
            정답 ② · ㄱ, ㄷ
          </p>
          <p>
            갑은 베이컨의 인간 중심적 자연관, 을은 레오폴드의 대지 윤리에
            해당합니다. ‘적어도 한 사람’은 갑만 긍정하거나 을만 긍정하거나 두
            사람이 모두 긍정하는 진술을 포함합니다.
          </p>
          <dl className="space-y-4">
            {explanations.map(([label, text]) => (
              <div key={label}>
                <dt className="font-bold">{label}</dt>
                <dd className="mt-1">{text}</dd>
              </div>
            ))}
          </dl>
          <p className="border-l-2 border-emerald-500 pl-4">
            을이 공동체를 중시한다는 것은 모든 개체의 희생을 무조건 허용한다는
            뜻이 아닙니다. 제시문의 판단 기준은 공동체의
            온전성·안정성·아름다움을 보전하는 경향입니다.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            제공된 변형문항에 대한 SN 해설입니다. 3점은 이 연습 문항에 지정된
            배점입니다.
          </p>
        </div>
      </details>
    </div>
  );
}
