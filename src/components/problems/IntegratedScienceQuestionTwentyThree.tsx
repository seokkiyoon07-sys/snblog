import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionTwentyThreeSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ① · ㄱ</h3>
        <section className={card}>
          <h4 className="font-bold">1. 코돈이 달라도 같은 아미노산</h4>
          <p>
            표에서 CAU와 CAC는 모두 △를, AAU와 AAC는 모두 □를 지정합니다. ㉡은
            CAU가 CAC로 바뀌었지만 해당 아미노산은 △로 같습니다. 제시된 변화만
            고려하는 이 문항에서는 ㉠과 같은 아미노산 서열의 카탈레이스이므로
            촉매 기능이 유지됩니다. 따라서 시험관 II의 ⓑ는 ‘발생함’입니다.
          </p>
          <p>
            ㉢과 ㉣은 해당 아미노산이 △에서 □로 바뀝니다. III·IV에서 기포가
            발생하지 않았다는 결과로 이 실험 조건에서 촉매 기능을 잃었음을
            판단합니다. 아미노산이 달라지는 모든 경우에 기능이 반드시 상실된다고
            일반화하지 않습니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">2. 과산화 수소 분해와 선지 판단</h4>
          <p>
            카탈레이스는 2H₂O₂ → 2H₂O + O₂ 반응을 촉진합니다. 관찰한 기포는
            산소이며 물도 생성됩니다.
          </p>
          <p>
            <strong>ㄱ · 맞음.</strong> 정상 카탈레이스를 넣은 I에서는 물과
            산소가 생성됩니다.
          </p>
          <p>
            <strong>ㄴ · 틀림.</strong> ㉡의 기능이 유지되므로 ⓑ는
            ‘발생함’입니다.
          </p>
          <p>
            <strong>ㄷ · 틀림.</strong> 돌연변이로 만들어진 카탈레이스가 촉매
            기능을 잃는다는 진술은 ㉡의 결과와 맞지 않습니다. 원문의 결론은
            가설이 옳다는 것이므로, 이 진술은 가설 ⓐ에 들어갈 수 없습니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionTwentyThreeAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 염기 변화와 기능 변화를 구분
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 코돈 표를 먼저 적용</h4>
        <p>
          ‘돌연변이’라는 말만으로 기능 상실을 판단하지 않습니다. 염기 변화 →
          지정 아미노산 → 효소 기능 → 기포 발생 순서로 연결합니다. 여러 코돈이
          하나의 아미노산을 지정할 수 있다는 성질이 핵심입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 예측값으로 가설 점검</h4>
        <p>
          II의 결과는 빈칸이므로 코돈 표로 먼저 ‘발생함’을 예측합니다. 그
          결과까지 포함하면 돌연변이가 생긴 모든 카탈레이스가 기능을 잃는다는
          진술은 반례 ㉡ 때문에 성립하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 관찰 범위를 넘는 결론 피하기</h4>
        <p>
          III·IV의 결과는 해당 아미노산 치환에서 기능이 상실되었음을 보여줍니다.
          단백질 입체 구조를 직접 측정한 자료는 아니며, 모든 아미노산 치환이
          기능을 잃게 한다는 보편 명제도 입증하지 않습니다. 이 실험에서는
          ‘돌연변이가 생겨도 촉매 기능이 유지되는 경우가 있다’고 정리할 수
          있습니다.
        </p>
      </section>
      <p>변형문제는 SNargen에서 제작합니다.</p>
    </div>
  );
}
const related = [
  {
    id: '179783-1',
    width: 2821,
    height: 2414,
    source: '2024학년도 9월 고1 학력평가 · 통합과학 · 3번 (제공 원고 기준)',
    title: '카탈레이스의 작용과 반응 생성물',
    status: '부분 직접 연결 · 반응 모형과 효소',
    connection:
      '물·산소 생성 모형이 예시문항 ㄱ과 연결됩니다. 실제 선지는 효소 식별·단백질·반응 전후 효소를 묻고, 코돈 변화나 가설 검증은 다루지 않습니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      'A는 분해되는 과산화 수소, B는 카탈레이스이므로 ㄱ은 틀립니다. 카탈레이스의 주성분은 단백질이므로 ㄴ은 옳습니다. 촉매인 B는 반응 전후에 소모되거나 영구적으로 변하지 않으므로 ㄷ도 옳습니다.',
  },
  {
    id: '176191-1',
    width: 2804,
    height: 2090,
    source: '2022학년도 8월 고1 학력평가 · 통합과학 · 11번 (제공 원고 기준)',
    title: '물 생성과 활성화 에너지',
    status: '부분 직접 연결 · 물 생성과 활성화 에너지',
    connection:
      '물이 생성된다는 판단은 예시문항 ㄱ에 직접 대응합니다. 활성화 에너지 그래프는 추가 학습 요소입니다. 제공 원고의 후보 2와 4는 같은 Index 176191이며, 로컬에도 PNG는 하나입니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      '과산화 수소 분해 생성물은 물과 산소이므로 ㉠은 물이며 ㄱ은 옳습니다. 카탈레이스는 활성화 에너지를 낮추므로 ㄴ은 옳습니다. 반응 속도를 증가시키므로 감소시킨다는 ㄷ은 틀립니다.',
  },
  {
    id: '173038-1',
    width: 1995,
    height: 1717,
    source: '2020학년도 11월 고1 학력평가 · 통합과학 · 8번 (제공 원고 기준)',
    title: '산소 기포와 효소의 에너지 그래프',
    status: '부분 직접 연결 · 생성물과 효소 성분',
    connection:
      '기포가 산소라는 실험 해석과 연결됩니다. 에너지 그래프와 단백질 성분도 묻지만, 예시문항의 코돈·돌연변이·반례 판단은 포함하지 않습니다.',
    answer: '④ · ㄱ, ㄷ',
    solution:
      '㉠은 산소이므로 ㄱ은 옳습니다. 활성화 에너지는 반응물에서 봉우리까지의 E₁이며, E₂는 반응물과 생성물의 에너지 차이이므로 ㄴ은 틀립니다. 카탈레이스의 주성분은 단백질이므로 ㄷ은 옳습니다.',
  },
];

export function ScienceQuestionTwentyThreeRelated() {
  const intro =
    '제공 원고의 검색 후보는 4건이지만 후보 2·4가 중복되어 고유 기출은 3문항입니다. 로컬 PNG 3개를 모두 연결하고 중복 사실을 표시했습니다. 모두 카탈레이스 반응에 부분 연결되며, 코돈·돌연변이·가설 검증을 다루는 기출은 없습니다. 시험 정보는 제공 원고 기준입니다.';
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>{intro}</p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/23/' +
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
