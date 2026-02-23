import TeamV3Data from "@/assets/jsonData/team/TeamV3Data.json";
import SingleTeamV3 from "./SingleTeamV3";
import SplitText from "../animation/SplitText.jsx";

interface DataType {
  hasTitle?: boolean;
  sectionClass?: string;
}

const TeamV3 = ({ hasTitle, sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`team-style-three-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}
      >
        {/* Team Title  */}
        {hasTitle && (
          <div className="container">
            <div className="site-heading text-center">
              <h4 className="sub-title">L&apos;équipe</h4>
              <h2 className="title split-text">
                <SplitText
                  delay={120}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                >
                  Faites connaissance avec nos experts
                </SplitText>
              </h2>
            </div>
          </div>
        )}

        <div className="container">
          <div className="row justify-content-center">
            {TeamV3Data.map((team) => (
              <div className="col-xl-4 col-md-4 mb-30" key={team.id}>
                <SingleTeamV3 team={team} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamV3;
