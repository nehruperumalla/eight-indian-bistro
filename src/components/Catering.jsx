import ParallaxSection from "../components/ParallaxSection";
import Contact from "./Contact";
import InquiryForm from "../components/InquiryForm";

export default function Catering() {
  const scrollToEventForm = (e) => {
    e.preventDefault();

    const el = document.getElementById("catering-event-form");
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
            Catering & Tray Orders by Eight Indian Bistro
          </h1>
          <p className="mt-4 max-w-2xl text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            Make your event memorable with authentic South Indian catering—fresh, flavorful,
            and beautifully presented.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/pdfs/Catering_Menu_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15"
            >
              View Tray Order Menu (PDF)
            </a>

            <a
              href="tel:+17325159466"
              className="rounded-xl bg-turmeric px-5 py-3 font-semibold text-black hover:opacity-90"
            >
              Call to Book: 732 515-9466
            </a>
          </div>

        </div>
      </ParallaxSection>

      {/* CTA */}
      <section style={{ backgroundColor: '#5F4A2F'}} className=" py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-5xl font-bold text-turmeric">
            Send your catering request
          </h2>
          <p className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Email us your date, guest count, dietary preferences, and delivery/pickup needs.
          </p>

          <InquiryForm subject="Catering"/>

          {/* <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+17325159466"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Call
            </a>
          </div> */}
        </div>
      </section>

      {/* STATIONS (inspiration) */}
      <ParallaxSection
        id="catering-event-form"
        bgImage="/images/gallery/3.jpg"
        overlayClassName="bg-black/70"
        className="py-16"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold text-turmeric">
            Catering stations & packages
          </h2>
          <p className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Choose from station-style experiences and curated menus for your event.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Live stations", desc: "Interactive, freshly prepared dishes for a memorable experience." },
              { title: "Appetizer stations", desc: "Starters to kick off your event with bold flavors." },
              { title: "Main course stations", desc: "Hearty, crowd-pleasing curries and staples for every palate." },
              { title: "Specialty stations", desc: "Theme-based dishes customized to your event style." },
              { title: "Dessert stations", desc: "Sweet finishes to close the meal on a high note." },
              { title: "South Indian favorites", desc: "Dosa/Idli/Vada-style options and classic accompaniments." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-gray-200 text-sm sm:text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* EVENT TYPES (inspiration list) */}
      <ParallaxSection
        // bgImage="/images/gallery/7.jpg"
        overlayClassName="bg-black/65"
        className="bg-dark py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold text-turmeric">
            Great for any event
          </h2>
          <p className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            We cater birthdays, weddings, corporate events, school events, and more.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Birthdays",
              "Weddings",
              "Sweet Sixteens",
              "Office Parties",
              "Holiday Parties",
              "Corporate Events",
              "School Events",
              "Cultural gatherings",
            ].map((e) => (
              <div key={e} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 text-gray-100">
                {e}
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* PROMISE (inspiration) */}
     <section style={{ backgroundColor: '#5F4A2F'}} className=" py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold text-turmeric">
            Our promise
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              "Fresh, flavorful, and beautifully presented dishes.",
              "Hassle-free planning with customizable menus.",
              "A commitment to ensuring you and your guests leave satisfied.",
            ].map((p) => (
              <div key={p} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-200 text-sm sm:text-base md:text-lg max-w-4xl leading-relaxed">
            Share your requests and we’ll take care of the rest—advance notice helps us craft the perfect menu.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}