"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {
  Heart,
  Store,
  Sparkles,
  ShieldCheck,
  Check,
  UserCheck,
  ArrowRight,
  QrCode,
  CreditCard,
  Building2,
} from "lucide-react";

export default function DonasiWebPage() {
  const [targetType, setTargetType] = useState<"pool" | "outlet">("pool");
  const [selectedOutlet, setSelectedOutlet] = useState("Warteg Bahari Tasik");
  const [amount, setAmount] = useState<number>(30000);
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
    { label: "25 Porsi", value: 250000 },
    { label: "50 Porsi", value: 500000 },
  ];

  const outlets = [
    "Warteg Bahari Tasik (Jl. Otista)",
    "Kedai Barokah Ummi (Jl. Siliwangi)",
    "Rumah Makan Ampera (Jl. HZ Mustofa)",
    "Nasi Lengko Pak Hajji (Jl. Sutisna Senjaya)",
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F5] text-[#0F221E]">
      <Header />

      <main className="flex-1 py-10 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Context & Realtime Impact Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A3A33] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#E2F163]/20 rounded-full blur-3xl pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 bg-[#E2F163]/20 text-[#E2F163] px-3.5 py-1 rounded-full text-xs font-bold border border-[#E2F163]/30 mb-4">
                <Heart className="w-3.5 h-3.5 fill-current" />
                Satu Aksi, Sejuta Manfaat
              </span>

              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Donasi Porsi Makanan Layak Saji Instant.
              </h1>

              <p className="text-sm text-gray-200 mt-3 leading-relaxed font-normal">
                Setiap donasi Rp10.000 disalurkan 100% transparan untuk
                mengganti biaya modal warung makan UMKM mitra, sehingga porsi
                sisa saji dapat dinikmati gratis oleh mahasiswa rantau dan
                pekerja harian.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-xs">
                <div className="flex items-center gap-3 text-gray-200">
                  <ShieldCheck className="w-5 h-5 text-[#E2F163] shrink-0" />
                  <span>
                    Pencatatan donasi real-time dengan audit transparansi
                    public.
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Sparkles className="w-5 h-5 text-[#E2F163] shrink-0" />
                  <span>
                    Laporan jejak karbon (CO₂ saved) dikirim ke email donatur.
                  </span>
                </div>
              </div>
            </div>

            {/* Live Counter Impact Box */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-3">
              <h3 className="text-sm font-extrabold text-[#0A3A33] uppercase tracking-wider">
                Dampak Donasi Hari Ini
              </h3>
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-gray-100">
                  <span className="block text-2xl font-black text-[#0A3A33]">
                    1,250 Porsi
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">
                    Telah Tersalurkan
                  </span>
                </div>
                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-gray-100">
                  <span className="block text-2xl font-black text-[#31103F]">
                    48 Warung
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">
                    Terbantu Modal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Web Interactive Donation Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleDonate}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xl space-y-6"
            >
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A3A33]">
                  Formulir Donasi Instant
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Pilih skema donasi, nominal porsi, dan salurkan langsung.
                </p>
              </div>

              {/* 1. Target Penyaluran */}
              <div className="space-y-3">
                <label className="text-xs font-extrabold text-[#0A3A33] uppercase tracking-wider block">
                  1. Target Penyaluran Donasi
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTargetType("pool")}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      targetType === "pool"
                        ? "bg-[#0A3A33] text-white border-[#0A3A33] shadow-md"
                        : "bg-[#FAF9F5] text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Sparkles
                      className={`w-5 h-5 mb-2 ${
                        targetType === "pool"
                          ? "text-[#E2F163]"
                          : "text-[#0A3A33]"
                      }`}
                    />
                    <span className="text-sm font-bold block">
                      Penyaluran Otomatis
                    </span>
                    <span className="text-xs opacity-80 block mt-0.5">
                      Sistem mengalokasikan ke warung yang paling membutuhkan
                      porsi
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTargetType("outlet")}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      targetType === "outlet"
                        ? "bg-[#0A3A33] text-white border-[#0A3A33] shadow-md"
                        : "bg-[#FAF9F5] text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Store
                      className={`w-5 h-5 mb-2 ${
                        targetType === "outlet"
                          ? "text-[#E2F163]"
                          : "text-[#0A3A33]"
                      }`}
                    />
                    <span className="text-sm font-bold block">
                      Pilih Warung Spesifik
                    </span>
                    <span className="text-xs opacity-80 block mt-0.5">
                      Donasi Anda disalurkan langsung ke warung pilihan
                    </span>
                  </button>
                </div>

                {targetType === "outlet" && (
                  <div className="pt-2">
                    <select
                      value={selectedOutlet}
                      onChange={(e) => setSelectedOutlet(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
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

              {/* 2. Nominal Donasi */}
              <div className="space-y-3">
                <label className="text-xs font-extrabold text-[#0A3A33] uppercase tracking-wider block">
                  2. Pilih Nominal Porsi
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {quickAmounts.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setAmount(item.value)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        amount === item.value
                          ? "bg-[#0A3A33] text-[#E2F163] border-[#0A3A33] font-extrabold shadow-sm"
                          : "bg-[#FAF9F5] text-gray-800 border-gray-200 font-bold hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-sm block">
                        Rp {item.value.toLocaleString("id-ID")}
                      </span>
                      <span className="text-[11px] opacity-75 block font-medium">
                        ({item.label})
                      </span>
                    </button>
                  ))}
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-xs font-bold text-gray-600 block">
                    Atau Masukkan Nominal Kustom (Rp):
                  </span>
                  <input
                    type="number"
                    value={amount || ""}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="Contoh: 150000"
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-gray-200 rounded-xl text-sm font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
                  />
                </div>
              </div>

              {/* 3. Identitas & Anonim (Ala Saweria) */}
              <div className="space-y-3">
                <label className="text-xs font-extrabold text-[#0A3A33] uppercase tracking-wider block">
                  3. Identitas & Pesan Dukungan
                </label>

                {!isAnonymous && (
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-gray-700 block">
                      Nama Anda
                    </span>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Masukkan nama Anda..."
                      className="w-full px-4 py-3 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0A3A33]"
                    />
                  </div>
                )}

                <label className="flex items-center gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-gray-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 accent-[#0A3A33] rounded"
                  />
                  <span className="text-xs font-bold text-[#0A3A33] flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4" /> Sembunyikan Nama (Kirim
                    sebagai Hamba Allah)
                  </span>
                </label>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-700 block">
                    Pesan Dukungan Hangat (Opsional)
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan pesan doa atau ucapan semangat..."
                    rows={3}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0A3A33]"
                  />
                </div>
              </div>

              {/* 4. Metode Pembayaran Instant */}
              <div className="space-y-3">
                <label className="text-xs font-extrabold text-[#0A3A33] uppercase tracking-wider block">
                  4. Metode Pembayaran
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "qris", label: "QRIS", icon: QrCode },
                    { id: "gopay", label: "E-Wallet", icon: CreditCard },
                    { id: "transfer", label: "Bank Transfer", icon: Building2 },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPaymentMethod(item.id)}
                        className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          paymentMethod === item.id
                            ? "bg-[#0A3A33] text-[#E2F163] border-[#0A3A33] font-bold shadow-sm"
                            : "bg-[#FAF9F5] text-gray-700 border-gray-200 hover:bg-gray-100 font-semibold"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-xs">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Submit */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0A3A33] hover:bg-[#062C27] text-white font-extrabold py-4 rounded-full text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#E2F163] fill-current" />
                <span>
                  Salurkan Donasi Rp {amount.toLocaleString("id-ID")} Sekarang
                </span>
                <ArrowRight className="w-4 h-4 text-[#E2F163]" />
              </motion.button>
            </form>
          </div>
        </div>
      </main>

      {/* Modal Success Donasi */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 w-full max-w-md text-center space-y-5 shadow-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-[#0A3A33]">
                  Donasi Berhasil Disalurkan!
                </h3>
                <p className="text-xs text-gray-600">
                  Terima kasih,{" "}
                  <strong className="text-[#0A3A33]">
                    {isAnonymous ? "Hamba Allah" : donorName || "Donatur"}
                  </strong>
                  ! Kontribusi sebesar{" "}
                  <strong className="text-[#0A3A33]">
                    Rp {amount.toLocaleString("id-ID")}
                  </strong>{" "}
                  telah diterima dalam Funding Pool foodrescue.id.
                </p>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-gray-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Jumlah Porsi Disubstitusi:
                  </span>
                  <span className="font-extrabold text-[#0A3A33]">
                    {Math.floor(amount / 10000)} Porsi
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Target Outlet:</span>
                  <span className="font-extrabold text-[#0A3A33]">
                    {targetType === "pool"
                      ? "Penyaluran Otomatis"
                      : selectedOutlet}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status Transaksi:</span>
                  <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Verified (Real-Time)
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full bg-[#0A3A33] text-white font-bold py-3 rounded-full text-xs hover:bg-[#062C27] transition-colors cursor-pointer"
              >
                Selesai & Kembali
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
