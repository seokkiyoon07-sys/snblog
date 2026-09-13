import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionTwentyTwoSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ③ · ㄱ, ㄴ</h3>
        <section className={card}>
          <h4 className="font-bold">판의 배치와 속도 비교</h4>
          <p>
            서쪽부터 A–B–C가 놓여 있습니다. 세 판 모두 동쪽으로 이동하지만 B가
            가장 빠릅니다. A의 동쪽에 있는 B가 더 빠르게 이동하므로 A와 B 사이
            거리는 증가합니다. 따라서 ㉠은 발산형 경계인 해령입니다.
          </p>
          <p>
            B는 C의 서쪽에서 C보다 빠르게 동쪽으로 이동하므로 두 판 사이 거리는
            감소합니다. ㉡은 수렴형 경계이며 해양판 B가 대륙판 C 아래로
            섭입합니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">선지별 판단</h4>
          <p>
            <strong>ㄱ · 맞음.</strong> 발산형 경계 ㉠ 하부에는 상승하는 맨틀
            물질이 존재합니다.
          </p>
          <p>
            <strong>ㄴ · 맞음.</strong> 동쪽을 양의 방향으로 두면 B에 대한 C의
            속도는 vC−vB로 음수입니다. 따라서 B 기준으로 C는 서쪽으로
            이동합니다. 지구 기준으로 C가 동쪽으로 이동한다는 사실과 모순되지
            않습니다.
          </p>
          <p>
            <strong>ㄷ · 틀림.</strong> B는 섭입하는 해양판이므로 B에 호상
            열도가 형성된다는 설명은 틀립니다. 이 해양판–대륙판 수렴에서는 상부
            판 C 쪽에 대륙 화산호가 발달할 수 있습니다. 이를 ‘C에 호상 열도가
            형성된다’로 바꾸지는 않습니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionTwentyTwoAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 같은 이동 방향, 다른 경계
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 방향·위치·속도 크기를 함께 읽기</h4>
        <p>
          A–B에서는 동쪽 판 B가 더 빨라 거리가 벌어지고, B–C에서는 서쪽 판 B가
          더 빨라 거리가 좁아집니다. 화살표 방향만으로 판단하지 않고 길이와 판의
          배치를 함께 읽습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 관찰 기준 바꾸기</h4>
        <p>
          ‘B에 대한 C’는 C의 속도에서 B의 속도를 빼라는 의미입니다. 지구 기준
          이동 방향과 상대 이동 방향을 구분하는 것이 ㄴ의 핵심입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 경계에서 지형으로 연결</h4>
        <p>
          수렴을 찾은 뒤에도 해양판 B와 대륙판 C의 역할을 구분해야 합니다.
          섭입하는 판과 상부 판을 구별하고, 대륙 화산호와 호상 열도라는 지형
          이름도 구별합니다.
        </p>
      </section>
      <p>변형문제는 SNargen에서 제작합니다.</p>
    </div>
  );
}
const related = [
  {
    id: '300903-1',
    width: 1993,
    height: 1383,
    source: '2013학년도 10월 고3 학력평가 · 지구과학Ⅱ · 3번 (제공 원고 기준)',
    title: '해령·해구 지도와 판 경계',
    status: '부분 직접 연결 · 발산과 수렴 식별',
    connection:
      '발산·수렴이 함께 있는 배치를 해석한다는 점이 연결됩니다. 원본은 단면 자체가 아니라 지도이며 X–Y 단면에 나타날 경계를 묻습니다. 상대 속도는 묻지 않습니다.',
    answer: '② · ㄷ',
    solution:
      'A의 판은 해령에서 멀어지는 북서쪽으로 이동하므로 ㄱ은 틀립니다. A에서 해령 B로 갈수록 해양 지각의 나이는 감소하므로 ㄴ은 틀립니다. X–Y는 해령과 해구를 모두 지나므로 ㄷ은 옳습니다.',
  },
  {
    id: '177521-1',
    width: 2830,
    height: 5029,
    source: '2023학년도 6월 고2 학력평가 · 지구과학Ⅰ · 16번 (제공 원고 기준)',
    title: '섭입 경계 비율과 판 이동 속도',
    status: '보충 학습 · 표와 산점도',
    connection:
      '판의 이동 속도라는 물리량과 표·그래프 읽기를 공유합니다. 그러나 기출은 각 판의 둘레 중 섭입형 경계가 차지하는 비율과 이동 속도의 관계를 비교합니다. 예시문항처럼 같은 방향으로 움직이는 두 판의 속도를 빼서 접근·분리를 판단하는 자료는 아닙니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      '오스트레일리아판은 7000/37000×100≈18.9%, 태평양판은 13700/48000×100≈28.5%이므로 ㄱ은 옳습니다. 인도판은 1400/17000×100≈8.2%로 점 a이므로 ㄴ은 옳습니다. 제시 자료에서 비율이 가장 큰 태평양판의 속도도 가장 크므로 ㄷ은 옳습니다.',
  },
  {
    id: '300489-1',
    width: 2855,
    height: 2606,
    source: '2010학년도 6월 고3 모의평가 · 지구과학Ⅱ · 9번 (제공 원고 기준)',
    title: '고지자기와 해저 확장 속도',
    status: '심화 보충 · 연령·거리·고지자기',
    connection:
      '해령과 판 이동을 다루지만 원문에 없는 고지자기 역전과 거리/시간 계산이 필요합니다. GPS 상대 속도 해석과 풀이 과정이 다릅니다.',
    answer: '① · ㄱ',
    solution:
      '해령 양쪽의 대칭적인 분포이므로 ㄱ은 옳습니다. 전체 80 km 중 한쪽 판의 이동 거리는 40 km이며, 400만 년으로 나누면 1 cm/년입니다. 2 cm/년이라는 ㄴ은 틀립니다. 지자기 역전의 시간 간격은 일정하지 않으므로 ㄷ도 틀립니다.',
  },
  {
    id: '300267-1',
    width: 2822,
    height: 1898,
    source: '2008학년도 7월 고3 학력평가 · 지구과학Ⅱ · 7번 (제공 원고 기준)',
    title: '해저 확장과 과거 지자기 기록',
    status: '심화 학습 · 고지자기와 해저 확장',
    connection:
      '해령에서 해양판이 멀어진다는 개념은 연결되지만 고지자기 극성과 연령·축척 판독이 추가됩니다. 맨틀 상승이나 상대 속도를 직접 묻지는 않습니다. 두 PNG는 같은 문항의 자료와 선택지입니다.',
    answer: '③ · ㄱ, ㄷ',
    solution:
      '한쪽 판이 약 400 km 이동하는 데 약 400만 년이 걸리므로 평균 속도는 약 10 cm/년입니다. ㄱ은 옳습니다. P는 역전기에 해당하는 띠이므로 형성 당시 정상기였다는 ㄴ은 틀립니다. 줄무늬의 대칭은 해저 확장설의 증거이므로 ㄷ은 옳습니다.',
  },
];

export function ScienceQuestionTwentyTwoRelated() {
  const intro =
    '4문항의 PNG 5장을 모두 연결했습니다. 경계 식별에 부분 직접 연결 1개, 표·그래프 보충 1개, 고지자기 심화 보충 2개입니다. 같은 방향으로 움직이는 판의 상대 속도로 경계를 추론하는 기출은 없습니다. 시험 정보는 제공 원고 기준입니다.';
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>{intro}</p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/22/' +
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
            {item.id === '300267-1' && (
              <div className="mt-4">
                <a
                  href="/problems/Integrated_science_Studies/SImilar_questions/22/300267-2.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/problems/Integrated_science_Studies/SImilar_questions/22/300267-2.png"
                    width={2767}
                    height={1010}
                    alt="해저 확장과 과거 지자기 기록 보기·선택지"
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="h-auto w-full rounded-xl bg-white"
                  />
                </a>
                <a
                  href="/problems/Integrated_science_Studies/SImilar_questions/22/300267-2.png"
                  download="300267-2.png"
                  className="underline"
                >
                  보기·선택지 PNG 다운로드
                </a>
              </div>
            )}
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
