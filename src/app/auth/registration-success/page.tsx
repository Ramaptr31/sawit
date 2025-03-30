"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RegistrationSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(10);
  
  const role = searchParams.get("role");
  const verified = searchParams.get("verified");
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          router.push("/auth/login");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [router]);

  const getRoleTitle = () => {
    switch (role) {
      case "perusahaan":
        return "Perusahaan";
      case "petani":
        return "Petani";
      case "ngo":
        return "NGO";
      default:
        return "Pengguna";
    }
  };

  const getMessage = () => {
    if (role === "perusahaan") {
      return "Pendaftaran perusahaan Anda sedang dalam proses verifikasi oleh admin. Kami akan mengirimkan email notifikasi saat akun Anda telah diverifikasi.";
    } else if (role === "petani") {
      return "Pendaftaran petani Anda sedang dalam proses verifikasi oleh perusahaan terkait. Anda akan mendapatkan notifikasi saat akun Anda telah diverifikasi.";
    } else if (role === "ngo") {
      return "Pendaftaran NGO Anda telah berhasil! Anda dapat langsung masuk dan mengakses dashboard untuk menawarkan layanan carbon offset dan mengunggah materi edukasi.";
    } else {
      return "Pendaftaran Anda telah berhasil! Silakan masuk untuk melanjutkan.";
    }
  };

  const getVerificationStatus = () => {
    if (verified === "pending") {
      return (
        <div className="bg-yellow-50 text-yellow-800 p-4 rounded-md mt-4">
          <p className="font-medium">Status: Menunggu Verifikasi</p>
          <p className="text-sm mt-1">Mohon tunggu proses verifikasi selesai sebelum dapat mengakses platform.</p>
        </div>
      );
    } else if (verified === "approved") {
      return (
        <div className="bg-green-50 text-green-800 p-4 rounded-md mt-4">
          <p className="font-medium">Status: Telah Diverifikasi</p>
          <p className="text-sm mt-1">Anda dapat langsung masuk ke platform.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col py-12">
        <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mt-6">
              Pendaftaran {getRoleTitle()} Berhasil!
            </h1>
            
            <p className="mt-4 text-gray-600">
              {getMessage()}
            </p>
            
            {getVerificationStatus()}
            
            <div className="mt-8">
              <Link href="/auth/login">
                <button className="w-full bg-leaf-green text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                  Lanjut ke Halaman Login
                </button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Anda akan dialihkan dalam {countdown} detik
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
} 