"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Simulasi artikel detail
  const articleData = {
    id: parseInt(params.id),
    title: "",
    content: "",
    date: "",
    category: "",
    author: "",
    readTime: "",
    image: ""
  };

  // Data artikel sample
  const articlesDatabase = [
    {
      id: 1,
      title: "Mengapa Keberlanjutan Penting dalam Industri Sawit Indonesia",
      content: `<p class="mb-4">Keberlanjutan telah menjadi kata kunci yang semakin penting dalam industri sawit Indonesia. Sebagai produsen minyak sawit terbesar di dunia, Indonesia memiliki tanggung jawab besar untuk memastikan bahwa produksi sawit tidak hanya menguntungkan secara ekonomi tetapi juga bertanggung jawab terhadap lingkungan dan masyarakat.</p>
      
      <p class="mb-4">Dampak lingkungan dari perkebunan sawit yang tidak berkelanjutan sangat signifikan. Deforestasi, hilangnya keanekaragaman hayati, dan emisi gas rumah kaca adalah beberapa masalah utama yang sering dikaitkan dengan ekspansi perkebunan sawit yang tidak dikelola dengan baik. Selain itu, konflik sosial dengan masyarakat lokal dan pelanggaran hak-hak pekerja juga menjadi sorotan internasional.</p>
      
      <h3 class="text-xl font-semibold my-4">Manfaat Keberlanjutan</h3>
      
      <p class="mb-4">Menerapkan praktik berkelanjutan dalam industri sawit membawa berbagai manfaat:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Akses pasar yang lebih luas, terutama ke negara-negara yang mementingkan produk berkelanjutan</li>
        <li class="mb-2">Peningkatan efisiensi operasional dan pengurangan biaya jangka panjang</li>
        <li class="mb-2">Pengurangan risiko reputasi dan regulasi</li>
        <li class="mb-2">Hubungan yang lebih baik dengan masyarakat lokal dan pemangku kepentingan lainnya</li>
        <li class="mb-2">Kontribusi positif terhadap mitigasi perubahan iklim</li>
      </ul>
      
      <h3 class="text-xl font-semibold my-4">Standar dan Sertifikasi</h3>
      
      <p class="mb-4">Untuk memastikan keberlanjutan, industri sawit diatur oleh berbagai standar dan skema sertifikasi. Dua yang paling menonjol adalah:</p>
      
      <ol class="list-decimal pl-6 mb-4">
        <li class="mb-2"><strong>RSPO (Roundtable on Sustainable Palm Oil)</strong> - Standar internasional yang mempromosikan produksi minyak sawit berkelanjutan melalui kriteria lingkungan dan sosial yang ketat.</li>
        <li class="mb-2"><strong>ISPO (Indonesian Sustainable Palm Oil)</strong> - Standar nasional Indonesia yang wajib bagi semua produsen sawit di negara ini, dengan fokus pada kepatuhan hukum dan praktik terbaik.</li>
      </ol>
      
      <p class="mb-4">Perusahaan yang memperoleh sertifikasi ini menunjukkan komitmen mereka terhadap praktik berkelanjutan dan dapat menikmati akses yang lebih baik ke pasar global.</p>
      
      <h3 class="text-xl font-semibold my-4">Peran Teknologi</h3>
      
      <p class="mb-4">Kemajuan teknologi memainkan peran penting dalam mendukung keberlanjutan di industri sawit. Beberapa inovasi yang menjanjikan termasuk:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Pemantauan berbasis satelit untuk mencegah deforestasi</li>
        <li class="mb-2">Teknologi blockchain untuk keterlacakan rantai pasok</li>
        <li class="mb-2">Aplikasi mobile untuk mengedukasi dan membantu petani kecil</li>
        <li class="mb-2">Sistem pengelolaan air dan limbah yang lebih efisien</li>
      </ul>
      
      <p class="mb-4">Dengan adopsi teknologi ini, produsen sawit dapat lebih efektif dalam mengelola dampak lingkungan dan sosial dari operasi mereka.</p>
      
      <h3 class="text-xl font-semibold my-4">Kesimpulan</h3>
      
      <p class="mb-4">Keberlanjutan bukan hanya pilihan tetapi keharusan bagi industri sawit Indonesia. Dengan menerapkan praktik berkelanjutan, industri ini dapat terus memberikan kontribusi ekonomi yang signifikan sambil meminimalkan dampak negatifnya terhadap lingkungan dan masyarakat. Kerjasama antara pemerintah, perusahaan, masyarakat sipil, dan petani kecil sangat penting untuk mencapai tujuan ini.</p>
      
      <p>Melalui Sawit-iCare, kami berkomitmen untuk mendukung transformasi industri sawit Indonesia menuju praktik yang lebih berkelanjutan, transparan, dan adil bagi semua pemangku kepentingan.</p>`,
      date: "20 April 2024",
      category: "sustainability",
      author: "Dr. Siti Nurbaya",
      readTime: "8 menit",
      image: "sustainability-1"
    },
    {
      id: 2,
      title: "Teknologi Drone untuk Pemantauan Kesehatan Tanaman Sawit",
      content: `<p class="mb-4">Teknologi drone telah merevolusi berbagai industri, dan perkebunan sawit tidak terkecuali. Dalam beberapa tahun terakhir, penggunaan drone untuk memantau kesehatan tanaman sawit telah menjadi praktik yang semakin umum di perkebunan besar maupun kecil di Indonesia.</p>
      
      <p class="mb-4">Drone dilengkapi dengan kamera multispektral yang dapat mendeteksi stres tanaman, kekurangan nutrisi, serangan hama, dan masalah kesehatan tanaman lainnya bahkan sebelum gejala tersebut terlihat oleh mata manusia. Hal ini memungkinkan tindakan preventif yang lebih cepat dan efisien.</p>
      
      <h3 class="text-xl font-semibold my-4">Manfaat Pemantauan Drone</h3>
      
      <p class="mb-4">Penggunaan drone untuk pemantauan kesehatan tanaman sawit memiliki beberapa manfaat signifikan:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Deteksi dini masalah kesehatan tanaman</li>
        <li class="mb-2">Pengurangan penggunaan pestisida melalui aplikasi yang lebih tepat sasaran</li>
        <li class="mb-2">Optimasi penggunaan pupuk berdasarkan kebutuhan tanaman</li>
        <li class="mb-2">Penghematan waktu dan tenaga kerja dibandingkan dengan survei manual</li>
        <li class="mb-2">Data yang lebih akurat untuk pengambilan keputusan</li>
      </ul>
      
      <h3 class="text-xl font-semibold my-4">Teknologi di Balik Drone Pertanian</h3>
      
      <p class="mb-4">Drone modern yang digunakan dalam perkebunan sawit dilengkapi dengan berbagai sensor canggih:</p>
      
      <ol class="list-decimal pl-6 mb-4">
        <li class="mb-2"><strong>Kamera RGB</strong> - Untuk pemetaan visual standar dan pemantauan umum</li>
        <li class="mb-2"><strong>Sensor Multispektral</strong> - Mengukur refleksi cahaya pada berbagai panjang gelombang untuk mendeteksi kesehatan tanaman</li>
        <li class="mb-2"><strong>Sensor Termal</strong> - Mengukur suhu tanaman untuk mendeteksi stres air</li>
        <li class="mb-2"><strong>LiDAR</strong> - Untuk pemetaan topografi dan struktur kanopi tanaman</li>
      </ol>
      
      <p class="mb-4">Data yang dikumpulkan oleh drone kemudian dianalisis menggunakan perangkat lunak khusus yang menerapkan algoritma kecerdasan buatan untuk mengidentifikasi area yang memerlukan perhatian.</p>
      
      <h3 class="text-xl font-semibold my-4">Implementasi di Lapangan</h3>
      
      <p class="mb-4">Beberapa perusahaan sawit terkemuka di Indonesia telah mengadopsi teknologi drone dengan hasil yang sangat positif. Misalnya, sebuah perkebunan di Kalimantan Timur melaporkan pengurangan penggunaan pestisida hingga 30% dan peningkatan hasil panen sebesar 15% setelah mengimplementasikan pemantauan drone secara rutin.</p>
      
      <p class="mb-4">Untuk petani kecil, layanan drone bersama atau koperasi dapat menjadi solusi untuk mengakses teknologi ini tanpa harus mengeluarkan investasi besar untuk pembelian peralatan.</p>
      
      <h3 class="text-xl font-semibold my-4">Tantangan dan Solusi</h3>
      
      <p class="mb-4">Meskipun menjanjikan, penggunaan drone dalam perkebunan sawit masih menghadapi beberapa tantangan:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Biaya awal yang tinggi untuk peralatan berkualitas</li>
        <li class="mb-2">Kebutuhan akan operator terlatih</li>
        <li class="mb-2">Keterbatasan baterai dan jangkauan terbang</li>
        <li class="mb-2">Kondisi cuaca yang dapat mengganggu operasi</li>
      </ul>
      
      <p class="mb-4">Namun, dengan perkembangan teknologi yang terus berlanjut, drone menjadi semakin terjangkau, mudah digunakan, dan tahan terhadap berbagai kondisi lingkungan.</p>
      
      <h3 class="text-xl font-semibold my-4">Masa Depan Teknologi Drone di Industri Sawit</h3>
      
      <p class="mb-4">Masa depan teknologi drone dalam perkebunan sawit sangat menjanjikan. Beberapa tren yang diperkirakan akan berkembang antara lain:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Integrasi dengan sistem manajemen perkebunan yang lebih luas</li>
        <li class="mb-2">Drone otonom yang dapat beroperasi tanpa campur tangan manusia</li>
        <li class="mb-2">Kemampuan penyemprotan presisi untuk aplikasi pupuk dan pestisida</li>
        <li class="mb-2">Analisis data real-time di lapangan</li>
      </ul>
      
      <p>Dengan adopsi teknologi drone yang terus meningkat, industri sawit Indonesia berpotensi untuk menjadi lebih efisien, berkelanjutan, dan kompetitif di pasar global.</p>`,
      date: "15 April 2024",
      category: "innovation",
      author: "Ir. Bambang Wijaya",
      readTime: "6 menit",
      image: "innovation-1"
    }
  ];

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Fungsi untuk menentukan data artikel berdasarkan ID
  const getCurrentArticle = () => {
    const id = parseInt(params.id);
    
    // Mencari artikel dengan ID yang sesuai
    const foundArticle = articlesDatabase.find(article => article.id === id);
    
    // Jika artikel ditemukan, gunakan data tersebut
    // Jika tidak, gunakan artikel pertama atau tampilkan pesan kesalahan
    if (foundArticle) {
      return foundArticle;
    } else if (id > 2) {
      // Untuk ID yang tidak ada dalam database, gunakan template dengan ID yang sama
      return {
        id: id,
        title: `Artikel tentang Sawit #${id}`,
        content: `<p class="mb-4">Ini adalah konten placeholder untuk artikel dengan ID ${id}. Detail artikel ini akan segera tersedia.</p>
        <p class="mb-4">Kami sedang menyiapkan konten berkualitas tentang berbagai aspek industri sawit berkelanjutan.</p>
        <p>Silakan kembali ke <a href="/articles" class="text-leaf-green hover:underline">halaman artikel</a> untuk melihat artikel lain yang sudah tersedia.</p>`,
        date: "2024",
        category: "general",
        author: "Tim Sawit-iCare",
        readTime: "5 menit",
        image: "placeholder"
      };
    } else {
      return articlesDatabase[0]; // Fallback ke artikel pertama
    }
  };

  const article = getCurrentArticle();

  // Render image placeholder
  const renderImagePlaceholder = (imageId: string) => {
    const category = imageId.split('-')[0];
    
    const colorMap: Record<string, string> = {
      "sustainability": "bg-green-600",
      "innovation": "bg-blue-600",
      "farmers": "bg-earth-brown",
      "carbon": "bg-purple-600",
      "research": "bg-teal-600",
      "market": "bg-amber-600",
      "placeholder": "bg-gray-500"
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
      "placeholder": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    };

    return (
      <div className={`w-full h-64 md:h-96 ${colorMap[category] || 'bg-leaf-green'} flex items-center justify-center text-white`}>
        {iconMap[category] || (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    );
  };

  const categoryMap: Record<string, string> = {
    "sustainability": "Keberlanjutan",
    "innovation": "Inovasi",
    "farmers": "Petani",
    "carbon": "Carbon Trading",
    "research": "Penelitian",
    "market": "Pasar",
    "general": "Umum"
  };

  // Icon library untuk kategori pada artikel terkait
  const iconMapForRelated: Record<string, React.ReactNode> = {
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
    ),
    "general": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  };

  return (
    <>
      <Navbar />
      
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-leaf-green"></div>
        </div>
      ) : (
        <>
          {/* Hero Image */}
          {renderImagePlaceholder(article.image)}
          
          {/* Article Content */}
          <article className="max-w-4xl mx-auto px-4 py-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="mb-6">
                <span className="px-3 py-1 bg-gray-100 text-sm font-medium rounded-full text-gray-700 inline-block mb-4">
                  {categoryMap[article.category] || article.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
                <div className="flex flex-wrap items-center text-gray-600 text-sm">
                  <span className="mr-4">
                    <strong>Oleh:</strong> {article.author}
                  </span>
                  <span className="mr-4">
                    <strong>Tanggal:</strong> {article.date}
                  </span>
                  <span>
                    <strong>Waktu baca:</strong> {article.readTime}
                  </span>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>
              
              <div className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => router.push('/articles')}
                    className="flex items-center text-leaf-green hover:text-leaf-green/80"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Kembali ke daftar artikel
                  </button>
                  
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-leaf-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-leaf-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </article>
          
          {/* Related Articles Section */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Artikel Terkait</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articlesDatabase
                  .filter(relatedArticle => relatedArticle.id !== article.id)
                  .slice(0, 3)
                  .map((relatedArticle, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      onClick={() => router.push(`/articles/${relatedArticle.id}`)}
                    >
                      <div className={`w-full h-48 ${relatedArticle.category === "sustainability" ? "bg-green-600" : "bg-blue-600"} flex items-center justify-center text-white`}>
                        {iconMapForRelated[relatedArticle.category] || (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{relatedArticle.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {relatedArticle.title.substring(0, 100)}...
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">{relatedArticle.date}</span>
                          <span className="text-leaf-green font-medium">Baca artikel</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-leaf-green text-white py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Tertarik dengan Industri Sawit Berkelanjutan?</h2>
              <p className="text-xl mb-8 text-white/90">
                Bergabunglah dengan Sawit-iCare untuk mendukung praktik perkebunan sawit yang berkelanjutan dan adil.
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
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  );
} 