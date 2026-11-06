"use client";

import { useState } from "react";
import {
  Heart,
  Store,
  Sparkles,
  ShieldCheck,
  Check,
  ArrowLeft,
  QrCode,
  UserCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MobileBottomNav from "@/components/common/MobileBottomNav";

export default function DonateView() {
  const [targetType, setTargetType] = useState<"pool" | "outlet">("pool");
  const [selectedOutlet, setSelectedOutlet] = useState("Warteg Bahari Tasik");
  const [amount, setAmount] = useState<number>(30000); // Default 3 Porsi
  const [donorName, setDonorName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("qris");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const quickAmounts = [
    { label: "1 Porsi", value: 10000 },
    { label: "3 Porsi", value: 30000 },
    { label: "5 Porsi", value: 50000 },
    { label: "10 Porsi", value: 100000 },
  ];

  const outlets = [
    "Warteg Bahari Tasik",
    "Kedai Barokah Ummi",
    "Rumah Makan Ampera",
    "Nasi Lengko Pak Hajji",
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-28">
      {/* Top Bar Header */}
      <div className="sticky top-0 z-40 bg-[#0A3A33] text-white px-4 py-3 flex items-center justify-between shadow-md">
        <Link href="/" className="flex items-center gap-2 text-[#E2F163]">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xs font-bold text-white">Kembali</span>
        </Link>
        <span className="text-xs font-extrabold tracking-wider text-white">
          FOODRESCUE DONATE
        </span>
        <div className="w-5" />
      </div>

      <main className="p-4 space-y-4 max-w-md mx-auto">
        {/* Banner Hero Mini */}
        <div className="bg-[#0A3A33] text-white rounded-3xl p-5 shadow-lg relative overflow-hidden space-y-2">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#E2F163]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="inline-flex items-center gap-1.5 bg-[#E2F163]/20 text-[#E2F163] px-3 py-1 rounded-full text-[10px] font-bold border border-[#E2F163]/30">
            <Heart className="w-3 h-3 fill-current" />
            <span>100% Penyaluran Transparan</span>
          </div>
          <h2 className="text-base font-extrabold leading-snug">
            Bantu Subsidi Porsi Makanan Layak Saji Hari Ini
          </h2>
          <p className="text-xs text-gray-300 leading-relaxed">
            Setiap Rp10.000 langsung mengganti biaya modal 1 porsi makanan di warung mitra untuk mahasiswa & masyarakat rentan.
          </p>
        </div>

        {/* Form Utama Donasi */}
        <form onSubmit={handleDonate} className="space-y-4">
          {/* Target Penyaluran */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs space-y-3">
            <label className="text-xs font-extrabold text-[#0A3A33] uppercase tracking-wider block">
              1. Pilih Target Penyaluran
            </label>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTargetType("pool")}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  targetType === "pool"
                    ? "bg-[#0A3A33] text-white border-[#0A3A33] shadow-xs"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                <Sparkles className={`w-4 h-4 mb-1 ${targetType === "pool" ? "text-[#E2F163]" : "text-[#0A3A33]"}`} />
                <span className="text-xs font-bold block">Penyaluran Otomatis</span>
                <span className="text-[10px] opacity-80 block">Disalurkan ke warung paling membutuhkan</span>
              </button>

              <button
                type="button"
                onClick={() => setTargetType("outlet")}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  targetType === "outlet"
                    ? "bg-[#0A3A33] text-white border-[#0A3A33] shadow-xs"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                <Store className={`w-4 h-4 mb-1 ${targetType === "outlet" ? "text-[#E2F163]" : "text-[#0A3A33]"}`} />
                <span className="text-xs font-bold block">Pilih Warung Spesifik</span>
                <span className="text-[10px] opacity-80 block">Donasi khusus untuk outlet pilihan</span>
              </button>
            </div>

            {targetType === "outlet" && (
              <div className="pt-2">
                <select
                  value={selectedOutlet}
                  onChange={(e) => setSelectedOutlet(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none"
                >
                  {outlets.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Nominal Donasi */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs space-y-3">
            <label className="text-xs font-extrabold text-[#0A3A33] uppercase tracking-wider block">
              2. Nominal Porsi Donasi
            </label>

            <div className="grid grid-cols-2 gap-2">
              {quickAmounts.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setAmount(item.value)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    amount === item.value
                      ? "bg-[#0A3A33] text-[#E2F163] border-[#0A3A33] font-extrabold shadow-xs"
                      : "bg-gray-50 text-gray-800 border-gray-200 font-bold"
                  }`}
                >
                  <span className="text-xs block">Rp {item.value.toLocaleString("id-ID")}</span>
                  <span className="text-[10px] opacity-75 block font-medium">({item.label})</span>
                </button>
              ))}
            </div>

            <div className="space-y-1 pt-1">
              <span className="text-[11px] font-bold text-gray-500 block">Atau Nominal Lain (Rp):</span>
              <input
                type="number"
                value={amount || ""}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Masukkan nominal donasi..."
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
              />
            </div>
          </div>

          {/* Identitas Donatur & Pesan */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs space-y-3">
            <label className="text-xs font-extrabold text-[#0A3A33] uppercase tracking-wider block">
              3. Identitas & Pesan Kebaikan
            </label>

            {!isAnonymous && (
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-gray-700 block">Nama Anda</span>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0A3A33]"
                />
              </div>
            )}

            {/* Checkbox Sembunyikan Nama (Ala Saweria) */}
            <label className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-4 h-4 accent-[#0A3A33] rounded"
              />
              <span className="text-xs font-bold text-[#0A3A33] flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" /> Donasi sebagai Hamba Allah (Anonim)
              </span>
            </label>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-gray-700 block">Pesan Dukungan (Opsional)</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis pesan semangat untuk warung atau penerima porsi..."
                rows={2}
                className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0A3A33]"
              />
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs space-y-2">
            <label className="text-xs font-extrabold text-[#0A3A33] uppercase tracking-wider block">
              4. Metode Pembayaran Instant
            </label>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
              {["qris", "gopay", "transfer"].map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentMethod(method)}
                  className={`py-2 rounded-xl border uppercase transition-all cursor-pointer ${
                    paymentMethod === method
                      ? "bg-[#0A3A33] text-[#E2F163] border-[#0A3A33]"
                      : "bg-gray-50 text-gray-700 border-gray-200"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Action Submit */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#0A3A33] hover:bg-[#062C27] text-white font-extrabold py-3.5 rounded-2xl text-xs transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 text-[#E2F163] fill-current" />
            <span>Kirim Donasi Rp {amount.toLocaleString("id-ID")} Now</span>
          </motion.button>
        </form>
      </main>

      {/* Modal Sukses Donasi */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 w-full max-w-sm text-center space-y-4 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-[#0A3A33]">
                  Donasi Berhasil Disalurkan!
                </h3>
                <p className="text-xs text-gray-600">
                  Terima kasih, <strong className="text-[#0A3A33]">{isAnonymous ? "Hamba Allah" : donorName || "Donatur"}</strong>! Donasi Anda sebesar <strong className="text-[#0A3A33]">Rp {amount.toLocaleString("id-ID")}</strong> telah masuk ke ekosistem foodrescue.id.
                </p>
              </div>

              <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-gray-200 text-left text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-500">Jumlah Porsi Disubstitusi:</span>
                  <span className="font-bold text-[#0A3A33]">{Math.floor(amount / 10000)} Porsi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Target Outlet:</span>
                  <span className="font-bold text-[#0A3A33]">{targetType === "pool" ? "Penyaluran Otomatis" : selectedOutlet}</span>
                </div>
              </div>

              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full bg-[#0A3A33] text-white font-bold py-2.5 rounded-xl text-xs hover:bg-[#062C27] transition-colors cursor-pointer"
              >
                Kembali ke Beranda
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <MobileBottomNav />
    </div>
  );
}