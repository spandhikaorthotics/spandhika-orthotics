import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://spandhikaorthotics.in",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://spandhikaorthotics.in/blog",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://spandhikaorthotics.in/for-you",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://spandhikaorthotics.in/for-families",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://spandhikaorthotics.in/for-clinicians",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}