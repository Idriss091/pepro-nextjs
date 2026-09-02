"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import {
  ChartNoAxesCombined,
  Code2,
  PenTool,
  Rocket,
  Target,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { homeMethod } from "@/data/homeContent";
import styles from "./MethodExperience.module.css";

type MethodScene = (typeof homeMethod)[number] & {
  eyebrow: string;
  outcome: string;
  deliverables: readonly string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  photographer: string;
  source: string;
  imagePosition?: string;
};

const scenes: readonly MethodScene[] = [
  {
    ...homeMethod[0],
    eyebrow: "Comprendre avant de produire",
    outcome: "Un périmètre partagé, des priorités nettes et aucun faux départ.",
    deliverables: ["Diagnostic", "Priorités", "Feuille de route"],
    icon: Target,
    image: "https://images.unsplash.com/photo-1677506048148-0c914dd8197b?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Tableau de travail couvert de notes organisées par colonnes",
    photographer: "Paymo",
    source: "https://unsplash.com/photos/JXyY3jRV9oI",
  },
  {
    ...homeMethod[1],
    eyebrow: "Rendre l’idée tangible",
    outcome: "Le bon parcours et la bonne première version avant d’engager toute la construction.",
    deliverables: ["Parcours", "Prototype", "Direction UI"],
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Équipe produit travaillant autour d’un ordinateur pendant un sprint",
    photographer: "Lala Azizli",
    source: "https://unsplash.com/photos/tfNyTfJpKvc",
    imagePosition: "center 42%",
  },
  {
    ...homeMethod[2],
    eyebrow: "Assembler le système",
    outcome: "Une base technique lisible, robuste et pensée pour la réalité du métier.",
    deliverables: ["Interface", "Logique métier", "Intégrations"],
    icon: Code2,
    image: "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Code source affiché sur l’écran d’un poste de développement",
    photographer: "Rob Wingate",
    source: "https://unsplash.com/photos/LnzSzH24XS8",
  },
  {
    ...homeMethod[3],
    eyebrow: "Passer en production",
    outcome: "Une mise en ligne contrôlée, testée et observable dès le premier jour.",
    deliverables: ["Recette", "Migration", "Production"],
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1667264501379-c1537934c7ab?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Détail d’une infrastructure serveur et de ses câblages",
    photographer: "Kier in Sight Archives",
    source: "https://unsplash.com/photos/3Nwt6w-KU3E",
  },
  {
    ...homeMethod[4],
    eyebrow: "Apprendre du terrain",
    outcome: "Un produit qui reste fiable et progresse selon les usages qui comptent vraiment.",
    deliverables: ["Mesure", "Maintenance", "Améliorations"],
    icon: ChartNoAxesCombined,
    image: "https://images.unsplash.com/photo-1784729553968-07da5d7b7c99?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Écran d’ordinateur présentant des données d’analyse et leur évolution",
    photographer: "Swello",
    source: "https://unsplash.com/photos/fDisDvdiqrQ",
    imagePosition: "center 40%",
  },
] as const;

function VisualScene({ scene }: { scene: MethodScene }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      className={styles.visualScene}
      initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={scene.image}
        alt={scene.imageAlt}
        fill
        sizes="(max-width: 760px) 100vw, 58vw"
        style={{ objectPosition: scene.imagePosition ?? "center" }}
      />
      <span className={styles.photoShade} aria-hidden="true" />
      <figcaption className={styles.photoCaption}>
        <span>{scene.index} / 05</span>
        <span>{scene.title}</span>
        <a href={scene.source} target="_blank" rel="noreferrer">
          Photo · {scene.photographer} / Unsplash
        </a>
      </figcaption>
    </motion.figure>
  );
}

function DetailPanel({ scene }: { scene: MethodScene }) {
  return (
    <div className={styles.detailCopy}>
      <p className={styles.detailEyebrow}>{scene.eyebrow}</p>
      <h3>{scene.title}</h3>
      <p className={styles.outcome}>{scene.outcome}</p>
      <ul aria-label={`Livrables de l’étape ${scene.title}`}>
        {scene.deliverables.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 + index * 0.06 }}
          >
            <span>0{index + 1}</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function MethodExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const uid = useId().replace(/:/g, "");
  const active = scenes[activeIndex];

  const selectFromKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % scenes.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + scenes.length) % scenes.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = scenes.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <div className={styles.experience}>
      <div className={styles.desktop}>
        <div className={styles.tabs} role="tablist" aria-label="Les cinq étapes de notre approche">
          {scenes.map((scene, index) => {
            const Icon = scene.icon;
            const selected = activeIndex === index;
            return (
              <button
                key={scene.index}
                ref={(node) => { tabsRef.current[index] = node; }}
                id={`${uid}-tab-${index}`}
                className={styles.tab}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => selectFromKeyboard(event, index)}
              >
                {selected ? <motion.span className={styles.activeTab} layoutId={`${uid}-active`} /> : null}
                <span className={styles.tabIndex}>{scene.index}</span>
                <Icon aria-hidden="true" />
                <span className={styles.tabLabel}>{scene.title}</span>
              </button>
            );
          })}
        </div>

        <div
          className={styles.panel}
          id={`${uid}-panel`}
          role="tabpanel"
          aria-labelledby={`${uid}-tab-${activeIndex}`}
          tabIndex={0}
        >
          <div className={styles.panelVisual}>
            <AnimatePresence mode="wait">
              <VisualScene key={active.index} scene={active} />
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              className={styles.panelDetail}
              key={active.index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <DetailPanel scene={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.mobile}>
        {scenes.map((scene, index) => {
          const Icon = scene.icon;
          const selected = activeIndex === index;
          return (
            <div className={styles.mobileItem} key={scene.index}>
              <button
                type="button"
                aria-expanded={selected}
                aria-controls={`${uid}-mobile-panel-${index}`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{scene.index}</span>
                <Icon aria-hidden="true" />
                <strong>{scene.title}</strong>
                <i aria-hidden="true">{selected ? "−" : "+"}</i>
              </button>
              <AnimatePresence initial={false}>
                {selected ? (
                  <motion.div
                    id={`${uid}-mobile-panel-${index}`}
                    className={styles.mobilePanel}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <VisualScene scene={scene} />
                    <DetailPanel scene={scene} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
