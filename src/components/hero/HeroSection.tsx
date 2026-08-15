'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0F0F0F]">
      {/* Background floating accent shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#D4A843] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D4A843] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.07] pointer-events-none" />

      <div className="content-container w-full max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">
                MCA Student @ JSS University
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-[#F5F0E8]"
            >
              Shri Krishna <br />
              <span className="text-[#D4A843]">Pandey</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 
              variants={itemVariants} 
              className="text-xl md:text-2xl font-medium text-gray-300 mb-6"
            >
              Full-Stack Developer & AI Systems Builder
            </motion.h2>

            {/* Intro Paragraph */}
            <motion.p 
              variants={itemVariants} 
              className="text-base md:text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              Building software at the intersection of full-stack engineering and artificial intelligence. From interactive story engines to voice assistants that understand natural conversation.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link 
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#D4A843] text-[#0F0F0F] font-semibold hover:bg-[#e0b754] transition-colors duration-300"
              >
                View Projects
              </Link>
              <a 
                href="/Shri_Krishna_Pandey_Resume.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#D4A843] text-[#D4A843] font-semibold hover:bg-[#D4A843]/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap items-center gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <span className="font-semibold text-[#D4A843]">8.41</span>
                <span>CGPA</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <span className="font-semibold text-[#D4A843]">Winner</span>
                <span>Hackathon</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <span className="font-semibold text-[#D4A843]">6+</span>
                <span>Projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait Photo */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            {/* Image Container */}
            <div className="relative w-72 h-80 md:w-80 md:h-[26rem] lg:w-[400px] lg:h-[480px]">
              {/* Subtle amber glow/shadow behind */}
              <div className="absolute inset-0 bg-[#D4A843] blur-3xl opacity-20 rounded-2xl transform translate-x-4 translate-y-4" />
              
              {/* Decorative Frame Brackets */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#D4A843]/60 rounded-tr-xl z-20" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#D4A843]/60 rounded-bl-xl z-20" />

              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 z-10 bg-[#1A1A1A]">
                <Image
                  src="/shri-krishna-pandey.jpg"
                  alt="Shri Krishna Pandey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 18rem, (max-width: 1024px) 20rem, 25rem"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
