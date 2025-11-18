import { API_ENDPOINTS } from "../endpoints";
import type { ProductsData } from "@/src/types";
import { mockData } from "@/src/shared/mock/MockItems";

export async function getProducts(): Promise<ProductsData> {
  // Return mock data if API base URL is not configured
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) {
    console.warn("[getProducts] API base URL not configured, using mock data");
    return Promise.resolve(mockData);
  }

  const url = `${base}${API_ENDPOINTS.PRODUCTS.LIST}`;

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
      console.error("[getProducts] fetch failed:", res.status, txt);
      console.warn("[getProducts] Falling back to mock data");
      return mockData;
    }

    const json = (await res.json()) as ProductsData;

    // Return mock data if API returns empty array or invalid data
    if (!json || !Array.isArray(json) || json.length === 0) {
      console.warn(
        "[getProducts] API returned empty/invalid data, using mock data"
      );
      return mockData;
    }

    return json;
  } catch (error) {
    console.error("[getProducts] Error fetching products data:", error);
    console.warn("[getProducts] Falling back to mock data");
    return mockData;
  }
}
