import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { portfolioContent } from "@/content/portfolio";
import { JsonLd } from "@/components/JsonLd";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  display: "swap",
});

const siteUrl = "https://muhmmadsaleh-beta-coral.vercel.app";

export const viewport: Viewport = {
  themeColor: "#111827",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: portfolioContent.meta.title,
    template: "%s | Muhmmad Saleh",
  },
  description: portfolioContent.meta.description,
  keywords: portfolioContent.meta.keywords,
  authors: [{ name: portfolioContent.name, url: siteUrl }],
  creator: portfolioContent.name,
  publisher: portfolioContent.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: portfolioContent.meta.title,
    description: portfolioContent.meta.description,
    siteName: "Muhmmad Saleh | Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Muhmmad Saleh - Senior Node.js & NestJS Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioContent.meta.title,
    description: portfolioContent.meta.description,
    creator: "@MohdSAL71049253",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const analyticsId = process.env.NEXT_PUBLIC_GTAG_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans selection:bg-emerald-300 selection:text-gray-950"
        )}
      >
        <JsonLd />
        {analyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analyticsId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
