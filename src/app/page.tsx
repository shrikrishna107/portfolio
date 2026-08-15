"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <main className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F5F0E8] overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  rotate: [0, 10, 0],
                }
          }
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A843] rounded-full mix-blend-screen filter blur-[120px] opacity-10"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 40, 0],
                  x: [0, -30, 0],
                  rotate: [0, -15, 0],
                }
          }
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] border border-[#D4A843] rounded-full opacity-[0.04] mix-blend-overlay"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.03, 0.06, 0.03],
                }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[2px] bg-gradient-to-r from-transparent via-[#D4A843] to-transparent opacity-10 rotate-45"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="z-10 flex flex-col items-center text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 text-xs font-semibold uppercase tracking-widest text-[#D4A843] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-ping" />
          Interactive Portfolio
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-[family-name:var(--font-display)] tracking-tight mb-4 text-[#F5F0E8]"
        >
          Shri Krishna Pandey
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-[#D4A843] font-medium tracking-wide mb-8"
        >
          Full-Stack Developer & AI Systems Builder
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="w-16 h-[1px] bg-[#D4A843] opacity-30 mb-8"
        />

        <motion.p
          variants={itemVariants}
          className="text-[#A8A29E] text-base md:text-lg max-w-xl leading-relaxed mb-12"
        >
          Welcome to my digital workspace. Translating algorithmic logic and artificial intelligence into responsive, purposeful web experiences.
        </motion.p>

        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Link
            href="/home"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-lg overflow-hidden"
          >
            <span className="absolute inset-0 border border-[#D4A843] opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <span className="absolute inset-0 bg-[#D4A843] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
            <span className="relative text-[#F5F0E8] group-hover:text-[#D4A843] transition-colors duration-300 flex items-center gap-2">
              Step Inside
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Indicator */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-[#A8A29E]">
          Explore
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#D4A843] to-transparent"
        />
      </motion.div>
    </main>
  );
}
