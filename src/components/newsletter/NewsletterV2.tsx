"use client";
import Image from "next/image";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const arrowRightTwo = "/assets/img/icon/arrow-right-two.png";

const NewsletterV2 = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT?.trim() ?? "";

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setIsError(false);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    if (!formspreeEndpoint) {
      setIsError(true);
      setMessage("Configuration newsletter manquante.");
      setIsSubmitting(false);
      return;
    }

    try {
      trackEvent("newsletter_submit_attempt", {
        placement: "footer",
      });
      formData.set("formType", "newsletter_footer");
      formData.set("_subject", "Pepro - Inscription newsletter");

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        setIsError(true);
        setMessage("Une erreur est survenue. Reessayez plus tard.");
        trackEvent("newsletter_submit_error", {
          placement: "footer",
          error_type: "api_error",
          status_code: response.status,
        });
        return;
      }

      form.reset();
      setMessage("Merci pour votre inscription !");
      trackEvent("newsletter_submit_success", {
        placement: "footer",
      });
    } catch (error) {
      console.error("Erreur newsletter:", error);
      setIsError(true);
      setMessage("Une erreur est survenue. Reessayez plus tard.");
      trackEvent("newsletter_submit_error", {
        placement: "footer",
        error_type: "network_error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="newsletter style-two" onSubmit={handleForm}>
        <input type="hidden" name="formType" value="newsletter_footer" />
        <label htmlFor="newsletter-v2-email" className="visually-hidden">
          Votre e-mail pour la newsletter
        </label>
        <input
          id="newsletter-v2-email"
          type="email"
          placeholder="Votre email"
          className="form-control"
          name="email"
          autoComplete="email"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          aria-label="S'inscrire à la newsletter"
        >
          <Image src={arrowRightTwo} alt="Envoyer" width={124} height={84} />
        </button>
      </form>
      {message && (
        <p
          className={`mt-2 mb-0 ${isError ? "text-danger" : "text-success"}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </>
  );
};

export default NewsletterV2;
