import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  reactStrictMode: false,
  // Docker를 위한 standalone 빌드 (Vercel에서는 사용하지 않음)
  ...(process.env.DOCKER_BUILD === 'true' ? { output: 'standalone' } : {}),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.snacademy.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'postfiles.pstatic.net',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 85, 95, 100],
    unoptimized: false, // Vercel에서 이미지 최적화 활성화
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Vercel 배포 최적화
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  // 헤더 설정은 vercel.json에서 관리 (Vercel 배포 시 충돌 방지)
};

export default nextConfig;
