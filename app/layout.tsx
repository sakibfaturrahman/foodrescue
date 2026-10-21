// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "foodrescue.id - Peta Donasi & Penyelamatan Makanan",
  description:
    "Menghubungkan donatur, UMKM kuliner, dan penerima manfaat dalam satu ekosistem digital transparan.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "foodrescue.id",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A3A33",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "scroll-smooth",
        jakartaSans.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="font-sans bg-[#FAF9F5] text-[#0F221E] antialiased selection:bg-[#0A3A33] selection:text-white">
        {children}
      </body>
    </html>
  );
}
