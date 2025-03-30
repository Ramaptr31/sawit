"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import FeatureCard from "@/components/featureCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Solusi Kami untuk{" "}
              <span className="text-leaf-green">Semua Stakeholder</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Sawit-iCare menyediakan solusi terintegrasi yang menghubungkan semua
              pihak dalam ekosistem industri kelapa sawit.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Bagi Petani"
              description="Deteksi hama, perhitungan upah, dan perlindungan hak untuk petani sawit."
              icon={renderIcon("petani")}
              href="/petani"
              variant="primary"
              delay={0}
            />
            <FeatureCard
              title="Bagi Perusahaan"
              description="Monitor petani, hitung emisi, dan lakukan carbon trading dengan mudah."
              icon={renderIcon("perusahaan")}
              href="/perusahaan"
              variant="secondary"
              delay={1}
            />
            <FeatureCard
              title="Bagi NGO"
              description="Tawarkan jasa carbon offset dan edukasi lingkungan kepada mitra."
              icon={renderIcon("ngo")}
              href="/ngo"
              variant="neutral"
              delay={2}
            />
            <FeatureCard
              title="Carbon Trading"
              description="Platform untuk memperdagangkan carbon credit dengan transparan dan efisien."
              icon={renderIcon("carbon")}
              href="/perusahaan/carbon-trading"
              variant="primary"
              delay={3}
            />
            <FeatureCard
              title="Perlindungan Hak"
              description="Jaminan perlindungan hak bagi petani dan pekerja di sektor perkebunan."
              icon={renderIcon("protection")}
              href="/petani/perlindungan-hak"
              variant="secondary"
              delay={4}
            />
            <FeatureCard
              title="Edukasi Lingkungan"
              description="Informasi dan edukasi tentang praktik berkelanjutan di industri sawit."
              icon={renderIcon("climate")}
              href="/awareness"
              variant="neutral"
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center"
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-6 rounded-lg"
              variants={itemAnimation}
            >
              <div className="text-4xl font-bold text-sawit-yellow mb-2">3,500+</div>
              <div className="text-gray-600">Petani Terverifikasi</div>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg"
              variants={itemAnimation}
            >
              <div className="text-4xl font-bold text-leaf-green mb-2">12,000+</div>
              <div className="text-gray-600">Hektar Lahan Terpantau</div>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg"
              variants={itemAnimation}
            >
              <div className="text-4xl font-bold text-earth-brown mb-2">4,200</div>
              <div className="text-gray-600">Ton Carbon Credit Terjual</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Artikel & Berita <span className="text-leaf-green">Terbaru</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Temukan informasi terbaru seputar industri kelapa sawit, praktik
              berkelanjutan, dan perkembangan teknologi.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gray-200">
                  <div className="h-full flex items-center justify-center bg-leaf-green/20">
                    <span className="text-leaf-green font-medium">Thumbnail Artikel</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">
                    {article.date} • {article.category}
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium">
                      {article.author.charAt(0)}
                    </div>
                    <div className="ml-2 text-sm">{article.author}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              className="px-6 py-3 bg-white text-leaf-green border border-leaf-green rounded-full hover:bg-leaf-green hover:text-white transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Lihat Semua Artikel
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-leaf-green text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Bergabung dengan Sawit-iCare?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Jadilah bagian dari solusi untuk perkebunan sawit yang berkelanjutan.
              Bersama kita bisa menciptakan masa depan yang lebih baik untuk industri
              dan lingkungan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="px-6 py-3 bg-sawit-yellow text-text-dark font-medium rounded-full hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/auth/register')}
              >
                Daftar Sekarang
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-leaf-green transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/about-us')}
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </div>
          </motion.div>
    </div>
      </section>

      <Footer />
    </main>
  );
}
