// src/app/(user)/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "foodrescue.id App - Penyelamatan Pangan & Voucher",
  description: "Aplikasi PWA Penyelamatan Makanan Layak Saji & Voucher Donasi",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#0F221E] antialiased">
      {children}
    </div>
  );
}