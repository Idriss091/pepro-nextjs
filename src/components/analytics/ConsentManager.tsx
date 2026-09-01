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

  useEffect(() => {
    document.body.classList.toggle("cookie-consent-open", isOpen);

    return () => document.body.classList.remove("cookie-consent-open");
  }, [isOpen]);

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
          className={`${styles.banner} ${styles.v2Banner} ${
            showPreferences ? styles.preferencesBanner : styles.compactBanner
          }`}
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className={styles.content}>
            <div className={styles.copy}>
              <h2 className={styles.title} id="cookie-consent-title">
                {showPreferences
                  ? "Vos préférences"
                  : "Cookies et confidentialité"}
              </h2>
              <p className={styles.description} id="cookie-consent-description">
                {showPreferences ? (
                  "Choisissez si vous autorisez la mesure d’audience. Votre accès au site reste identique quel que soit votre choix."
                ) : (
                  <>
                    Nous utilisons des cookies pour améliorer votre expérience de
                    navigation et analyser l&apos;utilisation de notre site. En
                    cliquant sur « Accepter », vous consentez à leur utilisation.{" "}
                    <Link href="/politique-cookies">
                      Politique relative aux cookies
                    </Link>
                  </>
                )}
              </p>
            </div>

            {!showPreferences && (
              <div className={styles.actions}>
                <button
                  type="button"
                  className={`${styles.button} ${styles.preferencesButton}`}
                  onClick={() => setShowPreferences(true)}
                >
                  Personnaliser
                </button>
                <button
                  type="button"
                  className={`${styles.button} ${styles.rejectButton}`}
                  onClick={() => saveChoice("denied")}
                >
                  Refuser
                </button>
                <button
                  type="button"
                  className={`${styles.button} ${styles.primaryButton}`}
                  onClick={() => saveChoice("granted")}
                >
                  Accepter
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
                      Pages consultées, provenance générale et interactions.
                      Aucune saisie de formulaire n&apos;est envoyée.
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analyticsChoice === "granted"}
                    aria-label="Autoriser la mesure d'audience"
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
          className={`${styles.manageButton} ${styles.v2ManageButton}`}
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
