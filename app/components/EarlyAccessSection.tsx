"use client"

import { motion } from "framer-motion"
import { Sparkles, Users, Award, BookOpen, Zap, Crown } from "lucide-react"

export default function EarlyAccessSection() {
  const pricingTiers = [
    {
      rank: "Top 100 Members",
      price: "Free",
      priceSubtext: "lifetime access",
      icon: Crown,
      highlight: true,
      description: "Founding Members",
    },
    {
      rank: "Members 101–200",
      price: "$5",
      priceSubtext: "/month",
      icon: Sparkles,
      highlight: false,
      description: "Early Adopters",
    },
    {
      rank: "Members 201–500",
      price: "$10",
      priceSubtext: "/month flat fee",
      icon: Users,
      highlight: false,
      description: "Community Builders",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Be First In",
      description:
        "Get priority access to new features, exclusive content, and early releases — including clinical trial discovery, emerging research, and community tools.",
    },
    {
      icon: Users,
      title: "Shape the Platform",
      description:
        "Patients and researchers can join our Product Advisory Board, providing direct input into product design and feature development.",
    },
    {
      icon: Award,
      title: "Founding Badges",
      description:
        "Beta Badge with early access to trial-matching tools for patients. Verified Founding Researcher badge for researchers highlighting early platform leadership.",
    },
    {
      icon: BookOpen,
      title: "Free Educational Programming",
      description: "All live webinars and educational events are free for early-access members.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="early-access" className="relative  px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#2F3C96]/5 to-[#D0C4E2]/10 mb-4 border border-[#D0C4E2]/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2F3C96]" />
            <span className="text-xs font-semibold text-[#2F3C96]">Limited Opportunity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F3C96] mb-3 text-balance">Early Access Waitlist</h2>
          <p className="text-base text-[#787878] max-w-xl mx-auto text-balance">
            Join the first 500 members shaping the future of patient-researcher connections with exclusive perks and founding pricing.
          </p>
        </motion.div>

        {/* Pricing Cards - 3 Row Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`relative group rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                  tier.highlight
                    ? "border-[#2F3C96]/30 bg-gradient-to-br from-[#2F3C96]/8 via-[#D0C4E2]/6 to-white shadow-lg hover:shadow-2xl hover:shadow-[#2F3C96]/20"
                    : "border-[#D0C4E2]/40 bg-white/90 backdrop-blur-sm hover:shadow-xl hover:border-[#D0C4E2]/60 hover:bg-white"
                }`}
              >
                {/* Gradient Overlay for Highlight */}
                {tier.highlight && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2F3C96] via-[#D0C4E2] to-[#2F3C96]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2F3C96]/5 via-transparent to-[#D0C4E2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </>
                )}

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <div className="relative p-7">
                  {/* Icon and Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        tier.highlight
                          ? "bg-gradient-to-br from-[#2F3C96] to-[#1f2859] shadow-lg shadow-[#2F3C96]/30"
                          : "bg-gradient-to-br from-[#F5F2F8] to-[#D0C4E2]/20 group-hover:from-[#D0C4E2]/30 group-hover:to-[#D0C4E2]/10"
                      }`}
                    >
                      <IconComponent className={`w-6 h-6 ${tier.highlight ? "text-white" : "text-[#2F3C96]"}`} />
                    </motion.div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm font-semibold text-[#2F3C96] mb-1">{tier.rank}</p>
                      <p className="text-xs text-[#787878] font-medium">{tier.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-4 border-b border-[#D0C4E2]/20">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-extrabold ${tier.highlight ? "bg-gradient-to-r from-[#2F3C96] to-[#1f2859] bg-clip-text text-transparent" : "text-[#2F3C96]"}`}>
                        {tier.price}
                      </span>
                      <span className="text-sm text-[#787878] font-medium">{tier.priceSubtext}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#waitlist"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`block w-full py-3 px-5 rounded-xl font-semibold text-center transition-all duration-300 text-sm relative overflow-hidden ${
                      tier.highlight
                        ? "bg-gradient-to-r from-[#2F3C96] to-[#1f2859] text-white hover:shadow-lg hover:shadow-[#2F3C96]/40"
                        : "bg-gradient-to-r from-[#F5F2F8] to-[#D0C4E2]/10 text-[#2F3C96] hover:from-[#D0C4E2]/20 hover:to-[#D0C4E2]/30 border border-[#D0C4E2]/30"
                    }`}
                  >
                    <span className="relative z-10">{tier.highlight ? "Claim Spot" : "Join Waitlist"}</span>
                    {tier.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1f2859] to-[#2F3C96] opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Benefits Grid - 2x2 */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-[#2F3C96] mb-6 text-center"
          >
            Exclusive Benefits
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="group relative rounded-xl p-6 border border-[#D0C4E2]/40 bg-gradient-to-br from-white to-[#F5F2F8]/50 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-xl hover:border-[#D0C4E2]/60 overflow-hidden"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2F3C96]/5 via-transparent to-[#D0C4E2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2F3C96]/0 via-[#D0C4E2]/50 to-[#2F3C96]/0 group-hover:from-[#2F3C96]/50 group-hover:via-[#D0C4E2] group-hover:to-[#2F3C96]/50 transition-all duration-500" />

                  <div className="relative flex gap-4">
                    <motion.div 
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2F3C96]/10 to-[#D0C4E2]/20 flex items-center justify-center shrink-0 group-hover:from-[#2F3C96]/20 group-hover:to-[#D0C4E2]/30 transition-all duration-300 shadow-sm"
                    >
                      <IconComponent className="w-6 h-6 text-[#2F3C96] group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <div className="flex-1 pt-0.5">
                      <h4 className="font-bold text-[#2F3C96] mb-2 text-base group-hover:text-[#1f2859] transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-[#787878] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>


      </div>
    </section>
  )
}