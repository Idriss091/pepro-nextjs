import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import { notFound } from "next/navigation";
import V2Header from "@/components/v2/V2Header";
import { digitalOffers, getDigitalOffer } from "@/data/digitalOffers";
import styles from "./page.module.css";

const display = Syne({ subsets: ["latin"], variable: "--v2-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--v2-body", display: "swap" });

export function generateStaticParams() {
  return digitalOffers.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offer = getDigitalOffer(slug);

  return {
    title: offer ? `${offer.eyebrow} — Pepro Digital` : "Offre Digital — Pepro",
    description: offer?.summary,
    alternates: { canonical: `/digital/${slug}` },
  };
}

export default async function DigitalOfferPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offer = getDigitalOffer(slug);

  if (!offer) notFound();

  const colorStyle = {
    "--offer-accent": offer.accent,
    "--offer-accent-soft": offer.accentSoft,
  } as CSSProperties;

  return (
    <main className={`${styles.root} ${display.variable} ${body.variable}`} style={colorStyle}>
      <V2Header />

      <section className={styles.hero} aria-labelledby="offer-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroTopline}>
          <Link href="/digital"><ArrowLeft aria-hidden="true" /> Pepro Digital</Link>
          <span>{offer.number} / 06</span>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> {offer.eyebrow}</p>
          <h1 id="offer-title">{offer.title}</h1>
          <p>{offer.summary}</p>
        </div>
        <div className={styles.priceNote}>
          <span>{offer.priceNote}</span>
          <strong>{offer.price}</strong>
          <Link href="/contact">Demander une estimation <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.showcase} aria-label="Aperçu du travail Pepro">
        <div className={styles.browserBar} aria-hidden="true">
          <span /><span /><span />
          <i>pepro.fr / réalisation</i>
        </div>
        <div className={styles.imageFrame}>
          <Image
            src={offer.image}
            alt={offer.imageAlt}
            fill
            priority
            sizes="(max-width: 720px) 100vw, 92vw"
          />
        </div>
        <p>{offer.visualLabel}</p>
      </section>

      <section className={styles.argument} aria-labelledby="response-title">
        <p className={styles.sectionIndex}>01 / Le point de départ</p>
        <div className={styles.argumentGrid}>
          <article>
            <span>Constat</span>
            <h2>{offer.problemTitle}</h2>
            <p>{offer.problem}</p>
          </article>
          <article className={styles.response}>
            <span>Réponse Pepro</span>
            <h2 id="response-title">{offer.responseTitle}</h2>
            <p>{offer.response}</p>
          </article>
        </div>
      </section>

      <section className={styles.scope} aria-labelledby="scope-title">
        <div className={styles.scopeHeading}>
          <p className={styles.sectionIndex}>02 / Le périmètre</p>
          <h2 id="scope-title">Ce que nous mettons<br />sur la table.</h2>
        </div>
        <div className={styles.scopeGrid}>
          <div className={styles.deliverables}>
            {offer.deliverables.map((deliverable, index) => (
              <div key={deliverable}>
                <span>0{index + 1}</span>
                <p>{deliverable}</p>
                <Check aria-hidden="true" />
              </div>
            ))}
          </div>
          <aside>
            <span>Ce que cela doit produire</span>
            <ul>
              {offer.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <div>
          <p className={styles.sectionIndex}>03 / Questions utiles</p>
          <h2 id="faq-title">Avant de commencer.</h2>
        </div>
        <div className={styles.faqList}>
          {offer.faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <p className={styles.eyebrow}><span /> Diagnostic initial offert</p>
        <h2 id="cta-title">Vous avez le besoin.<br />Donnons-lui une forme claire.</h2>
        <div>
          <Link className={styles.primaryButton} href="/contact">
            Demander une estimation <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link className={styles.siblingLink} href={offer.sibling.href}>
            {offer.sibling.label} <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/">Pepro</Link>
        <p>Votre informatique. Un seul partenaire.</p>
        <div><Link href="/digital">Pepro Digital</Link><Link href="/mentions-legales">Mentions légales</Link></div>
      </footer>
    </main>
  );
}
