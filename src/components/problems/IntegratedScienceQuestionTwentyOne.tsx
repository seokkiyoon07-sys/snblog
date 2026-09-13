import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionTwentyOneSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ① · ㄱ</h3>
        <section className={card}>
          <h4 className="font-bold">1. W와 가능한 전자 수 찾기</h4>
          <p>
            W는 3주기 2족인 마그네슘(Mg, 원자 번호 12)입니다. X:Y:Z의 원자가
            전자 수 비가 2:2:3이므로 실제 전자 수 후보는 2:2:3 또는 4:4:6입니다.
            그 다음 정수 배수인 6:6:9는 Z의 원자가 전자 수가 9가 되어
            불가능합니다.
          </p>
          <p>
            2:2:3이면 X와 Y는 2·3주기의 2족 원소인 Be와 Mg여야 합니다. 하지만
            Mg는 이미 W이고 네 원소의 원자 번호가 서로 달라야 하므로
            불가능합니다. 따라서 실제 전자 수는 4:4:6입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">2. 원자 번호 조건으로 X·Y·Z 확정</h4>
          <p>
            X와 Y는 14족인 C(6번), Si(14번)이고, Z는 16족인 O(8번) 또는
            S(16번)입니다. Y의 원자 번호가 Z보다 커야 하므로 Z가 S일 수
            없습니다. 따라서 Z=O, Y=Si, X=C입니다.
          </p>
          <p>
            이 추론은 주기·전자 수·원자 번호 조건만으로 가능합니다. 인체 질량비
            표의 산소와 탄소가 X~Z에 반드시 포함된다는 별도 조건을 가정할 필요가
            없습니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">3. 질량비 표와 선지 판단</h4>
          <p>
            제시 표에서 65.0%인 ㉠은 산소, 18.5%인 ㉡은 탄소입니다. 따라서 ㉠=Z,
            ㉡=X입니다.
          </p>
          <p>
            <strong>ㄱ · 맞음.</strong> W인 Mg는 금속 원소입니다.
          </p>
          <p>
            <strong>ㄴ · 틀림.</strong> ㉠은 산소 Z이며, 탄소 X가 아닙니다.
          </p>
          <p>
            <strong>ㄷ · 틀림.</strong> 광합성에서 포도당 합성에 사용하는 이산화
            탄소는 CO₂=XZ₂입니다. YZ₂는 SiO₂이므로 해당하지 않습니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionTwentyOneAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 비율에서 원소를 찾고 생명 현상에 연결
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 비와 실제 개수 구분</h4>
        <p>
          2:2:3은 약분된 비이므로 전자 수가 반드시 2개·2개·3개라는 뜻은
          아닙니다. 가능한 정수 배수를 만든 뒤 주기 범위와 서로 다른 원소라는
          조건으로 후보를 제거합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 각 조건의 역할</h4>
        <p>
          W=Mg는 2:2:3을 배제합니다. 2·3주기 조건은 4:4:6의 후보를 C·Si와 O·S로
          좁힙니다. 원자 번호 Y&gt;Z는 Z=O와 Y=Si를 확정합니다. 질량비 표는 그
          다음 산소·탄소를 기호와 연결하는 자료입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 화학식의 기호를 끝까지 치환</h4>
        <p>
          XZ₂와 YZ₂는 모양이 비슷하지만 각각 CO₂와 SiO₂입니다. 원소 추론이
          끝나도 기호 대응을 유지하여 광합성의 반응물과 연결해야 합니다.
          질량비가 큰 순서와 원자 번호 순서를 섞어서도 안 됩니다.
        </p>
      </section>
      <p>변형문제는 SNargen에서 제작합니다.</p>
    </div>
  );
}
const related = [
  {
    id: '159707-1',
    width: 2779,
    height: 2508,
    source: '2014학년도 3월 고2 학력평가 · 생명과학Ⅰ · 2번 (제공 원고 기준)',
    title: '인체 구성 원소의 질량비와 물',
    status: '부분 직접 연결 · 산소와 탄소 식별',
    connection:
      '65.0%·18.5%·9.5%의 수치와 산소·탄소 식별이 예시문항 표에 직접 대응합니다. 원자가 전자 수 비례식은 없고 물과 유기물의 성질을 추가로 묻습니다.',
    answer: '④ · ㄱ, ㄷ',
    solution:
      '(가)는 산소, (나)는 탄소이므로 ㄱ은 옳습니다. 물은 인체에서 에너지원으로 사용되지 않으므로 ㄴ은 틀립니다. 탄소는 단백질과 DNA의 구성 원소이므로 ㄷ은 옳습니다.',
  },
  {
    id: '156773-1',
    width: 2780,
    height: 2622,
    source:
      '2012학년도 9월 고1 학력평가 · 화학Ⅰ · 18번 (제공 원고 기준·학년/과목 확인 필요)',
    title: '인체 원소와 화학식의 기호 대응',
    status: '부분 직접 연결 · 원소 식별과 화학식',
    connection:
      'A=O, B=C로 치환해 화학식을 판단하는 방식이 예시문항 ㄷ과 연결됩니다. 실제 자료는 60%·21%로 수치가 다르고 광합성을 직접 묻지는 않습니다. 원자가 전자 수 퍼즐도 없습니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      'A는 산소로 지각에서도 질량비가 가장 크므로 ㄱ은 옳습니다. B는 탄소로 단백질·탄수화물·지질에 포함되므로 ㄴ은 옳습니다. 이산화 탄소를 기호로 쓰면 BA₂이며, B₂A가 아니므로 ㄷ은 틀립니다.',
  },
  {
    id: '163846-1',
    width: 2741,
    height: 1874,
    source: '2016학년도 3월 고2 학력평가 · 화학Ⅰ · 16번 (제공 원고 기준)',
    title: '질량 백분율에서 입자 수 비교',
    status: '보충 학습 · 원자량을 이용한 계산',
    connection:
      '인체 구성 원소 질량비라는 소재는 같지만, 핵심 계산은 질량을 원자량으로 나누는 입자 수 비교입니다. 예시문항의 원자가 전자 수 비례식과 다른 계산입니다.',
    answer: '④ · C > A > B',
    solution:
      '같은 전체 질량을 기준으로 입자 수는 질량 백분율/원자량에 비례합니다. A는 65/16=4.0625, B는 18/12=1.5, C는 10/1=10이므로 C>A>B입니다. 질량비 순서 A>B>C와 구분해야 합니다.',
  },
  {
    id: '156708-1',
    width: 2861,
    height: 2315,
    source: '2012학년도 9월 고3 모의평가 · 생명과학Ⅰ · 3번 (제공 원고 기준)',
    title: '영양소의 종류와 구성 원소',
    status: '보충 학습 · 연결이 약한 영양소 개념',
    connection:
      '인체 구성 물질을 다루지만 질량비·주기율표·광합성·전자 수 비례식을 묻지 않습니다. 지방의 C·H·O 구성 등 배경 개념을 복습하는 자료입니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      'A는 단백질, B는 지방, C는 탄수화물입니다. 단백질의 기본 단위인 아미노산 중 필수 아미노산은 인체에서 충분히 합성되지 않아 음식으로 섭취해야 하므로 ㄱ은 틀립니다. 지방은 탄소·수소·산소로 구성되므로 ㄴ은 옳습니다. 세 영양소는 모두 인체 구성 성분이므로 ㄷ도 옳습니다.',
  },
];
export function ScienceQuestionTwentyOneRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        기출 PNG 4개를 모두 연결했습니다. 질량비와 화학식에 부분 직접 연결되는
        2개, 계산·영양소 보충 2개입니다. 원문 핵심인 원자가 전자 수 2:2:3 추론을
        직접 다루는 기출은 없습니다. 시험 정보는 제공 원고 기준입니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/21/' +
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
