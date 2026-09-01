import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Braces,
  Database,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import HeroAurora from "@/components/v2/HeroAurora";
import ScrollRevealStatement from "@/components/v2/ScrollRevealStatement";
import V2Header from "@/components/v2/V2Header";
import blogPosts from "@/assets/jsonData/blog/BlogPeproData.json";
import testimonials from "@/assets/jsonData/testimonial/TestimonialV3Data.json";
import { v2Projects } from "@/data/v2Projects";
import styles from "./V2HomePage.module.css";

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

const practices = [
  { index: "01", title: "Digital", detail: "Sites · E-commerce · SEO" },
  { index: "02", title: "Software", detail: "Outils métier · IA" },
  { index: "03", title: "Engineering", detail: "Simulation · Data" },
];

const digitalServices = [
  {
    index: "01",
    title: "Sites internet & SEO",
    copy: "Des sites rapides, lisibles et conçus pour transformer une recherche en prise de contact.",
    links: ["Création & refonte", "Référencement naturel"],
    icon: Globe2,
    tone: "cyan",
  },
  {
    index: "02",
    title: "E-commerce",
    copy: "Des boutiques capables d'organiser un catalogue dense et de simplifier l'achat, du produit à la livraison.",
    links: ["Parcours de vente", "Catalogues & intégrations"],
    icon: ShoppingBag,
    tone: "violet",
  },
  {
    index: "03",
    title: "Logiciels & automatisation",
    copy: "Des outils métier, plateformes web et automatisations qui épousent vos opérations au lieu de les contraindre.",
    links: ["Développement sur mesure", "IA & automatisation"],
    icon: Braces,
    tone: "green",
  },
] as const;

const prices = [
  {
    name: "Audit & conseil",
    price: "290 € HT",
    detail: "Analyse des besoins · Recommandations · Feuille de route",
  },
  {
    name: "IA & automatisation",
    price: "590 € HT",
    detail: "Automatisation d'un processus · Intégration à vos outils",
  },
  {
    name: "Site vitrine",
    price: "890 € HT",
    detail: "SEO technique · Mise en ligne",
  },
  {
    name: "E-commerce",
    price: "1 990 € HT",
    detail: "Paiement en ligne · Catalogue · Mise en ligne",
  },
  {
    name: "Outil métier / MVP",
    price: "1 490 € HT",
    detail: "Prototype fonctionnel · Interface sur mesure",
  },
] as const;

const faqs = [
  {
    question: "Combien coûte un site internet avec Pepro ?",
    answer:
      "Un site vitrine débute à 890 € HT. Le montant final dépend du nombre de pages, du contenu, des intégrations et des fonctionnalités attendues. Une estimation claire est fournie avant le démarrage.",
  },
  {
    question: "Pouvez-vous créer ou reprendre une boutique e-commerce ?",
    answer:
      "Oui. Une création e-commerce débute à 1 990 € HT. Nous pouvons également reprendre un catalogue ou une boutique existante après un audit de son état technique et de ses priorités.",
  },
  {
    question: "Travaillez-vous avec PrestaShop ?",
    answer:
      "Oui. Pepro conçoit et fait évoluer des boutiques PrestaShop, notamment pour des catalogues B2B importants, avec paiement, transporteurs, thème sur mesure et optimisation technique.",
  },
  {
    question: "Combien de temps faut-il prévoir ?",
    answer:
      "Le délai dépend du périmètre. Il est défini après le diagnostic initial, avec des étapes et des livrables explicites. Un site simple se planifie différemment d'un logiciel métier ou d'une plateforme e-commerce.",
  },
  {
    question: "Assurez-vous la maintenance après la mise en ligne ?",
    answer:
      "Oui. Le forfait Essentiel débute à 290 € HT par mois et le forfait Pro à 590 € HT par mois, selon le niveau de maintenance, de sécurité, de support et de suivi SEO nécessaire.",
  },
] as const;

export default function V2HomePage() {
  return (
    <main className={`${styles.root} ${display.variable} ${body.variable}`}>
      <V2Header />

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

        <a className={styles.scrollCue} href="#services" aria-label="Découvrir nos services">
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

      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <p className={styles.sectionIndex}>01 / Notre approche</p>
        <div className={styles.manifestoCopy}>
          <ScrollRevealStatement
            id="manifesto-title"
            text="Le numérique n’a pas besoin d’être plus compliqué. Il doit simplement mieux travailler pour vous."
          />
          <p>
            Pepro réunit design, développement et ingénierie pour construire des
            expériences utiles — de la première visite jusqu&apos;aux opérations qui
            font tourner votre entreprise.
          </p>
        </div>
      </section>

      <section className={styles.digitalSection} id="services" aria-labelledby="digital-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionIndex}>02 / Pepro Digital</p>
            <h2 id="digital-title">Du site vitrine au produit métier.</h2>
          </div>
          <p>
            Un même niveau d&apos;exigence pour être visible, vendre et outiller vos
            équipes.
          </p>
        </div>

        <div className={styles.serviceScenes}>
          {digitalServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.index}
                className={`${styles.serviceScene} ${styles[service.tone]}`}
              >
                <div className={styles.serviceCopy}>
                  <span className={styles.serviceIndex}>{service.index}</span>
                  <Icon className={styles.serviceIcon} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className={styles.serviceLinks}>
                    {service.links.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.serviceVisual} aria-hidden="true">
                  <div className={styles.visualGrid} />
                  <div className={styles.visualWindow}>
                    <div className={styles.windowTop}>
                      <i />
                      <i />
                      <i />
                      <span>pepro.build/{service.index}</span>
                    </div>
                    <div className={styles.windowCanvas}>
                      <span>{service.title}</span>
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                  <span className={styles.visualSignal}>
                    <Sparkles />
                    Conçu pour votre usage
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.featuredProject} id="realisations" aria-labelledby="gfa-title">
        <div className={styles.projectIntro}>
          <p className={styles.sectionIndex}>03 / Cas client</p>
          <p className={styles.projectClient}>GFA Pro · E-commerce B2B</p>
          <h2 id="gfa-title">
            Une boutique pensée pour rendre un catalogue de plus de
            <span> 35 000 références</span> réellement exploitable.
          </h2>
          <div className={styles.projectMeta}>
            <span>PrestaShop</span>
            <span>Catalogue B2B</span>
            <span>Transporteurs</span>
            <span>Thème sur mesure</span>
          </div>
          <Link href="/realisations/gfa-pro-boutique-b2b" className={styles.textLink}>
            Découvrir le projet
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <Link href="/realisations/gfa-pro-boutique-b2b" className={styles.projectFrame}>
          <div className={styles.browserBar} aria-hidden="true">
            <span>GFA PRO / STOREFRONT</span>
            <span>01 — 03</span>
          </div>
          <Image
            src="/assets/img/projects/ecommerce-storefront.png"
            alt="Interface de la boutique e-commerce GFA Pro"
            width={1842}
            height={1047}
            sizes="(max-width: 900px) 94vw, 82vw"
          />
          <span className={styles.frameAction}>
            Voir le cas
            <ArrowUpRight aria-hidden="true" />
          </span>
        </Link>
      </section>

      <section className={styles.engineering} aria-labelledby="engineering-title">
        <div className={styles.engineeringGlow} aria-hidden="true" />
        <div className={styles.engineeringHeader}>
          <p className={styles.sectionIndex}>04 / Pepro Engineering</p>
          <h2 id="engineering-title">
            Quand le logiciel rencontre la science.
          </h2>
          <p>
            Nous concevons aussi des outils de calcul, de modélisation et de
            traitement de données pour les problématiques scientifiques et
            industrielles.
          </p>
        </div>

        <div className={styles.engineeringGrid}>
          <article>
            <Atom aria-hidden="true" />
            <span>01</span>
            <h3>Logiciels scientifiques</h3>
            <p>Interfaces de calcul, analyse, visualisation et outils dédiés aux experts métier.</p>
          </article>
          <article>
            <Database aria-hidden="true" />
            <span>02</span>
            <h3>Simulation & modélisation</h3>
            <p>Modèles numériques, mécanique des fluides, données scientifiques et optimisation.</p>
          </article>
          <div className={styles.engineeringDiagram} aria-hidden="true">
            <div className={styles.orbitOne} />
            <div className={styles.orbitTwo} />
            <div className={styles.diagramCore}>PE</div>
            <span className={styles.nodeOne}>MODEL</span>
            <span className={styles.nodeTwo}>DATA</span>
            <span className={styles.nodeThree}>SOLVE</span>
          </div>
        </div>
      </section>

      <section className={styles.pricing} id="tarifs" aria-labelledby="pricing-title">
        <div className={styles.pricingLead}>
          <p className={styles.sectionIndex}>05 / Tarifs</p>
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
          {prices.map((item, index) => (
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

      <section className={styles.projectIndex} aria-labelledby="projects-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionIndex}>06 / Réalisations</p>
            <h2 id="projects-title">Quelques systèmes déjà construits.</h2>
          </div>
          <Link href="/realisations" className={styles.textLink}>
            Toutes les réalisations
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.projectGrid}>
          {v2Projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/realisations/${project.slug}`}
              className={styles.projectCard}
            >
              <div className={styles.projectImage}>
                <Image
                  src={project.thumb}
                  alt={`Aperçu du projet ${project.client}`}
                  fill
                  sizes="(max-width: 760px) 94vw, (max-width: 1100px) 46vw, 31vw"
                />
                <span>0{index + 1}</span>
              </div>
              <div className={styles.projectCardCopy}>
                <div>
                  <p>{project.tag}</p>
                  <h3>{project.client}</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.testimonials} aria-labelledby="testimonials-title">
        <div className={styles.testimonialHeading}>
          <p className={styles.sectionIndex}>07 / Ils nous font confiance</p>
          <h2 id="testimonials-title">Le résultat compte. La façon d&apos;y arriver aussi.</h2>
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

      <section className={styles.team} id="a-propos" aria-labelledby="team-title">
        <div className={styles.teamStatement}>
          <p className={styles.sectionIndex}>08 / L&apos;équipe</p>
          <h2 id="team-title">
            Les personnes que vous rencontrez sont celles qui construisent votre projet.
          </h2>
          <p>
            Deux profils techniques, un interlocuteur direct et aucune couche
            inutile entre votre besoin et sa réalisation.
          </p>
        </div>

        <div className={styles.teamMembers}>
          <article>
            <div className={styles.memberMonogram} aria-hidden="true">WL</div>
            <div className={styles.memberMeta}>
              <span>Co-fondateur · CEO</span>
              <h3>Walid Lakas</h3>
              <p>Architecture · Cloud · Intelligence artificielle</p>
            </div>
            <a href="mailto:walid@pepro.fr" aria-label="Écrire à Walid Lakas">
              <Mail aria-hidden="true" />
            </a>
          </article>
          <article>
            <div className={styles.memberMonogram} aria-hidden="true">IL</div>
            <div className={styles.memberMeta}>
              <span>Co-fondateur · CTO</span>
              <h3>Idriss Lakas</h3>
              <p>Cybersécurité · Intelligence artificielle · Infrastructure</p>
            </div>
            <a href="mailto:idriss@pepro.fr" aria-label="Écrire à Idriss Lakas">
              <Mail aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className={styles.faq} id="faq" aria-labelledby="faq-title">
        <div className={styles.faqHeading}>
          <p className={styles.sectionIndex}>09 / Questions fréquentes</p>
          <h2 id="faq-title">Les réponses utiles avant de commencer.</h2>
          <Link href="/faq" className={styles.textLink}>
            Voir toutes les questions
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.faqList}>
          {faqs.map((item, index) => (
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
            <p className={styles.sectionIndex}>10 / Conseils</p>
            <h2 id="insights-title">Du terrain, pas du remplissage.</h2>
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
        <p className={styles.sectionIndex}>11 / Votre prochain projet</p>
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
