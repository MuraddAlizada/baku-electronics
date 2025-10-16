import { API_ENDPOINTS } from "../endpoints";
import type { ServiceFeatureData } from "@/src/types";

export async function getServiceFeatures(): Promise<ServiceFeatureData> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.SERVICES.LIST}`;

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
    console.error("[getServiceFeatures] fetch failed:", res.status, txt);
    throw new Error(`Service features fetch failed (${res.status})`);
  }

  const json = (await res.json()) as ServiceFeatureData;
  return json;
}
