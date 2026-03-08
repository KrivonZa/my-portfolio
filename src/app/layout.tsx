import type { Metadata } from "next";
import { Nunito_Sans, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

import { ThemeProvider } from "@/hooks/theme-provider";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://kevintruong-portfolio.vercel.app";

export const nunitoSansFont = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const robotoFont = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Kevin Truong | Full-Stack & Mobile Developer",
    template: "%s | Kevin Truong",
  },

  description:
    "Portfolio of Kevin Truong, a Vietnamese Full-Stack and Mobile Developer specializing in React, Next.js, TypeScript, and modern web architecture.",

  keywords: [
    "Kevin Truong",
    "Truong Tan Dung",
    "Full Stack Developer",
    "Mobile Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Vietnam Developer",
  ],

  authors: [{ name: "Kevin Truong", url: siteUrl }],

  creator: "Kevin Truong",

  verification: {
    google: "DJtXSV_5VSx5mRFef0v-RsxDouJfCYaaal862bJ4sO8",
  },

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kevin Truong Portfolio",

    title: "Kevin Truong | Full-Stack & Mobile Developer",

    description:
      "Portfolio of Kevin Truong, Full-Stack and Mobile Developer building modern web and mobile applications.",

    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Preview of Kevin Truong developer portfolio website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kevin Truong | Full-Stack Developer",

    description: "Portfolio of Kevin Truong, Full-Stack and Mobile Developer.",

    images: ["/og-image-v2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Kevin Truong",
    alternateName: ["Truong Tan Dung"],
    givenName: "Kevin",
    familyName: "Truong",
    url: siteUrl,
    mainEntityOfPage: siteUrl,
    image: `${siteUrl}/portrait.png`,
    logo: `${siteUrl}/logo_dark.png`,
    jobTitle: "Full-Stack & Mobile Developer",
    nationality: "Vietnamese",
    description:
      "Kevin Truong (also known as Truong Tan Dung) is a Vietnamese Full-Stack and Mobile Developer specializing in React, Next.js, TypeScript, and modern web application architecture.",
    sameAs: [
      "https://github.com/KrivonZa",
      "https://www.linkedin.com/in/kevin-truong-arn320/",
    ],
    knowsLanguage: ["English", "Vietnamese"],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Mobile Development",
      "Full Stack Development",
      "Web Performance",
      "Software Architecture",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Kevin Truong Portfolio",
    url: siteUrl,
    author: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: "en",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoFont.variable} ${nunitoSansFont.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </body>
    </html>
  );
}
