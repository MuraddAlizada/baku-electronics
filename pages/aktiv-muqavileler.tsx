import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import { FiFileText, FiCalendar } from "react-icons/fi";

export default function AktivMuqavileler() {
  return (
    <>
      <Head>
        <title>Aktiv müqavilələr - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <FiFileText className="text-6xl text-brandToggle" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-4">
                Aktiv müqavilələr
              </h1>
              <p className="text-brandGrayText opacity-70 text-lg max-w-2xl mx-auto">
                Aktiv müqavilələrinizi idarə edin və izləyin.
              </p>
            </div>

            <div className="bg-brandGray p-8 rounded-2xl max-w-3xl mx-auto">
              <div className="text-center py-12">
                <FiCalendar className="text-6xl text-brandGrayText opacity-30 mx-auto mb-4" />
                <p className="text-brandGrayText opacity-70 text-lg mb-6">
                  Aktiv müqavilələrinizi görmək üçün daxil olun
                </p>
                <button className="bg-brandBtn text-white px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition">
                  Daxil ol
                </button>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

