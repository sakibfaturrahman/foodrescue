"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function LocationSearchBar() {
  return (
    <div className="px-4 py-3 bg-[#FAF9F5]">
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2.5 flex items-center gap-2 shadow-sm focus-within:border-[#0A3A33] transition-colors">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Cari warung atau makanan..."
            className="w-full text-xs font-medium bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-[#0A3A33] text-white flex items-center justify-center shrink-0 shadow-sm hover:bg-[#062C27] transition-colors">
          <SlidersHorizontal className="w-4 h-4 text-[#E2F163]" />
        </button>
      </div>
    </div>
  );
}
