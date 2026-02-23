import ContactForm from "../form/ContactForm";
import SocialShareV2 from "../social/SocialShareV2";

interface DataType {
  sectionClass?: string;
}

const ContactV1 = ({ sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`contact-area overflow-hidden relative ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="contact-style-one-items">
            <div className="row">
              <div className="col-tact-stye-one col-lg-4">
                <div className="contact-style-one-info">
                  <ul className="contact-address">
                    <li>
                      <a className="phone-link" href="tel:+33618663595">
                        <i className="fas fa-user-headset" /> +33 6 18 66 35 95
                      </a>
                    </li>
                    <li>
                      <div className="info">
                        <h4>Localisation</h4>
                        <p>
                          Basés en France <br /> Intervention nationale et
                          internationale
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4>Email Officiel</h4>
                        <a href="mailto:contact@pepro.fr">contact@pepro.fr</a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <ul className="social-link">
                          <SocialShareV2 />
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-tact-stye-one col-lg-7 offset-lg-1">
                <div className="contact-form-style-one">
                  <h4 className="sub-title">Des questions ?</h4>
                  <h2 className="title">Envoyez-nous un message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1;
