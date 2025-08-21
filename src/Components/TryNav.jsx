import { NavLink } from "react-router-dom";
import {
  FaChevronRight,
  FaIndustry,
  FaTools,
  FaRuler,
  FaDatabase,
  FaCog,
  FaRocket,
  FaLightbulb,
  FaStar,
  FaPlay,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import tool1 from "../assets/archteck1.jpg";
import tool2 from "../assets/archteck3.jpg";
import tool3 from "../assets/cera1.jpg";
import tool4 from "../assets/cera2.jpg";
import tool5 from "../assets/carmex1.jpg";
import tool6 from "../assets/carmex2.jpg";
import tool7 from "../assets/Emkaypp1.png";
import tool8 from "../assets/Emkaypp6.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function TryNav() {
  return (
    <>
      <Navbar />

      <div className="relative isolate overflow-hidden bg-white pt-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-sky-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl animate-pulse-slower"></div>
          {/* Geometric patterns */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-400 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-float-delayed"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-300 rounded-full opacity-50 animate-float-slow"></div>
        </div>

        {/* Hero Section */}
        <div className="relative px-4 -top-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 sm:py-32">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-8">
                {/* Simple Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-sm font-medium animate-fade-in">
                  <FaIndustry className="w-4 h-4 mr-2" />
                  Industrial Solutions Leader
                </div>

                {/* Clean Hero Text */}
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-up">
                    <span className="block text-sky-600 mb-2">Impetus</span>
                    <span className="block text-gray-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                      Techno Solutions
                    </span>
                  </h1>
                </div>

                {/* Clean Description */}
                <div className="space-y-4 animate-fade-in-delayed">
                  <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                    Engineering Excellence in Industrial Solutions
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl lg:max-w-none">
                    We deliver premium lubricants, precision instruments,
                    storage systems, and professional tools that drive
                    industrial productivity forward.
                  </p>
                </div>

                {/* Simple CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-8 animate-fade-in-up">
                  <NavLink
                    to="/AboutUs"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <FaShield className="w-5 h-5 mr-2" />
                    About Us
                  </NavLink>
                  <NavLink
                    to="/Products"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-sky-600 bg-white border-2 border-sky-600 rounded-lg hover:bg-sky-50 transform hover:-translate-y-1 transition-all duration-300 group"
                  >
                    View Products
                    <FaChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </NavLink>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 text-sm text-gray-500 animate-fade-in-up">
                  <div className="flex items-center gap-2">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span>500+ Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShield className="w-4 h-4 text-green-500" />
                    <span>25+ Years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRocket className="w-4 h-4 text-blue-500" />
                    <span>10K+ Products</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Images */}
              <div className="relative lg:ml-8 animate-fade-in-right">
                {/* Main Hero Image */}
                <div className="relative">
                  <div className="aspect-[6/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-sky-100 to-sky-200">
                    <Slider {...settings} className="h-full rounded-2xl">
                      {/* <img
                        src={tool1}
                        alt="Industrial manufacturing facility"
                        className="w-auto h-auto object-none hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool2}
                        alt="Industrial tools and equipment"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      /> */}
                      {/* <img
                        src={tool3}
                        alt="Precision measuring instruments"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      /> */}
                      <img
                        src={tool4}
                        alt="Precision measuring instruments"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                      {/* <img
                        src={tool5}
                        alt="Precision measuring instruments"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool6}
                        alt="Precision measuring instruments"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      /> */}
                      <img
                        src={tool7}
                        alt="Precision measuring instruments"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool8}
                        alt="Precision measuring instruments"
                        className="w-auto h-auto  object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Slider>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  {/* Floating Cards (unchanged) */}
                  {/* Floating Card 1 - Tools */}{" "}
                  <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform hover:-translate-y-2 transition-all duration-300 animate-float">
                    {" "}
                    <div className="flex items-center gap-3">
                      {" "}
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        {" "}
                        <FaTools className="w-6 h-6 text-orange-600" />{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <p className="font-semibold text-gray-900 text-sm">
                          {" "}
                          Precision Tools{" "}
                        </p>{" "}
                        <p className="text-xs text-gray-500">
                          {" "}
                          Professional Grade{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
                {/* Floating Card 2 - Measuring */}{" "}
                <div className="absolute -bottom-18 z-10 -right-4 bg-white rounded-xl shadow-lg p-4 transform hover:-translate-y-2 transition-all duration-300 animate-float-delayed">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      {" "}
                      <FaRuler className="w-6 h-6 text-green-600" />{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <p className="font-semibold text-gray-900 text-sm">
                        {" "}
                        Measuring Instruments{" "}
                      </p>{" "}
                      <p className="text-xs text-gray-500">
                        High Precision
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                {/* Secondary Images Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Slider {...settings}>
                      <img
                        src={tool3}
                        alt="Precision instruments"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />

                      <img
                        src={tool8}
                        alt="Manufacturing"
                        className="w-auto h-auto pt-16 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool5}
                        alt="Manufacturing"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool6}
                        alt="Manufacturing"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool7}
                        alt="Manufacturing"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Slider>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Slider {...settings}>
                      <img
                        src={tool6}
                        alt="Industrial tools"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />

                      <img
                        src={tool5}
                        alt="Industrial tools"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool8}
                        alt="Industrial tools"
                        className="w-auto h-auto pt-16 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool7}
                        alt="Industrial tools"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <img
                        src={tool3}
                        alt="Precision instruments"
                        className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Slider>
                  </div>
                </div>
                {/* Background Decorative Elements (unchanged) */}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="relative py-20 sm:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium">
                <FaCog className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Industry Expertise
                <span className="block text-sky-600 mt-2">That Delivers</span>
              </h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                We understand your industry's unique challenges and provide
                solutions that drive real results.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: FaIndustry,
                  title: "Lubricants & Cutting Oils",
                  description:
                    "Premium quality lubricants that extend equipment life and optimize performance across all industrial applications.",
                  color: "blue",
                },
                {
                  icon: FaRuler,
                  title: "Precision Measuring Tools",
                  description:
                    "State-of-the-art measuring instruments providing unmatched accuracy for critical manufacturing processes.",
                  color: "green",
                },
                {
                  icon: FaDatabase,
                  title: "Smart Storage Solutions",
                  description:
                    "Efficient storage systems designed to maximize space utilization and streamline workflow operations.",
                  color: "purple",
                },
                {
                  icon: FaTools,
                  title: "Professional Hand Tools",
                  description:
                    "Ergonomically designed, precision-crafted tools trusted by professionals for demanding industrial tasks.",
                  color: "orange",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 text-white transform group-hover:scale-110 transition-transform duration-300 ${
                      feature.color === "blue"
                        ? "bg-blue-500"
                        : feature.color === "green"
                        ? "bg-green-500"
                        : feature.color === "purple"
                        ? "bg-purple-500"
                        : "bg-orange-500"
                    }`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 bg-sky-600">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-700"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Trusted Across Industries
              </h3>
              <div className="w-20 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Happy Clients", icon: FaStar },
                { number: "10K+", label: "Products Delivered", icon: FaRocket },
                { number: "25+", label: "Years Experience", icon: FaShield },
                { number: "24/7", label: "Expert Support", icon: FaLightbulb },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm sm:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-medium">
                <FaRocket className="w-4 h-4 mr-2" />
                Ready to Get Started?
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Let's Build Something
                <span className="block text-sky-600 mt-2">
                  Amazing Together
                </span>
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Contact us today to discover how our industrial solutions can
                optimize your operations and drive growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <NavLink
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get In Touch
                </NavLink>
                <NavLink
                  to="/Products"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Browse Products
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite 2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        /* Mobile Optimizations */
        @media (max-width: 640px) {
          .transform:hover {
            transform: translateY(-4px) !important;
          }
        }

        /* Responsive adjustments for images */
        @media (max-width: 1024px) {
          .animate-fade-in-right {
            animation: fade-in 1s ease-out 0.3s forwards;
          }
        }
      `}</style>
    </>
  );
}
