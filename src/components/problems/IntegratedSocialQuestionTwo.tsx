import Image from 'next/image';

const officialUrl =
  'https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=103113&lev=0&m=020402';
const researchUrl = 'https://journal.kgeography.or.kr/articles/xml/dx7k/';
const linkStyle =
  'font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300';
const cardStyle = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';

const environments = [
  {
    label: 'A · 사막화',
    cause:
      '지속적인 가뭄과 과도한 목축·경작 등으로 식생이 줄고 토지가 황폐해집니다.',
    region:
      '사헬 지대, 중앙아시아, 오스트레일리아 등 건조·반건조 지역을 중심으로 분포합니다.',
    clue: '갈라진 지표와 드문 식생을 보고, 지도에서 건조 지역의 분포와 대조합니다.',
  },
  {
    label: 'B · 열대림 파괴',
    cause:
      '농경지·목장의 확대와 무분별한 벌목으로 숲이 사라지고 서식지가 훼손됩니다.',
    region: '아마존 분지, 콩고 분지, 동남아시아 등 열대림 지역에 분포합니다.',
    clue: '벌목이라는 원인, 그루터기 삽화, 적도 부근의 분포를 함께 확인합니다.',
  },
  {
    label: 'C · 해양 쓰레기 집적',
    cause:
      '바다로 유입된 플라스틱·비닐 등의 쓰레기가 해류를 따라 이동하며 특정 해역에 모입니다.',
    region:
      '태평양·대서양·인도양의 아열대 환류 내부 등 쓰레기가 집적되는 해역입니다.',
    clue: '쓰레기를 발생시키는 인간 활동과, 쓰레기를 이동·집적시키는 해류의 역할을 구별합니다.',
  },
];

const statements = [
  [
    'ㄱ',
    'B에 의해 생물종 다양성이 증가한다.',
    false,
    '열대림 파괴는 서식지를 훼손하여 생물종 다양성을 감소시키는 방향으로 작용합니다. 증가와 감소의 인과 방향을 확인하세요.',
  ],
  [
    'ㄴ',
    'C는 해류의 순환으로 쓰레기가 집적되어 나타난다.',
    true,
    '해류를 따라 이동한 부유 쓰레기가 환류 내부의 수렴 구역 등에 모여 쓰레기 지대를 형성합니다.',
  ],
  [
    'ㄷ',
    'A는 B보다 연 강수량이 많은 곳에서 주로 나타난다.',
    false,
    '사막화가 주로 나타나는 건조·반건조 지역은 열대림 파괴가 나타나는 습윤한 열대 지역보다 대체로 연 강수량이 적습니다. 비교 방향은 A < B입니다.',
  ],
  [
    'ㄹ',
    '(가)에는 ‘과도한 목축 및 경작’이 들어갈 수 있다.',
    true,
    '과도한 방목과 경작은 식생을 감소시키고 토양 침식과 토지 황폐화를 촉진하므로 사막화의 원인에 해당합니다.',
  ],
] as const;

export function QuestionTwoSolution() {
  return (
    <details className="group rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기{' '}
        <span className="ml-2 text-xs font-normal group-open:hidden">
          먼저 풀어본 뒤 확인하세요
        </span>
      </summary>
      <div className="mt-6 space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <div>
          <p className="font-bold text-emerald-700 dark:text-emerald-300">
            정답 ④ · ㄴ, ㄹ
          </p>
          <h3 className="mt-1 text-xl font-bold text-gray-950 dark:text-white">
            원인·삽화·지도를 하나의 환경 문제로 연결하기
          </h3>
          <p className="mt-3">
            A는 사막화, B는 열대림 파괴, C는 해양 쓰레기 집적입니다. 먼저 세
            환경 문제를 식별한 뒤, 생태계에 미치는 영향과 발생 원인, 분포 지역의
            기후를 비교합니다.
          </p>
        </div>
        {environments.map(item => (
          <section
            key={item.label}
            className="rounded-xl bg-white p-4 dark:bg-gray-900"
          >
            <h4 className="font-bold text-gray-950 dark:text-white">
              {item.label}
            </h4>
            <p className="mt-2">
              <strong>원인·현상:</strong> {item.cause}
            </p>
            <p className="mt-2">
              <strong>주요 분포:</strong> {item.region}
            </p>
            <p className="mt-2">
              <strong>자료 읽기:</strong> {item.clue}
            </p>
          </section>
        ))}
        <section className="space-y-3">
          <h4 className="text-lg font-bold text-gray-950 dark:text-white">
            보기별 판단 근거
          </h4>
          {statements.map(([label, claim, correct, explanation]) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="font-bold">
                {label}. {claim}{' '}
                <span
                  className={
                    correct
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-gray-500'
                  }
                >
                  · {correct ? '옳음' : '틀림'}
                </span>
              </p>
              <p className="mt-2">{explanation}</p>
            </div>
          ))}
        </section>
        <p className="border-l-2 border-emerald-500 pl-4">
          ㄷ은 정확한 연 강수량 수치를 계산하는 선지가 아닙니다. 건조한 지역과
          습윤한 열대 지역을 비교할 수 있으면 판단할 수 있습니다.
        </p>
        <section className="rounded-xl bg-white p-4 dark:bg-gray-900">
          <h4 className="font-bold">오개념 점검</h4>
          <p className="mt-2">
            사막화는 건조 지역의 토지 황폐화를 뜻합니다. 모든 지역에 적용되는
            하나의 연 강수량 범위로 정의하거나, 모래사막의 확대만으로 이해하지
            마세요.{' '}
            <a
              href="https://www.unccd.int/article-1-use-terms"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              UNCCD 정의 ↗
            </a>
          </p>
          <p className="mt-3">
            ‘쓰레기 섬’은 쓰레기가 집적된 해역을 가리키는 표현입니다. 사람이
            올라설 수 있는 단단한 섬이 아니며, 작은 플라스틱 조각도 넓게
            분산되어 있습니다.{' '}
            <a
              href="https://marinedebris.noaa.gov/discover-marine-debris/garbage-patches"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              NOAA 설명 ↗
            </a>
          </p>
        </section>
      </div>
    </details>
  );
}

export function QuestionTwoAnalysis() {
  return (
    <div className="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <div>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          공식 출제 의도와 SN의 문항 분석
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">
          환경 문제를 공간과 인과 관계로 읽기
        </h3>
        <p className="mt-3">
          2번은 탐구 보고서에 담긴 원인·현상·분포 정보를 종합하는 1.5점
          문항입니다. 환경 문제의 이름을 아는 것에서 나아가, 왜 그곳에서
          나타나는지 설명할 수 있어야 합니다.
        </p>
      </div>
      <section className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/40">
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          1. 평가원이 밝힌 평가 목표
        </h4>
        <p className="mt-3">
          <strong>내용 영역:</strong> 자연환경과 인간
          <br />
          <strong>행동 영역:</strong> 결론 도출 및 평가
        </p>
        <p className="mt-3">
          평가원은 환경 문제의 해결 대안을 탐색하는 바탕으로, 주요 원인과 현상,
          분포 지역을 이해하는지 평가한다고 설명합니다. 자료와 지도를 연결하여
          사막화·열대림 파괴·쓰레기 섬의 원인을 탐구하는 것이 핵심입니다.
        </p>
        <p className="mt-3">
          공식 학습 안내는 환경 문제의 분포·원인·확산 과정·대책을 연관 지어
          탐구하고, 친환경 농목업·열대림 보전·쓰레기 줄이기 등의 실천으로 확장할
          것을 제안합니다.
        </p>
        <a
          href={officialUrl}
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mt-3 inline-block`}
        >
          평가원 예시문항 안내 · 인쇄면 65~66쪽 ↗
        </a>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          2. 보고서 구조 역분해
        </h4>
        <ol className="mt-3 list-decimal space-y-3 pl-5">
          <li>
            <strong>표와 삽화에서 현상 식별:</strong> 식생 고사, 벌목, 부유
            쓰레기를 각각 A·B·C의 환경 문제로 연결합니다.
          </li>
          <li>
            <strong>지도에서 식별 결과 검증:</strong> 범례를 먼저 읽고 건조
            지역, 습윤한 열대 지역, 해양 집적 해역의 분포를 대조합니다.
          </li>
          <li>
            <strong>보기에서 관계 판단:</strong> ㄱ은 생물종 다양성의 변화, ㄴ은
            집적 기제, ㄷ은 강수량의 상대적 차이, ㄹ은 인간 활동에 의한 원인을
            묻습니다.
          </li>
        </ol>
        <p className="mt-4">
          SN은 이를 ‘현상 식별 → 공간적 확인 → 인과·비교 판단’의 구조로
          분석합니다. 보고서 형식은 탐구 맥락을 제공하지만, 학생이 보고서를
          작성하는 전 과정을 관찰하는 수행평가와는 구별됩니다.
        </p>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          3. 왜 통합사회 문항인가?
        </h4>
        <p className="mt-3">
          인간의 생산·소비 활동이 식생·토양·해양에 미치는 영향을 공간적 분포와
          함께 설명합니다. 자연환경의 조건과 인간 활동을 연결하는 ‘인간과 환경의
          상호작용’이 중심입니다.
        </p>
        <p className="mt-3">
          해류의 집적 작용을 이해하면 되며, 이 문항을 풀기 위해 전향력이나 대기
          대순환의 상세 원리까지 설명할 필요는 없습니다. 단순히 해류가
          등장한다는 이유로 지구과학 심화 학습을 필수 조건으로 볼 수는 없습니다.
        </p>
        <p className="mt-4 font-bold">연계 성취기준 · [10통사1-03-03]</p>
        <blockquote className="mt-2 border-l-2 border-emerald-500 pl-4">
          환경 문제 해결을 위한 정부, 시민사회, 기업 등의 다양한 노력을
          조사하고, 생태시민으로서 실천 방안을 모색한다.
        </blockquote>
        <p className="mt-3">
          문항은 이 성취기준 가운데 해결 방안을 탐색하기 위한 원인·현상 이해를
          평가합니다. 정부·기업·시민사회의 구체적 대책 비교는 후속 학습으로
          연결할 수 있습니다.
        </p>
        <a
          href={officialUrl}
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mt-2 inline-block`}
        >
          공식 안내서의 교육과정 연결 확인 ↗
        </a>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          4. 학술 연구와의 연결
        </h4>
        <p className="mt-3">
          김기남(2024), 「통합사회 과목의 대학수학능력시험 과목 지정에 따른
          지리교과 영역 중심의 사회과 통합 평가 문항 연구」, 『대한지리학회지』
          59(2), 249~267.
        </p>
        <p className="mt-3">
          이 연구는 통합사회의 실생활 중심 성격과 수능 선택형 평가의 요구를 함께
          충족할 방법을 검토하고, 지리 영역을 중심으로 통합 문항과 소재를
          제시합니다. 여러 자료를 하나의 사회·환경 문제로 연결하는 평가를
          이해하는 데 참고할 수 있습니다.
        </p>
        <p className="mt-3">
          이 논문이 공식 2번 문항의 직접 출제 근거라는 사실이나, 특정 환경
          보고서 형식의 우월성을 입증했다는 주장은 확인되지 않았습니다.
        </p>
        <a
          href={researchUrl}
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mt-2 inline-block`}
        >
          대한지리학회 학술지 원문 ↗
        </a>
      </section>
      <section className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/40">
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          5. 학생이 알아야 할 것과 대비 방향
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            사막화·열대림 파괴·해양 쓰레기 집적을 원인, 현상, 주요 분포,
            영향으로 나누어 설명하기
          </li>
          <li>
            지도 범례를 확인하고 사헬·아마존·해양 환류 지역을 환경 문제와
            연결하기
          </li>
          <li>건조 지역과 습윤한 열대 지역의 강수량을 상대적으로 비교하기</li>
          <li>
            환경 문제의 원인과 대책을 연결하기: 과도한 방목 조절, 열대림 보전,
            플라스틱 발생·유출 줄이기
          </li>
        </ul>
        <p className="mt-4">
          <strong>SN 학습 제안:</strong> 같은 환경 문제를 지도·기사·보고서로
          바꾸어 읽고, 각 자료에서 판단 근거를 찾는 연습을 해보세요. 기존 기출의
          공통 개념을 확인한 뒤 해결 방안까지 설명하는 방식이 좋습니다.
        </p>
        <p className="mt-3">
          1.5점이라는 배점이나 2번이라는 배치만으로 실제 수능의 난도·변별력·출제
          형식을 확정할 수는 없습니다.
        </p>
      </section>
    </div>
  );
}

const related = [
  {
    file: '193864-1.png',
    width: 2842,
    height: 3114,
    source: '고3 2012년 4월 전국연합학력평가 · 세계지리 20번',
    title: '해류의 순환과 태평양 쓰레기 지대',
    connection:
      '공식 2번의 C와 ㄴ에 연결됩니다. 해류가 고리 모양으로 순환하는 해역 내부에 쓰레기가 집적된다는 원리를 지도에 적용합니다.',
    answer: '④ · B, D',
    explanation:
      'B는 북태평양, D는 남태평양의 아열대 환류 내부에 해당합니다. A는 고위도의 북태평양, C는 적도 부근으로, 제시문이 설명하는 아열대 환류 내부의 쓰레기 집적 해역은 B와 D입니다.',
  },
  {
    file: '227622-1.png',
    width: 2811,
    height: 3410,
    source: '고3 2024년 5월 전국연합학력평가 · 세계지리 3번',
    title: '열대림 파괴와 사막화 비교',
    connection:
      '공식 2번의 A·B와 ㄱ·ㄹ에 연결됩니다. 아마존의 열대림 파괴와 아랄해 일대의 사막화를 구별하고, 인간 활동·식생 감소·토양 침식의 관계를 확인합니다.',
    answer: '② · 옳지 않은 설명',
    explanation:
      '(가)는 열대림 파괴, (나)는 사막화입니다. 몬트리올 의정서는 오존층을 파괴하는 물질을 규제하기 위한 협약이므로 ②가 틀립니다. ①은 식생 제거에 따른 토양 침식, ③은 사헬의 사막화, ④는 경작지 확대와 과도한 관개, ⑤는 두 문제의 식생 감소를 설명하므로 적절합니다.',
  },
  {
    file: '228963-1.png',
    width: 2835,
    height: 2891,
    source: '고1 2024년 10월 전국연합학력평가 · 통합사회 19번',
    title: '사헬의 사막화와 하프 문',
    connection:
      '공식 2번의 A와 ㄹ을 확인하고 해결 노력으로 확장하는 문항입니다. 과도한 경작·방목에 따른 토지 황폐화와 빗물을 모아 식물의 생장을 돕는 활동을 연결합니다.',
    answer: '⑤',
    explanation:
      '사헬 지대의 토양 황폐화와 식량 생산 감소는 사막화에 해당합니다. ⑤가 가뭄과 과도한 경작·방목을 원인으로 제시합니다. ①은 열대림 파괴, ②는 스모그, ③은 산성비, ④는 오존층 파괴의 설명입니다. 하프 문은 빗물을 모아 식생 회복을 돕습니다.',
  },
];

export function QuestionTwoRelated() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
        환경 문제로 연결되는 유사 기출 3문항
      </h3>
      <p>
        제공된 기출 이미지에서 공식 2번과 연결되는 개념을 확인했습니다. 해류의
        집적 작용 → 환경 문제 비교 → 사막화의 원인과 해결 순서로 풀어보세요.
      </p>
      {related.map((item, index) => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/2/${item.file}`;
        return (
          <section
            key={item.file}
            aria-labelledby={`q2-related-${index}`}
            className="rounded-2xl border border-gray-200 p-4 sm:p-5 dark:border-gray-700"
          >
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
              유사 기출 0{index + 1}
            </p>
            <h4
              id={`q2-related-${index}`}
              className="mt-1 text-lg font-bold text-gray-950 dark:text-white"
            >
              {item.title}
            </h4>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {item.source} · 교육청
            </p>
            <figure className="mt-4">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title} 원문 크게 보기 (새 탭)`}
                className="block cursor-zoom-in rounded-xl border border-gray-200 bg-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 sm:p-3"
              >
                <Image
                  src={src}
                  width={item.width}
                  height={item.height}
                  alt={`${item.source}. ${item.title}.`}
                  sizes="(max-width: 768px) 100vw, 650px"
                  unoptimized
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="mt-2 text-right text-xs">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  원문 크게 보기 ↗
                </a>
              </figcaption>
            </figure>
            <p className="mt-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              <strong>예시문항 2번과의 연결:</strong> {item.connection}
            </p>
            <details className="mt-4 rounded-xl border border-emerald-200 p-4 dark:border-emerald-800">
              <summary className="cursor-pointer font-semibold text-emerald-900 dark:text-emerald-200">
                정답·풀이 보기
              </summary>
              <p className="mt-3 font-bold text-gray-950 dark:text-white">
                SN 풀이 · {item.answer}
              </p>
              <p className="mt-2">{item.explanation}</p>
            </details>
          </section>
        );
      })}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        시험 연도·월·과목은 제공된 출처 정보를 따릅니다. 정답·해설은 이미지에
        근거한 SN 풀이입니다. 공통 개념을 중심으로 연결했으며, 평가원이 이
        기출들을 직접 활용해 출제했다는 뜻은 아닙니다.
      </p>
    </div>
  );
}
