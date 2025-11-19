import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiBriefcase, FiUsers, FiDollarSign } from "react-icons/fi";

export default function KorporativSatislar() {
  const features = [
    {
      icon: FiBriefcase,
      title: "Korporativ müştərilər",
      description: "Şirkətlər üçün xüsusi qiymətlər və şərtlər",
    },
    {
      icon: FiUsers,
      title: "Toplu alış",
      description: "Böyük həcmdə alış üçün xüsusi endirimlər",
    },
    {
      icon: FiDollarSign,
      title: "Xüsusi qiymətlər",
      description: "Korporativ müştərilər üçün ən yaxşı qiymətlər",
    },
  ];

  return (
    <>
      <Head>
        <title>Korporativ satışlar - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-4">
                Korporativ satışlar
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                Şirkətiniz üçün ən yaxşı həlləri təklif edirik. Korporativ müştərilər üçün xüsusi şərtlər və qiymətlər.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-brandGray p-6 rounded-2xl text-center hover:shadow-lg transition"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="text-4xl text-brandToggle" />
                    </div>
                    <h3 className="text-xl font-semibold text-brandGrayText mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-brandGrayText opacity-70">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-4">
                Bizimlə əlaqə saxlayın
              </h2>
              <p className="text-brandGrayText opacity-70 mb-6">
                Korporativ satışlar üçün məlumat almaq istəyirsinizsə, bizimlə əlaqə saxlayın:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:143"
                  className="bg-brandBtn text-white px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition text-center"
                >
                  Zəng et: 143
                </a>
                <a
                  href="mailto:corporate@bakuelectronics.az"
                  className="bg-brandGraySecondary text-brandGrayText px-6 py-3 rounded-xl font-semibold hover:bg-brandGray transition text-center"
                >
                  E-poçt göndər
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

