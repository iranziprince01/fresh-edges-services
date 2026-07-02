import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/impact",
    "/services",
    "/industries",
    "/testimonials",
    "/quote",
    "/pricing",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const servicePages = services.map((s) => `/services/${s.slug}`);
  const blogPages = blogPosts.map((p) => `/blog/${p.slug}`);

  const allPages = [...staticPages, ...servicePages, ...blogPages];

  return allPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
  }));
}
