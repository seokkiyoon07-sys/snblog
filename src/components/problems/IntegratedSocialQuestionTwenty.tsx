import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const cities = [
  ['뉴욕', '2', '1', '1', '4', '39', '30'],
  ['도쿄', '5', '10', '3', '3', '3', '18'],
  ['런던', '1', '2', '2', '1', '6', '12'],
  ['파리', '3', '14', '8', '2', '1', '27'],
];
const functions = [
  ['A', '접근성', '국제 직항 노선 수'],
  ['B', '경제', '세계 500대 기업 수'],
  ['C', '연구·개발', '특허 등록 건수'],
  ['D', '문화 교류', '외국인 방문자 수'],
];
function FunctionTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse text-left">
        <thead>
          <tr>
            {['기호', '기능', '해당 지표'].map(x => (
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
          {functions.map(row => (
            <tr key={row[0]}>
              {row.map(x => (
                <td
                  key={x}
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
const choices = [
  [
    '① · 옳음 → 정답',
    '접근성–국제 직항 노선 수, 경제–세계 500대 기업 수, 연구·개발–특허 등록 건수, 문화 교류–외국인 방문자 수가 모두 일치합니다.',
  ],
  [
    '② · 옳지 않음',
    'A와 B는 맞지만 C와 D가 바뀌었습니다. 외국인 방문자 수는 문화 교류, 특허 등록 건수는 연구·개발에 대응합니다.',
  ],
  [
    '③ · 옳지 않음',
    'A~D에 각각 경제, 연구·개발, 문화 교류, 접근성의 지표를 배치했습니다. 도출한 기능 순서와 일치하지 않습니다.',
  ],
  [
    '④ · 옳지 않음',
    'D의 외국인 방문자 수는 적절하지만 A·B·C가 맞지 않습니다. A는 접근성, B는 경제, C는 연구·개발입니다.',
  ],
  [
    '⑤ · 옳지 않음',
    'C의 특허 등록 건수만 적절합니다. A에 문화 교류, B에 접근성, D에 경제 지표를 배치하여 기능을 혼동했습니다.',
  ],
];
export function QuestionTwentySolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ① · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          순위 단서로 기능을 찾고 지표를 연결
        </h3>
        <p>
          육각형의 같은 위치는 같은 기능입니다. 숫자는 점수가 아니라 기능별
          순위이며, 숫자가 작을수록 높은 순위입니다. 중심에서의 거리나 도형의
          면적을 비교하는 자료가 아닙니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">
            1. 종합 2위는 뉴욕 → B·C는 경제·연구개발
          </h4>
          <p className="mt-2">
            거주 39위, 환경 30위인 뉴욕이 ‘거주와 환경 모두 30위권’이라는 조건을
            만족합니다. 뉴욕의 B·C가 모두 1위이므로 두 기능은 경제와
            연구·개발입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">
            2. 종합 1위는 런던 → A·D는 접근성·문화 교류
          </h4>
          <p className="mt-2">
            남은 도시 중 런던은 A·D가 모두 1위입니다. 문화 교류와 접근성에서
            1위인 종합 1위 도시의 조건에 해당합니다. 뉴욕도 1위 지표가 두
            개이므로 ‘1위가 두 개’라는 조건만으로 런던을 확정하지 않습니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">3. 종합 3위는 도쿄, 종합 4위는 파리</h4>
          <p className="mt-2">
            거주와 C·D가 모두 3위인 도쿄가 종합 3위입니다. 남은 파리는 종합
            4위이며, 문화 교류 2위라는 조건과 파리의 D=2를 연결하면 D는 문화
            교류입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">4. 남은 기능을 확정</h4>
          <p className="mt-2">
            런던의 A·D 중 D가 문화 교류이므로 A는 접근성입니다. 도쿄의 C·D 중
            C는 연구·개발이고, 뉴욕의 B·C 중 B는 경제입니다.
          </p>
        </section>
        <FunctionTable />
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
export function QuestionTwentyAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        도시의 종합 순위와 기능별 순위 구별하기
      </h3>
      <p>
        공식 배점은 2점입니다. 총 25개 예시문항 중 20번으로, 세계 도시의 기능과
        지표를 텍스트·도식의 조건에 맞춰 연결합니다. 아래는 공식 자료에 근거한
        SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 같은 육각형에 적힌 숫자를 읽는 자료
        </h4>
        <p className="mt-3">
          일반적인 레이더 차트처럼 값에 따라 꼭짓점이 이동하지 않습니다. 네
          도시의 도형은 같고, 각 기능의 순위가 숫자로 표시되어 있습니다. ‘중심에
          가까우면 1등’이라는 요령을 적용할 수 없습니다.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="pb-2 text-left">
              공식 도식의 수치를 표로 옮긴 결과 · 단위: 위
            </caption>
            <thead>
              <tr>
                {['도시', 'A', 'B', 'C', 'D', '거주', '환경'].map(x => (
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
              {cities.map(row => (
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
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 확정된 정보와 후보를 구분</h4>
        <p className="mt-3">
          뉴욕을 식별한 직후에는 B·C가 경제·연구개발이라는 후보 묶음만
          정해집니다. 이때 B를 경제라고 먼저 단정하지 않습니다. 파리의 D=2로
          문화 교류를 확정한 뒤, 도쿄와 런던의 조건을 되짚어 후보를 하나씩
          좁힙니다.
        </p>
        <p className="mt-3">
          도시 순위에 대한 배경지식 없이도 자료 안의 조건으로 풀 수 있습니다.
          종합 순위는 기능별 순위 하나와 같지 않으며, 제시된 순위 숫자를 단순히
          더해 계산하는 것도 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">3. 기능의 의미를 지표에 적용</h4>
        <FunctionTable />
        <p className="mt-3">
          국제 직항 노선은 도시 간 이동의 연결성을, 기업 수는 경제적 중심
          기능을, 특허는 연구 성과를, 외국인 방문자는 국제적 방문·교류를 보여
          줍니다. 지표 하나가 도시 기능 전체를 설명하는 것은 아니지만, 이 선지
          구성에서는 각 기능에 가장 알맞은 지표를 구분할 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 자료가 말하는 범위까지만 해석</h4>
        <p className="mt-3">
          뉴욕은 경제·연구개발에서 1위인 반면 거주 39위, 환경 30위입니다. 런던은
          거주 6위, 환경 12위로 뉴욕과 다릅니다. 종합 순위가 높은 도시도 기능별
          강점이 다르다는 점을 읽을 수 있습니다.
        </p>
        <p className="mt-3">
          하지만 이 순위만으로 주거비 폭등이나 환경 오염이 특정 순위의
          원인이라고 확정할 수는 없습니다. 수치는 제시된 2024년 조사에 한정되며
          조사 기관의 선정 기준과 지표에 따라 평가가 달라질 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 세계화와 평화 · [10통사2-04-01]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          세계화의 다양한 양상을 살펴보고, 세계화 시대의 문제점과 그에 대한 해결
          방안을 제안한다.
        </blockquote>
        <p className="mt-3">
          세계적 중심지 역할을 하는 도시를 경제·교통·연구·문화의 여러 기능으로
          이해합니다. 학습에서는 범례와 단위 확인 → 도시 식별 → 기능 확정 → 지표
          연결 순으로 연습합니다. 문항 번호만으로 난이도나 향후 출제 형식을
          예측하지 않습니다.
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

export function QuestionTwentyRelated() {
  const items = [
    {
      file: '197510-1.png',
      connection:
        '공식 20번과 같이 그래프의 지표를 세계 도시의 기능에 연결합니다. 국제 항공 승객 수와 다국적 기업 본사 수를 접근성·경제 기능으로 읽되, 방사형 순위 그래프 대신 다른 좌표 형식을 연습합니다.',
      width: 2824,
      height: 2254,
      title: '2014학년도 6월 모의평가 · 세계지리 16번',
      date: '고3 · 평가원 · 2013년 시행 · 제공된 출처 기준',
      answer: '④ · D',
      text: '하위 세계 도시에 대한 최상위 세계 도시의 상대적 특성을 고릅니다. 최상위 세계 도시는 도시의 수가 적고 국제 항공 승객 수와 다국적 기업 본사 수가 많습니다. 세 축을 모두 만족하는 위치가 D입니다. 이 자료는 개별 도시 이름을 식별하는 문제가 아니라 계층별 상대적 특성을 비교하는 문제입니다.',
    },
    {
      file: '225376-1.png',
      connection:
        '공식 20번의 접근성·경제 지표 매칭을 직접 보완합니다. 국제 항공편 운항과 다국적 기업 본사라는 지표가 각각 어떤 세계 도시 기능을 보여 주는지 판단합니다.',
      width: 2868,
      height: 2834,
      title: '2024학년도 6월 모의평가 · 세계지리 7번',
      date: '고3 · 평가원 · 2023년 시행 · 제공된 출처 기준',
      answer: '③ · ㄴ, ㄷ',
      text: '기업에 금융·법률·컨설팅 등을 제공하는 산업은 생산자 서비스업이므로 ㄴ이 옳습니다. 도시 간 국제 항공편 운항 횟수는 세계 도시의 연결 관계를 파악하는 지표이므로 ㄷ도 옳습니다. 모든 세계 도시가 인구 천만 명 이상인 것은 아니며, 최상위 세계 도시의 수는 하위 세계 도시보다 적습니다.',
    },
    {
      file: '213099-1.png',
      connection:
        '공식 20번의 경제 기능을 이해하는 기초 기출입니다. 대기업 본사와 법률·회계 등 생산자 서비스업의 집적을 세계 도시의 기능과 연결합니다. 순위 퍼즐보다는 개념 해석을 보완합니다.',
      width: 2905,
      height: 2062,
      title: '2018년 11월 전국연합학력평가 · 세계지리 5번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '⑤',
      text: '옳지 않은 설명을 고릅니다. 다국적 기업 본사는 일반적으로 하위 세계 도시보다 최상위 세계 도시에 집중되므로 ⑤가 틀립니다. 법률·회계·광고는 생산자 서비스업이며, 세계 도시의 영향력은 교통·통신의 발달과 관련됩니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        세계 도시의 기능을 묻는 유사 기출 3문항
      </h3>
      <p>세계 도시의 계층, 생산자 서비스업과 국제적 연결성을 연습합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/20/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 20번과의 연결
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
