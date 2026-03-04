import ParallaxSection from "../components/ParallaxSection";
import Contact from "./Contact";
import InquiryForm from "../components/InquiryForm";

export default function PrivateParty() {

  const scrollToEventForm = (e) => {
    e.preventDefault();

    const el = document.getElementById("event-form");
    if (!el) return;

    // Smooth scroll to section
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="pt-10">
      {/* HERO */}
      <ParallaxSection
        bgImage="/images/gallery/7.jpg"
        overlayClassName="bg-black/65"
        className="min-h-[70vh] flex items-center"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="font-primary text-3xl sm:text-4xl md:text-6xl font-bold text-turmeric drop-shadow-lg">
            Private Parties at Eight Indian Bistro
          </h1>
          <p className="mt-4 max-w-2xl text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            Celebrate birthdays, anniversaries, family gatherings, and office parties
            in a warm, contemporary South Indian setting—custom menus, flexible seating,
            and a team that makes hosting effortless.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+17325159466"
              className="rounded-xl bg-turmeric px-5 py-3 font-semibold text-black hover:opacity-90"
            >
              Call to Book
            </a>
            <button
              onClick={scrollToEventForm}
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              Plan Your Event
            </button>
          </div>
        </div>
      </ParallaxSection>

      {/* WHY HOST WITH US */}
      <section style={{ backgroundColor: '#5F4A2F'}} className=" py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold text-turmeric">
            Make your celebration effortless
          </h2>
          <p className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            From décor-friendly layouts to customized spice levels, we’ll help you create
            a memorable experience—without the stress.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Customized menus", desc: "Veg & non-veg options, South Indian classics, and crowd favorites." },
              { title: "Flexible formats", desc: "Buffet, family-style, or curated set menus based on your guest count." },
              { title: "BYOB friendly", desc: "Keep it relaxed—bring your favorite bottle and celebrate." },
              { title: "Great Value", desc: "Quality food, fair pricing, and service you can count on." },
              { title: "Warm ambiance", desc: "A modern bistro vibe that feels elevated yet comfortable." },
              { title: "Smooth planning", desc: "Clear communication and timeline planning so your event runs on time." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-white font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-gray-200 text-sm sm:text-base leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES (content inspiration) */}
      <ParallaxSection
        bgImage="/images/gallery/1.jpg"
        overlayClassName="bg-black/70"
        className="py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold text-turmeric">
            Perfect for every occasion
          </h2>
          <p className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            From office gatherings to sweet sixteens, we host celebrations of all kinds—if it’s not listed,
            ask us and we’ll plan it.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Office parties",
              "Birthdays",
              "Sweet sixteens",
              "School events",
              "Engagement celebrations",
              "Cultural gatherings",
            ].map((t) => (
              <div key={t} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                <div className="text-white font-semibold">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* HOW IT WORKS */}
      <section style={{ backgroundColor: '#5F4A2F'}} className=" py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold text-turmeric">
            Simple booking process
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {[
              { step: "1", title: "Share your date", desc: "Tell us the date, time, and estimated guest count." },
              { step: "2", title: "Pick a style", desc: "Buffet, family-style, or curated set menus." },
              { step: "3", title: "Customize", desc: "Choose from a wide range of dishes for your event." },
              { step: "4", title: "Celebrate", desc: "Show up, relax, and let us handle the rest." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-turmeric font-bold text-2xl">{s.step}</div>
                <div className="mt-2 text-white font-semibold">{s.title}</div>
                <p className="mt-2 text-gray-200 text-sm sm:text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD STRIP */}
      <ParallaxSection
        bgImage="/images/gallery/3.jpg"
        overlayClassName="bg-black/65"
        className="py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold text-turmeric">
            A menu built for groups
          </h2>
          <p className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            From crispy dosas and flavorful biryanis to rich curries and classic Indian favorites, we create a spread that's perfect for sharing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/pdfs/EightIndianBistro_FullMenu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15"
            >
              View Full Menu (PDF)
            </a>
          </div>
        </div>
      </ParallaxSection>

      {/* FAQ */}
      <section style={{ backgroundColor: '#5F4A2F'}} className=" py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold text-turmeric">
            FAQs
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              { q: "How far in advance should we book?", a: "For weekends, we recommend booking 2–3 weeks ahead. Weekdays may have more flexibility." },
              { q: "Can you do vegetarian-only events?", a: "Absolutely. We can build a full vegetarian menu with South Indian classics and modern favorites." },
              { q: "Is BYOB allowed?", a: "Yes—BYOB is welcome. If you have questions, call us and we’ll guide you." },
              { q: "Do you offer catering for the same event?", a: "Yes—if you want add-ons or live stations, we can discuss catering-style service as well." },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-white font-semibold">{f.q}</div>
                <p className="mt-2 text-gray-200 text-sm sm:text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection
        id="event-form"
        bgImage="/images/gallery/4.jpg"
        overlayClassName="bg-black/70"
        className="py-16"
      >
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-primary text-2xl sm:text-3xl md:text-5xl font-bold text-turmeric">
              Ready to plan your event?
            </h2>
            <p className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Tell us your date, guest count, and vibe. We’ll take care of the details—from setup to service.
            </p>

            <InquiryForm subject="Private Party"/>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+17325159466"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>        
      </ParallaxSection>
      <Contact />
    </main>
  );
}