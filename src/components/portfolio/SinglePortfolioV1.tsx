import Link from "next/link";
import Image from "next/image";
import type { ProjectCaseStudy } from "@/data/projectCaseStudies";

const SinglePortfolioV1 = ({ portfolio }: { portfolio: ProjectCaseStudy }) => {
    const { id, thumb, thumbLight, sliderTitleFirst, sliderTitleLast, title } = portfolio
    const projectHref = `/project-details/${id}`;
    const regularSrc = thumb?.startsWith("/") ? thumb : `/assets/img/portfolio/${thumb}`;
    const lightSrc = thumbLight?.startsWith("/") ? thumbLight : `/assets/img/portfolio/${thumbLight}`;
    const altText = title || "Realisation Pepro";

    return (
        <>
            <div className="portfolio-style-one-item">
                <Image
                  className="regular-img"
                  src={regularSrc}
                  alt={altText}
                  width={710}
                  height={800}
                  unoptimized
                />
                <Image
                  className="light-img"
                  src={lightSrc}
                  alt={altText}
                  width={710}
                  height={800}
                  unoptimized
                />
                <div className="info">
                    <h2><Link href={projectHref}>{sliderTitleFirst} <strong>{sliderTitleLast}</strong></Link></h2>
                    <Link className="btn-animation mt-30" href={projectHref}><i className="fas fa-arrow-right" /> <span>Voir le cas client</span></Link>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioV1;
