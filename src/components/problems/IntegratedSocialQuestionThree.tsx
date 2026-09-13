import Image from 'next/image';

const officialUrl =
  'https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=103113&lev=0&m=020402';
const religionUrl =
  'https://www.pewresearch.org/religion/2025/06/09/religion-in-sub-saharan-africa/';
const historyUrl =
  'https://humanrights.gov.au/resource-hub/by-resource-type/bringing-them-home-reports/bringing-them-home-chapter-13';
const linkStyle =
  'font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300';
const cardStyle = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const regions = [
  [
    'A',
    '유럽 문화권',
    '유럽을 중심으로 하며, 영국의 위치를 오스트레일리아의 식민 역사와 연결합니다.',
  ],
  [
    'B',
    '아프리카 문화권',
    '이 지도에서는 사하라 이남을 중심으로 표시합니다. 북부 아프리카를 포함한 대륙 전체와 구별해야 합니다.',
  ],
  [
    'C',
    '앵글로아메리카 문화권',
    '미국·캐나다를 중심으로 영어와 유럽계 이주 문화의 영향을 읽습니다. 내부의 언어·종교적 다양성도 존재합니다.',
  ],
  [
    'D',
    '라틴아메리카 문화권',
    '멕시코·중앙아메리카·남아메리카 등에서 에스파냐·포르투갈의 언어와 가톨릭 문화의 영향을 확인합니다.',
  ],
  [
    '선택된 지역',
    '오세아니아 문화권',
    '오스트레일리아·뉴질랜드·남태평양의 여러 섬을 포함하며, 하단 설명은 그중 오스트레일리아의 정책 사례입니다.',
  ],
];
const choices = [
  [
    '①',
    '㉠은 소수 문화를 주류 문화로 동화시키려는 정책이다.',
    '원주민 자녀를 부모와 분리하고 주류 집단의 언어·생활양식을 강요하므로 강제 동화 정책에 해당합니다.',
  ],
  [
    '②',
    '㉡은 다문화주의 정책이다.',
    '주류 문화와 소수 문화가 대등하게 조화를 이루도록 한다는 설명은 문화적 다양성과 공존을 중시하는 다문화주의에 해당합니다.',
  ],
  [
    '③',
    '오스트레일리아는 A에 속한 국가의 식민 지배를 받았다.',
    'A는 유럽 문화권이며, 오스트레일리아는 영국의 식민 지배를 받았습니다. 지도상의 문화권과 역사적 관계를 연결합니다.',
  ],
  [
    '④',
    'B는 이슬람교 신자 수가 크리스트교 신자 수보다 많다.',
    'B가 가리키는 사하라 이남 아프리카는 전체적으로 크리스트교 신자가 이슬람교 신자보다 많습니다. 북부 아프리카의 종교적 특징을 B에 그대로 적용하면 안 됩니다.',
  ],
  [
    '⑤',
    'C와 D를 구분하는 경계는 리오그란데강이다.',
    '교과의 대표적 문화권 구분에서는 리오그란데강을 앵글로아메리카와 라틴아메리카의 경계로 제시합니다. 이 강이 미국·멕시코 국경 전체를 이룬다는 뜻은 아닙니다.',
  ],
];

export function QuestionThreeSolution() {
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
            정답 ④ · 옳지 않은 설명
          </p>
          <h3 className="mt-2 text-xl font-bold text-gray-950 dark:text-white">
            문화권의 범위와 문화 정책을 구별하기
          </h3>
          <p className="mt-3">
            지도에서 A~D의 범위를 확인하고, 하단 자료에서 ㉠·㉡의 정책을
            판별합니다. 같은 아프리카 대륙이라도 문화권의 구분에 따라 종교적
            특징이 다를 수 있다는 점이 정답의 핵심입니다.
          </p>
        </div>
        <section className="space-y-3">
          <h4 className="text-lg font-bold">지도 읽기</h4>
          {regions.map(([label, name, text]) => (
            <div
              key={label}
              className="rounded-xl bg-white p-4 dark:bg-gray-900"
            >
              <p className="font-bold">
                {label} · {name}
              </p>
              <p className="mt-2">{text}</p>
            </div>
          ))}
        </section>
        <section className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <h4 className="font-bold">㉠ · 강제 동화 정책</h4>
            <p className="mt-2">
              소수 집단의 고유한 언어·생활양식을 억누르고 주류 문화를 따르게
              합니다. 자료는 원주민 자녀의 강제 분리라는 인권 침해를 구체적으로
              제시합니다.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <h4 className="font-bold">㉡ · 다문화주의 정책</h4>
            <p className="mt-2">
              문화적 고유성과 다양성을 존중하며 공존을 모색합니다. 서로 다른
              문화의 존재를 인정하면서 조화를 추구한다는 점에 주목합니다.
            </p>
          </div>
        </section>
        <section className="space-y-3">
          <h4 className="text-lg font-bold">선지별 판단</h4>
          {choices.map(([label, claim, text], index) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="font-bold">
                {label} {claim}{' '}
                <span
                  className={
                    index === 3
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-gray-500'
                  }
                >
                  · {index === 3 ? '틀림 / 정답' : '옳음'}
                </span>
              </p>
              <p className="mt-2">{text}</p>
            </div>
          ))}
        </section>
        <section className="rounded-xl bg-white p-4 dark:bg-gray-900">
          <h4 className="font-bold">④의 근거와 학습 범위</h4>
          <p className="mt-2">
            Pew Research Center가 2025년에 발표한 2020년 추정치에서 사하라 이남
            아프리카의 크리스트교 비율은 약 62%, 이슬람교 비율은 약 33%입니다.
            이는 지역 전체의 집계이며 모든 국가에 같은 비율이 적용되는 것은
            아닙니다. 문항 판단에는 정확한 백분율 암기보다 두 종교의 상대적
            규모와 지역 범위의 구별이 중요합니다.
          </p>
          <a
            href={religionUrl}
            target="_blank"
            rel="noreferrer"
            className={`${linkStyle} mt-2 inline-block`}
          >
            종교 분포 근거 · Pew Research Center ↗
          </a>
        </section>
      </div>
    </details>
  );
}

export function QuestionThreeAnalysis() {
  return (
    <div className="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <div>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          문제의 구조 읽기 · SN 분석
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">
          지도와 정책 사례를 함께 읽는 문화권 문항
        </h3>
        <p className="mt-3">
          3번은 2.5점 문항입니다. 문화권 지도와 오스트레일리아의 문화 정책을
          결합하여, 공간적 범위·역사적 관계·다양성 존중의 개념을 확인합니다.
          아래 구조와 학습 방향은 공개 문항에 대한 SN의 해석입니다.
        </p>
      </div>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          1. 선지마다 필요한 근거가 다릅니다
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            ①·②: 제시문의 ‘강요’와 ‘대등한 조화’를 동화 정책·다문화주의에
            연결합니다.
          </li>
          <li>③: A의 위치와 오스트레일리아의 영국 식민 역사를 연결합니다.</li>
          <li>
            ④: B의 범위를 식별하고 사하라 이남 아프리카의 종교 분포를
            판단합니다.
          </li>
          <li>⑤: C·D를 식별하고 문화권을 구분하는 대표적 경계를 적용합니다.</li>
        </ul>
        <p className="mt-3">
          옳지 않은 설명을 하나 고르는 문제이므로 ④의 오류를 확실히 알면 정답에
          도달할 수 있습니다. ‘모든 선지를 알아야만 풀 수 있다’거나 ‘소거법이
          차단됐다’고 볼 수는 없습니다.
        </p>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          2. 핵심 오개념: 대륙과 문화권을 동일시하기
        </h4>
        <p className="mt-3">
          지도는 아프리카 대륙 전체를 하나의 문화권으로 표시하지 않습니다. 북부
          아프리카와 B의 범위를 구별해야 합니다. 문화권은
          종교·언어·역사·생활양식 등을 종합한 구분이며, 내부가 균질하거나 경계가
          영구적으로 고정된 집단을 뜻하지 않습니다.
        </p>
        <p className="mt-3">
          C·D도 자연적 대륙 구분과 구별해야 합니다. 멕시코는 지리적으로
          북아메리카에 속하면서 문화적으로 라틴아메리카로 분류됩니다.
        </p>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          3. 강제 동화와 다문화 공존의 차이
        </h4>
        <p className="mt-3">
          백호주의는 비유럽계 이민을 제한한 정책이며, 원주민 자녀 강제 분리는
          동화 정책과 관련된 인권 침해입니다. 서로 연결되는 역사적 맥락이 있지만
          두 정책을 같은 뜻으로 쓰지 않습니다.
        </p>
        <p className="mt-3">
          ‘용광로’나 ‘샐러드 볼’ 같은 비유보다, 소수 집단의 문화적 고유성과
          권리가 어떻게 취급되는지 설명하는 것이 중요합니다. 강제 아동 분리를
          모든 문화적 혼합이나 용광로 모델과 동일시해서는 안 됩니다.
        </p>
        <a
          href={historyUrl}
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mt-3 inline-block`}
        >
          호주 인권위원회 · 원주민 자녀 강제 분리 조사 ↗
        </a>
      </section>
      <section className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/40">
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          4. 공식 교육과정과의 연결
        </h4>
        <p className="mt-3">
          평가원 안내서의 문항별 교육과정 근거표는 3번에 다음 두 성취기준을
          제시합니다.
        </p>
        <p className="mt-3 font-bold">[10통사1-04-01]</p>
        <blockquote className="mt-1 border-l-2 border-emerald-500 pl-4">
          자연환경과 인문환경의 영향을 받아 형성된 다양한 문화권의 특징과 삶의
          방식을 탐구한다.
        </blockquote>
        <p className="mt-3 font-bold">[10통사1-04-04]</p>
        <blockquote className="mt-1 border-l-2 border-emerald-500 pl-4">
          다문화 사회의 현황을 조사하고, 문화적 다양성을 존중하는 태도를
          바탕으로 갈등 해결 방안을 모색한다.
        </blockquote>
        <a
          href={officialUrl}
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mt-3 inline-block`}
        >
          공식 예시문항 안내 · 교육과정 근거표 ↗
        </a>
        <p className="mt-3">
          문화권의 특징을 지역별 암기로 끝내지 않고, 소수 문화의 권리와 공존의
          문제에 연결한다는 점에서 통합사회 학습으로 확장할 수 있습니다. 이 문항
          자체가 갈등 해결 방안을 직접 설계하도록 요구하는 것은 아닙니다.
        </p>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          5. 자료 형식·배점과 난도는 구별합니다
        </h4>
        <p className="mt-3">
          온라인 수업 화면을 본뜬 자료이지만 실제 문제는 정적인 지도와 글을 읽는
          선택형 문항입니다. 지도에서 구분한 지역과 하단 설명의 대상을 연결하는
          능력이 중요합니다.
        </p>
        <p className="mt-3">
          2.5점은 제시된 배점 중 높은 배점입니다. 그러나 이것만으로 최고 난도나
          높은 변별력을 입증할 수는 없습니다. 정확한 종교 백분율이나 제국주의의
          세부 연표를 외워야만 풀리는 문제도 아닙니다.
        </p>
      </section>
      <section className={cardStyle}>
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          6. 연구 근거의 확인 범위
        </h4>
        <p className="mt-3">
          제공된 코멘트의 조철기 「2022 개정 교육과정에 따른 고등학교
          ‘통합사회’의 문화 지리 영역 내용 구성 방안 연구」는 제시된 제목으로
          서지 정보를 확인하지 못했습니다. 따라서 해당 연구가 이 문항의 직접적인
          출제 근거라는 설명은 사용하지 않습니다.
        </p>
        <p className="mt-3">
          문항 해석의 근거는 공식 문제·성취기준, 지역 종교 통계, 호주
          인권위원회의 역사 자료를 중심으로 제시했습니다.
        </p>
      </section>
      <section className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/40">
        <h4 className="text-lg font-bold text-gray-950 dark:text-white">
          학생이 준비할 것
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>문화권의 위치·언어·종교·역사적 형성 배경을 연결해서 설명하기</li>
          <li>
            북부 아프리카와 사하라 이남 아프리카, 자연적 대륙 구분과 문화권
            구분을 구별하기
          </li>
          <li>정책 사례에서 강요·흡수와 다양성 존중·공존의 차이를 찾기</li>
          <li>지역 전체의 대표적 특징을 모든 국가·주민에게 일반화하지 않기</li>
          <li>
            지도에서 확인한 내용과 제시문에서 확인한 내용을 각각 근거로 제시하기
          </li>
        </ul>
      </section>
    </div>
  );
}

export function QuestionThreeRelated() {
  const related = [
    {
      file: '216346-1.png',
      width: 2788,
      height: 3232,
      source: '고2 2020년 4월 전국연합학력평가 · 세계지리 2번',
      title: '언어·종교·자연환경으로 라틴아메리카 찾기',
      connection:
        '공식 3번의 D에 해당하는 라틴아메리카 문화권을 여러 단서로 식별하는 연습입니다. 기출에서는 같은 문화권이 E로 표시되므로 문자보다 위치를 먼저 확인해야 합니다.',
      answer: '⑤ · E',
      explanation:
        '에스파냐어·포르투갈어, 가톨릭교, 아마존강·안데스산지라는 단서를 종합하면 라틴아메리카 문화권입니다. 지도에서 E에 해당합니다. A는 유럽, B는 아프리카, C는 오세아니아, D는 앵글로아메리카 문화권입니다.',
    },
    {
      file: '181558-1.png',
      width: 1990,
      height: 1581,
      source: '고2 2007년 6월 전국연합학력평가 · 세계지리 14번',
      title: '문화권의 특징과 아프리카의 국경·종족 분포',
      connection:
        '공식 3번의 A·B·D와 오세아니아를 지도에서 구별하는 연습입니다. 아프리카의 종교를 직접 묻지는 않으며, 국경과 종족 분포의 불일치라는 별도의 특징을 확인합니다.',
      answer: '③',
      explanation:
        '(가)는 라틴아메리카, (나)는 유럽, (다)는 아프리카, (라)는 동남아시아, (마)는 오세아니아 문화권입니다. 식민 지배 과정에서 형성된 국경과 종족의 분포 범위가 일치하지 않아 갈등의 요인이 되는 아프리카를 설명한 ③이 적절합니다. ①의 산업 혁명 발상지는 유럽, ②의 동서 해상 교역에 따른 문화적 다양성은 동남아시아, ④의 가톨릭교와 높은 혼혈 인구 비율은 라틴아메리카에 연결됩니다. ⑤는 오세아니아의 대표적 특징으로 적절하지 않습니다. 다만 아프리카의 모든 국가에 분쟁이 지속된다는 뜻으로 일반화하지 않아야 합니다.',
    },
    {
      file: '202031-1.png',
      width: 2867,
      height: 2323,
      source: '고2 2014년 11월 전국연합학력평가 · 세계지리 12번',
      title: '앵글로아메리카의 문화적 특징 식별',
      connection:
        '공식 3번의 C인 앵글로아메리카와 D인 라틴아메리카를 비교하는 기초 문항입니다. 원문은 리오그란데강을 직접 묻지 않고, 종교·언어·주민 구성·농목업을 종합해 문화권을 찾도록 합니다.',
      answer: '④ · D',
      explanation:
        '영어 사용, 개신교의 영향, 다양한 주민 구성, 대규모 기업적 농목업이라는 단서를 종합하면 앵글로아메리카 문화권이며 지도에서는 D입니다. A는 유럽, B는 동아시아, C는 아프리카, E는 라틴아메리카입니다. 원문의 설명은 문화권의 대표적 특징이므로 모든 지역의 공용어·종교 구성이 동일하다는 뜻으로 읽지 않습니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
        문화권을 비교하는 유사 기출 3문항
      </h3>
      <p>
        라틴아메리카 식별 → 문화권별 특징 비교 → 앵글로아메리카 식별 순서로
        풀어보세요. 각 기출의 문자는 공식 3번의 A~D와 다르므로 지도상의 위치와
        제시된 특징을 함께 확인합니다.
      </p>
      {related.map((item, index) => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/3/${item.file}`;
        return (
          <section
            key={item.file}
            aria-labelledby={`q3-related-${index}`}
            className="rounded-2xl border border-gray-200 p-4 sm:p-5 dark:border-gray-700"
          >
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
              유사 기출 0{index + 1}
            </p>
            <h4
              id={`q3-related-${index}`}
              className="mt-1 text-lg font-bold text-gray-950 dark:text-white"
            >
              {item.title}
            </h4>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {item.source} · 교육청
            </p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 3번과의 연결
              </p>
              <p className="mt-2">{item.connection}</p>
            </div>
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
        시험 연도·월·과목은 제공된 출처 정보를 따릅니다. 정답·해설은 원문
        이미지에 근거한 SN 풀이입니다. 이 기출들은 문화권 식별과 비교에
        연결되며, 강제 동화·다문화주의 정책을 직접 묻는 문항은 아닙니다.
      </p>
    </div>
  );
}
