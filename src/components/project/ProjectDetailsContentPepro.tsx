import Image from "next/image";
import Link from "next/link";
import type { ProjectCaseStudy } from "@/data/projectCaseStudies";

interface ProjectDetailsContentPeproProps {
  project: ProjectCaseStudy;
  previousProject: ProjectCaseStudy;
  nextProject: ProjectCaseStudy;
}

const ProjectDetailsContentPepro = ({
  project,
  previousProject,
  nextProject,
}: ProjectDetailsContentPeproProps) => {
  return (
    <>
      <div className="project-details-items default-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-thumb">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  width={1162}
                  height={760}
                  unoptimized
                />
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="project-details-main-info">
                <div className="project-single-tags">
                  <Link href="/project">{project.tag}</Link>
                </div>
                <h2 className="title">{project.title}</h2>
                <div className="project-author-details mt-35">
                  <ul>
                    <li>
                      <div className="left-info">
                        <h3>Client</h3>
                      </div>
                      <div className="right-info">
                        <h3>{project.client}</h3>
                      </div>
                    </li>
                    <li>
                      <div className="left-info">
                        <h3>Secteur</h3>
                      </div>
                      <div className="right-info">
                        <p>{project.sector}</p>
                      </div>
                    </li>
                    <li>
                      <div className="left-info">
                        <h3>Stack / Disciplines</h3>
                      </div>
                      <div className="right-info">
                        <p className="project-inner-tag">{project.stack.join(" / ")}</p>
                      </div>
                    </li>
                    <li>
                      <div className="left-info">
                        <h3>Vue d&apos;ensemble</h3>
                      </div>
                      <div className="right-info">
                        <p>{project.summary}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-details-items bg-gray default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="thumb-grid">
                {project.galleryImages.map((imageSrc, index) => (
                  <Image
                    key={imageSrc}
                    src={imageSrc}
                    alt={`${project.title} - visuel ${index + 1}`}
                    width={560}
                    height={420}
                    unoptimized
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15">
              <div className="check-list">
                <div className="single-list">
                  <h4>Enjeux cles</h4>
                  <ul className="list-disc">
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="single-list">
                  <h4>Ce que nous avons livre</h4>
                  <ul className="list-disc">
                    {project.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
                <div className="single-list">
                  <h4>Resultats / valeur</h4>
                  <ul className="list-disc">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-details-items default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="item-grid-container">
                <div className="single-grid">
                  <div className="item-grid-colum">
                    <div className="left-info">
                      <h3>
                        <strong>01</strong> Contexte
                      </h3>
                    </div>
                    <div className="right-info">
                      {project.context.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <Image
                    src={project.sectionImage}
                    alt={`${project.title} - contexte`}
                    width={1162}
                    height={560}
                    unoptimized
                  />
                </div>
                <div className="single-grid">
                  <div className="item-grid-colum">
                    <div className="left-info">
                      <h3>
                        <strong>02</strong> Defis
                      </h3>
                    </div>
                    <div className="right-info">
                      {project.challenges.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="single-grid">
                  <div className="item-grid-colum">
                    <div className="left-info">
                      <h3>
                        <strong>03</strong> Solution
                      </h3>
                    </div>
                    <div className="right-info">
                      {project.solution.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      <h4>Resultat: un socle concret et evolutif</h4>
                      <ul className="list-disc">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-pagination default-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-paginvation-items">
                <div className="project-previous">
                  <Link href={`/project-details/${previousProject.id}`}>
                    <div className="icon">
                      <i className="fas fa-angle-double-left" />
                    </div>
                    <div className="nav-title">
                      Projet precedent
                      <h5>
                        {previousProject.sliderTitleFirst} {previousProject.sliderTitleLast}
                      </h5>
                    </div>
                  </Link>
                </div>
                <div className="project-all">
                  <Link href="/project" aria-label="Toutes les realisations">
                    <i className="fas fa-th-large" />
                  </Link>
                </div>
                <div className="project-next">
                  <Link href={`/project-details/${nextProject.id}`}>
                    <div className="nav-title">
                      Projet suivant
                      <h5>{nextProject.sliderTitleFirst} {nextProject.sliderTitleLast}</h5>
                    </div>
                    <div className="icon">
                      <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContentPepro;
