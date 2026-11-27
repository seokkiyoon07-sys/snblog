import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 빌드 시 ESLint 경고 무시 (Vercel 배포용)
    ignoreDuringBuilds: true,
  },
  devIndicators: false,
  // Turbopack 비활성화 (Windows에서 버그 있음)
  turbopack: undefined,
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
  // 기출 읽을거리(/problems/* → /originals/reading/*) 301 영구 리다이렉트
  async redirects() {
    return [
      {
        source: '/problems/possible-worlds',
        destination: '/originals/reading/possible-worlds',
        permanent: true,
      },
      {
        source: '/problems/2026-suneung-personal-identity',
        destination: '/originals/reading/2026-suneung-personal-identity',
        permanent: true,
      },
      {
        source: '/problems/2022-suneung-bretton-woods',
        destination: '/originals/reading/2022-suneung-bretton-woods',
        permanent: true,
      },
      {
        source: '/problems/2020-june-symbiogenesis',
        destination: '/originals/reading/2020-june-symbiogenesis',
        permanent: true,
      },
    ];
  },
  // 헤더 설정은 vercel.json에서 관리 (Vercel 배포 시 충돌 방지)
};

export default nextConfig;
