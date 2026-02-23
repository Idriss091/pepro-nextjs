"use client";
import ServicesV6Data from "@/assets/jsonData/services/ServicesV6Data.json";
import SingleServiceV6 from "./SingleServiceV6";
import SplitText from "../animation/SplitText.jsx";
import useItemMoveTopEffect from "../../hooks/useItemMoveTopEffect";

const ServicesV6 = () => {
  useItemMoveTopEffect();

  return (
    <>
      <div className="services-style-six-area default-padding blurry-shape-left">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="service-style-six-info">
                <h4 className="sub-title">Nos Valeurs</h4>
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
                    Notre Vision
                  </SplitText>
                </h2>
                <p className="mt-20">
                  Devenir le partenaire technologique de référence pour les
                  entreprises qui veulent innover, se démarquer et créer un
                  impact positif durable dans leur secteur.
                </p>
              </div>
            </div>

            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="service-style-six-items item-move-top-items">
                <ul>
                  {ServicesV6Data.map((service) => (
                    <SingleServiceV6 service={service} key={service.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV6;
