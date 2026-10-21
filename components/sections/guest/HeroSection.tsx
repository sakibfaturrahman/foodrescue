"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  MapPin,
  Heart,
  QrCode,
  Store,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Wifi,
  Battery,
  Signal,
  Flame,
  Check,
} from "lucide-react";

export default function HeroSection() {
  const [portionCount, setPortionCount] = useState(12);
  const [showToast, setShowToast] = useState(false);

  // Simulasi aktivitas transaksi real-time pada mockup
  useEffect(() => {
    const interval = setInterval(() => {
      setPortionCount((prev) => (prev >= 15 ? 12 : prev + 1));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Kolom Kiri: Headline & Call to Actions */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Headline Utama */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A3A33] leading-[1.15]">
            Berbagi makanan layak, <br />
            sejahterakan warung lokal.
          </h1>

          {/* Deskripsi */}
          <p className="text-base sm:text-lg text-gray-600 max-w-xl font-medium leading-relaxed">
            foodrescue.id menghubungkan donatur, warung makan UMKM, dan
            masyarakat yang membutuhkan dalam satu peta aksi nyata berbasis
            kupon digital transparan.
          </p>

          {/* Dual Action Buttons dengan Micro-Animations */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Button 1: Donatur (Mulai Berdonasi) */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative bg-[#0A3A33] text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#062C27] transition-colors shadow-md flex items-center justify-center gap-2 group cursor-pointer overflow-hidden"
            >
              {/* Shimmer Light Sweeping Effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
              />

              {/* Heart Pulse Icon */}
              <motion.div
                animate={{ scale: [1, 1.25, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-[#E2F163] fill-current" />
              </motion.div>

              <span>Mulai Berdonasi</span>

              {/* Arrow Slide Icon */}
              <motion.div className="group-hover:translate-x-1.5 transition-transform duration-200">
                <ArrowRight className="w-4 h-4 text-[#E2F163]" />
              </motion.div>
            </motion.button>

            {/* Button 2: Penerima / Warung (Cari Warung & Klaim) */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative bg-white text-[#0A3A33] border-2 border-[#0A3A33] font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#FAF9F5] hover:border-[#062C27] transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-sm overflow-hidden"
            >
              {/* Animated MapPin Jump Effect */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <MapPin className="w-4 h-4 text-[#0A3A33] group-hover:text-[#062C27] transition-colors" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E2F163] opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </motion.div>

              <span>Cari Warung & Klaim</span>
            </motion.button>
          </div>

          {/* Social Proof Bar */}
          <div className="pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-4 text-left">
            <div>
              <span className="block text-2xl font-extrabold text-[#0A3A33]">
                1,250+
              </span>
              <span className="text-xs text-gray-500 font-semibold">
                porsi tersalurkan
              </span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-[#0A3A33]">
                48
              </span>
              <span className="text-xs text-gray-500 font-semibold">
                warung mitra aktif
              </span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-[#0A3A33]">
                100%
              </span>
              <span className="text-xs text-gray-500 font-semibold">
                transparansi dana
              </span>
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan: Sleek Modern Smartphone Frame dengan Elemen Interaktif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-6 flex justify-center relative py-4"
        >
          {/* Ambient Lighting Behind Phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 bg-[#E2F163]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-2 right-12 w-60 h-60 bg-[#31103F]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Ultra-Slim Modern Smartphone Chassis */}
          <motion.div
            whileHover={{ y: -6, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-[280px] sm:w-[300px] h-[580px] bg-[#0A3A33] rounded-[2.8rem] p-2 shadow-2xl border-[3px] border-[#062C27] ring-1 ring-black/10 flex flex-col justify-between"
          >
            {/* Dynamic Island Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#062C27] rounded-full z-30 flex items-center justify-end px-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-black/70" />
            </div>

            {/* High-Aspect Screen Viewport */}
            <div className="relative w-full h-full bg-[#FAF9F5] rounded-[2.4rem] overflow-hidden pt-6 pb-4 px-3.5 text-[#0F221E] shadow-inner border border-gray-200/80 flex flex-col justify-between">
              <div>
                {/* Mobile Status Bar */}
                <div className="flex justify-between items-center px-2 text-[10px] font-bold text-gray-500 mb-3 pt-1">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* App Navigation Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200/80 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-sm text-[#0A3A33]">
                      foodrescue
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163]" />
                  </div>
                  <span className="text-[10px] font-bold bg-[#0A3A33] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#E2F163]" /> PWA Active
                  </span>
                </div>

                {/* Target Cards Stack dengan Animasi Interaktif */}
                <div className="space-y-2.5 relative">
                  {/* Target 1: Beneficiary Voucher + Laser Scanning Line Animation */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#0A3A33] text-white rounded-2xl p-3 shadow-md border border-[#0A3A33] relative overflow-hidden group cursor-pointer"
                  >
                    {/* Laser Scanner Bar Animation */}
                    <motion.div
                      animate={{ y: [0, 80, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E2F163] to-transparent shadow-[0_0_8px_#E2F163] pointer-events-none z-10"
                    />

                    <div className="flex items-center justify-between mb-1.5 relative z-20">
                      <span className="text-[9px] uppercase font-bold text-[#E2F163] tracking-wider flex items-center gap-1">
                        <QrCode className="w-3 h-3" /> Penerima Manfaat
                      </span>
                      <span className="text-[9px] bg-white/10 text-white px-2 py-0.5 rounded-full font-semibold">
                        Klaim Digital
                      </span>
                    </div>
                    <h2 className="text-xs font-bold leading-snug relative z-20">
                      Voucher Makan Siang Gratis
                    </h2>
                    <p className="text-[10px] text-gray-300 mt-0.5 line-clamp-1 relative z-20">
                      Tunjukkan QR Code ke Warteg Bahari
                    </p>

                    <div className="mt-2 bg-[#E2F163] text-[#0A3A33] text-[10px] font-extrabold py-1.5 rounded-xl text-center shadow-sm flex items-center justify-center gap-1 relative z-20 group-hover:bg-[#d5e454] transition-colors">
                      <QrCode className="w-3 h-3" />
                      <span>Tampilkan QR Klaim</span>
                    </div>
                  </motion.div>

                  {/* Target 2: Merchant Payout Console + Live Counter Animation */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200 cursor-pointer relative"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] uppercase font-bold text-[#0A3A33] tracking-wider flex items-center gap-1">
                        <Store className="w-3 h-3" /> Warung UMKM
                      </span>
                      <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Cair Instant
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <motion.h2
                            key={portionCount}
                            initial={{ scale: 1.2, color: "#059669" }}
                            animate={{ scale: 1, color: "#0A3A33" }}
                            transition={{ duration: 0.3 }}
                            className="text-xs font-bold"
                          >
                            {portionCount} Porsi
                          </motion.h2>
                          <span className="text-xs font-bold text-[#0A3A33]">
                            Diselamatkan
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-500">
                          Subsidi otomatis cair ke rekening
                        </p>
                      </div>

                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                        className="w-7 h-7 rounded-lg bg-[#0A3A33] text-[#E2F163] flex items-center justify-center shrink-0 shadow-sm"
                      >
                        <TrendingUp className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Target 3: Donor ESG Card + Glowing Pulse Indicator */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#31103F] text-white rounded-2xl p-3 shadow-sm border border-purple-900/40 relative overflow-hidden cursor-pointer"
                  >
                    <motion.div
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -right-4 -bottom-4 w-16 h-16 bg-[#E2F163]/20 rounded-full blur-xl pointer-events-none"
                    />

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] uppercase font-bold text-[#E2F163] tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Donatur & CSR
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E2F163]" />
                    </div>
                    <h2 className="text-xs font-bold">Laporan Dampak ESG</h2>
                    <p className="text-[10px] text-gray-300 mt-0.5 line-clamp-1">
                      15.2 kg makanan & 28 kg CO₂ dicegah
                    </p>
                  </motion.div>

                  {/* Floating Toast Notification Simulation */}
                  {showToast && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bottom-1 inset-x-1 bg-[#0A3A33] text-white p-2 rounded-xl shadow-xl border border-[#E2F163]/40 flex items-center gap-2 z-30"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#E2F163] text-[#0A3A33] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="text-[9px]">
                        <span className="font-bold block text-[#E2F163]">
                          Voucher Baru Terpakai!
                        </span>
                        <span className="text-gray-200">
                          Warteg Bahari • 1 Porsi diklaim
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="flex justify-center pt-1">
                <span className="w-20 h-1 bg-gray-300 rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
