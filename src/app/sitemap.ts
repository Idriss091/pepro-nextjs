import type { MetadataRoute } from "next";
import blogPosts from "@/assets/jsonData/blog/BlogPeproData.json";
import { digitalOffers } from "@/data/digitalOffers";
import { v2Projects } from "@/data/v2Projects";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/digital", priority: 0.9, changeFrequency: "weekly" },
  { path: "/realisations", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tarifs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
  { path: "/politique-confidentialite", priority: 0.2, changeFrequency: "yearly" },
  { path: "/politique-cookies", priority: 0.2, changeFrequency: "yearly" },
  { path: "/conditions-generales", priority: 0.2, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const offerEntries: MetadataRoute.Sitemap = digitalOffers.map(({ slug }) => ({
    url: `${SITE_URL}/digital/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = v2Projects.map(({ slug }) => ({
    url: `${SITE_URL}/realisations/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(({ id }) => ({
    url: `${SITE_URL}/blog/${id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...offerEntries, ...projectEntries, ...blogEntries];
}
