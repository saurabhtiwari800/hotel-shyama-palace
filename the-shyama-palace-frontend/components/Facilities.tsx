interface Facility {
  icon: string;
  title: string;
  description: string;
}

const facilities: Facility[] = [
  {
    icon: "❄️",
    title: "AC Rooms",
    description:
      "Every room is equipped with modern air conditioning for your complete comfort.",
  },
  {
    icon: "📶",
    title: "Free WiFi",
    description:
      "High-speed internet access throughout the property, completely free.",
  },
  {
    icon: "🚗",
    title: "Free Parking",
    description:
      "Ample secure parking space for cars, two-wheelers, and buses.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Friendly",
    description:
      "Specially designed suites and facilities for families on pilgrimage.",
  },
  {
    icon: "🍽️",
    title: "Restaurant -- Opening Soon",
    description:
      "Vegetarian cuisine celebrating authentic flavours of Uttar Pradesh.",
  },
  {
    icon: "🔒",
    title: "24/7 Security",
    description:
      "Round-the-clock security and reception ensuring your safe stay.",
  },
  {
    icon: "🧺",
    title: "Laundry Service",
    description:
      "Same-day laundry and dry-cleaning services available on request.",
  },
  {
    icon: "🛕",
    title: "Temple Access",
    description:
      "Guided walks and transport arrangements to Vindhyavasini Mata Dham.",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament">
            <span className="text-[var(--primary-color)] text-xl">🕉️</span>
          </div>
          <span className="badge-primary mb-4 inline-block">
            Our Amenities
          </span>
          <h2 className="section-title mb-3">
            Everything You Need for a{" "}
            <span className="text-gradient">Perfect Stay</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We&apos;ve thoughtfully curated every amenity to make your
            pilgrimage and leisure stay comfortable, convenient, and memorable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group p-6 rounded-xl border border-[var(--border-color)] bg-[var(--background-color)] hover:bg-white hover:border-[var(--primary-color)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[var(--primary-color)]">
                <span className="group-hover:grayscale-0">{facility.icon}</span>
              </div>
              <h3 className="font-display font-semibold text-[var(--text-color)] text-base mb-2 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                {facility.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
