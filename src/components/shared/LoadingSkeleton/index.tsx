export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-brandGray rounded-2xl h-64"></div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-brandGray p-4 md:p-5 rounded-2xl animate-pulse">
      <div className="w-full h-48 bg-brandGraySecondary rounded-xl mb-4"></div>
      <div className="h-4 bg-brandGraySecondary rounded mb-2"></div>
      <div className="h-4 bg-brandGraySecondary rounded w-3/4"></div>
      <div className="h-6 bg-brandGraySecondary rounded w-1/2 mt-4"></div>
    </div>
  );
}

