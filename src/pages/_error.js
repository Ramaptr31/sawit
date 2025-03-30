// Custom error handling
import React from 'react';
import Link from 'next/link';

// Konfigurasi global untuk polyfill
if (typeof window === 'undefined') {
  // Pastikan global.location tersedia
  global.location = {
    href: '',
    hostname: '',
    pathname: '',
    search: '',
    hash: '',
    protocol: 'https:',
    origin: '',
    host: '',
    assign: () => {},
    replace: () => {},
    reload: () => {},
  };
  
  // Tambahkan SVGElement polyfill
  global.SVGElement = function() {};
}

function Error({ statusCode, message }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {statusCode
          ? `Terjadi kesalahan (${statusCode})`
          : 'Terjadi kesalahan di sisi klien'}
      </h1>
      <p className="text-lg mb-6">
        {message || 'Maaf, kami mengalami masalah teknis.'}
      </p>
      <Link href="/" className="bg-leaf-green text-white py-2 px-4 rounded hover:bg-opacity-90">
        Kembali ke beranda
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  // Handle browser API errors specifically
  let message = err ? err.message : null;
  
  // Log SVGElement errors specially
  if (err && err.message && err.message.includes('SVGElement is not defined')) {
    console.error('SVGElement Error:', err);
    message = 'Terjadi kesalahan saat merender SVG';
  }
  
  return { statusCode, message };
};

export default Error; 