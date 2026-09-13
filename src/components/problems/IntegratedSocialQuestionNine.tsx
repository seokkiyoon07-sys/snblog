import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    'ㄱ · 옳음',
    '새 도로·철도 연결은 이동 부담을 줄여 코펜하겐에 도달하기 쉽게 만듭니다. 접근성 향상에 해당합니다.',
  ],
  [
    'ㄴ · 틀림',
    '빨대 효과는 교통 연결이 좋아지면서 주변 중소 도시의 소비·경제 활동 등이 더 큰 중심 도시로 흡인되는 현상입니다. 대도시에서 중소 도시로 분산된다는 설명은 방향을 뒤집었습니다.',
  ],
  [
    'ㄷ · 옳음',
    '통근·쇼핑·여가 등을 위해 이동할 수 있는 범위가 넓어질 수 있으므로 (가)에 생활권 확대가 들어갈 수 있습니다. 행정 구역 자체가 넓어진다는 뜻은 아닙니다.',
  ],
  [
    'ㄹ · 틀림',
    '자료는 B 도로의 이동 거리가 A보다 약 160km 짧아지고 교통 연결이 개선되는 상황을 제시합니다. 이 조건에서 예상되는 이동 시간 단축의 방향은 B이며, A가 더 짧다는 진술은 반대입니다.',
  ],
];
export function QuestionNineSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ② · ㄱ, ㄷ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">노선 변화와 이동의 방향 읽기</h3>
        <section className={card}>
          <h4 className="font-bold">A와 B의 비교</h4>
          <p className="mt-2">
            A는 서쪽으로 우회하는 기존 도로, B는 뢰드부와 독일 사이의 해저
            터널을 이용하는 경로입니다. 자료에 따르면 B는 A보다 이동 거리가 약
            160km 단축되어 물류비 절감이 예상됩니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">(가) · 생활권 확대</h4>
          <p className="mt-2">
            지역 주민들이 일상적으로 활동할 수 있는 공간의 범위가 넓어집니다.
            구체적인 통근 시간이나 범위는 자료에 제시되지 않았으므로 임의의
            수치로 확정하지 않습니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">㉠ · 빨대 효과</h4>
          <p className="mt-2">
            접근성이 개선되면서 주변 중소 도시의 수요와 경제 활동이 대도시로
            집중될 수 있습니다. 자료는 이런 영향을 ‘우려’한다고 했으므로 터널
            개통 후 반드시 발생한다고 단정하지 않습니다.
          </p>
        </section>
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
export function QuestionNineAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        교통의 이익과 지역별 영향을 함께 읽기
      </h3>
      <p>
        공식 배점은 1.5점입니다. 지도와 본문의 노선 비교를 읽고
        접근성·생활권·빨대 효과를 적용하는 문항입니다. 아래는 자료에 근거한 SN의
        구조 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 접근성과 생활권은 관련되지만 다른 개념
        </h4>
        <p className="mt-3">
          접근성은 다른 장소에 도달하기 쉬운 정도이고, 생활권은 일상생활이
          이루어지는 공간적 범위입니다. 이동 시간·비용이 줄면 접근성이 향상되고
          통근·쇼핑 등의 활동 범위가 넓어질 수 있습니다. ㄱ은 도달의 용이성,
          ㄷ은 주민의 활동 범위를 묻습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 빨대 효과는 흡인의 방향을 확인</h4>
        <p className="mt-3">
          중소 도시 → 대도시로 향하는 소비와 경제 활동의 집중이 핵심입니다. ㄴ은
          이를 대도시 → 중소 도시의 분산으로 바꾸었습니다. 단순한 이동
          증가만으로 빨대 효과라고 판단하지 말고, 어디로 수요가 집중되는지
          확인합니다.
        </p>
        <p className="mt-3">
          교통 발달은 지역 상권의 성장에도 도움이 될 수 있습니다. 지역의 서비스
          경쟁력, 연결 방식과 정책에 따라 영향이 달라지므로 교통 개선이 곧 중소
          도시 쇠퇴라는 필연적 관계는 아닙니다. 또한 모든 분산 현상을 교외화나
          역도시화와 같은 뜻으로 쓰지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 거리와 시간은 자료의 조건 안에서 연결
        </h4>
        <p className="mt-3">
          B의 단축 거리, 새 도로·철도 연결, 물류비 절감이라는 자료를 함께 읽어
          ㄹ을 판단합니다. 일반적으로 거리가 짧다는 이유 하나만으로 모든 상황의
          이동 시간이 짧다고 보장할 수는 없습니다. 속도·혼잡·대기 시간도 영향을
          줍니다.
        </p>
        <p className="mt-3">
          원문의 ‘2029년 개통 목표’는 출제 당시 자료의 내용입니다. 문제를 풀
          때는 제시된 완공 후 상황을 적용하며, 현재 사업 일정이 확정되었다는
          뜻으로 읽지 않습니다.
        </p>
        <p className="mt-3">
          사업 시행사 Femern은 약 18km의 터널이 덴마크와 독일을 연결하고 이동
          시간을 줄이는 사업이라고 설명합니다. 이는 지리적 배경을 확인하는 보조
          근거입니다.
        </p>
        <a
          className={link}
          href="https://www.femern.com/"
          target="_blank"
          rel="noreferrer"
        >
          Femern · 터널 사업 공식 안내 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회1 · 생활공간과 사회 · [10통사1-05-02]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          교통ㆍ통신 및 과학기술의 발달과 함께 나타난 생활공간과 생활양식의 변화
          양상을 조사하고, 이에 따른 문제점의 해결 방안을 제안한다.
        </blockquote>
        <p className="mt-3">
          교통 기술의 발달을 주민의 생활공간 변화와 지역 경제의 영향으로
          연결합니다. 해결 방안을 직접 고르는 문제는 아니지만 지역별 이익과
          우려를 구별하는 것이 그 출발점입니다.
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
        <h4 className="text-lg font-bold">5. 학생이 준비할 것</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>범례에서 기존 경로와 신설 경로 구별하기</li>
          <li>거리·시간·비용의 변화 방향 표시하기</li>
          <li>접근성 향상과 생활권 확대를 각각 설명하기</li>
          <li>경제 활동이 집중되는 지역을 화살표로 표시하기</li>
          <li>자료의 예상·우려와 확정된 결과 구분하기</li>
        </ol>
        <p className="mt-3">
          배점만으로 풀이 시간을 일률적으로 정하거나 문항 배치 의도를 단정하지
          않습니다. 유사 기출은 개념과 자료 처리 방식을 연습하는 연결이며, 직접
          차용이나 특정 논문의 영향을 입증하는 것은 아닙니다.
        </p>
      </section>
    </div>
  );
}
export function QuestionNineRelated() {
  const items = [
    {
      file: '221179-1.png',
      width: 2888,
      height: 3438,
      title: '2021년 11월 전국연합학력평가 · 통합사회 10번',
      date: '고1 · 교육청',
      answer: '④ · ㄱ, ㄷ, ㄹ',
      text: '서울–양양 고속도로로 접근성이 향상되어 ㄱ은 옳습니다. 서울–천안 교통 개선은 시·공간적 제약을 줄이므로 ㄴ은 틀립니다. 새 도로 인근과 기존 국도변 상권의 매출 변화는 지역 경제에 대한 영향을 보여 ㄷ이 옳고, 통근·통학 범위의 확대는 일상생활권 확대이므로 ㄹ도 옳습니다.',
      connection:
        '접근성·생활권 확대와 상권의 변화를 함께 읽습니다. 기존 국도변 매출 감소를 곧바로 대도시 흡인에 의한 빨대 효과와 동일시하지 않습니다.',
    },
    {
      file: '183263-1.png',
      width: 1973,
      height: 2104,
      title: '2008년 3월 전국연합학력평가 · 한국지리 19번',
      date: '고3 · 교육청',
      answer: '④',
      text: '적절하지 않은 조사 내용을 고르는 문제입니다. 중심지와 배후지의 생활권을 확인하려면 통근·통학·상품 구매 등 두 지역 사이의 이동과 기능적 연결을 조사해야 합니다. 에너지 자원 소비량 비교만으로는 이를 파악하기 어려워 ④가 부적절합니다. 나머지는 인적 교류, 중심지 성장, 상호 작용, 교통 발달에 따른 활동 범위 변화와 연결됩니다.',
      connection:
        '생활권을 행정 경계나 인구 규모가 아니라 실제 활동과 지역 간 연결로 조사하는 방법을 연습합니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        교통 발달과 생활권을 연결하는 유사 기출 2문항
      </h3>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/9/${item.file}`;
        return (
          <section key={item.file} className={card}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 9번과의 연결
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
        시험 출처는 제공된 정보를 따르며, 유사 기출 정답·해설은 원문 이미지에
        근거한 SN 풀이입니다.
      </p>
    </div>
  );
}
