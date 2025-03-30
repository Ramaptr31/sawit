"use client";

import { ReactNode, useEffect } from 'react';

// Komponen untuk menyediakan polyfill browser di lingkungan client
export function BrowserPolyfillProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Pastikan bahwa kita berada di lingkungan browser
    if (typeof window !== 'undefined') {
      // Kita bisa menambahkan kustomisasi atau polyfill tambahan di sini jika diperlukan
      // Misalnya, untuk objek location yang diakses oleh library pihak ketiga
      
      // Contoh: memonitor akses langsung ke location
      const originalLocation = window.location;
      
      // Kita bisa membuat proxy untuk window.location jika perlu
      // tapi saat ini cukup pastikan bahwa semua sudah berjalan dengan baik
    }
  }, []);

  return <>{children}</>;
}

export default BrowserPolyfillProvider; 