import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shri Krishna Pandey — Full-Stack Developer & AI Systems Builder",
  description:
    "Portfolio of Shri Krishna Pandey — Full-Stack Developer specializing in React, Next.js, Python, and AI-integrated systems. Explore projects, skills, and interactive experiments.",
  keywords: [
    "Shri Krishna Pandey",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "AI Developer",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Shri Krishna Pandey" }],
  openGraph: {
    title: "Shri Krishna Pandey — Full-Stack Developer & AI Systems Builder",
    description:
      "Explore the projects, skills, and interactive experiments of Shri Krishna Pandey.",
    type: "website",
    locale: "en_US",
    siteName: "Shri Krishna Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Krishna Pandey — Full-Stack Developer & AI Systems Builder",
    description:
      "Explore the projects, skills, and interactive experiments of Shri Krishna Pandey.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${syne.variable} h-full antialiased`}
    >
      <body
        className="noise-overlay min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
