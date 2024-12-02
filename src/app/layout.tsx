import type { Metadata } from "next";
import "./globals.css";
import {Inter,Calistoga} from 'next/font/google'
import { twMerge } from "tailwind-merge";

// app/layout.tsx or app/layout.js


export const metadata: Metadata = {
  title: "Saleh.me",
  description: "Created by Saleh, showcasing my projects and skills.",
  keywords: ["Portfolio", "Saleh", "Web Developer", "Projects", "Web Skills","NextJs","ReactJs","NodeJs","Tailwind"],
  authors: [
    { name: "Saleh" },
  ],
};

const inter=Inter({subsets:["latin"],variable:"--font-sans"})
const calistoga=Calistoga({subsets:["latin"],variable:"--font-serif",weight:["400"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable,calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
