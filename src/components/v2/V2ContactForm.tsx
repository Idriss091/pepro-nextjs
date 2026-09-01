"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import styles from "./V2ContactForm.module.css";

type FormStatus = { type: "success" | "error"; message: string } | null;

export default function V2ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT?.trim() ?? "";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!endpoint) {
      setStatus({ type: "error", message: "Configuration du formulaire manquante." });
      setIsSubmitting(false);
      return;
    }

    if (String(formData.get("_gotcha") ?? "").trim()) {
      setStatus({ type: "success", message: "Message envoyé. Nous revenons vers vous rapidement." });
      form.reset();
      setIsSubmitting(false);
      return;
    }

    if (formData.get("consent") !== "accepted") {
      setStatus({ type: "error", message: "Veuillez accepter la politique de confidentialité." });
      setIsSubmitting(false);
      return;
    }

    try {
      trackEvent("contact_form_submit_attempt", { location: "/contact" });
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) throw new Error(`Formspree ${response.status}`);

      trackEvent("generate_lead", { lead_source: "contact_form", location: "/contact" });
      setStatus({ type: "success", message: "Message envoyé. Nous revenons vers vous rapidement." });
      form.reset();
    } catch {
      trackEvent("contact_form_submit_error", { error_type: "api_or_network_error", location: "/contact" });
      setStatus({ type: "error", message: "L’envoi a échoué. Vous pouvez nous écrire à contact@pepro.fr." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="hidden" name="formType" value="contact-v2" />
      <input className={styles.honeypot} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className={styles.twoColumns}>
        <label>Nom ou entreprise <span>*</span><input name="name" type="text" required autoComplete="name" /></label>
        <label>Email <span>*</span><input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className={styles.twoColumns}>
        <label>Téléphone <input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Type de projet
          <select name="projectType" defaultValue="">
            <option value="" disabled>Sélectionner</option>
            <option>Site vitrine / refonte</option><option>E-commerce</option><option>SEO</option>
            <option>Logiciel métier / MVP</option><option>IA & automatisation</option>
            <option>Maintenance</option><option>Pepro Engineering</option><option>Autre besoin</option>
          </select>
        </label>
      </div>
      <label>Votre besoin <span>*</span>
        <textarea name="message" rows={7} required placeholder="Contexte, objectif, difficultés actuelles…" />
      </label>
      <label className={styles.consent}>
        <input type="checkbox" name="consent" value="accepted" required />
        <span>J’accepte que mes données soient utilisées pour répondre à ma demande. <Link href="/politique-confidentialite">Politique de confidentialité</Link>.</span>
      </label>
      <div className={styles.submitRow}>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours…" : "Envoyer la demande"}<ArrowUpRight aria-hidden="true" />
        </button>
        <p>Réponse humaine, sans inscription automatique.</p>
      </div>
      {status ? <p className={status.type === "success" ? styles.success : styles.error} role="status"><CheckCircle2 aria-hidden="true" />{status.message}</p> : null}
    </form>
  );
}
