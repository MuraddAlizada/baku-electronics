import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiShield, FiCheckCircle } from "react-icons/fi";

export default function ArxayinAl() {
  const guarantees = [
    "Rəsmi zəmanət",
    "Orijinal məhsullar",
    "Pulsuz çatdırılma",
    "Asan qaytarma",
    "24/7 müştəri dəstəyi",
  ];

  return (
    <>
      <Head>
        <title>Arxayın al - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <FiShield className="text-6xl text-brandToggle" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-4">
                Arxayın al
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                Baku Electronics-dən alış-veriş edərkən tam güvən altındasınız.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="bg-brandGray p-6 rounded-2xl flex items-center gap-4"
                >
                  <FiCheckCircle className="text-3xl text-brandToggle flex-shrink-0" />
                  <span className="text-brandGrayText text-lg font-medium">
                    {guarantee}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-4">
                Niyə Baku Electronics?
              </h2>
              <ul className="space-y-3 text-brandGrayText opacity-70">
                <li>• 20+ illik təcrübə</li>
                <li>• Minlərlə razı müştəri</li>
                <li>• Geniş məhsul çeşidi</li>
                <li>• Peşəkar xidmət</li>
                <li>• Rəsmi zəmanət</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

