import Link from "next/link";
import { WhatsappService } from "@/utils/WhatsappService";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Facilities", href: "/#facilities" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const roomLinks = [
  { label: "Standard Room", href: "/rooms" },
  { label: "Deluxe Room", href: "/rooms" },
  { label: "Family Suite", href: "/rooms" },
  { label: "Premium Suite", href: "/rooms" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1a1007] text-gray-300"
      role="contentinfo"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)]" />

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)] flex items-center justify-center text-white text-lg shadow-sm">
                🕌
              </div>
              <div>
                <span className="block font-display font-bold text-white text-lg leading-none">
                  Hotel Shyama
                </span>
                <span className="block text-[var(--primary-light)] text-xs font-semibold tracking-wider uppercase leading-none mt-0.5">
                  Palace
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              A premium hotel near the sacred Vindhyavasini Mata Dham,
              Vindhyachal — where divine blessings meet modern comfort.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200"
              >
                f
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200"
              >
                📷
              </a>
              {/* WhatsApp */}
              <a
                href={WhatsappService.getBookingUrl()}
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white text-base font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[var(--primary-light)] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)] shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Room Types */}
          <div>
            <h3 className="font-display text-white text-base font-semibold mb-5">
              Our Rooms
            </h3>
            <ul className="space-y-3">
              {roomLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[var(--primary-light)] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary-color)] shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-white text-base font-semibold mb-5">
              Contact Us
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex gap-3 text-sm text-gray-400">
                <span className="mt-0.5 text-base shrink-0">📍</span>
                <span>
                  Hotel Shyama Palace,
                  <br />
                  Near Atal Chowk, <br />
                  In front of Indian Oil Petrol Pump <br />
                  Vindhyachal, Mirzapur,
                  <br />
                  Uttar Pradesh, India — 231307
                </span>
              </div>
              <div className="flex gap-3 text-sm text-gray-400">
                <span className="text-base shrink-0">📞</span>
                <a
                  href="tel:+919876543210"
                  className="hover:text-[var(--primary-light)] transition-colors"
                >
                  +91 8299034747 <br /> +91 9125436270
                </a>
              </div>
              <div className="flex gap-3 text-sm text-gray-400">
                <span className="text-base shrink-0">✉️</span>
                <a
                  href="mailto:info@theshyamapalace.com"
                  className="hover:text-[var(--primary-light)] transition-colors"
                >
                  official.hotelshyama@gmail.com
                </a>
              </div>
              <div className="flex gap-3 text-sm text-gray-400">
                <span className="text-base shrink-0">🕐</span>
                <span>Check-in: 12:00 PM | Check-out: 11:00 AM</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Hotel Shyama Palace. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <span className="text-[var(--primary-color)] text-sm">🙏</span> in
            Vindhyachal, India
          </p>
        </div>
      </div>
    </footer>
  );
}
