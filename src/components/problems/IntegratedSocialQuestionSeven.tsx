import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const rows = [
  [
    'A',
    'SNS를 통한 간접 전파',
    '현지 음악과 한국 음악의 문화 병존',
    '요인은 옳고 양상은 틀림 → ㉠ 간접 전파, ㉡ 문화 병존',
  ],
  [
    'B',
    '사람 사이의 접촉을 통한 직접 전파',
    '기존 문화 요소가 결합한 문화 융합',
    '요인·양상 모두 옳음 → (가)는 두 조건을 함께 만족해야 함',
  ],
  [
    'C',
    '정복·강요에 따른 직접 전파 및 강제적 문화 접변',
    '상투 문화가 변발 문화로 대체된 문화 동화',
    '(나): 직접 전파로 인한 문화 동화 등이 가능',
  ],
];
const choices = [
  [
    '① · 틀림',
    'C는 기존 사물이나 원리를 새로 알아낸 발견의 사례가 아닙니다. 정복과 강요를 통해 외부 문화가 전해진 사례입니다.',
  ],
  [
    '② · 틀림',
    'A에서 SNS라는 매체가 전달 경로로 제시되므로 ㉠은 간접 전파입니다.',
  ],
  [
    '③ · 틀림',
    '현지 음악도 한국 음악도 즐긴다는 서술은 두 문화가 함께 존재하는 문화 병존입니다. 두 음악이 결합한 새로운 문화가 제시되지 않았으므로 ㉡은 문화 융합이 아닙니다.',
  ],
  [
    '④ · 옳음',
    '에스파냐인이 가톨릭교를 들여온 것은 직접 전파, 토착 신앙과 결합해 새로운 형태의 성모상이 탄생한 것은 문화 융합입니다. B에 대해 교사가 인정한 요인과 양상을 모두 만족합니다.',
  ],
  [
    '⑤ · 틀림',
    'C는 외부 문화에서 아이디어를 얻어 새로운 문화를 발명하는 자극 전파가 아닙니다. 상투 문화가 변발 문화로 대체되었으므로 양상도 병존이 아니라 동화입니다.',
  ],
];
export function QuestionSevenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ④ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          교사의 피드백으로 요인과 양상 복원하기
        </h3>
        <p>
          학생의 발언을 모두 정답으로 받아들이지 않습니다. 교사가 요인과 양상 중
          어느 부분을 인정했는지 나누어 읽은 뒤 사례의 근거와 연결합니다.
        </p>
        {rows.map(([name, factor, result, logic]) => (
          <section key={name} className={card}>
            <h4 className="font-bold">사례 {name}</h4>
            <p className="mt-2">
              <strong>요인·전달 과정:</strong> {factor}
            </p>
            <p>
              <strong>양상:</strong> {result}
            </p>
            <p className="mt-2 text-emerald-800 dark:text-emerald-200">
              {logic}
            </p>
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
        <p>
          ④는 문항에 제시된 ‘들여옴’과 ‘결합하여 새로운 형태가 탄생함’만으로
          판별할 수 있습니다. 특정 성모상의 이름이나 세부 종교사를 추가로 암기할
          필요는 없습니다.
        </p>
      </div>
    </details>
  );
}
export function QuestionSevenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        어떻게 전해졌는가, 무엇이 달라졌는가
      </h3>
      <p>
        공식 배점은 2점입니다. 사례 → 학생의 설명 → 교사의 피드백을 연결해
        빈칸을 복원하는 구조입니다. 아래는 문항 자료에 근거한 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 서로 다른 분류 기준을 구별하기</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>내재적 요인: 발명·발견</li>
          <li>외재적 요인인 문화 전파: 직접 전파·간접 전파·자극 전파</li>
          <li>접변의 강제성: 자발적 문화 접변·강제적 문화 접변</li>
          <li>접변의 결과 양상: 문화 병존·문화 융합·문화 동화</li>
        </ul>
        <p className="mt-3">
          ‘직접 전파’와 ‘강제적 문화 접변’은 같은 기준으로 나눈 대립 항목이
          아닙니다. 직접 접촉으로 전해졌는지와 수용이 강제되었는지를 각각
          설명하므로 C에 함께 적용할 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 결과를 보여 주는 표현 찾기</h4>
        <div className="mt-3 space-y-3">
          <p>
            <strong>병존:</strong> 기존 문화와 외래 문화가 각각 고유성을
            유지하며 함께 존재
          </p>
          <p>
            <strong>융합:</strong> 문화 요소가 결합해 기존 문화와 구별되는
            새로운 문화 형성
          </p>
          <p>
            <strong>동화:</strong> 기존 문화의 고유성이 상실되고 다른 문화로
            대체
          </p>
        </div>
        <p className="mt-3">
          A의 ‘뿐만 아니라 …도’는 병존, B에 들어갈 ④의 ‘결합하여 새로운 형태’는
          융합, C의 ‘대체되었다’는 동화의 근거입니다. 한 생활 영역의 동화 사례를
          그 사회의 모든 문화가 사라졌다는 뜻으로 확대하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 교사의 피드백을 조건으로 바꾸기
        </h4>
        <p className="mt-3">
          A는 ‘요인만 옳다’고 했으므로 학생의 문화 동화 판단을 버리고 사례에서
          양상을 다시 찾습니다. B는 요인과 양상이 모두 옳으므로 (가)에 들어갈
          사례는 직접 전파와 문화 융합을 동시에 충족해야 합니다. C도 두 항목을
          함께 설명해야 합니다.
        </p>
        <p className="mt-3">
          ②는 간접 전파를 직접 전파로, ③은 병존을 융합으로 바꾸는 오답입니다.
          이는 각각 같은 분류 안에서 개념을 잘못 적용한 것입니다. 모든 오답을
          요인과 양상을 서로 뒤섞은 ‘범주 오류’로 설명하지는 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회1 · 문화와 다양성 · [10통사1-04-02]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          문화 변동의 다양한 양상을 이해하고, 현대 사회에서 전통문화가 지니는
          의의를 탐색한다.
        </blockquote>
        <p className="mt-3">
          현대의 SNS 문화 확산과 역사적 문화 접촉 사례를 같은 개념으로
          분석합니다. 이 문항은 성취기준 가운데 문화 변동의 양상 이해에 직접
          연결됩니다.
        </p>
        <a
          className="font-medium text-emerald-700 underline dark:text-emerald-300"
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
          <li>사례마다 전달 경로와 변화 결과를 두 칸으로 나누어 적기</li>
          <li>교사가 인정한 설명과 수정한 설명을 표시하기</li>
          <li>융합을 판단할 때 새 문화가 만들어졌다는 근거 확인하기</li>
          <li>‘강요’와 ‘대체’를 각각 강제성과 동화의 근거로 구별하기</li>
          <li>기출의 소재가 바뀌어도 같은 판단 기준 적용하기</li>
        </ol>
        <p className="mt-3">
          유사 기출은 공통 개념을 연습하기 위한 연결입니다. 직접적인 출제 계보를
          뜻하지 않으며, 별도의 근거 없이 사례집을 ‘평가원 공인’이라고 부르지
          않습니다.
        </p>
      </section>
    </div>
  );
}
export function QuestionSevenRelated() {
  const items = [
    {
      file: '2772-1.png',
      width: 2998,
      height: 2345,
      title: '2026학년도 9월 모의평가 · 사회·문화 12번',
      date: '2025년 9월 시행 · 평가원',
      answer: '⑤',
      text: '갑국과 을국 모두에서 뿌리는 향수와 바르는 향수가 함께 사용되므로 문화 병존을 확인할 수 있습니다. 갑국 내부의 전통 의례에서 착안한 개발은 외부 문화에 의한 자극 전파가 아닙니다. 회사의 강제 국유화도 외부 문화의 강요가 아니므로 강제적 문화 접변으로 판단할 수 없습니다. 제조 비법과 기술의 이동을 비물질문화의 전파로 분류하는 ②, 문화 동화를 단정한 ④도 적절하지 않습니다.',
      connection:
        '향수의 개발·판매·망명 과정을 구별해 전파와 병존을 판별합니다. ‘강제로’라는 단어만으로 강제적 문화 접변을 고르면 안 됩니다.',
    },
    {
      file: '2596-1.png',
      width: 2786,
      height: 2731,
      title: '2024년 3월 전국연합학력평가 · 사회·문화 16번',
      date: '고3 · 교육청',
      answer: '②',
      text: '을국 직원이 갑국에 가서 운영 방식을 배워 왔으므로 직접 전파입니다. 갑국의 최초 고안은 발견이 아니라 발명입니다. 을국은 외래 방식과 기존 방식을 결합한 융합, 병국은 새 방식과 전통 방식이 함께 존재하는 병존입니다. 을국에서 자기 문화의 정체성이 상실되었다고 볼 수 없고, 을국과 병국 모두 자발적으로 수용하였으므로 ③·④는 틀립니다. 갑국까지 융합으로 분류한 ⑤도 틀립니다.',
      connection:
        '소매점 운영 방식의 이동을 통해 직접 전파·융합·병존을 구별합니다. 제공된 이미지의 소재는 성모상이 아닙니다.',
    },
    {
      file: '2359-1.png',
      width: 2855,
      height: 3001,
      title: '2021년 3월 전국연합학력평가 · 사회·문화 19번',
      date: '고3 · 교육청',
      answer: '⑤ · ㄷ, ㄹ',
      text: '갑국은 점령과 처벌로 혼인 제도가 대체되어 직접 전파·강제적 접변·동화에 해당합니다. 을국은 이민자들이 전한 춤을 함께 즐기다가 기존 춤에 접목한 새 춤을 만들어 병존을 거쳐 융합이 나타납니다. 따라서 ㄱ의 자발적 접변과 ㄴ의 동화는 틀립니다. 을국의 문화적 정체성이 보존되고 두 국가 모두 외부 사회와 접촉해 새로운 문화를 갖게 되므로 ㄷ·ㄹ이 옳습니다.',
      connection:
        '혼인 제도와 춤 사례를 통해 강제성과 변화 양상을 구분합니다. 시간의 흐름에 따라 병존에서 융합으로 달라질 수 있습니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        문화 변동의 요인과 양상을 묻는 유사 기출 3문항
      </h3>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/7/${item.file}`;
        return (
          <section key={item.file} className={card}>
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
        시험 출처는 제공된 정보를 따르며, 기출의 내용과 해설은 폴더의 원문
        이미지에 근거했습니다. 유사 기출 정답은 SN 풀이입니다.
      </p>
    </div>
  );
}
