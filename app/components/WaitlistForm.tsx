"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import confetti from "canvas-confetti";
import { getCountries, filterCountries, type Country } from "@/lib/countries";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

// Viral Loops TypeScript declarations
declare global {
  interface Window {
    ViralLoops?: {
      getCampaign: (campaignId?: string) => Promise<ViralLoopsCampaign>;
      campaigns: Record<string, ViralLoopsCampaign>;
    };
  }
}

interface ViralLoopsCampaign {
  identify: (user: {
    email: string;
    firstname?: string;
    lastname?: string;
    extraData?: Record<string, any>;
  }) => Promise<{
    referralCode?: string;
    referralUrls?: Record<string, string>;
  }>;
  getReferrer: () => string | null;
  setReferrer: (referrer: { referralCode: string; refSource?: string }) => void;
  getRank: () => Promise<number>;
  getOrder: () => Promise<number>;
  getUser: () => any;
  info: any;
  getPendingRewards: () => Promise<any>;
  getGivenRewards: () => Promise<any>;
  logout: () => void;
}

export default function WaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [country, setCountry] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [viralLoopsReady, setViralLoopsReady] = useState(false);

  const [roleDropdownRect, setRoleDropdownRect] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const roleButtonRef = useRef<HTMLButtonElement>(null);
  const roleDropdownRef = useRef<HTMLDivElement>(null);
  const countrySearchInputRef = useRef<HTMLInputElement>(null);

  // Wait for Viral Loops to be ready
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if Viral Loops is already loaded
    if (window.ViralLoops) {
      setViralLoopsReady(true);
      return;
    }

    // Listen for Viral Loops ready event
    const handleViralLoopsReady = () => {
      setViralLoopsReady(true);
    };

    window.addEventListener("vlReady", handleViralLoopsReady);

    // Cleanup
    return () => {
      window.removeEventListener("vlReady", handleViralLoopsReady);
    };
  }, []);

  // Load countries on mount
  useEffect(() => {
    getCountries()
      .then(setCountries)
      .catch(console.error)
      .finally(() => setLoadingCountries(false));
  }, []);

  // Get filtered countries based on search
  const getFilteredCountries = (): Country[] => {
    if (!countrySearch.trim()) {
      return countries.slice(0, 50); // Show first 50 countries when no search
    }
    return filterCountries(countrySearch, countries);
  };

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isCountryDropdownOpen && countrySearchInputRef.current) {
      setTimeout(() => {
        countrySearchInputRef.current?.focus();
      }, 100);
    } else if (!isCountryDropdownOpen) {
      // Clear search when dropdown closes
      setCountrySearch("");
    }
  }, [isCountryDropdownOpen]);

  // Update role dropdown position
  const updateRoleDropdownPosition = () => {
    if (!roleButtonRef.current) return;
    const rect = roleButtonRef.current.getBoundingClientRect();
    setRoleDropdownRect({
      top: rect.bottom + 8,
      left: rect.left,
      width: rect.width,
    });
  };

  useEffect(() => {
    if (!showRoleDropdown) return;

    updateRoleDropdownPosition();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateRoleDropdownPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        updateRoleDropdownPosition();
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [showRoleDropdown]);

  // Close role dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        roleDropdownRef.current &&
        !roleDropdownRef.current.contains(e.target as Node) &&
        roleButtonRef.current &&
        !roleButtonRef.current.contains(e.target as Node)
      ) {
        setShowRoleDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleCountrySelect = (selectedCountry: Country) => {
    setCountry(selectedCountry.name.common);
    setCountrySearch("");
    setIsCountryDropdownOpen(false);
  };

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole);
    setShowRoleDropdown(false);
  };

  const roleOptions = [
    { value: "patient", label: "Patient", icon: "👤" },
    { value: "researcher", label: "Researcher", icon: "🔬" },
    { value: "caregiver", label: "Caregiver", icon: "🤝" },
  ];

  const getRoleLabel = () => {
    const selected = roleOptions.find((r) => r.value === role);
    return selected ? selected.label : "Select role";
  };

  const triggerConfetti = () => {
    if (!buttonRef.current) return;
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
  };

  // Helper function to get HubSpot tracking cookie
  const getHubSpotCookie = (): string | undefined => {
    if (typeof document === "undefined") return undefined;

    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "hubspotutk") {
        return value;
      }
    }
    return undefined;
  };

  // Helper function to register user with Viral Loops
  const registerWithViralLoops = async (
    email: string,
    firstName: string,
    lastName: string,
    role?: string,
    country?: string
  ): Promise<void> => {
    if (typeof window === "undefined") {
      console.warn("Viral Loops: Window is undefined (SSR context)");
      return;
    }

    if (!window.ViralLoops) {
      console.warn("Viral Loops: SDK not loaded yet");
      return;
    }

    if (!viralLoopsReady) {
      console.warn("Viral Loops: SDK not ready yet");
      return;
    }

    try {
      console.log("Viral Loops: Starting registration for", email);
      
      // Get the campaign (using default campaign ID from layout.tsx)
      const campaign = await window.ViralLoops.getCampaign();

      if (!campaign) {
        throw new Error("Failed to get Viral Loops campaign");
      }

      // Prepare user data for Viral Loops
      const userData: {
        email: string;
        firstname?: string;
        lastname?: string;
        extraData?: Record<string, any>;
      } = {
        email: email.trim(),
        firstname: firstName.trim(),
        lastname: lastName.trim(),
      };

      // Add extra data (role and country) if provided
      if (role || country) {
        userData.extraData = {};
        if (role) {
          userData.extraData.role = role;
        }
        if (country) {
          userData.extraData.country = country;
        }
      }

      console.log("Viral Loops: Identifying user...");
      
      // Register user with Viral Loops
      const response = await campaign.identify(userData);

      console.log("Viral Loops: Registration successful!");
      
      // Optional: You can use the referral code/URLs if needed
      if (response.referralCode) {
        console.log("Viral Loops referral code:", response.referralCode);
      }
    } catch (error) {
      // Log error but don't block form submission
      console.error("Viral Loops: Registration error:", error);
      throw error; // Re-throw so the caller can handle it
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setStatus("error");
      setMessage("Please fill in all required fields");
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const hubspotCookie = getHubSpotCookie();

      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          role: role || undefined,
          country: country || undefined,
          hubspotCookie: hubspotCookie || undefined, // Send HubSpot tracking cookie
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Set success state FIRST to ensure immediate UI feedback
        setStatus("success");
        setMessage(
          data.alreadyExists
            ? "You're already on our waitlist!"
            : "Successfully added to waitlist!"
        );
        
        // Trigger confetti on success
        setTimeout(() => {
          triggerConfetti();
        }, 100);
        
        // Register with Viral Loops in the background (non-blocking)
        // This runs asynchronously without blocking the UI
        registerWithViralLoops(
          email.trim(),
          firstName.trim(),
          lastName.trim(),
          role || undefined,
          country || undefined
        ).catch((error) => {
          // Silently handle Viral Loops errors - don't affect user experience
          console.error("Viral Loops registration failed:", error);
        });

        // Clear form fields after showing success message for a bit
        setTimeout(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setRole("");
          setCountry("");
          setCountrySearch("");
        }, 2000);
        // Reset status after showing success message longer
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to connect. Please try again later.");
    }
  };

  const isFormValid = firstName.trim() && lastName.trim() && email.trim();

  return (
    <>
      <div className="w-full max-w-2xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          className="relative bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30"
        >
          <div className="space-y-4">
            {/* First Name and Last Name Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name Field */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-[#2F3C96] mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <motion.input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2F3C96] focus:outline-none text-gray-900 placeholder-gray-400 transition-all text-sm"
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              {/* Last Name Field */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-[#2F3C96] mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <motion.input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2F3C96] focus:outline-none text-gray-900 placeholder-gray-400 transition-all text-sm"
                  disabled={status === "loading" || status === "success"}
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#2F3C96] mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <motion.input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2F3C96] focus:outline-none text-gray-900 placeholder-gray-400 transition-all text-sm"
                disabled={status === "loading" || status === "success"}
              />
            </div>

            {/* Role and Country Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Role Field */}
              <div className="relative">
                <label htmlFor="role" className="block text-sm font-semibold text-[#2F3C96] mb-1.5">
                  Your Role
                </label>
                <motion.button
                  ref={roleButtonRef}
                  type="button"
                  onClick={() => {
                    updateRoleDropdownPosition();
                    setShowRoleDropdown(!showRoleDropdown);
                  }}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2F3C96] focus:outline-none text-gray-900 transition-all bg-white text-sm text-left flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === "loading" || status === "success"}
                >
                  <span className={role ? "text-gray-900" : "text-gray-400"}>
                    {getRoleLabel()}
                  </span>
                  <motion.svg
                    animate={{ rotate: showRoleDropdown ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
              </div>

              {/* Country Field */}
              <div className="relative">
                <label htmlFor="country" className="block text-sm font-semibold text-[#2F3C96] mb-1.5">
                  Select Country
                </label>
                <DropdownMenu open={isCountryDropdownOpen} onOpenChange={setIsCountryDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      type="button"
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2F3C96] focus:outline-none text-gray-900 transition-all text-sm text-left flex items-center justify-between bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={status === "loading" || status === "success" || loadingCountries}
                    >
                      <span className={country ? "text-gray-900" : "text-gray-400"}>
                        {country || (loadingCountries ? "Loading..." : "Select country")}
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </motion.button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-[300px] overflow-hidden flex flex-col p-0"
                    align="start"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    {/* Search Input */}
                    <div className="p-2 border-b sticky top-0 bg-white z-10">
                      <input
                        ref={countrySearchInputRef}
                        type="text"
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        placeholder="Search country..."
                        className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-[#2F3C96] focus:outline-none text-sm"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                    </div>
                    {/* Countries List */}
                    <div className="overflow-y-auto max-h-[250px]">
                      {getFilteredCountries().length > 0 ? (
                        getFilteredCountries().map((countryItem) => (
                          <DropdownMenuItem
                            key={countryItem.cca2}
                            onClick={() => handleCountrySelect(countryItem)}
                            className="cursor-pointer focus:bg-[#2F3C96] focus:text-white"
                          >
                            {countryItem.name.common}
                          </DropdownMenuItem>
                        ))
                      ) : (
                        <div className="px-2 py-4 text-sm text-gray-500 text-center">
                          No countries found
                        </div>
                      )}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              ref={buttonRef}
              type="submit"
              disabled={status === "loading" || status === "success" || !isFormValid}
              whileHover={{ scale: status !== "loading" && status !== "success" && isFormValid ? 1.02 : 1 }}
              whileTap={{ scale: status !== "loading" && status !== "success" && isFormValid ? 0.98 : 1 }}
              className="w-full px-6 py-3 bg-[#2F3C96] text-white rounded-xl hover:bg-[#253075] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm"
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
          <AnimatePresence mode="wait">
            {message && (
              <motion.div
                key={status}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-4 rounded-xl text-center text-sm font-medium shadow-lg ${status === "success"
                  ? "bg-green-50 text-green-700 border-2 border-green-300"
                  : "bg-red-50 text-red-700 border-2 border-red-300"
                  }`}
              >
                {status === "success" && (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-6 h-6 mx-auto mb-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                )}
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>

      {/* Portal-based Role Dropdown */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showRoleDropdown && (
              <motion.div
                ref={roleDropdownRef}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="fixed bg-white rounded-xl shadow-2xl border-2 border-gray-200 overflow-hidden"
                style={{
                  top: `${roleDropdownRect.top}px`,
                  left: `${roleDropdownRect.left}px`,
                  width: `${roleDropdownRect.width}px`,
                  zIndex: 999999,
                }}
              >
                {roleOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleRoleSelect(option.value)}
                    className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 ${role === option.value
                      ? "bg-[#2F3C96] text-white"
                      : "text-gray-900 hover:bg-gray-50"
                      } first:rounded-t-xl last:rounded-b-xl`}
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm font-medium">{option.label}</span>
                    {role === option.value && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 ml-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

    </>
  );
}
