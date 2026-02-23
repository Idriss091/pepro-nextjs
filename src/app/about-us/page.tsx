import type { Metadata } from "next";
import AboutV6 from "@/components/about/AboutV6";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ServicesV6 from "@/components/services/ServicesV6";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata: Metadata = {
  title: "Pepro - À propos",
  description:
    "Découvrez l'histoire, la vision et les valeurs de Pepro, votre agence partenaire en solutions logicielles.",
};

export default function AboutUsPage() {
  return (
    <LayoutV1>
      <Breadcrumb title="À propos de Pepro" breadCrumb="À propos" />
      <AboutV6 sectionClass="bg-gray default-padding" />
      <ServicesV6 />
      <ThemeDark />
    </LayoutV1>
  );
}
