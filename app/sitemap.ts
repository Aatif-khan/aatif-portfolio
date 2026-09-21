import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const lastModified = new Date();

  return [
    {
      url: siteUrl ? `${siteUrl}/` : "/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
