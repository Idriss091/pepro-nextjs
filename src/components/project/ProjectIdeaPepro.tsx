const ProjectIdeaPepro = () => {
  return (
    <>
      <div
        className="contact-panel-bg"
        style={{ backgroundImage: "url(/assets/img/banner/pepro-service-web.jpg)" }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="sub-title">Un projet en tete ?</h4>
            <h2 className="title">
              Parlons de votre produit,
              <br />
              de vos contraintes et de votre feuille de route
            </h2>
            <ul className="contact-list">
              <li>
                <div className="icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="info">
                  <h4>Telephone</h4>
                  <a className="phone-link" href="tel:+33618663595">
                    +33 6 18 66 35 95
                  </a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-envelope-open" />
                </div>
                <div className="info">
                  <h4>Email</h4>
                  <a href="mailto:contact@pepro.fr">contact@pepro.fr</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectIdeaPepro;
