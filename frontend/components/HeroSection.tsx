"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import frontViewImage from "@/public/images/front.jpeg"
import maataJiImage from "@/public/images/maa.png"

const carouselImages = [
  {
    src: maataJiImage,
    alt: "Vindhyavasini Mata Temple, Vindhyachal",
  },
  {
    src: frontViewImage,
    alt: "Shyama Palace Exterior",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 7000); // 7s slide interval

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Hero section"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                pointerEvents: index === currentIndex ? "auto" : "none",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                unoptimized
                priority={index === 0}
              />
            </div>
          ))}

          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Decorative diamond pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom py-32 pt-40 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="text-[var(--secondary-color)]">🕉️</span>
              Near Vindhyavasini Mata Dham, Vindhyachal
            </div>

            {/* Hotel Name */}
            <h1 className="font-display text-white leading-tight mb-4">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">
                Hotel Shyama&nbsp;
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
                { value: "10+", label: "Premium Rooms" },
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

        {/* Carousel Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="p-3 -m-3 cursor-pointer" // Increased touch target size padding!
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`transition-all duration-500 rounded-full ${index === currentIndex
                  ? "w-8 h-2.5 bg-[var(--secondary-color)] shadow-[0_0_10px_rgba(240,180,41,0.5)]"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/90"
                  }`}
              />
            </button>
          ))}
        </div>

      </section>
    </>
  );
}