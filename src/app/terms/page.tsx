"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const sections = [
    {
      title: "Pendahuluan",
      content: "Selamat datang di Sawit-iCare. Syarat dan Ketentuan ini mengatur penggunaan Anda atas platform dan layanan Sawit-iCare yang diakses melalui website atau aplikasi mobile kami (secara kolektif disebut sebagai \"Platform\"). Dengan mengakses atau menggunakan Platform kami, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan Syarat dan Ketentuan ini, harap jangan gunakan Platform kami."
    },
    {
      title: "Definisi",
      content: "Dalam Syarat dan Ketentuan ini, istilah-istilah berikut memiliki arti sebagai berikut:",
      list: [
        "\"Sawit-iCare\", \"kami\", \"kita\", atau \"milik kami\" mengacu pada platform Sawit-iCare dan operatornya.",
        "\"Anda\" atau \"Pengguna\" mengacu pada individu, perusahaan, atau entitas lain yang mengakses atau menggunakan Platform.",
        "\"Konten\" mengacu pada semua informasi, data, teks, gambar, grafik, video, dan materi lain yang ditampilkan atau tersedia melalui Platform.",
        "\"Perusahaan\" mengacu pada perusahaan yang menggunakan Platform untuk mengelola dan memantau operasi sawitnya.",
        "\"Petani\" mengacu pada petani atau pemilik kebun sawit yang terdaftar di Platform.",
        "\"NGO\" mengacu pada organisasi non-pemerintah yang terdaftar di Platform untuk tujuan carbon trading, edukasi, dan aktivitas lainnya."
      ]
    },
    {
      title: "Pendaftaran Akun",
      content: "Untuk menggunakan sebagian besar fitur Platform, Anda harus mendaftar dan membuat akun. Dalam proses pendaftaran, Anda setuju untuk:",
      list: [
        "Memberikan informasi yang akurat, lengkap, dan terkini.",
        "Menjaga kerahasiaan kredensial akun Anda, termasuk kata sandi.",
        "Bertanggung jawab atas semua aktivitas yang terjadi di bawah akun Anda.",
        "Memberi tahu kami segera jika Anda mengetahui adanya pelanggaran keamanan atau penggunaan yang tidak sah atas akun Anda."
      ],
      subsections: [
        {
          title: "Verifikasi Akun",
          content: "Untuk akun perusahaan dan petani, kami mungkin memerlukan proses verifikasi tambahan, termasuk namun tidak terbatas pada validasi dokumen identitas, bukti kepemilikan lahan, atau bukti hubungan dengan perusahaan. Anda setuju untuk berpartisipasi dalam proses verifikasi tersebut."
        }
      ]
    },
    {
      title: "Penggunaan Platform",
      content: "Dalam menggunakan Platform kami, Anda setuju untuk:",
      list: [
        "Mematuhi semua hukum dan peraturan yang berlaku.",
        "Tidak menggunakan Platform untuk tujuan yang melanggar hukum atau tidak sah.",
        "Tidak menggunakan Platform untuk mengirim atau menyimpan materi yang melanggar hukum, menyinggung, mengancam, memfitnah, atau dengan cara lain tidak pantas.",
        "Tidak mencoba untuk mengganggu atau merusak Platform atau server dan jaringan yang terhubung dengannya.",
        "Tidak mengakses data yang tidak dimaksudkan untuk Anda atau masuk ke server atau akun yang tidak berwenang Anda akses.",
        "Tidak mengumpulkan atau menyimpan data pribadi tentang pengguna lain tanpa izin mereka."
      ],
      subsections: [
        {
          title: "Keterbatasan Penggunaan",
          content: "Kami berhak membatasi akses Anda ke Platform atau fitur tertentu jika kami yakin bahwa penggunaan Anda melanggar Syarat dan Ketentuan ini atau dapat membahayakan pengguna lain, operasi kami, atau melanggar hukum."
        }
      ]
    },
    {
      title: "Hak dan Kewajiban Pengguna",
      subsections: [
        {
          title: "Perusahaan",
          content: "Perusahaan yang menggunakan Platform bertanggung jawab untuk: (a) menjaga keakuratan informasi yang mereka berikan; (b) memastikan bahwa mereka memiliki hak untuk membagikan informasi yang mereka unggah; (c) menghormati hak petani dan transparansi dalam transaksi; (d) mematuhi semua peraturan keberlanjutan dan lingkungan yang berlaku."
        },
        {
          title: "Petani",
          content: "Petani yang menggunakan Platform bertanggung jawab untuk: (a) memberikan informasi yang akurat tentang lahan dan produksi mereka; (b) mengikuti praktik pertanian berkelanjutan seperti yang diarahkan oleh Platform; (c) menjaga kerahasiaan informasi sensitif yang mereka akses melalui Platform."
        },
        {
          title: "NGO",
          content: "NGO yang menggunakan Platform bertanggung jawab untuk: (a) menyediakan layanan dan program yang sesuai dengan misi keberlanjutan; (b) memastikan transparansi dalam program carbon offset dan edukasi; (c) mematuhi semua peraturan dan standar industri yang berlaku."
        }
      ]
    },
    {
      title: "Konten Platform",
      content: "Platform menyediakan berbagai jenis konten, termasuk tetapi tidak terbatas pada data analitik, materi edukasi, dan informasi pasar. Meskipun kami berusaha untuk menyediakan informasi yang akurat dan bermanfaat, kami tidak menjamin bahwa konten tersebut selalu akurat, lengkap, atau terkini.",
      subsections: [
        {
          title: "Lisensi Konten",
          content: "Dengan mengunggah atau membagikan konten di Platform, Anda memberikan Sawit-iCare lisensi non-eksklusif, bebas royalti, dapat dialihkan, dan dapat disublisensikan untuk menggunakan, mereproduksi, memodifikasi, menerbitkan, dan mendistribusikan konten tersebut untuk tujuan pengoperasian Platform. Lisensi ini berakhir ketika Anda menghapus konten dari Platform."
        },
        {
          title: "Hak Kekayaan Intelektual",
          content: "Semua hak kekayaan intelektual terkait Platform dan kontennya, termasuk tetapi tidak terbatas pada merek dagang, hak cipta, dan paten, tetap menjadi milik Sawit-iCare atau pemberi lisensinya. Tidak ada dalam Syarat dan Ketentuan ini yang memberikan Anda hak untuk menggunakan kekayaan intelektual tersebut tanpa izin tertulis dari pemiliknya."
        }
      ]
    },
    {
      title: "Carbon Trading",
      content: "Platform kami memfasilitasi carbon trading antara perusahaan sawit dan NGO atau penyedia layanan carbon offset. Untuk transaksi tersebut:",
      list: [
        "Kami bertindak sebagai fasilitator dan tidak bertanggung jawab atas kualitas atau keabsahan kredit karbon yang diperdagangkan.",
        "Setiap pihak dalam transaksi bertanggung jawab untuk melakukan uji tuntas mereka sendiri.",
        "Kami tidak menjamin hasil atau manfaat dari program carbon offset.",
        "Semua transaksi harus mematuhi peraturan dan standar industri yang berlaku."
      ]
    },
    {
      title: "Batasan Tanggung Jawab",
      content: "Sejauh diizinkan oleh hukum, Sawit-iCare tidak akan bertanggung jawab kepada Anda atau pihak ketiga mana pun atas kerugian langsung, tidak langsung, insidental, khusus, konsekuensial, atau punitif, termasuk namun tidak terbatas pada kehilangan keuntungan, data, penggunaan, niat baik, atau kerugian tidak berwujud lainnya, yang timbul dari atau terkait dengan penggunaan Platform Anda."
    },
    {
      title: "Ganti Rugi",
      content: "Anda setuju untuk membebaskan, mengganti rugi, dan mempertahankan Sawit-iCare dan afiliasinya, direktur, karyawan, dan agennya dari dan terhadap setiap klaim, tanggung jawab, kerusakan, kerugian, dan biaya, termasuk, tanpa batasan, biaya hukum dan akuntansi yang wajar, yang timbul dari atau dengan cara apa pun terkait dengan: (a) penggunaan Platform Anda; (b) pelanggaran Anda terhadap Syarat dan Ketentuan ini; atau (c) pelanggaran Anda terhadap hak pihak ketiga."
    },
    {
      title: "Perubahan pada Syarat dan Ketentuan",
      content: "Kami berhak untuk memodifikasi atau mengganti Syarat dan Ketentuan ini kapan saja. Kami akan memberi tahu Anda tentang perubahan dengan memperbarui tanggal \"Terakhir diperbarui\" di bagian atas halaman ini. Adalah tanggung jawab Anda untuk memeriksa Syarat dan Ketentuan ini secara berkala untuk perubahan. Penggunaan berkelanjutan Anda atas Platform setelah perubahan tersebut merupakan penerimaan Anda terhadap Syarat dan Ketentuan yang diubah."
    },
    {
      title: "Hukum yang Berlaku",
      content: "Syarat dan Ketentuan ini akan diatur dan ditafsirkan sesuai dengan hukum Indonesia, tanpa memperhatikan ketentuan konflik hukumnya. Setiap perselisihan yang timbul dari atau terkait dengan Syarat dan Ketentuan ini akan diselesaikan melalui arbitrase di Jakarta, sesuai dengan aturan Badan Arbitrase Nasional Indonesia (BANI)."
    },
    {
      title: "Ketentuan Lain-lain",
      subsections: [
        {
          title: "Keterpisahan",
          content: "Jika ketentuan apapun dari Syarat dan Ketentuan ini dianggap tidak sah, ilegal, atau tidak dapat diberlakukan, ketentuan tersebut akan dipisahkan dari Syarat dan Ketentuan yang tersisa, yang akan tetap valid dan dapat diberlakukan sejauh diizinkan oleh hukum."
        },
        {
          title: "Pengabaian",
          content: "Kegagalan kami untuk menegakkan hak atau ketentuan apa pun dari Syarat dan Ketentuan ini tidak akan dianggap sebagai pengabaian atas hak atau ketentuan tersebut. Pengabaian atas hak atau ketentuan apa pun hanya akan berlaku jika secara tertulis dan ditandatangani oleh perwakilan resmi Sawit-iCare."
        },
        {
          title: "Pengalihan",
          content: "Anda tidak boleh mengalihkan, mendelegasikan, atau memindahtangankan Syarat dan Ketentuan ini atau hak atau kewajiban Anda di bawah ini tanpa persetujuan tertulis dari Sawit-iCare. Sawit-iCare dapat mengalihkan Syarat dan Ketentuan ini tanpa persetujuan Anda kepada afiliasi atau dalam kaitannya dengan merger, akuisisi, reorganisasi, atau penjualan sebagian besar asetnya."
        }
      ]
    },
    {
      title: "Hubungi Kami",
      content: "Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami di:",
      contact: {
        email: "legal@sawiticare.com",
        phone: "+62 812 3456 7890",
        address: "Jl. Palma No. 123, Jakarta, Indonesia"
      }
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Syarat & Ketentuan</h1>
            <p className="text-lg text-white/90">
              Terakhir diperbarui: 1 April 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="prose prose-lg max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-leaf-green">{(index + 1) + ". " + section.title}</h2>
                  {section.content && <p className="mb-4">{section.content}</p>}
                  
                  {section.list && (
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.subsections && section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="mb-4 pl-4 border-l-2 border-gray-200">
                      <h3 className="text-xl font-bold mb-2">{subsection.title}</h3>
                      <p>{subsection.content}</p>
                    </div>
                  ))}
                  
                  {section.contact && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p><strong>Email:</strong> {section.contact.email}</p>
                      <p><strong>Telepon:</strong> {section.contact.phone}</p>
                      <p><strong>Alamat:</strong> {section.contact.address}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
} 