import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { HotelSchema } from "@/components/HotelSchema";
import hotelInfo from "@/utils/HotelInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(hotelInfo.siteUrl),
  title: {
    default:
      "Hotel Shyama Palace | Best Hotel in Vindhyachal, Mirzapur near Vindhyavasini Dham",
    template: "%s | Hotel Shyama Palace Vindhyachal",
  },
  description:
    "Hotel Shyama Palace — premium hotel in Vindhyachal, Mirzapur, just 500m from Vindhyavasini Mata Dham. AC rooms from ₹1,499/night with free parking, WiFi, and pure veg restaurant. Book now!",
  keywords: [
    // Primary brand keywords
    "Hotel Shyama Palace",
    "Hotel Shyama Palace Vindhyachal",
    "Shyama Palace Hotel",
    "The Shyama Palace",
    // Location keywords
    "hotel in Vindhyachal",
    "hotel in Mirzapur",
    "hotel near Vindhyavasini Mata Temple",
    "best hotel in Vindhyachal",
    "hotel near Vindhyavasini Dham",
    "Vindhyachal hotel",
    "Mirzapur hotel",
    // Service keywords
    "budget hotel Vindhyachal",
    "luxury hotel Vindhyachal",
    "AC hotel Vindhyachal",
    "hotel with parking Vindhyachal",
    "family hotel Vindhyachal",
    // Pilgrimage keywords
    "pilgrimage hotel Vindhyachal",
    "hotel for darshan Vindhyavasini",
    "Navratri hotel Vindhyachal",
    "temple hotel Vindhyachal",
    // Hindi transliteration keywords
    "होटल श्यामा पैलेस",
    "विन्ध्याचल होटल",
    "विन्ध्यवासिनी मंदिर के पास होटल",
  ],
  authors: [{ name: "Hotel Shyama Palace" }],
  creator: "Hotel Shyama Palace",
  publisher: "Hotel Shyama Palace",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hotel Shyama Palace | Best Hotel in Vindhyachal, Mirzapur",
    description:
      "Premium hotel just 500m from Vindhyavasini Mata Dham. AC rooms, free parking, pure veg restaurant. Book from ₹1,499/night.",
    url: hotelInfo.siteUrl,
    siteName: "Hotel Shyama Palace",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/front.jpeg",
        width: 1200,
        height: 630,
        alt: "Hotel Shyama Palace — Premium Hotel in Vindhyachal, Mirzapur",
      },
      {
        url: "/images/maa.png",
        width: 1200,
        height: 630,
        alt: "Vindhyavasini Mata Temple near Hotel Shyama Palace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Shyama Palace | Best Hotel in Vindhyachal",
    description:
      "Premium hotel just 500m from Vindhyavasini Mata Dham. AC rooms from ₹1,499/night.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
  // Geo meta tags — critical for local hotel SEO
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Vindhyachal, Mirzapur",
    "geo.position": `${hotelInfo.geo.latitude};${hotelInfo.geo.longitude}`,
    ICBM: `${hotelInfo.geo.latitude}, ${hotelInfo.geo.longitude}`,
    "application-name": "Hotel Shyama Palace",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#e8690a" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <WhatsAppFloat />
        <HotelSchema />
      </body>
    </html>
  );
}
