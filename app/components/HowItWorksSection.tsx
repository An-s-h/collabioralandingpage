"use client";

import { motion } from "framer-motion";
import { TargetIcon, UsersIcon, ResearchIcon } from "./Icons";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F3C96] mb-3">
            How It Works
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-[#D0C4E2] mx-auto mb-3"></div>
          <p className="text-xs sm:text-sm text-[#787878] max-w-2xl mx-auto">
            Revolutionizing healthcare collaboration through transparent, ethical,
            <br />
            and accessible research
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 order-2 lg:order-1"
          >
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-5 sm:p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2F3C96] mb-3">
                Bridging the Gap in Healthcare
              </h3>
              <div className="space-y-2.5">
                <p className="text-xs sm:text-sm text-[#787878] leading-relaxed">
                  Collabiora is a revolutionary platform designed to connect patients
                  with medical researchers, facilitating collaboration that drives
                  healthcare innovation forward.
                </p>
                <p className="text-xs sm:text-sm text-[#787878] leading-relaxed">
                  We believe that meaningful connections between patients and
                  researchers can accelerate medical breakthroughs, improve patient
                  outcomes, and advance the future of healthcare.
                </p>
                <p className="text-xs sm:text-sm text-[#787878] leading-relaxed">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {[
                {
                  icon: <TargetIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
                  title: "Patient-Centered",
                  description: "Designed with patients in mind, making it easy to find and participate in relevant research.",
                  color: "from-[#D0C4E2] to-[#D0C4E2]/60",
                },
                {
                  icon: <UsersIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
                  title: "Community-Focused",
                  description: "Researchers can participate in forums, share insights, and monetize their expertise while building a collaborative research community.",
                  color: "from-[#2F3C96]/20 to-[#D0C4E2]/40",
                },
                {
                  icon: <ResearchIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
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
                  className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border border-white/30 hover:border-[#2F3C96]/40 transition-all duration-300`}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-lg flex items-center justify-center text-[#2F3C96] shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-[#2F3C96] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-[#787878] leading-relaxed">
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

