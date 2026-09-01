import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Globe2,
  Search,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import V2Header from "@/components/v2/V2Header";
import styles from "./page.module.css";

const display = Syne({ subsets: ["latin"], variable: "--v2-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--v2-body", display: "swap" });

export const metadata: Metadata = {
  title: "Pepro Digital — Sites, e-commerce, SEO et outils métier",
  description:
    "Pepro conçoit des sites internet, boutiques e-commerce et outils métier sur mesure, avec SEO et automatisation.",
  alternates: { canonical: "/digital" },
};

const services = [
  {
    index: "01",
    title: "Création & refonte",
    detail: "Sites vitrines rapides, clairs et pensés pour convertir.",
    price: "À partir de 890 € HT",
    href: "/digital/creation-site-internet",
    icon: Globe2,
  },
  {
    index: "02",
    title: "E-commerce",
    detail: "Catalogues, paiement et parcours de vente sans friction.",
    price: "À partir de 1 990 € HT",
    href: "/digital/e-commerce",
    icon: ShoppingBag,
  },
  {
    index: "03",
    title: "SEO",
    detail: "Structure, contenu et technique pour être réellement trouvé.",
    price: "Inclus selon le périmètre",
    href: "/digital/seo",
    icon: Search,
  },
  {
    index: "04",
    title: "Outil métier / MVP",
    detail: "Une interface sur mesure alignée sur vos opérations.",
    price: "À partir de 1 490 € HT",
    href: "/digital/logiciel-metier",
    icon: Braces,
  },
  {
    index: "05",
    title: "IA & automatisation",
    detail: "Automatiser un processus et connecter vos outils existants.",
    price: "À partir de 590 € HT",
    href: "/digital/ia-automatisation",
    icon: Sparkles,
  },
  {
    index: "06",
    title: "Maintenance",
    detail: "Mises à jour, sauvegardes, surveillance et support.",
    price: "À partir de 290 € HT / mois",
    href: "/digital/maintenance-support",
    icon: Wrench,
  },
] as const;

const steps = [
  ["01", "Comprendre", "Objectifs, contraintes, utilisateurs et données : nous cadrons ce qui compte."],
  ["02", "Concevoir", "Le parcours et l’interface prennent forme avant d’engager le développement."],
  ["03", "Construire", "Développement, intégrations et contenus avancent dans un cycle court et visible."],
  ["04", "Faire vivre", "Mise en ligne, mesure et évolutions : le produit continue de progresser."],
] as const;

export default function DigitalPage() {
  return (
    <main className={`${styles.root} ${display.variable} ${body.variable}`}>
      <V2Header />

      <section className={styles.hero} aria-labelledby="digital-hero-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.orbit} aria-hidden="true">
          <span>D</span>
          <i />
          <i />
          <i />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> Pepro Digital</p>
          <h1 id="digital-hero-title">
            Être visible.<br />Vendre. <span>Mieux travailler.</span>
          </h1>
          <p className={styles.lead}>
            Nous concevons les sites et outils numériques qui relient votre marque,
            vos clients et vos opérations — sans couche de complexité inutile.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Parler de votre projet <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="#offres" className={styles.textLink}>
              Explorer les offres <ArrowDown aria-hidden="true" />
            </Link>
          </div>
        </div>
        <p className={styles.heroAside}>Sites · E-commerce · SEO · Logiciels · IA</p>
      </section>

      <section className={styles.services} id="offres" aria-labelledby="services-title">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionIndex}>01 / Ce que nous construisons</p>
          <div>
            <h2 id="services-title">Un seul partenaire,<br />du premier clic à l’outil métier.</h2>
            <p>Chaque intervention répond à un besoin concret et s’intègre à une trajectoire commune.</p>
          </div>
        </div>
        <div className={styles.serviceList}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link className={styles.serviceRow} href={service.href} key={service.index}>
                <span className={styles.serviceIndex}>{service.index}</span>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </div>
                <strong>{service.price}</strong>
                <ArrowUpRight className={styles.rowArrow} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.proof} aria-labelledby="proof-title">
        <div className={styles.proofVisual}>
          <Image
            src="/assets/img/projects/ecommerce-storefront.png"
            alt="Interface d’une boutique e-commerce réalisée par Pepro"
            width={1280}
            height={860}
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <span>Projet réel / E-commerce B2B</span>
        </div>
        <div className={styles.proofCopy}>
          <p className={styles.sectionIndex}>02 / La différence Pepro</p>
          <h2 id="proof-title">Le design attire.<br />La structure transforme.</h2>
          <p>
            Une belle interface ne suffit pas. Nous travaillons aussi le référencement,
            la vitesse, la lisibilité du catalogue et les connexions nécessaires à votre activité.
          </p>
          <ul>
            <li><span>01</span> Une direction visuelle distinctive</li>
            <li><span>02</span> Une base technique maintenable</li>
            <li><span>03</span> Des parcours pensés pour vos objectifs</li>
          </ul>
          <Link href="/realisations/gfa-pro-boutique-b2b">
            Voir une réalisation <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.method} aria-labelledby="method-title">
        <div className={styles.methodHeading}>
          <p className={styles.sectionIndex}>03 / Notre méthode</p>
          <h2 id="method-title">Un chemin clair,<br />sans effet tunnel.</h2>
        </div>
        <div className={styles.steps}>
          {steps.map(([index, title, copy]) => (
            <article key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <p className={styles.eyebrow}><span /> Diagnostic initial offert</p>
        <h2 id="cta-title">Votre prochain outil doit commencer par une conversation claire.</h2>
        <Link href="/contact" className={styles.primaryButton}>
          Demander une estimation <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/">Pepro</Link>
        <p>Votre informatique. Un seul partenaire.</p>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">Confidentialité</Link>
        </div>
      </footer>
    </main>
  );
}
