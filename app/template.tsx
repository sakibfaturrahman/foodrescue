"use client";

import { useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";

// Sub-komponen Client khusus untuk mendengarkan perubahan rute & reset scroll
function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll posisi paling atas secara instan
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollReset />
      </Suspense>
      {children}
    </>
  );
}