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
    }, 720);
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
                      Pepro, votre
                    </SplitText>
                  </h2>

                  <h2>
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
                      partenaire local
                    </SplitText>
                  </h2>

                  <h2>
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
                      de confiance
                    </SplitText>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className={`thumb banner-hero-illustration ${isPulsing ? "is-pulsing" : ""}`}
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
                style={{
                  cursor: "pointer",
                  zIndex: 1,
                  borderRadius: 10,
                  transform: isReducedMotion
                    ? "rotate(-30deg)"
                    : `perspective(1100px) rotate(-30deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isPulsing ? 1.12 : isHovering ? 1.018 : 1})`,
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
                    Pepro transforme vos besoins métiers en logiciels
                    sur-mesure : plateformes web, automatisations IA, systèmes
                    autonomes, maintenance prédictive et jumeaux numériques
                    pour piloter, simuler et optimiser vos opérations.
                  </p>
                  <Link className="btn-animation banner-services-cta mt-10" href="/services">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Découvrir nos services</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-1">
              <div className="card-style-one banner-stat-card">
                <div className="bottom">
                  <div className="fun-fact banner-stat">
                    <div className="counter">
                      <div className="timer">
                        2
                      </div>
                    </div>
                    <div className="banner-stat-copy">
                      <span className="banner-stat-title">pôles</span>
                      <span className="medium banner-stat-label">
                        Une grande polyvalence de compétences
                      </span>
                    </div>
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

      <style jsx>{`
        .banner-hero-illustration {
          position: relative;
          outline: none;
        }

        .banner-hero-illustration::after {
          content: "";
          position: absolute;
          inset: 14%;
          border-radius: 999px;
          border: 2px solid rgba(76, 211, 255, 0);
          pointer-events: none;
        }

        .banner-hero-illustration.is-pulsing::after {
          animation: hero-illustration-ripple 720ms ease-out;
        }

        .banner-hero-illustration.is-pulsing :global(img) {
          animation: hero-illustration-pop 720ms cubic-bezier(0.2, 1, 0.22, 1);
        }

        .banner-hero-illustration:focus-visible {
          outline: 2px solid rgba(133, 222, 255, 0.9);
          outline-offset: 10px;
        }

        @keyframes hero-illustration-ripple {
          0% {
            opacity: 0.9;
            transform: scale(0.72);
            border-color: rgba(76, 211, 255, 0.85);
            box-shadow: 0 0 0 0 rgba(128, 255, 219, 0.32);
          }

          100% {
            opacity: 0;
            transform: scale(1.35);
            border-color: rgba(76, 211, 255, 0);
            box-shadow: 0 0 0 34px rgba(128, 255, 219, 0);
          }
        }

        @keyframes hero-illustration-pop {
          0% {
            filter: drop-shadow(0 0 8px rgba(74, 179, 255, 0.12));
          }

          35% {
            filter:
              drop-shadow(0 0 22px rgba(74, 179, 255, 0.48))
              drop-shadow(0 0 54px rgba(111, 233, 216, 0.36))
              saturate(1.18);
          }

          100% {
            filter: drop-shadow(0 0 8px rgba(74, 179, 255, 0.12));
          }
        }
      `}</style>
    </>
  );
};

export default BannerV8;
