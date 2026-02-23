"use client";

import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import ExpertiseV1 from "../expertise/ExpertiseV1";
import ProjectIdeaPepro from "../project/ProjectIdeaPepro";
import WhyChoosePepro from "../whyChoose/WhyChoosePepro";

const MultiSectionPepro = () => {
  useHorizontalScroll();

  return (
    <div className="multi-section overflow-hidden">
      <div className="thecontainer">
        <div className="panel overflow-hidden">
          <WhyChoosePepro />
        </div>
        <div className="panel overflow-hidden bg-gray">
          <ExpertiseV1 />
        </div>
        <div className="panel contact-panel overflow-hidden">
          <ProjectIdeaPepro />
        </div>
      </div>
    </div>
  );
};

export default MultiSectionPepro;
