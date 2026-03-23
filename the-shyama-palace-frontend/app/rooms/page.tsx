"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";

const categories = ["All", "Standard", "Deluxe", "Family", "Suite"] as const;
type Category = (typeof categories)[number];

export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredRooms =
    activeCategory === "All"
      ? rooms
      : rooms.filter((r) => r.category === activeCategory);

  return (
    <>
      <Navbar />

      <main>
        {/* Page Banner */}
        <section className="relative h-72 md:h-80 flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
              alt="The Shyama Palace rooms banner"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="relative z-10 container-custom pb-10 pt-32">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-white/60 mb-3"
            >
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-white">Rooms &amp; Suites</span>
            </nav>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Rooms &{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #e8690a 0%, #f0b429 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Suites
              </span>
            </h1>
            <p className="text-white/75 mt-2 max-w-lg text-sm md:text-base">
              From cozy standard rooms to opulent suites — find your perfect
              retreat in the heart of Vindhyachal.
            </p>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="section-padding bg-[var(--background-color)]">
          <div className="container-custom">
            {/* Filter bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 p-5 bg-white rounded-2xl border border-[var(--border-color)] shadow-sm">
              <div>
                <p className="font-bold text-[var(--text-color)]">
                  {filteredRooms.length} room{filteredRooms.length !== 1 ? "s" : ""} available
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Vindhyachal, Mirzapur · Near Vindhyavasini Mata Dham
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                      cat === activeCategory
                        ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)] shadow-md"
                        : "bg-white text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>

            {filteredRooms.length === 0 && (
              <div className="text-center py-20 text-[var(--text-muted)]">
                <span className="text-5xl block mb-4">🏨</span>
                <p className="text-lg font-semibold">No rooms found</p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-3 text-[var(--primary-color)] font-semibold hover:underline"
                >
                  Show all rooms
                </button>
              </div>
            )}

            {/* Bottom Info */}
            <div className="mt-14 p-7 bg-white rounded-2xl border border-[var(--border-color)] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-2xl shrink-0">
                    🛕
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-color)] text-sm mb-1">
                      Prime Temple Location
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Just 500m from Vindhyavasini Mata Dham — walk to the
                      temple in minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-2xl shrink-0">
                    🍽️
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-color)] text-sm mb-1">
                      Pure Veg Restaurant
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Authentic UP vegetarian cuisine served fresh from our
                      in-house kitchen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-2xl shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-color)] text-sm mb-1">
                      Instant WhatsApp Booking
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Book instantly via WhatsApp —{" "}
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] font-semibold hover:underline"
                      >
                        +91 98765 43210
                      </a>{" "}
                      — we confirm in minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
