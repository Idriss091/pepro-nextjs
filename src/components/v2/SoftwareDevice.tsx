"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { PointerEvent } from "react";
import styles from "./SoftwareDevice.module.css";

export default function SoftwareDevice() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.7 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-1.5, 1.5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [1.2, -1.2]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className={styles.stage}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className={styles.ambient} aria-hidden="true" />
      <motion.div
        className={styles.entry}
        initial={reduceMotion ? false : { opacity: 0, y: 54, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.figure
          className={styles.workstation}
          style={reduceMotion ? undefined : { rotateX, rotateY }}
        >
          <Image
            className={styles.shell}
            src="/assets/img/devices/pepro-workstation-v1.png"
            alt=""
            fill
            sizes="(max-width: 900px) 94vw, 58vw"
          />

          <div className={styles.screen}>
            <Image
              src="/assets/img/projects/voltpath-console.png"
              alt="Console VoltPath comparant plusieurs scénarios de raccordement"
              fill
              sizes="(max-width: 900px) 72vw, 43vw"
            />
            <span className={styles.screenReflection} aria-hidden="true" />
          </div>

          <figcaption>
            <span>Logiciel métier livré</span>
            VoltPath / Scenario comparison
          </figcaption>
        </motion.figure>
      </motion.div>

      <span className={styles.proof}>VoltPath · Logiciel énergie</span>
    </div>
  );
}
