'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const email = "shrikrishnap107@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  return (
    <section id="contact" className="section-padding content-container" ref={ref}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col gap-12"
      >
        <div className="space-y-6 max-w-2xl">
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold">
              Contact
            </h2>
            <div className="h-px bg-primary/30 w-16" />
          </motion.div>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-text-primary">
            Let&apos;s Connect
          </motion.h3>
          <motion.p variants={itemVariants} className="text-lg text-text-secondary leading-relaxed">
            Whether you have a project idea, a collaboration opportunity, or just want to say hello — I&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-4">
          {/* Contact Details */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-col gap-6">
              <div className="bg-bg-secondary p-6 rounded-lg border border-border-subtle">
                <p className="text-sm text-text-secondary mb-2 uppercase tracking-wider">Email</p>
                <div className="flex items-center justify-between gap-4">
                  <a href={`mailto:${email}`} className="text-lg md:text-xl font-medium text-text-primary hover:text-primary transition-colors break-all">
                    {email}
                  </a>
                  <button 
                    onClick={handleCopy}
                    className="p-2 bg-bg-primary border border-border-subtle rounded hover:border-primary/50 text-text-secondary hover:text-primary transition-all flex-shrink-0"
                    title="Copy email"
                  >
                    {copied ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-bg-secondary p-6 rounded-lg border border-border-subtle">
                <p className="text-sm text-text-secondary mb-2 uppercase tracking-wider">Phone</p>
                <a href="tel:+919138100687" className="text-lg md:text-xl font-medium text-text-primary hover:text-primary transition-colors">
                  +91-9138100687
                </a>
              </div>

              <div className="bg-bg-secondary p-6 rounded-lg border border-border-subtle">
                <p className="text-sm text-text-secondary mb-2 uppercase tracking-wider">Location</p>
                <p className="text-lg md:text-xl font-medium text-text-primary">
                  Gorakhpur, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg font-semibold text-text-primary">Find me online</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a 
                href="https://www.linkedin.com/in/shri-krishna-pandey-173a29292/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-bg-secondary border border-border-subtle p-5 rounded-lg hover:border-primary/50 hover:bg-bg-secondary/80 transition-all group"
              >
                <div className="w-10 h-10 rounded bg-bg-primary flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <span className="font-medium text-text-primary">LinkedIn</span>
                <svg className="ml-auto w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>

              <a 
                href="https://github.com/shrikrishna107" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-bg-secondary border border-border-subtle p-5 rounded-lg hover:border-primary/50 hover:bg-bg-secondary/80 transition-all group"
              >
                <div className="w-10 h-10 rounded bg-bg-primary flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </div>
                <span className="font-medium text-text-primary">GitHub</span>
                <svg className="ml-auto w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>

              <a 
                href="https://leetcode.com/u/shrikrishna107" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-bg-secondary border border-border-subtle p-5 rounded-lg hover:border-primary/50 hover:bg-bg-secondary/80 transition-all group"
              >
                <div className="w-10 h-10 rounded bg-bg-primary flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <span className="font-medium text-text-primary">LeetCode</span>
                <svg className="ml-auto w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
