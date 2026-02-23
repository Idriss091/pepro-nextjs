import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ThemeDark from "@/components/switcher/ThemeDark";
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json";

// Pré-génération statique de toutes les pages service au build
export function generateStaticParams() {
  return ServicesV1Data.map((service) => ({
    id: String(service.id),
  }));
}

// Métadonnées dynamiques par service
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = ServicesV1Data.find((s) => s.id === parseInt(id));
  return {
    title: service ? `Pepro - ${service.title}` : "Pepro - Détails du Service",
    description: service?.shortDescription ?? "Découvrez nos services Pepro.",
    alternates: {
      canonical: `/services/${id}`,
    },
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = ServicesV1Data.find((s) => s.id === parseInt(id));

  if (!data) notFound();

  return (
    <LayoutV1>
      <Breadcrumb title={data.title} breadCrumb={data.title} />
      <ServiceDetailsContent
        serviceInfo={data}
        sectionClass="default-padding-bottom"
      />
      <ThemeDark />
    </LayoutV1>
  );
}
