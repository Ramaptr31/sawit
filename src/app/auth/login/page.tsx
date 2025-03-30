"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulating API call
    setTimeout(() => {
      // Check credentials against dummy data
      if (
        (email === "admin@sawiticare.com" && password === "admin123") ||
        (email === "perusahaan@eco.com" && password === "perusahaan123") ||
        (email === "petani@kelapa.com" && password === "petani123") ||
        (email === "ngo@climate.org" && password === "ngo123")
      ) {
        // Simple role-based redirect
        if (email === "admin@sawiticare.com") {
          router.push("/admin");
        } else if (email === "perusahaan@eco.com") {
          router.push("/perusahaan");
        } else if (email === "petani@kelapa.com") {
          router.push("/petani");
        } else if (email === "ngo@climate.org") {
          router.push("/ngo");
        }
      } else {
        setError("Email atau password salah. Silakan coba lagi.");
        setLoading(false);
      }
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
              <h1 className="text-2xl font-bold text-text-dark">Login</h1>
              <p className="text-gray-600 mt-2">
                Masuk untuk mengakses dashboard Anda
              </p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6 text-sm">
                {error}
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

              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-sawit-yellow border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Ingat saya
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-leaf-green hover:text-opacity-80">
                    Lupa password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-text-dark bg-sawit-yellow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sawit-yellow ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="text-xs text-gray-500">
                <h4 className="font-semibold mb-2">Kredensial Demo:</h4>
                <div className="space-y-1">
                  <p><span className="font-medium">Admin:</span> admin@sawiticare.com / admin123</p>
                  <p><span className="font-medium">Perusahaan:</span> perusahaan@eco.com / perusahaan123</p>
                  <p><span className="font-medium">Petani:</span> petani@kelapa.com / petani123</p>
                  <p><span className="font-medium">NGO:</span> ngo@climate.org / ngo123</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
} 