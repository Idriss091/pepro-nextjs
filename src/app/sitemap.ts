import type { MetadataRoute } from "next";
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json";
import { projectCaseStudies } from "@/data/projectCaseStudies";
import { SITE_URL } from "@/lib/site";

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
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    let priority = 0.5;
    let changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never" = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (route === "/services" || route === "/project") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (
      route === "/about-us" ||
      route === "/contact-us" ||
      route === "/faq"
    ) {
      priority = 0.8;
      changeFrequency = "monthly";
    } else {
      // Pages légales
      priority = 0.3;
      changeFrequency = "yearly";
    }

    return {
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });

  const serviceEntries: MetadataRoute.Sitemap = ServicesV1Data.map(
    (service) => ({
      url: `${SITE_URL}/services/${service.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const projectEntries: MetadataRoute.Sitemap = projectCaseStudies.map(
    (project) => ({
      url: `${SITE_URL}/project-details/${project.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...staticEntries, ...serviceEntries, ...projectEntries];
}
