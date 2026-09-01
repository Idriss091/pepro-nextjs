import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata: Metadata = {
  title: "Pepro - Politique en matière de cookies",
  description:
    "Informations sur l'utilisation des cookies sur le site de Pepro et modalités de gestion de vos préférences.",
  alternates: {
    canonical: "/politique-cookies",
  },
};

const LAST_UPDATE = "29 août 2026";

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
                  Pepro utilise Google Analytics 4, un service de mesure
                  d&apos;audience fourni par Google, afin de comprendre de manière
                  agrégée comment le Site est consulté et d&apos;améliorer ses
                  contenus et ses parcours.
                </p>
                <ul className="list-unstyled mb-5">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <strong>Finalité :</strong> mesure de la fréquentation, des
                    pages consultées, de la provenance générale des visites et
                    des interactions utiles, telles que les demandes de contact.
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <strong>Fournisseur :</strong> Google Ireland Limited, Gordon
                    House, Barrow Street, Dublin 4, Irlande.
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <strong>Cookies susceptibles d&apos;être déposés :</strong>{" "}
                    <code>_ga</code> et <code>_ga_&lt;identifiant&gt;</code>, utilisés
                    pour distinguer les utilisateurs et conserver l&apos;état des
                    sessions.
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <strong>Durée maximale par défaut :</strong> jusqu&apos;à deux
                    ans, sous réserve des limitations appliquées par votre
                    navigateur et de la configuration du service.
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <strong>Base légale :</strong> votre consentement préalable.
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <strong>Conservation de votre choix :</strong> six mois dans
                    le stockage local de votre navigateur, afin de ne pas vous
                    solliciter à chaque visite.
                  </li>
                </ul>

                <h3 className="mb-3">Données traitées</h3>
                <p className="mb-5">
                  Selon votre navigation et la configuration du service, les
                  informations traitées peuvent notamment comprendre les pages
                  consultées, les événements réalisés sur le Site, le type
                  d&apos;appareil et de navigateur, la source de la visite ainsi
                  qu&apos;une zone géographique approximative. Ces informations ne
                  doivent pas contenir les données que vous saisissez dans le
                  formulaire de contact. Google peut traiter certaines données
                  depuis des pays situés hors de l&apos;Espace économique européen,
                  conformément aux mécanismes de transfert et garanties décrits
                  dans sa politique de confidentialité.
                </p>

                <h3 className="mb-3">Votre consentement et vos choix</h3>
                <p className="mb-3">
                  Les cookies de mesure d&apos;audience ne sont pas indispensables
                  au fonctionnement du Site. Ils ne doivent être déposés qu&apos;après
                  votre consentement préalable. Vous devez pouvoir accepter ou
                  refuser ces cookies avec la même simplicité, puis modifier votre
                  choix à tout moment depuis le mécanisme de gestion des cookies
                  mis à votre disposition sur le Site.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Refuser les cookies de mesure d&apos;audience sans perdre
                    l&apos;accès au Site
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Retirer ultérieurement votre consentement
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Supprimer les cookies déjà enregistrés depuis les paramètres
                    de votre navigateur
                  </li>
                </ul>

                <h3 className="mb-3">En savoir plus</h3>
                <p className="mb-5">
                  Vous pouvez consulter la{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    politique de confidentialité de Google
                  </a>{" "}
                  pour obtenir davantage d&apos;informations sur ses traitements et
                  ses mécanismes de transfert de données.
                </p>

                <h3 className="mb-3">Nous contacter</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-envelope text-primary me-2" /> E-mail :{" "}
                    <a href="mailto:contact@pepro.fr">contact@pepro.fr</a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-link text-primary me-2" /> Formulaire :{" "}
                    <Link href="/contact">page de contact</Link>
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
