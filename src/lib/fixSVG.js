// Polyfill untuk SVG elements yang dibutuhkan saat build dan SSR
// Digunakan untuk mengatasi error: 'ReferenceError: SVGElement is not defined'

// Hanya jalankan polyfill jika kita di lingkungan server (Node.js)
if (typeof window === 'undefined') {
  // Definisikan SVGElement jika tidak ada
  if (typeof global.SVGElement === 'undefined') {
    global.SVGElement = class SVGElement {};
  }

  // Definisikan SVGSVGElement jika tidak ada
  if (typeof global.SVGSVGElement === 'undefined') {
    global.SVGSVGElement = class SVGSVGElement {};
  }

  // Definisikan SVGGraphicsElement jika tidak ada
  if (typeof global.SVGGraphicsElement === 'undefined') {
    global.SVGGraphicsElement = class SVGGraphicsElement {};
  }

  // Definisikan SVGPathElement jika tidak ada
  if (typeof global.SVGPathElement === 'undefined') {
    global.SVGPathElement = class SVGPathElement {};
  }

  // Polyfill untuk createElementNS yang digunakan oleh SVG
  if (typeof global.document !== 'undefined' && typeof global.document.createElementNS !== 'function') {
    global.document.createElementNS = (namespace, tagName) => {
      const element = global.document.createElement(tagName);
      // SVG specific methods dan properties
      element.getBBox = () => ({ x: 0, y: 0, width: 0, height: 0 });
      element.getScreenCTM = () => null;
      return element;
    };
  }

  // Polyfill lainnya yang mungkin dibutuhkan untuk SVG rendering
  global.DOMRect = class DOMRect {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.top = y;
      this.right = x + width;
      this.bottom = y + height;
      this.left = x;
    }
  };

  // Polyfill untuk DOMMatrix yang digunakan oleh beberapa operasi SVG
  global.DOMMatrix = class DOMMatrix {
    constructor() {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.e = 0;
      this.f = 0;
    }
  };
}

// Export helper function untuk digunakan di komponen
// Ini tidak melakukan apa-apa, tetapi berguna untuk impor file ini dalam kode lain
export default function polyfillSVG() {
  return typeof window !== 'undefined';
}
