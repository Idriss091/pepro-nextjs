import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import ProjectShowcase from "@/components/v2/ProjectShowcase";
import V2Header from "@/components/v2/V2Header";
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
        <h1 id="portfolio-title">Ce que nous avons construit.</h1>
        <div className={styles.heroBottom}>
          <p>
            E-commerce, logiciel métier ou produit IA : chaque projet commence par
            une réalité opérationnelle à comprendre.
          </p>
          <a href="#projets">Explorer les projets <ArrowDown aria-hidden="true" /></a>
        </div>
      </section>

      <section className={styles.projectList} id="projets" aria-label="Liste des réalisations">
        <div className={styles.projectIntro}>
          <p className={styles.sectionIndex}>01 / Projets principaux</p>
          <p>
            Du commerce B2B à l’énergie, parcourez des produits conçus autour de
            métiers, d’usages et de contraintes très différents.
          </p>
        </div>
        <ProjectShowcase layout="rows" />
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
