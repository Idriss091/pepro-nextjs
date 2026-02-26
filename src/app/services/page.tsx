import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ServicesV1 from "@/components/services/ServicesV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata: Metadata = {
  title: "Pepro - Nos Services",
  description:
    "Découvrez notre expertise en développement logiciel, intégration d'Intelligence Artificielle et solutions de calcul scientifique.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <LayoutV1>
      <Breadcrumb title="Nos Services" breadCrumb="services" />
      <ServicesV1 sectionClass="default-padding-bottom" />
      <ThemeDark />
    </LayoutV1>
  );
}
