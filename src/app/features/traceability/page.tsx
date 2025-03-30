"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TraceabilityPage() {
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
        <section className="bg-gradient-to-b from-sawit-yellow/30 to-transparent pt-20 pb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark">Traceability System</h1>
              <p className="text-lg text-gray-700 mb-8">
                Lacak perjalanan sawit dari lahan hingga produk akhir dengan sistem yang transparan dan terverifikasi.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => router.push('/contact')}
                  className="px-6 py-3 bg-leaf-green text-white rounded-full hover:bg-opacity-90 transition-colors"
                >
                  Pelajari Implementasi
                </button>
                <Link href="/articles" className="px-6 py-3 bg-white text-text-dark border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  Lihat Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4 text-text-dark">Fitur Utama Traceability</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sistem kami menyediakan kemampuan pelacakan end-to-end dengan teknologi blockchain untuk memastikan transparansi dan akurasi data.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <div className="text-leaf-green text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Record</h3>
                <p className="text-gray-600">
                  Catat setiap tahap produksi mulai dari penanaman, pemanenan, pengolahan hingga distribusi secara digital.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <div className="text-leaf-green text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verifikasi Blockchain</h3>
                <p className="text-gray-600">
                  Data tersimpan dalam blockchain sehingga tidak dapat dimanipulasi dan dapat diverifikasi oleh semua pihak.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <div className="text-leaf-green text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">QR Scanning</h3>
                <p className="text-gray-600">
                  Konsumen dapat memindai kode QR pada produk untuk melihat seluruh rantai pasok dan asal produk.
                </p>
              </motion.div>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-4 text-text-dark">Manfaat Sistem Traceability</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Implementasi sistem traceability memberikan berbagai manfaat bagi seluruh stakeholder dalam rantai pasok sawit.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sawit-yellow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Bagi Perusahaan</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sawit-yellow mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compliance dengan regulasi sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sawit-yellow mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Perbaikan proses bisnis dan efisiensi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sawit-yellow mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Peningkatan brand value dan kepercayaan konsumen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sawit-yellow mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Akses ke pasar premium yang mensyaratkan traceability</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-leaf-green"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Bagi Petani</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-leaf-green mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Harga premium untuk produk yang dapat dilacak</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-leaf-green mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rekam jejak digital untuk peminjaman dan dukungan finansial</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-leaf-green mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Visibilitas dalam rantai pasok global</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-leaf-green mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pembuktian praktik pertanian berkelanjutan</span>
                  </li>
                </ul>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mulai Lacak Rantai Pasok Anda</h2>
              <p className="text-lg mb-8 text-green-100">
                Implementasikan sistem traceability Sawit-iCare untuk meningkatkan transparansi dan nilai produk sawit Anda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-white text-leaf-green font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  Hubungi Kami
                </Link>
                <Link 
                  href="/demo"
                  className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  Lihat Demo
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