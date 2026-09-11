import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const countries = [
  [
    '(가) · 대한민국',
    '1955년 총인구 약 2천만 명에서 2015년 약 5천만 명으로 증가합니다. 도시 인구가 빠르게 늘고 촌락 인구는 감소하여, 2015년 도시화율이 80%를 넘습니다.',
  ],
  [
    '(나) · 베트남',
    '2015년 총인구는 약 9천만 명대이며 촌락 인구가 도시 인구보다 많습니다. 도시화율은 약 30~35%로, 제시된 구분의 가속화 단계에 해당합니다.',
  ],
  [
    '(다) · 영국',
    '1955년부터 총인구가 약 5천만 명이고 도시 인구 비중이 높습니다. 2015년 총인구는 약 6천만 명대입니다. 1955년 도시화율이 세 나라 중 가장 높지만 그래프상 80% 미만이므로 당시 이미 종착 단계였다고 단정하지 않습니다.',
  ],
];
const choices = [
  [
    '① · 틀림',
    '1970년대 도시 인구 증가율은 대한민국이 영국보다 높습니다. 총인구의 증가나 그래프 윗선의 기울기가 아니라 도시 인구 A의 두께 변화를 읽고, 기준 시점의 도시 인구와 비교해야 합니다.',
  ],
  [
    '② · 틀림',
    '㉠은 초기 단계, ㉢은 종착 단계입니다. 일반적으로 산업화·도시화가 진행되면 1차 산업 종사자 비율은 낮아지므로 방향이 반대입니다.',
  ],
  [
    '③ · 틀림',
    '(나) 베트남은 2015년 도시화율이 약 30~35%입니다. 문항이 제시한 종착 단계의 기준인 80%에 미치지 못합니다.',
  ],
  [
    '④ · 틀림',
    '(가)는 대한민국, (다)는 영국입니다. 산업화와 도시화가 일찍 진행된 영국에서 교외화가 먼저 나타났으므로, 대한민국의 출현 시기가 더 이르다는 진술은 틀립니다.',
  ],
  [
    '⑤ · 옳음',
    '1955년 전체 높이에서 도시 인구 A의 두께가 차지하는 비중은 (다) 영국이 가장 큽니다. (가) 대한민국이나 (나) 베트남과 뚜렷하게 구별됩니다.',
  ],
];
export function QuestionSixSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ⑤ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">A는 도시 인구, B는 촌락 인구</h3>
        <p>
          어두운 위쪽 영역 A는 도시 인구, 밝은 아래쪽 영역 B는 촌락 인구입니다.
          가장 위 경계선의 높이는 A가 아니라 총인구 A+B입니다. 한 시점에서 A
          영역의 세로 두께를 읽어야 도시 인구를 구할 수 있습니다.
        </p>
        <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
          <p>도시 인구 = 전체 높이 − 아래쪽 B의 높이</p>
          <p>도시화율 = 도시 인구 ÷ (도시 인구 + 촌락 인구) × 100</p>
        </div>
        {countries.map(([name, text]) => (
          <section key={name} className={card}>
            <h4 className="font-bold">{name}</h4>
            <p className="mt-2">{text}</p>
          </section>
        ))}
        <p className="text-xs">
          수치는 원문 그래프의 눈금을 읽은 근삿값입니다. 현재 인구 통계가 아니라
          제시된 1955~2015년 자료를 기준으로 판단합니다.
        </p>
        <dl className="space-y-4">
          {choices.map(([label, text]) => (
            <div key={label}>
              <dt className="font-bold">{label}</dt>
              <dd className="mt-1">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </details>
  );
}
export function QuestionSixAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">인구의 규모·비중·변화를 구별하기</h3>
      <p>
        공식 배점은 1.5점입니다. 누적 영역 그래프를 도시화율로 바꾸어 읽고
        도시화 과정의 특징을 연결하는 문항입니다. 아래는 자료에 근거한 SN의 구조
        분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 국가 이름보다 범례와 층위를 먼저
        </h4>
        <p className="mt-3">
          세 그래프의 단위는 모두 천만 명이며 세로축 범위도 같습니다. 총인구
          규모와 A·B의 비중 변화를 함께 보면 (가) 대한민국, (나) 베트남, (다)
          영국으로 연결됩니다. 인구의 절대량 하나만으로 국가를 외우기보다 변화
          양상까지 교차 확인합니다.
        </p>
        <p className="mt-3">
          영역의 전체 면적이 아니라 해당 연도의 세로 두께를 비교합니다. 위
          영역의 상단 좌표를 도시 인구로 잘못 읽으면 도시화율과 증가율 판단이
          함께 틀어집니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. 도시 인구·도시화율·도시 인구 증가율
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>도시 인구: 도시에 거주하는 사람의 수</li>
          <li>도시화율: 같은 시점의 전체 인구 중 도시 인구의 비율</li>
          <li>
            도시 인구 증가율: (나중 도시 인구 − 처음 도시 인구) ÷ 처음 도시 인구
            × 100
          </li>
        </ul>
        <p className="mt-3">
          도시 인구가 많거나 도시화율이 높다고 도시 인구 증가율도 높은 것은
          아닙니다. ①은 서로 다른 지표를 혼동하는지, ⑤는 같은 시점의 비율을
          올바르게 비교하는지 점검합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 단계의 기준은 문항의 정의에 따른다
        </h4>
        <p className="mt-3">
          제시문은 초기 단계를 0~20%, 종착 단계를 80~100%로 구분합니다. 베트남의
          2015년 도시화율은 가속화 단계에 해당합니다. 영국은 일찍 도시화가
          진행되었지만 1955년 그래프를 곧바로 80% 이상이라고 읽어서는 안 됩니다.
        </p>
        <p className="mt-3">
          도시화 단계는 비율을 설명하는 모형입니다. 종착 단계가 도시 문제의
          소멸이나 모든 인구 이동의 종료를 뜻하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 교외화의 역사와 자료의 한계</h4>
        <p className="mt-3">
          교외화는 대도시의 인구와 기능이 주변 지역으로 확산되는 현상입니다.
          영국의 교외 확산은 한국의 본격적인 산업화보다 앞서 나타났습니다.
          Historic England는 19세기부터 진행된 잉글랜드 도시의 외연 확장과 교외
          생활의 확산을 설명합니다.
        </p>
        <a
          className={link}
          href="https://historicengland.org.uk/whats-new/research/englands-suburbs-1820-to-2020/"
          target="_blank"
          rel="noreferrer"
        >
          Historic England · 교외 발전의 역사 ↗
        </a>
        <p className="mt-3">
          다만 현재 도시화율의 높고 낮음만으로 모든 국가의 교외화 시작 순서를
          결정할 수는 없습니다. 교외화와 대도시권 밖으로의 분산을 뜻하는
          역도시화도 구별해야 합니다. ④에는 국가 식별과 역사적 도시화 지식을
          함께 적용합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정과 연결</h4>
        <p className="mt-3 font-bold">
          통합사회1 · 생활공간과 사회 · [10통사1-05-01]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          산업화, 도시화로 인해 나타난 생활공간과 생활양식의 변화 양상을
          조사하고, 이에 따른 문제점의 해결 방안을 제안한다.
        </blockquote>
        <p className="mt-3">
          이 문항은 산업화·도시화의 진행과 생활공간 변화의 관계를 묻습니다. 해결
          방안을 직접 제시하게 하는 문항은 아니지만, 주거·교통 등 도시 문제를
          학습하는 기초가 됩니다.
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
      <section className={card}>
        <h4 className="text-lg font-bold">학생이 연습할 것</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>누적 그래프에서 총인구와 각 영역의 인구 분리하기</li>
          <li>도시화율을 분수로 계산하고 도시 인구 증가율과 구별하기</li>
          <li>기준 연도와 도시화 단계의 경계 확인하기</li>
          <li>도시화·교외화·역도시화를 사례로 구별하기</li>
        </ol>
        <p className="mt-3">
          유사 기출은 같은 개념을 다른 자료 형식으로 연습하는 데 활용합니다.
          구조가 비슷하다는 사실만으로 직접적인 출제 계보나 특정 논문의 영향이
          입증되지는 않습니다.
        </p>
      </section>
    </div>
  );
}
export function QuestionSixRelated() {
  const items = [
    {
      file: '215036-1.png',
      width: 2834,
      height: 2518,
      title: '2020학년도 9월 모의평가 · 세계지리 17번',
      date: '2019년 9월 시행',
      answer: '① · ㄱ, ㄴ',
      text: '(가)는 영국, (나)는 말레이시아, (다)는 탄자니아입니다. 영국은 산업화에 따른 도시화가 가장 일찍 시작되어 ㄱ은 옳습니다. 말레이시아의 2015년 도시화율은 50%를 넘으므로 도시 인구가 촌락 인구보다 많아 ㄴ도 옳습니다. 탄자니아는 종착 단계가 아니며, 1970년 이후 도시화율 상승 폭은 영국보다 말레이시아가 크므로 ㄷ·ㄹ은 틀립니다.',
      connection:
        '도시화율의 수준과 상승 속도를 구별합니다. 그래프의 시간 범위는 1970~2015년입니다.',
    },
    {
      file: '228137-1.png',
      width: 2834,
      height: 2066,
      title: '2025학년도 6월 모의평가 · 세계지리 18번',
      date: '2024년 6월 시행',
      answer: '④',
      text: '(가)는 수단, (나)는 타이, (다)는 영국입니다. 촌락 인구 = 도시 인구 × (100 − 도시화율) ÷ 도시화율로 계산하면 타이는 약 3,374만 명, 영국은 약 1,084만 명이므로 ④가 옳습니다. ①은 영국의 증가율 0.9%가 타이의 1.7%보다 낮아 틀리고, ②는 수단의 도시화율이 50% 미만이므로 틀립니다. ③의 최상위 세계 도시는 이 문항의 국가 중 영국의 런던에 해당하며, ⑤는 영국의 산업화가 더 일찍 시작되어 틀립니다.',
      connection:
        '절대 인구와 도시화율을 결합해 촌락 인구를 계산합니다. 도시 인구 증가율과 도시화율은 서로 다른 지표입니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        도시화 지표를 연결하는 유사 기출 2문항
      </h3>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/6/${item.file}`;
        return (
          <section key={item.file} className={card}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date} · 한국교육과정평가원</p>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.title} 원문 크게 보기`}
              className="mt-4 block bg-white p-2"
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
            <p className="mt-4">{item.connection}</p>
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
        출처 표기는 제공된 시행 연월을 학년도와 구별해 정리했습니다. 유사 기출
        해설은 원문 이미지에 근거한 SN 풀이입니다.
      </p>
    </div>
  );
}
