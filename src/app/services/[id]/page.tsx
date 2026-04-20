import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ThemeDark from "@/components/switcher/ThemeDark";
import {
  getServiceByIdentifier,
  getServicePath,
  isCanonicalServiceIdentifier,
  services,
} from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceByIdentifier(id);

  return {
    title: service ? `Pepro - ${service.title}` : "Pepro - Détails du Service",
    description: service?.shortDescription ?? "Découvrez nos services Pepro.",
    alternates: {
      canonical: service ? getServicePath(service) : `/services/${id}`,
    },
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = getServiceByIdentifier(id);

  if (!data) notFound();
  if (!isCanonicalServiceIdentifier(id, data)) {
    permanentRedirect(getServicePath(data));
  }

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
