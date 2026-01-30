'use client';

import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import Script from 'next/script';

// 학원 종류
type SchoolType = 'self-study' | 'lecture';
const SCHOOL_TYPES = {
  'self-study': '독학기숙학원',
  'lecture': '수업기숙학원',
} as const;

// 가격대
type PriceRange = '200' | '300' | '400' | '500';
const PRICE_RANGES = {
  '200': '200만원 대',
  '300': '300만원 대',
  '400': '400만원 대',
  '500': '500만원 대',
} as const;

// 권역
type Region = 'seoul' | 'yongin' | 'yangpyeong' | 'icheon-gwangju' | 'anseong' | 'etc';
const REGIONS = {
  'seoul': '수도권',
  'yongin': '용인권',
  'yangpyeong': '양평권',
  'icheon-gwangju': '이천·광주',
  'anseong': '안성',
  'etc': '기타',
} as const;

// 성별
type Gender = 'male' | 'female' | 'coed';
const GENDERS = {
  'male': '남학생',
  'female': '여학생',
  'coed': '남녀공학',
} as const;

// 기숙학원 데이터 타입
interface BoardingSchool {
  id: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  monthlyPrice: number;
  priceDisplay: string;
  capacity: number;
  type: SchoolType;
  region: Region;
  gender: Gender;
  isTop5: boolean;
  top5Rank?: number;
}

// 실제 기숙학원 데이터
const schoolsData: BoardingSchool[] = [
  // 독학기숙학원
  { id: 'sn-academy', name: 'SN독학기숙학원', location: '경기도 양평군 용문로 147', lat: 37.483181, lng: 127.573370, monthlyPrice: 245, priceDisplay: '245~265만원', capacity: 257, type: 'self-study', region: 'yangpyeong', gender: 'male', isTop5: true, top5Rank: 1 },
  { id: 'eduselpa', name: '에듀셀파', location: '경기 양평군 양서면 교골길 59-2', lat: 37.558701, lng: 127.356641, monthlyPrice: 247, priceDisplay: '247만원', capacity: 260, type: 'self-study', region: 'yangpyeong', gender: 'male', isTop5: false },
  { id: 'honggiha', name: '홍기하독학기숙학원', location: '경기 양평군 양평읍 약수사길 34', lat: 37.513140, lng: 127.520186, monthlyPrice: 230, priceDisplay: '230만원', capacity: 100, type: 'self-study', region: 'yangpyeong', gender: 'coed', isTop5: false },
  { id: 'eduselpa-female', name: '에듀셀파 여학생', location: '경기 남양주시 화도읍 북한강로 1618', lat: 37.652144, lng: 127.369187, monthlyPrice: 247, priceDisplay: '247만원', capacity: 150, type: 'self-study', region: 'seoul', gender: 'female', isTop5: false },
  { id: 'dokhak-nsup', name: '독학N숲', location: '경기도 남양주시 수동면 외방로135번길 12-30', lat: 37.733056, lng: 127.307982, monthlyPrice: 245, priceDisplay: '245만원', capacity: 300, type: 'self-study', region: 'seoul', gender: 'coed', isTop5: false },
  { id: 'daechi-kum100', name: '대치쿰100', location: '경기도 남양주시 화도읍 경춘로2647번길 7-17', lat: 37.668038, lng: 127.371287, monthlyPrice: 269, priceDisplay: '269만원', capacity: 80, type: 'self-study', region: 'seoul', gender: 'coed', isTop5: false },
  { id: 'namanseong-bisang', name: '남안성비상에듀', location: '경기 안성시 삼죽면 진촌진말길 38', lat: 37.053663, lng: 127.361139, monthlyPrice: 265, priceDisplay: '240~290만원', capacity: 250, type: 'self-study', region: 'anseong', gender: 'coed', isTop5: false },
  { id: 'anseong-etoos247', name: '안성이투스247', location: '경기도 안성시 삼죽면 국사봉로 246-14', lat: 37.044089, lng: 127.343687, monthlyPrice: 302, priceDisplay: '292~312만원', capacity: 350, type: 'self-study', region: 'anseong', gender: 'coed', isTop5: false },
  { id: 'yeoju-itall', name: '여주 잇올', location: '경기도 여주시 산북면 금품1로 124-1', lat: 37.399200, lng: 127.456492, monthlyPrice: 265, priceDisplay: '265만원', capacity: 230, type: 'self-study', region: 'etc', gender: 'coed', isTop5: false },
  { id: 'icheon-etoos247', name: '이천이투스247', location: '경기도 이천시 마장면 이장로 115-10', lat: 37.264302, lng: 127.378645, monthlyPrice: 293, priceDisplay: '293만원+', capacity: 401, type: 'self-study', region: 'icheon-gwangju', gender: 'coed', isTop5: false },
  { id: 'icheon-itall-female', name: '이천 잇올(여학생)', location: '경기 이천시 마장면 서이천로337번길 64', lat: 37.258078, lng: 127.390071, monthlyPrice: 265, priceDisplay: '265만원', capacity: 200, type: 'self-study', region: 'icheon-gwangju', gender: 'female', isTop5: false },
  { id: 'etoos247-gwangju', name: '이투스247독학 광주', location: '경기 광주시 초월읍 두둘기길 68-21', lat: 37.401282, lng: 127.319155, monthlyPrice: 272, priceDisplay: '259~289만원', capacity: 300, type: 'self-study', region: 'icheon-gwangju', gender: 'coed', isTop5: false },

  // 수업기숙학원
  { id: 'sidaeinjae', name: '시대인재', location: '경기 용인시 처인구 포곡로 41-5', lat: 37.266228, lng: 127.209444, monthlyPrice: 433, priceDisplay: '417.5~449.5만원', capacity: 1400, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: true, top5Rank: 2 },
  { id: 'gangnam-daesung-queta', name: '강남대성 퀘타', location: '경기도 이천시 마장면 서이천로337번길 55', lat: 37.258280, lng: 127.389178, monthlyPrice: 390, priceDisplay: '390만원', capacity: 700, type: 'lecture', region: 'icheon-gwangju', gender: 'coed', isTop5: true, top5Rank: 4 },
  { id: 'gangnam-daesung-uidae', name: '강남대성 의대관', location: '경기도 이천시 호법면 이섭대천로527번길 25', lat: 37.222549, lng: 127.423659, monthlyPrice: 409, priceDisplay: '409만원', capacity: 1200, type: 'lecture', region: 'icheon-gwangju', gender: 'coed', isTop5: true, top5Rank: 3 },
  { id: 'gangnam-hyper-uidae', name: '강남하이퍼 의대관', location: '경기도 용인시 처인구 양지면 중부대로 2374-8', lat: 37.236173, lng: 127.301732, monthlyPrice: 362, priceDisplay: '362만원', capacity: 360, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: false },
  { id: 'etoos-lecture', name: '이투스', location: '경기도 광주시 초월읍 설월길 8', lat: 37.424942, lng: 127.286485, monthlyPrice: 346, priceDisplay: '330~362만원', capacity: 420, type: 'lecture', region: 'icheon-gwangju', gender: 'coed', isTop5: false },
  { id: 'russel-top', name: '러셀 최상위권', location: '경기도 용인시 처인구 원삼면 모래실로 16', lat: 37.194679, lng: 127.310406, monthlyPrice: 410, priceDisplay: '395~425만원', capacity: 900, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: true, top5Rank: 5 },
  { id: 'russel-mega', name: '러셀 메가스터디', location: '경기 용인시 처인구 양지면 중부대로 2582-6', lat: 37.243645, lng: 127.321426, monthlyPrice: 360, priceDisplay: '360만원', capacity: 410, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: false },
  { id: 'russel-male', name: '러셀 남학생', location: '경기도 용인시 처인구 백암면 고안로51번길 94', lat: 37.137280, lng: 127.410040, monthlyPrice: 380, priceDisplay: '380만원', capacity: 500, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: false },
  { id: 'russel-female', name: '러셀 여학생', location: '경기도 용인시 처인구 양지면 중부대로 2359', lat: 37.237839, lng: 127.302894, monthlyPrice: 370, priceDisplay: '360~380만원', capacity: 450, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: false },
  { id: 'yongin-bisangedu', name: '용인비상에듀', location: '경기도 용인시 처인구 포곡읍 금어로 227-1', lat: 37.271540, lng: 127.239065, monthlyPrice: 356, priceDisplay: '356만원', capacity: 218, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: false },
  { id: 'yongin-leekang', name: '용인이강', location: '경기도 용인시 처인구 양지면 주북로 371', lat: 37.247634, lng: 127.272879, monthlyPrice: 320, priceDisplay: '310~330만원', capacity: 135, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: false },
  { id: 'yangji-bisangedu', name: '양지비상에듀', location: '경기도 용인시 처인구 양지면 식금로 45', lat: 37.256172, lng: 127.331318, monthlyPrice: 340, priceDisplay: '340만원', capacity: 250, type: 'lecture', region: 'yongin', gender: 'coed', isTop5: false },
  { id: 'icheon-cheongsol', name: '이천청솔', location: '경기 이천시 신둔면 황무로338번길 317', lat: 37.295686, lng: 127.374675, monthlyPrice: 352, priceDisplay: '352만원', capacity: 250, type: 'lecture', region: 'icheon-gwangju', gender: 'coed', isTop5: false },
  { id: 'sumanhwi', name: '수만휘', location: '경기 안성시 죽산면 장계길 114', lat: 37.046305, lng: 127.405467, monthlyPrice: 315, priceDisplay: '315만원', capacity: 240, type: 'lecture', region: 'anseong', gender: 'coed', isTop5: false },
  { id: 'anseong-bisangedu', name: '안성비상에듀', location: '경기 안성시 원곡면 원암로 84-13', lat: 37.077118, lng: 127.361364, monthlyPrice: 348, priceDisplay: '348만원', capacity: 90, type: 'lecture', region: 'anseong', gender: 'coed', isTop5: false },
  { id: 'yeoksajeok-samyeong', name: '역사적사명', location: '경기 안성시 일죽면 판교길 65-9', lat: 37.071791, lng: 127.482128, monthlyPrice: 352, priceDisplay: '352만원', capacity: 370, type: 'lecture', region: 'anseong', gender: 'coed', isTop5: false },
  { id: 'gwangneung-hansaem', name: '광릉한샘', location: '경기 가평군 조종면 명지산로 540', lat: 37.914406, lng: 127.387225, monthlyPrice: 338, priceDisplay: '328~348만원', capacity: 210, type: 'lecture', region: 'etc', gender: 'coed', isTop5: false },
];

// 가격대별 마커 색상
function getPriceColor(price: number): string {
  if (price < 300) return '#22c55e';
  if (price < 400) return '#eab308';
  if (price < 500) return '#f97316';
  return '#ef4444';
}

// 가격대 판별
function getPriceRange(price: number): PriceRange {
  if (price < 300) return '200';
  if (price < 400) return '300';
  if (price < 500) return '400';
  return '500';
}

// 네이버 지도 타입 정의
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace naver {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace maps {
    class Map {
      constructor(element: HTMLElement, options: MapOptions);
      destroy(): void;
      panTo(latlng: LatLng): void;
      setSize(size: { width: number; height: number }): void;
    }
    class LatLng {
      constructor(lat: number, lng: number);
    }
    class Marker {
      constructor(options: MarkerOptions);
      setMap(map: Map | null): void;
    }
    class Point {
      constructor(x: number, y: number);
    }
    interface MapOptions {
      center: LatLng;
      zoom: number;
      minZoom?: number;
      maxZoom?: number;
      zoomControl?: boolean;
      zoomControlOptions?: {
        position: unknown;
      };
    }
    interface MarkerOptions {
      position: LatLng;
      map: Map;
      title?: string;
      icon?: {
        content: string;
        anchor: Point;
      };
    }
    const Position: {
      TOP_RIGHT: unknown;
    };
    const Event: {
      addListener(target: unknown, type: string, listener: () => void): void;
    };
  }
}

declare global {
  interface Window {
    naver: typeof naver;
  }
}

// 필터 버튼 컴포넌트
function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded-full transition-all ${
        active
          ? 'bg-emerald-600 text-white shadow-md'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
      }`}
    >
      {children}
    </button>
  );
}

// 학원 정보 카드 컴포넌트
function SchoolInfoCard({
  school,
  onClose,
}: {
  school: BoardingSchool;
  onClose: () => void;
}) {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {school.isTop5 && (
              <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded">
                ⭐ TOP 5
              </span>
            )}
            <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">
              {SCHOOL_TYPES[school.type]}
            </span>
            <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
              {REGIONS[school.region]}
            </span>
            <span className="px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
              {GENDERS[school.gender]}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {school.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
            {school.location}
          </p>
        </div>
      </div>

      {/* 정원 및 수강료 */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">정원</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{school.capacity}명</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">수강료 (월)</p>
          {school.id === 'sn-academy' ? (
            <div className="space-y-1">
              <p className="text-sm font-bold" style={{ color: getPriceColor(265) }}>2인실: 265만원</p>
              <p className="text-sm font-bold" style={{ color: getPriceColor(245) }}>3~4인실: 245만원</p>
            </div>
          ) : (
            <p className="text-lg font-bold" style={{ color: getPriceColor(school.monthlyPrice) }}>
              {school.priceDisplay}
            </p>
          )}
        </div>
      </div>

      {/* SN독학기숙학원 연락처 버튼 */}
      {school.id === 'sn-academy' && (
        <div className="grid grid-cols-2 gap-3 mt-4">
          <a
            href="tel:031-771-0300"
            className="flex items-center justify-center gap-2 py-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
          >
            <img src="/images/Data_LAB/phone.png" alt="전화" className="w-5 h-5" />
            <span className="text-sm font-medium">전화상담</span>
          </a>
          <a
            href="http://pf.kakao.com/_exjtgj/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/50 transition-colors"
          >
            <img src="/images/Data_LAB/KakaoTalk.png" alt="카카오톡" className="w-5 h-5" />
            <span className="text-sm font-medium">카카오톡 상담</span>
          </a>
        </div>
      )}

      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default function BoardingSchoolMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const modalMapRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<BoardingSchool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [mainMapZoom, setMainMapZoom] = useState(9);
  const mapInstanceRef = useRef<naver.maps.Map | null>(null);
  const modalMapInstanceRef = useRef<naver.maps.Map | null>(null);
  const markersRef = useRef<naver.maps.Marker[]>([]);
  const modalMarkersRef = useRef<naver.maps.Marker[]>([]);
  const currentLocationMarkerRef = useRef<naver.maps.Marker | null>(null);
  const modalCurrentLocationMarkerRef = useRef<naver.maps.Marker | null>(null);

  // 필터 상태
  const [selectedTypes, setSelectedTypes] = useState<Set<SchoolType>>(new Set());
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<Set<PriceRange>>(new Set());
  const [selectedRegions, setSelectedRegions] = useState<Set<Region>>(new Set());
  const [selectedGenders, setSelectedGenders] = useState<Set<Gender>>(new Set());
  const [showTop5Only, setShowTop5Only] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 제보 폼 상태
  const [feedbackSchool, setFeedbackSchool] = useState('');
  const [feedbackContent, setFeedbackContent] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  // 봇 방지용 간단한 수학 문제
  const [captchaA] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [captchaB] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  // 필터 토글 함수들
  const toggleType = useCallback((type: SchoolType) => {
    setSelectedTypes(prev => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  }, []);

  const togglePriceRange = useCallback((range: PriceRange) => {
    setSelectedPriceRanges(prev => {
      const next = new Set(prev);
      if (next.has(range)) {
        next.delete(range);
      } else {
        next.add(range);
      }
      return next;
    });
  }, []);

  const toggleRegion = useCallback((region: Region) => {
    setSelectedRegions(prev => {
      const next = new Set(prev);
      if (next.has(region)) {
        next.delete(region);
      } else {
        next.add(region);
      }
      return next;
    });
  }, []);

  const toggleGender = useCallback((gender: Gender) => {
    setSelectedGenders(prev => {
      const next = new Set(prev);
      if (next.has(gender)) {
        next.delete(gender);
      } else {
        next.add(gender);
      }
      return next;
    });
  }, []);

  // 잔디 웹훅으로 제보 전송
  const sendFeedback = useCallback(async () => {
    if (!feedbackSchool.trim() || !feedbackContent.trim()) {
      alert('학원명과 수정 사항을 모두 입력해주세요.');
      return;
    }

    // 봇 방지 검증
    if (parseInt(captchaAnswer) !== captchaA + captchaB) {
      alert('사람 확인 답이 틀렸습니다. 다시 확인해주세요.');
      return;
    }

    setIsSendingFeedback(true);
    try {
      const response = await fetch('https://wh.jandi.com/connect-api/webhook/13116580/11853050951612bffd7a7748a2fab30e', {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.tosslab.jandi-v2+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: `[기숙학원 가격지도 제보]\n학원명: ${feedbackSchool}\n수정사항: ${feedbackContent}`,
          connectColor: '#10b981',
          connectInfo: [{
            title: '학원명',
            description: feedbackSchool,
          }, {
            title: '수정 사항',
            description: feedbackContent,
          }],
        }),
      });

      if (response.ok) {
        setFeedbackSent(true);
        setFeedbackSchool('');
        setFeedbackContent('');
        setCaptchaAnswer('');
        setTimeout(() => setFeedbackSent(false), 3000);
      } else {
        alert('전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch {
      alert('전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSendingFeedback(false);
    }
  }, [feedbackSchool, feedbackContent, captchaAnswer, captchaA, captchaB]);

  // 테이블에서 학원 클릭 시 지도 이동 + 정보 표시
  const handleSchoolClick = useCallback((school: BoardingSchool) => {
    setSelectedSchool(school);
    if (mapInstanceRef.current && window.naver) {
      const latlng = new window.naver.maps.LatLng(school.lat, school.lng);
      mapInstanceRef.current.panTo(latlng);
      (mapInstanceRef.current as unknown as { setZoom: (level: number) => void }).setZoom(12);
    }
  }, []);

  // 필터 초기화
  const resetFilters = useCallback(() => {
    setSelectedTypes(new Set());
    setSelectedPriceRanges(new Set());
    setSelectedRegions(new Set());
    setSelectedGenders(new Set());
    setShowTop5Only(false);
  }, []);

  // 현위치 찾기
  const goToCurrentLocation = useCallback((forModal: boolean = false) => {
    if (!navigator.geolocation) {
      alert('브라우저가 위치 정보를 지원하지 않습니다.');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const latlng = new window.naver.maps.LatLng(latitude, longitude);

        const targetMap = forModal ? modalMapInstanceRef.current : mapInstanceRef.current;
        const markerRef = forModal ? modalCurrentLocationMarkerRef : currentLocationMarkerRef;

        if (targetMap) {
          targetMap.panTo(latlng);

          // 기존 현위치 마커 제거
          if (markerRef.current) {
            markerRef.current.setMap(null);
          }

          // 새 현위치 마커 생성
          markerRef.current = new window.naver.maps.Marker({
            position: latlng,
            map: targetMap,
            icon: {
              content: `
                <div style="
                  width: 20px;
                  height: 20px;
                  background-color: #3b82f6;
                  border: 3px solid white;
                  border-radius: 50%;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                "></div>
              `,
              anchor: new window.naver.maps.Point(10, 10),
            },
          });
        }
        setIsLocating(false);
      },
      (error) => {
        setIsLocating(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert('위치 정보 접근이 거부되었습니다.');
            break;
          case error.POSITION_UNAVAILABLE:
            alert('위치 정보를 사용할 수 없습니다.');
            break;
          case error.TIMEOUT:
            alert('위치 정보 요청 시간이 초과되었습니다.');
            break;
          default:
            alert('위치 정보를 가져올 수 없습니다.');
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  // 필터링된 학원 목록 (SN독학기숙학원은 항상 표시)
  const filteredSchools = useMemo(() => {
    return schoolsData.filter(school => {
      // SN독학기숙학원은 항상 표시 (권역 필터 무시)
      const isSN = school.id === 'sn-academy';

      if (showTop5Only && !school.isTop5) return false;
      if (selectedTypes.size > 0 && !selectedTypes.has(school.type)) return false;
      if (selectedPriceRanges.size > 0 && !selectedPriceRanges.has(getPriceRange(school.monthlyPrice))) return false;
      // SN은 권역 필터 무시
      if (!isSN && selectedRegions.size > 0 && !selectedRegions.has(school.region)) return false;
      if (selectedGenders.size > 0 && !selectedGenders.has(school.gender)) return false;
      return true;
    });
  }, [selectedTypes, selectedPriceRanges, selectedRegions, selectedGenders, showTop5Only]);

  // 활성 필터 개수
  const activeFilterCount = selectedTypes.size + selectedPriceRanges.size + selectedRegions.size + selectedGenders.size + (showTop5Only ? 1 : 0);

  // 마커 생성 함수 (줌 레벨에 따라 가격 표시)
  const createMarkers = useCallback((map: naver.maps.Map, schools: BoardingSchool[], setSchool: (s: BoardingSchool) => void, zoomLevel: number) => {
    const markers: naver.maps.Marker[] = [];
    const showPrice = zoomLevel >= 11; // 줌 레벨 11 이상이면 가격 표시

    // SN을 마지막에 렌더링하여 항상 맨 앞에 보이도록 정렬
    const sortedSchools = [...schools].sort((a, b) => {
      if (a.id === 'sn-academy') return 1;
      if (b.id === 'sn-academy') return -1;
      return 0;
    });

    sortedSchools.forEach(school => {
      const isSN = school.id === 'sn-academy';

      // SN독학기숙학원은 특별한 마커 디자인
      const markerContent = isSN
        ? `
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          ">
            <div style="
              background: rgba(0,0,0,0.6);
              color: white;
              padding: 2px 6px;
              border-radius: 8px;
              font-size: 8px;
              font-weight: bold;
              margin-bottom: 3px;
              white-space: nowrap;
            ">AI특화관</div>
            ${showPrice ? `
              <div style="
                color: white;
                font-size: 10px;
                font-weight: bold;
                margin-bottom: 2px;
                white-space: nowrap;
                text-shadow: 0 1px 3px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.5);
              ">${school.priceDisplay}</div>
            ` : ''}
            <div style="
              width: 50px;
              height: 50px;
              border-radius: 50%;
              border: 3px solid #10b981;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            ">
              <img src="/images/Data_LAB/SN_landscape1.png" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div style="
              background: linear-gradient(135deg, #10b981, #059669);
              color: white;
              padding: 4px 8px;
              border-radius: 12px;
              font-size: 10px;
              font-weight: bold;
              margin-top: 4px;
              box-shadow: 0 2px 6px rgba(0,0,0,0.2);
              white-space: nowrap;
            ">
              ⭐ SN독학기숙학원
            </div>
          </div>
        `
        : `
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          ">
            ${showPrice ? `
              <div style="
                color: white;
                font-size: 10px;
                font-weight: bold;
                margin-bottom: 2px;
                white-space: nowrap;
                text-shadow: 0 1px 3px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.5);
              ">${school.priceDisplay}</div>
            ` : ''}
            <div style="
              background-color: ${getPriceColor(school.monthlyPrice)};
              color: white;
              padding: 6px 10px;
              border-radius: 16px;
              font-size: 11px;
              font-weight: bold;
              box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              white-space: nowrap;
              max-width: 120px;
              overflow: hidden;
              text-overflow: ellipsis;
            ">
              ${school.name}
            </div>
          </div>
        `;

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(school.lat, school.lng),
        map: map,
        title: school.name,
        icon: {
          content: markerContent,
          anchor: isSN ? new window.naver.maps.Point(30, 40) : new window.naver.maps.Point(50, 15),
        },
      });

      window.naver.maps.Event.addListener(marker, 'click', () => {
        setSchool(school);
        map.panTo(new window.naver.maps.LatLng(school.lat, school.lng));
      });

      markers.push(marker);
    });
    return markers;
  }, []);

  // 메인 지도 초기화
  useEffect(() => {
    if (!isMapLoaded || !mapRef.current || !window.naver) return;

    const mapOptions: naver.maps.MapOptions = {
      center: new window.naver.maps.LatLng(37.3, 127.3),
      zoom: 9,
      minZoom: 6,
      maxZoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new window.naver.maps.Map(mapRef.current, mapOptions);
    mapInstanceRef.current = map;

    // 줌 변경 이벤트 리스너
    window.naver.maps.Event.addListener(map, 'zoom_changed', () => {
      const zoom = (map as unknown as { getZoom: () => number }).getZoom();
      setMainMapZoom(zoom);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, [isMapLoaded]);

  // 메인 지도 마커 업데이트 (줌 레벨 변경 시에도 업데이트)
  useEffect(() => {
    if (!mapInstanceRef.current || !window.naver) return;

    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = createMarkers(mapInstanceRef.current, filteredSchools, setSelectedSchool, mainMapZoom);
  }, [filteredSchools, isMapLoaded, createMarkers, mainMapZoom]);

  // 모달 지도 초기화
  useEffect(() => {
    if (!isModalOpen || !modalMapRef.current || !window.naver) return;

    // 약간의 딜레이를 주어 DOM이 렌더링된 후 지도 생성
    const timer = setTimeout(() => {
      if (!modalMapRef.current) return;

      const mapOptions: naver.maps.MapOptions = {
        center: new window.naver.maps.LatLng(37.3, 127.3),
        zoom: 9,
        minZoom: 6,
        maxZoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      };

      const map = new window.naver.maps.Map(modalMapRef.current, mapOptions);
      modalMapInstanceRef.current = map;

      // 마커 생성
      modalMarkersRef.current = createMarkers(map, filteredSchools, setSelectedSchool, 9);

      // 줌 변경 이벤트 리스너 (마커 생성 후에 등록)
      window.naver.maps.Event.addListener(map, 'zoom_changed', () => {
        const zoom = (map as unknown as { getZoom: () => number }).getZoom();
        // 마커 업데이트
        modalMarkersRef.current.forEach(marker => marker.setMap(null));
        modalMarkersRef.current = createMarkers(map, filteredSchools, setSelectedSchool, zoom);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      modalMarkersRef.current.forEach(marker => marker.setMap(null));
      modalMarkersRef.current = [];
      if (modalMapInstanceRef.current) {
        modalMapInstanceRef.current.destroy();
        modalMapInstanceRef.current = null;
      }
    };
  }, [isModalOpen, filteredSchools, createMarkers]);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // 모달 열릴 때 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div className="space-y-4">
      {/* 네이버 지도 스크립트 */}
      <Script
        src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=39m5xtkj2f"
        onLoad={() => setIsMapLoaded(true)}
        strategy="afterInteractive"
      />

      {/* 제목 섹션 */}
      <div className="text-center space-y-3">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
          📅 26.01.30 업데이트 완료
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          전국 기숙학원 가격, 한눈에 비교하세요
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
          기숙학원 선택, 정보 찾기가 어려우셨죠?
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          SN DataLAB에서 전국 기숙학원의 가격 정보를 한 곳에 모았습니다. 지도에서 원하는 지역을 클릭하면 해당 학원의 상세 정보를 바로 확인할 수 있습니다.
        </p>
      </div>

      {/* 필터 섹션 */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 space-y-4">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">필터</h3>
            {activeFilterCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                {activeFilterCount}
              </span>
            )}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({filteredSchools.length}개 학원)
            </span>
          </div>
          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              className="text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
            >
              초기화
            </button>
          )}
        </div>

        {/* 종류별 (항상 표시) */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">종류별</p>
          <div className="flex flex-wrap gap-2">
            {(Object.entries(SCHOOL_TYPES) as [SchoolType, string][]).map(([key, label]) => (
              <FilterButton key={key} active={selectedTypes.has(key)} onClick={() => toggleType(key)}>
                {label}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* 가격대별 (항상 표시) */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">가격대별</p>
          <div className="flex flex-wrap gap-2">
            {(Object.entries(PRICE_RANGES) as [PriceRange, string][]).map(([key, label]) => (
              <FilterButton key={key} active={selectedPriceRanges.has(key)} onClick={() => togglePriceRange(key)}>
                {label}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* 더 자세히 보기 토글 */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
        >
          <span>{isFilterOpen ? '간단히 보기' : '더 자세히 보기'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* 추가 필터 (펼쳤을 때만 표시) */}
        {isFilterOpen && (
          <div className="space-y-4 pt-2 border-t border-gray-200 dark:border-gray-700">
            {/* 권역별 */}
            <div className="space-y-2 pt-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">권역별</p>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(REGIONS) as [Region, string][]).map(([key, label]) => (
                  <FilterButton key={key} active={selectedRegions.has(key)} onClick={() => toggleRegion(key)}>
                    {label}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* 성별 */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">성별</p>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(GENDERS) as [Gender, string][]).map(([key, label]) => (
                  <FilterButton key={key} active={selectedGenders.has(key)} onClick={() => toggleGender(key)}>
                    {label}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* TOP 5 */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">추천</p>
              <div className="flex flex-wrap gap-2">
                <FilterButton active={showTop5Only} onClick={() => setShowTop5Only(!showTop5Only)}>
                  ⭐ TOP 5 기숙학원
                </FilterButton>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 범례 */}
      <div className="flex flex-wrap gap-4 text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-300">마커 색상:</span>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-600 dark:text-gray-400">200만원대</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="text-gray-600 dark:text-gray-400">300만원대</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500" />
          <span className="text-gray-600 dark:text-gray-400">400만원대</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-gray-600 dark:text-gray-400">500만원대</span>
        </div>
      </div>

      {/* 지도 컨테이너 - 모달 열릴 때 숨김 */}
      <div className={`relative ${isModalOpen ? 'invisible' : ''}`}>
        <div
          ref={mapRef}
          className="w-full h-[600px] rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
        >
          {!isMapLoaded && (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-500 dark:text-gray-400">
                지도를 불러오는 중...
              </div>
            </div>
          )}
        </div>

        {/* 지도 컨트롤 버튼들 */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {/* 전체 화면 버튼 */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            전체 화면
          </button>

          {/* 현위치 버튼 */}
          <button
            onClick={() => goToCurrentLocation(false)}
            disabled={isLocating}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            {isLocating ? (
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
            현위치
          </button>
        </div>
      </div>

      {/* 선택된 학원 정보 패널 */}
      {selectedSchool && !isModalOpen && (
        <SchoolInfoCard school={selectedSchool} onClose={() => setSelectedSchool(null)} />
      )}

      {/* AI 학습용 테이블 */}
      <div className="mt-6 sm:mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            전국 기숙학원 목록
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">
            {filteredSchools.length}개 학원 | 위 필터로 권역별/가격별 조회 가능
          </p>
        </div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-[10px] sm:text-xs">
            <thead className="bg-gray-100 dark:bg-gray-700/50 sticky top-0">
              <tr>
                <th className="px-1.5 sm:px-3 py-1.5 sm:py-2 text-left font-semibold text-gray-900 dark:text-white">학원명</th>
                <th className="px-1 sm:px-2 py-1.5 sm:py-2 text-center font-semibold text-gray-900 dark:text-white">구분</th>
                <th className="hidden sm:table-cell px-1 sm:px-2 py-1.5 sm:py-2 text-center font-semibold text-gray-900 dark:text-white text-[10px]">권역</th>
                <th className="px-1 sm:px-2 py-1.5 sm:py-2 text-center font-semibold text-gray-900 dark:text-white">정원</th>
                <th className="px-1 sm:px-2 py-1.5 sm:py-2 text-center font-semibold text-gray-900 dark:text-white">수강료</th>
                <th className="px-1 sm:px-2 py-1.5 sm:py-2 text-center font-semibold text-gray-900 dark:text-white">성별</th>
                <th className="px-1 sm:px-2 py-1.5 sm:py-2 text-center font-semibold text-gray-900 dark:text-white">주소</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
              {filteredSchools
                .sort((a, b) => {
                  // SN독학기숙학원을 맨 위로
                  if (a.id === 'sn-academy') return -1;
                  if (b.id === 'sn-academy') return 1;
                  return a.monthlyPrice - b.monthlyPrice;
                })
                .map(school => (
                <tr
                  key={school.id}
                  onClick={() => handleSchoolClick(school)}
                  className={`hover:bg-gray-50 dark:hover:bg-gray-700/30 cursor-pointer ${school.id === 'sn-academy' ? 'bg-emerald-50/50 dark:bg-emerald-900/10' : ''}`}
                >
                  <td className="px-1.5 sm:px-3 py-1.5 sm:py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {school.isTop5 && <span className="mr-0.5 text-[9px] sm:text-[10px]">⭐</span>}
                    {school.name}
                  </td>
                  <td className="px-1 sm:px-2 py-1.5 sm:py-2 text-center">
                    <span className={`inline-block px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] rounded ${
                      school.type === 'self-study'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    }`}>
                      {school.type === 'self-study' ? '독학' : '수업'}
                    </span>
                  </td>
                  <td className="hidden sm:table-cell px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[10px] text-gray-500 dark:text-gray-400">
                    {REGIONS[school.region].replace('권', '').replace('·', '/')}
                  </td>
                  <td className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-gray-900 dark:text-white whitespace-nowrap">
                    {school.capacity}
                  </td>
                  <td className="px-1 sm:px-2 py-1.5 sm:py-2 text-center font-bold whitespace-nowrap" style={{ color: getPriceColor(school.monthlyPrice) }}>
                    {school.priceDisplay}
                  </td>
                  <td className="px-1 sm:px-2 py-1.5 sm:py-2 text-center">
                    <span className={`inline-block px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] rounded ${
                      school.gender === 'male'
                        ? 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300'
                        : school.gender === 'female'
                        ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {school.gender === 'male' ? '남' : school.gender === 'female' ? '여' : '남/여'}
                    </span>
                  </td>
                  <td className="px-1 sm:px-2 py-1.5 sm:py-2 text-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); alert(school.location); }}
                      className="text-[9px] sm:text-[10px] text-blue-600 dark:text-blue-400 hover:underline px-1.5 py-1 min-w-[32px] min-h-[28px]"
                    >
                      보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI 학습용 데이터 (숨김) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: '전국 기숙학원 목록',
              description: '전국 기숙학원의 가격, 정원, 위치 정보를 제공합니다.',
              numberOfItems: filteredSchools.length,
              itemListElement: filteredSchools.map((school, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'EducationalOrganization',
                  name: school.name,
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: school.location,
                  },
                  description: `${SCHOOL_TYPES[school.type]} | ${REGIONS[school.region]} | 정원 ${school.capacity}명 | 월 ${school.priceDisplay} | ${GENDERS[school.gender]}`,
                },
              })),
            }),
          }}
        />
      </div>

      {/* 데이터 출처 및 제보 섹션 */}
      <div className="mt-6 space-y-4">
        {/* 데이터 출처 안내 */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-sm text-gray-600 dark:text-gray-400">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">데이터 출처 및 안내</h4>
          <ul className="space-y-1 list-disc list-inside">
            <li>가격 정보는 각 학원 공식 홈페이지 및 공개 자료를 기반으로 합니다</li>
            <li>2026년 1월 기준 정보이며, 실제 가격은 변동될 수 있습니다</li>
            <li>정확한 정보는 각 학원에 직접 문의해주세요</li>
          </ul>
        </div>

        {/* 제보 섹션 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">잘못된 정보가 있나요?</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">개발자에게 제보해 주세요. 바로 수정해 놓을게요.</p>

              {feedbackSent ? (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">제보가 전송되었습니다. 감사합니다!</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="학원 이름"
                      value={feedbackSchool}
                      onChange={(e) => setFeedbackSchool(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    />
                    <input
                      type="text"
                      placeholder="수정할 사항"
                      value={feedbackContent}
                      onChange={(e) => setFeedbackContent(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    />
                  </div>
                  {/* 봇 방지 수학 문제 */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      사람 확인: {captchaA} + {captchaB} =
                    </span>
                    <input
                      type="number"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      className="w-16 px-2 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    />
                  </div>
                  <button
                    onClick={sendFeedback}
                    disabled={isSendingFeedback || !feedbackSchool.trim() || !feedbackContent.trim() || !captchaAnswer}
                    className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSendingFeedback ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        제보하기
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 전체 화면 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  전국 기숙학원 가격 지도
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  마커를 클릭하면 상세 정보를 볼 수 있어요
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* 범례 */}
                <div className="hidden md:flex items-center gap-3 text-xs">
                  <span className="text-gray-500 dark:text-gray-400">마커 색상:</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-gray-600 dark:text-gray-400">200만원대</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-400">300만원대</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    <span className="text-gray-600 dark:text-gray-400">400만원대</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="text-gray-600 dark:text-gray-400">500만원대</span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {filteredSchools.length}개 학원
                </span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 모달 필터 */}
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {/* 종류별 */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">종류:</span>
                  <div className="flex gap-1">
                    {(Object.entries(SCHOOL_TYPES) as [SchoolType, string][]).map(([key, label]) => (
                      <FilterButton key={key} active={selectedTypes.has(key)} onClick={() => toggleType(key)}>
                        {label}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* 가격대별 */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">가격대:</span>
                  <div className="flex gap-1">
                    {(Object.entries(PRICE_RANGES) as [PriceRange, string][]).map(([key, label]) => (
                      <FilterButton key={key} active={selectedPriceRanges.has(key)} onClick={() => togglePriceRange(key)}>
                        {label}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* 권역별 */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">권역:</span>
                  <div className="flex gap-1 flex-wrap">
                    {(Object.entries(REGIONS) as [Region, string][]).map(([key, label]) => (
                      <FilterButton key={key} active={selectedRegions.has(key)} onClick={() => toggleRegion(key)}>
                        {label}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* 성별 */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">성별:</span>
                  <div className="flex gap-1">
                    {(Object.entries(GENDERS) as [Gender, string][]).map(([key, label]) => (
                      <FilterButton key={key} active={selectedGenders.has(key)} onClick={() => toggleGender(key)}>
                        {label}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* TOP 5 */}
                <FilterButton active={showTop5Only} onClick={() => setShowTop5Only(!showTop5Only)}>
                  ⭐ TOP 5
                </FilterButton>

                {/* 초기화 */}
                {activeFilterCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 underline"
                  >
                    필터 초기화
                  </button>
                )}
              </div>
            </div>

            {/* 모달 콘텐츠 */}
            <div className="flex-1 flex min-h-0 relative">
              {/* 지도 */}
              <div
                ref={modalMapRef}
                className="flex-1 bg-gray-100 dark:bg-gray-800"
              />

              {/* 모달 현위치 버튼 */}
              <button
                onClick={() => goToCurrentLocation(true)}
                disabled={isLocating}
                className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 z-10"
              >
                {isLocating ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                현위치
              </button>

              {/* 사이드 패널 - 선택된 학원 정보 */}
              {selectedSchool && (
                <div className="w-80 border-l border-gray-200 dark:border-gray-700 p-6 overflow-y-auto bg-white dark:bg-gray-900">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {selectedSchool.isTop5 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded">
                        ⭐ TOP 5
                      </span>
                    )}
                    <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">
                      {SCHOOL_TYPES[selectedSchool.type]}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                      {REGIONS[selectedSchool.region]}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                      {GENDERS[selectedSchool.gender]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedSchool.name}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {selectedSchool.location}
                  </p>

                  {/* 정원 및 수강료 */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">정원</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">{selectedSchool.capacity}명</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">수강료 (월)</p>
                      {selectedSchool.id === 'sn-academy' ? (
                        <div className="space-y-1">
                          <p className="text-sm font-bold" style={{ color: getPriceColor(265) }}>2인실: 265만원</p>
                          <p className="text-sm font-bold" style={{ color: getPriceColor(245) }}>3~4인실: 245만원</p>
                        </div>
                      ) : (
                        <p className="text-lg font-bold" style={{ color: getPriceColor(selectedSchool.monthlyPrice) }}>
                          {selectedSchool.priceDisplay}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SN독학기숙학원 연락처 버튼 */}
                  {selectedSchool.id === 'sn-academy' && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <a
                        href="tel:031-771-0300"
                        className="flex items-center justify-center gap-2 py-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                      >
                        <img src="/images/Data_LAB/phone.png" alt="전화" className="w-5 h-5" />
                        <span className="text-sm font-medium">전화상담</span>
                      </a>
                      <a
                        href="http://pf.kakao.com/_exjtgj/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/50 transition-colors"
                      >
                        <img src="/images/Data_LAB/KakaoTalk.png" alt="카카오톡" className="w-5 h-5" />
                        <span className="text-sm font-medium">카카오톡</span>
                      </a>
                    </div>
                  )}

                  {/* 닫기 버튼 */}
                  <button
                    onClick={() => setSelectedSchool(null)}
                    className="w-full py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    정보 닫기
                  </button>
                </div>
              )}
            </div>

            {/* 범례 (모달 하단 - 모바일용) */}
            <div className="md:hidden px-4 py-2 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center gap-3 text-xs bg-gray-50 dark:bg-gray-800">
              <span className="font-medium text-gray-700 dark:text-gray-300">마커 색상:</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-gray-600 dark:text-gray-400">200만원대</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="text-gray-600 dark:text-gray-400">300만원대</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span className="text-gray-600 dark:text-gray-400">400만원대</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-gray-600 dark:text-gray-400">500만원대</span>
              </div>
            </div>

            {/* ESC 키 안내 */}
            <div className="hidden md:block px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-center text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800">
              ESC를 눌러 닫기
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
