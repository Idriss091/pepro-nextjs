import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cloud,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import HeroAurora from "@/components/v2/HeroAurora";
import MethodExperience from "@/components/v2/MethodExperience";
import ProjectShowcase from "@/components/v2/ProjectShowcase";
import ScrollRevealStatement from "@/components/v2/ScrollRevealStatement";
import V2Header from "@/components/v2/V2Header";
import blogPosts from "@/assets/jsonData/blog/BlogPeproData.json";
import testimonials from "@/assets/jsonData/testimonial/TestimonialV3Data.json";
import {
  homeDigitalServices,
  homeFaqs,
  homePrices,
} from "@/data/homeContent";
import styles from "./V2HomePage.module.css";
import prototype from "./V3Prototype.module.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--v2-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--v2-body",
  display: "swap",
});

const serviceIcons = {
  website: Globe2,
  software: Braces,
  automation: Sparkles,
  cloud: Cloud,
} as const;

const practices = [
  { index: "01", title: "Digital", detail: "Sites · E-commerce · SEO" },
  { index: "02", title: "Software", detail: "Outils métier · IA" },
  { index: "03", title: "Engineering", detail: "Simulation · Data" },
] as const;

export default function V2HomePage() {
  return (
    <main className={`${styles.root} ${display.variable} ${body.variable}`}>
      <V2Header />
      <div className={styles.pageAtmosphere} aria-hidden="true">
        <span />
      </div>

      <div className={prototype.atmosphereStage}>
        <div className={prototype.ambientContinuation} aria-hidden="true" />

        <section className={styles.hero} aria-labelledby="v2-hero-title">
          <HeroAurora />
          <div className={styles.coordinateTop} aria-hidden="true">
            <span>48.8566° N</span>
            <span>PEPRO / PARIS</span>
            <span>2.3522° E</span>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Agence digitale &amp; logicielle
            </div>

            <h1 id="v2-hero-title" className={styles.title}>
              Sites web, e-commerce,
              <br />
              {" "}SEO &amp; <span>logiciels sur mesure.</span>
            </h1>

            <p className={styles.intro}>
              Nous transformons vos enjeux en outils numériques clairs, rapides et
              durables. Vous travaillez directement avec les ingénieurs qui les
              conçoivent.
            </p>

            <div className={styles.actions}>
              <Link className={styles.primaryAction} href="/contact">
                Demander une estimation
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link className={styles.secondaryAction} href="/#realisations">
                Voir nos réalisations
              </Link>
            </div>
          </div>

          <div className={styles.verticalNote} aria-hidden="true">
            <span>BUILD WITH PURPOSE</span>
            <i />
          </div>

          <a className={styles.scrollCue} href="#approche" aria-label="Découvrir notre approche">
            <span>Explorer</span>
            <ArrowDown aria-hidden="true" />
          </a>

          <div className={styles.practiceRail}>
            <p className={styles.railLabel}>Ce que nous construisons</p>
            <div className={styles.practiceGrid}>
              {practices.map((practice) => (
                <article key={practice.index} className={styles.practice}>
                  <span>{practice.index}</span>
                  <div>
                    <h2>{practice.title}</h2>
                    <p>{practice.detail}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={prototype.approach} id="approche" aria-labelledby="manifesto-title">
          <div className={prototype.approachLead}>
            <p className={prototype.sectionIndex}>01 / Notre approche</p>
            <div className={prototype.approachCopy}>
              <ScrollRevealStatement
                id="manifesto-title"
                text="Un même partenaire, de la première visite jusqu’aux opérations qui font tourner votre activité."
              />
              <p>
                Nous relions stratégie, expérience et ingénierie. Le site ne vit plus
                à côté du logiciel : ils racontent la même promesse et partagent la
                même exigence.
              </p>
            </div>
          </div>
          <MethodExperience />
        </section>
      </div>

      <section className={prototype.services} id="services" aria-labelledby="digital-title">
        <div className={prototype.sectionHeading}>
          <div>
            <p className={prototype.sectionIndex}>02 / Ce que nous construisons</p>
            <h2 id="digital-title">Une offre organisée autour de vos usages.</h2>
          </div>
          <p>
            Être visible, vendre, outiller les équipes et garder le produit fiable :
            quatre capacités, une seule continuité de conception.
          </p>
        </div>

        <div className={prototype.serviceStack}>
          {homeDigitalServices.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article
                key={service.index}
                className={`${prototype.serviceCard} ${prototype[service.tone]}`}
              >
                <div className={prototype.serviceCopy}>
                  <div className={prototype.serviceTop}>
                    <span>{service.index} / 04</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className={prototype.serviceTags}>
                    {service.links.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                </div>
                <div
                  className={`${prototype.serviceMedia} ${
                    service.index === "02" ? prototype.consoleMedia : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    placeholder={typeof service.image === "string" ? "empty" : "blur"}
                    sizes="(max-width: 900px) 94vw, 58vw"
                  />
                  <span className={prototype.proof}>
                    {service.proof}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={prototype.projects} id="realisations" aria-labelledby="projects-title">
        <div className={prototype.projectsHeading}>
          <div>
            <p className={prototype.sectionIndex}>03 / Réalisations</p>
            <h2 id="projects-title">Des produits réels, dans des métiers très différents.</h2>
          </div>
        </div>
        <ProjectShowcase />
      </section>

      <section className={styles.pricing} id="tarifs" aria-labelledby="pricing-title">
        <div className={styles.pricingLead}>
          <p className={styles.sectionIndex}>04 / Tarifs</p>
          <h2 id="pricing-title">Des repères clairs avant même de nous appeler.</h2>
          <p>
            Chaque projet garde ses particularités. Ces prix de départ permettent
            de vérifier immédiatement si Pepro correspond à votre budget.
          </p>
          <Link className={styles.primaryAction} href="/contact">
            Diagnostic initial offert
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.priceLedger}>
          {homePrices.map((item, index) => (
            <div className={styles.priceRow} key={item.name}>
              <span>0{index + 1}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>
              <p className={styles.price}>
                <small>À partir de</small>
                {item.price}
              </p>
            </div>
          ))}

          <div className={styles.maintenancePlans}>
            <div>
              <span>Maintenance / Essentiel</span>
              <strong>290 € HT <small>/ mois</small></strong>
              <p>Mises à jour · Sauvegardes · Surveillance · Support</p>
            </div>
            <div>
              <span>Maintenance / Pro</span>
              <strong>590 € HT <small>/ mois</small></strong>
              <p>Maintenance complète · Sécurité · Corrections prioritaires · Performance & suivi SEO</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonials} aria-labelledby="testimonials-title">
        <div className={styles.testimonialHeading}>
          <p className={styles.sectionIndex}>05 / Témoignages clients</p>
          <h2 id="testimonials-title">
            Nos clients racontent leur expérience avec Pepro.
          </h2>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <figure key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteTop}>
                <Quote aria-hidden="true" />
                <span>0{index + 1} / 03</span>
              </div>
              <blockquote>{testimonial.text}</blockquote>
              <figcaption>
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={56}
                  height={56}
                  sizes="56px"
                />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>Client Pepro · Avis publié</span>
                </div>
                <div className={styles.rating} aria-label={`${testimonial.ratings} étoiles sur 5`}>
                  {testimonial.ratings}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.faq} id="faq" aria-labelledby="faq-title">
        <div className={styles.faqHeading}>
          <p className={styles.sectionIndex}>06 / Questions fréquentes</p>
          <h2 id="faq-title">Les réponses utiles avant de commencer.</h2>
          <Link href="/faq" className={styles.textLink}>
            Voir toutes les questions
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.faqList}>
          {homeFaqs.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>0{index + 1}</span>
                {item.question}
                <i aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.insights} aria-labelledby="insights-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionIndex}>07 / Conseils</p>
            <h2 id="insights-title">À lire avant votre prochain projet.</h2>
          </div>
          <Link href="/blog" className={styles.textLink}>
            Tous les conseils
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.insightGrid}>
          {blogPosts.slice(0, 2).map((post, index) => (
            <Link href={`/blog/${post.id}`} key={post.id} className={styles.insightCard}>
              <div className={styles.insightImage}>
                <Image
                  src={`/assets/img/blog/${post.thumb}`}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 94vw, 47vw"
                />
                <span>0{index + 1}</span>
              </div>
              <div className={styles.insightCopy}>
                <p>{post.tag} · {post.date}</p>
                <h3>{post.title}</h3>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="cta-title">
        <div className={styles.ctaGlow} aria-hidden="true" />
        <p className={styles.sectionIndex}>08 / Votre prochain projet</p>
        <h2 id="cta-title">Une idée, un problème ou un outil à faire évoluer ?</h2>
        <p>Décrivez-nous le besoin. Nous vous répondrons avec une première direction claire.</p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} href="/contact">
            Demander une estimation
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <a className={styles.secondaryAction} href="tel:+33781911992">
            07 81 91 19 92
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Link href="/" className={styles.footerBrand}>Pepro</Link>
          <p>Votre informatique. Un seul partenaire.</p>
          <div className={styles.footerContact}>
            <a href="tel:+33781911992"><Phone aria-hidden="true" />07 81 91 19 92</a>
            <a href="mailto:contact@pepro.fr"><Mail aria-hidden="true" />contact@pepro.fr</a>
            <span><MapPin aria-hidden="true" />Ris-Orangis, France</span>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <span>Digital</span>
            <Link href="/digital/creation-site-internet">Sites & SEO</Link>
            <Link href="/digital/logiciel-metier">Logiciels</Link>
            <Link href="/digital/ia-automatisation">IA & automatisation</Link>
          </div>
          <div>
            <span>Découvrir</span>
            <Link href="/realisations">Réalisations</Link>
            <Link href="/blog">Conseils</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <span>Informations</span>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
            <Link href="/politique-cookies">Cookies</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Pepro</span>
          <span>Ouvert du lundi au samedi · 8 h 30 — 18 h 30</span>
          <span>Calligrapher Coders</span>
        </div>
      </footer>
    </main>
  );
}
