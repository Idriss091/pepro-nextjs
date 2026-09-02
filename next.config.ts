import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const permanentRedirects = [
  ["/nouveau-site", "/"],
  ["/about-us", "/a-propos"],
  ["/contact-us", "/contact"],
  ["/faq", "/#faq"],
  ["/services", "/digital"],
  ["/services/1", "/digital/logiciel-metier"],
  ["/services/2", "/digital/ia-automatisation"],
  ["/services/3", "/digital"],
  ["/services/4", "/digital/logiciel-metier"],
  ["/services/5", "/digital/maintenance-support"],
  ["/services/6", "/digital/logiciel-metier"],
  ["/services/developpement-web-logiciel", "/digital/logiciel-metier"],
  ["/services/integration-ia", "/digital/ia-automatisation"],
  ["/services/intelligence-artificielle-automatisation", "/digital/ia-automatisation"],
  ["/services/sites-seo-parcours-digitaux", "/digital"],
  ["/services/logiciels-scientifiques-data", "/digital/logiciel-metier"],
  ["/services/architecture-cloud-devops", "/digital/maintenance-support"],
  ["/services/outils-metiers-systemes-complexes", "/digital/logiciel-metier"],
  ["/services/transformation-numerique", "/digital"],
  ["/services/migration-cloud", "/digital/logiciel-metier"],
  ["/services/maintenance-applicative", "/digital/maintenance-support"],
  ["/services/cybersecurite", "/digital"],
  ["/project", "/realisations"],
  ["/project-details/1", "/realisations/gfa-pro-boutique-b2b"],
  ["/project-details/2", "/realisations/portail-scolaire"],
  ["/project-details/3", "/realisations/northstar-plateforme-ia"],
] as const;

const legacyServiceDetails = [
  ["1", "/digital/logiciel-metier"],
  ["developpement-web-logiciel", "/digital/logiciel-metier"],
  ["2", "/digital/ia-automatisation"],
  ["integration-ia", "/digital/ia-automatisation"],
  ["3", "/digital"],
  ["sites-seo-parcours-digitaux", "/digital"],
  ["4", "/digital/logiciel-metier"],
  ["logiciels-scientifiques-data", "/digital/logiciel-metier"],
  ["5", "/digital/maintenance-support"],
  ["architecture-cloud-devops", "/digital/maintenance-support"],
  ["6", "/digital/logiciel-metier"],
  ["outils-metiers-systemes-complexes", "/digital/logiciel-metier"],
] as const;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    root: configDir,
  },
  async redirects() {
    return [
      ...permanentRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      ...legacyServiceDetails.map(([identifier, destination]) => ({
        source: `/service-details/${identifier}`,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
