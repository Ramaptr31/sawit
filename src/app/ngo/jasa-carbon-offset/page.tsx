"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboardLayout";
import { useAuthStore, useDataStore } from "@/lib/store";
import { getSafeLocation } from "@/lib/browser";

export default function CarbonOffsetServices() {
  const { user } = useAuthStore();
  const { ngos, companies } = useDataStore();
  const safeLocation = getSafeLocation();
  
  // Find the current user's NGO data
  const ngoData = ngos.find(ngo => 
    ngo.name === user?.name || ngo.id === user?.id
  );

  // Tab states
  const [activeTab, setActiveTab] = useState("projects");
  
  // States for project form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [carbonAmount, setCarbonAmount] = useState("");
  const [projectPartner, setProjectPartner] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: "success" | "error"} | null>(null);

  // Dummy carbon offset projects
  const offsetProjects = [
    {
      id: 1,
      name: "Konservasi Hutan Kalimantan",
      description: "Program konservasi hutan untuk mengurangi deforestasi dan emisi karbon di Kalimantan.",
      location: "Kalimantan Timur",
      carbonCapacity: 10000,
      carbonSold: 6500,
      partners: ["PT Sawit Hijau", "EcoPalm Indonesia"],
      status: "Aktif",
      startDate: "2022-04-10",
    },
    {
      id: 2,
      name: "Restorasi Lahan Gambut Riau",
      description: "Pemulihan dan restorasi lahan gambut terdegradasi di Riau untuk penyerapan karbon.",
      location: "Riau",
      carbonCapacity: 8000,
      carbonSold: 3200,
      partners: ["GreenAgro"],
      status: "Aktif",
      startDate: "2022-08-15",
    },
    {
      id: 3,
      name: "Hutan Mangrove Pesisir Sumatera",
      description: "Penanaman dan pelestarian hutan mangrove di pesisir Sumatera sebagai penyerap karbon.",
      location: "Sumatera Utara",
      carbonCapacity: 5000,
      carbonSold: 500,
      partners: [],
      status: "Baru",
      startDate: "2023-02-28",
    },
  ];

  // Dummy transactions
  const transactions = [
    { id: 1, project: "Konservasi Hutan Kalimantan", company: "PT Sawit Hijau", amount: 1200, date: "2023-02-15", value: 60000000, status: "Selesai" },
    { id: 2, project: "Konservasi Hutan Kalimantan", company: "EcoPalm Indonesia", amount: 800, date: "2023-01-10", value: 40000000, status: "Selesai" },
    { id: 3, project: "Restorasi Lahan Gambut Riau", company: "GreenAgro", amount: 1500, date: "2023-03-01", value: 75000000, status: "Selesai" },
    { id: 4, project: "Konservasi Hutan Kalimantan", company: "PT Sawit Hijau", amount: 500, date: "2023-03-15", value: 25000000, status: "Proses" },
  ];

  // Handle form submission
  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormOpen(false);
      setNotification({
        message: "Proyek carbon offset baru berhasil dibuat!",
        type: "success"
      });
      
      // Reset form
      setProjectName("");
      setProjectDescription("");
      setProjectLocation("");
      setCarbonAmount("");
      setProjectPartner("");
      
      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Jasa Carbon Offset</h1>
        <p className="text-gray-600">
          Kelola proyek dan transaksi carbon offset Anda
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
      
      <div className="bg-white rounded-lg shadow-md mb-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="text-sm text-gray-500 mb-1">Total Carbon Offset</div>
            <div className="text-2xl font-bold">4,000 Ton</div>
            <div className="text-xs text-green-600 mt-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>12% dari bulan lalu</span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="text-sm text-gray-500 mb-1">Transaksi Tahun Ini</div>
            <div className="text-2xl font-bold">Rp 200,000,000</div>
            <div className="text-xs text-green-600 mt-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>8% dari tahun lalu</span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="text-sm text-gray-500 mb-1">Proyek Aktif</div>
            <div className="text-2xl font-bold">{offsetProjects.filter(p => p.status === "Aktif").length}</div>
            <div className="text-xs text-blue-600 mt-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>Total {offsetProjects.length} proyek</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "projects"
                ? "border-leaf-green text-leaf-green"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            Proyek Carbon Offset
          </button>
          <button
            className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "transactions"
                ? "border-leaf-green text-leaf-green"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("transactions")}
          >
            Transaksi
          </button>
        </div>
      </div>
      
      {activeTab === "projects" ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Daftar Proyek</h2>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-4 py-2 bg-leaf-green text-white rounded-md text-sm font-medium hover:bg-leaf-green/90 transition-colors"
            >
              + Tambah Proyek Baru
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Proyek
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lokasi
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kapasitas Carbon
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mitra
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {offsetProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-leaf-green/10 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{project.name}</div>
                            <div className="text-xs text-gray-500 mt-1">Mulai: {project.startDate}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {project.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{project.carbonCapacity.toLocaleString()} Ton</div>
                        <div className="text-xs text-gray-500 mt-1">Terjual: {project.carbonSold.toLocaleString()} Ton</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div
                            className="bg-leaf-green h-1.5 rounded-full"
                            style={{ width: `${(project.carbonSold / project.carbonCapacity) * 100}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {project.partners.length > 0 ? (
                          <div className="flex flex-col space-y-1">
                            {project.partners.map((partner, idx) => (
                              <span key={idx}>{partner}</span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-yellow-500">Belum ada mitra</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === "Aktif" 
                            ? "bg-green-100 text-green-800" 
                            : project.status === "Baru"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-leaf-green hover:text-leaf-green/80 mr-3">Detail</button>
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Riwayat Transaksi</h2>
            <div className="flex space-x-2">
              <select className="text-xs border rounded-md px-3 py-1.5">
                <option>Semua Proyek</option>
                {offsetProjects.map(project => (
                  <option key={project.id}>{project.name}</option>
                ))}
              </select>
              <select className="text-xs border rounded-md px-3 py-1.5">
                <option>Semua Status</option>
                <option>Selesai</option>
                <option>Proses</option>
              </select>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID Transaksi
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Proyek
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Perusahaan
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jumlah
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nilai
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #CC{transaction.id.toString().padStart(6, '0')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.project}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.amount} Ton
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Rp {transaction.value.toLocaleString('id-ID')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.status === "Selesai" 
                            ? "bg-green-100 text-green-800" 
                            : transaction.status === "Proses"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t">
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500">Menampilkan 4 dari 4 transaksi</p>
                <div className="flex space-x-1">
                  <button className="px-3 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700 hover:bg-gray-200">Sebelumnya</button>
                  <button className="px-3 py-1 bg-leaf-green rounded text-xs font-medium text-white">1</button>
                  <button className="px-3 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700 hover:bg-gray-200">Selanjutnya</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Project Form Modal */}
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
                Tambah Proyek Carbon Offset Baru
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
            <form onSubmit={handleProjectSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Proyek</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder="Masukkan nama proyek"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                  <textarea
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder="Deskripsi singkat tentang proyek"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                  <input
                    type="text"
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder="Lokasi proyek"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kapasitas Carbon (Ton CO₂)</label>
                  <input
                    type="number"
                    value={carbonAmount}
                    onChange={(e) => setCarbonAmount(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder="Estimasi kapasitas dalam ton"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mitra Perusahaan (opsional)</label>
                  <select
                    value={projectPartner}
                    onChange={(e) => setProjectPartner(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                  >
                    <option value="">Pilih mitra perusahaan</option>
                    {companies.map(company => (
                      <option key={company.id} value={company.name}>{company.name}</option>
                    ))}
                  </select>
                </div>
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
                  {isSubmitting ? "Memproses..." : "Simpan"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </DashboardLayout>
  );
} 