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
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.discounted_price,
    0
  );

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
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-brandGray p-4 md:p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center"
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
                        <p className="text-sm text-brandGrayText opacity-70">
                          {item.perMonth.month} ay x {item.perMonth.price}₼
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition"
                      aria-label="Remove from cart"
                    >
                      <IoTrashOutline className="text-2xl" />
                    </button>
                  </div>
                ))}

                <div className="bg-brandGray p-6 rounded-2xl mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold text-brandGrayText">
                      Ümumi:
                    </span>
                    <span className="text-2xl font-bold text-brandToggle">
                      {totalPrice}₼
                    </span>
                  </div>
                  <button
                    className="w-full bg-brandBtn text-white py-4 rounded-xl font-semibold hover:brightness-110 transition"
                  >
                    Sifarişi tamamla
                  </button>
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

