'use client'

export default function Footer() {
  const currentYear = 2026

  return (
    <footer className="border-t border-border-subtle bg-bg-primary py-8">
      <div className="content-container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-semibold text-text-primary text-lg">
            Shri Krishna Pandey
          </p>
          <p className="text-text-secondary text-sm">
            © {currentYear} • Designed & Built with intention.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/shri-krishna-pandey-173a29292/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          
          <a 
            href="https://github.com/shrikrishna107" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          
          <a 
            href="https://leetcode.com/u/shrikrishna107" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors p-2"
            aria-label="LeetCode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
