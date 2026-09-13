import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionTenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ② · A &gt; C &gt; B</h3>
        <p>
          에너지 효율(%) = 생산된 전기 에너지 ÷ 공급된 에너지 × 100입니다.
          공급량이 같으면 전기 에너지는 효율에 비례합니다.
        </p>
        <ul className="space-y-3">
          <li>A · 수력: 8 MJ ÷ 10 MJ = 0.8, 즉 80%입니다.</li>
          <li>
            B · 태양광: 1 kJ = 1000 J이므로 200 J ÷ 1000 J = 0.2, 즉 20%입니다.
          </li>
          <li>
            C · 화력: 1 kg = 1000 g이며 공급 에너지는 1000 g × 20 kJ/g = 20,000
            kJ = 20 MJ입니다. 8 MJ ÷ 20 MJ = 0.4, 즉 40%입니다.
          </li>
        </ul>
        <p>
          따라서 A(80%) &gt; C(40%) &gt; B(20%)입니다. A와 C의 표에 적힌
          생산량은 모두 8 MJ지만 공급량이 달라 효율은 같지 않습니다.
        </p>
        <p>
          효율 수치는 문제에 제시된 조건의 값이며 실제 모든 발전소에 적용하는
          고정값은 아닙니다.
        </p>
      </div>
    </details>
  );
}
export function ScienceQuestionTenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 같은 공급량을 효율 비교로 해석하기
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 단위 환산</h4>
        <p>
          1 MJ = 1000 kJ, 1 kJ = 1000 J입니다. B의 200과 1만 나누면 안 됩니다.
          같은 단위로 환산하면 효율은 0.2, 백분율로 20%입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 단위 질량당 값에서 총량 도출</h4>
        <p>
          C의 20 kJ/g에 연료 질량을 곱해야 공급 에너지가 됩니다. g × kJ/g = kJ로
          단위가 소거되는지 확인합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 생산량과 효율 구분</h4>
        <p>
          생산 전기 에너지 = 효율 × 공급 에너지입니다. ‘공급된 에너지의 양이
          같을 때’라는 조건 때문에 효율의 대소만 비교할 수 있습니다.
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
    id: '165937-1',
    width: 2934,
    height: 2432,
    source: '2017학년도 3월 고2 교육청 · 물리학Ⅰ · 7번 (제공 원고 기준)',
    title: '자동차 에너지 효율 비',
    status: '직접 유사 · 효율 계산',
    connection:
      '자동차의 운동 에너지를 공급된 연료 에너지로 나누는 과정이 예시문항의 전기 에너지/공급 에너지 계산과 직접 대응합니다. 효율을 구한 뒤 비교한다는 판단은 같지만, 기출에는 J·kJ·MJ 환산이나 연료 질량에서 공급 에너지를 구하는 단계가 없습니다.',
    answer: '③ · 4 : 5',
    solution:
      'A의 효율은 4/20 = 1/5, B는 9/36 = 1/4입니다. 따라서 효율 비는 4 : 5입니다. 운동 에너지의 비 4 : 9와 구분합니다.',
  },
  {
    id: '162156-1',
    width: 3010,
    height: 2063,
    source: '2015학년도 4월 고3 교육청 · 물리학Ⅰ · 1번 (제공 원고 기준)',
    title: '화력·수력·태양광 발전',
    status: '보충 학습 · 발전 원리',
    connection:
      '화력·수력·태양광이라는 예시문항의 세 발전 방식을 다룹니다. 각 방식의 에너지 전환 과정과 원리를 복습하는 자료이며, 공급량을 같게 환산하거나 효율의 대소를 계산하는 문제는 아닙니다.',
    answer: '④ · ㄱ, ㄴ',
    solution:
      '화력은 열에너지가 운동 에너지로 전환되는 과정이 있고 수력은 물의 낙차를 이용하므로 ㄱ, ㄴ은 옳습니다. 화력·수력 발전기는 전자기 유도를 이용하므로 세 방식을 모두 광전 효과로 설명한다는 ㄷ은 틀립니다.',
  },
  {
    id: '173362-1',
    width: 2788,
    height: 2293,
    source: '추가 제공 PNG · 시험 정보 미확인 · 이미지 문항 번호 7',
    title: '발전 방식의 특징 분류',
    status: '보충 학습 · 발전 방식',
    connection:
      '발전 방식의 에너지원과 특징을 파악한다는 배경 개념을 공유합니다. 기출의 중심 과제는 신재생 에너지·전자기 유도·날씨 영향의 구분이며, 예시문항의 공급량 대비 생산량 계산은 다루지 않습니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      'A는 태양광, B는 화력, C는 풍력입니다. ㄱ과 ㄴ은 옳으며, 풍력 발전량은 바람의 영향을 받으므로 ㄷ은 틀립니다.',
  },
  {
    id: '175257-1',
    width: 2866,
    height: 2193,
    source: '추가 제공 PNG · 시험 정보 미확인 · 이미지 문항 번호 2',
    title: '수력·핵발전 에너지 전환',
    status: '보충 학습 · 에너지 전환',
    connection:
      '수력 발전에 공급되는 에너지와 전환 과정을 확인하여 예시문항 A의 배경을 보완합니다. 기출에는 핵발전의 에너지 전환도 포함되며, 예시문항의 세 발전소 효율 비교와는 중심 과제가 다릅니다.',
    answer: '① · 위치, 핵, 운동',
    solution:
      '수력은 물의 위치 에너지, 핵발전은 핵에너지에서 출발합니다. 두 방식 모두 터빈의 운동 에너지를 거쳐 발전기에서 전기 에너지를 얻습니다.',
  },
];
export function ScienceQuestionTenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        기출별 연결 범위를 구분했습니다. 시험 정보는 제공 원고 기준이며 미확인
        자료는 따로 표시합니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/10/' +
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
