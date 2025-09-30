'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInfo, setSelectedInfo] = useState('독학기숙');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 로직 구현
    console.log('Search:', searchQuery);
  };

  const infoOptions = [
    {
      key: '독학기숙',
      title: '독학기숙(남학생점)',
      link: 'https://www.snacademy.co.kr',
      linkText: 'www.snacademy.co.kr',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      key: '대치점',
      title: '대치점',
      link: null,
      linkText: '26.1.1 오픈예정',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      key: 'SNarGPT',
      title: 'SNarGPT',
      link: 'https://snarGPT.ai',
      linkText: 'snarGPT.ai',
      color: 'text-green-600 dark:text-green-400'
    }
  ];

  const currentInfo = infoOptions.find(option => option.key === selectedInfo);

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              SN Academy
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Blog
            </span>
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
          </div>

          {/* 학원 정보 토글 및 다크모드 */}
          <div className="flex items-center space-x-4">
            {/* 정보 선택 토글 (클릭하면 바로 이동) */}
            <div className="flex items-center space-x-2">
              <select
                value={selectedInfo}
                onChange={(e) => {
                  const newSelection = e.target.value;
                  setSelectedInfo(newSelection);
                  
                  // 선택된 정보에 링크가 있으면 바로 이동
                  const selectedOption = infoOptions.find(option => option.key === newSelection);
                  if (selectedOption?.link) {
                    window.open(selectedOption.link, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {infoOptions.map((option) => (
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
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* 네비게이션 */}
        <nav className="mt-6 flex space-x-8">
          {[
            { name: '홈', href: '/' },
            { name: 'SN AI 스타트업', href: '/startup' },
            { name: '컬럼', href: '/columns' },
            { name: '입시정보', href: '/admissions' },
            { name: '후기', href: '/reviews' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
