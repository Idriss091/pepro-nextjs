"use client";
import Link from "next/link";

interface DataType {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
  return (
    <>
      <ul
        className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/services" onClick={toggleSubMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/about-us" onClick={toggleSubMenu}>
            À propos
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={toggleSubMenu}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/faq" onClick={toggleSubMenu}>
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/contact-us" onClick={toggleSubMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
