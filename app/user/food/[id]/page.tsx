import { Suspense } from "react";
import FoodDetailWrapper from "@/components/sections/mobile/detail/FoodDetailWrapper";

// Sub-komponen server untuk meng-await params di dalam batas Suspense
async function FoodDetailContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ id: string }>;
}) {
  const { id } = await paramsPromise;
  return <FoodDetailWrapper id={id} />;
}

// Fallback visual saat proses streaming/prerendering
function FoodDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] p-6 flex flex-col justify-center items-center">
      <div className="w-10 h-10 border-4 border-[#0A3A33] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function FoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<FoodDetailSkeleton />}>
      <FoodDetailContent paramsPromise={params} />
    </Suspense>
  );
}
