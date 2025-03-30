import { NextResponse } from 'next/server';

// Middleware untuk menangani routing dan URL
export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Tangani login path khusus karena sering menyebabkan error
  if (pathname === '/auth/login' || pathname === '/auth/login/') {
    // Pastikan trailing slash (atau hapus sesuai kebutuhan)
    const url = request.nextUrl.clone();
    url.pathname = '/auth/login/';
    return NextResponse.rewrite(url);
  }
  
  // Tangani path dynamic routes
  if (pathname.startsWith('/articles/') || pathname.startsWith('/awareness/')) {
    // Tidak perlu modifikasi, biarkan next.js menanganinya
    return NextResponse.next();
  }
  
  // Default untuk semua path lainnya
  return NextResponse.next();
}

// Konfigurasi middleware untuk berjalan di path tertentu
export const config = {
  matcher: [
    // Tangani hanya path yang relevan untuk meminimalkan overhead
    '/auth/:path*',
    '/articles/:path*',
    '/awareness/:path*',
  ],
}; 