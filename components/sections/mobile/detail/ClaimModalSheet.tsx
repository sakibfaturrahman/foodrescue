"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, QrCode, AlertCircle } from "lucide-react";

interface ClaimModalSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  merchant: string;
}

export default function ClaimModalSheet({
  isOpen,
  onClose,
  title,
  merchant,
}: ClaimModalSheetProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white w-full max-w-md rounded-t-3xl p-6 shadow-2xl relative space-y-4"
        >
          {/* Top Bar Indicator */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A3A33]">
                Tiket Klaim Aktif
              </span>
              <h3 className="text-sm font-bold text-[#0A3A33]">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* QR Code Container */}
          <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center text-center space-y-3">
            <div className="p-3 bg-white rounded-xl shadow-md border border-gray-200">
              <QrCode className="w-36 h-36 text-[#0A3A33]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-gray-700 block">
                VOUCHER-#882910
              </span>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Tunjukkan QR ini ke kasir {merchant}
              </p>
            </div>
          </div>

          {/* Alert Instructions */}
          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2 text-xs text-amber-800">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-tight">
              Voucher berlaku selama 30 menit. Batas klaim 1 porsi per hari
              untuk menjamin pemerataan.
            </p>
          </div>

          {/* Close Action */}
          <button
            onClick={onClose}
            className="w-full bg-[#0A3A33] text-white font-bold py-3 rounded-full text-xs hover:bg-[#062C27] transition-colors"
          >
            Selesai
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
