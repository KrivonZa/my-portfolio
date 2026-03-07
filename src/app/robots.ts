import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://truongtandung.vercel.app/";
  const isProd = process.env.VERCEL_ENV === "production";

  return {
    rules: isProd
      ? [{ userAgent: "*", allow: "/" }]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}