import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PRO from "./Components/PRO";
import Career from "./Components/Career";
import TryNav from "./Components/TryNav";
import Admin from "./Components/Admin/Admin";
import Contact from "./Components/Contact";
import AboutUs from "./components/AboutUs";
import SmoothFollowCursor from "./Components/SmoothFollowCursor";
// import ScrollAnimation from "./Components/Bin/ScrollAnimation";

function App() {
  return (
    <>
      {/* <Contact /> */}
      {/* <div className="min-h-screen w-full flex items-center justify-center"> */}
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
      <Router>
        <Routes>
          <Route path="/" element={<TryNav />} />
          <Route path="/Pro" element={<PRO />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
      {/* </div> */}
      {/* {/* <ScrollAnimation /> */}
    </>
  );
}

export default App;
