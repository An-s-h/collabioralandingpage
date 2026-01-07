"use client";

import { motion } from "framer-motion";
import { TargetIcon, UsersIcon, ResearchIcon } from "./Icons";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
            Revolutionizing healthcare collaboration through transparent, ethical,
            <br />
            and accessible research
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
                  title: "Community-Focused",
                  description: "Researchers can participate in forums, share insights, and monetize their expertise while building a collaborative research community.",
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
  );
}

