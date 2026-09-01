import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import V2Footer from "@/components/v2/V2Footer";
import V2Header from "@/components/v2/V2Header";
import styles from "../v2-commercial.module.css";

const display = Syne({ subsets:["latin"], variable:"--v2-display", display:"swap" });
const body = Manrope({ subsets:["latin"], variable:"--v2-body", display:"swap" });
export const metadata:Metadata={title:"Tarifs — Pepro",description:"Repères tarifaires pour les sites, boutiques, logiciels métier, automatisations et forfaits de maintenance Pepro.",alternates:{canonical:"/tarifs"}};

const projectPrices=[
  ["01","Audit & conseil","290 € HT","Analyse des besoins · Recommandations · Feuille de route"],
  ["02","IA & automatisation","590 € HT","Automatisation d’un processus · Intégration à vos outils"],
  ["03","Site vitrine","890 € HT","SEO technique · Mise en ligne"],
  ["04","Outil métier / MVP","1 490 € HT","Prototype fonctionnel · Interface sur mesure"],
  ["05","E-commerce","1 990 € HT","Paiement en ligne · Catalogue · Mise en ligne"],
] as const;

export default function TarifsPage(){return <main className={`${styles.root} ${display.variable} ${body.variable}`}>
  <V2Header/>
  <section className={styles.commercialHero} aria-labelledby="pricing-title"><div className={styles.grid}/><p className={styles.eyebrow}><span/>Repères de prix</p><h1 id="pricing-title">Savoir où l’on va, avant de commencer.</h1><div className={styles.heroFoot}><p>Des points de départ publics pour qualifier votre projet. Le périmètre final est confirmé après un échange sur vos besoins réels.</p><a href="#prestations">Voir les prestations <ArrowDown/></a></div></section>
  <section className={styles.pricing} id="prestations"><div className={styles.sectionHeading}><p className={styles.sectionIndex}>01 / Prestations sur mesure</p><h2>Un point de départ.<br/>Un périmètre expliqué.</h2></div><div className={styles.priceRows}>{projectPrices.map(([index,name,price,detail])=><article key={name}><span>{index}</span><h3>{name}</h3><p>{detail}</p><strong>À partir de {price}</strong><Link href="/contact">Estimer ce projet <ArrowUpRight/></Link></article>)}</div></section>
  <section className={styles.maintenance} aria-labelledby="maintenance-title"><div className={styles.sectionHeading}><p className={styles.sectionIndex}>02 / Maintenance & support</p><h2 id="maintenance-title">Après la livraison,<br/>un vrai suivi.</h2></div><div className={styles.planGrid}><article><p>Essentiel</p><h3>290 € HT <span>/ mois</span></h3><ul>{["Mises à jour","Sauvegardes","Surveillance","Support"].map(x=><li key={x}><Check/>{x}</li>)}</ul><Link href="/contact">Choisir Essentiel <ArrowUpRight/></Link></article><article className={styles.featuredPlan}><p>Pro</p><h3>590 € HT <span>/ mois</span></h3><ul>{["Maintenance complète","Sécurité","Corrections prioritaires","Performance & suivi SEO"].map(x=><li key={x}><Check/>{x}</li>)}</ul><Link href="/contact">Choisir Pro <ArrowUpRight/></Link></article></div></section>
  <section className={styles.pricingNotes}><p className={styles.sectionIndex}>03 / Ce qui fait varier un projet</p><div>{["Le volume de contenus ou de données","Les intégrations avec vos outils","Les rôles et règles métier","La reprise d’un existant","Le niveau d’accompagnement attendu","Les contraintes de sécurité ou de performance"].map((x,i)=><p key={x}><span>0{i+1}</span>{x}</p>)}</div></section>
  <section className={styles.commercialCta}><p className={styles.eyebrow}><span/>Diagnostic initial offert</p><h2>Un prix utile commence par un périmètre clair.</h2><Link href="/contact">Décrire votre besoin <ArrowUpRight/></Link></section><V2Footer/>
  </main>}
