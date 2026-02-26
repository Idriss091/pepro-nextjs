import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata: Metadata = {
  title: "Pepro - Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site Pepro et informations clés sur nos engagements.",
  alternates: {
    canonical: "/conditions-generales",
  },
};

export default function TermsOfServicePage() {
  return (
    <LayoutV1>
      <Breadcrumb
        title="Conditions d'utilisation"
        breadCrumb="conditions-generales"
      />
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content-wrapper">
                <h4 className="sub-heading mb-2">
                  Dernière mise à jour : 21 septembre 2025
                </h4>

                <h3 className="mb-3 mt-5">Objet du site</h3>
                <p className="mb-4">
                  Le site pepro.fr présente les services de conseil, de
                  conception et de développement logiciel proposés par Pepro.
                  Toute navigation sur le site implique l&apos;acceptation
                  pleine et entière des présentes conditions générales
                  d&apos;utilisation.
                </p>

                <h3 className="mb-3">Accès au site</h3>
                <p className="mb-4">
                  Le site est accessible gratuitement à tout moment, sous
                  réserve d&apos;interruptions pour maintenance ou en cas de
                  force majeure.
                </p>

                <h3 className="mb-3">Propriété intellectuelle</h3>
                <p className="mb-4">
                  L&apos;ensemble des contenus est protégé par le Code de la
                  propriété intellectuelle. Toute reproduction sans autorisation
                  écrite préalable de Pepro est interdite.
                </p>

                <h3 className="mb-3">Responsabilités</h3>
                <p className="mb-4">
                  Les informations fournies sur le site sont données à titre
                  indicatif. Pepro ne peut être tenue responsable des dommages
                  directs ou indirects résultant de l&apos;utilisation du site.
                </p>

                <h3 className="mb-3">Données personnelles</h3>
                <p className="mb-4">
                  Les données saisies via le formulaire de contact sont traitées
                  pour répondre aux demandes. Pour en savoir plus sur vos
                  droits, consultez notre politique de confidentialité.
                </p>

                <h3 className="mb-3">Contact</h3>
                <p className="mb-4">
                  Pour toute question concernant ces conditions générales,
                  écrivez-nous à{" "}
                  <a href="mailto:contact@pepro.fr">contact@pepro.fr</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutV1>
  );
}
