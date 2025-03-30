"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function FAQPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // State untuk mengelola FAQ yang terbuka
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // Data FAQ dikelompokkan berdasarkan kategori
  const faqCategories = [
    {
      category: "Umum",
      questions: [
        {
          question: "Apa itu Sawit-iCare?",
          answer: "Sawit-iCare adalah platform digital yang menghubungkan petani sawit, perusahaan, dan NGO untuk mendorong praktik perkebunan sawit berkelanjutan. Platform ini menyediakan solusi manajemen perkebunan, carbon trading, dan perlindungan hak petani untuk memastikan keberlanjutan industri sawit."
        },
        {
          question: "Siapa yang dapat menggunakan Sawit-iCare?",
          answer: "Sawit-iCare dapat digunakan oleh berbagai pihak dalam ekosistem sawit, termasuk petani sawit individu, kelompok tani, perusahaan perkebunan sawit, pengolah dan pembeli minyak sawit, NGO yang fokus pada keberlanjutan, serta lembaga sertifikasi."
        },
        {
          question: "Apakah saya perlu membayar untuk menggunakan Sawit-iCare?",
          answer: "Sawit-iCare menerapkan model freemium. Petani kecil dapat mengakses fitur dasar secara gratis, sementara perusahaan dan pengguna dengan kebutuhan lebih kompleks dapat memilih paket berlangganan premium dengan fitur tambahan sesuai kebutuhan mereka."
        },
        {
          question: "Bagaimana cara mendaftar di Sawit-iCare?",
          answer: "Anda dapat mendaftar di Sawit-iCare dengan mengklik tombol 'Daftar Sekarang' di halaman utama atau mengunjungi halaman pendaftaran. Isi formulir pendaftaran dengan informasi yang diminta, pilih jenis akun (petani, perusahaan, atau NGO), dan ikuti instruksi untuk menyelesaikan proses pendaftaran."
        }
      ]
    },
    {
      category: "Untuk Petani",
      questions: [
        {
          question: "Bagaimana Sawit-iCare membantu petani sawit?",
          answer: "Sawit-iCare membantu petani dengan: (1) Panduan praktik pertanian berkelanjutan; (2) Alat deteksi hama & penyakit; (3) Kalkulator waktu pemupukan optimal; (4) Akses ke pasar yang lebih luas; (5) Transparansi harga; (6) Koneksi dengan pembeli yang menawarkan harga premium untuk sawit berkelanjutan; (7) Perlindungan hak dan bantuan legal."
        },
        {
          question: "Apakah saya perlu smartphone canggih untuk menggunakan Sawit-iCare?",
          answer: "Tidak, Sawit-iCare dirancang agar dapat diakses oleh pengguna dengan berbagai jenis perangkat. Versi dasar aplikasi dapat berjalan pada smartphone sederhana. Untuk pengguna yang tidak memiliki smartphone, beberapa fitur juga dapat diakses melalui SMS atau melalui koordinator kelompok tani yang memiliki akses digital."
        },
        {
          question: "Bagaimana cara mengunggah data produksi saya ke platform?",
          answer: "Anda dapat mengunggah data produksi melalui aplikasi mobile dengan beberapa cara: (1) Input manual pada formulir sederhana; (2) Unggah foto bukti timbangan; (3) Rekam suara yang akan dikonversi menjadi data; (4) Sinkronisasi otomatis dengan alat timbang digital (jika tersedia). Platform juga menyediakan opsi pencatatan offline yang akan tersinkronisasi saat Anda kembali online."
        },
        {
          question: "Apakah data saya aman di Sawit-iCare?",
          answer: "Ya, keamanan data adalah prioritas utama kami. Kami menggunakan enkripsi tingkat industri untuk melindungi data Anda. Anda memiliki kontrol penuh atas siapa yang dapat mengakses data Anda, dan kami tidak akan membagikannya kepada pihak ketiga tanpa persetujuan eksplisit dari Anda."
        }
      ]
    },
    {
      category: "Untuk Perusahaan",
      questions: [
        {
          question: "Bagaimana Sawit-iCare membantu perusahaan memenuhi standar keberlanjutan?",
          answer: "Sawit-iCare membantu perusahaan dengan: (1) Pelacakan rantai pasok dari petani hingga pengolahan; (2) Verifikasi praktik berkelanjutan dengan bukti digital; (3) Dasbor analitik untuk pemantauan dan pelaporan ESG; (4) Pengelolaan program sertifikasi seperti RSPO, ISPO, dan MSPO; (5) Fasilitas carbon trading dan offset; (6) Dokumentasi untuk pelaporan keberlanjutan dan kepatuhan regulasi."
        },
        {
          question: "Apakah Sawit-iCare terintegrasi dengan sistem manajemen perusahaan yang sudah ada?",
          answer: "Ya, Sawit-iCare dirancang dengan kemampuan integrasi yang kuat. Kami menyediakan API untuk integrasi dengan sistem ERP, CRM, atau sistem manajemen rantai pasok yang sudah Anda gunakan. Tim teknis kami juga dapat membantu menyesuaikan integrasi sesuai kebutuhan spesifik perusahaan Anda."
        },
        {
          question: "Bagaimana cara memulai program carbon trading melalui Sawit-iCare?",
          answer: "Untuk memulai program carbon trading, Anda perlu: (1) Mendaftar untuk akun Perusahaan Premium; (2) Menyelesaikan penilaian baseline emisi karbon; (3) Menetapkan target pengurangan; (4) Memilih dari berbagai program offset karbon yang tersedia di platform; (5) Terhubung dengan NGO atau penyedia layanan carbon offset; (6) Melacak dan melaporkan kemajuan."
        },
        {
          question: "Apakah Sawit-iCare menyediakan data yang cukup untuk pelaporan ESG?",
          answer: "Ya, Sawit-iCare secara khusus dirancang untuk mendukung pelaporan ESG komprehensif. Platform kami mengumpulkan dan memproses data relevan untuk standar pelaporan utama seperti GRI, SASB, dan TCFD. Anda dapat menghasilkan laporan yang disesuaikan, mengekspor data dalam berbagai format, dan mendapatkan analitik mendalam untuk mengukur kinerja keberlanjutan Anda."
        }
      ]
    },
    {
      category: "Untuk NGO",
      questions: [
        {
          question: "Bagaimana NGO dapat berpartisipasi dalam ekosistem Sawit-iCare?",
          answer: "NGO dapat berpartisipasi dengan beberapa cara: (1) Mendaftar sebagai mitra edukasi untuk menyediakan materi pelatihan; (2) Menjadi penyedia layanan carbon offset; (3) Berpartisipasi dalam program advokasi hak petani; (4) Mengakses data agregat untuk penelitian dan analisis; (5) Berkolaborasi dengan perusahaan untuk program keberlanjutan; (6) Membantu dalam verifikasi praktik berkelanjutan di lapangan."
        },
        {
          question: "Apakah NGO dapat mengakses data petani melalui platform?",
          answer: "NGO hanya dapat mengakses data petani yang telah secara eksplisit menyetujui untuk membagikan data mereka, atau data agregat yang telah dianonimkan untuk tujuan penelitian. Sawit-iCare sangat menjunjung tinggi privasi pengguna dan memastikan bahwa pemilik data memiliki kontrol penuh atas siapa yang dapat mengakses informasi mereka."
        },
        {
          question: "Bagaimana NGO dapat mendukung program edukasi melalui Sawit-iCare?",
          answer: "NGO dapat mendukung program edukasi dengan: (1) Menyumbangkan atau mengembangkan materi edukasi yang dapat diakses melalui platform; (2) Memberikan pelatihan daring atau menyelenggarakan workshop yang dapat dipromosikan melalui platform; (3) Berpartisipasi dalam forum komunitas untuk menjawab pertanyaan; (4) Membantu perusahaan dalam mengembangkan program pelatihan petani yang efektif; (5) Berkolaborasi dalam sertifikasi pengetahuan petani."
        },
        {
          question: "Bagaimana NGO dapat terlibat dalam program carbon trading?",
          answer: "NGO dapat terlibat dalam carbon trading dengan: (1) Mendaftar sebagai mitra verifikasi untuk program carbon offset; (2) Menawarkan proyek carbon sequestration atau pengurangan emisi; (3) Membantu petani dan perusahaan dalam mengukur dan mengurangi jejak karbon; (4) Menjadi perantara dalam transaksi kredit karbon; (5) Memastikan standar dan praktik terbaik dalam carbon trading dipatuhi oleh semua pihak."
        }
      ]
    },
    {
      category: "Teknis & Dukungan",
      questions: [
        {
          question: "Apa persyaratan teknis untuk menggunakan Sawit-iCare?",
          answer: "Untuk aplikasi web: Browser modern (Chrome, Firefox, Safari, Edge). Untuk aplikasi mobile: Android 6.0+ atau iOS 11+. Koneksi internet untuk sinkronisasi data, tetapi banyak fitur juga dapat berfungsi dalam mode offline. Untuk pengguna korporat: Tidak ada persyaratan infrastruktur khusus, karena platform kami berbasis cloud."
        },
        {
          question: "Bagaimana cara mendapatkan bantuan jika saya mengalami masalah teknis?",
          answer: "Anda dapat mendapatkan bantuan melalui beberapa saluran: (1) Pusat bantuan dalam aplikasi; (2) Chat langsung dengan tim dukungan kami; (3) Email ke support@sawiticare.com; (4) Hotline telepon di +62 812 3456 7890 (jam kerja); (5) Komunitas forum pengguna; (6) Jadwalkan sesi dukungan satu-per-satu untuk masalah kompleks."
        },
        {
          question: "Apakah Sawit-iCare tersedia dalam bahasa lain selain Bahasa Indonesia?",
          answer: "Saat ini, Sawit-iCare tersedia dalam Bahasa Indonesia dan Bahasa Inggris. Kami sedang mengembangkan dukungan untuk beberapa bahasa daerah utama di Indonesia, serta Bahasa Melayu untuk pengguna di Malaysia. Kami berkomitmen untuk membuat platform kami inklusif dan dapat diakses oleh semua pengguna potensial."
        },
        {
          question: "Bagaimana cara mengunduh laporan dan data dari Sawit-iCare?",
          answer: "Anda dapat mengunduh laporan dan data dengan beberapa cara: (1) Melalui dasbor pengguna, klik 'Laporan' dan pilih jenis laporan yang ingin diunduh; (2) Sesuaikan parameter laporan (rentang tanggal, jenis data, dll.); (3) Pilih format (PDF, Excel, CSV, JSON); (4) Klik 'Unduh' atau jadwalkan laporan otomatis yang akan dikirim ke email Anda. Untuk API akses, pengguna premium dapat mengintegrasikan data langsung ke sistem mereka."
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-leaf-green to-leaf-green/80 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h1>
            <p className="text-lg text-white/90">
              Temukan jawaban atas pertanyaan umum tentang layanan Sawit-iCare
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section (future enhancement) */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari pertanyaan..."
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

      {/* FAQ Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-leaf-green border-b pb-2">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const index = catIndex * 100 + faqIndex; // Unique index
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 transform transition-transform ${
                              openFaq === index ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        {openFaq === index && (
                          <div className="p-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Belum menemukan jawaban Anda?</h2>
            <p className="text-gray-600 mb-6">
              Hubungi tim dukungan kami untuk mendapatkan bantuan lebih lanjut
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@sawiticare.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-leaf-green hover:bg-leaf-green/90"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Email Support
              </a>
              <a 
                href="tel:+6281234567890"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-leaf-green bg-white border-leaf-green hover:bg-gray-50"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                +62 812 3456 7890
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 