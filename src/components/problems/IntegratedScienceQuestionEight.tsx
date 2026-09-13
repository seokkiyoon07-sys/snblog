import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';

const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';

export function ScienceQuestionEightSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ④ · ㄴ, ㄷ</h3>
        <p>
          그림의 세 형태는 서로 다른 종이 아니라 모두 큰가시고기 종 A의
          표현형입니다. 같은 종 안의 변이를 구분하고, 환경별 빈도를 생존에
          유리한 형질이라는 제시문의 조건과 연결합니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={card}>
            <h4 className="font-bold">(가) 같은 종 안의 표현형 차이</h4>
            <p className="mt-2">
              ㉠·㉡·㉢은 외피 조각의 분포가 서로 다릅니다. 이 문항은 같은 종 내
              유전적 변이에 따른 다양성을 다루며, 생태계의 종류가 다양한 상황과
              구분합니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">(나) 환경별 빈도 비교</h4>
            <p className="mt-2">
              해수에서는 ㉠의 빈도가 높고 ㉢의 빈도는 매우 낮습니다. 담수에서는
              ㉡·㉢의 빈도가 높습니다. 높이가 작은 막대도 있으므로 ‘낮다’를
              ‘전혀 없다’로 읽지 않습니다.
            </p>
          </div>
        </div>
        <section className={card}>
          <h4 className={heading}>선지별 판단</h4>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>ㄱ · 틀림.</strong> 같은 종 A 안에서 외피 조각 표현형이
              다르게 나타나는 것은 이 문항에서 유전적 다양성의 사례입니다. 여러
              생태계의 다양성을 뜻하는 생태계 다양성이 아닙니다.
            </li>
            <li>
              <strong>ㄴ · 맞음.</strong> 제시문은 외피 조각 표현형이
              포식자로부터 생존하는 데 유리하다는 조건을 줍니다. 이를 해수에서
              ㉠의 빈도가 ㉢보다 높다는 결과와 함께 읽으면, 해수에서는 ㉠을 가진
              개체가 생존에 더 유리하다고 해석할 수 있습니다.
            </li>
            <li>
              <strong>ㄷ · 맞음.</strong> 자손에게 전달되는 유전적 변이는 자연
              선택이 작용할 수 있는 바탕입니다. 환경에 따라 생존과 번식에 유리한
              형질을 가진 개체가 더 많은 자손을 남기면, 세대를 거치며 집단의
              유전적 구성이 달라질 수 있습니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          같은 종의 변이 → 환경에 따른 생존·번식의 차이 → 세대에 걸친 집단의
          변화
        </p>
      </div>
    </details>
  );
}

export function ScienceQuestionEightAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>
          다양성의 범주와 자연 선택의 설명을 연결하기
        </h3>
        <p className="mt-3">
          표현형이 다르다는 사실, 환경별 빈도가 다르다는 결과, 자손에게 전달되는
          변이라는 조건을 각각 구분해 읽습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 무엇이 다양한가? · ㄱ</h4>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
            <p className="font-bold">유전적 다양성</p>
            <p className="mt-2">같은 종 안에서 나타나는 유전적 차이</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
            <p className="font-bold">종 다양성</p>
            <p className="mt-2">한 지역의 종의 수와 상대적 분포</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
            <p className="font-bold">생태계 다양성</p>
            <p className="mt-2">여러 종류의 생태계가 존재하는 정도</p>
          </div>
        </div>
        <p className="mt-3">
          ㉠·㉡·㉢ 모두 ‘종 A’라는 단서가 범주를 결정합니다. 자료에 해수와
          담수가 함께 등장하더라도 ㄱ은 (가)의 개체별 표현형 차이를 묻고
          있습니다.
        </p>
        <p className="mt-3">
          일반적으로 표현형 차이는 환경의 영향으로도 생길 수 있습니다. 모든
          겉모습의 차이를 곧바로 유전적 차이라고 단정하지 않고, 이 문항의 유전적
          변이와 자연 선택 맥락에서 해석합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>2. 빈도만 보지 않고 제시 조건까지 읽기 · ㄴ</h4>
        <p className="mt-3">
          그래프는 해수에서 ㉠이 ㉢보다 흔하다는 결과를 보여 줍니다. 여기에
          포식자로부터의 생존에 유리한 표현형이라는 제시 조건을 연결하여 자연
          선택의 관점으로 판단합니다.
        </p>
        <p className="mt-3">
          현실의 집단에서 빈도가 높다는 사실 하나만으로 생존상의 이점이나 자연
          선택을 증명할 수는 없습니다. 이 문항에서도 막대 높이만이 아니라
          제시문의 조건과 함께 읽는 것이 중요합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>3. 개체의 노력과 집단의 진화를 구분 · ㄷ</h4>
        <p className="mt-3">
          자연 선택은 생존을 위해 개체가 의도적으로 필요한 형질을 만들어 내는
          과정이 아닙니다. 유전되는 변이가 있는 집단에서 환경에 따른 생존·번식의
          차이가 누적되는 과정입니다.
        </p>
        <p className="mt-3">
          ‘담수에서 특정 표현형의 빈도가 높다’는 결과와 ‘개체들이 노력해서
          외피를 줄이고 그 형질을 물려주었다’는 설명은 구분해야 합니다. 원문의
          ㄷ도 모든 변화가 아니라 ‘자손에게 전달되는 변이’를 조건으로
          제시합니다.
        </p>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          위 내용은 원문에 대한 SN의 해석이며, 배점만으로 실제 변별력이나
          평가원의 공식 출제 의도를 단정하지 않습니다.
        </p>
      </section>
    </div>
  );
}

const related = [
  {
    id: '175062-1',
    width: 2802,
    height: 2561,
    source: '2022학년도 3월 고2 교육청 · 생명과학Ⅰ · 7번 (제공 원고 기준)',
    title: '같은 종의 줄무늬 차이는 어떤 다양성일까?',
    status: '부분 직접 연결 · 유전적 다양성의 범주',
    connection:
      '기출 ㄱ은 같은 종의 얼룩말 줄무늬 차이를 종 다양성으로 잘못 분류합니다. 예시문항 ㄱ은 같은 종의 표현형 차이를 생태계 다양성으로 잘못 분류하므로, 틀리게 붙인 범주는 달라도 유전적 다양성을 다른 층위와 혼동하는 판단 구조는 같습니다.',
    answer: null,
    solution:
      '제공 이미지에서는 A가 유전적 다양성, B가 생태계 다양성입니다. ㄱ은 유전적 다양성을 종 다양성이라고 했으므로 틀립니다. ㄴ은 유전적 다양성이 높을수록 환경 변화나 전염병으로 멸종될 가능성이 높다고 했으므로 틀립니다. ㄷ만 옳지만 선택지에 ‘ㄷ만’이 없어 정답 번호를 확정할 수 없습니다. 제공 PNG의 선지 또는 선택지를 원본과 대조해야 합니다.',
  },
  {
    id: '163382-1',
    width: 2707,
    height: 1180,
    source: '2015학년도 수능 · 생명과학Ⅱ · 2번 (제공 원고 기준)',
    title: '유전되는 변이와 자연 선택에 따른 집단의 변화',
    status: '부분 직접 연결 · 진화 개념 연결',
    connection:
      '돌연변이가 변이의 원인이며 자연 선택이 집단의 유전자 빈도를 변화시킨다는 설명이 예시문항 ㄷ의 유전되는 변이와 진화에 직접 연결됩니다. 획득 형질 유전의 오답은 추가 개념 점검이며, 큰가시고기의 빈도 그래프를 읽는 문제 자체와 같지는 않습니다.',
    answer: '④ · ㄱ, ㄴ',
    solution:
      'ㄱ: 돌연변이는 개체 간 유전적 변이의 원인 중 하나입니다. ㄴ: 자연 선택은 집단 내 유전자 빈도를 변화시킬 수 있습니다. ㄷ: 현대 종합설은 개체가 후천적으로 획득한 형질의 유전으로 진화를 설명하지 않으므로 틀립니다.',
  },
];

export function ScienceQuestionEightRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <section className={card}>
        <h3 className={heading}>
          다양성의 구분과 진화에 연결되는 기출 자료 2개
        </h3>
        <p className="mt-3">
          각 자료의 실제 선지를 원문과 대조했습니다. 두 자료 모두 핵심 개념이
          직접 연결되지만, 얼룩말 자료는 제공된 PNG의 보기와 선택지가 맞지 않아
          원본 확인이 필요합니다. 시험명·학년도는 제공 원고 기준이며 이미지에는
          표시되어 있지 않습니다.
        </p>
      </section>
      {related.map(item => {
        const src = `/problems/Integrated_science_Studies/SImilar_questions/8/${item.id}.png`;
        return (
          <section key={item.id} className={card}>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.source}
            </p>
            <h4 className={`mt-2 ${heading}`}>{item.title}</h4>
            <ScienceSimilarityComment
              status={item.status}
              connection={item.connection}
            />
            {item.answer === null && (
              <p className="mb-4 rounded-xl bg-amber-50 p-4 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
                보기·선택지 불일치: 이 이미지로 정답 번호를 채점하지 마세요.
                아래 검토 내용을 확인해 주세요.
              </p>
            )}
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.title} 원문 크게 보기`}
              className="block rounded-xl bg-white p-3"
            >
              <Image
                src={src}
                width={item.width}
                height={item.height}
                alt={`연계 기출 ${item.id}: ${item.title}`}
                sizes="(max-width: 768px) 100vw, 800px"
                className="h-auto w-full"
              />
            </a>
            <a
              href={src}
              download={`${item.id}.png`}
              className="mt-3 inline-block font-semibold text-emerald-700 underline dark:text-emerald-300"
            >
              {item.answer === null
                ? '확인용 PNG 다운로드'
                : '문제 PNG 다운로드'}
            </a>
            <details className="mt-5 rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
              <summary className="cursor-pointer font-bold">
                {item.answer === null
                  ? '이미지 검토 내용 보기'
                  : 'SN 풀이 보기'}
              </summary>
              <p className="mt-3 font-bold">
                {item.answer === null
                  ? '정답 번호 확인 보류'
                  : `정답 ${item.answer}`}
              </p>
              <p className="mt-2">{item.solution}</p>
            </details>
          </section>
        );
      })}
    </div>
  );
}
