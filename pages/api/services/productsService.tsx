import { API_ENDPOINTS } from "../endpoints";
import type { ProductsData } from "@/src/types";

export async function getProducts(): Promise<ProductsData> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.PRODUCTS.LIST}`;

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
    throw new Error(`Products data fetch failed (${res.status})`);
  }

  const json = (await res.json()) as ProductsData;
  return json;
}
