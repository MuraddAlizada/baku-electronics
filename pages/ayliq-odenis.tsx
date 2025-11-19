import Head from "next/head";
import Link from "next/link";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiCreditCard, FiCheckCircle } from "react-icons/fi";

export default function AyliqOdenis() {
  const benefits = [
    "0% faizlə aylıq ödəniş",
    "Sürətli təsdiq",
    "Minimum sənədlər",
    "Rahat ödəniş planı",
  ];

  return (
    <>
      <Head>
        <title>Aylıq ödəniş - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <FiCreditCard className="text-6xl text-brandToggle" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-4">
                Aylıq ödəniş
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                İstədiyiniz məhsulu aylıq ödənişlə alın. Rahat və sürətli təsdiq prosesi.
              </p>
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-6">
                Üstünlüklər
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="text-brandToggle text-2xl flex-shrink-0" />
                    <span className="text-brandGrayText text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-300">
                <h3 className="text-xl font-semibold text-brandGrayText mb-4">
                  Müraciət etmək üçün
                </h3>
                <p className="text-brandGrayText opacity-70 mb-4">
                  Aylıq ödəniş üçün müraciət etmək istəyirsinizsə, bizimlə əlaqə saxlayın:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:143"
                    className="bg-brandBtn text-white px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition text-center"
                  >
                    Zəng et: 143
                  </a>
                  <Link
                    href="/magazalar"
                    className="bg-brandGraySecondary text-brandGrayText px-6 py-3 rounded-xl font-semibold hover:bg-brandGray transition text-center"
                  >
                    Mağazalarımız
                  </Link>
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

