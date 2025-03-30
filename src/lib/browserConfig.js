// Browser polyfills untuk static rendering
// File ini berisi polyfills untuk API browser ketika dirender pada lingkungan server

if (typeof window === 'undefined') {
  // Polyfill untuk global.location
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

  // Polyfill untuk global.window
  global.window = {
    location: global.location,
    // Tambahkan properti lain jika diperlukan
  };

  // Polyfill untuk global.document
  global.document = {
    // Properti minimal yang mungkin dibutuhkan
    createElement: () => ({}),
    documentElement: {
      style: {},
    },
    // Tambahkan properti lain jika diperlukan
  };

  // Polyfill untuk localStorage
  global.localStorage = {
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null,
  };

  // Polyfill untuk navigator
  global.navigator = {
    userAgent: 'node',
  };
} 