import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/shared/Breadcrumb";
import { useCart } from "@/src/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/router";
import { FiMapPin, FiPhone, FiCreditCard } from "react-icons/fi";

export default function Checkout() {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    paymentMethod: "cash",
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.discounted_price * (item.quantity || 1),
    0
  );
  const deliveryPrice = totalPrice >= 50 ? 0 : 5;
  const finalTotal = totalPrice + deliveryPrice;

  if (cartItems.length === 0) {
    return (
      <>
        <Head>
          <title>Sifariş - Baku Electronics</title>
        </Head>
        <main>
          <Container>
            <Header />
            <NavBar />
            <div className="my-16 text-center">
              <p className="text-brandGrayText text-xl mb-4">
                Səbətiniz boşdur
              </p>
              <button
                onClick={() => router.push("/")}
                className="bg-brandBtn text-white px-6 py-3 rounded-full hover:brightness-110 transition"
              >
                Alış-verişə başla
              </button>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Generate order number
      const orderNum = `ORD-${Date.now()}`;
      // Clear cart
      clearCart();
      // Navigate to home page with order success state
      router.push({
        pathname: "/",
        query: { orderSuccess: "true", orderNumber: orderNum },
      });
    }
  };

  return (
    <>
      <Head>
        <title>Sifariş - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <Breadcrumb
            items={[
              { label: "Ana səhifə", href: "/" },
              { label: "Səbət", href: "/cart" },
              { label: "Sifariş" },
            ]}
          />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8">
              Sifarişi tamamla
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Form */}
              <div className="lg:col-span-2">
                <div className="bg-brandGray p-6 rounded-2xl">
                  {/* Steps */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`flex items-center gap-2 ${step >= 1 ? 'text-brandToggle' : 'text-brandGrayText opacity-50'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-brandToggle text-white' : 'bg-brandGraySecondary'}`}>
                        1
                      </div>
                      <span className="font-semibold">Ünvan</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <div className={`flex items-center gap-2 ${step >= 2 ? 'text-brandToggle' : 'text-brandGrayText opacity-50'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-brandToggle text-white' : 'bg-brandGraySecondary'}`}>
                        2
                      </div>
                      <span className="font-semibold">Ödəniş</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 ? (
                      <>
                        <div>
                          <label className="block text-brandGrayText mb-2 font-medium">
                            Ad və Soyad <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBtn text-brandGrayText"
                            placeholder="Ad və soyadınızı daxil edin"
                          />
                        </div>

                        <div>
                          <label className="block text-brandGrayText mb-2 font-medium">
                            Telefon <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBtn text-brandGrayText"
                            placeholder="+994 XX XXX XX XX"
                          />
                        </div>

                        <div>
                          <label className="block text-brandGrayText mb-2 font-medium">
                            E-poçt
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBtn text-brandGrayText"
                            placeholder="example@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-brandGrayText mb-2 font-medium">
                            Şəhər <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBtn text-brandGrayText"
                          >
                            <option value="">Seçin</option>
                            <option value="baku">Bakı</option>
                            <option value="ganja">Gəncə</option>
                            <option value="sumgait">Sumqayıt</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-brandGrayText mb-2 font-medium">
                            Ünvan <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                            required
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBtn text-brandGrayText"
                            placeholder="Küçə, ev, mənzil nömrəsi"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="block text-brandGrayText mb-4 font-medium">
                            Ödəniş üsulu <span className="text-red-500">*</span>
                          </label>
                          <div className="space-y-3">
                            <label className="flex items-center gap-3 p-4 bg-background rounded-xl cursor-pointer hover:bg-brandGraySecondary transition">
                              <input
                                type="radio"
                                name="payment"
                                value="cash"
                                checked={formData.paymentMethod === "cash"}
                                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                                className="w-5 h-5"
                              />
                              <FiCreditCard className="text-xl text-brandToggle" />
                              <span className="text-brandGrayText font-medium">Nağd ödəniş</span>
                            </label>
                            <label className="flex items-center gap-3 p-4 bg-background rounded-xl cursor-pointer hover:bg-brandGraySecondary transition">
                              <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={formData.paymentMethod === "card"}
                                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                                className="w-5 h-5"
                              />
                              <FiCreditCard className="text-xl text-brandToggle" />
                              <span className="text-brandGrayText font-medium">Kartla ödəniş</span>
                            </label>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex gap-4">
                      {step === 2 && (
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 bg-brandGraySecondary text-brandGrayText py-3 rounded-xl font-semibold hover:bg-brandGray transition cursor-pointer"
                        >
                          Geri
                        </button>
                      )}
                      <button
                        type="submit"
                        className="flex-1 bg-brandBtn text-white py-3 rounded-xl font-semibold hover:brightness-110 transition cursor-pointer"
                      >
                        {step === 1 ? "Növbəti" : "Sifarişi təsdiqlə"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right: Summary */}
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
                        Məhsullar:
                      </span>
                      <span className="text-brandGrayText font-semibold">
                        {totalPrice.toFixed(2)}₼
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brandGrayText opacity-70">
                        Çatdırılma:
                      </span>
                      <span className="text-brandGrayText font-semibold">
                        {deliveryPrice === 0 ? "Pulsuz" : `${deliveryPrice}₼`}
                      </span>
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-brandGrayText">
                          Ümumi:
                        </span>
                        <span className="text-2xl font-bold text-brandToggle">
                          {finalTotal.toFixed(2)}₼
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

