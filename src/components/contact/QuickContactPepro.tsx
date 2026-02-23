"use client";

import Link from "next/link";
import SplitTextV2 from "../animation/SplitTextV2.jsx";
import ScrollAnimationContainer from "../animation/ScrollAnimationContainer";

interface QuickContactPeproProps {
  sectionClass?: string;
  title?: string;
  titleBold?: string;
}

const QuickContactPepro = ({
  sectionClass,
  title = "Besoin",
  titleBold = "d'aide ?",
}: QuickContactPeproProps) => {
  return (
    <div
      className={`quick-contact-area default-padding ${sectionClass ? sectionClass : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <ScrollAnimationContainer className="quick-contact-items text-scroll-animation">
              <h2
                className="split-text"
                style={{
                  fontSize: "clamp(54px, 7vw, 110px)",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                <SplitTextV2
                  delay={120}
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
                  {title} <span>&nbsp;</span> <strong>{titleBold}</strong>
                </SplitTextV2>
              </h2>

              <div className="pl-100 pl-xs-0 d-flex align-items-center">
                <p className="text">
                  Une question specifique sur votre projet, vos delais ou votre
                  architecture technique ? Nous vous repondons rapidement avec un
                  cadrage clair, des options concretes et les prochaines etapes.
                </p>
                <div className="btn-large-border text-end">
                  <Link href="/contact-us">
                    <i className="fas fa-long-arrow-right" /> Nous contacter
                  </Link>
                </div>
              </div>
            </ScrollAnimationContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickContactPepro;
