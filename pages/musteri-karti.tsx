import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiCreditCard, FiGift, FiStar } from "react-icons/fi";

export default function MusteriKarti() {
  const benefits = [
    {
      icon: FiGift,
      title: "Bonus balansı",
      description: "Hər alış-verişdə bonus balansı qazanın",
    },
    {
      icon: FiStar,
      title: "Xüsusi endirimlər",
      description: "Kart sahibləri üçün xüsusi kampaniyalar",
    },
    {
      icon: FiCreditCard,
      title: "Rahat ödəniş",
      description: "Kartınızla rahat ödəniş edin",
    },
  ];

  return (
    <>
      <Head>
        <title>Müştəri kartı - Baku Electronics</title>
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
                Müştəri kartı
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                Müştəri kartı ilə hər alış-verişdə bonus qazanın və xüsusi endirimlərdən yararlanın.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-brandGray p-6 rounded-2xl text-center hover:shadow-lg transition"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="text-4xl text-brandToggle" />
                    </div>
                    <h3 className="text-xl font-semibold text-brandGrayText mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-brandGrayText opacity-70">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-4">
                Kart əldə etmək üçün
              </h2>
              <p className="text-brandGrayText opacity-70 mb-6">
                Müştəri kartı əldə etmək üçün ən yaxın mağazamıza müraciət edin.
              </p>
              <a
                href="/magazalar"
                className="bg-brandBtn text-white px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition inline-block"
              >
                Mağazalarımız
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

