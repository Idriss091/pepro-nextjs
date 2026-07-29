import { SITE_PHONE } from "@/lib/site";

const WHATSAPP_MESSAGE =
  "Bonjour, je souhaite echanger avec un conseiller Pepro au sujet de mon projet.";

const FloatingWhatsApp = () => {
  const phone = SITE_PHONE.replace(/\D/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Pepro sur WhatsApp"
    >
      <span className="floating-whatsapp-pulse" aria-hidden="true" />
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </a>
  );
};

export default FloatingWhatsApp;
