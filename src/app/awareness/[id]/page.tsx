import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Data kampanye sample
const awarenessDatabase = [
  {
    id: 1,
    title: "Kampanye Pendidikan Sawitku Hijau",
    content: `<p class="mb-4">Kampanye "Sawitku Hijau" adalah inisiatif nasional yang bertujuan untuk meningkatkan kesadaran tentang praktik berkelanjutan dalam industri kelapa sawit Indonesia. Kampanye ini berfokus pada pendidikan dan pelatihan bagi petani kecil yang merupakan bagian penting dari rantai pasokan sawit nasional.</p>
    
    <p class="mb-4">Melalui program ini, petani kelapa sawit kecil mendapatkan akses ke pengetahuan, sumber daya, dan dukungan yang mereka butuhkan untuk mengadopsi praktik pertanian yang lebih ramah lingkungan dan ekonomis. Tujuan utamanya adalah untuk membantu petani meningkatkan produktivitas mereka sambil mengurangi dampak lingkungan dari aktivitas perkebunan.</p>
    
    <h3 class="text-xl font-semibold my-4">Komponen Utama Kampanye</h3>
    
    <p class="mb-4">Kampanye "Sawitku Hijau" terdiri dari beberapa komponen yang saling melengkapi:</p>
    
    <ol class="list-decimal pl-6 mb-4">
      <li class="mb-2"><strong>Sesi Pelatihan Tatap Muka</strong> - Workshop dan pelatihan langsung di berbagai daerah penghasil sawit.</li>
      <li class="mb-2"><strong>Materi Edukasi Digital</strong> - Video, infografis, dan aplikasi mobile yang dapat diakses oleh petani.</li>
      <li class="mb-2"><strong>Program Pendampingan</strong> - Dukungan berkelanjutan dari ahli pertanian untuk membantu petani mengimplementasikan apa yang mereka pelajari.</li>
      <li class="mb-2"><strong>Insentif Sertifikasi</strong> - Dukungan untuk petani kecil yang ingin mendapatkan sertifikasi keberlanjutan seperti RSPO dan ISPO.</li>
    </ol>
    
    <h3 class="text-xl font-semibold my-4">Dampak yang Diharapkan</h3>
    
    <p class="mb-4">Kampanye ini diharapkan dapat memberikan dampak positif yang signifikan, antara lain:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Peningkatan produktivitas lahan sebesar 25% melalui praktik pertanian yang lebih baik.</li>
      <li class="mb-2">Pengurangan penggunaan pupuk kimia dan pestisida yang berlebihan.</li>
      <li class="mb-2">Penghentian praktik pembukaan lahan dengan membakar.</li>
      <li class="mb-2">Peningkatan pendapatan petani kecil melalui akses yang lebih baik ke pasar premium.</li>
      <li class="mb-2">Penguatan kapasitas organisasi petani untuk advokasi dan pemasaran kolektif.</li>
    </ul>
    
    <h3 class="text-xl font-semibold my-4">Mitra dan Kerjasama</h3>
    
    <p class="mb-4">Kampanye "Sawitku Hijau" adalah hasil kerjasama berbagai pemangku kepentingan, termasuk:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Kementerian Pertanian Republik Indonesia</li>
      <li class="mb-2">Gabungan Pengusaha Kelapa Sawit Indonesia (GAPKI)</li>
      <li class="mb-2">Lembaga Swadaya Masyarakat lingkungan</li>
      <li class="mb-2">Perusahaan kelapa sawit terkemuka</li>
      <li class="mb-2">Lembaga penelitian dan universitas</li>
    </ul>
    
    <h3 class="text-xl font-semibold my-4">Bagaimana Anda Dapat Berkontribusi</h3>
    
    <p class="mb-4">Ada berbagai cara bagi individu dan organisasi untuk mendukung kampanye ini:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Menjadi relawan untuk kegiatan pelatihan dan pendampingan petani.</li>
      <li class="mb-2">Memberikan dukungan finansial untuk pengembangan materi edukasi.</li>
      <li class="mb-2">Membantu menyebarkan informasi tentang kampanye melalui media sosial.</li>
      <li class="mb-2">Berpartisipasi dalam dialog dan advokasi kebijakan untuk mendukung petani kecil.</li>
    </ul>
    
    <p class="mb-4">Untuk informasi lebih lanjut tentang cara berkontribusi, silakan hubungi tim Sawit-iCare melalui formulir kontak di situs web ini atau email ke contact@sawit-icare.org.</p>
    
    <p>Bersama-sama, kita dapat membangun industri kelapa sawit Indonesia yang lebih berkelanjutan dan adil untuk semua.</p>`,
    date: "25 April 2024",
    category: "kampanye-edukasi",
    image: "awareness-1"
  },
  {
    id: 2,
    title: "RSPO untuk Semua: Sertifikasi Keberlanjutan yang Inklusif",
    content: `<p class="mb-4">Kampanye "RSPO untuk Semua" adalah inisiatif untuk membantu petani kelapa sawit skala kecil di Indonesia memperoleh sertifikasi Roundtable on Sustainable Palm Oil (RSPO). Sertifikasi ini sangat penting untuk mengakses pasar internasional dan mendapatkan harga premium untuk minyak sawit, tetapi seringkali sulit dijangkau oleh petani kecil karena kompleksitas dan biayanya.</p>
    
    <p class="mb-4">Melalui kampanye ini, kami berupaya mendemokratisasi akses ke sertifikasi RSPO dan membuat standar keberlanjutan lebih inklusif bagi semua pelaku dalam rantai pasok minyak sawit, termasuk petani kecil yang merupakan mayoritas dari produsen sawit di Indonesia.</p>
    
    <h3 class="text-xl font-semibold my-4">Tantangan Sertifikasi untuk Petani Kecil</h3>
    
    <p class="mb-4">Petani kecil menghadapi berbagai hambatan dalam memperoleh sertifikasi RSPO, antara lain:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Biaya sertifikasi yang relatif tinggi dibandingkan dengan pendapatan mereka.</li>
      <li class="mb-2">Kurangnya pemahaman tentang persyaratan dan prosedur sertifikasi.</li>
      <li class="mb-2">Keterbatasan akses ke teknologi dan sumber daya untuk implementasi standar.</li>
      <li class="mb-2">Rendahnya kapasitas organisasi petani untuk mengelola proses dokumentasi.</li>
      <li class="mb-2">Ketidakpastian tentang nilai tambah ekonomi dari sertifikasi.</li>
    </ul>
    
    <h3 class="text-xl font-semibold my-4">Pendekatan Kampanye</h3>
    
    <p class="mb-4">Kampanye "RSPO untuk Semua" menggunakan pendekatan komprehensif untuk mengatasi tantangan tersebut:</p>
    
    <ol class="list-decimal pl-6 mb-4">
      <li class="mb-2"><strong>Subsidisasi Biaya</strong> - Menyediakan dukungan finansial untuk menutupi sebagian biaya sertifikasi dan audit.</li>
      <li class="mb-2"><strong>Pengembangan Kapasitas</strong> - Melatih dan mendampingi kelompok tani dalam persiapan sertifikasi.</li>
      <li class="mb-2"><strong>Penyederhanaan Proses</strong> - Bekerja dengan RSPO untuk mengembangkan jalur sertifikasi yang lebih sederhana untuk petani kecil.</li>
      <li class="mb-2"><strong>Pembuatan Alat Bantu</strong> - Mengembangkan aplikasi mobile dan alat bantu lainnya untuk dokumentasi dan pemantauan.</li>
      <li class="mb-2"><strong>Koneksi Pasar</strong> - Menghubungkan petani bersertifikat dengan pembeli yang bersedia membayar premium untuk minyak sawit berkelanjutan.</li>
    </ol>
    
    <h3 class="text-xl font-semibold my-4">Wilayah Target</h3>
    
    <p class="mb-4">Kampanye ini saat ini berfokus pada empat provinsi utama penghasil sawit di Indonesia:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Riau</li>
      <li class="mb-2">Sumatera Utara</li>
      <li class="mb-2">Kalimantan Barat</li>
      <li class="mb-2">Kalimantan Tengah</li>
    </ul>
    
    <p class="mb-4">Di masa depan, kami berencana untuk memperluas jangkauan ke provinsi lain seiring dengan pertumbuhan kapasitas dan sumber daya kampanye.</p>
    
    <h3 class="text-xl font-semibold my-4">Pencapaian hingga Saat Ini</h3>
    
    <p class="mb-4">Sejak diluncurkan pada tahun 2023, kampanye ini telah mencapai beberapa milestones penting:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Lebih dari 500 petani kecil telah mengikuti pelatihan persiapan sertifikasi RSPO.</li>
      <li class="mb-2">15 kelompok tani (mencakup sekitar 300 petani) telah memulai proses sertifikasi.</li>
      <li class="mb-2">5 kelompok tani telah berhasil memperoleh sertifikasi RSPO.</li>
      <li class="mb-2">Pengembangan aplikasi mobile "RSPO Checker" yang membantu petani memahami dan memenuhi kriteria sertifikasi.</li>
      <li class="mb-2">Penandatanganan MoU dengan 3 perusahaan besar yang berkomitmen untuk membeli minyak sawit dari petani bersertifikat dengan harga premium.</li>
    </ul>
    
    <h3 class="text-xl font-semibold my-4">Bergabung dengan Kampanye</h3>
    
    <p class="mb-4">Kami mengundang berbagai pihak untuk bergabung dan mendukung kampanye "RSPO untuk Semua":</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2"><strong>Petani:</strong> Daftarkan kelompok tani Anda untuk mendapatkan dukungan dalam proses sertifikasi.</li>
      <li class="mb-2"><strong>Perusahaan:</strong> Berkomitmen untuk membeli minyak sawit berkelanjutan dari petani kecil bersertifikat.</li>
      <li class="mb-2"><strong>Lembaga Donor:</strong> Berikan dukungan finansial untuk memperluas jangkauan kampanye.</li>
      <li class="mb-2"><strong>Profesional:</strong> Sumbangkan keahlian Anda sebagai pelatih, auditor, atau konsultan.</li>
    </ul>
    
    <p>Untuk informasi lebih lanjut atau untuk mendaftar, silakan kunjungi halaman kontak kami atau hubungi langsung di rspo-untuk-semua@sawit-icare.org.</p>`,
    date: "18 April 2024",
    category: "sertifikasi",
    image: "awareness-2"
  }
];

// Fungsi generateStaticParams digunakan untuk pre-rendering halaman dengan parameter dinamis
export function generateStaticParams() {
  const params = [
    ...awarenessDatabase.map(campaign => ({ id: campaign.id.toString() })),
    { id: "3" },
    { id: "4" },
    { id: "5" }
  ];
  
  return params;
}

// Fungsi untuk menentukan data kampanye berdasarkan ID
const getCurrentCampaign = (id: string) => {
  const numId = parseInt(id);
  
  // Mencari kampanye dengan ID yang sesuai
  const foundCampaign = awarenessDatabase.find(campaign => campaign.id === numId);
  
  // Jika kampanye ditemukan, gunakan data tersebut
  // Jika tidak, tampilkan template dengan ID tersebut atau pesan kesalahan
  if (foundCampaign) {
    return foundCampaign;
  } else if (numId > 2) {
    // Untuk ID yang tidak ada dalam database, gunakan template dengan ID yang sama
    return {
      id: numId,
      title: `Kampanye Kesadaran Sawit #${numId}`,
      content: `<p class="mb-4">Ini adalah konten placeholder untuk kampanye dengan ID ${numId}. Detail kampanye akan segera tersedia.</p>
      <p class="mb-4">Kampanye ini akan membahas tentang berbagai aspek keberlanjutan dalam industri sawit, memberikan edukasi kepada masyarakat, dan mendorong partisipasi dalam praktik sawit yang lebih bertanggung jawab.</p>
      <p>Kembali lagi nanti untuk melihat kampanye lengkapnya!</p>`,
      date: "1 Januari 2024",
      category: "informasi",
      image: "placeholder"
    };
  } else {
    // Fallback jika ID tidak valid
    return {
      id: 0,
      title: "Kampanye Tidak Ditemukan",
      content: "<p>Maaf, kampanye yang Anda cari tidak ditemukan. Silakan kembali ke halaman kampanye untuk melihat kampanye lainnya.</p>",
      date: "",
      category: "",
      image: "placeholder"
    };
  }
};

// Kategori map untuk menerjemahkan kategori ke bahasa Indonesia
const categoryMap: Record<string, string> = {
  "kampanye-edukasi": "Kampanye Edukasi",
  "sertifikasi": "Sertifikasi",
  "perkebunan": "Perkebunan",
  "lingkungan": "Lingkungan",
  "sosial": "Sosial",
  "informasi": "Informasi"
};

// Fungsi untuk render image placeholder
const renderImagePlaceholder = (imageId: string) => {
  // Jika imageId tidak ditemukan, gunakan placeholder default
  const safeImageId = imageId || "placeholder";
  
  // SVG untuk berbagai jenis gambar
  if (safeImageId === "awareness-1") {
    return (
      <div className="aspect-[16/9] w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
    );
  } else if (safeImageId === "awareness-2") {
    return (
      <div className="aspect-[16/9] w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-earth-brown/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <div className="aspect-[16/9] w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
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
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      </div>
    );
  }
};

// JSX untuk komponen kampanye terkait
const RelatedCampaignItem = ({ campaign }: { campaign: typeof awarenessDatabase[0] }) => (
  <Link 
    href={`/awareness/${campaign.id}`} 
    key={campaign.id}
    className="group"
  >
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] w-full bg-gray-100">
        {renderImagePlaceholder(campaign.image)}
      </div>
      <div className="p-4">
        <p className="text-sm text-leaf-green mb-2">
          {categoryMap[campaign.category] || campaign.category}
        </p>
        <h4 className="font-semibold text-text-dark group-hover:text-leaf-green transition-colors">
          {campaign.title}
        </h4>
        <p className="text-sm text-gray-500 mt-2">{campaign.date}</p>
      </div>
    </div>
  </Link>
);

export default function AwarenessDetailPage({ params }: { params: { id: string } }) {
  const campaign = getCurrentCampaign(params.id);
  
  return (
    <>
      <Navbar />
      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/awareness" 
              className="inline-flex items-center text-leaf-green hover:text-sawit-yellow mb-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Kembali ke Kampanye
            </Link>
            
            <div className="mb-8">
              {renderImagePlaceholder(campaign.image)}
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium bg-sawit-yellow/10 text-earth-brown px-3 py-1 rounded-full">
                  {categoryMap[campaign.category] || campaign.category}
                </span>
                <span className="text-sm text-gray-500 ml-4">{campaign.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                {campaign.title}
              </h1>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: campaign.content }} 
              />
              
              <div className="border-t border-gray-200 mt-12 pt-8">
                <h3 className="text-xl font-semibold mb-6">Kampanye Terkait</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {awarenessDatabase
                    .filter(c => c.id !== parseInt(params.id))
                    .slice(0, 2)
                    .map((relatedCampaign) => (
                      <RelatedCampaignItem key={relatedCampaign.id} campaign={relatedCampaign} />
                    ))}
                </div>
              </div>
              
              <div className="bg-leaf-green/5 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-leaf-green mb-3">Ingin berpartisipasi?</h3>
                <p className="text-gray-700 mb-4">Dukung kampanye kesadaran sawit kami. Setiap kontribusi membantu untuk memperluas jangkauan dan dampak positif.</p>
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