"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutUsPage() {
  const router = useRouter();
  
  const teamMembers = [
    {
      name: "Wijaya Santoso",
      role: "CEO & Founder",
      bio: "Memiliki pengalaman lebih dari 15 tahun di industri sawit dan teknologi. Wijaya memiliki visi untuk transformasi digital industri sawit yang berkelanjutan."
    },
    {
      name: "Dr. Rina Purnama",
      role: "Chief Sustainability Officer",
      bio: "Ahli lingkungan dengan fokus pada keberlanjutan industri sawit. Dr. Rina telah menerbitkan berbagai penelitian tentang praktik sawit berkelanjutan."
    },
    {
      name: "Budi Prakoso",
      role: "CTO",
      bio: "Ahli teknologi dengan pengalaman membangun platform digital untuk berbagai industri. Budi memimpin pengembangan platform Sawit-iCare."
    },
    {
      name: "Siti Rahma",
      role: "Head of Community Relations",
      bio: "Memiliki latar belakang pemberdayaan masyarakat dan hubungan dengan petani. Siti berperan dalam membangun hubungan dengan petani dan NGO."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Pendirian Sawit-iCare",
      description: "Sawit-iCare didirikan dengan misi untuk mentransformasi industri sawit melalui teknologi digital."
    },
    {
      year: "2021",
      title: "Peluncuran Platform Beta",
      description: "Versi beta platform diluncurkan dengan fokus pada monitoring petani dan kalkulasi emisi."
    },
    {
      year: "2022",
      title: "Integrasi Carbon Trading",
      description: "Platform ditingkatkan dengan fitur carbon trading untuk menghubungkan perusahaan sawit dengan NGO."
    },
    {
      year: "2023",
      title: "Ekspansi ke 5 Provinsi",
      description: "Sawit-iCare memperluas jangkauan ke 5 provinsi di Indonesia dengan lebih dari 100 perusahaan dan 5.000 petani terdaftar."
    },
    {
      year: "2024",
      title: "Penghargaan Inovasi Berkelanjutan",
      description: "Sawit-iCare menerima penghargaan Inovasi Berkelanjutan dari Kementerian Lingkungan Hidup dan Kehutanan."
    }
  ];

  const values = [
    {
      title: "Keberlanjutan",
      description: "Kami berkomitmen untuk mendukung praktik pertanian sawit yang berkelanjutan dan ramah lingkungan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Transparansi",
      description: "Kami percaya bahwa transparansi di seluruh rantai pasok sawit adalah kunci untuk industri yang adil dan bertanggung jawab.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Kolaborasi",
      description: "Kami mendorong kolaborasi antara semua pemangku kepentingan untuk menciptakan solusi yang bermanfaat bagi semua pihak.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Inovasi",
      description: "Kami terus berinovasi untuk menyediakan solusi teknologi terdepan yang mendukung keberlanjutan industri sawit.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-leaf-green to-leaf-green/80 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Sawit-iCare</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Platform digital yang menghubungkan petani, perusahaan, dan NGO untuk menciptakan industri sawit yang berkelanjutan dan adil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">Visi & Misi</h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-leaf-green"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-4 text-leaf-green">Visi</h3>
                <p className="text-gray-700">
                  Menjadi platform terdepan yang mendorong transformasi industri sawit menjadi lebih digital, transparan, dan berkelanjutan untuk kepentingan semua pemangku kepentingan dan lingkungan.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-sawit-yellow"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-4 text-sawit-yellow">Misi</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Menyediakan teknologi yang menghubungkan semua pemangku kepentingan dalam industri sawit.</li>
                  <li>• Meningkatkan transparansi dan ketelusuran dalam rantai pasok sawit.</li>
                  <li>• Mendukung petani dalam meningkatkan produktivitas dan kesejahteraan.</li>
                  <li>• Memfasilitasi inisiatif keberlanjutan dan carbon trading.</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Sawit-iCare dibangun berdasarkan nilai-nilai yang kami pegang teguh dalam setiap aspek operasional.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-sawit-yellow mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Perjalanan Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Sejak didirikan, Sawit-iCare telah melewati berbagai tonggak pencapaian penting.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute left-9 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-leaf-green/20 z-0"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className="relative z-10 mb-12 flex items-center"
                  variants={fadeIn}
                >
                  <div className="flex flex-col items-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                    <div className="bg-sawit-yellow text-text-dark w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className={`bg-white p-6 rounded-lg shadow-md ${
                    index % 2 === 0 
                      ? 'sm:mr-auto sm:pr-16 ml-24 sm:ml-0 sm:w-1/2 sm:text-right' 
                      : 'sm:ml-auto sm:pl-16 ml-24 sm:ml-0 sm:w-1/2'
                  }`}>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kenali tim berpengalaman di balik Sawit-iCare yang berdedikasi untuk menciptakan industri sawit yang lebih baik.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-leaf-green font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-leaf-green text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mau Tahu Lebih Banyak?</h2>
            <p className="text-lg mb-8 text-white/90">
              Jika Anda tertarik untuk mengetahui lebih banyak tentang Sawit-iCare atau ingin bergabung dengan platform kami, jangan ragu untuk menghubungi kami.
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
} 