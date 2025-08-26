import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Career from "./Components/Career";
import TryNav from "./Components/TryNav";
// import Admin from "./Components/Admin/Admin";
import Contact from "./Components/Contact";
import AboutUs from "./Components/About";
import ProductDetails from "./Components/ProductDetails";
import SmoothFollowCursor from "./Components/SmoothFollowCursor";
import WhatsAppButton from "./Components/WhatsAppButton";
import ScrollToTop from "./Components/ScrollToTop"; // 👈 new component

function App() {
  const [phoneNumber, setPhoneNumber] = useState("+919081399901");
  const [message, setMessage] = useState(
    "Hello! I'm interested in your services."
  );

  // detect mobile (basic check)
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/* Smooth cursor only on desktop */}
      {!isMobile && (
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
        {/* scrolls to top on every route change */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<TryNav />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/:productUName" element={<ProductDetails />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          {/* <Route path="/Admin" element={<Admin />} /> */}
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>

      <WhatsAppButton phoneNumber={phoneNumber} message={message} />
    </>
  );
}

export default App;
