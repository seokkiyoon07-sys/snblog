import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const choices = [
  [
    'ㄱ · 옳음',
    '㉠은 동북공정입니다. 고구려사뿐 아니라 발해사도 연구 대상에 포함되었습니다. 고구려사 문제가 제시되었다고 해서 연구 범위를 고구려사로만 한정하면 안 됩니다.',
  ],
  [
    'ㄴ · 옳지 않음',
    '태정관 지령문은 울릉도·독도와 관련된 일본의 사료입니다. 중국 동북 지역의 역사 연구 사업인 동북공정의 근거 문서로 연결하는 것은 적절하지 않습니다.',
  ],
  [
    'ㄷ · 옳음',
    'A는 중국 동북부의 랴오닝성·지린성·헤이룽장성 일대입니다. 이 지역에는 겨울이 춥고 기온의 연교차가 큰 냉대 기후가 나타납니다. 선지는 A 전역이 동일한 세부 기후형이라고 주장하는 것이 아닙니다.',
  ],
  [
    'ㄹ · 옳지 않음',
    'A는 한반도 북쪽에 있는 중국 동북 지역입니다. 티베트 자치구는 중국 서남부에 있어 지도의 위치와 맞지 않습니다.',
  ],
];
export function QuestionTwentyThreeSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ② · ㄱ, ㄷ · 2점 · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">㉠은 동북공정, A는 중국 동북 3성</h3>
        <p>
          중국의 연구 사업, 2004년의 고구려사 관련 한중 현안, 중국 동북부를
          표시한 지도를 함께 읽습니다. 글에서는 동북공정을, 지도에서는
          랴오닝성·지린성·헤이룽장성 일대를 식별할 수 있습니다.
        </p>
        {choices.map(([title, text]) => (
          <section className={card} key={title}>
            <h4 className="font-bold">{title}</h4>
            <p>{text}</p>
          </section>
        ))}
        <p>
          역사적 쟁점과 공간적 특징을 각각 판별하면 ㄱ과 ㄷ이 남으므로 ②입니다.
        </p>
        <p className="text-xs">
          사료 확인:{' '}
          <a
            className="underline"
            href="https://dokdo.mofa.go.kr/m/kor/dokdo/faq07.jsp"
            target="_blank"
            rel="noreferrer"
          >
            외교부 태정관지령 설명
          </a>
          은 1877년 일본 정부가 울릉도·독도를 일본 소속이 아닌 것으로 확인한
          문서의 배경을 설명합니다.
        </p>
      </div>
    </details>
  );
}
export function QuestionTwentyThreeAnalysis() {
  return (
    <div className="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        동북공정을 역사와 지리의 관점에서 읽기
      </h3>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 공식 출제 의도</h4>
        <p>
          평가원의 예시문항 안내는 동북공정이라는 동아시아 현안을 다양한
          관점에서 파악하는 능력을 평가한다고 설명합니다. 역사적 배경과 지리적
          특성을 함께 이해하고, 자료의 핵심 주장과 쟁점 및 해당 지역의
          자연·인문적 특징을 파악하는 문항입니다.
        </p>
        <p>
          자료를 읽어 탐구해야 할 쟁점을 찾는 ‘문제 파악 및 인식’에 해당합니다.
          역사와 기후 지식이 함께 쓰이지만, 기후가 역사적 귀속을 결정한다는
          인과관계를 묻는 것은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 선지의 두 축과 오답 구조</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2">판별 축</th>
                <th className="p-2">옳은 연결</th>
                <th className="p-2">오답의 혼동</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">역사 · ㄱ, ㄴ</td>
                <td className="p-2">동북공정 → 발해사 연구 포함</td>
                <td className="p-2">
                  울릉도·독도 관련 일본 사료를 중국의 연구 사업과 연결
                </td>
              </tr>
              <tr>
                <td className="p-2">지리 · ㄷ, ㄹ</td>
                <td className="p-2">중국 동북 지역 → 냉대 기후가 나타남</td>
                <td className="p-2">중국 동북부와 서남부 티베트의 위치 혼동</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          태정관 지령문을 막연히 ‘역사 문제 관련 문서’로만 기억하면 ㄴ을 잘못
          판단할 수 있습니다. 문서의 작성 주체와 대상 지역을 함께 확인해야
          합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">3. 통합사회와 교육과정 연결</h4>
        <p>
          한중 관계를 다룬 글과 중국 동북부 지도를 결합하여 시간적·공간적
          관점에서 같은 현안을 살펴봅니다. 개별 역사 지식이나 지역의 위치 확인에
          머무르지 않고 동아시아 역사 갈등의 쟁점을 파악하는 데 두 지식을 함께
          사용합니다.
        </p>
        <p className="mt-3 font-bold">공식 안내 자료의 연계 성취기준</p>
        <p>
          [10통사2-04-03] 남북 분단과 동아시아의 역사 갈등 상황을 분석하고, 이를
          토대로 우리나라가 세계 평화에 기여할 수 있는 방안을 제안한다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 유사 기출 연결</h4>
        <p>
          첫 기출은 고구려·발해의 독자성을 보여 주는 역사적 근거를 구별합니다.
          둘째 기출은 중국 동북부를 포함한 세 지역의 월평균 기온과 누적 강수량을
          판독합니다. 유사 기출 탭에서 원문과 풀이를 확인할 수 있습니다.
        </p>
        <p>
          제공된 출처 정보를 표기하고 원문에 근거하여 해설했습니다. 공통
          소재·개념에 따른 연계이며, 특정 기출을 직접 차용했다거나 SN RAG를
          조회하여 출제 계보를 확인했다는 뜻은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 학습과 변형문항 설계</h4>
        <p>
          역사 자료는 ‘작성 주체·시기·대상 지역·핵심 주장’을, 지도는 ‘상대
          위치·기후·행정 구역’을 나누어 정리한 뒤 연결합니다. 동북공정과 태정관
          지령문처럼 같은 역사 현안 범주에 속하더라도 서로 다른 대상의 자료를
          구별하는 연습이 중요합니다.
        </p>
        <p>
          변형문항에는 지역 지도와 역사 자료를 함께 제시하되, 각 선지의 근거를
          명확하게 두는 것이 좋습니다. 기후를 역사적 영유권의 근거로 삼거나,
          모든 영토·역사 현안을 한 가지 논리로 일반화하지 않습니다.
        </p>
      </section>
    </div>
  );
}

export function QuestionTwentyThreeRelated() {
  const items = [
    {
      file: '178871-1.png',
      connection:
        '공식 23번과 같이 동북공정의 연구 대상에 고구려사·발해사가 포함됨을 전제로 합니다. 공식 문항의 범위 확인에서 나아가 역사적 독자성을 보여 주는 반박 근거를 고릅니다.',
      width: 2954,
      height: 2630,
      title: '2006년 6월 전국연합학력평가 · 한국사 2번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '② · ㄱ, ㄹ',
      text: '밑줄 친 주장을 반박하는 근거를 고릅니다. 발해가 인안·대흥 등 독자적인 연호를 사용한 사실과 고구려가 수·당의 침략에 저항한 사실은 정치적 독자성을 보여 줍니다. 당의 문물 수용이나 중국과의 교역에서 중국 화폐를 사용한 사실은 교류의 증거이므로, 그 자체로 독자성을 입증하는 반박 근거로 삼기 어렵습니다.',
    },
    {
      file: '226388-1.png',
      connection:
        '공식 23번의 중국 동북부 냉대 기후 선지를 자료로 확인하는 기출입니다. 지도상의 만주 지역을 추운 겨울과 큰 연교차가 나타나는 기온·누적 강수량 그래프에 연결합니다.',
      width: 2888,
      height: 3621,
      title: '2023년 10월 전국연합학력평가 · 세계지리 19번',
      date: '고3 · 교육청 · 제공된 출처 기준 · 3점',
      answer: '②',
      text: '(가)는 1월에 덥고 7월에 서늘한 오스트레일리아 남서부, (나)는 겨울이 춥고 연교차가 큰 중국 동북부, (다)는 여름이 덥고 건조한 이베리아반도 서부입니다. 7월에 아열대 고압대의 영향을 더 크게 받는 곳은 여름인 (다)이므로 ②가 옳습니다. (가)는 겨울 강수가 많아 여름 강수 집중률이 (나)보다 낮습니다. 연교차는 (나)가 (다)보다 큽니다. (가)는 남반구, (나)·(다)는 북반구이고, 북회귀선과의 최단 거리는 남반구의 (가)가 가장 짧지 않습니다. 누적 강수량 그래프에서는 인접한 월의 가로 좌표 차이가 해당 월의 강수량이라는 점에 유의합니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        역사적 근거와 기후를 묻는 유사 기출 2문항
      </h3>
      <p>고구려·발해의 역사적 독자성과 중국 동북부의 기후 자료를 확인합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/23/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 23번과의 연결
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
