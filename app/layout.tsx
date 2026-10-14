import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Aatifkhan Pathan | Frontend Engineer & Angular Developer",
    template: "%s | Aatifkhan Pathan",
  },
  description:
    "Frontend Engineer & Angular Developer with 6+ years of experience building scalable enterprise SaaS applications, data-driven web platforms, RxJS architecture, React, Next.js, and PWAs.",
  keywords: [
    "Frontend Engineer",
    "Angular Developer",
    "TypeScript Engineer",
    "RxJS Specialist",
    "Enterprise SaaS",
    "React Developer",
    "Next.js Developer",
    "Frontend Architecture",
    "Progressive Web Apps",
    "Aatifkhan Pathan",
  ],
  authors: [{ name: "Aatifkhan Pathan" }],
  creator: "Aatifkhan Pathan",
  publisher: "Aatifkhan Pathan",
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: "Aatifkhan Pathan | Frontend Engineer & Angular Developer",
    description:
      "Frontend Engineer & Angular Developer with 6+ years of experience building scalable enterprise SaaS applications, data-driven web platforms, RxJS architecture, React, Next.js, and PWAs.",
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: "Aatifkhan Pathan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aatifkhan Pathan | Frontend Engineer & Angular Developer",
    description:
      "Frontend Engineer & Angular Developer with 6+ years of experience building scalable enterprise SaaS applications, data-driven web platforms, RxJS architecture, React, Next.js, and PWAs.",
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
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": siteUrl ? `${siteUrl}/#person` : "#person",
      "name": "Aatifkhan Pathan",
      "jobTitle": "Frontend Engineer",
      "description":
        "Frontend Engineer specializing in Angular, TypeScript, RxJS, React, Next.js, and scalable enterprise web applications.",
      ...(siteUrl ? { url: siteUrl } : {}),
      "sameAs": [
        "https://www.linkedin.com/in/aatif-khan-pathan",
        "https://github.com/Aatif-khan"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "knowsAbout": [
        "Angular",
        "TypeScript",
        "RxJS",
        "React",
        "Next.js",
        "Enterprise Web Applications",
        "Enterprise SaaS",
        "Progressive Web Apps",
        "Frontend Architecture"
      ]
    },
    {
      "@type": "WebSite",
      "@id": siteUrl ? `${siteUrl}/#website` : "#website",
      ...(siteUrl ? { url: siteUrl } : {}),
      "name": "Aatifkhan Pathan Portfolio",
      "description": "Personal Portfolio & Engineering Case Studies of Aatifkhan Pathan",
      "publisher": {
        "@id": siteUrl ? `${siteUrl}/#person` : "#person"
      },
      "inLanguage": "en-US"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-txt-primary font-sans selection:bg-accent-muted selection:text-accent">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-accent focus:text-accent-fg focus:font-mono focus:text-sm focus:rounded-b-lg"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

