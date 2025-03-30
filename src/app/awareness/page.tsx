"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AwarenessPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("semua");
  
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

  // Data kampanye kesadaran
  const awarenessCampaigns = [
    {
      id: 1,
      title: "Sawit Berkelanjutan untuk Indonesia Lebih Baik",
      description: "Kampanye untuk meningkatkan kesadaran tentang pentingnya praktik perkebunan sawit berkelanjutan bagi masa depan Indonesia.",
      image: "campaign-1",
      category: "lingkungan",
      date: "15 April 2024"
    },
    {
      id: 2,
      title: "Kehidupan Petani Sawit: Tantangan dan Harapan",
      description: "Dokumentasi kehidupan petani sawit kecil dan tantangan yang mereka hadapi dalam menerapkan praktik pertanian berkelanjutan.",
      image: "campaign-2",
      category: "petani",
      date: "2 Maret 2024"
    },
    {
      id: 3,
      title: "Carbon Trading: Solusi Win-Win untuk Industri dan Lingkungan",
      description: "Mengedukasi masyarakat tentang bagaimana carbon trading bisa menguntungkan bisnis sekaligus melindungi lingkungan.",
      image: "campaign-3",
      category: "carbon",
      date: "18 Februari 2024"
    },
    {
      id: 4,
      title: "Mengenal Standar RSPO dan ISPO untuk Pertanian Sawit",
      description: "Penjelasan tentang standar sertifikasi RSPO dan ISPO yang penting dalam industri sawit berkelanjutan.",
      image: "campaign-4",
      category: "sertifikasi",
      date: "5 Februari 2024"
    },
    {
      id: 5,
      title: "Penelitian Terbaru: Dampak Positif Digitalisasi di Industri Sawit",
      description: "Hasil penelitian tentang bagaimana teknologi digital dapat meningkatkan produktivitas dan keberlanjutan perkebunan sawit.",
      image: "campaign-5",
      category: "teknologi",
      date: "20 Januari 2024"
    },
    {
      id: 6,
      title: "Hak Asasi Petani: Memastikan Keadilan di Industri Sawit",
      description: "Kampanye untuk memastikan hak-hak petani sawit dihormati dan dilindungi dalam seluruh rantai pasok.",
      image: "campaign-6",
      category: "petani",
      date: "5 Januari 2024"
    },
    {
      id: 7,
      title: "Sawit dan Biodiversitas: Mencari Keseimbangan",
      description: "Inisiatif untuk menemukan keseimbangan antara produksi sawit dan perlindungan biodiversitas di Indonesia.",
      image: "campaign-7",
      category: "lingkungan",
      date: "12 Desember 2023"
    },
    {
      id: 8,
      title: "Webinar: Praktik Terbaik Pengurangan Emisi di Perkebunan",
      description: "Rekaman webinar dengan ahli internasional tentang praktik terbaik untuk mengurangi emisi gas rumah kaca di perkebunan sawit.",
      image: "campaign-8",
      category: "carbon",
      date: "28 November 2023"
    }
  ];

  // Kategori filter
  const categories = [
    { id: "semua", label: "Semua" },
    { id: "lingkungan", label: "Lingkungan" },
    { id: "petani", label: "Petani" },
    { id: "carbon", label: "Carbon Trading" },
    { id: "sertifikasi", label: "Sertifikasi" },
    { id: "teknologi", label: "Teknologi" }
  ];

  // Filter kampanye berdasarkan kategori
  const filteredCampaigns = activeFilter === "semua" 
    ? awarenessCampaigns 
    : awarenessCampaigns.filter(campaign => campaign.category === activeFilter);

  // Render image placeholder
  const renderImagePlaceholder = (imageId: string) => {
    const colorMap: Record<string, string> = {
      "campaign-1": "bg-green-600",
      "campaign-2": "bg-earth-brown",
      "campaign-3": "bg-blue-600",
      "campaign-4": "bg-orange-500",
      "campaign-5": "bg-purple-600",
      "campaign-6": "bg-red-600",
      "campaign-7": "bg-teal-600",
      "campaign-8": "bg-amber-600",
    };

    const iconMap: Record<string, React.ReactNode> = {
      "campaign-1": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      "campaign-2": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      "campaign-3": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      "campaign-4": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      "campaign-5": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      "campaign-6": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      "campaign-7": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      "campaign-8": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    };

    return (
      <div className={`w-full h-48 ${colorMap[imageId] || 'bg-gray-500'} rounded-t-lg flex items-center justify-center text-white`}>
        {iconMap[imageId] || (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    );
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kampanye Kesadaran</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Kami memimpin berbagai kampanye untuk meningkatkan kesadaran tentang praktik pertanian sawit berkelanjutan, perlindungan lingkungan, dan hak-hak petani.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button 
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.id 
                    ? 'bg-leaf-green text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredCampaigns.map((campaign) => (
              <motion.div
                key={campaign.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {renderImagePlaceholder(campaign.image)}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-500">{campaign.date}</span>
                    <span className="px-2 py-1 bg-gray-100 text-xs font-medium rounded text-gray-700 capitalize">
                      {campaign.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{campaign.description}</p>
                  <button 
                    onClick={() => router.push(`/awareness/${campaign.id}`)}
                    className="text-leaf-green font-medium flex items-center text-sm hover:text-leaf-green/80"
                  >
                    Baca selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada kampanye ditemukan</h3>
              <p className="text-gray-500">Tidak ada kampanye dengan kategori ini saat ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-sawit-yellow/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Dapatkan Pembaruan Terbaru</h2>
            <p className="text-gray-600 mb-8">
              Berlangganan buletin kami untuk mendapatkan informasi terbaru tentang kampanye kesadaran, acara, dan berita terkait industri sawit berkelanjutan.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row shadow-sm">
                <input 
                  type="email" 
                  placeholder="Alamat email Anda" 
                  className="px-4 py-3 w-full rounded-l-lg sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                />
                <button className="mt-2 sm:mt-0 bg-leaf-green text-white px-6 py-3 rounded-r-lg sm:rounded-l-none font-medium hover:bg-leaf-green/90 transition-colors">
                  Berlangganan
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Kami menghormati privasi Anda. Anda dapat berhenti berlangganan kapan saja.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-leaf-green text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabunglah dengan Gerakan Kami</h2>
            <p className="text-lg mb-8 text-white/90">
              Mari bersama-sama menciptakan masa depan yang berkelanjutan untuk industri sawit Indonesia.
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