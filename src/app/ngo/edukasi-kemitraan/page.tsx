"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboardLayout";
import { useAuthStore, useDataStore } from "@/lib/store";

export default function EducationalPartnerships() {
  const { user } = useAuthStore();
  const { ngos, companies } = useDataStore();
  
  // Tab states
  const [activeTab, setActiveTab] = useState("materials");
  
  // Form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<"material" | "webinar">("material");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [materialType, setMaterialType] = useState<"PDF" | "Video" | "Presentation">("PDF");
  const [targetAudience, setTargetAudience] = useState<"Perusahaan" | "Petani" | "Umum">("Umum");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: "success" | "error"} | null>(null);

  // Dummy educational materials
  const educationalMaterials = [
    { 
      id: 1, 
      title: "Panduan Carbon Trading untuk Perusahaan", 
      description: "Panduan lengkap mengenai mekanisme carbon trading untuk perusahaan sawit.",
      type: "PDF", 
      size: "2.4 MB", 
      dateUploaded: "2023-02-12", 
      downloads: 145,
      targetAudience: "Perusahaan",
    },
    { 
      id: 2, 
      title: "Tutorial Menghitung Carbon Footprint", 
      description: "Video tutorial step-by-step untuk menghitung carbon footprint dari aktivitas bisnis.",
      type: "Video", 
      duration: "18:45", 
      dateUploaded: "2023-01-30", 
      views: 327,
      targetAudience: "Perusahaan",
    },
    { 
      id: 3, 
      title: "Praktik Pertanian Sawit Berkelanjutan", 
      description: "Panduan praktik pertanian berkelanjutan untuk petani sawit.",
      type: "PDF", 
      size: "3.7 MB", 
      dateUploaded: "2023-03-05", 
      downloads: 98,
      targetAudience: "Petani",
    },
    { 
      id: 4, 
      title: "Presentasi: Manfaat Ekonomi Carbon Offset", 
      description: "Presentasi tentang manfaat ekonomi dari carbon offset untuk industri sawit.",
      type: "Presentation", 
      size: "5.1 MB", 
      dateUploaded: "2023-02-25", 
      downloads: 76,
      targetAudience: "Umum",
    },
  ];

  // Dummy upcoming webinars
  const upcomingWebinars = [
    { 
      id: 1, 
      title: "Masa Depan Industri Sawit Berkelanjutan", 
      description: "Webinar mengenai prospek dan strategi keberlanjutan industri sawit di masa depan.",
      date: "2023-04-15", 
      time: "14:00 - 16:00 WIB", 
      speakers: ["Dr. Ahmad Sutopo (Climate Care)", "Prof. Budi Santoso (Universitas Indonesia)"],
      registrations: 87,
      status: "Upcoming",
    },
    { 
      id: 2, 
      title: "Dialog: Kolaborasi NGO dan Industri", 
      description: "Dialog interaktif tentang kolaborasi antara NGO dan perusahaan sawit untuk keberlanjutan.",
      date: "2023-05-02", 
      time: "10:00 - 12:00 WIB", 
      speakers: ["Linda Pratiwi (Climate Care)", "Rudi Hartono (PT Sawit Hijau)"],
      registrations: 45,
      status: "Upcoming",
    },
  ];

  // Dummy past webinars
  const pastWebinars = [
    { 
      id: 3, 
      title: "Workshop: Implementasi RSPO di Lapangan", 
      description: "Workshop praktis tentang implementasi standar RSPO di lapangan.",
      date: "2023-02-20", 
      time: "09:00 - 12:00 WIB", 
      speakers: ["James Wilson (RSPO)", "Dewi Susanti (Climate Care)"],
      participants: 64,
      recording: "https://youtu.be/example1",
      status: "Completed",
    },
    { 
      id: 4, 
      title: "Panel: Regulasi Carbon Trading di Indonesia", 
      description: "Diskusi panel mengenai perkembangan regulasi carbon trading di Indonesia.",
      date: "2023-01-18", 
      time: "13:00 - 15:00 WIB", 
      speakers: ["Dr. Hendra Gunawan (Kementerian LHK)", "Siti Aminah (Climate Care)"],
      participants: 120,
      recording: "https://youtu.be/example2",
      status: "Completed",
    },
  ];

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormOpen(false);
      setNotification({
        message: formType === "material" 
          ? "Materi edukasi baru berhasil ditambahkan!" 
          : "Webinar baru berhasil dijadwalkan!",
        type: "success"
      });
      
      // Reset form
      setTitle("");
      setDescription("");
      setMaterialType("PDF");
      setTargetAudience("Umum");
      
      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }, 1500);
  };

  // Function to open form modal
  const openFormModal = (type: "material" | "webinar") => {
    setFormType(type);
    setIsFormOpen(true);
  };

  // Function to render the material icon based on type
  const renderMaterialIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case "Video":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case "Presentation":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Edukasi Kemitraan</h1>
        <p className="text-gray-600">
          Kelola materi edukasi dan webinar untuk mitra perusahaan dan petani
        </p>
      </div>

      {notification && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`p-4 rounded-md mb-6 ${
            notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {notification.message}
        </motion.div>
      )}
      
      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "materials"
                ? "border-leaf-green text-leaf-green"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("materials")}
          >
            Materi Edukasi
          </button>
          <button
            className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "webinars"
                ? "border-leaf-green text-leaf-green"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("webinars")}
          >
            Webinar
          </button>
        </div>
      </div>
      
      {activeTab === "materials" ? (
        // Educational Materials Tab
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Materi Edukasi</h2>
            <button
              onClick={() => openFormModal("material")}
              className="px-4 py-2 bg-leaf-green text-white rounded-md text-sm font-medium hover:bg-leaf-green/90 transition-colors"
            >
              + Tambah Materi
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {educationalMaterials.map((material) => (
              <div 
                key={material.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    {renderMaterialIcon(material.type)}
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{material.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{material.description}</p>
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <span className="mr-3">
                          {material.type === "Video" ? material.duration : material.size}
                        </span>
                        <span className="mr-3">
                          {material.type === "Video" 
                            ? `${material.views} ditonton` 
                            : `${material.downloads} unduhan`
                          }
                        </span>
                        <span>
                          {material.dateUploaded}
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          material.targetAudience === "Perusahaan" 
                            ? "bg-blue-100 text-blue-800" 
                            : material.targetAudience === "Petani"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}>
                          {material.targetAudience}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-leaf-green text-white text-xs rounded hover:bg-leaf-green/90">
                          {material.type === "Video" ? "Tonton" : "Unduh"}
                        </button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Webinars Tab
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Webinar</h2>
            <button
              onClick={() => openFormModal("webinar")}
              className="px-4 py-2 bg-leaf-green text-white rounded-md text-sm font-medium hover:bg-leaf-green/90 transition-colors"
            >
              + Jadwalkan Webinar
            </button>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Webinar Mendatang</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingWebinars.map((webinar) => (
                <div 
                  key={webinar.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-sawit-yellow"
                >
                  <div className="p-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{webinar.title}</h4>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                        Mendatang
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{webinar.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Tanggal</p>
                        <p className="text-sm font-medium">{webinar.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Waktu</p>
                        <p className="text-sm font-medium">{webinar.time}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-gray-500">Pembicara</p>
                        <p className="text-sm font-medium">{webinar.speakers.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{webinar.registrations} pendaftar</span>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-leaf-green text-white text-xs rounded hover:bg-leaf-green/90">
                          Detail
                        </button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Webinar Sebelumnya</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pastWebinars.map((webinar) => (
                <div 
                  key={webinar.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-gray-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{webinar.title}</h4>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                        Selesai
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{webinar.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Tanggal</p>
                        <p className="text-sm font-medium">{webinar.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Waktu</p>
                        <p className="text-sm font-medium">{webinar.time}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-gray-500">Pembicara</p>
                        <p className="text-sm font-medium">{webinar.speakers.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{webinar.participants} peserta</span>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
                          Tonton Rekaman
                        </button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50">
                          Laporan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-lg shadow-xl w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">
                {formType === "material" ? "Tambah Materi Edukasi" : "Jadwalkan Webinar"}
              </h3>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleFormSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judul</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder={`Masukkan judul ${formType === "material" ? "materi" : "webinar"}`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder="Deskripsi singkat"
                    rows={3}
                    required
                  />
                </div>
                
                {formType === "material" ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipe</label>
                      <select
                        value={materialType}
                        onChange={(e) => setMaterialType(e.target.value as "PDF" | "Video" | "Presentation")}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                        required
                      >
                        <option value="PDF">PDF</option>
                        <option value="Video">Video</option>
                        <option value="Presentation">Presentasi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
                      <select
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value as "Perusahaan" | "Petani" | "Umum")}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                        required
                      >
                        <option value="Perusahaan">Perusahaan</option>
                        <option value="Petani">Petani</option>
                        <option value="Umum">Umum</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">File</label>
                      <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mt-1 text-sm text-gray-500">Klik untuk upload atau drag & drop</p>
                        <p className="mt-1 text-xs text-gray-400">Maksimal 10MB</p>
                        <input type="file" className="hidden" />
                        <button type="button" className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200">
                          Pilih File
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Waktu</label>
                        <input
                          type="time"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pembicara</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                        placeholder="Nama pembicara (pisahkan dengan koma)"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                      <select
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                        required
                      >
                        <option value="Zoom">Zoom</option>
                        <option value="Google Meet">Google Meet</option>
                        <option value="Microsoft Teams">Microsoft Teams</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Link Meeting</label>
                      <input
                        type="url"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                        placeholder="https://..."
                        required
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 border text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-leaf-green text-white rounded-md text-sm font-medium hover:bg-leaf-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Memproses..." : formType === "material" ? "Unggah Materi" : "Jadwalkan"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </DashboardLayout>
  );
} 