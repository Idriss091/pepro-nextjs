"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useHorizontalScroll = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const width = window.innerWidth;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (width <= 1023 || prefersReducedMotion) return;

        const sections = gsap.utils.toArray<HTMLElement>(".multi-section .panel");
        const container = document.querySelector(".multi-section .thecontainer") as HTMLDivElement | null;

        if (!container || sections.length === 0) return;

        const tween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => "+=" + container.offsetWidth,
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, []);
};

export default useHorizontalScroll;
