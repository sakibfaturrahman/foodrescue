"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ImpactBannerCarousel() {
  return (
    <div className="px-4 py-2 overflow-x-auto no-scrollbar flex gap-3 snap-x">
      {/* Banner 1 */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        className="snap-center shrink-0 w-[280px] bg-[#0A3A33] text-white rounded-2xl p-4 relative overflow-hidden shadow-md flex flex-col justify-between min-h-[130px]"
      >
        <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#E2F163]/20 rounded-full blur-xl pointer-events-none" />
        <div>
          <span className="text-[9px] uppercase font-bold text-[#E2F163] tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Penyelamatkan Pangan
          </span>
          <h3 className="text-sm font-bold mt-1 leading-snug">
            12 Porsi Sisa Saji Warteg Bahari Siap Diselamatkan!
          </h3>
        </div>
        <div className="flex items-center justify-between mt-3 text-xs">
          <span className="text-[10px] text-gray-300">Batas: 20:00 WIB</span>
          <span className="font-extrabold text-[#E2F163] flex items-center gap-1 text-[11px]">
            Klaim Sekarang <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </motion.div>

      {/* Banner 2 */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        className="snap-center shrink-0 w-[280px] bg-[#31103F] text-white rounded-2xl p-4 relative overflow-hidden shadow-md flex flex-col justify-between min-h-[130px]"
      >
        <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#E2F163]/15 rounded-full blur-xl pointer-events-none" />
        <div>
          <span className="text-[9px] uppercase font-bold text-[#E2F163] tracking-wider">
            Satu Aksi Baik
          </span>
          <h3 className="text-sm font-bold mt-1 leading-snug">
            Donasi Rp10.000 Menyelamatkan 1 Porsi Pangan Layak
          </h3>
        </div>
        <div className="flex items-center justify-between mt-3 text-xs">
          <span className="text-[10px] text-gray-300">
            Target ESG Perkotaan
          </span>
          <span className="font-extrabold text-[#E2F163] flex items-center gap-1 text-[11px]">
            Bantu Sekarang <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
