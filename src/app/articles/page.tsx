"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AllArticlesPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  
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

  // Categories
  const categories = [
    { id: "all", name: "Semua" },
    { id: "sustainability", name: "Keberlanjutan" },
    { id: "innovation", name: "Inovasi" },
    { id: "farmers", name: "Petani" },
    { id: "carbon", name: "Carbon Trading" },
    { id: "research", name: "Penelitian" },
    { id: "market", name: "Pasar" }
  ];

  // Article data
  const articles = [
    {
      id: 1,
      title: "Mengapa Keberlanjutan Penting dalam Industri Sawit Indonesia",
      summary: "Artikel ini membahas pentingnya keberlanjutan dalam industri sawit Indonesia, termasuk dampak lingkungan, sosial, dan ekonomi.",
      date: "20 April 2024",
      category: "sustainability",
      author: "Dr. Siti Nurbaya",
      readTime: "8 menit",
      image: "sustainability-1"
    },
    {
      id: 2,
      title: "Teknologi Drone untuk Pemantauan Kesehatan Tanaman Sawit",
      summary: "Penggunaan teknologi drone dalam memantau kesehatan tanaman sawit dapat meningkatkan efisiensi dan mengurangi penggunaan pestisida.",
      date: "15 April 2024",
      category: "innovation",
      author: "Ir. Bambang Wijaya",
      readTime: "6 menit",
      image: "innovation-1"
    },
    {
      id: 3,
      title: "Peran Petani Kecil dalam Rantai Pasok Sawit Berkelanjutan",
      summary: "Petani kecil memiliki peran penting dalam rantai pasok sawit. Artikel ini membahas bagaimana mendukung mereka untuk praktik berkelanjutan.",
      date: "10 April 2024",
      category: "farmers",
      author: "Rini Sumarno",
      readTime: "7 menit",
      image: "farmers-1"
    },
    {
      id: 4,
      title: "Carbon Trading: Peluang Baru untuk Industri Sawit",
      summary: "Pasar karbon menawarkan peluang baru bagi industri sawit. Pelajari bagaimana perusahaan dapat berpartisipasi dan mendapatkan manfaat.",
      date: "5 April 2024",
      category: "carbon",
      author: "Dr. Ahmad Fauzi",
      readTime: "9 menit",
      image: "carbon-1"
    },
    {
      id: 5,
      title: "Studi Terbaru: Dampak Perubahan Iklim pada Produksi Sawit",
      summary: "Penelitian terbaru menunjukkan bagaimana perubahan iklim mempengaruhi produksi sawit di Indonesia dan strategi adaptasi yang dapat diterapkan.",
      date: "1 April 2024",
      category: "research",
      author: "Prof. Dr. Sutanto",
      readTime: "10 menit",
      image: "research-1"
    },
    {
      id: 6,
      title: "Tren Pasar Global untuk Minyak Sawit Berkelanjutan",
      summary: "Pasar global semakin menuntut minyak sawit berkelanjutan. Artikel ini membahas tren terkini dan implikasinya bagi produsen Indonesia.",
      date: "27 Maret 2024",
      category: "market",
      author: "Dewi Anggini",
      readTime: "7 menit",
      image: "market-1"
    },
    {
      id: 7,
      title: "Sertifikasi RSPO dan ISPO: Perbandingan dan Manfaat",
      summary: "Artikel ini membandingkan standar sertifikasi RSPO dan ISPO, termasuk persyaratan, proses, dan manfaat bagi produsen sawit.",
      date: "20 Maret 2024",
      category: "sustainability",
      author: "Budi Santoso",
      readTime: "8 menit",
      image: "sustainability-2"
    },
    {
      id: 8,
      title: "Inovasi dalam Pengolahan Limbah Sawit menjadi Bioenergi",
      summary: "Teknologi terbaru memungkinkan konversi limbah sawit menjadi bioenergi, menciptakan sumber pendapatan tambahan dan mengurangi dampak lingkungan.",
      date: "15 Maret 2024",
      category: "innovation",
      author: "Dr. Hadi Pranoto",
      readTime: "6 menit",
      image: "innovation-2"
    },
    {
      id: 9,
      title: "Pemberdayaan Petani Perempuan dalam Industri Sawit",
      summary: "Perempuan memainkan peran penting dalam industri sawit. Artikel ini membahas inisiatif untuk memberdayakan petani perempuan.",
      date: "10 Maret 2024",
      category: "farmers",
      author: "Ratna Dewi",
      readTime: "7 menit",
      image: "farmers-2"
    },
    {
      id: 10,
      title: "Implementasi ESG dalam Bisnis Sawit: Studi Kasus",
      summary: "Studi kasus tentang bagaimana perusahaan sawit terkemuka mengimplementasikan prinsip ESG (Environmental, Social, Governance) dalam operasi mereka.",
      date: "5 Maret 2024",
      category: "sustainability",
      author: "Dr. Gunawan Wibisono",
      readTime: "9 menit",
      image: "sustainability-3"
    },
    {
      id: 11,
      title: "Analisis: Proyeksi Harga Minyak Sawit 2024-2025",
      summary: "Analisis mendalam tentang faktor-faktor yang mempengaruhi harga minyak sawit global dan proyeksi untuk tahun 2024-2025.",
      date: "1 Maret 2024",
      category: "market",
      author: "Eko Purnomo",
      readTime: "8 menit",
      image: "market-2"
    },
    {
      id: 12,
      title: "Teknik Regeneratif untuk Perkebunan Sawit Berkelanjutan",
      summary: "Praktik pertanian regeneratif dapat meningkatkan kesehatan tanah dan keberlanjutan jangka panjang perkebunan sawit.",
      date: "25 Februari 2024",
      category: "research",
      author: "Dr. Indah Sulistiani",
      readTime: "7 menit",
      image: "research-2"
    }
  ];

  // Filter by category and search term
  const filteredArticles = articles.filter(article => {
    const matchesCategory = currentCategory === "all" || article.category === currentCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Render image placeholder based on category
  const renderImagePlaceholder = (imageId: string) => {
    const category = imageId.split('-')[0];
    
    const colorMap: Record<string, string> = {
      "sustainability": "bg-green-600",
      "innovation": "bg-blue-600",
      "farmers": "bg-earth-brown",
      "carbon": "bg-purple-600",
      "research": "bg-teal-600",
      "market": "bg-amber-600"
    };

    const iconMap: Record<string, React.ReactNode> = {
      "sustainability": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      "innovation": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      "farmers": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      "carbon": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      "research": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      "market": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    };

    return (
      <div className={`w-full h-48 ${colorMap[category] || 'bg-gray-500'} rounded-t-lg flex items-center justify-center text-white`}>
        {iconMap[category] || (
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Artikel Sawit-iCare</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Dapatkan informasi terbaru dan wawasan mendalam tentang industri sawit berkelanjutan dari para ahli terkemuka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-leaf-green focus:border-transparent"
              />
              <svg
                className="w-5 h-5 text-gray-500 absolute right-3 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button 
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentCategory === category.id 
                    ? 'bg-leaf-green text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {renderImagePlaceholder(article.image)}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-500">{article.date}</span>
                      <span className="px-2 py-1 bg-gray-100 text-xs font-medium rounded text-gray-700 capitalize">
                        {categories.find(cat => cat.id === article.category)?.name || article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{article.summary}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Oleh: <span className="font-medium">{article.author}</span> • {article.readTime} baca
                      </span>
                      <button 
                        onClick={() => router.push(`/articles/${article.id}`)}
                        className="text-leaf-green font-medium flex items-center text-sm hover:text-leaf-green/80"
                      >
                        Baca
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada artikel ditemukan</h3>
              <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda.</p>
              <button 
                onClick={() => {setSearchTerm(''); setCurrentCategory('all');}}
                className="mt-4 px-4 py-2 bg-leaf-green text-white rounded-md hover:bg-leaf-green/90 transition-colors"
              >
                Reset Pencarian
              </button>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Berlangganan Artikel Terbaru</h2>
            <p className="text-gray-600 mb-8">
              Dapatkan artikel terbaru langsung ke email Anda. Kami akan mengirimkan konten berkualitas tentang industri sawit berkelanjutan.
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
                Kami berkomitmen untuk tidak mengirimkan spam. Anda dapat berhenti berlangganan kapan saja.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
} 