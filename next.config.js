/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Untuk Next.js 14, kita gunakan opsi yang valid
    esmExternals: 'loose'
  },
  // Tentukan port secara eksplisit
  serverRuntimeConfig: {
    port: 3002
  },
  // Abaikan error build time
  typescript: {
    // !! PERINGATAN !!
    // Mengabaikan error type hanya direkomendasikan untuk pengembangan
    ignoreBuildErrors: true,
  },
  // Abaikan error ESLint selama build
  eslint: {
    // !! PERINGATAN !!
    // Mengabaikan error ESLint hanya direkomendasikan untuk pengembangan
    ignoreDuringBuilds: true,
  },
  // Tambahkan informasi output
  output: 'standalone',
  // Pastikan dapat di-deploy di berbagai environtment
  trailingSlash: true,
};

module.exports = nextConfig;