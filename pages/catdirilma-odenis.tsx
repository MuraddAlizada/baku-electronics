import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiTruck, FiCreditCard } from "react-icons/fi";

export default function CatdirilmaOdenis() {
  const deliveryOptions = [
    {
      icon: FiTruck,
      title: "Çatdırılma",
      items: [
        "Bakı daxilində pulsuz çatdırılma",
        "Regionlara çatdırılma",
        "Sürətli çatdırılma xidməti",
        "Çatdırılma müddəti: 1-3 iş günü",
      ],
    },
    {
      icon: FiCreditCard,
      title: "Ödəniş",
      items: [
        "Nağd ödəniş",
        "Kartla ödəniş",
        "Onlayn ödəniş",
        "Aylıq ödəniş imkanı",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Çatdırılma və ödəniş - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8">
              Çatdırılma və ödəniş
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {deliveryOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div
                    key={index}
                    className="bg-brandGray p-6 rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-3xl text-brandToggle" />
                      <h2 className="text-2xl font-semibold text-brandGrayText">
                        {option.title}
                      </h2>
                    </div>
                    <ul className="space-y-2">
                      {option.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-brandGrayText opacity-70"
                        >
                          <span className="text-brandToggle mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-4">
                Çatdırılma haqqında məlumat
              </h2>
              <div className="space-y-4 text-brandGrayText opacity-70">
                <p>
                  <strong>Bakı daxilində:</strong> Sifariş 50₼ və yuxarı olduqda pulsuz çatdırılma. 
                  Çatdırılma müddəti 1-2 iş günüdür.
                </p>
                <p>
                  <strong>Regionlara:</strong> Çatdırılma haqqı sifarişin həcmindən asılı olaraq 
                  hesablanır. Çatdırılma müddəti 2-5 iş günüdür.
                </p>
                <p>
                  <strong>Ödəniş:</strong> Nağd, kartla və ya onlayn ödəniş edə bilərsiniz. 
                  Aylıq ödəniş imkanı da mövcuddur.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

