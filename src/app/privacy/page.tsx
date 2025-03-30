"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPage() {
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
      content: "Sawit-iCare (\"kami\", \"kita\", atau \"Sawit-iCare\") menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda ketika Anda mengunjungi atau menggunakan platform kami. Dengan menggunakan platform Sawit-iCare, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini."
    },
    {
      title: "Informasi yang Kami Kumpulkan",
      content: "Kami mengumpulkan beberapa jenis informasi dari dan tentang pengguna platform kami, termasuk informasi:",
      subsections: [
        {
          title: "Informasi Pribadi",
          content: "Informasi pribadi adalah informasi yang dapat digunakan untuk mengidentifikasi Anda secara langsung atau tidak langsung. Ini termasuk nama, alamat email, nomor telepon, alamat, informasi perusahaan/organisasi, dan informasi lain yang Anda berikan saat mendaftar atau menggunakan platform kami."
        },
        {
          title: "Informasi Non-Pribadi",
          content: "Kami juga mengumpulkan informasi non-pribadi, seperti data teknis, termasuk alamat IP, jenis browser, perangkat yang digunakan, waktu akses, halaman yang dikunjungi, dan data penggunaan lainnya."
        },
        {
          title: "Informasi Lokasi",
          content: "Untuk petani dan perusahaan sawit, kami mungkin mengumpulkan informasi lokasi perkebunan untuk memfasilitasi pemantauan dan analisis data terkait dengan keberlanjutan dan produktivitas."
        }
      ]
    },
    {
      title: "Bagaimana Kami Menggunakan Informasi Anda",
      content: "Kami menggunakan informasi yang kami kumpulkan untuk:",
      list: [
        "Menyediakan, mengoperasikan, dan memelihara platform kami",
        "Meningkatkan, mempersonalisasi, dan memperluas platform kami",
        "Memahami dan menganalisis bagaimana Anda menggunakan platform kami",
        "Mengembangkan produk, layanan, fitur, dan fungsionalitas baru",
        "Berkomunikasi dengan Anda, baik langsung atau melalui salah satu mitra kami, termasuk untuk layanan pelanggan",
        "Mengirimkan email, pembaruan, dan konten pemasaran lainnya",
        "Menemukan dan mencegah penipuan",
        "Untuk tujuan bisnis lain yang kami sampaikan kepada Anda"
      ]
    },
    {
      title: "Pengungkapan Informasi Anda",
      content: "Kami mungkin mengungkapkan informasi pribadi Anda untuk tujuan berikut:",
      subsections: [
        {
          title: "Kepada Penyedia Layanan",
          content: "Kami mungkin membagikan informasi Anda dengan penyedia layanan pihak ketiga yang melakukan layanan untuk kami atau atas nama kami, seperti pemrosesan pembayaran, analisis data, pengiriman email, layanan hosting, layanan pelanggan, dan bantuan pemasaran."
        },
        {
          title: "Untuk Kepatuhan dan Perlindungan",
          content: "Kami mungkin mengungkapkan informasi jika diwajibkan oleh hukum atau dalam keyakinan dengan itikad baik bahwa tindakan tersebut diperlukan untuk: (a) mematuhi kewajiban hukum; (b) melindungi dan mempertahankan hak atau properti Sawit-iCare; (c) mencegah atau menyelidiki kemungkinan kesalahan yang terkait dengan platform; (d) melindungi keselamatan pribadi pengguna platform atau masyarakat; (e) melindungi dari pertanggungjawaban hukum."
        }
      ]
    },
    {
      title: "Keamanan Data",
      content: "Keamanan informasi Anda penting bagi kami. Kami menggunakan tindakan keamanan teknis dan organisasi yang wajar untuk melindungi informasi pribadi Anda dari kerugian, penyalahgunaan, dan akses, pengungkapan, perubahan, atau penghancuran yang tidak sah. Namun, perlu diingat bahwa tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindungi informasi pribadi Anda, kami tidak dapat menjamin keamanan mutlaknya."
    },
    {
      title: "Hak Privasi Anda",
      content: "Tergantung pada lokasi Anda, Anda mungkin memiliki hak-hak tertentu mengenai informasi pribadi Anda, termasuk:",
      list: [
        "Hak untuk mengakses informasi pribadi yang kami miliki tentang Anda",
        "Hak untuk meminta koreksi informasi yang tidak akurat atau tidak lengkap",
        "Hak untuk meminta penghapusan informasi pribadi Anda",
        "Hak untuk membatasi pemrosesan informasi pribadi Anda",
        "Hak untuk portabilitas data",
        "Hak untuk menolak pemrosesan informasi pribadi Anda",
        "Hak untuk menarik persetujuan"
      ],
      content2: "Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak yang disediakan di bagian 'Hubungi Kami'."
    },
    {
      title: "Penyimpanan Data",
      content: "Kami akan menyimpan informasi pribadi Anda selama diperlukan untuk memenuhi tujuan yang diuraikan dalam Kebijakan Privasi ini kecuali jangka waktu penyimpanan yang lebih lama diperlukan atau diizinkan oleh hukum."
    },
    {
      title: "Perubahan pada Kebijakan Privasi Ini",
      content: "Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan dengan memposting Kebijakan Privasi baru di halaman ini dan memperbarui tanggal 'Terakhir diperbarui' di bagian atas halaman ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan."
    },
    {
      title: "Hubungi Kami",
      content: "Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi kami atau praktik kami terkait dengan informasi pribadi Anda, silakan hubungi kami di:",
      contact: {
        email: "privacy@sawiticare.com",
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Kebijakan Privasi</h1>
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
                  <p className="mb-4">{section.content}</p>
                  
                  {section.list && (
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.content2 && (
                    <p className="mb-4">{section.content2}</p>
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