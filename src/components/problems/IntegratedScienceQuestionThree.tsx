const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';

export function ScienceQuestionThreeSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ⑤ · ㄱ, ㄴ, ㄷ</h3>
        <p>
          ㉠은 길이, ㉡은 질량, ㉢은 온도입니다. 같은 구리의 부피를 길이로
          계산한 값과 눈금실린더로 측정한 값으로 나누어 확인합니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className={card}>
            <h4 className="font-bold">(가) 길이로 구한 부피</h4>
            <p className="mt-2">
              정육면체의 한 변이 1 cm이므로
              <br />V = (1 cm)³ = 1 cm³
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">(나) 측정한 질량</h4>
            <p className="mt-2">
              전자저울로 측정한 구리의 질량은 9 g입니다. 부피와 함께 밀도를
              구하는 데 사용합니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">(다) 눈금 변화로 구한 부피</h4>
            <p className="mt-2">
              구리를 완전히 잠기게 넣었으므로
              <br />V = 11 mL − 10 mL = 1 mL
            </p>
          </div>
        </div>
        <section className={card}>
          <h4 className={heading}>선지별 판단</h4>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>ㄱ · 맞음.</strong> ㉢은 온도이며, SI에서는 열역학적
              온도를 기본량으로 정합니다. 기본 단위는 켈빈(K)입니다. 기본량에는
              길이·질량·시간·전류·열역학적 온도·물질량·광도의 일곱 가지가
              있습니다.
            </li>
            <li>
              <strong>ㄴ · 맞음.</strong> 밀도는 질량을 부피로 나눈
              물리량입니다. 부피는 길이의 세제곱으로 나타낼 수 있으므로 밀도는
              질량(㉡)과 길이(㉠)로부터 유도됩니다. 이 실험값으로 구한 밀도는 9
              g ÷ 1 cm³ = 9 g/cm³입니다.
            </li>
            <li>
              <strong>ㄷ · 맞음.</strong> 두 방법으로 구한 값은 같은 구리의
              부피입니다. 1 mL와 1 cm³가 같은 부피임을 자료에서 확인할 수
              있습니다. 눈금실린더의 최종 눈금인 11 mL 전체를 구리의 부피로
              읽으면 안 됩니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          길이 → 부피 → 밀도의 관계와, 최종 눈금이 아닌 눈금의 변화량을 함께
          읽으세요.
        </p>
      </div>
    </details>
  );
}

export function ScienceQuestionThreeAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>
          같은 부피를 두 방법으로 읽고, 밀도를 기본량까지 풀어내기
        </h3>
        <p className="mt-3">
          기본량의 분류, 유도량의 구성, 부피 단위의 관계를 하나의 실험으로
          연결합니다. 계산 자체보다 각 측정값이 무엇을 뜻하는지 구분하는 것이
          중요합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 단위 관계를 자료와 연결 · ㄷ</h4>
        <p className="mt-3">
          정육면체의 길이로 구한 1 cm³와 물의 눈금 증가량 1 mL를 같은 물체의
          부피로 대응시킵니다. 1 mL = 1 cm³라는 관계를 외우는 데서 나아가 실험
          장면 속에서 해석하는 과정입니다.
        </p>
        <p className="mt-3">
          단위의 정확한 관계 자체를 한 번의 실험으로 증명했다고 보기는
          어렵습니다. 실험은 이미 정의된 단위 관계를 측정값으로 확인하는
          상황이며, 실제 측정에는 오차가 있을 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>2. 유도량을 기본량까지 분해 · ㄴ</h4>
        <p className="mt-3 rounded-xl bg-gray-50 p-4 font-semibold dark:bg-gray-900">
          부피 = 길이³
          <br />
          밀도 = 질량 ÷ 부피 = 질량 ÷ 길이³
          <br />
          밀도의 SI 단위: kg/m³
        </p>
        <p className="mt-3">
          ‘밀도는 질량과 부피로 구한다’에서 멈추지 않고 부피가 길이에서 유도됨을
          한 단계 더 연결해야 합니다. 일상적으로 자주 쓰는 물리량이라고 해서
          기본량이 되는 것은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>3. 실험 조건은 왜 붙었을까?</h4>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>완전히 잠기도록:</strong> 구리 전체의 부피를 눈금 증가량과
            대응시키기 위한 조건입니다. 일부만 잠기면 잠긴 부분의 부피만
            반영됩니다.
          </li>
          <li>
            <strong>물과 구리의 온도가 같음:</strong> 온도 차로 인한 열교환과
            부피 변화의 영향을 줄여 부피를 비교하기 위한 조건입니다.
          </li>
          <li>
            <strong>처음과 나중의 눈금:</strong> 11 mL는 물과 구리를 넣은 뒤의
            눈금이고, 구리의 부피에 해당하는 값은 11 − 10 = 1 mL입니다.
          </li>
        </ul>
      </section>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        위 역분해는 SN의 해석이며 평가원의 공식 출제 의도나 실제 정답률 분석을
        뜻하지 않습니다. 변형문제는 SNargen에서 제작합니다.
      </p>
    </div>
  );
}

export function ScienceQuestionThreeRelated() {
  return (
    <div className={body}>
      <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 dark:border-amber-800 dark:bg-amber-950/20">
        <p className="text-xs font-bold text-amber-800 dark:text-amber-300">
          유사 기출 검색 안내
        </p>
        <h3 className={`mt-2 ${heading}`}>
          직접 대응하는 유사 기출은 아직 확인하지 못했습니다.
        </h3>
        <p className="mt-3">
          제공된 SN RAG 검색 보고에 따르면 ‘기본량·유도량·길이·질량·온도·밀도’를
          중심으로 검색했으나, 기본량과 유도량의 구분 및 부피 단위 환산을 이
          문항처럼 직접 묻는 최근 기출은 찾지 못했습니다.
        </p>
        <p className="mt-3">
          보고된 검색 결과에는 기체의 밀도와 온도 관계 등을 다루는 계산 문항이
          있었지만, 이 문항의 핵심인 물리량 분류와 단위 관계에 직접 대응하는
          자료로 선정되지는 않았습니다. 이는 해당 검색에서의 미확인 결과이며,
          유사 기출이 전혀 없다는 뜻은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>이 문항에서 이어갈 학습</h4>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>길이·질량·온도와 부피·밀도를 기본량과 유도량으로 구분하기</li>
          <li>정육면체의 부피와 눈금실린더의 변화량을 같은 부피로 연결하기</li>
          <li>질량이 일정할 때 부피 변화로 밀도의 증가·감소 판단하기</li>
        </ul>
        <p className="mt-4">
          SNargen에서 제작한 연계 변형문제는 추후 등록할 예정입니다.
        </p>
      </section>
    </div>
  );
}
