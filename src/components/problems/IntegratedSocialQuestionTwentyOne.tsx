import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const rows = [
  ['상황 1', '갑국', '1', '2', 'Y재 1/2단위', 'X재 2단위', 'X재'],
  ['상황 1', '을국', '2', '1', 'Y재 2단위', 'X재 1/2단위', 'Y재'],
  ['상황 2', '갑국', '1', '2', 'Y재 1/2단위', 'X재 2단위', 'X재'],
  ['상황 2', '을국', '2', '3', 'Y재 2/3단위', 'X재 3/2단위', 'Y재'],
];
const choices = [
  [
    '① · 옳지 않음',
    '상황 1에서 X재는 갑국이 1명, 을국이 2명을 필요로 하므로 갑국이 절대 우위입니다. Y재는 을국이 1명, 갑국이 2명을 필요로 하므로 을국이 절대 우위입니다.',
  ],
  [
    '② · 옳지 않음',
    '상황 2에서는 갑국이 두 재화 모두에 절대 우위입니다. 국가별로 절대 우위 재화를 나누어 특화한다는 설명만으로는 이 경우의 상호 이익을 설명하기 어렵습니다. 기회비용의 차이인 비교 우위를 확인해야 합니다.',
  ],
  [
    '③ · 옳지 않음',
    '상황 2의 X재 1단위 기회비용은 갑국이 Y재 1/2단위, 을국이 Y재 2/3단위입니다. 1/2이 2/3보다 작으므로 갑국이 포기하는 Y재의 양이 더 적습니다.',
  ],
  [
    '④ · 옳지 않음',
    '두 상황 모두 Y재의 기회비용은 을국이 더 작습니다. 따라서 비교 우위에 따라 Y재를 특화하는 나라는 갑국이 아니라 을국입니다.',
  ],
  [
    '⑤ · 옳음 → 정답',
    '상황 1과 상황 2 모두 양국의 기회비용이 다릅니다. 두 상황에서 갑국은 X재, 을국은 Y재에 비교 우위를 가지므로 비교 우위로 특화와 무역의 발생을 설명할 수 있습니다.',
  ],
];
export function QuestionTwentyOneSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ⑤ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">생산비와 기회비용을 따로 비교</h3>
        <p>
          표는 각 재화 1단위를 생산하는 데 필요한 노동자 수입니다. 같은 재화의
          노동 투입이 적으면 절대 우위이고, 다른 재화를 포기하는 양이 적으면
          비교 우위입니다.
        </p>
        <p>
          X재 1단위의 기회비용 = 같은 나라의 X재 필요 노동자 수 ÷ Y재 필요
          노동자 수입니다. 결과의 단위는 Y재입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr>
                {[
                  '상황',
                  '국가',
                  'X 노동자(명)',
                  'Y 노동자(명)',
                  'X 1단위 기회비용',
                  'Y 1단위 기회비용',
                  '비교 우위',
                ].map(x => (
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
                <tr key={row[0] + row[1]}>
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
export function QuestionTwentyOneAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        모두 더 잘 생산하는 나라와도 무역할 수 있는 이유
      </h3>
      <p>
        공식 배점은 2.5점입니다. 두 상황의 절대 우위는 달라지지만 비교 우위는
        같다는 점을 확인하는 문항입니다. 아래는 자료와 선지에 근거한 SN의
        분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 표의 단위가 계산 방향을 결정</h4>
        <p className="mt-3">
          ‘필요한 노동자 수’는 생산량이 아니라 단위당 투입량입니다. 상황 2에서
          을국의 Y재 수치가 3이라는 것은 생산량이 많다는 뜻이 아니라 1단위를
          만드는 데 3명이 필요하다는 뜻입니다.
        </p>
        <p className="mt-3">
          단위당 생산비 자료에서는 X재 생산비를 같은 나라의 Y재 생산비로
          나눕니다. 동일한 자원을 전부 투입했을 때의 최대 생산량 자료에서는 Y재
          최대 생산량을 X재 최대 생산량으로 나눕니다. 서로 다른 나라의 수치를
          나누는 것이 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. 상황 2가 보여 주는 절대 우위와 비교 우위의 차이
        </h4>
        <p className="mt-3">
          갑국은 X·Y 모두 더 적은 노동으로 생산하지만, X재를 만들 때 포기하는
          Y재도 을국보다 적습니다. 반대로 을국은 두 재화 모두 절대 열위여도
          Y재의 기회비용은 갑국보다 작습니다. 특화 방향은 생산비의 절대 크기가
          아니라 기회비용으로 정합니다.
        </p>
        <p className="mt-3">
          ‘절대 우위만으로 설명하기 어렵다’와 ‘무역 자체가 불가능하다’는 다른
          주장입니다. ②를 틀렸다고 판단하면서 현실의 무역 가능성까지 부정하지
          않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 비교 우위를 모든 무역의 유일한 원리로 확대하지 않기
        </h4>
        <p className="mt-3">
          ⑤는 제시된 두 상황 모두를 비교 우위로 설명할 수 있다는 뜻입니다. 모든
          현실의 무역을 예외 없이 설명한다거나 모든 교환 비율에서 양국이 이익을
          얻는다는 뜻은 아닙니다.
        </p>
        <p className="mt-3">
          이 모형에서 양국 모두 엄밀한 이익을 얻으려면 교환 비율이 양국의
          기회비용 사이에 있어야 합니다. 예를 들어 상황 2에서 X재 1단위를
          교환하는 Y재의 양은 1/2보다 크고 2/3보다 작아야 합니다. 이는 이해를
          돕는 확장이며 원문 정답을 고르는 데 교환 비율 계산은 필요하지
          않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 학생이 확인할 풀이 순서</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>단위당 생산비인지 최대 생산량인지 확인합니다.</li>
          <li>같은 재화의 국가별 생산비를 비교해 절대 우위를 찾습니다.</li>
          <li>각 나라 안에서 X·Y의 비율을 구해 기회비용을 계산합니다.</li>
          <li>같은 재화의 기회비용을 국가 간에 비교합니다.</li>
          <li>
            두 상황의 특화 방향을 각각 확인하고 선지의 ‘모두’를 판정합니다.
          </li>
        </ol>
        <p className="mt-3">
          ‘더 잘한다’는 표현만 쓰기보다 절대적으로 적게 투입하는지, 상대적으로
          덜 포기하는지를 구별합니다. 순위나 생산비 차이의 크기만으로 비교
          우위를 판단하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 시장경제와 지속가능발전 · [10통사2-03-04]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          자원, 노동, 자본의 지역 분포에 따른 국제 분업과 무역의 필요성을
          이해하고, 지속가능발전에 기여하는 국제무역의 방안을 탐색한다.
        </blockquote>
        <p className="mt-3">
          노동 생산 조건의 차이와 국제 분업을 연결합니다. 무역을 통한 이익의
          가능성과 사회 구성원 사이의 이익 분배는 별개의 문제이므로, 이
          모형만으로 모든 무역 정책의 당위성을 단정하지 않습니다.
        </p>
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

export function QuestionTwentyOneRelated() {
  const items = [
    {
      file: '218810-1.png',
      connection:
        '공식 21번처럼 재화 한 단위 생산에 필요한 노동량을 제시합니다. 수치를 생산량이 아닌 생산비로 읽고, 같은 국가 안에서 노동량의 비를 구해 비교 우위를 판별하는 방식이 같습니다.',
      width: 2779,
      height: 2788,
      title: '2021년 3월 전국연합학력평가 · 경제 16번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '⑤',
      text: 'X재의 기회비용은 갑국이 Y재 4/5개, 을국이 Y재 1개이므로 갑국은 X재, 을국은 Y재에 비교 우위입니다. ①의 갑국 Y재 기회비용은 X재 5/4개가 맞습니다. ②의 생산에는 노동 130명이 필요하여 주어진 100명을 초과합니다. 을국은 양 재화에 절대 우위지만 X재에 비교 우위는 없습니다.',
    },
    {
      file: '212881-1.png',
      connection:
        '공식 21번의 한 국가가 두 재화 모두 절대 우위인 상황과 연결됩니다. 두 활동 모두 능숙한 청년과 노인의 분업 사례로, 절대 우위와 비교 우위의 차이를 이해합니다.',
      width: 1997,
      height: 1560,
      title: '2018년 11월 전국연합학력평가 · 통합사회 12번',
      date: '고1 · 교육청 · 제공된 출처 기준',
      answer: '③',
      text: '적절하지 않은 진술을 고릅니다. 청년은 두 활동 모두 절대 우위지만 상대적으로 더 유리한 식량 확보를, 노인은 물 확보를 전담할 수 있습니다. 무역 이익의 발생 가능성이 사회 구성원에게 이익이 균등하게 분배된다는 결론을 보장하지 않으므로 ③이 틀립니다.',
    },
    {
      file: '185687-1.png',
      connection:
        '공식 21번의 비교 우위 판별에서 무역 이익 계산으로 확장한 심화 기출입니다. 특화 전후의 생산량·소비량을 비교해 갑국의 Y재 5개, 을국의 X재 10개 소비 증가를 확인합니다.',
      width: 2914,
      height: 2521,
      title: '2009년 3월 전국연합학력평가 · 경제 18번',
      date: '고3 · 교육청 · 제공된 출처 기준 · 심화: 무역 이익의 정량적 산출',
      answer: '⑤',
      text: '생산비로 우위를 판별하는 공식 21번에서 나아가, 특화 전후의 생산량·소비량으로 실제 무역 이익을 계산합니다. X재 1개 기회비용은 갑국이 Y재 60/40=1.5개, 을국이 50/50=1개이므로 갑국은 Y재, 을국은 X재에 비교 우위가 있습니다. 특화 후 생산량은 각각 Y재 60개, X재 50개입니다. 갑국은 Y재 40개를 내주고 X재 30개를 받으므로 교환 비율은 X:Y=3:4입니다. 갑국의 소비량은 (X 30, Y 15)에서 (X 30, Y 20)으로 바뀌어 Y재 5개의 이익을 얻습니다. 을국은 (X 10, Y 40)에서 (X 20, Y 40)으로 바뀌어 X재 10개의 이익을 얻습니다. 따라서 ⑤가 옳습니다.',
    },
    {
      file: '126217-1.png',
      connection:
        '공식 21번의 생산 기회비용 계산을 역추론으로 확장합니다. 교역 전후 소비 기회비용의 변화로 교환 비율을 찾고 상대국의 생산 기회비용을 복원해야 합니다.',
      width: 2789,
      height: 2560,
      title: '2026년 5월 전국연합학력평가 · 경제 18번',
      date: '고3 · 교육청 · 제공된 출처 기준 · 3점 · 심화: 기회비용 변화로 역추론',
      answer: '①',
      text: '교역 전 생산의 기회비용과 교역 후 소비의 기회비용을 구별하는 문항입니다. 갑국의 X재 1개 생산 기회비용은 Y재 1개이고, 교역 후 소비의 기회비용은 0.5개 증가한 Y재 1.5개입니다. 따라서 교환 비율은 X재 1개당 Y재 1.5개입니다. 을국도 교역 후 소비의 기회비용은 같은 1.5개이며, 교역 전보다 0.5개 감소했으므로 원래 X재 1개 생산의 기회비용은 Y재 2개입니다. 따라서 ㄱ은 Y재 2개로 ①이 옳습니다. 교역으로 생산 기술이 바뀐 것이 아니라 소비에서의 교환 기회가 달라졌다는 점에 유의합니다. 최대 Y재 생산량은 갑국 100개, 을국 150개이고, 을국이 X재 50개를 생산하면 Y재는 최대 50개까지 생산할 수 있습니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        비교 우위와 무역을 묻는 유사 기출 4문항
      </h3>
      <p>생산비와 생산량의 구별, 기회비용과 무역 이익을 연습합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/21/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 21번과의 연결
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
