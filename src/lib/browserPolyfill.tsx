"use client";

import { ReactNode, useEffect } from 'react';

// Komponen untuk menyediakan polyfill browser di lingkungan client
export function BrowserPolyfillProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Pastikan bahwa kita berada di lingkungan browser
    if (typeof window !== 'undefined') {
      // Memastikan bahwa SVGElement tersedia di lingkungan client
      // Beberapa library UI mungkin mengecek keberadaan SVGElement
      if (typeof SVGElement === 'undefined') {
        // @ts-ignore - kita perlu meng-assign class ke global object
        window.SVGElement = class SVGElement extends Element {};
      }
      
      // Mengamankan akses ke location dan memastikan itu tidak menyebabkan error
      const originalLocation = window.location;
      
      // Menambahkan tambahan handler untuk SVG related elements jika diperlukan
      // Dibutuhkan untuk rendering yang tepat dari komponen SVG
      if (typeof window.document?.createElementNS !== 'function') {
        // @ts-ignore
        window.document.createElementNS = (namespace, tagName) => {
          const element = document.createElement(tagName);
          // Tambahkan SVG-specific properties jika diperlukan
          element.getBBox = () => ({ x: 0, y: 0, width: 0, height: 0 });
          element.getScreenCTM = () => null;
          return element;
        };
      }
    }
  }, []);

  return <>{children}</>;
}

export default BrowserPolyfillProvider; 