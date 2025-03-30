"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PetaniInfoPage() {
  const router = useRouter();
  
  const features = [
    {
      title: "Deteksi Hama & Pemupukan",
      description: "Gunakan teknologi AI untuk mendeteksi hama dan mendapatkan rekomendasi pemupukan yang tepat untuk lahan Anda.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Perhitungan Upah",
      description: "Sistem perhitungan upah otomatis berdasarkan hasil panen yang Anda laporkan, dengan transparansi penuh.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Perlindungan Hak Petani",
      description: "Dapatkan perlindungan hak sebagai petani, termasuk kemudahan pengajuan klaim kecelakaan kerja dan dukungan legal.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "Monitoring Hasil Panen",
      description: "Pantau hasil panen Anda secara real-time dan dapatkan analisis tren untuk meningkatkan produktivitas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-leaf-green to-leaf-green/80 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solusi Digital untuk Petani Sawit</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Tingkatkan produktivitas, dapatkan harga yang adil, dan lindungi hak Anda sebagai petani dengan platform Sawit-iCare.
            </p>
            <button 
              onClick={() => router.push('/auth/register')}
              className="bg-sawit-yellow text-text-dark px-8 py-3 rounded-full font-medium hover:bg-white transition-colors"
            >
              Daftar Sebagai Petani
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Fitur Utama untuk Petani</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Sawit-iCare menyediakan berbagai fitur yang dirancang khusus untuk membantu petani sawit meningkatkan produktivitas dan kesejahteraan.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-leaf-green"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-leaf-green mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Alur Kerja Petani</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Berikut adalah cara kerja platform Sawit-iCare untuk petani sawit.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-leaf-green/20 z-0"></div>
              
              {[
                {
                  title: "Pendaftaran",
                  content: "Petani hanya bisa didaftarkan oleh Perusahaan. Anda akan mendapatkan kode referensi dari perusahaan untuk mendaftar."
                },
                {
                  title: "Verifikasi",
                  content: "Akun Anda akan diverifikasi oleh perusahaan terkait untuk memastikan Anda terdaftar di bawah naungan mereka."
                },
                {
                  title: "Penggunaan Dashboard",
                  content: "Setelah diverifikasi, Anda dapat mengakses dashboard untuk melihat status panen dan kesehatan tanaman."
                },
                {
                  title: "Pelaporan dan Klaim",
                  content: "Laporkan hasil panen, deteksi hama, dan ajukan klaim perlindungan hak jika diperlukan."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative z-10 mb-12 flex items-start"
                  variants={fadeIn}
                >
                  <div className="flex flex-col items-center mr-6">
                    <div className="bg-leaf-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    {index < 3 && <div className="h-full w-1 bg-leaf-green/20"></div>}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Kisah Sukses Petani</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman petani yang telah menggunakan Sawit-iCare.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-sawit-yellow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h3 className="text-xl font-semibold">Ahmad Sudirman</h3>
                  <p className="text-gray-600">Petani Sawit, Kalimantan Timur</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Sebelum menggunakan Sawit-iCare, saya kesulitan memantau hasil panen dan sering mendapat upah yang tidak sesuai. Kini semua tercatat dengan baik, dan saya bisa mendapatkan upah yang adil berdasarkan hasil panen yang saya laporkan. Deteksi hama juga sangat membantu untuk mengambil tindakan cepat."
              </p>
              <div className="flex text-sawit-yellow">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-leaf-green text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Bergabung dengan Petani Sawit Modern?</h2>
            <p className="text-lg mb-8 text-white/90">
              Dapatkan akses ke teknologi modern untuk meningkatkan produktivitas dan kesejahteraan Anda sebagai petani sawit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => router.push('/auth/register')}
                className="bg-sawit-yellow text-text-dark px-8 py-3 rounded-full font-medium hover:bg-white transition-colors"
              >
                Daftar Sekarang
              </button>
              <Link 
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-leaf-green transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
} 