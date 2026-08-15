export interface EducationItem {
  degree: string;
  institution: string;
  university?: string;
  period: string;
  cgpa?: string;
  status: "current" | "completed";
}

export interface AchievementItem {
  title: string;
  year: string;
  organization: string;
  description: string;
}

export interface MentorshipItem {
  role: string;
  organization: string;
  year: string;
  description: string;
}

export interface WorkshopItem {
  title: string;
  organization: string;
  year: string;
}

export const profile = {
  name: "Shri Krishna Pandey",
  shortName: "SKP",
  title: "Full-Stack Developer & AI Systems Builder",
  tagline: "Building at the intersection of algorithmic logic and creative interfaces.",
  email: "shrikrishnap107@gmail.com",
  phone: "+91-9138100687",
  location: "Gorakhpur, Uttar Pradesh, India",
  linkedin: "https://www.linkedin.com/in/shri-krishna-pandey-173a29292/",
  github: "https://github.com/shrikrishna107",
  leetcode: "https://leetcode.com/u/shrikrishna107",
  resumeUrl: "/Shri_Krishna_Pandey_Resume.pdf",
  photoUrl: "/shri-krishna-pandey.jpg",
  about: [
    "I build software that sits at the crossroads of full-stack engineering and artificial intelligence — from interactive story engines powered by large language models to voice assistants that understand natural conversation.",
    "Currently pursuing my MCA at JSS Academy of Technical Education, Noida, I graduated with a BCA from SRM University Delhi-NCR with a CGPA of 8.41/10. My foundation in data structures and algorithms, built through Java and C, informs everything I design — clean architecture, deliberate state management, and systems that scale.",
    "Beyond code, I founded TechSpace, a developer community where I mentor peers in web development, Android, and competitive programming. Winning the SRM Builds 5.0 hackathon reinforced my belief that the best software emerges when technical rigor meets creative ambition.",
  ],
  languages: ["English", "German", "Hindi"],
};

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "JSS Academy of Technical Education, Noida",
    university: "Dr. A.P.J. Abdul Kalam Technical University",
    period: "2026 – Present",
    status: "current",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SRM University Delhi-NCR, Sonepat",
    period: "2023 – 2026",
    cgpa: "8.41 / 10",
    status: "completed",
  },
  {
    degree: "Post Metric (Non-medical field - 12th)",
    institution: "Little Flower School, Gorakhpur",
    period: "2022 – 2023",
    cgpa: "7.58 / 10",
    status: "completed",
  },
  {
    degree: "Metric (10th standard)",
    institution: "Little Flower School, Gorakhpur",
    period: "2020 – 2021",
    cgpa: "9.16 / 10",
    status: "completed",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "SRM Builds 5.0 — Hackathon Winner",
    year: "2024",
    organization: "SRM University",
    description:
      "Won the university-wide hackathon by designing and implementing a competitive technical solution under intense sprint constraints.",
  },
  {
    title: "TechSpace Community — Founding & Core Member",
    year: "2025",
    organization: "SRM University Delhi-NCR",
    description:
      "Co-founded and spearhead an active student developer ecosystem organizing hands-on workshops in web dev, Android, and algorithm design.",
  },
  {
    title: "Prompt Engineering & Generative AI",
    year: "2025",
    organization: "DevTown",
    description:
      "Certified in generative AI architectures, prompt design techniques, and real-world LLM orchestration.",
  },
];

export const mentorship: MentorshipItem[] = [
  {
    role: "Web Development Workshop Mentor",
    organization: "SRM University",
    year: "2025",
    description: "Mentored 100+ students in modern full-stack web technologies, React.js fundamentals, and API design.",
  },
  {
    role: "Android Development Workshop Mentor",
    organization: "SRM University Delhi-NCR",
    year: "2025",
    description: "Guided students through Kotlin, UI layout hierarchies, and native mobile architecture patterns.",
  },
  {
    role: "DSA Using Java Workshop Mentor",
    organization: "SRM University Delhi-NCR",
    year: "2025",
    description: "Conducted problem-solving sessions on trees, graphs, sorting, searching, and recursion in Java.",
  },
  {
    role: "Summer Training Program Web Dev Mentor",
    organization: "SRM University",
    year: "2024",
    description: "Trained cohort participants on client-server architecture, responsive CSS, and JavaScript event loops.",
  },
];

export const workshops: WorkshopItem[] = [
  { title: "Verge – Technical Fest", organization: "SRM University Delhi-NCR", year: "2025" },
  { title: "Web Development Workshop", organization: "SRM University Delhi-NCR", year: "2025" },
  { title: "Python Workshop", organization: "SRM University Delhi-NCR", year: "2024" },
  { title: "API Workshop", organization: "SRM University Delhi-NCR", year: "2023" },
  { title: "UI/UX Workshop", organization: "SRM University Delhi-NCR", year: "2023" },
];
