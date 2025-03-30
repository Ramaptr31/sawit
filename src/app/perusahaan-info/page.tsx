"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PerusahaanInfoPage() {
  const router = useRouter();
  
  const features = [
    {
      title: "Monitoring Petani",
      description: "Pantau aktivitas petani mitra Anda secara real-time, termasuk hasil panen dan perawatan kebun.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Kalkulasi Emisi",
      description: "Hitung jejak karbon dari operasional perusahaan Anda untuk memenuhi standar ESG dan regulasi.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Sertifikasi Berkelanjutan",
      description: "Dapatkan sertifikasi keberlanjutan melalui praktik pengelolaan lingkungan yang terverifikasi.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Supply Chain Management",
      description: "Kelola rantai pasok Anda dengan transparansi penuh dan lacak pergerakan produk dari kebun hingga konsumen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "PT Sawit Lestari",
      role: "Perusahaan Sawit di Kalimantan",
      quote: "Sejak menggunakan Sawit-iCare, transparansi dan efisiensi operasional kami meningkat signifikan. Petani mitra kami juga lebih puas dengan sistem pembayaran yang lebih adil dan tepat waktu."
    },
    {
      name: "PT Agro Sustainable",
      role: "Perusahaan Sawit di Sumatera",
      quote: "Fitur kalkulasi emisi membantu kami memenuhi standar ESG dan mendapatkan kepercayaan dari investor internasional. Kami juga berhasil mendapatkan premium price untuk produk kami berkat sertifikasi keberlanjutan."
    }
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
      <section className="bg-gradient-to-br from-sawit-yellow to-sawit-yellow/80 text-text-dark py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solusi Digital untuk Perusahaan Sawit</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Transformasi digital untuk operasional yang lebih efisien, transparan, dan berkelanjutan.
            </p>
            <button 
              onClick={() => router.push('/auth/register')}
              className="bg-leaf-green text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Daftar Sebagai Perusahaan
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
            <h2 className="text-3xl font-bold mb-4">Fitur Utama untuk Perusahaan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Sawit-iCare menyediakan berbagai fitur yang dirancang khusus untuk membantu perusahaan sawit meningkatkan efisiensi dan keberlanjutan.
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
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sawit-yellow"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-sawit-yellow mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Manfaat untuk Perusahaan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dengan menggunakan Sawit-iCare, perusahaan sawit dapat memperoleh berbagai manfaat strategis.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Peningkatan Efisiensi",
                description: "Optimalkan operasional melalui pemantauan real-time dan analisis data komprehensif, menghemat biaya hingga 25%.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Kesesuaian Regulasi",
                description: "Pastikan operasional Anda mematuhi regulasi lingkungan dan tenaga kerja, menghindari denda dan sanksi.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Akses Pasar Premium",
                description: "Mendapatkan sertifikasi keberlanjutan yang membuka akses ke pasar internasional dengan harga premium.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: "Hubungan Petani yang Lebih Baik",
                description: "Bangun kepercayaan dan loyalitas petani mitra melalui transparansi dan sistem pembayaran yang adil.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start p-6 bg-white rounded-lg shadow-md"
                variants={fadeIn}
              >
                <div className="flex-shrink-0 bg-sawit-yellow/10 p-3 rounded-full mr-4">
                  <div className="text-sawit-yellow">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-4">Testimoni Perusahaan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman perusahaan yang telah memanfaatkan Sawit-iCare untuk transformasi digital mereka.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-sawit-yellow"
                variants={fadeIn}
              >
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sawit-yellow text-text-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Transformasi Digital?</h2>
            <p className="text-lg mb-8 opacity-90">
              Jadilah bagian dari jaringan perusahaan sawit modern yang menggunakan teknologi untuk operasional yang lebih efisien dan berkelanjutan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => router.push('/auth/register')}
                className="bg-leaf-green text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Daftar Sekarang
              </button>
              <Link 
                href="/contact"
                className="border border-text-dark text-text-dark px-8 py-3 rounded-full font-medium hover:bg-text-dark hover:text-white transition-colors"
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