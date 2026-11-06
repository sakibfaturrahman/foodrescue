import FoodDetailWrapper from "@/components/sections/mobile/detail/FoodDetailWrapper";

export default async function FoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <FoodDetailWrapper id={id} />;
}
