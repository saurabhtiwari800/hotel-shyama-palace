import { MetadataRoute } from "next";
import hotelInfo from "@/utils/HotelInfo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${hotelInfo.siteUrl}/sitemap.xml`,
    host: hotelInfo.siteUrl,
  };
}
