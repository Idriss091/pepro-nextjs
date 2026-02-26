import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectV1 from "@/components/project/ProjectV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata: Metadata = {
  title: "Pepro - Nos Réalisations",
  description:
    "Découvrez les projets réalisés par Pepro : applications web, logiciels sur-mesure, solutions IA.",
  alternates: {
    canonical: "/project",
  },
};

export default function ProjectPage() {
  return (
    <LayoutV1>
      <Breadcrumb title="Nos Réalisations" breadCrumb="projets" />
      <ProjectV1 />
      <ThemeDark />
    </LayoutV1>
  );
}
