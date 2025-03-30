"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Bagi Petani", href: "/petani-info" },
    { name: "Bagi Perusahaan", href: "/perusahaan-info" },
    { name: "Bagi NGO", href: "/ngo-info" },
    { name: "Carbon Trading", href: "/carbon-trading" },
    { name: "Awareness", href: "/awareness" },
    { name: "Tentang Kami", href: "/about-us" },
    { name: "Kontak", href: "/contact" },
  ];
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  
  return (
    <motion.header 
      className="bg-white shadow-sm sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-sawit-yellow">Sawit</span>
              <span className="text-xl font-bold text-leaf-green">-iCare</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-leaf-green"
                    : "text-text-dark hover:text-sawit-yellow"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/auth/login"
              className="ml-4 px-4 py-2 rounded-md bg-sawit-yellow text-text-dark font-medium hover:bg-opacity-90 transition-colors"
            >
              Login
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-dark hover:text-sawit-yellow focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-leaf-green"
                    : "text-text-dark hover:text-sawit-yellow"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/auth/login"
              className="block px-3 py-2 mt-4 rounded-md bg-sawit-yellow text-text-dark font-medium hover:bg-opacity-90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
} 