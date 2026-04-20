import rawServices from "@/assets/jsonData/services/ServicesV1Data.json";

const SERVICE_SLUGS = {
  1: "developpement-web-logiciel",
  2: "integration-ia",
  3: "logiciels-scientifiques-data",
} as const;

const SERVICE_ALIASES: Record<string, keyof typeof SERVICE_SLUGS> = {
  "1": 1,
  "2": 2,
  "3": 3,
  "transformation-numerique": 1,
  "migration-cloud": 1,
  "maintenance-applicative": 1,
  "developpement-web-logiciel": 1,
  "integration-ia": 2,
  "logiciels-scientifiques-data": 3,
};

export type Service = (typeof rawServices)[number] & {
  slug: string;
};

export const services: Service[] = rawServices.map((service) => ({
  ...service,
  slug:
    SERVICE_SLUGS[service.id as keyof typeof SERVICE_SLUGS] ?? String(service.id),
}));

function normalizeIdentifier(identifier: string) {
  return identifier.trim().toLowerCase();
}

export function getServicePath(service: Pick<Service, "slug">) {
  return `/services/${service.slug}`;
}

export function getServiceById(id: number) {
  return services.find((service) => service.id === id);
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === normalizeIdentifier(slug));
}

export function getServiceByIdentifier(identifier: string) {
  const normalizedIdentifier = normalizeIdentifier(identifier);
  const matchedId = SERVICE_ALIASES[normalizedIdentifier];

  if (matchedId) {
    return getServiceById(matchedId);
  }

  const numericId = Number(normalizedIdentifier);
  if (Number.isInteger(numericId)) {
    return getServiceById(numericId);
  }

  return getServiceBySlug(normalizedIdentifier);
}

export function isCanonicalServiceIdentifier(identifier: string, service: Service) {
  return normalizeIdentifier(identifier) === service.slug;
}
