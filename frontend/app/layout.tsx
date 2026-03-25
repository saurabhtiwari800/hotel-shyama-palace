import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { HotelSchema } from "@/components/HotelSchema";

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
  metadataBase: new URL("https://hotelshamapalace.in"),
  title: {
    default: "The Shyama Palace | Luxury Hotel in Vindhyachal, Mirzapur",
    template: "%s | The Shyama Palace",
  },
  description:
    "Experience divine serenity and modern luxury at The Shyama Palace, located in Vindhyachal, Mirzapur — just steps away from the sacred Vindhyavasini Mata Dham. Book your room today.",
  keywords: [
    "hotel vindhyachal",
    "hotel mirzapur",
    "shyama palace",
    "hotel shyama palace",
    "hotel shama palace",
    "hotel in vindhyachal",
    "vindhyavasini mata",
    "pilgrimage hotel",
    "luxury hotel uttar pradesh",
    "best hotel near vindhyachal temple"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Shyama Palace | Luxury Hotel in Vindhyachal",
    description:
      "Divine serenity meets modern luxury near Vindhyavasini Mata Dham.",
    url: "https://hotelshamapalace.in",
    siteName: "The Shyama Palace",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/front.jpeg", // We'll assume a generic OG image or fallback if not added
        width: 1200,
        height: 630,
        alt: "Hotel Shyama Palace Vindhyachal",
      },
      {
        url: "/images/maa.png", // We'll assume a generic OG image or fallback if not added
        width: 1200,
        height: 630,
        alt: "Hotel Shyama Palace Vindhyachal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shyama Palace | Luxury Hotel in Vindhyachal",
    description: "Divine serenity meets modern luxury near Vindhyavasini Mata Dham.",
    creator: "@theshyamapalace",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <WhatsAppFloat />
        <HotelSchema />
      </body>
    </html>
  );
}
