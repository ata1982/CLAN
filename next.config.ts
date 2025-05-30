import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel最適化設定
  output: 'standalone',
  
  // 画像最適化設定
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // パフォーマンス最適化
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
  
  // 静的アセット設定
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // ヘッダー設定
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
        ],
      },
    ];
  },
  
  // リダイレクト設定（必要に応じて）
  async redirects() {
    return [
      // 例: 旧URLから新URLへのリダイレクト
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
