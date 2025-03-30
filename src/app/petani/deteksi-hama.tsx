"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboardLayout";

export default function DeteksiHama() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | {
    pest: string;
    confidence: number;
    description: string;
    recommendation: string;
    severity: "low" | "medium" | "high";
  }>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setResults(null);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // Simulate detection process
  const handleDetection = () => {
    if (!selectedFile) return;

    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Dummy result data
      const fakePests = [
        {
          pest: "Ulat Daun (Leaf Caterpillar)",
          confidence: 92.4,
          description: "Ulat yang memakan daun kelapa sawit, biasanya menyerang daun muda.",
          recommendation: "Aplikasikan insektisida berbahan aktif sipermetrin atau deltametrin di area yang terinfeksi.",
          severity: "medium" as const,
        },
        {
          pest: "Kumbang Tanduk (Rhinoceros Beetle)",
          confidence: 87.6,
          description: "Kumbang yang mengebor batang kelapa sawit dan menyebabkan kerusakan pada mahkota daun.",
          recommendation: "Gunakan perangkap feromon dan pastikan sanitasi kebun terjaga dengan baik.",
          severity: "high" as const,
        },
        {
          pest: "Tungau (Mites)",
          confidence: 95.1,
          description: "Hama kecil yang menghisap cairan daun, menyebabkan bercak kuning dan pengerdilan.",
          recommendation: "Aplikasikan akarisida spesifik yang direkomendasikan oleh ahli pertanian.",
          severity: "low" as const,
        },
      ];
      
      // Pick a random pest result
      const result = fakePests[Math.floor(Math.random() * fakePests.length)];
      
      setResults(result);
      setLoading(false);
    }, 2500);
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Deteksi Hama</h1>
        <p className="text-gray-600">
          Upload foto tanaman sawit Anda untuk mendeteksi hama dan dapatkan rekomendasi penanganan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold mb-4">Upload Gambar</h2>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                {preview ? (
                  <div className="relative mx-auto">
                    <img
                      src={preview}
                      alt="Preview"
                      className="mx-auto max-h-64 rounded-lg"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedFile(null);
                        setPreview(null);
                        setResults(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                      Klik untuk upload atau tarik gambar ke sini
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      JPG, PNG atau GIF maksimal 10MB
                    </p>
                  </div>
                )}
              </label>
            </div>

            <button
              onClick={handleDetection}
              disabled={!selectedFile || loading}
              className={`w-full py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white 
                ${!selectedFile || loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-leaf-green hover:bg-leaf-green/90"
                }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mendeteksi...
                </div>
              ) : (
                "Deteksi Hama"
              )}
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Tips untuk hasil terbaik:</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Pastikan gambar jelas dan fokus pada area yang terkena hama</li>
              <li>Foto dalam cahaya yang cukup</li>
              <li>Ambil beberapa gambar dari sudut berbeda jika perlu</li>
              <li>Usahakan gambar menunjukkan gejala kerusakan dan hamanya (jika terlihat)</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold mb-4">Hasil Deteksi</h2>

          {!selectedFile && !results && (
            <div className="flex flex-col items-center justify-center h-64 border border-gray-200 rounded-lg bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="mt-2 text-sm text-gray-600">
                Upload gambar untuk melihat hasil deteksi
              </p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center h-64 border border-gray-200 rounded-lg bg-gray-50">
              <div className="animate-spin h-12 w-12 border-4 border-leaf-green border-t-transparent rounded-full"></div>
              <p className="mt-4 text-sm text-gray-600">Sedang menganalisis gambar...</p>
            </div>
          )}

          {results && (
            <div className="space-y-6">
              <div className={`p-4 rounded-lg ${
                results.severity === "high" 
                  ? "bg-red-50 border border-red-200" 
                  : results.severity === "medium"
                  ? "bg-yellow-50 border border-yellow-200"
                  : "bg-green-50 border border-green-200"
              }`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-full ${
                    results.severity === "high" 
                      ? "bg-red-100" 
                      : results.severity === "medium"
                      ? "bg-yellow-100"
                      : "bg-green-100"
                  }`}>
                    {results.severity === "high" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : results.severity === "medium" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className={`text-base font-medium ${
                      results.severity === "high" 
                        ? "text-red-800" 
                        : results.severity === "medium"
                        ? "text-yellow-800"
                        : "text-green-800"
                    }`}>
                      Terdeteksi: {results.pest}
                    </h3>
                    <div className="mt-1 text-sm">
                      <span className="font-medium">Tingkat kepercayaan:</span>{" "}
                      <span className="font-bold">{results.confidence.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Deskripsi:</h3>
                <p className="text-sm text-gray-600">{results.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Rekomendasi Penanganan:</h3>
                <p className="text-sm text-gray-600">{results.recommendation}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Tindakan Selanjutnya:</h3>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-leaf-green text-white text-sm font-medium rounded-md hover:bg-leaf-green/90">
                    Hubungi Ahli
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Simpan Hasil
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Bagikan
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-lg font-semibold mb-4">Hama Umum Kelapa Sawit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Gambar Ulat Daun</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">Ulat Daun</h3>
              <p className="text-sm text-gray-600 mt-1">
                Memakan daun muda dan menyebabkan kerusakan signifikan pada tajuk
              </p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Gambar Kumbang Tanduk</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">Kumbang Tanduk</h3>
              <p className="text-sm text-gray-600 mt-1">
                Menyerang titik tumbuh dan merusak mahkota daun kelapa sawit
              </p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Gambar Tikus</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">Tikus</h3>
              <p className="text-sm text-gray-600 mt-1">
                Memakan buah dan merusak batang muda tanaman kelapa sawit
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
} 