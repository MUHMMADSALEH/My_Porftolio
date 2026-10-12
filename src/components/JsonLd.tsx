import { portfolioContent } from "@/content/portfolio";
import { getExperienceJsonLd } from "@/content/experience";

export function JsonLd() {
  const baseUrl = "https://muhmmadsaleh-beta-coral.vercel.app";
  const experienceData = getExperienceJsonLd();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioContent.name,
    jobTitle: "Senior Node.js & NestJS Backend Engineer",
    url: baseUrl,
    image: `${baseUrl}/opengraph-image`,
    email: "mailto:khanmohdsaleh2002@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },
    sameAs: [
      "https://www.linkedin.com/in/mohd-s-49268b21b/",
      "https://github.com/MUHMMADSALEH",
      "https://x.com/MohdSAL71049253/",
      "https://leetcode.com/u/khansaleh/",
    ],
    knowsAbout: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeScript",
      "BullMQ",
      "Redis",
      "Apache Kafka",
      "PostgreSQL",
      "MongoDB",
      "TypeORM",
      "Prisma",
      "Socket.IO",
      "React.js",
      "Next.js",
      "Amazon Web Services (AWS)",
      "Docker",
      "REST APIs",
    ],
    ...(experienceData.worksFor ? { worksFor: experienceData.worksFor } : {}),
    alumniOf: experienceData.alumniOf,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhmmad Saleh | Senior Node.js & NestJS Engineer",
    url: baseUrl,
    description: portfolioContent.meta.description,
    author: {
      "@type": "Person",
      name: portfolioContent.name,
    },
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${baseUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: `${baseUrl}/#experience`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "About & Skills",
        item: `${baseUrl}/#about`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${baseUrl}/#contact`,
      },
    ],
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "TOSS",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://tosshq.com/",
        description:
          "SaaS platform built with Next.js, Node.js, and AWS with agentic AI workflows, delivering 30% engagement growth and 99.9% uptime.",
        creator: {
          "@type": "Person",
          name: portfolioContent.name,
        },
      },
      {
        "@type": "SoftwareSourceCode",
        position: 2,
        name: "MyScheduler",
        programmingLanguage: "TypeScript",
        codeRepository: "https://github.com/MUHMMADSALEH/my-schedulerr",
        url: "https://my-schedulerr.vercel.app/",
        description:
          "Full-stack scheduling platform built with Next.js App Router, Clerk, Prisma ORM, NeonDB, and Google Calendar API synchronization.",
        creator: {
          "@type": "Person",
          name: portfolioContent.name,
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 3,
        name: "Win-Win-Games & WulfGames",
        applicationCategory: "GameApplication",
        operatingSystem: "Web",
        description:
          "Production-grade multiplayer iGaming platforms featuring wallet locking mechanisms, KYC workflows, and real-time Socket.IO synchronization.",
        creator: {
          "@type": "Person",
          name: portfolioContent.name,
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 4,
        name: "AI Journaling App",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Web",
        url: "https://devvoid-frontend.vercel.app/",
        description:
          "AI-powered journaling assistant integrating Google Gemini API for sentiment analysis, morning reflections, and JWT-secured MongoDB storage.",
        creator: {
          "@type": "Person",
          name: portfolioContent.name,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
