"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-1/2 w-full bg-leaf-green/5 rounded-full transform -translate-x-1/3"></div>
        <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-sawit-yellow/10 rounded-full transform -translate-y-1/2"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-text-dark"
              variants={item}
            >
              <span className="text-leaf-green">Solusi Digital</span> untuk{" "}
              <span className="text-sawit-yellow">Industri Sawit</span>{" "}
              Berkelanjutan
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 max-w-3xl"
              variants={item}
            >
              Sawit-iCare menghubungkan perusahaan sawit, petani, dan NGO dalam 
              satu platform untuk monitoring petani, carbon trading, perlindungan 
              hak, serta edukasi lingkungan demi masa depan industri yang lebih baik.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              variants={item}
            >
              <Link 
                href="/petani"
                className="px-6 py-3 rounded-full bg-sawit-yellow text-text-dark font-medium hover:bg-opacity-90 transition-colors"
              >
                Mulai untuk Petani
              </Link>
              <Link 
                href="/perusahaan"
                className="px-6 py-3 rounded-full bg-leaf-green text-white font-medium hover:bg-opacity-90 transition-colors"
              >
                Solusi Perusahaan
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center gap-2"
              variants={item}
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">P1</div>
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium">P2</div>
                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-xs font-medium">N1</div>
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-xs font-medium text-white">+5</div>
              </div>
              <p className="text-sm text-gray-600">
                Bergabung dengan <span className="font-medium">1,200+</span> partner
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={item}
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/3] rounded-2xl bg-leaf-green/80 overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5}
                    stroke="currentColor" 
                    className="w-16 h-16"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" 
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-sawit-yellow rounded-lg p-4 shadow-lg">
                <div className="text-sm font-medium">Sudah Terverifikasi</div>
                <div className="text-xs mt-1">3.5K+ Petani</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 