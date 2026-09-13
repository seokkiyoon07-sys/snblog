import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    '① · 옳음 → 정답',
    '칸트는 범죄를 저지른 사람도 존엄한 인격체라고 봅니다. 범죄자를 다른 사람의 이익을 위한 도구로만 취급하지 않고 자신의 행위에 책임지는 존재로 대우해야 합니다. 사형을 지지한다는 이유로 살인범의 존엄성 자체를 부정하는 것은 아닙니다.',
  ],
  [
    '② · 옳지 않음',
    '개인의 선 대신 공동체의 선을 내세워도, 형벌을 다른 이익을 얻는 수단으로 정당화한다는 구조는 같습니다. 제시문은 범죄를 저질렀다는 사실을 형벌의 근거로 제시합니다.',
  ],
  [
    '③ · 옳지 않음',
    '범죄 행위에 대한 책임을 묻는 것이 응보적 형벌의 핵심입니다. 그런 형벌이 없다는 진술은 강연의 내용과 반대입니다.',
  ],
  [
    '④ · 옳지 않음',
    '제시문의 기준은 동등성입니다. 범죄에 상응하는 형벌을 요구하므로, 범죄로 끼친 해악을 능가하는 고통을 가해야 한다는 진술은 적절하지 않습니다.',
  ],
  [
    '⑤ · 옳지 않음',
    '사형을 지지하는 결론과 그 이유를 구별해야 합니다. 칸트가 살인에 대한 사형을 요구하는 근거는 범죄 예방 효과의 비교가 아니라 응보와 동등성의 원리입니다.',
  ],
];
export function QuestionSixteenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ① · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          칸트: 범죄에 대한 책임과 인간 존엄성
        </h3>
        <p>
          ‘범죄를 저질렀기 때문에’, ‘책임지는 존엄한 존재’, ‘동등성의 원리’가
          핵심 단서입니다. 강연자는 형벌을 응보로 정당화하는 칸트입니다.
          살인범에게 형벌을 부과하면서도 그의 인격과 존엄성을 존중해야 한다고
          봅니다.
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
export function QuestionSixteenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        사형에 대한 결론과 정당화 근거 구별하기
      </h3>
      <p>
        공식 배점은 2점입니다. 강연의 논지를 파악하고 응보·존엄성·동등성을 각
        선지에 적용합니다. 아래는 공식 제시문과 선지에 근거한 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 형벌을 부과해도 존엄성은 존중</h4>
        <p className="mt-3">
          ①은 사형의 찬반을 직접 묻기보다, 범죄자도 존엄한 존재라는 전제를
          확인합니다. 칸트의 관점에서는 형벌을 받는다는 사실과 인격을
          존중받는다는 사실이 양립합니다. 책임을 묻는 근거와 처우의 원칙을 함께
          읽어야 합니다.
        </p>
        <p className="mt-3">
          이를 ‘사형은 언제나 인간 존엄성을 존중하는 제도’라는 일반적 결론으로
          확대하지 않습니다. 이 문항은 강연자가 지지할 입장을 묻습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. 목적을 바꾸어도 수단적 정당화는 남음
        </h4>
        <p className="mt-3">
          ②는 ‘개인의 선이 아니라’라는 표현으로 제시문과 비슷하게 시작하지만,
          뒤에서 공동체의 선을 형벌의 목적으로 제시합니다. 앞부분의 부정에
          동의하는 것만으로 문장 전체를 옳다고 판단하면 안 됩니다.
        </p>
        <p className="mt-3">
          ⑤도 같은 방식입니다. 사형에 찬성한다는 결론이 같더라도, 예방 효과를
          이유로 제시하면 칸트의 응보 논증과 다릅니다. ‘누가 어떤 결론을 어떤
          이유로 지지하는가’를 한 묶음으로 확인합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 동등성을 과잉 보복으로 읽지 않기
        </h4>
        <p className="mt-3">
          ④의 판별어는 ‘능가해야’입니다. 범죄에 상응하는 형벌을 요구하는 원리와
          범죄보다 더 큰 고통을 요구하는 주장은 구별됩니다. 다만 동등성을 모든
          범죄에서 피해 방식을 그대로 재현하거나 주관적 고통을 산술적으로 같게
          만드는 공식으로 외우지는 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 학생이 익혀야 할 풀이 기준</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>범죄 사실에 대한 응보와 미래 이익을 위한 형벌을 구별합니다.</li>
          <li>범죄자의 책임 능력과 존엄성을 함께 확인합니다.</li>
          <li>형벌에 대한 결론뿐 아니라 정당화 근거를 대조합니다.</li>
          <li>
            ‘없다’, ‘능가해야’ 같은 표현이 제시문의 범위를 바꾸는지 점검합니다.
          </li>
        </ol>
        <p className="mt-3">
          ‘예방’, ‘수단’, ‘결과’라는 단어만 보고 오답 처리하지 않습니다. 예방
          효과를 형벌의 정당화 근거로 삼는지, 부수적 효과를 말하는지, 혹은
          그러한 근거를 부정하는 문장인지 구분해야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 사회정의와 불평등 · [10통사2-02-01]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          정의의 의미와 정의가 요구되는 이유를 파악하고, 다양한 사례를 통해
          정의의 실질적 기준을 탐구한다.
        </blockquote>
        <p className="mt-3">
          형벌이라는 사례에서 정의의 기준을 탐구합니다. 인간 존엄성과 국가의
          형벌권을 연결하되, 사상가의 주장을 현대 법제의 사실과 구분합니다.
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
export function QuestionSixteenRelated() {
  const items = [
    {
      file: '215725-1.png',
      connection:
        '공식 16번의 정답인 살인범의 존엄성 존중과 연결됩니다. 칸트에게 응분의 책임을 묻는 형벌이 범죄자를 책임 있는 인격으로 대우하는 것임을 확인합니다.',
      width: 1987,
      height: 2489,
      title: '2019년 11월 전국연합학력평가 · 생활과 윤리 6번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '④ · ㄱ, ㄷ, ㄹ',
      text: '칸트는 형벌의 근거를 유용성에 두지 않으므로 ㄱ이 적절합니다. 사형 폐지론을 비판하는 ㄷ·ㄹ은 각각 책임지는 인격체의 존중과 응분의 책임을 짚습니다. ㄴ은 범죄 예방 효과가 없다는 경험적 판단을 칸트에게 귀속시키므로 적절하지 않습니다. 예방 효과를 정당화 근거로 삼지 않는 것과 효과 자체가 없다고 주장하는 것은 다릅니다.',
    },
    {
      file: '203885-1.png',
      connection:
        '공식 16번과 같이 형벌의 동등성 원리와 인간을 단순한 수단으로 취급해서는 안 된다는 논리를 적용합니다. 응보의 근거와 과도한 형벌을 구별하는 연습입니다.',
      width: 2793,
      height: 3013,
      title: '2015년 9월 전국연합학력평가 · 생활과 윤리 16번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '⑤',
      text: '동등성의 원리와 범죄에 대한 책임을 강조하는 칸트의 입장입니다. 살인에 대한 응보적 책임을 사형의 근거로 제시한 ⑤가 적절합니다. 사회적 효용이나 예방 효과를 사형의 근거로 바꾸거나, 사형이 반드시 존엄성을 훼손한다고 해석하면 제시문의 논지와 어긋납니다.',
    },
    {
      file: '205163-1.png',
      connection:
        '공식 16번의 공리주의적 이유를 끼워 넣은 오답과 연결됩니다. 사형 찬성 여부만 보지 않고 범죄 예방·유용성이 칸트의 형벌 정당화 근거인지 따져야 합니다.',
      width: 2805,
      height: 2465,
      title: '2016년 3월 전국연합학력평가 · 생활과 윤리 19번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '① · ㄱ, ㄷ',
      text: '살인에 대한 응보로서 사형을 정당화하는 ㄱ과 범죄에 상응하는 형벌을 요구하는 ㄷ이 옳습니다. 최대 다수의 행복이나 중대 범죄 예방을 집행 근거로 제시한 ㄴ·ㄹ은 칸트의 응보주의와 다릅니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        칸트의 형벌관을 비교하는 유사 기출 3문항
      </h3>
      <p>응보의 근거, 인간 존엄성, 동등성의 원리를 연습합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/16/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 16번과의 연결
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
