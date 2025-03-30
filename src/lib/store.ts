import { create } from 'zustand';

// User types
export type UserRole = 'admin' | 'perusahaan' | 'petani' | 'ngo' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// Auth store interface
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Dummy user data - this would normally come from a backend API
const dummyUsers = [
  {
    id: 'admin-123',
    name: 'Admin Sawit-iCare',
    email: 'admin@sawiticare.com',
    password: 'admin123',
    role: 'admin' as UserRole,
    avatar: '/avatars/admin.jpg',
  },
  {
    id: 'perusahaan-123',
    name: 'PT Sawit Hijau',
    email: 'perusahaan@eco.com',
    password: 'perusahaan123',
    role: 'perusahaan' as UserRole,
    avatar: '/avatars/company.jpg',
  },
  {
    id: 'petani-123',
    name: 'Ahmad Sudirman',
    email: 'petani@kelapa.com',
    password: 'petani123',
    role: 'petani' as UserRole,
    avatar: '/avatars/farmer.jpg',
  },
  {
    id: 'ngo-123',
    name: 'Climate Care NGO',
    email: 'ngo@climate.org',
    password: 'ngo123',
    role: 'ngo' as UserRole,
    avatar: '/avatars/ngo.jpg',
  },
];

// Create the auth store
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: async (email: string, password: string) => {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find the user in our dummy data
    const user = dummyUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Remove the password before storing the user
      const { password, ...safeUser } = user;
      
      set({
        user: safeUser,
        isAuthenticated: true,
      });
      
      return true;
    }
    
    return false;
  },
  
  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));

// Dummy Companies
export interface Company {
  id: string;
  name: string;
  industry: string;
  carbonCreditBought: number;
  email: string;
  phone: string;
  address: string;
  verified: boolean;
}

// Dummy Farmers
export interface Farmer {
  id: string;
  name: string;
  company: string;
  landArea: number;
  status: 'Aktif' | 'Pending' | 'Suspended';
  email?: string;
  phone?: string;
  address?: string;
  joinDate: string;
}

// Dummy NGOs
export interface NGO {
  id: string;
  name: string;
  focus: string;
  partnerCompanies: string[];
  email: string;
  phone: string;
  address: string;
  verified: boolean;
}

// Data store interface
interface DataState {
  companies: Company[];
  farmers: Farmer[];
  ngos: NGO[];
  carbonCreditsSold: number;
  getCompanyById: (id: string) => Company | undefined;
  getFarmerById: (id: string) => Farmer | undefined;
  getNGOById: (id: string) => NGO | undefined;
}

// Create the data store with dummy data
export const useDataStore = create<DataState>((set, get) => ({
  companies: [
    {
      id: 'company-1',
      name: 'PT Sawit Hijau',
      industry: 'Kelapa Sawit',
      carbonCreditBought: 1200,
      email: 'info@sawithijau.com',
      phone: '+62-21-5555-1234',
      address: 'Jl. Sudirman No. 123, Jakarta',
      verified: true,
    },
    {
      id: 'company-2',
      name: 'EcoPalm Indonesia',
      industry: 'Perkebunan',
      carbonCreditBought: 850,
      email: 'contact@ecopalm.id',
      phone: '+62-21-5555-5678',
      address: 'Jl. Gatot Subroto No. 456, Jakarta',
      verified: true,
    },
    {
      id: 'company-3',
      name: 'GreenAgro',
      industry: 'Agrikultur',
      carbonCreditBought: 1500,
      email: 'support@greenagro.com',
      phone: '+62-21-5555-9012',
      address: 'Jl. Thamrin No. 789, Jakarta',
      verified: true,
    }
  ],
  
  farmers: [
    {
      id: 'farmer-1',
      name: 'Ahmad Sudirman',
      company: 'PT Sawit Hijau',
      landArea: 2.5,
      status: 'Aktif',
      email: 'ahmad@mail.com',
      phone: '+62-812-3456-7890',
      address: 'Desa Sukamaju, Kalimantan Timur',
      joinDate: '2022-03-15',
    },
    {
      id: 'farmer-2',
      name: 'Budi Santoso',
      company: 'EcoPalm Indonesia',
      landArea: 3.0,
      status: 'Aktif',
      email: 'budi@mail.com',
      phone: '+62-812-2345-6789',
      address: 'Desa Harapan, Kalimantan Barat',
      joinDate: '2022-05-20',
    },
    {
      id: 'farmer-3',
      name: 'Siti Aminah',
      company: 'GreenAgro',
      landArea: 1.8,
      status: 'Pending',
      email: 'siti@mail.com',
      phone: '+62-812-3456-7891',
      address: 'Desa Sejahtera, Sumatra Utara',
      joinDate: '2023-01-10',
    }
  ],
  
  ngos: [
    {
      id: 'ngo-1',
      name: 'Climate Care',
      focus: 'Carbon Offset',
      partnerCompanies: ['PT Sawit Hijau'],
      email: 'info@climatecare.org',
      phone: '+62-21-5555-4321',
      address: 'Jl. Diponegoro No. 321, Jakarta',
      verified: true,
    },
    {
      id: 'ngo-2',
      name: 'Green Earth',
      focus: 'Lingkungan',
      partnerCompanies: ['EcoPalm Indonesia'],
      email: 'contact@greenearth.org',
      phone: '+62-21-5555-8765',
      address: 'Jl. Imam Bonjol No. 654, Jakarta',
      verified: true,
    },
    {
      id: 'ngo-3',
      name: 'Agro Future',
      focus: 'Pertanian Berkelanjutan',
      partnerCompanies: ['GreenAgro'],
      email: 'info@agrofuture.org',
      phone: '+62-21-5555-2109',
      address: 'Jl. Kuningan No. 987, Jakarta',
      verified: true,
    }
  ],
  
  carbonCreditsSold: 4200,
  
  getCompanyById: (id: string) => {
    return get().companies.find(company => company.id === id);
  },
  
  getFarmerById: (id: string) => {
    return get().farmers.find(farmer => farmer.id === id);
  },
  
  getNGOById: (id: string) => {
    return get().ngos.find(ngo => ngo.id === id);
  },
})); 