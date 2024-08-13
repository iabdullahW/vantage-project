import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProjectCollabSection from "@/components/ProjectCollabSection";
import FeaturesSection from "@/components/FeaturesSection";
import PaymentPlan from "@/components/PaymentPlan";
import ExpertsSection from "@/components/ExpertsSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Carousel from "@/components/Carousel";
import ProjectsSection from "@/components/ProjectsSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className="w-[100vw] overflow-hidden">
      <div className="w-[100vw] h-fit pb-16  bg-gradient-to-r from-[#5311A7] via-[#320F55] to-[#6E20D2]">
        <Navbar />
        <HeroSection />
      </div>
      <Carousel />
      <ProjectsSection />
      <ServicesSection />
      <ProjectCollabSection />
      <FeaturesSection />
      <PaymentPlan />
      <ExpertsSection />
      <FooterSection />
    </div>
  );
}
