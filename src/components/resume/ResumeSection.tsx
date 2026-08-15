'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  'Python',
  'Java',
  'React.js',
  'Next.js',
  'TypeScript',
  'DSA',
  'AI/ML',
  'Node.js'
];

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#D4A843]"></div>
            <span className="text-[#D4A843] uppercase tracking-wider text-sm font-semibold">
              Resume
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold mb-6">
            My Resume
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            A comprehensive overview of my education, skills, and projects.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#D4A843] text-[#0F0F0F] font-semibold hover:bg-[#b08b35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A843] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
            >
              View Full Resume
            </Link>
            <a
              href="/Shri_Krishna_Pandey_Resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#D4A843] text-[#D4A843] font-semibold hover:bg-[#D4A843] hover:text-[#0F0F0F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A843] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
            >
              Download PDF
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-8 max-w-4xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-800 pb-6 gap-4">
            <h3 className="text-2xl font-[family-name:var(--font-display)] text-[#F5F0E8]">
              Highlights
            </h3>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#D4A843]/10 text-[#D4A843] border border-[#D4A843]/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              SRM Builds 5.0 Hackathon Winner
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[#D4A843] font-semibold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                Education
              </h4>
              <div className="space-y-6">
                <div className="relative pl-4 border-l-2 border-gray-800">
                  <div className="absolute w-3 h-3 bg-[#1A1A1A] border-2 border-[#D4A843] rounded-full -left-[7px] top-1.5"></div>
                  <p className="text-[#F5F0E8] font-medium text-lg">Master of Computer Applications</p>
                  <p className="text-gray-400 text-sm mt-1">JSS University Noida</p>
                  <p className="text-gray-500 text-sm mt-1">2026-Present</p>
                </div>
                <div className="relative pl-4 border-l-2 border-gray-800">
                  <div className="absolute w-3 h-3 bg-[#1A1A1A] border-2 border-gray-600 rounded-full -left-[7px] top-1.5"></div>
                  <p className="text-[#F5F0E8] font-medium text-lg">Bachelor of Computer Applications</p>
                  <p className="text-gray-400 text-sm mt-1">SRM University Delhi-NCR</p>
                  <p className="text-[#D4A843] text-sm mt-1 font-medium">CGPA 8.41/10</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-[#D4A843] font-semibold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                Key Skills
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#0F0F0F] border border-gray-800 rounded-lg text-sm text-gray-300 font-medium hover:border-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
