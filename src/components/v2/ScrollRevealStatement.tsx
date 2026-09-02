"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import styles from "./ScrollRevealStatement.module.css";

const revealColors = ["#e4c8ff", "#d8d7ff", "#c7e7ff", "#b9f4ff"];

interface RevealWordProps {
  index: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
  total: number;
  word: string;
}

function RevealWord({ index, progress, reducedMotion, total, word }: RevealWordProps) {
  const start = (index / total) * 0.86;
  const end = Math.min(start + 0.16, 1);
  const targetColor = revealColors[index % revealColors.length];
  const color = useTransform(progress, [start, end], ["#687780", targetColor]);

  return (
    <motion.span aria-hidden="true" style={{ color: reducedMotion ? targetColor : color }}>
      {word}
    </motion.span>
  );
}

interface ScrollRevealStatementProps {
  id: string;
  text: string;
}

export default function ScrollRevealStatement({ id, text }: ScrollRevealStatementProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const words = text.split(" ");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.82", "end 0.42"],
  });

  return (
    <div ref={sectionRef} className={styles.stage}>
      <h2 id={id} aria-label={text}>
        {words.map((word, index) => (
          <span className={styles.word} key={`${word}-${index}`}>
            <RevealWord
              index={index}
              progress={scrollYProgress}
              reducedMotion={reducedMotion}
              total={words.length}
              word={word}
            />{" "}
          </span>
        ))}
      </h2>
    </div>
  );
}
