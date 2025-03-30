"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

// Project card component
const ProjectCard = ({ 
  title, 
  description, 
  progress, 
  company, 
  status 
}: { 
  title: string; 
  description: string; 
  progress: number; 
  company: string; 
  status: string;
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span 
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            status === "Aktif" 
              ? "bg-green-100 text-green-800" 
              : status === "Pending" 
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="mb-2 flex justify-between items-center">
        <span className="text-sm text-gray-500">Progress</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="bg-leaf-green h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">Mitra: {company}</div>
        <Link href="#" className="text-xs font-medium text-leaf-green hover:underline">
          Lihat Detail
        </Link>
      </div>
    </div>
  </div>
);

export default function NGODashboard() {
  const { user } = useAuthStore();
  const { ngos, companies } = useDataStore();
  
  // Find the current user's NGO data
  const ngoData = ngos.find(ngo => 
    ngo.name === user?.name || ngo.id === user?.id
  );

  // Partner companies for this NGO
  const partnerCompanyData = companies.filter(company => 
    ngoData?.partnerCompanies.includes(company.name)
  );

  // Dummy carbon impact data
  const carbonImpactData = [
    { month: "Jan", amount: 50 },
    { month: "Feb", amount: 120 },
    { month: "Mar", amount: 80 },
    { month: "Apr", amount: 140 },
    { month: "Mei", amount: 100 },
    { month: "Jun", amount: 180 },
  ];

  // Dummy project data
  const activeProjects = [
    {
      id: 1,
      title: "Konservasi Hutan Gambut",
      description: "Program konservasi dan pemulihan lahan gambut untuk mengurangi emisi karbon.",
      progress: 68,
      company: "PT Sawit Hijau",
      status: "Aktif"
    },
    {
      id: 2,
      title: "Pelatihan Pertanian Berkelanjutan",
      description: "Memberikan pelatihan kepada petani untuk praktik pertanian berkelanjutan.",
      progress: 42,
      company: "EcoPalm Indonesia",
      status: "Aktif"
    },
    {
      id: 3,
      title: "Sertifikasi RSPO",
      description: "Pendampingan perusahaan sawit dalam proses sertifikasi RSPO.",
      progress: 90,
      company: "GreenAgro",
      status: "Aktif"
    }
  ];

  // Dummy educational resources
  const educationalResources = [
    { id: 1, title: "Panduan Carbon Credit untuk Perusahaan Sawit", type: "PDF", downloads: 145, date: "2023-02-12" },
    { id: 2, title: "Cara Menghitung Carbon Footprint", type: "Video", views: 327, date: "2023-01-30" },
    { id: 3, title: "Pertanian Sawit yang Berkelanjutan", type: "PDF", downloads: 98, date: "2023-03-05" },
    { id: 4, title: "Webinar: Masa Depan Industri Sawit Berkelanjutan", type: "Video", views: 210, date: "2023-02-20" },
  ];

  // Animation variants
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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard NGO</h1>
        <p className="text-gray-600">Selamat datang, {ngoData?.name || user?.name || "NGO Partner"}!</p>
      </div>

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Total Carbon Offset"
            value="685 Ton"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
              </svg>
            }
            color="border-leaf-green"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Mitra Perusahaan"
            value={`${partnerCompanyData.length || 0} Perusahaan`}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            }
            color="border-blue-500"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Proyek Aktif"
            value={`${activeProjects.length} Proyek`}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </svg>
            }
            color="border-sawit-yellow"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <MetricCard
            title="Materi Edukasi"
            value={`${educationalResources.length} Materi`}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            }
            color="border-earth-brown"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Carbon Impact Chart */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 py-5 border-b">
            <h3 className="font-semibold text-gray-900">Carbon Impact (Ton CO₂)</h3>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-end space-x-6">
              {carbonImpactData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="relative w-full h-52">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-leaf-green rounded-t-sm"
                      style={{ height: `${data.amount * 0.25}px` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-2 text-center text-gray-600">{data.month}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partner Companies */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="px-6 py-5 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Mitra Perusahaan</h3>
            <button className="text-xs font-medium text-leaf-green hover:underline">
              Lihat Semua
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {partnerCompanyData.map((company, index) => (
                <div key={company.id} className={index < partnerCompanyData.length - 1 ? "pb-6 border-b border-gray-100" : ""}>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                      {company.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{company.name}</p>
                      <p className="text-xs text-gray-500">{company.industry}</p>
                      <div className="flex items-center mt-1">
                        <span className={`w-2 h-2 ${company.verified ? "bg-green-500" : "bg-yellow-500"} rounded-full mr-1`}></span>
                        <span className="text-xs text-gray-500">{company.verified ? "Terverifikasi" : "Pending"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <button className="w-full py-2 text-sm font-medium text-center text-leaf-green border border-leaf-green rounded-md hover:bg-leaf-green/10 transition-colors">
                  Tambah Mitra Baru
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Proyek Aktif</h2>
          <button className="text-sm font-medium text-leaf-green hover:underline flex items-center">
            <span>Lihat Semua Proyek</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Materi Edukasi</h2>
          <Link 
            href="/ngo/edukasi-kemitraan"
            className="text-sm font-medium text-leaf-green hover:underline flex items-center"
          >
            <span>Kelola Materi</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Judul
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipe
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statistik
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {educationalResources.map((resource) => (
                  <tr key={resource.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {resource.type === "PDF" ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <span className="text-sm text-gray-500">{resource.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {resource.type === "PDF" 
                        ? `${resource.downloads} unduhan` 
                        : `${resource.views} ditonton`
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {resource.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-leaf-green hover:text-leaf-green/80 mr-4">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t">
            <button className="w-full py-2 text-sm font-medium text-center text-white bg-leaf-green rounded-md hover:bg-leaf-green/90 transition-colors">
              Tambah Materi Baru
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 