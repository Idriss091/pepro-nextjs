"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import GoogleTagManager from "./GoogleTagManager";
import styles from "./ConsentManager.module.css";
import {
  type AnalyticsConsent,
  deleteGoogleAnalyticsCookies,
  readStoredConsent,
  storeConsent,
} from "@/lib/consent";

const updateGoogleConsent = (analytics: AnalyticsConsent) => {
  window.gtag?.("consent", "update", {
    analytics_storage: analytics,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const ConsentManager = () => {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] =
    useState<AnalyticsConsent>("denied");
  const [shouldLoadGtm, setShouldLoadGtm] = useState(false);

  useEffect(() => {
    const storedConsent = readStoredConsent();

    if (storedConsent) {
      updateGoogleConsent(storedConsent.analytics);
    }

    const animationFrame = window.requestAnimationFrame(() => {
      if (!storedConsent) {
        setIsOpen(true);
        setIsReady(true);
        return;
      }

      setAnalyticsChoice(storedConsent.analytics);
      setShouldLoadGtm(storedConsent.analytics === "granted");
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  const saveChoice = (analytics: AnalyticsConsent) => {
    const wasLoaded = shouldLoadGtm;

    storeConsent(analytics);
    setAnalyticsChoice(analytics);
    updateGoogleConsent(analytics);
    setIsOpen(false);
    setShowPreferences(false);

    if (analytics === "granted") {
      setShouldLoadGtm(true);
      return;
    }

    deleteGoogleAnalyticsCookies();
    setShouldLoadGtm(false);

    if (wasLoaded) {
      window.location.reload();
    }
  };

  const openPreferences = () => {
    const storedConsent = readStoredConsent();
    setAnalyticsChoice(storedConsent?.analytics ?? "denied");
    setShowPreferences(true);
    setIsOpen(true);
  };

  return (
    <>
      {shouldLoadGtm && <GoogleTagManager />}

      {isReady && isOpen && (
        <section
          className={`${styles.banner} ${
            showPreferences ? styles.preferencesBanner : styles.compactBanner
          }`}
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className={styles.content}>
            <div className={styles.copy}>
              <span className={styles.eyebrow}>Cookies &amp; confidentialité</span>
              <h2 className={styles.title} id="cookie-consent-title">
                {showPreferences
                  ? "Vos préférences"
                  : "Peut-on mesurer votre visite ?"}
              </h2>
              <p className={styles.description} id="cookie-consent-description">
                {showPreferences ? (
                  "Choisissez si vous autorisez la mesure d’audience. Votre accès au site reste identique quel que soit votre choix."
                ) : (
                  <>
                    Avec votre accord, Google Analytics nous aide à améliorer
                    Pepro.fr. Aucun dépôt avant votre choix.{" "}
                    <Link href="/politique-cookies">En savoir plus</Link>
                  </>
                )}
              </p>
            </div>

            {!showPreferences && (
              <div className={styles.actions}>
                <button
                  type="button"
                  className={`${styles.button} ${styles.rejectButton}`}
                  onClick={() => saveChoice("denied")}
                >
                  Tout refuser
                </button>
                <button
                  type="button"
                  className={`${styles.button} ${styles.primaryButton}`}
                  onClick={() => saveChoice("granted")}
                >
                  Tout accepter
                </button>
                <button
                  type="button"
                  className={`${styles.button} ${styles.preferencesButton}`}
                  onClick={() => setShowPreferences(true)}
                >
                  Choisir
                </button>
              </div>
            )}

            {showPreferences && (
              <div className={styles.preferences}>
                <div className={styles.preferenceRow}>
                  <div>
                    <span className={styles.preferenceTitle}>
                      Mesure d&apos;audience
                    </span>
                    <p className={styles.preferenceDescription}>
                      Google Analytics : pages consultées, provenance générale et
                      interactions. Aucune saisie de formulaire n&apos;est envoyée.
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analyticsChoice === "granted"}
                    aria-label="Autoriser la mesure d'audience Google Analytics"
                    className={`${styles.toggle} ${
                      analyticsChoice === "granted" ? styles.toggleEnabled : ""
                    }`}
                    onClick={() =>
                      setAnalyticsChoice((choice) =>
                        choice === "granted" ? "denied" : "granted",
                      )
                    }
                  />
                </div>
                <div className={styles.preferenceActions}>
                  <button
                    type="button"
                    className={`${styles.button} ${styles.backButton}`}
                    onClick={() => setShowPreferences(false)}
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    className={`${styles.button} ${styles.primaryButton}`}
                    onClick={() => saveChoice(analyticsChoice)}
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {isReady && !isOpen && (
        <button
          type="button"
          className={styles.manageButton}
          onClick={openPreferences}
          aria-label="Gérer mes préférences de cookies"
        >
          <span className={styles.manageDot} aria-hidden="true" />
          Gérer mes cookies
        </button>
      )}
    </>
  );
};

export default ConsentManager;
