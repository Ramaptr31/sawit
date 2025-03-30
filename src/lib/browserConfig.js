// Browser polyfills untuk static rendering
// File ini berisi polyfills untuk API browser ketika dirender pada lingkungan server

if (typeof window === 'undefined') {
  // Polyfill untuk global.location
  global.location = {
    href: 'https://example.com/',
    hostname: 'example.com',
    pathname: '/',
    search: '',
    hash: '',
    protocol: 'https:',
    origin: 'https://example.com',
    host: 'example.com',
    port: '',
    username: '',
    password: '',
    assign: () => {},
    replace: () => {},
    reload: () => {},
    toString: () => 'https://example.com/',
    ancestorOrigins: {
      length: 0,
      item: () => null,
      contains: () => false,
    },
  };

  // Polyfill untuk global.window
  global.window = {
    location: global.location,
    addEventListener: () => {},
    removeEventListener: () => {},
    setTimeout: () => 1,
    clearTimeout: () => {},
    matchMedia: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }),
    requestAnimationFrame: (callback) => {
      setTimeout(callback, 0);
      return 0;
    },
    cancelAnimationFrame: () => {},
    getComputedStyle: () => ({
      getPropertyValue: () => '',
    }),
    // Properti lain yang diperlukan
  };

  // Polyfill untuk global.document
  global.document = {
    createElement: () => ({
      style: {},
      setAttribute: () => {},
      classList: {
        add: () => {},
        remove: () => {},
        contains: () => false,
      },
      appendChild: () => {},
      getBoundingClientRect: () => ({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0,
      }),
    }),
    documentElement: {
      style: {},
      scrollTop: 0,
      scrollLeft: 0,
      clientWidth: 0,
      clientHeight: 0,
    },
    createElementNS: (namespace, tagName) => {
      // Khusus untuk elemen SVG
      const element = {
        tagName,
        setAttribute: () => {},
        getAttribute: () => '',
        appendChild: () => {},
        getBBox: () => ({ x: 0, y: 0, width: 0, height: 0 }),
        getScreenCTM: () => null,
        style: {},
        viewBox: { baseVal: { x: 0, y: 0, width: 0, height: 0 } },
        transform: { baseVal: { clear: () => {}, createSVGTransformFromMatrix: () => ({}), appendItem: () => {} } }
      };
      return element;
    },
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    body: {
      appendChild: () => {},
      style: {},
    },
  };

  // Polyfill untuk HTMLElement
  global.HTMLElement = class HTMLElement {};
  
  // Polyfill untuk SVGElement yang menyebabkan error
  global.SVGElement = class SVGElement {};
  
  // Polyfill untuk SVG sub-elements yang mungkin dibutuhkan
  global.SVGSVGElement = class SVGSVGElement extends global.SVGElement {};
  global.SVGGraphicsElement = class SVGGraphicsElement extends global.SVGElement {};
  global.SVGPathElement = class SVGPathElement extends global.SVGElement {};
  global.SVGCircleElement = class SVGCircleElement extends global.SVGElement {};
  global.SVGRectElement = class SVGRectElement extends global.SVGElement {};
  global.SVGTextElement = class SVGTextElement extends global.SVGElement {};
  global.SVGLineElement = class SVGLineElement extends global.SVGElement {};
  
  // Polyfill untuk Event
  global.Event = class Event {};
  
  // Polyfill untuk MouseEvent
  global.MouseEvent = class MouseEvent extends global.Event {};
  
  // Polyfill untuk localStorage
  global.localStorage = {
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null,
  };

  // Polyfill untuk navigator
  global.navigator = {
    userAgent: 'node',
    platform: 'node',
    language: 'en',
    languages: ['en'],
    clipboard: {
      writeText: () => Promise.resolve(),
      readText: () => Promise.resolve(''),
    },
  };
  
  // Polyfill untuk ResizeObserver yang sering digunakan oleh library UI
  global.ResizeObserver = class ResizeObserver {
    constructor(callback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  
  // Polyfill untuk DOMMatrix yang digunakan oleh beberapa operasi SVG
  global.DOMMatrix = class DOMMatrix {
    constructor() {
      this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
    }
  };
  
  // Polyfill untuk DOMRect yang digunakan oleh getBBox
  global.DOMRect = class DOMRect {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.x = x; this.y = y; this.width = width; this.height = height;
      this.top = y; this.right = x + width; this.bottom = y + height; this.left = x;
    }
  };
  
  // Fix untuk URL constructor yang menangani relative URL dengan benar
  const OriginalURL = global.URL;
  global.URL = function(url, base) {
    try {
      // Tangani base jika tidak diberikan untuk URL relatif
      if (url && (url.startsWith('/') || url.startsWith('./') || url.startsWith('../'))) {
        // Jika base tidak diberikan, gunakan base default
        if (!base || base === '') {
          base = 'https://example.com';
        }
      }
      
      // Coba buat URL dengan base yang telah diberikan
      return new OriginalURL(url, base);
    } catch (e) {
      console.warn(`Error creating URL with input "${url}" and base "${base}": ${e.message}`);
      
      // Fallback yang aman untuk URL yang tidak valid
      const defaultUrl = {
        href: url && url.startsWith('/') ? `https://example.com${url}` : (url || 'https://example.com/'),
        pathname: url && url.startsWith('/') ? url : '/',
        search: '',
        hash: '',
        host: 'example.com',
        hostname: 'example.com',
        protocol: 'https:',
        origin: 'https://example.com',
        port: '',
        username: '',
        password: '',
        toString: () => url || '',
        searchParams: new URLSearchParams(),
      };
      
      // Tambahkan method searchParams untuk mencegah error
      defaultUrl.searchParams.get = (key) => null;
      defaultUrl.searchParams.has = (key) => false;
      defaultUrl.searchParams.set = (key, value) => {};
      defaultUrl.searchParams.delete = (key) => {};
      
      return defaultUrl;
    }
  };
  
  // Pastikan URL.prototype tetap intact
  global.URL.prototype = OriginalURL.prototype;
  
  // Tetapkan URLSearchParams jika belum ada
  if (!global.URLSearchParams) {
    global.URLSearchParams = class URLSearchParams {
      constructor() {
        this.params = {};
      }
      
      get(key) { return this.params[key] || null; }
      has(key) { return key in this.params; }
      set(key, value) { this.params[key] = value; }
      delete(key) { delete this.params[key]; }
      toString() { return ''; }
    };
  }
}