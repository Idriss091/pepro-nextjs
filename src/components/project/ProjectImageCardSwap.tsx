"use client";

import Image from "next/image";
import gsap from "gsap";
import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type RefAttributes,
} from "react";
import styles from "./ProjectImageCardSwap.module.css";

interface SwapCardProps extends HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  style?: CSSProperties;
}

const SwapCard = forwardRef<HTMLDivElement, SwapCardProps>(
  ({ customClass, className, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={[styles.card, customClass, className].filter(Boolean).join(" ")}
    />
  ),
);

SwapCard.displayName = "SwapCard";

const makeSlot = (index: number, distX: number, distY: number, total: number) => ({
  x: index * distX,
  y: -index * distY,
  z: -index * distX * 1.5,
  zIndex: total - index,
});

const placeNow = (element: HTMLDivElement, slot: ReturnType<typeof makeSlot>, skew: number) =>
  gsap.set(element, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  skewAmount?: number;
  easing?: "elastic" | "smooth";
  children: ReactNode;
}

const CardSwap = ({
  width = 620,
  height = 355,
  cardDistance = 46,
  verticalDistance = 44,
  delay = 5000,
  pauseOnHover = false,
  skewAmount = 6,
  easing = "elastic",
  children,
}: CardSwapProps) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArray = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArray.map(() => createRef<HTMLDivElement>()),
    [childArray],
  );

  const order = useRef(Array.from({ length: childArray.length }, (_, index) => index));
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((ref, index) => {
      if (ref.current) {
        placeNow(ref.current, makeSlot(index, cardDistance, verticalDistance, total), skewAmount);
      }
    });

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const frontElement = refs[front]?.current;
      if (!frontElement) return;

      const timeline = gsap.timeline();
      timelineRef.current = timeline;

      timeline.to(frontElement, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      timeline.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

      rest.forEach((idx, index) => {
        const element = refs[idx]?.current;
        if (!element) return;

        const slot = makeSlot(index, cardDistance, verticalDistance, refs.length);
        timeline.set(element, { zIndex: slot.zIndex }, "promote");
        timeline.to(
          element,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${index * 0.15}`,
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      timeline.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      timeline.call(
        () => {
          gsap.set(frontElement, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return",
      );
      timeline.to(
        frontElement,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return",
      );

      timeline.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = containerRef.current;
      const pause = () => {
        timelineRef.current?.pause();
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      };
      const resume = () => {
        timelineRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };

      node?.addEventListener("mouseenter", pause);
      node?.addEventListener("mouseleave", resume);

      return () => {
        node?.removeEventListener("mouseenter", pause);
        node?.removeEventListener("mouseleave", resume);
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      };
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [cardDistance, config.durDrop, config.durMove, config.durReturn, config.ease, config.promoteOverlap, config.returnDelay, delay, pauseOnHover, refs, skewAmount, verticalDistance]);

  const renderedChildren = childArray.map((child, index) => {
    if (!isValidElement(child)) return child;

    const element = child as ReactElement<SwapCardProps & RefAttributes<HTMLDivElement>>;
    const childStyle = element.props.style ?? {};

    return cloneElement(element, {
      key: index,
      ref: refs[index],
      style: { width, height, ...childStyle },
    });
  });

  return (
    <div className={styles.stage}>
      <div ref={containerRef} className={styles.container} style={{ width, height }}>
        {renderedChildren}
      </div>
    </div>
  );
};

interface ProjectImageCardSwapProps {
  images: string[];
  title: string;
}

const ProjectImageCardSwap = ({ images, title }: ProjectImageCardSwapProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImageIndex]);

  return (
    <>
      <CardSwap
      width={640}
      height={364}
      cardDistance={44}
      verticalDistance={40}
      delay={5000}
      pauseOnHover
      easing="elastic"
      skewAmount={5}
      >
        {images.map((imageSrc, index) => (
          <SwapCard
            key={imageSrc}
            role="button"
            tabIndex={0}
            aria-label={`Ouvrir le visuel ${index + 1} du projet ${title}`}
            onClick={() => setActiveImageIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveImageIndex(index);
              }
            }}
          >
            <span className={styles.imageWrap}>
              <Image
                src={imageSrc}
                alt={`${title} - visuel ${index + 1}`}
                fill
                unoptimized
                className={styles.image}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </span>
          </SwapCard>
        ))}
      </CardSwap>

      {activeImageIndex !== null ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} - visuel ${activeImageIndex + 1}`}
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            aria-label="Fermer le visuel"
            onClick={() => setActiveImageIndex(null)}
          >
            Fermer
          </button>
          <div
            className={styles.lightboxFrame}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeImageIndex]}
              alt={`${title} - visuel ${activeImageIndex + 1}`}
              fill
              unoptimized
              className={styles.lightboxImage}
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProjectImageCardSwap;
