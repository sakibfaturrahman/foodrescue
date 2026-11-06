"use client";

import { motion } from "framer-motion";
import { QrCode, MapPin, Clock, AlertCircle, ArrowRight } from "lucide-react";

export interface VoucherProps {
  id: string;
  code: string;
  title: string;
  merchantName: string;
  address: string;
  distance: string;
  validUntil: string;
  isToday: boolean;
  status: "active" | "used" | "expired";
  onOpenQR: () => void;
}

export default function VoucherCard({
  code,
  title,
  merchantName,
  address,
  distance,
  validUntil,
  isToday,
  status,
  onOpenQR,
}: VoucherProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-2xl p-4 border shadow-sm relative overflow-hidden space-y-3 ${
        status === "active"
          ? "border-[#0A3A33]/20"
          : "border-gray-200 opacity-70 bg-gray-50"
      }`}
    >
      {/* Top Tag & Status */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
            {code}
          </span>
          {isToday && status === "active" && (
            <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Berlaku Hari Ini
            </span>
          )}
        </div>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            status === "active"
              ? "bg-[#0A3A33] text-[#E2F163]"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status === "active" ? "Siap Klaim" : status === "used" ? "Telah Dipakai" : "Kedaluwarsa"}
        </span>
      </div>

      {/* Main Details */}
      <div>
        <h4 className="font-extrabold text-sm text-[#0A3A33] leading-snug">{title}</h4>
        <p className="text-xs font-bold text-gray-700 mt-0.5">{merchantName}</p>
        <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
          <span className="truncate">{address} • <strong className="text-[#0A3A33]">{distance}</strong></span>
        </p>
      </div>

      {/* Expiry Time Info */}
      <div className="flex items-center justify-between bg-[#FAF9F5] p-2.5 rounded-xl text-[11px] border border-gray-100">
        <span className="text-gray-500 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-gray-400" />
          Batas Ambil:
        </span>
        <span className="font-extrabold text-red-600">{validUntil}</span>
      </div>

      {/* Action Button */}
      {status === "active" ? (
        <button
          onClick={onOpenQR}
          className="w-full bg-[#0A3A33] hover:bg-[#062C27] text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
        >
          <QrCode className="w-4 h-4 text-[#E2F163]" />
          <span>Tampilkan Kode QR Kasir</span>
        </button>
      ) : (
        <div className="text-center text-[11px] text-gray-400 font-medium py-1">
          Voucher ini sudah tidak berlaku lagi
        </div>
      )}
    </motion.div>
  );
}