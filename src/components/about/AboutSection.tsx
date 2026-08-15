'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile, education } from '@/data/profileData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding">
      <div className="content-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                About
              </span>
              <div className="h-[1px] w-24 bg-[var(--color-accent)]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)]">
              The Story So Far
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Left: About Text (~60%) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              {profile.about.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[var(--color-text-secondary)] leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {/* Core Philosophy Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
                  <div className="text-[var(--color-accent)] font-bold text-sm mb-1">Architecture First</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Clean component state machines and decoupled API workflows.</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
                  <div className="text-[var(--color-accent)] font-bold text-sm mb-1">AI Pragmatism</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Integrating LLMs and voice pipelines to solve actual user workflows.</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Education Card (~40%) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col gap-8 bg-[var(--color-bg-card)] border border-[var(--color-border)] p-8 rounded-2xl"
            >
              <div className="flex flex-col gap-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-primary)] flex items-center gap-2">
                  <span>🎓</span> Academic Journey
                </h3>
                <div className="relative pl-6 border-l border-[var(--color-border)] flex flex-col gap-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-bg-card)] shadow-[0_0_8px_rgba(212,168,67,0.5)]" />
                      
                      <div className="flex flex-col gap-1">
                        <span className="text-[var(--color-accent)] text-xs font-semibold tracking-wider font-mono">
                          {edu.period}
                        </span>
                        <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                          {edu.degree}
                        </h4>
                        <span className="text-sm text-[var(--color-text-secondary)]">
                          {edu.institution}
                        </span>
                        {edu.cgpa && (
                          <span className="text-xs font-medium text-[var(--color-accent)]/90 mt-0.5">
                            CGPA: {edu.cgpa}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-[1px] bg-[var(--color-border)]" />

              <div className="flex flex-col gap-3">
                <h4 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-text-primary)]">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1.5 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
