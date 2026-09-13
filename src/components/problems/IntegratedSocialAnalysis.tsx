import Image from 'next/image';

const choices = [
  [
    '①',
    '물질적 부는 행복의 실현에 기여할 수 없다',
    '아리스토텔레스는 부 자체를 궁극 목적으로 보지는 않지만, 외적인 재화가 행복한 활동을 뒷받침할 수 있음을 인정합니다. 부의 도구적 역할까지 부정하면 안 됩니다.',
  ],
  [
    '②',
    '행복한 사람의 행위에는 쾌락이 따르지 않는다',
    '아리스토텔레스에게 행복과 즐거움은 서로 배제되지 않습니다. 덕에 따른 활동에는 그에 어울리는 즐거움이 따릅니다. 제시문의 “가장 즐거우며”도 판단의 근거입니다.',
  ],
  [
    '③',
    '욕구를 충족하려는 시도는 항상 고통을 일으킨다',
    '에피쿠로스는 모든 욕구 충족을 부정하지 않습니다. 배고픔과 갈증처럼 자연적이고 필수적인 욕구를 충족하면 고통을 제거할 수 있습니다.',
  ],
  [
    '④',
    '쾌락을 삶의 목적으로 삼으면 결코 만족할 수 없다',
    '에피쿠로스는 쾌락을 삶의 목적으로 봅니다. 끝없는 자극의 추구와 고통·불안에서 벗어난 쾌락을 구별해야 합니다.',
  ],
  [
    '⑤',
    '이성을 동반한 덕을 통해 행복을 성취할 수 있다',
    '아리스토텔레스는 이성에 따른 탁월한 활동을, 에피쿠로스는 사려 깊고 정의로운 삶을 행복과 연결합니다. 두 사람이 A에게 공통으로 건넬 수 있는 조언입니다.',
  ],
];

export function QuestionOneSolution() {
  return (
    <details className="group rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기{' '}
        <span className="ml-2 text-xs font-normal group-open:hidden">
          먼저 풀어본 뒤 확인하세요
        </span>
      </summary>
      <div className="mt-6 space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <div>
          <p className="text-xs font-bold tracking-wider text-emerald-700 dark:text-emerald-300">
            정답 ⑤
          </p>
          <h3 className="mt-1 text-xl font-bold text-gray-950 dark:text-white">
            이성과 덕에서 만나는 두 입장
          </h3>
          <p className="mt-3">
            갑은 아리스토텔레스, 을은 에피쿠로스입니다. 행복을 설명하는 방식은
            다르지만, 이성을 발휘하고 덕을 실천하는 삶이 행복과 연결된다는
            점에서는 공통점을 찾을 수 있습니다.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <h4 className="font-bold">갑 · 아리스토텔레스</h4>
            <p className="mt-2">
              행복은 인간이 궁극적으로 추구하는 좋음입니다. 인간 고유의 이성을
              탁월하게 발휘하는 활동과 덕을 실천하는 삶이 중요합니다.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <h4 className="font-bold">을 · 에피쿠로스</h4>
            <p className="mt-2">
              쾌락은 행복한 삶의 목적입니다. 방탕한 생활이 아니라 몸의 고통과
              마음의 동요에서 벗어난 상태를 중시하며, 사려 깊은 판단과 절제가
              필요합니다.
            </p>
          </div>
        </div>
        <p>
          <strong>사례의 핵심:</strong> A가 부유하다는 사실보다 육체적
          즐거움만을 행복이라고 믿는다는 점에 주목하세요. A의 향락과
          에피쿠로스의 쾌락은 같은 뜻이 아닙니다.
        </p>
        <div className="space-y-3">
          {choices.map(([number, claim, explanation], index) => (
            <div
              key={number}
              className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
            >
              <h4 className="font-bold text-gray-950 dark:text-white">
                {number} {claim}{' '}
                <span
                  className={
                    index === 4
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-gray-500'
                  }
                >
                  · {index === 4 ? '정답' : '오답'}
                </span>
              </h4>
              <p className="mt-2">{explanation}</p>
            </div>
          ))}
        </div>
        <p className="border-l-2 border-emerald-500 pl-4">
          ‘항상’, ‘없다’라는 표현만으로 오답을 고르지 마세요. 부의 보조적 역할,
          필요한 욕구의 충족처럼 해당 명제를 반박하는 개념적 근거를 설명할 수
          있어야 합니다.
        </p>
      </div>
    </details>
  );
}

export function QuestionOneAnalysis() {
  const points = [
    [
      '01',
      '사상가의 이름보다 개념의 관계가 중요합니다.',
      '‘아리스토텔레스=덕’, ‘에피쿠로스=쾌락’만 기억하면 차이점만 보입니다. 이성·덕·쾌락·행복이 각 사상 안에서 어떻게 연결되는지 이해하면, 두 입장의 공통점을 찾을 수 있습니다.',
    ],
    [
      '02',
      '사례 속 조건과 판단을 구분해야 합니다.',
      'A가 부유하다는 사실과 육체적 즐거움만을 행복이라고 믿는 것은 별개의 정보입니다. 재산의 유무보다 무엇을 행복의 기준으로 삼고 있는지가 조언의 대상입니다. 이를 구분하지 않으면 ①번에 끌릴 수 있습니다.',
    ],
    [
      '03',
      '차이점뿐 아니라 공통점도 설명해야 합니다.',
      '이 문항은 서로 다른 행복론이 함께 긍정할 수 있는 조언을 요구합니다. “누가 무엇을 주장했는가?”에 이어 “두 입장이 모두 동의할 문장은 무엇인가?”를 질문해 보세요.',
    ],
  ];
  return (
    <div className="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <div>
        <p className="text-xs font-bold tracking-wider text-emerald-700 dark:text-emerald-300">
          문제의 구조 읽기
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">
          1번에서 확인할 세 가지
        </h3>
        <p className="mt-3">
          이 문항은 행복에 대한 관점을 읽고, 구체적인 삶의 사례에 적용하게
          합니다. 아래는 공개 문항에 대한 SN의 분석입니다.
        </p>
      </div>
      {points.map(([number, title, body]) => (
        <section
          key={number}
          className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700"
        >
          <span className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
            {number}
          </span>
          <h4 className="mt-2 text-lg font-bold text-gray-950 dark:text-white">
            {title}
          </h4>
          <p className="mt-3">{body}</p>
        </section>
      ))}
      <section className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/40">
        <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-200">
          공부에 적용하기
        </h4>
        <p className="mt-3">
          개념을 정리할 때{' '}
          <strong>뜻 → 다른 개념과의 관계 → 사례에 적용할 문장</strong>을 함께
          적어보세요. 선지의 옳고 그름은 제시문과 개념에서 근거를 찾아 설명해
          보세요.
        </p>
      </section>
      <section>
        <h4 className="font-bold text-gray-950 dark:text-white">
          왜 통합사회 문항일까요?
        </h4>
        <p className="mt-2">
          행복에 대한 윤리적 관점을 실제 삶의 판단으로 연결한다는 점에 주목할 수
          있습니다. 다만 자산가가 등장한다는 이유만으로 경제와 윤리가 고도로
          융합되었다고 단정하기는 어렵습니다. 이 문제의 중심에는 행복에 대한
          윤리적 관점이 있습니다.
        </p>
        <p className="mt-3">
          김국현의 2016년 연구는 행복을 윤리·사회·역사·지리의 지식을 연결해
          가르치는 방안을 논의합니다. 이 연구가 이번 문항의 직접적인 출제
          근거인지는 확인되지 않았습니다.
        </p>
        <a
          href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002158360"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-emerald-700 underline dark:text-emerald-300"
        >
          관련 연구 정보 ↗
        </a>
      </section>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        예시문항의 배치만으로 평가원의 출제 의도나 실제 수능 난도를 확정하지
        않습니다.
      </p>
    </div>
  );
}

export function QuestionOneRelated() {
  const related = [
    {
      id: '200859-1',
      source: '고2 2014년 9월 전국연합학력평가 · 윤리와 사상 15번',
      organization: '교육청',
      originalNumber: 15,
      title: '참된 쾌락과 마음의 평온',
      focus:
        '에피쿠로스의 쾌락은 방탕한 생활과 어떻게 다를까요? 고통과 불안의 제거, 절제된 삶을 중심으로 읽어보세요.',
      connection:
        '예시문항 1번의 을이 말하는 “몸에 고통이 없고 마음에 동요가 없는 상태”를 직접 확인하는 문항입니다. A의 향락과 참된 쾌락을 구별하는 연습이 됩니다.',
      width: 3182,
      height: 2189,
      answer: '② · ㄱ, ㄷ',
      explanation:
        '사치를 멀리하고 절제하며 헛된 욕망을 버리는 ㄱ, ㄷ이 적절합니다. ㄴ의 사회적 쾌락 우선은 제시된 입장이 아니며, ㄹ처럼 모든 감각적 욕구를 충족하려는 태도는 고통과 불안을 키울 수 있습니다.',
    },
    {
      id: '227671-1',
      source: '고1 2024년 6월 전국연합학력평가 · 통합사회 2번',
      organization: '교육청',
      originalNumber: 2,
      title: '욕구 분별과 검소한 삶',
      focus:
        '단순한 음식도 충분한 쾌락을 줄 수 있다는 말에서, 행복한 삶을 위한 구체적인 태도를 찾아보세요.',
      connection:
        '예시문항 1번의 A에게 건넬 조언으로 연결해 보세요. 에피쿠로스는 필요한 욕구를 분별하고 절제할 것을 권하며, 모든 욕구나 쾌락을 없애라고 말하지 않습니다.',
      width: 2800,
      height: 1922,
      answer: '③',
      explanation:
        '결핍으로 인한 고통을 없애면 소박한 생활에서도 만족할 수 있으므로 욕구 분별과 절제를 강조하는 ③이 적절합니다. ①은 육체적 쾌락을 앞세우고, ②는 종교적 복종을 요구하며, ④·⑤는 모든 쾌락이나 욕구를 제거해야 한다고 하므로 제시문의 입장과 다릅니다.',
    },
    {
      id: '223080-1',
      source: '고3 2023학년도 9월 모의평가 · 윤리와 사상 11번',
      organization: '평가원',
      originalNumber: 11,
      title: '쾌락·고통의 결과를 따져 선택하기',
      focus:
        '지금의 쾌락을 피하거나 고통을 감수할 수 있는 이유를 생각해 보세요. 자연적인 욕구와 반드시 충족해야 할 욕구도 구별해야 합니다.',
      connection:
        '예시문항 1번의 ③·④번 선지가 왜 틀리는지 더 깊이 확인할 수 있습니다. 쾌락을 목적으로 삼더라도 모든 쾌락을 선택하지는 않으며, 장기적인 결과를 사려 깊게 판단합니다.',
      width: 2874,
      height: 3093,
      answer: '⑤ · ㄴ, ㄷ, ㄹ',
      explanation:
        '자연적 욕구 중에도 필수적이지 않은 것이 있으므로 ㄱ은 틀립니다. 평온을 위한 정의로운 인간관계, 헛된 믿음에서 생긴 욕구에 대한 경계, 더 큰 고통을 낳는 쾌락을 선택하지 않는 태도를 나타내는 ㄴ, ㄷ, ㄹ은 적절합니다.',
    },
  ];

  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
        공식 예시문항과 유사 기출의 연결고리
      </h3>
      <p>
        제공된 유사 기출 3문항입니다. 모두 예시문항 1번의{' '}
        <strong>을 · 에피쿠로스</strong>와 연결됩니다. 참된 쾌락의 뜻을
        확인하고, 생활 속 태도와 선택의 기준으로 넓혀보세요.
      </p>
      {related.map((item, index) => {
        const image = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/1/${item.id}.png`;
        return (
          <section
            key={item.id}
            aria-labelledby={`related-${item.id}`}
            className="rounded-2xl border border-gray-200 p-4 sm:p-5 dark:border-gray-700"
          >
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
              유사문항 0{index + 1}
            </span>
            <h4
              id={`related-${item.id}`}
              className="mt-1 text-lg font-bold text-gray-950 dark:text-white"
            >
              {item.title}
            </h4>
            <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
              {item.source}
            </p>
            <p className="mt-2">{item.focus}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 1번과의 연결
              </p>
              <p className="mt-2">{item.connection}</p>
            </div>
            <figure className="mt-4">
              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`유사문항 ${index + 1}, ${item.title} 원문 크게 보기 (새 탭)`}
                className="block cursor-zoom-in overflow-hidden rounded-xl border border-gray-200 bg-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:p-3"
              >
                <Image
                  src={image}
                  width={item.width}
                  height={item.height}
                  alt={`${item.source}. ${item.title}.`}
                  sizes="(max-width: 768px) 100vw, 650px"
                  unoptimized
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{item.organization}</span>
                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-700 underline dark:text-emerald-300"
                >
                  원문 크게 보기 ↗
                </a>
              </figcaption>
            </figure>

            <details className="mt-4 rounded-xl border border-emerald-200 p-4 dark:border-emerald-800">
              <summary className="cursor-pointer font-semibold text-emerald-900 dark:text-emerald-200">
                정답·풀이 보기
              </summary>
              <p className="mt-3 font-bold text-gray-950 dark:text-white">
                SN 풀이 · {item.answer}
              </p>
              <p className="mt-2">{item.explanation}</p>
            </details>
          </section>
        );
      })}
      <p className="rounded-xl bg-emerald-50 p-5 font-medium text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-200">
        비교 질문: 에피쿠로스가 동의한 선지를 아리스토텔레스도 받아들일까요? 두
        사상가의 공통점과 차이점을 구분하며 예시문항 1번으로 돌아가 보세요.
      </p>
    </div>
  );
}
