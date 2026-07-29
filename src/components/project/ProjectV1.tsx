import Image from "next/image";
import Link from "next/link";
import { projectCaseStudies } from "@/data/projectCaseStudies";
import styles from "./ProjectV1.module.css";

const highlights = [
  { value: "Sur-mesure", label: "produits alignés sur des contraintes métier réelles" },
  { value: "35k+", label: "produits e-commerce structurés" },
  { value: "SaaS", label: "interfaces métier et IA" },
];

const cardContent: Record<
  number,
  { title: string; tag: string; summary: string }
> = {
  1: {
    title: "Boutique B2B pour distributeur outillage et EPI",
    tag: "E-commerce B2B",
    summary:
      "Une boutique en ligne pensée pour les achats professionnels, avec grand catalogue, recherche produit, logistique transporteurs et parcours d'achat adapté aux besoins terrain.",
  },
  2: {
    title: "Portail scolaire pour élèves, parents et équipe éducative",
    tag: "Produit EdTech",
    summary:
      "Une plateforme scolaire complète pour suivre les notes, les absences, les devoirs, les messages et la vie de l'établissement depuis des espaces dédiés à chaque profil.",
  },
  3: {
    title: "Plateforme IA pour créer des applications web",
    tag: "Produit SaaS IA",
    summary:
      "Un produit web qui permet de décrire une idée, générer une application avec l'IA, visualiser le résultat en direct et suivre ses projets depuis un même workspace.",
  },
};

const ProjectV1 = () => {
  return (
    <section className={`default-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.shell}>
          <div className={styles.header}>
            <div className={styles.headerCopy}>
              <span className={styles.eyebrow}>Nos réalisations</span>
              <h2 className={styles.title}>Des produits livrés, pas des promesses abstraites.</h2>
              <p className={styles.lead}>
                E-commerce à grand catalogue, logiciel métier pour établissement scolaire,
                produit SaaS assisté par IA: chaque projet montre un niveau d&apos;exécution
                concret, avec des interfaces réelles et des usages clairement visibles.
              </p>
            </div>

            <div className={styles.highlightRail}>
              {highlights.map((item) => (
                <div key={item.label} className={styles.highlightCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cards}>
            {projectCaseStudies.map((project) => {
              const content = cardContent[project.id] ?? {
                title: project.title,
                tag: project.tag,
                summary: project.summary,
              };

              return (
              <article key={project.id} className={styles.card}>
                <div className={styles.imageFrame}>
                  <Image
                    src={project.thumb}
                    alt={content.title}
                    width={1842}
                    height={1047}
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.tag}>{content.tag}</span>
                    <span className={styles.sector}>{project.sector}</span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <Link
                      href={`/project-details/${project.id}`}
                      className={styles.cardTitleLink}
                    >
                      {content.title}
                    </Link>
                  </h3>
                  <p className={styles.cardSummary}>{content.summary}</p>

                  <div className={styles.stackList}>
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item} className={styles.stackItem}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.clientBlock}>
                      <span>Client</span>
                      <strong>{project.client}</strong>
                    </div>

                    <Link
                      className={styles.cardLink}
                      href={`/project-details/${project.id}`}
                    >
                      Voir l&apos;étude de cas
                    </Link>
                  </div>
                </div>
              </article>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectV1;
