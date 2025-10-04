import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          태그를 찾을 수 없습니다
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          요청하신 태그가 존재하지 않거나 삭제되었습니다.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-sn-primary text-white font-medium rounded-lg hover:bg-sn-primary-dark transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}


