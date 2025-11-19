import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiBriefcase, FiUsers } from "react-icons/fi";

export default function Karyera() {
  const benefits = [
    "Rəqabətli maaş",
    "Sosial paket",
    "Peşəkar inkişaf imkanları",
    "Dostluq mühiti",
    "Karyera artımı",
  ];

  return (
    <>
      <Head>
        <title>Karyera - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <FiBriefcase className="text-6xl text-brandToggle" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-4">
                Karyera portalı
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                Baku Electronics komandasına qoşulun və karyeranızı inkişaf etdirin.
              </p>
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-6">
                Açıq vakansiyalar
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-300 pb-4">
                  <h3 className="text-xl font-semibold text-brandGrayText mb-2">
                    Satış meneceri
                  </h3>
                  <p className="text-brandGrayText opacity-70 mb-2">
                    Mağazada müştərilərə xidmət göstərmək və satış həyata keçirmək
                  </p>
                  <button className="bg-brandBtn text-white px-6 py-2 rounded-xl font-semibold hover:brightness-110 transition text-sm">
                    Müraciət et
                  </button>
                </div>
                <div className="border-b border-gray-300 pb-4">
                  <h3 className="text-xl font-semibold text-brandGrayText mb-2">
                    Müştəri xidmətləri nümayəndəsi
                  </h3>
                  <p className="text-brandGrayText opacity-70 mb-2">
                    Müştərilərə məlumat vermək və problemləri həll etmək
                  </p>
                  <button className="bg-brandBtn text-white px-6 py-2 rounded-xl font-semibold hover:brightness-110 transition text-sm">
                    Müraciət et
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-6">
                Üstünlüklər
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiUsers className="text-brandToggle text-xl" />
                    <span className="text-brandGrayText">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

