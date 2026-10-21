// src/components/sections/guest/CaseStudiesSection.tsx
"use client";

import { motion } from "framer-motion";

export default function CaseStudiesSection() {
  const cases = [
    {
      title: "Pemberdayaan Mahasiswa Rantau",
      desc: "Menyelamatkan 2,500+ porsi makan gizi seimbang untuk mahasiswa akhir bulan.",
      img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Sinergi CSR & Warung Lokal",
      desc: "Menyalurkan dana donasi perusahaan langsung ke 50+ warung makan UMKM.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Jangkauan Kelompok Marjinal",
      desc: "Relawan membagikan 1,000+ Kartu QR Fisik kepada lansia dan pekerja harian.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A3A33]">
            Kisah Dampak & Penyelamatan
          </h2>
        </div>
        <a
          href="#"
          className="text-xs font-bold text-[#0A3A33] hover:underline flex items-center gap-1"
        >
          Lihat Semua Cerita Dampak →
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-[#F0EFE9] rounded-2xl p-4 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all"
          >
            <div className="h-48 rounded-xl overflow-hidden mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0A3A33]">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
