"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Store, QrCode, User } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { id: "explore", label: "Eksplor", icon: Compass, href: "/user/dashboard" },
    { id: "merchants", label: "Warung", icon: Store, href: "/user/warung" },
    { id: "vouchers", label: "Voucher", icon: QrCode, href: "/user/voucher" },
    { id: "profile", label: "Profil", icon: User, href: "/user/profile" },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white/80 backdrop-blur-md border-t border-gray-200/80 px-3 py-2 z-50 shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex flex-col items-center justify-center py-1.5 px-4 rounded-full cursor-pointer select-none transition-transform active:scale-95"
            >
              {isActive && (
                <motion.div
                  layoutId="liquidGlassTab"
                  className="absolute inset-0 bg-[#0A3A33]/10 backdrop-blur-lg border border-[#0A3A33]/20 rounded-full shadow-[0_4px_12px_rgba(10,58,51,0.12)]"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 28,
                    mass: 0.8,
                  }}
                />
              )}

              <div
                className={`relative z-10 flex flex-col items-center gap-0.5 transition-colors duration-200 ${
                  isActive
                    ? "text-[#0A3A33]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <motion.div
                  animate={{ scale: isActive ? 1.15 : 1, y: isActive ? -1 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </motion.div>

                <span
                  className={`text-[10px] font-extrabold tracking-tight ${
                    isActive ? "text-[#0A3A33]" : "text-gray-500 font-semibold"
                  }`}
                >
                  {item.label}
                </span>
              </div>

              {isActive && (
                <motion.span
                  layoutId="liquidDot"
                  className="absolute -top-1.5 w-1.5 h-1.5 rounded-full bg-[#0A3A33] shadow-[0_0_6px_#0A3A33]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}