import Link from "next/link";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps { title?: string; breadCrumb?: string; }

export default function Breadcrumb({ title, breadCrumb }: BreadcrumbProps) {
  return (
    <header className={styles.hero}>
      <p>Informations Pepro</p>
      <h1>{title ?? "Introuvable"}</h1>
      <nav aria-label="Fil d’Ariane">
        <Link href="/">Accueil</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{breadCrumb ?? "Erreur"}</span>
      </nav>
    </header>
  );
}
