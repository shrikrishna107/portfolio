'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/data/projectsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding" ref={sectionRef}>
      <div className="content-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16 md:mb-24"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-[var(--color-primary)]"></span>
            <span className="text-sm font-semibold tracking-wider text-[var(--color-primary)] uppercase">
              Projects
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-6"
          >
            Things I&apos;ve Built
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-lg text-[var(--color-text-secondary)] max-w-2xl"
          >
            Each project represents a real problem I wanted to solve.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <div className="flex flex-col gap-16 md:gap-24 mb-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id || project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-stretch group`}
              >
                {/* Visual / Image Side Placeholder */}
                <div className="w-full lg:w-1/2 rounded-xl bg-[var(--color-bg-elevated)] border border-white/5 overflow-hidden flex items-center justify-center p-8 transition-colors duration-300 group-hover:border-[var(--color-primary)]/30 min-h-[300px] lg:min-h-[400px] relative">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                      {project.category}
                    </span>
                  </div>
                  <div className="text-center opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                    <h3 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-text)]">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-[var(--color-text-secondary)] text-lg mb-6 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-4 mb-8">
                    {project.problem && (
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-2">The Problem</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">{project.problem}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-2">The Approach</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">{project.solution}</p>
                      </div>
                    )}
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                            <span className="text-[var(--color-primary)] mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-elevated)] border border-white/5 text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-lg bg-[var(--color-primary)] text-black font-semibold text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-lg bg-transparent border border-white/20 text-[var(--color-text)] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)]"
                      >
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-text)]">
                More Experiments & Tools
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id || project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col p-6 rounded-xl bg-[var(--color-bg-elevated)] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-black/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      {project.category}
                    </span>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-[var(--color-primary)] transition-colors"
                          aria-label={`View ${project.title} source code`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-[var(--color-primary)] transition-colors"
                          aria-label={`Visit ${project.title} live demo`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-[var(--color-text-muted)]">
                        {tech}
                        {i < project.technologies.length - 1 && <span className="ml-2 opacity-30">•</span>}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
