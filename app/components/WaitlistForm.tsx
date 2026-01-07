"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ShineBorder } from "@/components/ui/shine-border";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const triggerConfetti = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      confetti({
        particleCount: 100,
        angle: 90,
        spread: 70,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        flat: false,
        ticks: 200,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ['#2F3C96', '#D0C4E2', '#253075', '#787878', '#F5F5F5'],
        shapes: ['square', 'circle'],
        zIndex: 1000,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          data.alreadyExists
            ? "You're already on our waitlist!"
            : "Successfully added to waitlist!"
        );
        setName("");
        setEmail("");
        // Trigger confetti on success
        setTimeout(() => {
          triggerConfetti();
        }, 100);
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 3000);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to connect. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 overflow-hidden"
      >
        <ShineBorder
          className="rounded-2xl"
          duration={14}
          shineColor={["#2F3C96", "#D0C4E2", "#253075"]}
          borderWidth={2}
        />
        <div className="relative z-10 space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[#2F3C96] mb-2">
              Full Name
            </label>
            <motion.input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              whileFocus={{ scale: 1.01 }}
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#2F3C96] focus:outline-none text-gray-900 placeholder-gray-400 transition-all"
              disabled={status === "loading"}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#2F3C96] mb-2">
              Email Address
            </label>
            <motion.input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              whileFocus={{ scale: 1.01 }}
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#2F3C96] focus:outline-none text-gray-900 placeholder-gray-400 transition-all"
              disabled={status === "loading"}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            ref={buttonRef}
            type="submit"
            disabled={status === "loading" || !name.trim() || !email.trim()}
            whileHover={{ scale: status !== "loading" && name.trim() && email.trim() ? 1.02 : 1 }}
            whileTap={{ scale: status !== "loading" && name.trim() && email.trim() ? 0.98 : 1 }}
            className="w-full px-8 py-4 bg-[#2F3C96] text-white rounded-xl hover:bg-[#253075] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Joining...
              </span>
            ) : (
              "Join Waitlist"
            )}
          </motion.button>
        </div>

        {/* Message */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`relative z-10 mt-6 p-4 rounded-xl text-center ${
                status === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.div>
  );
}
