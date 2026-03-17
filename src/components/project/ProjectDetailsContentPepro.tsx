import Image from "next/image";
import Link from "next/link";
import type { ProjectCaseStudy } from "@/data/projectCaseStudies";
import ProjectImageCardSwap from "./ProjectImageCardSwap";
import styles from "./ProjectDetailsContentPepro.module.css";

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
                <ul className={styles.proofPoints}>
                  {project.proofPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
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
                        <h3>Stack</h3>
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
          <div className={`row ${styles.overviewRow}`}>
            <div className={`col-lg-6 ${styles.textColumn}`}>
              <div className={styles.textPanel}>
                <section>
                  <h4>Enjeux cles</h4>
                  <ul className={styles.compactList}>
                    {project.challenges.slice(0, 3).map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4>Ce que nous avons concu</h4>
                  <ul className={styles.compactList}>
                    {project.deliverables.slice(0, 4).map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4>Valeur apportee</h4>
                  <div className={styles.outcomeGrid}>
                    {project.outcomes.slice(0, 4).map((outcome) => (
                      <div key={outcome} className={styles.outcomeItem}>
                        {outcome}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            <div className={`col-lg-6 ${styles.swapColumn}`}>
              <ProjectImageCardSwap
                images={project.galleryImages}
                title={project.title}
              />
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
                        <strong>02</strong> Ce que nous avons concu
                      </h3>
                    </div>
                    <div className="right-info">
                      {project.solution.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="single-grid">
                  <div className="item-grid-colum">
                    <div className="left-info">
                      <h3>
                        <strong>03</strong> Ce que cela change
                      </h3>
                    </div>
                    <div className="right-info">
                      {project.outcomes.map((outcome) => (
                        <p key={outcome}>{outcome}</p>
                      ))}
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
