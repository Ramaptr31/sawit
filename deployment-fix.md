# Perbaikan Error Deployment pada Vercel

Terdapat error saat melakukan deployment ke Vercel dengan pesan:

```
Error: Page "/articles/[id]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
```

## Solusi

Error ini terjadi karena Next.js memerlukan fungsi `generateStaticParams()` pada semua halaman dengan parameter dinamis (seperti `[id]`) ketika menggunakan `output: export` di konfigurasi Next.js.

### 1. Perbaikan Halaman Dynamic Routes

Untuk memperbaiki hal ini, kita perlu menambahkan fungsi `generateStaticParams()` pada setiap halaman dengan rute dinamis.

**File: src/app/articles/[id]/page.tsx**
```typescript
// Pastikan data sample articlesDatabase berada di luar fungsi komponen

// Tambahkan fungsi generateStaticParams di tingkat atas (bukan di dalam komponen)
export function generateStaticParams() {
  // Generate params untuk setiap artikel dalam database
  // dan tambahkan beberapa ID tambahan untuk artikel placeholder
  const params = [
    ...articlesDatabase.map(article => ({ id: article.id.toString() })),
    { id: "3" },
    { id: "4" },
    { id: "5" }
  ];
  
  return params;
}
```

**File: src/app/awareness/[id]/page.tsx**
```typescript
// Pastikan data sample awarenessDatabase berada di luar fungsi komponen

// Tambahkan fungsi generateStaticParams di tingkat atas (bukan di dalam komponen)
export function generateStaticParams() {
  // Generate params untuk setiap kampanye dalam database
  // dan tambahkan beberapa ID tambahan untuk kampanye placeholder
  const params = [
    ...awarenessDatabase.map(campaign => ({ id: campaign.id.toString() })),
    { id: "3" },
    { id: "4" },
    { id: "5" }
  ];
  
  return params;
}
```

### 2. Konfigurasi Next.js dan Vercel

Pastikan konfigurasi di `next.config.js` sudah benar:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose', // Necessary for Next.js 14
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    port: 3002,
  },
  typescript: {
    // !! WARN !!
    // Ignore type errors during development
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
  // Configuration for Vercel static export
  output: 'export',
  images: {
    unoptimized: true, // Disable static optimization for components using window/location
  },
  trailingSlash: true, // Enable trailing slashes for deployment compatibility
};

module.exports = nextConfig;
```

Dan untuk file `vercel.json`, hapus konfigurasi `regions` jika menggunakan Free Plan:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "installCommand": "npm install",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "trailingSlash": true
}
```

### 3. Testing Locally

Untuk memverifikasi bahwa perbaikan berhasil, jalankan build secara lokal:

```bash
npm run build
```

Jika build berhasil tanpa error, maka perbaikan sudah benar dan aplikasi siap untuk di-deploy ke Vercel.

## Kesimpulan

Perubahan tersebut telah memenuhi persyaratan untuk export statis di Next.js, yang mengharuskan semua halaman dinamis (dynamic routes) memiliki fungsi `generateStaticParams()` untuk memberi tahu Next.js parameter apa saja yang perlu di-generate saat build time. 