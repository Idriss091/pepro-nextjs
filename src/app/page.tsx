import type { Metadata } from "next";
import AboutV6 from "@/components/about/AboutV6";
import BannerV8 from "@/components/banner/BannerV8";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV1 from "@/components/header/HeaderV1";
import ServicesV1 from "@/components/services/ServicesV1";
import MultiSectionPepro from "@/components/multi/MultiSectionPepro";
import TestimonialV3 from "@/components/testimonial/TestimonialV3";
import ThemeDark from "@/components/switcher/ThemeDark";
import {
  DEFAULT_OG_IMAGE,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pepro - Agence de développement logiciel sur-mesure à Paris",
  description:
    "Pepro conçoit des applications web, logiciels métiers, solutions IA et plateformes sur-mesure pour startups, PME et ETI.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pepro - Agence de développement logiciel sur-mesure à Paris",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Pepro - Services numeriques" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pepro - Agence de développement logiciel sur-mesure à Paris",
    description: SITE_DESCRIPTION,
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
      addressLocality: "Paris",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      areaServed: "FR",
      availableLanguage: ["fr", "en"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <div className="smooth-scroll-container">
        <HeaderV1 />
        <BannerV8 />
        <AboutV6 sectionClass="default-padding" />
        <ServicesV1 sectionClass="bg-gray default-padding" hasTitle={true} />
        <TestimonialV3 sectionClass="bg-gray" />
        <MultiSectionPepro />
        <FooterV1 />
        <ThemeDark />
      </div>
    </>
  );
}
