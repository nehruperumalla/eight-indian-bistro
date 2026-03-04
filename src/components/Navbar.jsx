import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMobile = () => setMenuOpen(false);

  // Works from ANY page: if not on home, go home first, then scroll
  const goToSection = (id) => {
    closeMobile();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      return;
    }

    // If already on home, use react-scroll for smooth
    // (or scrollIntoView, both work)
  };

  const goHomeTop = () => {
    closeMobile();
    if (location.pathname !== "/") navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#5F4A2F] backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <img
          src="/Eight-logo-off-white.png"
          alt="Eight Indian Bistro"
          className="h-10 cursor-pointer"
          onClick={goHomeTop}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {/* Home sections (react-scroll) */}
          <ScrollLink
            to="about"
            smooth
            duration={600}
            offset={-90}
            className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors tracking-wide"
            onClick={() => goToSection("about")}
          >
            About
          </ScrollLink>

          <a
            href="/pdfs/EightIndianBistro_FullMenu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors tracking-wide"
          >
            Menu
          </a>

          <ScrollLink
            to="gallery"
            smooth
            duration={600}
            offset={-90}
            className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors tracking-wide"
            onClick={() => goToSection("gallery")}
          >
            Gallery
          </ScrollLink>

          <a
            href="https://order.toasttab.com/online/eightindianbistro"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors tracking-wide"
          >
            Order Now
          </a>

         

          {/* New routed pages (react-router-dom) */}
          <RouterLink
            to="/private-party"
            className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors tracking-wide"
          >
            Party Hall
          </RouterLink>

          <RouterLink
            to="/catering"
            className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors tracking-wide"
          >
            Catering
          </RouterLink>
           <ScrollLink
            to="contact"
            smooth
            duration={600}
            offset={-90}
            className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors tracking-wide"
            onClick={() => goToSection("contact")}
          >
            Contact
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-turmeric text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 flex flex-col items-center space-y-3 pb-4 pt-2">
          <ScrollLink
            to="about"
            smooth
            duration={600}
            offset={-90}
            className="cursor-pointer text-turmeric hover:opacity-90 transition-colors"
            onClick={() => {
              goToSection("about");
            }}
          >
            About
          </ScrollLink>

          <a
            href="/pdfs/EightIndianBistro_FullMenu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-turmeric hover:opacity-90 transition-colors"
            onClick={closeMobile}
          >
            Menu
          </a>

          <ScrollLink
            to="gallery"
            smooth
            duration={600}
            offset={-90}
            className="cursor-pointer text-turmeric hover:opacity-90 transition-colors"
            onClick={() => {
              goToSection("gallery");
            }}
          >
            Gallery
          </ScrollLink>

          <a
            href="https://order.toasttab.com/online/eightindianbistro"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-turmeric hover:opacity-90 transition-colors"
            onClick={closeMobile}
          >
            Order Now
          </a>

          

          {/* Routed pages */}
          <RouterLink
            to="/private-party"
            className="text-turmeric font-semibold hover:opacity-90"
            onClick={closeMobile}
          >
            Party Hall
          </RouterLink>

          <RouterLink
            to="/catering"
            className="text-turmeric font-semibold hover:opacity-90"
            onClick={closeMobile}
          >
            Catering
          </RouterLink>

          <ScrollLink
            to="contact"
            smooth
            duration={600}
            offset={-90}
            className="cursor-pointer text-turmeric hover:opacity-90 transition-colors"
            onClick={() => {
              goToSection("contact");
            }}
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}