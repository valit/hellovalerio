import { MetadataRoute } from "next";

const BASE_URL = "https://hellovaler.io";

const caseStudies = ["campaigns", "content-discovery", "measurement", "service-app"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((slug) => ({
      url: `${BASE_URL}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
