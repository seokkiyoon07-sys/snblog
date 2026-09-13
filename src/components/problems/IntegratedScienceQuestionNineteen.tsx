import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionNineteenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ⑤ · ㄴ, ㄷ</h3>
        <p>
          뉴클레오타이드 하나에는 인산·당·염기가 각각 하나씩 들어갑니다.
          정상적인 DNA 이중 나선에서는 A–T, G–C가 각각 1 : 1로 짝을 이뤄야
          합니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">1. 상보적인 염기쌍의 최대 개수</h4>
          <p>A 15개와 T 20개 → A–T 최대 15쌍입니다.</p>
          <p>G 25개와 C 13개 → G–C 최대 13쌍입니다.</p>
          <p>
            합계 28쌍이므로 염기와 뉴클레오타이드는 각각 56개입니다. 염기쌍
            하나는 뉴클레오타이드 두 개로 구성됩니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">2. 나머지 부품으로 만들 수 있는지 확인</h4>
          <p>
            당과 인산은 각각 56개가 필요합니다. 당 63개와 인산 58개가 준비되어
            있으므로 충분합니다. 결합선 500개도 이 모형을 잇는 데 충분하여 최대
            개수를 제한하지 않습니다.
          </p>
          <p>
            사용 후 남는 부품은 당 7개, 인산 2개, T 5개, G 12개입니다. A와 C는
            모두 사용합니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">선지별 판단</h4>
          <p>
            <strong>ㄱ · 틀림.</strong> 핵산의 기본 단위체는
            뉴클레오타이드입니다. 염기는 그 구성 성분 중 하나입니다.
          </p>
          <p>
            <strong>ㄴ · 맞음.</strong> 뉴클레오타이드 56개에 인산이 각각 하나씩
            들어가므로 인산은 56개입니다.
          </p>
          <p>
            <strong>ㄷ · 맞음.</strong> G와 상보적으로 결합하는 염기는 C입니다.
            사용한 C는 13개이므로 옳습니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionNineteenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 준비된 수와 사용할 수 있는 수 구분
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 짝별로 적은 쪽이 한계</h4>
        <p>
          전체 염기 73개를 더한 뒤 2로 나누거나 인산 58개를 모두 쓴다고 판단하면
          안 됩니다. A–T와 G–C를 각각 묶어 적은 쪽의 수만큼 쌍을 만든 뒤
          합합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 최대값과 실제 조립 가능성 확인</h4>
        <p>
          상보적 결합으로 최대 28쌍이라는 상한을 구한 뒤, 당·인산·결합선도
          충분한지 확인해야 합니다. 이 조건에서 28쌍을 실제로 만들 수 있으므로
          56개가 최대입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 염기·염기쌍·뉴클레오타이드 구분</h4>
        <p>
          28은 염기쌍 수, 56은 두 가닥 전체의 뉴클레오타이드 수, 13은 사용된 C의
          수입니다. 묻는 대상에 맞게 개수의 단위를 바꿔야 합니다.
        </p>
      </section>
      <p>
        부족한 부품이 조립량을 제한한다는 점은 한계 반응물 계산과 닮았습니다.
        이는 풀이를 설명하는 비유이며, 화학 반응식의 양적 관계를 별도로 알아야
        하는 문항은 아닙니다. 변형문제는 SNargen에서 제작합니다.
      </p>
    </div>
  );
}
const related = [
  {
    id: '179785-1',
    width: 2856,
    height: 2315,
    source: '2024학년도 9월 고1 학력평가 · 통합과학 · 5번 (제공 원고 기준)',
    title: 'DNA 모형과 상보적 염기의 개수',
    status: '부분 직접 연결 · C와 G의 1 : 1 대응',
    connection:
      'C와 G의 수가 같다는 판단이 예시문항 ㄷ의 기초와 직접 연결됩니다. 다만 준비 부품의 부족분을 고려하거나 최대 조립량을 계산하지 않습니다.',
    answer: '① · A',
    solution:
      'DNA는 이중 나선 구조이므로 A는 옳습니다. DNA의 뉴클레오타이드는 염기에 따라 4종류이므로 5종류라는 B는 틀립니다. 정상적인 이중 나선 전체에서 C와 G는 1 : 1로 짝을 이루므로 C가 G의 2배라는 C 학생도 틀립니다.',
  },
  {
    id: '154471-1',
    width: 2784,
    height: 2314,
    source:
      '2011학년도 9월 고1 학력평가 · 생명과학Ⅰ · 16번 (제공 원고 기준·학년/과목 확인 필요)',
    title: '뉴클레오타이드의 1 : 1 : 1 구성',
    status: '부분 직접 연결 · 구성 비율과 염기쌍',
    connection:
      '인산·당·염기 비율이 예시문항 ㄴ의 계산 근거에 직접 대응하고, 상보적인 염기를 찾는 판단도 공유합니다. 부품 수를 제한하는 최대값 추론은 없습니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      'T와 짝을 이루는 ㉠은 A, G와 짝을 이루는 ㉡은 C이므로 ㄱ은 옳습니다. DNA는 두 가닥의 뉴클레오타이드 사슬로 구성되므로 ㄴ은 옳습니다. 뉴클레오타이드의 인산·당·염기 비율은 1 : 1 : 1이므로 ㄷ도 옳습니다.',
  },
  {
    id: '168367-1',
    width: 2837,
    height: 2489,
    source: '2018학년도 6월 고1 학력평가 · 통합과학 · 12번 (제공 원고 기준)',
    title: 'DNA 모형의 구조와 염기 종류',
    status: '보충 학습 · 모형 관찰',
    connection:
      '이중 나선과 상보적 결합을 확인하는 기본 자료입니다. 예시문항의 표와 같은 4종류의 염기를 다루지만, 인산 개수와 조립 가능한 최대량은 묻지 않습니다.',
    answer: '③ · ㄱ, ㄷ',
    solution:
      'DNA는 이중 나선 구조이므로 ㄱ은 옳습니다. DNA의 염기는 A·T·G·C의 4종류이므로 5종류라는 ㄴ은 틀립니다. 염기는 상보적인 짝과 결합하므로 ㄷ은 옳습니다.',
  },
  {
    id: '157948-1',
    width: 2774,
    height: 2859,
    source: '2013학년도 4월 고3 학력평가 · 화학Ⅰ · 18번 (제공 원고 기준)',
    title: 'DNA의 상보적 결합과 공유 전자쌍',
    status: '심화 학습 · 결합 종류와 구조식',
    connection:
      'A–T, G–C의 짝은 원문과 연결됩니다. 그러나 실제 선지는 당–인산의 결합 종류와 인의 공유 전자쌍 수를 추가로 묻습니다. 수소 결합 선의 개수만을 세는 문제로 소개하지 않습니다.',
    answer: '① · ㄱ',
    solution:
      'C의 짝인 ㉠은 G, A의 짝인 ㉡은 T이므로 ㄱ은 옳습니다. 당과 인산 사이의 골격 결합은 공유 결합이므로 수소 결합이라는 ㄴ은 틀립니다. 제시 구조식에서 P는 단일 결합 3개와 이중 결합 1개를 하므로 공유 전자쌍은 5쌍입니다. 따라서 4쌍이라는 ㄷ도 틀립니다.',
  },
];
export function ScienceQuestionNineteenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        제공된 4개를 모두 연결했습니다. 구성 비율·상보적 결합은 겹치지만 부품
        수에서 최대 조립량을 구하는 기출은 없습니다. 부분 직접 연결 2개, 모형
        관찰 보충 1개, 결합 구조 심화 1개로 구분했습니다. 시험 정보는 제공 원고
        기준입니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/19/' +
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
