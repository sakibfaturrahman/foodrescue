"use client";

import { motion } from "framer-motion";
import { ArrowUp, Star } from "lucide-react";

export default function BentoGridSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
        <div className="md:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A3A33] leading-tight">
            Bergerak Cepat Mengatasi Food Waste & Kelaparan Perkotaan
          </h2>
        </div>
        <div className="md:col-span-7 text-gray-600 text-sm leading-relaxed space-y-4">
          <p>
            Sistem penyaluran bantuan pangan konvensional seringkali lambat dan
            kurang transparan. foodrescue.id mengintegrasikan stok surplus UMKM
            harian dengan klaim voucher berbasis lokasi secara real-time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#F0EFE9] rounded-2xl overflow-hidden min-h-[220px] relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            alt="Relawan dan UMKM"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#C5CAE9] text-[#1A237E] rounded-2xl p-6 flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <span className="text-4xl font-extrabold block">98%</span>
            <p className="text-xs font-semibold mt-2 opacity-80">
              Tingkat Penukaran Voucher (Redemption Rate) tepat sasaran.
            </p>
          </div>
          <div className="text-xs font-bold underline cursor-pointer">
            Lihat data transparansi
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#F0EFE9] rounded-2xl overflow-hidden min-h-[220px] sm:col-span-2 lg:col-span-1 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
            alt="Penerima manfaat QR"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#0A3A33] text-white rounded-2xl p-6 flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <span className="text-4xl font-extrabold text-[#E2F163] block">
              50%
            </span>
            <p className="text-xs font-medium text-gray-200 mt-2">
              Penghematan potensi modal terbuang dari sisa makanan warung mitra.
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <ArrowUp className="w-4 h-4 text-[#E2F163]" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#31103F] text-white rounded-2xl p-6 flex flex-col justify-between min-h-[200px]"
        >
          <div>
            <div className="flex items-center gap-1 text-[#E2F163] text-xl font-bold">
              <span>4.9</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-xs text-gray-300 mt-2">
              Rating kepuasan pelayanan dari penerima manfaat dan warung mitra.
            </p>
          </div>
          <span className="text-[10px] text-gray-400 uppercase tracking-wider">
            Metrik Kepuasan Publik
          </span>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#FFF9C4] text-[#F57F17] rounded-2xl p-6 flex flex-col justify-between min-h-[200px] sm:col-span-2 lg:col-span-3"
        >
          <div className="max-w-md">
            <span className="text-4xl font-extrabold text-[#E65100] block">
              12.5 Ton
            </span>
            <p className="text-sm font-semibold text-gray-800 mt-2">
              Estimasi reduksi emisi karbon ($CO_2$) dari makanan yang berhasil
              diselamatkan.
            </p>
          </div>
          <div className="text-xs font-bold text-gray-700 hover:underline cursor-pointer">
            Baca laporan dampak lingkungan penuh →
          </div>
        </motion.div>
      </div>
    </section>
  );
}
