const thumb2 = "/assets/img/thumb/pepro-about-partner.jpg";
const arrowIcon = "/assets/img/icon/arrow.png";
import ServiceListData from "@/assets/jsonData/services/ServiceListData.json";
import ScrollAnimationContainer from "../animation/ScrollAnimationContainer";
import ServiceList from "../services/ServiceList";
import Link from "next/link";
import Image from "next/image";

interface DataType {
  sectionClass?: string;
}

const AboutV6 = ({ sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`about-style-six-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="thumb-style-four">
                <Image
                  src={thumb2}
                  alt="Poste de travail de developpement logiciel moderne"
                  width={1400}
                  height={1039}
                />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <ScrollAnimationContainer
                className="about-style-six-info text-scroll-animation"
              >
                <div className="info">
                  <div className="d-flex">
                    <Link href="/about-us">
                      <Image
                        src={arrowIcon}
                        alt="En savoir plus"
                        width={300}
                        height={308}
                      />
                    </Link>
                    <h2 className="title text">
                      Votre partenaire technologique
                    </h2>
                  </div>
                  <p className="text">
                    Fondée par une équipe d&apos;ingénieurs passionnés, Pepro est une
                    agence spécialisée dans le développement de progiciels
                    complexes, le calcul scientifique et l&apos;intégration de
                    solutions IA et RAG.
                  </p>
                </div>
                <ul className="service-list">
                  {ServiceListData.map((service) => (
                    <li key={service.id}>
                      <Link href="/services">
                        <ServiceList service={service} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </ScrollAnimationContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV6;
