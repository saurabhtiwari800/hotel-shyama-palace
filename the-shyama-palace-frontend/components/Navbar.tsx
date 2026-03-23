"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Facilities", href: "/#facilities" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled
        ? "bg-white/97 backdrop-blur-xl shadow-lg py-2.5"
        : "bg-transparent py-4"
        }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-all duration-300 ${isScrolled
              ? "bg-[var(--primary-color)]"
              : "bg-white/15 backdrop-blur-sm border border-white/30"
              }`}
          >
            🕌
          </div>
          <div className="leading-tight">
            <span
              className={`block font-display font-bold text-lg leading-none transition-colors duration-300 ${isScrolled ? "text-[var(--text-color)]" : "text-white"
                }`}
            >
              The Shyama
            </span>
            <span
              className={`block text-xs font-bold tracking-widest uppercase leading-none mt-0.5 transition-colors duration-300 ${isScrolled ? "text-[var(--primary-color)]" : "text-[var(--secondary-color)]"
                }`}
            >
              Palace
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                  ? isScrolled
                    ? "text-[var(--primary-color)] bg-orange-50"
                    : "text-[var(--secondary-color)] bg-white/15"
                  : isScrolled
                    ? "text-[var(--text-muted)] hover:text-[var(--primary-color)] hover:bg-orange-50"
                    : "text-white/85 hover:text-white hover:bg-white/12"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20I%20am%20interested%20in%20booking%20a%20room%20at%20The%20Shyama%20Palace.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className={`hidden md:flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${isScrolled
              ? "bg-green-50 text-green-600 border border-green-200 hover:bg-green-100"
              : "bg-white/15 text-white border border-white/20 hover:bg-white/25"
              }`}
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          {/* Book Now button */}
          <Link
            href="/rooms"
            className={`hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${isScrolled
              ? "bg-[var(--primary-color)] text-white shadow-md hover:bg-[var(--primary-dark)] hover:shadow-lg"
              : "bg-white text-[var(--primary-color)] hover:bg-orange-50"
              }`}
          >
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl transition-colors duration-200 gap-1.5 ${isScrolled
              ? "hover:bg-orange-50"
              : "hover:bg-white/15 border border-white/20"
              }`}
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 ${isScrolled ? "bg-[var(--text-color)]" : "bg-white"} ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${isScrolled ? "bg-[var(--text-color)]" : "bg-white"} ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${isScrolled ? "bg-[var(--text-color)]" : "bg-white"} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className={`container-custom pb-4 pt-2 border-t mt-3 ${isScrolled ? "border-[var(--border-color)] bg-white" : "border-white/15 bg-black/60 backdrop-blur-xl"}`}>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${pathname === link.href
                    ? isScrolled
                      ? "text-[var(--primary-color)] bg-orange-50"
                      : "text-[var(--secondary-color)] bg-white/15"
                    : isScrolled
                      ? "text-[var(--text-muted)] hover:text-[var(--primary-color)] hover:bg-orange-50"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/rooms"
                className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm bg-[var(--primary-color)] text-white hover:bg-[var(--primary-dark)] transition-colors"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
