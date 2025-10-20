import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
