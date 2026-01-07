"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OurMissionSection from "./components/OurMissionSection";
import ProcessSection from "./components/ProcessSection";
import WaitlistSection from "./components/WaitlistSection";
import MeetOurTeamSection from "./components/MeetOurTeamSection";
import TrustedNetworksMarquee from "./components/TrustedNetworksMarquee";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground isMobile={isMobile} />
      <Navbar />

      <HeroSection onSmoothScroll={handleSmoothScroll} />

      <TrustedNetworksMarquee />

      <HowItWorksSection />

      <OurMissionSection />

      <ProcessSection />

      <WaitlistSection />

      <MeetOurTeamSection />

      <Footer />

      <ScrollToTop />
    </div>
  );
}
