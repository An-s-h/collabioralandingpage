"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F3C96] mb-3">
            Join Our Waitlist
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-[#D0C4E2] mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-[#787878] max-w-3xl mx-auto leading-relaxed">
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
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  );
}

