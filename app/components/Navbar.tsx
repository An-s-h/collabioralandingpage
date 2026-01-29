"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const isOurMissionPage = pathname === "/our-mission";
  const isHelpfulResourcesPage = pathname === "/helpful-resources";

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first, then scroll
    if (!isHomePage) {
      router.push(`/#${targetId}`);
      // Wait for navigation and DOM to be ready, then scroll
      setTimeout(() => {
        const scrollToElement = () => {
          const element = document.getElementById(targetId);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else {
            // Retry if element not found yet
            setTimeout(scrollToElement, 50);
          }
        };
        scrollToElement();
      }, 200);
      return;
    }
    
    // If on home page, use normal smooth scroll
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md  ">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto py-2 sm:py-0 px-8 sm:px-6 lg:px-14"
        >
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Left Side */}
            {isHomePage ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center cursor-pointer"
                onClick={handleScrollToTop}
              >
                <motion.div
                  animate={{
                    scale: isScrolled ? 1 : 1.3,  
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Collabiora Logo"
                    width={160}
                    height={50}
                    className={`w-auto transition-all duration-300 ${
                      isScrolled ? "h-10 sm:h-12" : "h-12 "
                    }`}
                    priority
                  />
                </motion.div>
              </motion.div>
            ) : (
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: isScrolled ? 1 : 1.3,  
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/logo.png"
                      alt="Collabiora Logo"
                      width={160}
                      height={50}
                      className={`w-auto transition-all duration-300 ${
                        isScrolled ? "h-10 sm:h-12" : "h-12 "
                      }`}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </Link>
            )}

            {/* Desktop Navigation - Right Side */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <motion.a
                href="/our-mission"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 group ${
                  isOurMissionPage
                    ? "text-[#2F3C96] bg-[#D0C4E2]/20"
                    : "text-[#787878] hover:text-[#2F3C96] hover:bg-[#D0C4E2]/20"
                }`}
              >
                Our Mission
                <motion.span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2F3C96] transition-transform duration-300 origin-left ${
                    isOurMissionPage ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </motion.a>
              <motion.a
                href="#how-it-works"
                onClick={(e) => handleSmoothScroll(e, "how-it-works")}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 group ${
                  isHomePage
                    ? "text-[#787878] hover:text-[#2F3C96] hover:bg-[#D0C4E2]/20"
                    : "text-[#787878] hover:text-[#2F3C96] hover:bg-[#D0C4E2]/20"
                }`}
              >
                How It Works
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2F3C96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </motion.a>
              <motion.a
                href="/helpful-resources"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 group ${
                  isHelpfulResourcesPage
                    ? "text-[#2F3C96] bg-[#D0C4E2]/20"
                    : "text-[#787878] hover:text-[#2F3C96] hover:bg-[#D0C4E2]/20"
                }`}
              >
                Helpful Resources
                <motion.span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2F3C96] transition-transform duration-300 origin-left ${
                    isHelpfulResourcesPage ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </motion.a>
              <motion.a
                href="#waitlist"
                onClick={(e) => handleSmoothScroll(e, "waitlist")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2F3C96] text-white px-6 py-2.5 rounded-lg hover:bg-[#253075] transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl"
              >
                Join Waitlist
              </motion.a>
            </div>

            {/* Mobile Hamburger/Close Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-[#2F3C96] p-2 rounded-lg hover:bg-[#D0C4E2]/20 transition-colors relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                className="w-6 h-6 flex items-center justify-center relative"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                {/* Hamburger lines / Cross */}
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: -6 },
                    open: { rotate: 45, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-0.5 bg-[#2F3C96] rounded-full origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0, scale: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute w-full h-0.5 bg-[#2F3C96] rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 6 },
                    open: { rotate: -45, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-0.5 bg-[#2F3C96] rounded-full origin-center"
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu - Drops from top */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md shadow-xl border-b border-[#D0C4E2]/20"
            >
              {/* Close button in mobile menu header */}
              <div className="flex justify-end px-4 pt-4 pb-2">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[#2F3C96] p-2 rounded-lg hover:bg-[#D0C4E2]/20 transition-colors"
                  aria-label="Close menu"
                >
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                </motion.button>
              </div>
              <div className="px-4 py-6">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col space-y-4"
                >
                  <a
                    href="/our-mission"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium text-lg py-3 px-4 rounded-xl transition-colors ${
                      isOurMissionPage
                        ? "text-[#2F3C96] bg-[#D0C4E2]/30"
                        : "text-[#2F3C96] hover:bg-[#D0C4E2]/20"
                    }`}
                  >
                    Our Mission
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={(e) => handleSmoothScroll(e, "how-it-works")}
                    className="text-[#2F3C96] font-medium text-lg py-3 px-4 rounded-xl hover:bg-[#D0C4E2]/20 transition-colors"
                  >
                    How It Works
                  </a>
                  <a
                    href="/helpful-resources"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium text-lg py-3 px-4 rounded-xl transition-colors ${
                      isHelpfulResourcesPage
                        ? "text-[#2F3C96] bg-[#D0C4E2]/30"
                        : "text-[#2F3C96] hover:bg-[#D0C4E2]/20"
                    }`}
                  >
                    Helpful Resources
                  </a>
                  <a
                    href="#waitlist"
                    onClick={(e) => handleSmoothScroll(e, "waitlist")}
                    className="bg-[#2F3C96] text-white font-medium text-lg py-3 px-4 rounded-xl hover:bg-[#253075] transition-colors text-center mt-2"
                  >
                    Join Waitlist
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

