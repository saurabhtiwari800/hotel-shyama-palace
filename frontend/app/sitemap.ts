import { MetadataRoute } from "next";
import { rooms } from "@/data/rooms";
import hotelInfo from "@/utils/HotelInfo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Only include pages that actually exist
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: hotelInfo.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${hotelInfo.siteUrl}/rooms`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic room pages
  const roomRoutes: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${hotelInfo.siteUrl}/rooms/${room.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...roomRoutes];
}
