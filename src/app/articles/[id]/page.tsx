import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

// Fungsi generateStaticParams digunakan untuk pre-rendering halaman dengan parameter dinamis
export function generateStaticParams() {
  // Generate params untuk setiap artikel dalam database
  // dan tambahkan beberapa ID tambahan untuk artikel placeholder
  const params = [
    ...articlesDatabase.map(article => ({ id: article.id.toString() })),
    { id: "3" },
    { id: "4" },
    { id: "5" }
  ];
  
  return params;
}

// Fungsi untuk menentukan data artikel berdasarkan ID
const getCurrentArticle = (id: string) => {
  const numId = parseInt(id);
  
  // Mencari artikel dengan ID yang sesuai
  const foundArticle = articlesDatabase.find(article => article.id === numId);
  
  // Jika artikel ditemukan, gunakan data tersebut
  // Jika tidak, gunakan artikel pertama atau tampilkan pesan kesalahan
  if (foundArticle) {
    return foundArticle;
  } else if (numId > 2) {
    // Untuk ID yang tidak ada dalam database, gunakan template dengan ID yang sama
    return {
      id: numId,
      title: `Artikel tentang Sawit #${numId}`,
      content: `<p class="mb-4">Ini adalah konten placeholder untuk artikel dengan ID ${numId}. Detail artikel akan segera tersedia.</p>
      <p class="mb-4">Artikel ini akan membahas tentang berbagai aspek industri sawit di Indonesia, termasuk praktik berkelanjutan, inovasi teknologi, dan dampak sosial ekonomi.</p>
      <p>Kembali lagi nanti untuk membaca artikel lengkapnya!</p>`,
      date: "1 Januari 2024",
      category: "informasi",
      author: "Tim Sawit-iCare",
      readTime: "5 menit",
      image: "placeholder"
    };
  } else {
    // Fallback jika ID tidak valid
    return {
      id: 0,
      title: "Artikel Tidak Ditemukan",
      content: "<p>Maaf, artikel yang Anda cari tidak ditemukan. Silakan kembali ke halaman artikel untuk melihat artikel lainnya.</p>",
      date: "",
      category: "",
      author: "",
      readTime: "",
      image: "placeholder"
    };
  }
};

// Kategori map untuk menerjemahkan kategori ke bahasa Indonesia
const categoryMap: Record<string, string> = {
  "sustainability": "Keberlanjutan",
  "innovation": "Inovasi",
  "petani": "Petani",
  "lingkungan": "Lingkungan",
  "ekonomi": "Ekonomi",
  "informasi": "Informasi"
};

// Fungsi untuk render image placeholder
const renderImagePlaceholder = (imageId: string) => {
  // Jika imageId tidak ditemukan, gunakan placeholder default
  const safeImageId = imageId || "placeholder";
  
  // SVG untuk berbagai jenis gambar
  if (safeImageId === "sustainability-1") {
    return (
      <div className="aspect-[5/3] w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-leaf-green/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>
    );
  } else if (safeImageId === "innovation-1") {
    return (
      <div className="aspect-[5/3] w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-sawit-yellow/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <div className="aspect-[5/3] w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }
};

// JSX untuk komponen artikel terkait
const RelatedArticleItem = ({ article }: { article: typeof articlesDatabase[0] }) => (
  <Link 
    href={`/articles/${article.id}`} 
    key={article.id}
    className="group"
  >
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] w-full bg-gray-100">
        {renderImagePlaceholder(article.image)}
      </div>
      <div className="p-4">
        <p className="text-sm text-leaf-green mb-2">
          {categoryMap[article.category] || article.category}
        </p>
        <h4 className="font-semibold text-text-dark group-hover:text-leaf-green transition-colors">
          {article.title}
        </h4>
        <p className="text-sm text-gray-500 mt-2">{article.date}</p>
      </div>
    </div>
  </Link>
);

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = getCurrentArticle(params.id);
  
  return (
    <>
      <Navbar />
      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/articles" 
              className="inline-flex items-center text-leaf-green hover:text-sawit-yellow mb-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Kembali ke Artikel
            </Link>
            
            <div className="mb-8">
              {renderImagePlaceholder(article.image)}
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium bg-sawit-yellow/10 text-earth-brown px-3 py-1 rounded-full">
                  {categoryMap[article.category] || article.category}
                </span>
                <span className="text-sm text-gray-500 ml-4">{article.date}</span>
                {article.readTime && (
                  <span className="text-sm text-gray-500 ml-4">{article.readTime} baca</span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                {article.title}
              </h1>
              
              {article.author && (
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{article.author}</p>
                    <p className="text-sm text-gray-500">Kontributor</p>
                  </div>
                </div>
              )}
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
              
              <div className="border-t border-gray-200 mt-12 pt-8">
                <h3 className="text-xl font-semibold mb-6">Artikel Terkait</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articlesDatabase
                    .filter(a => a.id !== parseInt(params.id))
                    .slice(0, 2)
                    .map((relatedArticle) => (
                      <RelatedArticleItem key={relatedArticle.id} article={relatedArticle} />
                    ))}
                </div>
              </div>
              
              <div className="bg-leaf-green/5 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-leaf-green mb-3">Ingin berkontribusi?</h3>
                <p className="text-gray-700 mb-4">Kami selalu mencari kontributor dan ahli untuk berbagi pengetahuan tentang praktik sawit berkelanjutan.</p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-leaf-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Hubungi Kami
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 