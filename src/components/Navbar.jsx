import { useState } from "react";
import { Link } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
// import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "order", label: "Order Now" },
    { id: "contact", label: "Contact" },
  ];

  const goHome = () => {
    // navigate("/")
    window.scrollTo( {top: 0, behavior: "smooth"});
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/90 via-[#1A1A1A]/80 to-black/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <img src="/Eight-logo-off-white.png" alt="Eight Indian Bistro" className="h-10" style={{cursor: "pointer"}} onClick={goHome} />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {/* {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={600}
              className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors font-secondary tracking-wide"
            >
              {item.label}
            </Link>
          ))} */}

          <Link
              key="about"
              to="about"
              smooth={true}
              duration={600}
              className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors font-secondary tracking-wide"
            >
              About
            </Link>
            <a
              href="/pdfs/EightIndianBistro_FullMenu.pdf"
              target="_blank"
              className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors font-secondary tracking-wide"
            >
              Menu
            </a>
            <Link
              key="gallery"
              to="gallery"
              smooth={true}
              duration={600}
              className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors font-secondary tracking-wide"
            >
              Gallery
            </Link>
            <a
              href="https://order.toasttab.com/online/eightindianbistro"
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors font-secondary tracking-wide"
            >
              Order Now
            </a>
            <Link
              key="contact"
              to="contact"
              smooth={true}
              duration={600}
              className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors font-secondary tracking-wide"
            >
              Contact
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-turmeric text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 flex flex-col items-center space-y-3 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={600}
              className="cursor-pointer text-gray-200 hover:text-turmeric transition-colors font-secondary"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
