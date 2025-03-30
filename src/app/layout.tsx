import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/browserConfig.js";
import "../lib/fix-svg.js";
import BrowserPolyfillProvider from "../lib/browserPolyfill";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sawit-iCare - Platform Solusi Digital untuk Perkebunan Sawit",
  description: "Platform digital berbasis Next.js untuk Perusahaan Sawit, Petani, dan NGO dalam mengelola monitoring petani, carbon trading, perlindungan hak, dan edukasi lingkungan.",
  keywords: ["sawit", "carbon trading", "petani", "ngo", "lingkungan", "kelapa sawit", "indonesia", "sustainable"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <BrowserPolyfillProvider>
          {children}
        </BrowserPolyfillProvider>
      </body>
    </html>
  );
}
