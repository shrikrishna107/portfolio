export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "⟨/⟩",
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "R", "Kotlin"],
  },
  {
    name: "Frontend",
    icon: "◧",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    name: "Backend & APIs",
    icon: "⛁",
    skills: [
      "Node.js",
      "RESTful APIs",
      "Client-Server Architecture",
      "API Integration",
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: "◎",
    skills: [
      "OpenRouter API",
      "Gemini 2.5 Flash",
      "NLP",
      "Speech Recognition",
      "Computer Vision",
      "OpenCV",
    ],
  },
  {
    name: "DSA & CS Fundamentals",
    icon: "⊞",
    skills: [
      "Arrays & Strings",
      "Trees & Graphs",
      "Stacks & Queues",
      "Hashing",
      "Sorting & Searching",
      "Dynamic Programming",
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "⚙",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Vercel",
      "Linux",
      "npm",
    ],
  },
];
