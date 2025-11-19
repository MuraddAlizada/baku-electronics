import React from "react";
import { CategoryNavigationProps } from "@/src/types";

export default function CategoryNavigation({
  categories,
  selected,
  onSelect,
}: CategoryNavigationProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between items-center pb-14">
      <div className="flex flex-col gap-1">
        <h4 className="text-brandRed text-sm font-normal">Özəl təkliflər</h4>
        <h5 className="text-placeholderText dark:text-brandGrayText text-xl md:text-2xl font-semibold">
          Payız gəldi, şərtlər daha da sadələşdi
        </h5>
      </div>

      <div className="w-full md:w-fit bg-brandGray cursor-pointer py-3 px-6 rounded-3xl flex items-center gap-7 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`text-xs md:text-sm font-semibold ${
              cat === selected
                ? "text-brandGrayText"
                : "text-placeholderText opacity-50 hover:opacity-100 cursor-pointer"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
