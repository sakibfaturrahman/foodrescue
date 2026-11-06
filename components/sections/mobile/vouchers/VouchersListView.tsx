"use client";

import { useState } from "react";
import { QrCode, MapPin, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import MobileHeader from "@/components/common/MobileHeader";
import MobileBottomNav from "@/components/common/MobileBottomNav";
import VoucherCard, { VoucherProps } from "./VoucherCard";
import ClaimModalSheet from "@/components/sections/mobile/detail/ClaimModalSheet";

export default function VouchersListView() {
  const [activeTab, setActiveTab] = useState<"today" | "all">("today");
  const [selectedVoucher, setSelectedVoucher] = useState<{
    title: string;
    merchant: string;
  } | null>(null);

  // Data Dummy Voucher
  const vouchers: VoucherProps[] = [
    {
      id: "v1",
      code: "VCH-BHRI-882",
      title: "Porsi Nasi Lengko & Telur Dadar",
      merchantName: "Warteg Bahari Tasik",
      address: "Jl. Otista No. 42",
      distance: "400m terdekat",
      validUntil: "Hari ini, 20:00 WIB",
      isToday: true,
      status: "active",
      onOpenQR: () => {},
    },
    {
      id: "v2",
      code: "VCH-BRKH-104",
      title: "Paket Nasi Ayam Bakar & Lalapan",
      merchantName: "Kedai Barokah Ummi",
      address: "Jl. Siliwangi No. 108",
      distance: "850m",
      validUntil: "Hari ini, 20:30 WIB",
      isToday: true,
      status: "active",
      onOpenQR: () => {},
    },
    {
      id: "v3",
      code: "VCH-AMPR-012",
      title: "Porsi Nasi Padang Rendang",
      merchantName: "Rumah Makan Ampera",
      address: "Jl. HZ Mustofa No. 15",
      distance: "1.2 km",
      validUntil: "Kemarin, 21:00 WIB",
      isToday: false,
      status: "used",
      onOpenQR: () => {},
    },
  ];

  const filteredVouchers = vouchers.filter((v) =>
    activeTab === "today" ? v.isToday && v.status === "active" : true
  );

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-24">
      <MobileHeader />

      <main className="p-4 space-y-4">
        {/* Title Bar */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-[#0A3A33] flex items-center gap-1.5">
              <QrCode className="w-5 h-5 text-[#0A3A33]" />
              Voucher Klaim Saya
            </h2>
            <p className="text-xs text-gray-500">
              Urutan berdasarkan lokasi warung terdekat
            </p>
          </div>
          <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow-xs">
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tab Selector Filter */}
        <div className="bg-gray-200/80 p-1 rounded-xl flex text-xs font-bold">
          <button
            onClick={() => setActiveTab("today")}
            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === "today"
                ? "bg-[#0A3A33] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            🔥 Berlaku Hari Ini ({vouchers.filter((v) => v.isToday && v.status === "active").length})
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-[#0A3A33] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Riwayat Semua ({vouchers.length})
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-[#E2F163]/20 border border-[#0A3A33]/15 rounded-2xl p-3 flex items-start gap-2 text-xs text-[#0A3A33]">
          <Sparkles className="w-4 h-4 text-[#0A3A33] shrink-0 mt-0.5" />
          <p className="text-[11px] leading-tight font-medium">
            Tunjukkan kode QR ke kasir warung mitra saat mengambil porsi makanan. Pastikan pengambilan dilakukan sebelum jam batas berakhir.
          </p>
        </div>

        {/* List Vouchers */}
        <div className="space-y-3">
          {filteredVouchers.length > 0 ? (
            filteredVouchers.map((v) => (
              <VoucherCard
                key={v.id}
                {...v}
                onOpenQR={() =>
                  setSelectedVoucher({
                    title: v.title,
                    merchant: v.merchantName,
                  })
                }
              />
            ))
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 space-y-2">
              <AlertCircle className="w-8 h-8 text-gray-400 mx-auto" />
              <h4 className="text-xs font-bold text-gray-700">Tidak ada voucher berlaku hari ini</h4>
              <p className="text-[11px] text-gray-500">
                Silakan cari warung mitra di menu Eksplor untuk mengklaim porsi gratis baru.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Modal QR Code */}
      <ClaimModalSheet
        isOpen={!!selectedVoucher}
        onClose={() => setSelectedVoucher(null)}
        title={selectedVoucher?.title || ""}
        merchant={selectedVoucher?.merchant || ""}
      />

      <MobileBottomNav />
    </div>
  );
}