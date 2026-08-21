import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import QuickContactPepro from "@/components/contact/QuickContactPepro";
import FaqV1 from "@/components/faq/FaqV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata: Metadata = {
  title: "Pepro - Foire Aux Questions",
  description:
    "Trouvez les réponses à vos questions fréquentes sur les services de Pepro, nos processus de développement et notre expertise.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <LayoutV1>
      <Breadcrumb title="Questions Fréquentes" breadCrumb="FAQ" />
      <FaqV1 sectionClass="bg-gray default-padding-bottom" />
      <QuickContactPepro />
      <ThemeDark />
    </LayoutV1>
  );
}
