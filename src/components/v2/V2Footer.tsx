import Link from "next/link";
import styles from "./V2Footer.module.css";

export default function V2Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">Pepro</Link>
      <p>Votre informatique. Un seul partenaire.</p>
      <div><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-confidentialite">Confidentialité</Link></div>
    </footer>
  );
}
