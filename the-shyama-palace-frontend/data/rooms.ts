export interface Room {
  id: number;
  name: string;
  slug: string;
  category: "Standard" | "Deluxe" | "Family" | "Suite";
  price: number;
  description: string;
  image: string;
  amenities: string[];
  maxGuests: number;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Standard Room",
    slug: "standard-room",
    category: "Standard",
    price: 1499,
    description:
      "A cozy, well-appointed room with all essential comforts for a peaceful stay near the sacred Vindhyavasini Mata temple.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    amenities: ["AC", "Free WiFi", "TV", "Room Service", "Hot Water"],
    maxGuests: 2,
  },
  {
    id: 2,
    name: "Deluxe Room",
    slug: "deluxe-room",
    category: "Deluxe",
    price: 1999,
    description:
      "Experience elevated comfort in our spacious deluxe room featuring premium furnishings, a city view balcony, and luxurious amenities.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    amenities: [
      "AC",
      "Free WiFi",
      "Smart TV",
      "Room Service",
      "Hot Water",
      "Mini Fridge",
      "Balcony",
    ],
    maxGuests: 2,
  },
  {
    id: 3,
    name: "Family Suite",
    slug: "family-suite",
    category: "Family",
    price: 2499,
    description:
      "Designed for families, this spacious suite offers two interconnected rooms, ideal for pilgrimage groups visiting Vindhyavasini Dham.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    amenities: [
      "AC",
      "Free WiFi",
      "Smart TV",
      "Room Service",
      "Hot Water",
      "Mini Fridge",
      "2 Bathrooms",
      "Sofa Set",
      "Kids Amenities",
    ],
    maxGuests: 4,
  },
  // {
  //   id: 4,
  //   name: "Premium Suite",
  //   slug: "premium-suite",
  //   category: "Suite",
  //   price: 4999,
  //   description:
  //     "Our most opulent offering, the Premium Suite blends traditional Indian décor with modern luxury — perfect for a regal pilgrimage experience.",
  //   image:
  //     "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  //   amenities: [
  //     "AC",
  //     "Free WiFi",
  //     "Smart TV",
  //     "24/7 Room Service",
  //     "Hot Water",
  //     "Mini Bar",
  //     "Private Balcony",
  //     "Jacuzzi",
  //     "King Bed",
  //     "Living Area",
  //   ],
  //   maxGuests: 3,
  // },
  {
    id: 5,
    name: "Couple's Deluxe",
    slug: "couples-deluxe",
    category: "Deluxe",
    price: 1999,
    description:
      "A romantically curated space for couples, featuring warm lighting, premium linen, and a private sit-out with garden views.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    amenities: [
      "AC",
      "Free WiFi",
      "Smart TV",
      "Room Service",
      "Hot Water",
      "Mini Fridge",
      "Private Sit-Out",
      "Aromatherapy Kit",
    ],
    maxGuests: 2,
  },

];

export const featuredRooms = rooms.slice(0, 3);
