import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { useCart } from "@/src/context/CartContext";
import { mockData } from "@/src/shared/mock/MockItems";
import type { Product } from "@/src/types";
import { FiShare2, FiHeart } from "react-icons/fi";
import { IoStar, IoChevronBack } from "react-icons/io5";
import Breadcrumb from "@/src/components/shared/Breadcrumb";

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart, addToFavorites, cartItems, favoriteItems } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (slug) {
      const allProducts = mockData.flatMap((cat) => cat.products);
      const foundProduct = allProducts.find((p) => p.slug === slug);
      setProduct(foundProduct || null);

      // Son baxılan məhsullara əlavə et
      if (foundProduct) {
        const viewed = JSON.parse(
          localStorage.getItem("recentlyViewed") || "[]"
        );
        const filtered = viewed.filter((p: Product) => p.id !== foundProduct.id);
        const updated = [foundProduct, ...filtered].slice(0, 10);
        localStorage.setItem("recentlyViewed", JSON.stringify(updated));
      }
    }
  }, [slug]);

  if (!product) {
    return (
      <>
        <Head>
          <title>Məhsul tapılmadı - Baku Electronics</title>
        </Head>
        <Container>
          <Header />
          <NavBar />
          <div className="my-16 text-center">
            <p className="text-brandGrayText text-xl mb-4">
              Məhsul tapılmadı
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-brandBtn text-white px-6 py-3 rounded-full hover:brightness-110 transition"
            >
              Ana səhifəyə qayıt
            </button>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInFavorites = favoriteItems.some((item) => item.id === product.id);
  const images = [product.image, product.image, product.image]; // Mock çoxlu şəkil

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `${product.name} - ${product.discounted_price}₼`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link kopyalandı!");
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert("Məhsul səbətə əlavə olundu!");
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
  };

  // Oxşar məhsullar
  const relatedProducts = mockData
    .flatMap((cat) => cat.products)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Head>
        <title>{product.name} - Baku Electronics</title>
        <meta name="description" content={product.name} />
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />

          <Breadcrumb
            items={[
              { label: "Ana səhifə", href: "/" },
              { label: "Məhsullar", href: "/" },
              { label: product.name },
            ]}
          />

          <div className="my-8 md:my-16">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-brandGrayText opacity-70 hover:opacity-100 mb-6 transition"
            >
              <IoChevronBack />
              Geri
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Şəkillər */}
              <div className="space-y-4">
                <div className="relative w-full h-[400px] md:h-[500px] bg-brandGray rounded-2xl overflow-hidden">
                  <Image
                    src={images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-xl">
                      -{product.discount}
                    </div>
                  )}
                </div>
                <div className="flex gap-3 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-brandGray rounded-xl overflow-hidden border-2 transition ${
                        selectedImage === idx
                          ? "border-brandToggle"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Məhsul məlumatları */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-brandGrayText mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <IoStar
                          key={i}
                          className={`${
                            i < Math.floor(product.rate)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                          size={20}
                        />
                      ))}
                      <span className="ml-2 text-brandGrayText">
                        {product.rate.toFixed(1)} ({product.reviewCount} rəy)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-brandGray p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-brandToggle">
                      {product.discounted_price.toFixed(2)}₼
                    </span>
                    {product.discount && (
                      <>
                        <span className="text-xl text-brandGrayText line-through opacity-50">
                          {product.price.toFixed(2)}₼
                        </span>
                        <span className="bg-red-500/10 text-red-500 text-sm font-bold px-2 py-1 rounded">
                          -{product.discount}
                        </span>
                      </>
                    )}
                  </div>
                  {product.perMonth && (
                    <p className="text-brandGrayText opacity-70">
                      {product.perMonth.month} ay x {product.perMonth.price.toFixed(2)}₼
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-brandGrayText font-medium">Miqdar:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg bg-brandGray flex items-center justify-center hover:bg-brandGraySecondary transition"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg bg-brandGray flex items-center justify-center hover:bg-brandGraySecondary transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 py-4 rounded-xl font-semibold transition ${
                        isInCart
                          ? "bg-brandRed text-white"
                          : "bg-brandBtn text-white hover:brightness-110"
                      }`}
                    >
                      {isInCart ? "Səbətdə var" : "Səbətə əlavə et"}
                    </button>
                    <button
                      onClick={handleAddToFavorites}
                      className={`p-4 rounded-xl transition ${
                        isInFavorites
                          ? "bg-brandRed text-white"
                          : "bg-brandGray hover:bg-brandGraySecondary"
                      }`}
                    >
                      <FiHeart
                        className={isInFavorites ? "fill-current" : ""}
                        size={24}
                      />
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-4 rounded-xl bg-brandGray hover:bg-brandGraySecondary transition"
                    >
                      <FiShare2 size={24} />
                    </button>
                  </div>
                </div>

                <div className="bg-brandGray p-6 rounded-2xl">
                  <h3 className="font-semibold text-brandGrayText mb-3">
                    Məhsul haqqında
                  </h3>
                  <ul className="space-y-2 text-brandGrayText opacity-70">
                    <li>• Məhsul kodu: {product.product_code}</li>
                    <li>• Stokda: {product.quantity} ədəd</li>
                    <li>• Onlayn satış: {product.is_online ? "Bəli" : "Xeyr"}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Oxşar məhsullar */}
            {relatedProducts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-brandGrayText mb-6">
                  Oxşar məhsullar
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {relatedProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => router.push(`/products/${item.slug}`)}
                      className="bg-brandGray p-4 rounded-2xl cursor-pointer hover:shadow-lg transition"
                    >
                      <div className="relative w-full h-32 mb-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain rounded-xl"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-brandGrayText mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-brandToggle font-bold">
                          {item.discounted_price.toFixed(2)}₼
                        </span>
                        {item.discount && (
                          <span className="text-xs text-brandGrayText line-through opacity-50">
                            {item.price.toFixed(2)}₼
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}


