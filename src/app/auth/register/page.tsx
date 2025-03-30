"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getSafeLocation, isBrowser } from "@/lib/browser";

type UserRole = "petani" | "perusahaan" | "ngo";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("petani");
  const [additionalField, setAdditionalField] = useState("");
  const [loading, setLoading] = useState(false);
  
  const getAdditionalFieldLabel = () => {
    switch (role) {
      case "petani":
        return "Luas Lahan (Hektar)";
      case "perusahaan":
        return "Nama Perusahaan";
      case "ngo":
        return "Fokus Organisasi";
      default:
        return "Informasi Tambahan";
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for registration
    setTimeout(() => {
      // Redirect to success page with query params
      const safeLocation = getSafeLocation();
      
      let verified = "pending";
      if (role === "ngo") {
        verified = "approved"; // For demo purposes
      }
      
      router.push(`/auth/registration-success?role=${role}&verified=${verified}`);
    }, 1500);
  };
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col py-12">
        <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center mb-4">
                <span className="text-2xl font-bold text-sawit-yellow">Sawit</span>
                <span className="text-2xl font-bold text-leaf-green">-iCare</span>
              </Link>
              <h1 className="text-2xl font-bold text-text-dark">Daftar Akun</h1>
              <p className="text-gray-600 mt-2">
                Buat akun untuk mulai menggunakan Sawit-iCare
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipe Akun
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sawit-yellow"
                >
                  <option value="petani">Petani</option>
                  <option value="perusahaan">Perusahaan</option>
                  <option value="ngo">NGO</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sawit-yellow"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sawit-yellow"
                  placeholder="email@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sawit-yellow"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="additionalField" className="block text-sm font-medium text-gray-700 mb-1">
                  {getAdditionalFieldLabel()}
                </label>
                <input
                  id="additionalField"
                  name="additionalField"
                  type={role === "petani" ? "number" : "text"}
                  required
                  value={additionalField}
                  onChange={(e) => setAdditionalField(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sawit-yellow"
                  placeholder={`Masukkan ${getAdditionalFieldLabel().toLowerCase()}`}
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-leaf-green hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-leaf-green ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {loading ? "Memproses..." : "Daftar"}
                </button>
              </div>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Atau</span>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-center text-sm text-gray-600">
                  Sudah punya akun?{" "}
                  <Link href="/auth/login" className="text-leaf-green hover:text-opacity-80 font-medium">
                    Masuk sekarang
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
} 