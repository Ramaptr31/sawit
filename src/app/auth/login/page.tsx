"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useAuthStore } from "@/lib/store";
import { getSafeLocation, isBrowser } from "@/lib/browser";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Explicit type checking for userResult
      const userResult = await login(email, password);
      const safeLocation = getSafeLocation();
      
      if (userResult && typeof userResult === 'object' && 'role' in userResult) {
        // Redirect based on role
        if (userResult.role === "admin") {
          router.push("/admin/dashboard");
        } else if (userResult.role === "perusahaan") {
          router.push("/perusahaan/dashboard");
        } else if (userResult.role === "petani") {
          router.push("/petani/dashboard");
        } else if (userResult.role === "ngo") {
          router.push("/ngo/dashboard");
        }
      } else {
        setErrorMsg("Email atau password salah");
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Terjadi kesalahan. Silakan coba lagi.");
      setLoading(false);
    }
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
              <h1 className="text-2xl font-bold text-text-dark">Masuk ke Akun</h1>
              <p className="text-gray-600 mt-2">
                Masuk untuk mengakses dashboard Anda
              </p>
            </div>

            {errorMsg && (
              <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6 text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleLogin}>
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

              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link href="/auth/forgot-password" className="text-xs text-leaf-green hover:text-opacity-80">
                    Lupa password?
                  </Link>
                </div>
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
                  {loading ? "Memproses..." : "Masuk"}
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
                  Belum punya akun?{" "}
                  <Link href="/auth/register" className="text-leaf-green hover:text-opacity-80 font-medium">
                    Daftar sekarang
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