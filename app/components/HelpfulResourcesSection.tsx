"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function HelpfulResourcesSection() {
  return (
    <section id="helpful-resources" className="relative pt-5 pb-5 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F3C96] mb-2">
            Helpful Resources
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-[#D0C4E2] mx-auto mb-3"></div>
          <p className="text-sm sm:text-base text-[#787878] max-w-2xl mx-auto">
            Access valuable guides and tools to help you navigate your health research journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="group relative">
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div
              className="relative rounded-xl overflow-hidden backdrop-blur-sm border h-full flex flex-col transition-all duration-500 group-hover:shadow-xl"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#D0C4E2",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 242, 248, 0.95) 100%)",
              }}
            >
              {/* Decorative corner elements - Light Purple */}
              <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20"
                style={{ backgroundColor: "#D0C4E2" }}
              />
              <div
                className="absolute -top-8 -right-8 w-16 h-16 rounded-full opacity-15 transition-all duration-500 group-hover:opacity-25"
                style={{ backgroundColor: "#D0C4E2" }}
              />
              {/* Light purple accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background:
                    "linear-gradient(90deg, #D0C4E2, rgba(208, 196, 226, 0.3))",
                }}
              />

              <div className="relative p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2.5 rounded-lg relative"
                      style={{ backgroundColor: "#D0C4E2" }}
                    >
                      <FileText className="w-5 h-5" style={{ color: "#2F3C96" }} />
                      {/* Light purple glow */}
                      <div
                        className="absolute inset-0 rounded-lg opacity-30 blur-sm"
                        style={{ backgroundColor: "#D0C4E2" }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold mb-3"
                        style={{ color: "#2F3C96" }}
                      >
                        The Clinical Trial Navigator
                      </h3>
                      <p
                        className="text-sm mb-5 leading-relaxed"
                        style={{ color: "#787878" }}
                      >
                        A step-by-step guide to help you navigate clinical trials and make informed health decisions.
                      </p>
                      <div className="space-y-3 mb-5 relative">
                        {/* Light purple decorative dots */}
                        <div
                          className="absolute -left-2 top-1/2 w-1 h-1 rounded-full opacity-40"
                          style={{ backgroundColor: "#D0C4E2" }}
                        />
                        <div className="flex items-center gap-2.5 cursor-pointer transition-all relative group">
                          {/* Light purple accent line on hover */}
                          <div
                            className="absolute -left-1 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ backgroundColor: "#D0C4E2" }}
                          />
                          <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: "#2F3C96" }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: "#2F3C96" }}
                          >
                            Gather your search keys and find relevant trials
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 cursor-pointer transition-all relative group">
                          <div
                            className="absolute -left-1 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ backgroundColor: "#D0C4E2" }}
                          />
                          <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: "#2F3C96" }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: "#2F3C96" }}
                          >
                            Understand eligibility criteria and requirements
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 cursor-pointer transition-all relative group">
                          <div
                            className="absolute -left-1 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ backgroundColor: "#D0C4E2" }}
                          />
                          <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: "#2F3C96" }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: "#2F3C96" }}
                          >
                            Prepare questions for your healthcare specialist
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 cursor-pointer transition-all relative group">
                          <div
                            className="absolute -left-1 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ backgroundColor: "#D0C4E2" }}
                          />
                          <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: "#2F3C96" }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: "#2F3C96" }}
                          >
                            Take charge of your health journey with Collabiora
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <motion.a
                      href="/The Clinical Trial Navigator.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 px-5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
                      style={{
                        background: `linear-gradient(135deg, #2F3C96 0%, #474F97 100%)`,
                      }}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF Guide</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

