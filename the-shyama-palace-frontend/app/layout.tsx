import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
    "vindhyavasini mata",
    "pilgrimage hotel",
    "luxury hotel uttar pradesh",
  ],
  openGraph: {
    title: "The Shyama Palace | Luxury Hotel in Vindhyachal",
    description:
      "Divine serenity meets modern luxury near Vindhyavasini Mata Dham.",
    type: "website",
    locale: "en_IN",
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
      </body>
    </html>
  );
}
