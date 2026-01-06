"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WaitlistForm from "./components/WaitlistForm";
import AnimatedBackground from "./components/AnimatedBackground";
import { BackgroundBeams } from "@/components/ui/background-beams";
import TrustedNetworksMarquee from "./components/TrustedNetworksMarquee";

// Medical/Research Icons as SVG Components
const MedicalIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ResearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const CollaborationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground isMobile={isMobile} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 min-h-[70vh] sm:min-h-[75vh] flex items-center overflow-hidden">
        <BackgroundBeams className="opacity-50" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
          
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2F3C96] mb-6 leading-tight"
            >
              Health Research
              <br />
              <span className="text-[#D0C4E2]">Made Simple</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[#787878] max-w-3xl mx-auto mb-10"
            >
              Join the future of healthcare innovation. Connect with researchers,
              participate in clinical trials, and advance medical breakthroughs.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#waitlist"
                onClick={(e) => handleSmoothScroll(e, "waitlist")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#2F3C96] text-white rounded-full hover:bg-[#253075] transition-colors font-semibold text-lg shadow-lg"
              >
                Join Waitlist
              </motion.a>
              <motion.a
                href="#how-it-works"
                onClick={(e) => handleSmoothScroll(e, "how-it-works")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#2F3C96] text-[#2F3C96] rounded-full hover:bg-[#D0C4E2]/20 transition-colors font-semibold text-lg"
              >
                Learn More
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Trusted Networks Marquee */}
      <TrustedNetworksMarquee />

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F3C96] mb-4">
              How It Works
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#D0C4E2] mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-[#787878] max-w-2xl mx-auto">
              Revolutionizing healthcare collaboration through transparent, ethical, and accessible research
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 order-2 lg:order-1"
            >
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2F3C96] mb-4">
                  Bridging the Gap in Healthcare
                </h3>
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-[#787878] leading-relaxed">
                    Collabiora is a revolutionary platform designed to connect patients
                    with medical researchers, facilitating collaboration that drives
                    healthcare innovation forward.
                  </p>
                  <p className="text-sm sm:text-base text-[#787878] leading-relaxed">
                    We believe that meaningful connections between patients and
                    researchers can accelerate medical breakthroughs, improve patient
                    outcomes, and advance the future of healthcare.
                  </p>
                  <p className="text-sm sm:text-base text-[#787878] leading-relaxed">
                    Our platform makes it easy for patients to find relevant clinical
                    trials, connect with researchers, and contribute to medical
                    research that matters to them.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  {
                    icon: <TargetIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
                    title: "Patient-Centered",
                    description: "Designed with patients in mind, making it easy to find and participate in relevant research.",
                    color: "from-[#D0C4E2] to-[#D0C4E2]/60",
                  },
                  {
                    icon: <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
                    title: "Researcher-Friendly",
                    description: "Tools and features that help researchers find the right participants for their studies.",
                    color: "from-[#2F3C96]/20 to-[#D0C4E2]/40",
                  },
                  {
                    icon: <ResearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
                    title: "Fast & Efficient",
                    description: "Streamlined processes that save time for both patients and researchers.",
                    color: "from-[#D0C4E2]/40 to-[#2F3C96]/20",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg border border-white/30 hover:border-[#2F3C96]/40 transition-all duration-300`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-lg flex items-center justify-center text-[#2F3C96] shadow-sm">
                        {feature.icon}
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="text-base sm:text-lg font-bold text-[#2F3C96] mb-1.5 sm:mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#787878] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2F3C96] mb-4">
              About Us
            </h1>
            <div className="w-24 h-1 bg-[#D0C4E2] mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-[#2F3C96] font-medium">
                Collabiora is reimagining how health research is done — making
                it transparent, ethical, and accessible to everyone.
              </p>
              <p className="text-base leading-relaxed text-[#787878]">
                Coming from diverse backgrounds in medicine, research, and health
                policy, we saw the same problem everywhere: valuable research
                that patients and clinicians couldn't easily access or understand.
              </p>
              <p className="text-base leading-relaxed text-[#787878]">
                Innovation slows when researchers, clinicians, and patients
                work in silos. Collabiora brings them together — enabling
                direct collaboration that accelerates discovery and keeps
                research focused on real health needs.
              </p>
              <p className="text-base leading-relaxed font-medium text-[#2F3C96]">
                We're building a new model for health research — one where
                knowledge flows openly, collaboration drives discovery, and
                every voice helps shape the future of health.
              </p>
            </motion.div>

            {/* Founders Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
                <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                  {/* Founders Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="shrink-0 overflow-hidden rounded-2xl shadow-lg w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          >
            <Image
                      src="/founders.jpeg"
                      alt="Founders - Sanskriti Sasikumar and Esther Feldman"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Founders Info */}
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3C96] leading-tight">
                      Our Founders
                    </h2>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <p className="text-lg sm:text-xl font-bold text-[#2F3C96]">
                          Sanskriti Sasikumar
                        </p>
                        <p className="text-xs sm:text-sm text-[#787878]">MD, PhD</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg sm:text-xl font-bold text-[#2F3C96]">
                          Esther Feldman
                        </p>
                        <p className="text-xs sm:text-sm text-[#787878]">MSc</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F3C96] mb-4">
              Get Started
            </h2>
            <div className="w-24 h-1 bg-[#D0C4E2] mx-auto mb-8"></div>
            <p className="text-xl text-[#787878] max-w-2xl mx-auto">
              Simple steps to connect and collaborate
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Sign Up",
                description: "Create your profile as a patient or researcher. Tell us about your interests, conditions, or research focus.",
                icon: <UsersIcon className="w-8 h-8" />,
              },
              {
                number: "2",
                title: "Connect",
                description: "Our intelligent matching system connects you with relevant researchers or patients based on your profile and interests.",
                icon: <CollaborationIcon className="w-8 h-8" />,
              },
              {
                number: "3",
                title: "Collaborate",
                description: "Communicate, share information, and work together to advance healthcare research and improve patient outcomes.",
                icon: <ResearchIcon className="w-8 h-8" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center relative overflow-hidden group border border-white/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D0C4E2]/10 rounded-full -mr-16 -mt-16 group-hover:bg-[#D0C4E2]/20 transition-colors"></div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                  className="w-20 h-20 bg-[#D0C4E2] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                >
                  <span className="text-3xl font-bold text-[#2F3C96]">{step.number}</span>
                </motion.div>
                <div className="mb-4 flex justify-center text-[#2F3C96]">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#2F3C96] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#787878] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F3C96] mb-4">
              Join Our Beta Waitlist
            </h2>
            <div className="w-24 h-1 bg-[#D0C4E2] mx-auto mb-6"></div>
            <p className="text-xl text-[#787878] max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience Collabiora. Join our waitlist to get
              early access when we launch and help shape the future of healthcare collaboration.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <WaitlistForm />
          </motion.div>
          
          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { 
                title: "Early Access", 
                desc: "Get priority access to new features and updates",
                icon: <TargetIcon className="w-8 h-8" />
              },
              { 
                title: "Exclusive Updates", 
                desc: "Stay informed about our progress and milestones",
                icon: <ResearchIcon className="w-8 h-8" />
              },
              { 
                title: "Shape the Future", 
                desc: "Help us build the platform you need through feedback",
                icon: <CollaborationIcon className="w-8 h-8" />
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:border-[#2F3C96]/40 transition-all"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#D0C4E2]/20 rounded-full mb-4 text-[#2F3C96]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2F3C96] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#787878] leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
