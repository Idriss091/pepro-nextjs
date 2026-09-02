"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./V2Header.module.css";

const links = [
  { label: "Services", href: "/digital" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Conseils", href: "/blog" },
];

export default function V2Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navigation principale">
        <Link className={styles.logoLink} href="/" aria-label="Pepro — Accueil">
          <Image
            className={styles.logo}
            src="/brand/pepro-logo-night.png"
            alt="Pepro"
            width={250}
            height={75}
            priority
          />
        </Link>

        <div className={styles.desktopLinks}>
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link className={styles.estimateLink} href="/contact">
          <span>Demander une estimation</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          aria-controls="v2-mobile-menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
        id="v2-mobile-menu"
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileTop}>
          <span>Navigation</span>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setIsOpen(false)}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <div className={styles.mobileLinks}>
          {links.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              <span>0{index + 1}</span>
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Link
          className={styles.mobileEstimate}
          href="/contact"
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
        >
          Demander une estimation
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
