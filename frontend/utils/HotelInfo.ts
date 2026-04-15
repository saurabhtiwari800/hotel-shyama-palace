/**
 * Single source of truth for all hotel information.
 * Every component should import from here — no hardcoded values elsewhere.
 */
const hotelInfo = {
  // Brand
  name: "Hotel Shyama Palace",
  alternateName: "The Shyama Palace",
  description:
    "Hotel Shyama Palace is a premium hotel in Vindhyachal, Mirzapur — just 500 metres from the sacred Vindhyavasini Mata Dham. Offering AC rooms, free parking, pure veg restaurant, and heartfelt hospitality for pilgrims and travellers.",

  // URLs
  siteUrl: "https://hotelshyamapalace.in",
  logo: "/logo.png",
  ogImage: "/images/front.jpeg",

  // Contact
  phone: "+91 9196034747",
  phoneDisplay: "+91 9196 034 747",
  email: "official.hotelshyamapalace@gmail.com",
  whatsapp: "+919196034747",

  // Address
  address: {
    streetAddress: "Near Atal Chowk, In front of Indian Oil Petrol Pump",
    locality: "Vindhyachal",
    city: "Mirzapur",
    region: "Uttar Pradesh",
    postalCode: "231307",
    country: "IN",
    full: "Near Atal Chowk, In front of Indian Oil Petrol Pump, Vindhyachal, Mirzapur, Uttar Pradesh 231307, India",
  },

  // Geo coordinates (from Google Maps)
  geo: {
    latitude: 25.1553311,
    longitude: 82.5083333,
  },

  // Google Maps
  googleMapsUrl: "https://www.google.com/maps/place/Hotel+Shyama+Palace/@25.1553311,82.5057584,17z",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.535322094772!2d82.56931387523778!3d25.14510017760556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398feb7540734c3f%3A0x4d7e391c6478dccb!2sHotel%20Shyama%20Palace!5e0!3m2!1sen!2sin",

  // Hotel details
  starRating: 3,
  priceRange: "₹1499 - ₹2499",
  numberOfRooms: 4,
  checkIn: "12:00",
  checkOut: "11:00",

  // Amenities
  amenities: [
    "Free WiFi",
    "Air Conditioning",
    "Free Parking",
    "Pure Vegetarian Restaurant",
    "Room Service",
    "Hot Water 24/7",
    "Smart TV",
    "CCTV Security",
    "Power Backup",
  ],

  // Social (add real URLs when available)
  social: {
    facebook: "",
    instagram: "",
    googleBusiness:
      "https://www.google.com/maps/place/Hotel+Shyama+Palace/@25.1553311,82.5057584,17z",
  },
} as const;

export default hotelInfo;
