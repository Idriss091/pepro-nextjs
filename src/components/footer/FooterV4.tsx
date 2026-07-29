import Link from "next/link";
import Image from "next/image";
import NewsletterV2 from "../newsletter/NewsletterV2";
import FooterSocial from "../social/FooterSocial";

const logoLight = "/brand/pepro-logo-new.png";
const logo = "/brand/pepro-logo-new.png";

interface DataType {
  sectionClass?: string;
}

const FooterV4 = ({ sectionClass }: DataType) => {
  return (
    <>
      <footer className={`${sectionClass ? sectionClass : ""}`}>
        <div className="container">
          <div className="f-items">
            <div className="row">
              <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                <div className="top">
                  <Image
                    className="regular-img"
                    src={logoLight}
                    alt="Logo Pepro"
                    width={210}
                    height={56}
                  />
                  <Image
                    className="light-img"
                    src={logo}
                    alt="Logo Pepro"
                    width={210}
                    height={56}
                  />
                </div>
                <ul className="address-list">
                  <li>
                    <h4>Siège social</h4>
                    <p>60 rue François 1er, 75008 Paris, France</p>
                  </li>
                </ul>
                <div className="footer-contact">
                  <ul>
                    <li>
                      <a href="mailto:contact@pepro.fr">contact@pepro.fr</a>
                    </li>
                    <li>
                      <a href="tel:+33618663595">+33 6 18 66 35 95</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 footer-item">
                <h4 className="widget-title">Liens Utiles</h4>
                <ul className="useful-link">
                  <li>
                    <Link href="/about-us">À Propos</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/conditions-generales">
                      Conditions Générales
                    </Link>
                  </li>
                  <li>
                    <Link href="/politique-confidentialite">
                      Politique de Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link href="/politique-cookies">Politique de Cookies</Link>
                  </li>
                  <li>
                    <Link href="/mentions-legales">Mentions Légales</Link>
                  </li>
                </ul>
                <NewsletterV2 />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="footer-social">
                  <FooterSocial />
                </ul>
              </div>
              <div className="col-lg-6 text-end">
                <p>
                  Copyright &copy; {new Date().getFullYear()} Pepro. Tous droits
                  réservés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV4;
