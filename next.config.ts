import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Pin Turbopack root to this project directory, even if commands are run from parent folders.
    root: configDir,
  },
  async redirects() {
    return [
      {
        source: "/a-propos",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/services/transformation-numerique",
        destination: "/services/developpement-web-logiciel",
        permanent: true,
      },
      {
        source: "/services/migration-cloud",
        destination: "/services/developpement-web-logiciel",
        permanent: true,
      },
      {
        source: "/services/maintenance-applicative",
        destination: "/services/developpement-web-logiciel",
        permanent: true,
      },
      {
        source: "/services/cybersecurite",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
