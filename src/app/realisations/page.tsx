import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import V2Header from "@/components/v2/V2Header";
import { v2Projects } from "@/data/v2Projects";
import styles from "./portfolio.module.css";

const display = Syne({ subsets: ["latin"], variable: "--v2-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--v2-body", display: "swap" });

export const metadata: Metadata = {
  title: "Réalisations — Pepro",
  description: "Découvrez des sites, logiciels métier et produits IA conçus et développés par Pepro.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <main className={`${styles.root} ${display.variable} ${body.variable}`}>
      <V2Header />
      <section className={styles.indexHero} aria-labelledby="portfolio-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <p className={styles.eyebrow}><span /> Réalisations sélectionnées</p>
        <h1 id="portfolio-title">Des produits qui travaillent dans le monde réel.</h1>
        <div className={styles.heroBottom}>
          <p>
            E-commerce, logiciel métier ou produit IA : chaque projet commence par
            une réalité opérationnelle à comprendre.
          </p>
          <a href="#projets">Explorer les projets <ArrowDown aria-hidden="true" /></a>
        </div>
      </section>

      <section className={styles.projectList} id="projets" aria-label="Liste des réalisations">
        {v2Projects.map((project, index) => (
          <article
            className={styles.projectRow}
            key={project.id}
            style={{ "--project-accent": project.accent } as CSSProperties}
          >
            <div className={styles.projectMeta}>
              <span>0{index + 1} / 03</span>
              <p>{project.tag}</p>
            </div>
            <Link href={`/realisations/${project.slug}`} className={styles.projectImage}>
              <Image
                src={project.heroImage}
                alt={`Interface du projet ${project.client}`}
                fill
                priority={index === 0}
                sizes="(max-width: 800px) 100vw, 62vw"
              />
              <span>Voir l’étude de cas <ArrowUpRight aria-hidden="true" /></span>
            </Link>
            <div className={styles.projectCopy}>
              <p>{project.client} · {project.sector}</p>
              <h2><Link href={`/realisations/${project.slug}`}>{project.statement}</Link></h2>
              <ul>
                {project.proofPoints.slice(0, 3).map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.portfolioCta} aria-labelledby="portfolio-cta">
        <p className={styles.eyebrow}><span /> Votre prochain projet</p>
        <h2 id="portfolio-cta">Une réalité métier mérite mieux qu’une solution générique.</h2>
        <Link href="/contact">Présenter votre besoin <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/">Pepro</Link>
        <p>Votre informatique. Un seul partenaire.</p>
        <div><Link href="/digital">Pepro Digital</Link><Link href="/mentions-legales">Mentions légales</Link></div>
      </footer>
    </main>
  );
}
