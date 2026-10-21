// src/components/sections/guest/ImpactTestimonial.tsx
"use client";

import { motion } from "framer-motion";

export default function ImpactTestimonial() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-[#31103F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center"
      >
        <div className="max-w-2xl mx-auto relative z-10">
          <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed">
            &quot;foodrescue.id membantu mengurangi sisa makanan di warung kami
            sekaligus memberikan pendapatan pasti dari porsi yang disubsidi
            donatur.&quot;
          </blockquote>
          <div className="mt-6">
            <p className="text-xs font-semibold text-[#E2F163]">
              Pemilik Warteg Mitra
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Area Tasikmalaya & Perkotaan
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
