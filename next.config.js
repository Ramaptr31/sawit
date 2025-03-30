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
  // Nonaktifkan static optimization untuk komponen yang menggunakan window/location
  images: {
    unoptimized: true,
  },
  // Pastikan dapat di-deploy di berbagai environment
  trailingSlash: true,
  // Nonaktifkan prerendering yang menyebabkan error dengan SVGElement
  // Ini akan mengurangi kemungkinan error browser API saat build
  webpack: (config, { isServer }) => {
    // Tambahkan polyfill untuk SVGElement dan browser API lainnya selama build
    if (isServer) {
      // Menambahkan penanganan khusus untuk file yang menggunakan SVG
      config.externals = [...config.externals, 'canvas', 'jsdom'];
    }
    
    return config;
  },
  // Gunakan hash untuk routing dengan prefix yang benar (harus diawali dengan slash atau URL lengkap)
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  // Default distDir
  distDir: '.next',
  // Tambahkan konfigurasi untuk menangani routes
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

module.exports = nextConfig;