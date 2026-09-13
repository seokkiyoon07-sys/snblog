import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionEighteenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ② · ㄷ</h3>
        <p>
          힘의 크기–시간 그래프 아래 면적은 충돌 중 받은 충격량의 크기입니다.
          원문에서 세 면적이 같다고 명시했으므로 A·B·C의 충격량은 같습니다. 충돌
          후 정지한다는 조건을 추가하지 않아도 이 비교가 가능합니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">ㄱ · 틀림: 충격량 ÷ 충돌 시간은 평균 힘</h4>
          <p>
            평균 힘의 크기 = 충격량의 크기 ÷ 충돌 시간입니다. 충돌 시간은 A &lt;
            B &lt; C이므로 평균 힘은 A &gt; B &gt; C입니다. 가장 작은 것은 A가
            아니라 C입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">
            ㄴ · 틀림: 힘의 최대와 운동량의 최대는 다름
          </h4>
          <p>
            t₁은 B의 힘이 최대인 순간입니다. 벽이 마네킹의 진행 방향과 반대로
            힘을 가하는 동안 운동량은 충돌 전 값에서 변합니다. 따라서 그래프의
            봉우리를 운동량의 최대라고 읽을 수 없습니다. 충돌 초기에는 이미 진행
            방향의 운동량이 줄어들고 있으며, 힘이 최대라는 것은 운동량이 변하는
            순간적인 빠르기가 가장 크다는 뜻입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">
            ㄷ · 맞음: 같은 충격량을 더 긴 시간에 전달
          </h4>
          <p>
            C는 A보다 충돌 시간이 길어 평균 힘이 작습니다. 또한 제시된
            그래프에서 C의 최대 힘도 A보다 작습니다. 이 실험의 힘 비교 기준에서
            C가 머리에 가해지는 충격을 줄이는 데 더 효과적입니다. 여기서
            줄어드는 것은 힘의 크기이며, 주어진 충격량 자체는 같습니다.
          </p>
        </section>
        <p>
          같은 충격량에서 시간이 길어지면 평균 힘은 작아집니다. 최대 힘까지
          반드시 작아진다는 일반 법칙은 아니며, 이 문항에서는 실제 곡선의 높이로
          확인합니다.
        </p>
      </div>
    </details>
  );
}
export function ScienceQuestionEighteenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 면적·높이·시간 폭의 의미 구분
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 면적은 충격량, 높이는 순간 힘</h4>
        <p>
          그래프가 높다고 충격량이 반드시 큰 것은 아닙니다. 충격량은 면적 전체로
          판단합니다. 원문은 면적이 같다는 조건을 주어 곡선 모양의 인상에 의존할
          필요가 없게 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 비율을 물리량으로 해석</h4>
        <p>
          ㄱ의 분수식은 평균 힘입니다. 면적이 같은 경우 시간 폭이 넓을수록 평균
          힘이 작다는 관계로 바꾸면 A·B·C를 비교할 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 운동량과 운동량 변화율 구분</h4>
        <p>
          t₁의 높이는 힘을 나타냅니다. 운동량의 변화는 그 시점까지 누적된
          충격량과 힘의 방향을 함께 보아야 합니다. 힘이 최대인 시점을 운동량의
          최대 시점으로 바꾸는 것이 ㄴ의 오류입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">4. 일상어 ‘충격’과 충격량 구분</h4>
        <p>
          안전장치가 충격을 줄인다는 말은 이 문제에서 몸에 작용하는 힘을
          줄인다는 뜻입니다. 평균 힘과 충격량을 같은 물리량으로 취급하면 안
          됩니다.
        </p>
      </section>
      <p>
        위 내용은 원문에 대한 SN의 해석입니다. 변형문제는 SNargen에서
        제작합니다.
      </p>
    </div>
  );
}
const related = [
  {
    id: '177612-1',
    width: 3168,
    height: 3652,
    source:
      '2023학년도 6월 고3 평가원 모의평가 · 물리학Ⅰ · 7번 (제공 원고 기준)',
    title: '반발하는 물체의 충격량과 평균 힘',
    status: '부분 직접 연결 · 면적과 평균 힘 / 반발 계산 추가',
    connection:
      '면적을 충격량으로 읽고 충돌 시간으로 나누는 판단이 예시문항 ㄱ과 직접 연결됩니다. 다만 질량과 반발 속도가 달라 충격량은 같지 않으며, 속도의 방향을 반영한 운동량 변화 계산이 추가됩니다.',
    answer: '④ · ㄱ, ㄷ',
    solution:
      'A는 질량 2m, 충돌 전후 속력 v₀이며 방향이 반대여서 충격량 크기는 4mv₀입니다. B는 질량 m, 반발 속력 v₀/2이므로 충격량은 3mv₀/2입니다. 따라서 ㄱ은 옳고 ㄴ은 틀립니다. 평균 힘의 비는 (4mv₀/t₀) ÷ ((3mv₀/2)/(3t₀)) = 8이므로 ㄷ은 옳습니다.',
  },
  {
    id: '177069-1',
    width: 2989,
    height: 3335,
    source: '2023학년도 3월 고2 학력평가 · 물리학Ⅰ · 14번 (제공 원고 기준)',
    title: '차체 변형과 에어백의 보호 원리',
    status: '부분 직접 연결 · 같은 충격량에서 시간 늘리기',
    connection:
      '같은 충격량에서 충돌 시간을 늘려 평균 힘을 줄이는 원리가 예시문항 ㄱ·ㄷ과 직접 연결됩니다. 수치 그래프와 t₁의 운동량 판단은 없습니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      '충격량은 운동량 변화량과 같으므로 ㄱ은 옳습니다. 에어백도 힘을 받는 시간을 늘려 평균 힘을 줄이므로 ㄴ은 옳습니다. ㉢은 증가가 아니라 감소이므로 ㄷ은 틀립니다.',
  },
  {
    id: '169761-1',
    width: 2863,
    height: 4311,
    source: '추가 제공 PNG · 시험 정보 미확인 · 이미지 문항 번호 6',
    title: '스펀지 유무에 따른 힘–시간 그래프',
    status: '부분 직접 연결 · 면적·시간·완충 비교',
    connection:
      '힘 센서와 완충재, 그래프 면적 및 평균 힘을 비교하는 구조가 가깝습니다. 그러나 이 기출은 S(가) > S(나)를 명시하므로 예시문항의 같은 면적 조건을 그대로 적용하면 안 됩니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      '그래프 면적은 충격량이며 운동량 변화량의 크기와 같아 ㄱ은 옳습니다. 면적이 (가)에서 더 크므로 충격량도 더 커 ㄴ은 옳습니다. (가)는 충격량이 더 크고 충돌 시간은 더 짧으므로 평균 힘도 더 커 ㄷ은 옳습니다.',
  },
  {
    id: '175785-1',
    width: 2833,
    height: 3940,
    source: '추가 제공 PNG · 시험 정보 미확인 · 이미지 문항 번호 5',
    title: '야구공의 충격량 비와 평균 힘 비',
    status: '부분 직접 연결 · 면적 비를 시간 비로 나누기',
    connection:
      '평균 힘을 충격량/시간으로 비교하는 구조가 직접 대응합니다. 원문은 충격량이 같지만 기출은 B의 면적이 A의 2배, 시간이 3배인 정량 비교입니다. 안전장치의 효과는 묻지 않습니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      '충격량은 면적에 비례하므로 B가 A의 2배이며 ㄱ은 틀립니다. 운동량 변화량의 크기도 2배라 ㄴ은 옳습니다. 평균 힘의 비 B/A = 2/3이므로 ㄷ은 옳습니다.',
  },
];
export function ScienceQuestionEighteenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        폴더의 4개 모두 충격량·평균 힘 또는 완충 원리에 직접 연결됩니다. 그래프
        기출 3개는 원문과 달리 면적이 서로 같지 않습니다. t₁에서 힘과 운동량의
        최대를 혼동하는 선지에 직접 대응하는 자료는 없습니다. 시험 정보는 제공
        원고 기준이며 추가 PNG 2개는 미확인입니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/18/' +
          item.id +
          '.png';
        return (
          <section key={item.id} className={card}>
            <p className="text-xs">{item.source}</p>
            <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
            <ScienceSimilarityComment
              status={item.status}
              connection={item.connection}
            />
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={item.title + ' 원문 크게 보기'}
            >
              <Image
                src={src}
                width={item.width}
                height={item.height}
                alt={item.title}
                sizes="(max-width: 768px) 100vw, 800px"
                className="h-auto w-full rounded-xl bg-white"
              />
            </a>
            <a
              href={src}
              download={item.id + '.png'}
              className="mt-3 inline-block underline"
            >
              문제 PNG 다운로드
            </a>
            <details className="mt-4">
              <summary className="cursor-pointer font-bold">
                SN 풀이 보기
              </summary>
              <p className="mt-3 font-bold">정답 {item.answer}</p>
              <p>{item.solution}</p>
            </details>
          </section>
        );
      })}
    </div>
  );
}
