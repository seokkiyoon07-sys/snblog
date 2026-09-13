import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    'ㄱ · 옳지 않음',
    '갈퉁은 갈등을 무조건 회피하라고 주장하지 않습니다. 제시문의 핵심은 갈등을 비폭력적이고 창조적으로 변환하는 것입니다. 갈등의 존재와 폭력적 대응을 구별해야 합니다.',
  ],
  [
    'ㄴ · 옳음',
    '정치적 억압은 사회 구조와 제도를 통해 사람들의 자유와 가능성을 제한하는 구조적 폭력에 해당합니다. 억압을 줄이는 것은 구조적 폭력을 감소시키는 활동입니다.',
  ],
  [
    'ㄷ · 옳음',
    '문화적 폭력은 언어·종교·이데올로기 등 상징적 영역에서 직접적 폭력이나 구조적 폭력을 정당한 것으로 보이게 합니다. 따라서 직접적 폭력의 정당화에도 이용될 수 있습니다.',
  ],
  [
    'ㄹ · 옳지 않음',
    '대외적 선제공격은 직접적 폭력을 행사하는 방식입니다. 갈등을 비폭력적으로 변환하고 구조적·문화적 평화를 구축하자는 제시문의 입장에 부합하지 않습니다.',
  ],
];
export function QuestionEighteenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ③ · ㄴ, ㄷ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          갈퉁: 폭력의 제거와 비폭력적 갈등 변환
        </h3>
        <p>
          직접적·구조적·문화적 폭력의 삼각형, 구조적·문화적 평화, 비폭력적 갈등
          변환을 강조하는 사상가는 요한 갈퉁입니다. 전쟁의 부재만으로 평화가
          완성된다고 보지 않습니다.
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
const types = [
  [
    '직접적 폭력',
    '행위자가 직접 가하는 폭력',
    '전쟁·폭행 등',
    '구체적인 폭력 행위에 주목',
  ],
  [
    '구조적 폭력',
    '사회 구조·제도에 내재한 억압과 착취',
    '차별적 제도, 정치적 억압 등',
    '개인의 악의가 없어도 발생 가능',
  ],
  [
    '문화적 폭력',
    '다른 폭력을 정당화하는 상징적 작용',
    '차별이나 공격을 당연시하는 이데올로기 등',
    '직접적·구조적 폭력의 정당화에 주목',
  ],
];
export function QuestionEighteenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        갈등을 없애는 것과 폭력을 줄이는 것 구별하기
      </h3>
      <p>
        공식 배점은 1.5점입니다. 갈퉁의 평화 개념과 폭력 유형을 구체적 진술에
        적용합니다. 아래는 제시문과 선지에 근거한 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 갈등의 회피가 아니라 해결 방식의 변화
        </h4>
        <p className="mt-3">
          ㄱ은 평화를 갈등의 부재로 단순화합니다. 제시문은 갈등을 비폭력적이고
          창조적으로 변환하는 과정을 강조합니다. 의견이나 이해관계가 다르다는
          사실 자체를 폭력과 동일시하지 않습니다.
        </p>
        <p className="mt-3">
          ㄹ도 수단을 확인하는 선지입니다. 평화를 명분으로 제시했다는 이유만으로
          선제공격이 제시문의 평화 구축 방식에 부합하는 것은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 세 폭력 유형의 판별 기준</h4>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr>
                {['유형', '핵심 의미', '대표 사례', '판별 포인트'].map(x => (
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
              {types.map(row => (
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
          문화적 폭력에서 ‘정당화’는 실제로 옳다는 뜻이 아니라, 폭력을 옳거나
          불가피한 것처럼 받아들이게 한다는 뜻입니다. 언어나 종교 자체가
          폭력이라는 의미도 아닙니다. 그 내용이 다른 폭력을 정당화하는지
          살펴봅니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 폭력의 삼각형은 고정된 진행 순서가 아님
        </h4>
        <p className="mt-3">
          제시문은 폭력이 어느 꼭짓점에서도 시작하여 다른 꼭짓점으로 전달될 수
          있다고 명시합니다. ‘항상 직접적 폭력에서 시작한다’거나 ‘반드시 문화적
          → 구조적 → 직접적 순으로 진행한다’고 외우면 안 됩니다.
        </p>
        <p className="mt-3">
          예를 들어 차별을 정당화하는 담론은 차별적 제도나 공격 행위를 뒷받침할
          수 있습니다. 유형을 구분하는 동시에 서로 영향을 줄 수 있다는 관계도
          이해해야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 소극적 평화와 적극적 평화</h4>
        <p className="mt-3">
          소극적 평화는 직접적 폭력이 없는 상태입니다. 적극적 평화는 이를 넘어
          구조적·문화적 폭력까지 제거하는 방향을 지향합니다. 전쟁이 멈췄더라도
          억압과 차별, 이를 정당화하는 문화가 남아 있다면 적극적 평화가
          완성되었다고 볼 수 없습니다.
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>정치적 억압과 착취를 구조적 폭력에 연결합니다.</li>
          <li>폭력을 정당화하는 상징적 작용을 문화적 폭력에 연결합니다.</li>
          <li>갈등의 존재와 그에 대한 폭력적 대응을 구별합니다.</li>
          <li>‘무조건’, ‘항상’이 제시문의 범위를 왜곡하는지 확인합니다.</li>
        </ol>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 세계화와 평화 · [10통사2-04-02]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          평화의 관점에서 국제 사회의 갈등과 협력의 사례를 조사하고, 세계 평화를
          위한 행위 주체의 바람직한 역할을 탐색한다.
        </blockquote>
        <p className="mt-3">
          평화를 전쟁의 부재로만 이해하지 않고 정치·경제적 억압과 문화적
          정당화까지 살펴봅니다. 평화를 위한 활동의 목표와 수단을 함께 판단하는
          데 연결됩니다.
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

export function QuestionEighteenRelated() {
  const items = [
    {
      file: '227078-1.png',
      connection:
        '공식 18번의 문화적 폭력 선지와 연결됩니다. 문화가 직접적·구조적 폭력을 정당화할 수 있다는 갈퉁의 폭력 분류를 도식에 적용합니다.',
      width: 3016,
      height: 2769,
      title: '2024년 3월 전국연합학력평가 · 윤리와 사상 9번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '④',
      text: '문화적 폭력이 구조적 폭력을 정당화할 수 있다는 ④가 옳습니다. 폭력의 주체를 개인으로 한정하거나, 직접적 폭력만 제거하면 평화가 완성된다고 볼 수 없습니다. 폭력은 어느 꼭짓점에서도 시작할 수 있으므로 항상 직접적 폭력에서 시작한다는 ⑤도 틀립니다.',
    },
    {
      file: '218906-1.png',
      connection:
        '공식 18번처럼 문화적 폭력과 구조적 폭력을 함께 판단합니다. 사회 구조의 개선이 적극적 평화에 기여한다는 점과 폭력을 정당화하는 문화의 역할을 구별합니다.',
      width: 2862,
      height: 3090,
      title: '2021년 3월 전국연합학력평가 · 생활과 윤리 12번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '④ · ㄱ, ㄴ, ㄹ',
      text: '인간다운 삶을 위협하는 문화의 폭력성, 적극적 평화를 위한 구조 개선, 상징적 폭력이 직접적 폭력으로 이어질 가능성을 인정하므로 ㄱ·ㄴ·ㄹ이 옳습니다. 폭력이 항상 문화적·구조적 폭력에서 시작한다고 한정한 ㄷ은 제시문과 다릅니다.',
    },
    {
      file: '126128-1.png',
      connection:
        '공식 18번의 갈등을 무조건 회피해야 한다는 오답을 점검합니다. 갈등의 존재 자체보다 비폭력적 해결·변환과 폭력 감소의 과정에 주목하는 갈퉁의 관점을 연습합니다.',
      width: 2913,
      height: 2061,
      title: '2026년 5월 전국연합학력평가 · 윤리와 사상 9번',
      date: '고3 · 교육청 · 제공된 출처 기준',
      answer: '③',
      text: '부정의 대답을 할 질문을 고릅니다. 모든 폭력에 반드시 특정한 의도가 수반되는 것은 아닙니다. 구조적 폭력은 특정 개인의 의도와 별개로 사회 구조와 제도를 통해 발생할 수 있으므로 ③에 부정합니다. 제시문의 ‘주로’라는 경향 설명을 ‘반드시’라는 필연적 순서로 바꾸지 않는 것도 중요합니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        갈퉁의 평화론을 묻는 유사 기출 3문항
      </h3>
      <p>폭력의 유형과 상호 관계, 적극적 평화의 조건을 연습합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/18/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 18번과의 연결
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
