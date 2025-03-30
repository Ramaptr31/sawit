"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function KontakPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // State untuk form
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    kategori: "",
    pesan: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Validasi form sederhana
    if (!formData.nama || !formData.email || !formData.kategori || !formData.pesan) {
      setError("Mohon lengkapi semua field yang diperlukan.");
      setIsSubmitting(false);
      return;
    }
    
    // Simulasi pengiriman form
    setTimeout(() => {
      // Dalam implementasi nyata, di sini Anda akan mengirim data ke server
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        nama: "",
        email: "",
        kategori: "",
        pesan: ""
      });
    }, 1500);
  };

  // Reset form setelah submit berhasil
  const handleNewMessage = () => {
    setIsSubmitted(false);
  };

  // Kategori kontak
  const categories = [
    { value: "", label: "Pilih kategori" },
    { value: "dukungan-teknis", label: "Dukungan Teknis" },
    { value: "pertanyaan-umum", label: "Pertanyaan Umum" },
    { value: "kerjasama", label: "Kerjasama" },
    { value: "saran-feedback", label: "Saran & Feedback" },
    { value: "laporan-masalah", label: "Laporan Masalah" },
    { value: "lainnya", label: "Lainnya" }
  ];

  // Data kontak
  const contactInfo = [
    {
      title: "Email",
      value: "info@sawiticare.com",
      icon: (
        <svg className="w-6 h-6 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Telepon",
      value: "+62 812 3456 7890",
      icon: (
        <svg className="w-6 h-6 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      )
    },
    {
      title: "Kantor Pusat",
      value: "Jl. Palma No. 123, Jakarta, Indonesia",
      icon: (
        <svg className="w-6 h-6 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    },
    {
      title: "Jam Kerja",
      value: "Senin - Jumat: 08.00 - 17.00 WIB",
      icon: (
        <svg className="w-6 h-6 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg text-white/90">
              Ada pertanyaan atau saran? Jangan ragu untuk menghubungi kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Contact Form */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Kirim Pesan</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Pesan Terkirim!</h3>
                    <p className="text-gray-600 mb-6">
                      Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                    </p>
                    <button
                      onClick={handleNewMessage}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-leaf-green hover:bg-leaf-green/90"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
                        <p>{error}</p>
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap*
                      </label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                        placeholder="Masukkan alamat email Anda"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="kategori" className="block text-sm font-medium text-gray-700 mb-1">
                        Kategori*
                      </label>
                      <select
                        id="kategori"
                        name="kategori"
                        value={formData.kategori}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                      >
                        {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan*
                      </label>
                      <textarea
                        id="pesan"
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-leaf-green ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-leaf-green/90"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        "Kirim Pesan"
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
              
              {/* Contact Information */}
              <motion.div 
                className="flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="bg-gray-50 rounded-lg shadow p-6 md:p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Informasi Kontak</h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">{item.icon}</div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                          <p className="mt-1 text-gray-600">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="bg-gray-50 rounded-lg shadow p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Media Sosial</h2>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-600 text-white hover:bg-pink-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600 text-white hover:bg-red-700 transition-colors"
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                <p className="text-gray-600">Peta Lokasi Kantor Kami</p>
                <p className="text-sm text-gray-500 mt-1">(Dalam implementasi nyata, di sini akan ditampilkan peta interaktif)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 