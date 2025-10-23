import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Promise from "./components/Promise";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="bg-dark text-white font-primary">
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
