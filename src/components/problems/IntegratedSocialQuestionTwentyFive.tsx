import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const choices = [
  [
    '① · 옳음 — 정답',
    '브라질에서 수력은 약 27%, 천연가스는 약 11~12%입니다. 같은 국가의 전체 1차 에너지 소비량을 분모로 하므로, 비중이 큰 수력의 소비량도 천연가스보다 많습니다.',
  ],
  [
    '② · 옳지 않음',
    '화석 에너지는 석유·석탄·천연가스입니다. 브라질의 세 비중을 합하면 약 35+5+12=52%로 60% 미만입니다. 따라서 네 국가 모두 60% 이상이라는 주장은 틀립니다. 비화석 에너지가 30%를 넘는다는 사실만으로 화석 에너지가 60% 미만이라고 결론 내릴 수는 없습니다.',
  ],
  [
    '③ · 옳지 않음',
    '(라)는 수력으로 전력 생산에 이용됩니다. 수송 수단의 연료로 주로 이용되는 에너지원은 (가) 석유입니다.',
  ],
  [
    '④ · 옳지 않음',
    '근대 산업에서 주요 동력원으로 상용화된 순서를 비교하면 산업 혁명기의 석탄이 석유보다 앞섭니다. 고대부터의 최초 사용 시점을 묻는 것은 아닙니다.',
  ],
  [
    '⑤ · 옳지 않음',
    '(다) 천연가스는 같은 양의 에너지를 얻기 위해 연소할 때 일반적으로 (나) 석탄보다 이산화탄소와 주요 대기 오염 물질 배출이 적습니다. 다만 천연가스도 화석 연료이며 오염 물질을 전혀 배출하지 않는 에너지원은 아닙니다.',
  ],
];
export function QuestionTwentyFiveSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ① · 1.5점 · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          세계 소비 구조와 국가별 비중을 교차 확인하기
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2">기호</th>
                <th className="p-2">에너지원</th>
                <th className="p-2">자료의 판별 근거</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  '(가)',
                  '석유',
                  '제시 기간 세계 소비 비중이 가장 크고 미국·브라질에서도 비중이 큼',
                ],
                ['(나)', '석탄', '인도에서 절반 이상의 소비 비중'],
                ['(다)', '천연가스', '러시아에서 절반 이상의 소비 비중'],
                [
                  '(라)',
                  '수력',
                  '브라질에서 약 27%로 다른 세 국가보다 높은 비중',
                ],
              ].map(row => (
                <tr key={row[0]}>
                  {row.map(c => (
                    <td className="p-2" key={c}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          왼쪽 그래프는 1965~2020년의 비율 변화입니다. 연도별 가로 방향에서 각
          띠의 폭을 읽습니다. 오른쪽 그래프는 국가별 소비량 비율이므로 국가의
          위치와 막대의 범례를 함께 확인합니다. 현재의 소비 순위를 그대로
          대입하지 않습니다.
        </p>
        {choices.map(([title, text]) => (
          <section className={card} key={title}>
            <h4 className="font-bold">{title}</h4>
            <p>{text}</p>
          </section>
        ))}
        <p>
          브라질의 천연가스 막대는 10%를 조금 넘습니다. 수력과 비교하는 데에는
          정확한 소수점 수치가 필요하지 않습니다. 또한 원문은 수력을 별도
          항목으로 표시했지만 수력 역시 재생 가능한 에너지원입니다.
        </p>
        <p className="text-xs">
          연소 특성 확인:{' '}
          <a
            className="underline"
            href="https://www.eia.gov/energyexplained/natural-gas/natural-gas-and-the-environment.php"
            target="_blank"
            rel="noreferrer"
          >
            미국 에너지정보청(EIA)의 천연가스와 환경 설명
          </a>
          . 연소 시 배출과 생산·수송 과정의 메탄 누출 등 전 과정 영향을
          구분합니다.
        </p>
      </div>
    </details>
  );
}
export function QuestionTwentyFiveAnalysis() {
  return (
    <div className="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        에너지원 식별 뒤 같은 분모의 소비 비중 비교하기
      </h3>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 문항 구조 역분해</h4>
        <p>
          세계 소비 비율의 장기 변화로 후보를 좁히고, 러시아·인도·브라질·미국의
          소비 구조로 확인합니다. 이후 ①·②는 그래프의 비교·합산, ③~⑤는
          에너지원의 용도·상용화 시기·연소 특성을 적용하는 구조입니다.
        </p>
        <p>
          정답 ①도 먼저 수력과 천연가스의 범례를 식별해야 판단할 수 있습니다.
          국가별 특징을 암기하는 데서 끝내지 않고 실제 자료의 위치·범례·비중과
          일치하는지 확인하는 것이 중요합니다. 이는 문항 구조에 근거한 SN의
          분석입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 비율과 소비량의 관계</h4>
        <p>
          브라질 내부에서는 모든 막대의 분모가 같으므로 비중의 대소가 소비량의
          대소와 일치합니다. 그러나 국가 간에는 총소비량이 다릅니다. 러시아의
          천연가스 비중이 미국보다 높다는 이유만으로 천연가스 소비량도 더 많다고
          단정할 수는 없습니다.
        </p>
        <p>
          브라질의 화석 에너지 합계를 직접 읽으면 약 52%입니다. ‘수력과 재생
          에너지 비중이 높다’는 인상에 기대기보다 60%라는 선지 기준과 실제
          합계를 비교해야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">3. 통합사회와 교육과정</h4>
        <p>
          국가별 자연환경과 산업 활동이 에너지 소비 구조와 연결됨을 이해하고,
          화석 에너지의 이용과 환경 영향을 함께 살펴봅니다. 1차 에너지 소비
          비중을 발전량 비중이나 생산량 비중으로 바꾸어 읽지 않는 것도
          중요합니다.
        </p>
        <p className="mt-3 font-bold">공식 안내 자료의 연계 성취기준</p>
        <p>
          [10통사2-05-02] 지구적 차원에서 에너지 자원의 분포와 소비 실태를
          파악하고, 기후변화에 대한 대응과 지속가능한 발전을 위한 제도적 방안과
          개인적 노력을 탐구한다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 유사 기출 연결</h4>
        <p>
          유사 기출 3개는 국가별 소비 비율로 에너지원을 찾는 문제, 절대 소비량을
          비교하는 문제, 세계 소비 구조와 국가별 생산량 비중을 함께 읽는
          문제입니다. 각 문항에서 기호의 뜻이 달라지므로 앞 문제의 범례를 그대로
          옮기지 않습니다.
        </p>
        <p>
          원문과 SN 풀이를 유사 기출 탭에 수록했습니다. 제공된 시험 출처를
          표기하되, 공통 소재와 개념에 따른 연계를 직접적인 차용이나 RAG 조회로
          확인한 출제 계보라고 단정하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 학습·변형문항 설계 포인트</h4>
        <p>
          국가 식별 → 에너지원 식별 → 단위·분모 확인 → 선지 비교의 순서로
          연습합니다. 비율 그래프에 총소비량을 추가하면 국가 간 절대 소비량까지
          비교하는 변형이 가능합니다.
        </p>
        <p>
          천연가스는 석탄보다 연소 시 배출이 적다는 상대적 특징으로 학습합니다.
          이를 무공해 에너지로 부르거나 오염 물질의 종류·비교 기준과 무관한 절대
          서열로 외우지 않습니다. 국제 이동량도 단위·연도·자료 범위를 확인해야
          합니다.
        </p>
      </section>
    </div>
  );
}

export function QuestionTwentyFiveRelated() {
  const items = [
    {
      file: '225379-1.png',
      connection:
        '공식 25번과 같이 러시아의 천연가스, 인도의 석탄, 브라질의 수력 비중으로 에너지원을 식별합니다. 국가별 소비 구조를 누적 막대의 범례와 교차 확인하는 방식이 닮았습니다.',
      width: 2868,
      height: 2473,
      title: '2024학년도 6월 모의평가 · 세계지리 10번',
      date: '고3 · 평가원 · 2023년 6월 시행 · 제공된 출처 기준 · 3점',
      answer: '③',
      text: 'A는 천연가스, B는 석유, C는 석탄, D는 수력입니다. 러시아에서 A, 인도에서 C, 브라질에서 D의 비중이 큰 점을 활용합니다. 자료 시기의 일반적인 에너지 교역 특성에서 석유는 석탄보다 국제 이동량이 많으므로 ③이 옳습니다. 산업 혁명 초기 주요 자원은 석탄이고, 석유·천연가스의 매장 특성을 석탄에 적용한 ②는 틀립니다. 수송용 비율과 세계 소비 비중도 각각 석유가 석탄·수력보다 높습니다.',
    },
    {
      file: '222133-1.png',
      connection:
        '공식 25번과 미국·인도·러시아 및 석유·석탄·천연가스 소재를 공유합니다. 용도·상용화 시기·연소 특성을 적용하되, 공식 문항의 비율 그래프와 달리 EJ 단위의 절대 소비량을 읽습니다.',
      width: 2049,
      height: 1483,
      title: '2022년 4월 전국연합학력평가 · 세계지리 14번',
      date: '고3 · 교육청 · 제공된 출처 기준 · 3점',
      answer: '①',
      text: '(가)는 석유, (나)는 천연가스, (다)는 석탄입니다. 러시아의 높은 천연가스 비중과 인도의 높은 석탄 비중으로 구분합니다. 제시 시기 세계 1차 에너지 소비 비중이 가장 큰 석유에 관한 ①이 옳습니다. 냉동·액화 기술은 천연가스 이용 확대와 연결됩니다. 석유의 수송용 비중은 천연가스보다 높고, 천연가스는 석탄보다 연소 시 주요 대기 오염 물질 배출이 적습니다. 석탄의 산업적 상용화는 석유보다 앞섭니다. 그래프 단위는 비율이 아닌 EJ입니다.',
    },
    {
      file: '198824-1.png',
      connection:
        '공식 25번처럼 세계 1차 에너지 소비 구조로 에너지원을 식별하고 특성을 판별합니다. 국가별 생산량 비중을 추가 단서로 사용하므로 소비 구조와 생산 구조를 구별하는 연습도 됩니다.',
      width: 2867,
      height: 2581,
      title: '2014학년도 수능 · 세계지리 5번',
      date: '고3 · 평가원 · 2013년 11월 시행 · 제공된 출처 기준',
      answer: '⑤',
      text: 'A는 석유, B는 석탄, C는 천연가스입니다. 세계 소비 비중과 주요 생산국의 분포를 함께 이용합니다. 원문에서 사용하는 교과 수준의 대표적 매장 특성에 따르면 석유와 천연가스는 주로 신생대 지층에 매장되어 있어 ⑤가 옳습니다. 산업 혁명기의 주요 동력은 석탄, 냉동·액화 저장 기술과 연결되는 것은 천연가스, 수송용 연료로 많이 쓰이는 것은 석유입니다. 석탄과 석유의 생산국이 공동으로 하나의 국제기구를 구성해 생산량을 결정한다는 ④도 틀립니다. 원문의 일반화된 지질 설명을 모든 실제 매장지에 예외 없이 적용하지 않습니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        에너지원과 소비 구조를 묻는 유사 기출 3문항
      </h3>
      <p>소비 비율·소비량·생산량 비중을 구분하여 자료를 읽습니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/25/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 25번과의 연결
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
