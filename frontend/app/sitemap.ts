// app/sitemap.ts
import { MetadataRoute } from "next";
import { rooms } from "@/data/rooms";

const BASE_URL = "https://hotelshamapalace.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static routes (combining general pages and local landing pages)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/rooms`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/amenities`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/location`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Local landing pages for nearby cities
    {
      url: `${BASE_URL}/hotel-near-varanasi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hotel-near-prayagraj`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/navratri-stay-vindhyachal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Dynamic room routes
  const roomRoutes: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${BASE_URL}/rooms/${room.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...roomRoutes];
}
