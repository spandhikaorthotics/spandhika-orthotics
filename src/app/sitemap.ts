import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://spandhikaorthotics.in",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://spandhikaorthotics.in/waitlist",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
