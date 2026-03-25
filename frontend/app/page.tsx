import Image from "next/image";
import { Metadata } from "next";
import { WhatsappService } from "@/utils/WhatsappService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Facilities from "@/components/Facilities";
import RoomCard from "@/components/RoomCard";
import Button from "@/components/Button";
import { featuredRooms } from "@/data/rooms";

import hotelImage from "@/public/images/front.jpeg"
import matajiImage from "@/public/images/maa.png"

export const metadata: Metadata = {
  title: "Home | The Shyama Palace",
  description: "Experience divine serenity and modern luxury at The Shyama Palace, the best hotel in Vindhyachal, Mirzapur near Vindhyavasini Mata Dham.",
  openGraph: {
    title: "The Shyama Palace | Premium Hotel in Vindhyachal",
    description: "Experience divine serenity and modern luxury at The Shyama Palace, the best hotel in Vindhyachal, Mirzapur near Vindhyavasini Mata Dham.",
    url: "https://hotelshamapalace.in",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection />

        {/* Facilities */}
        <Facilities />

        {/* Featured Rooms */}
        <section id="featured-rooms" className="section-padding bg-[var(--background-color)]">
          <div className="container-custom">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <div className="divider-ornament justify-start mb-3">
                  <span className="text-[var(--primary-color)] text-xl">🏨</span>
                </div>
                <span className="badge-primary mb-4 inline-block">Featured Rooms</span>
                <h2 className="section-title">
                  Stay in Style &{" "}
                  <span className="text-gradient">Comfort</span>
                </h2>
                <p className="section-subtitle mt-2">
                  Choose from our handpicked selection of premium rooms designed
                  for pilgrims and leisure travellers alike.
                </p>
              </div>
              <Button href="/rooms" variant="outline" className="shrink-0">
                View All Rooms →
              </Button>
            </div>

            {/* Room Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {featuredRooms.map((room) => (
                <RoomCard key={room.id} room={room} featured />
              ))}
            </div>
          </div>
        </section>

        {/* Location / Map Section */}
        <section id="location" className="section-padding bg-white border-b border-orange-100">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Text & Info */}
              <div className="w-full lg:w-1/3 space-y-8">
                <div>
                  <div className="divider-ornament justify-start mb-3">
                    <span className="text-[var(--primary-color)] text-xl">📍</span>
                  </div>
                  <span className="badge-primary mb-5 inline-block">Our Location</span>
                  <h2 className="section-title mb-5">
                    Find Us in{" "}
                    <span className="text-gradient">Vindhyachal</span>
                  </h2>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    We are conveniently located near Atal Chowk, just walking distance from the sacred Vindhyavasini Mata Temple.
                  </p>
                </div>

                <div className="bg-[var(--background-color)] p-6 rounded-2xl border border-orange-100 shadow-sm">
                  <h3 className="font-display font-bold text-lg mb-3 text-[var(--text-color)]">
                    Hotel Shyama Palace
                  </h3>
                  <address className="not-italic text-[var(--text-muted)] text-sm leading-relaxed mb-6 space-y-1">
                    <p>Near Atal Chowk,</p>
                    <p>In front of Indian Oil Petrol Pump,</p>
                    <p>Vindhyachal, Mirzapur,</p>
                    <p>Uttar Pradesh, India — 231307</p>
                  </address>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-[var(--text-color)] font-medium">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[var(--primary-color)] shrink-0">
                        🚶
                      </div>
                      500m from Mata Temple
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[var(--text-color)] font-medium">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[var(--primary-color)] shrink-0">
                        🚂
                      </div>
                      1km from Vindhyachal Station
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/xmUZdrtHLTgxSkcF9?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg text-sm font-bold bg-[var(--primary-color)] text-white hover:bg-[var(--primary-dark)] transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                  >
                    Open in Google Maps
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="w-full lg:w-2/3 h-[450px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.535322094772!2d82.56931387523778!3d25.14510017760556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398feb295eb96f3d%3A0xee9830b1ace1c056!2sHotel%20Shyama%20International%2C%20Atal%20Chowk%2C%20Near%2C%20in%20front%20of%20AdiShakti%20Car%20Wash%2C%20Vindhyachal%2C%20Mirzapur%2C%20Uttar%20Pradesh%20231307!5e0!3m2!1sen!2sin!4v1758732940371!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[0.2] contrast-[1.05]"
                  title="Hotel Shyama Palace Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section id="about" className="section-padding bg-[var(--background-color)] overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className="relative">
                {/* Main large image */}
                <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={hotelImage}
                    alt="The Shyama Palace luxury interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Floating small image */}
                <div className="absolute -bottom-6 -right-4 w-44 h-44 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
                  <Image
                    src={matajiImage}
                    alt="Vindhyavasini Mata Temple"
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
                {/* Award badge */}
                <div className="absolute top-4 -left-4 hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[var(--primary-color)] text-white shadow-lg shadow-orange-300/50">
                  <span className="text-2xl font-bold font-display">5★</span>
                  <span className="text-xs text-center leading-none font-medium">Premium Hotel</span>
                </div>
              </div>

              {/* Text Column */}
              <div>
                <div className="divider-ornament justify-start mb-3">
                  <span className="text-[var(--primary-color)] text-xl">🛕</span>
                </div>
                <span className="badge-primary mb-5 inline-block">About The Shyama Palace</span>
                <h2 className="section-title mb-5">
                  A Sanctuary of{" "}
                  <span className="text-gradient">Spirituality</span> &amp;
                  Luxury
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  Nestled in the sacred town of Vindhyachal, Mirzapur, The Shyama
                  Palace is your home away from home during your pilgrimage to the
                  revered{" "}
                  <strong className="text-[var(--text-color)]">
                    Vindhyavasini Mata Dham
                  </strong>
                  . We are located just{" "}
                  <strong className="text-[var(--primary-color)]">
                    500 metres
                  </strong>{" "}
                  from the main temple, allowing you to soak in the divine
                  atmosphere at your own pace.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed mb-7">
                  Our hotel blends the warmth of traditional Indian hospitality
                  with world-class modern amenities — offering you a peaceful
                  retreat after a day of devotion. From family suites to romantic
                  deluxe rooms, every space has been lovingly designed with your
                  well-being in mind.
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-8">
                  {[
                    "500m walking distance from Vindhyavasini Mata Temple",
                    "Pure vegetarian restaurant with UP cuisine",
                    "Fully air-conditioned premium rooms and suites",
                    "Free parking for cars, buses & two-wheelers",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-[var(--text-muted)]"
                    >
                      <span className="text-[var(--primary-color)] mt-0.5 text-base shrink-0">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Button href="/rooms">Explore Rooms</Button>
                  <Button href="/#contact" variant="outline">
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=80"
              alt="Luxury hotel ambient"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[var(--primary-color)]/90" />
          </div>
          <div className="relative z-10 container-custom text-center text-white">
            <span className="text-4xl mb-4 block">🙏</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Plan Your Sacred Journey Today
            </h2>
            <p className="text-white/85 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              Book your stay at The Shyama Palace and experience the best of
              Vindhyachal — divine blessings, royal comfort, and heartfelt
              hospitality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/rooms"
                size="lg"
                className="bg-white hover:bg-orange-50 hover:text-[var(--primary-dark)]"
              >
                <span className="text-black">View All Rooms</span>
              </Button>
              <a
                href={WhatsappService.getBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-base font-bold bg-[#25d366] text-white hover:bg-[#1eb858] transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
