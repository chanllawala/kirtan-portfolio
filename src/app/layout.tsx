import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { personal } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Kirtan Chanllawala — Full Stack Developer";
const description =
  "Full Stack Developer building production web platforms and AI-powered software with React, TypeScript, Python and Flask. Sole developer across four live production platforms; freelance and AI/LLM project experience.";

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: {
    default: title,
    template: "%s — Kirtan Chanllawala",
  },
  description,
  keywords: [
    "Kirtan Chanllawala",
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "TypeScript Developer",
    "Python Developer",
    "Flask Developer",
    "AI Developer",
    "Scotland Developer",
    "UK Software Developer",
  ],
  authors: [{ name: personal.name, url: personal.siteUrl }],
  creator: personal.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: personal.siteUrl,
    title,
    description,
    siteName: `${personal.name} — Portfolio`,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  url: personal.siteUrl,
  jobTitle: "Full Stack Developer",
  email: `mailto:${personal.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stirling",
    addressRegion: "Scotland",
    addressCountry: "GB",
  },
  sameAs: [personal.github, personal.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Stirling",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "Flask",
    "Node.js",
    "MySQL",
    "REST APIs",
    "GitHub Actions",
    "Docker",
    "Large Language Models",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <NoiseOverlay />
          <CustomCursor />
          <ScrollProgress />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
