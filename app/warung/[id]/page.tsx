import DetailWarungClient from "./DetailWarungClient";

// 1. Static params hanya dieksekusi di Server Component
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

export default async function DetailWarungWebPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <DetailWarungClient id={id} />;
}
