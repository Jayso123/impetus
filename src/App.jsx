import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Career from "./Components/Career";
import TryNav from "./Components/TryNav";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/ProductDetails";
import AboutUs from "./Components/About";
import SmoothFollowCursor from "./Components/SmoothFollowCursor";
import { useEffect, useState } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // only show on tablet/desktop
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Render only for desktop */}
      {isDesktop && (
        <SmoothFollowCursor
          dotColor="rgba(20, 103, 143, 1)"
          borderColor="rgba(20, 103, 143, 1)"
          dotSize={10}
          borderSize={30}
          hoverBorderSize={50}
          dotSpeed={0.4}
          borderSpeed={0.15}
          dotOpacity={1}
          borderOpacity={0.8}
          borderWidth={3}
        />
      )}

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<TryNav />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productUName" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
