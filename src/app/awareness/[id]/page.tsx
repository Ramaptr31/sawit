import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Data kampanye sample
const awarenessDatabase = [
  {
    id: 1,
    title: "Sawit Berkelanjutan untuk Indonesia Lebih Baik",
    content: `<p class="mb-4">Industri sawit merupakan salah satu sektor ekonomi terpenting bagi Indonesia. Sebagai produsen minyak sawit terbesar di dunia, Indonesia memiliki peran strategis dalam mengembangkan praktik berkelanjutan yang dapat menjadi contoh bagi negara produsen sawit lainnya.</p>
    
    <p class="mb-4">Kampanye "Sawit Berkelanjutan untuk Indonesia Lebih Baik" bertujuan untuk meningkatkan kesadaran tentang pentingnya praktik perkebunan sawit berkelanjutan bagi masa depan Indonesia, baik dari segi ekonomi, lingkungan, maupun sosial.</p>
    
    <h3 class="text-xl font-semibold my-4">Mengapa Sawit Berkelanjutan Penting?</h3>
    
    <p class="mb-4">Praktik perkebunan sawit yang tidak berkelanjutan telah menyebabkan berbagai masalah serius, termasuk:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Deforestasi dan hilangnya habitat keanekaragaman hayati</li>
      <li class="mb-2">Emisi gas rumah kaca yang berkontribusi pada perubahan iklim</li>
      <li class="mb-2">Konflik tanah dengan masyarakat lokal dan penduduk asli</li>
      <li class="mb-2">Eksploitasi pekerja dan pelanggaran hak asasi manusia</li>
    </ul>
    
    <p class="mb-4">Di sisi lain, sawit berkelanjutan dapat memberikan manfaat signifikan:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Perlindungan hutan dan keanekaragaman hayati</li>
      <li class="mb-2">Pengurangan emisi karbon dan mitigasi perubahan iklim</li>
      <li class="mb-2">Peningkatan kesejahteraan petani dan masyarakat lokal</li>
      <li class="mb-2">Perlindungan hak pekerja dan kondisi kerja yang lebih baik</li>
      <li class="mb-2">Akses ke pasar internasional dan premium harga untuk produk berkelanjutan</li>
    </ul>
    
    <h3 class="text-xl font-semibold my-4">Inisiatif Sawit Berkelanjutan di Indonesia</h3>
    
    <p class="mb-4">Indonesia telah mengambil beberapa langkah penting menuju praktik sawit berkelanjutan:</p>
    
    <ol class="list-decimal pl-6 mb-4">
      <li class="mb-2"><strong>ISPO (Indonesian Sustainable Palm Oil)</strong> - Sertifikasi wajib bagi semua produsen sawit di Indonesia untuk memastikan kepatuhan terhadap hukum dan praktik berkelanjutan.</li>
      <li class="mb-2"><strong>Moratorium Hutan</strong> - Kebijakan untuk menghentikan pemberian izin baru untuk konversi hutan primer dan lahan gambut untuk perkebunan sawit.</li>
      <li class="mb-2"><strong>Restorasi Gambut</strong> - Program untuk memulihkan lahan gambut yang telah terdegradasi akibat praktik pertanian yang tidak berkelanjutan.</li>
      <li class="mb-2"><strong>Kemitraan dengan Petani Kecil</strong> - Inisiatif untuk membantu petani kecil mengadopsi praktik berkelanjutan dan meningkatkan produktivitas mereka.</li>
    </ol>
    
    <h3 class="text-xl font-semibold my-4">Peran Sawit-iCare</h3>
    
    <p class="mb-4">Melalui Sawit-iCare, kami berkomitmen untuk mendukung transformasi industri sawit Indonesia menuju praktik yang lebih berkelanjutan. Kami melakukan ini dengan:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Mengedukasi petani tentang praktik pertanian berkelanjutan</li>
      <li class="mb-2">Memfasilitasi akses ke sertifikasi berkelanjutan</li>
      <li class="mb-2">Menghubungkan perusahaan dengan petani dan NGO untuk kolaborasi</li>
      <li class="mb-2">Mendorong transparansi dan keterlacakan dalam rantai pasok</li>
      <li class="mb-2">Mempromosikan inovasi teknologi untuk mendukung keberlanjutan</li>
    </ul>
    
    <h3 class="text-xl font-semibold my-4">Bagaimana Anda Dapat Berkontribusi?</h3>
    
    <p class="mb-4">Setiap pemangku kepentingan dalam industri sawit memiliki peran penting dalam mendorong keberlanjutan:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2"><strong>Petani:</strong> Mengadopsi praktik pertanian berkelanjutan, mengikuti program sertifikasi</li>
      <li class="mb-2"><strong>Perusahaan:</strong> Menerapkan kebijakan "Tanpa Deforestasi, Tanpa Gambut, Tanpa Eksploitasi" (NDPE), mendukung petani kecil</li>
      <li class="mb-2"><strong>Konsumen:</strong> Memilih produk sawit bersertifikat berkelanjutan</li>
      <li class="mb-2"><strong>Pemerintah:</strong> Memperkuat regulasi dan penegakan hukum</li>
      <li class="mb-2"><strong>NGO:</strong> Memantau dan mendukung implementasi praktik berkelanjutan</li>
    </ul>
    
    <p>Dengan komitmen bersama dari semua pemangku kepentingan, kita dapat menciptakan industri sawit yang berkelanjutan dan berkeadilan, yang memberikan manfaat ekonomi sambil melindungi lingkungan dan masyarakat. Mari bergabung dalam gerakan Sawit Berkelanjutan untuk Indonesia Lebih Baik!</p>`,
    date: "15 April 2024",
    category: "lingkungan",
    image: "campaign-1"
  },
  {
    id: 2,
    title: "Kehidupan Petani Sawit: Tantangan dan Harapan",
    content: `<p class="mb-4">Petani sawit kecil memainkan peran vital dalam industri sawit Indonesia. Diperkirakan lebih dari 40% perkebunan sawit di Indonesia dikelola oleh petani kecil, menjadikan mereka tulang punggung industri ini. Namun, mereka juga menghadapi berbagai tantangan yang signifikan dalam menerapkan praktik pertanian berkelanjutan.</p>
    
    <p class="mb-4">Kampanye "Kehidupan Petani Sawit: Tantangan dan Harapan" bertujuan untuk mendokumentasikan realitas kehidupan petani sawit kecil dan mengidentifikasi solusi untuk meningkatkan kesejahteraan mereka sambil mendorong praktik pertanian yang lebih berkelanjutan.</p>
    
    <h3 class="text-xl font-semibold my-4">Tantangan yang Dihadapi Petani Sawit Kecil</h3>
    
    <p class="mb-4">Petani sawit kecil menghadapi beberapa tantangan utama:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Akses terbatas ke bibit berkualitas tinggi dan input pertanian</li>
      <li class="mb-2">Pengetahuan dan keterampilan teknis yang terbatas</li>
      <li class="mb-2">Akses ke pembiayaan yang sulit</li>
      <li class="mb-2">Ketidakpastian kepemilikan lahan</li>
      <li class="mb-2">Posisi tawar yang lemah dalam rantai pasok</li>
      <li class="mb-2">Kesulitan memenuhi standar keberlanjutan</li>
      <li class="mb-2">Dampak perubahan iklim pada produktivitas</li>
    </ul>
    
    <h3 class="text-xl font-semibold my-4">Kisah Inspiratif Petani Sawit</h3>
    
    <p class="mb-4">Meskipun tantangan besar, banyak petani sawit telah menunjukkan ketahanan dan inovasi luar biasa:</p>
    
    <p class="mb-4">Pak Rahmat dari Riau berhasil meningkatkan produktivitas kebunnya sebesar 30% setelah mengadopsi praktik pertanian berkelanjutan. Ia sekarang menjadi pelatih bagi petani lain di desanya, berbagi pengetahuan dan pengalamannya.</p>
    
    <p class="mb-4">Bu Siti dari Kalimantan Barat memimpin kelompok tani perempuan yang berhasil mendapatkan sertifikasi RSPO. Kelompoknya kini menikmati akses ke pasar premium dan pendapatan yang lebih stabil.</p>
    
    <h3 class="text-xl font-semibold my-4">Solusi untuk Memberdayakan Petani Sawit</h3>
    
    <p class="mb-4">Beberapa solusi kunci untuk mendukung petani sawit kecil antara lain:</p>
    
    <ol class="list-decimal pl-6 mb-4">
      <li class="mb-2"><strong>Skema Sertifikasi Berkelanjutan yang Inklusif</strong> - Menyederhanakan proses sertifikasi dan memberikan dukungan teknis kepada petani kecil untuk memenuhi standar.</li>
      <li class="mb-2"><strong>Akses ke Pembiayaan</strong> - Mengembangkan produk keuangan yang disesuaikan dengan kebutuhan petani kecil, termasuk kredit mikro dengan suku bunga rendah.</li>
      <li class="mb-2"><strong>Pelatihan dan Pengembangan Kapasitas</strong> - Menyediakan pelatihan tentang praktik pertanian terbaik, pengelolaan keuangan, dan keterampilan wirausaha.</li>
      <li class="mb-2"><strong>Teknologi yang Tepat</strong> - Memperkenalkan teknologi yang terjangkau dan sesuai untuk meningkatkan produktivitas dan keberlanjutan.</li>
      <li class="mb-2"><strong>Organisasi Petani yang Kuat</strong> - Mendukung pembentukan dan penguatan kelompok tani untuk meningkatkan posisi tawar kolektif.</li>
    </ol>
    
    <h3 class="text-xl font-semibold my-4">Program Sawit-iCare untuk Petani</h3>
    
    <p class="mb-4">Sawit-iCare berkomitmen untuk memberdayakan petani sawit kecil melalui beberapa program:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">Akademi Petani Sawit - Platform pelatihan online dan offline untuk pengembangan keterampilan</li>
      <li class="mb-2">Kalkulator Upah dan Produktivitas - Aplikasi untuk membantu petani menghitung biaya, pendapatan, dan produktivitas</li>
      <li class="mb-2">Jaringan Mentoring - Menghubungkan petani berpengalaman dengan petani pemula</li>
      <li class="mb-2">Fasilitasi Sertifikasi - Dukungan teknis dan administratif untuk proses sertifikasi</li>
      <li class="mb-2">Koneksi Pasar - Menghubungkan petani dengan pembeli yang berkomitmen pada keberlanjutan</li>
    </ul>
    
    <h3 class="text-xl font-semibold my-4">Cerita dari Lapangan: Dampak Positif</h3>
    
    <p class="mb-4">Program-program ini telah membawa perubahan positif bagi banyak petani:</p>
    
    <p class="mb-4">"Setelah bergabung dengan program Sawit-iCare, produktivitas kebun saya meningkat dan pendapatan saya menjadi lebih stabil. Yang lebih penting, saya sekarang tahu cara mengelola kebun dengan cara yang baik untuk lingkungan dan masa depan anak-anak saya." - Pak Darmawan, petani sawit dari Jambi</p>
    
    <p>"Sebagai petani perempuan, saya dulu merasa suara saya tidak didengar. Melalui program pemberdayaan perempuan Sawit-iCare, saya sekarang menjadi ketua kelompok tani di desa saya dan aktif berbicara tentang hak-hak petani di forum provinsi." - Bu Aminah, petani sawit dari Sumatera Selatan</p>
    
    <p>Mari bersama-sama mendukung petani sawit Indonesia dalam perjalanan mereka menuju praktik pertanian yang lebih berkelanjutan dan mata pencaharian yang lebih baik. Dengan mendukung petani kecil, kita berinvestasi dalam masa depan industri sawit yang berkelanjutan dan berkeadilan.</p>`,
    date: "2 Maret 2024",
    category: "petani",
    image: "campaign-2"
  }
];

// Fungsi generateStaticParams digunakan untuk pre-rendering halaman dengan parameter dinamis
export function generateStaticParams() {
  // Generate params untuk setiap kampanye dalam database
  // dan tambahkan beberapa ID tambahan untuk kampanye placeholder
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
  // Jika tidak, gunakan placeholder dengan ID yang sama
  if (foundCampaign) {
    return foundCampaign;
  } else if (numId > 2) {
    // Untuk ID yang tidak ada dalam database, gunakan template dengan ID yang sama
    return {
      id: numId,
      title: `Kampanye Kesadaran Sawit #${numId}`,
      content: `<p class="mb-4">Ini adalah konten placeholder untuk kampanye dengan ID ${numId}. Detail kampanye ini akan segera tersedia.</p>
      <p class="mb-4">Kampanye ini akan membahas tentang pentingnya praktik perkebunan sawit berkelanjutan serta manfaatnya bagi lingkungan, masyarakat, dan ekonomi.</p>
      <p>Kembali lagi nanti untuk melihat konten lengkapnya!</p>`,
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

// Fungsi untuk render image placeholder
const renderImagePlaceholder = (imageId: string | undefined) => {
  // Jika imageId tidak ditemukan, gunakan placeholder default
  const safeImageId = imageId || "placeholder";
  
  const iconMap: Record<string, JSX.Element> = {
    "campaign-1": (
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
    ),
    "campaign-2": (
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    "placeholder": (
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
    )
  };

  return (
    <div className="aspect-[5/3] w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
      {iconMap[safeImageId] || iconMap["placeholder"]}
    </div>
  );
};

export default function AwarenessDetailPage({ params }: { params: { id: string } }) {
  const campaign = getCurrentCampaign(params.id);
  
  // Struktur untuk animasi
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Kategori map untuk menerjemahkan kategori ke bahasa Indonesia
  const categoryMap: Record<string, string> = {
    "lingkungan": "Lingkungan",
    "petani": "Petani",
    "ekonomi": "Ekonomi",
    "sosial": "Sosial",
    "informasi": "Informasi"
  };

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
                  {awarenessDatabase.slice(0, 2).map((relatedCampaign) => (
                    <Link 
                      href={`/awareness/${relatedCampaign.id}`} 
                      key={relatedCampaign.id}
                      className="group"
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[16/9] w-full bg-gray-100">
                          {renderImagePlaceholder(relatedCampaign.image)}
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-leaf-green mb-2">
                            {categoryMap[relatedCampaign.category] || relatedCampaign.category}
                          </p>
                          <h4 className="font-semibold text-text-dark group-hover:text-leaf-green transition-colors">
                            {relatedCampaign.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-2">{relatedCampaign.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="bg-leaf-green/5 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-leaf-green mb-3">Dukung Kampanye Ini</h3>
                <p className="text-gray-700 mb-4">Jadilah bagian dari gerakan untuk mendukung praktik sawit berkelanjutan di Indonesia. Bersama-sama kita bisa menciptakan industri sawit yang berkelanjutan.</p>
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