export type WinterSchoolType = 'self-study' | 'lecture';
export type WinterSchoolGender = 'male' | 'female' | 'coed';
export type WinterSchoolStatus =
  | 'confirmed'
  | 'pending'
  | 'recheck'
  | 'unavailable';
export type WinterSchoolRegion =
  | 'seoul'
  | 'yongin'
  | 'yangpyeong'
  | 'icheon-gwangju'
  | 'anseong'
  | 'etc';

export interface WinterProgram {
  name: string;
  durationLabel: string;
  durationDays?: number;
  totalPrice?: number;
  priceSuffix?: string;
  included?: string[];
  excluded?: string[];
  note?: string;
}

export interface WinterSchool {
  id: string;
  name: string;
  location: string;
  lat?: number;
  lng?: number;
  type: WinterSchoolType;
  region: WinterSchoolRegion;
  gender: WinterSchoolGender;
  targetGrades: string[];
  status: WinterSchoolStatus;
  programs: WinterProgram[];
  features: string[];
  sourceUrl?: string;
  verifiedAt: string;
  note?: string;
}

export const WINTER_SCHOOL_TYPE_LABELS: Record<WinterSchoolType, string> = {
  'self-study': '독학형',
  lecture: '수업형',
};

export const WINTER_SCHOOL_GENDER_LABELS: Record<WinterSchoolGender, string> = {
  male: '남학생',
  female: '여학생',
  coed: '남녀공학',
};

export const WINTER_SCHOOL_STATUS_LABELS: Record<WinterSchoolStatus, string> = {
  confirmed: '가격 확인',
  pending: '가격 공개 대기',
  recheck: '재확인 필요',
  unavailable: '운영 확인 필요',
};

export const WINTER_SCHOOL_REGION_LABELS: Record<WinterSchoolRegion, string> = {
  seoul: '서울·남양주',
  yongin: '용인권',
  yangpyeong: '양평권',
  'icheon-gwangju': '이천·광주',
  anseong: '안성권',
  etc: '기타',
};

export const winterSchools2027: WinterSchool[] = [
  {
    id: 'sn-academy',
    name: 'SN독학기숙학원',
    location: '경기도 양평군 용문로 147',
    lat: 37.483181,
    lng: 127.57337,
    type: 'self-study',
    region: 'yangpyeong',
    gender: 'male',
    targetGrades: ['재학생'],
    status: 'confirmed',
    programs: [
      {
        name: '5주 과정',
        durationLabel: '5주',
        durationDays: 35,
        totalPrice: 335,
        included: ['기숙사', '식사', '세탁'],
        excluded: ['2인실 선택 시 20만원'],
      },
      {
        name: '8주 과정',
        durationLabel: '8주',
        durationDays: 56,
        totalPrice: 500,
        included: ['기숙사', '식사', '세탁'],
        excluded: ['2인실 선택 시 20만원'],
      },
    ],
    features: [
      'SNarGPT AI 학습지원',
      '주 1회 1:1 전략담임',
      '최대 14시간 자기주도학습',
    ],
    sourceUrl: 'https://www.snacademy.co.kr/admission/winter_2027_r03',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'honggiha',
    name: '홍기하독학기숙학원',
    location: '경기 양평군 양평읍 약수사길 34',
    lat: 37.51314,
    lng: 127.520186,
    type: 'self-study',
    region: 'yangpyeong',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'confirmed',
    programs: [
      {
        name: '기본과정',
        durationLabel: '5주·33일',
        durationDays: 33,
        totalPrice: 330,
        excluded: ['1:5 미만 팀수업 선택 비용'],
      },
    ],
    features: ['1:1 맞춤 독학관리', '무제한 질의응답', '학습계획 코칭'],
    sourceUrl: 'https://hongisuk.com/bbs/board.php?bo_table=0206&tab=02',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'eduselpa',
    name: '에듀셀파',
    location: '경기 양평군 양서면 교골길 59-2',
    lat: 37.558701,
    lng: 127.356641,
    type: 'self-study',
    region: 'yangpyeong',
    gender: 'male',
    targetGrades: ['재학생'],
    status: 'recheck',
    programs: [
      {
        name: '2027 윈터스쿨',
        durationLabel: '5주',
        durationDays: 35,
        totalPrice: 339,
        note: '조사표에는 금액이 있으나 공식 모집 페이지의 금액 표시를 재확인해야 합니다.',
      },
    ],
    features: ['의무수업 없는 독학 중심', '선택수업·질의응답', '전자기기 관리'],
    sourceUrl: 'https://edusherpa.kr/2027-winterschool-1/',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'eduselpa-female',
    name: '에듀셀파 여학생',
    location: '경기 남양주시 화도읍 북한강로 1618',
    lat: 37.652144,
    lng: 127.369187,
    type: 'self-study',
    region: 'seoul',
    gender: 'female',
    targetGrades: ['재학생'],
    status: 'recheck',
    programs: [
      {
        name: '2027 윈터스쿨',
        durationLabel: '5주',
        durationDays: 35,
        totalPrice: 339,
        note: '조사표에는 금액이 있으나 공식 모집 페이지의 금액 표시를 재확인해야 합니다.',
      },
    ],
    features: ['여학생 전용', '1:1 맞춤 독학관리', '몰입형 자기주도학습'],
    sourceUrl: 'https://girl-edusherpa.kr/2027-winterschool-g/',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'namanseong-bisang',
    name: '남안성비상에듀',
    location: '경기 안성시 삼죽면 진촌진말길 38',
    lat: 37.053663,
    lng: 127.361139,
    type: 'self-study',
    region: 'anseong',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'recheck',
    programs: [
      {
        name: '4주 과정',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 280,
      },
      {
        name: '5주 과정',
        durationLabel: '5주',
        durationDays: 35,
        totalPrice: 350,
      },
      {
        name: '8주 과정',
        durationLabel: '8주',
        durationDays: 56,
        totalPrice: 530,
      },
      {
        name: '9주 과정',
        durationLabel: '9주',
        durationDays: 63,
        totalPrice: 600,
      },
    ],
    features: ['독학관리', '학습코칭', '선택수업·입시상담'],
    sourceUrl: 'https://www.visangedu365.com/m/shop/goods_list.php',
    verifiedAt: '2026-08-31',
    note: '조기등록 할인 적용 여부와 8·9주 상품의 실제 결제액을 확인해야 합니다.',
  },
  {
    id: 'yeoju-itall',
    name: '여주 잇올',
    location: '경기도 여주시 산북면 금품1로 124-1',
    lat: 37.3992,
    lng: 127.456492,
    type: 'self-study',
    region: 'etc',
    gender: 'coed',
    targetGrades: ['2027년 고2', '2027년 고3'],
    status: 'confirmed',
    programs: [
      {
        name: '얼리 시즌1',
        durationLabel: '5주',
        durationDays: 35,
        totalPrice: 359,
        included: ['교습', '기숙사', '식사', '세탁', '청소'],
      },
      {
        name: '시즌1',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 290,
        included: ['교습', '기숙사', '식사', '세탁', '청소'],
        excluded: ['2주 연장 과정 138만원'],
        note: '2027년 1월 3일 입소',
      },
      {
        name: '시즌2',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 275,
        included: ['교습', '기숙사', '식사', '세탁', '청소'],
        note: '2027년 1월 31일 입소',
      },
    ],
    features: ['2인실 중심', '하루 14시간 몰입', '통합 학습·생활관리'],
    sourceUrl: 'https://dormitory.itall.com/recruit/2027_winter',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'icheon-itall-female',
    name: '이천 잇올 여학생',
    location: '경기 이천시 마장면 서이천로337번길 64',
    lat: 37.258078,
    lng: 127.390071,
    type: 'self-study',
    region: 'icheon-gwangju',
    gender: 'female',
    targetGrades: ['2027년 고2', '2027년 고3'],
    status: 'confirmed',
    programs: [
      {
        name: '얼리 시즌1',
        durationLabel: '5주',
        durationDays: 35,
        totalPrice: 359,
        included: ['교습', '기숙사', '식사', '세탁', '청소'],
      },
      {
        name: '시즌1',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 290,
        included: ['교습', '기숙사', '식사', '세탁', '청소'],
        excluded: ['2주 연장 과정 138만원'],
      },
      {
        name: '시즌2',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 275,
        included: ['교습', '기숙사', '식사', '세탁', '청소'],
      },
    ],
    features: ['여학생 전용', '2인실 중심', '여학생 맞춤 생활관리'],
    sourceUrl: 'https://dormitory.itall.com/recruit/2027_winter',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'etoos247-gwangju',
    name: '이투스247독학 광주',
    location: '경기 광주시 초월읍 두둘기길 68-21',
    lat: 37.401282,
    lng: 127.319155,
    type: 'self-study',
    region: 'icheon-gwangju',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '본과정', durationLabel: '5주', durationDays: 35 }],
    features: ['프리·포스트 과정 선택', '5담임제', '수업+독학 결합'],
    sourceUrl: 'https://dokhakgisuk247.etoos.com/branch/recruit/winter2027.do',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'icheon-etoos247',
    name: '이천이투스247',
    location: '경기도 이천시 마장면 이장로 115-10',
    lat: 37.264302,
    lng: 127.378645,
    type: 'self-study',
    region: 'icheon-gwangju',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '일정 공개 대기' }],
    features: ['스마트 Pick', '5담임제', '프리미엄 2~3인실'],
    sourceUrl: 'https://icheon247.etoos.com/branch/recruit/winter2027.do',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'anseong-etoos247',
    name: '안성이투스247',
    location: '경기도 안성시 삼죽면 국사봉로 246-14',
    lat: 37.044089,
    lng: 127.343687,
    type: 'self-study',
    region: 'anseong',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [
      { name: '2027 윈터스쿨', durationLabel: '약 4.5주', durationDays: 32 },
    ],
    features: ['수준별 현장수업', '1:1 클리닉', 'MY247 학습관리'],
    sourceUrl: 'https://anseong247.etoos.com/branch/recruit/winter2027.do',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'pk-daechi-sparta',
    name: 'PK대치스파르타 기숙학원',
    location: '경기도 남양주시 화도읍 경춘로2647번길 7-17',
    lat: 37.668038,
    lng: 127.371287,
    type: 'self-study',
    region: 'seoul',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'recheck',
    programs: [
      {
        name: '2027 윈터스쿨',
        durationLabel: '3주',
        durationDays: 21,
        totalPrice: 248,
      },
    ],
    features: ['신규 독학형 과정'],
    verifiedAt: '2026-08-31',
    note: '공식 출처와 포함 비용, 대상 학년을 추가 확인해야 합니다.',
  },
  {
    id: 'sumanhwi',
    name: '수만휘',
    location: '경기 안성시 죽산면 장계길 114',
    lat: 37.046305,
    lng: 127.405467,
    type: 'lecture',
    region: 'anseong',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [
      { name: '필수 학습능력 과정', durationLabel: '5주', durationDays: 35 },
      { name: '선택 자습강화 과정', durationLabel: '3주', durationDays: 21 },
    ],
    features: ['선택수업', '학습코칭', '자습강화 연장 과정'],
    sourceUrl: 'https://www.sumanhui.kr/m/class/class04.php',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'yongin-leekang',
    name: '용인이강',
    location: '경기도 용인시 처인구 양지면 주북로 371',
    lat: 37.247634,
    lng: 127.272879,
    type: 'lecture',
    region: 'yongin',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'recheck',
    programs: [
      {
        name: '2027 윈터스쿨',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 373,
      },
    ],
    features: ['100명 한정 소수정예', '대치 이강 강의', '밀착 학습·생활관리'],
    sourceUrl: 'https://ikangedu.com/',
    verifiedAt: '2026-08-31',
    note: '조사표의 금액과 공식 모집요강 공개 상태가 달라 재확인이 필요합니다.',
  },
  {
    id: 'gwangneung-hansaem',
    name: '광릉한샘',
    location: '경기 가평군 조종면 명지산로 540',
    lat: 37.914406,
    lng: 127.387225,
    type: 'lecture',
    region: 'etc',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'recheck',
    programs: [
      {
        name: '사관 대비',
        durationLabel: '4.5주',
        durationDays: 32,
        totalPrice: 397,
      },
      {
        name: '스프링캠프 종합',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 336,
      },
      {
        name: '스프링캠프 독학',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 240,
      },
    ],
    features: ['사관학교·경찰대 대비', '국수영·한국사', '면접·체력 준비'],
    sourceUrl: 'https://www.hsacademy.co.kr/',
    verifiedAt: '2026-08-31',
    note: '조사표의 금액과 공식 모집요강 공개 상태가 달라 재확인이 필요합니다.',
  },
  {
    id: 'yangji-bisangedu',
    name: '양지비상에듀',
    location: '경기도 용인시 처인구 양지면 식금로 45',
    lat: 37.256172,
    lng: 127.331318,
    type: 'lecture',
    region: 'yongin',
    gender: 'male',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '일정 공개 대기' }],
    features: ['국수영 정규수업', '학습·생활관리'],
    sourceUrl: 'https://www.man-visang.com/',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'etoos-lecture',
    name: '이투스 기숙학원',
    location: '경기도 광주시 초월읍 설월길 8',
    lat: 37.424942,
    lng: 127.286485,
    type: 'lecture',
    region: 'icheon-gwangju',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '일정 공개 대기' }],
    features: ['현장수업과 인강 연동', '수업 전후 관리'],
    sourceUrl: 'https://m-gisuk.etoos.com/normal/recruit/information',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'anseong-bisangedu',
    name: '안성비상에듀',
    location: '경기 안성시 원곡면 원암로 84-13',
    lat: 37.077118,
    lng: 127.361364,
    type: 'lecture',
    region: 'anseong',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'recheck',
    programs: [
      {
        name: '2027 윈터스쿨',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 365,
      },
    ],
    features: ['90명 내외 소수정예', '복습테스트', '수업+자기주도학습'],
    sourceUrl: 'https://www.e-topclass.com/',
    verifiedAt: '2026-08-31',
    note: '정규반 월 수강료와 윈터스쿨 총액이 혼용되지 않았는지 확인해야 합니다.',
  },
  {
    id: 'icheon-cheongsol',
    name: '이천청솔',
    location: '경기 이천시 신둔면 황무로338번길 317',
    lat: 37.295686,
    lng: 127.374675,
    type: 'lecture',
    region: 'icheon-gwangju',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'confirmed',
    programs: [
      {
        name: '2027 윈터스쿨',
        durationLabel: '약 4.2주',
        durationDays: 29,
        totalPrice: 352,
        priceSuffix: '이상',
        included: ['교습비 160만원', '숙식비 192만원'],
        excluded: ['교재', '모의고사', '단체복'],
      },
    ],
    features: ['국수영 정규수업', '수학 강화', '자습습관 형성'],
    sourceUrl: 'https://www.maincheongsol.co.kr/sub/01/0201.php',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'yeoksajeok-samyeong',
    name: '역사적사명',
    location: '경기 안성시 일죽면 판교길 65-9',
    lat: 37.071791,
    lng: 127.482128,
    type: 'lecture',
    region: 'anseong',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'confirmed',
    programs: [
      {
        name: '종합반',
        durationLabel: '6주',
        durationDays: 42,
        totalPrice: 480,
        included: ['교습비', '교재비 15만원'],
      },
      {
        name: '독학반',
        durationLabel: '4주',
        durationDays: 28,
        totalPrice: 280,
      },
    ],
    features: ['수준별 수업', '주말 테스트', '지속 학습관리'],
    sourceUrl: 'https://www.ysedu.co.kr/m/sub1_27_winter_1.html',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'yongin-bisangedu',
    name: '용인비상에듀',
    location: '경기도 용인시 처인구 포곡읍 금어로 227-1',
    lat: 37.27154,
    lng: 127.239065,
    type: 'lecture',
    region: 'yongin',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'confirmed',
    programs: [
      {
        name: '2027 윈터스쿨',
        durationLabel: '5주',
        durationDays: 35,
        totalPrice: 434,
        included: ['교습비', '숙식비', '필수 교재', '단체복'],
      },
    ],
    features: ['교과수업', '학습·생활관리', '성적·입시관리'],
    sourceUrl:
      'https://visanged.co.kr/index.php?action=SiteGoods&iGoodsCd=16&module=Goods&sCurrSortCd=001001&sMode=SELECT_FORM',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'russel-mega',
    name: '메가스터디 기숙학원 종합관',
    location: '경기 용인시 처인구 양지면 중부대로 2582-6',
    lat: 37.243645,
    lng: 127.321426,
    type: 'lecture',
    region: 'yongin',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '일정 공개 대기' }],
    features: ['수준별 수업', '자습전용관', 'QUBE 질의응답'],
    sourceUrl:
      'https://seochob.megastudy.net/campus_common/mozip/index.asp?code=113',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'gangnam-hyper-uidae',
    name: '강남하이퍼 의대관',
    location: '경기도 용인시 처인구 양지면 중부대로 2374-8',
    lat: 37.236173,
    lng: 127.301732,
    type: 'lecture',
    region: 'yongin',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '일정 공개 대기' }],
    features: ['의대 목표 최상위권 특화', '1:1 메디컬 PT', '모의고사 관리'],
    sourceUrl:
      'https://hyper-medicalgisuk.etoos.com/normal/recruit/information',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'russel-female',
    name: '러셀 여학생',
    location: '경기도 용인시 처인구 양지면 중부대로 2359',
    lat: 37.237839,
    lng: 127.302894,
    type: 'lecture',
    region: 'yongin',
    gender: 'female',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [
      {
        name: '2027 윈터스쿨',
        durationLabel: '2027.1.1~2.6',
        durationDays: 37,
      },
    ],
    features: ['여학생 전용', '선택형 현장수업', '자습전용관'],
    sourceUrl:
      'https://russelw.megastudy.net/campus_common/mozip/index.asp?idx=174',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'russel-male',
    name: '러셀 남학생',
    location: '경기도 용인시 처인구 백암면 고안로51번길 94',
    lat: 37.13728,
    lng: 127.41004,
    type: 'lecture',
    region: 'yongin',
    gender: 'male',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '일정 공개 대기' }],
    features: ['남학생 전용', '전 객실 2인실', '수업+자습 병행'],
    sourceUrl:
      'https://russelsm.megastudy.net/campus_common/mozip/index.asp?idx=173',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'gangnam-daesung-queta',
    name: '강남대성 퀘타',
    location: '경기도 이천시 마장면 서이천로337번길 55',
    lat: 37.25828,
    lng: 127.389178,
    type: 'lecture',
    region: 'icheon-gwangju',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '9월 1일 공개 예정' }],
    features: ['전 과목 수업', 'AXIOM Lab', '퀀텀라이브러리'],
    sourceUrl: 'https://campusk.dshw.co.kr/',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'gangnam-daesung-uidae',
    name: '강남대성 의대관',
    location: '경기도 이천시 호법면 이섭대천로527번길 25',
    lat: 37.222549,
    lng: 127.423659,
    type: 'lecture',
    region: 'icheon-gwangju',
    gender: 'coed',
    targetGrades: ['고3·의대 목표 최상위권'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '2027년 1월 1일 개강' }],
    features: ['의대 목표 특화', '강남대성 교과·콘텐츠', '학습관리 시스템'],
    sourceUrl: 'https://campusm.dshw.co.kr/',
    verifiedAt: '2026-08-31',
    note: '상세 모집요강은 2026년 10월 중순 공개 예정입니다.',
  },
  {
    id: 'russel-top',
    name: '러셀 최상위권',
    location: '경기도 용인시 처인구 원삼면 모래실로 16',
    lat: 37.194679,
    lng: 127.310406,
    type: 'lecture',
    region: 'yongin',
    gender: 'coed',
    targetGrades: ['최상위권 성적 기준 선발'],
    status: 'confirmed',
    programs: [
      {
        name: '윈터스쿨',
        durationLabel: '36일',
        durationDays: 36,
        totalPrice: 545,
        priceSuffix: '이상',
        excluded: ['단체복', '교재', '콘텐츠'],
      },
      {
        name: '윈터플러스',
        durationLabel: '13일',
        durationDays: 13,
        totalPrice: 182,
        priceSuffix: '이상',
        excluded: ['단체복', '교재', '콘텐츠'],
        note: '윈터스쿨 종료 후 운영되는 별도 단기 과정입니다.',
      },
    ],
    features: ['성적 기준 선발', '수준별 현장수업', '2인실 생활관'],
    sourceUrl:
      'https://russelhs.megastudy.net/campus_common/mozip/index.asp?idx=172',
    verifiedAt: '2026-08-31',
    note: '대표 비교가는 36일 윈터스쿨 총액입니다.',
  },
  {
    id: 'sidaeinjae',
    name: '시대인재N 기숙',
    location: '경기 용인시 처인구 포곡로 41-5',
    lat: 37.266228,
    lng: 127.209444,
    type: 'lecture',
    region: 'yongin',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '일정 공개 대기' }],
    features: ['상위권 강사진', '자체 콘텐츠·모의고사', '기숙형 학습관리'],
    sourceUrl: 'https://www.sdij.com/sdn/dict/dormitory/campus.asp?campus=108',
    verifiedAt: '2026-08-31',
  },
  {
    id: 'dokhak-nsup',
    name: '독학N숲',
    location: '경기도 남양주시 수동면 외방로135번길 12-30',
    type: 'self-study',
    region: 'seoul',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'unavailable',
    programs: [],
    features: ['운영 여부 확인 필요'],
    sourceUrl: 'https://www.namyangjuds.co.kr/',
    verifiedAt: '2026-08-31',
    note: '제공 자료 안에서 폐업과 가격 미확인이 함께 기록되어 운영 여부를 재확인해야 합니다.',
  },
  {
    id: 'daechi-kum100',
    name: '대치쿰100',
    location: '경기도 남양주시 화도읍 경춘로2647번길 7-17',
    type: 'self-study',
    region: 'seoul',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'unavailable',
    programs: [],
    features: ['운영 여부 확인 필요'],
    sourceUrl: 'https://cum100.kr/?page_id=6689',
    verifiedAt: '2026-08-31',
    note: '동일 장소의 PK대치스파르타 신규 운영 여부와 함께 확인해야 합니다.',
  },
  {
    id: 'gyeonggi-gwangju-bisang',
    name: '경기광주비상에듀독학기숙학원',
    location: '경기 광주시 (상세 주소 확인 필요)',
    type: 'self-study',
    region: 'icheon-gwangju',
    gender: 'coed',
    targetGrades: ['재학생'],
    status: 'pending',
    programs: [{ name: '2027 윈터스쿨', durationLabel: '일정 공개 대기' }],
    features: ['신규 독학형 과정'],
    verifiedAt: '2026-08-31',
    note: '공식 모집요강, 주소와 가격을 확인한 뒤 지도에 표시합니다.',
  },
];

export function getRepresentativeWinterProgram(
  school: WinterSchool
): WinterProgram | null {
  const pricedPrograms = school.programs.filter(
    (program): program is WinterProgram & { totalPrice: number } =>
      typeof program.totalPrice === 'number'
  );

  if (pricedPrograms.length === 0) return null;

  return [...pricedPrograms].sort((a, b) => {
    const aDistance = Math.abs(
      (a.durationDays ?? Number.MAX_SAFE_INTEGER) - 35
    );
    const bDistance = Math.abs(
      (b.durationDays ?? Number.MAX_SAFE_INTEGER) - 35
    );
    if (aDistance !== bDistance) return aDistance - bDistance;

    // 4주와 6주가 똑같이 가까우면 연장·단축 과정이 아닌 긴 본과정을 우선한다.
    const durationDifference = (b.durationDays ?? 0) - (a.durationDays ?? 0);
    if (durationDifference !== 0) return durationDifference;
    return b.totalPrice - a.totalPrice;
  })[0];
}

export function getFiveWeekEquivalentWinterPrice(
  school: WinterSchool
): number | null {
  const program = getRepresentativeWinterProgram(school);
  if (!program?.totalPrice || !program.durationDays) return null;
  return (program.totalPrice * 35) / program.durationDays;
}

export function getWeeklyWinterPrice(program: WinterProgram): number | null {
  if (!program.totalPrice || !program.durationDays) return null;
  return (program.totalPrice * 7) / program.durationDays;
}
