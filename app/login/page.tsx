"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {
  LogIn,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  // Data Dummy Login atas nama Viki
  const [email, setEmail] = useState("viki@gmail.com");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi loading autentikasi instant lalu mengarahkan ke PWA /user/dashboard
    setTimeout(() => {
      router.push("/user/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F5] text-[#0F221E]">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full max-w-5xl">
          {/* Kolom Kiri: Branding & Informasi Platform */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0A3A33] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-4">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#E2F163]/20 rounded-full blur-3xl pointer-events-none" />

              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Selamat Datang Kembali di foodrescue.id
              </h1>

              <p className="text-sm text-gray-200 leading-relaxed font-normal">
                Masuk ke akun Anda untuk mengklaim voucher makanan gratis,
                memantau dampak donasi, atau mengelola warung mitra UMKM Anda.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                <div className="flex items-center gap-2.5 text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E2F163] shrink-0" />
                  <span>
                    Klaim voucher porsi gratis dengan kode QR kasir instant.
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-200">
                  <ShieldCheck className="w-4 h-4 text-[#E2F163] shrink-0" />
                  <span>
                    Verifikasi identitas transparan untuk mahasiswa &
                    masyarakat.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Login Web */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xl space-y-6"
            >
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A3A33]">
                  Masuk Akun
                </h2>
               
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 block">
                    Alamat Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="viki@gmail.com"
                      className="w-full pl-11 pr-4 py-3 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
                    />
                  </div>
                </div>

                {/* Field Password */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-gray-700 block">
                      Kata Sandi
                    </label>
                    <a
                      href="#"
                      className="text-[11px] font-bold text-[#0A3A33] hover:underline"
                    >
                      Lupa sandi?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
                    />
                  </div>
                </div>

                {/* Submit Button -> Mengarah ke /user/dashboard */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0A3A33] hover:bg-[#062C27] text-white font-extrabold py-3.5 rounded-full text-xs transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 text-[#E2F163]" />
                      <span>Masuk</span>
                      <ArrowRight className="w-4 h-4 text-[#E2F163]" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Link ke Halaman Register */}
              <div className="text-center pt-2 border-t border-gray-100 text-xs">
                <span className="text-gray-500">Belum memiliki akun? </span>
                <Link
                  href="/register"
                  className="font-extrabold text-[#0A3A33] hover:underline"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
