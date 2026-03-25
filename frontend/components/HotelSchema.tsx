import Script from 'next/script'
import hotelInfo from '@/utils/HotelInfo'

export function HotelSchema() {
  return (
    <Script
      id="hotel-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": hotelInfo.name,
          "description": "Experience divine serenity and modern luxury at The Shyama Palace, located in Vindhyachal, Mirzapur.",
          "url": "https://hotelshamapalace.in",
          "email": "booking@hotelshamapalace.in",
          "telephone": hotelInfo.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Atal Chowk, Near, in front of AdiShakti Car Wash",
            "addressLocality": "Vindhyachal, Mirzapur",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "231307",
            "addressCountry": "IN"
          }
        })
      }}
    />
  )
}
