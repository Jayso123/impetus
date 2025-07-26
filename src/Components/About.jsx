import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import about from "../assets/about.png";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/about-us");
      const data = await response.json();
      setAboutData(data);
    } catch (error) {
      console.error("Error fetching about data:", error);
      // Set default values if API fails
      setAboutData({
        companyHistory:
          "Founded in 2024 in Vadodara, we have grown to become one of the leading manufacturers of machine tools in India. Our commitment to quality, innovation, and customer satisfaction has helped us build a strong reputation in the industry, We are pleased to introduce ourselves as Solution provider to your esteemed organization. As the name 'Impetus' suggests, we help our customers to drive productivity and move industry along by delivering most productive solutions, which are being developed and introduced continuously.",
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
    } finally {
      //   setIsLoading(false);
    }
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
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-2xl">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8 mt-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-sky-500 sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Leading Machine Tools Manufacturer in Vadodara
            </p>
          </motion.div>

          {/* Image Gallery */}
          {aboutData.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative max-w-7xl mx-auto"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={aboutData.images[currentImageIndex]}
                  alt={`Company image ${currentImageIndex + 1}`}
                  className="w-full h-[450px] object-cover"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {aboutData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === index
                          ? "bg-white w-4"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <br />
          <br />

          {/* Stats Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16 mt-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  />
                  +
                </h3>
                <p className="text-gray-600 mt-2">{stat.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Company History Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-16"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 -mt-10">
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {aboutData.companyHistory}
                </p>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ height: "310px", width: "102%" }}
                  className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300"
                >
                  <img
                    src={about}
                    alt="Our Company Story"
                    className="w-full h-[300px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
