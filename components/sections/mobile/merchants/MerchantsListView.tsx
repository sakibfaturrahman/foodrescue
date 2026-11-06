"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, Store } from "lucide-react";
import MobileHeader from "@/components/common/MobileHeader";
import MobileBottomNav from "@/components/common/MobileBottomNav";
import MerchantCard from "./MerchantCard";

export default function MerchantsListView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Data Dummy Warung Mitra
  const merchants = [
    {
      id: "1",
      name: "Warteg Bahari Tasik",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      address: "Jl. Otista No. 42, Tasikmalaya",
      distance: "400m",
      rating: 4.8,
      availablePortions: 12,
      pickupWindow: "19:00 - 21:00 WIB",
      isOpen: true,
    },
    {
      id: "2",
      name: "Kedai Barokah Ummi",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      address: "Jl. Siliwangi No. 108, Tasikmalaya",
      distance: "850m",
      rating: 4.9,
      availablePortions: 8,
      pickupWindow: "18:30 - 20:30 WIB",
      isOpen: true,
    },
    {
      id: "3",
      name: "Rumah Makan Ampera",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
      address: "Jl. HZ Mustofa No. 15, Tasikmalaya",
      distance: "1.2 km",
      rating: 4.7,
      availablePortions: 0,
      pickupWindow: "20:00 - 21:30 WIB",
      isOpen: false,
    },
    {
      id: "4",
      name: "Nasi Lengko Pak Hajji",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      address: "Jl. Sutisna Senjaya No. 88, Tasikmalaya",
      distance: "1.5 km",
      rating: 4.6,
      availablePortions: 5,
      pickupWindow: "19:30 - 21:00 WIB",
      isOpen: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-24">
      <MobileHeader />

      <main className="p-4 space-y-4">
        {/* Title Bar */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-[#0A3A33] flex items-center gap-1.5">
              <Store className="w-5 h-5 text-[#0A3A33]" />
              Warung Mitra Terdekat
            </h2>
            <p className="text-xs text-gray-500">
              Mitra penyedia porsi makanan layak diselamatkan
            </p>
          </div>
          <span className="text-[11px] font-bold bg-[#E2F163] text-[#0A3A33] px-2.5 py-1 rounded-full border border-[#0A3A33]/10">
            {merchants.length} Mitra
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2.5 flex items-center gap-2 shadow-sm focus-within:border-[#0A3A33]">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Cari nama warung atau lokasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-medium bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-[#0A3A33] text-white flex items-center justify-center shrink-0 shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-[#E2F163]" />
          </button>
        </div>

        {/* Filter Quick Chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: "all", label: "Semua" },
            { id: "available", label: "🟢 Ada Porsi" },
            { id: "nearest", label: "📍 Terdekat (<1km)" },
            { id: "top_rated", label: "⭐ Rating 4.8+" },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setActiveFilter(chip.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                activeFilter === chip.id
                  ? "bg-[#0A3A33] text-white shadow-sm"
                  : "bg-gray-200/70 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* List Warung Cards */}
        <div className="space-y-3">
          {merchants.map((merchant) => (
            <MerchantCard
              key={merchant.id}
              {...merchant}
              onSelect={() => {
                // Nantinya diarahkan ke halaman detail warung
                console.log("Selected merchant:", merchant.id);
              }}
            />
          ))}
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
}
