import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionThirteenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ① · ㄱ</h3>
        <p>
          (가)의 ㉠ 74%는 수소, ㉡ 24%는 헬륨입니다. 두 원소의 질량비는 약 3 :
          1이며, 이는 원자 개수의 비를 뜻하지 않습니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">ㄱ · 맞음: 수소 원자의 형성</h4>
          <p>
            빅뱅 이후 약 38만 년이 지나 우주가 충분히 식자 원자핵과 전자가
            결합해 중성 수소 원자가 형성되었습니다. 원자핵이 만들어지는 시기와
            원자핵에 전자가 결합하는 시기를 구분합니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄴ · 틀림: 헬륨의 주된 기원</h4>
          <p>
            별 내부의 수소 핵융합으로도 헬륨이 만들어집니다. 그러나 우주에
            존재하는 헬륨의 대부분을 이루는 원자핵은 빅뱅 후 초기 수분 동안의
            핵합성으로 만들어졌습니다. 따라서 ‘대부분은 별 내부에서
            만들어졌다’는 설명은 틀립니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄷ · 틀림: 일치하지 않는 선도 확인</h4>
          <p>
            별 S의 어두운 흡수선과 수소·헬륨의 밝은 방출선을 같은 파장에서
            비교합니다. 두 원소의 선과 일치하는 흡수선이 있으므로 수소와 헬륨이
            포함되어 있습니다. 하지만 두 원소의 선으로 설명되지 않는 흡수선도
            남아 있으므로, 제시 모형에서 S의 대기가 두 원소로만 구성되었다고 할
            수 없습니다.
          </p>
        </section>
        <p>
          스펙트럼은 선의 밝고 어두움보다 파장 위치를 맞춰 읽습니다. 남은
          선만으로 다른 원소의 이름까지 특정할 수는 없습니다.
        </p>
      </div>
    </details>
  );
}
export function ScienceQuestionThirteenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 생성 시기와 자료의 범위 구분
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 원자와 원자핵 구분 · ㄱ</h4>
        <p>
          ‘약 38만 년’은 중성 원자가 형성되는 단계입니다. 초기 수분 동안의 헬륨
          원자핵 생성과 같은 사건으로 묶으면 안 됩니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 생성 가능성과 주된 기원 구분 · ㄴ</h4>
        <p>
          별에서 헬륨이 생성된다는 사실만으로 우주 헬륨의 ‘대부분’이 별에서
          왔다고 결론 내릴 수 없습니다. 생성 장소의 존재 여부와 전체 물질에서
          차지하는 비중은 다른 판단입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 포함과 전부의 차이 · ㄷ</h4>
        <p>
          일치하는 선은 해당 원소의 존재를 판단하는 근거입니다. ‘두
          원소로만’이라는 설명을 검토하려면 일치하는 선뿐 아니라 남는 선도
          확인해야 합니다. 이 문항의 선 비교로 별 대기의 질량비가 (가)의
          74%·24%와 같다고 단정할 수도 없습니다.
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
    id: '178608-1',
    width: 2865,
    height: 2187,
    source: '2023학년도 12월 고1 학력평가 · 통합과학 · 3번 (제공 원고 기준)',
    title: '초기 우주와 별에서의 헬륨 원자핵 생성',
    status: '부분 직접 연결 · 헬륨 생성 과정',
    connection:
      '초기 우주와 별 내부라는 두 생성 경로가 예시문항 ㄴ의 개념과 연결됩니다. 다만 실제 선지는 양성자·초기 우주의 온도·별의 구성 물질을 묻고, 우주 헬륨의 대부분이 어디서 왔는지나 스펙트럼은 묻지 않습니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      'ⓐ는 양성자이므로 ㄱ은 옳습니다. 초기 우주는 현재보다 뜨거웠으므로 ㄴ도 옳습니다. 중심부에서 수소 핵융합이 일어나는 별은 주로 수소와 헬륨으로 구성되므로, 주로 철보다 무거운 원소로 구성된다는 ㄷ은 틀립니다.',
  },
  {
    id: '162506-1',
    width: 2831,
    height: 3910,
    source:
      '2015학년도 6월 고1 학력평가 · 물리학Ⅰ · 1번 (제공 원고 기준·학년/과목 확인 필요)',
    title: '수소·헬륨 질량비와 빅뱅 우주론의 증거',
    status: '부분 직접 연결 · 원소 질량비 / 우주 배경 복사 보충',
    connection:
      '수소와 헬륨의 질량비 약 3 : 1을 헬륨 약 25%로 해석하는 ㄱ이 예시문항 (가)의 원소 판별과 연결됩니다. 나머지 선지는 우주 팽창·냉각과 배경 복사 온도 차이입니다. 선 스펙트럼을 언급하지만 원문처럼 개별 선 위치를 비교하지는 않습니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      '질량비 약 3 : 1에서 헬륨의 비중은 약 1/4, 즉 25%이므로 ㄱ은 옳습니다. 우주는 팽창하면서 온도가 낮아졌으므로 ㄴ은 옳습니다. 자료의 우주 배경 복사 관측에는 방향에 따른 미세한 온도 차이가 나타나므로 ㄷ도 옳습니다.',
  },
];
export function ScienceQuestionThirteenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        두 기출은 각각 헬륨 생성 경로와 원소 질량비에 부분적으로 연결됩니다.
        이번 자료에는 흡수선·방출선의 위치를 직접 비교해 다른 원소의 존재를
        판별하는 기출이 없습니다. 시험 정보는 제공 원고 기준이며 PNG에는
        표시되어 있지 않습니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/13/' +
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
