import SplitText from "../animation/SplitText.jsx";
import Link from "next/link";
import Image from "next/image";
import { getServicePath, services } from "@/data/services";

interface DataType {
  hasTitle?: boolean;
  sectionClass?: string;
}

const ServicesV1 = ({ hasTitle, sectionClass }: DataType) => {
  const servicePoles = [
    {
      id: "digital",
      title: "Pepro Digital",
      label: "Présence, acquisition et productivité",
      description:
        "Des expériences digitales claires pour présenter votre offre, vendre vos services et automatiser vos opérations quotidiennes.",
      className: "pole-digital",
      services: services.filter((service) => service.pole === "digital"),
    },
    {
      id: "engineering",
      title: "Pepro Engineering",
      label: "Logiciels, data et systèmes techniques",
      description:
        "Une ingénierie solide pour structurer vos systèmes, fiabiliser vos architectures et industrialiser vos outils complexes.",
      className: "pole-engineering",
      services: services.filter((service) => service.pole === "engineering"),
    },
  ];

  return (
    <>
      <div
        className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}
      >
        {/* Service Title */}
        {hasTitle && (
          <div className="service-style-one-heading">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 text-center">
                  <div className="site-heading">
                    <h4 className="sub-title">Nos pôles d&apos;expertise</h4>
                    <h2 className="title split-text">
                      <SplitText
                        delay={40}
                        animationFrom={{
                          opacity: 0,
                          transform: "translate3d(0,50px,0)",
                        }}
                        animationTo={{
                          opacity: 1,
                          transform: "translate3d(0,0,0)",
                        }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                      >
                        Deux pôles pour couvrir vos enjeux digitaux et techniques
                      </SplitText>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="services-style-one-items">
            <div className="pepro-poles-grid">
              {servicePoles.map((pole) => (
                <section
                  className={`pepro-service-pole ${pole.className}`}
                  key={pole.id}
                >
                  <div className="pepro-service-pole-header">
                    <span>{pole.label}</span>
                    <h3>{pole.title}</h3>
                    <p>{pole.description}</p>
                  </div>

                  <div className="pepro-service-pole-cards">
                    {pole.services.map((service) => (
                      <article
                        className={`pepro-service-card pepro-service-card-${service.id}`}
                        key={service.id}
                      >
                        <Link
                          className="pepro-service-card-media"
                          href={getServicePath(service)}
                          aria-label={`En savoir plus sur ${service.title}`}
                        >
                          <Image
                            src={service.banner}
                            alt={`Illustration ${service.title}`}
                            width={760}
                            height={420}
                          />
                        </Link>
                        <div className="pepro-service-card-body">
                          <h4>
                            <Link href={getServicePath(service)}>
                              {service.title}
                            </Link>
                          </h4>
                          <p>{service.text}</p>
                          <Link
                            className="btn-full"
                            href={getServicePath(service)}
                          >
                            En savoir plus <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV1;
