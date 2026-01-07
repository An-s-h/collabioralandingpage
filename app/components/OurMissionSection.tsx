"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMissionSection() {
  return (
    <section id="our-mission" className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2F3C96] mb-3">
            Our Mission
          </h1>
          <div className="w-24 h-1 bg-[#D0C4E2] mx-auto mb-4"></div>
        </motion.div>

        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 relative z-10 pl-8 lg:pl-12"
          >
            {/* Timeline Line - Vertical line on the left */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2F3C96] via-[#D0C4E2] to-[#2F3C96]"
              style={{ originY: 0 }}
            >
              {/* Timeline dots */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2F3C96] border-2 border-white shadow-lg"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D0C4E2] border-2 border-white shadow-lg"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2F3C96] border-2 border-white shadow-lg"
              />
            </motion.div>
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

          {/* Image with Names Below */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center relative z-10"
          >
            <div className="rounded-2xl p-6 sm:p-8 w-full">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="overflow-hidden rounded-2xl shadow-lg w-full max-w-xs mx-auto mb-6"
              >
                <Image
                  src="/founders.jpeg"
                  alt="Sanskriti Sasikumar and Esther Feldman"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Names Below Image */}
              <div className="space-y-4 text-center">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

