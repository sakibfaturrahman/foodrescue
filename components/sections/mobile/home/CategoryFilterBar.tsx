"use client";

import { useState } from "react";
import {
  Utensils,
  ShieldAlert,
  HeartHandshake,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CategoryFilterBar() {
  const [activeFilter, setActiveFilter] = useState("semua");

  const categories = [
    { id: "semua", label: "Semua Porsi", icon: Utensils },
    { id: "penyelamatan", label: "Penyelamatan Sisa", icon: Sparkles },
    { id: "subsidi", label: "Porsi Bersubsidi", icon: HeartHandshake },
    { id: "mendesak", label: "Hampir Habis", icon: ShieldAlert },
    { id: "terdekat", label: "Terdekat (<1 km)", icon: MapPin },
  ];

  return (
    <div className="px-4 py-2 overflow-x-auto no-scrollbar flex gap-2">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeFilter === cat.id;

        return (
          <motion.button
            key={cat.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 border ${
              isActive
                ? "bg-[#0A3A33] text-[#E2F163] border-[#0A3A33] shadow-md"
                : "bg-white text-gray-700 border-gray-200/80 hover:bg-gray-100/80 shadow-2xs"
            }`}
          >
            <Icon
              className={`w-3.5 h-3.5 ${
                isActive ? "text-[#E2F163]" : "text-[#0A3A33]"
              }`}
            />
            <span>{cat.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
