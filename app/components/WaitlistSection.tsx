"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";
import { TargetIcon, ResearchIcon, CollaborationIcon } from "./Icons";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F3C96] mb-4">
            Join Our Waitlist
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
  );
}

