import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';

export function ScienceQuestionTwentySolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ⑤</h3>
        <p className="rounded-xl bg-amber-50 p-4 text-amber-950">
          원문 그림과 정답표를 대조하여 제공 원고의 정답 ②를 ⑤로 바로잡았습니다.
          지구에서 B의 연속된 위치 사이 수평 간격은 1칸입니다. 출발점 A와 B
          사이의 2칸은 B의 이동 거리가 아닙니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">1. 수평 운동은 그대로</h4>
          <p>
            실험 과정을 동일하게 수행하므로 B의 초기 수평 속력 v₀와 기록 간격
            0.1초는 같습니다. 중력만 작용하는 운동에서 수평 속력은 일정하므로,
            행성이 바뀌어도 연속된 B의 위치 사이 수평 간격은 원문처럼 1칸이어야
            합니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">2. 같은 시간 동안 낙하한 거리는 감소</h4>
          <p>
            A와 B의 초기 연직 속력은 모두 0입니다. 중력 가속도가 작아지면 같은
            시간이 지났을 때 낙하 거리가 작아집니다. 두 구슬은 같은 연직 운동을
            하므로 같은 순서의 점은 같은 높이에 놓입니다.
          </p>
          <p>
            아래쪽을 양의 방향으로 두면 수평 변위는 x=v₀t, 연직 낙하 거리는
            y=½gt²입니다. g가 작아져도 x는 같고 y만 작아집니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">선택지별 판단</h4>
          <p>
            <strong>① · 틀림.</strong> 수평 간격과 연직 위치가 지구의 결과와
            같아 중력이 작아진 결과가 아닙니다.
          </p>
          <p>
            <strong>② · 틀림.</strong> 수평 간격이 2칸으로 커졌고 연직 위치도
            지구와 같습니다.
          </p>
          <p>
            <strong>③ · 틀림.</strong> 연직 낙하는 느려졌지만 수평 간격이 원문의
            1칸보다 작아졌습니다.
          </p>
          <p>
            <strong>④ · 틀림.</strong> 연직 낙하는 느려졌지만 수평 간격이 원문의
            1칸보다 커졌습니다.
          </p>
          <p>
            <strong>⑤ · 맞음.</strong> 수평 간격은 1칸으로 유지되고, 같은 시간
            동안 낙하한 거리는 작아집니다. A와 B의 같은 순서 위치도 같은 높이에
            있습니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionTwentyAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 고정된 수평 운동과 달라진 연직 운동
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 출발점 간 거리와 이동 간격 구분</h4>
        <p>
          A와 B는 서로 다른 위치에서 출발합니다. 수평 속력을 읽을 때는 A에서
          B까지가 아니라 B의 연속된 점 사이를 비교해야 합니다. 원문은 매
          0.1초마다 가로 1칸씩 이동합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 동일하게 수행하는 조건 찾기</h4>
        <p>
          발사 속력과 기록 시간 간격은 고정하고 중력의 크기만 바꿉니다. 수평
          간격이 일정하다는 것만으로 충분하지 않고, 그 간격이 지구에서의 값과
          같아야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 같은 시각끼리 비교</h4>
        <p>
          중력이 작은 경우 같은 높이까지 떨어지는 데 더 오래 걸려 점이 더 많이
          기록됩니다. 그림의 마지막 점끼리만 비교하지 말고 출발 후 첫 번째, 두
          번째처럼 같은 순서의 점을 비교합니다. 포물선의 모양을 수평·연직
          성분으로 나누면 두 조건을 함께 확인할 수 있습니다.
        </p>
      </section>
      <p>변형문제는 SNargen에서 제작합니다.</p>
    </div>
  );
}
const related = [
  {
    id: '168373-1',
    width: 2814,
    height: 2973,
    source: '2018학년도 6월 고1 학력평가 · 통합과학 · 18번 (제공 원고 기준)',
    title: '자유 낙하와 수평 투사의 위치 기록',
    status: '직접 연결 · 운동의 독립성과 가속도',
    connection:
      '동일한 실험과 일정 시간 간격의 위치 자료를 사용합니다. 다만 중력이 다른 행성의 결과를 예측하지는 않습니다.',
    answer: '③ · ㄱ, ㄷ',
    solution:
      '두 공에 작용하는 알짜힘은 연직 아래 방향의 중력이므로 ㄱ은 옳습니다. 가속도는 두 공 모두 g로 같으므로 ㄴ은 틀립니다. B의 수평 속력은 일정하므로 ㄷ은 옳습니다.',
  },
  {
    id: '175266-1',
    width: 2886,
    height: 4411,
    source: '2022학년도 3월 고2 학력평가 · 물리학Ⅰ · 11번 (제공 원고 기준)',
    title: '0.1초 간격의 모눈종이 운동 분석',
    status: '직접 연결 · 수평 간격과 속력 환산',
    connection:
      '실험 장치·격자·0.1초 간격이 가까운 자료입니다. 실제 선지는 힘의 방향, 도달 시간, 수평 속력을 묻습니다. 중력 가속도를 직접 계산하라는 문항은 아닙니다.',
    answer: '① · ㄱ',
    solution:
      'B에 작용하는 힘은 연직 방향의 중력이므로 ㄱ은 옳습니다. A와 B는 연직 운동이 같아 동시에 도달하므로 ㄴ은 틀립니다. B는 0.1초마다 10 cm짜리 3칸, 즉 0.3 m를 이동하므로 수평 속력은 3 m/s입니다. 따라서 1 m/s라는 ㄷ은 틀립니다.',
  },
  {
    id: '178618-1',
    width: 2859,
    height: 2880,
    source: '2023학년도 12월 고1 학력평가 · 통합과학 · 13번 (제공 원고 기준)',
    title: '수평 도달 거리와 낙하 시간',
    status: '직접 연결 · 같은 연직 운동',
    connection:
      '수평 속력이 달라도 같은 높이에서 연직 초기 속력이 0이면 낙하 시간이 같다는 원리를 공유합니다. 격자 판독이나 행성의 중력 변화는 다루지 않습니다.',
    answer: '③ · ㄱ, ㄷ',
    solution:
      'A의 중력과 운동 방향은 모두 연직 아래이므로 ㄱ은 옳습니다. 세 물체의 연직 운동과 낙하 시간은 같으므로 ㄴ은 틀립니다. 같은 시간 동안 C가 더 멀리 수평 이동하므로 C의 수평 속력이 더 커서 ㄷ은 옳습니다.',
  },
  {
    id: '171956-1',
    width: 2898,
    height: 2783,
    source: '2020학년도 6월 고2 학력평가 · 물리학Ⅰ · 1번 (제공 원고 기준)',
    title: '다중 섬광 사진으로 운동 구분',
    status: '보충 학습 · 속력과 운동 방향',
    connection:
      '일정 시간 간격의 점으로 운동을 읽는 기초 자료입니다. 두 물체의 운동 독립성이나 중력 변화에 따른 위치 예측은 묻지 않습니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      '자유 낙하는 속력이 증가하므로 ㄱ은 틀립니다. 수평 투사는 속력과 운동 방향이 모두 변하므로 ㄴ은 옳습니다. 등속 원운동은 속력이 일정해도 운동 방향은 계속 변하므로 ㄷ은 옳습니다.',
  },
];
export function ScienceQuestionTwentyRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        PNG 4개를 모두 대조했습니다. 직접 연결 3개와 운동 구분 보충 1개입니다.
        중력이 다른 행성에서 같은 실험을 반복하는 조건까지 일치하는 기출은
        없습니다. 시험 정보는 제공 원고 기준입니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/20/' +
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
