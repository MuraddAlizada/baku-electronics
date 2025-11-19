import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import type { HeroData } from "@/src/types";
import { getHeroData } from "./api/services/heroService";
import Hero from "@/src/components/home/Hero";
import Services from "@/src/components/home/Services";
import OfferedProducts from "@/src/components/home/OfferedProducts";
import Partners from "@/src/components/home/Partners";
import Blogs from "@/src/components/home/Blogs";
import RecentlyViewed from "@/src/components/home/RecentlyViewed";
import Head from "next/head";
import Footer from "@/src/components/layout/Footer";
import NavBar from "@/src/components/layout/NavBar";
import OrderSuccessModal from "@/src/components/shared/OrderSuccessModal";
import { mockServicesData } from "@/src/shared/mock/MockServicesData";
import { mockData } from "@/src/shared/mock/MockItems";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home({ heroData }: { heroData: HeroData }) {
  const router = useRouter();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    if (router.query.orderSuccess === "true" && router.query.orderNumber) {
      setOrderNumber(router.query.orderNumber as string);
      setShowOrderModal(true);
      // Clean up query params
      router.replace("/", undefined, { shallow: true });
    }
  }, [router.query]);
  return (
    <>
      <OrderSuccessModal
        show={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        orderNumber={orderNumber}
      />
      <main>
        <Head>
          <title>Baku Electronics - Elektronika məhsulları | Onlayn alış-veriş</title>
          <meta 
            name="description" 
            content="Baku Electronics - Azərbaycanda ən böyük elektronika mağazası. Smartfonlar, laptoplar, televizorlar və digər elektronika məhsulları. Pulsuz çatdırılma, rəsmi zəmanət." 
          />
          <meta name="keywords" content="elektronika, smartfon, laptop, televizor, Baku Electronics, alış-veriş, Azərbaycan" />
          <meta property="og:title" content="Baku Electronics - Elektronika məhsulları" />
          <meta property="og:description" content="Azərbaycanda ən böyük elektronika mağazası. Geniş məhsul çeşidi, rəsmi zəmanət." />
          <meta property="og:type" content="website" />
        </Head>
        <Container>
          <Header />
          <NavBar />
          <Hero data={heroData} />
          <Services data={mockServicesData} />
          <OfferedProducts data={mockData} />
          <RecentlyViewed />
        </Container>
        <Blogs />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const heroData = await getHeroData().catch((error) => {
      console.error("Error in getHeroData:", error);
      return [];
    });

    // Note: serviceFeatures and products are not used in the component
    // They use mockServicesData and mockData directly
    // We only need heroData from the API

    return {
      props: {
        heroData: heroData || [],
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        heroData: [],
      },
    };
  }
}
