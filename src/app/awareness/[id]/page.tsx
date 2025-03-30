"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AwarenessDetailPage({ params }: { params: { id: string } }) {
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

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Fungsi untuk menentukan data kampanye berdasarkan ID
  const getCurrentCampaign = () => {
    const id = parseInt(params.id);
    
    // Mencari kampanye dengan ID yang sesuai
    const foundCampaign = awarenessDatabase.find(campaign => campaign.id === id);
    
    // Jika kampanye ditemukan, gunakan data tersebut
    // Jika tidak, gunakan placeholder dengan ID yang sama
    if (foundCampaign) {
      return foundCampaign;
    } else if (id > 2) {
      // Untuk ID yang tidak ada dalam database, gunakan template dengan ID yang sama
      return {
        id: id,
        title: `Kampanye Kesadaran Sawit #${id}`,
        content: `<p class="mb-4">Ini adalah konten placeholder untuk kampanye dengan ID ${id}. Detail kampanye ini akan segera tersedia.</p>
        <p class="mb-4">Kami sedang menyiapkan konten berkualitas tentang berbagai aspek industri sawit berkelanjutan.</p>
        <p>Silakan kembali ke <a href="/awareness" class="text-leaf-green hover:underline">halaman kampanye</a> untuk melihat kampanye lain yang sudah tersedia.</p>`,
        date: "2024",
        category: "general",
        image: "placeholder"
      };
    } else {
      return awarenessDatabase[0]; // Fallback ke kampanye pertama
    }
  };

  const campaign = getCurrentCampaign();

  // Render image placeholder
  const renderImagePlaceholder = (imageId: string | undefined) => {
    // Default image ID jika undefined
    const safeImageId = imageId || "placeholder";
    
    const colorMap: Record<string, string> = {
      "campaign-1": "bg-green-600",
      "campaign-2": "bg-earth-brown",
      "campaign-3": "bg-blue-600",
      "campaign-4": "bg-orange-500",
      "campaign-5": "bg-purple-600",
      "campaign-6": "bg-red-600",
      "campaign-7": "bg-teal-600",
      "campaign-8": "bg-amber-600",
      "placeholder": "bg-gray-500"
    };

    const iconMap: Record<string, React.ReactNode> = {
      "campaign-1": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      "campaign-2": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      "placeholder": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    };

    return (
      <div className={`w-full h-64 md:h-96 ${colorMap[safeImageId] || 'bg-leaf-green'} flex items-center justify-center text-white`}>
        {iconMap[safeImageId] || (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    );
  };

  const categoryMap: Record<string, string> = {
    "lingkungan": "Lingkungan",
    "petani": "Petani",
    "carbon": "Carbon Trading",
    "sertifikasi": "Sertifikasi",
    "teknologi": "Teknologi",
    "general": "Umum"
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
          {renderImagePlaceholder(campaign.image)}
          
          {/* Campaign Content */}
          <article className="max-w-4xl mx-auto px-4 py-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="mb-6">
                <span className="px-3 py-1 bg-gray-100 text-sm font-medium rounded-full text-gray-700 inline-block mb-4">
                  {categoryMap[campaign.category] || campaign.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{campaign.title}</h1>
                <div className="flex flex-wrap items-center text-gray-600 text-sm">
                  <span className="mr-4">
                    <strong>Tanggal:</strong> {campaign.date}
                  </span>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: campaign.content }}></div>
              
              <div className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => router.push('/awareness')}
                    className="flex items-center text-leaf-green hover:text-leaf-green/80"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Kembali ke daftar kampanye
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
          
          {/* Related Campaigns Section */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Kampanye Terkait</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {awarenessDatabase
                  .filter(relatedCampaign => relatedCampaign.id !== campaign.id)
                  .slice(0, 2)
                  .map((relatedCampaign, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      onClick={() => router.push(`/awareness/${relatedCampaign.id}`)}
                    >
                      <div className={`w-full h-48 ${relatedCampaign.category === "lingkungan" ? "bg-green-600" : "bg-earth-brown"} flex items-center justify-center text-white`}>
                        {renderImagePlaceholder(relatedCampaign.image)}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{relatedCampaign.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {relatedCampaign.title.substring(0, 100)}...
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">{relatedCampaign.date}</span>
                          <span className="text-leaf-green font-medium">Baca selengkapnya</span>
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
              <h2 className="text-3xl font-bold mb-6">Bergabung dengan Gerakan Kami</h2>
              <p className="text-xl mb-8 text-white/90">
                Mari bersama-sama menciptakan masa depan yang berkelanjutan untuk industri sawit Indonesia.
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