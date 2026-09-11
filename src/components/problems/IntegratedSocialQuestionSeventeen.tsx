import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    '① · 옳지 않음',
    '대공황은 1929년 시작된 경제 위기로, 산업 혁명 이전이라는 시간적 조건에 맞지 않습니다. 이후 정부의 적극적 시장 개입을 강조하는 수정 자본주의가 확산하였습니다.',
  ],
  [
    '② · 옳지 않음',
    '독점 자본주의는 산업 자본주의의 발전 이후 자본이 소수 거대 기업에 집중된 단계입니다. 산업 혁명 이전의 상업 자본주의와 구별해야 합니다.',
  ],
  [
    '③ · 옳음 → 정답',
    '통치자는 관료제와 상비군을 유지할 재원을 확보하려고 교역을 장려하고 일부 상인에게 특혜를 부여했습니다. 귀금속 확보, 왕권 강화, 국가의 상업 지원이 결합된 중상주의 정책에 해당합니다.',
  ],
  [
    '④ · 옳지 않음',
    '두 차례의 석유 파동은 1970년대의 사건입니다. 경기 침체와 물가 상승이 함께 나타나는 스태그플레이션, 정부 개입의 효과에 대한 논쟁과 연결됩니다.',
  ],
  [
    '⑤ · 옳지 않음',
    '서브프라임 모기지는 신용도가 낮은 차입자 등을 대상으로 한 미국의 주택 담보 대출입니다. 2000년대 대출 확대와 이후 부실화는 글로벌 금융 위기의 배경에 해당하며, 제시된 시대와 다릅니다.',
  ],
];
export function QuestionSeventeenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ③ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">절대 왕정과 중상주의를 연결</h3>
        <p>
          ‘증기 기관이 새로운 동력으로 사용되기 전’은 산업 혁명 이전이라는
          단서입니다. 여기에 ‘관료제·상비군’, ‘교역 장려·상인 특혜’, ‘금·은
          확보’를 연결하면 상업 자본주의와 중상주의를 파악할 수 있습니다.
        </p>
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
const timeline = [
  [
    '상업 자본주의',
    '신항로 개척과 교역 확대, 절대 왕정',
    '중상주의: 교역 지원·귀금속 확보와 국가의 부 증대',
  ],
  [
    '산업 자본주의',
    '산업 혁명과 공장제 생산 확대',
    '자유방임주의와 시장의 자율적 조정 중시',
  ],
  [
    '독점 자본주의',
    '자본의 집중과 거대 기업 성장',
    '경쟁 제한 등 시장의 문제에 대한 대응 필요',
  ],
  [
    '수정 자본주의',
    '대공황 이후',
    '경기 안정과 고용 등을 위한 정부의 적극적 역할 강조',
  ],
  [
    '신자유주의',
    '석유 파동·스태그플레이션 이후 확산',
    '시장 경쟁, 규제 완화, 민영화 등 강조',
  ],
];
export function QuestionSeventeenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">시대의 단서로 경제 정책 판별하기</h3>
      <p>
        공식 배점은 1.5점입니다. 제시문의 시대적 범위를 정하고, 정치적 배경과
        경제 정책을 연결하는 문항입니다. 아래는 원문과 선지에 근거한 SN의
        분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 산업 혁명 이전이라는 시간적 조건
        </h4>
        <p className="mt-3">
          ‘증기 기관’이라는 단어만 보고 산업 자본주의로 판단하면 안 됩니다.
          문장은 그 동력이 사용되기 ‘전까지’의 시대를 묻습니다. 시간의 선후를
          확인한 뒤 다른 단서를 대조합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 국가와 상인이 결합한 이유</h4>
        <p className="mt-3">
          관료제와 상비군에는 재원이 필요합니다. 통치자는 상업을 지원하고 특혜를
          부여하는 대신 세수를 확보했으며, 상인은 교역을 통한 이윤을
          기대했습니다. 이처럼 왕권 강화라는 정치적 목표와 상업 활동을 연결한
          정책이 중상주의입니다.
        </p>
        <p className="mt-3">
          국가가 경제에 개입한다는 사실만으로 수정 자본주의라고 판단하지
          않습니다. 중상주의의 부국강병과 수정 자본주의의 경기 안정·고용이라는
          역사적 목적을 구별합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">3. 선지를 시간 순서로 다시 배열</h4>
        <p className="mt-3">
          ③ 중상주의 → ② 독점 자본주의 → ① 대공황 → ④ 석유 파동 → ⑤ 서브프라임
          모기지 확대 순으로 정리할 수 있습니다. 정답만 확인하지 않고 오답이
          속하는 시대까지 연결합니다.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[540px] border-collapse text-left">
            <thead>
              <tr>
                {['단계', '주요 배경', '시장과 정부의 관계'].map(x => (
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
              {timeline.map(row => (
                <tr key={row[0]}>
                  {row.map(x => (
                    <td
                      key={x}
                      className="border border-gray-200 p-3 align-top dark:border-gray-700"
                    >
                      {x}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          이 표는 학습을 위한 대표적 흐름입니다. 모든 국가가 동일한 시점에 같은
          단계를 거쳤다는 뜻은 아닙니다. 금융 위기의 원인을 하나의 정책이나
          도덕적 평가로만 설명하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 학생이 알아야 할 판별 기준</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>‘이전’, ‘이후’ 등 시기를 제한하는 표현을 먼저 확인합니다.</li>
          <li>왕권 강화·교역 특혜·귀금속 확보를 중상주의에 연결합니다.</li>
          <li>대공황과 석유 파동의 시기 및 정책 논쟁을 구별합니다.</li>
          <li>스태그플레이션은 경기 침체와 물가 상승의 결합임을 기억합니다.</li>
        </ol>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 시장경제와 지속가능발전 · [10통사2-03-01]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          자본주의의 역사적 전개 과정과 그 특징을 조사하고, 시장과 정부의 관계를
          중심으로 다양한 삶의 방식을 비교 평가한다.
        </blockquote>
        <p className="mt-3">
          역사적 상황 속에서 시장과 정부의 관계가 어떻게 달라졌는지 파악합니다.
          이 문항에서는 통치자의 권력 강화와 상업 지원의 관계가 핵심입니다.
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

export function QuestionSeventeenRelated() {
  const items = [
    {
      file: '227031-1.png',
      width: 2880,
      height: 2138,
      title: '2024년 3월 전국연합학력평가 · 경제 12번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '④ · 을, 정',
      text: '을의 산업 혁명과 산업 자본 축적, 정의 대공황 극복과 수정 자본주의가 올바르게 연결됩니다. 갑의 스태그플레이션은 상업 자본주의의 주제가 아닙니다. 병의 절대 왕정·중상주의·신항로 개척은 독점 자본주의가 아니라 상업 자본주의에 해당합니다.',
    },
    {
      file: '180826-1.png',
      width: 2885,
      height: 2865,
      title: '2007년 4월 전국연합학력평가 · 경제 7번',
      date: '고3 · 교육청 · 제공된 출처 기준',
      answer: '③',
      text: '적절하지 않은 내용을 고릅니다. 석유 파동과 스태그플레이션은 독점 자본주의의 폐해에 해당하는 설명이 아니라, 1970년대 수정 자본주의에 대한 비판과 신자유주의 확산의 배경입니다. 나머지는 자본 축적, 자유방임주의, 대공황과 정부 개입, 경쟁 강조의 연결이 적절합니다.',
    },
    {
      file: '194747-1.png',
      width: 2885,
      height: 1783,
      title: '2012년 7월 전국연합학력평가 · 경제 3번',
      date: '고3 · 교육청 · 제공된 출처 기준',
      answer: '⑤',
      text: '옳지 않은 설명을 고릅니다. 석유 파동은 경기 침체와 물가 상승이 함께 나타나는 스태그플레이션과 연결됩니다. 물가가 하락했다는 ⑤가 틀립니다. (나)는 수정 자본주의이며, 정부 개입을 긍정하는 입장입니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        자본주의의 전개를 묻는 유사 기출 3문항
      </h3>
      <p>시대적 배경과 경제 정책, 시장과 정부의 관계를 연습합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/17/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
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
