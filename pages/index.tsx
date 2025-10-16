import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import type { HomeProps } from "@/src/types";
import { getHeroData } from "./api/services/heroService";
import { getServiceFeatures } from "./api/services/servicesService";
import Hero from "@/src/components/home/Hero";
import Services from "@/src/components/home/Services";
import OfferedProducts from "@/src/components/home/OfferedProducts";
import { getProducts } from "./api/services/productsService";
import Partners from "@/src/components/home/Partners";
import Blogs from "@/src/components/home/Blogs";
import Head from "next/head";
import Footer from "@/src/components/layout/Footer";
import NavBar from "@/src/components/layout/NavBar";
import { mockServicesData } from "@/src/shared/mock/MockServicesData";
import { mockData } from "@/src/shared/mock/MockItems";

export default function Home({ heroData }: HomeProps) {
  return (
    <>
      <main>
        <Head>
          <title>Baku Electronics</title>
        </Head>
        <Container>
          <Header />
          <NavBar />
          <Hero data={heroData} />
          <Services data={mockServicesData} />
          <OfferedProducts data={mockData} />
        </Container>
        <Blogs />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const heroData = await getHeroData().catch((error) => {
    console.error("Error in getHeroData:", error);
    return [];
  });

  const serviceFeatures = await getServiceFeatures().catch((error) => {
    console.error("Error in getServiceFeatures:", error);
    return [];
  });

  const products = await getProducts().catch((error) => {
    console.error("Error in getProducts:", error);
    return [];
  });

  return {
    props: {
      heroData,
      serviceFeatures,
      products,
    },
  };
}
