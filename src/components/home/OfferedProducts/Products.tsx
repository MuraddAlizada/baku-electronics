// Products.tsx - Updated component
import { useCart } from "@/src/context/CartContext";
import { ProductsProps } from "@/src/types";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import CustomToast from "../../layout/CustomToast";
import { ProductCardSkeleton } from "@/src/components/shared/LoadingSkeleton";

export default function Products({ products }: ProductsProps) {
  const router = useRouter();
  const PAGE_SIZE = 8;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const [toast, setToast] = useState<{
    show: boolean;
    product: { image: string; name: string } | null;
    message: string;
    linkHref: string;
  }>({ show: false, product: null, message: "", linkHref: "" });

  const { addToCart, addToFavorites, cartItems, favoriteItems } = useCart();

  const [addedToCart, setAddedToCart] = useState<Set<string | number>>(() => 
    new Set(cartItems?.map(item => item.id) || [])
  );
  const [addedToFavorites, setAddedToFavorites] = useState<Set<string | number>>(() => 
    new Set(favoriteItems?.map(item => item.id) || [])
  );
  const itemsToRender = products.slice(0, visibleCount);

  useEffect(() => {
    setAddedToCart(new Set(cartItems?.map(item => item.id) || []));
  }, [cartItems]);

  useEffect(() => {
    setAddedToFavorites(new Set(favoriteItems?.map(item => item.id) || []));
  }, [favoriteItems]);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !loading &&
          visibleCount < products.length
        ) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + PAGE_SIZE, products.length)
            );
            setLoading(false);
          }, 800);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading, visibleCount, products.length]);

  if (products.length === 0) {
    return (
      <p className="text-center py-10">Bu kateqoriya üzrə məhsul tapılmadı.</p>
    );
  }

  const handleAddToCart = (item: (typeof products)[number]) => {
    addToCart(item);
    setToast({
      show: true,
      product: { image: item.image, name: item.name },
      message: "Məhsul səbətə əlavə olundu",
      linkHref: "/cart",
    });
  };

  const handleAddToFavorites = (item: (typeof products)[number]) => {
    addToFavorites(item);
    setToast({
      show: true,
      product: { image: item.image, name: item.name },
      message: "Məhsul favorilər siyahısına əlavə olundu",
      linkHref: "/",
    });
  };

  return (
    <>
      <CustomToast
        show={toast.show}
        onClose={() => setToast((t) => ({ ...t, show: false }))}
        product={toast.product!}
        message={toast.message}
        linkHref={toast.linkHref}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {loading && itemsToRender.length === 0 ? (
          <>
            {[...Array(8)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </>
        ) : (
          itemsToRender.map((item) => {
          const isInCart = addedToCart.has(item.id);
          const isInFavorites = addedToFavorites.has(item.id);

          return (
            <div
              key={item.id}
              className="bg-brandGray mt-5 md:mt-10 p-2 md:p-5 rounded-3xl relative pt-5 md:pt-[30px] cursor-pointer"
              onClick={(e) => {
                // Prevent navigation if clicking on buttons
                if ((e.target as HTMLElement).closest('button')) {
                  return;
                }
                router.push(`/products/${item.slug}`);
              }}
            >
              {/* Image */}
              <div className="absolute -top-[15px] md:-top-[30px] left-0 right-0 px-3 md:px-5">
                <div className="relative w-full h-[140px] md:h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="rounded-3xl border border-gray-200 dark:border-gray-700 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded-xl">
                    -{item.discount}
                  </div>
                  <div className="absolute top-2 right-2 bg-background shadow-md text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded-xl">
                    <Image
                      src="/assets/img/icons/scales.png"
                      alt="Reviews"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Rating & reviews */}
              <div className="flex gap-2 items-center pt-2 mt-[125px] md:mt-[250px] text-[10px] md:text-xs text-brandGrayText">
                <span className="flex items-center gap-1">
                  <Image
                    src="/assets/img/icons/Star.png"
                    alt="Rating"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    unoptimized
                  />
                  {item.rate.toFixed(1)}
                </span>
                <span className="flex items-center gap-1">
                  <Image
                    src="/assets/img/icons/Chat.png"
                    alt="Reviews"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    unoptimized
                  />
                  {item?.reviewCount} Rəy
                </span>
              </div>

              {/* Title */}
              <h4 className="text-xs md:text-sm text-brandGrayText pt-2 pb-3 md:pb-6 line-clamp-1">
                {item?.name}
              </h4>

              {/* Prices */}
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-sm opacity-50 line-through">
                    {item?.price?.toFixed(2)} ₼
                  </span>
                  <span className="text-xs md:text-lg font-semibold">
                    {item?.discounted_price?.toFixed(2)} ₼
                  </span>
                </div>
                {item.perMonth && (
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-sm opacity-50">
                      {item?.perMonth?.month} ay
                    </span>
                    <span className="text-xs md:text-lg font-semibold">
                      {item?.perMonth?.price?.toFixed(2)} ₼
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="pt-3 md:pt-6 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => handleAddToCart(item)}
                  className={`group py-1.5 md:py-2.5 cursor-pointer px-2 md:px-4 rounded-xl md:rounded-2xl w-[80%] flex items-center justify-center gap-2 transition-colors duration-300 ${
                    isInCart 
                      ? 'bg-brandRed text-white' 
                      : 'bg-brandGraySecondary hover:bg-brandRed hover:text-white'
                  }`}
                >
                  <div className="relative w-3 h-3 md:w-4 md:h-4 flex-shrink-0">
                    <Image
                      src={"/assets/img/icons/Buy.png"}
                      alt="Add to cart"
                      fill
                      sizes="16px"
                      className={`icon-dark-mode ${
                        isInCart 
                          ? 'brightness-0 invert' 
                          : 'group-hover:brightness-0 group-hover:invert'
                      }`}
                    />
                  </div>
                  <span className="text-[9px] md:text-xs whitespace-nowrap">{isInCart ? 'Səbətdədir' : 'Səbətə əlavə et'}</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToFavorites(item);
                  }}
                  className={`group cursor-pointer py-2 md:py-3 px-2 md:px-4 text-center rounded-xl md:rounded-2xl w-[20%] flex items-center justify-center transition-colors duration-300 ${
                    isInFavorites 
                      ? 'bg-brandRed' 
                      : 'bg-brandGraySecondary hover:bg-brandRed'
                  }`}
                >
                  <div className="relative w-4 h-4 md:w-5 md:h-5">
                    <Image
                      src={"/assets/img/icons/Heart.png"}
                      alt="Favorite"
                      fill
                      sizes="20px"
                      className={`object-contain icon-dark-mode ${
                        isInFavorites 
                          ? 'brightness-0 invert' 
                          : 'group-hover:brightness-0 group-hover:invert'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          );
        }))}
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="flex justify-center py-6">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brandToggle"></div>
        </div>
      )}

      <div ref={loaderRef} />
    </>
  );
}