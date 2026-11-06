"use client";

import { useState } from "react";
import {
  User,
  ShieldCheck,
  QrCode,
  Heart,
  TrendingUp,
  FileText,
  Settings,
  Bell,
  Lock,
  HelpCircle,
  LogOut,
  ChevronRight,
  Camera,
  CheckCircle2,
  Smartphone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileHeader from "@/components/common/MobileHeader";
import MobileBottomNav from "@/components/common/MobileBottomNav";

export default function ProfileProView() {
  const [activeTab, setActiveTab] = useState<"overview" | "edit_profile">("overview");
  const [showQrModal, setShowQrModal] = useState(false);

  // State Form Data Diri
  const [formData, setFormData] = useState({
    fullName: "Sakib Faturraahman",
    email: "sakib@ftrtech.id",
    phone: "081234567890",
    role: "Mahasiswa / Perantau (Beneficiary)",
    campus: "Universitas Perjuangan Tasikmalaya",
    ktmVerified: true,
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-28">
      <MobileHeader />

      <main className="p-4 space-y-4 max-w-md mx-auto">
        {/* Profile Pro Header Banner */}
        <div className="bg-[#0A3A33] text-white rounded-3xl p-5 shadow-lg relative overflow-hidden space-y-4">
          <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#E2F163]/20 rounded-full blur-2xl pointer-events-none" />

          {/* User Info Bar */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#E2F163] text-[#0A3A33] font-black text-2xl flex items-center justify-center shadow-md border-2 border-white">
                SF
              </div>
              <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#31103F] text-white flex items-center justify-center border border-white text-xs">
                <Camera className="w-3 h-3" />
              </button>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="text-base font-extrabold truncate text-white">
                  {formData.fullName}
                </h2>
                {formData.ktmVerified && (
                  <ShieldCheck className="w-4 h-4 text-[#E2F163] shrink-0" />
                )}
              </div>
              <p className="text-xs text-gray-300 truncate">{formData.campus}</p>
              <div className="mt-1 inline-flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#E2F163] border border-white/10">
                <Sparkles className="w-3 h-3" /> Verified Student ID
              </div>
            </div>
          </div>

          {/* Quick QR Pass Button */}
          <button
            onClick={() => setShowQrModal(true)}
            className="w-full bg-[#E2F163] hover:bg-[#d5e454] text-[#0A3A33] font-extrabold py-2.5 rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <QrCode className="w-4 h-4" />
            <span>Tampilkan Kartu QR ID Digital Saya</span>
          </button>
        </div>

        {/* Impact Pro Metrics Bar */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-white p-3 rounded-2xl border border-gray-200/80 shadow-xs text-center">
            <span className="block text-lg font-black text-[#0A3A33]">14</span>
            <span className="text-[10px] text-gray-500 font-bold block">Porsi Diklaim</span>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-gray-200/80 shadow-xs text-center">
            <span className="block text-lg font-black text-[#0A3A33]">5.8 kg</span>
            <span className="text-[10px] text-gray-500 font-bold block">CO₂ Dicegah</span>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-gray-200/80 shadow-xs text-center">
            <span className="block text-lg font-black text-[#31103F]">280</span>
            <span className="text-[10px] text-gray-500 font-bold block">Poin ESG</span>
          </div>
        </div>

        {/* Tab Switcher: Overview vs Edit Data Diri */}
        <div className="bg-gray-200/80 p-1 rounded-2xl flex text-xs font-bold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "overview"
                ? "bg-[#0A3A33] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Pengaturan & Akun
          </button>
          <button
            onClick={() => setActiveTab("edit_profile")}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "edit_profile"
                ? "bg-[#0A3A33] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Data Diri & KTM
          </button>
        </div>

        {activeTab === "overview" ? (
          /* TAB 1: Menu Pengaturan & Akun Pro */
          <div className="space-y-3">
            {/* Group 1: Verifikasi & Dokumen */}
            <div className="bg-white rounded-2xl p-3.5 border border-gray-200/80 shadow-xs space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block px-1">
                Verifikasi Identitas
              </span>
              <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>KTM / Identitas Terverifikasi</span>
                </div>
                <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-md font-bold">
                  Aktif
                </span>
              </div>
            </div>

            {/* Group 2: Pengaturan Aplikasi PWA */}
            <div className="bg-white rounded-2xl p-2 border border-gray-200/80 shadow-xs space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block px-3 pt-2">
                Aplikasi & Keamanan
              </span>

              <button className="w-full p-2.5 hover:bg-gray-50 rounded-xl flex items-center justify-between text-xs text-gray-800 font-medium transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-[#0A3A33]" />
                  <span>Notifikasi Push (Pemberitahuan Porsi)</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button className="w-full p-2.5 hover:bg-gray-50 rounded-xl flex items-center justify-between text-xs text-gray-800 font-medium transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-[#0A3A33]" />
                  <span>Kata Sandi & Keamanan</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button className="w-full p-2.5 hover:bg-gray-50 rounded-xl flex items-center justify-between text-xs text-gray-800 font-medium transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-[#0A3A33]" />
                  <span>Pengaturan PWA & Offline Mode</span>
                </div>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-bold">
                  Aktif
                </span>
              </button>
            </div>

            {/* Group 3: Bantuan & Logout */}
            <div className="bg-white rounded-2xl p-2 border border-gray-200/80 shadow-xs space-y-1">
              <button className="w-full p-2.5 hover:bg-gray-50 rounded-xl flex items-center justify-between text-xs text-gray-800 font-medium transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-[#0A3A33]" />
                  <span>Pusat Bantuan & Panduan</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button className="w-full p-2.5 hover:bg-red-50 text-red-600 rounded-xl flex items-center justify-between text-xs font-bold transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <LogOut className="w-4 h-4 text-red-600" />
                  <span>Keluar Akun</span>
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* TAB 2: Form Edit Data Diri & Dokumen */
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs space-y-3.5">
            <h3 className="font-extrabold text-xs text-[#0A3A33] uppercase tracking-wider">
              Formulir Data Diri & Verifikasi
            </h3>

            {/* Field Nama */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700 block">Nama Lengkap</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0A3A33]"
              />
            </div>

            {/* Field Email */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0A3A33]"
              />
            </div>

            {/* Field No WhatsApp */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700 block">Nomor WhatsApp</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0A3A33]"
              />
            </div>

            {/* Field Peranti Kampus */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700 block">Kampus / Instansi</label>
              <input
                type="text"
                value={formData.campus}
                onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0A3A33]"
              />
            </div>

            {/* Upload Dokumen Identitas (KTM/KTP) */}
            <div className="space-y-1.5 pt-2 border-t border-gray-100">
              <label className="text-[11px] font-bold text-gray-700 block">
                Unggah Dokumen Verifikasi (KTM / KTP)
              </label>
              <div className="border-2 border-dashed border-gray-300 hover:border-[#0A3A33] rounded-xl p-4 text-center bg-gray-50 cursor-pointer transition-colors">
                <FileText className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                <span className="text-xs font-bold text-[#0A3A33] block">
                  Pilih Berkas atau Ambil Foto
                </span>
                <span className="text-[10px] text-gray-400 block mt-0.5">
                  Format JPG, PNG (Maks 5MB)
                </span>
              </div>
            </div>

            {/* Save Action */}
            <button
              onClick={() => alert("Data profil berhasil disimpan!")}
              className="w-full bg-[#0A3A33] hover:bg-[#062C27] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-sm cursor-pointer mt-2"
            >
              Simpan Perubahan
            </button>
          </div>
        )}
      </main>

      {/* Modal QR Pass Digital */}
      <AnimatePresence>
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 w-full max-w-sm text-center space-y-4 shadow-2xl relative"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A3A33]">
                  ID Pas Digital Beneficiary
                </span>
                <h3 className="text-base font-extrabold text-[#0A3A33]">
                  {formData.fullName}
                </h3>
              </div>

              {/* QR Image Box */}
              <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-gray-200 inline-block shadow-inner">
                <QrCode className="w-44 h-44 text-[#0A3A33] mx-auto" />
                <span className="text-[10px] font-mono font-bold text-gray-600 block mt-2">
                  ID: FR-ID-882910-SF
                </span>
              </div>

              <p className="text-[11px] text-gray-500 leading-tight">
                Scan QR ini langsung di kasir warung mitra untuk mempercepat klaim porsi harian Anda.
              </p>

              <button
                onClick={() => setShowQrModal(false)}
                className="w-full bg-[#0A3A33] text-white font-bold py-2.5 rounded-xl text-xs hover:bg-[#062C27] transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <MobileBottomNav />
    </div>
  );
}