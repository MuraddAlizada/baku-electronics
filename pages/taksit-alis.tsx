import Head from "next/head";
import Link from "next/link";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiCreditCard, FiCheckCircle } from "react-icons/fi";

export default function TaksitAlis() {
  const benefits = [
    "0% faizlə taksit alış",
    "Sürətli təsdiq",
    "Minimum sənədlər",
    "Rahat ödəniş planı",
    "Geniş məhsul çeşidi",
  ];

  return (
    <>
      <Head>
        <title>Taksit alış - Baku Electronics</title>
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
                Taksit alış
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                İstədiyiniz məhsulu taksitlə alın. 0% faizlə rahat ödəniş imkanı.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-brandGray p-6 rounded-2xl flex items-center gap-4"
                >
                  <FiCheckCircle className="text-3xl text-brandToggle flex-shrink-0" />
                  <span className="text-brandGrayText text-lg font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-4">
                Taksit alış şərtləri
              </h2>
              <ul className="space-y-3 text-brandGrayText opacity-70 mb-6">
                <li>• Minimum sifariş məbləği: 100₼</li>
                <li>• Ödəniş müddəti: 3-12 ay arası</li>
                <li>• 0% faizlə ödəniş</li>
                <li>• Sürətli təsdiq prosesi</li>
                <li>• Minimum sənədlər: şəxsiyyət vəsiqəsi</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:143"
                  className="bg-brandBtn text-white px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition text-center"
                >
                  Zəng et: 143
                </a>
                <Link
                  href="/magazalar"
                  className="bg-brandGraySecondary text-brandGrayText px-8 py-3 rounded-xl font-semibold hover:bg-brandGray transition text-center"
                >
                  Mağazalarımız
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

