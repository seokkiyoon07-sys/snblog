'use client';

import { useEffect, useRef, useState } from 'react';

const todayCellClass =
  'ring-2 ring-[#1a73e8] bg-blue-50 dark:bg-blue-950 animate-[todayPulse_2s_ease-in-out_infinite]';
const todayStyle = `@keyframes todayPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(26,115,232,0.4); } 50% { box-shadow: 0 0 8px 3px rgba(26,115,232,0.3); } }`;

export default function AcademicCalendar2026() {
  const todayRef = useRef<HTMLTableCellElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const currentYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  const [selectedYear, setSelectedYear] = useState(2026);
  const [viewMode, setViewMode] = useState<'all' | number>('all');
  const [mobileHalf, setMobileHalf] = useState<1 | 2>(1); // 1: 상반기, 2: 하반기
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSundayDots, setShowSundayDots] = useState(true);

  const isToday = (year: number, month: number, day: number): boolean => {
    return year === currentYear && month === todayMonth && day === todayDay;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (
      selectedYear === currentYear &&
      todayRef.current &&
      tableContainerRef.current
    ) {
      const container = tableContainerRef.current;
      const cell = todayRef.current;
      const row = cell.parentElement;
      if (row) {
        const rowTop = row.offsetTop;
        const containerHeight = container.clientHeight;
        const scrollTo = rowTop - containerHeight / 2 + row.clientHeight / 2;
        container.scrollTop = Math.max(0, scrollTo);
      }
    } else if (tableContainerRef.current) {
      tableContainerRef.current.scrollTop = 0;
    }
  }, [selectedYear, currentYear]);

  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const getDaysInMonth = (year: number): { [key: number]: number } => {
    return {
      1: 31,
      2: isLeapYear(year) ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };
  };

  const daysInMonth = getDaysInMonth(selectedYear);

  const isSunday = (year: number, month: number, day: number): boolean => {
    const date = new Date(year, month - 1, day);
    return date.getDay() === 0;
  };

  const holidaysByYear: { [key: number]: string[] } = {
    2025: [
      '1-1',
      '1-28',
      '1-29',
      '1-30',
      '3-1',
      '5-5',
      '6-6',
      '8-15',
      '10-3',
      '10-5',
      '10-6',
      '10-7',
      '10-9',
      '12-25',
    ],
    2026: [
      '1-1',
      '2-16',
      '2-17',
      '2-18',
      '3-1',
      '5-5',
      '5-24',
      '6-6',
      '8-15',
      '9-24',
      '9-25',
      '9-26',
      '10-3',
      '10-9',
      '12-25',
    ],
    2027: [
      '1-1',
      '2-6',
      '2-7',
      '2-8',
      '3-1',
      '5-5',
      '5-13',
      '6-6',
      '8-15',
      '9-14',
      '9-15',
      '9-16',
      '10-3',
      '10-9',
      '12-25',
    ],
  };

  const holidays = holidaysByYear[selectedYear] || [];
  const isHoliday = (month: number, day: number): boolean =>
    holidays.includes(`${month}-${day}`);

  const eventsByYear: {
    [key: number]: {
      [key: string]: {
        text: string;
        type:
          | 'holiday'
          | 'exam'
          | 'kice'
          | 'csat'
          | 'csatResult'
          | 'examday'
          | 'vacation'
          | 'daeuf'
          | 'admission'
          | 'surf';
      };
    };
  } = {
    2025: {
      '1-1': { text: '신정', type: 'holiday' },
      '1-29': { text: '설날', type: 'holiday' },
      '3-1': { text: '삼일절', type: 'holiday' },
      '3-27': { text: '교육청', type: 'exam' },
      '3-28': { text: '시행', type: 'examday' },
      '5-5': { text: '어린이날', type: 'holiday' },
      '5-8': { text: '교육청', type: 'exam' },
      '5-9': { text: '시행', type: 'examday' },
      '6-4': { text: '평가원', type: 'kice' },
      '6-6': { text: '현충일', type: 'holiday' },
      '7-10': { text: '교육청', type: 'exam' },
      '7-11': { text: '시행', type: 'examday' },
      '8-15': { text: '광복절', type: 'holiday' },
      '9-3': { text: '평가원', type: 'kice' },
      '10-3': { text: '개천절', type: 'holiday' },
      '10-6': { text: '추석', type: 'holiday' },
      '10-9': { text: '한글날', type: 'holiday' },
      '10-16': { text: '교육청', type: 'exam' },
      '10-17': { text: '시행', type: 'examday' },
      '11-13': { text: '수능', type: 'csat' },
      '12-25': { text: '크리스마스', type: 'holiday' },
    },
    2026: {
      '1-1': { text: '신정', type: 'holiday' },
      '1-26': { text: '서프', type: 'surf' },
      '2-15': { text: '선택휴가', type: 'vacation' },
      '2-16': { text: '', type: 'vacation' },
      '2-17': { text: '설날', type: 'vacation' },
      '2-18': { text: '', type: 'vacation' },
      '3-1': { text: '삼일절', type: 'holiday' },
      '3-16': { text: '서프', type: 'surf' },
      '3-17': { text: '더프', type: 'daeuf' },
      '3-24': { text: '교육청', type: 'exam' },
      '3-25': { text: '시행', type: 'examday' },
      '3-26': { text: '선택휴가', type: 'vacation' },
      '3-27': { text: '', type: 'vacation' },
      '3-28': { text: '', type: 'vacation' },
      '3-29': { text: '', type: 'vacation' },
      '4-17': { text: '더프', type: 'daeuf' },
      '4-18': { text: '의무휴가', type: 'vacation' },
      '4-19': { text: '', type: 'vacation' },
      '4-20': { text: '', type: 'vacation' },
      '4-21': { text: '', type: 'vacation' },
      '4-22': { text: '', type: 'vacation' },
      '4-26': { text: '서프', type: 'surf' },
      '5-5': { text: '어린이날', type: 'holiday' },
      '5-7': { text: '교육청', type: 'exam' },
      '5-8': { text: '시행', type: 'examday' },
      '5-14': { text: '선택휴가', type: 'vacation' },
      '5-15': { text: '', type: 'vacation' },
      '5-16': { text: '', type: 'vacation' },
      '5-17': { text: '', type: 'vacation' },
      '5-20': { text: '더프', type: 'daeuf' },
      '5-24': { text: '석가탄신', type: 'holiday' },
      '5-25': { text: '서프', type: 'surf' },
      '6-4': { text: '평가원', type: 'kice' },
      '6-5': { text: '선택휴가', type: 'vacation' },
      '6-6': { text: '현충일', type: 'vacation' },
      '6-7': { text: '', type: 'vacation' },
      '6-8': { text: '', type: 'vacation' },
      '6-28': { text: '서프', type: 'surf' },
      '7-2': { text: '선택휴가', type: 'vacation' },
      '7-3': { text: '', type: 'vacation' },
      '7-4': { text: '', type: 'vacation' },
      '7-5': { text: '', type: 'vacation' },
      '7-8': { text: '교육청', type: 'exam' },
      '7-9': { text: '시행', type: 'examday' },
      '7-18': { text: '더프', type: 'daeuf' },
      '7-25': { text: '서프', type: 'surf' },
      '8-6': { text: '의무휴가', type: 'vacation' },
      '8-7': { text: '', type: 'vacation' },
      '8-8': { text: '', type: 'vacation' },
      '8-9': { text: '', type: 'vacation' },
      '8-10': { text: '', type: 'vacation' },
      '8-15': { text: '광복절', type: 'holiday' },
      '8-17': { text: '서프', type: 'surf' },
      '8-18': { text: '더프', type: 'daeuf' },
      '9-2': { text: '평가원', type: 'kice' },
      '9-3': { text: '선택휴가', type: 'vacation' },
      '9-4': { text: '', type: 'vacation' },
      '9-5': { text: '', type: 'vacation' },
      '9-6': { text: '', type: 'vacation' },
      '9-7': { text: '수시접수', type: 'admission' },
      '9-8': { text: '', type: 'admission' },
      '9-9': { text: '', type: 'admission' },
      '9-10': { text: '', type: 'admission' },
      '9-11': { text: '접수마감', type: 'admission' },
      '9-16': { text: '더프', type: 'daeuf' },
      '9-24': { text: '서프', type: 'surf' },
      '9-25': { text: '추석', type: 'holiday' },
      '10-3': { text: '개천절', type: 'holiday' },
      '10-8': { text: '선택휴가', type: 'vacation' },
      '10-9': { text: '서프', type: 'surf' },
      '10-10': { text: '', type: 'vacation' },
      '10-11': { text: '', type: 'vacation' },
      '10-15': { text: '더프', type: 'daeuf' },
      '10-20': { text: '교육청', type: 'exam' },
      '10-21': { text: '시행', type: 'examday' },
      '11-2': { text: '서프', type: 'surf' },
      '11-19': { text: '수능', type: 'csat' },
      '12-11': { text: '수능성적', type: 'csatResult' },
      '12-18': { text: '수시발표', type: 'admission' },
      '12-25': { text: '크리스마스', type: 'holiday' },
    },
    2027: {
      '1-1': { text: '신정', type: 'holiday' },
      '2-7': { text: '설날', type: 'holiday' },
      '3-1': { text: '삼일절', type: 'holiday' },
      '5-5': { text: '어린이날', type: 'holiday' },
      '5-13': { text: '석가탄신', type: 'holiday' },
      '6-6': { text: '현충일', type: 'holiday' },
      '8-15': { text: '광복절', type: 'holiday' },
      '9-15': { text: '추석', type: 'holiday' },
      '10-3': { text: '개천절', type: 'holiday' },
      '10-9': { text: '한글날', type: 'holiday' },
      '11-18': { text: '수능', type: 'csat' },
      '12-25': { text: '크리스마스', type: 'holiday' },
    },
  };

  const events = eventsByYear[selectedYear] || {};

  // 이벤트 타입별 색상 (Google Calendar 스타일)
  const getEventStyle = (
    type:
      | 'holiday'
      | 'exam'
      | 'kice'
      | 'csat'
      | 'csatResult'
      | 'examday'
      | 'vacation'
      | 'daeuf'
      | 'admission'
      | 'surf',
    isToday: boolean
  ) => {
    if (isToday) return 'bg-[#1a73e8] text-white';
    switch (type) {
      case 'holiday':
        return 'bg-[#f28b82] text-[#5f2120]'; // 연한 빨강
      case 'exam':
        return 'bg-[#4285f4] text-white font-medium'; // 파란색 (교육청)
      case 'kice':
        return 'bg-[#81c995] text-[#1e4620]'; // 연한 초록 (평가원)
      case 'csat':
        return 'bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white font-bold ring-2 ring-[#6d28d9] shadow-md shadow-purple-300'; // 보라색 그라데이션 + 테두리
      case 'csatResult':
        return 'bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white font-bold ring-2 ring-[#6d28d9] shadow-md shadow-purple-300'; // 보라색 (수능성적)
      case 'examday':
        return 'bg-[#4285f4] text-white font-medium'; // 교육청과 동일
      case 'vacation':
        return 'bg-[#b3e5fc] text-[#01579b]'; // 연한 하늘색 (휴가)
      case 'daeuf':
        return 'bg-[#ff9800] text-white font-medium'; // 주황색 (더프)
      case 'admission':
        return 'bg-[#e91e63] text-white font-medium'; // 핑크색 (대입)
      case 'surf':
        return 'bg-[#00bcd4] text-white font-medium'; // 청록색 (서프)
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      {/* 오늘 표시 애니메이션 */}
      <style jsx global>{`
        ${todayStyle}
      `}</style>
      {/* 프린트 스타일 */}
      <style jsx global>{`
        @media print {
          /* ========================================= */
          /* 공통 설정 */
          /* ========================================= */
          @page {
            size: A4 landscape;
            margin: 0; /* 브라우저 기본 여백 제거, body padding으로 제어 */
          }

          /* 기본 레이아웃 초기화 */
          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            width: 297mm !important; /* A4 landscape width */
            height: 210mm !important; /* A4 landscape height */
            overflow: hidden !important; /* 1페이지만 나오도록 강제 */
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          /* 배경색 강제 출력 */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          /* 불필요한 UI 숨기기 - 강화 */
          aside,
          footer,
          nav,
          .sidebar,
          .fixed,
          .print\\:hidden,
          [class*='modal'],
          [class*='fullscreen'],
          details,
          .prose > h1,
          .order-2 {
            display: none !important;
            position: absolute !important;
            left: -9999px !important;
            width: 0 !important;
            height: 0 !important;
            visibility: hidden !important;
          }

          /* 글로벌 헤더 (검색바, 토글 등) 숨기기 */
          body > div > div > div > header.border-b,
          .min-h-screen > header,
          .max-w-6xl.mx-auto > *:first-child:not(.grid) {
            display: none !important;
            height: 0 !important;
            visibility: hidden !important;
          }

          /* 검색바, select 등 폼 요소 */
          .max-w-6xl input,
          .max-w-6xl select,
          .max-w-6xl form {
            display: none !important;
          }

          /* py 패딩 제거 */
          .sm\\:py-6,
          .lg\\:py-8 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          /* 메인 컨테이너 리셋 */
          .max-w-6xl,
          .container,
          main,
          .min-h-screen {
            max-width: none !important;
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            overflow: visible !important;
          }

          /* 그리드 레이아웃 무력화 */
          .grid.grid-cols-1 {
            display: block !important;
          }

          /* 블로그 레이아웃 요소 */
          .lg\\:col-span-3,
          .order-1 {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
          }

          /* ========================================= */
          /* 연간 일정표 (Print Yearly) */
          /* ========================================= */

          body.print-yearly .print-monthly-area {
            display: none !important;
          }

          body.print-yearly .print-table-area {
            display: block !important;
            visibility: visible !important;
            width: 287mm !important;
            max-height: 200mm !important;
            margin: 3mm 5mm !important;
            padding: 0 !important;
            border: none !important;
            overflow: hidden !important;
          }

          body.print-yearly .print-table-area table {
            width: 100% !important;
            font-size: 7.5pt !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
          }

          body.print-yearly .print-table-area th,
          body.print-yearly .print-table-area td {
            padding: 1px 1px !important;
            vertical-align: middle !important;
            height: 5.2mm !important;
            max-height: 5.2mm !important;
            border: 1px solid #ccc !important;
            overflow: hidden !important;
          }

          body.print-yearly .print-title {
            display: block !important;
            text-align: center !important;
            font-size: 14pt !important;
            font-weight: bold !important;
            margin-bottom: 2mm !important;
            margin-top: 0 !important;
            padding: 0 !important;
            color: black !important;
          }

          body.print-yearly .print-table-area span {
            font-size: 6.5pt !important;
          }

          /* ========================================= */
          /* 이벤트 스타일 (프린트용) */
          /* ========================================= */

          /* 휴가 - 연한 하늘색 배경 (삼일절 선택휴가 등) */
          .bg-\\[\\#b3e5fc\\] {
            background-color: #b3e5fc !important;
            color: #01579b !important;
          }

          /* 더프/교육청 모의고사 - 주황색 띠지 */
          .bg-\\[\\#ff9800\\] {
            background-color: #ff9800 !important;
            color: white !important;
          }

          /* 서프(시대인재 서바이벌) - 청록색 */
          .bg-\\[\\#00bcd4\\] {
            background-color: #00bcd4 !important;
            color: white !important;
          }

          /* 평가원 모의고사 - 연한 초록 */
          .bg-\\[\\#81c995\\] {
            background-color: #81c995 !important;
            color: #1e4620 !important;
          }

          /* 교육청 모의고사 - 파란색 */
          .bg-\\[\\#4285f4\\] {
            background-color: #4285f4 !important;
            color: white !important;
          }

          /* 공휴일 - 연한 빨강 */
          .bg-\\[\\#f28b82\\] {
            background-color: #f28b82 !important;
            color: #5f2120 !important;
          }

          /* 수능 - 보라색 그라데이션 */
          .bg-gradient-to-r.from-\\[\\#7c3aed\\] {
            background: linear-gradient(to right, #7c3aed, #9333ea) !important;
            color: white !important;
          }

          /* 대입 - 핑크색 */
          .bg-\\[\\#e91e63\\] {
            background-color: #e91e63 !important;
            color: white !important;
          }

          /* ========================================= */
          /* 월별 일정표 (Print Monthly) */
          /* ========================================= */

          body.print-monthly .print-table-area {
            display: none !important;
          }

          body.print-monthly .print-monthly-area {
            display: block !important;
            visibility: visible !important;
            width: 287mm !important;
            max-height: 200mm !important;
            margin: 3mm 5mm !important;
            padding: 3mm !important;
            border: none !important;
            overflow: hidden !important;
            background: white !important;
          }

          body.print-monthly .print-monthly-area > div {
            padding: 2mm !important;
            border: none !important;
          }

          body.print-monthly .print-monthly-title {
            font-size: 16pt !important;
            font-weight: 600 !important;
            text-align: center !important;
            margin-bottom: 3mm !important;
            margin-top: 0 !important;
            padding: 0 !important;
            display: block !important;
            color: #1a73e8 !important;
          }

          body.print-monthly .print-monthly-grid {
            display: grid !important;
            grid-template-columns: repeat(7, 1fr) !important;
            gap: 0 !important;
            border: 1px solid #dadce0 !important;
            border-radius: 2mm !important;
            overflow: hidden !important;
          }

          body.print-monthly .print-monthly-grid > div {
            min-height: 0 !important;
            height: 26mm !important;
            max-height: 26mm !important;
            border: 1px solid #e8e8e8 !important;
            margin: 0 !important;
            padding: 1.5mm !important;
            overflow: hidden !important;
          }

          body.print-monthly .print-monthly-cell {
            min-height: 0 !important;
            height: 26mm !important;
            max-height: 26mm !important;
          }

          /* 월별 캘린더 - 휴가 배경색 (연한 하늘색) */
          body.print-monthly .print-monthly-cell.bg-\\[\\#e1f5fe\\] {
            background-color: #e1f5fe !important;
          }

          /* 월별 캘린더 - 공휴일 배경색 (연한 빨강) */
          body.print-monthly .print-monthly-cell.bg-\\[\\#fce4e4\\] {
            background-color: #fce4e4 !important;
          }

          body.print-monthly .print-monthly-cell > div:first-child {
            font-size: 10pt !important;
            font-weight: 500 !important;
            margin-bottom: 1mm !important;
          }

          body.print-monthly .print-monthly-cell > div:not(:first-child) {
            font-size: 7pt !important;
            line-height: 1.2 !important;
            margin-top: 0.5mm !important;
          }
        }
      `}</style>

      {/* Google Calendar 스타일 */}
      <main className="bg-white dark:bg-[#202124] font-sans">
        {/* 상단 헤더 - Google 스타일 */}
        <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#202124] sticky top-0 z-20 print:hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-2 gap-2 md:gap-0">
            {/* 1열 (모바일): 로고 + 우측 컨트롤 */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        fill="#4285f4"
                      />
                      <rect x="3" y="4" width="18" height="5" fill="#1a73e8" />
                      <text
                        x="12"
                        y="17"
                        textAnchor="middle"
                        fill="white"
                        fontSize="8"
                        fontWeight="600"
                      >
                        {todayDay}
                      </text>
                    </svg>
                  </div>
                  <span className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-normal">
                    학사일정
                  </span>
                </div>
              </div>

              {/* 우측: 크게보기 + 프린트 (모바일에서는 여기로 이동) */}
              <div className="flex md:hidden items-center gap-1">
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors print:hidden"
                  title="크게보기"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    document.body.classList.add(
                      viewMode !== 'all' ? 'print-monthly' : 'print-yearly'
                    );
                    window.print();
                    document.body.classList.remove(
                      'print-monthly',
                      'print-yearly'
                    );
                  }}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors print:hidden"
                  title="인쇄"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 2열 (모바일): 네비게이션 (중앙) */}
            <div className="flex items-center justify-center w-full md:w-auto gap-2">
              <button
                onClick={() => setSelectedYear(currentYear)}
                className="px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                오늘
              </button>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    setSelectedYear(Math.max(2025, selectedYear - 1))
                  }
                  className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelectedYear(Math.min(2027, selectedYear + 1))
                  }
                  className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <span className="text-lg md:text-xl font-normal text-gray-800 dark:text-gray-100 min-w-[80px] md:min-w-[100px] text-center">
                {selectedYear}년
              </span>
            </div>

            {/* 우측: 크게보기 + 프린트 (데스크탑) */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => setIsFullscreen(true)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors print:hidden"
                title="크게보기"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  document.body.classList.add(
                    viewMode !== 'all' ? 'print-monthly' : 'print-yearly'
                  );
                  window.print();
                  document.body.classList.remove(
                    'print-monthly',
                    'print-yearly'
                  );
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors print:hidden"
                title="인쇄"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* 메인 컨텐츠 */}
          <main className="flex-1 p-1 md:p-4 max-w-full overflow-hidden">
            {/* 보기 모드 탭 */}
            <div className="flex gap-1 mb-4 print:hidden overflow-x-auto pb-2">
              <button
                onClick={() => setViewMode('all')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                  viewMode === 'all'
                    ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                연간
              </button>
              {/* 모바일 반기 토글 (연간뷰일 때만 표시) */}
              {viewMode === 'all' && (
                <div className="flex md:hidden bg-gray-100 dark:bg-gray-800 rounded-md p-1 ml-2">
                  <button
                    onClick={() => setMobileHalf(1)}
                    className={`px-3 py-0.5 text-xs rounded-sm transition-all ${mobileHalf === 1 ? 'bg-white shadow-sm text-blue-600 font-bold' : 'text-gray-500'}`}
                  >
                    1~6월
                  </button>
                  <button
                    onClick={() => setMobileHalf(2)}
                    className={`px-3 py-0.5 text-xs rounded-sm transition-all ${mobileHalf === 2 ? 'bg-white shadow-sm text-blue-600 font-bold' : 'text-gray-500'}`}
                  >
                    7~12월
                  </button>
                </div>
              )}
              {months.map((month, index) => (
                <button
                  key={index}
                  onClick={() => setViewMode(index + 1)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                    viewMode === index + 1
                      ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>

            {/* 월별 보기 */}
            {viewMode !== 'all' && (
              <div className="bg-white dark:bg-[#292a2d] border border-gray-200 dark:border-gray-700 rounded-lg print-monthly-area max-w-full overflow-hidden">
                <div className="p-2 md:p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 print-monthly-title">
                    {selectedYear}년 {viewMode}월
                  </h3>
                </div>
                <div className="p-1 md:p-4 max-w-full overflow-hidden">
                  <div className="grid grid-cols-7 print-monthly-grid">
                    {/* 요일 헤더 */}
                    {['일', '월', '화', '수', '목', '금', '토'].map(
                      (dayName, i) => (
                        <div
                          key={dayName}
                          className={`py-2 text-center text-xs font-medium border-b border-gray-200 dark:border-gray-700 ${
                            i === 0
                              ? 'text-red-500'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          {dayName}
                        </div>
                      )
                    )}
                    {/* 빈 셀 */}
                    {Array.from({
                      length: new Date(selectedYear, viewMode - 1, 1).getDay(),
                    }).map((_, i) => (
                      <div
                        key={`empty-${i}`}
                        className="min-h-[60px] md:min-h-[100px] print:min-h-0 border-b border-r border-gray-100 dark:border-gray-800"
                      />
                    ))}
                    {/* 날짜 셀 */}
                    {Array.from(
                      { length: daysInMonth[viewMode] },
                      (_, i) => i + 1
                    ).map(day => {
                      const eventKey = `${viewMode}-${day}`;
                      const event = events[eventKey];
                      const date = new Date(selectedYear, viewMode - 1, day);
                      const dayOfWeek = date.getDay();
                      const sunday = dayOfWeek === 0;
                      const holiday = isHoliday(viewMode, day);
                      const todayCell = isToday(selectedYear, viewMode, day);
                      const isVacation = event?.type === 'vacation';
                      const isHolidayEvent = event?.type === 'holiday';

                      // 배경색 결정
                      let bgClass = '';
                      if (isVacation) bgClass = 'bg-[#e1f5fe]';
                      else if (isHolidayEvent) bgClass = 'bg-[#fce4e4]';

                      return (
                        <div
                          key={day}
                          className={`min-h-[60px] md:min-h-[100px] print:min-h-0 p-0.5 md:p-1 border-b border-r border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors print-monthly-cell ${bgClass} ${todayCell ? todayCellClass : ''}`}
                        >
                          <div
                            className={`text-xs md:text-sm mb-0.5 md:mb-1 ${
                              todayCell
                                ? 'w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-[#1a73e8] text-white rounded-full text-[10px] md:text-sm'
                                : sunday || holiday
                                  ? 'text-red-500'
                                  : 'text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {day}
                          </div>
                          {event && !isVacation && !isHolidayEvent && (
                            <div
                              className={`text-[10px] md:text-xs px-0.5 md:px-1.5 py-0.5 rounded ${getEventStyle(event.type, todayCell)}`}
                            >
                              {event.text}
                            </div>
                          )}
                          {isHolidayEvent && (
                            <div className="text-[10px] md:text-xs text-[#5f2120] font-medium">
                              {event.text}
                            </div>
                          )}
                          {isVacation && event.text && (
                            <div className="text-[10px] md:text-xs text-[#01579b] font-medium">
                              {event.text}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 연간 일정표 - Google Calendar 그리드 스타일 */}
            <div
              ref={tableContainerRef}
              className={`bg-white dark:bg-[#292a2d] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden print-table-area max-w-full ${viewMode !== 'all' ? 'hidden print:block' : ''}`}
            >
              <h2 className="hidden print:block print-title text-center text-lg font-medium py-3 border-b border-gray-200">
                2027학년도 SN독학기숙학원 학사일정
              </h2>

              <div className="relative mt-8 md:mt-0 print:mt-0">
                {' '}
                {/* 모바일에서 상단 여백 추가 (일요일 토글 버튼 공간 확보) */}
                <div className="absolute top-[-30px] right-0 z-10 print:hidden flex items-center gap-2">
                  <label className="flex items-center gap-1 cursor-pointer text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    <input
                      type="checkbox"
                      checked={showSundayDots}
                      onChange={e => setShowSundayDots(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3 h-3"
                    />
                    일요일 표시전환
                  </label>
                </div>
                <div className="overflow-hidden max-w-full">
                  <table className="w-full table-fixed border-collapse text-[6px] md:text-xs">
                    <thead>
                      <tr>
                        <th className="w-[10%] md:w-[3%] py-0.5 md:py-2 text-center text-[8px] md:text-[11px] font-medium text-gray-500 dark:text-gray-400 border-b border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#35363a]">
                          일
                        </th>
                        {months.map((month, index) => {
                          const isFirstHalf = index < 6;
                          // 모바일: 선택된 반기가 아니면 숨김, 데스크탑/인쇄: 항상 표시
                          const hiddenClass =
                            mobileHalf === 1
                              ? !isFirstHalf
                                ? 'hidden md:table-cell print:table-cell'
                                : ''
                              : isFirstHalf
                                ? 'hidden md:table-cell print:table-cell'
                                : '';

                          // 모바일에서 마지막 보이는 컬럼의 테두리 처리
                          const isMobileLast =
                            mobileHalf === 1 ? index === 5 : index === 11;
                          const borderClass = isMobileLast
                            ? 'md:border-r print:border-r'
                            : 'border-r';

                          return (
                            <th
                              key={index}
                              className={`w-[15%] md:w-[8.08%] py-0.5 md:py-2 text-center text-[8px] md:text-[11px] font-medium text-gray-500 dark:text-gray-400 border-b ${borderClass} border-gray-200 dark:border-gray-700 last:border-r-0 bg-gray-50 dark:bg-[#35363a] ${hiddenClass}`}
                            >
                              {month}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {days.map(day => (
                        <tr
                          key={day}
                          className="hover:bg-gray-50 dark:hover:bg-[#35363a] transition-colors"
                        >
                          <td className="py-0 md:py-1 text-center text-[8px] md:text-[11px] font-medium text-gray-500 dark:text-gray-400 border-b border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#35363a]">
                            {day}
                          </td>
                          {months.map((_, monthIndex) => {
                            const monthNum = monthIndex + 1;
                            const isFirstHalf = monthIndex < 6;
                            const hiddenClass =
                              mobileHalf === 1
                                ? !isFirstHalf
                                  ? 'hidden md:table-cell print:table-cell'
                                  : ''
                                : isFirstHalf
                                  ? 'hidden md:table-cell print:table-cell'
                                  : '';

                            // 모바일에서 마지막 보이는 컬럼의 테두리 처리
                            const isMobileLast =
                              mobileHalf === 1
                                ? monthIndex === 5
                                : monthIndex === 11;
                            const borderClass = isMobileLast
                              ? 'md:border-r print:border-r'
                              : 'border-r';
                            const isValidDay = day <= daysInMonth[monthNum];
                            const eventKey = `${monthNum}-${day}`;
                            const event = events[eventKey];
                            const sunday =
                              isValidDay &&
                              isSunday(selectedYear, monthNum, day);
                            const todayCell =
                              isValidDay &&
                              isToday(selectedYear, monthNum, day);

                            const isVacation = event?.type === 'vacation';
                            const isHolidayEvent = event?.type === 'holiday';
                            const isCsat = event?.type === 'csat';

                            // 배경색 결정
                            let bgClass = '';
                            if (!isValidDay)
                              bgClass = 'bg-gray-50 dark:bg-[#1f1f1f]';
                            else if (isCsat) bgClass = 'bg-[#f3e8ff]';
                            else if (isVacation) bgClass = 'bg-[#e1f5fe]';
                            else if (isHolidayEvent) bgClass = 'bg-[#fce4e4]';

                            return (
                              <td
                                key={monthIndex}
                                ref={todayCell ? todayRef : null}
                                className={`py-0 px-0 md:py-0.5 md:px-0.5 text-center border-b ${borderClass} border-gray-200 dark:border-gray-700 last:border-r-0 relative ${bgClass} ${hiddenClass} ${todayCell ? todayCellClass : ''}`}
                              >
                                {isValidDay &&
                                  sunday &&
                                  !todayCell &&
                                  !event &&
                                  showSundayDots && (
                                    <span className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-red-400"></span>
                                  )}
                                {isValidDay && todayCell && !event && (
                                  <span className="inline-flex items-center justify-center w-3 h-3 md:w-5 md:h-5 bg-[#1a73e8] text-white text-[6px] md:text-[9px] font-medium rounded-full">
                                    ●
                                  </span>
                                )}
                                {isValidDay &&
                                  event &&
                                  !isVacation &&
                                  !isHolidayEvent && (
                                    <span
                                      className={`inline-block px-0 md:px-1.5 py-0 md:py-0.5 rounded text-[5px] md:text-[9px] leading-tight font-medium truncate max-w-full ${getEventStyle(event.type, todayCell)}`}
                                    >
                                      {event.text}
                                    </span>
                                  )}
                                {isValidDay && isHolidayEvent && (
                                  <span className="text-[5px] md:text-[8px] leading-tight text-[#5f2120] font-medium">
                                    {event.text}
                                  </span>
                                )}
                                {isValidDay && isVacation && event.text && (
                                  <span className="text-[5px] md:text-[8px] leading-tight text-[#01579b] font-medium">
                                    {event.text}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 범례 */}
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-600 dark:text-gray-400 print:hidden">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#fce4e4]"></span>
                <span>공휴일</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>일요일</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#81c995]"></span>
                <span>교육청</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#4285f4]"></span>
                <span>평가원</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#ff9800]"></span>
                <span>더프</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#00bcd4]"></span>
                <span>서프</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-gradient-to-r from-[#7c3aed] to-[#9333ea] ring-1 ring-[#6d28d9] shadow-sm"></span>
                <span>수능</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#e91e63]"></span>
                <span>대입</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#e1f5fe]"></span>
                <span>휴가</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#1a73e8]"></span>
                <span>오늘</span>
              </div>
            </div>

            {/* 안내 문구 */}
            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500 text-center">
              ※ 일정은 학원 사정에 따라 변경될 수 있습니다.
            </p>

            {/* SEO용 상세 일정 토글 */}
            <details className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg print:hidden">
              <summary className="px-4 py-3 bg-gray-50 dark:bg-[#35363a] rounded-t-lg cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#404144] transition-colors">
                📅 {selectedYear}년 상세 일정 보기
              </summary>
              <div className="p-4 space-y-4 text-sm text-gray-700 dark:text-gray-300">
                {selectedYear === 2026 && (
                  <>
                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        📚 모의고사 일정
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>3월 24일~25일</strong> - 3월 교육청 모의고사
                        </li>
                        <li>
                          <strong>5월 7일~8일</strong> - 5월 교육청 모의고사
                        </li>
                        <li>
                          <strong>6월 4일</strong> - 6월 평가원 모의고사
                        </li>
                        <li>
                          <strong>7월 8일~9일</strong> - 7월 교육청 모의고사
                        </li>
                        <li>
                          <strong>9월 2일</strong> - 9월 평가원 모의고사
                        </li>
                        <li>
                          <strong>10월 20일~21일</strong> - 10월 교육청 모의고사
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        📝 더프(대성) 일정
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>3월 17일</strong> - 3월 더프
                        </li>
                        <li>
                          <strong>4월 17일</strong> - 4월 더프
                        </li>
                        <li>
                          <strong>5월 20일</strong> - 5월 더프
                        </li>
                        <li>
                          <strong>7월 18일</strong> - 7월 더프
                        </li>
                        <li>
                          <strong>8월 18일</strong> - 8월 더프
                        </li>
                        <li>
                          <strong>9월 16일</strong> - 9월 더프
                        </li>
                        <li>
                          <strong>10월 15일</strong> - 10월 더프
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        🏃 서프(시대인재 서바이벌) 일정
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>1월 26일</strong> - 1월 서프
                        </li>
                        <li>
                          <strong>3월 16일</strong> - 3월 서프
                        </li>
                        <li>
                          <strong>4월 26일</strong> - 4월 서프
                        </li>
                        <li>
                          <strong>5월 25일</strong> - 5월 서프
                        </li>
                        <li>
                          <strong>6월 28일</strong> - 6월 서프
                        </li>
                        <li>
                          <strong>7월 25일</strong> - 7월 서프
                        </li>
                        <li>
                          <strong>8월 17일</strong> - 8월 서프
                        </li>
                        <li>
                          <strong>9월 24일</strong> - 9월 서프
                        </li>
                        <li>
                          <strong>10월 9일</strong> - 10월 서프
                        </li>
                        <li>
                          <strong>11월 2일</strong> - 11월 서프
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        🎓 대학입시 일정
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>9월 7일~11일</strong> - 수시 원서접수 기간
                        </li>
                        <li>
                          <strong>11월 19일</strong> - 2027학년도
                          대학수학능력시험
                        </li>
                        <li>
                          <strong>12월 11일</strong> - 수능 성적 발표일
                        </li>
                        <li>
                          <strong>12월 18일</strong> - 수시모집 합격자 발표 마감
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        🏖️ 휴가 일정
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>2월 15일~18일</strong> - 설날 연휴 선택휴가
                        </li>
                        <li>
                          <strong>3월 26일~29일</strong> - 3월 선택휴가
                        </li>
                        <li>
                          <strong>4월 18일~22일</strong> - 4월 의무휴가
                        </li>
                        <li>
                          <strong>5월 14일~17일</strong> - 5월 선택휴가
                        </li>
                        <li>
                          <strong>6월 5일~8일</strong> - 6월 선택휴가 (현충일
                          포함)
                        </li>
                        <li>
                          <strong>7월 2일~5일</strong> - 7월 선택휴가
                        </li>
                        <li>
                          <strong>8월 6일~10일</strong> - 8월 의무휴가
                        </li>
                        <li>
                          <strong>9월 3일~6일</strong> - 9월 선택휴가
                        </li>
                        <li>
                          <strong>10월 8일~11일</strong> - 10월 선택휴가 (한글날
                          포함)
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        🎌 공휴일
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>1월 1일</strong> - 신정
                        </li>
                        <li>
                          <strong>2월 16일~18일</strong> - 설날 연휴
                        </li>
                        <li>
                          <strong>3월 1일</strong> - 삼일절
                        </li>
                        <li>
                          <strong>5월 5일</strong> - 어린이날
                        </li>
                        <li>
                          <strong>5월 24일</strong> - 석가탄신일
                        </li>
                        <li>
                          <strong>6월 6일</strong> - 현충일
                        </li>
                        <li>
                          <strong>8월 15일</strong> - 광복절
                        </li>
                        <li>
                          <strong>9월 24일~26일</strong> - 추석 연휴
                        </li>
                        <li>
                          <strong>10월 3일</strong> - 개천절
                        </li>
                        <li>
                          <strong>10월 9일</strong> - 한글날
                        </li>
                        <li>
                          <strong>12월 25일</strong> - 크리스마스
                        </li>
                      </ul>
                    </section>
                  </>
                )}

                {selectedYear === 2025 && (
                  <>
                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        📚 모의고사 일정
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>3월 27일~28일</strong> - 3월 교육청 모의고사
                        </li>
                        <li>
                          <strong>5월 8일~9일</strong> - 5월 교육청 모의고사
                        </li>
                        <li>
                          <strong>6월 4일</strong> - 6월 평가원 모의고사
                        </li>
                        <li>
                          <strong>7월 10일~11일</strong> - 7월 교육청 모의고사
                        </li>
                        <li>
                          <strong>9월 3일</strong> - 9월 평가원 모의고사
                        </li>
                        <li>
                          <strong>10월 16일~17일</strong> - 10월 교육청 모의고사
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        🎓 대학입시 일정
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>11월 13일</strong> - 2026학년도
                          대학수학능력시험
                        </li>
                      </ul>
                    </section>
                  </>
                )}

                {selectedYear === 2027 && (
                  <>
                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        🎓 대학입시 일정
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>11월 18일</strong> - 2028학년도
                          대학수학능력시험
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-200">
                        🎌 공휴일
                      </h3>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>
                          <strong>1월 1일</strong> - 신정
                        </li>
                        <li>
                          <strong>2월 6일~8일</strong> - 설날 연휴
                        </li>
                        <li>
                          <strong>3월 1일</strong> - 삼일절
                        </li>
                        <li>
                          <strong>5월 5일</strong> - 어린이날
                        </li>
                        <li>
                          <strong>5월 13일</strong> - 석가탄신일
                        </li>
                        <li>
                          <strong>6월 6일</strong> - 현충일
                        </li>
                        <li>
                          <strong>8월 15일</strong> - 광복절
                        </li>
                        <li>
                          <strong>9월 14일~16일</strong> - 추석 연휴
                        </li>
                        <li>
                          <strong>10월 3일</strong> - 개천절
                        </li>
                        <li>
                          <strong>10월 9일</strong> - 한글날
                        </li>
                        <li>
                          <strong>12월 25일</strong> - 크리스마스
                        </li>
                      </ul>
                    </section>
                  </>
                )}
              </div>
            </details>
          </main>
        </div>
      </main>

      {/* 크게보기 모달 */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-[#202124] overflow-auto">
          {/* 모달 헤더 */}
          <div className="sticky top-0 z-10 bg-white dark:bg-[#202124] border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {selectedYear}년도 학사일정
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setSelectedYear(Math.max(2025, selectedYear - 1))
                  }
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelectedYear(Math.min(2027, selectedYear + 1))
                  }
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              title="닫기"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* 전체화면 테이블 */}
          <div className="p-4">
            <table className="w-full table-fixed border-collapse text-sm">
              <thead>
                <tr>
                  <th className="w-[3%] py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#35363a]">
                    일
                  </th>
                  {months.map((month, index) => (
                    <th
                      key={index}
                      className="w-[8.08%] py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-r border-gray-200 dark:border-gray-700 last:border-r-0 bg-gray-50 dark:bg-[#35363a]"
                    >
                      {month}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {days.map(day => (
                  <tr
                    key={day}
                    className="hover:bg-gray-50 dark:hover:bg-[#35363a] transition-colors"
                  >
                    <td className="py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#35363a]">
                      {day}
                    </td>
                    {months.map((_, monthIndex) => {
                      const monthNum = monthIndex + 1;
                      const isValidDay = day <= daysInMonth[monthNum];
                      const eventKey = `${monthNum}-${day}`;
                      const event = events[eventKey];
                      const sunday =
                        isValidDay && isSunday(selectedYear, monthNum, day);
                      const todayCell =
                        isValidDay && isToday(selectedYear, monthNum, day);

                      const isVacation = event?.type === 'vacation';
                      const isHolidayEvent = event?.type === 'holiday';
                      const isCsat = event?.type === 'csat';

                      let bgClass = '';
                      if (!isValidDay) bgClass = 'bg-gray-50 dark:bg-[#1f1f1f]';
                      else if (isCsat) bgClass = 'bg-[#f3e8ff]';
                      else if (isVacation) bgClass = 'bg-[#e1f5fe]';
                      else if (isHolidayEvent) bgClass = 'bg-[#fce4e4]';

                      return (
                        <td
                          key={monthIndex}
                          className={`py-1.5 px-1 text-center border-b border-r border-gray-200 dark:border-gray-700 last:border-r-0 relative ${bgClass} ${todayCell ? todayCellClass : ''}`}
                        >
                          {isValidDay && sunday && !todayCell && !event && (
                            <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-red-400"></span>
                          )}
                          {isValidDay && todayCell && !event && (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-[#1a73e8] text-white text-xs font-medium rounded-full">
                              ●
                            </span>
                          )}
                          {isValidDay &&
                            event &&
                            !isVacation &&
                            !isHolidayEvent && (
                              <span
                                className={`inline-block px-2 py-1 rounded text-xs font-medium ${getEventStyle(event.type, todayCell)}`}
                              >
                                {event.text}
                              </span>
                            )}
                          {isValidDay && isHolidayEvent && (
                            <span className="text-xs text-[#5f2120] font-medium">
                              {event.text}
                            </span>
                          )}
                          {isValidDay && isVacation && event.text && (
                            <span className="text-xs text-[#01579b] font-medium">
                              {event.text}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 범례 */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#fce4e4]"></span>
                <span>공휴일</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>일요일</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#81c995]"></span>
                <span>교육청</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#4285f4]"></span>
                <span>평가원</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#ff9800]"></span>
                <span>더프</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#00bcd4]"></span>
                <span>서프</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-gradient-to-r from-[#7c3aed] to-[#9333ea] ring-1 ring-[#6d28d9] shadow-sm"></span>
                <span>수능</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#e91e63]"></span>
                <span>대입</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#e1f5fe]"></span>
                <span>휴가</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#1a73e8]"></span>
                <span>오늘</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
