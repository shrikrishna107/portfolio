export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  contribution: string;
  challenges?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "ai" | "web" | "tool";
}

export const projects: Project[] = [
  {
    id: "storymate",
    title: "StoryMate",
    summary:
      "An AI-driven dynamic branching narrative simulator that creates personalized, interactive stories where every choice reshapes the plot in real time.",
    problem:
      "Traditional storytelling is linear. Readers consume a fixed narrative with no agency over plot direction, limiting engagement and re-readability.",
    solution:
      "Built a real-time branching story engine that integrates with the OpenRouter API to generate contextually coherent narrative branches on-the-fly. Each user decision triggers a new AI-generated story arc, creating a truly non-linear reading experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenRouter API",
      "AI/LLM Integration",
    ],
    features: [
      "Dynamic AI-generated branching storylines",
      "Real-time narrative generation via OpenRouter API",
      "Multiple story genres and themes",
      "Decision-tree based plot progression",
      "Responsive, immersive reading interface",
    ],
    contribution:
      "Designed the full architecture — from the branching state machine to the API integration layer and the frontend reading experience. Sole developer.",
    challenges:
      "Maintaining narrative coherence across deeply nested branches while keeping API response times fast enough for a fluid reading experience.",
    liveUrl: "https://story-mate.vercel.app/",
    featured: true,
    category: "ai",
  },
  {
    id: "ai-roadmap-generator",
    title: "AI Roadmap Generator",
    summary:
      "An automated learning-path generator that creates curated roadmaps with linked YouTube tutorials and reference notes for any technology or topic.",
    problem:
      "Learners spend excessive time searching for structured paths through fragmented online resources, especially when entering a new technology domain.",
    solution:
      "Built a system that uses AI to analyze a target topic, decompose it into progressive learning milestones, and automatically curate relevant YouTube tutorials and study notes for each milestone.",
    technologies: [
      "Python",
      "AI/ML",
      "Web Scraping",
      "API Integration",
      "Content Curation",
    ],
    features: [
      "AI-powered topic decomposition into learning stages",
      "Automated YouTube tutorial curation per milestone",
      "Structured reference notes and resource linking",
      "Progressive difficulty ordering",
    ],
    contribution:
      "Designed the topic-analysis pipeline, built the YouTube content discovery and ranking logic, and assembled the final roadmap generation workflow.",
    featured: true,
    category: "ai",
  },
  {
    id: "jarvis-voice-assistant",
    title: "Jarvis Voice Assistant",
    summary:
      "A Python-based AI voice assistant powered by Google Gemini 2.5 Flash, capable of natural spoken-language interaction and task execution.",
    problem:
      "Existing voice assistants often feel rigid and scripted. Conversational AI has advanced, but integrating it into a fluid, local voice interaction loop remains non-trivial.",
    solution:
      "Built a local voice assistant pipeline: speech recognition captures user input, Gemini 2.5 Flash processes and generates intelligent responses, and text-to-speech delivers natural-sounding replies — all orchestrated in a continuous interaction loop.",
    technologies: [
      "Python",
      "Gemini 2.5 Flash API",
      "Speech Recognition",
      "Text-to-Speech",
      "NLP",
    ],
    features: [
      "Real-time voice interaction loop",
      "Gemini 2.5 Flash for intelligent response generation",
      "Speech-to-text and text-to-speech pipeline",
      "Context-aware conversational flow",
    ],
    contribution:
      "Architected the full voice pipeline — from audio capture to API integration to speech synthesis. Sole developer.",
    featured: true,
    category: "ai",
  },
  {
    id: "handwritten-text-generator",
    title: "Handwritten Text Generator",
    summary:
      "An AI-powered tool that converts typed text into realistic handwritten output, synthesizing organic handwriting styles from trained font models.",
    problem:
      "Generating realistic handwritten text digitally is challenging — standard fonts look mechanical and fail to capture the organic irregularity of real handwriting.",
    solution:
      "Developed an AI font synthesizer that analyzes handwriting style patterns and applies learned variations to produce output that mimics natural pen strokes, pressure shifts, and spacing irregularities.",
    technologies: ["Python", "AI/ML", "Image Processing", "Font Synthesis"],
    features: [
      "AI-generated organic handwriting styles",
      "Variable stroke pressure and spacing simulation",
      "Multiple handwriting style support",
      "High-resolution image output",
    ],
    contribution:
      "Built the handwriting synthesis pipeline including style learning, stroke variation, and image rendering. Sole developer.",
    featured: false,
    category: "ai",
  },
  {
    id: "image-sketch-converter",
    title: "Image Sketch Converter",
    summary:
      "A computational image processing tool that transforms uploaded photographs into pencil-sketch-style renderings using algorithmic filters.",
    problem:
      "Converting photographs into sketch-style art typically requires manual effort in tools like Photoshop, or expensive specialized software.",
    solution:
      "Applied a pipeline of image processing algorithms — grayscale conversion, Gaussian blur, edge detection, and intensity inversion — to produce convincing pencil-sketch renderings from any uploaded photograph.",
    technologies: [
      "Python",
      "OpenCV",
      "Image Processing",
      "Computer Vision",
    ],
    features: [
      "One-click photo-to-sketch conversion",
      "Edge detection and intensity algorithms",
      "Adjustable sketch parameters",
      "Multiple output styles",
    ],
    contribution:
      "Implemented the full image processing pipeline and tuned filter parameters for realistic sketch output.",
    featured: false,
    category: "tool",
  },
  {
    id: "auto-replying-chatbot",
    title: "Auto-Replying Chatbot",
    summary:
      "A context-aware NLP-driven conversational agent that automatically generates relevant responses based on user input patterns.",
    problem:
      "Building conversational agents that produce contextually appropriate, non-scripted responses requires balancing NLP sophistication with response speed.",
    solution:
      "Developed a chatbot framework that uses NLP techniques to parse user intent, match contextual patterns, and generate dynamic responses rather than relying on rigid keyword-matching.",
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "Conversational AI",
    ],
    features: [
      "Context-aware response generation",
      "Intent recognition and pattern matching",
      "Dynamic conversation flow",
      "Multi-topic support",
    ],
    contribution:
      "Designed the NLP parsing pipeline and conversation management logic. Sole developer.",
    featured: false,
    category: "ai",
  },
];
