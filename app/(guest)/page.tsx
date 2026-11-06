import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/sections/guest/HeroSection";
import LogoCloudSection from "@/components/sections/guest/LogoCloudSection";
import BentoGridSection from "@/components/sections/guest/BentoGridSection";
import FeaturesSection from "@/components/sections/guest/FeaturesSection";
import ImpactTestimonial from "@/components/sections/guest/ImpactTestimonial";
import CaseStudiesSection from "@/components/sections/guest/CaseStudiesSection";
import MobileHomeWrapper from "@/components/sections/mobile/home/MobileHomeWrapper";

export default function GuestHomePage() {
  return (
    <>
      {/* 1. TAMPILAN MOBILE / PWA (Tampil di semua layar < 1024px) */}
      <div className="block lg:hidden">
        <MobileHomeWrapper />
      </div>

      {/* 2. TAMPILAN DESKTOP / WEB (Hanya muncul di layar Laptop/Desktop >= 1024px) */}
      <div className="hidden lg:flex min-h-screen flex-col justify-between overflow-x-hidden">
        <Header />
        <div className="flex-1 space-y-8">
          <HeroSection />
          <LogoCloudSection />
          <BentoGridSection />
          <FeaturesSection />
          <ImpactTestimonial />
          <CaseStudiesSection />
        </div>
        <Footer />
      </div>
    </>
  );
}