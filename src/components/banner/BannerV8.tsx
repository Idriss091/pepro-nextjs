"use client";

const illustration1 = "/assets/img/illustration/1.png";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SplitText from "../animation/SplitText.jsx";

const BannerV8 = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const pulseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => {
      setIsReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setTilt({ x: 0, y: 0 });
        setIsHovering(false);
        setIsPulsing(false);
      }
    };

    updateReducedMotion();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateReducedMotion);
    } else {
      mediaQuery.addListener(updateReducedMotion);
    }

    return () => {
      if (pulseTimeoutRef.current) {
        window.clearTimeout(pulseTimeoutRef.current);
      }
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateReducedMotion);
      } else {
        mediaQuery.removeListener(updateReducedMotion);
      }
    };
  }, []);

  const triggerPulse = () => {
    if (isReducedMotion) return;
    setIsPulsing(true);
    if (pulseTimeoutRef.current) {
      window.clearTimeout(pulseTimeoutRef.current);
    }
    pulseTimeoutRef.current = window.setTimeout(() => {
      setIsPulsing(false);
    }, 220);
  };

  return (
    <>
      <div
        className="banner-style-eight-area bg-cover"
        style={{ backgroundImage: "url(/assets/img/shape/3.jpg)" }}
      >
        <div
          className="light-banner-active bg-gray bg-cover"
          style={{ backgroundImage: "url(/assets/img/shape/4.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner-style-eight-heading">
                <div className="banner-title">
                  <h2>
                    <SplitText
                      className="title-left split-text"
                      delay={150}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    >
                      L&apos;art et la
                    </SplitText>
                  </h2>

                  <h2 className="title-right split-text">
                    <SplitText
                      delay={150}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    >
                      science du code
                    </SplitText>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className="thumb"
                role="button"
                tabIndex={0}
                aria-label="Animer l'illustration"
                onClick={triggerPulse}
                onMouseEnter={() => {
                  if (isReducedMotion) return;
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setTilt({ x: 0, y: 0 });
                }}
                onMouseMove={(event) => {
                  if (isReducedMotion) return;
                  const rect = event.currentTarget.getBoundingClientRect();
                  const x = (event.clientX - rect.left) / rect.width;
                  const y = (event.clientY - rect.top) / rect.height;
                  const rotateY = (x - 0.5) * 14;
                  const rotateX = (0.5 - y) * 10;
                  setTilt({ x: rotateX, y: rotateY });
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    triggerPulse();
                  }
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onMouseDown={() => setIsFocused(false)}
                style={{
                  cursor: "pointer",
                  zIndex: 1,
                  outline: isFocused ? "2px solid rgba(133, 222, 255, 0.9)" : "none",
                  outlineOffset: 10,
                  borderRadius: 10,
                  transform: isReducedMotion
                    ? "rotate(-30deg)"
                    : `perspective(1100px) rotate(-30deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isPulsing ? 1.055 : isHovering ? 1.018 : 1})`,
                  transition: isReducedMotion
                    ? "none"
                    : isHovering
                    ? "transform 120ms ease-out"
                    : "transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
                  willChange: "transform",
                }}
              >
                <Image
                  src={illustration1}
                  alt="Illustration technologique"
                  width={500}
                  height={639}
                  priority
                  style={{
                    filter: !isReducedMotion && isHovering
                      ? "drop-shadow(0 0 18px rgba(74, 179, 255, 0.28)) drop-shadow(0 0 42px rgba(111, 233, 216, 0.22)) saturate(1.05)"
                      : "drop-shadow(0 0 8px rgba(74, 179, 255, 0.12))",
                    transition: isReducedMotion ? "none" : "filter 220ms ease-out",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7">
              <div className="d-grid">
                <h4>Pepro</h4>
                <div className="right">
                  <p>
                    Au croisement de l&apos;innovation et de l&apos;ingénierie, Pepro
                    conçoit des solutions logicielles sur-mesure pour redéfinir
                    votre futur technologique.
                  </p>
                  <Link className="btn-animation mt-10" href="/services">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Découvrir nos services</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-1">
              <div className="card-style-one">
                <div className="bottom">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        3
                      </div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Expertises clés</span>
                  </div>
                  <Link
                    href="/services"
                    aria-label="Voir nos services"
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="fas fa-long-arrow-right" />
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

export default BannerV8;
