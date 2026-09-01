import { projectCaseStudies } from "@/data/projectCaseStudies";

const projectPresentation = {
  1: {
    slug: "gfa-pro-boutique-b2b",
    accent: "#21e6ff",
    accentSoft: "#bff7ff",
    statement: "Rendre 35 000 références plus simples à trouver, comprendre et commander.",
  },
  2: {
    slug: "portail-scolaire",
    accent: "#7af0bd",
    accentSoft: "#d2ffeb",
    statement: "Réunir élèves, familles et équipe éducative dans un même produit.",
  },
  3: {
    slug: "northstar-plateforme-ia",
    accent: "#c6a6ff",
    accentSoft: "#eadfff",
    statement: "Transformer une conversation en application visible et exploitable.",
  },
} as const;

export const v2Projects = projectCaseStudies.map((project) => ({
  ...project,
  ...projectPresentation[project.id as keyof typeof projectPresentation],
}));

export function getV2Project(slug: string) {
  return v2Projects.find((project) => project.slug === slug);
}

export function getV2ProjectPath(id: number) {
  const project = v2Projects.find((item) => item.id === id);
  return project ? `/realisations/${project.slug}` : "/realisations";
}
