"use client";

import { MapPin, Bell, QrCode } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#0A3A33] text-white px-4 py-3 flex items-center justify-between shadow-md">
      {/* Location Bar */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#E2F163]">
          <MapPin className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-gray-300 tracking-wider block leading-none">
            Lokasi Anda
          </span>
          <span className="text-xs font-bold text-white flex items-center gap-1">
            Tasikmalaya & Sekitar
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-full bg-[#E2F163] text-[#0A3A33] flex items-center justify-center font-bold shadow-sm"
          title="Scan QR"
        >
          <QrCode className="w-5 h-5" />
        </motion.button>
        <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center relative text-white">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E2F163]" />
        </button>
      </div>
    </header>
  );
}
