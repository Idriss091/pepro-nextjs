import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata: Metadata = {
  title: "Pepro - Politique en matière de cookies",
  description:
    "Informations sur l'utilisation des cookies sur le site de Pepro et modalités de gestion de vos préférences.",
};

const LAST_UPDATE = "21 septembre 2025";

export default function CookiesPolicyPage() {
  return (
    <LayoutV1>
      <Breadcrumb title="Politique de Cookies" breadCrumb="politique-cookies" />
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content-wrapper">
                <h4 className="sub-heading mb-4">
                  Dernière mise à jour : {LAST_UPDATE}
                </h4>
                <p className="mb-5 text-lg">
                  Cette politique explique la manière dont Pepro utilise les
                  cookies et technologies similaires sur son site web. Pour
                  davantage d&apos;informations sur nos traitements de données
                  personnelles, consultez notre{" "}
                  <Link href="/politique-confidentialite">
                    Politique de confidentialité
                  </Link>
                  .
                </p>

                <h3 className="mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h3>
                <p className="mb-5">
                  Un cookie est un petit fichier texte stocké sur votre appareil
                  lorsque vous visitez un site web. Il permet de conserver
                  temporairement des informations afin de faciliter votre
                  navigation.
                </p>

                <h3 className="mb-3">
                  Usage actuel des cookies sur notre Site
                </h3>
                <p className="mb-3">
                  Nous utilisons uniquement un mécanisme technique indispensable
                  :
                </p>
                <ul className="list-unstyled mb-5">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <strong>Cache du service worker</strong> — pour assurer la
                    disponibilité du Site. Ce mécanisme ne permet pas de suivre
                    votre navigation.
                  </li>
                </ul>

                <h3 className="mb-3">Votre consentement et vos choix</h3>
                <p className="mb-3">
                  Aucun bandeau de consentement n&apos;est affiché car nous
                  n&apos;utilisons aucune technologie nécessitant votre accord
                  préalable. Vous pouvez :
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Supprimer les données de site depuis les paramètres de votre
                    navigateur
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Vider le cache ou le stockage local de votre navigateur
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Nous contacter pour obtenir de l&apos;assistance
                  </li>
                </ul>

                <h3 className="mb-3">Nous contacter</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-envelope text-primary me-2" /> E-mail :{" "}
                    <a href="mailto:contact@pepro.fr">contact@pepro.fr</a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-link text-primary me-2" /> Formulaire :{" "}
                    <Link href="/contact-us">page de contact</Link>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt text-primary me-2" />{" "}
                    Courrier : Pepro, 60 rue François 1er, 75008 Paris, France
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutV1>
  );
}
