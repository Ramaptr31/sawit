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
}

// Export helper function untuk digunakan di komponen
module.exports = {}; 