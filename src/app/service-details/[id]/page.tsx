import { permanentRedirect } from "next/navigation";
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json";

export function generateStaticParams() {
  return ServicesV1Data.map((service) => ({
    id: String(service.id),
  }));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  permanentRedirect(`/services/${id}`);
}
