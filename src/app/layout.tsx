import type { Metadata } from "next";
import { Nunito_Sans, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/hooks/theme-provider";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://truongtandung.vercel.app/";

export const nunitoSansFont = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const robotoFont = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Truong Tan Dung | Full-Stack & Mobile Developer",
    template: "%s | Truong Tan Dung",
  },
  description:
    "Portfolio of Truong Tan Dung - full-stack and mobile developer building performant web and app experiences.",
  alternates: {
    canonical: "/",
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
    url: "/",
    siteName: "Truong Tan Dung Portfolio",
    title: "Truong Tan Dung | Full-Stack & Mobile Developer",
    description:
      "Portfolio of Truong Tan Dung - full-stack and mobile developer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Truong Tan Dung portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Truong Tan Dung | Full-Stack & Mobile Developer",
    description:
      "Portfolio of Truong Tan Dung - full-stack and mobile developer.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${robotoFont.variable} ${nunitoSansFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Truong Tan Dung",
      url: siteUrl,
      sameAs: [
        "https://github.com/KrivonZa",
        "https://www.linkedin.com/in/kevin-truong-arn320/"
      ],
      jobTitle: "Software Engineer",
    }),
  }}
/>
