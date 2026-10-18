import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { FULL_NAME, ROLE, SITE_URL, GITHUB, LINKEDIN, TOOLS } from "@/lib/data";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-hand", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Basit Karim — Full-Stack Developer | basit-dev",
    template: "%s | Basit Karim (basit-dev)",
  },
  description:
    "Basit Karim (basit-dev / basit-dev-portfolio) — Full-Stack Developer with experience building responsive web and mobile applications using React, React Native, Node.js, Python, Supabase, and AWS.",
  keywords: [
    "basit-dev",
    "basit-dev-portfolio",
    "Basit Karim",
    "Basit Karim Portfolio",
    "basit dev",
    "Full-Stack Developer",
    "React Native Developer",
    "Node.js Developer",
    "Mobile App Developer",
    "Software Engineer Karachi",
    "Pakistan Full Stack Developer",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Basit Karim — Full-Stack Developer | basit-dev",
    description:
      "Full-Stack Developer specializing in React, React Native, Node.js, Python, Supabase, and Cloud Deployment.",
    siteName: "Basit Karim Portfolio (basit-dev)",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: `${FULL_NAME} — ${ROLE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basit Karim — Full-Stack Developer | basit-dev",
    description:
      "Explore the portfolio of Basit Karim (basit-dev) — Full-Stack Developer building scalable web and mobile applications.",
    images: ["/icon.png"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: FULL_NAME,
      alternateName: ["basit-dev", "basit-dev-portfolio", "Basit Karim Developer"],
      url: SITE_URL,
      image: `${SITE_URL}/icon.png`,
      jobTitle: ROLE,
      worksFor: {
        "@type": "Organization",
        name: "Slicon Systems",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "DHA Suffa University",
      },
      sameAs: [GITHUB, LINKEDIN],
      description:
        "Full-Stack Developer experienced in building responsive web and mobile applications with React, React Native, Vue.js, Node.js, Python, Supabase, and multi-cloud deployment.",
      knowsAbout: TOOLS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Basit Karim Portfolio — basit-dev",
      alternateName: ["basit-dev", "basit-dev-portfolio"],
      description:
        "Official portfolio of Basit Karim (basit-dev) — Full-Stack Developer specializing in React, React Native, Node.js, Python, and AWS.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
