"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type UserRole = "petani" | "perusahaan" | "ngo";

export default function RegisterPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [additionalField, setAdditionalField] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Additional fields based on role
  const getAdditionalFieldLabel = () => {
    switch (selectedRole) {
      case "petani":
        return "Kode Referensi Perusahaan";
      case "perusahaan":
        return "Nomor SIUP";
      case "ngo":
        return "Bidang Fokus NGO";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate password
    if (password !== confirmPassword) {
      setError("Password tidak cocok");
      setLoading(false);
      return;
    }

    // Validate additional fields
    if (selectedRole === "petani" && !additionalField) {
      setError("Kode referensi perusahaan diperlukan");
      setLoading(false);
      return;
    }

    if (selectedRole === "perusahaan" && !additionalField) {
      setError("Nomor SIUP diperlukan");
      setLoading(false);
      return;
    }

    // Simulating registration process
    setTimeout(() => {
      if (selectedRole === "perusahaan") {
        // Perusahaan memerlukan verifikasi admin
        router.push("/auth/registration-success?role=perusahaan&verified=pending");
      } else if (selectedRole === "petani") {
        // Petani hanya bisa didaftarkan oleh perusahaan
        router.push("/auth/registration-success?role=petani&verified=pending");
      } else if (selectedRole === "ngo") {
        // NGO tidak memerlukan verifikasi
        router.push("/auth/registration-success?role=ngo&verified=approved");
      } else {
        setError("Mohon pilih peran Anda");
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
              <h1 className="text-2xl font-bold text-text-dark">Daftar Akun Baru</h1>
              <p className="text-gray-600 mt-2">
                Bergabung dengan platform solusi digital untuk industri sawit
              </p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6 text-sm">
                {error}
              </div>
            )}

            {/* Role selection */}
            {!selectedRole && (
              <div className="space-y-5 mb-6">
                <h2 className="text-center text-gray-700 font-medium mb-4">Pilih Peran Anda</h2>
                <motion.button
                  onClick={() => setSelectedRole("perusahaan")}
                  className="w-full flex items-center justify-between p-4 border rounded-md hover:border-leaf-green group transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="bg-sawit-yellow p-3 rounded-md mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">Perusahaan</h3>
                      <p className="text-sm text-gray-500">Pantau petani, hitung emisi, dan lakukan carbon trading</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-leaf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={() => setSelectedRole("petani")}
                  className="w-full flex items-center justify-between p-4 border rounded-md hover:border-leaf-green group transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="bg-leaf-green p-3 rounded-md mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">Petani</h3>
                      <p className="text-sm text-gray-500">Pantau hasil panen dan dapatkan perlindungan hak</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-leaf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={() => setSelectedRole("ngo")}
                  className="w-full flex items-center justify-between p-4 border rounded-md hover:border-leaf-green group transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="bg-earth-brown p-3 rounded-md mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">NGO</h3>
                      <p className="text-sm text-gray-500">Sediakan jasa carbon offset & edukasi lingkungan</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-leaf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            )}

            {selectedRole && (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-medium">
                      {selectedRole === "perusahaan" ? "Daftar sebagai Perusahaan" : 
                       selectedRole === "petani" ? "Daftar sebagai Petani" : 
                       "Daftar sebagai NGO"}
                    </h2>
                    <button 
                      type="button"
                      onClick={() => setSelectedRole(null)}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Kembali
                    </button>
                  </div>
                
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama {selectedRole === "perusahaan" ? "Perusahaan" : selectedRole === "ngo" ? "Organisasi" : "Lengkap"}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sawit-yellow"
                        placeholder={selectedRole === "perusahaan" ? "PT. Nama Perusahaan" : selectedRole === "ngo" ? "Nama NGO" : "Nama Lengkap"}
                      />
                    </div>
                  
                    <div>
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

                    <div>
                      <label htmlFor="additional" className="block text-sm font-medium text-gray-700 mb-1">
                        {getAdditionalFieldLabel()}
                      </label>
                      <input
                        id="additional"
                        name="additional"
                        type="text"
                        required
                        value={additionalField}
                        onChange={(e) => setAdditionalField(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sawit-yellow"
                        placeholder={selectedRole === "petani" ? "Masukkan kode referensi" : selectedRole === "perusahaan" ? "Masukkan nomor SIUP" : "Contoh: Konservasi Hutan, Edukasi Lingkungan"}
                      />
                    </div>
                  
                    <div>
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
                  
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Konfirmasi Password
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sawit-yellow"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                {/* Registration note */}
                <div className="bg-gray-50 p-4 rounded-md mb-6 text-sm">
                  {selectedRole === "perusahaan" ? (
                    <p className="text-gray-700">
                      <span className="font-medium">Catatan:</span> Akun perusahaan akan diverifikasi oleh admin terlebih dahulu. Kami akan mengirim email notifikasi saat akun Anda telah diverifikasi.
                    </p>
                  ) : selectedRole === "petani" ? (
                    <p className="text-gray-700">
                      <span className="font-medium">Catatan:</span> Petani perlu terdaftar di bawah naungan perusahaan. Pastikan Anda memiliki kode referensi perusahaan yang valid.
                    </p>
                  ) : (
                    <p className="text-gray-700">
                      <span className="font-medium">Catatan:</span> Akun NGO dapat langsung mengakses dashboard setelah pendaftaran. Anda dapat menawarkan layanan carbon offset dan mengunggah materi edukasi.
                    </p>
                  )}
                </div>

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
                  {loading ? "Memproses..." : "Daftar Sekarang"}
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{" "}
                <Link href="/auth/login" className="text-leaf-green hover:text-opacity-80 font-medium">
                  Masuk
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
} 