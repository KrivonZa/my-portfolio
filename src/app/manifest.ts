import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kevintruong-portfolio.vercel.app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Kevin Truong | Full-Stack & Mobile Developer",
    short_name: "Kevin Truong",
    description:
      "Portfolio of Kevin Truong, a Vietnamese Full-Stack and Mobile Developer specializing in React, Next.js, TypeScript, and modern web architecture.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "en",
    dir: "ltr",
    categories: ["portfolio", "developer", "technology", "business"],
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: `${siteUrl}/og-image-v2.png`,
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}
