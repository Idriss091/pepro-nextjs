"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./HeroAurora.module.css";

const AuroraBeam = dynamic(
  () =>
    import("@/components/react-bits/aurora-beam").then(
      (module) => module.AuroraBeam,
    ),
  { ssr: false },
);

export default function HeroAurora() {
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrowScreen = window.matchMedia("(max-width: 720px)");

    const update = () => {
      setCanAnimate(!reducedMotion.matches && !narrowScreen.matches);
    };

    update();
    reducedMotion.addEventListener("change", update);
    narrowScreen.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      narrowScreen.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.staticGlow} />
      {canAnimate ? (
        <AuroraBeam
          className={styles.aurora}
          speed={0.34}
          sheets={6}
          amplitude={0.1}
          frequency={3.1}
          thickness={0.035}
          tail={0.28}
          position={-0.07}
          slant={0.06}
          spread={0.14}
          rays={0.25}
          rayDrift={0.28}
          reactivity={0.42}
          gain={1.25}
          exposure={2.55}
          contrast={1.08}
          color="#21e6ff"
          midColor="#8af2ff"
          deepColor="#087f9f"
          hueDrift={0.35}
          grain={0.035}
          backgroundColor="transparent"
          opacity={0.9}
          cursorSway={0.16}
          dpr={1.25}
          targetFps={50}
        />
      ) : null}
      <div className={styles.vignette} />
      <div className={styles.grain} />
    </div>
  );
}
