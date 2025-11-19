import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import Image from "next/image";

export default function Brendler() {
  const brands = [
    "Apple", "Samsung", "Sony", "LG", "HP", "Dell", 
    "Lenovo", "Asus", "Xiaomi", "Huawei", "Canon", "Nikon"
  ];

  return (
    <>
      <Head>
        <title>Brendlər - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8">
              Brendlər
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-brandGray p-6 rounded-2xl hover:shadow-lg transition text-center"
                >
                  <div className="relative w-full h-24 mb-4">
                    <Image
                      src="/assets/img/logo-be.png"
                      alt={brand}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-brandGrayText">
                    {brand}
                  </h3>
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

