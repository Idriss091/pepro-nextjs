import { MessageCircle } from "lucide-react";
import { SITE_PHONE } from "@/lib/site";
import styles from "./FloatingWhatsApp.module.css";

const message = "Bonjour, je souhaite échanger avec un conseiller Pepro au sujet de mon projet.";

export default function FloatingWhatsApp() {
  const phone = SITE_PHONE.replace(/\D/g, "");
  return <a className={styles.link} href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label="Contacter Pepro sur WhatsApp"><span aria-hidden="true"/><MessageCircle aria-hidden="true"/></a>;
}
