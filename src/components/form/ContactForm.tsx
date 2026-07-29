"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT?.trim() ?? "";

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const honeyPot = String(formData.get("_gotcha") ?? "").trim();
    const hasConsent = String(formData.get("consent") ?? "") === "accepted";

    if (!formspreeEndpoint) {
      setStatus({
        type: "error",
        message: "Configuration du formulaire manquante.",
      });
      setIsSubmitting(false);
      return;
    }

    if (honeyPot) {
      // Fail silently for bots while returning a generic success state.
      setStatus({
        type: "success",
        message: "Message envoyé avec succès ! Notre équipe vous répondra bientôt.",
      });
      form.reset();
      setIsSubmitting(false);
      return;
    }

    if (!hasConsent) {
      setStatus({
        type: "error",
        message:
          "Veuillez accepter la politique de confidentialité pour envoyer le message.",
      });
      trackEvent("contact_form_submit_error", {
        error_type: "missing_consent",
        location: "/contact-us",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      trackEvent("contact_form_submit_attempt", {
        location: "/contact-us",
      });

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        trackEvent("contact_form_submit_success", {
          location: "/contact-us",
        });
        setStatus({
          type: "success",
          message: "Message envoyé avec succès ! Notre équipe vous répondra bientôt.",
        });
        form.reset();
      } else {
        let errorMessage = "Une erreur s'est produite lors de l'envoi.";
        try {
          const data = (await response.json()) as {
            errors?: Array<{ message?: string }>;
          };
          errorMessage = data.errors?.[0]?.message || errorMessage;
        } catch {
          // Keep default fallback message.
        }
        setStatus({
          type: "error",
          message: errorMessage,
        });
        trackEvent("contact_form_submit_error", {
          error_type: "api_error",
          status_code: response.status,
          location: "/contact-us",
        });
      }
    } catch (error) {
      console.error("Erreur l'envoi du formulaire:", error);
      trackEvent("contact_form_submit_error", {
        error_type: "network_error",
        location: "/contact-us",
      });
      setStatus({
        type: "error",
        message: "Verifiez votre connexion internet.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="contact-form contact-form" onSubmit={handleForm}>
        <input type="hidden" name="formType" value="contact" />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: 1,
            height: 1,
            opacity: 0,
          }}
        />
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="name" className="visually-hidden">
                Votre nom
              </label>
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Votre nom *"
                type="text"
                required
                autoComplete="name"
              />
              <span className="alert-error" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="email" className="visually-hidden">
                Email
              </label>
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email *"
                type="email"
                required
                autoComplete="email"
              />
              <span className="alert-error" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="subject" className="visually-hidden">
                Sujet
              </label>
              <input
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Sujet *"
                type="text"
                required
                autoComplete="off"
              />
              <span className="alert-error" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <label htmlFor="message" className="visually-hidden">
                Description du projet
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Parlez-nous de votre projet *"
                required
                rows={5}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="contact-consent"
                name="consent"
                value="accepted"
                required
                style={{
                  appearance: "checkbox",
                  WebkitAppearance: "checkbox",
                  width: 18,
                  height: 18,
                  minWidth: 18,
                  maxWidth: 18,
                  flex: "0 0 18px",
                  display: "inline-block",
                  padding: 0,
                  lineHeight: 1,
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.45)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  boxShadow: "none",
                  marginTop: 2,
                  verticalAlign: "top",
                }}
              />
              <label className="form-check-label" htmlFor="contact-consent">
                J&apos;accepte que mes données soient utilisées pour être recontacté
                concernant ma demande.{" "}
                <a href="/politique-confidentialite">
                  Voir la politique de confidentialité
                </a>
                .
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button
              type="submit"
              name="submit"
              id="submit"
              disabled={isSubmitting}
              style={{
                color: "#071018",
                fontWeight: 700,
                textShadow: "none",
                opacity: isSubmitting ? 0.9 : 1,
              }}
            >
              <i className="fa fa-paper-plane" />{" "}
              {isSubmitting ? "Envoi..." : "Envoyer le message"}
            </button>
            {status && (
              <p
                className={`mt-3 mb-0 ${status.type === "success" ? "text-success" : "text-danger"}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
