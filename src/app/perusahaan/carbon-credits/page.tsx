"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboardLayout";
import { useAuthStore, useDataStore } from "@/lib/store";

export default function CarbonCreditsPage() {
  const { user } = useAuthStore();
  const { companies } = useDataStore();
  
  // Find the current company's data
  const companyData = companies.find(company => 
    company.name === user?.name || company.id === user?.id
  );

  // States for the transaction form
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState("");
  const [price, setPrice] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<"buy" | "sell">("buy");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: "success" | "error"} | null>(null);

  // Dummy transaction data
  const transactions = [
    { id: 1, type: "buy", amount: 250, provider: "GreenEarth NGO", date: "2023-03-28", price: 12500000, status: "completed" },
    { id: 2, type: "buy", amount: 150, provider: "Carbon Neutral Co.", date: "2023-02-15", price: 7500000, status: "completed" },
    { id: 3, type: "sell", amount: 50, provider: "EcoIndustry Ltd.", date: "2023-01-22", price: 3000000, status: "completed" },
    { id: 4, type: "buy", amount: 100, provider: "Forest Alliance", date: "2022-12-10", price: 5000000, status: "completed" },
  ];

  // Certificate data (dummy)
  const certificates = [
    { id: 1, name: "RSPO Certification", issuer: "Roundtable on Sustainable Palm Oil", date: "2023-01-15", expiry: "2025-01-15", status: "valid" },
    { id: 2, name: "ISO 14001", issuer: "International Organization for Standardization", date: "2022-11-10", expiry: "2024-11-10", status: "valid" },
    { id: 3, name: "ISPO Certification", issuer: "Indonesian Sustainable Palm Oil", date: "2022-08-05", expiry: "2024-08-05", status: "valid" },
  ];

  // Handler for form submission
  const handleTransactionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormOpen(false);
      setNotification({
        message: `Transaksi ${transactionType === "buy" ? "pembelian" : "penjualan"} carbon credit berhasil dibuat!`,
        type: "success"
      });
      
      // Reset form
      setAmount("");
      setProvider("");
      setPrice("");
      
      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manajemen Carbon Credit</h1>
        <p className="text-gray-600">
          Pantau dan kelola transaksi carbon credit perusahaan Anda
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Credit Balance Card */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-leaf-green"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-gray-500 text-sm font-medium">Saldo Carbon Credit</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold text-gray-900">{companyData?.carbonCreditBought || 0}</p>
            <p className="ml-2 text-sm text-gray-600">Ton CO₂</p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                setTransactionType("buy");
                setIsFormOpen(true);
              }}
              className="px-4 py-2 bg-leaf-green text-white rounded-md text-sm font-medium hover:bg-leaf-green/90 transition-colors"
            >
              Beli Carbon Credit
            </button>
          </div>
        </motion.div>
        
        {/* YTD Offset Card */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sawit-yellow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-gray-500 text-sm font-medium">Total Offset (YTD)</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold text-gray-900">325</p>
            <p className="ml-2 text-sm text-gray-600">Ton CO₂</p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                setTransactionType("sell");
                setIsFormOpen(true);
              }}
              className="px-4 py-2 bg-white border border-leaf-green text-leaf-green rounded-md text-sm font-medium hover:bg-leaf-green/10 transition-colors"
            >
              Jual Carbon Credit
            </button>
          </div>
        </motion.div>
        
        {/* Yearly Target Card */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-earth-brown"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="text-gray-500 text-sm font-medium">Target Tahunan</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold text-gray-900">1,000</p>
            <p className="ml-2 text-sm text-gray-600">Ton CO₂</p>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-earth-brown h-2.5 rounded-full" style={{ width: '32.5%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">32.5% dari target tercapai</p>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction History */}
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="px-6 py-5 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Riwayat Transaksi</h3>
            <div className="flex space-x-2">
              <select className="text-xs border rounded-md px-2 py-1">
                <option>Semua Tipe</option>
                <option>Pembelian</option>
                <option>Penjualan</option>
              </select>
              <select className="text-xs border rounded-md px-2 py-1">
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.type === "buy" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {transaction.type === "buy" ? "Pembelian" : "Penjualan"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.amount} Ton
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.provider}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rp {transaction.price.toLocaleString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {transaction.status === "completed" ? "Selesai" : "Pending"}
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
        </motion.div>
        
        {/* Certificates */}
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="px-6 py-5 border-b">
            <h3 className="font-semibold text-gray-900">Sertifikasi</h3>
          </div>
          <div className="p-6 space-y-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{cert.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    cert.status === "valid" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {cert.status === "valid" ? "Valid" : "Expired"}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Dikeluarkan oleh: {cert.issuer}</p>
                <div className="flex justify-between mt-3 text-xs text-gray-500">
                  <p>Tanggal: {cert.date}</p>
                  <p>Berlaku hingga: {cert.expiry}</p>
                </div>
                <button className="mt-3 text-xs font-medium text-leaf-green hover:underline">
                  Lihat sertifikat
                </button>
              </div>
            ))}
            
            <button className="w-full py-2 mt-2 text-sm font-medium text-center text-leaf-green border border-leaf-green rounded-md hover:bg-leaf-green/10 transition-colors">
              Ajukan Sertifikasi Baru
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Transaction Form Modal */}
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
                {transactionType === "buy" ? "Beli Carbon Credit" : "Jual Carbon Credit"}
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
            <form onSubmit={handleTransactionSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah (Ton CO₂)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder="Masukkan jumlah dalam ton"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {transactionType === "buy" ? "Provider" : "Pembeli"}
                  </label>
                  <input
                    type="text"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder={transactionType === "buy" ? "Nama provider" : "Nama pembeli"}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green"
                    placeholder="Masukkan harga dalam Rupiah"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Metode Pembayaran</label>
                  <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-green">
                    <option>Transfer Bank</option>
                    <option>E-Wallet</option>
                    <option>Kartu Kredit</option>
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
                  {isSubmitting ? "Memproses..." : "Konfirmasi"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </DashboardLayout>
  );
} 