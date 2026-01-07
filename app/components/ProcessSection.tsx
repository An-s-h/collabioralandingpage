"use client";

import { motion } from "framer-motion";
import { UsersIcon, CollaborationIcon, ResearchIcon } from "./Icons";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
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
  );
}

