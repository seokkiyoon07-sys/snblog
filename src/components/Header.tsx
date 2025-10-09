'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInfo, setSelectedInfo] = useState('독학기숙');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydration 에러 방지: 클라이언트에서만 테마 아이콘 렌더링
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // 검색어가 있으면 검색 페이지로 이동
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const infoOptions = [
    {
      key: '독학기숙',
      title: '독학기숙(남학생점)',
      link: 'https://www.snacademy.co.kr',
      linkText: 'www.snacademy.co.kr',
      color: 'text-sn-primary dark:text-sn-primary-light',
    },
    {
      key: '대치점',
      title: '대치점',
      link: null,
      linkText: '26.1.1 오픈예정',
      color: 'text-orange-600 dark:text-orange-400',
    },
    {
      key: 'SNarGPT',
      title: 'SNarGPT',
      link: 'https://snarGPT.ai',
      linkText: 'snarGPT.ai',
      color: 'text-green-600 dark:text-green-400',
    },
  ];

  const currentInfo = infoOptions.find(option => option.key === selectedInfo);

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        {/* 데스크톱 헤더 */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/sn-logo.png"
                  alt="SN"
                  width={32}
                  height={32}
                  className="h-8 w-auto dark:hidden"
                />
                <Image
                  src="/images/sn-logo.png"
                  alt="SN"
                  width={32}
                  height={32}
                  className="h-8 w-auto hidden dark:block"
                />
              </Link>
            </div>

            {/* 검색바 */}
            <div className="flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="검색..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sn-primary focus:border-transparent"
                  />
                </div>
              </form>
            </div>

            {/* 학원 정보 토글 및 다크모드 */}
            <div className="flex items-center space-x-4">
              {/* 정보 선택 토글 */}
              <div className="flex items-center space-x-2">
                <select
                  value={selectedInfo}
                  onChange={e => {
                    const newSelection = e.target.value;
                    setSelectedInfo(newSelection);

                    const selectedOption = infoOptions.find(
                      option => option.key === newSelection
                    );
                    if (selectedOption?.link) {
                      window.open(
                        selectedOption.link,
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }
                  }}
                  className="text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-sn-primary cursor-pointer"
                >
                  {infoOptions.map(option => (
                    <option key={option.key} value={option.key}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* 다크모드 토글 */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="테마 토글"
              >
                {!mounted ? (
                  <div className="h-5 w-5" />
                ) : theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="mt-6 flex space-x-8">
            {[
              { name: '홈', href: '/' },
              { name: 'AI 스타트업', href: '/startup' },
              { name: '컬럼', href: '/columns' },
              { name: '문제 다운로드', href: '/problems' },
              { name: '입시정보', href: '/admissions' },
              { name: '후기', href: '/reviews' },
              { name: 'SN Originals', href: '/originals' },
            ].map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-400 dark:hover:to-purple-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 dark:after:from-blue-400 dark:after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* 모바일 헤더 */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/sn-logo.png"
                  alt="SN"
                  width={24}
                  height={24}
                  className="h-6 w-auto dark:hidden"
                />
                <Image
                  src="/images/sn-logo.png"
                  alt="SN"
                  width={24}
                  height={24}
                  className="h-6 w-auto hidden dark:block"
                />
              </Link>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="테마 토글"
              >
                {!mounted ? (
                  <div className="h-5 w-5" />
                ) : theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* 모바일 검색바 */}
          <div className="mt-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="검색..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sn-primary focus:border-transparent"
                />
              </div>
            </form>
          </div>

          {/* 모바일 학원 정보 선택 */}
          <div className="mt-3">
            <select
              value={selectedInfo}
              onChange={e => {
                const newSelection = e.target.value;
                setSelectedInfo(newSelection);

                const selectedOption = infoOptions.find(
                  option => option.key === newSelection
                );
                if (selectedOption?.link) {
                  window.open(
                    selectedOption.link,
                    '_blank',
                    'noopener,noreferrer'
                  );
                }
              }}
              className="w-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sn-primary cursor-pointer"
            >
              {infoOptions.map(option => (
                <option key={option.key} value={option.key}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>

          {/* 모바일 네비게이션 */}
          {isMobileMenuOpen && (
            <nav className="mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              {[
                { name: '홈', href: '/' },
                { name: 'AI 스타트업', href: '/startup' },
                { name: '컬럼', href: '/columns' },
                { name: '문제 다운로드', href: '/problems' },
                { name: '입시정보', href: '/admissions' },
                { name: '후기', href: '/reviews' },
                { name: 'SN Originals', href: '/originals' },
              ].map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
