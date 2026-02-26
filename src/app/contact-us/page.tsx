import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ContactV1 from "@/components/contact/ContactV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata: Metadata = {
  title: "Pepro - Contactez-Nous",
  description:
    "Prêt à discuter de votre projet ? Contactez Pepro par formulaire, email ou téléphone.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <LayoutV1>
      <Breadcrumb title="Contactez-nous" breadCrumb="contact" />
      <ContactV1 />
      <ThemeDark />
    </LayoutV1>
  );
}
