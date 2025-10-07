import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav aria-label="페이지네이션" className="flex justify-center mt-8">
      <div className="flex items-center space-x-2">
        {/* 이전 버튼 */}
        {currentPage > 1 ? (
          <Link
            href={`${baseUrl}?page=${currentPage - 1}`}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="이전 페이지"
          >
            이전
          </Link>
        ) : (
          <span className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-md cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-500">
            이전
          </span>
        )}

        {/* 페이지 번호들 */}
        {pageNumbers.map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                ...
              </span>
            ) : (
              <Link
                href={`${baseUrl}?page=${page}`}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  currentPage === page
                    ? 'bg-sn-primary text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
                aria-label={`${page}페이지`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </Link>
            )}
          </div>
        ))}

        {/* 다음 버튼 */}
        {currentPage < totalPages ? (
          <Link
            href={`${baseUrl}?page=${currentPage + 1}`}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="다음 페이지"
          >
            다음
          </Link>
        ) : (
          <span className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-md cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-500">
            다음
          </span>
        )}
      </div>
    </nav>
  );
}
