"use client";

import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export interface FoodRescueCardProps {
  id: string;
  image: string;
  title: string;
  merchant: string;
  distance: string;
  type: "surplus" | "subsidized";
  remainingPortions: number;
  pickupTime: string;
  onClaim: (e: React.MouseEvent) => void;
}

export default function FoodRescueCard({
  id,
  image,
  title,
  merchant,
  distance,
  type,
  remainingPortions,
  pickupTime,
  onClaim,
}: FoodRescueCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col justify-between group"
    >
      {/* Wrapper Link untuk Navigasi ke Halaman Detail /food/[id] */}
      <Link href={`/food/${id}`} className="block flex-1 cursor-pointer">
        <div>
          {/* Thumbnail Image */}
          <div className="relative h-36 w-full overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span
              className={`absolute top-2.5 left-2.5 text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                type === "surplus"
                  ? "bg-emerald-500 text-white"
                  : "bg-amber-400 text-[#0A3A33]"
              }`}
            >
              {type === "surplus" ? "Surplus Rescue" : "Subsidized Prep"}
            </span>
            <span className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#E2F163]" /> {pickupTime}
            </span>
          </div>

          {/* Info Content */}
          <div className="p-3">
            <h4 className="font-bold text-xs text-[#0A3A33] line-clamp-1 group-hover:text-[#062C27] transition-colors">
              {title}
            </h4>
            <p className="text-[11px] font-medium text-gray-500 mt-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
              <span className="line-clamp-1">
                {merchant} • {distance}
              </span>
            </p>

            <div className="mt-2.5 flex items-center justify-between border-t border-gray-100 pt-2 text-[10px]">
              <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                Sisa {remainingPortions} Porsi
              </span>
              <span className="font-extrabold text-[#0A3A33] text-xs">
                GRATIS
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Claim Action Button (stopPropagation mencegah trigger pembukaan link detail) */}
      <div className="px-3 pb-3">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClaim(e);
          }}
          className="w-full bg-[#0A3A33] hover:bg-[#062C27] text-white text-xs font-bold py-2 rounded-xl transition-colors shadow-sm cursor-pointer"
        >
          Klaim Voucher
        </button>
      </div>
    </motion.div>
  );
}
