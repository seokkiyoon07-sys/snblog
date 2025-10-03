/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Turbopack 비활성화
    turbo: false,
  },
  // 빌드 최적화
  swcMinify: true,
  // 이미지 최적화
  images: {
    domains: ['images.unsplash.com', 'blog.snacademy.co.kr'],
    formats: ['image/webp', 'image/avif'],
  },
  // 성능 최적화
  compress: true,
  // 빌드 타임아웃 증가
  staticPageGenerationTimeout: 1000,
}

module.exports = nextConfig
