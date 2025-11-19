import React, { useState, useMemo } from "react";
import CategoryNavigation from "./CategoryNavigation";
import Products from "./Products";
import type { OfferedProductsProps, Product } from "@/src/types";
import { IoIosArrowDown } from "react-icons/io";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export default function OfferedProducts({ data }: OfferedProductsProps) {
  const categories = ["Hamısı", ...data.map((cat) => cat.title)];
  const [selected, setSelected] = useState<string>("Hamısı");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const displayedProducts: Product[] = useMemo(() => {
    let products: Product[] =
      selected === "Hamısı"
        ? data.flatMap((cat) => cat.products)
        : data.find((cat) => cat.title === selected)?.products || [];

    // Sort products
    switch (sortBy) {
      case "price-asc":
        products = [...products].sort((a, b) => a.discounted_price - b.discounted_price);
        break;
      case "price-desc":
        products = [...products].sort((a, b) => b.discounted_price - a.discounted_price);
        break;
      case "name-asc":
        products = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        products = [...products].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return products;
  }, [selected, sortBy, data]);

  const sortOptions = [
    { value: "default", label: "Standart" },
    { value: "price-asc", label: "Qiymət: Aşağıdan yuxarıya" },
    { value: "price-desc", label: "Qiymət: Yuxarıdan aşağıya" },
    { value: "name-asc", label: "Ad: A-Z" },
    { value: "name-desc", label: "Ad: Z-A" },
  ];

  return (
    <div className="my-5 md:my-24" data-products-section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <CategoryNavigation
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />
        
        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center gap-2 bg-brandGray px-4 py-2 rounded-xl text-sm text-brandGrayText hover:bg-brandGraySecondary transition"
          >
            <span>Sırala: {sortOptions.find(opt => opt.value === sortBy)?.label}</span>
            <IoIosArrowDown className={`transition-transform ${showSortMenu ? 'rotate-180' : ''}`} />
          </button>
          
          {showSortMenu && (
            <div className="absolute right-0 top-full mt-2 bg-brandGray border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-10 min-w-[200px]">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value as SortOption);
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm text-brandGrayText hover:bg-brandGraySecondary transition ${
                    sortBy === option.value ? 'bg-brandGraySecondary font-semibold' : ''
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Products products={displayedProducts} />
    </div>
  );
}
