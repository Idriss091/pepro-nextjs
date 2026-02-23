"use client";

import { useState } from "react";
import FaqV1Data from "@/assets/jsonData/faq/FaqV1Data.json";

interface DataType {
  sectionClass?: string;
}

const FaqV1 = ({ sectionClass }: DataType) => {
  const halfLength = Math.ceil(FaqV1Data.length / 2);
  const faqData1 = FaqV1Data.slice(0, halfLength);
  const faqData2 = FaqV1Data.slice(halfLength);
  const [openLeft, setOpenLeft] = useState<string | null>(
    faqData1[0]?.id ?? null,
  );
  const [openRight, setOpenRight] = useState<string | null>(
    faqData2[0]?.id ?? null,
  );

  return (
    <>
      <div
        className={`faq-area default-padding ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="row gutter-xl">
            {/* Colonne 1 */}
            <div className="col-lg-6">
              <div className="faq-style-one accordion" id="faqAccordion">
                {faqData1.map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button ${openLeft === faq.id ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={openLeft === faq.id ? "true" : "false"}
                        aria-controls={`collapse${faq.id}`}
                        onClick={() =>
                          setOpenLeft((prev) =>
                            prev === faq.id ? null : faq.id,
                          )
                        }
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.id}`}
                      className="accordion-collapse"
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#faqAccordion"
                      style={{
                        display: openLeft === faq.id ? "block" : "none",
                      }}
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne 2 */}
            <div className="col-lg-6">
              <div className="faq-style-one accordion" id="faqAccordion2">
                {faqData2.map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button ${openRight === faq.id ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={openRight === faq.id ? "true" : "false"}
                        aria-controls={`collapse${faq.id}`}
                        onClick={() =>
                          setOpenRight((prev) =>
                            prev === faq.id ? null : faq.id,
                          )
                        }
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.id}`}
                      className="accordion-collapse"
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#faqAccordion2"
                      style={{
                        display: openRight === faq.id ? "block" : "none",
                      }}
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqV1;
