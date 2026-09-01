import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import V2ContactForm from "@/components/v2/V2ContactForm";
import V2Footer from "@/components/v2/V2Footer";
import V2Header from "@/components/v2/V2Header";
import styles from "../v2-commercial.module.css";

const display=Syne({subsets:["latin"],variable:"--v2-display",display:"swap"});const body=Manrope({subsets:["latin"],variable:"--v2-body",display:"swap"});
export const metadata:Metadata={title:"Contact — Pepro",description:"Présentez votre projet de site, e-commerce, logiciel, IA, maintenance ou ingénierie à l’équipe Pepro.",alternates:{canonical:"/contact"}};
export default function ContactPage(){return <main className={`${styles.root} ${display.variable} ${body.variable}`}><V2Header/>
<section className={`${styles.commercialHero} ${styles.contactHero}`} aria-labelledby="contact-title"><div className={styles.grid}/><p className={styles.eyebrow}><span/>Démarrer un projet</p><h1 id="contact-title">Expliquez-nous ce qui doit mieux fonctionner.</h1><div className={styles.heroFoot}><p>Un problème, une idée ou un existant à reprendre : donnez-nous le contexte. Nous vous répondrons avec une première direction claire.</p><span>Diagnostic initial offert</span></div></section>
<section className={styles.contactArea}><aside><p className={styles.sectionIndex}>01 / Contact direct</p><h2>Par formulaire,<br/>email ou téléphone.</h2><div className={styles.contactLinks}><a href="tel:+33781911992"><Phone/>07 81 91 19 92</a><a href="mailto:contact@pepro.fr"><Mail/>contact@pepro.fr</a><span><MapPin/>Ris-Orangis, France</span></div><div className={styles.opening}><span>Disponibilité</span><p>Du lundi au samedi<br/>8 h 30 — 18 h 30</p></div></aside><div className={styles.formPanel}><p className={styles.sectionIndex}>02 / Votre demande</p><V2ContactForm/></div></section>
<section className={styles.contactSteps}><p className={styles.sectionIndex}>03 / Et ensuite ?</p><div><article><span>01</span><h3>Nous lisons le contexte</h3><p>Votre message est relu par une personne de l’équipe technique.</p></article><article><span>02</span><h3>Nous clarifions le besoin</h3><p>Si nécessaire, nous revenons vers vous avec quelques questions précises.</p></article><article><span>03</span><h3>Nous proposons la suite</h3><p>Vous recevez une première direction, puis un périmètre avant tout engagement.</p></article></div></section><V2Footer/></main>}
