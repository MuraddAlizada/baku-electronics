import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";

export default function Haqqimizda() {
  const stats = [
    { icon: FiUsers, number: "500K+", label: "Razı müştəri" },
    { icon: FiAward, number: "20+", label: "İl təcrübə" },
    { icon: FiTrendingUp, number: "1000+", label: "Məhsul çeşidi" },
  ];

  return (
    <>
      <Head>
        <title>Haqqımızda - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-4">
                Haqqımızda
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-3xl mx-auto">
                Baku Electronics - Azərbaycanda elektronika sahəsində aparıcı şirkətlərdən biri. 
                20 ildən çoxdur ki, müştərilərimizə ən yaxşı məhsul və xidməti təqdim edirik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-brandGray p-6 rounded-2xl text-center hover:shadow-lg transition"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="text-4xl text-brandToggle" />
                    </div>
                    <div className="text-3xl font-bold text-brandGrayText mb-2">
                      {stat.number}
                    </div>
                    <div className="text-brandGrayText opacity-70">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-4">
                Missiyamız
              </h2>
              <p className="text-brandGrayText opacity-70 mb-6">
                Müştərilərimizə ən yaxşı keyfiyyətli məhsulları, rahat alış-veriş təcrübəsi 
                və peşəkar xidmət təqdim etmək. Hər bir müştərimiz bizim üçün vacibdir və 
                onların məmnuniyyəti bizim əsas prioritetimizdir.
              </p>

              <h2 className="text-2xl font-semibold text-brandGrayText mb-4 mt-8">
                Dəyərlərimiz
              </h2>
              <ul className="space-y-3 text-brandGrayText opacity-70">
                <li>• Müştəri məmnuniyyəti</li>
                <li>• Keyfiyyət və etibarlılıq</li>
                <li>• İnnovasiya</li>
                <li>• Şəffaflıq</li>
                <li>• Peşəkarlıq</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

