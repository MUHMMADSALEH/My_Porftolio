import type { StaticImageData } from "next/image";
import aiJournalingImage from "@/assets/images/ai-journaling-app.png";
import mySchedulerrImage from "@/assets/images/my-schedulerr.png";
import tossImage from "@/assets/images/toss-ai.png";

export interface ProjectCaseStudy {
  title: string;
  category: string;
  problem: string;
  roleAndActions: string;
  results: string[];
  techStack: string[];
  // Backward compatibility alias:
  summary: string;
  stack: string[];
  image?: StaticImageData;
  links: { label: string; href: string }[];
  imageAlt: string;
}

export interface SkillCategory {
  category: string;
  context: string;
  items: string[];
}

export interface MetaConfig {
  title: string;
  description: string;
  canonical: string;
  author: string;
  keywords: string[];
}

const skillCategoriesList: SkillCategory[] = [
  {
    category: "Backend",
    context: "Architecting modular REST APIs, business logic, microservices, and type-safe contracts.",
    items: ["Node.js", "NestJS", "Express.js", "TypeScript", "REST APIs", "Java", "JWT", "OAuth 2.0", "Zod"],
  },
  {
    category: "Databases",
    context: "Relational modeling, document storage, optimized aggregation pipelines, and memory caching.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "TypeORM", "Prisma", "Mongoose"],
  },
  {
    category: "Queues and Realtime",
    context: "Asynchronous task execution, scheduled background workers, event streams, and WebSocket channels.",
    items: ["BullMQ", "Redis Queues", "Apache Kafka", "Socket.IO", "Event-Driven Processing"],
  },
  {
    category: "Frontend",
    context: "Building accessible, high-performance interfaces with server components and responsive layouts.",
    items: ["React.js", "Next.js (App Router)", "Redux Toolkit", "Zustand", "React Query", "Tailwind CSS", "shadcn/ui", "MUI"],
  },
  {
    category: "DevOps",
    context: "Cloud infrastructure provisioning, containerized environments, edge routing, and automated delivery.",
    items: ["AWS (EC2, Lambda, Elastic Beanstalk, Amplify, S3, Route 53, CloudFront)", "Docker", "Git/GitHub"],
  },
];

export const portfolioContent = {
  name: "Muhmmad Saleh",
  headline: "Senior Node.js & NestJS Backend Engineer",
  tagline: "I build high-throughput backend architectures and scalable full-stack products.",
  heroProof: "3+ years engineering event-driven job queues (BullMQ, Redis), high-performance APIs, and 99.9% uptime platforms.",
  heroSummary:
    "Backend-leaning full-stack software engineer based in Lucknow, India. Specializing in Node.js, NestJS, PostgreSQL, MongoDB, Redis, and React/Next.js to deliver resilient production systems for high-concurrency products.",
  // Compatibility aliases for hero & introduction:
  hero: "I build high-throughput backend architectures and scalable full-stack products.",
  introduction:
    "Backend-leaning full-stack software engineer with 3+ years of experience across Node.js, NestJS, PostgreSQL, MongoDB, Redis, and React/Next.js.",

  meta: {
    title: "Muhmmad Saleh | Senior Node.js & NestJS Engineer",
    description: "Senior Node.js & NestJS engineer with 3+ years building high-throughput APIs, BullMQ/Redis event pipelines, and scalable Next.js products. Hire or view work.",
    canonical: "https://muhmmadsaleh-beta-coral.vercel.app",
    author: "Muhmmad Saleh",
    keywords: [
      "Senior Node.js Developer",
      "NestJS Backend Engineer",
      "BullMQ Redis Job Queue",
      "PostgreSQL TypeORM Architecture",
      "Next.js Full Stack Developer",
      "Scalable REST APIs",
      "Socket.IO Realtime Systems",
      "AWS Node.js Deployment",
    ],
  } satisfies MetaConfig,

  ctas: {
    primary: "Explore My Work",
    resume: "Download Resume",
    contact: "Let's Connect",
  },

  skillsIntro:
    "Production-tested technical capabilities organized by architectural domain, from core backend systems to cloud deployment.",
  
  skillCategories: skillCategoriesList,
  // Compatibility alias:
  skills: skillCategoriesList,

  projectsIntro:
    "Selected production platforms and case studies. Each demonstrates concrete engineering actions, verified metrics, and technical architecture.",

  projects: [
    {
      title: "TOSS",
      category: "SaaS Platform · TechCurators",
      problem:
        "TechCurators required a scalable SaaS platform capable of rapid customer onboarding, real-time agentic AI workflows, and strict sub-second page performance.",
      roleAndActions:
        "Led full-stack application development using Next.js, Node.js, and AWS; implemented route lazy loading and code splitting, and integrated OpenAI and LangGraph/LangChain automations.",
      results: [
        "Grew active user engagement by 30% through intuitive, low-latency UI workflows.",
        "Reduced initial page load times by 40% through code-splitting, lazy loading, and efficient component architecture.",
        "Deployed the platform on AWS Amplify and EC2, sustaining 99.9% uptime under high-traffic load.",
      ],
      techStack: ["Next.js", "Node.js", "AWS Amplify", "AWS EC2", "OpenAI", "LangChain", "TypeScript"],
      summary:
        "Built and scaled a SaaS platform with Next.js, Node.js, and AWS, growing engagement by 30% and reducing page load times by 40%.",
      stack: ["Next.js", "Node.js", "AWS Amplify", "AWS EC2", "OpenAI", "LangChain", "TypeScript"],
      image: tossImage,
      links: [{ label: "Visit TOSS", href: "https://tosshq.com/" }],
      imageAlt: "TOSS SaaS platform dashboard preview highlighting agentic automation workflows",
    },
    {
      title: "Win-Win-Games & WulfGames",
      category: "iGaming Multiplayer Platforms",
      problem:
        "High-frequency multiplayer platforms needed zero-latency state synchronization, strict transactional consistency for player balances, and secure fraud detection.",
      roleAndActions:
        "Architected scalable REST APIs, wallet transaction locks, configurable promotion/tournament logic, and third-party integrations for payment processors and game engines.",
      results: [
        "Delivered production multiplayer backends sustaining 10,000+ concurrent player sessions with sub-50ms WebSocket state sync.",
        "Engineered configurable promotions, automated tournament brackets, and reward-processing pipelines.",
        "Integrated payment gateways, identity verification (KYC), fraud detection, and third-party game provider APIs.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "REST APIs", "Socket.IO"],
      summary:
        "Engineered multiplayer backend architectures with wallet locks, KYC workflows, and real-time Socket.IO synchronization.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "REST APIs", "Socket.IO"],
      links: [],
      imageAlt: "Win-Win-Games and WulfGames scalable real-time gaming backend architecture",
    },
    {
      title: "MyScheduler",
      category: "Scheduling Platform · Open Source",
      problem:
        "Professionals struggle with scheduling meetings across calendars without paying for costly proprietary SaaS tools.",
      roleAndActions:
        "Built a full-stack scheduling platform with Next.js App Router, Clerk authentication, Prisma ORM with NeonDB serverless PostgreSQL, and Google Calendar API bi-directional synchronization.",
      results: [
        "Engineered a self-serve booking interface with automated Google Calendar conflict detection, cutting scheduling friction to zero and supporting instant real-time sync.",
        "Configured secure authentication flows using Clerk and serverless relational data queries using Prisma with NeonDB.",
        "Shipped responsive, accessible UI built with Tailwind CSS and shadcn/ui components.",
      ],
      techStack: ["Next.js App Router", "Clerk", "Prisma", "NeonDB", "Google Calendar API", "shadcn/ui", "Tailwind CSS"],
      summary:
        "Scheduling platform built with Next.js App Router, Clerk, Prisma, and Google Calendar API synchronization.",
      stack: ["Next.js App Router", "Clerk", "Prisma", "NeonDB", "Google Calendar API", "shadcn/ui", "Tailwind CSS"],
      image: mySchedulerrImage,
      links: [
        { label: "Live Demo", href: "https://my-schedulerr.vercel.app/" },
        { label: "Source Code", href: "https://github.com/MUHMMADSALEH/my-schedulerr" },
      ],
      imageAlt: "MyScheduler meeting booking dashboard showing Google Calendar slot synchronization",
    },
    {
      title: "AI Journaling App",
      category: "AI Productivity · Web Application",
      problem:
        "Traditional text journals offer no feedback or longitudinal sentiment insights, making consistent reflection difficult.",
      roleAndActions:
        "Engineered a full-stack web application integrating the Google Gemini API to analyze daily diary entries, extract emotional sentiment tags, generate personalized reflections, and secure entries with JWT auth.",
      results: [
        "Implemented daily entry sentiment analysis and automated weekly trend summaries using the Gemini API, processing reflections with an average latency under 1.2s.",
        "Designed date-indexed MongoDB schemas with JWT authentication and secure session encryption.",
        "Delivered a production full-stack deployment on Vercel with responsive, mobile-ready interactions.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT Auth", "REST APIs"],
      summary:
        "Full-stack journaling web application with Gemini API sentiment analysis, reflection prompts, and JWT security.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT Auth", "REST APIs"],
      image: aiJournalingImage,
      links: [{ label: "Live Demo", href: "https://devvoid-frontend.vercel.app/" }],
      imageAlt: "AI Journaling application interface displaying daily mood tags and Gemini reflection prompts",
    },
  ] satisfies ProjectCaseStudy[],
};
