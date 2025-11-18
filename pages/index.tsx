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
import { mockServicesData } from "@/src/shared/mock/MockServicesData";
import { mockData } from "@/src/shared/mock/MockItems";

export default function Home({ heroData }: { heroData: HeroData }) {
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
