import type { Metadata } from "next";
import V2HomePage from "@/components/v2/V2HomePage";
import {
  DEFAULT_OG_IMAGE,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "@/lib/site";

const homeTitle = "Pepro — Sites web, logiciels, IA & ingénierie";
const homeDescription =
  "Pepro conçoit des sites web, boutiques e-commerce, logiciels métier et automatisations IA sur mesure à Ris-Orangis et partout en France.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Pepro — Solutions numériques sur mesure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "fr-FR",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    areaServed: ["FR", "EU"],
    sameAs: [LINKEDIN_URL],
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressLocality: "Ris-Orangis",
      addressRegion: "Île-de-France",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      areaServed: "FR",
      availableLanguage: ["fr", "en"],
    },
  };

  return (
    <>
      <script
        id="pepro-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        id="pepro-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <V2HomePage />
    </>
  );
}
