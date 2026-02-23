import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectDetailsContentPepro from "@/components/project/ProjectDetailsContentPepro";
import ThemeDark from "@/components/switcher/ThemeDark";
import {
  getProjectCaseStudyById,
  projectCaseStudies,
} from "@/data/projectCaseStudies";

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectCaseStudyById(Number(id));

  return {
    title: project ? `Pepro - ${project.title}` : "Pepro - Etude de cas",
    description:
      project?.summary ?? "Etudes de cas Pepro: produits et plateformes sur-mesure.",
    alternates: {
      canonical: `/project-details/${id}`,
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const currentProject = getProjectCaseStudyById(Number(id));

  if (!currentProject) notFound();

  const currentIndex = projectCaseStudies.findIndex(
    (project) => project.id === currentProject.id,
  );
  const previousProject =
    projectCaseStudies[
      (currentIndex - 1 + projectCaseStudies.length) % projectCaseStudies.length
    ];
  const nextProject =
    projectCaseStudies[(currentIndex + 1) % projectCaseStudies.length];

  return (
    <LayoutV1>
      <Breadcrumb
        title="Etudes de cas"
        breadCrumb={`${currentProject.sliderTitleFirst} ${currentProject.sliderTitleLast}`}
      />
      <ProjectDetailsContentPepro
        project={currentProject}
        previousProject={previousProject}
        nextProject={nextProject}
      />
      <ThemeDark />
    </LayoutV1>
  );
}
