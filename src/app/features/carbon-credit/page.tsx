"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CarbonCreditPage() {
  const router = useRouter();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-100 to-transparent pt-20 pb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark">Carbon Credit Program</h1>
              <p className="text-lg text-gray-700 mb-8">
                Dapatkan manfaat ekonomi dari praktik keberlanjutan dengan program karbon kredit untuk industri sawit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => router.push('/contact')}
                  className="px-6 py-3 bg-leaf-green text-white rounded-full hover:bg-opacity-90 transition-colors"
                >
                  Pelajari Lebih Lanjut
                </button>
                <Link href="/articles" className="px-6 py-3 bg-white text-text-dark border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  Lihat Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4 text-text-dark">Bagaimana Program Ini Bekerja</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Program karbon kredit kami mengukur, memverifikasi, dan memberikan nilai pada praktik pertanian yang mengurangi emisi karbon.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-leaf-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-leaf-green text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengukuran</h3>
                <p className="text-gray-600">
                  Kami mengukur dan memantau praktik pertanian yang mengurangi emisi karbon seperti konservasi hutan dan pengelolaan lahan berkelanjutan.
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-leaf-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-leaf-green text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verifikasi</h3>
                <p className="text-gray-600">
                  Auditor independen memverifikasi pengurangan emisi karbon sesuai dengan standar internasional yang diakui.
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-leaf-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-leaf-green text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sertifikasi & Perdagangan</h3>
                <p className="text-gray-600">
                  Kredit karbon yang dihasilkan dapat diperdagangkan di pasar karbon internasional, memberikan pendapatan tambahan bagi petani dan perusahaan.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4 text-text-dark">Manfaat Program Carbon Credit</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Program carbon credit memberikan berbagai manfaat ekonomi dan lingkungan bagi seluruh pemangku kepentingan.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-leaf-green"
                variants={fadeIn}
              >
                <div className="text-leaf-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pendapatan Tambahan</h3>
                <p className="text-gray-600">
                  Konversi praktik berkelanjutan menjadi pendapatan melalui penjualan kredit karbon di pasar global.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-leaf-green"
                variants={fadeIn}
              >
                <div className="text-leaf-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengakuan Global</h3>
                <p className="text-gray-600">
                  Peningkatan reputasi dan akses ke pasar internasional dengan produk yang bersertifikat ramah lingkungan.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-leaf-green"
                variants={fadeIn}
              >
                <div className="text-leaf-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Konservasi Lahan</h3>
                <p className="text-gray-600">
                  Insentif finansial untuk menjaga hutan dan lahan gambut, melestarikan biodiversitas lokal.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-leaf-green"
                variants={fadeIn}
              >
                <div className="text-leaf-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inovasi Pertanian</h3>
                <p className="text-gray-600">
                  Mendorong adopsi teknologi dan praktik pertanian modern yang lebih efisien dan berdampak positif.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4 text-text-dark">Kisah Sukses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beberapa contoh implementasi program carbon credit yang telah berhasil di industri sawit Indonesia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Koperasi Petani Riau</h3>
                  <p className="text-gray-600 mb-4">
                    Kelompok petani sawit yang mengimplementasikan praktik pertanian berkelanjutan dan berhasil mendapatkan sertifikasi karbon serta meningkatkan pendapatan mereka sebesar 30%.
                  </p>
                  <Link href="/articles/success-story-riau" className="text-leaf-green hover:underline flex items-center">
                    Baca selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-r from-sawit-yellow to-yellow-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">PT Sawit Berkelanjutan Indonesia</h3>
                  <p className="text-gray-600 mb-4">
                    Perusahaan sawit yang berhasil mengkonversi 5000 hektar lahan menjadi area konservasi dan mendapatkan kredit karbon senilai 2 juta USD per tahun.
                  </p>
                  <Link href="/articles/success-story-pt-sbi" className="text-leaf-green hover:underline flex items-center">
                    Baca selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-leaf-green text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabunglah dengan Program Carbon Credit</h2>
              <p className="text-lg mb-8 text-green-100">
                Dapatkan nilai tambah dari praktik keberlanjutan yang Anda lakukan. Hubungi kami untuk memulai perjalanan Anda menuju ekonomi rendah karbon.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-white text-leaf-green font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  Hubungi Kami
                </Link>
                <Link 
                  href="/calculator"
                  className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  Hitung Potensi Kredit
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 