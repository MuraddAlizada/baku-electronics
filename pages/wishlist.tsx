import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { useCart } from "@/src/context/CartContext";
import { IoTrashOutline, IoHeart } from "react-icons/io5";

export default function Wishlist() {
  const router = useRouter();
  const { favoriteItems, removeFromFavorites, addToCart } = useCart();

  return (
    <>
      <Head>
        <title>İstəklər siyahısı - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-3xl font-bold text-brandGrayText mb-6">
              İstəklər siyahısı
            </h1>

            {favoriteItems.length === 0 ? (
              <div className="text-center py-12">
                <IoHeart className="text-6xl text-brandGrayText opacity-30 mx-auto mb-4" />
                <p className="text-brandGrayText opacity-70 text-lg mb-4">
                  İstəklər siyahınız boşdur
                </p>
                <button
                  onClick={() => router.push("/")}
                  className="bg-brandBtn text-white px-6 py-3 rounded-full hover:brightness-110 transition"
                >
                  Alış-verişə başla
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-brandGray p-4 md:p-5 rounded-2xl relative"
                  >
                    <div className="relative w-full h-48 md:h-64 mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                      {item.discount && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-xl">
                          -{item.discount}%
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-brandGrayText mb-2 line-clamp-2">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-brandToggle font-bold text-xl">
                        {item.discounted_price}₼
                      </span>
                      {item.discount && (
                        <span className="text-brandGrayText line-through opacity-50 text-sm">
                          {item.price}₼
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          addToCart(item);
                          router.push("/cart");
                        }}
                        className="flex-1 bg-brandBtn text-white py-2 px-4 rounded-xl font-semibold hover:brightness-110 transition text-sm"
                      >
                        Səbətə əlavə et
                      </button>
                      <button
                        onClick={() => removeFromFavorites(item.id)}
                        className="p-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition"
                        aria-label="Remove from favorites"
                      >
                        <IoTrashOutline className="text-xl" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

