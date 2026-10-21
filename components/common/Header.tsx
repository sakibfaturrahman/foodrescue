"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between"
    >
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-[#0A3A33] flex items-center gap-1"
        >
          foodrescue.id
          <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163]"></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="#home" className="hover:text-[#0A3A33] transition-colors">
            Beranda
          </Link>
          <Link
            href="#fitur"
            className="hover:text-[#0A3A33] transition-colors"
          >
            Program
          </Link>
          <Link href="#peta" className="hover:text-[#0A3A33] transition-colors">
            Peta Warung
          </Link>
          <Link
            href="#dampak"
            className="hover:text-[#0A3A33] transition-colors"
          >
            Dampak ESG
          </Link>
          <Link
            href="#mitra"
            className="hover:text-[#0A3A33] transition-colors"
          >
            Mitra UMKM
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Link
          href="/login"
          className="font-semibold text-gray-700 hover:text-[#0A3A33] px-3 py-2"
        >
          Masuk
        </Link>
        <Link
          href="/register"
          className="bg-[#0A3A33] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#062C27] transition-all shadow-sm"
        >
          Gabung Sekarang
        </Link>
      </div>
    </motion.header>
  );
}
