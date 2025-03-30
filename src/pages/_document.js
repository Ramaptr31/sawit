import Document, { Html, Head, Main, NextScript } from 'next/document';

// Pastikan polyfill browser berjalan sebelum dokumen di-render
class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          {/* Tambahkan meta tags & scripts yang diperlukan */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#4CAF50" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Script ini akan mengecek dan memastikan polyfill browser tersedia */}
          <script dangerouslySetInnerHTML={{
            __html: `
              // Polyfill browser API jika dibutuhkan
              if (typeof window !== 'undefined') {
                // SVGElement polyfill
                if (typeof SVGElement === 'undefined') {
                  window.SVGElement = function() {};
                }
                
                // SVG sub-elements
                if (typeof SVGSVGElement === 'undefined') {
                  window.SVGSVGElement = function() {};
                }
                
                if (typeof SVGPathElement === 'undefined') {
                  window.SVGPathElement = function() {};
                }
                
                if (typeof SVGGraphicsElement === 'undefined') {
                  window.SVGGraphicsElement = function() {};
                }
                
                // Polyfill untuk metode SVG
                if (typeof document !== 'undefined' && 
                    typeof document.createElementNS !== 'function') {
                  document.createElementNS = function(ns, tag) {
                    const el = document.createElement(tag);
                    el.getBBox = function() { 
                      return { x: 0, y: 0, width: 0, height: 0 }; 
                    };
                    return el;
                  };
                }
                
                // Polyfill lainnya jika dibutuhkan
                if (typeof window.navigator === 'undefined') {
                  window.navigator = { userAgent: '' };
                }
              }
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 