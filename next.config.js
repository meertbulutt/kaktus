/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['*'],
    unoptimized: true,
  },
  output: 'export', // ✅ statik build için ekledim
  experimental: {
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  staticPageGenerationTimeout: 120,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  generateEtags: true,
  generateBuildId: async () => {
    return 'kaktus-cafe';
  },
  headers: async () => {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  trailingSlash: true,
  devIndicators: false
}

module.exports = nextConfig;
