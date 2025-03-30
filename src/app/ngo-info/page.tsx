"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NGOInfoPage() {
  const router = useRouter();
  
  const features = [
    {
      title: "Carbon Offset Program",
      description: "Tawarkan program carbon offset Anda untuk perusahaan sawit sebagai bagian dari inisiatif keberlanjutan mereka.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Edukasi Lingkungan",
      description: "Berikan materi edukasi lingkungan untuk petani dan masyarakat sekitar perkebunan sawit.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Pendampingan Petani",
      description: "Berikan pendampingan kepada petani untuk meningkatkan produktivitas dan praktik pertanian berkelanjutan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Advokasi Hak Petani",
      description: "Berikan dukungan advokasi untuk melindungi hak-hak petani dan masyarakat lokal di sekitar perkebunan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "EcoForest Foundation",
      role: "NGO Konservasi Hutan",
      quote: "Melalui platform Sawit-iCare, kami berhasil menghubungkan program reforestasi kami dengan perusahaan sawit yang ingin mengimbangi emisi karbon mereka. Ini memberikan pendanaan berkelanjutan untuk konservasi hutan hujan."
    },
    {
      name: "Green Community Alliance",
      role: "NGO Pemberdayaan Masyarakat",
      quote: "Platform ini memungkinkan kami untuk menjangkau lebih banyak petani dan komunitas. Kami dapat menyediakan pelatihan praktik pertanian berkelanjutan dan membantu petani mendapatkan upah yang lebih adil."
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
      <section className="bg-gradient-to-br from-leaf-green to-leaf-green/80 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Platform untuk NGO Lingkungan</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Perluas dampak positif organisasi Anda melalui kolaborasi dengan industri sawit untuk menciptakan lingkungan yang lebih berkelanjutan.
            </p>
            <button 
              onClick={() => router.push('/auth/register')}
              className="bg-sawit-yellow text-text-dark px-8 py-3 rounded-full font-medium hover:bg-white transition-colors"
            >
              Daftar Sebagai NGO
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
            <h2 className="text-3xl font-bold mb-4">Fitur Utama untuk NGO</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Sawit-iCare menyediakan berbagai fitur yang membantu NGO untuk memperluas jangkauan dan dampak program-program keberlanjutan.
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
            <h2 className="text-3xl font-bold mb-4">Bagaimana NGO Berperan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Platform Sawit-iCare memungkinkan NGO untuk berkolaborasi dengan perusahaan sawit dan petani untuk menciptakan solusi berkelanjutan.
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
                  title: "Mendaftar di Platform",
                  content: "NGO mendaftar di platform dan memasukkan informasi tentang program dan layanan yang ditawarkan."
                },
                {
                  title: "Menawarkan Layanan",
                  content: "NGO dapat menawarkan program carbon offset, pendampingan petani, edukasi lingkungan, atau advokasi hak petani."
                },
                {
                  title: "Terhubung dengan Perusahaan",
                  content: "Perusahaan sawit yang mencari program keberlanjutan dapat terhubung dengan NGO yang sesuai dengan kebutuhan mereka."
                },
                {
                  title: "Implementasi Program",
                  content: "NGO dan perusahaan berkolaborasi untuk mengimplementasikan program keberlanjutan di lapangan."
                },
                {
                  title: "Pelaporan & Verifikasi",
                  content: "NGO menyediakan pelaporan dan verifikasi program untuk memastikan transparansi dan akuntabilitas."
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
                    {index < 4 && <div className="h-full w-1 bg-leaf-green/20"></div>}
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

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Cerita Sukses NGO</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman NGO yang telah berkolaborasi dengan perusahaan sawit melalui platform Sawit-iCare.
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
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-leaf-green"
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

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Dampak Kolaborasi</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dengan berkolaborasi melalui platform Sawit-iCare, NGO dan perusahaan sawit telah menciptakan dampak positif yang signifikan.
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
              { number: "250,000", label: "Pohon Ditanam" },
              { number: "12,450", label: "Ton CO₂ Dikompensasi" },
              { number: "5,800", label: "Petani Didampingi" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                variants={fadeIn}
              >
                <p className="text-3xl md:text-4xl font-bold text-leaf-green mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabunglah dan Tingkatkan Dampak Anda</h2>
            <p className="text-lg mb-8 text-white/90">
              Jadilah bagian dari solusi untuk industri sawit yang berkelanjutan. Bergabunglah dengan jaringan NGO, perusahaan, dan petani untuk menciptakan dampak positif yang lebih besar.
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