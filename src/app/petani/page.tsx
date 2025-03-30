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

export default function PetaniDashboard() {
  const { user } = useAuthStore();
  const { farmers } = useDataStore();
  const [weatherData, setWeatherData] = useState({
    temp: "28°C",
    condition: "Cerah",
    humidity: "75%",
    rainChance: "15%"
  });
  const [harvestData, setHarvestData] = useState([
    { month: "Jan", amount: 12 },
    { month: "Feb", amount: 15 },
    { month: "Mar", amount: 18 },
    { month: "Apr", amount: 14 },
    { month: "Mei", amount: 20 },
    { month: "Jun", amount: 22 },
  ]);
  
  // Find the current user's farmer data
  const farmerData = farmers.find(farmer => 
    farmer.name === user?.name || farmer.id === user?.id
  );

  // Dummy task list
  const tasks = [
    { id: 1, title: "Pemupukan Lahan Blok A", deadline: "Hari ini", status: "pending", priority: "high" },
    { id: 2, title: "Periksa hama di area perkebunan", deadline: "Besok", status: "pending", priority: "medium" },
    { id: 3, title: "Panen blok B3", deadline: "3 hari lagi", status: "pending", priority: "low" },
    { id: 4, title: "Maintenance alat pertanian", deadline: "Minggu depan", status: "completed", priority: "medium" },
  ];

  // Dummy notifications
  const notifications = [
    { id: 1, title: "Pembayaran upah bulan Maret", time: "2 jam yang lalu", read: false },
    { id: 2, title: "Info cuaca: potensi hujan lebat", time: "5 jam yang lalu", read: false },
    { id: 3, title: "Pertemuan petani 2 April 2023", time: "Kemarin", read: true },
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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Petani</h1>
        <p className="text-gray-600">Selamat datang, {user?.name || "Petani"}!</p>
      </div>

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Luas Lahan"
            value={`${farmerData?.landArea || 2.5} Ha`}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            }
            color="border-leaf-green"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Estimasi Hasil Panen"
            value="4.8 Ton"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            }
            color="border-sawit-yellow"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Status Pembayaran"
            value="Lunas"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            }
            color="border-earth-brown"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Kondisi Tanaman"
            value="Sehat"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            color="border-green-500"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Weather Card */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 py-5 border-b">
            <h3 className="font-semibold text-gray-900">Prakiraan Cuaca</h3>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-3xl font-bold">{weatherData.temp}</p>
                <p className="text-gray-600">{weatherData.condition}</p>
              </div>
              <div className="text-sawit-yellow text-5xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-xs text-gray-500">Kelembaban</p>
                <p className="text-lg font-semibold">{weatherData.humidity}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-xs text-gray-500">Kemungkinan Hujan</p>
                <p className="text-lg font-semibold">{weatherData.rainChance}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tasks List */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="px-6 py-5 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Tugas Perkebunan</h3>
            <button className="text-sm text-leaf-green font-medium hover:underline">
              Lihat Semua
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {tasks.filter((task, idx) => idx < 3).map((task) => (
                <div key={task.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      task.priority === "high" ? "bg-red-500" : 
                      task.priority === "medium" ? "bg-yellow-500" : "bg-blue-500"
                    }`}></div>
                    <div>
                      <p className={`font-medium ${task.status === "completed" ? "line-through text-gray-400" : "text-gray-800"}`}>
                        {task.title}
                      </p>
                      <p className="text-xs text-gray-500">Deadline: {task.deadline}</p>
                    </div>
                  </div>
                  <div>
                    <input 
                      type="checkbox" 
                      checked={task.status === "completed"}
                      className="h-5 w-5 text-leaf-green rounded focus:ring-leaf-green"
                      readOnly
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Harvest Chart */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="px-6 py-5 border-b">
            <h3 className="font-semibold text-gray-900">Hasil Panen 6 Bulan Terakhir (Ton)</h3>
          </div>
          <div className="p-6 h-64 flex items-end justify-between">
            {harvestData.map((data, index) => (
              <div key={index} className="flex flex-col items-center w-1/6">
                <div 
                  className="bg-leaf-green/80 w-full rounded-t-sm"
                  style={{ height: `${data.amount * 8}px` }}
                ></div>
                <p className="text-xs mt-2 text-gray-600">{data.month}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 