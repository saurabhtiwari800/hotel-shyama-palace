import type { Metadata } from "next";
import hotelInfo from "@/utils/HotelInfo";

export const metadata: Metadata = {
  title: "Rooms & Suites | Hotel Shyama Palace Vindhyachal",
  description:
    "Browse rooms at Hotel Shyama Palace, Vindhyachal — Standard, Deluxe, Family Suite & Couple's Deluxe rooms from ₹1,499/night. AC, WiFi, parking included. Book on WhatsApp!",
  openGraph: {
    title: "Rooms & Suites at Hotel Shyama Palace",
    description:
      "AC rooms from ₹1,499/night near Vindhyavasini Mata Dham, Vindhyachal. Free WiFi, parking & breakfast included.",
    url: `${hotelInfo.siteUrl}/rooms`,
  },
  alternates: {
    canonical: "/rooms",
  },
};

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
