import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Promise from "./components/Promise";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import PromoModal from "./components/PromoModal";
import { useEffect, useState } from "react";

function App() {
  const [promoOpen, setPromoOpen] = useState(false);

  // Show every time user opens site (no localStorage)
  useEffect(() => {
    setPromoOpen(true);
  }, []);
  return (
    <div className="bg-dark text-white font-primary">
      <PromoModal
        isOpen={promoOpen}
        onClose={() => setPromoOpen(false)}
        imageSrc="popup/PLATTER.jpg"   // put promo.jpg in /public
        alt="Platter"
      />
      <Navbar />
      <Hero />
      <About />
      {/* <Menu /> */}
      <Gallery />
      {/* <Promise /> */}
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
