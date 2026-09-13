import Image from 'next/image';

const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link =
  'font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300';
const regions = [
  [
    '(가)',
    '몽골 내륙',
    '1월 기온 편차 음수, 7월 양수. 두 달의 차이가 큼.',
    '북반구의 큰 계절 변화, 여름철 강수 집중',
    '양·염소 유목, 이동에 유리한 게르',
  ],
  [
    '(나)',
    '오스트레일리아 남서부',
    '1월 기온 편차 양수, 7월 음수. 강수 편차는 반대.',
    '남반구 지중해성 기후: 여름 건조·겨울 다우',
    '올리브 등을 재배하는 수목 농업',
  ],
  [
    '(다)',
    '인도네시아 적도 부근',
    '1월·7월 기온 편차가 모두 0에 가까움.',
    '적도 부근의 작은 기온 연교차',
    '고상 가옥, 향신료가 들어간 볶음밥 나시고렝',
  ],
];
const choices = [
  [
    '① · 틀림',
    '(가)는 남반구에 위치한다.',
    '(가)는 1월보다 7월이 따뜻한 몽골 내륙으로, 북반구에 있습니다.',
  ],
  [
    '② · 틀림',
    '(나)가 위치한 국가의 전통 가옥은 이동 생활에 유리한 게르이다.',
    '게르는 (가)가 위치한 몽골의 전통 가옥입니다. (나)는 오스트레일리아 남서부입니다.',
  ],
  [
    '③ · 옳음',
    '(다)가 위치한 국가의 전통 음식은 향신료가 들어간 볶음밥이다.',
    '(다)가 위치한 인도네시아의 대표 음식은 나시고렝입니다. 지도·기후 자료로 국가를 찾은 뒤 음식 문화를 연결합니다.',
  ],
  [
    '④ · 틀림',
    '(다)는 (가)보다 기온의 연교차가 크다.',
    '몽골 내륙인 (가)는 기온의 계절 변화가 크고, 적도 부근인 (다)는 작습니다. 다만 1월·7월 두 달의 값만으로 모든 지역의 정확한 연교차를 계산할 수 있는 것은 아닙니다.',
  ],
  [
    '⑤ · 틀림',
    '(가)와 (나)는 모두 여름 강수량이 겨울 강수량보다 많다.',
    '(가)는 여름인 7월의 강수량이 겨울인 1월보다 많습니다. (나)는 남반구이므로 1월이 여름, 7월이 겨울입니다. 지중해성 기후인 (나)는 겨울에 강수가 많아 두 지역 모두에 해당하지 않습니다.',
  ],
];

export function QuestionFiveSolution() {
  return (
    <details className="group rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ③
        </p>
        <h3 className="text-xl font-bold">편차 → 계절 → 지역 → 생활 모습</h3>
        <p>
          점은 왼쪽 축의 기온 편차(℃), 막대는 오른쪽 축의 강수 편차(mm)입니다.
          양수는 해당 지역의 기준값보다 높거나 많다는 뜻이고, 음수는 낮거나
          적다는 뜻입니다.
        </p>
        <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
          <p>월 기온 편차 = 월평균 기온 − 연평균 기온</p>
          <p>월 강수 편차 = 월 강수량 − 연 강수량 ÷ 12</p>
          <p className="mt-2 font-bold">
            편차 −20℃를 실제 기온 −20℃로, 음의 강수 편차를 음의 강수량으로 읽지
            않습니다.
          </p>
        </div>
        {regions.map(([label, name, evidence, climate, life]) => (
          <section key={label} className={card}>
            <h4 className="font-bold">
              {label} · {name}
            </h4>
            <p className="mt-2">{evidence}</p>
            <p>{climate}</p>
            <p className="mt-2">
              <strong>생활 모습:</strong> {life}
            </p>
          </section>
        ))}
        <p>
          지도에서 적도 부근의 점은 인도네시아 보르네오섬 쪽에 표시되어
          있습니다. 국가 전체가 하나의 기후나 생활양식으로만 이루어진다는 뜻은
          아닙니다.
        </p>
        <dl className="space-y-4">
          {choices.map(([label, statement, reason]) => (
            <div key={label}>
              <dt className="font-bold">
                {label} · {statement}
              </dt>
              <dd className="mt-1">{reason}</dd>
            </div>
          ))}
        </dl>
        <a
          className={link}
          href="https://www.indonesia.travel/gb/en/travel-ideas/don-t-leave-indonesia-before-you-get-a-taste-of-these-12-favorite-local-foods/"
          target="_blank"
          rel="noreferrer"
        >
          인도네시아 공식 관광청 · 나시고렝 소개 ↗
        </a>
      </div>
    </details>
  );
}

export function QuestionFiveAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
        편차 자료를 생활 문화로 연결하기
      </h3>
      <p>
        공식 문항의 배점은 2.5점입니다. 아래 내용은 자료와 선지에서 읽어 낸 SN의
        출제 구조 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 평균을 빼도 같은 지역의 월별 차이는 남는다
        </h4>
        <p className="mt-3">
          같은 지역의 두 달 기온 편차를 빼면 연평균 기온이 상쇄되어 두 달의 실제
          월평균 기온 차이가 됩니다. 강수 편차도 같은 원리로 비교할 수 있습니다.
        </p>
        <p className="mt-3 rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
          7월 기온 편차 − 1월 기온 편차 = 7월 평균 기온 − 1월 평균 기온
        </p>
        <p className="mt-3">
          반면 서로 다른 지역은 기준값이 다릅니다. 편차가 더 크다고 실제
          기온이나 강수량도 더 크다고 단정할 수 없습니다. (다)의 편차가 거의
          0이라는 사실만으로 연중 고온인지 저온인지 알 수 없으므로 적도
          부근이라는 지도 정보가 필요합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. 7월을 곧바로 여름으로 읽지 않기
        </h4>
        <p className="mt-3">
          (가)와 (나)는 모두 7월 강수 막대가 1월보다 높습니다. 그러나 (가)의
          7월은 여름이고 (나)의 7월은 겨울입니다. ⑤는 같은 달의 강수 비교를 같은
          계절의 비교로 바꾸어 읽는 오류를 점검합니다.
        </p>
        <p className="mt-3">
          먼저 반구를 확인하고, 달을 계절로 바꾼 뒤 강수 양상을 비교하세요.
          정확한 연교차는 최난월과 최한월의 평균 기온 차이입니다. 제시된 두 달이
          그 달들인지 확인하지 않고 차이를 정확한 연교차라고 쓰지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 자연환경과 생활양식을 함께 읽는 통합사회
        </h4>
        <p className="mt-3">
          지도와 편차 자료로 지역을 식별하고, 유목·게르, 고상 가옥·음식 문화,
          수목 농업을 연결합니다. 지표 해석과 자연환경에 적응한 생활 모습이 한
          문항에 결합되어 있습니다.
        </p>
        <p className="mt-3">
          음식 문화에는 기후뿐 아니라 재료의 생산·교역, 조리 관습과 역사도
          작용합니다. 향신료 음식이 오직 부패 방지를 위해 생겼다고 단정하기보다,
          지역의 자연환경과 문화가 함께 형성한 생활양식으로 이해합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회1 · 자연환경과 인간 · [10통사1-03-01]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          자연환경이 인간의 생활에 미치는 영향에 관한 과거와 현재의 사례를
          조사하여 분석하고, 안전하고 쾌적한 환경에서 살아가는 것이 시민의
          권리임을 주장한다.
        </blockquote>
        <p className="mt-3">
          이 문항은 특히 자연환경이 생활에 미치는 영향을 분석하는 부분에
          연결됩니다. 환경권 주장까지 직접 묻는 문항은 아닙니다.
        </p>
        <a
          className={link}
          href="https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=103113&lev=0&m=020402"
          target="_blank"
          rel="noreferrer"
        >
          공식 예시문항 안내 · 성취기준 근거표 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          5. 기출과의 공통점, 학습의 우선순위
        </h4>
        <p className="mt-3">
          유사 기출 탭의 2022학년도 수능 세계지리 5번은 같은 기온·강수 편차
          정의를 사용합니다. 기존 기출은 12개월의 편차를 좌표평면에 나타내고,
          이번 문항은 1월·7월의 점과 막대를 제시합니다. 지표가 같아도 자료
          형식과 요구하는 판단은 다릅니다.
        </p>
        <p className="mt-3">
          두 문항의 구조적 유사성은 확인되지만 직접 차용 관계를 입증하는 것은
          아닙니다. 실제 학생 응답 자료 없이 ‘최고난도’로 확정하기보다는
          기준값·반구·생활 문화의 연결에서 오류가 나는지 점검하는 것이
          유용합니다.
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>범례와 양쪽 축의 단위 확인</li>
          <li>편차의 기준값과 부호 해석</li>
          <li>지도에서 반구와 위도 확인</li>
          <li>기온·강수의 계절 변화와 생활 모습 연결</li>
          <li>공통 진술은 두 지역을 각각 검증</li>
        </ol>
      </section>
    </div>
  );
}

export function QuestionFiveRelated() {
  const src =
    '/problems/Integrated_Social_Studies/28examples/Similar_Questions/5/221124-1.png';
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">같은 편차 지표를 사용한 유사 기출</h3>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2022학년도 대학수학능력시험 · 세계지리 5번
        </h4>
        <p className="mt-2">2021년 11월 18일 시행 · 한국교육과정평가원</p>
        <div
          data-similarity-reason
          className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
        >
          <p className="font-bold text-emerald-900 dark:text-emerald-200">
            유사 이유 · 공식 5번과의 연결
          </p>
          <p className="mt-2">
            공식 5번과 월 기온 편차·월 강수 편차의 정의가 같습니다. 편차의
            부호와 계절 변화를 지도 속 지역에 연결하되, 이 기출은 월별 좌표
            전체와 해발 고도를 함께 읽어 기후를 구별합니다.
          </p>
        </div>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block bg-white p-2"
          aria-label="세계지리 유사 기출 원문 크게 보기"
        >
          <Image
            src={src}
            width={2812}
            height={2382}
            unoptimized
            sizes="(max-width: 768px) 100vw, 650px"
            className="h-auto w-full"
            alt="월 기온 편차와 월 강수 편차의 좌표 그래프를 아프리카 A·B·C 지점과 연결하는 문제"
          />
        </a>
        <details className="mt-4 rounded-xl border border-emerald-200 p-4 dark:border-emerald-800">
          <summary className="cursor-pointer font-bold">정답·풀이 보기</summary>
          <p className="mt-3 font-bold">
            SN 풀이 · 정답 ④ · (가) B, (나) C, (다) A
          </p>
          <p className="mt-3">
            (가)는 기온 편차의 폭이 작고 강수의 계절 차이가 큽니다. 저위도의
            고산 지역 B에 해당합니다. 작은 기온 편차만으로 연중 고온이라고
            판단하지 않도록 해발 고도 2,354m를 함께 확인합니다.
          </p>
          <p className="mt-3">
            (나)는 기온 편차가 음수인 시기에 강수 편차가 양수이고, 따뜻한 시기에
            강수가 적습니다. 겨울에 비가 많은 남아프리카 남서단의 지중해성 기후
            지역 C입니다.
          </p>
          <p className="mt-3">
            (다)는 기온 편차의 폭이 크고 강수 편차가 연중 0에 가깝습니다. 지도
            후보 중 건조한 이집트의 A에 해당합니다. 강수 편차가 작다는
            사실만으로 강수량 자체가 적다고 단정할 수는 없으며, 지역의 기후
            지식을 함께 적용해야 합니다.
          </p>
        </details>
      </section>
      <p className="text-xs text-gray-500">
        출처 표기는 제공된 정보에 따르며, 해설은 원문 이미지에 근거한 SN
        풀이입니다. 동일한 지표를 활용하는 연습 문항으로 연결했습니다.
      </p>
    </div>
  );
}
