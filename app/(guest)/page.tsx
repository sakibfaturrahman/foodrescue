import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/sections/guest/HeroSection";
import LogoCloudSection from "@/components/sections/guest/LogoCloudSection";
import BentoGridSection from "@/components/sections/guest/BentoGridSection";
import FeaturesSection from "@/components/sections/guest/FeaturesSection";
import ImpactTestimonial from "@/components/sections/guest/ImpactTestimonial";
import CaseStudiesSection from "@/components/sections/guest/CaseStudiesSection";

export default function GuestHomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
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
    </main>
  );
}
