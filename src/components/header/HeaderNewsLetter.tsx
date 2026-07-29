"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): Promise<void>;
}

const HeaderNewsLetter = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const formspreeEndpoint =
      process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT?.trim() ?? "";

    const handleForm: FormEventHandler = async (event) => {
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
                placement: "header",
            });
            formData.set("formType", "newsletter_header");
            formData.set("_subject", "Pepro - Inscription newsletter (header)");

            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (!response.ok) {
                setIsError(true);
                setMessage("Une erreur est survenue. Reessayez dans quelques instants.");
                trackEvent("newsletter_submit_error", {
                    placement: "header",
                    error_type: "api_error",
                    status_code: response.status,
                });
                return;
            }

            form.reset();
            setMessage("Merci pour votre inscription.");
            trackEvent("newsletter_submit_success", {
                placement: "header",
            });
        } catch (error) {
            console.error("Erreur newsletter (header):", error);
            setIsError(true);
            setMessage("Une erreur est survenue. Reessayez dans quelques instants.");
            trackEvent("newsletter_submit_error", {
                placement: "header",
                error_type: "network_error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form onSubmit={handleForm}>
                <input type="hidden" name="formType" value="newsletter_header" />
                <label htmlFor="header-newsletter-email" className="visually-hidden">
                    Votre e-mail pour la newsletter
                </label>
                <div className="input-group stylish-input-group">
                    <input
                        id="header-newsletter-email"
                        type="email"
                        placeholder="Votre e-mail"
                        className="form-control"
                        name="email"
                        autoComplete="email"
                        required
                    />
                    <span className="input-group-addon">
                        <button type="submit" disabled={isSubmitting} aria-label="S&apos;inscrire à la newsletter">
                            <i className="fas fa-arrow-right" />
                        </button>
                    </span>
                </div>
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
    )
};

export default HeaderNewsLetter;
