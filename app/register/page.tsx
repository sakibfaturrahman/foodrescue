"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {
  User,
  Mail,
  Lock,
  Phone,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  // Data Dummy Form Register atas nama Viki
  const [fullName, setFullName] = useState("Viki Pratama");
  const [email, setEmail] = useState("viki@gmail.com");
  const [phone, setPhone] = useState("081234567890");
  const [role, setRole] = useState("beneficiary");
  const [institution, setInstitution] = useState(
    "Universitas Perjuangan Tasikmalaya",
  );
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi pembuatan akun lalu diarahkan langsung ke PWA /user/dashboard
    setTimeout(() => {
      router.push("/user/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F5] text-[#0F221E]">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full max-w-5xl">
          {/* Kolom Kiri: Informasi Pendaftaran */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A3A33] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-4">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#E2F163]/20 rounded-full blur-3xl pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 bg-[#E2F163]/20 text-[#E2F163] px-3.5 py-1 rounded-full text-xs font-bold border border-[#E2F163]/30">
                <Sparkles className="w-3.5 h-3.5" /> Gabung Gerakan Kebaikan
              </span>

              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Buat Akun Barumu Sekarang.
              </h1>

              <p className="text-sm text-gray-200 leading-relaxed font-normal">
                Daftar sebagai Penerima Manfaat (Mahasiswa/Masyarakat), Donatur,
                maupun Pemilik Warung UMKM Mitra.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                <div className="flex items-center gap-2.5 text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E2F163] shrink-0" />
                  <span>Proses pendaftaran instan tanpa biaya apapun.</span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E2F163] shrink-0" />
                  <span>
                    Terhubung langsung dengan warung makan lokal terdekat.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Pendaftaran Web */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xl space-y-5"
            >
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A3A33]">
                  Registrasi Akun Baru
                </h2>
               
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Pilihan Peran / Role */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 block">
                    Pilih Peran Akun
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                    {[
                      { id: "beneficiary", label: "Mahasiswa / Penerima" },
                      { id: "merchant", label: "Warung UMKM" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setRole(item.id)}
                        className={`py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer text-[11px] ${
                          role === item.id
                            ? "bg-[#0A3A33] text-[#E2F163] border-[#0A3A33] shadow-sm font-extrabold"
                            : "bg-[#FAF9F5] text-gray-700 border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Field Nama Lengkap */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
                      />
                    </div>
                  </div>

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
                        className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Field Nomor WA */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Nomor WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
                      />
                    </div>
                  </div>

                  {/* Field Kampus / Instansi */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Kampus / Instansi
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
                      />
                    </div>
                  </div>
                </div>

                {/* Field Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 block">
                    Kata Sandi
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F5] border border-gray-200 rounded-xl text-xs font-bold text-[#0A3A33] focus:outline-none focus:border-[#0A3A33]"
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
                      <UserCheck className="w-4 h-4 text-[#E2F163]" />
                      <span>Daftar & Langsung Masuk Dashboard</span>
                      <ArrowRight className="w-4 h-4 text-[#E2F163]" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Link ke Halaman Login */}
              <div className="text-center pt-2 border-t border-gray-100 text-xs">
                <span className="text-gray-500">Sudah punya akun? </span>
                <Link
                  href="/login"
                  className="font-extrabold text-[#0A3A33] hover:underline"
                >
                  Masuk di sini
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
