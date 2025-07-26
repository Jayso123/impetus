import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import about from "../assets/about.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({
    companyHistory: "",
    stats: {
      distributors: 0,
      products: 0,
      employees: 0,
      teamMembers: 0,
    },
    images: [bg, bg2, bg3, bg4],
    location: "Vadodara",
    foundedYear: 2024,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setIsLoading(true);
      // Simulating API call
      setTimeout(() => {
        setAboutData({
          companyHistory:
            "Founded in 2024 in Vadodara, we have grown to become one of the leading manufacturers of machine tools in India. Our commitment to quality, innovation, and customer satisfaction has helped us build a strong reputation in the industry. We are pleased to introduce ourselves as Solution provider to your esteemed organization. As the name 'Impetus' suggests, we help our customers to drive productivity and move industry along by delivering most productive solutions, which are being developed and introduced continuously.",
          stats: {
            distributors: 200,
            products: 150,
            employees: 100,
            teamMembers: 50,
          },
          images: [bg, bg2, bg3, bg4],
          location: "Vadodara",
          foundedYear: 2024,
        });
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching about data:", error);
      setIsLoading(false);
    }
  };

  // Simple counter hook replacement
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersStarted) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [countersStarted, end, duration]);

    return count;
  };

  const stats = [
    { title: "Distributors", value: aboutData.stats.distributors, icon: "🏢" },
    { title: "Products", value: aboutData.stats.products, icon: "🔧" },
    { title: "Employees", value: aboutData.stats.employees, icon: "👥" },
    { title: "Team Members", value: aboutData.stats.teamMembers, icon: "🤝" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === aboutData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? aboutData.images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [aboutData.images.length]);

  // Start counters when component mounts
  useEffect(() => {
    const timer = setTimeout(() => setCountersStarted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const CounterComponent = ({ value }) => {
    const count = useCounter(value);
    return <span>{count}+</span>;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8 mt-16">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500 mb-4">
                About Us
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Leading Machine Tools Manufacturer in Vadodara
              </p>
            </div>

            {/* Image Gallery - Mobile Optimized */}
            {aboutData.images.length > 0 && (
              <div className="relative w-full mb-8 sm:mb-12">
                <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-200">
                  <img
                    src={aboutData.images[currentImageIndex]}
                    alt={`Company image ${currentImageIndex + 1}`}
                    className="w-full sm:h-64 md:h-80 lg:h-96 object-cover"
                  />

                  {/* Navigation Buttons - Hidden on very small screens */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 hidden xs:block"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 hidden xs:block"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                    {aboutData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex === index
                            ? "bg-white w-3 sm:w-4"
                            : "bg-white/50"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex justify-center mt-4 space-x-4 xs:hidden">
                  <button
                    onClick={prevImage}
                    className="bg-white text-gray-800 p-2 rounded-full shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white text-gray-800 p-2 rounded-full shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    <CounterComponent value={stat.value} />
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company History Section */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                    Our Story
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg text-center lg:text-left">
                    {aboutData.companyHistory}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-200 group">
                    <img
                      src={about}
                      alt="Our Company Story"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        {/* <div className="bg-sky-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Ready to drive productivity with our solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors duration-300">
              Contact Us Today
            </button>
            <button className="w-full sm:w-auto border border-sky-500 text-sky-500 px-6 py-3 rounded-lg font-semibold hover:bg-sky-500 hover:text-white transition-colors duration-300">
              View Our Products
            </button>
          </div>
        </div>
      </div> */}
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
