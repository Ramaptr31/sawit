// Adding SVG classes to global
if (typeof window === 'undefined') { if (typeof global.SVGElement === 'undefined') { global.SVGElement = class SVGElement {}; } }
module.exports = {};
