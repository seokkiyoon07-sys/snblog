export const scienceSubjects = [
  { id: 'physics', name: '물리학' },
  { id: 'chemistry', name: '화학' },
  { id: 'biology', name: '생명과학' },
  { id: 'earth', name: '지구과학' },
] as const;

export type ScienceSubject = (typeof scienceSubjects)[number]['id'];
export interface ScienceConceptUse {
  subject: ScienceSubject;
  concepts: string;
  usage: string;
}
export interface ScienceQuestionSubjects {
  number: number;
  uses: ScienceConceptUse[];
}

// 주·부 과목을 나누지 않는다. 자료·선지·해설에서 실제 연결되는 개념을 기록한다.
// 단순 소재 언급, 일반적인 계산·그래프 읽기, 설명을 위한 비유는 과목 연결로 세지 않는다.
export const scienceQuestionSubjects: ScienceQuestionSubjects[] = [
  {
    number: 1,
    uses: [
      {
        subject: 'biology',
        concepts: '생태계 평형·외래종·서식지',
        usage:
          '환경 변화가 생물에 주는 피해를 분류하고 외래종 관리 방향을 판단합니다.',
      },
      {
        subject: 'earth',
        concepts: '지구 온난화와 기온 변화',
        usage: '기온 상승에 따른 서식지 감소 사례를 지구 온난화와 연결합니다.',
      },
    ],
  },
  {
    number: 2,
    uses: [
      {
        subject: 'physics',
        concepts: '길이·시간 표준, 열팽창, 빛의 속력',
        usage:
          '미터원기의 온도 조건과 빛의 이동 거리 정의에 시간 표준이 필요한 이유를 판단합니다.',
      },
    ],
  },
  {
    number: 3,
    uses: [
      {
        subject: 'physics',
        concepts: '기본량·유도량, 부피·밀도, 단위 환산',
        usage:
          '길이와 질량으로 밀도를 구성하고 눈금 변화와 정육면체 부피를 대응시킵니다.',
      },
    ],
  },
  {
    number: 4,
    uses: [
      {
        subject: 'physics',
        concepts: '반도체의 전기적 성질',
        usage:
          '불순물을 첨가하여 전기적 성질을 조절한다는 단서로 반도체를 찾습니다.',
      },
      {
        subject: 'chemistry',
        concepts: '규소·산소, 공유 결합과 원자 구조 모형',
        usage:
          '두 자료의 공통 원소인 규소를 찾고 사면체의 중심 원자와 대응시킵니다.',
      },
      {
        subject: 'earth',
        concepts: '지각 구성 물질·규산염 광물',
        usage:
          '지각의 암석과 사면체 기본 단위체라는 설명에서 규산염 광물을 판별합니다.',
      },
    ],
  },
  {
    number: 5,
    uses: [
      {
        subject: 'biology',
        concepts: '소비자·분해자, 반작용, 개체군 내 상호 작용',
        usage:
          '개미·곰팡이의 역할, 생물에서 토양으로의 영향, 같은 종의 분업을 구분합니다.',
      },
    ],
  },
  {
    number: 6,
    uses: [
      {
        subject: 'earth',
        concepts: '기온·기압·상대 습도의 시간 변화',
        usage:
          '기상 요소별 축과 범례를 읽고 상대 습도 변화량 및 기온·기압의 변화 경향을 비교합니다.',
      },
    ],
  },
  {
    number: 7,
    uses: [
      {
        subject: 'physics',
        concepts: '증발·승화와 열 흡수',
        usage:
          '물의 증발과 드라이아이스의 승화에서 주변의 열을 흡수하는 방향을 판단합니다.',
      },
      {
        subject: 'chemistry',
        concepts: '용해의 열 출입·발열과 흡열·반응 에너지',
        usage:
          '염화 암모늄 용해의 온도 하강과 반응물·생성물의 에너지 관계를 해석합니다.',
      },
      {
        subject: 'biology',
        concepts: '세포 호흡의 에너지 방출',
        usage:
          '흡열과 반대 방향으로 에너지를 내보내는 사례로 세포 호흡을 고릅니다.',
      },
    ],
  },
  {
    number: 8,
    uses: [
      {
        subject: 'biology',
        concepts: '유전적 다양성·유전되는 변이·자연 선택',
        usage:
          '같은 종의 표현형 차이를 분류하고 환경별 빈도 자료를 자연 선택과 연결합니다.',
      },
    ],
  },
  {
    number: 9,
    uses: [
      {
        subject: 'biology',
        concepts: '감염병·매개 생물·개체 수 관측',
        usage:
          '말라리아의 감염병 여부와 매개 모기의 채집 개체 수를 해석합니다.',
      },
      {
        subject: 'earth',
        concepts: '최고·최저 기온과 계절별 기상 자료',
        usage:
          '채집 시작과 대응하는 최저 기온 조건을 찾아 다음 연도의 기온 예측 자료에 적용합니다.',
      },
    ],
  },
  {
    number: 10,
    uses: [
      {
        subject: 'physics',
        concepts: '에너지 전환·효율·에너지 단위',
        usage:
          '공급 에너지 대비 전기 에너지의 비율을 구해 발전소를 비교합니다.',
      },
      {
        subject: 'chemistry',
        concepts: '화석 연료의 화학 에너지·발열량',
        usage:
          '화력 발전에서 연료의 질량과 단위 질량당 방출 에너지로 공급량을 구합니다. 반응식 계산까지 요구하지는 않습니다.',
      },
    ],
  },
  {
    number: 11,
    uses: [
      {
        subject: 'physics',
        concepts: '핵융합과 높은 온도 조건',
        usage:
          '철까지 생성된 별의 내부 핵융합과 중심부 온도 조건을 연결합니다.',
      },
      {
        subject: 'chemistry',
        concepts: '탄소·규소의 주기율표상 위치',
        usage: '층에서 찾은 탄소와 규소가 같은 14족인지 판단합니다.',
      },
      {
        subject: 'earth',
        concepts: '별의 층상 구조·원소 생성·지구 구성 원소',
        usage:
          '별의 원소 층을 식별하고 지구 전체의 철과 규소 질량비를 비교합니다.',
      },
    ],
  },
  {
    number: 12,
    uses: [
      {
        subject: 'chemistry',
        concepts: '금속의 산화·환원, 이온 전하, 전기적 중성',
        usage:
          '반응 전후 이온 수와 Cl⁻ 수로 전하를 구하고 전자 이동 방향을 판단합니다.',
      },
    ],
  },
  {
    number: 13,
    uses: [
      {
        subject: 'physics',
        concepts: '흡수 스펙트럼과 선의 위치',
        usage:
          '별의 흡수선과 원소별 선 위치를 대조하여 포함된 원소를 판단합니다.',
      },
      {
        subject: 'chemistry',
        concepts: '수소·헬륨, 원자핵과 전자의 결합',
        usage:
          '원자핵 생성과 전자가 결합한 중성 원자 형성을 구분하고 구성 원소를 식별합니다.',
      },
      {
        subject: 'earth',
        concepts: '초기 우주·우주 원소 질량비·별의 원소 생성',
        usage:
          '우주에서 수소·헬륨의 비율과 헬륨의 주된 생성 시기를 해석합니다.',
      },
    ],
  },
  {
    number: 14,
    uses: [
      {
        subject: 'chemistry',
        concepts: '전자껍질·원자가 전자·주기율표·화학 결합',
        usage:
          '비례식으로 S·Al·Na를 찾고 공유 결합과 용융 이온 화합물의 전도성을 판단합니다.',
      },
    ],
  },
  {
    number: 15,
    uses: [
      {
        subject: 'chemistry',
        concepts: '탄산염 침전·탄산칼슘',
        usage:
          '물속의 탄소가 산호 골격과 석회암을 이루는 탄산칼슘에 포함되는 과정을 연결합니다.',
      },
      {
        subject: 'biology',
        concepts: '광합성·호흡·생물체의 탄소',
        usage:
          '기권과 생물권 사이의 탄소 이동에서 광합성과 반대 방향을 구분합니다.',
      },
      {
        subject: 'earth',
        concepts: '지구계 권역·탄소 순환·석탄과 석회암',
        usage: '탄소 이동의 출발점과 도착점으로 수권·지권·기권을 찾습니다.',
      },
    ],
  },
  {
    number: 16,
    uses: [
      {
        subject: 'physics',
        concepts: '전자기 유도·자기장·낙하 조건·에너지 전환',
        usage:
          '자석 개수·극 방향·낙하 높이의 역할과 유도 전류를 구분합니다. 변인 통제는 공통 탐구 역량입니다.',
      },
    ],
  },
  {
    number: 17,
    uses: [
      {
        subject: 'biology',
        concepts: '생물의 번성과 멸종·생물상 변화',
        usage: '삼엽충의 생존 시기와 대멸종을 지질 시대에 연결합니다.',
      },
      {
        subject: 'earth',
        concepts: '수륙 분포·판게아·지질 시대·빙하기',
        usage:
          '지도와 연대로 시기를 찾고 두 시기 사이 및 이후의 사건을 판단합니다.',
      },
    ],
  },
  {
    number: 18,
    uses: [
      {
        subject: 'physics',
        concepts: '운동량·충격량·평균 힘·충돌 시간',
        usage:
          '힘–시간 그래프의 면적과 충돌 시간으로 평균 힘 및 안전모의 완충 효과를 비교합니다.',
      },
    ],
  },
  {
    number: 19,
    uses: [
      {
        subject: 'biology',
        concepts: 'DNA·뉴클레오타이드·상보적 결합',
        usage:
          'A–T와 G–C의 짝 및 인산·당·염기 비율로 조립 가능한 최대 개수를 구합니다. 한계 반응물은 풀이 비유이므로 화학으로 추가 집계하지 않습니다.',
      },
    ],
  },
  {
    number: 20,
    uses: [
      {
        subject: 'physics',
        concepts: '자유 낙하·수평 투사·중력 가속도',
        usage:
          '수평·연직 운동의 독립성을 적용하여 중력이 작은 행성의 위치 기록을 고릅니다.',
      },
    ],
  },
  {
    number: 21,
    uses: [
      {
        subject: 'chemistry',
        concepts: '주기·족·원자가 전자·화학식',
        usage:
          '원자가 전자 수 비와 원자 번호 조건으로 Mg·C·Si·O를 찾고 화학식을 치환합니다.',
      },
      {
        subject: 'biology',
        concepts: '인체 구성 원소·광합성의 원료',
        usage:
          '인체에서 산소·탄소의 질량비를 대응시키고 광합성에 사용하는 CO₂를 판단합니다.',
      },
    ],
  },
  {
    number: 22,
    uses: [
      {
        subject: 'physics',
        concepts: '상대 속도·운동 방향',
        usage:
          '같은 방향으로 이동하는 판의 속도 차이로 접근·분리와 B에서 본 C의 방향을 구합니다.',
      },
      {
        subject: 'earth',
        concepts: '발산·수렴 경계·맨틀 상승·섭입과 화산호',
        usage: '상대 운동을 판 경계의 종류와 지형·화산 활동 위치에 연결합니다.',
      },
    ],
  },
  {
    number: 23,
    uses: [
      {
        subject: 'chemistry',
        concepts: '과산화 수소의 분해·생성물·촉매',
        usage:
          '카탈레이스가 촉진하는 분해에서 물과 산소가 생성됨을 판단합니다.',
      },
      {
        subject: 'biology',
        concepts: '코돈·아미노산·돌연변이·효소 기능',
        usage:
          '코돈이 바뀌어도 같은 아미노산을 지정할 수 있음을 적용해 기포 발생과 가설의 반례를 판단합니다.',
      },
    ],
  },
  {
    number: 24,
    uses: [
      {
        subject: 'physics',
        concepts: '열량과 온도 상승·용액의 양',
        usage:
          '반응으로 나온 열을 온도 상승에 연결할 때 전체 용액의 양을 함께 고려합니다. 같은 초기 온도·총부피가 비교 조건입니다.',
      },
      {
        subject: 'chemistry',
        concepts: '산·염기·중화량·구경꾼 이온·잉여 이온',
        usage:
          '원그래프로 농도비를 구하고 생성된 물의 양과 재혼합 후 액성을 판단합니다.',
      },
    ],
  },
  {
    number: 25,
    uses: [
      {
        subject: 'earth',
        concepts: '엘니뇨·라니냐·등수온선 깊이·강수와 해수면',
        usage:
          '동서태평양의 깊이 변화로 시기를 식별하고 강수량 및 해수면 높이 편차의 차를 판단합니다.',
      },
    ],
  },
];

export function getScienceSubjectQuestions(subject: ScienceSubject) {
  return scienceQuestionSubjects.flatMap(question => {
    const use = question.uses.find(entry => entry.subject === subject);
    return use
      ? [
          {
            ...use,
            number: question.number,
            subjects: question.uses.map(entry => entry.subject),
          },
        ]
      : [];
  });
}
