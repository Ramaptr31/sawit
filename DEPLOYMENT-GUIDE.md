# Panduan Deployment Sawit-iCare ke Vercel

## Mengatasi Error "SVGElement is not defined"

Saat membangun aplikasi Sawit-iCare di Vercel, kita mengalami error "ReferenceError: SVGElement is not defined". Error ini terjadi saat proses build karena Next.js mencoba merender komponen yang menggunakan elemen SVG di lingkungan server yang tidak memiliki API browser.

### Langkah-langkah yang sudah dilakukan:

1. **Polyfill Browser API** (SUDAH DIIMPLEMENTASIKAN)
   - File `src/lib/browserConfig.js` sudah berisi polyfill untuk berbagai API browser termasuk SVGElement
   - File sudah diimpor di `src/app/layout.tsx`

2. **Polyfill SVG Khusus** (SUDAH DIIMPLEMENTASIKAN)
   - File `src/lib/fix-svg.js` menambahkan dukungan spesifik untuk SVGElement
   - File sudah diimpor di `src/app/layout.tsx`

3. **Custom Document** (SUDAH DIIMPLEMENTASIKAN)
   - File `src/pages/_document.js` menambahkan script inline untuk polyfill SVG di sisi client
   - Ini memastikan bahwa ketika hydration terjadi, SVGElement tersedia

4. **Error Handler** (SUDAH DIIMPLEMENTASIKAN)
   - File `src/pages/_error.js` menyediakan penanganan kesalahan khusus untuk API browser

### Jika Masih Mengalami Masalah, Langkah Tambahan:

1. **Perbarui Package.json untuk Build Static**
   ```json
   "scripts": {
     "build": "next build",
     "build:static": "next build && next export && touch out/.nojekyll"
   }
   ```

2. **Perbarui SVG di Komponen**
   Jika Anda memiliki komponen SVG inline, ubah penggunaannya menjadi:
   ```jsx
   // Dari
   <svg ...>...</svg>

   // Menjadi (dengan pengecekan lingkungan)
   {typeof window !== 'undefined' ? <svg ...>...</svg> : <div className="svg-placeholder"></div>}
   ```

3. **Buat Custom Server untuk Development**
   File `server.js` di root:
   ```javascript
   const { createServer } = require('http');
   const { parse } = require('url');
   const next = require('next');

   const dev = process.env.NODE_ENV !== 'production';
   const app = next({ dev });
   const handle = app.getRequestHandler();

   // Tambahkan polyfill global SVG
   global.SVGElement = class SVGElement {};

   app.prepare().then(() => {
     createServer((req, res) => {
       const parsedUrl = parse(req.url, true);
       handle(req, res, parsedUrl);
     }).listen(3002, (err) => {
       if (err) throw err;
       console.log('> Ready on http://localhost:3002');
     });
   });
   ```

4. **Nonaktifkan Prerendering untuk Komponen dengan SVG**
   Tambahkan komentar `// @ts-nocheck` pada komponen yang menggunakan SVG:
   ```jsx
   // @ts-nocheck
   import React from 'react';
   // Komponen dengan SVG
   ```

### Build dan Deploy ke Vercel

1. **Pastikan semua file sudah di-commit ke Git**
   ```
   git add .
   git commit -m "Fix SVGElement not defined in build"
   git push
   ```

2. **Deploy di Vercel**
   - Buka project Anda di dashboard Vercel
   - Pilih "Deploy" pada branch yang berisi fix
   - Pantau log build untuk memastikan tidak ada error

### Opsi Lain: Gunakan Static HTML Export

Jika masih mengalami masalah, gunakan pendekatan export statis:

1. **Perbarui next.config.js**
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // Lainnya...
   };
   ```

2. **Deploy folder `out` ke layanan hosting statis**
   - Netlify
   - GitHub Pages
   - Vercel (sebagai static deployment)

## Troubleshooting

### Error: Cannot find module 'middleware-manifest.json'

Ini biasanya disebabkan oleh konfigurasi output yang tidak kompatibel. Solusi:

1. **Hapus direktori `.next`**
   ```
   rm -rf .next
   ```

2. **Build kembali**
   ```
   npm run build
   ```

### Error: SVGElement is not defined saat build, tapi tidak saat development

Ini karena lingkungan development memberikan polyfill secara otomatis, tapi di build tidak. Pastikan:

1. **Semua file polyfill sudah diimpor dengan benar**
2. **Komponen yang menggunakan SVG memiliki pengecekan lingkungan**
3. **next.config.js dikonfigurasi dengan benar untuk export statis**