// Polyfill untuk SVG elements yang dibutuhkan saat build dan SSR
// Digunakan untuk mengatasi error: 'ReferenceError: SVGElement is not defined'

// Hanya jalankan polyfill jika kita di lingkungan server (Node.js)
if (typeof window === 'undefined') {
  // Definisikan SVGElement jika tidak ada
  if (typeof global.SVGElement === 'undefined') {
    global.SVGElement = class SVGElement {};
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
}
