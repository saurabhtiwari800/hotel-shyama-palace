import Script from "next/script";
import hotelInfo from "@/utils/HotelInfo";
import { rooms } from "@/data/rooms";

/**
 * Rich structured data for Google Search.
 * Includes Hotel schema, LocalBusiness, and FAQPage.
 * Validates at https://search.google.com/test/rich-results
 */
export function HotelSchema() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    "@id": `${hotelInfo.siteUrl}/#hotel`,
    name: hotelInfo.name,
    alternateName: [hotelInfo.alternateName, "Hotel Shyama Palace Vindhyachal"],
    description: hotelInfo.description,
    url: hotelInfo.siteUrl,
    telephone: hotelInfo.phone,
    email: hotelInfo.email,
    logo: `${hotelInfo.siteUrl}${hotelInfo.logo}`,
    image: [
      `${hotelInfo.siteUrl}/images/front.jpeg`,
      `${hotelInfo.siteUrl}/images/maa.png`,
    ],
    priceRange: hotelInfo.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    numberOfRooms: hotelInfo.numberOfRooms,
    starRating: {
      "@type": "Rating",
      ratingValue: hotelInfo.starRating,
    },
    checkinTime: hotelInfo.checkIn,
    checkoutTime: hotelInfo.checkOut,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotelInfo.address.streetAddress,
      addressLocality: `${hotelInfo.address.locality}, ${hotelInfo.address.city}`,
      addressRegion: hotelInfo.address.region,
      postalCode: hotelInfo.address.postalCode,
      addressCountry: hotelInfo.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotelInfo.geo.latitude,
      longitude: hotelInfo.geo.longitude,
    },
    hasMap: hotelInfo.googleMapsUrl,
    amenityFeature: hotelInfo.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    makesOffer: rooms.map((room) => ({
      "@type": "Offer",
      name: room.name,
      description: room.description,
      price: room.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${hotelInfo.siteUrl}/rooms/${room.slug}`,
    })),
    sameAs: [
      hotelInfo.social.googleBusiness,
      hotelInfo.social.facebook,
      hotelInfo.social.instagram,
    ].filter(Boolean),
    areaServed: {
      "@type": "City",
      name: "Vindhyachal, Mirzapur",
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://wa.me/${hotelInfo.whatsapp}?text=Hi, I want to book a room at Hotel Shyama Palace`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "LodgingReservation",
        name: "Book a Room",
      },
    },
  };

  // FAQ schema — common questions, helps get rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Hotel Shyama Palace located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Hotel Shyama Palace is located at ${hotelInfo.address.full}, just 500 metres from the sacred Vindhyavasini Mata Temple.`,
        },
      },
      {
        "@type": "Question",
        name: "What is the room price at Hotel Shyama Palace?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Room prices at Hotel Shyama Palace start from ₹1,499 per night for a Standard Room and go up to ₹2,499 for a Family Suite. All rooms include breakfast and taxes.`,
        },
      },
      {
        "@type": "Question",
        name: "What are the check-in and check-out times?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check-in time is 12:00 PM and check-out time is 11:00 AM.",
        },
      },
      {
        "@type": "Question",
        name: "Is Hotel Shyama Palace near Vindhyavasini Mata Temple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Hotel Shyama Palace is just 500 metres (5-minute walk) from the sacred Vindhyavasini Mata Dham temple in Vindhyachal.",
        },
      },
      {
        "@type": "Question",
        name: "Does Hotel Shyama Palace have parking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Hotel Shyama Palace offers free parking for cars, buses, and two-wheelers.",
        },
      },
      {
        "@type": "Question",
        name: "How to book a room at Hotel Shyama Palace?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can book a room by calling ${hotelInfo.phoneDisplay}, messaging on WhatsApp, or visiting our website at ${hotelInfo.siteUrl}.`,
        },
      },
    ],
  };

  // WebSite schema — helps Google understand site structure
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${hotelInfo.siteUrl}/#website`,
    name: hotelInfo.name,
    url: hotelInfo.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${hotelInfo.siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="hotel-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
