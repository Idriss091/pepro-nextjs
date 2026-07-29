"use client";

import Image from "next/image";
import { useState } from "react";

interface WhyChoosePeproProps {
  sectionClass?: string;
}

const thumb3 = "/assets/img/thumb/agence-1280.webp";

const faqItems = [
  {
    title: "Cadrage produit & priorisation",
    content:
      "Nous clarifions les objectifs, les risques et les priorités pour transformer une idée en feuille de route exécutable, avec un scope réaliste et mesurable.",
  },
  {
    title: "Architecture & exécution technique",
    content:
      "Pepro conçoit des architectures robustes (web, data, IA) et livre rapidement des incréments utiles, sans sacrifier la maintenabilité ni la performance.",
  },
  {
    title: "Impact métier & accompagnement",
    content:
      "Nous restons focalisés sur l'adoption, la valeur business et la mise en production: pas seulement du code, mais un résultat exploitable par vos équipes.",
  },
];

const awardItems = [
  { icon: "fas fa-sitemap", label: "Architecture" },
  { icon: "fas fa-rocket", label: "Execution" },
  { icon: "fas fa-chart-line", label: "Impact" },
];

const WhyChoosePepro = ({ sectionClass }: WhyChoosePeproProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={sectionClass ?? ""}>
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-5">
            <div className="thumb-style-one">
              <Image
                src={thumb3}
                alt="Setup de travail Pepro pour la conception et le développement de solutions digitales"
                width={1280}
                height={853}
                unoptimized
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="choose-us-style-one">
              <div className="pl-80 pl-md-0 pl-xs-0">
                <h4 className="sub-title">Pourquoi Pepro</h4>
                <h2 className="title">Transformer des besoins complexes en solutions livrables</h2>
                <div className="faq-style-one accordion mt-30" id="peproWhyChooseAccordion">
                  {faqItems.map((item, index) => {
                    const isOpen = index === activeIndex;
                    const headingId = `pepro-why-heading-${index}`;
                    const panelId = `pepro-why-panel-${index}`;

                    return (
                      <div className="accordion-item" key={item.title}>
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setActiveIndex(isOpen ? -1 : index)}
                          >
                            {item.title}
                          </button>
                        </h2>
                        <div
                          id={panelId}
                          className="accordion-collapse"
                          aria-labelledby={headingId}
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          <div className="accordion-body">
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="award-items">
                {awardItems.map((item) => (
                  <div className="award-item" key={item.label}>
                    <i className={item.icon} />
                    <h4>{item.label}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePepro;
