import type { MetadataRoute } from "next";
import { projectCaseStudies } from "@/data/projectCaseStudies";
import { getServicePath, services } from "@/data/services";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  "",
  "/about-us",
  "/services",
  "/project",
  "/faq",
  "/contact-us",
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
    }

    return {
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });

  const serviceEntries: MetadataRoute.Sitemap = services.map(
    (service) => ({
      url: `${SITE_URL}${getServicePath(service)}`,
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
