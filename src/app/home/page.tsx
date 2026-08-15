"use client";

import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import KonamiCode from "@/components/easter-eggs/KonamiCode";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <KonamiCode />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />

        {/* Playground Teaser Section */}
        <section
          id="playground"
          className="section-padding"
        >
          <div className="content-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 md:p-12 text-center"
            >
              {/* Decorative ambient glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-accent)] rounded-full opacity-[0.03] blur-[100px]" />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-4xl mb-4">🎮</span>
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] mb-4">
                  Interactive Playground
                </h2>
                <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-8 leading-relaxed">
                  Mini-games and experiments built with React, TypeScript, and
                  clean state management. Because building things should be fun.
                </p>
                <Link
                  href="/playground"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg-deep)] font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
                >
                  Enter the Arcade
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
