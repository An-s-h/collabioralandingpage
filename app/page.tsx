"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import GetStartedSection from "./components/GetStartedSection";
import WaitlistSection from "./components/WaitlistSection";
import TrustedNetworksMarquee from "./components/TrustedNetworksMarquee";
import ScrollToTop from "./components/ScrollToTop";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { ArrowRight } from "lucide-react";
import VideoSection from "./components/VideoSection";

// Lazy load heavy components
const FeaturesCarousel = dynamic(() => import("./components/FeaturesCarousel"), {
  loading: () => <div className="h-64" />,
});

const MeetOurTeamSection = dynamic(() => import("./components/MeetOurTeamSection"), {
  loading: () => <div className="h-64" />,
});
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle scroll to waitlist from banner
  const handleBannerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e, "waitlist");
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground isMobile={isMobile} />
      <Navbar />
      
      <StickyBanner hideOnScroll={true} className="hidden md:flex bg-gradient-to-r from-[#2F3C96] to-[#1f2859]">
        <a 
          href="#waitlist" 
          onClick={handleBannerClick}
          className="mx-0 max-w-[90%] text-white drop-shadow-md flex items-center gap-2 hover:gap-3 transition-all duration-200 cursor-pointer"
        >
          <span className="font-semibold">Join Our Waitlist</span>
          <span className="hidden sm:inline">Be among the first to experience Collabiora</span>
          <span className="sm:hidden">Get early access</span>
          <ArrowRight className="w-4 h-4 inline-flex" />
        </a>
      </StickyBanner>

      <HeroSection onSmoothScroll={handleSmoothScroll} />

      <TrustedNetworksMarquee />

      <HowItWorksSection />
      <VideoSection />
      <FeaturesCarousel />

      <GetStartedSection />

      <WaitlistSection />

      <MeetOurTeamSection />

      <Footer />

      <ScrollToTop />
    </div>
  );
}
