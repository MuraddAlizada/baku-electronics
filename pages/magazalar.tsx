import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/shared/Breadcrumb";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

export default function Magazalar() {
  const stores = [
    {
      id: 1,
      name: "Baku Electronics - Nizami",
      address: "Nizami küçəsi 123, Bakı",
      phone: "+994 12 123 45 67",
      hours: "10:00 - 22:00",
      city: "Bakı",
    },
    {
      id: 2,
      name: "Baku Electronics - Gənclik",
      address: "Gənclik prospekti 45, Bakı",
      phone: "+994 12 234 56 78",
      hours: "10:00 - 22:00",
      city: "Bakı",
    },
    {
      id: 3,
      name: "Baku Electronics - Sumqayıt",
      address: "Mərkəzi küçə 78, Sumqayıt",
      phone: "+994 18 345 67 89",
      hours: "10:00 - 21:00",
      city: "Sumqayıt",
    },
  ];

  return (
    <>
      <Head>
        <title>Mağazalar - Baku Electronics</title>
        <meta name="description" content="Baku Electronics mağazalarının ünvanları, telefon nömrələri və iş saatları. Bakı və regionlarda mağazalarımız." />
        <meta name="keywords" content="mağaza, ünvan, telefon, Baku Electronics mağazaları" />
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <Breadcrumb
            items={[
              { label: "Ana səhifə", href: "/" },
              { label: "Mağazalar" },
            ]}
          />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8">
              Mağazalar
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className="bg-brandGray p-6 rounded-2xl hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-brandGrayText mb-4">
                    {store.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FiMapPin className="text-brandToggle mt-1 flex-shrink-0" />
                      <span className="text-brandGrayText opacity-70">
                        {store.address}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <FiPhone className="text-brandToggle flex-shrink-0" />
                      <span className="text-brandGrayText opacity-70">
                        {store.phone}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <FiClock className="text-brandToggle flex-shrink-0" />
                      <span className="text-brandGrayText opacity-70">
                        {store.hours}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

