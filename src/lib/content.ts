export const personal = {
  name: "Kirtan Chanllawala",
  role: "Full Stack Developer",
  location: "Stirling, Scotland, UK",
  email: "kchanllawala@gmail.com",
  github: "https://github.com/chanllawala",
  githubHandle: "@chanllawala",
  linkedin: "https://www.linkedin.com/in/kirtan-chanllawala-18b755230/",
  siteUrl: "https://kirtanchanllawala.dev",
};

export const heroStats = [
  { value: "4", label: "live production platforms" },
  { value: "2:1", label: "BSc (Hons) Computing Science" },
  { value: "Full-stack", label: "+ AI/LLM development" },
  { value: "UK", label: "based, right to work" },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  tech: string[];
  featured?: boolean;
};

export const experience: Experience[] = [
  {
    org: "Canvia Group Inc.",
    role: "Full Stack Developer",
    period: "November 2025 — Present",
    location: "Remote · UK / Canada client",
    summary:
      "Sole developer responsible for four live production platforms, owning everything from client requirements through to deployment and maintenance.",
    points: [
      "Build and maintain four production platforms end to end: the Canvia Group parent site, Canvex Immigration, ViaRe Travel, and Fashionista.",
      "Work directly with clients to gather requirements and translate business needs into shipped software.",
      "Design UI/UX and build both frontend and backend — React/TypeScript interfaces backed by Node.js and Python/Flask services with MySQL.",
      "Develop and integrate REST APIs across the platforms, and design the underlying database schemas.",
      "Own GitHub Actions CI/CD pipelines for build, test and deployment.",
      "Handle production maintenance: bug triage, troubleshooting and iterative feature delivery from client feedback.",
    ],
    tech: ["TypeScript", "React", "Node.js", "Python", "Flask", "MySQL", "REST APIs", "GitHub Actions"],
    featured: true,
  },
  {
    org: "Self-employed",
    role: "Freelance Full Stack Developer",
    period: "June 2025 — Present",
    location: "Remote · Central Scotland",
    summary:
      "Independent client work delivering live websites and applications across hospitality, wellness and food-service businesses.",
    points: [
      "Cafe Aine — built and shipped a live client website in React and TypeScript.",
      "Cross-platform food ordering app — Flutter application with authentication, menu management, real-time order tracking and Stripe payments, currently in pre-launch testing.",
      "Kamdhenu Jyotish Reiki & Astrology — multilingual site (English, Hindi, Gujarati) with booking forms.",
      "Gurkha Lounge Stirling — restaurant website with menu, contact functionality and SEO built in HTML, CSS and JavaScript.",
    ],
    tech: ["React", "TypeScript", "Flutter", "Stripe", "HTML/CSS/JS"],
    featured: true,
  },
  {
    org: "Bill Gosling Outsourcing (Castle Water contract)",
    role: "Customer Service Representative",
    period: "March 2022 — April 2025",
    location: "Glasgow",
    summary:
      "Handled 50+ customer contacts daily, resolving billing queries and setting up payment plans under SLA targets.",
    points: [
      "Managed sensitive billing and account conversations for a UK water utility client via CRM systems.",
      "Set up payment plans and resolved disputes while meeting SLA targets in a high-volume contact centre.",
      "Handled confidential customer information with strict accuracy and compliance.",
    ],
    tech: ["CRM systems", "Customer communication", "SLA delivery"],
  },
  {
    org: "ALDI UK",
    role: "Store Assistant",
    period: "August 2025 — August 2026",
    location: "Alloa, Scotland",
    summary:
      "Frontline retail role built around speed, accuracy and reliability — run alongside client development work.",
    points: [
      "Worked to strict operational procedures in a fast-paced, high-throughput retail environment.",
      "Maintained accuracy and reliability under time pressure while balancing freelance and client commitments.",
    ],
    tech: ["Teamwork", "Reliability", "Attention to detail"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  points: string[];
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "AI Business Dashboard",
    tagline: "Multi-business management dashboard with a Groq-powered AI advisor",
    description:
      "A Next.js dashboard for running several small businesses from one login — customers, employees, sales, expenses, tasks, meetings and documents — with an AI advisor that can answer questions, give recommendations and add data for you through a chat interface, always confirming before it saves anything.",
    points: [
      "AI advisor built on Groq's Llama 3.3 70B, with a confirm-before-save action flow so the model never writes data silently.",
      "Full CRUD across customers, employees, sales, expenses, tasks, meetings and documents, scoped per business.",
      "Security-conscious API layer: rate limiting, input validation and action whitelisting on every AI-triggered write.",
      "State managed with Zustand and persisted to localStorage; UI built with Tailwind CSS.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Groq · Llama 3.3", "Zustand"],
    github: "https://github.com/chanllawala/ai-business-dashboard",
    live: "https://ai-business-dashboard-nine.vercel.app",
    featured: true,
  },
  {
    name: "GPT-Based Storytelling System",
    tagline: "BSc dissertation — stateful, multi-turn LLM application",
    description:
      "My final-year dissertation project: a Flask application built around the OpenAI API that maintains coherent state across a multi-turn, interactive storytelling session rather than treating each prompt in isolation.",
    points: [
      "Designed conversation-state management so the model's output stays consistent across many turns.",
      "Built the prompt-engineering and orchestration layer around the OpenAI API in Python.",
      "Flask backend serving the interactive session to a browser front end.",
    ],
    tech: ["Python", "OpenAI API", "Flask"],
    featured: true,
  },
  {
    name: "AI Study Assistant Summariser",
    tagline: "Self-hosted study summariser running an open-weights LLM",
    description:
      "A summarisation tool that runs Meta's Llama 3.2-1B via Hugging Face inside a Docker container, deployed on Render, so study material can be condensed without depending on a paid, closed API.",
    points: [
      "Packaged the Hugging Face model and inference server into a Docker image for reproducible deployment.",
      "Deployed the containerised service to Render.",
    ],
    tech: ["Python", "Docker", "Hugging Face · Llama 3.2-1B", "Render"],
    featured: true,
  },
  {
    name: "Cafe Aine",
    tagline: "Live freelance client website",
    description:
      "A live client website for Cafe Aine, built and shipped as part of my freelance practice — requirements, design and implementation handled end to end in React and TypeScript.",
    points: [
      "Delivered as a freelance client engagement from requirements through to a live site.",
      "Built with a component-driven React and TypeScript front end.",
    ],
    tech: ["React", "TypeScript"],
    featured: true,
  },
  {
    name: "Cross-Platform Food Ordering App",
    tagline: "Flutter app with live tracking and Stripe payments",
    description:
      "A freelance food ordering application covering authentication, menu browsing, real-time order tracking and Stripe payments, currently going through pre-launch testing.",
    points: [
      "Authentication and menu/ordering flows built in Flutter for a single iOS/Android codebase.",
      "Real-time order tracking and Stripe payment integration.",
    ],
    tech: ["Flutter", "Stripe", "Real-time tracking"],
    featured: false,
  },
  {
    name: "Personal Portfolio (v1)",
    tagline: "Flask + GSAP portfolio with GitHub Actions CI/CD",
    description:
      "My previous portfolio: a Flask backend serving a hand-built HTML/CSS/JS front end with GSAP animations, rate-limited contact form, and a GitHub Actions pipeline deploying to Render.",
    points: [
      "Modular Flask app (blueprints, config management, custom error pages, logging).",
      "GSAP-driven scroll animations and a rate-limited contact form with server-side email delivery.",
    ],
    tech: ["Flask", "HTML/CSS/JS", "GSAP", "Render", "GitHub Actions"],
    github: "https://github.com/chanllawala/Portfolio-website-",
    featured: false,
  },
  {
    name: "Customer Query Chatbot",
    tagline: "Rule-assisted NLP chatbot",
    description:
      "A Python chatbot built with NLTK and Flask for handling common customer queries, drawing on my customer-service background to shape the conversation design.",
    points: ["Natural-language query handling with NLTK.", "Served through a lightweight Flask backend."],
    tech: ["Python", "NLTK", "Flask"],
    featured: false,
  },
  {
    name: "Utility Billing Management System",
    tagline: "Java + MySQL billing system",
    description:
      "A billing management system for utility accounts, built in Java with a MySQL data layer — informed by first-hand experience with billing systems from my customer-service role.",
    points: ["Core Java application logic.", "Relational schema and queries in MySQL."],
    tech: ["Java", "MySQL"],
    featured: false,
  },
  {
    name: "Consumer Trends Data Analysis",
    tagline: "Exploratory data analysis in Python",
    description:
      "An exploratory data analysis project examining consumer trend data using Pandas for data wrangling and Matplotlib for visualisation.",
    points: ["Data cleaning and transformation with Pandas.", "Visualised trends and distributions with Matplotlib."],
    tech: ["Python", "Pandas", "Matplotlib"],
    featured: false,
  },
  {
    name: "Canvaximmigration (static site)",
    tagline: "Static HTML/CSS/JS front end, deployed on GitHub Pages",
    description:
      "A static front-end build for an immigration consultancy — plain HTML, CSS and JavaScript, deployed via GitHub Pages. This repository is a static front end only and is separate from the Canvex Immigration production platform I build and maintain at Canvia Group.",
    points: ["Static, dependency-free front end.", "Deployed directly via GitHub Pages."],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chanllawala/Canvaximmigration",
    live: "https://chanllawala.github.io/Canvaximmigration",
    featured: false,
    note: "Static repo — distinct from the Canvex Immigration production platform.",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Java"] },
  { label: "Frontend", items: ["React", "HTML5", "CSS3"] },
  { label: "Backend", items: ["Node.js", "Flask", "REST APIs"] },
  { label: "Databases", items: ["MySQL"] },
  { label: "Cloud & Deployment", items: ["Render", "Vercel"] },
  { label: "DevOps", items: ["Git", "GitHub", "GitHub Actions", "Docker", "CI/CD"] },
  { label: "AI / LLM", items: ["OpenAI API", "Groq · Llama 3", "Hugging Face", "Prompt Engineering", "Agent Design"] },
  { label: "Practice", items: ["UI/UX Design", "Software Engineering", "Data Science", "ML Foundations"] },
];

export const education = {
  degree: {
    title: "BSc (Hons) Computing Science",
    org: "University of Stirling",
    period: "January 2022 — June 2025",
    result: "2:1 · SCQF Level 10 (410 credits)",
    modules: [
      { name: "Artificial Intelligence", grade: "71%" },
      { name: "Introduction to Machine Learning", grade: "73%" },
      { name: "Software Engineering I", grade: "70%" },
      { name: "Introduction to Data Science", grade: "72%" },
      { name: "Computer Security & Networks", grade: "65%" },
      { name: "Web Services", grade: "62%" },
      { name: "Operating Systems: Concurrency & Distribution", grade: "61%" },
      { name: "Distributed Data Science Systems", grade: "60%" },
      { name: "Database Principles & Applications", grade: "60%" },
    ],
  },
  secondary: {
    title: "Higher Secondary Education — Science",
    org: "M.K. Secondary & Higher Secondary School, Ahmedabad, India",
    period: "August 2017 — May 2021",
  },
};

export const certifications = [
  {
    title: "Technology Software Development Job Simulation",
    org: "Citi, via Forage",
    period: "April 2026",
  },
  {
    title: "Data Science Job Simulation",
    org: "BCG, via Forage",
    period: "April 2026",
  },
  {
    title: "Microsoft Office Specialist — Excel, Word, PowerPoint",
    org: "C.N. Vidhyalaya, Ahmedabad",
    period: "2020 — 2021",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Gujarati", level: "Native" },
  { name: "Hindi", level: "Fluent" },
];
