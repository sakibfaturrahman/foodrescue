"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <div id="fitur" className="space-y-16">
      {/* Divider Title */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A3A33]">
            Solusi Pintar{" "}
            <span className="bg-[#E0E5E2] px-3 py-1 rounded-lg text-gray-600 font-mono text-2xl sm:text-3xl">
              PWA
            </span>
            <br />
            Penyelamatan Pangan
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
            Dirancang khusus untuk ekosistem UMKM dan masyarakat dengan akses
            porsi gratis yang mudah, transparan, dan bermartabat.
          </p>
        </div>
      </section>

      {/* Feature 1: Akses Makanan Inklusif */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              01 / Akses Mudah
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A3A33] mt-2 leading-snug">
              Akses inklusif agar semua orang mendapatkan pangan layak
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Klaim voucher makanan gratis via aplikasi mobile/PWA untuk
              mahasiswa & perantau, atau gunakan Kartu QR Fisik untuk lansia dan
              pekerja harian tanpa smartphone.
            </p>
            <div className="mt-6">
              <button className="bg-[#0A3A33] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#062C27] transition-all">
                Cari Warung Terdekat
              </button>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0A3A33]" />
                <span>Verifikasi KTM / KTP Instant</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0A3A33]" />
                <span>Kartu QR Fisik (Non-Digital)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#E2D9F3] rounded-3xl p-8 flex items-center justify-center relative min-h-[380px] overflow-hidden"
          >
            <div className="relative w-full max-w-sm h-72 flex items-center justify-center">
              <div className="absolute w-52 bg-white rounded-2xl shadow-xl p-4 border border-purple-100 -rotate-6 transform -translate-x-12">
                <div className="w-full h-24 bg-purple-100 rounded-lg mb-3 flex items-center justify-center text-xs text-purple-700 font-bold">
                  Voucher QR #882
                </div>
                <div className="h-3 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
              </div>
              <div className="absolute w-56 bg-white rounded-2xl shadow-2xl p-5 border border-purple-200 rotate-3 z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#0A3A33] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <div className="text-xs font-bold text-gray-800">
                    Klaim Porsi Berhasil
                  </div>
                </div>
                <p className="text-[11px] text-gray-500">
                  Tunjukkan QR Code ini ke Warung Bu Tini sebelum pukul 20:00
                  WIB.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 2: Dashboard Pencairan UMKM */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#C5CAE9]/40 rounded-3xl p-8 flex items-center justify-center min-h-[360px]"
          >
            <div className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between border-b pb-3 mb-4">
                <span className="text-xs font-bold text-gray-700">
                  Ringkasan Porsi Tersalurkan
                </span>
                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                  Aktif Hari Ini
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">
                      Warteg Bahari - Sesi Siang
                    </span>
                    <span className="font-bold text-[#0A3A33]">
                      18 / 20 Porsi
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0A3A33] w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">
                      Kedai Barokah - Sesi Malam
                    </span>
                    <span className="font-bold text-[#0A3A33]">
                      12 / 15 Porsi
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0A3A33] w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              02 / Mitra UMKM
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A3A33] mt-2 leading-snug">
              Kemudahan pengelolaan stok & pencairan otomatis
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Warung makan memasukkan stok porsi surplus harian dalam 3 klik.
              Pemindaian QR penerima langsung mencatat transaksi dan dana
              bantuan dicairkan secara transparan.
            </p>
            <div className="mt-6">
              <button className="bg-[#0A3A33] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#062C27] transition-all">
                Daftar Sebagai Warung Mitra
              </button>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              <span className="font-bold text-[#0A3A33] text-base">4.9/5</span>{" "}
              kepuasan pemilik UMKM terhadap kemudahan pemindaian QR.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
