// 2027학년도 수능 후 논술 대학별 일정 (2026.10.20 기준)
// 출처: 각 대학 2027학년도 수시 모집요강·입학처 공지. 칼럼 2027-nonsul-schedule 본문 표와 같은 자료다.

export type NonsulMinimum = 'required' | 'none' | 'partial';

export interface NonsulSession {
  /** 'MM-DD' */
  date: string;
  track: string;
  time: string;
}

export interface NonsulUniversity {
  name: string;
  aliases?: string[];
  minimum: NonsulMinimum;
  minimumNote?: string;
  sessions: NonsulSession[];
  notice: string;
  note?: string;
}

export const NONSUL_BASE_DATE = '2026년 10월 20일';
export const SUNEUNG_DATE = '11-19';

export const NONSUL_DATES: { date: string; label: string; weekday: string }[] =
  [
    { date: '11-21', label: '11/21', weekday: '토' },
    { date: '11-22', label: '11/22', weekday: '일' },
    { date: '11-23', label: '11/23', weekday: '월' },
    { date: '11-24', label: '11/24', weekday: '화' },
    { date: '11-25', label: '11/25', weekday: '수' },
    { date: '11-27', label: '11/27', weekday: '금' },
    { date: '11-28', label: '11/28', weekday: '토' },
    { date: '11-29', label: '11/29', weekday: '일' },
    { date: '11-30', label: '11/30', weekday: '월' },
    { date: '12-01', label: '12/1', weekday: '화' },
    { date: '12-05', label: '12/5', weekday: '토' },
    { date: '12-06', label: '12/6', weekday: '일' },
  ];

export const NONSUL_UNIVERSITIES: NonsulUniversity[] = [
  {
    name: '가천대',
    minimum: 'required',
    sessions: [
      { date: '11-29', track: '의예·한의예·약학', time: '공지 예정' },
      {
        date: '11-30',
        track: '인문·간호·바이오로직스·화공생명배터리',
        time: '공지 예정',
      },
      { date: '12-01', track: '자연', time: '공지 예정' },
    ],
    notice: '11/17(화)',
  },
  {
    name: '가톨릭대',
    minimum: 'required',
    sessions: [
      { date: '11-22', track: '의예', time: '10:00~11:40' },
      { date: '11-22', track: '약학', time: '10:00~11:30' },
    ],
    notice: '고사 3일 전',
    note: '의예·약학 외 학과는 10/11(일)에 이미 시행',
  },
  {
    name: '강남대',
    minimum: 'none',
    sessions: [
      { date: '11-28', track: '인문사회계', time: '10:00 (60분)' },
      { date: '11-28', track: '공학계·자유전공학부', time: '14:00 (60분)' },
    ],
    notice: '11/20(금)',
  },
  {
    name: '건국대',
    aliases: ['건대'],
    minimum: 'required',
    sessions: [
      { date: '11-21', track: '인문·통합', time: '09:20~11:00' },
      { date: '11-21', track: '자연', time: '14:00~15:40' },
    ],
    notice: '고사 3~4일 전',
  },
  {
    name: '경기대',
    minimum: 'none',
    sessions: [{ date: '11-27', track: '전 모집단위', time: '공지 예정' }],
    notice: '11/20(금)',
  },
  {
    name: '경북대',
    minimum: 'required',
    sessions: [
      { date: '11-28', track: '인문', time: '입실 마감 09:00' },
      { date: '11-28', track: '자연계열1', time: '입실 마감 15:00' },
      { date: '11-28', track: '자연계열2', time: '입실 마감 16:00' },
    ],
    notice: '11/24(화)',
  },
  {
    name: '경희대',
    minimum: 'required',
    sessions: [
      { date: '11-21', track: '인문·체육', time: '09:00~11:00' },
      { date: '11-21', track: '의약학', time: '15:00~17:00' },
      { date: '11-22', track: '자연', time: '09:00~11:00' },
      { date: '11-22', track: '사회(경영·정경 등)', time: '15:00~17:00' },
    ],
    notice: '11/18(수)',
  },
  {
    name: '고려대',
    aliases: ['고대'],
    minimum: 'required',
    sessions: [
      {
        date: '11-21',
        track: '자연',
        time: '입실 마감 08:30 또는 12:30 (모집단위별, 80분)',
      },
      {
        date: '11-22',
        track: '인문',
        time: '입실 마감 08:30 또는 12:30 (모집단위별, 80분)',
      },
    ],
    notice: '11/17(화)',
  },
  {
    name: '고려대(세종)',
    aliases: ['고려대세종', '고대세종'],
    minimum: 'required',
    sessions: [
      { date: '11-28', track: '약학 외', time: '입실 마감 09:40 (120분)' },
      { date: '11-28', track: '약학', time: '입실 마감 14:30 (120분)' },
    ],
    notice: '11/26(목)',
  },
  {
    name: '광운대',
    minimum: 'none',
    sessions: [
      {
        date: '11-28',
        track: '자연',
        time: '10:00~12:00 또는 14:30~16:30 (모집단위별)',
      },
      {
        date: '11-29',
        track: '인문',
        time: '10:00~12:00 또는 14:30~16:30 (모집단위별)',
      },
    ],
    notice: '고사 3일 전',
  },
  {
    name: '국민대',
    minimum: 'required',
    sessions: [
      {
        date: '12-05',
        track: '인문',
        time: '09:00~10:30 또는 15:00~16:30 (모집단위별)',
      },
      {
        date: '12-06',
        track: '자연',
        time: '09:00~10:30 또는 15:00~16:30 (모집단위별)',
      },
    ],
    notice: '11/30(월)',
  },
  {
    name: '덕성여대',
    minimum: 'required',
    sessions: [
      { date: '11-29', track: '자연(과학기술·약학)', time: '09:30~11:00' },
      { date: '11-29', track: '인문·사회', time: '14:30~16:00' },
    ],
    notice: '11/24(화)',
  },
  {
    name: '동국대',
    minimum: 'required',
    sessions: [
      { date: '11-22', track: '자연', time: '09:30~11:00' },
      { date: '11-22', track: '인문(사회과학·경영)', time: '13:00~14:40' },
      { date: '11-22', track: '인문(문과·법과 등)', time: '16:30~18:10' },
    ],
    notice: '11/18(수)',
  },
  {
    name: '동덕여대',
    minimum: 'required',
    sessions: [
      { date: '11-28', track: '인문사회', time: '10:00~11:00' },
      { date: '11-28', track: '자연', time: '14:30~15:30' },
    ],
    notice: '11/25(수)',
  },
  {
    name: '부산대',
    minimum: 'required',
    sessions: [
      { date: '11-28', track: '자연', time: '09:30~11:10' },
      { date: '11-28', track: '인문·사회', time: '15:30~17:10' },
    ],
    notice: '11/24(화)',
  },
  {
    name: '삼육대',
    minimum: 'required',
    sessions: [
      { date: '11-23', track: '응시일 11/18 공지', time: '공지 예정' },
      { date: '11-24', track: '응시일 11/18 공지', time: '공지 예정' },
    ],
    notice: '11/18(수)',
  },
  {
    name: '서강대',
    minimum: 'required',
    sessions: [
      {
        date: '11-21',
        track: '자연',
        time: '16:00~17:40 또는 19:00~20:40 (모집단위별)',
      },
      {
        date: '11-22',
        track: '인문',
        time: '16:00~17:40 또는 19:00~20:40 (모집단위별)',
      },
    ],
    notice: '11월 중',
  },
  {
    name: '서울과기대',
    aliases: ['서울과학기술대', '과기대'],
    minimum: 'none',
    sessions: [{ date: '11-23', track: '전 모집단위', time: '11:00~12:40' }],
    notice: '입학처 공지',
  },
  {
    name: '서울여대',
    minimum: 'none',
    sessions: [
      { date: '11-21', track: '인문사회', time: '10:00~11:30' },
      { date: '11-21', track: '자연', time: '14:30~16:00' },
    ],
    notice: '고사 3일 전',
  },
  {
    name: '성균관대',
    aliases: ['성대'],
    minimum: 'required',
    sessions: [
      {
        date: '11-21',
        track: '언어형',
        time: '08:30~10:10 또는 13:00~14:40 (모집단위별)',
      },
      {
        date: '11-22',
        track: '수리형(의예·약학 포함)',
        time: '08:30~10:10 / 13:00~14:40 / 17:00~18:40 (의예·약학 17:00)',
      },
    ],
    notice: '11/3(화)',
  },
  {
    name: '세종대',
    minimum: 'required',
    sessions: [
      { date: '11-28', track: '인문', time: '09:00~11:00' },
      { date: '11-28', track: '자유전공', time: '14:00~16:00' },
      { date: '11-29', track: '인공지능융합', time: '09:00~11:00' },
      {
        date: '11-29',
        track: '자연과학·생명과학·공과',
        time: '14:00~16:00',
      },
    ],
    notice: '11/20(금)',
  },
  {
    name: '수원대',
    minimum: 'none',
    sessions: [
      { date: '11-21', track: '자연', time: '공지 예정' },
      { date: '11-22', track: '인문', time: '공지 예정' },
    ],
    notice: '고사 일주일 전',
  },
  {
    name: '숙명여대',
    minimum: 'required',
    sessions: [
      { date: '11-21', track: '자연', time: '10:00~11:40' },
      { date: '11-21', track: '인문 일부·의류학과', time: '14:30~16:10' },
      { date: '11-22', track: '인문 일부', time: '10:00~11:40' },
    ],
    notice: '11/17(화)',
  },
  {
    name: '숭실대',
    minimum: 'required',
    sessions: [
      { date: '11-21', track: '자연', time: '10:00~11:40' },
      { date: '11-21', track: '인문', time: '15:00~16:40' },
      { date: '11-21', track: '경상계열', time: '18:30~20:10' },
    ],
    notice: '11/17(화)',
  },
  {
    name: '신한대',
    minimum: 'none',
    sessions: [{ date: '11-29', track: '전 모집단위', time: '09:20부터' }],
    notice: '입학처 공지',
  },
  {
    name: '아주대',
    minimum: 'partial',
    minimumNote: '의학·약학만 있음',
    sessions: [
      { date: '12-05', track: '공과·자연과학 등', time: '09:00' },
      { date: '12-05', track: '첨단ICT·소프트웨어융합', time: '14:00' },
      { date: '12-05', track: '의학', time: '19:00' },
      { date: '12-06', track: '경영·인문·사회과학 등', time: '09:00' },
      { date: '12-06', track: '약학', time: '14:00' },
    ],
    notice: '입학처 공지',
  },
  {
    name: '이화여대',
    aliases: ['이대'],
    minimum: 'required',
    sessions: [
      {
        date: '11-28',
        track: '인문',
        time: '08:30~12:10 또는 14:20~18:00 (모집단위별, 100분)',
      },
      { date: '11-29', track: '자연', time: '08:30~12:10 (100분)' },
      { date: '11-29', track: '의예·약학', time: '14:20~18:00 (100분)' },
    ],
    notice: '11/24(화)',
  },
  {
    name: '인하대',
    minimum: 'partial',
    minimumNote: '의예만 있음',
    sessions: [
      { date: '12-05', track: '인문', time: '09:00~10:40' },
      {
        date: '12-06',
        track: '자연',
        time: '09:00~10:40 또는 13:30~15:10 (모집단위별)',
      },
      { date: '12-06', track: '의예', time: '13:30~15:10' },
    ],
    notice: '11/18(수)',
  },
  {
    name: '중앙대',
    aliases: ['중대'],
    minimum: 'partial',
    minimumNote: '다빈치캠퍼스만 없음',
    sessions: [
      {
        date: '11-28',
        track: '자연(일반형)',
        time: '10:00~12:00 또는 14:00~16:00 (모집단위별)',
      },
      {
        date: '11-29',
        track: '인문(일반형)',
        time: '10:00~12:00 또는 14:00~16:00 (모집단위별)',
      },
    ],
    notice: '11/24(화)',
    note: '창의형은 10/11(일)에 이미 시행',
  },
  {
    name: '한국공학대',
    aliases: ['한국공대', '공학대'],
    minimum: 'none',
    sessions: [
      {
        date: '11-22',
        track: '전 모집단위',
        time: '10:00 또는 14:30 (모집단위별)',
      },
    ],
    notice: '11/19(목) 수능 당일',
  },
  {
    name: '한국기술교육대',
    aliases: ['한기대', '코리아텍'],
    minimum: 'none',
    sessions: [
      { date: '11-25', track: '공학융합', time: '10:00~11:20' },
      { date: '11-25', track: 'ICT융합·사회융합', time: '14:00~15:20' },
    ],
    notice: '입학처 공지',
  },
  {
    name: '한국외대',
    aliases: ['외대'],
    minimum: 'required',
    sessions: [
      {
        date: '11-28',
        track: '모집단위별',
        time: '10:00~11:30 또는 15:00~16:30',
      },
      {
        date: '11-29',
        track: '모집단위별(자연·공과 포함)',
        time: '10:00~11:30 또는 15:00~16:30',
      },
    ],
    notice: '11/25(수)',
  },
  {
    name: '한국항공대',
    aliases: ['항공대'],
    minimum: 'required',
    sessions: [
      { date: '11-21', track: '공과·AI융합 등', time: '10:00~11:30' },
      { date: '11-21', track: '항공·경영 등', time: '15:00~16:30' },
    ],
    notice: '11/19(목) 수능 당일',
  },
  {
    name: '한신대',
    minimum: 'none',
    sessions: [
      { date: '12-05', track: '인문', time: '10:00~11:20' },
      { date: '12-05', track: '자연', time: '14:30~15:50' },
    ],
    notice: '11/16(월)부터',
  },
  {
    name: '한양대',
    minimum: 'required',
    sessions: [
      { date: '11-28', track: '상경', time: '09:30~11:00' },
      {
        date: '11-28',
        track: '인문',
        time: '13:30~15:00 또는 17:00~18:30',
      },
      {
        date: '11-29',
        track: '자연',
        time: '09:30~11:00 / 13:30~15:00 / 17:00~18:30 (의예 17:00)',
      },
    ],
    notice: '11/23(월) 이후',
  },
  {
    name: '홍익대(세종)',
    aliases: ['홍익대세종', '홍대세종'],
    minimum: 'required',
    sessions: [
      { date: '11-22', track: '자연', time: '10:00까지 입실' },
      { date: '11-22', track: '인문', time: '15:00까지 입실' },
    ],
    notice: '11/11(수) 수험표 출력',
  },
];
