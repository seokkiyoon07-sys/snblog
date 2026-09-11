import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    'ㄱ · 틀림',
    '2023년은 네모 기호입니다. 네모가 가장 왼쪽에 있는 국가는 아프가니스탄이며, 베네수엘라가 아닙니다. 여기서 가장 작다는 것은 인구 10만 명당 지표값에 대한 비교입니다.',
  ],
  [
    'ㄴ · 옳음',
    '각 국가에서 2014년의 세모와 2023년의 네모 사이 가로 간격을 비교합니다. 우크라이나의 간격이 시리아보다 크므로 두 시점 사이 비율 차이도 우크라이나가 더 큽니다. 정확한 수치를 추정해 계산할 필요는 없습니다.',
  ],
  [
    'ㄷ · 옳음',
    '자료 속 난민들은 주류 집단으로부터 차별받으며, 스스로도 차별받는다고 인식합니다. 이러한 사회적 관계를 근거로 ㉠을 사회적 소수자로 판단합니다. 단순히 인구수가 적기 때문이라고 설명하지 않습니다.',
  ],
  [
    'ㄹ · 틀림',
    'A는 국제 연합과 같은 정부 간 국제기구, B는 국제 앰네스티·국경 없는 의사회와 같은 국제 비정부 기구입니다. 국제법을 바탕으로 가입국 간 합의를 통해 활동한다는 설명은 A에 해당합니다.',
  ],
];
export function QuestionTwelveSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ③ · ㄴ, ㄷ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          시점·비율·행위 주체를 나누어 판단하기
        </h3>
        <section className={card}>
          <h4 className="font-bold">그래프 · △ 2014년 / □ 2023년</h4>
          <p className="mt-2">
            가로축은 국가별 인구 10만 명당 난민의 처지에 놓인 사람들입니다. 절대
            인원수가 아니라 인구 규모를 고려한 상대적 지표입니다. 자료의 주석에
            따라 난민뿐 아니라 난민과 유사한 상황에 놓인 사람들과 기타 국제적
            보호가 필요한 사람들도 포함합니다.
          </p>
          <p className="mt-2">
            2023년 지표값은 시리아 → 베네수엘라 → 남수단 → 우크라이나 →
            아프가니스탄 순입니다. 두 시점의 비율 차이는 기호 사이 가로 간격으로
            비교합니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">
            제시문 · 사회적 소수자와 국제 사회의 행위 주체
          </h4>
          <p className="mt-2">
            ㉠은 차별받는 사회적 소수자입니다. A는 국가들이 구성하는 정부 간
            국제기구, B는 민간이 주도하는 국제 비정부 기구입니다. 구성 주체와
            활동 방식을 구분합니다.
          </p>
        </section>
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
export function QuestionTwelveAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        난민 통계에서 인권 문제와 국제 협력으로
      </h3>
      <p>
        공식 배점은 2.5점입니다. 평가원은 난민 관련 자료에서 인권 문제의 양상과
        추세를 읽고, 사회적 소수자의 의미 및 국제 사회 행위 주체의 역할을
        해석하는 능력을 평가한다고 안내합니다. 아래의 선지 구조 설명과 학습
        제안은 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 값의 크기와 두 시점의 차이 구별
        </h4>
        <p className="mt-3">
          ㄱ은 2023년 네모의 위치를, ㄴ은 한 국가 안에서 세모와 네모 사이의
          간격을 묻습니다. 기준 연도와 비교 대상을 먼저 표시하면 서로 다른 두
          판단을 혼동하지 않을 수 있습니다.
        </p>
        <p className="mt-3">
          인구 10만 명당 1,000명의 차이는 해당 비율의 1%포인트 차이에
          대응합니다. ‘비율의 차이’와 ‘증가율’은 다릅니다. 또한 이 그래프만으로
          난민 절대 인원의 순위나 증가량을 확정할 수 없습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 통계의 대상과 분모 확인</h4>
        <p className="mt-3">
          원출처인 UNHCR의 2023년 추세 보고서에서 이 지표는 출신국을 기준으로
          집계합니다. 수용국에 들어온 난민이 그 나라 주민 중 얼마나 되는지를
          보여주는 그래프로 읽으면 안 됩니다.
        </p>
        <p className="mt-3">
          원출처의 산식은 출신국별 난민 수를 ‘출신국 인구와 해당 난민 수의
          합’으로 나누어 10만을 곱하는 방식입니다. 따라서 국내 거주 인구 중 난민
          비중이라는 표현은 피합니다. 문항 풀이에서는 주어진 축·주석·범례에 따라
          상대적 크기와 변화 폭을 비교하면 충분합니다.
        </p>
        <a
          className={link}
          href="https://www.unhcr.org/sites/default/files/2024-06/global-trends-report-2023.pdf"
          target="_blank"
          rel="noreferrer"
        >
          UNHCR · Global Trends 2023, 그림 8과 지표 산식 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 사회적 소수자는 숫자만으로 결정되지 않음
        </h4>
        <p className="mt-3">
          사회적 소수자를 판단할 때는 사회적 영향력의 열세, 차별과 배제, 집단에
          대한 인식 등 관계적 특성을 살펴야 합니다. 자료는 주류 집단의 차별과
          당사자들의 차별 인식을 직접 제시합니다. 모든 난민 집단이 어느
          사회에서나 동일한 처지라고 일반화하기보다 이 자료의 근거로 판단합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          4. 기구의 이름보다 구성 주체와 역할 확인
        </h4>
        <p className="mt-3">
          정부 간 국제기구는 국가 간 합의를 토대로, 국제 비정부 기구는
          개인·민간단체의 자발적 참여를 토대로 활동합니다. ㄹ은 A와 B의 특성을
          뒤바꿉니다. 두 유형 모두 난민의 인권 보호를 위해 활동할 수 있으므로
          활동 목적만으로 구분하지 않습니다.
        </p>
        <p className="mt-3">
          비정부 기구도 국제법과 인권 규범을 근거로 문제를 제기할 수 있습니다.
          ㄹ의 핵심은 ‘국제법을 언급하는가’가 아니라 ‘가입국 간 합의를 통해
          활동하는 주체인가’입니다.
        </p>
        <a
          className={link}
          href="https://www.un.org/en/about-us/main-bodies"
          target="_blank"
          rel="noreferrer"
        >
          국제 연합 · 주요 기관과 역할 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 인권 보장과 헌법 · [10통사2-01-03]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          사회적 소수자 차별, 청소년의 노동권 등 국내 인권 문제와 인권지수를
          통해 확인할 수 있는 세계 인권 문제의 양상을 조사하고, 이에 대한 해결
          방안을 모색한다.
        </blockquote>
        <p className="mt-3 font-bold">
          통합사회2 · 세계화와 평화 · [10통사2-04-02]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          평화의 관점에서 국제 사회의 갈등과 협력의 사례를 조사하고, 세계 평화를
          위한 행위 주체의 바람직한 역할을 탐색한다.
        </blockquote>
        <p className="mt-3">
          공식 안내에 두 성취기준이 함께 제시되어 있습니다. 난민 문제의 추세를
          읽는 자료 해석, 차별의 사회적 의미, 국제 협력의 주체를 연결하는 것이
          핵심입니다.
        </p>
        <a
          className={link}
          href="https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=103113&lev=0&m=020402"
          target="_blank"
          rel="noreferrer"
        >
          공식 예시문항·출제 의도·성취기준 안내 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">학생이 준비할 것</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>단위·범례·주석을 읽고 절대량과 상대적 지표 구별하기</li>
          <li>특정 연도의 순위, 비율 차이, 증가율을 구별하기</li>
          <li>사회적 소수자를 차별과 권력 관계의 근거로 설명하기</li>
          <li>
            국가·정부 간 국제기구·국제 비정부 기구의 구성 주체와 역할 비교하기
          </li>
        </ol>
        <p className="mt-3">
          관련 기출은 공통 개념을 연습하는 자료입니다. 확인되지 않은 논문의
          영향이나 기출의 직접 차용 관계, 배점만으로 추정한 고난도 여부는 출제
          사실로 제시하지 않습니다.
        </p>
      </section>
    </div>
  );
}
export function QuestionTwelveRelated() {
  const items = [
    {
      file: '309770-1.png',
      width: 2870,
      height: 3296,
      title: '2023년 3월 전국연합학력평가 · 정치와 법 10번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '① · ㄱ, ㄴ',
      text: '㉠ 국제 연합은 정부 간 국제기구이고, ㉡ 국가는 국제 사회의 기본적 행위 주체입니다. ㉢ 난민 구호 단체도 국제 사회의 행위 주체이므로 ㄷ은 틀립니다. 민간 구호 단체가 국가와 달리 국제 연합의 회원이 될 수 있다는 ㄹ도 틀립니다. 따라서 ㄱ·ㄴ이 옳습니다.',
    },
    {
      file: '226964-1.png',
      width: 2836,
      height: 4659,
      title: '2024년 3월 전국연합학력평가 · 통합사회 20번',
      date: '고1 · 교육청 · 제공된 출처 기준',
      answer: '① · 갑',
      text: '㉠은 다국적 기업, ㉡은 국가, ㉢은 국제 연합, ㉣은 국제 비정부 기구입니다. 그린피스와 국경 없는 의사회는 다국적 기업이 아니라 국제 비정부 기구이므로 갑의 진술이 틀립니다. 나머지 학생의 진술은 각 개념에 부합합니다.',
    },
    {
      file: '310779-1.png',
      width: 2851,
      height: 2636,
      title: '2018년 7월 전국연합학력평가 · 법과 정치 19번',
      date: '고3 · 교육청 · 제공된 시행 정보 기준',
      answer: '①',
      text: '총회는 모든 회원국이 참여하는 기관이므로 ①이 옳습니다. 경제 제재의 결정은 사무국이 아닌 안전 보장 이사회의 권한이며, 안전 보장 이사회에는 상임 이사국의 거부권이 존재합니다. 세계 보건 기구는 정부 간 국제기구입니다. 국제 사법 재판소는 국가 간 법적 분쟁 등을 다루며, 개인의 형사 책임을 묻는 국제형사재판소와 구별합니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        국제 사회의 행위 주체를 구별하는 유사 기출 3문항
      </h3>
      <p>
        난민 구호의 주체, 국제기구의 회원 자격, 국제 연합의 기관별 역할을 연결해
        연습합니다.
      </p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/12/${item.file}`;
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
        해설은 원문 이미지에 근거한 SN 풀이입니다. 제공된 시행 정보와 이미지의
        내용 확인을 구분하여 표기했습니다.
      </p>
    </div>
  );
}
