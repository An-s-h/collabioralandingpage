"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Award,
  Search,
  BookOpen,
  Users,
  DollarSign,
  Sparkles,
  User,
  MessageSquare,
} from "lucide-react";

const GetStartedSection = () => {
  const patientPoints = [
    {
      text: "Select the health conditions you want to focus on",
      icon: Search,
    },
    {
      text: "Get tailored insights and personalized content",
      icon: Sparkles,
    },
    {
      text: "Engage in discussions and discover new resources",
      icon: MessageSquare,
    },
  ];

  const researcherPoints = [
    {
      text: "Specify your research specialties and areas of interest",
      icon: Award,
    },
    {
      text: "Connect with qualified collaborators worldwide",
      icon: Users,
    },
    {
      text: "Monetize your expertise through research and consultations",
      icon: DollarSign,
    },
  ];

  const PatientCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group relative"
    >
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
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2.5 rounded-lg relative"
              style={{ backgroundColor: "#D0C4E2" }}
            >
              <Stethoscope className="w-5 h-5" style={{ color: "#2F3C96" }} />
              {/* Light purple glow */}
              <div
                className="absolute inset-0 rounded-lg opacity-30 blur-sm"
                style={{ backgroundColor: "#D0C4E2" }}
              />
            </motion.div>
            <div>
              <h3
                className="text-lg sm:text-xl font-bold"
                style={{ color: "#2F3C96" }}
              >
                For Patients & Caregivers
              </h3>
            </div>
          </motion.div>

          <p
            className="text-sm mb-5 leading-relaxed"
            style={{ color: "#787878" }}
          >
            Access world-class medical expertise and participate in cutting-edge
            research tailored to your health journey.
          </p>

          <div className="space-y-3 mb-5 relative">
            {/* Light purple decorative dots */}
            <div
              className="absolute -left-2 top-1/2 w-1 h-1 rounded-full opacity-40"
              style={{ backgroundColor: "#D0C4E2" }}
            />
            {patientPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 cursor-pointer transition-all relative group"
                >
                  {/* Light purple accent line on hover */}
                  <div
                    className="absolute -left-1 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "#D0C4E2" }}
                  />
                  <div
                    className="p-2.5 rounded-lg shrink-0 transition-all duration-300 group-hover:shadow-md"
                    style={{ backgroundColor: "#D0C4E2" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#2F3C96" }} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#2F3C96" }}
                  >
                    {point.text}
                  </span>
                </div>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 text-white shadow-lg hover:shadow-xl"
            style={{
              background: `linear-gradient(135deg, #2F3C96 0%, #474F97 100%)`,
            }}
          >
            Get Started
            <motion.div whileHover={{ x: 4 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const ResearcherCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className="relative rounded-xl overflow-hidden border h-full flex flex-col transition-all duration-500 group-hover:shadow-xl"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "#D0C4E2",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 242, 248, 0.95) 100%)",
        }}
      >
        {/* Decorative accent elements - Light Purple */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20"
          style={{ backgroundColor: "#D0C4E2" }}
        />
        <div
          className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-15 blur-xl transition-all duration-500 group-hover:opacity-25"
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
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-2.5 rounded-lg relative"
              style={{ backgroundColor: "#D0C4E2" }}
            >
              <Sparkles className="w-5 h-5" style={{ color: "#2F3C96" }} />
              {/* Light purple glow */}
              <div
                className="absolute inset-0 rounded-lg opacity-30 blur-sm"
                style={{ backgroundColor: "#D0C4E2" }}
              />
            </motion.div>
            <div>
              <h3
                className="text-lg sm:text-xl font-bold"
                style={{ color: "#2F3C96" }}
              >
                For Researchers
              </h3>
            </div>
          </motion.div>

          <p
            className="text-sm mb-5 leading-relaxed"
            style={{ color: "#787878" }}
          >
            Showcase your expertise globally, connect with peers, and unlock new
            revenue streams from your research.
          </p>

          <div className="space-y-3 mb-5 relative">
            {/* Light purple decorative dots */}
            <div
              className="absolute -left-2 top-1/2 w-1 h-1 rounded-full opacity-40"
              style={{ backgroundColor: "#D0C4E2" }}
            />
            {researcherPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 cursor-pointer transition-all relative group"
                >
                  {/* Light purple accent line on hover */}
                  <div
                    className="absolute -left-1 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "#D0C4E2" }}
                  />
                  <div
                    className="p-2.5 rounded-lg shrink-0 transition-all duration-300 group-hover:shadow-md"
                    style={{ backgroundColor: "#D0C4E2" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#2F3C96" }} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#2F3C96" }}
                  >
                    {point.text}
                  </span>
                </div>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/onboard/researcher")}
            className="w-full py-3 px-5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
            style={{
              background: `linear-gradient(135deg, #2F3C96 0%, #474F97 100%)`,
            }}
          >
            Get Started
            <motion.div whileHover={{ x: 4 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative pb-8 pt-4 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight"
            style={{ color: "#2F3C96" }}
          >
            Get Started Today
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-[#D0C4E2] mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-[#787878] max-w-3xl mx-auto leading-relaxed">
            Join a community of patients and researchers working together to
            advance healthcare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 items-stretch">
          <PatientCard />
          <ResearcherCard />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;

