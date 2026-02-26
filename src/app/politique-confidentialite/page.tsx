import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata: Metadata = {
  title: "Pepro - Politique de confidentialité",
  description:
    "Découvrez comment Pepro protège et utilise vos données personnelles conformément au RGPD.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LayoutV1>
      <Breadcrumb
        title="Politique de confidentialité"
        breadCrumb="politique-confidentialite"
      />
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content-wrapper">
                <h4 className="sub-heading mb-4">
                  Dernière mise à jour : 21 septembre 2025
                </h4>
                <p className="mb-5 text-lg">
                  Chez Pepro, nous prenons la protection de vos données
                  personnelles très au sérieux. Cette politique détaille comment
                  nous collectons, utilisons et protégeons vos informations.
                </p>

                <div className="bg-gray p-4 mb-5 rounded">
                  <h3 className="mb-3">Notre engagement</h3>
                  <p className="mb-0">
                    Pepro s&apos;engage à protéger la vie privée de ses clients
                    et utilisateurs. Nous nous conformons au Règlement Général
                    sur la Protection des Données (RGPD).
                  </p>
                </div>

                <h3 className="mb-3 mt-5">1. Collecte des données</h3>
                <div className="ps-4 border-start border-primary border-3 mb-5">
                  <p>
                    Nous collectons uniquement les données nécessaires : nom,
                    prénom, adresse email, numéro de téléphone, et toute
                    information communiquée volontairement via notre formulaire
                    de contact.
                  </p>
                </div>

                <h3 className="mb-3 mt-5">2. Utilisation des données</h3>
                <div className="ps-4 border-start border-primary border-3 mb-5">
                  <p>
                    Vos données sont utilisées pour répondre à vos demandes,
                    vous proposer nos services, et respecter nos obligations
                    légales.
                  </p>
                </div>

                <h3 className="mb-3 mt-5">3. Protection des données</h3>
                <div className="ps-4 border-start border-primary border-3 mb-5">
                  <p>
                    Nous mettons en œuvre des mesures techniques et
                    organisationnelles appropriées pour protéger vos données.
                    Vos données sont hébergées dans l&apos;Union Européenne.
                  </p>
                </div>

                <h3 className="mb-3 mt-5">4. Vos droits</h3>
                <div className="ps-4 border-start border-primary border-3 mb-5">
                  <p>
                    Conformément au RGPD, vous disposez des droits d&apos;accès,
                    rectification, effacement, limitation et portabilité. Pour
                    les exercer :{" "}
                    <a href="mailto:contact@pepro.fr">contact@pepro.fr</a>
                  </p>
                </div>

                <h3 className="mb-3 mt-5">5. Conservation des données</h3>
                <ul className="list-unstyled ps-4 mb-5">
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Données clients : pendant la durée de notre relation
                    commerciale et 5 ans après
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Données de prospection : 3 ans après le dernier contact
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-angle-right text-primary me-2" />
                    Données comptables : 10 ans (obligation légale)
                  </li>
                </ul>

                <div className="bg-primary text-light p-5 rounded text-center mt-5">
                  <h3 className="text-light mb-4">Nous contacter</h3>
                  <div className="d-flex justify-content-center gap-4">
                    <a href="mailto:contact@pepro.fr" className="btn btn-light">
                      <i className="fas fa-envelope" /> contact@pepro.fr
                    </a>
                    <a href="tel:+33618663595" className="btn btn-light">
                      <i className="fas fa-phone" /> +33 6 18 66 35 95
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutV1>
  );
}
