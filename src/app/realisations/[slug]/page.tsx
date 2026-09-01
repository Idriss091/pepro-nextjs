import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import { notFound } from "next/navigation";
import V2Header from "@/components/v2/V2Header";
import { getV2Project, v2Projects } from "@/data/v2Projects";
import styles from "../portfolio.module.css";

const display = Syne({ subsets: ["latin"], variable: "--v2-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--v2-body", display: "swap" });

export function generateStaticParams() {
  return v2Projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getV2Project(slug);
  return {
    title: project ? `${project.client} — Étude de cas Pepro` : "Étude de cas — Pepro",
    description: project
      ? `${project.client} : ${project.statement}`
      : "Découvrez une étude de cas réalisée par Pepro.",
    alternates: { canonical: `/realisations/${slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getV2Project(slug);
  if (!project) notFound();

  const projectIndex = v2Projects.findIndex((item) => item.id === project.id);
  const nextProject = v2Projects[(projectIndex + 1) % v2Projects.length];
  const projectStyle = {
    "--project-accent": project.accent,
    "--project-accent-soft": project.accentSoft,
  } as CSSProperties;

  return (
    <main className={`${styles.root} ${display.variable} ${body.variable}`} style={projectStyle}>
      <V2Header />
      <section className={styles.caseHero} aria-labelledby="case-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.caseTopline}>
          <Link href="/realisations"><ArrowLeft aria-hidden="true" /> Toutes les réalisations</Link>
          <span>Cas 0{projectIndex + 1} / 03</span>
        </div>
        <div className={styles.caseHeading}>
          <p className={styles.eyebrow}><span /> {project.tag}</p>
          <h1 id="case-title">{project.statement}</h1>
        </div>
        <dl className={styles.caseFacts}>
          <div><dt>Client</dt><dd>{project.client}</dd></div>
          <div><dt>Secteur</dt><dd>{project.sector}</dd></div>
          <div><dt>Intervention</dt><dd>Conception & développement</dd></div>
        </dl>
      </section>

      <section className={styles.caseVisual} aria-label="Aperçu du projet">
        <div><Image src={project.heroImage} alt={`Interface principale du projet ${project.client}`} fill priority sizes="94vw" /></div>
        <p>{project.client} / {project.tag}</p>
      </section>

      <section className={styles.caseIntro} aria-labelledby="case-summary">
        <p className={styles.sectionIndex}>01 / Vue d’ensemble</p>
        <div>
          <h2 id="case-summary">{project.title}</h2>
          <p>{project.summary}</p>
        </div>
      </section>

      <section className={styles.proofRail} aria-label="Repères du projet">
        {project.proofPoints.map((point, index) => (
          <div key={point}><span>0{index + 1}</span><p>{point}</p></div>
        ))}
      </section>

      <section className={styles.narrative}>
        <article>
          <p className={styles.sectionIndex}>02 / Le contexte</p>
          <div>{project.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </article>
        <article>
          <p className={styles.sectionIndex}>03 / Le défi</p>
          <ol>{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ol>
        </article>
      </section>

      <section className={styles.gallery} aria-label="Interfaces du projet">
        {project.galleryImages.map((image, index) => (
          <div key={image}><Image src={image} alt={`Vue ${index + 1} du projet ${project.client}`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        ))}
      </section>

      <section className={styles.solution} aria-labelledby="solution-title">
        <div className={styles.solutionHeading}>
          <p className={styles.sectionIndex}>04 / La réponse</p>
          <h2 id="solution-title">Concevoir le produit autour de l’usage réel.</h2>
        </div>
        <div className={styles.solutionList}>
          {project.solution.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}
        </div>
      </section>

      <section className={styles.delivery}>
        <div>
          <p className={styles.sectionIndex}>05 / Livré</p>
          <ul>{project.deliverables.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
        </div>
        <div>
          <p className={styles.sectionIndex}>06 / Ce que le produit permet</p>
          <ul>{project.outcomes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </section>

      <section className={styles.stack} aria-label="Technologies utilisées">
        <span>Socle technique</span>
        <div>{project.stack.map((technology) => <i key={technology}>{technology}</i>)}</div>
      </section>

      <section className={styles.nextProject}>
        <p>Projet suivant · {nextProject.client}</p>
        <Link href={`/realisations/${nextProject.slug}`}>
          {nextProject.statement}<ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className={styles.portfolioCta} aria-labelledby="case-cta">
        <p className={styles.eyebrow}><span /> Construire la suite</p>
        <h2 id="case-cta">Un projet à rendre plus clair, plus utile ou plus solide ?</h2>
        <Link href="/contact">Échanger avec Pepro <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/">Pepro</Link><p>Votre informatique. Un seul partenaire.</p>
        <div><Link href="/realisations">Réalisations</Link><Link href="/mentions-legales">Mentions légales</Link></div>
      </footer>
    </main>
  );
}
