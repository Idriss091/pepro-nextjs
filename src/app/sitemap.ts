import type { MetadataRoute } from "next";
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json";
import { projectCaseStudies } from "@/data/projectCaseStudies";
import { SITE_URL } from "@/lib/site";

const now = new Date();

const staticRoutes = [
  "",
  "/about-us",
  "/services",
  "/project",
  "/faq",
  "/contact-us",
  "/mentions-legales",
  "/politique-confidentialite",
  "/politique-cookies",
  "/conditions-generales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact-us" ? 0.9 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = ServicesV1Data.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projectCaseStudies.map((project) => ({
    url: `${SITE_URL}/project-details/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries];
}
