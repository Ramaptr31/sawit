"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboardLayout";
import { useAuthStore, useDataStore } from "@/lib/store";

// Card component for dashboard
const MetricCard = ({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className={`${color.replace('border-', 'text-')} text-2xl`}>
        {icon}
      </div>
    </div>
  </div>
);

export default function PerusahaanDashboard() {
  const { user } = useAuthStore();
  const { companies, farmers, carbonCreditsSold } = useDataStore();
  
  // Find the current user's company data
  const companyData = companies.find(company => 
    company.name === user?.name || company.id === user?.id
  );

  // Company farmers (filtered by company name)
  const companyFarmers = farmers.filter(farmer => 
    farmer.company === companyData?.name
  );

  // Dummy carbon data for chart
  const carbonData = [
    { month: "Jan", emissions: 120, offset: 80 },
    { month: "Feb", emissions: 130, offset: 90 },
    { month: "Mar", emissions: 100, offset: 70 },
    { month: "Apr", emissions: 110, offset: 85 },
    { month: "Mei", emissions: 95, offset: 75 },
    { month: "Jun", emissions: 105, offset: 95 },
  ];

  // Dummy notifiations
  const notifications = [
    { id: 1, title: "Verifikasi pengajuan carbon credit berhasil", time: "1 jam yang lalu", read: false },
    { id: 2, title: "Perjanjian kemitraan dengan NGO Green Earth telah disetujui", time: "3 jam yang lalu", read: false },
    { id: 3, title: "Pertemuan dengan mitra pertanian Selasa, 4 April 2023", time: "Kemarin", read: true },
  ];

  // Dummy recent activities
  const recentActivities = [
    { id: 1, type: "carbon", title: "Pembelian Carbon Credit", amount: "500 Ton", date: "28 Mar 2023", status: "success" },
    { id: 2, type: "partnership", title: "Registrasi Petani Baru", count: "12 Petani", date: "26 Mar 2023", status: "success" },
    { id: 3, type: "payment", title: "Pembayaran Upah Petani", amount: "Rp 45,000,000", date: "25 Mar 2023", status: "success" },
    { id: 4, type: "certification", title: "Pengajuan Sertifikasi RSPO", date: "22 Mar 2023", status: "pending" },
  ];
  
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Perusahaan</h1>
        <p className="text-gray-600">Selamat datang, {companyData?.name || user?.name || "Perusahaan"}!</p>
      </div>

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Total Petani"
            value={`${companyFarmers.length || 0} Orang`}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            }
            color="border-leaf-green"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Carbon Credit"
            value={`${companyData?.carbonCreditBought || 0} Ton`}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
              </svg>
            }
            color="border-sawit-yellow"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Luas Lahan"
            value={`${companyFarmers.reduce((acc, farmer) => acc + farmer.landArea, 0).toFixed(1) || 0} Ha`}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            }
            color="border-earth-brown"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="NGO Partners"
            value="3 Mitra"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            }
            color="border-blue-500"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Carbon Chart */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 py-5 border-b">
            <h3 className="font-semibold text-gray-900">Analisis Carbon Footprint (Ton CO₂)</h3>
          </div>
          <div className="p-6">
            <div className="flex mb-4">
              <div className="flex items-center mr-6">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600">Emisi</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600">Offset</span>
              </div>
            </div>
            <div className="h-64 flex items-end space-x-4">
              {carbonData.map((data, index) => (
                <div key={index} className="flex-1">
                  <div className="relative h-52">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-red-500 rounded-t-sm"
                      style={{ height: `${data.emissions * 0.4}px` }}
                    ></div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-sm border-2 border-white"
                      style={{ height: `${data.offset * 0.4}px` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-2 text-center text-gray-600">{data.month}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="px-6 py-5 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Notifikasi</h3>
            <div className="bg-gray-100 text-xs font-medium rounded-full px-2 py-1">
              {notifications.filter(n => !n.read).length} baru
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    {!notification.read && (
                      <div className="w-2 h-2 bg-sawit-yellow rounded-full mt-2 mr-2"></div>
                    )}
                    <div className={!notification.read ? "ml-0" : "ml-4"}>
                      <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm font-medium text-leaf-green hover:underline w-full text-center">
              Lihat semua notifikasi
            </button>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="px-6 py-5 border-b">
            <h3 className="font-semibold text-gray-900">Aktivitas Terbaru</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className={`p-2 rounded-full ${
                    activity.type === "carbon" 
                      ? "bg-green-100 text-green-600" 
                      : activity.type === "partnership"
                      ? "bg-blue-100 text-blue-600"
                      : activity.type === "payment"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-purple-100 text-purple-600"
                  } mr-4`}>
                    {activity.type === "carbon" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                      </svg>
                    ) : activity.type === "partnership" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    ) : activity.type === "payment" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activity.status === "success" 
                          ? "bg-green-100 text-green-800" 
                          : activity.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                        {activity.status === "success" ? "Sukses" : activity.status === "pending" ? "Pending" : "Gagal"}
                      </span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-500">{activity.date}</p>
                      {activity.amount && <p className="text-xs font-medium">{activity.amount}</p>}
                      {activity.count && <p className="text-xs font-medium">{activity.count}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Petani Stats */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="px-6 py-5 border-b">
            <h3 className="font-semibold text-gray-900">Status Petani</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {/* Farmer Status Distribution */}
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-xs text-gray-500">Status</span>
                  <span className="text-xs text-gray-500">Jumlah</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">Aktif</span>
                    </div>
                    <span className="text-sm font-medium">
                      {companyFarmers.filter(f => f.status === 'Aktif').length || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-sm">Pending</span>
                    </div>
                    <span className="text-sm font-medium">
                      {companyFarmers.filter(f => f.status === 'Pending').length || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm">Suspended</span>
                    </div>
                    <span className="text-sm font-medium">
                      {companyFarmers.filter(f => f.status === 'Suspended').length || 0}
                    </span>
                  </div>
                </div>
              </div>

              {/* Graph visualization */}
              <div className="pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Distribusi Petani</h4>
                <div className="bg-gray-100 h-4 rounded-full overflow-hidden">
                  <div className="flex h-full">
                    <div 
                      className="bg-green-500 h-full" 
                      style={{ 
                        width: `${(companyFarmers.filter(f => f.status === 'Aktif').length / companyFarmers.length) * 100}%` 
                      }}
                    ></div>
                    <div 
                      className="bg-yellow-500 h-full" 
                      style={{ 
                        width: `${(companyFarmers.filter(f => f.status === 'Pending').length / companyFarmers.length) * 100}%` 
                      }}
                    ></div>
                    <div 
                      className="bg-red-500 h-full" 
                      style={{ 
                        width: `${(companyFarmers.filter(f => f.status === 'Suspended').length / companyFarmers.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <button className="w-full py-2 text-sm font-medium text-center text-leaf-green border border-leaf-green rounded-md hover:bg-leaf-green/10 transition-colors">
                  Lihat Detail Petani
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 