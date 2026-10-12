import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhmmad Saleh | Senior Node.js & NestJS Engineer",
    short_name: "Muhmmad Saleh",
    description:
      "Senior Node.js & NestJS engineer with 3+ years experience building high-throughput APIs, BullMQ/Redis pipelines, and scalable Next.js systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#10b981",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
