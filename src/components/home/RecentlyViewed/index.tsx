import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import type { Product } from "@/src/types";

export default function RecentlyViewed() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    setProducts(viewed.slice(0, 6));
  }, []);

  if (products.length === 0) return null;

  return (
    <div className="my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-brandGrayText mb-6">
        Son baxılan məhsullar
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => router.push(`/products/${product.slug}`)}
            className="bg-brandGray p-4 rounded-2xl cursor-pointer hover:shadow-lg transition"
          >
            <div className="relative w-full h-32 mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <h3 className="text-xs font-semibold text-brandGrayText mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-brandToggle font-bold text-sm">
                {product.discounted_price.toFixed(2)}₼
              </span>
              {product.discount && (
                <span className="text-xs text-brandGrayText line-through opacity-50">
                  {product.price.toFixed(2)}₼
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



