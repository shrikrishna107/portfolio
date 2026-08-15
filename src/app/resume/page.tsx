import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume — Shri Krishna Pandey',
  description: 'View and download the resume of Shri Krishna Pandey.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F0E8] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/home"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A1A] border border-gray-800 text-gray-400 hover:text-[#D4A843] hover:border-[#D4A843] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
              aria-label="Go back to home"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            </Link>
            <h1 className="text-3xl font-[family-name:var(--font-display)] font-bold">
              Resume
            </h1>
          </div>
          
          <a
            href="/Shri_Krishna_Pandey_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#D4A843] text-[#0F0F0F] font-semibold hover:bg-[#b08b35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A843] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download PDF
          </a>
        </div>

        <div className="bg-[#1A1A1A] rounded-xl border border-gray-800 p-2 sm:p-4 h-[80vh] min-h-[600px] flex flex-col shadow-2xl">
          <object
            data="/Shri_Krishna_Pandey_Resume.pdf"
            type="application/pdf"
            className="w-full h-full rounded-lg"
          >
            <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#0F0F0F] rounded-lg border border-dashed border-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mb-4"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              <h3 className="text-xl font-semibold mb-2">PDF Viewer Not Available</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Your browser does not support viewing PDFs directly. You can download the file to view it on your device.
              </p>
              <a
                href="/Shri_Krishna_Pandey_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843]/10 transition-colors font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download Resume PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
