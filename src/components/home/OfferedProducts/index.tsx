import React, { useState } from "react";
import CategoryNavigation from "./CategoryNavigation";
import Products from "./Products";
import type { OfferedProductsProps, Product } from "@/src/types";

export default function OfferedProducts({ data }: OfferedProductsProps) {
  const categories = ["Hamısı", ...data.map((cat) => cat.title)];
  const [selected, setSelected] = useState<string>("Hamısı");

  const displayedProducts: Product[] =
    selected === "Hamısı"
      ? data.flatMap((cat) => cat.products)
      : data.find((cat) => cat.title === selected)?.products || [];

  return (
    <div className="my-5 md:my-24" data-products-section>
      <CategoryNavigation
        categories={categories}
        selected={selected}
        onSelect={setSelected}
      />
      <Products products={displayedProducts} />
    </div>
  );
}
