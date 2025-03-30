"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import FeatureCard from "@/components/featureCard";
import { getSafeLocation } from "@/lib/browser";

// Icons for feature cards
const renderIcon = (type: string) => {
  switch (type) {
    case "petani":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
        </svg>
      );
    case "perusahaan":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      );
    case "ngo":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      );
    case "carbon":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case "climate":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      );
    case "protection":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    default:
      return null;
  }
};

// Dummy articles for latest news section
const latestArticles = [
  {
    id: 1,
    title: "Keberlanjutan Industri Kelapa Sawit di Indonesia",
    excerpt: "Praktik berkelanjutan dalam industri sawit untuk memastikan masa depan yang lebih hijau dan ekonomi yang kuat.",
    author: "Dr. Sutanto",
    date: "28 Maret 2023",
    category: "Sustainability",
    imageUrl: "/placeholder.png"
  },
  {
    id: 2,
    title: "Perkebunan Sawit & Kaitannya dengan Perubahan Iklim",
    excerpt: "Bagaimana perkebunan sawit berkelanjutan dapat menjadi bagian dari solusi perubahan iklim global.",
    author: "Ir. Bambang",
    date: "15 Maret 2023",
    category: "Climate",
    imageUrl: "/placeholder.png"
  },
  {
    id: 3,
    title: "Kesejahteraan Petani Kelapa Sawit di Indonesia Timur",
    excerpt: "Program pemberdayaan untuk meningkatkan taraf hidup petani kelapa sawit di Indonesia bagian timur.",
    author: "Siti Nuraini",
    date: "5 Maret 2023",
    category: "Petani",
    imageUrl: "/placeholder.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  const router = useRouter();
  const safeLocation = getSafeLocation();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-dark mb-4">Solusi Terpadu untuk Industri Sawit</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sawit-iCare menghadirkan platform teknologi yang menghubungkan semua pemangku kepentingan dalam rantai pasok sawit berkelanjutan.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants}>
                <FeatureCard 
                  title="Traceability"
                  description="Lacak perjalanan sawit dari lahan hingga produk akhir dengan sistem yang transparan dan terverifikasi."
                  icon="traceable"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard 
                  title="Carbon Credit"
                  description="Hitung dan dapatkan kredit karbon dari praktik pertanian berkelanjutan yang Anda terapkan."
                  icon="carbon"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard 
                  title="Sertifikasi"
                  description="Dapatkan sertifikasi keberlanjutan yang diakui secara internasional untuk meningkatkan nilai jual."
                  icon="certificate"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard 
                  title="Edukasi"
                  description="Akses materi edukasi tentang praktik pertanian sawit berkelanjutan dan teknologi terkini."
                  icon="education"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard 
                  title="Trading Platform"
                  description="Jual beli kredit karbon dan produk sawit berkelanjutan di platform kami yang aman."
                  icon="trading"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard 
                  title="Networking"
                  description="Terhubung dengan petani, perusahaan, dan NGO yang fokus pada keberlanjutan sawit."
                  icon="network"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-leaf-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-2">250+</h3>
                <p className="text-green-100">Petani Terdaftar</p>
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-green-100">Perusahaan Mitra</p>
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-2">10K+</h3>
                <p className="text-green-100">Hektar Lahan Terpantau</p>
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-2">5K+</h3>
                <p className="text-green-100">Ton Karbon Tersimpan</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-dark mb-4">Berita Terbaru</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tetap terinformasi dengan perkembangan terbaru di industri kelapa sawit dan praktik berkelanjutan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="relative h-48">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-green-100 text-leaf-green text-xs font-medium px-2.5 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-text-dark hover:text-leaf-green transition-colors">
                      <Link href={`/articles/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <span className="text-xs font-medium text-gray-600">
                          {article.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-700">{article.author}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/articles">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-leaf-green rounded-md text-leaf-green hover:bg-leaf-green hover:text-white transition-colors">
                  Lihat Semua Artikel
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sawit-yellow">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-text-dark mb-4">Siap Bergabung dengan Sawit-iCare?</h2>
                <p className="text-text-dark opacity-75 max-w-xl">
                  Mulai perjalanan menuju produksi sawit berkelanjutan bersama jaringan petani, perusahaan, dan NGO yang berkomitmen pada lingkungan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/auth/register">
                  <button className="px-6 py-3 bg-leaf-green text-white rounded-md hover:bg-opacity-90 transition-colors">
                    Daftar Sekarang
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-6 py-3 bg-white text-leaf-green rounded-md hover:bg-opacity-90 transition-colors">
                    Hubungi Kami
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
