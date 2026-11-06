"use client";

import { useState } from "react";
import MobileHeader from "@/components/common/MobileHeader";
import MobileBottomNav from "@/components/common/MobileBottomNav";
import LocationSearchBar from "@/components/sections/mobile/home/LocationSearchBar";
import ImpactBannerCarousel from "@/components/sections/mobile/home/ImpactBannerCarousel";
import CategoryFilterBar from "@/components/sections/mobile/home/CategoryFilterBar";
import FoodRescueCard from "@/components/sections/mobile/home/FoodRescueCard";
import ClaimModalSheet from "@/components/sections/mobile/detail/ClaimModalSheet";

export default function MobileHomeView() {
  const [selectedVoucher, setSelectedVoucher] = useState<{
    title: string;
    merchant: string;
  } | null>(null);

  const foodItems = [
    {
      id: "1", // Ubah dari 1 (number) menjadi "1" (string)
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      title: "Nasi Lengko & Telur Dadar",
      merchant: "Warteg Bahari Tasik",
      distance: "400m",
      type: "surplus" as const,
      remainingPortions: 4,
      pickupTime: "19:00 - 21:00 WIB",
    },
    {
      id: "2", // Ubah dari 2 (number) menjadi "2" (string)
      image:
        "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80",
      title: "Paket Nasi Ayam Bakar & Lalapan",
      merchant: "Kedai Barokah Ummi",
      distance: "850m",
      type: "subsidized" as const,
      remainingPortions: 8,
      pickupTime: "18:30 - 20:30 WIB",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-24">
      {/* Header Mobile */}
      <MobileHeader />

      {/* Konten Utama Feed */}
      <main className="space-y-3">
        <LocationSearchBar />
        <ImpactBannerCarousel />
        <CategoryFilterBar />

        {/* Grid Kartu Makanan */}
        <section className="px-4 py-2 space-y-3">
          <h3 className="font-bold text-xs text-[#0A3A33] uppercase tracking-wider">
            Porsi Makanan Siap Diselamatkan
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {foodItems.map((item) => (
              <FoodRescueCard
                key={item.id}
                {...item}
                onClaim={() =>
                  setSelectedVoucher({
                    title: item.title,
                    merchant: item.merchant,
                  })
                }
              />
            ))}
          </div>
        </section>
      </main>

      {/* Modal QR Code Klaim Voucher */}
      <ClaimModalSheet
        isOpen={!!selectedVoucher}
        onClose={() => setSelectedVoucher(null)}
        title={selectedVoucher?.title || ""}
        merchant={selectedVoucher?.merchant || ""}
      />

      {/* Bottom Navigation Fixed */}
      <MobileBottomNav />
    </div>
  );
}
