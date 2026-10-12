export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string; // "YYYY-MM"
  endDate: string | "Present"; // "YYYY-MM" or "Present"
  location: string;
  summary: string;
  achievements: string[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "sdlc-corp",
    company: "SDLC Corp",
    role: "Full Stack Developer",
    startDate: "2025-08",
    endDate: "Present",
    location: "India · Remote",
    summary:
      "Built and maintained scalable backend modules, event-driven processing, and secure third-party integrations for high-performance production platforms.",
    achievements: [
      "Engineered backend services with NestJS, PostgreSQL, TypeORM, and Redis to deliver configurable business logic and high-performance APIs [ADD METRIC].",
      "Designed automated reward-processing and business-rule workflows, including eligibility validation, expiry handling, and scheduled execution.",
      "Integrated third-party APIs implementing secure webhook processing, signature validation, idempotent callbacks, and standardized error handling.",
      "Built asynchronous processing pipelines with BullMQ and Redis for scheduled jobs, payment workflows, and real-time Socket.IO live updates.",
      "Integrated payment, identity verification, and fraud prevention services with KYC workflows, risk assessment, and structured audit logging.",
    ],
    techStack: ["NestJS", "PostgreSQL", "TypeORM", "Redis", "BullMQ", "Socket.IO", "TypeScript", "REST APIs", "Docker"],
  },
  {
    id: "umenit",
    company: "Umenit",
    role: "Full Stack Developer",
    startDate: "2024-07",
    endDate: "2025-08",
    location: "India",
    summary:
      "Developed scalable REST APIs, authentication services, and optimized database queries for production web applications.",
    achievements: [
      "Developed scalable REST APIs with Node.js, Express.js, and MongoDB, implementing authentication, authorization, and core business logic.",
      "Designed optimized MongoDB aggregation pipelines to improve query performance and API response times [ADD METRIC].",
      "Implemented background job processing and reusable backend modules to deliver secure, maintainable features.",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "REST APIs", "JWT"],
  },
  {
    id: "techcurators",
    company: "TechCurators",
    role: "Full Stack Developer",
    startDate: "2023-06",
    endDate: "2024-06",
    location: "India",
    summary:
      "Built and scaled the TOSS SaaS platform, delivering significant user engagement growth, latency reduction, and agentic AI integrations.",
    achievements: [
      "Built and scaled TOSS, a SaaS platform, using Next.js, Node.js, and AWS, growing user engagement by 30%.",
      "Reduced initial page load times by 40% through code-splitting, lazy loading, and efficient component architecture.",
      "Integrated Relevance AI, OpenAI, and LangGraph/LangChain agentic workflows to automate operational business processes.",
      "Deployed the platform on AWS Amplify and EC2, sustaining 99.9% uptime under high-traffic load.",
    ],
    techStack: ["Next.js", "Node.js", "AWS Amplify", "AWS EC2", "OpenAI", "LangChain", "TypeScript", "REST APIs"],
  },
];

/**
 * Computes human-readable duration string for a role, e.g. "1 yr 2 mos" or "10 mos".
 */
export function formatDuration(startDateStr: string, endDateStr: string | "Present"): string {
  const start = parseDate(startDateStr);
  const end = endDateStr === "Present" ? new Date() : parseDate(endDateStr);

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  const safeMonths = Math.max(1, totalMonths);
  const years = Math.floor(safeMonths / 12);
  const months = safeMonths % 12;

  if (years === 0) {
    return `${months} mo${months > 1 ? "s" : ""}`;
  }
  if (months === 0) {
    return `${years} yr${years > 1 ? "s" : ""}`;
  }
  return `${years} yr${years > 1 ? "s" : ""} ${months} mo${months > 1 ? "s" : ""}`;
}

/**
 * Computes merged non-overlapping months across all experience items to handle gaps and overlaps accurately.
 */
export function computeTotalExperience(items: ExperienceItem[]): {
  totalCompanies: number;
  totalYearsText: string;
  totalMonths: number;
} {
  const intervals: [number, number][] = items.map((item) => {
    const start = parseDate(item.startDate).getTime();
    const end = item.endDate === "Present" ? Date.now() : parseDate(item.endDate).getTime();
    return [start, end];
  });

  // Sort by start timestamp
  intervals.sort((a, b) => a[0] - b[0]);

  // Merge overlapping intervals
  const merged: [number, number][] = [];
  for (const interval of intervals) {
    if (!merged.length) {
      merged.push(interval);
      continue;
    }
    const prev = merged[merged.length - 1];
    if (interval[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      merged.push(interval);
    }
  }

  // Calculate approximate total months across merged intervals
  const msInMonth = 1000 * 60 * 60 * 24 * 30.4375;
  const totalMonths = Math.round(
    merged.reduce((sum, [start, end]) => sum + (end - start), 0) / msInMonth
  );

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const totalYearsText = years > 0 ? `${years}+ years` : `${months} months`;

  const uniqueCompanies = new Set(items.map((i) => i.company.toLowerCase())).size;

  return {
    totalCompanies: uniqueCompanies,
    totalYearsText,
    totalMonths,
  };
}

function parseDate(dateStr: string): Date {
  const [yearStr, monthStr] = dateStr.split("-");
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1;
  return new Date(year, month, 1);
}

/**
 * Returns formatted start and end dates, e.g. "Aug 2025 – Present" or "Jun 2023 – Jun 2024".
 */
export function formatDisplayPeriod(startDateStr: string, endDateStr: string | "Present"): string {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formatMonthYear = (dStr: string) => {
    const [year, month] = dStr.split("-");
    const monthIndex = parseInt(month, 10) - 1;
    return `${monthNames[monthIndex]} ${year}`;
  };

  const start = formatMonthYear(startDateStr);
  const end = endDateStr === "Present" ? "Present" : formatMonthYear(endDateStr);
  return `${start} – ${end}`;
}

/**
 * Exposes experience metadata in schema.org Organization and EducationalOrganization formats.
 */
export function getExperienceJsonLd() {
  const currentRole = experiences.find((exp) => exp.endDate === "Present") || experiences[0];
  const pastRoles = experiences.filter((exp) => exp.id !== currentRole.id);

  return {
    worksFor: {
      "@type": "Organization",
      name: currentRole.company,
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Bansal Institute of Engineering and Technology",
      },
      ...pastRoles.map((exp) => ({
        "@type": "Organization",
        name: exp.company,
      })),
    ],
  };
}
