import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionSeventeenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ⑤ · ㄴ, ㄷ</h3>
        <p>
          발문은 두 연대를 ‘순서 없이’ 제시합니다. 먼저 그림에서 대륙이 모인
          (가)를 2억 6천만 년 전, 대륙이 분리된 (나)를 1억 년 전으로 연결합니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">자료의 시간 순서</h4>
          <p>(가): 판게아가 모여 있는 고생대 말의 수륙 분포입니다.</p>
          <p>(나): 판게아가 분리된 중생대, 약 1억 년 전의 수륙 분포입니다.</p>
          <p>
            시간 흐름은 (가) → 고생대 말 대멸종 → (나) → 신생대입니다. ‘몇 년
            전’의 수가 클수록 더 오래된 시점입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄱ · 틀림: 삼엽충의 생존 시대</h4>
          <p>
            삼엽충은 고생대 말에 멸종했습니다. 따라서 이 문항의 지질 시대·화석
            대응에서는 중생대인 (나) 시기에 생성된 지층의 화석으로 적절하지
            않습니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄴ · 맞음: 두 시점 사이의 대멸종</h4>
          <p>
            약 2억 5천만 년 전 고생대 말의 대멸종은 2억 6천만 년 전과 1억 년 전
            사이에 있습니다. 이 사건 하나로 ㄴ을 판단할 수 있습니다. 대멸종의
            원인을 하나로 단정하거나 발생 횟수를 모두 세어야 하는 문항은
            아닙니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄷ · 맞음: ‘이후’의 범위</h4>
          <p>
            ‘(나)의 시기 이후’에는 신생대도 포함됩니다. 신생대 제4기에는
            빙하기와 간빙기가 반복된 시기가 있었으므로 옳습니다. (나) 당시의
            기후만 묻는 선지로 읽으면 안 됩니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionSeventeenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 시점과 구간을 구별하기
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 수륙 분포로 연대 배정</h4>
        <p>
          발문에 적힌 연대 순서를 그림 순서로 그대로 옮기지 않습니다. 초대륙이
          모인 모습과 분리된 모습을 먼저 읽고 연대 및 지질 시대를 연결합니다.
          판게아 형성은 오랜 과정이므로 2억 5천만 년 전 한순간에 생겼다고 설명할
          필요는 없습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. ‘그 시기’, ‘사이’, ‘이후’의 다른 범위</h4>
        <p>
          ㄱ은 (나)라는 시점의 생물, ㄴ은 두 시점 사이의 사건, ㄷ은 (나) 이후의
          사건을 묻습니다. 같은 그림을 사용해도 각 선지가 가리키는 시간 범위는
          다릅니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 사건의 존재를 확인하는 판단</h4>
        <p>
          ㄴ은 구간 안에 대멸종이 있었는지, ㄷ은 이후에 빙하기·간빙기가 반복된
          적이 있었는지를 확인하면 됩니다. 중생대 전체에 빙하기가 전혀 없었다는
          강한 주장이나 대멸종의 단일 원인 설명은 정답을 판단하는 데 필요하지
          않습니다.
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
    id: '173931-1',
    width: 2801,
    height: 2647,
    source:
      '2021학년도 6월 고3 평가원 모의평가 · 지구과학Ⅰ · 1번 (제공 원고 기준)',
    title: '판게아·생물 특징으로 지질 시대 구분',
    status: '직접 유사 · 지질 시대와 화석 연결',
    connection:
      '판게아 분리와 삼엽충 번성으로 시대를 구분하는 지식이 예시문항의 자료 판별·ㄱ과 연결됩니다. 다만 기출은 특징 표에서 시대를 찾고, 원문은 수륙 분포 그림과 연대를 연결합니다. ‘사이·이후’의 시간 범위와 빙하기 반복은 묻지 않습니다.',
    answer: '① · A',
    solution:
      '(가)는 판게아 분리와 파충류 번성으로 중생대, (나)는 히말라야 형성과 속씨식물 번성으로 신생대, (다)는 육상 식물 출현과 삼엽충 번성으로 고생대입니다. 중생대 지층에서 공룡 화석이 발견될 수 있다는 A만 옳습니다. B는 신생대를 고생대라고 했고 C는 신생대의 매머드를 고생대에 연결해 틀립니다.',
  },
  {
    id: '176810-1',
    width: 1965,
    height: 1283,
    source: '2022학년도 11월 고1 학력평가 · 통합과학 · 5번 (제공 원고 기준)',
    title: '고생대 말 대멸종과 삼엽충',
    status: '직접 유사 · 대멸종 시기와 삼엽충',
    connection:
      '고생대 말 대멸종과 삼엽충을 연결하는 내용이 예시문항 ㄱ·ㄴ에 직접 대응합니다. 다만 기출은 설명과 화석 사진에서 이름을 선택하며, 두 연대 사이에 사건을 배치하는 단계는 없습니다. 예시문항 ㄴ은 대멸종의 원인 자체를 묻지 않습니다.',
    answer: '① · 고생대, 삼엽충',
    solution:
      '제시된 시기는 고생대 말이며 사진의 화석은 삼엽충입니다. 따라서 A는 고생대, ㉠은 삼엽충으로 ①입니다. 지문은 판게아와 환경 변화를 연결해 서술하지만, 원문 풀이에서는 고생대 말 대멸종의 시점과 삼엽충의 멸종 시기를 확인하는 데 활용합니다.',
  },
];
export function ScienceQuestionSeventeenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        폴더에 제공된 2개를 연결했습니다. 지질 시대·화석·대멸종 개념에는 직접
        유사하지만, 수륙 분포 지도 판독과 ‘이후’의 빙하기·간빙기 반복을 직접
        묻는 기출은 이번 자료에 없습니다. 시험 정보는 제공 원고 기준입니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/17/' +
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
