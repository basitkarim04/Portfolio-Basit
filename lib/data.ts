export const NAME = "Basit";
export const FULL_NAME = "Basit Karim";
export const ROLE = "Full-Stack Developer";
export const EMAIL = "basit.karimkarim@gmail.com";
export const PHONE = "+92 332 0238534";
export const LOCATION = "Karachi, Pakistan";
export const RESUME = "/Basit-Karim-Resume.pdf";
export const GITHUB = "https://github.com/basitkarim04";
export const LINKEDIN = "https://www.linkedin.com/in/dev-basit-karim/";

export const TOOLS = [
  "Flutter",
  "React Native",
  "Node.js",
  "Python",
  "Laravel",
  "PHP",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Express",
  "Vue.js",
  "Tailwind CSS",
  "TanStack Query",
  "Supabase",
  "MongoDB",
  "SQL Server",
  "MySQL",
  "ASP.NET",
  "AWS",
  "Firebase",
  "GitHub CI/CD",
  "Figma",
];

export const NAV = [
  ["Home", "#home"],
  ["About me", "#about"],
  ["Projects", "#work"],
  ["Process", "#approach"],
  ["Experience", "#resume"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
];

export const PROJECTS = [
  {
    name: "Cross-Platform Mobile Application",
    tags: "React Native CLI • Expo • App Store & Play Store",
    desc: "Built and published a production cross-platform mobile application using React Native CLI and Expo to both the Apple App Store and Google Play Store with responsive UI and offline capabilities.",
    link: GITHUB,
    img: "/projects/project-1.jpg",
  },
  {
    name: "Desktop ERP Monitoring System",
    tags: "Python • Node.js • SQL Database • System Automation",
    desc: "Architected a full desktop ERP monitoring solution using Python and Node.js for backend processing, integrated with a relational SQL database for high-integrity operational logging.",
    link: GITHUB,
    img: "/projects/project-2.jpg",
  },
  {
    name: "Scalable REST APIs & Microservices",
    tags: "Node.js • Express • Supabase • PHP & Laravel",
    desc: "Developed and managed robust REST APIs handling secure authentication, complex business logic, third-party API data orchestration, and hybrid SQL/MongoDB storage.",
    link: GITHUB,
    img: "/projects/project-3.jpg",
  },
  {
    name: "Production Web Applications & Portals",
    tags: "React.js • Vue.js • Tailwind CSS • TanStack Query",
    desc: "Transformed detailed Figma design systems into fast, accessible, interactive web interfaces powered by efficient state management and server-cache synchronization.",
    link: GITHUB,
    img: "/projects/project-4.jpg",
  },
  {
    name: "CI/CD Pipelines & Multi-Cloud Deployment",
    tags: "AWS • GitHub Actions • Firebase • Railway • cPanel",
    desc: "Automated test and deployment pipelines across cloud infrastructure including AWS, Firebase, Railway, and Hostinger, achieving zero-downtime rollouts and rapid delivery.",
    link: GITHUB,
    img: "/projects/project-5.jpg",
  },
  {
    name: "Database Architecture & Query Optimization",
    tags: "SQL Server • Supabase • Stored Procedures • MongoDB",
    desc: "Structured relational and NoSQL schemas, authored optimized stored procedures in SQL Server, and tuned query execution times for high-throughput enterprise workloads.",
    link: GITHUB,
    img: "/projects/project-6.jpg",
  },
];

export const STEPS = [
  {
    key: "Architecture & Data Modeling",
    title: "Plan before writing a single line.",
    desc: "I explore system requirements, define relational and NoSQL schemas, and design scalable API contracts.",
    acts: ["System Architecture", "Database Schema", "API Contracts", "Requirement Analysis"],
  },
  {
    key: "Figma to Code & Frontend",
    title: "Craft responsive, accessible interfaces.",
    desc: "I transform design prototypes into pixel-perfect, accessible web and mobile UIs using React, React Native, Vue, and Tailwind CSS.",
    acts: ["React & React Native", "Tailwind CSS", "TanStack Query", "Responsive UI"],
  },
  {
    key: "Backend & API Engineering",
    title: "Power features with reliable logic.",
    desc: "I build fast, secure REST APIs with Node.js, Express, Supabase, and Laravel, handling auth, validations, and third-party integrations.",
    acts: ["REST APIs", "Node.js & Express", "Authentication", "Supabase & Laravel"],
  },
  {
    key: "Database Optimization",
    title: "Ensure speed, consistency, and integrity.",
    desc: "I write efficient queries, build stored procedures, and optimize indexes across SQL Server, MySQL, and MongoDB.",
    acts: ["Stored Procedures", "Query Tuning", "SQL Server / MySQL", "MongoDB & NoSQL"],
  },
  {
    key: "CI/CD & Cloud Deployment",
    title: "Ship with confidence.",
    desc: "I automate delivery using GitHub CI/CD pipelines to AWS, Firebase, Railway, App Store, and Google Play Store.",
    acts: ["GitHub CI/CD", "AWS & Firebase", "App Store & Play Store", "Automated Testing"],
  },
];

export const SITE_URL = "https://basit-dev-portfolio.vercel.app";

export const JOURNEY: [string, string, string, string, string[]][] = [
  [
    "2026 — Present",
    "Full Stack Developer",
    "Slicon Systems",
    "Built and published cross-platform mobile apps to the App Store and Google Play Store using Flutter & Native technologies. Developed and deployed full-stack web applications to AWS, optimized multi-stage Dockerfiles to minimize production image footprints, and orchestrated multi-container environments using Docker Compose.",
    ["Flutter", "React", "AWS", "Docker", "App Store", "Play Store"],
  ],
  [
    "May 2024 — August 2026",
    "Full Stack Developer",
    "Brand Revam",
    "Developed and deployed full-stack web applications to AWS, Hostinger, Firebase, Railway, and cPanel via GitHub CI/CD pipelines. Built & published cross-platform mobile apps to the App Store and Google Play Store using React Native CLI / Expo, and developed an ERP monitoring desktop system using Python and Node.js.",
    ["React Native", "Node.js", "Python", "Supabase", "AWS", "GitHub CI/CD"],
  ],
  [
    "Jan 2023 — Jan 2024",
    ".NET Intern & SQL Server",
    "Paperless Technology",
    "Built dynamic, responsive user interfaces using ASP.NET and VB.NET front-end technologies. Optimized SQL Server databases and engineered stored procedures to improve query performance and data integrity.",
    ["ASP.NET", "VB.NET", "SQL Server", "Stored Procedures", "Query Optimization"],
  ],
  [
    "2022 — June 2026",
    "Bachelor of Computer Science",
    "DHA Suffa University",
    "Specializing in Software Engineering, Data Structures & Algorithms, Distributed Database Systems, Web Technologies, and Cloud Computing architecture.",
    ["Software Engineering", "Algorithms", "Databases", "Cloud Computing"],
  ],
  [
    "2020 — 2022",
    "Intermediate in Pre-Engineering",
    "Government National College",
    "Pre-Engineering foundations in mathematics, analytical problem solving, and computer science.",
    ["Pre-Engineering", "Computer Science", "Mathematics"],
  ],
];

export const TESTIMONIALS = [
  ["Colleague & Lead", "Brand Revam", "Working with " + NAME + " transformed our engineering velocity. Every API was well-structured, and our web and mobile applications performed flawlessly.", "from-lime-400 to-green-800"],
  ["Tech Lead", "Paperless Technology", "Clear analytical thinking and strong database knowledge. " + NAME + " optimized complex SQL stored procedures and built dependable UI components.", "from-amber-400 to-rose-700"],
  ["Product Manager", "Client Projects", "Fast, thoughtful, and communicative. From Figma to deployed mobile and web apps, collaborating with " + NAME + " was a seamless experience.", "from-emerald-400 to-teal-800"],
];

export const BLOG = {
  tag: "AI & Insights",
  titlePrefix: "Beyond Code,",
  titleHighlight: "Into AI.",
  desc: "I explore AI tools, review emerging technologies, and publish practical guides to help businesses work smarter.",
  features: [
    "Applied AI agent workflows and business automation systems.",
    "Unbiased, hands-on breakdowns of modern LLMs & developer tools.",
    "Actionable, step-by-step guides for technical founders and engineers.",
  ],
  ctaText: "Explore My Blogs",
  ctaLink: "https://ai.nexleads.online/blog",
  platform: "NexAI Guide",
  platformTagline: "Curated AI guides & tech deep dives",
  platformDomain: "ai.nexleads.online/blog",
  readMoreText: "Read articles ↗",
  previewMedia: "/nexai-blog.gif",
};

