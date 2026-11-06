"use client";

import dynamic from "next/dynamic";

const MobileHomeView = dynamic(
  () =>
    import("@/components/sections/mobile/home/MobileHomeView").then(
      (mod) => mod.default,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-[#FAF9F5] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#0A3A33] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  },
);

export default function MobileHomeWrapper() {
  return <MobileHomeView />;
}
