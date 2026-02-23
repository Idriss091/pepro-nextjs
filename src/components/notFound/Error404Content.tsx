import Link from "next/link";

const Error404Content = () => {
  return (
    <div className="error-page-area default-padding text-center">
      <div
        className="shape-left"
        style={{ background: "url(/assets/img/shape/44-left.png)" }}
      />
      <div
        className="shape-right"
        style={{ background: "url(/assets/img/shape/44-right.png)" }}
      />
      <div className="container">
        <div className="error-box">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>404</h1>
              <h2>Page introuvable</h2>
              <p>
                La page que vous recherchez n&apos;existe pas, a ete deplacee ou
                l&apos;URL est incorrecte. Vous pouvez revenir a l&apos;accueil
                ou consulter nos services.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-20">
                <Link className="btn btn-md btn-theme" href="/">
                  Retour a l&apos;accueil
                </Link>
                <Link className="btn btn-md btn-border" href="/services">
                  Voir nos services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404Content;
