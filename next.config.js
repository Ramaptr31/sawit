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
  // Gunakan static export untuk Vercel
  output: 'export',
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
  // Menangani rute dinamis dengan detail yang lebih lengkap
  exportPathMap: async function() {
    // Buat rute statis untuk semua halaman aplikasi
    return {
      // Halaman utama
      '/': { page: '/' },
      '/about-us': { page: '/about-us' },
      '/contact': { page: '/contact' },
      
      // Halaman autentikasi
      '/auth/login': { page: '/auth/login' },
      '/auth/register': { page: '/auth/register' },
      '/auth/registration-success': { page: '/auth/registration-success' },
      '/auth/forgot-password': { page: '/auth/forgot-password' },
      
      // Halaman informasi
      '/perusahaan-info': { page: '/perusahaan-info' },
      '/petani-info': { page: '/petani-info' },
      '/ngo-info': { page: '/ngo-info' },
      
      // Halaman artikel statis (sampel)
      '/articles': { page: '/articles' },
      '/articles/1': { page: '/articles/[id]', query: { id: '1' } },
      '/articles/2': { page: '/articles/[id]', query: { id: '2' } },
      '/articles/3': { page: '/articles/[id]', query: { id: '3' } },
      
      // Halaman awareness statis (sampel)
      '/awareness': { page: '/awareness' },
      '/awareness/1': { page: '/awareness/[id]', query: { id: '1' } },
      '/awareness/2': { page: '/awareness/[id]', query: { id: '2' } },
      '/awareness/3': { page: '/awareness/[id]', query: { id: '3' } },
      
      // Halaman dashboard (hanya untuk contoh)
      '/admin/dashboard': { page: '/admin/dashboard' },
      '/perusahaan/dashboard': { page: '/perusahaan/dashboard' },
      '/petani/dashboard': { page: '/petani/dashboard' },
      '/ngo/dashboard': { page: '/ngo/dashboard' },
    };
  },
  // Gunakan hash untuk routing dengan prefix yang dinamis
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  // Pastikan tidak ada rewrites yang dapat menyebabkan isu
  rewrites: async () => {
    return [];
  },
  distDir: process.env.NODE_ENV === 'production' ? 'out' : '.next',
};

module.exports = nextConfig;