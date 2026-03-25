import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rooms } from "@/data/rooms";
import WhatsAppRoomBooking from "@/components/WhatsAppRoomBooking";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: `${room.name} | Rooms & Suites`,
    description: room.description,
  };
}

const amenityIcons: Record<string, string> = {
  "AC": "❄️",
  "Free WiFi": "📶",
  "TV": "📺",
  "Smart TV": "📺",
  "Room Service": "🛎️",
  "24/7 Room Service": "🛎️",
  "Hot Water": "🚿",
  "Mini Fridge": "🧊",
  "Mini Bar": "🍷",
  "Balcony": "🌇",
  "Private Balcony": "🌇",
  "2 Bathrooms": "🚿",
  "Sofa Set": "🛋️",
  "Kids Amenities": "🧸",
  "Jacuzzi": "♨️",
  "King Bed": "🛏️",
  "Living Area": "🏠",
  "Private Sit-Out": "🌿",
  "Aromatherapy Kit": "🌸",
  "Locker": "🔒",
  "Prayer Space": "🕉️",
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Standard: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Deluxe: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  Family: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  Suite: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
};

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);
  const cat = categoryColors[room.category] ?? categoryColors.Standard;

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[55vh] md:h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={room.image}
              alt={`${room.name} at The Shyama Palace`}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>

          <div className="relative z-10 container-custom pb-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/rooms" className="hover:text-white transition-colors">Rooms</a>
              <span>/</span>
              <span className="text-white">{room.name}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cat.bg} ${cat.text} ${cat.border}`}>
                {room.category}
              </span>
              <span className="text-white/70 text-xs bg-black/30 px-3 py-1 rounded-full">
                👥 Up to {room.maxGuests} Guests
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-2">
              {room.name}
            </h1>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-[var(--secondary-color)] font-display">
                ₹{room.price.toLocaleString("en-IN")}
              </span>
              <span className="text-white/70 text-sm">/ night</span>
              <span className="text-white/50 text-xs ml-1">incl. breakfast & taxes</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-[var(--background-color)]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-10">
                {/* Description */}
                <div className="bg-white rounded-2xl p-7 border border-[var(--border-color)] shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏨</span>
                    <h2 className="font-display text-xl font-bold text-[var(--text-color)]">About This Room</h2>
                  </div>
                  <p className="text-[var(--text-muted)] leading-relaxed text-base">{room.description}</p>

                  {/* Quick details */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[var(--border-color)]">
                    {[
                      { icon: "👥", label: "Max Guests", value: `${room.maxGuests} Persons` },
                      { icon: "🏷️", label: "Category", value: room.category },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">{item.label}</div>
                        <div className="text-sm font-bold text-[var(--text-color)] mt-0.5">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="bg-white rounded-2xl p-7 border border-[var(--border-color)] shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-2xl">✨</span>
                    <h2 className="font-display text-xl font-bold text-[var(--text-color)]">Room Amenities</h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {room.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--background-color)] border border-[var(--border-color)] hover:border-[var(--primary-color)] hover:bg-orange-50 transition-all duration-200"
                      >
                        <span className="text-xl shrink-0">
                          {amenityIcons[amenity] ?? "✓"}
                        </span>
                        <span className="text-sm font-medium text-[var(--text-color)]">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Policies */}
                <div className="bg-white rounded-2xl p-7 border border-[var(--border-color)] shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-2xl">📋</span>
                    <h2 className="font-display text-xl font-bold text-[var(--text-color)]">Room Policies</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "🕛", label: "Check-in", detail: "From 12:00 PM" },
                      { icon: "🕚", label: "Check-out", detail: "By 11:00 AM" },
                      { icon: "🚭", label: "Smoking", detail: "Non-smoking room" },
                      { icon: "🐾", label: "Pets", detail: "Pets not allowed" },
                      { icon: "🍽️", label: "Food", detail: "Pure vegetarian only" },
                      { icon: "🔑", label: "ID Proof", detail: "Govt. ID required at check-in" },
                    ].map((p) => (
                      <div key={p.label} className="flex items-center gap-3">
                        <span className="text-xl">{p.icon}</span>
                        <div>
                          <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">{p.label}</div>
                          <div className="text-sm text-[var(--text-color)] font-medium">{p.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column — Booking Widget */}
              <div className="space-y-6">
                <WhatsAppRoomBooking room={room} />

                {/* Contact card */}
                <div className="bg-white rounded-2xl p-5 border border-[var(--border-color)] shadow-sm">
                  <h3 className="font-display font-bold text-[var(--text-color)] mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[var(--background-color)] border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all group"
                    >
                      <span className="text-xl">📞</span>
                      <div>
                        <div className="text-xs text-[var(--text-muted)] font-semibold">Call Us</div>
                        <div className="text-sm font-bold text-[var(--primary-color)]">+91 98765 43210</div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@theshyamapalace.com"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[var(--background-color)] border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all"
                    >
                      <span className="text-xl">✉️</span>
                      <div>
                        <div className="text-xs text-[var(--text-muted)] font-semibold">Email Us</div>
                        <div className="text-sm font-bold text-[var(--text-color)]">info@theshyamapalace.com</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🛕</span>
                    <div>
                      <h3 className="font-bold text-[var(--text-color)] text-sm">Prime Location</h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                        Just <strong className="text-[var(--primary-color)]">500 metres</strong> from Vindhyavasini Mata Temple — walk to the divine shrine in minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Rooms */}
            {otherRooms.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="badge-primary mb-2 inline-block">Explore More</span>
                    <h2 className="section-title">Other Rooms</h2>
                  </div>
                  <a href="/rooms" className="text-sm text-[var(--primary-color)] font-semibold hover:underline">
                    View All →
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {otherRooms.map((r) => (
                    <a
                      key={r.id}
                      href={`/rooms/${r.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-sm hover:shadow-xl card-hover"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={r.image}
                          alt={r.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-bold text-[var(--text-color)] group-hover:text-[var(--primary-color)] transition-colors">
                          {r.name}
                        </h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[var(--primary-color)] font-bold">
                            ₹{r.price.toLocaleString("en-IN")}
                            <span className="text-xs text-[var(--text-muted)] font-normal">/night</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
