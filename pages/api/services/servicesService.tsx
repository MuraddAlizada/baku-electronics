import { API_ENDPOINTS } from "../endpoints";
import type { ServiceFeatureData } from "@/src/types";
import { mockServicesData } from "@/src/shared/mock/MockServicesData";

export async function getServiceFeatures(): Promise<ServiceFeatureData> {
  // Return mock data if API base URL is not configured
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) {
    console.warn("[getServiceFeatures] API base URL not configured, using mock data");
    return Promise.resolve(mockServicesData);
  }

  const url = `${base}${API_ENDPOINTS.SERVICES.LIST}`;

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
      console.error("[getServiceFeatures] fetch failed:", res.status, txt);
      console.warn("[getServiceFeatures] Falling back to mock data");
      return mockServicesData;
    }

    const json = (await res.json()) as ServiceFeatureData;

    // Return mock data if API returns empty array or invalid data
    if (!json || !Array.isArray(json) || json.length === 0) {
      console.warn(
        "[getServiceFeatures] API returned empty/invalid data, using mock data"
      );
      return mockServicesData;
    }

    return json;
  } catch (error) {
    console.error("[getServiceFeatures] Error fetching service features:", error);
    console.warn("[getServiceFeatures] Falling back to mock data");
    return mockServicesData;
  }
}
