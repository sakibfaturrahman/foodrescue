"use client";

import { MapPin, Clock, Star, Store, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface MerchantProps {
  id: string;
  name: string;
  image: string;
  address: string;
  distance: string;
  rating: number;
  availablePortions: number;
  pickupWindow: string;
  isOpen: boolean;
  onSelect: () => void;
}

export default function MerchantCard({
  name,
  image,
  address,
  distance,
  rating,
  availablePortions,
  pickupWindow,
  isOpen,
  onSelect,
}: MerchantProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className="bg-white rounded-2xl p-3 border border-gray-200/80 shadow-sm flex items-center gap-3.5 cursor-pointer relative overflow-hidden"
    >
      {/* Thumbnail Image */}
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <span
          className={`absolute top-1.5 left-1.5 text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
            isOpen ? "bg-emerald-500 text-white" : "bg-gray-500 text-white"
          }`}
        >
          {isOpen ? "Buka" : "Tutup"}
        </span>
      </div>

      {/* Info Details */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center justify-between gap-1">
          <h4 className="font-bold text-xs text-[#0A3A33] truncate">{name}</h4>
          <div className="flex items-center gap-0.5 text-amber-500 text-[10px] font-extrabold shrink-0 bg-amber-50 px-1.5 py-0.5 rounded-md">
            <Star className="w-3 h-3 fill-current" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-[11px] text-gray-500 truncate flex items-center gap-1">
          <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
          <span className="truncate">{address} • {distance}</span>
        </p>

        <p className="text-[10px] text-gray-400 flex items-center gap-1">
          <Clock className="w-3 h-3 text-gray-400 shrink-0" />
          <span>Pengambilan: {pickupWindow}</span>
        </p>

        {/* Status Porsi */}
        <div className="pt-1 flex items-center justify-between">
          <span
            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
              availablePortions > 0
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {availablePortions > 0 ? `${availablePortions} Porsi Siap Klaim` : "Porsi Habis"}
          </span>

          <span className="text-[10px] font-bold text-[#0A3A33] flex items-center gap-0.5">
            Detail <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}