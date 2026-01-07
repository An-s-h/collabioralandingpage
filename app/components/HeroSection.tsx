"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface HeroSectionProps {
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

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

export default function HeroSection({ onSmoothScroll }: HeroSectionProps) {
  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] flex items-center overflow-hidden">
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
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2F3C96] mb-4 sm:mb-6 leading-tight px-2"
          >
            Health Research
            <br className="hidden sm:block" />
            <span className="block sm:inline"> </span>
            <span className="text-[#D0C4E2]">Made Simple</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#787878] max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0 leading-relaxed"
          >
            Join the future of healthcare innovation. Connect with researchers,
            participate in clinical trials, and advance medical breakthroughs.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
          >
            <motion.a
              href="#waitlist"
              onClick={(e) => onSmoothScroll(e, "waitlist")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#2F3C96] text-white rounded-full hover:bg-[#253075] transition-colors font-semibold text-base sm:text-lg shadow-lg text-center"
            >
              Join Waitlist
            </motion.a>
            <motion.a
              href="#how-it-works"
              onClick={(e) => onSmoothScroll(e, "how-it-works")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#2F3C96] text-[#2F3C96] rounded-full hover:bg-[#D0C4E2]/20 transition-colors font-semibold text-base sm:text-lg text-center"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

