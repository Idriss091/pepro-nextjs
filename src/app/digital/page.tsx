import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import HeroAssembly from "@/components/v2/HeroAssembly";
import V2Header from "@/components/v2/V2Header";
import styles from "./page.module.css";

const display = Syne({ subsets: ["latin"], variable: "--v2-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--v2-body", display: "swap" });

export const metadata: Metadata = {
  title: "Services Digital & Engineering — Pepro",
  description:
    "Sites, e-commerce, logiciels métier, calcul scientifique, data et cloud : Pepro conçoit et met en production des produits numériques complets.",
  alternates: { canonical: "/digital" },
};

const needs = [
  {
    index: "01",
    label: "Présenter",
    title: "Clarifier votre offre et générer des demandes.",
    detail: "Site vitrine, refonte, contenus structurés et socle SEO.",
    href: "/digital/creation-site-internet",
    cta: "Voir les sites & refontes",
  },
  {
    index: "02",
    label: "Vendre",
    title: "Mettre un catalogue et ses règles métier en ligne.",
    detail: "E-commerce, paiement, logistique et connexions au système existant.",
    href: "/digital/e-commerce",
    cta: "Voir les solutions e-commerce",
  },
  {
    index: "03",
    label: "Outiller",
    title: "Remplacer les doubles saisies et les fichiers dispersés.",
    detail: "Logiciel métier, portail, workflow, rôles utilisateurs et données.",
    href: "/digital/logiciel-metier",
    cta: "Voir les logiciels métier",
  },
  {
    index: "04",
    label: "Fiabiliser",
    title: "Faire évoluer un produit sans fragiliser l’existant.",
    detail: "Architecture, déploiement, observabilité, sécurité et maintenance.",
    href: "/digital/maintenance-support",
    cta: "Voir le support technique",
  },
] as const;

const pillars = [
  {
    id: "digital",
    number: "01",
    eyebrow: "Ce que vos clients voient et utilisent",
    title: "Pepro Digital",
    summary:
      "Nous structurons l’offre, les parcours et les interfaces qui permettent de présenter, vendre et servir plus clairement.",
    services: [
      {
        title: "Sites, SEO & parcours digitaux",
        detail: "Architecture éditoriale, direction visuelle, performance et conversion.",
      },
      {
        title: "E-commerce & catalogues complexes",
        detail: "Recherche, fiches produit, commande, paiement, transport et back-office.",
      },
      {
        title: "IA & automatisation opérationnelle",
        detail: "Un flux précis, relié à vos données, avec un résultat vérifiable.",
      },
    ],
  },
  {
    id: "engineering",
    number: "02",
    eyebrow: "Ce qui calcule, relie et tient en production",
    title: "Pepro Engineering",
    summary:
      "Nous concevons les moteurs, les architectures et les outils qui portent les processus techniques ou opérationnels exigeants.",
    services: [
      {
        title: "Logiciels scientifiques & data",
        detail: "Calcul, simulation, visualisation, pipelines de données et outils d’analyse.",
      },
      {
        title: "Architecture cloud & DevOps",
        detail: "Infrastructure, CI/CD, observabilité, sécurisation et maîtrise des coûts.",
      },
      {
        title: "Outils métier & systèmes complexes",
        detail: "Règles métier, rôles, données, API et intégrations avec votre existant.",
      },
    ],
  },
] as const;

export default function DigitalPage() {
  return (
    <main className={`${styles.root} ${display.variable} ${body.variable}`}>
      <V2Header />

      <section className={styles.hero} aria-labelledby="digital-hero-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <HeroAssembly />

        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> Studio digital & engineering</p>
          <h1 id="digital-hero-title">
            <span className={styles.titleFirst}>Solutions web & ingénierie</span>
            <span className={styles.titleSecond}>logicielle sur mesure.</span>
          </h1>
          <div className={styles.heroFooter}>
            <p className={styles.lead}>
              Sites, e-commerce, logiciels métier, calcul scientifique, data et cloud —
              conçus et mis en production par une même équipe d’ingénieurs.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Exposer votre besoin <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link href="#besoins" className={styles.textLink}>
                Trouver le bon point d’entrée <ArrowDown aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.needs} id="besoins" aria-labelledby="needs-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionIndex}>01 / Votre point de départ</p>
          <div>
            <h2 id="needs-title">Par où commencer&nbsp;?</h2>
            <p>Identifiez votre besoin pour découvrir l’accompagnement, les livrables et le périmètre adaptés.</p>
          </div>
        </div>
        <div className={styles.needGrid}>
          {needs.map((need) => (
            <Link href={need.href} className={styles.needCard} key={need.index}>
              <div className={styles.needMeta}><span>{need.index}</span><strong>{need.label}</strong></div>
              <h3>{need.title}</h3>
              <p>{need.detail}</p>
              <span className={styles.cardLink}>{need.cta} <ArrowUpRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.pillars} aria-labelledby="pillars-title">
        <div className={styles.pillarIntro}>
          <p className={styles.sectionIndex}>02 / Deux métiers, une équipe</p>
          <h2 id="pillars-title">Du premier écran<br />à l’infrastructure.</h2>
        </div>
        <div className={styles.pillarGrid}>
          {pillars.map((pillar) => (
            <article className={`${styles.pillar} ${styles[pillar.id]}`} key={pillar.id}>
              <header>
                <span>{pillar.number}</span>
                <p>{pillar.eyebrow}</p>
                <h3>{pillar.title}</h3>
                <p className={styles.pillarSummary}>{pillar.summary}</p>
              </header>
              <div className={styles.expertiseList}>
                {pillar.services.map((service, index) => (
                  <div className={styles.expertise} key={service.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h4>{service.title}</h4>
                      <p>{service.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.proofs} aria-labelledby="proofs-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionIndex}>03 / Preuves de construction</p>
          <div>
            <h2 id="proofs-title">L’interface montre le produit.<br />Le produit révèle l’ingénierie.</h2>
            <p>Des contraintes différentes, traitées avec la même exigence de lisibilité et de fiabilité.</p>
          </div>
        </div>
        <div className={styles.proofGrid}>
          <Link href="/realisations/gfa-pro-boutique-b2b" className={styles.proofCard}>
            <div className={styles.proofImage}>
              <Image src="/assets/img/projects/gfa-desktop.png" alt="Interface de la boutique e-commerce B2B GFA Pro" fill sizes="(max-width: 800px) calc(100vw - 32px), 50vw" />
            </div>
            <div className={styles.proofCopy}>
              <p>Digital / Commerce B2B</p>
              <h3>Rendre plus de 35 000 références faciles à trouver et commander.</h3>
              <span>Catalogue · Recherche · Logistique · Back-office</span>
            </div>
          </Link>
          <Link href="https://www.voltpath.fr/produit" target="_blank" rel="noreferrer" className={styles.proofCard}>
            <div className={styles.proofImage}>
              <Image src="/assets/img/projects/voltpath-console.png" alt="Console de simulation et de comparaison VoltPath" fill sizes="(max-width: 800px) calc(100vw - 32px), 50vw" />
            </div>
            <div className={styles.proofCopy}>
              <p>Engineering / Énergie</p>
              <h3>Transformer des scénarios de raccordement en décision exploitable.</h3>
              <span>Calcul · Données · Scénarios · Visualisation</span>
            </div>
          </Link>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <p className={styles.eyebrow}><span /> Premier échange, sans engagement</p>
        <h2 id="cta-title">Décrivez le problème.<br />Nous identifierons le bon point d’entrée.</h2>
        <p>Un site, un outil métier ou un système technique ne se chiffre correctement qu’après avoir compris ses utilisateurs, ses données et ses contraintes.</p>
        <Link href="/contact" className={styles.primaryButton}>
          Parler à l’équipe <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/">Pepro</Link>
        <p>Digital & Engineering, de la conception à la production.</p>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">Confidentialité</Link>
        </div>
      </footer>
    </main>
  );
}
