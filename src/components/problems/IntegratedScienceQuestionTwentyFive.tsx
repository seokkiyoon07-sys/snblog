import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionTwentyFiveSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ② · ㄴ</h3>
        <section className={card}>
          <h4 className="font-bold">1. 깊이 축과 해역 식별</h4>
          <p>
            세로축은 아래로 갈수록 깊이가 커집니다. 대체로 얕은 실선 ㉠은
            동태평양, 깊은 점선 ㉡은 서태평양입니다. 평상시 무역풍은 따뜻한 표층
            해수를 서쪽으로 이동시켜 동서 간 수온 약층 깊이 차이를 만듭니다.
          </p>
          <p>
            A에서는 동태평양의 20℃ 등수온선이 깊어지고 서태평양에서는 얕아져 두
            해역의 깊이 차이가 작습니다. A가 엘니뇨 시기입니다. B는 동쪽이 얕고
            서쪽이 깊어 차이가 큰, 라니냐의 전형적인 분포를 보입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">2. 선지별 판단</h4>
          <p>
            <strong>ㄱ · 틀림.</strong> ㉡은 동태평양이 아니라 서태평양입니다.
          </p>
          <p>
            <strong>ㄴ · 맞음.</strong> 엘니뇨 A에는 동태평양 ㉠의 표층 수온이
            높아지고 대류·강수가 증가하는 경향을 보입니다. 이 문항에서 강수량
            편차는 양의 값입니다.
          </p>
          <p>
            <strong>ㄷ · 틀림.</strong> 서태평양 해수면 높이 편차에서 동태평양
            편차를 빼야 합니다. 엘니뇨에는 서쪽 해수면이 평년보다 낮아지고
            동쪽은 높아져 이 값이 작아집니다. 라니냐에는 반대로 커지므로 A의
            값이 B보다 작습니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">편차의 부호를 따로 기록하기</h4>
          <p>A: 서쪽 편차 (−) − 동쪽 편차 (+) → 음수.</p>
          <p>B의 라니냐 분포: 서쪽 편차 (+) − 동쪽 편차 (−) → 양수.</p>
          <p>
            이는 엘니뇨·라니냐의 전형적인 해수면 반응으로 판단한 것입니다. 제시
            그래프의 깊이 값을 해수면 높이 값으로 직접 대입하는 계산은 아닙니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionTwentyFiveAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 깊이에서 대기 반응과 편차 비교로
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 그래프 위쪽이 더 깊은 것은 아님</h4>
        <p>
          깊이 축의 0 m는 위쪽입니다. 실선이 위로 올라가는 B에서는 동태평양의
          등수온선이 얕아집니다. 곡선의 높이와 물리량의 크기를 구분합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 지표와 정의 구분</h4>
        <p>
          20℃ 등수온선은 수온이 20℃가 되는 깊이이며, 열대 태평양에서 수온 약층의
          깊이 변화를 파악하는 지표로 사용됩니다. 수온이 거의 균일한 혼합층의
          두께나 수온 약층 시작 깊이와 정의가 같지는 않습니다. 서로 연결되는
          변화 경향을 이용하되 동일한 값으로 취급하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 편차의 기준과 뺄셈 순서</h4>
        <p>
          편차는 관측값−평년값입니다. 원문의 식은 ‘서쪽 편차−동쪽 편차’입니다.
          이는 관측 동서 높이 차에서 평년 동서 높이 차를 뺀 값이므로, 같은 평년
          기준으로 A와 B를 비교하면 동서 높이 차가 더 작은 A의 값이 작습니다.
        </p>
        <p>
          원문 그래프는 깊이의 관측값이고 평년선은 없습니다. 정확한 깊이 편차를
          숫자로 계산했다고 설명하지 않습니다.
        </p>
      </section>
      <p>변형문제는 SNargen에서 제작합니다.</p>
    </div>
  );
}
const related = [
  {
    id: '369896-1',
    width: 2763,
    height: 2739,
    source: '2026학년도 9월 고3 모의평가 · 지구과학Ⅰ · 11번 (제공 원고 기준)',
    title: '등수온선 깊이 편차와 강수량 편차의 차',
    status: '직접 연결 · 깊이 지표와 편차 연산',
    connection:
      '20℃ 등수온선과 동서 편차의 차를 묻는 판단이 매우 가깝습니다. 원문은 해수면 높이의 서−동, 기출은 강수량의 동−서로 물리량과 뺄셈 순서가 다릅니다.',
    answer: '① · ㄱ',
    solution:
      '(가)는 서쪽 깊이 편차가 양, 동쪽이 음인 라니냐이고 (나)는 엘니뇨입니다. (가)의 동쪽 표층 수온 편차는 음이므로 ㄱ은 옳습니다. 동쪽/서쪽 해면 기압 비는 라니냐 (가)가 더 크므로 ㄴ은 틀립니다. 동쪽 강수량 편차−서쪽 강수량 편차는 (가)가 더 작으므로 ㄷ도 틀립니다.',
  },
  {
    id: '301411-1',
    width: 2717,
    height: 2686,
    source:
      '2018학년도 수능(2017년 11월 시행) · 지구과학Ⅱ · 11번 (제공 원고 기준)',
    title: '수온 약층 시작 깊이와 엘니뇨',
    status: '직접 연결 · 관련 깊이 지표 / 변수 차이',
    connection:
      '동쪽의 수온 약층이 깊어지는 현상으로 엘니뇨를 찾는 과정이 연결됩니다. 이 기출은 수온 약층 시작 깊이를 명시합니다. 이를 근거로 예시문항의 20℃ 등수온선 깊이와 혼합층 두께가 같은 정의라고 설명하지 않습니다.',
    answer: '④ · ㄱ, ㄴ',
    solution:
      '동태평양에서 수온 약층 시작 깊이 편차가 양이고 서쪽은 음이므로 엘니뇨입니다. ㄱ은 옳습니다. 이 기출의 층 구조 해석에서 동쪽 수온 약층 시작이 깊어져 혼합층 두께가 증가하므로 ㄴ은 옳습니다. 동쪽 표층 수온은 높아지므로 ㄷ은 틀립니다.',
  },
  {
    id: '180649-1',
    width: 2814,
    height: 2765,
    source: '2025학년도 3월 고3 학력평가 · 지구과학Ⅰ · 19번 (제공 원고 기준)',
    title: '시간·경도별 등수온선 깊이 편차',
    status: '직접 연결 · 시기 판별과 해면 기압',
    connection:
      '같은 20℃ 깊이 지표로 두 시기를 판별합니다. 원문과 달리 편차의 등치선이며 세로축은 시간입니다. 이 기출의 A는 라니냐로 예시문항의 A와 반대입니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      'A는 서쪽 깊이 편차가 양이고 동쪽이 음인 라니냐, B는 엘니뇨이므로 ㄱ은 틀립니다. 동쪽 수온 약층은 A가 B보다 얕으므로 ㄴ은 옳습니다. 동쪽/서쪽 해면 기압 비는 라니냐 A가 더 크므로 ㄷ도 옳습니다.',
  },
  {
    id: '167519-1',
    width: 2807,
    height: 3164,
    source:
      '2018학년도 수능(2017년 11월 시행) · 지구과학Ⅰ · 14번 (제공 원고 기준)',
    title: '강수량 편차와 동서 해수면 높이 차',
    status: '직접 연결 · 강수와 해수면 경사',
    connection:
      '라니냐에서 동서 해수면 높이 차가 커진다는 판단이 예시문항 ㄷ에 직접 연결됩니다. 예시문항의 깊이 시계열 대신 강수량 편차 지도를 주고, 두 편차를 빼는 계산은 직접 묻지 않습니다.',
    answer: '⑤ · ㄴ, ㄷ',
    solution:
      '서태평양에서 강수량 편차가 양이고 중·동태평양 적도 부근에서 음인 라니냐입니다. 양의 강수량 편차가 주로 동쪽에 있다는 ㄱ은 틀립니다. 강화된 무역풍으로 동서 해수면 높이 차가 커지고 남적도 해류가 강해지므로 ㄴ과 ㄷ은 옳습니다.',
  },
];

export function ScienceQuestionTwentyFiveRelated() {
  const intro =
    '기출 PNG 4개를 모두 연결했습니다. 깊이 지표를 통한 시기 판별과 대기·해수면 반응에 직접 연결됩니다. 각 자료의 관측값/편차, 축, 기호, 뺄셈 순서를 구분해 읽어야 합니다. 시험 정보는 제공 원고 기준입니다.';
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>{intro}</p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/25/' +
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
