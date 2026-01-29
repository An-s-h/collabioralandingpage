"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { UsersIcon } from "./Icons"
import { FollowerPointerCard } from "@/components/ui/following-pointer"

export default function MeetOurTeamSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768); // md breakpoint
      }, 150);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timeoutId);
    };
  }, [])

  const teamMembers = [
    {
      name: "Sanskriti Sasikumar",
      role: "Co-Founder and CEO",
      description: "Physician-scientist with a passion to democratize medical research",
      image: "/Sanskriti.png",
    },
    {
      name: "Esther Feldman",
      role: "Co-Founder and COO",
      description: "Policy advisor and researcher dedicated to bridging science and public understanding",
      image: "/Esther.png",
    },
    {
      name: "Bhavya Bansal",
      role: "CTO",
      description: "Technology leader dedicated to building scalable and reliable digital platforms.",
      image: "/Bhavya.jpg",
    },
    {
      name: "Ansh Chachra",
      role: "Full Stack Developer",
      description: "Full stack developer dedicated to crafting intuitive and high-performance web experiences.",
      image: "/Ansh.jpg",
    },
  ]

  return (
    <section id="meet-our-team" className="relative pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F3C96] mb-3">Meet Our Team</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-[#D0C4E2] mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-[#787878] max-w-3xl mx-auto leading-relaxed">
            The passionate individuals driving healthcare innovation forward
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
          {teamMembers.map((member, index) => {
            // Assign specific colors to each card: Yellow, Gray, Red, Cyan
            const colors = ["#eab308", "#737373", "#ef4444", "#06b6d4"];
            const cardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full flex flex-col"
              >
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-5 sm:p-6 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D0C4E2]/0 to-[#2F3C96]/0 group-hover:from-[#D0C4E2]/10 group-hover:to-[#2F3C96]/10 transition-all duration-300 rounded-xl"></div>

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mb-5 relative"
                    >
                      {member.image ? (
                        <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ) : (
                        <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square bg-gradient-to-br from-[#D0C4E2]/30 to-[#2F3C96]/30 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="w-20 h-20 mx-auto mb-3 bg-white/50 rounded-full flex items-center justify-center">
                              <UsersIcon className="w-10 h-10 text-[#2F3C96]" />
                            </div>
                            
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Name and Role */}
                    <div className="text-center space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#2F3C96] group-hover:text-[#253075] transition-colors mb-2">
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold text-[#787878] uppercase tracking-wide mb-3">{member.role}</p>
                        <div className="w-12 h-0.5 bg-[#D0C4E2] mx-auto mb-3 group-hover:w-16 transition-all duration-300"></div>
                      </div>
                      <p className="text-sm text-[#787878] leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );

            return isMobile ? (
              <div key={index} className="group relative h-full flex">
                {cardContent}
              </div>
            ) : (
              <FollowerPointerCard key={index} title={member.name} className="group relative h-full flex" color={colors[index]}>
                {cardContent}
              </FollowerPointerCard>
            );
          })}
        </div>
      </div>
    </section>
  )
}
