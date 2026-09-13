import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    '① · 틀림',
    '㉠은 저소득층의 기본적 생활 수준을 보장하는 제도입니다. 차별받아 온 집단의 실질적 기회 보장을 위한 적극적 평등 실현 조치와 구별합니다. 사회 불평등을 완화한다는 공통 목적만으로 두 제도를 같다고 볼 수 없습니다.',
  ],
  [
    '② · 옳음',
    '㉡은 공공부조가 효과적으로 기능한 사례입니다. 기초연금을 통해 빈곤 노인 가구의 생활 여건이 개선된 것은 이에 해당합니다. 이 문항의 사회보장제도 분류에서 기초연금은 공공부조 사례로 다룹니다.',
  ],
  [
    '③ · 틀림',
    '㉢은 공동체에 대한 소속감과 유대, 공동선을 강조하는 공동체주의적 관점입니다. 독립적 자아의 자유와 권리를 구성원의 책임과 의무보다 강조한다는 선지는 자료의 관점과 맞지 않습니다.',
  ],
  [
    '④ · 틀림',
    '㉣의 직접적인 단서는 장애인의 기본적 욕구 충족입니다. 따라서 생산 기여나 성과에 비례하는 업적에 따른 분배보다 필요에 따른 분배가 부합합니다.',
  ],
  [
    '⑤ · 틀림',
    '㉤은 국토 개발 초기 단계에 시행되어 수도권 과밀의 원인 중 하나가 된 정책입니다. 혁신도시 건설과 공공기관 지방 이전은 지역 격차를 완화하기 위한 대책으로, 병이 이후 조사하려는 내용에 해당합니다.',
  ],
];
export function QuestionThirteenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ② · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          세 학생의 탐구 주제와 조사 대상을 연결하기
        </h3>
        <section className={card}>
          <h4 className="font-bold">갑 · 사회 계층 양극화</h4>
          <p className="mt-2">
            ㉠은 저소득층의 기본적 생활 보장 제도, ㉡은 공공부조의 효과를 보여
            주는 사례입니다. 기초연금에 의한 빈곤 노인 가구의 생활 개선이 ㉡에
            들어갈 수 있습니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">을 · 사회적 약자 차별과 정의</h4>
          <p className="mt-2">
            ㉢은 공동체주의적 정의관입니다. ㉣은 중증 장애인의 기본적 욕구
            충족을 위한 자원 분배이므로 필요에 따른 분배와 연결합니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">병 · 공간 불평등</h4>
          <p className="mt-2">
            ㉤은 국토 개발 초기의 성장 거점 중심 개발과 연결됩니다. 이미 조사한
            ‘과밀의 원인’과 앞으로 조사할 ‘지역 격차 완화 정책’을 나누어 읽어야
            합니다.
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
export function QuestionThirteenAnalysis() {
  const standards = [
    [
      '10통사2-02-01',
      '정의의 의미와 정의가 요구되는 이유를 파악하고, 다양한 사례를 통해 정의의 실질적 기준을 탐구한다.',
    ],
    [
      '10통사2-02-02',
      '개인과 공동체의 관계를 기준으로 다양한 정의관을 비교하고, 이를 구체적인 사례에 적용하여 설명한다.',
    ],
    [
      '10통사2-02-03',
      '사회 및 공간 불평등 현상의 사례를 조사하고, 정의로운 사회를 만들기 위한 다양한 제도와 시민으로서의 실천 방안을 제안한다.',
    ],
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        불평등 탐구에 맞는 제도·정의관·정책 찾기
      </h3>
      <p>
        공식 배점은 2.5점이며 행동 영역은 ‘탐구 설계 및 수행’입니다. 평가원은
        사회 계층 양극화, 사회적 약자 차별, 공간 불평등의 원인과 해결 방안을
        탐색하는 데 적합한 조사 내용을 판단하는 문항으로 안내합니다. 아래의 학습
        제안은 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 비슷한 목적을 가진 제도의 차이</h4>
        <p className="mt-3">
          공공부조는 생활이 어려운 사람의 기본적 생활 보장과 자립 지원에 초점을
          둡니다. 적극적 평등 실현 조치는 차별받아 온 집단의 불리한 여건을
          시정하고 실질적 기회를 보장하는 우대 조치입니다. ‘약자를 돕는다’는
          말만 보지 말고 지원 대상·목적·방식을 함께 확인합니다.
        </p>
        <p className="mt-3">
          기초연금과 국민연금은 이름이 비슷하지만 이 문항에서의 분류는 다릅니다.
          기초연금은 공공부조, 국민연금은 사회보험에 연결합니다. 가입자의 보험료
          납부를 토대로 하는 제도인지도 구별의 단서입니다. 정답 판단에 현재의
          지급액이나 세부 선정 기준을 외울 필요는 없습니다.
        </p>
        <a
          className={link}
          href="https://www.mohw.go.kr/menu.es?mid=a10714040000"
          target="_blank"
          rel="noreferrer"
        >
          보건복지부 · 기초연금 제도 안내 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. 정의관과 분배 기준을 별도로 판별
        </h4>
        <p className="mt-3">
          ㉢은 개인과 공동체의 관계에 대한 관점이고, ㉣은 자원을 나누는
          기준입니다. ‘소속감·유대·공동선’은 공동체주의, ‘기본적 욕구 충족’은
          필요에 따른 분배의 근거입니다.
        </p>
        <p className="mt-3">
          공동체주의가 개인의 자유와 권리를 부정한다거나 언제나 필요에 따른
          분배만을 인정한다고 확대하지 않습니다. ④의 판정은 제시된 구체적 방안이
          무엇을 충족하려는지에 근거합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 원인 조사와 해결 방안 조사 구별
        </h4>
        <p className="mt-3">
          병은 먼저 수도권 과밀의 원인이 된 초기 개발 정책을 조사했고, 이후 지역
          격차 완화 정책을 조사하려 합니다. ⑤의 혁신도시와 공공기관 지방 이전은
          뒤의 조사 계획에 해당합니다. 정책 자체가 실제 존재하는 옳은 사례여도
          밑줄이 가리키는 조사 대상과 다르면 오답입니다.
        </p>
        <p className="mt-3">
          성장 거점을 육성하는 모든 정책이 불균형을 심화한다고 일반화하지
          않습니다. 비수도권 성장 거점 육성은 균형발전을 위해 추진되기도 합니다.
          이 문항은 초기 국토 개발이라는 시기와 수도권 과밀이라는 맥락을 함께
          읽어야 합니다.
        </p>
        <a
          className={link}
          href="https://www.opm.go.kr/_res/opm/etc/kukjungfile2022.pdf"
          target="_blank"
          rel="noreferrer"
        >
          정부 정책 자료 · 공공기관 이전과 지역 성장거점 육성 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">통합사회2 · 사회정의와 불평등</p>
        {standards.map(([code, text]) => (
          <div className="mt-4" key={code}>
            <p className="font-bold">[{code}]</p>
            <blockquote className="mt-2 border-l-2 border-emerald-500 pl-4">
              {text}
            </blockquote>
          </div>
        ))}
        <p className="mt-3">
          공식 안내에는 세 성취기준이 함께 제시됩니다. 계층·사회적
          약자·지역이라는 하위 주제를 각각의 제도와 정의 기준에 연결하는
          탐구입니다.
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
        <h4 className="text-lg font-bold">5. 학생이 준비할 것</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>탐구 주제 → 조사 대상 → 적합한 사례 순서로 정리하기</li>
          <li>사회보험·공공부조·사회서비스의 목적과 사례 비교하기</li>
          <li>공동체주의적 정의관과 필요·업적 등 분배 기준 구별하기</li>
          <li>과거의 원인과 이후의 대책을 시간 순서로 표시하기</li>
        </ol>
        <p className="mt-3">
          유사 기출은 공통 개념을 복습하는 자료입니다. 특정 기출의 직접 차용이나
          배점만으로 추정한 ‘킬러 문항’ 여부를 확인된 출제 사실로 제시하지
          않습니다.
        </p>
      </section>
    </div>
  );
}
export function QuestionThirteenRelated() {
  const items = [
    {
      file: '2114-1.png',
      connection:
        '공식 13번의 공공부조 사례 판단과 직접 연결됩니다. 국민기초생활보장제도·기초연금을 사회보험과 구별하고 기본생활 보장이라는 제도의 목적을 확인합니다.',
      width: 2011,
      height: 1612,
      title: '2018년 3월 전국연합학력평가 · 사회·문화 14번',
      date: '고3 · 교육청 · 제공된 출처 기준',
      answer: '④ · ㄴ, ㄹ',
      text: '건강보험을 포함하는 A는 사회보험, 국민기초생활보장과 기초연금을 포함하는 B는 공공부조입니다. B의 사후 처방적 성격을 설명한 ㄴ과 A의 사례로 국민연금을 제시한 ㄹ이 옳습니다. 사회보험 가입자는 비용을 부담하며, 두 유형 모두 비금전적 지원을 원칙으로 한다는 ㄷ은 틀립니다.',
    },
    {
      file: '634-1.png',
      connection:
        '공식 13번에서 빈곤과 불평등의 완화 방안을 해석하는 데 필요한 기출입니다. 국민기초생활보장제도의 공공부조 성격과 소득 재분배 기능을 사회보험과 비교합니다.',
      width: 2812,
      height: 2510,
      title: '2014학년도 6월 모의평가 · 사회·문화 14번',
      date: '고3 · 평가원 · 2013년 시행 · 제공된 출처 기준',
      answer: '③',
      text: '㉠ 국민기초생활보장제도는 공공부조, ㉡ 국민연금은 사회보험입니다. 공공부조는 사회보험보다 소득 재분배 기능이 더 강조되므로 ③이 옳습니다. 공공부조는 모든 국민이 수급자가 되거나 강제 가입하는 제도가 아니며, 수급자의 보험료 납부를 전제로 하지 않습니다.',
    },
    {
      file: '216338-1.png',
      connection:
        '공식 13번의 사회보장제도 판단을 보완합니다. 비용 부담자와 수혜자, 지원 방식, 상호 부조 원리를 비교하여 공공부조와 사회보험의 공통점·차이점을 구별합니다.',
      width: 2870,
      height: 2009,
      title: '2020년 4월 전국연합학력평가 · 사회·문화 19번',
      date: '고3 · 교육청 · 제공된 출처 기준',
      answer: '③',
      text: '이 문항의 교과 분류에서 사회보험과 공공부조는 모두 금전적 지원을 원칙으로 하므로 공통점인 (다)에 해당하는 ③이 옳습니다. 비용 부담자와 수혜자의 불일치는 공공부조, 상호 부조의 원리는 사회보험의 특징입니다. 국민기초생활보장제도는 공공부조, 국민연금은 사회보험입니다. 금전적 지원 원칙을 모든 실제 급여가 현금으로 지급된다는 뜻으로 확대하지 않습니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        사회보장제도를 비교하는 유사 기출 3문항
      </h3>
      <p>
        13번의 갑이 조사하는 공공부조를 중심으로, 사회보험과의 사례·재원·기능
        차이를 연습합니다.
      </p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/13/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 13번과의 연결
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
        해설은 원문 이미지에 근거한 SN 풀이입니다. 시행 정보는 제공된 출처를
        기준으로 표기했습니다.
      </p>
    </div>
  );
}
