import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const choices = [
  [
    '① · 옳지 않음',
    '미·소 냉전 체제는 제2차 세계 대전 이후 형성되었습니다. 2000년의 선언은 냉전 체제 형성 이전의 합의가 아닙니다.',
  ],
  [
    '② · 옳지 않음',
    '4항은 사회·문화·체육·보건·환경 등 여러 분야의 협력과 교류를 활성화하자고 명시합니다. 사회·문화적 교류의 필요성을 간과했다는 설명은 자료와 반대입니다.',
  ],
  [
    '③ · 옳지 않음',
    '정전 협정은 1953년, 6·15 남북 공동 선언은 2000년의 문서입니다. 같은 연도에 발표되지 않았습니다.',
  ],
  [
    '④ · 옳음 — 정답',
    '이산가족 방문은 가족 분리의 고통이라는 무형적 분단 비용을 완화할 수 있습니다. 경제 협력과 다양한 교류 역시 상호 이해와 신뢰를 높여 대립·갈등으로 인한 유·무형의 부담을 줄이는 데 기여할 수 있습니다.',
  ],
  [
    '⑤ · 옳지 않음',
    '선언은 정치 체제의 완전한 통합을 교류·협력의 선행 조건으로 제시하지 않습니다. 통일을 지향하는 과정에서도 인도적 문제 해결과 경제·사회·문화적 협력을 추진할 수 있다는 취지입니다.',
  ],
];
export function QuestionTwentyTwoSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ④ · 2.5점 · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">6·15 남북 공동 선언과 분단 비용</h3>
        <p>
          분단 이후 첫 남북 정상 회담, 남측 연합제와 북측 낮은 단계의 연방제의
          공통성 인정, 이산가족 방문단 교환이 핵심 단서입니다. 자료는 2000년
          김대중 대통령과 김정일 국방위원장의 정상 회담에서 발표된 6·15 남북
          공동 선언입니다.
        </p>
        <div className={card}>
          <h4 className="font-bold">선언의 내용을 비용 개념으로 읽기</h4>
          <p>
            3항의 이산가족 문제 해결은 가족 분리로 인한 고통을 줄이는
            방안입니다. 4항의 경제 협력과 사회·문화적 교류는 상호 신뢰를 쌓고
            긴장을 완화하는 데 기여할 수 있습니다. 분단 비용은 금전적 지출뿐
            아니라 불안과 고통 같은 비금전적 부담도 포함합니다.
          </p>
        </div>
        {choices.map(([title, text]) => (
          <section className={card} key={title}>
            <h4 className="font-bold">{title}</h4>
            <p>{text}</p>
          </section>
        ))}
        <p>
          ④는 비용을 절감할 수 있는 방안을 제시했는지 묻습니다. 선언 이후 실제
          국방비가 감소했는지까지 입증해야 하는 선지가 아닙니다.
        </p>
      </div>
    </details>
  );
}
export function QuestionTwentyTwoAnalysis() {
  return (
    <div className="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        사료의 교류·협력 조항을 분단 비용과 연결하기
      </h3>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 출제 구조 역분해</h4>
        <p>
          역사적 단서로 선언을 식별하고, 각 조항을 사회적 개념에 적용하는
          구조입니다. ①·③은 시기 비교, ②·⑤는 자료에 있는 내용의 반전, ④는
          교류·협력의 효과를 분단 비용으로 해석하는 능력을 묻습니다.
        </p>
        <p>
          선언의 이름과 연도를 알면 역사 선지를 빠르게 판별할 수 있지만, ②·④·⑤는
          조항의 의미를 직접 읽는 것이 중요합니다. 출제진의 내부 의도가 확인된
          것은 아니며, 이러한 분석은 문항 구조에 근거한 SN의 해석입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 비용의 범위를 넓혀 읽기</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2">개념</th>
                <th className="p-2">의미와 사례</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 font-bold">분단 비용</td>
                <td className="p-2">
                  분단에 따른 대립·갈등으로 발생하는 유·무형의 부담. 군사적
                  긴장에 따른 추가 부담, 이산가족의 고통 등이 해당합니다.
                </td>
              </tr>
              <tr>
                <td className="p-2 font-bold">평화 비용</td>
                <td className="p-2">
                  평화 정착을 위해 지출하는 투자 성격의 비용. 인도적 지원과 교류
                  사업 등을 통해 분단 비용을 줄이는 데 기여할 수 있습니다.
                </td>
              </tr>
              <tr>
                <td className="p-2 font-bold">통일 비용·편익</td>
                <td className="p-2">
                  통일 과정의 제도 통합 등에 필요한 비용과, 통일로 얻는
                  유·무형의 이익을 구별합니다. 비용의 범위와 규모는 통일의
                  방식·시기에 따라 달라질 수 있습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          국방비 전체를 분단 때문에 추가로 드는 비용과 동일시하지 않습니다. 평화
          비용과 분단 비용도 반드시 일정한 비율로 반비례하는 관계가 아닙니다.
          공식 문항의 핵심은 교류가 비용 절감에 기여할 가능성입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">3. 통합사회로 읽는 이유</h4>
        <p>
          역사 자료의 사실 확인에 더해 가족 분리의 고통, 경제적 부담, 교류를
          통한 신뢰 형성을 함께 해석합니다. 통일 이전에도 평화를 위한 실천이
          가능하다는 점에서 역사적 이해와 윤리적·경제적 판단이 연결됩니다.
        </p>
        <p className="mt-3 font-bold">
          공식 예시문항 안내 자료의 연계 성취기준
        </p>
        <p>
          [10통사2-04-03] 남북 분단과 동아시아의 역사 갈등 상황을 분석하고, 이를
          토대로 우리나라가 세계 평화에 기여할 수 있는 방안을 제안한다.
        </p>
        <p>
          [10통사2-05-03] 미래 사회의 모습을 다양한 측면에서 예측하고, 이를
          바탕으로 세계시민으로서 자신의 미래 삶의 방향을 설정한다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 유사 기출 연결</h4>
        <p>
          한국사 기출에서는 6·15 공동 선언과 다른 남북 합의를 구분하는 연습을,
          생활과 윤리·통합사회 기출에서는 분단 비용·평화 비용·통일 비용·편익의
          구별을 연습합니다. 유사 기출 탭에 원문 3개와 SN 풀이를 수록했습니다.
          유사성은 개념과 자료에 따른 연결이며 직접적인 출제 계보나 특정 연구의
          채택을 입증하는 것은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 학습·변형문항 설계 포인트</h4>
        <p>
          7·4 남북 공동 성명의 자주·평화·민족 대단결, 남북 기본 합의서의 잠정적
          특수 관계와 불가침, 6·15 남북 공동 선언의 통일 방안 공통성을
          구분합니다. 이어 각 자료에서 비용을 줄일 수 있는 구체적 조항을 찾아
          근거를 붙입니다.
        </p>
        <p>
          변형문항은 이산가족 상봉이나 교류 사업의 사례를 주고 유형·무형 부담과
          투자 성격의 지출을 구분하도록 설계할 수 있습니다. 배점만으로 최상위
          난도라고 단정하거나 특정 풀이 시간을 보장하지 않습니다.
        </p>
      </section>
    </div>
  );
}

export function QuestionTwentyTwoRelated() {
  const items = [
    {
      file: '203439-1.png',
      connection:
        '공식 22번과 같은 6·15 남북 공동 선언의 통일 방안 공통성 문구를 식별합니다. 공식 문항이 분단 비용과 연결한다면 이 기출은 다른 남북 선언과의 시기 비교로 확장합니다.',
      width: 2968,
      height: 3034,
      title: '2015년 7월 전국연합학력평가 · 한국사 20번',
      date: '고3 · 교육청 · 제공된 출처 기준',
      answer: '①',
      text: '(가)는 2000년 6·15 남북 공동 선언, (나)는 2007년 10·4 선언입니다. 두 선언 사이에 개성 공단이 조성되었습니다. 남북 조절 위원회 설치, 남북 유엔 동시 가입, 최초 남북 적십자 회담, 한반도 비핵화 공동 선언은 모두 (가) 이전의 일입니다.',
    },
    {
      file: '214203-1.png',
      connection:
        '공식 22번의 유·무형 분단 비용 절감 선지와 연결됩니다. 이산가족의 고통, 교류 사업, 제도 통합을 분단 비용·평화 비용·통일 비용으로 구분하여 선언의 효과를 해석합니다.',
      width: 2781,
      height: 2405,
      title: '2020학년도 6월 모의평가 · 생활과 윤리 9번',
      date: '고3 · 평가원 · 2019년 시행 · 제공된 출처 기준',
      answer: '②',
      text: '적절하지 않은 내용을 고릅니다. 제시문의 정의에 따르면 통일 이전 스포츠 교류 사업은 평화 정착을 위한 평화 비용에 해당하므로 통일 비용이라는 ②가 틀립니다. 이산가족의 고통과 외국인 투자 감소는 분단 비용이며, 평화 비용은 긴장을 완화하여 분단 비용을 줄이는 데 기여할 수 있습니다.',
    },
    {
      file: '226947-1.png',
      connection:
        '공식 22번의 분단 비용 개념을 장기적 비용·편익 비교로 확장합니다. 분단 지속에 따른 부담과 통일 과정의 비용, 통일로 얻는 이익을 바꾸어 읽지 않는 연습입니다.',
      width: 2792,
      height: 2030,
      title: '2024년 3월 전국연합학력평가 · 통합사회 3번',
      date: '고1 · 교육청 · 제공된 출처 기준',
      answer: '③',
      text: '제시문은 장기적으로 통일 편익이 통일 비용보다 크다고 봅니다. 따라서 ③이 적절합니다. 통일 비용은 제시문에서 통일 전후 한시적으로 발생한다고 설명하며, 분단 비용은 분단의 지속에 따른 부담입니다. 체제 통합에 필요한 비용이나 통일로 얻는 편익과 바꾸어 읽지 않습니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        남북 합의와 통일 비용을 묻는 유사 기출 3문항
      </h3>
      <p>남북 합의의 시기와 분단 비용·평화 비용·통일 편익을 연결합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/22/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 22번과의 연결
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
