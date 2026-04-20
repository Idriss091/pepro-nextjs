import { permanentRedirect } from "next/navigation";
import { getServiceByIdentifier, getServicePath, services } from "@/data/services";

export function generateStaticParams() {
  return services.flatMap((service) => [
    { id: String(service.id) },
    { id: service.slug },
  ]);
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceByIdentifier(id);

  permanentRedirect(service ? getServicePath(service) : "/services");
}
