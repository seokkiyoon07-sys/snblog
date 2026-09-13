import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    '① · 옳지 않음',
    'A는 정기 예금입니다. 배당 수익을 기대할 수 있는 상품은 주식인 B입니다. 주식의 배당은 확정된 이자와 다르며 항상 지급되는 것도 아닙니다.',
  ],
  [
    '② · 옳지 않음',
    'C는 채권입니다. 일반적인 채권 투자는 예금자 보호 대상이 아닙니다. 정기 예금과 채권의 이자 수익이 모두 가능하다고 해서 동일한 보호 제도가 적용되는 것은 아닙니다.',
  ],
  [
    '③ · 옳지 않음',
    '일반적으로 주식(B)은 정기 예금(A)보다 원금 손실 위험이 큽니다. 높은 수익을 기대할 수 있다는 점을 안전성이 높다는 뜻으로 해석하면 안 됩니다.',
  ],
  [
    '④ · 옳지 않음',
    '채권(C)을 선택하면 포기하는 대안은 A(90)와 B(80)입니다. 둘 중 가장 큰 편익은 90이므로 암묵적 비용은 90만 원입니다. 선택한 C 자체의 편익 100을 비용으로 넣지 않습니다.',
  ],
  [
    '⑤ · 옳음 → 정답',
    'A와 B 중 어느 것을 선택해도 포기한 대안 가운데 편익이 가장 큰 것은 C(100)입니다. 명시적 비용이 모두 0이므로 두 선택의 기회비용은 각각 100만 원으로 같습니다.',
  ],
];
const rows = [
  ['A · 정기 예금', '90', 'B(80), C(100)', '100', '−10'],
  ['B · 주식', '80', 'A(90), C(100)', '100', '−20'],
  ['C · 채권', '100', 'A(90), B(80)', '90', '10'],
];
function CostTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <caption className="pb-2 text-left">
          명시적 비용 0 · 금액 단위: 만 원
        </caption>
        <thead>
          <tr>
            {['선택', '편익', '포기한 대안', '기회비용', '순편익'].map(x => (
              <th
                key={x}
                className="border border-gray-200 p-3 dark:border-gray-700"
              >
                {x}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row[0]}>
              {row.map((x, i) => (
                <td
                  key={i}
                  className="border border-gray-200 p-3 dark:border-gray-700"
                >
                  {x}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function QuestionNineteenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ⑤ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          상품을 식별한 뒤 포기한 최선의 대안을 비교
        </h3>
        <p>
          이자 수익만 가능한 A는 정기 예금, 시세 차익은 가능하지만 이자 수익이
          없는 B는 주식, 둘 다 가능한 C는 채권입니다. 이 표는 해당 수익의
          가능성을 구분하며 실제 수익을 보장하지 않습니다.
        </p>
        <p>
          명시적 비용이 없으므로 기회비용은 암묵적 비용과 같습니다. 선택한
          상품을 제외한 나머지 대안의 편익 중 가장 큰 값을 찾습니다.
        </p>
        <CostTable />
        {choices.map(([title, text]) => (
          <section className={card} key={title}>
            <h4 className="font-bold">{title}</h4>
            <p className="mt-2">{text}</p>
          </section>
        ))}
      </div>
    </details>
  );
}
export function QuestionNineteenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        금융 상품의 특징과 기회비용 연결하기
      </h3>
      <p>
        공식 배점은 2점입니다. 금융 상품을 식별하는 개념과 대안을 비교하는
        경제적 사고를 결합합니다. 아래는 제시문과 선지에 근거한 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 편익은 이자나 투자 수익금과 다름
        </h4>
        <p className="mt-3">
          자료는 수익성과 안전성 등을 고려하여 편익을 화폐 단위로 평가했다고
          명시합니다. 따라서 90·80·100을 약정 이자나 확정 수익금으로 읽으면 안
          됩니다. 이미 반영된 안전성을 다시 임의의 비용으로 더하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. 선택한 대안을 제외하고 최댓값 찾기
        </h4>
        <p className="mt-3">
          ④의 100은 채권을 선택했을 때 얻는 편익입니다. 기회비용을 구할 때는
          선택으로 포기한 대안 A·B를 비교해야 합니다. 모든 편익을 더하거나, 표
          전체의 최댓값을 기계적으로 쓰는 것이 아닙니다.
        </p>
        <p className="mt-3">
          기회비용 = 명시적 비용 + 암묵적 비용입니다. 이 문항에서는 명시적
          비용이 0이므로 나머지 대안의 편익만 비교할 수 있습니다. 가격이나
          수수료가 있는 문제에서는 포기한 대안의 편익에서 그 대안의 명시적
          비용을 뺀 값을 비교해야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 같은 기회비용이 같은 선택 가치를 뜻하지 않음
        </h4>
        <p className="mt-3">
          A와 B의 기회비용은 같지만 편익은 다릅니다. 순편익은 편익에서
          기회비용을 빼므로 A는 −10, B는 −20, C는 10입니다. 제시된 조건에서 셋
          중 합리적인 선택은 C입니다. 이것이 현실에서 언제나 채권을 선택해야
          한다는 뜻은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 금융 개념과 현재 제도 구분</h4>
        <p className="mt-3">
          정기 예금의 이자, 주식의 배당·시세 차익, 채권의 이자·시세 차익을
          구분합니다. 채권의 위험은 발행자의 신용도와 만기 등에 따라 다르고
          주식의 실제 수익도 보장되지 않습니다. 세 상품의 안전성·수익성을 언제나
          같은 순서로 고정하지 않습니다.
        </p>
        <p className="mt-3">
          예금 보호 한도는 2025년 9월 1일부터 원금과 소정의 이자를 합하여
          금융회사별 1인당 1억 원으로 상향되었습니다. 보호 대상 상품인지도
          확인해야 합니다. 이 문항의 ②는 한도의 금액이 아니라 채권이 예금 보호
          대상인지 묻습니다.
        </p>
        <a
          className={link}
          href="https://www.fsc.go.kr/no010101/85200"
          target="_blank"
          rel="noreferrer"
        >
          금융위원회 · 예금보호한도 1억 원 시행 안내 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">통합사회2 · 시장경제와 지속가능발전</p>
        <p className="mt-3 font-bold">[10통사2-03-02]</p>
        <blockquote className="mt-2 border-l-2 border-emerald-500 pl-4">
          합리적 선택의 의미와 그 한계를 파악하고, 지속가능발전을 위해 요청되는
          정부, 기업가, 노동자, 소비자의 바람직한 역할과 책임에 관해 탐구한다.
        </blockquote>
        <p className="mt-3 font-bold">[10통사2-03-03]</p>
        <blockquote className="mt-2 border-l-2 border-emerald-500 pl-4">
          금융 자산의 특징과 자산 관리의 원칙을 토대로 금융 생활을 설계하고,
          경제적, 사회적 환경의 변화가 금융과 관련한 의사 결정에 미치는 영향을
          탐구한다.
        </blockquote>
        <a
          className={link}
          href="https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=103113&lev=0&m=020402"
          target="_blank"
          rel="noreferrer"
        >
          공식 예시문항·정답표·성취기준 안내 ↗
        </a>
      </section>
    </div>
  );
}

export function QuestionNineteenRelated() {
  const items = [
    {
      file: '230504-1.png',
      connection:
        '공식 19번의 기회비용 계산을 확장합니다. 공식 문항은 명시적 비용이 없지만, 이 기출은 편익과 명시적 비용을 함께 제시하여 포기한 대안의 순가치를 구별해야 합니다.',
      width: 2824,
      height: 3401,
      title: '2025년 6월 전국연합학력평가 · 경제 5번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '③',
      text: '편익에서 가격을 빼면 A·B·C는 각각 3·2·1만 원입니다. 암묵적 비용은 A가 2, B와 C가 각각 3만 원이므로 ③이 옳습니다. 기회비용은 각각 6·9·11만 원, 순편익은 1·−1·−2만 원이어서 A의 선택이 합리적입니다. ①은 기회비용이 아니라 매몰 비용의 정의입니다.',
    },
    {
      file: '212879-1.png',
      connection:
        '공식 19번의 기회비용 개념을 생활 사례로 확인합니다. 담뱃값처럼 지출한 돈뿐 아니라 흡연으로 포기한 건강도 비용에 포함하여 명시적 비용과 암묵적 비용을 구별합니다.',
      width: 2008,
      height: 1807,
      title: '2018년 11월 전국연합학력평가 · 통합사회 10번',
      date: '고1 · 교육청 · 제공된 출처 기준 · 난이도: 중상(제공 평가)',
      answer: '② · ㄱ, ㄷ',
      text: '19번 예시문항과 연결되는 핵심은 합리적 선택의 의미와 명시적·암묵적 비용을 함께 고려하는 것입니다. 이 문항에서 ㄱ은 비용보다 편익이 큰 선택이라는 설명으로 옳게 판정됩니다. 여러 대안을 비교할 때에는 순편익이 가장 큰 대안을 고른다는 기준까지 익혀야 합니다. ㄴ은 심리적 만족 같은 비금전적 이익을 편익에서 제외하여 틀립니다. 흡연하지 않았다면 유지할 수 있었던 건강은 포기한 가치인 암묵적 비용이므로 ㄷ은 옳습니다. 담뱃값도 명시적 비용으로 기회비용에 포함되므로 이를 제외한 ㄹ은 틀립니다. 정답은 ②(ㄱ, ㄷ)입니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">합리적 선택을 묻는 유사 기출 2문항</h3>
      <p>명시적·암묵적 비용, 비금전적 편익과 기회비용을 연습합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/19/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 19번과의 연결
              </p>
              <p className="mt-2">{item.connection}</p>
            </div>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block bg-white p-2"
              aria-label={`${item.title} 원문 크게 보기`}
            >
              <Image
                src={src}
                width={item.width}
                height={item.height}
                unoptimized
                sizes="(max-width: 768px) 100vw, 650px"
                className="h-auto w-full"
                alt={item.title}
              />
            </a>
            <details className="mt-4 rounded-xl border border-emerald-200 p-4 dark:border-emerald-800">
              <summary className="cursor-pointer font-bold">
                정답·풀이 보기
              </summary>
              <p className="mt-3 font-bold">SN 풀이 · 정답 {item.answer}</p>
              <p className="mt-2">{item.text}</p>
            </details>
          </section>
        );
      })}
      <p className="text-xs text-gray-500">
        원문 이미지에 근거한 SN 풀이입니다. 공통 개념에 따른 연결이며 직접적인
        출제 계보를 뜻하지 않습니다.
      </p>
    </div>
  );
}
