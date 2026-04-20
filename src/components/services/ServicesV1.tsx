import SplitText from "../animation/SplitText.jsx";
import Link from "next/link";
import Image from "next/image";
import { getServicePath, services } from "@/data/services";

interface DataType {
  hasTitle?: boolean;
  sectionClass?: string;
}

const ServicesV1 = ({ hasTitle, sectionClass }: DataType) => {
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
                    <h4 className="sub-title">Nos expertises</h4>
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
                        Des solutions sur-mesure pour chaque défi
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
            <div className="row">
              {services.slice(0, 3).map((service) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 single-item"
                  key={service.id}
                >
                  <div className="services-style-one-item">
                    <div className="icon">
                      <Image
                        className="regular-img"
                        src={`/assets/img/icon/${service.icon}`}
                        alt={`Icône ${service.title}`}
                        width={75}
                        height={60}
                      />

                      <Image
                        className="light-img"
                        src={`/assets/img/icon/${service.iconLight}`}
                        alt={`Icône ${service.title}`}
                        width={75}
                        height={60}
                      />
                    </div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV1;
