"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { homeShowcaseProjects, portfolioShowcaseProjects } from "@/data/homeContent";
import styles from "./ProjectShowcase.module.css";

type ProjectShowcaseProps = {
  layout?: "sticky" | "rows";
};

export default function ProjectShowcase({ layout = "sticky" }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeProject = homeShowcaseProjects[activeIndex];

  if (layout === "sticky") {
    return (
      <div className={`${styles.layout} ${styles.stickyLayout}`}>
        <div className={styles.previewColumn}>
          <div className={`${styles.preview} ${styles[activeProject.accent]}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className={styles.previewImage}
                key={activeProject.client}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={activeProject.image}
                  alt=""
                  fill
                  sizes="(max-width: 980px) 94vw, 44vw"
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
            <div className={styles.previewChrome} aria-hidden="true">
              <span>PEPRO / CASE {activeProject.index}</span>
              <span>LIVE PRODUCT</span>
            </div>
            <div className={styles.previewCaption}>
              <span>{activeProject.client}</span>
              <strong>{activeProject.sector}</strong>
            </div>
          </div>
        </div>

        <div className={styles.list}>
          {homeShowcaseProjects.map((project) => {
            const external = project.href.startsWith("http");

            return (
              <Link
                className={`${styles.row} ${activeIndex === Number(project.index) - 1 ? styles.active : ""}`}
                href={project.href}
                key={project.client}
                onFocus={() => setActiveIndex(Number(project.index) - 1)}
                onMouseEnter={() => setActiveIndex(Number(project.index) - 1)}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                <span className={styles.index}>{project.index}</span>
                <div className={styles.rowContent}>
                  <p>{project.sector}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.summary}>{project.summary}</p>
                  <div className={`${styles.mobilePreview} ${styles[project.accent]}`}>
                    <Image
                      src={project.image}
                      alt={`Aperçu du projet ${project.client}`}
                      fill
                      sizes="calc(100vw - 64px)"
                    />
                  </div>
                </div>
                <span className={styles.arrow} aria-hidden="true"><ArrowUpRight /></span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.layout} ${styles.rowsLayout}`}>
      <div className={styles.list}>
        {portfolioShowcaseProjects.map((project, index) => {
          const external = project.href.startsWith("http");

          return (
            <Link
              className={styles.row}
              href={project.href}
              key={project.client}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              <span className={styles.index}>{project.index}</span>
              <div className={styles.rowContent}>
                <div className={styles.copy}>
                  <p>{project.sector}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.summary}>{project.summary}</p>
                  <span className={styles.arrow} aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </div>
                <motion.div
                  className={`${styles.projectPreview} ${styles[project.accent]}`}
                  initial={reduceMotion ? false : { opacity: 1, y: 28, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.client}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 720px) calc(100vw - 64px), 52vw"
                  />
                  <div className={styles.previewChrome} aria-hidden="true">
                    <span>PEPRO / CASE {project.index}</span>
                    <span>LIVE PRODUCT</span>
                  </div>
                </motion.div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
