import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const speakers = [
  [
    '갑 · 자문화 중심주의',
    '자국을 본받아야 한다고 주장하며 상대 문화를 후진적이라고 평가합니다. 문제는 혼인의 자유를 옹호한 것 자체가 아니라 자국 문화를 우월한 기준으로 삼는 태도입니다. 갑은 헌법상 기본권 보장도 긍정적으로 언급합니다.',
  ],
  [
    '을 · 극단적 문화 상대주의',
    '문화가 형성된 맥락을 이해해야 한다는 주장에서 더 나아가, 개인의 혼인 결정권을 허용하지 않는 관습도 당연히 존중받아야 한다고 봅니다. 맥락의 이해를 인권 침해의 정당화로 확장한 점이 문제입니다.',
  ],
  [
    '병 · 보편 윤리에 근거한 문화 성찰',
    '인권을 누구나 태어나면서부터 갖는 권리이자 사회·국가를 초월하여 지켜야 할 기준으로 제시합니다. 자문화와 타문화 모두를 보편적 인권에 비추어 성찰하는 입장입니다.',
  ],
];
const choices = [
  [
    '① · 틀림',
    '갑은 자문화를 우월한 기준으로 상대 문화를 평가합니다. 모든 문화의 고유한 가치를 존중한다는 설명과 맞지 않습니다.',
  ],
  [
    '② · 틀림',
    '을은 해당 문화가 형성된 사회의 맥락을 강조합니다. 자기 문화를 기준으로 타문화를 평가하는 태도는 갑에게 해당합니다.',
  ],
  [
    '③ · 옳음',
    '병은 인권이 개별 사회나 국가를 초월하여 반드시 지켜져야 한다고 말합니다. 따라서 보편적으로 지켜야 할 가치나 원리의 존재를 인정합니다.',
  ],
  [
    '④ · 틀림',
    '갑도 혼인의 자유 같은 개인의 권리를 헌법상 기본권으로 보장하는 것을 긍정적으로 제시합니다. 따라서 병만 그러하다는 ‘갑과 달리’의 대조가 성립하지 않습니다. 병이 인권의 보편성을 강조한다는 사실은 헌법을 통한 보장을 부정한다는 뜻이 아닙니다.',
  ],
  [
    '⑤ · 틀림',
    '을은 전통과 사회 질서를 이유로 혼인 결정권을 허용하지 않는 관습을 옹호합니다. 따라서 세 사람이 모두 인권의 불가침성을 강조한다고 볼 수 없습니다. 이 사례의 판단을 을이 모든 인권을 전면 부정한다는 주장으로 확대하지 않습니다.',
  ],
];
export function QuestionEightSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ③ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          문화 평가의 기준과 인권에 대한 발언 구별하기
        </h3>
        <p>
          논의의 대상은 여성의 혼인 결정권을 제한하는 A국의 관습입니다. 각
          사람이 문화를 무엇에 근거해 평가하는지와 권리 보장을 어떻게
          설명하는지를 함께 읽습니다.
        </p>
        {speakers.map(([name, text]) => (
          <section key={name} className={card}>
            <h4 className="font-bold">{name}</h4>
            <p className="mt-2">{text}</p>
          </section>
        ))}
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
export function QuestionEightAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        문화의 맥락을 이해하며 인권을 기준으로 성찰하기
      </h3>
      <p>
        공식 배점은 1.5점입니다. 문화 이해 태도와 인권의 성격을 연결하고,
        비교·공통 진술의 조건을 확인하는 문항입니다. 아래는 원문에 근거한 SN의
        구조 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 이해와 정당화는 구별된다</h4>
        <p className="mt-3">
          관습이 생긴 역사적·사회적 맥락을 이해하는 것은 그 관습을 무조건 옳다고
          인정하는 것과 다릅니다. 을의 첫 문장은 맥락적 이해의 필요성을
          말하지만, 이어지는 결론은 개인의 권리를 제한하는 관습까지 당연히
          존중해야 한다는 주장입니다.
        </p>
        <p className="mt-3">
          문화 상대주의를 모두 극단적 상대주의로 묶지 않습니다. 반대로 인권
          침해를 비판했다는 이유만으로 자문화 중심주의라고 판단하지도 않습니다.
          갑과 병을 가르는 것은 자국 문화의 우월성인지, 사회를 초월한
          인권인지라는 평가 기준입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. ④의 ‘갑과 달리’를 두 부분으로 읽기
        </h4>
        <p className="mt-3">
          ‘갑과 달리 병은 P’는 병이 P를 인정하는지뿐 아니라 갑에게 P가 해당하지
          않는지도 확인해야 합니다. 갑은 헌법상 기본권 보장을 언급하므로 이
          대조는 성립하지 않습니다.
        </p>
        <p className="mt-3">
          인권이 태어날 때부터 주어진다는 설명과 헌법으로 권리를 보장한다는
          설명은 양립할 수 있습니다. 권리의 근거와 제도적 보장 수단을 서로
          배타적인 입장으로 만들지 않습니다. 병이 헌법을 언급하지 않았다는
          사실만으로 그 역할을 부정한다고 추론해서도 안 됩니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 보편적 기준은 자문화에도 적용된다
        </h4>
        <p className="mt-3">
          병의 기준은 자기 사회를 예외로 두지 않습니다. 다른 사회의 관습뿐
          아니라 자기 사회의 제도도 인권에 비추어 성찰해야 합니다. 세계인권선언
          제16조 역시 혼인 당사자의 자유롭고 완전한 동의를 혼인의 조건으로
          제시합니다.
        </p>
        <a
          className={link}
          href="https://www.un.org/en/about-us/universal-declaration-of-human-rights/"
          target="_blank"
          rel="noreferrer"
        >
          유엔 · 세계인권선언 제16조 ↗
        </a>
        <p className="mt-3">
          이 근거는 배우자 선택의 자유를 이해하기 위한 자료입니다. 원문에 없는
          명예살인이나 조혼이 A국에서 실제로 일어났다고 덧붙이지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 통합사회1·2의 연결</h4>
        <p className="mt-3 font-bold">[10통사1-04-03]</p>
        <blockquote className="mt-2 border-l-2 border-emerald-500 pl-4">
          문화적 차이에 대한 상대주의적 태도의 필요성을 이해하고, 보편 윤리의
          차원에서 자문화와 타문화를 평가한다.
        </blockquote>
        <p className="mt-3 font-bold">[10통사2-01-02]</p>
        <blockquote className="mt-2 border-l-2 border-emerald-500 pl-4">
          인간 존엄성 실현과 인권 보장을 위한 헌법의 역할을 파악하고, 시민의
          권익을 보호하기 위한 다양한 시민 참여의 방안을 탐구하고 이를 실천한다.
        </blockquote>
        <p className="mt-3">
          공식 근거표는 두 성취기준을 연결합니다. 문화의 평가 기준과 헌법의 인권
          보장 역할을 함께 살피되, 시민 참여의 실천까지 직접 묻는 문항은
          아닙니다.
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
          <li>발언마다 문화 평가의 기준을 표시하기</li>
          <li>맥락 이해와 무조건적 옹호를 구별하기</li>
          <li>‘달리’는 두 사람, ‘모두’는 모든 사람을 각각 검증하기</li>
          <li>인권의 보편적 근거와 헌법의 보장 역할을 구별하기</li>
          <li>
            한 관습에 대한 판단을 해당 사회 전체에 대한 비하로 확대하지 않기
          </li>
        </ol>
        <p className="mt-3">
          유사 기출은 같은 개념과 판단 구조를 연습하기 위한 연결입니다. 특정
          논문을 그대로 구현했다는 주장이나 최고난도라는 평가는 확인 가능한 근거
          없이 확정하지 않습니다.
        </p>
      </section>
    </div>
  );
}
export function QuestionEightRelated() {
  const items = [
    {
      file: '216025-1.png',
      width: 2805,
      height: 2892,
      title: '2020년 4월 전국연합학력평가 · 윤리와 사상 6번',
      date: '고2 · 교육청',
      answer: '④',
      text: '교사는 문화의 고유한 가치를 이해하면서도 인간 존엄성을 무시하는 문화를 용인하지 말라고 합니다. 생명권을 침해하는 문화를 비판적으로 고찰하자는 ④가 적절합니다. 보편 윤리를 부정하는 ①, 자문화 기준으로 우열을 가리는 ②, 무조건 존중하는 ③, 자문화를 열등하게 평가하는 ⑤는 제시된 기준과 맞지 않습니다.',
      connection: '공식 8번 병의 보편 윤리에 근거한 성찰을 직접 연습합니다.',
    },
    {
      file: '185610-1.png',
      width: 2835,
      height: 1868,
      title: '2008년 11월 전국연합학력평가 · 사회·문화 16번',
      date: '고2 · 교육청',
      answer: '⑤',
      text: '제시문은 종족 보존이라는 맥락을 이유로 생명권 침해를 나쁘다고 볼 수 없다고 주장합니다. 이에 대한 비판은 문화를 인류의 보편적 가치에 기반해 이해해야 한다는 ⑤입니다. 맥락을 설명했다고 해서 그 행위가 정당화되는 것은 아닙니다.',
      connection:
        '공식 8번 을의 주장처럼 맥락적 설명에서 무조건적 옹호로 넘어가는 논리를 점검합니다. 제시문의 특정 집단에 관한 서술을 현재 집단 전체의 특성으로 일반화하지 않습니다.',
    },
    {
      file: '525-1.png',
      width: 2863,
      height: 2469,
      title: '2012학년도 9월 모의평가 · 사회·문화 5번',
      date: '2011년 9월 시행 · 평가원',
      answer: '④',
      text: '옳지 않은 설명을 고르는 문제입니다. (나)는 보편적 가치를 인정하지 않는 극단적 문화 상대주의이며 해당 사회의 내부 맥락을 중시하므로, 외부자의 관점을 중시한다는 ④가 틀립니다. 자문화 중심주의는 자문화의 일반화와 집단 일체감 강화를 가져올 수 있고, 타문화를 우월하게 여기는 사례는 문화 사대주의에 해당하므로 나머지는 적절합니다.',
      connection:
        '자문화 중심주의·극단적 문화 상대주의·문화 사대주의의 기준을 비교하고 부정형 발문을 확인합니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        문화 이해 태도와 보편 윤리를 연결하는 유사 기출 3문항
      </h3>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/8/${item.file}`;
        return (
          <section key={item.file} className={card}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 8번과의 연결
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
        시험 출처는 제공된 정보를 따르며, 유사 기출의 정답·해설은 원문 이미지에
        근거한 SN 풀이입니다.
      </p>
    </div>
  );
}
