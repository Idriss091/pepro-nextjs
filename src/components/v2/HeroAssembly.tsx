"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroAssembly.module.css";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className={styles.loader}><span /></div>,
});

export default function HeroAssembly() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "120px" },
    );

    const root = rootRef.current;
    if (root) observer.observe(root);

    return () => {
      media.removeEventListener("change", updateMotion);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.root} ref={rootRef} aria-hidden="true">
      <HeroScene active={active} reduceMotion={reduceMotion} />
      <div className={styles.vignette} />
      <div className={styles.grain} />
    </div>
  );
}
