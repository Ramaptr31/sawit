/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Untuk Next.js 14, kita gunakan opsi yang valid
    esmExternals: 'loose'
  }
};

module.exports = nextConfig;