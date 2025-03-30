// Helper function untuk cek lingkungan (browser atau server)
export const isBrowser = typeof window !== 'undefined';

// Safe access ke location
export const getSafeLocation = () => {
  if (isBrowser) {
    return window.location;
  }
  // Fallback for SSR - lebih lengkap
  return {
    href: '',
    hostname: '',
    pathname: '',
    search: '',
    hash: '',
    protocol: 'https:',
    origin: '',
    host: '',
    port: '',
    username: '',
    password: '',
    assign: () => {},
    replace: () => {},
    reload: () => {},
    toString: () => '',
    ancestorOrigins: {
      length: 0,
      item: () => null,
      contains: () => false,
    },
  };
};

// Wrapper untuk menggunakan Window API secara aman
export const safeWindow = isBrowser ? window : undefined;

// Untuk cek apakah kode dijalankan saat proses static generation
export const isStaticGeneration = !isBrowser;

// Safe timeout untuk SSR
export const safeSetTimeout = (callback: () => void, ms: number) => {
  if (isBrowser) {
    return window.setTimeout(callback, ms);
  }
  return null;
};

// Safe clearTimeout untuk SSR
export const safeClearTimeout = (id: number | null) => {
  if (isBrowser && id !== null) {
    window.clearTimeout(id);
  }
};

// Safe localStorage
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (isBrowser) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.error('localStorage.getItem error:', error);
      }
    }
    return null;
  },
  
  setItem: (key: string, value: string): void => {
    if (isBrowser) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.error('localStorage.setItem error:', error);
      }
    }
  },
  
  removeItem: (key: string): void => {
    if (isBrowser) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('localStorage.removeItem error:', error);
      }
    }
  }
}; 