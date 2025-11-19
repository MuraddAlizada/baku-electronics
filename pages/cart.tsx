import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { useCart } from "@/src/context/CartContext";
import { IoTrashOutline } from "react-icons/io5";

export default function Cart() {
  const router = useRouter();
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.discounted_price * (item.quantity || 1),
    0
  );

  const totalOriginalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || item.discounted_price) * (item.quantity || 1),
    0
  );

  const totalDiscount = totalOriginalPrice - totalPrice;

  return (
    <>
      <Head>
        <title>Səbət - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-3xl font-bold text-brandGrayText mb-6">
              Səbət
            </h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-brandGrayText opacity-70 text-lg mb-4">
                  Səbətiniz boşdur
                </p>
                <button
                  onClick={() => router.push("/")}
                  className="bg-brandBtn text-white px-6 py-3 rounded-full hover:brightness-110 transition"
                >
                  Alış-verişə başla
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Products List */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-brandGray p-4 md:p-6 rounded-2xl flex flex-col md:flex-row gap-4"
                    >
                      <div className="relative w-full md:w-32 h-32 md:h-32 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>

                      <div className="flex-1 w-full">
                        <h3 className="text-lg font-semibold text-brandGrayText mb-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-brandToggle font-bold text-xl">
                            {item.discounted_price}₼
                          </span>
                          {item.discount && (
                            <span className="text-brandGrayText line-through opacity-50">
                              {item.price}₼
                            </span>
                          )}
                        </div>
                        {item.perMonth && (
                          <p className="text-sm text-brandGrayText opacity-70 mb-4">
                            {item.perMonth.month} ay x {item.perMonth.price}₼
                          </p>
                        )}
                        
                        <div className="flex items-center gap-4 mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateCartItemQuantity(item.id, (item.quantity || 1) - 1)}
                              className="w-10 h-10 rounded-lg bg-brandGraySecondary flex items-center justify-center hover:bg-brandGray transition font-semibold text-brandGrayText cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="w-12 text-center font-semibold text-brandGrayText">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => updateCartItemQuantity(item.id, (item.quantity || 1) + 1)}
                              className="w-10 h-10 rounded-lg bg-brandGraySecondary flex items-center justify-center hover:bg-brandGray transition font-semibold text-brandGrayText cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition cursor-pointer"
                            aria-label="Remove from cart"
                          >
                            <IoTrashOutline className="text-2xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-brandGray p-6 rounded-2xl sticky top-4">
                    <h2 className="text-xl font-semibold text-brandGrayText mb-6">
                      Sifariş məlumatları
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-brandGrayText opacity-70">
                          Məhsul sayı:
                        </span>
                        <span className="text-brandGrayText font-semibold">
                          {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-brandGrayText opacity-70">
                          Endirimsiz qiymət:
                        </span>
                        <span className="text-brandGrayText font-semibold">
                          {totalOriginalPrice.toFixed(2)}₼
                        </span>
                      </div>
                      {totalDiscount > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-brandGrayText opacity-70">
                            Endirim:
                          </span>
                          <span className="text-green-500 font-semibold">
                            -{totalDiscount.toFixed(2)}₼
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-brandGrayText opacity-70">
                          Çatdırılma:
                        </span>
                        <span className="text-brandGrayText font-semibold">
                          {totalPrice >= 50 ? "Pulsuz" : "5₼"}
                        </span>
                      </div>
                      <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-semibold text-brandGrayText">
                            Ümumi məbləğ:
                          </span>
                          <span className="text-2xl font-bold text-brandToggle">
                            {(totalPrice + (totalPrice >= 50 ? 0 : 5)).toFixed(2)}₼
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => router.push("/checkout")}
                      className="w-full bg-brandBtn text-white py-4 rounded-xl font-semibold hover:brightness-110 transition mb-4 cursor-pointer"
                    >
                      Sifarişi tamamla
                    </button>
                    
                    <button
                      onClick={() => router.push("/")}
                      className="w-full bg-brandGraySecondary text-brandGrayText py-3 rounded-xl font-semibold hover:bg-brandGray transition cursor-pointer"
                    >
                      Alış-verişə davam et
                    </button>
                  </div>
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

