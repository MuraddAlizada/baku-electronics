import { API_ENDPOINTS } from "../endpoints";
import type { HeroData } from "@/src/types";

// Mock data for Hero component
const MOCK_HERO_DATA: HeroData = [
  {
    image: "/assets/img/hero/img1.jpg",
    button_url:
      "https://www.bakuelectronics.az/kampaniyalar/teklifin-rengini-sec",
  },
  {
    image: "/assets/img/hero/img2.jpg",
    button_url:
      "https://www.bakuelectronics.az/kampaniyalar/samsungdan-xususi-hediyye",
  },
  {
    image: "/assets/img/hero/img3.jpg",
    button_url:
      "https://www.bakuelectronics.az/kampaniyalar/yeni-galaxy-tab-s11-ultra",
  },
  {
    image: "/assets/img/hero/img4.jpg",
    button_url:
      "https://www.bakuelectronics.az/kampaniyalar/sevimli-dostlariniz-ucun-agilli-secim",
  },
  {
    image: "/assets/img/hero/img5.jpg",
    button_url:
      "https://www.bakuelectronics.az/kampaniyalar/payiz-ehvalini-evine-getir",
  },
];

export async function getHeroData(): Promise<HeroData> {
  // Return mock data if API base URL is not configured
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) {
    console.warn("[getHeroData] API base URL not configured, using mock data");
    return Promise.resolve(MOCK_HERO_DATA);
  }

  const url = `${base}${API_ENDPOINTS.HERO.LIST}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-Language": "az",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error("[getHeroData] fetch failed:", res.status, txt);
      console.warn("[getHeroData] Falling back to mock data");
      return MOCK_HERO_DATA;
    }

    const json = (await res.json()) as HeroData;

    // Return mock data if API returns empty array or invalid data
    if (!json || !Array.isArray(json) || json.length === 0) {
      console.warn(
        "[getHeroData] API returned empty/invalid data, using mock data"
      );
      return MOCK_HERO_DATA;
    }

    return json;
  } catch (error) {
    console.error("[getHeroData] Error fetching hero data:", error);
    console.warn("[getHeroData] Falling back to mock data");
    return MOCK_HERO_DATA;
  }
}
