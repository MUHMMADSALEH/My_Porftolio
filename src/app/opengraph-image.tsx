import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhmmad Saleh | Senior Node.js & NestJS Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.15), transparent 45%), radial-gradient(circle at 75% 75%, rgba(56, 189, 248, 0.15), transparent 45%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "9999px",
              backgroundColor: "#10b981",
              boxShadow: "0 0 16px #10b981",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            Portfolio & Engineering Case Studies
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              background: "linear-gradient(to right, #ffffff, #a7f3d0, #7dd3fc)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Muhmmad Saleh
          </h1>
          <p
            style={{
              fontSize: "32px",
              fontWeight: 500,
              margin: 0,
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "960px",
            }}
          >
            Senior Node.js & NestJS Backend Engineer
          </p>
          <p
            style={{
              fontSize: "22px",
              margin: 0,
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "900px",
            }}
          >
            Event-Driven Queues (BullMQ/Redis) · Scalable REST APIs · PostgreSQL & MongoDB · Next.js Full Stack
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            {["NestJS", "Node.js", "BullMQ", "PostgreSQL", "Next.js", "AWS"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 18px",
                  fontSize: "18px",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#a7f3d0",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            muhmmadsaleh-beta-coral.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
