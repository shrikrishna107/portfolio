'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { achievements, mentorship, workshops } from '@/data/profileData';

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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="content-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                Experience & Leadership
              </span>
              <div className="h-[1px] w-24 bg-[var(--color-accent)]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)]">
              Leadership, Hackathons & Mentorship
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
              Contributing to the developer community through hands-on technical mentoring, community building, and competitive hackathon engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Achievements & Milestones */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-[var(--color-text-primary)] flex items-center gap-3">
                  <span>🏆</span> Key Achievements
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="px-3 py-1 text-xs font-bold tracking-wider rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                        {achievement.year}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)] font-medium">
                        {achievement.organization}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mentorship & Workshops */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-[var(--color-text-primary)] flex items-center gap-3">
                <span>🌱</span> Mentorship & Community
              </h3>

              <div className="flex flex-col gap-5">
                {mentorship.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                        {item.role}
                      </h4>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-accent)] border border-[var(--color-border)]">
                        {item.year}
                      </span>
                    </div>
                    <div className="text-xs text-[var(--color-accent)]/90 font-medium mb-2">
                      {item.organization}
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Conferences & Technical Workshops Timeline Strip */}
          <motion.div variants={itemVariants} className="mt-4 p-6 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
            <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
              <span>📚</span> Workshops & Technical Summits Attended
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {workshops.map((ws, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex flex-col justify-between">
                  <span className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{ws.title}</span>
                  <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] mt-2">
                    <span>{ws.organization.replace('Delhi-NCR', '')}</span>
                    <span className="text-[var(--color-accent)] font-mono">{ws.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
