"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  QrCode,
  Heart,
  Store,
  Navigation,
  Phone,
  Lock,
  LogIn,
  UserPlus,
  ArrowRight,
} from "lucide-react";

export default function DetailWarungClient({ id }: { id: string }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedItemTitle, setSelectedItemTitle] = useState("");

  // Data Dummy Warung Mitra Berdasarkan Parameter ID
  const merchant = {
    id: id || "1",
    name: "Warteg Bahari Tasik",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    address: "Jl. Otista No. 42, Kel. Empangsari, Kec. Tawang, Tasikmalaya",
    distance: "400m dari lokasi Anda",
    rating: 4.8,
    totalReviews: 128,
    availablePortions: 12,
    totalRescued: 430,
    pickupWindow: "19:00 - 21:00 WIB",
    phone: "0812-3456-7890",
    isOpen: true,
    description:
      "Mitra warung makan UMKM tepercaya di pusat Kota Tasikmalaya yang secara konsisten menyajikan masakan khas rumahan hangat, bersih, dan berstandar gizi terverifikasi.",
    todayMenu: [
      {
        title: "Porsi Nasi Lengko & Telur Dadar Komplit",
        portionsLeft: 7,
        type: "Surplus Rescue",
        description:
          "Nasi putih, telur dadar, tahu, tempe, tauge, disiram bumbu kacang khas dan kerupuk.",
      },
      {
        title: "Paket Nasi Orek Tempe & Tumis Buncis",
        portionsLeft: 5,
        type: "Subsidized Prep",
        description:
          "Nasi hangat dengan lauk tempe orek manis pedas dan tumis sayur buncis segar.",
      },
    ],
  };

  const handleOpenAuthModal = (itemTitle?: string) => {
    setSelectedItemTitle(itemTitle || "Voucher Porsi Makanan");
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F5] text-[#0F221E]">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 max-w-7xl mx-auto w-full space-y-8">
        {/* Breadcrumb Back Button */}
        <div>
          <Link
            href="/warung"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0A3A33] hover:underline bg-white px-4 py-2 rounded-full border border-gray-200/80 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#0A3A33]" />
            <span>Kembali ke Daftar Warung</span>
          </Link>
        </div>

        {/* Hero Banner Warung */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-xl grid lg:grid-cols-12">
          <div className="lg:col-span-7 relative h-72 sm:h-96 w-full bg-gray-900">
            <img
              src={merchant.image}
              alt={merchant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span
                className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                  merchant.isOpen
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-600 text-white"
                }`}
              >
                {merchant.isOpen ? "Buka (Menerima Klaim)" : "Tutup"}
              </span>
              <span className="bg-black/70 backdrop-blur-md text-[#E2F163] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Ambil: {merchant.pickupWindow}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Mitra Terverifikasi #WM-042
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A3A33]">
                    {merchant.name}
                  </h1>
                </div>
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2.5 py-1 rounded-xl text-xs font-black border border-amber-200/60 shrink-0">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{merchant.rating}</span>
                  <span className="text-gray-400 font-normal">
                    ({merchant.totalReviews})
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-600 flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-[#0A3A33] shrink-0 mt-0.5" />
                <span>
                  {merchant.address} •{" "}
                  <strong className="text-[#0A3A33]">
                    {merchant.distance}
                  </strong>
                </span>
              </p>

              <p className="text-xs text-gray-500 leading-relaxed font-normal pt-1">
                {merchant.description}
              </p>
            </div>

            {/* Metric Impact Badge */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
              <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-gray-100 text-center">
                <span className="block text-xl font-black text-[#0A3A33]">
                  {merchant.availablePortions} Porsi
                </span>
                <span className="text-[11px] text-gray-500 font-bold">
                  Siap Klaim Hari Ini
                </span>
              </div>
              <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-gray-100 text-center">
                <span className="block text-xl font-black text-[#31103F]">
                  {merchant.totalRescued} Porsi
                </span>
                <span className="text-[11px] text-gray-500 font-bold">
                  Telah Diselamatkan
                </span>
              </div>
            </div>

            {/* Dual CTA Actions: Klaim (Trigger Auth Modal) & Donasi */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOpenAuthModal("Voucher Porsi Makanan")}
                className="bg-[#0A3A33] hover:bg-[#062C27] text-white font-extrabold py-3.5 px-4 rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <QrCode className="w-4 h-4 text-[#E2F163]" />
                <span>Klaim Voucher Porsi</span>
              </motion.button>

              <Link href="/donasi" className="contents">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#E2F163] hover:bg-[#d5e454] text-[#0A3A33] font-extrabold py-3.5 px-4 rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer border border-[#0A3A33]/20"
                >
                  <Heart className="w-4 h-4 text-[#0A3A33] fill-current" />
                  <span>Donasi Warung Ini</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Section Menu Porsi Makanan Tersedia */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-[#0A3A33] flex items-center gap-2">
                <Store className="w-5 h-5 text-[#0A3A33]" />
                Menu Porsi Layak Saji Hari Ini
              </h2>
              <p className="text-xs text-gray-500">
                Disubstitusi penuh oleh Funding Pool Donatur & Kupon Digital
                foodrescue.id
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {merchant.todayMenu.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold bg-[#0A3A33] text-[#E2F163] px-2.5 py-0.5 rounded-full uppercase">
                      {item.type}
                    </span>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md border border-red-200">
                      Tersedia {item.portionsLeft} Porsi
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0A3A33]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-black text-[#0A3A33]">
                    GRATIS{" "}
                    <span className="text-[10px] font-normal text-gray-400">
                      (Tunjukkan Voucher)
                    </span>
                  </span>

                  <button
                    onClick={() => handleOpenAuthModal(item.title)}
                    className="bg-[#0A3A33] hover:bg-[#062C27] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <QrCode className="w-3.5 h-3.5 text-[#E2F163]" />
                    <span>Ambil Kupon</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Peta & Kontak Warung */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <h3 className="text-base font-extrabold text-[#0A3A33] flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[#0A3A33]" />
              Lokasi & Petunjuk Arah Kasir
            </h3>
            <p className="text-xs text-gray-600">{merchant.address}</p>
            <div className="pt-2 flex items-center gap-4 text-xs font-bold text-[#0A3A33]">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {merchant.phone}
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Standar
                Kelayakan Teruji
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-end">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FAF9F5] hover:bg-gray-200/70 border border-gray-200 text-[#0A3A33] font-bold px-6 py-3.5 rounded-2xl text-xs transition-colors text-center flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#0A3A33]" />
              <span>Buka Google Maps</span>
            </a>
          </div>
        </div>
      </main>

      {/* MODAL AUTHENTICATION GATE (Pop up meminta pengguna Login / Daftar) */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-sm text-center space-y-5 shadow-2xl relative border border-gray-100"
            >
              {/* Icon Lock Shield Header */}
              <div className="w-16 h-16 rounded-2xl bg-[#0A3A33] text-[#E2F163] flex items-center justify-center mx-auto shadow-md">
                <Lock className="w-8 h-8 stroke-[2.2]" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A3A33] bg-[#E2F163] px-2.5 py-0.5 rounded-full">
                  Akses Klaim Terkunci
                </span>
                <h3 className="text-base font-extrabold text-[#0A3A33] pt-1 leading-snug">
                  Masuk untuk Mengklaim Voucher
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Silakan <strong>Masuk (Login)</strong> atau{" "}
                  <strong>Daftar Akun</strong> terlebih dahulu untuk menyimpan
                  tiket QR Code{" "}
                  <strong className="text-[#0A3A33]">
                    "{selectedItemTitle}"
                  </strong>
                  .
                </p>
              </div>

              {/* Action Buttons: Login & Register */}
              <div className="space-y-2 pt-1">
                <Link href="/login" className="block">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-[#0A3A33] hover:bg-[#062C27] text-white font-extrabold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <LogIn className="w-4 h-4 text-[#E2F163]" />
                    <span>Masuk Akun Sekarang</span>
                    <ArrowRight className="w-4 h-4 text-[#E2F163]" />
                  </motion.button>
                </Link>

                <Link href="/register" className="block">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-[#FAF9F5] hover:bg-gray-100 text-[#0A3A33] font-bold py-3 rounded-xl text-xs transition-colors border border-gray-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Belum Punya Akun? Daftar</span>
                  </motion.button>
                </Link>
              </div>

              {/* Close Action */}
              <button
                onClick={() => setIsAuthModalOpen(false)}
                className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer pt-1"
              >
                Kembali Nanti
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
