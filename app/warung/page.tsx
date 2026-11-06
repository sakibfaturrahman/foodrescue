"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Store, MapPin, Clock, Star, Search, ArrowRight } from "lucide-react";

export default function WarungWebPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const merchants = [
    {
      id: "1",
      name: "Warteg Bahari Tasik",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      address: "Jl. Otista No. 42, Tasikmalaya",
      distance: "400m dari lokasi Anda",
      rating: 4.8,
      reviews: 128,
      availablePortions: 12,
      pickupWindow: "19:00 - 21:00 WIB",
      isOpen: true,
      menuHighlight: "Nasi Lengko & Telur Dadar",
    },
    {
      id: "2",
      name: "Kedai Barokah Ummi",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      address: "Jl. Siliwangi No. 108, Tasikmalaya",
      distance: "850m dari lokasi Anda",
      rating: 4.9,
      reviews: 95,
      availablePortions: 8,
      pickupWindow: "18:30 - 20:30 WIB",
      isOpen: true,
      menuHighlight: "Paket Nasi Ayam Bakar & Lalapan",
    },
    {
      id: "3",
      name: "Rumah Makan Ampera",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
      address: "Jl. HZ Mustofa No. 15, Tasikmalaya",
      distance: "1.2 km dari lokasi Anda",
      rating: 4.7,
      reviews: 210,
      availablePortions: 0,
      pickupWindow: "20:00 - 21:30 WIB",
      isOpen: false,
      menuHighlight: "Paket Nasi Padang Rendang",
    },
    {
      id: "4",
      name: "Nasi Lengko Pak Hajji",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      address: "Jl. Sutisna Senjaya No. 88, Tasikmalaya",
      distance: "1.5 km dari lokasi Anda",
      rating: 4.6,
      reviews: 74,
      availablePortions: 5,
      pickupWindow: "19:30 - 21:00 WIB",
      isOpen: true,
      menuHighlight: "Nasi Lengko Khas & Tahu Tempe",
    },
  ];

  const filteredMerchants = merchants.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeFilter === "available")
      return matchesSearch && item.availablePortions > 0;
    if (activeFilter === "top_rated")
      return matchesSearch && item.rating >= 4.8;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F5] text-[#0F221E]">
      <Header />

      <main className="flex-1 py-10 px-4 sm:px-6 max-w-7xl mx-auto w-full space-y-8">
        {/* Web Header Banner */}
        <div className="bg-[#0A3A33] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-[#E2F163]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-[#E2F163]/20 text-[#E2F163] px-3.5 py-1 rounded-full text-xs font-bold border border-[#E2F163]/30">
              <Store className="w-3.5 h-3.5" /> Jaringan Warung Mitra UMKM
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Eksplorasi Warung Mitra & Porsi Diselamatkan.
            </h1>
            <p className="text-sm text-gray-200 font-normal leading-relaxed">
              Cari warung makan lokal terdekat yang menyediakan porsi makanan
              gratis layak konsumsi bersubsidi di wilayah Tasikmalaya &
              sekitarnya.
            </p>
          </div>

          <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center text-white min-w-[220px]">
            <span className="block text-4xl font-extrabold text-[#E2F163]">
              48
            </span>
            <span className="text-xs font-semibold text-gray-200 mt-1 block">
              Warung Mitra Aktif Terdaftar
            </span>
          </div>
        </div>

        {/* Web Search & Filter Control Bar */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama warung atau lokasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar">
            {[
              { id: "all", label: "Semua Warung" },
              { id: "available", label: "🟢 Ada Porsi Siap Klaim" },
              { id: "top_rated", label: "⭐ Rating 4.8+" },
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => setActiveFilter(chip.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  activeFilter === chip.id
                    ? "bg-[#0A3A33] text-[#E2F163] shadow-sm"
                    : "bg-[#FAF9F5] text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Web Grid Cards Warung Mitra dengan Next Link Navigasi Dinamis */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMerchants.map((merchant) => (
            <motion.div
              key={merchant.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <Link
                href={`/warung/${merchant.id}`}
                className="block flex-1 cursor-pointer"
              >
                <div>
                  {/* Thumbnail Header Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={merchant.image}
                      alt={merchant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className={`absolute top-3 left-3 text-xs font-extrabold px-3 py-1 rounded-full ${
                        merchant.isOpen
                          ? "bg-emerald-500 text-white"
                          : "bg-gray-600 text-white"
                      }`}
                    >
                      {merchant.isOpen ? "Buka (Menerima Klaim)" : "Tutup"}
                    </span>
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-[#E2F163] text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {merchant.pickupWindow}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-extrabold text-base text-[#0A3A33] leading-snug group-hover:text-[#062C27]">
                        {merchant.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2.5 py-1 rounded-xl text-xs font-black border border-amber-200/60 shrink-0">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{merchant.rating}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                      <span className="truncate">{merchant.address}</span>
                    </p>

                    <div className="bg-[#FAF9F5] p-3 rounded-xl border border-gray-100 text-xs">
                      <span className="text-gray-400 text-[11px] block font-semibold">
                        Menu Utama Hari Ini:
                      </span>
                      <span className="font-bold text-[#0A3A33]">
                        {merchant.menuHighlight}
                      </span>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-gray-100 text-xs">
                      <span
                        className={`font-extrabold px-3 py-1 rounded-lg ${
                          merchant.availablePortions > 0
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-red-50 text-red-600 border border-red-200"
                        }`}
                      >
                        {merchant.availablePortions > 0
                          ? `${merchant.availablePortions} Porsi Siap Klaim`
                          : "Porsi Hari Ini Habis"}
                      </span>
                      <span className="text-[11px] font-bold text-gray-400">
                        {merchant.distance}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Action Button Link */}
              <div className="p-6 pt-0">
                <Link href={`/warung/${merchant.id}`} className="block">
                  <button className="w-full bg-[#0A3A33] hover:bg-[#062C27] text-white text-xs font-extrabold py-3 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                    <span>Lihat Detail Porsi Warung</span>
                    <ArrowRight className="w-4 h-4 text-[#E2F163]" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
