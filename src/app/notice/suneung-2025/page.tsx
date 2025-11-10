'use client';

import { useState } from 'react';

interface Student {
  studentId: string;
  name: string;
  phone: string;
  examLocation: string;
  studyRoom: string;
  studySeat: string;
  dormBuilding: string;
  dormRoom: string;
  secondLanguage: string;
  notes: string;
}

export default function SuneungSearchPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [student, setStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMasterMode, setIsMasterMode] = useState(false);
  const [masterPassword, setMasterPassword] = useState('');
  const [showMasterInput, setShowMasterInput] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setStudent(null);
    setLoading(true);

    try {
      const res = await fetch(
        `/api/students?name=${encodeURIComponent(name)}&phone=${phone}`
      );
      const data = await res.json();

      if (res.ok) {
        setStudent(data);
      } else {
        setError(data.error || '조회에 실패했습니다.');
      }
    } catch (err) {
      setError('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleMasterLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setStudents([]);
    setLoading(true);

    try {
      const res = await fetch(
        `/api/students?master=${encodeURIComponent(masterPassword)}`
      );
      const data = await res.json();

      if (res.ok) {
        setAllStudents(data.students);
        setStudents(data.students);
        setIsMasterMode(true);
        setShowMasterInput(false);
      } else {
        setError(data.error || '조회에 실패했습니다.');
      }
    } catch (err) {
      setError('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleMasterSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setStudents(allStudents);
      return;
    }

    const filtered = allStudents.filter(
      s =>
        s.name.includes(query) ||
        s.studentId.includes(query) ||
        s.phone.includes(query) ||
        s.examLocation.includes(query) ||
        s.studyRoom.includes(query) ||
        s.dormBuilding.includes(query) ||
        s.dormRoom.includes(query)
    );
    setStudents(filtered);
  };

  const handleLogout = () => {
    setIsMasterMode(false);
    setStudents([]);
    setAllStudents([]);
    setSearchQuery('');
    setMasterPassword('');
    setShowMasterInput(false);
  };

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <header className="mb-12 text-center">
        <div className="flex justify-end mb-4">
          {!isMasterMode ? (
            <button
              onClick={() => setShowMasterInput(!showMasterInput)}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              선생님 로그인
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              로그아웃
            </button>
          )}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          2025.11.13 수능 당일 학생정보 검색
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {isMasterMode
            ? '전체 학생 목록'
            : '학생 이름과 전화번호 뒷자리를 입력하여 고사장, 독서실, 기숙사 정보를 확인하세요.'}
        </p>
      </header>

      {/* 마스터 비밀번호 입력 */}
      {showMasterInput && !isMasterMode && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={handleMasterLogin} className="space-y-6">
            <div>
              <label
                htmlFor="masterPassword"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                선생님 비밀번호
              </label>
              <input
                id="masterPassword"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={masterPassword}
                onChange={e => setMasterPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading || !masterPassword}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {loading ? '확인 중...' : '전체 학생 목록 보기'}
            </button>
          </form>
        </div>
      )}

      {/* 검색 폼 (일반 모드에서만 표시) */}
      {!isMasterMode && !showMasterInput && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                학생 이름
              </label>
              <input
                id="name"
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                전화번호 뒷자리 4자리
              </label>
              <input
                id="phone"
                type="text"
                placeholder="1234"
                value={phone}
                onChange={e =>
                  setPhone(e.target.value.replace(/\D/g, '').slice(0, 4))
                }
                maxLength={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !name || phone.length !== 4}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {loading ? '조회 중...' : '학생 정보 조회'}
            </button>
          </form>
        </div>
      )}

      {/* 에러 메시지 */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
          <p className="text-red-800 dark:text-red-300 text-center">{error}</p>
        </div>
      )}

      {/* 학생 정보 카드 */}
      {student && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {student.name} 학생 (학번: {student.studentId})
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              전화번호: ***-****-{student.phone}
            </p>
          </div>

          {/* 수능응시 고사장 */}
          <div className="border-l-4 border-green-300 dark:border-green-700 pl-4 py-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 dark:bg-green-600 rounded-full mr-2"></span>
              수능응시 고사장
            </h3>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              {student.examLocation}
            </p>
          </div>

          {/* 독서실 정보 */}
          <div className="border-l-4 border-green-300 dark:border-green-700 pl-4 py-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 dark:bg-green-600 rounded-full mr-2"></span>
              독서실
            </h3>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              {student.studyRoom} - {student.studySeat}번 좌석
            </p>
          </div>

          {/* 기숙사 정보 */}
          <div className="border-l-4 border-green-300 dark:border-green-700 pl-4 py-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 dark:bg-green-600 rounded-full mr-2"></span>
              기숙사
            </h3>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              {student.dormBuilding} {student.dormRoom}호
            </p>
          </div>

          {/* 제2외국어 응시여부 */}
          <div className="border-l-4 border-green-300 dark:border-green-700 pl-4 py-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 dark:bg-green-600 rounded-full mr-2"></span>
              제2외국어 응시여부
            </h3>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              {student.secondLanguage}
            </p>
          </div>

          {/* 기타 정보 (있을 경우에만 표시) */}
          {student.notes && (
            <div className="border-l-4 border-green-300 dark:border-green-700 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                <span className="inline-block w-2 h-2 bg-green-400 dark:bg-green-600 rounded-full mr-2"></span>
                기타
              </h3>
              <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                {student.notes}
              </p>
            </div>
          )}

          {/* 안내사항 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-6">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>안내:</strong> 수능 당일 위 정보를 확인하시어 시간에 맞춰
              이동해주시기 바랍니다.
            </p>
          </div>
        </div>
      )}

      {/* 전체 학생 목록 (마스터 모드) */}
      {isMasterMode && (
        <>
          {/* 검색 바 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="이름, 학번, 전화번호, 고사장, 독서실, 기숙사로 검색..."
                  value={searchQuery}
                  onChange={e => handleMasterSearch(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {students.length}명 / {allStudents.length}명
              </div>
            </div>
          </div>

          {/* 학생 목록 테이블 */}
          {students.length > 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        학번
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        이름
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        전화번호
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        고사장
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        독서실
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        자리
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        기숙사
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        호실
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        제2외국어
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                        기타
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {students.map((s, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                          {s.studentId}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                          {s.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                          {s.phone}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                          {s.examLocation}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                          {s.studyRoom}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                          {s.studySeat}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                          {s.dormBuilding}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                          {s.dormRoom}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                          {s.secondLanguage}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                          {s.notes || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                검색 결과가 없습니다.
              </p>
            </div>
          )}
        </>
      )}

      {/* 초기 안내 */}
      {!student && !error && !loading && !isMasterMode && !showMasterInput && (
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            학생 이름과 전화번호 뒷자리를 입력하여 정보를 조회하세요.
          </p>
        </div>
      )}
    </div>
  );
}
