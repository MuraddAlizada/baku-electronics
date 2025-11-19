import Head from "next/head";
import Link from "next/link";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiShield, FiTool, FiClock } from "react-icons/fi";

export default function Zemanet() {
  const warrantyInfo = [
    {
      icon: FiShield,
      title: "Rəsmi zəmanət",
      description: "Bütün məhsullarımız rəsmi zəmanət ilə təmin olunur",
    },
    {
      icon: FiTool,
      title: "Pulsuz təmir",
      description: "Zəmanət müddəti ərzində pulsuz təmir xidməti",
    },
    {
      icon: FiClock,
      title: "Sürətli xidmət",
      description: "Təmir prosesi ən qısa müddətdə həyata keçirilir",
    },
  ];

  return (
    <>
      <Head>
        <title>Zəmanət - Baku Electronics</title>
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
                Zəmanət
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                Bütün məhsullarımız rəsmi zəmanət ilə təmin olunur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {warrantyInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-brandGray p-6 rounded-2xl text-center hover:shadow-lg transition"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="text-4xl text-brandToggle" />
                    </div>
                    <h3 className="text-xl font-semibold text-brandGrayText mb-2">
                      {info.title}
                    </h3>
                    <p className="text-brandGrayText opacity-70">
                      {info.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-4">
                Zəmanət şərtləri
              </h2>
              <ul className="space-y-3 text-brandGrayText opacity-70 mb-6">
                <li>• Zəmanət müddəti məhsul növündən asılı olaraq 12-24 ay arasında dəyişir</li>
                <li>• Zəmanət kartı ilə birlikdə verilir</li>
                <li>• Zəmanət müddəti ərzində məhsulun təmiri pulsuz həyata keçirilir</li>
                <li>• Zəmanət şərtləri məhsulun istifadə təlimatına uyğun olaraq tətbiq olunur</li>
              </ul>
              <Link
                href="/servis-merkezleri"
                className="bg-brandBtn text-white px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition inline-block"
              >
                Servis mərkəzləri
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

