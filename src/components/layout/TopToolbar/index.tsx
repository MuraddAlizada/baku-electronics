
// Modified TopToolBar component
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { TbLayoutGrid } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { cities } from "@/src/shared/mock/cities";
import { mockData } from "@/src/shared/mock/MockItems";
import { useCart } from "@/src/context/CartContext";
import { TopToolBarProps } from "@/src/types";
import type { Product } from "@/src/types";

function TopToolBar({ isFixed = false }: TopToolBarProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bakı");
  const { cartCount, favoritesCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Get all products for search
  const allProducts: Product[] = mockData.flatMap((cat) => cat.products);
  
  // Get categories for catalog
  const categories = mockData.map((cat) => cat.title);

  // Filter products based on search query
  const filteredProducts = searchQuery.trim()
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        setCatalogOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  const handleCatalogClick = () => {
    setCatalogOpen((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSearchOpen(true);
  };

  const handleProductClick = () => {
    // Scroll to products section or navigate to product page
    const productsSection = document.querySelector('[data-products-section]');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setSearchOpen(false);
    setSearchQuery("");
  };

  const icons = [
    { id: "compare", src: "scales.png", alt: "scale icon", count: 0 },
    { id: "cart", src: "Buy.png", alt: "buy icon", count: cartCount },
    { id: "heart", src: "Heart.png", alt: "heart icon", count: favoritesCount },
    { id: "user", src: "user.png", alt: "user icon", count: 0 },
  ];

  return (
    <div className={`${isFixed ? 'py-2' : 'my-5'} flex items-center gap-3 sm:gap-4 justify-between flex-wrap relative`}>
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/img/logo-be.png"
            width={80}
            height={80}
            quality={100}
            alt="logo Baku Electronics"
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
            priority
          />
        </div>

        {/* Kataloq Button */}
        <div className="relative" ref={catalogRef}>
          <div
            onClick={handleCatalogClick}
            className="bg-brandBtn py-2 px-3 sm:py-3 sm:px-5 rounded-full flex items-center gap-1 sm:gap-2 text-white text-sm sm:text-base font-sfpro font-semibold hover:brightness-110 transition flex-shrink-0 cursor-pointer"
          >
            <TbLayoutGrid className="text-lg sm:text-xl" />
            <span>Kataloq</span>
          </div>

          {catalogOpen && (
            <ul className="absolute z-30 top-full left-0 mt-2 bg-brandGray border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn min-w-[200px]">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => {
                    const productsSection = document.querySelector('[data-products-section]');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setCatalogOpen(false);
                  }}
                  className="px-4 py-3 text-sm text-brandGrayText opacity-70 hover:bg-brandGraySecondary cursor-pointer transition"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Search Input */}
      <div className="flex-1 min-w-[100px] sm:min-w-[150px] relative" ref={searchRef}>
        <div
          className="bg-brandGray transition hover:bg-brandGraySecondary py-2 sm:py-3 px-3 sm:px-4 rounded-xl flex items-center"
          onClick={() => searchInputRef.current?.focus()}
        >
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Məhsul axtar..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setSearchOpen(true)}
            className="bg-transparent flex-1 outline-none text-sm placeholder-placeholderText opacity-50"
          />
          <FiSearch className="text-placeholderText opacity-50 text-base sm:text-lg" />
        </div>

        {searchOpen && (
          <ul className="absolute z-20 w-full bg-brandGray border border-gray-200 mt-2 rounded-xl shadow-lg animate-fadeIn max-h-[400px] overflow-y-auto">
            {searchQuery.trim() && filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 10).map((product) => (
                <li
                  key={product.id}
                  onClick={handleProductClick}
                  className="px-4 py-3 flex items-center justify-between rounded-xl gap-4 hover:bg-brandGraySecondary cursor-pointer transition"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain rounded"
                      />
                    </div>
                    <span className="text-sm text-brandGrayText opacity-70 truncate">
                      {product.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-brandToggle flex-shrink-0">
                    {product.discounted_price}₼
                  </span>
                </li>
              ))
            ) : searchQuery.trim() ? (
              <li className="px-4 py-3 text-sm text-brandGrayText opacity-50 text-center">
                Məhsul tapılmadı
              </li>
            ) : (
              <li className="px-4 py-3 text-sm text-brandGrayText opacity-50 text-center">
                Məhsul adı yazın...
              </li>
            )}
          </ul>
        )}
      </div>

      {/* City Dropdown */}
      <div className="hidden md:block relative max-w-2xs w-full">
        <div
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="bg-brandGray py-3 px-4 rounded-xl flex items-center justify-between cursor-pointer transition hover:bg-brandGraySecondary"
        >
          <span className="text-sm text-brandGrayText opacity-50 font-medium">
            {selectedCity}
          </span>
          {dropdownOpen ? (
            <IoIosArrowUp className="text-lg text-placeholderText opacity-70" />
          ) : (
            <IoIosArrowDown className="text-lg text-placeholderText opacity-70" />
          )}
        </div>

        {dropdownOpen && (
          <ul className="absolute z-10 w-full bg-brandGray border border-gray-200 mt-2 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
            {cities
              .filter((city) => city !== selectedCity)
              .map((city) => (
                <li
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="px-4 py-3 text-sm text-placeholderText opacity-50 hover:bg-brandGraySecondary cursor-pointer transition"
                >
                  {city}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Icons */}
      {icons.map((icon) => {
        const handleClick = () => {
          if (icon.id === "cart") {
            router.push("/cart");
          } else if (icon.id === "heart") {
            router.push("/wishlist");
          }
          // Other icons can have their own handlers
        };

        return (
          <div
            key={icon.id}
            onClick={handleClick}
            className="relative hidden md:flex p-3 bg-brandGray rounded-xl items-center gap-2 hover:bg-brandGraySecondary transition cursor-pointer"
          >
            <Image
              src={`/assets/img/icons/${icon.src}`}
              width={24}
              height={24}
              alt={icon.alt}
              className="object-contain icon-dark-mode w-6 h-6"
              unoptimized
            />

            {icon.count > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {icon.count}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TopToolBar;