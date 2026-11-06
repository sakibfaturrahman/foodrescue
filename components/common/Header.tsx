"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Heart,
  Store,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Berdonasi", href: "/donasi" },
    { label: "Eksplor Warung", href: "/warung" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-gray-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0A3A33] flex items-center gap-1 select-none"
        >
          foodrescue.id
          <span className="w-2 h-2 rounded-full bg-[#E2F163]"></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[#0A3A33] relative py-1 ${
                  isActive ? "text-[#0A3A33] font-bold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A3A33] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth CTA Buttons */}
        <div className="hidden md:flex items-center gap-3 text-xs sm:text-sm font-bold">
          <Link
            href="/login"
            className="text-[#0A3A33] hover:bg-gray-200/60 px-4 py-2.5 rounded-full transition-colors"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="bg-[#0A3A33] hover:bg-[#062C27] text-white px-5 py-2.5 rounded-full font-extrabold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>Gabung Sekarang</span>
            <ArrowRight className="w-4 h-4 text-[#E2F163]" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-xl bg-white border border-gray-200 text-[#0A3A33] hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-200/80 px-4 pt-3 pb-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 pt-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#0A3A33] text-white shadow-sm"
                        : "bg-[#FAF9F5] text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        isActive ? "text-[#E2F163]" : "text-gray-400"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth Action Buttons */}
            <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs font-bold">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 rounded-xl border border-gray-200 text-[#0A3A33] text-center hover:bg-gray-50 flex items-center justify-center gap-1.5"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk</span>
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 rounded-xl bg-[#0A3A33] text-white text-center hover:bg-[#062C27] flex items-center justify-center gap-1.5 shadow-sm"
              >
                <UserPlus className="w-4 h-4 text-[#E2F163]" />
                <span>Daftar</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
