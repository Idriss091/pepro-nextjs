import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import V2Footer from "@/components/v2/V2Footer";
import V2Header from "@/components/v2/V2Header";
import styles from "./not-found.module.css";

const display = Syne({ subsets: ["latin"], variable: "--v2-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--v2-body", display: "swap" });

export default function NotFound() {
  return <main className={`${styles.root} ${display.variable} ${body.variable}`}><V2Header/><section><p>Erreur 404</p><h1>Cette page a quitté le projet.</h1><span>L’adresse est incorrecte ou le contenu a été déplacé.</span><div><Link href="/">Retour à l’accueil <ArrowUpRight aria-hidden="true"/></Link><Link href="/digital">Voir nos services <ArrowUpRight aria-hidden="true"/></Link></div></section><V2Footer/></main>;
}
