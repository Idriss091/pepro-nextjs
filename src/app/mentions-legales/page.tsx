import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata: Metadata = {
  title: "Pepro - Mentions Légales",
  description:
    "Mentions légales du site Pepro, société par actions simplifiée immatriculée au RCS de Paris.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function LegalMentionsPage() {
  return (
    <LayoutV1>
      <Breadcrumb title="Mentions Légales" breadCrumb="mentions-legales" />
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content-wrapper">
                <h4 className="sub-heading mb-2">
                  Dernière mise à jour : 21 septembre 2025
                </h4>
                <p className="mb-5">
                  Les informations ci-dessous sont communiquées conformément aux
                  articles 6-III et 19 de la loi n°2004-575 du 21 juin 2004 pour
                  la confiance dans l&apos;économie numérique (LCEN).
                </p>

                <h3 className="mb-3">Éditeur du site</h3>
                <ul className="list-unstyled mb-5">
                  <li>
                    <strong>Dénomination :</strong> Pepro
                  </li>
                  <li>
                    <strong>Forme juridique :</strong> Société par actions
                    simplifiée (SAS)
                  </li>
                  <li>
                    <strong>Capital social :</strong> 1 000 €
                  </li>
                  <li>
                    <strong>Siège social :</strong> 60 rue François 1er, 75008
                    Paris, France
                  </li>
                  <li>
                    <strong>RCS :</strong> 988 059 135 R.C.S. Paris
                  </li>
                  <li>
                    <strong>Date d&apos;immatriculation :</strong> 16 juin 2025
                  </li>
                  <li>
                    <strong>Contact :</strong>{" "}
                    <a href="mailto:contact@pepro.fr">contact@pepro.fr</a>
                  </li>
                  <li>
                    <strong>Téléphone :</strong> +33 6 18 66 35 95
                  </li>
                </ul>

                <h3 className="mb-3">Direction de la publication</h3>
                <ul className="list-unstyled mb-5">
                  <li>
                    <strong>Président :</strong> Walid Lakas
                  </li>
                  <li>
                    <strong>Directeur général :</strong> Idriss Lakas
                  </li>
                </ul>

                <h3 className="mb-3">Hébergement</h3>
                <ul className="list-unstyled mb-5">
                  <li>
                    <strong>Hébergeur :</strong> HOSTINGER INTERNATIONAL LTD
                  </li>
                  <li>Švitrigailos str. 34, Vilnius 03230, Lituanie</li>
                  <li>Tél. : +370 645 03378</li>
                </ul>

                <h3 className="mb-3">Propriété intellectuelle</h3>
                <p className="mb-5">
                  L&apos;ensemble du contenu présent sur le site est protégé par
                  le Code de la propriété intellectuelle. Toute reproduction
                  sans autorisation écrite préalable de Pepro est interdite.
                </p>

                <h3 className="mb-3">Protection des données personnelles</h3>
                <p>
                  Pour en savoir plus sur la gestion de vos données
                  personnelles, consultez notre{" "}
                  <Link href="/politique-confidentialite">
                    Politique de confidentialité
                  </Link>
                  .
                </p>
                <p className="mb-5">
                  Pour plus de détails sur l&apos;utilisation des cookies,
                  consultez notre{" "}
                  <Link href="/politique-cookies">
                    Politique en matière de Cookies
                  </Link>
                  .
                </p>

                <h3 className="mb-3">Droit applicable</h3>
                <p className="mb-5">
                  Les présentes mentions légales sont régies par le droit
                  français.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutV1>
  );
}
