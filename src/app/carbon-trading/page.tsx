"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CarbonTradingPage() {
  const router = useRouter();
  
  const features = [
    {
      title: "Kalkulasi Emisi",
      description: "Kalkulasi emisi karbon yang dihasilkan dari operasi bisnis Anda dengan metode yang terstandarisasi.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Trading Platform",
      description: "Jual atau beli kredit karbon di platform kami yang transparan dan terverifikasi.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Kemitraan NGO",
      description: "Bermitra dengan NGO lingkungan untuk program offset karbon dan sustainability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Sertifikasi",
      description: "Dapatkan sertifikasi karbon terverifikasi yang dapat meningkatkan brand value perusahaan Anda.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  const howItWorks = [
    {
      title: "Perhitungan Emisi",
      description: "Perusahaan menghitung jejak karbon dari operasional mereka menggunakan alat yang disediakan platform."
    },
    {
      title: "Penentuan Target Reduksi",
      description: "Tetapkan target reduksi emisi yang realistis berdasarkan standar industri dan regulasi yang berlaku."
    },
    {
      title: "Trading Kredit Karbon",
      description: "Beli kredit karbon untuk mengimbangi emisi yang tidak dapat direduksi, atau jual kredit jika perusahaan berhasil melebihi target reduksi."
    },
    {
      title: "Kemitraan dengan NGO",
      description: "Bermitra dengan NGO untuk inisiatif lingkungan seperti penanaman pohon, konservasi hutan, atau energi terbarukan."
    },
    {
      title: "Sertifikasi dan Reporting",
      description: "Dapatkan sertifikasi karbon dan laporan transparansi yang dapat digunakan untuk pelaporan ESG (Environmental, Social, and Governance)."
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
      <section className="bg-gradient-to-br from-earth-brown to-earth-brown/80 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Carbon Trading untuk Masa Depan Berkelanjutan</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Platform carbon trading yang menghubungkan perusahaan sawit dengan NGO untuk menciptakan solusi berkelanjutan melalui perdagangan kredit karbon.
            </p>
            <button 
              onClick={() => router.push('/auth/register')}
              className="bg-sawit-yellow text-text-dark px-8 py-3 rounded-full font-medium hover:bg-white transition-colors"
            >
              Bergabung dalam Carbon Trading
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is Carbon Trading Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Apa itu Carbon Trading?</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Carbon Trading</span> atau perdagangan karbon adalah mekanisme pasar yang memungkinkan 
                perusahaan untuk membeli dan menjual kredit karbon sebagai upaya untuk mengurangi emisi gas rumah kaca secara global.
              </p>
              <p className="text-gray-700 mb-4">
                Dalam sistem ini, perusahaan yang berhasil mengurangi emisi karbon mereka di bawah batas yang ditentukan 
                dapat menjual "kredit karbon" ke perusahaan lain yang kesulitan mencapai target reduksi emisi mereka.
              </p>
              <p className="text-gray-700 mb-4">
                Pada platform Sawit-iCare, kami menghubungkan perusahaan sawit dengan:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>NGO yang menyediakan jasa offset karbon melalui proyek konservasi hutan dan penanaman pohon</li>
                <li>Perusahaan lain yang ingin membeli atau menjual kredit karbon</li>
                <li>Sistem verifikasi dan sertifikasi yang transparan dan terstandarisasi</li>
              </ul>
              <p className="text-gray-700">
                Dengan bergabung dalam platform carbon trading kami, perusahaan sawit dapat mengurangi jejak karbon mereka, 
                memenuhi regulasi lingkungan, dan meningkatkan reputasi sebagai perusahaan yang bertanggung jawab terhadap lingkungan.
              </p>
            </div>
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
            <h2 className="text-3xl font-bold mb-4">Fitur Platform Carbon Trading</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Platform carbon trading Sawit-iCare menyediakan berbagai fitur komprehensif untuk membantu perusahaan dan NGO dalam mengelola kredit karbon.
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
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-earth-brown"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-earth-brown mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Bagaimana Carbon Trading Bekerja</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proses carbon trading di platform Sawit-iCare dirancang untuk menjadi transparan, efisien, dan terverifikasi.
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
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-earth-brown/20 z-0"></div>
              
              {howItWorks.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative z-10 mb-12 flex items-start"
                  variants={fadeIn}
                >
                  <div className="flex flex-col items-center mr-6">
                    <div className="bg-earth-brown text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    {index < howItWorks.length - 1 && <div className="h-full w-1 bg-earth-brown/20"></div>}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Dampak Carbon Trading</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Bergabunglah dengan platform carbon trading kami dan berkontribusi untuk masa depan yang lebih berkelanjutan.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "12,450", label: "Ton CO₂ Terkompensasi" },
              { value: "348", label: "Perusahaan Terdaftar" },
              { value: "24", label: "NGO Mitra" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={fadeIn}
              >
                <p className="text-4xl font-bold text-earth-brown mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman mitra kami dalam program carbon trading.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md border-l-4 border-sawit-yellow"
              variants={fadeIn}
            >
              <p className="text-gray-700 italic mb-4">
                "Sebagai perusahaan sawit, kami berhasil mengurangi jejak karbon dan mendapatkan sertifikasi yang meningkatkan reputasi kami di mata konsumen dan investor."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h3 className="font-semibold">PT Sawit Hijau</h3>
                  <p className="text-gray-600 text-sm">Perusahaan Sawit</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md border-l-4 border-leaf-green"
              variants={fadeIn}
            >
              <p className="text-gray-700 italic mb-4">
                "Melalui platform ini, kami dapat menggalang dana untuk program konservasi hutan hujan dan memberdayakan masyarakat lokal."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h3 className="font-semibold">Green Earth Foundation</h3>
                  <p className="text-gray-600 text-sm">NGO Lingkungan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabung dengan Carbon Trading Sekarang</h2>
            <p className="text-lg mb-8 text-white/90">
              Jadilah bagian dari solusi untuk industri sawit yang berkelanjutan dengan berpartisipasi dalam platform carbon trading kami.
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
                className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-earth-brown transition-colors"
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