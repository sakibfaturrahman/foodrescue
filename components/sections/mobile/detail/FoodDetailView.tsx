"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Share2,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  QrCode,
  Store,
  Navigation,
  Info,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import MobileBottomNav from "@/components/common/MobileBottomNav";
import ClaimModalSheet from "./ClaimModalSheet";

export default function FoodDetailView({ id }: { id: string }) {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  // Data Dummy Makanan berdasarkan ID
  const foodDetail = {
    id: id || "1",
    title: "Nasi Lengko & Telur Dadar Komplit",
    merchantName: "Warteg Bahari Tasik",
    merchantAddress: "Jl. Otista No. 42, Tasikmalaya",
    distance: "400m dari lokasi Anda",
    rating: 4.8,
    totalReviews: 124,
    type: "surplus" as const, // 'surplus' atau 'subsidized'
    remainingPortions: 4,
    pickupWindow: "19:00 - 21:00 WIB",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    description:
      "Porsi makanan layak saji dalam kondisi hangat dan terbungkus rapi. Berisi nasi putih, telur dadar, tahu, tempe, tauge, disiram bumbu kacang khas dan kerupuk.",
    nutritionHighlights: [
      "Tinggi Protein",
      "Bumbu Kacang Khas",
      "Porsi Kenyang",
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-28">
      {/* Top Floating Action Header */}
      <div className="relative h-72 w-full bg-gray-900">
        <img
          src={foodDetail.image}
          alt={foodDetail.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        {/* Top Floating Buttons */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#0A3A33] shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#0A3A33] shadow-md">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Badge Type Floating */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
          <span
            className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
              foodDetail.type === "surplus"
                ? "bg-emerald-500 text-white"
                : "bg-amber-400 text-[#0A3A33]"
            }`}
          >
            {foodDetail.type === "surplus"
              ? "Surplus Rescue"
              : "Subsidized Prep"}
          </span>
          <span className="bg-black/60 backdrop-blur-md text-[#E2F163] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {foodDetail.pickupWindow}
          </span>
        </div>
      </div>

      {/* Main Content Details */}
      <main className="p-4 space-y-4 max-w-md mx-auto -mt-4 relative z-20">
        {/* Main Info Card */}
        <div className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-md space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-lg font-extrabold text-[#0A3A33] leading-snug">
                {foodDetail.title}
              </h1>
              <p className="text-xs font-bold text-gray-500 mt-0.5 flex items-center gap-1">
                <Store className="w-3.5 h-3.5 text-[#0A3A33]" />
                {foodDetail.merchantName}
              </p>
            </div>
            <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-xl text-xs font-extrabold border border-amber-200/60">
              <Star className="w-4 h-4 fill-current" />
              <span>{foodDetail.rating}</span>
            </div>
          </div>

          {/* Location & Distance Bar */}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-4 h-4 text-[#0A3A33] shrink-0" />
              <span className="truncate">{foodDetail.merchantAddress}</span>
            </div>
            <span className="font-extrabold text-[#0A3A33] shrink-0 bg-gray-100 px-2.5 py-0.5 rounded-full text-[11px]">
              {foodDetail.distance}
            </span>
          </div>

          {/* Remaining Stock Status */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-3 flex items-center justify-between text-xs text-red-800 font-bold">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              Tersedia {foodDetail.remainingPortions} Porsi Hari Ini
            </span>
            <span className="text-[10px] bg-red-100 text-red-900 px-2 py-0.5 rounded-md">
              Terbatas
            </span>
          </div>
        </div>

        {/* Quick Action Navigation & Route */}
        <div className="bg-white rounded-2xl p-3 border border-gray-200/80 shadow-xs flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#0A3A33] text-[#E2F163] flex items-center justify-center font-bold">
              <Navigation className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-[#0A3A33] block">
                Petunjuk Arah Warung
              </span>
              <span className="text-[10px] text-gray-500">
                Buka peta geolokasi GPS
              </span>
            </div>
          </div>
          <button className="bg-gray-100 hover:bg-gray-200 text-[#0A3A33] font-bold px-3 py-1.5 rounded-xl text-[11px] transition-colors">
            Buka Peta
          </button>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs space-y-2">
          <h3 className="font-extrabold text-xs text-[#0A3A33] uppercase tracking-wider flex items-center gap-1">
            <Info className="w-4 h-4 text-[#0A3A33]" /> Detail Porsi Makanan
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            {foodDetail.description}
          </p>

          {/* Highlights */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {foodDetail.nutritionHighlights.map((item, index) => (
              <span
                key={index}
                className="text-[10px] font-bold bg-[#FAF9F5] text-[#0A3A33] border border-gray-200 px-2.5 py-1 rounded-lg flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Banner */}
        <div className="bg-[#E2F163]/20 border border-[#0A3A33]/20 rounded-2xl p-3.5 flex items-center gap-3 text-xs text-[#0A3A33]">
          <ShieldCheck className="w-6 h-6 text-[#0A3A33] shrink-0" />
          <p className="text-[11px] leading-tight font-semibold">
            Porsi terverifikasi standar kelayakan pangan harian dan disubsidi
            penuh oleh Funding Pool Donatur.
          </p>
        </div>
      </main>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-16 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 z-40">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold text-gray-400 block uppercase">
              Harga Porsi
            </span>
            <span className="text-base font-black text-[#0A3A33]">GRATIS</span>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsClaimModalOpen(true)}
            className="flex-1 bg-[#0A3A33] hover:bg-[#062C27] text-white font-extrabold py-3 rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <QrCode className="w-4 h-4 text-[#E2F163]" />
            <span>Klaim Voucher Porsi Ini</span>
          </motion.button>
        </div>
      </div>

      {/* Modal QR Code Klaim */}
      <ClaimModalSheet
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
        title={foodDetail.title}
        merchant={foodDetail.merchantName}
      />

      <MobileBottomNav />
    </div>
  );
}
