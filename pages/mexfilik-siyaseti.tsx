import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";

export default function MexfilikSiyaseti() {
  return (
    <>
      <Head>
        <title>Məxfilik siyasəti - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8">
              Məxfilik siyasəti
            </h1>

            <div className="bg-brandGray p-8 rounded-2xl max-w-4xl mx-auto space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-brandGrayText mb-4">
                  1. Ümumi məlumat
                </h2>
                <p className="text-brandGrayText opacity-70">
                  Baku Electronics müştərilərinin məxfilik hüquqlarını qoruyur. 
                  Bu siyasət şəxsi məlumatların toplanması, istifadəsi və qorunması 
                  ilə bağlı məlumat verir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-brandGrayText mb-4">
                  2. Toplanan məlumatlar
                </h2>
                <p className="text-brandGrayText opacity-70 mb-2">
                  Biz aşağıdakı məlumatları toplayırıq:
                </p>
                <ul className="list-disc list-inside text-brandGrayText opacity-70 space-y-2">
                  <li>Ad, soyad, telefon nömrəsi</li>
                  <li>E-poçt ünvanı</li>
                  <li>Çatdırılma ünvanı</li>
                  <li>Sifariş məlumatları</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-brandGrayText mb-4">
                  3. Məlumatların istifadəsi
                </h2>
                <p className="text-brandGrayText opacity-70">
                  Toplanan məlumatlar sifarişlərin işlənməsi, müştəri xidmətləri, 
                  kampaniyalar haqqında məlumatlandırma və saytın təkmilləşdirilməsi 
                  məqsədi ilə istifadə olunur.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-brandGrayText mb-4">
                  4. Məlumatların qorunması
                </h2>
                <p className="text-brandGrayText opacity-70">
                  Bütün məlumatlar təhlükəsiz şəkildə saxlanılır və üçüncü tərəflərə 
                  ötürülmür. Məlumatların qorunması üçün müasir texnologiyalardan 
                  istifadə olunur.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-brandGrayText mb-4">
                  5. Əlaqə
                </h2>
                <p className="text-brandGrayText opacity-70">
                  Məxfilik siyasəti ilə bağlı suallarınız üçün bizimlə əlaqə saxlayın:
                </p>
                <p className="text-brandGrayText opacity-70 mt-2">
                  E-poçt: info@bakuelectronics.az
                  <br />
                  Telefon: 143
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

