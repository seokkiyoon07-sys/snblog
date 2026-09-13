import Image from 'next/image';

const linkStyle =
  'font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300';
const cardStyle = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const statements = [
  [
    'ㄱ',
    '인간과 달리 자연은 어떠한 가치도 지니지 않는다.',
    '부정',
    '부정',
    '제외',
    '갑은 자연이 인간의 이익에 기여하는 도구적 가치를 인정합니다. 을도 대지 공동체를 인간의 이용 가치만으로 평가하지 않습니다. 자연의 모든 가치를 부정하는 진술에는 두 입장 모두 동의하지 않습니다.',
  ],
  [
    'ㄴ',
    '인간은 자연의 정복자가 아니라 구성원 중 하나일 뿐이다.',
    '부정',
    '긍정',
    '포함',
    '을은 인간을 대지 공동체의 구성원으로 봅니다. 갑의 제시문은 인간의 이익을 위해 자연을 지배·이용하는 입장이므로, 이 진술은 을이 긍정합니다.',
  ],
  [
    'ㄷ',
    '인간과 자연을 차등적으로 구별하는 것은 이성에 부합한다.',
    '긍정',
    '부정',
    '포함',
    '이 문항에서 차등적 구별은 인간을 자연보다 우위에 두는 위계적 구별을 뜻합니다. 제시된 갑의 인간 중심적 자연관에 부합합니다. 을은 인간을 공동체의 정복자가 아닌 구성원으로 봅니다. 이는 인간과 다른 존재 사이의 모든 차이를 부정한다는 뜻은 아닙니다.',
  ],
  [
    'ㄹ',
    '인간의 욕구를 충족하기 위해 자연을 활용하는 것은 정당화될 수 없다.',
    '부정',
    '부정',
    '제외',
    '갑은 인간의 이익을 위한 자연 이용을 긍정합니다. 을도 자연 이용을 전면 금지하지 않고 대지 공동체에 미치는 영향을 윤리적으로 검토합니다. 이용을 어떤 경우에도 정당화할 수 없다는 진술에는 두 입장 모두 동의하지 않습니다.',
  ],
];

export function QuestionFourSolution() {
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
          <p className="font-bold text-emerald-700 dark:text-emerald-300">
            정답 ② · ㄴ, ㄷ
          </p>
          <h3 className="mt-2 text-xl font-bold text-gray-950 dark:text-white">
            ‘적어도 한 사람’이 긍정하는 진술 찾기
          </h3>
          <p className="mt-3">
            갑은 프랜시스 베이컨, 을은 알도 레오폴드의 관점입니다. 갑만
            긍정하거나, 을만 긍정하거나, 둘 다 긍정하면 포함합니다. 둘 다
            부정하는 진술만 제외합니다.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <section className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <h4 className="font-bold">갑 · 베이컨의 인간 중심적 자연관</h4>
            <p className="mt-2">
              자연에 관한 지식과 과학적 탐구를 인간의 힘·이익에 연결합니다.
              자연을 인간에게 유용한 대상으로 보는 것은 자연이 아무 가치도
              없다고 보는 것과 다릅니다.
            </p>
          </section>
          <section className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <h4 className="font-bold">을 · 레오폴드의 대지 윤리</h4>
            <p className="mt-2">
              토양·물·식물·동물로 이루어진 대지 공동체까지 윤리적 고려를
              확장합니다. 인간도 그 구성원이며, 자연 이용을 공동체의
              온전성·안정성·아름다움과 연결해 검토합니다.
            </p>
          </section>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <caption className="pb-3 text-left font-bold">
              입장별 판단과 발문 적용
            </caption>
            <thead>
              <tr>
                {['보기', '갑', '을', '적어도 한 사람'].map(label => (
                  <th
                    key={label}
                    scope="col"
                    className="whitespace-nowrap border border-gray-300 p-2 dark:border-gray-700"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {statements.map(([label, , gap, eul, result]) => (
                <tr key={label}>
                  <th
                    scope="row"
                    className="border border-gray-300 p-2 dark:border-gray-700"
                  >
                    {label}
                  </th>
                  <td className="border border-gray-300 p-2 dark:border-gray-700">
                    {gap}
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-700">
                    {eul}
                  </td>
                  <td className="border border-gray-300 p-2 font-bold dark:border-gray-700">
                    {result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {statements.map(([label, claim, , , result, text]) => (
          <section
            key={label}
            className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
          >
            <h4 className="font-bold">
              {label}. {claim} · {result}
            </h4>
            <p className="mt-2">{text}</p>
          </section>
        ))}
        <p className="border-l-2 border-emerald-500 pl-4">
          ‘어떠한 가치도’, ‘정당화될 수 없다’라는 표현만 보고 답을 고르지
          마세요. 도구적 가치와 윤리적 자연 이용처럼 진술을 반박하는 구체적인
          근거를 설명해야 합니다.
        </p>
      </div>
    </details>
  );
}

export function QuestionFourAnalysis() {
  return (
    <div className="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <div>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          문제의 구조 읽기 · SN 분석
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">
          자연관의 차이와 공통으로 거부하는 진술
        </h3>
        <p className="mt-3">
          4번은 2점 문항입니다. 인간 중심주의와 생태 중심주의를 비교하되, 발문의
          ‘적어도 한 사람’이라는 조건을 정확히 적용해야 합니다. 아래 출제
          포인트는 공개 문항에 대한 SN의 분석입니다.
        </p>
      </div>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold">
          1. 발문을 먼저 판단 규칙으로 바꾸기
        </h4>
        <p className="mt-3">
          각 진술에 대해 갑의 긍정 여부와 을의 긍정 여부를 따로 확인합니다.
          ‘적어도 한 사람’은 둘 중 하나 이상이 긍정하면 되는 조건으로, 긍정하는
          진술들의 합집합에 해당합니다. 정확히 한 사람만 긍정해야 한다는 조건이
          아닙니다.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>모두 긍정: 갑과 을이 함께 긍정하는 진술</li>
          <li>
            적어도 한 사람 긍정: 갑 또는 을이 긍정하는 진술, 둘 다 긍정하는
            경우도 포함
          </li>
          <li>갑만 긍정: 갑은 긍정하고 을은 부정하는 진술</li>
        </ul>
        <p className="mt-3">
          조건별 차이를 익히는 것이 중요하지만, 이 문항을 풀기 위해
          교집합·차집합을 모두 별도로 계산할 필요는 없습니다.
        </p>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold">2. ㄱ: 도구적 가치도 가치입니다</h4>
        <p className="mt-3">
          인간 중심주의는 자연을 인간의 목적을 위한 수단으로 평가할 수 있습니다.
          그러므로 자연의 도덕적 지위나 본래적 가치를 인정하지 않는 입장과
          자연의 모든 가치를 부정하는 입장은 다릅니다. 갑의 ‘인간의 이익에
          봉사’라는 구절이 ㄱ을 반박하는 근거입니다.
        </p>
        <p className="mt-3">
          베이컨은 자연을 이용하려면 그 원인과 질서를 알아야 한다고 강조합니다.
          그의 자연관을 자연법칙을 무시한 무제한 파괴나 단순한 기계론으로만
          설명하지 않습니다.
        </p>
        <a
          href="https://history.hanover.edu/texts/Bacon/novorg.html"
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mt-3 inline-block`}
        >
          베이컨 『신기관』 · 제1권 1~3절 ↗
        </a>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold">
          3. ㄹ: 자연 이용과 윤리적 검토는 양립합니다
        </h4>
        <p className="mt-3">
          레오폴드는 대지의 변경·관리·이용 자체를 일률적으로 배제하지 않습니다.
          다만 경제적 이익만으로 판단하지 않고, 공동체의 존속과 건강을 함께
          고려합니다. 따라서 ‘이용을 윤리적으로 검토한다’는 것과 ‘모든 이용을
          금지한다’는 것을 구별해야 합니다.
        </p>
        <p className="mt-3">
          인간이 공동체의 구성원이라는 주장은 모든 개체의 가치·권리·취급 방식이
          완전히 같다는 뜻이 아닙니다. 대지 윤리의 공동체 전체에 대한 관심을
          개체별 절대적 평등이나 모든 개입 금지로 바꾸어 이해하지 않습니다.
        </p>
        <a
          href="https://faculty.lsu.edu/kharms/files/leopold_1949.pdf"
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mt-3 inline-block`}
        >
          레오폴드 「대지 윤리」 원문 ↗
        </a>
      </section>
      <section className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/40">
        <h4 className="text-lg font-bold">4. 통합사회 교육과정과 연결하기</h4>
        <p className="mt-3 font-bold">
          통합사회1 · 자연환경과 인간 · [10통사1-03-02]
        </p>
        <blockquote className="mt-2 border-l-2 border-emerald-500 pl-4">
          자연에 대한 인간의 다양한 관점을 사례를 통해 비교하고, 인간과 자연의
          바람직한 관계를 제안한다.
        </blockquote>
        <p className="mt-3">
          이 문항은 두 자연관의 비교를 평가합니다. 후속 학습에서는 산림
          이용·생태계 관리 같은 사례에서 자연의 가치를 어떤 기준으로 판단할지
          설명할 수 있습니다.
        </p>
        <p className="mt-3">
          2번의 환경 문제와 가치 판단의 기준을 연결하는 것은 유용한 학습
          확장입니다. 다만 환경 위기의 원인을 베이컨 한 사람의 사상으로
          환원하거나, 문항 번호의 배치만으로 평가원이 특정 문명사적 서사를
          의도했다고 단정하지 않습니다.
        </p>
        <a
          href="https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=103113&lev=0&m=020402"
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mt-3 inline-block`}
        >
          공식 예시문항 안내 · 교육과정 근거표 ↗
        </a>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold">5. 연구 근거와 난도 해석의 범위</h4>
        <p className="mt-3">
          베이컨의 『신기관』과 레오폴드의 「대지 윤리」를 함께 읽으면 자연의
          이용 목적과 윤리적 고려 범위의 차이를 확인할 수 있습니다. 위 원문
          링크는 개념을 이해하기 위한 근거이며, 평가원의 직접적인 출제 자료를
          특정하는 것은 아닙니다.
        </p>
        <p className="mt-3">
          ‘최상위 킬러’라는 난도 평가는 학생 응답 자료 없이 확정할 수 없습니다.
          이 문항은 도구적 가치와 윤리적 이용이라는 개념의 구별, 발문 조건의
          적용을 중심으로 이해하는 것이 적절합니다.
        </p>
      </section>
      <section className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/40">
        <h4 className="text-lg font-bold">학생이 준비할 것</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>도구적 가치와 본래적 가치의 차이를 사례로 설명하기</li>
          <li>자연 이용의 전면 금지와 조건부 정당화를 구별하기</li>
          <li>같은 진술에 대해 갑·을의 판단 근거를 각각 적기</li>
          <li>
            ‘모두’, ‘적어도 한 사람’, ‘갑만’에 따라 선택되는 진술이 어떻게
            달라지는지 확인하기
          </li>
          <li>
            실생활 환경 사례에서 인간의 이익과 생태 공동체의 보전을 함께
            검토하기
          </li>
        </ul>
      </section>
    </div>
  );
}

export function QuestionFourRelated() {
  const related = [
    {
      file: '227677-1.png',
      width: 2812,
      height: 2178,
      source: '고1 2024년 6월 전국연합학력평가 · 통합사회 8번',
      title: '베이컨과 레오폴드의 자연관 비교',
      answer: '①',
      connection:
        '공식 4번과 같은 두 입장을 대비합니다. 도구적 가치와 본래적 가치, 인간의 지위, 공동체 전체와 개별 구성원을 구별하는 연습입니다.',
      explanation:
        '(가)는 베이컨, (나)는 레오폴드입니다. 자연을 인간의 이익을 위한 지배 대상으로 보는 ①이 적절합니다. ②는 (가)의 가치 판단을 뒤바꾸고, ③은 (나)가 인간의 우월성을 인정한다고 보므로 틀립니다. ④는 공동체 전체보다 개별 구성원의 존속을 우선한다고 보며, ⑤는 두 입장 모두 자연을 도덕적 고려 대상으로 본다고 하므로 적절하지 않습니다.',
    },
    {
      file: '229695-1.png',
      width: 2785,
      height: 2051,
      source: '고1 2025년 3월 전국연합학력평가 · 통합사회 1번',
      title: '대지 공동체의 구성원과 행위의 정당화',
      answer: '⑤',
      connection:
        '공식 4번의 ㄴ과 ㄹ에 연결됩니다. 인간의 구성원 지위를 확인하고, 공동체의 온전성을 위한 인간의 행위가 정당화될 수 있다는 점을 읽습니다.',
      explanation:
        '제시문은 레오폴드의 대지 윤리입니다. 공동체의 온전성을 위한 행위가 정당화될 수 있다는 ⑤가 적절합니다. ①은 이성 없는 존재를 배제하고, ②는 구성원 간 상호 의존성을 부정하며, ③은 무생물의 가치를 수단적 가치로만 한정하고, ④는 인간의 본질적 우월성을 주장하므로 적절하지 않습니다.',
    },
    {
      file: '208734-1.png',
      width: 2854,
      height: 3546,
      source: '고2 2017년 6월 전국연합학력평가 · 생활과 윤리 15번',
      title: '탐구 흐름도로 두 자연관 구별하기',
      answer: '③',
      connection:
        '공식 4번과 갑·을의 배치가 반대입니다. 이름을 먼저 식별한 뒤 흐름도의 예·아니요 방향을 따라가며 윤리적 고려의 범위를 비교합니다.',
      explanation:
        '갑은 레오폴드, 을은 베이컨입니다. B는 갑이 긍정하고 을이 부정해야 하므로 자연의 모든 존재를 윤리적 고려 대상으로 삼는지 묻는 ③이 적절합니다. A는 두 입장이 모두 긍정해야 하므로 인간의 이익을 우선하는 ①은 부적절합니다. ②는 동물만으로 범위를 제한하므로 갑과 맞지 않습니다. C는 을이 긍정해야 하는데, ④의 모든 생명체의 내재적 가치와 ⑤의 인간·동물 이익의 동등한 고려는 을의 입장이 아닙니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
        두 자연관을 연결하는 유사 기출 3문항
      </h3>
      <p>
        자연관 비교 → 대지 윤리의 행위 기준 → 흐름도 조건 적용 순서로
        풀어보세요. 기출마다 갑·을과 (가)·(나)의 배치가 달라집니다.
      </p>
      {related.map((item, index) => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/4/${item.file}`;
        return (
          <section
            key={item.file}
            aria-labelledby={`q4-related-${index}`}
            className={cardStyle}
          >
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
              유사 기출 0{index + 1}
            </p>
            <h4 id={`q4-related-${index}`} className="mt-1 text-lg font-bold">
              {item.title}
            </h4>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {item.source} · 교육청
            </p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 4번과의 연결
              </p>
              <p className="mt-2">{item.connection}</p>
            </div>
            <figure className="mt-4">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title} 원문 크게 보기 (새 탭)`}
                className="block cursor-zoom-in rounded-xl border border-gray-200 bg-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
              >
                <Image
                  src={src}
                  width={item.width}
                  height={item.height}
                  alt={`${item.source}. ${item.title}.`}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 650px"
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="mt-2 text-right text-xs">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  원문 크게 보기 ↗
                </a>
              </figcaption>
            </figure>

            <details className="mt-4 rounded-xl border border-emerald-200 p-4 dark:border-emerald-800">
              <summary className="cursor-pointer font-semibold text-emerald-900 dark:text-emerald-200">
                정답·풀이 보기
              </summary>
              <p className="mt-3 font-bold">SN 풀이 · {item.answer}</p>
              <p className="mt-2">{item.explanation}</p>
            </details>
          </section>
        );
      })}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        시험 연도·월·과목은 제공된 출처 정보를 따릅니다. 정답·해설은 원문
        이미지에 근거한 SN 풀이입니다. 공통 개념으로 연결했으며 평가원이 이
        기출을 직접 활용했다는 뜻은 아닙니다.
      </p>
    </div>
  );
}
