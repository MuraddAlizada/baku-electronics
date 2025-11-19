import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiMapPin, FiPhone, FiClock, FiTool } from "react-icons/fi";

export default function ServisMerkezleri() {
  const serviceCenters = [
    {
      id: 1,
      name: "Servis mərkəzi - Nizami",
      address: "Nizami küçəsi 123, Bakı",
      phone: "+994 12 123 45 67",
      hours: "10:00 - 19:00",
    },
    {
      id: 2,
      name: "Servis mərkəzi - Gənclik",
      address: "Gənclik prospekti 45, Bakı",
      phone: "+994 12 234 56 78",
      hours: "10:00 - 19:00",
    },
  ];

  return (
    <>
      <Head>
        <title>Servis mərkəzləri - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <FiTool className="text-6xl text-brandToggle" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-4">
                Servis mərkəzləri
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                Peşəkar təmir və texniki xidmət üçün bizim servis mərkəzlərimizə müraciət edin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCenters.map((center) => (
                <div
                  key={center.id}
                  className="bg-brandGray p-6 rounded-2xl hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-brandGrayText mb-4">
                    {center.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FiMapPin className="text-brandToggle mt-1 flex-shrink-0" />
                      <span className="text-brandGrayText opacity-70">
                        {center.address}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <FiPhone className="text-brandToggle flex-shrink-0" />
                      <span className="text-brandGrayText opacity-70">
                        {center.phone}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <FiClock className="text-brandToggle flex-shrink-0" />
                      <span className="text-brandGrayText opacity-70">
                        {center.hours}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto mt-8">
              <h2 className="text-2xl font-semibold text-brandGrayText mb-4">
                Xidmətlər
              </h2>
              <ul className="space-y-2 text-brandGrayText opacity-70">
                <li>• Zəmanətli təmir</li>
                <li>• Zəmanət xaricində təmir</li>
                <li>• Diagnostika</li>
                <li>• Ehtiyat hissələrinin dəyişdirilməsi</li>
                <li>• Texniki məsləhət</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

