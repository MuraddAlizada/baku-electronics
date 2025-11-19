import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiTruck, FiShield, FiTool, FiHeadphones } from "react-icons/fi";

export default function Xidmetler() {
  const services = [
    {
      id: 1,
      title: "Çatdırılma",
      description: "Sürətli və etibarlı çatdırılma xidməti",
      icon: FiTruck,
    },
    {
      id: 2,
      title: "Zəmanət",
      description: "Rəsmi zəmanət bütün məhsullar üçün",
      icon: FiShield,
    },
    {
      id: 3,
      title: "Servis",
      description: "Peşəkar təmir və texniki xidmət",
      icon: FiTool,
    },
    {
      id: 4,
      title: "Müştəri dəstəyi",
      description: "24/7 müştəri dəstəyi xidməti",
      icon: FiHeadphones,
    },
  ];

  return (
    <>
      <Head>
        <title>Xidmətlər - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8">
              Xidmətlər
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-brandGray p-6 rounded-2xl hover:shadow-lg transition text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="text-4xl text-brandToggle" />
                    </div>
                    <h3 className="text-xl font-semibold text-brandGrayText mb-2">
                      {service.title}
                    </h3>
                    <p className="text-brandGrayText opacity-70">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

