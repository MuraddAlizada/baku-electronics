import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/shared/Breadcrumb";
import Image from "next/image";

export default function Kampaniyalar() {
  const campaigns = [
    {
      id: 1,
      title: "Yeni il kampaniyası",
      description: "Bütün məhsullarda 30% endirim",
      image: "/assets/img/logo-be.png",
      discount: 30,
    },
    {
      id: 2,
      title: "Smartfon kampaniyası",
      description: "Seçilmiş smartfonlarda xüsusi qiymətlər",
      image: "/assets/img/logo-be.png",
      discount: 25,
    },
    {
      id: 3,
      title: "Laptop kampaniyası",
      description: "Premium laptoplarda böyük endirimlər",
      image: "/assets/img/logo-be.png",
      discount: 20,
    },
  ];

  return (
    <>
      <Head>
        <title>Kampaniyalar - Baku Electronics</title>
        <meta name="description" content="Baku Electronics kampaniyaları və xüsusi təkliflər. Böyük endirimlər, aksiyalar və promosiyalar." />
        <meta name="keywords" content="kampaniya, endirim, aksiya, promosiya, Baku Electronics" />
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <Breadcrumb
            items={[
              { label: "Ana səhifə", href: "/" },
              { label: "Kampaniyalar" },
            ]}
          />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8">
              Kampaniyalar
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="bg-brandGray p-6 rounded-2xl hover:shadow-lg transition"
                >
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-lg font-bold px-4 py-2 rounded-xl">
                      -{campaign.discount}%
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-brandGrayText mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-brandGrayText opacity-70">
                    {campaign.description}
                  </p>
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

