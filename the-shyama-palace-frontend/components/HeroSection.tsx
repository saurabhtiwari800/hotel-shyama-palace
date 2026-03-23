"use client";

import Image from "next/image";
import Button from "./Button";
export default function HeroSection() {

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://temple.yatradham.org/public/Product/temple/temple_Klmue7RQ_202408131457590.webp"
            alt="Vindhyavasini Mata Temple, Vindhyachal"
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Decorative diamond pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container-custom py-32 pt-40">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="text-[var(--secondary-color)]">🕉️</span>
              Near Vindhyavasini Mata Dham, Vindhyachal
            </div>

            {/* Hotel Name */}
            <h1 className="font-display text-white leading-tight mb-4">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">
                The Shyama&nbsp;
              </span>
              <span
                className="block text-5xl md:text-6xl lg:text-7xl font-bold shimmer-text"
              >
                Palace
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              Where divine blessings meet modern luxury. Experience the serenity
              of sacred Vindhyachal with the warmth of home — in the heart of
              India&apos;s spiritual heartland.
            </p>

            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-10">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[var(--secondary-color)] text-lg">★</span>
                ))}
              </div>
              <span className="text-white/70 text-sm">
                Premium Hospitality · Vindhyachal, Mirzapur
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button href="/rooms" size="lg">
                🏨 View Rooms
              </Button>


            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-white/15">
              {[
                { value: "50+", label: "Premium Rooms" },
                { value: "500m", label: "From Temple" },
                { value: "24/7", label: "Room Service" },
                { value: "5★", label: "Guest Rated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-xl md:text-2xl font-bold text-[var(--secondary-color)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/55 mt-0.5 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
        </div>
      </section>


    </>
  );
}
