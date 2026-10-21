"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F0EFE9] mt-16 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Row */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-lg text-[#0A3A33]">
              Dapatkan Informasi Dampak Terbaru.
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Berlangganan buletin bulanan transparansi donasi foodrescue.id.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="px-4 py-2.5 rounded-full border border-gray-300 text-xs w-full md:w-64 focus:outline-none focus:border-[#0A3A33]"
            />
            <button className="bg-[#0A3A33] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#062C27] transition-all">
              Kirim
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-xs">
          <div>
            <h5 className="font-bold text-[#0A3A33] mb-4">Program</h5>
            <ul className="space-y-2.5 text-gray-600">
              <li>
                <Link href="#" className="hover:underline">
                  Voucher Porsi Gratis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Subsidi Stok UMKM
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kartu QR Fisik
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Peta Geolokasi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#0A3A33] mb-4">Peran</h5>
            <ul className="space-y-2.5 text-gray-600">
              <li>
                <Link href="#" className="hover:underline">
                  Penerima Manfaat
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Warung Mitra UMKM
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Donatur Publik & CSR
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Relawan Komunitas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#0A3A33] mb-4">Transparansi</h5>
            <ul className="space-y-2.5 text-gray-600">
              <li>
                <Link href="#" className="hover:underline">
                  Laporan Emisi CO₂
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Funding Pool ESG
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Audit Penyaluran
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#0A3A33] mb-4">Sumber Daya</h5>
            <ul className="space-y-2.5 text-gray-600">
              <li>
                <Link href="#" className="hover:underline">
                  Panduan Pemakain
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Dokumentasi API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pusat Bantuan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#0A3A33] mb-4">Tentang</h5>
            <ul className="space-y-2.5 text-gray-600">
              <li>
                <Link href="#" className="hover:underline">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Karir & Relawan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 gap-4">
          <div>© 2026 foodrescue.id. Hak Cipta Dilindungi.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:underline">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:underline">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:underline">
              Keamanan Data
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
