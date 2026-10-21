"use client";

import { motion } from "framer-motion";

export default function LogoCloudSection() {
  const partners = [
    "Amazon",
    "L'Oréal",
    "Deliveroo",
    "Uber",
    "DoorDash",
    "Express",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-8">
        Dipercaya oleh mitra dan organisasi terkemuka
      </p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all"
      >
        {partners.map((partner, index) => (
          <span
            key={index}
            className="font-bold text-xl tracking-tight text-gray-700"
          >
            {partner}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
